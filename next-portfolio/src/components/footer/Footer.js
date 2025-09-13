'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// ⬇️ Update these paths as needed
import SplitThree from '../../../public/images/splitters/bottom-wave-3';
import NextButton from '../NextButton';

// If you moved the PNG to /public:
import NsLogo from '../../../public/images/NStransDark.png';
import './Footer.scss'

// If Footer.scss was a global stylesheet in CRA, move its content to app/globals.css,
// or convert it to a CSS module (Footer.module.scss) and import that instead.
// import './Footer.scss';

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname() || '/';

  // Derived style (was based on window.location.pathname)
  let footerColor = 'rgb(35,40,40)';
  const styleobj = { paddingTop: '2rem' };

  if (pathname.includes('skills')) {
    footerColor = 'white';
    styleobj.backgroundColor = 'white';
  } else if (pathname.includes('projects') || pathname.includes('experience')) {
    footerColor = 'rgb(60,62,70)';
  }
  if (pathname === '/') {
    styleobj.paddingTop = '12rem';
  }

  function handleEmailClick() {
    window.scrollTo(0, 0);
    router.push('/contact');
  }

  return (
    <div className="footer content-container" style={styleobj}>
      <NextButton />

      <SplitThree fillColor={footerColor} />
      <div className="page-split-padding-dark split-wave-3" style={{ background: footerColor }} />

      <div className="footer-content">
        <button
          className="icon-btn"
          aria-label="GitHub"
          onClick={() => window.open('https://github.com/NickStrick', '_blank', 'noopener,noreferrer')}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>

        <button
          className="icon-btn"
          aria-label="LinkedIn"
          onClick={() =>
            window.open('https://www.linkedin.com/in/nick-stricker-1ba8a7192/', '_blank', 'noopener,noreferrer')
          }
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </button>

        <button className="icon-btn" aria-label="Email / Contact" onClick={handleEmailClick}>
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      </div>

      <div className="footer-end">
        <Image src={NsLogo} alt="NS Logo" className="nslogo" priority  height={200} width={200}/>
        <p>© {new Date().getFullYear()} Stricker Digital</p>
      </div>
    </div>
  );
}
