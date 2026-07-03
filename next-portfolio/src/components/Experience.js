
import './styles/Experiences.scss';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup, faGraduationCap, faBriefcase, faLaptopCode, faFaceGrinStars} from '@fortawesome/free-solid-svg-icons'

  const Experiences = () => {
      return (
        <div className="content-container experience-container">
          <div className="section-content">
          <h1 className='port-head'>Experience</h1>
          <p>Six years of full-stack engineering experience translating complex architecture into measurable business outcomes, from enterprise platform delivery to founding a B2B consulting practice. </p>
          <p>{`Let's align your technical architecture with your business goals.`}</p>
            </div><VerticalTimeline>
              <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="October 2025 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faLaptopCode} />}
  >
    <h3 className="vertical-timeline-element-title">Solutions Architect / Engineer & Founder</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Stricker Digital</span><span>Chicago, Illinois</span></h4>
    <p className="vertical-timeline-p">
    Founded and operate a boutique enterprise architecture and web consulting practice, running technical discovery and delivering high-end web frameworks, custom website builder engines, and security micro-services for B2B and luxury clients.
Architecture & Security
Architected secure, single-use access points and workflows for luxury B2B ecosystems, including serverless checkout engines, Auth0/OAuth 2.0 identity pipelines, and private client portals. Built event scheduling platforms, booking sites with integrated payment processing, and e-commerce storefronts with order management and analytics dashboards. Developed an internal web builder tool to streamline delivery across client engagements.
Discovery & Business Growth
Run enterprise discovery calls to scope architecture and map pain points to solutions, translating tradeoffs into plain-language business impact. Execute organic content strategy and outbound to build pipeline, and implemented automated workflows for client onboarding, order confirmations, and retention.

    </p>
  </VerticalTimelineElement>
   <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="January 2025 - Present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faLaptopCode} />}
  >
    <h3 className="vertical-timeline-element-title">Senior Software Engineer / Lead Technical Contributor</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Expocad by A.C.T</span><span>Aurora, Illinois</span></h4>
    <p className="vertical-timeline-p">
    Led full-stack feature shipments across a 600,000-line enterprise event management platform, owning both client-facing interfaces and backend integration. Acted as the primary cross-functional technical point of contact across engineering, product management, and customer support, translating reported friction into system improvements.
Built a real-time messaging system using WebSockets, modeled after Microsoft Teams, enabling direct and group communication across the platform. Contributed to full-stack feature delivery by building and consuming C# .NET API endpoints and executing schema migrations to support evolving platform requirements.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="February 2022 - January 2025"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<FontAwesomeIcon icon={faLaptopCode} />}
  >
    <h3 className="vertical-timeline-element-title">Senior Front End Developer</h3>
    <h4 className="vertical-timeline-element-subtitle"><span>Expocad by A.C.T</span><span>Aurora, Illinois</span></h4>
    <p className="vertical-timeline-p">
    Planned, built, and maintained complex interactive features across a large-scale enterprise event management platform used by show managers, exhibitors, and attendees.
Engineered a multi-step contracting workflow to guide users through structured data entry and approval processes. Designed and built customizable analytics dashboards tailored to three distinct user roles, show managers, exhibitors, and attendees, each with configurable views and data display properties for digesting event performance and engagement data.
Built interactive floorplan views and a real-time attendee dashboard with messaging, exhibitor search, and calendar sync. Profiled API data flows and refactored relational data patterns to achieve a 30% application performance improvement and a 22% reduction in user friction. Streamlined and optimized the codebase through refactoring and modularizing CSS3, HTML5, and JavaScript files. Mentored junior developers on-call, providing guidance on best practices, coding standards, and debugging across the development lifecycle.
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
                    <strong>{`Teacher's Assistant, Bloom Institute of Technology | Feb 2019 - July 2020`}</strong>
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
