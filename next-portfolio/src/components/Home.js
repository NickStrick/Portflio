// If you keep this as a plain component (no hooks), it can be a Server Component.
// If you later add useEffect/useState here, add: 'use client';

import SplitLine from '../../public/images/svg/pageSplit';
import SplitTwo from '../../public/images/splitters/bottom-wave-2';

// Move these styles into app/globals.css (or convert to CSS Modules) in Next.js.
import './styles/Home.css';
import './styles/animations.scss';

// If you want the profile image, put the file in /public and use next/image.

const summary1 =
  "Hi, I'm Nick. I'm a full-stack developer with 8 years of experience building real products for real businesses. I'm also the founder of Stricker Digital, where I help local businesses grow online through better websites, smarter marketing, and modern tech.";
const summary12 =
  "I believe in learning relentlessly, building things that matter, and bringing people along for the ride. If you have a vision worth building, let's make it real together.";
const summary2 = `My path into tech started with curiosity, picking up JavaScript through YouTube tutorials and Udemy courses while working retail after high school. That obsession turned into a career.
I sharpened my skills at Lambda School, studying full-stack web development and CS fundamentals, then stayed on as a contract Teaching Assistant leading daily standups, mentoring students through JavaScript, Java, and Python, and bridging the gap between stakeholders and dev teams on real projects.
    `;
const summary3 = `Today I'm a senior developer at Expocad, where I build and maintain the 3E platform using React, Node.js, and AWS. Outside of my day job, I run Stricker Digital, a web and digital marketing agency focused on helping local businesses in Chicago generate real revenue online. I'm also actively pursuing my AWS Solutions Architect certification as I work toward roles in solutions architecture and tech consulting.
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
            className="home-indent"
            data-aos="flip-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="3000"
            data-aos-easing="ease-out-back"
          >
            Founder of Stricker Digital
          </p>
          <p
            className="home-indent home-indent-two"
            data-aos="flip-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="3000"
            data-aos-easing="ease-out-back"
          >
            Learn, create, collaborate, and grow.
          </p>
          <p
            className="home-indent home-indent-two"
            data-aos="flip-left"
            data-aos-duration="2000"
            data-aos-anchor-placement="left"
            data-aos-delay="3000"
            data-aos-easing="ease-out-back"
          >
            The solution expert.
          </p>
           <a
            data-aos="fade-right"
            href="https://www.strickerdigital.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="header-btn btn-gradient mt-10 !mb-1 w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
          >
            View My Offers
          </a>
          <a
            data-aos="fade-right"
            href="https://www.strickerdigital.com/free"
            target="_blank"
            rel="noopener noreferrer"
            // style={marginBottom:'1rem'}
            className="btn-g-wrap header-btn btn-gradient mb-3 w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover"
          >
            Get your free landing page
          </a>

          <div className="home-main-image" />
          <div className="home-main-image home-main-image-2" />

          {/* If you want to render the image:
          <Image id="pfp" src={PfpThree} alt="Nick S profile picture" priority />
          */}
        </div>
      </div>

      <SplitLine fillColor="#28da00" />
      <div className="page-split-padding-light"></div>

      <div className="section-container section-container-white home-second-conatiner">
        <div className="section-content intro-section-content" data-aos="fade-left">
          <h1>Intro</h1>
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
