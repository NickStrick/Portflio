import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/Projects.css';
import React, { useState } from 'react';

import riyLogo from '../images/old/RIY.png'
import mympyLogo from '../images/old/Mympy.png'
import luncherLogo from '../images/old/luncherApp.png'
import rangoLogo from '../images/old/rangoDjango.png'
import softSciLogo from '../images/softsci.png'
import doWellLogo from '../images/doWell.png'

import ProjectList from './Projects/ProjectList.js'
import ProjectDetail from './Projects/ProjectDetail.js';



const pData = [
    {
        name: "Softball Science",
        description: 'Softball Science will target people who want to get up and get productive and learn different skills to do projects themselves. There will be a rating system on which one is better. This will lead to the tutorials that are accurate and precise to be on top.',
        img: softSciLogo,
        link: 'https://github.com/labs13-how-to',
        deployed: 'https://how-tutor.netlify.com/',
        role: 'Wed Developer',
        techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'PassportJS', 'NodeJS', 'Express', 'Postgres', 'Cloudinary', 'Filepond'],
        teamMemebers: 5,
        weeksCompleted: 5,
        contribution: 'I was responsible for frontend organization and  many frontend pages, such as project page, create project page, and edit project page as well as styling and debugging much of the website. I also worked on all CRUD operations and endpoints for reviews, comments, and favorites'
      },
      {
        name: "Do Well 2 Transform",
        description: 'Do Well 2 Transform will target people who want to get up and get productive and learn different skills to do projects themselves. There will be a rating system on which one is better. This will lead to the tutorials that are accurate and precise to be on top.',
        img: doWellLogo,
        link: 'https://github.com/labs13-how-to',
        deployed: 'https://how-tutor.netlify.com/',
        role: 'Wed Developer',
        techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'PassportJS', 'NodeJS', 'Express', 'Postgres', 'Cloudinary', 'Filepond'],
        teamMemebers: 5,
        weeksCompleted: 5,
        contribution: 'I was responsible for frontend organization and  many frontend pages, such as project page, create project page, and edit project page as well as styling and debugging much of the website. I also worked on all CRUD operations and endpoints for reviews, comments, and favorites'
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
      contribution: 'I was Solely responsible for the Back end of this project. Some key features were authentication, ability to register and edit user data, creating, editing and deleteing fundraising projects as well as donating to projects or organizations. I worked well with a team of two frontend react engineers, and helped them debug to get our product fully functional.'
  
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