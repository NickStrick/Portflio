import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/Projects.css';
import React, { useState } from 'react';

import riyLogo from '../images/old/RIY.png'
import mympyLogo from '../images/old/Mympy.png'
import luncherLogo from '../images/old/luncherApp.png'
import rangoLogo from '../images/old/rangoDjango.png'
import softSciLogo from '../images/softsci.png'
import doWellLogo from '../images/doWell.png'
import wineAndRose from '../images/projects/rose.jpg'
import dots from '../images/projects/connectingdots.jpg'
import Amanda from '../images/amanda.jpg'
import Luke from '../images/projects/luke.png'
import Connor from '../images/projects/connor.png'
import CMF from '../images/projects/CMF.png'
import claroflowLogo from '../images/projects/claroflow.png'

import ProjectList from './Projects/ProjectList.js'
import ProjectDetail from './Projects/ProjectDetail.js';



const pData = [
    {
        name: "CM Florals",
        description: 'A Lead Capture website for A professional Florist with 45 years of experience. ',
        img: CMF,
        link: 'https://github.com/NickStrick/CM-Florals',
        deployed: 'https://cm-florals.vercel.app/',
        role: 'Wed Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 0.2,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``,
        color:'#d26cec'
      },
   {
        name: "Coach Luke Stricker",
        description: 'A Lead Capture website for Hitting lessons, taught by an experienced professional Coach. ',
        img: Luke,
        link: 'https://github.com/NickStrick/Coach-Luke',
        deployed: 'https://coach-luke-stricker.vercel.app/',
        role: 'Wed Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 0.2,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``
      },
   {
        name: "Connor Murray Music",
        description: 'A Lead Capture website for Music lessons, taught by an experienced professional musician. ',
        img: Connor,
        link: 'https://github.com/NickStrick/Connor-Murray-Music',
        deployed: 'https://connor-murray-music.vercel.app/',
        role: 'Wed Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 0.2,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``
      },
  {
        name: "Amanda G Professional",
        description: 'A professional profile website for a BCBA Certified Psychologist & Nerodivergent therapist. ',
        img: Amanda,
        link: 'https://github.com/NickStrick/Amanda-Grau-professional-profile',
        deployed: 'https://amanda-grau-professional-profile.vercel.app/',
        role: 'Wed Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 0.2,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``
      },
  {
        name: "Connecting Dots (for latinX Professionals)",
        description: 'A website for the LatinX community of Chicago to connect with each other and find events in the area. Connecting Dots uplifts the latinX community by providing a platform for networking, sharing resources, and building relationships. ',
        img: dots,
        link: 'https://github.com/NickStrick/Connecting-Dots',
        deployed: 'https://connecting-dots-five.vercel.app/',
        role: 'Wed Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        teamMemebers: 1,
        weeksCompleted: 1,
        pills: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: `I was the sole developer for Connecting Dots. UI, Front-end, Back-end, and Project Planning—I handled everything. Building this site was deeply fulfilling. It let me serve the LatinX community of Chicago and form real connections with members. I was proud to build a platform that helped bring people together and grow the community.

The team needed a site that showcased events, shared updates, and encouraged new members to get involved. I spoke with organizers to understand their goals and translated that into features that were practical and engaging. The site became more than a page—it became a digital home for the community.

Though unpaid, the project offered huge value in experience. I built a Node.js backend, a React front-end, and created a flexible system for content updates. I learned a lot, delivered early, and saw how impactful tech can be when it supports a real mission.

In the end, I gained technical and planning skills, and a sense of pride in building something that matters.`
      },
      {
        name: "Claro Flow",
        description: 'A sleek landing page for ClaroFlow, a modern workflow SaaS tool built for remote teams. The site highlights features like task automation, team collaboration, and real-time analytics to boost productivity and streamline operations.',
        img: claroflowLogo,
        link: 'https://github.com/NickStrick/ClaroFlow',
        deployed: 'https://claro-flow.vercel.app/',
        role: 'Wed Developer',
        techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'PassportJS', 'NodeJS', 'Express', 'Postgres', 'Cloudinary', 'Filepond', , 'AWS S3', 'AWS Lambda', 'AWS DynamoDB'],
        teamMemebers: 1,
        weeksCompleted: 1,
        pills: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS'],
        contribution: `I was the sole developer behind the ClaroFlow landing page—a sleek, responsive site for a modern workflow SaaS product. I built the UI to reflect the app’s streamlined focus: speed, clarity, and productivity. Every section was crafted to highlight key features like automation, collaboration tools, and analytics, while maintaining a clean and intuitive design.

Working from marketing copy and product goals, I designed and developed the front end from scratch, ensuring smooth interactions and a strong first impression. The site includes dynamic pricing sections, testimonials, and a call-to-action system to drive early signups. I optimized performance and responsiveness across devices, using lightweight styling and scalable components.

This project helped me improve my skills in UI design, front-end speed optimization, and building user-focused landing experiences that convert.`
      },
    {
        name: "Softball Science",
        description: 'Softball Science was created by two women with a long history in the world of softball and life. We have used our combined expertise, that includes over 30 years of coaching experience along with 20 years of data analytics to create Softball Science. We have created a metrically driven program specifically designed to enhance the raw power behind your softball swing.',
        img: softSciLogo,
        link: 'https://github.com/Stricker-Softball',
        deployed: 'https://www.softball-science.com/',
        role: 'Wed Developer',
        techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'PassportJS', 'NodeJS', 'Express', 'Postgres', 'Cloudinary', 'Filepond'],
        teamMemebers: 1,
        weeksCompleted: 20,
        pills: ['Planning','Front End','Back End', 'React', 'Node.js', 'Postgres'],
        contribution: `I was the sole developer for all things Softball Science. Ui, Fron-end, Back-end, Project planning. I learned a lot in the making of the Softball Science website. for starters, It allowed me to gain experience in customer feedback. Asking the user for stories about how they would like to use the app and what features would save them time and money. The customer is always right, ans it is crucial that whoever you are working with and for has felt heard. 

        The client asked me to build the ability to inject video into thier site and the ability to upload whatever files, images, and viedos they would like into the side. Seeing as this was a side project that was making me little money, I was initally reluctant to do such intensive and time consuming work for the client. However i reminded myself that there is not just monetary value to my work. There is educational, experiencial, and reputational value to my work, and that is what i focused my attention on. Allowing for a forgiving deadline, i started my work, created a plan to follow, and wrote a Node JS backend database to hold the client's data and configured the webstie to display videos where ever was desired. I completed the work long before deadline, and gained knowledge in Node JS and embeded videos that i hadn't known before. The client was happy with the work and Expressed much gratitude.
        
        In the end, I learned new Technical, Buisness, Planning, and Communication skills in the creation of Softball Science. And continue to support my client to this day.`
      },
      {
        name: "Do Well 2 Transform",
        description: 'Do Well 2 Transform® features transformational support coaching services & hypnosis for the Mind, Body and Spirit. A coaching collaboration for those who seek meaningful change.',
        img: doWellLogo,
        link: 'https://github.com/DoWell2Transform/Transform-Website',
        deployed: 'https://dowell2transform.com/',
        role: 'Wed Developer',
        techUsed: ['ReactJs', 'SASS'],
        teamMemebers: 1,
        weeksCompleted: 1,
        pills: ['Front End', 'React', 'Bootstrap'],
        contribution: 'I was the sole develoepr for this site. The client asked for merely a functional landing page, and that is what i devlivered. This project gave me another point of experience in negotiation, plannning, and estimation of commission projects.'
      },
      {
        name: "Wine And Roses",
        description: 'Wine and Roses is a resource for asiring gradeners to find private and group lessons on flower arrangements and plant design.',
        img: wineAndRose,
        link: 'https://github.com/Bud-Partiers/WineAndRoses',
        deployed: 'https://wineandroses.us/',
        role: 'Wed Developer',
        techUsed: ['ReactJs', 'SASS'],
        teamMemebers: 1,
        weeksCompleted: 0.1,
        pills: ['Front End', 'React'],
        contribution: 'This was my first Real world functional landing page that allowed my client to advertise merchendise and encourage users to join their meetup group. I loved helping a small group of individuals who are passionate about thier plants and flowers come together and connect in more meaningfull ways! '
      },
      {
        name: "Mympy Dreams",
        description: 'Mympy is on a mission to close the poverty gap in VR technology by creating a low barrier entry into the field of VR development for low-income individuals. Mympy Dreams is a marketplace where individuals can create a profile and post their project and needs and find funding from the Mympy Dreams community.',
        img: mympyLogo,
        link: 'https://github.com/mympy-dreamers',
        deployed: 'https://mympydreamers.netlify.com/',
        role: 'Team Lead/Web Developer',
        techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'Auth0', 'NodeJS', 'Express', 'SendGrid', 'Cloudinary', 'Stripe', 'Postgres'],
        teamMemebers: 9,
        weeksCompleted: 8,
        pills: ['Team Lead','Front End','Back End', 'React', 'Node.js', 'Auth0'],
        contribution: 'I was responsible for maintaining momentum by overseeing project planning and updates, leading meetings, maintaining manager and stakeholder relationships, communicating effectively, solving conflicts, deployment, and debugging as well as contributing to the authentication of the app whenever possible.'
    
      },
    {
      name: "Review It Yourself",
      description: 'Review It Yourself will target people who want to get up and get productive and learn different skills to do projects themselves. There will be a rating system on which one is better. This will lead to the tutorials that are accurate and precise to be on top.',
      img: riyLogo,
      link: 'https://github.com/labs13-how-to',
      deployed: 'https://how-tutor.netlify.com/',
      role: 'Wed Developer',
      techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'PassportJS', 'NodeJS', 'Express', 'Postgres', 'Cloudinary', 'Filepond'],
      teamMemebers: 5,
      weeksCompleted: 5,
      pills: ['Front End', 'Back End', 'React', 'Node.js', 'Postgres', 'SQL'],
      contribution: 'I was responsible for frontend organization and  many frontend pages, such as project page, create project page, and edit project page as well as styling and debugging much of the website. I also worked on all CRUD operations and endpoints for reviews, comments, and favorites'
    },
    {
      name: "Jango Rango Dungeon",
      description: 'This project randomly Generates a map of 100 or more rooms. I used my knowledge of search algorithms and data structures to procedural generate a dungeon and be able to traverse it. We used Django to send information of the dungeon to the front end.',
      img: rangoLogo,
      link: 'https://github.com/CS-multiplayer',
      deployed: 'https://jango-rango-dungeon.netlify.com/',
      role: 'Wed Developer',
      techUsed: ['ReactJs', 'Bootstrap', 'Django'],
      teamMemebers: 3,
      weeksCompleted: 1,
      pills: ['Back End', 'React', 'Django', 'SQL'],
      contribution: 'I primarily wroked on the dungeon generation and traversal and worked with teammates to send that data to the frontend with django'
  
    },
    
    {
      name: "Luncher App",
      description: 'There are kids today in this country who go without student lunches. This app allows schools to broadcast the needs of their students by declaring an amount of donations that they would need to be fullfilled in order to provide lunches for those that go without.',
      img: luncherLogo,
      link: 'https://github.com/luncher-team/LA-Backend-Nick-Stricker',
      deployed: 'https://luncherappltrii.netlify.com/',
      role: 'Wed Developer',
      techUsed: ['ReactJs', 'Express', 'SQL', 'BcryptJS'],
      teamMemebers: 3,
      weeksCompleted: 1,
      pills: ['Back End', 'SQL', 'Encryption'],
      contribution: 'I was Solely responsible for the Back end of this project. Some key features were authentication, ability to register and edit user data, creating, editing and deleteing fundraising projects as well as donating to projects or organizations. I worked well with a team of two frontend react engineers, and helped them debug to get our product fully functional.',
      color: '#81905A'
    },
  
  ]
  const Project = (props) => {
    const [detailedProject, setDetail] = useState(null)
      console.log('project list')
      return (
        <div className="content-container">
            
            {detailedProject == null 
            ? <div className="section-container"><ProjectList setDetail={setDetail} {...props} projects={pData}/></div>
            : <ProjectDetail setDetail={setDetail} {...props} project={detailedProject}/> }
        </div>
      );
  }
  
  
  export default Project;