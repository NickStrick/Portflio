'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSitemap, faCloud, faShieldHalved, faGears, faCertificate } from '@fortawesome/free-solid-svg-icons';
import Socials from '../socials/Socials';

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
      name: 'Enterprise Systems Architecture & Auditing',
      icon: faSitemap,
      description:
        'Deconstructing monolithic or fragmented infrastructures to maximize application throughput and reduce user friction hotspots. End-to-end mapping from database models to live webhook delivery systems.',
    },
    {
      name: 'Cloud Migration & Infrastructure Design (AWS)',
      icon: faCloud,
      description:
        'Building secure, scalable, and cost-effective cloud solutions. Specialized in multi-tenant platforms, serverless microservices, and static IP compliance configurations for enterprise requirements.',
    },
    {
      name: 'Security Frameworks & Access Control',
      icon: faShieldHalved,
      description:
        'Designing robust identity management pipelines (Auth0, OAuth 2.0, M2M authentication) to enforce zero-trust policies, dispute protection log trails, and secure multi-factor enterprise checkout components.',
    },
    {
      name: 'Workflow Automation & Pipeline Optimization',
      icon: faGears,
      description:
        'Aligning system mechanics with operational efficiency. Profiling API data flows and refactoring relational data patterns to yield up to 30%+ application performance gains.',
    },
  ];

  return (
    <div className="content-container">
      <div className="services section-container">
        <div className="section-content">
          <h1 className="port-head">High-Impact Enterprise Architecture &amp; Technical Strategy</h1>

          <p className="intro-text intro-text-1">
            I partner with{' '}
            <span className="highlight-text">enterprise teams</span>,{' '}
            <span className="highlight-text">B2B SaaS founders</span>, and{' '}
            <span className="highlight-text">luxury/high-touch brands</span>
          </p>
          <p className="intro-text intro-text-2">
            who need architecture that protects <span className="highlight-text">margin</span>,{' '}
            scales securely, and removes <span className="highlight-text">friction</span> from the customer journey,
          </p>
          <p className="intro-text intro-text-3">
            backed by real <span className="highlight-text">enterprise discovery</span> and measurable business outcomes.
          </p>

          <div className="btn-g-wrap">
            <a
              data-aos="fade-right"
              href="https://www.strickerdigital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient mt-10 transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Stricker Digital Consulting
            </a>

            <a
              data-aos="fade-left"
              href="/contact"
              className="btn-gradient ml mt-10 transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Discuss an Architecture Audit
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
                  <strong>Technical Discovery (Free):</strong>
                </span>{' '}
                <span>We map your current architecture, pain points, and business goals.</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCertificate} className="list-icon" />
                  <strong>Architecture Proposal:</strong>
                </span>{' '}
                <span>You get a scoped plan with fixed pricing and measurable success metrics.</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faCertificate} className="list-icon" />
                  <strong>We Build It Together:</strong>
                </span>{' '}
                <span>Weekly updates, clear communication, and delivery you can trust.</span>
              </li>
            </ol>
          </div>
          <Socials />

          <div className="cta-section">
            <h2>Ready to align your architecture with your business goals?</h2>
            <strong>Let&apos;s talk.</strong>
            <a
              href="https://calendly.com/nickolasstricker/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inverted  page-contact"
            >
              Book a Discovery Call
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
}
