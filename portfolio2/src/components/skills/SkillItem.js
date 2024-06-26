import React, { useState } from 'react';
import BlobSvg from '../../images/skills/skillSvg.js'
const SkillItem = (props) => {
    const { skill, logo } = props.item;

    return (
        <div className="item">
            <div className='skill-image'>
                <img src={logo} alt={skill} id={props.id} />
            </div>
            <p>{skill}</p>
            <BlobSvg  index={props.index}/>

        </div >
    );
}


export default SkillItem;