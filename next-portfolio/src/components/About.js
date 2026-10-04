import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faLocationDot, faFolderOpen, faCertificate, faStar } from '@fortawesome/free-solid-svg-icons';

import { socialItems, contactDetails } from './socials/Socials';
import aboutPhoto from '../../public/images/hero/about-face.jpg';
import './styles/About.scss';

const email = contactDetails.find((item) => item.type === 'email');
const iconLinks = [...socialItems, email];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-photo" data-aos="fade-right">
        <Image src={aboutPhoto} alt="Nick Stricker smiling" sizes="(max-width: 900px) 90vw, 360px" />
      </div>

      <div className="about-body" data-aos="fade-left">
        <span className="section-eyebrow">
          <FontAwesomeIcon icon={faSeedling} /> About
        </span>
        <h2 className="about-title">Hi, I&apos;m Nick!</h2>
        <p>
          I&apos;ve always loved two things: building tech and helping people. I started out making video games.
          Then I taught engineers how to work through tricky code. At Expocad, I ran live software demos for big
          companies at national trade shows.
        </p>
        <p>
          Now I run Stricker Digital. I help online businesses find what&apos;s costing them sales and fix it, and I
          share what I learn about communication on YouTube.
        </p>

        <p className="about-location">
          <FontAwesomeIcon icon={faLocationDot} /> Nick Stricker · Founder · Chicago, IL
        </p>

        <ul className="about-icons">
          {iconLinks.map((item) => (
            <li key={item.type}>
              <a
                href={item.href}
                aria-label={item.label}
                {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <FontAwesomeIcon icon={item.icon} />
              </a>
            </li>
          ))}
        </ul>

        <div className="about-buttons">
          <Link href="/projects">
            <FontAwesomeIcon icon={faFolderOpen} /> Previous Projects
          </Link>
          <Link href="/certifications">
            <FontAwesomeIcon icon={faCertificate} /> Certifications
          </Link>
          <a href="#testimonials">
            <FontAwesomeIcon icon={faStar} /> Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
