
import './styles/Experiences.scss';
import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faGraduationCap, faBriefcase, faLaptopCode, faFaceGrinStars} from '@fortawesome/free-solid-svg-icons'

  const Experiences = (props) => {
      return (
        <div className="content-container experience-container">
            <VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="February 2022 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faLaptopCode} />}
  >
    <h3 className="vertical-timeline-element-title">Senior Front End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Expocad by A.C.T</span><span>Aurora, Illinois</span></h4>
    <p className="vertical-timeline-p">
    On-call support to mentor junior developers by providing guidance on best practices and industry standards throughout the development process. 
Planned, maintained, supported, and troubleshooted complex, interactive web application features by following coding guidelines and rigorously testing against diverse user scenarios before deployment. 
Streamlined and optimized codebase by refactoring and modularizing CSS3, HTML5, and JavaScript files.

    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2021 - February 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faLaptopCode} />}
  >
    <h3 className="vertical-timeline-element-title">Front End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Expocad by A.C.T</span><span>Aurora, Illinois</span></h4>
    <p className="vertical-timeline-p">
    Planned, designed, and developed application features upon client requests Git, CSS3, HTML5, and JavaScript in a codebase of 550,000 lines of code. 
Collaborated closely with back-end developers and navigated C# code to integrate RESTful API endpoints into front-end architecture seamlessly. 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="November 2020 - May 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faBriefcase} />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Self Employed</span><span>Remote</span></h4>
    <p className="vertical-timeline-p">
    Schedule and guide on-time delivery of complex web projects for clients
Collaborate and negotiate with clients on project planning, feature count, and cost
Develop and manage scalable, high-quality, web projects in accordance with client proposals and specifications.

    </p>
  </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="February 2019 - October 2020"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faPeopleGroup} />}
  >
    <h3 className="vertical-timeline-element-title">Teacher’s assistant/Team Lead</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Bloom Institute of Technology</span><span>Remote</span></h4>
    <p className="vertical-timeline-p">
    Led a cross-functional team of 8 developers/designers through full product development life cycle over 8-week project unit, including product releases, debugging, code reviews, and stakeholder management 
Responsible for maintaining momentum by overseeing project planning, leading meetings, maintaining stakeholder relationships, communicating effectively, solving conflicts, deployment, debugging, and being flexible to accommodate team needs, including debugging and Automate Testing.
Mentored student developers by participating in code reviews, knowledge sharing, and project planning as we explored emerging front-end technologies together
Lead 1:1 mentoring sessions to provide impactful encouragement and support to students
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faPeopleGroup} />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p className="vertical-timeline-p">
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="October 2018 - October 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap} />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Certification</span><span>Bloom Institute of Technology</span></h4>
    <p className="vertical-timeline-p">
    Bloom Institute of Technology is a 9+ month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science and fullstack web development.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
  contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faFaceGrinStars} />}
  >
    <h3 className="vertical-timeline-element-title">Coding Pupil</h3>
    <p>College credit computer science classes, hackathons and game developent projects</p>
    <p className="vertical-timeline-p">
      A passion for game development and creative design.  </p><p>Wonder and awe at the power of computer software and the engineering behind it.
    </p>
  </VerticalTimelineElement>
  
</VerticalTimeline>
        </div>
      );
  }
  
  export default Experiences;

  /*
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
            */