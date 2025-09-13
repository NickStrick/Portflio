'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUserTie, faComments, faCertificate, faCalendarDays } from '@fortawesome/free-solid-svg-icons';

// If this was a global stylesheet in CRA, move it to app/globals.css,
// or convert to a module: import styles from './Services.module.scss';
import './Services.scss';

export default function Services() {
  const router = useRouter();

  const clickContact = () => {
    window.scrollTo(0, 0);
    router.push('/contact');
  };

  const servicesList = [
    {
      name: 'Free One-Page Booking Websites',
      icon: faImage,
      description:
        'Clean, fast, responsive landing pages to help you land clients and launch your brand.',
    },
    {
      name: 'Multi-page Schedueling Platforms',
      icon: faCalendarDays,
      description:
        'All encompassing web app to scheduele events, list offers, build trust with traffic, and turn that traffic into paying customers or community memebers.',
    },
    {
      name: 'Professional Profile Websites',
      icon: faUserTie,
      description:
        'Personalized websites that showcase your skills, experience, and personality to attract potential clients and employers. SEO optimized to help you get found.',
    },
    {
      name: 'Free Consulting Calls',
      icon: faComments,
      description:
        'Book a call to get feedback on your current idea or website from a professional developer with experience in marketing & brand building.',
    },
  ];

  return (
    <div className="content-container">
      <div className="services section-container">
        <div className="section-content">
          <h1 className="port-head">Services</h1>

          <p className="intro-text intro-text-1">
            I build strategically designed, customizable websites for{' '}
            <span className="highlight-text">coaches</span>,{' '}
            <span className="highlight-text">mentors</span>, and{' '}
            <span className="highlight-text">event organizers</span>
          </p>
          <p className="intro-text intro-text-2">
            who need a website that coverts traffic to{' '}
            <span className="highlight-text">booked clients</span>,
          </p>
          <p className="intro-text intro-text-3">
            and presents <span className="highlight-text">branding</span> that leaves a lasting impression.
          </p>

          <div className="btn-g-wrap">
            <a
              data-aos="fade-right"
              href="https://www.strickerdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient mt-10 transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Get your free landing page
            </a>

            <a
              data-aos="fade-left"
              href="https://www.strickerdigital.com/core"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient ml mt-10 transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Build a Multi-page feature rich platform
            </a>
          </div>

          <div className="services-grid">
            {servicesList.map((service, index) => (
              <div className="service-card" key={index} onClick={clickContact}>
                <FontAwesomeIcon icon={service.icon} className="service-icon gradientText" />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>

          <div className="workflow">
            <h2>How It Works</h2>
            <ol className="custom-list">
              <li>
                <span>
                  <FontAwesomeIcon icon={faCertificate} className="list-icon" />
                  <strong>Discovery Call (Free):</strong>
                </span>{' '}
                <span>We talk about your idea and goals.</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCertificate} className="list-icon" />
                  <strong>Quote &amp; Timeline:</strong>
                </span>{' '}
                <span>We build a simple plan with fixed pricing.</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCertificate} className="list-icon" />
                  <strong>We Build It Together:</strong>
                </span>{' '}
                <span>Weekly updates, great communication, and delivery you can trust.</span>
              </li>
            </ol>
          </div>

          <div className="cta-section">
            <h2>Are you opposed to a chat?</h2>
            <strong>If not,</strong>
            <a
              href="https://calendly.com/nickstrickerbiz/30min-1"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-contact page-contact"
            >
              Let&apos;s get started<span className="nav-contact-overlay"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
