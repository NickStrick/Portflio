
import './SkillsSection.scss';
import SkillItem from './SkillItem.js';

import ReactLogo from '../../../public/images/old/skills/logo.svg';
import htmlLogo from '../../../public/images/old/skills/HTML5.png';
import cssLogo from '../../../public/images/old/skills/CSS3.png';
import JSLogo from '../../../public/images/old/skills/JS.png';
import nodeLogo from '../../../public/images/old/skills/nodejs-logo.png';
import gitLogo from '../../../public/images/old/skills/git.png';
import reduxLogo from '../../../public/images/old/skills/redux.png';
import SQL from '../../../public/images/old/skills/SQL.png';
import postgresLogo from '../../../public/images/old/skills/postgres.png';
import pythonLogo from '../../../public/images/old/skills/python.png';
import jquerylogo from '../../../public/images/old/skills/jquery.png';

import AWSLogo from '../../../public/images/skills/AWS.png';
import AILogo from '../../../public/images/skills/gemini.png';
import flutterLogo from '../../../public/images/skills/flutter.png';
import nextLogo from '../../../public/images/skills/next.png';
import TSLogo from '../../../public/images/skills/ts.png';
const SkillsSection = () => {
    // const specialSkills = [
    //     { skill: 'Full-Stack Development', logo: ReactLogo.src },
    //     { skill: 'Technical Interviewing', logo: ReactLogo },
    //     { skill: 'AWS Cloud Essentials', logo: ReactLogo },
    //     { skill: 'Google AI Essentials', logo: ReactLogo },
    //     { skill: 'React Native', logo: ReactLogo }
    // ];
    const techSkillList = [
        { skill: 'JavaScript', logo: JSLogo.src },
        { skill: 'AWS', logo: AWSLogo.src },
        { skill: 'AI', logo: AILogo.src },
        { skill: 'Flutter', logo: flutterLogo.src },
         { skill: 'React Native', logo: ReactLogo.src },
        { skill: 'React.js', logo: ReactLogo.src },
        { skill: 'Next.js', logo: nextLogo.src },
        { skill: 'TypeScript', logo: TSLogo.src },
        { skill: 'Jquery', logo: jquerylogo.src },
        { skill: 'Node.js', logo: nodeLogo.src },
        { skill: 'Redux', logo: reduxLogo.src },
        { skill: 'Python', logo: pythonLogo.src },
        { skill: 'SQL', logo: SQL.src },
        { skill: 'Git', logo: gitLogo.src },
        { skill: 'Postgres', logo: postgresLogo.src },
        { skill: 'HTML5', logo: htmlLogo.src },
        { skill: 'CSS3', logo: cssLogo.src },
    ]
//     const softSkillList = [
//     { skill: 'Leadership', logo: '' },
//     { skill: 'Mentorship', logo: '' },
//     { skill: 'Collaboration', logo: '' },
//     { skill: 'Problem Solving', logo: '' },
//     { skill: 'Critical Thinking', logo: '' },
//     { skill: 'Agile Methodologies', logo: '' },
//     { skill: 'Client Management', logo: '' },
//     { skill: 'Technical Documentation', logo: '' },
//     { skill: 'Communication', logo: '' },
//     { skill: 'Conflict Resolution', logo: '' },
//     { skill: 'Planning & Organization', logo: '' },
//     { skill: 'Adaptability', logo: '' },
// ];

    return (
        <div className="skills section-container">
            <div className="section-content">
                <h1 className='port-head'>Skills</h1>
                <div className='skill-section'>
                    {/* <div className='skill-list-title'>Tech Stack</div> */}
                    <div className='skill-list'>
                        {techSkillList.map((item, index) => {
                            return <SkillItem item={item} index={index} key={index} id={`${item.skill}Logo`} />
                        })}
                    </div>
                </div>
                {/* <div className='skill-section'>
                    <div className='skill-list-title'>Soft Skills</div>
                    <div className='skill-list'>
                        {softSkillList.map((item, index) => {
                            return <SkillItem item={item} index={index} key={index} id={`${item.skill}Logo`} />
                        })}
                    </div>
                </div> */}
            </div>
        </div >
    );
}


export default SkillsSection;