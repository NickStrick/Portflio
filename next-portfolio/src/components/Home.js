// If you keep this as a plain component (no hooks), it can be a Server Component.
// If you later add useEffect/useState here, add: 'use client';

import SplitLine from '../../public/images/svg/pageSplit';
import SplitTwo from '../../public/images/splitters/bottom-wave-2';
import HomeImageCarousel from './HomeImageCarousel';
import Socials from './socials/Socials';

// Move these styles into app/globals.css (or convert to CSS Modules) in Next.js.
import './styles/Home.css';
import './styles/animations.scss';

// If you want the profile image, put the file in /public and use next/image.

const summary1 =
  "Most developers focus entirely on syntax. Most sales reps focus entirely on quotas. My unfair advantage sits at the intersection of both: building production-grade SaaS, architecting secure AWS infrastructure, and running deep enterprise discovery that protects and grows business margins.";
const summary12 =
  "I believe in learning relentlessly, translating technical complexity into clear business outcomes, and bringing people along for the ride. If you have a vision worth building, let's make it real together.";
const summary2 = `My path into tech started with curiosity, picking up JavaScript through YouTube tutorials and Udemy courses while working retail after high school. That obsession turned into a career.
I sharpened my skills at Bloom Institute of Technology, studying full-stack web development and CS fundamentals, then stayed on as a contract Teaching Assistant leading daily standups, mentoring 10+ engineers through JavaScript, Java, and Python, and bridging the gap between stakeholders and dev teams on real projects.
    `;
const summary3 = `Today I'm a Senior Full-Stack Engineer shipping features across a 600,000+ line enterprise platform, and the founder of Stricker Digital, where I architect secure, high-performance web systems and run technical discovery for B2B and luxury clients. I'm AWS Solutions Architect – Associate certified and actively pursuing Sales Engineer / Forward Deployed Engineer roles where deep engineering execution meets enterprise commercial value.
Everything I do is rooted in the same belief: technology should empower people, not intimidate them.`;


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
          <div className="home-cta-group">
            <a
              data-aos="fade-right"
              href="/projects"
              className="header-btn btn-gradient !mb-1 w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Review Technical Projects
            </a>
            <a
              data-aos="fade-right"
              href="/services"
              // style={marginBottom:'1rem'}
              className="btn-g-wrap header-btn btn-gradient w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
            >
              Enterprise Consulting / Hire Me
            </a>
          </div>

          <HomeImageCarousel />

          {/* If you want to render the image:
          <Image id="pfp" src={PfpThree} alt="Nick S profile picture" priority />
          */}
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

      <div className="section-container home-bottom-conatiner">
        <div className="section-content intro-section-content" data-aos="fade-right">
          <h1 style={{ marginLeft: 'auto', textAlign: 'right' }}>Background</h1>
          <p className="intro-p">{summary2}</p>
          <p className="intro-p">{summary3}</p>
          {/* <p>{summary4}</p>  // Optional trailing paragraph you had defined */}
        </div>
      </div>
    </div>
  );
}
