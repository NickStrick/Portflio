import React, { useState } from 'react';

const SkillItem = (props) => {
    const { skill, logo } = props.item;

    return (
        <div className="item">
            <div className='skill-image'>
                <img src={logo} alt={skill} id={props.id} />
            </div>
            <p>{skill}</p>

        </div >
    );
}


export default SkillItem;