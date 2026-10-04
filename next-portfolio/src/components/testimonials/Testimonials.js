import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar, faComments } from '@fortawesome/free-solid-svg-icons';

import jose from '../../../public/images/testimonials/jose-headshot.jpg';
import luke from '../../../public/images/testimonials/lukerotta.jpg';
import amanda from '../../../public/images/testimonials/amanda-headshot.jpg';
import carole from '../../../public/images/testimonials/carole-headshot.png';
import fernando from '../../../public/images/testimonials/fernando-headshot.jpg';
import lukeStricker from '../../../public/images/testimonials/luke-headshot.jpg';
import connor from '../../../public/images/testimonials/connor-headshot.png';

import './Testimonials.scss';

// Quotes are kept word-for-word as the clients wrote them.
const testimonials = [
  {
    name: 'Jose Ortiz',
    title: 'Co-Founder of Connecting Dots for Latinx Professionals',
    photo: jose,
    quote:
      'Nick is a great web developer who takes his job seriously and is willing to meet his clients where they are at. He makes the working relationship enjoyable and provides great recommendations and feedback. He has tremendous attention to detail and has a creative mind. I highly recommend reaching to Nick for anything related to web development and assistance with other related services.',
  },
  {
    name: 'Carole Murray',
    title: 'Founder of CM Florals',
    photo: carole,
    quote:
      'Took an idea a created what I imagined just by him understanding what my business needed through our conversations. I loved the visual accents, instant awareness to the Customer of toggles and info points that he included.',
  },
  {
    name: 'Luke Rotta',
    title: 'Founder of Redtail Luxe',
    photo: luke,
    quote:
      'Nick provided expert advice for my web design and digital marketing strategy. He was professional, efficient, and delivered high-quality work on time. I highly recommend his services to anyone looking to enhance their online presence.',
  },
  {
    name: 'Fernando Rayas',
    title: 'Co-Founder of Connecting Dots for Latinx Professionals',
    photo: fernando,
    quote:
      "Nick is an outstanding professional. He is knowledge, skillful, responsible, detailed oriented, and all around a supportive and very cool guy. I highly recommend reaching out to Nick if you need a dynamic website that addresses your company's need.",
  },
  {
    name: 'Amanda Grau',
    title: 'Board Certified Behavior Analyst',
    photo: amanda,
    quote:
      'Nick had my professional profile website running in 2 days, in time for my book release! Outstanding communication, delivery, and expertise.',
  },
  {
    name: 'Luke Stricker',
    title: 'Private Baseball Hitting Coach',
    photo: lukeStricker,
    quote:
      'Perfect For all my coaching needs, Nick knew exactly what i needed for my private coaching business and gave me the most perfect personalized website for me.',
  },
  {
    name: 'Connor M',
    title: 'Stage Guitarist, Music Teacher',
    photo: connor,
    quote:
      'Nick nailed my vision from the get go. I highly reccomend him. The perfect solution to market my music teaching, and promote my bands.',
  },
];

export default function Testimonials({ id = 'testimonials' }) {
  return (
    <section className="testimonials" id={id}>
      <div className="testimonials-heading">
        <span className="section-eyebrow">
          <FontAwesomeIcon icon={faComments} /> Testimonials
        </span>
        <h2>What clients say</h2>
        <p>Here&apos;s what people I&apos;ve worked with have to say.</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <figure className="testimonial-card" key={t.name}>
            <div className="testimonial-top">
              <span className="testimonial-quote-badge">
                <FontAwesomeIcon icon={faQuoteLeft} />
              </span>
              <span className="testimonial-stars" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <FontAwesomeIcon icon={faStar} key={i} />
                ))}
              </span>
            </div>

            <blockquote>{t.quote}</blockquote>

            <figcaption>
              <Image src={t.photo} alt={t.name} width={44} height={44} className="testimonial-photo" />
              <span>
                <strong>{t.name}</strong>
                <span>{t.title}</span>
              </span>
            </figcaption>

            <FontAwesomeIcon icon={faQuoteLeft} className="testimonial-watermark" aria-hidden="true" />
          </figure>
        ))}
      </div>
    </section>
  );
}
