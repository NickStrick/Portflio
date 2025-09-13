'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import AOS from 'aos';
import 'aos/dist/aos.css';

// ✅ Import the React component from your source, NOT from /public
import DotUnderline from '../../../public/images/DottedLine';
// Footer is fine
import Footer from '../footer/Footer';

export default function ClientShell({ children }) {
  const router = useRouter();
  const pathname = usePathname() || '/';

  const [openNav, setNav] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Derived container classes
  let appContainer = 'app-container';
  const isSecondaryColor = pathname === '/projects' || pathname === '/experience';
  if (pathname === '/experience') appContainer += ' experience-container';
  if (pathname === '/projects') appContainer += ' projects-container';

  function setPage(newPath) {
    if (openNav) setNav(false);
    // Next.js scrolls to top on navigation by default, but keeping your line is harmless:
    window.scrollTo(0, 0);
    router.push(newPath);
  }

  function menuOpen() {
    setNav((v) => !v);
  }

  useEffect(() => {
    cursorStart();
    setTimeout(() => setAnimate(true), 1000);
    AOS.init();

    const handleScroll = () => {
      document.querySelectorAll('#homeSplitOne').forEach((ele) => {
        if (!ele) return;
        const rect = ele.getBoundingClientRect();
        const offsetTop = rect.top + window.scrollY;
        const offset = offsetTop - ele.scrollHeight;

        if (!Array.from(ele.classList || []).includes('footer-wave')) {
          if (window.scrollY > offset) {
            const difference = window.scrollY - offset;
            const percentGrow = Math.min(difference / 15, 25);
            ele.style.transform = `scaleY(1.${percentGrow})`;
          } else {
            ele.style.removeProperty('transform');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Custom cursor elements */}
      <div className="cursor-dot-outline" />
      <div className="cursor-dot" />

      <div id="SaveScreen"><span className="spinner" /></div>
      <div id="SentScreen"><span>Message Sent</span></div>

      <div className={appContainer}>
        {/* NAVBAR */}
        <nav className={`navbar${isSecondaryColor ? ' second-navbar' : ''}`}>
          <div className="container">
            {/* ✅ Use a string path for public assets */}
            <Image
              className="logo-img"
              src="/images/NStrans.png"   // file should be at /public/images/NStrans.png
              width={100}
              height={100}
              alt="NS Logo"
              priority
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="1000"
            />

            <ul
              className={[
                'nav-list',
                openNav ? ' list-open' : '',
                isSecondaryColor ? ' gray-list' : '',
                animate ? ' show-nav' : '',
              ].join(' ')}
            >
              <li className="nav-li">
                <Link onClick={() => setPage('/')} href="/" className={pathname === '/' ? 'nav-link active' : 'nav-link'}>
                  Intro<span>Intro</span>
                </Link>
                <div className={pathname === '/' ? 'nav-underline underline active' : 'nav-underline underline'}>
                  <DotUnderline fillColor="#28da00" />
                </div>
              </li>

              <li className="nav-li">
                <Link onClick={() => setPage('/services')} href="/services" className={pathname === '/services' ? 'nav-link active' : 'nav-link'}>
                  Services<span>Services</span>
                </Link>
                <div className={pathname === '/services' ? 'nav-underline underline active' : 'nav-underline underline'}>
                  <DotUnderline fillColor="#28da00" />
                </div>
              </li>

              <li className="nav-li">
                <Link onClick={() => setPage('/projects')} href="/projects" className={pathname === '/projects' ? 'nav-link active' : 'nav-link'}>
                  Projects<span style={{ whiteSpace: 'nowrap' }}>Projects</span>
                </Link>
                <div className={pathname === '/projects' ? 'nav-underline underline active' : 'nav-underline underline'}>
                  <DotUnderline fillColor="#28da00" />
                </div>
              </li>

              <li className="nav-li">
                <Link onClick={() => setPage('/skills')} href="/skills" className={pathname === '/skills' ? 'nav-link active' : 'nav-link'}>
                  Skills &amp; Certs<span style={{ whiteSpace: 'nowrap' }}>Skills &amp; Certs</span>
                </Link>
                <div className={pathname === '/skills' ? 'nav-underline underline active' : 'nav-underline underline'}>
                  <DotUnderline fillColor="#28da00" />
                </div>
              </li>

              <li className="nav-li">
                <Link onClick={() => setPage('/experience')} href="/experience" className={pathname === '/experience' ? 'nav-link active' : 'nav-link'}>
                  Experience<span>Experience</span>
                </Link>
                <div className={pathname === '/experience' ? 'nav-underline underline active' : 'nav-underline underline'}>
                  <DotUnderline fillColor="#28da00" />
                </div>
              </li>
            </ul>

            <div
              className="nav-right"
              data-aos="fade-left"
              data-aos-duration="2000"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="1000"
            >
              <Link onClick={() => setPage('/contact')} href="/contact" className="nav-contact">
                Contact Me<span className="nav-contact-overlay"></span>
              </Link>

              <div className="nav-mobile-btn">
                <div id="nav-icon3" onClick={menuOpen} className={openNav ? 'open' : ''}>
                  <span></span><span></span><span></span><span></span>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Route content */}
        {children}

        {/* Shared footer */}
        <Footer />
      </div>
    </>
  );
}

/* ========= Custom Cursor (lint-safe, no `this`/`self`) ========= */
function cursorStart() {
  const cursor = {
    delay: 5,
    _x: 0,
    _y: 0,
    endX: window.innerWidth / 2,
    endY: window.innerHeight / 2,
    cursorVisible: true,
    cursorEnlarged: false,
    $dot: null,
    $outline: null,

    init() {
      cursor.$dot = document.querySelector('.cursor-dot');
      cursor.$outline = document.querySelector('.cursor-dot-outline');
      if (!cursor.$dot || !cursor.$outline) return;
      cursor.dotSize = cursor.$dot.offsetWidth;
      cursor.outlineSize = cursor.$outline.offsetWidth;
      cursor.setupEventListeners();
      cursor.animateDotOutline();
    },

    setupEventListeners() {
      document
        .querySelectorAll('a, button, .icon-btn, .proj-return, .project-container')
        .forEach((el) => {
          el.addEventListener('mouseover', () => {
            cursor.cursorEnlarged = true;
            cursor.toggleCursorSize();
          });
          el.addEventListener('mouseout', () => {
            cursor.cursorEnlarged = false;
            cursor.toggleCursorSize();
          });
        });

      document.addEventListener('mousedown', () => {
        cursor.cursorEnlarged = true;
        cursor.toggleCursorSize();
      });
      document.addEventListener('mouseup', () => {
        cursor.cursorEnlarged = false;
        cursor.toggleCursorSize();
      });

      document.addEventListener('mousemove', (e) => {
        cursor.cursorVisible = true;
        cursor.toggleCursorVisibility();
        cursor.endX = e.pageX;
        cursor.endY = e.pageY;
        cursor.$dot.style.top = `${cursor.endY}px`;
        cursor.$dot.style.left = `${cursor.endX}px`;
      });

      document.addEventListener('mouseenter', () => {
        cursor.cursorVisible = true;
        cursor.toggleCursorVisibility();
        cursor.$dot.style.opacity = 1;
        cursor.$outline.style.opacity = 1;
      });

      document.addEventListener('mouseleave', () => {
        cursor.cursorVisible = true;
        cursor.toggleCursorVisibility();
        cursor.$dot.style.opacity = 0;
        cursor.$outline.style.opacity = 0;
      });
    },

    animateDotOutline() {
      cursor._x += (cursor.endX - cursor._x) / cursor.delay;
      cursor._y += (cursor.endY - cursor._y) / cursor.delay;
      if (cursor.$outline) {
        cursor.$outline.style.top = `${cursor._y}px`;
        cursor.$outline.style.left = `${cursor._x}px`;
      }
      requestAnimationFrame(cursor.animateDotOutline);
    },

    toggleCursorSize() {
      if (!cursor.$dot || !cursor.$outline) return;
      if (cursor.cursorEnlarged) {
        cursor.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
        cursor.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        cursor.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
        cursor.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    },

    toggleCursorVisibility() {
      if (!cursor.$dot || !cursor.$outline) return;
      if (cursor.cursorVisible) {
        cursor.$dot.style.opacity = 1;
        cursor.$outline.style.opacity = 1;
      } else {
        cursor.$dot.style.opacity = 0;
        cursor.$outline.style.opacity = 0;
      }
    },
  };

  cursor.init();
}
