import Link from 'next/link';
import SplitLine from '../../public/images/svg/pageSplit';
import SplitTwo from '../../public/images/splitters/bottom-wave-2';
import HomeImageCarousel from './HomeImageCarousel';
import HomeVsl from './HomeVsl';
import Socials from './socials/Socials';
import About from './About';
import Testimonials from './testimonials/Testimonials';

import './styles/Home.css';
import './styles/animations.scss';

const summary1 =
  "Most developers focus entirely on syntax. Most sales reps focus entirely on quotas. My unfair advantage sits at the intersection of both: building production-grade SaaS, architecting secure AWS infrastructure, and running deep enterprise discovery that protects and grows business margins.";
const summary12 =
  "I believe in learning relentlessly, translating technical complexity into clear business outcomes, and bringing people along for the ride. If you have a vision worth building, let's make it real together.";

export default function Home() {
  return (
    <div className="content-container home">
      <div className="section-container">
        <div className="section-content home-first-content home-hero">
          <div className="hero-intro">
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-anchor-placement="top-bottom"
              data-aos-delay="600"
              data-aos-easing="ease-out-back"
            >
              <h1 className="home-main-header">
                <span>Nick</span> <span>Stricker</span>
              </h1>
            </div>

            <p className="home-indent home-tagline" data-aos="flip-left" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" data-aos-delay="600" data-aos-easing="ease-out-back">
              Bridging the Gap Between Complex Architecture and Enterprise Outcomes.
            </p>
            <p className="home-indent" data-aos="flip-left" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" data-aos-delay="600" data-aos-easing="ease-out-back">
              Senior Full-Stack Engineer &amp; Solutions Architect, AWS certified.
            </p>
            <p className="home-indent" data-aos="flip-left" data-aos-duration="1500" data-aos-anchor-placement="top-bottom" data-aos-delay="600" data-aos-easing="ease-out-back">
              I design secure, high-performance systems and translate technical complexity into clear business metrics that move enterprise deals forward.
            </p>

            <HomeImageCarousel />
          </div>

          <div className="hero-media">
            <span className="section-eyebrow hero-eyebrow">Start here · A quick hello from Nick</span>
            <HomeVsl />

            <div className="home-cta-group">
              <Link href="/projects" className="btn-gradient hero-btn">
                Review Technical Projects
              </Link>
              <Link href="/services" className="btn-gradient hero-btn">
                Enterprise Consulting / Hire Me
              </Link>
            </div>
            <a
              href="/NickStricker-SolutionsEngineer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inverted home-resume-btn"
            >
              Download Résumé (PDF)
            </a>
          </div>
        </div>
      </div>

      <Socials className="socials-home" />

      <SplitLine fillColor="#28da00" />
      <div className="page-split-padding-light"></div>

      <div className="section-container section-container-white home-second-conatiner">
        <div className="section-content intro-section-content" data-aos="fade-left">
          <h1>The Intersection</h1>
          <p className="intro-p">{summary1}</p>
          <p className="intro-p">{summary12}</p>
        </div>
      </div>

      <SplitTwo fillColor="#28da00" />
      <div className="page-split-padding-dark split-wave-2"></div>

      <div className="section-container home-about-container">
        <div className="section-content intro-section-content">
          <About />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}
