import './Services.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUserTie, faComments, faCertificate, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
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
      name: 'One-Page Booking Websites',
      icon: faImage,
      description: 'Clean, fast, responsive landing pages to help you land clients and launch your brand.',
    },
    {
      name: 'Multi-page Schedueling Platforms',
      icon: faCalendarDays,
      description: 'All encompassing web app to scheduele events, list offers, build trust with traffic, and turn that traffic into paying customers or community memebers.',
    },{
      name: 'Professional Profile Websites',
      icon: faUserTie,
      description: 'Personalized websites that showcase your skills, experience, and personality to attract potential clients and employers. SEO optimized to help you get found.',
    },
    {
      name: 'Free Consulting Calls',
      icon: faComments,
      description: 'Book a call to get feedback on your current idea or website from a professional developer with experience in marketing & brand building.',
    },
    
    
  ];

  return (
    <div className='content-container'>
    <div className="services section-container">
      <div className="section-content">
        <h1 className="port-head">Services</h1>
        <p className="intro-text intro-text-1">I build strategically designed, customizable websites for <span className="highlight-text">coaches</span>, <span className="highlight-text">mentors</span>, and <span className="highlight-text">event organizers</span> 
        </p><p className="intro-text intro-text-2">who need a website that coverts traffic to <span className="highlight-text">booked clients</span>, 
          </p><p className="intro-text intro-text-3">and presents <span className="highlight-text">branding</span> that leaves a lasting impression.</p>

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
            <li><FontAwesomeIcon icon={faCertificate} className="list-icon" /><strong>Quote & Timeline:</strong> We build a simple plan with fixed pricing.</li>
            <li><FontAwesomeIcon icon={faCertificate} className="list-icon" /><strong>We Build It Together:</strong> Weekly updates, great communication, and delivery you can trust.</li>
          </ol>
        </div>

        <div className="cta-section">
          <h2>Are you opposed to a chat?</h2>
          <strong>If not,</strong>
          {/* <a class="nav-contact page-contact" href="/contact">Contact Me<span class="nav-contact-overlay"></span></a> */}
          <Link onClick={()=> setPage('/contact')} to="/contact" className="nav-contact page-contact">Let's get started<span className="nav-contact-overlay"></span></Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
