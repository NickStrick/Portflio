'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlassChart,
  faScrewdriverWrench,
  faCircleCheck,
  faShieldHalved,
  faCertificate,
} from '@fortawesome/free-solid-svg-icons';
import Socials from '../socials/Socials';
import Testimonials from '../testimonials/Testimonials';

import './Services.scss';

const AUDIT_URL = 'https://www.strickerdigital.com/audits';
const CALENDLY_URL = 'https://calendly.com/nickolasstricker/stricker-digital-discussion';
const btnClass = 'btn-gradient mt-10 transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none text-white';

const offers = [
  {
    eyebrow: 'Revenue Leak Audit',
    title: 'Find out exactly why visitors leave without buying.',
    icon: faMagnifyingGlassChart,
    blurb: "In 48 hours you'll know what's costing you sales, and exactly what to fix first.",
    price: '$800',
    priceNote: 'one fixed price, no surprise bills',
    bullets: [
      'A clear picture of your store or app, with every trouble spot circled',
      'Your fix list, ranked by money, so you tackle what grows sales first',
      'Speed, checkout, and security checked, the three places buyers drop off most',
      'A 30-minute call, where we walk through everything together and answer your questions',
    ],
    guarantee: {
      title: 'Clear answers, or your money back',
      text: "If your problems aren't crystal clear within 24 hours of delivery, you get a full refund. No questions asked.",
    },
    cta: { label: 'Get your audit', href: AUDIT_URL, external: true },
  },
  {
    eyebrow: 'Done-for-you fixes',
    title: 'Want it fixed for you?',
    icon: faScrewdriverWrench,
    blurb: 'Skip the to-do list. Get a fixed quote and have every fix built, tested, and shipped, so you can get back to running your business.',
    price: 'Fixed quote',
    priceNote: 'after your audit',
    bullets: [
      'One fixed price, agreed before any work starts',
      'Built, tested, and shipped, by a senior full-stack engineer',
      'Fixes ranked by money, so your sales grow first',
    ],
    cta: { label: 'Get a fixed quote', href: '/contact' },
  },
];

const stats = [
  { value: '30%', label: 'more shoppers finished checkout' },
  { value: '22%', label: 'fewer "this is broken" tickets' },
  { value: '48 hrs', label: 'from kickoff to your finished audit' },
];

const steps = [
  { title: 'Audit (48 hrs):', text: 'I check your speed, checkout, and security, and circle every spot where buyers drop off.' },
  { title: 'Walkthrough call:', text: 'We go through your fix list together, ranked by money, and I answer your questions.' },
  { title: 'Fixes shipped:', text: 'Fix it yourself, or get a fixed quote and I build, test, and ship every fix.' },
];

function CtaLink({ href, external, children, className, ...rest }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} {...rest}>
      {children}
    </Link>
  );
}

export default function Services() {
  return (
    <div className="content-container">
      <div className="services section-container">
        <div className="section-content">
          <p className="services-eyebrow">Revenue Leak Audits · Done-for-you fixes</p>
          <h1 className="port-head">More sales from the visitors you already have.</h1>

          <p className="intro-text">
            Your store or app might be quietly losing buyers to{' '}
            <span className="highlight-text">slow pages</span> and{' '}
            <span className="highlight-text">clunky checkouts</span>. Let&apos;s find the leaks, fix them, and turn
            more of your visitors into <span className="highlight-text">paying customers</span>.
          </p>

          <div className="btn-g-wrap">
            <CtaLink data-aos="fade-right" href={AUDIT_URL} external className={btnClass}>
              Get your $800 audit
            </CtaLink>
            <CtaLink data-aos="fade-left" href="/contact" className={`${btnClass} ml`}>
              Get a fixed quote
            </CtaLink>
          </div>

          <h2 className="services-subhead">Find the leaks. Fix the leaks. Grow your sales.</h2>
          <p className="services-subtext">Two simple ways to turn more of your visitors into paying customers.</p>

          <div className="offers-grid">
            {offers.map((offer) => (
              <div className="service-card offer-card" key={offer.eyebrow}>
                <FontAwesomeIcon icon={offer.icon} className="service-icon gradientText" />
                <span className="offer-eyebrow">{offer.eyebrow}</span>
                <h3>{offer.title}</h3>
                <p>{offer.blurb}</p>

                <div className="offer-price">
                  <strong>{offer.price}</strong>
                  <span>/ {offer.priceNote}</span>
                </div>

                <ul className="offer-bullets">
                  {offer.bullets.map((bullet) => (
                    <li key={bullet}>
                      <FontAwesomeIcon icon={faCircleCheck} className="list-icon" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {offer.guarantee ? (
                  <div className="offer-guarantee">
                    <FontAwesomeIcon icon={faShieldHalved} className="list-icon" />
                    <div>
                      <strong>{offer.guarantee.title}</strong>
                      <p>{offer.guarantee.text}</p>
                    </div>
                  </div>
                ) : null}

                <CtaLink href={offer.cta.href} external={offer.cta.external} className="btn-inverted offer-cta">
                  {offer.cta.label}
                </CtaLink>
              </div>
            ))}
          </div>

          <div className="services-stats">
            {stats.map((stat) => (
              <div className="services-stat" key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="workflow">
            <h2>How It Works</h2>
            <ol className="custom-list">
              {steps.map((step) => (
                <li key={step.title}>
                  <span>
                    <FontAwesomeIcon icon={faCertificate} className="list-icon" />
                    <strong>{step.title}</strong>
                  </span>{' '}
                  <span>{step.text}</span>
                </li>
              ))}
            </ol>
          </div>
          <Socials />

          <Testimonials />

          <div className="cta-section">
            <h2>More buyers are one fix away.</h2>
            <p className="cta-text">Find the leaks, get them fixed, and watch more visitors turn into customers.</p>
            <CtaLink href={AUDIT_URL} external className="btn-inverted page-contact">
              Get your $800 audit
            </CtaLink>
            <CtaLink href="/contact" className="btn-inverted page-contact cta-secondary">
              Get a fixed quote
            </CtaLink>
            <CtaLink href={CALENDLY_URL} external className="btn-inverted page-contact cta-secondary">
              Book a call
            </CtaLink>
          </div>
        </div>
      </div>
    </div>
  );
}
