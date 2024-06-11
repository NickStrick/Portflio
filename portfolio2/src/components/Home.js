import React, { useState } from 'react';
import './styles/Home.css'
import SplitLine from '../images/svg/pageSplit.js'
import SplitTwo from '../images/splitters/bottom-wave-2.js'
import SplitThree from '../images/splitters/bottom-wave-3.js'

import PfpThree from '../images/old/pfp3.jpg';

const summary1 = 'Hi, I\'m Nick. I\'m a full stack web developer that loves making creative solutions to complex problems. I help any person or buisness that has dreams to achieve, and a mission to share! Let\'s achieve together!'
const summary12 = 'I have experience in Front-end Development, Back-end Development, as well as Leadership positions in tech. My technical strengths are Javascript, React.js, and Node.js. But I am always on a quest to learn new things, and gain new knowledge!'
const summary2 = `I spent the last couple of years learning and teaching to code. After highschool, curious about coding, I completed some credits toward a computer science degree
while i worked in retail. I spent free time creating small games, 
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


const Home = () => (
    <div className="content-container">
        <div className="section-container">
            <div className="section-content home-first-content">
                <h1 className="home-main-header"><span>Nick</span> <span>Stricker</span></h1>
                <p className="home-indent">Learn, create, collaborate, and serve.</p>
                <p className="home-indent home-indent-two">The solution expert.</p>
                <div className="home-main-image">
                    {/* <img id='pfp' src={PfpThree} alt='Nick S profile picture' /> */}
                </div>
            </div>
        </div>
        <SplitLine fillColor={'#98FF98'} />
        <div className="page-split-padding-light"></div>
        <div className="section-container section-container-white home-second-conatiner">
            <div className="section-content">
                <h1>Intro</h1>
                <p>{summary1}</p>
                <p>{summary12}</p>
            </div>
        </div>
        <SplitTwo fillColor={'#98FF98'} />
        <div className="page-split-padding-dark split-wave-2"></div>
        <div className="section-container home-bottom-conatiner">
            <div className="section-content">
                <h1>Background</h1>
                <p>{summary2}</p>
                <p>{summary3}</p>
            </div>
        </div>
        <SplitThree fillColor={'#98FF98'} />
        <div className="page-split-padding-dark split-wave-3"></div>
    </div>
  );
  export default Home;