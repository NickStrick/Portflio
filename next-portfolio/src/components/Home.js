import React, { useState, useEffect } from 'react';
import './styles/Home.css'
import './styles/animations.scss'
import SplitLine from '../images/svg/pageSplit.js'
import SplitTwo from '../images/splitters/bottom-wave-2.js'


import PfpThree from '../images/old/pfp3.jpg';

const summary1 = 'Hi, I\'m Nick. I\'m a full stack web developer that loves making creative solutions to complex problems. I help any person or buisness that has dreams to achieve, and a mission to share! Let\'s achieve together!'
const summary12 = 'I have experience in Front-end Development, Back-end Development, as well as Leadership positions in tech. My technical strengths are Javascript, React.js, and Node.js. But I am always on a quest to learn new things, and gain new knowledge!'
const summary2 = `I spent the last several years working as senior developer and mentor. Before that, I was leading and mentoring computer science students. After highschool, curious about coding, I completed some credits toward a computer science degree
while i worked in retail. I spent free time creating small games, studying C sharp and javascript,
and looking for resources to learn more and find out what I could make. I followed small courses on coding through things such as Youtube,
    Udemy, or Watch and Code. I spent these past two years enrolled in Lambda School as a student and as a contract teaching assistant. 
    `
    const summary3 = `During my time as a student, I learned Full Stack web development 
    and computer science fundamentals, along with an assortment of librarys, frameworks and algorithms. With that I created some pretty cool projects that I’m proud of. 
    I was a contract worker for Lambda School as well, where I frist worked as a Team lead above students, leading daily meetings, solving any debugging issues, 
    helping my students learn the cirriculum in javscript, java, and python. The times I was working on a project with a team, I was responsible with the relationship between the stakeholder and the team,
    and managed our planning. I also debugged and filled any gaps in the conribution to the project where nessesary. I spent most of my time in meetings getting to know my students 
    and solving problems or planning with them and creating documentation.`;
const summary4 = 'These exerpiences only feed my hunger for learning and solving puzzles, and they fuel the drive to expand my knowledge and experience.';
function animateWave() {
    return
    const path = document.querySelectorAll('#homeSplitOne path:first-child');
    const svg = document.getElementById('homeSplitOne');
    // Initial path data
    const initialPath = path.getAttribute('d');
    
    const length = 1505; // Total length of the path (horizontal dimension)
    const amplitude = 40; // Height of wave (vertical amplitude)
    const frequency = 0.02; // Frequency of wave (how many waves across the screen)

    let newPath = 'M136.106 ' + -271.377; // Start with initial coordinates

    // Adjust the path for the wave motion
    for (let x = 136.106; x < length; x += 10) {
      // Sine wave formula for vertical motion
      const y = amplitude * Math.sin(frequency * x + Date.now() * 0.002) + 768.422;
      newPath += `L${x} ${y}`;
    }

    newPath += 'Z'; // Close the path

    // Update the path's d attribute
    path.setAttribute('d', newPath);

    // Keep the animation loop going
    requestAnimationFrame(animateWave);
  }

  // Start the animation
  animateWave();

const Home = () => {
    


    return (
    <div className="content-container home">
        <div className="section-container">
            <div className="section-content home-first-content">
            <div  data-aos="fade-right" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="1000" data-aos-easing="ease-out-back">
                <h1 className="home-main-header"><span>Nick</span> <span>Stricker</span></h1>
                </div>
                <p className="home-indent" data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="3000" data-aos-easing="ease-out-back">Founder of Stricker Digital</p>
                <p className="home-indent home-indent-two" data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="top-bottom" data-aos-delay="3000" data-aos-easing="ease-out-back">Learn, create, collaborate, and grow.</p>
                <p className="home-indent home-indent-two" data-aos="flip-left" data-aos-duration="2000" data-aos-anchor-placement="left" data-aos-delay="3000" data-aos-easing="ease-out-back">The solution expert.</p>
                <a data-aos="fade-right" href="https://www.strickerdigital.com" class="header-btn btn-gradient mt-10 w-full transition-all duration-300 ease-in-out text-2xl md:text-3xl px-16 py-3 rounded-full focus:outline-none bg-purple-custom text-white hover:bg-language-hover">Get your free landing page</a>
                <div className="home-main-image"></div>
                <div className="home-main-image home-main-image-2" ></div>
                    {/* <img id='pfp' src={PfpThree} alt='Nick S profile picture' /> */}
                
            </div>
        </div>
        <SplitLine fillColor={'#28da00'} />
        <div className="page-split-padding-light"></div>
        <div className="section-container section-container-white home-second-conatiner">
            <div className="section-content" data-aos="fade-left">
                <h1>Intro</h1>
                <p>{summary1}</p>
                <p>{summary12}</p>
            </div>
        </div>
        <SplitTwo fillColor={'#28da00'} />
        <div className="page-split-padding-dark split-wave-2"></div>
        <div className="section-container home-bottom-conatiner">
            <div className="section-content" data-aos="fade-right">
                <h1 style={{marginLeft:'auto', textAlign:'right'}}>Background</h1>
                <p>{summary2}</p>
                <p>{summary3}</p>
            </div>
        </div>
        
    </div>
  );}
  export default Home;