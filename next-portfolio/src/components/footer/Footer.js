'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import SplitThree from '../../../public/images/splitters/bottom-wave-3';
import NextButton from '../NextButton';
import { socialItems, contactDetails } from '../socials/Socials';

import NsLogo from '../../../public/images/NStransDark.png';
import './Footer.scss';

const exploreLinks = [
  { href: '/', label: 'Intro' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/skills', label: 'Skills' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

const workLinks = [
  { href: 'https://www.strickerdigital.com/audits', label: 'Revenue Leak Audit', external: true },
  { href: 'https://calendly.com/nickolasstricker/stricker-digital-discussion', label: 'Book a call', external: true },
  { href: 'https://www.strickerdigital.com', label: 'Stricker Digital', external: true },
  { href: '/NickStricker-SolutionsEngineer-Resume.pdf', label: 'Résumé (PDF)', external: true },
];

const connectLinks = [
  ...socialItems,
  { type: 'github', label: 'GitHub', href: 'https://github.com/NickStrick', icon: faGithub },
  ...contactDetails.map((item) => ({ ...item, label: item.value })),
];

const legalLinks = [
  { href: '/legal#support', label: 'Support' },
  { href: '/legal#privacy', label: 'Privacy' },
  { href: '/legal#disclaimer', label: 'Disclaimer' },
];

function FooterLink({ href, external, children }) {
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="footer-external" aria-hidden="true" />
      </a>
    );
  }
  return <Link href={href}>{children}</Link>;
}

export default function Footer() {
  const pathname = usePathname() || '/';

  let footerColor = 'rgb(35,40,40)';
  const styleobj = { paddingTop: '2rem' };

  if (pathname.includes('projects') || pathname.includes('experience')) {
    footerColor = 'rgb(60,62,70)';
  }
  if (pathname === '/') {
    styleobj.paddingTop = '12rem';
  }

  return (
    <footer className="footer content-container" style={styleobj}>
      <div className="footer-wave-area">
        <NextButton />
        <SplitThree fillColor={footerColor} />
        <div className="page-split-padding-dark split-wave-3" style={{ background: footerColor }} />
      </div>

      <div className="footer-end">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src={NsLogo} alt="NS Logo" className="nslogo" height={96} width={96} />
            <p className="footer-bio">
              Senior Full-Stack Engineer and AWS certified Solutions Architect. Founder of Stricker Digital, helping
              online businesses find what&apos;s costing them sales and fix it.
            </p>
            <p className="footer-location">
              <FontAwesomeIcon icon={faLocationDot} /> Chicago, IL
            </p>
          </div>

          <nav className="footer-col" aria-label="Site">
            <h2>Explore</h2>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={pathname === link.href ? 'active' : undefined}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h2>Work with me</h2>
            <ul>
              {workLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink {...link}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h2>Connect</h2>
            <ul className="footer-connect">
              {connectLinks.map((item) => (
                <li key={item.type}>
                  <a
                    href={item.href}
                    {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    <FontAwesomeIcon icon={item.icon} className="footer-connect-icon" />
                    {/* let a long email wrap at the @ rather than mid-word */}
                    <span>{item.type === 'email' ? item.label.replace('@', '\u200B@') : item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nick Stricker · Stricker Digital</p>
          <ul>
            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
