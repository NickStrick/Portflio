import './Services.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPenRuler, faMobileScreen, faScrewdriverWrench, faComments, faCertificate } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Services = ({ setPage }) => {
    const navigate = useNavigate();
  // function setPage(newPath){
  //   if(openNav)  setNav(!openNav)
  //   window.scrollTo(0, 0)
  //   setPath(newPath)
  // }
   const clickContact = () => {
    navigate('/contact'); // Navigates to the /about path
    setPage('/contact')
  };
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
    <div className='content-container'>
    <div className="services section-container">
      <div className="section-content">
        <h1 className="port-head">Services</h1>
        <p className="intro-text">I help small business owners and creators build fast, modern websites and apps—without the tech overwhelm.</p>

        <div className="services-grid">
          {servicesList.map((service, index) => (
            <div className="service-card" key={index} onClick={()=> clickContact()}>
              <FontAwesomeIcon icon={service.icon} className="service-icon gradientText" />
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="workflow">
          <h2>How It Works</h2>
          <ol className="custom-list">
            <li><FontAwesomeIcon icon={faCertificate} className="list-icon" /><strong>Discovery Call (Free):</strong> We talk about your idea and goals.</li>
            <li><FontAwesomeIcon icon={faCertificate} className="list-icon" /><strong>Quote & Timeline:</strong> I send a simple plan with fixed pricing.</li>
            <li><FontAwesomeIcon icon={faCertificate} className="list-icon" /><strong>We Build It Together:</strong> Weekly updates, great communication, and delivery you can trust.</li>
          </ol>
        </div>

        <div className="cta-section">
          <h2>Ready to Get Started?</h2>
          {/* <a class="nav-contact page-contact" href="/contact">Contact Me<span class="nav-contact-overlay"></span></a> */}
          <Link onClick={()=> setPage('/contact')} to="/contact" className="nav-contact page-contact">Contact Me<span className="nav-contact-overlay"></span></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
