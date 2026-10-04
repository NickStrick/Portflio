'use client';

import './styles/Experiences.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faGraduationCap, faBriefcase, faLaptopCode, faFaceGrinStars, faFileArrowDown} from '@fortawesome/free-solid-svg-icons'

  const Experiences = () => {
      return (
        <div className="content-container experience-container">
          <div className="section-content">
          <div className="experience-header">
            <h1 className='port-head'>Experience</h1>
            <a
              href="/NickStricker-SolutionsEngineer-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inverted experience-resume-btn"
            >
              <FontAwesomeIcon icon={faFileArrowDown} /> Download Résumé (PDF)
            </a>
          </div>
          <p>6+ years of full-stack engineering experience translating complex architecture into measurable business outcomes, from enterprise platform delivery to founding a B2B consulting practice. </p>
          <p>{`Let's align your technical architecture with your business goals.`}</p>
            </div><VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="August 2025 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faLaptopCode} />}
  >
    <h3 className="vertical-timeline-element-title">Founder / Solutions Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Stricker Digital</span><span>Chicago, Illinois</span></h4>
    <p className="vertical-timeline-p">
    Ran the full cycle for RedtailLuxe, a luxury watch retailer: discovery surfaced trust gaps and checkout friction, then demos and a proof of concept closed the deal in about a month, followed by a 30% conversion lift in month one.
    Lead technical discovery on every engagement, assessing current-state architecture, business goals, pain points, and budget before proposing a solution.
    Design and pitch solution architectures (React/Next.js, Node.js/REST APIs, AWS, third-party integrations), explaining tradeoffs like payment security and SEO in plain language that wins buy-in.
    Built a multi-tenant SaaS e-commerce platform on Next.js and AWS serving multiple live clients, with Clover, Square, and Converge payments, OAuth 2.0 authentication, and AI admin tools.
    Designed and deployed PCI-compliant AWS infrastructure, including static IP configuration and payment processor authentication; learned Lightsail in one week to launch a florist&apos;s Converge integration before Valentine&apos;s Day.
    Drove 24-43% conversion gains across client projects, instrumenting GA4 up front on every engagement to measure outcomes and prove ROI.
    Built the pipeline from scratch with 2,000+ cold calls and a Gemini research workflow that cut prospect research from 30 minutes to under 2.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="May 2021 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faLaptopCode} />}
  >
    <h3 className="vertical-timeline-element-title">Senior Full-Stack Engineer (Acting Tech Lead)</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Expocad by A.C.T</span><span>Aurora, Illinois</span></h4>
    <p className="vertical-timeline-p">
    Lead client demo calls with enterprise customers: walk them through the platform, field technical and business process questions, and turn their requests into scoped requirements.
    Deliver in-person demos at national trade shows annually to show managers, exhibitors, and enterprise clients, covering booth rental workflows, interactive floor plans, and contract completion.
    Translate customer feedback into engineering tickets in Jira, assign work across the team, and validate every ticket before moving it to done, acting as the feedback loop between customers and engineering.
    Improved application performance 30% by profiling and optimizing SQL queries, API data flows, and UI in a 900,000-line codebase.
    Reduced user friction 22% by mining support ticket trends and usage data to find friction hotspots.
    Architected and shipped a real-time attendee dashboard from scratch (React, Node.js, REST APIs, SQL, live webhook messaging with chat, file uploads, and group channels). Still live and growing.
    Mentored junior engineers and rolled out an AI-assisted development workflow for the team (Claude Code and Codex with line-by-line review).
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
    date="2020 - 2021"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faPeopleGroup} />}
  >
    <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Bloom Institute of Technology</span><span>Remote</span></h4>
    <p className="vertical-timeline-p">
    Mentored 10+ students through an 18-month full-stack bootcamp, explaining technical concepts until they clicked.
Led a cross-functional team of 8 developers/designers through full product development life cycle over 8-week project unit, including product releases, debugging, code reviews, and stakeholder management 
Responsible for maintaining momentum by overseeing project planning, leading meetings, maintaining stakeholder relationships, communicating effectively, solving conflicts, deployment, debugging, and being flexible to accommodate team needs, including debugging and Automate Testing.
Mentored student developers by participating in code reviews, knowledge sharing, and project planning as we explored emerging front-end technologies together
Lead 1:1 mentoring sessions to provide impactful encouragement and support to students
    </p>
  </VerticalTimelineElement>
  {/* <VerticalTimelineElement
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
  </VerticalTimelineElement> */}
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="October 2018 - October 2019"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faGraduationCap} />}
  >
    <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Full Stack Web Developer + Computer Science Certificate</span><span>Bloom Institute of Technology</span></h4>
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

