'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import AOS from 'aos';
import 'aos/dist/aos.css';

// ⬇️ Update these import paths to wherever you placed the files in Next:
import DotUnderline from '../';
import NsLogo from '@/public/NStrans.png'; // if PNG is in /public
import Image from 'next/image';

// Your sections:
import About from '@/components/About';
import Home from '@/components/Home';
import Projects from '@/components/Projects';
import Skills from '@/components/skills/SkillsSection';
import Cert from '@/components/certificates/Certificate';
import Footer from '@/components/footer/Footer';
import Contact from '@/components/contact/Contact';
import Experiences from '@/components/Experience';
import Services from '@/components/services/Services';

export default function Page() {
  const router = useRouter();
  const pathname = usePathname() || '/';

  const [openNav, setNav] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Derived UI state from pathname (replaces your isSecondaryColor logic)
  let appContainer = 'app-container';
  const isSecondaryColor = pathname === '/projects' || pathname === '/experience';
  if (pathname === '/experience') appContainer += ' experience-container';
  if (pathname === '/projects') appContainer += ' projects-container';

  function setPage(newPath) {
    if (openNav) setNav(false);
    window.scrollTo(0, 0);
    router.push(newPath);
  }

  function menuOpen() {
    setNav((v) => !v);
  }

  useEffect(() => {
    cursorStart();                      // custom cursor
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
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    // (Optional) animationLoop() was effectively a no-op with `return` at top in your code.

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ====== RENDER THE CURRENT ROUTE CONTENT (single-file switch) ======
  // You can (and should) later split these into separate files:
  // app/projects/page.js, app/experience/page.js, etc.
  const CurrentRoute = (() => {
    switch (pathname) {
      case '/':
        return <Home />;
      case '/projects':
        return <Projects />;
      case '/experience':
        return <Experiences />;
      case '/about':
        return <About />;
      case '/services':
        return <Services setPage={setPage} />;
      case '/skills':
        return (
          <div className="content-container">
            <Skills />
            <Cert />
          </div>
        );
      case '/contact':
        return <Contact />;
      default:
        // Fallback to Home for unknown routes
        return <Home />;
    }
  })();

  return (
    <>
      {/* Cursor elements (positioned absolute by your CSS) */}
      <div className="cursor-dot-outline"></div>
      <div className="cursor-dot"></div>

      <div id="SaveScreen"><span className="spinner"></span></div>
      <div id="SentScreen"><span>Message Sent</span></div>

      <div className={appContainer}>
        {/* NAVBAR */}
        <nav className={`navbar${isSecondaryColor ? ' second-navbar' : ''}`}>
          <div className="container">
            {/* If the logo is in /public, use next/image for perf */}
            <Image
              className="logo-img"
              src={NsLogo}
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

        {/* ROUTE CONTENT (single-file switch) */}
        {CurrentRoute}

        {/* FOOTER */}
        <Footer setPage={setPage} />
      </div>
    </>
  );
}

/* =========================
   Custom Cursor (from App)
   ========================= */
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
      this.$dot = document.querySelector('.cursor-dot');
      this.$outline = document.querySelector('.cursor-dot-outline');
      if (!this.$dot || !this.$outline) return; // guard if elements missing

      this.dotSize = this.$dot.offsetWidth;
      this.outlineSize = this.$outline.offsetWidth;

      this.setupEventListeners();
      this.animateDotOutline();
    },

    setupEventListeners() {
      const self = this;

      document.querySelectorAll('a, button, .icon-btn, .proj-return, .project-container').forEach((el) => {
        el.addEventListener('mouseover', () => {
          self.cursorEnlarged = true;
          self.toggleCursorSize();
        });
        el.addEventListener('mouseout', () => {
          self.cursorEnlarged = false;
          self.toggleCursorSize();
        });
      });

      document.addEventListener('mousedown', () => {
        self.cursorEnlarged = true;
        self.toggleCursorSize();
      });
      document.addEventListener('mouseup', () => {
        self.cursorEnlarged = false;
        self.toggleCursorSize();
      });

      document.addEventListener('mousemove', (e) => {
        self.cursorVisible = true;
        self.toggleCursorVisibility();

        self.endX = e.pageX;
        self.endY = e.pageY;
        self.$dot.style.top = `${self.endY}px`;
        self.$dot.style.left = `${self.endX}px`;
      });

      document.addEventListener('mouseenter', () => {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 1;
        self.$outline.style.opacity = 1;
      });

      document.addEventListener('mouseleave', () => {
        self.cursorVisible = true;
        self.toggleCursorVisibility();
        self.$dot.style.opacity = 0;
        self.$outline.style.opacity = 0;
      });
    },

    animateDotOutline() {
      this._x += (this.endX - this._x) / this.delay;
      this._y += (this.endY - this._y) / this.delay;
      if (this.$outline) {
        this.$outline.style.top = `${this._y}px`;
        this.$outline.style.left = `${this._x}px`;
      }
      requestAnimationFrame(this.animateDotOutline.bind(this));
    },

    toggleCursorSize() {
      if (!this.$dot || !this.$outline) return;
      if (this.cursorEnlarged) {
        this.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
        this.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      } else {
        this.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
        this.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    },

    toggleCursorVisibility() {
      if (!this.$dot || !this.$outline) return;
      if (this.cursorVisible) {
        this.$dot.style.opacity = 1;
        this.$outline.style.opacity = 1;
      } else {
        this.$dot.style.opacity = 0;
        this.$outline.style.opacity = 0;
      }
    },
  };

  cursor.init();
}
