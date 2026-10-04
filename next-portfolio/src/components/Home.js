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
        <div className="section-content home-first-content">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
            data-aos-easing="ease-out-back"
          >
            <h1 className="home-main-header">
              <span>Nick</span> <span>Stricker</span>
            </h1>
          </div>

          <p
            className="home-indent home-indent-two home-tagline"
            data-aos="flip-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
            data-aos-easing="ease-out-back"
          >
            Bridging the Gap Between Complex Architecture and Enterprise Outcomes.
          </p>
          <p
            className="home-indent home-indent-two"
            data-aos="flip-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="1000"
            data-aos-easing="ease-out-back"
          >
            Senior Full-Stack Engineer &amp; Solutions Architect, AWS certified.
          </p>
          <p
            className="home-indent home-indent-two"
            data-aos="flip-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="left"
            data-aos-delay="1000"
            data-aos-easing="ease-out-back"
          >
            I design secure, high-performance systems and translate technical complexity into clear business metrics that move enterprise deals forward.
          </p>

          <HomeVsl />

          <div className="home-cta-group">
            <Link
              data-aos="fade-right"
              href="/projects"
              className="header-btn btn-gradient !mb-1 w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Review Technical Projects
            </Link>
            <Link
              data-aos="fade-right"
              href="/services"
              className="btn-g-wrap header-btn btn-gradient w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Enterprise Consulting / Hire Me
            </Link>
            <a
              href="/NickStricker-SolutionsEngineer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inverted home-resume-btn"
            >
              Download Résumé (PDF)
            </a>
          </div>

          <HomeImageCarousel />

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
