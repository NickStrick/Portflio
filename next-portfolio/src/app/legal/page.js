import Link from 'next/link';
import '../../components/styles/Legal.scss';

export const metadata = {
  title: 'Support & Legal',
  description: 'Support, privacy, and disclaimer information for nickolasstricker.com and Stricker Digital.',
};

const LAST_UPDATED = 'October 4, 2026';

export default function Page() {
  return (
    <div className="content-container">
      <div className="section-container">
        <div className="section-content legal">
          <h1 className="port-head">Support &amp; Legal</h1>
          <p className="legal-updated">Last updated {LAST_UPDATED}</p>

          <nav className="legal-toc" aria-label="On this page">
            <a href="#support">Support</a>
            <a href="#privacy">Privacy</a>
            <a href="#disclaimer">Disclaimer</a>
          </nav>

          <section id="support">
            <h2>Support</h2>
            <p>Have a question about an audit, a project, or something on this site? Reach me directly:</p>
            <ul>
              <li>
                Email: <a href="mailto:nickolasstricker@gmail.com">nickolasstricker@gmail.com</a>
              </li>
              <li>
                Call or text: <a href="tel:+16304058427">(630) 405-8427</a>
              </li>
              <li>
                Book a call:{' '}
                <a href="https://calendly.com/nickolasstricker/stricker-digital-discussion" target="_blank" rel="noopener noreferrer">
                  Calendly
                </a>
              </li>
            </ul>
            <p>
              Current clients: include your business or site name in the subject line so I can find your project
              quickly.
            </p>
            <p>
              Revenue Leak Audit guarantee: if your problems aren&apos;t crystal clear within 24 hours of delivery, you
              get a full refund. Full details are on the{' '}
              <a href="https://www.strickerdigital.com/audits" target="_blank" rel="noopener noreferrer">
                audit page
              </a>
              .
            </p>
          </section>

          <section id="privacy">
            <h2>Privacy</h2>
            <p>This site is a portfolio. It has no accounts or logins.</p>
            <ul>
              <li>
                <strong>Contact form:</strong> the name, email, and message you submit are checked on my server and
                saved to a private Google Form so I can reply. I don&apos;t sell or share them, and I delete them on
                request. Your IP address is used briefly to limit spam and isn&apos;t stored.
              </li>
              <li>
                <strong>Contact buttons</strong> open your own email app or copy my details to your clipboard.
              </li>
              <li>
                <strong>Analytics:</strong> I use Vercel Web Analytics to count page views and see which pages are
                useful. It collects aggregate, anonymous data and does not use cookies.
              </li>
              <li>
                <strong>Video:</strong> the intro video uses YouTube&apos;s privacy-enhanced mode and only loads from
                YouTube when you press play.
              </li>
              <li>
                <strong>Outside links</strong> such as LinkedIn, YouTube, Instagram, GitHub, Calendly, and Stricker
                Digital are run by those services and follow their own privacy policies.
              </li>
            </ul>
            <p>
              Questions about your data? Email{' '}
              <a href="mailto:nickolasstricker@gmail.com">nickolasstricker@gmail.com</a>.
            </p>
          </section>

          <section id="disclaimer">
            <h2>Disclaimer</h2>
            <ul>
              <li>
                <strong>Results:</strong> numbers in case studies and on the Services page (for example, conversion
                and performance gains) come from specific client engagements and how they were measured. They show
                what happened on those projects, not a promise of the same result for yours.
              </li>
              <li>
                <strong>Employer work:</strong> descriptions of my work at Expocad by A.C.T are my own account of my
                role. Views on this site are mine and don&apos;t represent any employer.
              </li>
              <li>
                <strong>Testimonials</strong> are from real clients and are quoted as they wrote them.
              </li>
              <li>
                <strong>Trademarks</strong> and logos belong to their owners. Showing them here doesn&apos;t mean they
                endorse me or this site.
              </li>
              <li>
                <strong>General information:</strong> content on this site is for general information and isn&apos;t
                professional, legal, or financial advice for your specific situation.
              </li>
            </ul>
          </section>

          <p className="legal-back">
            <Link href="/contact">Get in touch →</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
