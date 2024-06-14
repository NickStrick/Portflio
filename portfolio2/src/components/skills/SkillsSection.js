
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



const SkillsSection = () => {
    const skillList = [
        { skill: 'HTML5', logo: htmlLogo },
        { skill: 'CSS3', logo: cssLogo },
        { skill: 'JavaScript', logo: JSLogo },
        { skill: 'NodeJS', logo: nodeLogo },
        { skill: 'ReactJS', logo: ReactLogo },
        { skill: 'Redux', logo: reduxLogo },
        { skill: 'Python', logo: pythonLogo },
        { skill: 'SQL', logo: SQL },
        { skill: 'Git', logo: gitLogo },
        { skill: 'Postgres', logo: postgresLogo }
    ]

    return (
        <div className="skills">
            <h1 className='skills-head'>Skills</h1>
            <div className='skill-list'>
                {skillList.map((item, index) => {
                    return <SkillItem item={item} key={index} id={`${item.skill}Logo`} />
                })}
            </div>



        </div >
    );
}


export default SkillsSection;