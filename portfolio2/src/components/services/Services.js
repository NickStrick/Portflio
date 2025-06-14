import './Services.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPenRuler, faMobileScreen, faScrewdriverWrench, faComments } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const servicesList = [
    {
      name: 'One-Page Websites',
      icon: faCode,
      description: 'Clean, fast, responsive landing pages to help you launch your brand or offer quickly.',
    },
    {
      name: 'Web App MVPs',
      icon: faMobileScreen,
      description: 'React/React Native prototypes to help you validate ideas and showcase functionality.',
    },
    {
      name: 'Fixes & Upgrades',
      icon: faScrewdriverWrench,
      description: 'Need speed, SEO, or UI improvements? I’ll tune up or revamp your existing site.',
    },
    {
      name: 'Consulting Calls',
      icon: faComments,
      description: 'Book a call to get dev guidance or feedback on your current idea or website.',
    },
  ];

  return (
    <div className="services section-container">
      <div className="section-content">
        <h1 className="port-head">Services</h1>
        <p className="intro-text">I help small business owners and creators build fast, modern websites and apps—without the tech overwhelm.</p>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index}>
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="workflow">
          <h2>How It Works</h2>
          <ol>
            <li><strong>Discovery Call (Free):</strong> We talk about your idea and goals.</li>
            <li><strong>Quote & Timeline:</strong> I send a simple plan with fixed pricing.</li>
            <li><strong>We Build It Together:</strong> Weekly updates, great communication, and delivery you can trust.</li>
          </ol>
        </div>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Email me at <a href="mailto:youremail@example.com">nickolasstricker@gmail.com</a> or <a href="/contact">fill out the contact form</a> to get started.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
