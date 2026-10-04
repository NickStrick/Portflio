import expocadimg from '../../public/images/projects/Expocad.png';
import redtailluxeLogo from '../../public/images/projects/redtailluxe.jpg';
import riyLogo from '../../public/images/old/RIY.png';
import mympyLogo from '../../public/images/old/Mympy.png';
import luncherLogo from '../../public/images/old/luncherApp.png';
import softSciLogo from '../../public/images/softsci.png';
import doWellLogo from '../../public/images/doWell.png';
import wineAndRose from '../../public/images/projects/rose.jpg';
import dots from '../../public/images/projects/connectingdots.jpg';
import Amanda from '../../public/images/projects/amanda.jpg';
import Luke from '../../public/images/projects/luke.png';
import Connor from '../../public/images/projects/connor.png';
import CMF from '../../public/images/projects/CMF.png';
import grandWoodLogo from '../../public/images/projects/Grand.png';
import claroflowLogo from '../../public/images/projects/claroflow.png';

const pData = [
    {
        name: "Enterprise Tradeshow Platform & Real-Time Dashboard",
        description: 'Managed architecture transitions across a 900,000-line enterprise event-management codebase. Built a real-time attendee dashboard with direct messaging, exhibitor search, and calendar sync, then profiled API data flows to cut load times and friction.',
        img: expocadimg,
        link: 'https://www.expocad.com/',
        deployed: 'https://www.expocad.com/',
        role: 'Senior Full-Stack Engineer (Acting Tech Lead)',
        techUsed: ['Architecture', 'React', 'Node.js', 'REST APIs', 'AWS', 'Webhooks', 'SQL', 'WebSockets'],
        teamMemebers: 1,
        weeksCompleted: 150,
        pills: ['Architecture', 'Front End', 'Back End', 'React', 'Node.js', 'AWS', 'WebSockets'],
        contribution: `As the primary cross-functional technical point of contact across engineering, product, and customer support, I led feature delivery on a 900,000-line enterprise event-management platform used by show managers, exhibitors, and attendees at live tradeshows.

I built a real-time attendee dashboard from the ground up, featuring direct messaging, exhibitor list searching, and calendar sync, translating reported friction from support and sales into concrete system improvements. I profiled API data flows end-to-end and refactored relational data patterns, achieving a 30% application performance improvement.

Beyond the code, I lead client demo calls with enterprise customers and demo the platform live at national trade shows, turning what customers ask for into scoped Jira tickets. I worked directly with stakeholders to map pain points to solutions, mentored junior engineers through the codebase, and helped ship changes that reduced user friction by 22%, protecting renewal revenue for the platform's largest enterprise accounts.`,
        color: '#0ea5e9', hover: '#0369a1',
        type: 'Enterprise SaaS Platform'
      },
      {
        name: "Redtail Luxe",
        description: 'Designed and deployed serverless checkout engines and private, metadata-driven client portals for luxury retail environments demanding elite authentication. Streamlined multi-input checkout into a structured, linear workflow, lifting conversion by 30% in month one.',
        img: redtailluxeLogo,
        link: 'https://www.redtailluxe.com/',
        deployed: 'https://www.redtailluxe.com/',
        role: 'Web Developer, Platform Engineer, and Architect',
        techUsed: ['Architecture', 'Next.js', 'Node.js', 'AWS S3', 'OAuth 2.0', 'Auth0 Actions'],
        teamMemebers: 1,
        weeksCompleted: 4,
        pills: ['Architecture', 'Front End', 'Back End', 'Next.js', 'AWS S3', 'Auth0', 'OAuth 2.0'],
        contribution: `A luxury watch retailer came to me with a Wix site that looked good but converted poorly: testimonials were buried, and the checkout process was a single wall of confusing inputs. I redesigned the landing experience to build trust faster, moving testimonials and company story above the fold, then rebuilt checkout as a step-by-step, linear flow with no more than five inputs per screen. Conversions rose 30% in month one.

That project became the blueprint for the Digital Vault: a private, single-use access architecture for high-touch B2B and luxury clients. Using Next.js, Node.js, and AWS S3, I designed serverless checkout engines and secure metadata client portals, with Auth0 Actions and OAuth 2.0 enforcing zero-trust access without adding friction for the end client.

The architecture uses a Post-User-Registration Auth0 Hook to enrich and sync client profiles server-side, keeping sensitive identity logic decoupled from the application backend, reducing database query load, and preventing downstream code complexity as the client list grows.`,
        color: '#caa14b', hover: '#8a6d1f',
        type: 'Luxury B2B / Secure Retail Architecture'
      },
    {
        name: "CM Florals",
        description: 'An e-commerce store and lead capture website for a professional florist with 45 years of experience.',
        img: CMF,
        link: 'https://github.com/NickStrick/CM-Florals',
        deployed: 'https://www.cmfloralsandgifts.com/',
        role: 'Web Developer, Platform Engineer, and Architect',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 4,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``,
        color:'#d26cec', hover: '#a66cec',
        type: 'Business Website'
      },
      {
        name: "Grand Wood and Glass",
        description: 'An e-commerce store and lead capture website for a professional woodworking and glasswork company.',
        img: grandWoodLogo,
        link: 'https://www.grandwoodandglass.com/',
        deployed: 'https://www.grandwoodandglass.com/',
        role: 'Web Developer, Platform Engineer, and Architect',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 4,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``,
        color:'#d26cec', hover: '#a66cec',
        type: 'Business Website'
      },
      
  {
        name: "Connecting Dots LatinX",
        description: 'A website for the LatinX community of Chicago to connect with each other and find events in the area. Connecting Dots uplifts the LatinX community by providing a platform for networking, sharing resources, and building relationships. ',
        img: dots,
        link: 'https://github.com/NickStrick/Connecting-Dots',
        deployed: 'https://connecting-dots-five.vercel.app/',
        role: 'Web Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        teamMemebers: 1,
        weeksCompleted: 1,
        pills: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: `I was the sole developer for Connecting Dots. UI, Front-end, Back-end, and Project Planning—I handled everything. Building this site was deeply fulfilling. It let me serve the LatinX community of Chicago and form real connections with members. I was proud to build a platform that helped bring people together and grow the community.

The team needed a site that showcased events, shared updates, and encouraged new members to get involved. I spoke with organizers to understand their goals and translated that into features that were practical and engaging. The site became more than a page—it became a digital home for the community.

Though unpaid, the project offered huge value in experience. I built a Node.js backend, a React front-end, and created a flexible system for content updates. I learned a lot, delivered early, and saw how impactful tech can be when it supports a real mission.

In the end, I gained technical and planning skills, and a sense of pride in building something that matters.`
        ,color: '#81329E', hover: '#751580',
        type: 'Educator & Event Organizer Website'
},
   {
        name: "Coach Luke Stricker",
        description: 'A lead capture website for hitting lessons taught by an experienced professional coach.',
        img: Luke,
        link: 'https://github.com/NickStrick/Coach-Luke',
        deployed: 'https://coach-luke-stricker.vercel.app/',
        role: 'Web Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 0.2,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``,
        color: '#f43f5e', hover:'#460b0b',
        type: 'Coach/Trainer Website'
      },
   {
        name: "Connor Murray Music",
        description: 'A lead capture website for music lessons taught by an experienced professional musician.',
        img: Connor,
        link: 'https://github.com/NickStrick/Connor-Murray-Music',
        deployed: 'https://connor-murray-music.vercel.app/',
        role: 'Web Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 0.2,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``,
        color: '#ffae00', hover:'#ff7a00',
        type: 'Teacher Website'
      },
      
    {
        name: "Softball Science",
        description: 'Softball Science was created by two women with a long history in the world of softball and life. We have used our combined expertise, that includes over 30 years of coaching experience along with 20 years of data analytics to create Softball Science. We have created a metrically driven program specifically designed to enhance the raw power behind your softball swing.',
        img: softSciLogo,
        link: 'https://github.com/Stricker-Softball',
        deployed: 'https://www.softball-science.com/',
        role: 'Web Developer',
        techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'PassportJS', 'NodeJS', 'Express', 'Postgres', 'Cloudinary', 'Filepond'],
        teamMemebers: 1,
        weeksCompleted: 20,
        pills: ['Planning','Front End','Back End', 'React', 'Node.js', 'Postgres'],
        contribution: `I was the sole developer for all things Softball Science: UI, front end, back end, and project planning. I learned a lot building this site. For starters, it gave me real experience gathering customer feedback, asking the client for stories about how they wanted to use the app and which features would save them time and money. It is crucial that whoever you are working with and for feels heard.

The client asked me to build the ability to embed video into their site and to upload whatever files, images, and videos they wanted. Since this was a side project that paid very little, I was initially reluctant to take on such intensive, time-consuming work. However, I reminded myself that my work has more than monetary value. It has educational, experiential, and reputational value, and that is where I focused my attention. With a forgiving deadline agreed, I created a plan, wrote a Node.js backend and database to hold the client's data, and configured the website to display videos wherever they were needed. I finished well ahead of the deadline and gained Node.js and video-embedding knowledge I didn't have before. The client was happy with the work and expressed a lot of gratitude.

In the end, I gained new technical, business, planning, and communication skills building Softball Science, and I continue to support this client to this day.`
      ,color: '#C15E94', hover: '#994b76',
      type: 'Coach/Trainer Website'
      },
      {
        name: "Do Well 2 Transform",
        description: 'Do Well 2 Transform® features transformational support coaching services & hypnosis for the Mind, Body and Spirit. A coaching collaboration for those who seek meaningful change.',
        img: doWellLogo,
        link: 'https://github.com/DoWell2Transform/Transform-Website',
        deployed: 'https://dowell2transform.com/',
        role: 'Web Developer',
        techUsed: ['ReactJs', 'SASS'],
        teamMemebers: 1,
        weeksCompleted: 1,
        pills: ['Front End', 'React', 'Bootstrap'],
        contribution: 'I was the sole developer for this site. The client asked for a simple, functional landing page, and that is what I delivered. This project gave me more experience in negotiating, planning, and estimating commissioned projects.'
      ,color: '#7FB98D', hover: '#55815f',
      type: 'Coach/Trainer Website'
      },
  {
        name: "Amanda G Professional",
        description: 'A professional profile website for a BCBA-certified psychologist and neurodivergent therapist.',
        img: Amanda,
        link: 'https://github.com/NickStrick/Amanda-Grau-professional-profile',
        deployed: 'https://amanda-grau-professional-profile.vercel.app/',
        role: 'Web Developer',
        techUsed: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3'],
        teamMemebers: 1,
        weeksCompleted: 0.2,
        pills: ['Planning','Front End','AWS S3', 'React', 'Next.js', 'TypeScript', 'TailwindCSS'],
        contribution: ``,
        color:'#65a30d', hover:'#166534',
        type: 'Professional Profile Website'
      },
      {
        name: "Claro Flow",
        description: 'A sleek landing page for ClaroFlow, a modern workflow SaaS tool built for remote teams. The site highlights features like task automation, team collaboration, and real-time analytics to boost productivity and streamline operations.',
        img: claroflowLogo,
        link: 'https://github.com/NickStrick/ClaroFlow',
        deployed: 'https://claro-flow.vercel.app/',
        role: 'Web Developer',
        techUsed: ['Planning', 'Front End', 'React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS S3', 'AWS Lambda', 'AWS DynamoDB'],
        teamMemebers: 1,
        weeksCompleted: 1,
        pills: ['Planning','Front End','React', 'Next.js', 'TypeScript', 'TailwindCSS', 'AWS'],
        contribution: `I was the sole developer behind the ClaroFlow landing page—a sleek, responsive site for a modern workflow SaaS product. I built the UI to reflect the app’s streamlined focus: speed, clarity, and productivity. Every section was crafted to highlight key features like automation, collaboration tools, and analytics, while maintaining a clean and intuitive design.

Working from marketing copy and product goals, I designed and developed the front end from scratch, ensuring smooth interactions and a strong first impression. The site includes dynamic pricing sections, testimonials, and a call-to-action system to drive early signups. I optimized performance and responsiveness across devices, using lightweight styling and scalable components.

This project helped me improve my skills in UI design, front-end speed optimization, and building user-focused landing experiences that convert.`
      ,color: '#2563EB', hover: '#2253bd',
      type: 'Funnel Website'
},
      {
        name: "Wine And Roses",
        description: 'Wine and Roses is a resource for aspiring gardeners to find private and group lessons on flower arrangements and plant design.',
        img: wineAndRose,
        link: 'https://github.com/Bud-Partiers/WineAndRoses',
        deployed: '',
        role: 'Web Developer',
        techUsed: ['ReactJs', 'SASS'],
        teamMemebers: 1,
        weeksCompleted: 0.1,
        pills: ['Front End', 'React'],
        contribution: 'This was my first real-world landing page. It let my client advertise merchandise and encourage visitors to join their meetup group. I loved helping a small group of people who are passionate about their plants and flowers come together and connect in more meaningful ways!'
      , color: '#71685D', hover: '#4d4133',
      type: 'Event Organizer Website'
      },
      {
        name: "Mympy Dreams",
        description: 'Mympy is on a mission to close the poverty gap in VR technology by creating a low barrier entry into the field of VR development for low-income individuals. Mympy Dreams is a marketplace where individuals can create a profile and post their project and needs and find funding from the Mympy Dreams community.',
        img: mympyLogo,
        link: 'https://github.com/mympy-dreamers',
        deployed: '',
        role: 'Team Lead/Web Developer',
        techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'Auth0', 'NodeJS', 'Express', 'SendGrid', 'Cloudinary', 'Stripe', 'Postgres'],
        teamMemebers: 9,
        weeksCompleted: 8,
        pills: ['Team Lead','Front End','Back End', 'React', 'Node.js', 'Auth0'],
        contribution: 'I was responsible for maintaining momentum by overseeing project planning and updates, leading meetings, maintaining manager and stakeholder relationships, communicating effectively, solving conflicts, deployment, and debugging as well as contributing to the authentication of the app whenever possible.'
        ,color: '#6483C1', hover: '#284c94',
      type: 'Crowdfunding E-Commerce'
      },
    {
      name: "Review It Yourself",
      description: 'Review It Yourself will target people who want to get up and get productive and learn different skills to do projects themselves. There will be a rating system on which one is better. This will lead to the tutorials that are accurate and precise to be on top.',
      img: riyLogo,
      link: 'https://github.com/labs13-how-to',
      deployed: '',
      role: 'Web Developer',
      techUsed: ['ReactJs', 'Redux', 'Bootstrap', 'PassportJS', 'NodeJS', 'Express', 'Postgres', 'Cloudinary', 'Filepond'],
      teamMemebers: 5,
      weeksCompleted: 5,
      pills: ['Front End', 'Back End', 'React', 'Node.js', 'Postgres', 'SQL'],
      contribution: 'I was responsible for front-end organization and many front-end pages, such as project page, create project page, and edit project page as well as styling and debugging much of the website. I also worked on all CRUD operations and endpoints for reviews, comments, and favorites.'
      ,color: '#f89c4c', hover: '#a15c1f',
      type: 'Tutorial Marketplace'
    },
    
    {
      name: "Luncher App",
      description: 'There are kids today in this country who go without student lunches. This app allows schools to broadcast the needs of their students by declaring an amount of donations that they would need fulfilled in order to provide lunches for those that go without.',
      img: luncherLogo,
      link: 'https://github.com/luncher-team/LA-Backend-Nick-Stricker',
      deployed: '',
      role: 'Web Developer',
      techUsed: ['ReactJs', 'Express', 'SQL', 'BcryptJS'],
      teamMemebers: 3,
      weeksCompleted: 1,
      pills: ['Back End', 'SQL', 'Encryption'],
      contribution: 'I was solely responsible for the back end of this project. Some key features were authentication, ability to register and edit user data, creating, editing, and deleting fundraising projects as well as donating to projects or organizations. I worked well with a team of two front-end React engineers, and helped them debug to get our product fully functional.',
      color: '#81905A', hover: '#667445',
      type: 'Non-Profit Fundraising App'
    },
  
  ]

const slugify = (name) =>
  name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const projects = pData.map((project) => ({ ...project, slug: slugify(project.name) }));

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
