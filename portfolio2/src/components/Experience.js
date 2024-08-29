
import './styles/Experiences.scss';
import React, { useState } from 'react';

  const Experiences = (props) => {
      return (
        <div className="content-container experience-container">
            <div className="section-container">
                <div className="section-content">
                    <h1>Experience</h1>
                    <strong>Professional Summary</strong>
                    <div className="paragraph">
                        {`
Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.`}
                    </div>
                    <strong>Senior Front End Developer, Expocad by A.C.T. - Aurora, IL | May 2021 - Present</strong>
                    <div className="pararaph">
                        {`
- Planned, designed, and created application features upon client requests using CSS, HTML, and JavaScript in
a codebase of 550,000 lines of code.
- Mentored junior developers by providing guidance on best practices and industry standards in front-end
development.
- Collaborated closely with back-end developers to integrate RESTful API endpoints into front-end architecture
seamlessly.
- Ensured high-quality user experiences by rigorously testing application features against diverse user
scenarios before deployment.
- Streamlined codebase by refactoring and modularizing CSS, HTML, and JavaScript files.
`}
                    </div>
                    <strong>Team Lead, Bloom Institute of Technology | Jul 2020 - Oct 2020</strong>
                    <div className="pararaph">
                        {`
- Led a team of 8 developers/designers through full product development life cycle over 8-week project unit,
including product releases, debugging, code reviews, and stakeholder management
- Worked through agile methodologies with the scrum framework for project planning
- Collaborated and solved problems between team members of varying skill sets
- Coached students on how to present their final project
`}
                    </div>
                    <strong>Teacher's Assistant, Bloom Institute of Technology | Feb 2019 - July 2020</strong>
                    <div className="pararaph">
                        {`
- Led team of 8+ students in daily code challenges in Javascript, Java, and Python
- Reinforced technical concepts by facilitating small group study sessions
- Lead 1:1 mentoring sessions to provide impactful encouragement and support to students
- Led daily standup meetings to build camaraderie, facilitate the sharing of ideas and work progress, and
provide guidance for that week's study material
- Provided daily feedback and issue resolution of all curriculum through slack help channel or code review
                        `}
                    </div>
                </div>
            </div>
        </div>
      );
  }
  
  export default Experiences;