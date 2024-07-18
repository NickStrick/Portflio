import React from 'react';
import './ProjectDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import WaveSvg from '../../images/projects/project-split.js'
import WaveSvg2 from '../../images/projects/project-split-2.js'

const Project = (props) => {
    if (!(props.project.name)) {
        props.project.name = 'ERROR'
    }
    const { img, description, name, link, role, contribution, deployed } = props.project

    function buttonClick(link){
        window.open(link, "_blank");
    }
    function returnBack(){
        props.setDetail(null) 
    }
    return (<>
        <div className="section-container project-detials">
            <div className=" section-content" >
                <div className="proj-return" onClick={returnBack}><FontAwesomeIcon icon={faArrowLeft}/> Return to list</div>
                    <h1 className='port-head'>{name}</h1>
                    <div className="project-info">
                        <p className="quick-info"><strong>My Role</strong> {role}</p>
                        <p className="quick-info"><strong>What We Did</strong> {description}</p>
                    </div>
                    <div className="project-btns">
                        <button onClick={()=>buttonClick(deployed)} className="project-a main-btn" >Deployed Site</button>
                        <button onClick={()=>buttonClick(link)} className="project-a main-btn main-btn-icon"><FontAwesomeIcon icon={faGithub}/></button>
                    </div>
            </div>
        </div>
       
        <div className="image-section-container"> 
        <WaveSvg2 index={'1'}/>
        <div className="section-container section-container-image-background" style={{backgroundImage:`url(${img})`}}>
        </div>
        <div className="section-container section-container-image">
            <div className=" section-content proj-image-content" >
                    <div className="project-image" style={{backgroundImage:`url(${img})`}}></div>
            </div>
            
        </div>
        <div className=" section-content proj-image-content" >
                    <div className="project-image" style={{backgroundImage:`url(${img})`}}></div>
            </div>
        <WaveSvg2 index={'2'}/>
        </div>
        
        <div className="section-container project-description">
            <div className=" section-content" >
                    <p>{description}</p>
                    <p>{contribution}</p>
            </div>
        </div>
        </>
    );
}


export default Project;