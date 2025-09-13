// If you keep this as a plain component (no hooks), it can be a Server Component.
// If you later add useEffect/useState here, add: 'use client';

import SplitLine from '../../public/images/svg/pageSplit';
import SplitTwo from '../../public/images/splitters/bottom-wave-2';

// Move these styles into app/globals.css (or convert to CSS Modules) in Next.js.
import './styles/Home.css';
import './styles/animations.scss';

// If you want the profile image, put the file in /public and use next/image.

const summary1 =
  "Hi, I'm Nick. I'm a full stack web developer that loves making creative solutions to complex problems. I help any person or buisness that has dreams to achieve, and a mission to share! Let's achieve together!";
const summary12 =
  "I have experience in Front-end Development, Back-end Development, as well as Leadership positions in tech. My technical strengths are Javascript, React.js, and Node.js. But I am always on a quest to learn new things, and gain new knowledge!";
const summary2 = `I spent the last several years working as senior developer and mentor. Before that, I was leading and mentoring computer science students. After highschool, curious about coding, I completed some credits toward a computer science degree
while i worked in retail. I spent free time creating small games, studying C sharp and javascript,
and looking for resources to learn more and find out what I could make. I followed small courses on coding through things such as Youtube,
    Udemy, or Watch and Code. I spent these past two years enrolled in Lambda School as a student and as a contract teaching assistant. 
    `;
const summary3 = `During my time as a student, I learned Full Stack web development 
    and computer science fundamentals, along with an assortment of librarys, frameworks and algorithms. With that I created some pretty cool projects that I’m proud of. 
    I was a contract worker for Lambda School as well, where I frist worked as a Team lead above students, leading daily meetings, solving any debugging issues, 
    helping my students learn the cirriculum in javscript, java, and python. The times I was working on a project with a team, I was responsible with the relationship between the stakeholder and the team,
    and managed our planning. I also debugged and filled any gaps in the conribution to the project where nessesary. I spent most of my time in meetings getting to know my students 
    and solving problems or planning with them and creating documentation.`;


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
        <div className="section-content" data-aos="fade-left">
          <h1>Intro</h1>
          <p>{summary1}</p>
          <p>{summary12}</p>
        </div>
      </div>

      <SplitTwo fillColor="#28da00" />
      <div className="page-split-padding-dark split-wave-2"></div>

      <div className="section-container home-bottom-conatiner">
        <div className="section-content" data-aos="fade-right">
          <h1 style={{ marginLeft: 'auto', textAlign: 'right' }}>Background</h1>
          <p>{summary2}</p>
          <p>{summary3}</p>
          {/* <p>{summary4}</p>  // Optional trailing paragraph you had defined */}
        </div>
      </div>
    </div>
  );
}
