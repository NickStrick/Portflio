
import './SkillsSection.scss';
import React, { useState } from 'react';
import SkillItem from './SkillItem.js';

import ReactLogo from '../../images/old/skills/logo.svg';
import htmlLogo from '../../images/old/skills/HTML5.png';
import cssLogo from '../../images/old/skills/CSS3.png';
import JSLogo from '../../images/old/skills/JS.png';
import nodeLogo from '../../images/old/skills/nodejs-logo.png';
import gitLogo from '../../images/old/skills/git.png';
import reduxLogo from '../../images/old/skills/redux.png';
import SQL from '../../images/old/skills/SQL.png';
import postgresLogo from '../../images/old/skills/postgres.png';
import pythonLogo from '../../images/old/skills/python.png';
import jquerylogo from '../../images/old/skills/jquery.png';

import AWSLogo from '../../images/skills/AWS.png';
import AILogo from '../../images/skills/gemini.png';
import flutterLogo from '../../images/skills/flutter.png';
import nextLogo from '../../images/skills/next.png';
import TSLogo from '../../images/skills/ts.png';
const SkillsSection = () => {
    const specialSkills = [
        { skill: 'Full-Stack Development', logo: ReactLogo },
        { skill: 'Technical Interviewing', logo: ReactLogo },
        { skill: 'AWS Cloud Essentials', logo: ReactLogo },
        { skill: 'Google AI Essentials', logo: ReactLogo },
        { skill: 'React Native', logo: ReactLogo }
    ];
    const techSkillList = [
        { skill: 'JavaScript', logo: JSLogo },
        { skill: 'AWS', logo: AWSLogo },
        { skill: 'AI', logo: AILogo },
        { skill: 'Flutter', logo: flutterLogo },
         { skill: 'React Native', logo: ReactLogo },
        { skill: 'React.js', logo: ReactLogo },
        { skill: 'Next.js', logo: nextLogo },
        { skill: 'TypeScript', logo: TSLogo },
        { skill: 'Jquery', logo: jquerylogo },
        { skill: 'Node.js', logo: nodeLogo },
        { skill: 'Redux', logo: reduxLogo },
        { skill: 'Python', logo: pythonLogo },
        { skill: 'SQL', logo: SQL },
        { skill: 'Git', logo: gitLogo },
        { skill: 'Postgres', logo: postgresLogo },
        { skill: 'HTML5', logo: htmlLogo },
        { skill: 'CSS3', logo: cssLogo },
    ]
    const softSkillList = [
    { skill: 'Leadership', logo: '' },
    { skill: 'Mentorship', logo: '' },
    { skill: 'Collaboration', logo: '' },
    { skill: 'Problem Solving', logo: '' },
    { skill: 'Critical Thinking', logo: '' },
    { skill: 'Agile Methodologies', logo: '' },
    { skill: 'Client Management', logo: '' },
    { skill: 'Technical Documentation', logo: '' },
    { skill: 'Communication', logo: '' },
    { skill: 'Conflict Resolution', logo: '' },
    { skill: 'Planning & Organization', logo: '' },
    { skill: 'Adaptability', logo: '' },
];

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