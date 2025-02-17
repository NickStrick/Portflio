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

import ProjectList from './Projects/ProjectList.js'
import ProjectDetail from './Projects/ProjectDetail.js';



const pData = [
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
        
        In the end, I learned new Technical, Buisness, Planning, and Communication skills in the creation of Softball Science. And continue to suport my client to this day.`
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