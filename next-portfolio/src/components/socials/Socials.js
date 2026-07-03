import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

import './Socials.scss';

const socialItems = [
  {
    type: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nick-stricker/',
    icon: faLinkedin,
  },
  {
    type: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@NickStrickerDigital',
    icon: faYoutube,
  },
  {
    type: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/nickolasstricker/',
    icon: faInstagram,
  },
];

const contactDetails = [
  {
    type: 'email',
    label: 'Email',
    value: 'nickolasstricker@gmail.com',
    href: 'mailto:nickolasstricker@gmail.com',
    icon: faEnvelope,
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '(630) 405-8427',
    href: 'tel:+16304058427',
    icon: faPhone,
  },
];

export default function Socials({
  title = 'Connect With Me',
  subtitle = 'Follow the work or reach out directly.',
  className = '',
}) {
  return (
    <div className={`socials-section ${className}`}>
      {(title || subtitle) && (
        <div className="socials-heading">
          {title && <h2 className="socials-title">{title}</h2>}
          {subtitle && <p className="socials-subtitle">{subtitle}</p>}
        </div>
      )}
      <ul className="socials-list">
        {socialItems.map((item) => (
          <li className="socials-item" key={item.type}>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="socials-link"
              aria-label={item.label}
            >
              <span className="socials-icon">
                <FontAwesomeIcon icon={item.icon} />
              </span>
              <span className="socials-label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <ul className="socials-contact-details">
        {contactDetails.map((item) => (
          <li key={item.type}>
            <a href={item.href} className="socials-contact-link">
              <FontAwesomeIcon icon={item.icon} className="socials-contact-icon" />
              <span>{item.value}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
