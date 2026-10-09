import { NextResponse } from 'next/server';
import { LIMITS, validateContact, neutralizeFormula } from '../../../lib/contactValidation';

// Required env (set in Vercel, never committed):
//   GOOGLE_FORM_ID           the long id from .../forms/d/e/<ID>/viewform
//   GOOGLE_FORM_ENTRY_NAME   e.g. entry.123456789
//   GOOGLE_FORM_ENTRY_EMAIL
//   GOOGLE_FORM_ENTRY_MESSAGE
// Optional:
//   TURNSTILE_SECRET_KEY     enables Cloudflare Turnstile verification
//   CONTACT_ALLOWED_ORIGINS  comma-separated extra origins (e.g. preview URLs)

const MAX_BODY_BYTES = 10_000;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_MAX = 3;

// Best-effort per-instance limiter. Serverless instances don't share memory,
// so this slows bursts rather than enforcing a global cap.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > RATE_MAX;
}

function originAllowed(req) {
  const origin = req.headers.get('origin');
  if (!origin) return false;
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host');
  const extra = (process.env.CONTACT_ALLOWED_ORIGINS || '').split(',').map((s) => s.trim()).filter(Boolean);
  try {
    return new URL(origin).host === host || extra.includes(origin);
  } catch {
    return false;
  }
}

async function verifyTurnstile(token, ip) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true;
  if (!token) return false;
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body: new URLSearchParams({ secret, response: token, remoteip: ip }),
  });
  const out = await res.json().catch(() => ({}));
  return out.success === true;
}

const fail = (status, error, extra) => NextResponse.json({ ok: false, error, ...extra }, { status });

export async function POST(req) {
  if (!originAllowed(req)) return fail(403, 'Forbidden.');

  const ip = (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return fail(429, 'Too many messages. Please try again later.');

  if (!(req.headers.get('content-type') || '').includes('application/json')) {
    return fail(415, 'Unsupported content type.');
  }
  const raw = await req.text();
  if (raw.length > MAX_BODY_BYTES) return fail(413, 'Message too large.');

  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail(400, 'Invalid request.');
  }

  // Bot traps: the hidden field must stay empty and the form can't be filled instantly.
  // Pretend success so bots don't learn what tripped them.
  const elapsed = Date.now() - Number(body.startedAt);
  if (body.website || !Number.isFinite(elapsed) || elapsed < LIMITS.minFillMs || elapsed > 24 * 60 * 60 * 1000) {
    return NextResponse.json({ ok: true });
  }

  if (!(await verifyTurnstile(body.turnstileToken, ip))) return fail(400, 'Verification failed. Please retry.');

  const { data, errors, valid } = validateContact(body);
  if (!valid) return fail(400, 'Please fix the highlighted fields.', { errors });

  const { GOOGLE_FORM_ID, GOOGLE_FORM_ENTRY_NAME, GOOGLE_FORM_ENTRY_EMAIL, GOOGLE_FORM_ENTRY_MESSAGE } = process.env;
  if (!GOOGLE_FORM_ID || !GOOGLE_FORM_ENTRY_NAME || !GOOGLE_FORM_ENTRY_EMAIL || !GOOGLE_FORM_ENTRY_MESSAGE) {
    console.error('Contact form env vars are not configured.');
    return fail(500, 'Messaging is temporarily unavailable. Please email instead.');
  }

  const res = await fetch(`https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      [GOOGLE_FORM_ENTRY_NAME]: neutralizeFormula(data.name),
      [GOOGLE_FORM_ENTRY_EMAIL]: neutralizeFormula(data.email),
      [GOOGLE_FORM_ENTRY_MESSAGE]: neutralizeFormula(data.message),
    }),
    redirect: 'manual',
  });
  if (res.status >= 400) {
    console.error('Google Form rejected submission:', res.status);
    return fail(502, 'Could not send your message. Please email instead.');
  }

  return NextResponse.json({ ok: true });
}
