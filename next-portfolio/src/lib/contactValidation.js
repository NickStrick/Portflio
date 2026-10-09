// Shared by the contact form (instant feedback) and /api/contact (the real gate).
// Never trust the client copy: the API route re-runs everything here.

export const LIMITS = {
  name: { min: 2, max: 100 },
  email: { max: 254 },
  message: { min: 10, max: 2000 },
  maxLinks: 1,
  minFillMs: 3000, // humans can't fill the form in under ~3s
};

// Letters (any language), spaces, and common name punctuation only.
const NAME_RE = /^[\p{L}\p{M}' .,-]+$/u;
// Practical email check; deliverability is the inbox's problem, not ours.
const EMAIL_RE = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const URL_RE = /(https?:\/\/|www\.)\S+/gi;
// Markup / template / injection probes that no real message needs.
const PROBE_RE = /<\s*\/?\s*(script|iframe|img|svg|object|embed|a)\b|javascript:|on\w+\s*=|\{\{.*\}\}|\$\{.*\}/i;

// Normalize lookalike characters and drop control chars (keep newlines/tabs in messages).
export function clean(value, { multiline = false } = {}) {
  if (typeof value !== 'string') return '';
  let out = value.normalize('NFKC');
  out = multiline
    ? out.replace(/[^\P{C}\n\t]/gu, '').replace(/\r\n?/g, '\n').replace(/\n{3,}/g, '\n\n')
    : out.replace(/\p{C}/gu, '').replace(/\s+/g, ' ');
  return out.trim();
}

export function validateContact(input) {
  const data = {
    name: clean(input?.name),
    email: clean(input?.email).toLowerCase(),
    message: clean(input?.message, { multiline: true }),
  };
  const errors = {};

  if (data.name.length < LIMITS.name.min || data.name.length > LIMITS.name.max) {
    errors.name = `Name must be ${LIMITS.name.min}-${LIMITS.name.max} characters.`;
  } else if (!NAME_RE.test(data.name)) {
    errors.name = 'Name can only contain letters, spaces, and . , \' -';
  }

  if (!data.email || data.email.length > LIMITS.email.max || !EMAIL_RE.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }

  if (data.message.length < LIMITS.message.min || data.message.length > LIMITS.message.max) {
    errors.message = `Message must be ${LIMITS.message.min}-${LIMITS.message.max} characters.`;
  } else if ((data.message.match(URL_RE) || []).length > LIMITS.maxLinks) {
    errors.message = `Please include at most ${LIMITS.maxLinks} link.`;
  } else if (PROBE_RE.test(data.message) || PROBE_RE.test(data.name)) {
    errors.message = 'Message contains content that is not allowed.';
  }

  return { data, errors, valid: Object.keys(errors).length === 0 };
}

// Spreadsheets run cells starting with these as formulas (CSV/formula injection),
// so prefix them with a quote before the response lands in Google Sheets.
export function neutralizeFormula(value) {
  return /^[=+\-@\t\r]/.test(value) ? `'${value}` : value;
}
