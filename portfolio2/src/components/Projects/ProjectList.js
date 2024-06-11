import React, { useState, useEffect } from 'react';
import Project from './Project.js';
// let sWidth = screen.width;

const ProjectList = (props) => {
    let sWidth = window.screen.width;
    let middle = props.projects.length % 2 !== 0 ? ((props.projects.length + 1) / 2) : props.projects.length / 2;

    return (
        <>


            <div className="projects section-content" >
                <h1 className='port-head'>Projects</h1>
                <div className='projects-columns '>
                    <div className='project-list'>
                        {props.projects.map((project, index) => {

                            if (middle > index) {
                                return <Project project={project} key={index} index={index} history={props.history} />
                            }
                        }
                        )}</div>
                    <div className='project-list'>
                        {props.projects.map((project, index) => {
                            if (middle <= index) {
                                return <Project project={project} key={index} index={index} history={props.history} />
                            }
                        }
                        )}</div>
                </div>

            </div></>
    );
}


export default ProjectList;