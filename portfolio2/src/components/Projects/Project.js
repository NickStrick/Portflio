import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import ArrowSvg from '../../images/svg/projCard.js'
import WaveSvg from '../../images/projects/itemSvg.js'

const Project = (props) => {
    if (!(props.project.name)) {
        props.project.name = 'ERROR'
    }
    const { img, description, name, link, pills } = props.project

    function handleProjClick(){
        console.log('click', props.project)
        window.scrollTo({ top: 0, left: 0 })
        props.setDetail(props.project)
    }
    console.log(pills)
    return (

        <div className={`project-container item proj-item-${props.index}`} onClick={handleProjClick}>
            <div className="img-back"></div>
            <div className={`img-overflow`} >
            <WaveSvg fillColor={'#28da00'} index={props.index}/>
            </div>
            <div className="img-overlay">
                <span>{name}</span>
                <div className="info-pill-conatiner">
                    {pills.map(pill => {
                        return <div className="info-pill">{pill}</div>
                    })}
                </div>
             </div>
            
            <div className="svg-contain">
                <ArrowSvg fillColor={'#28da00'} index={props.index}/>
                <FontAwesomeIcon icon={faArrowRight} />
                {/* <div className="svg-text">{'More'}</div> */}
                {/* <img className="svg-text" src={arrow} /> */}
            </div>

            {/* <img src={img} alt={`${name} smol pic`} /> */}
            
            {/* <div className="info"> */}
                
                {/* <p aria-label={'project-description'}>{description}</p> */}
                {/* <button class="main-btn" target="_blank" onClick={projectPage}>Learn More<span className="main-btn-overlay"></span></button> */}
                {/* <div className='project-links'>

                    <img src={gitLogo} target="_blank" onClick={() => window.open(link)} />
                    {props.project.deployed && <button target="_blank" onClick={() => window.open(props.project.deployed)}>Site</button>}</div> */}

            {/* </div> */}

        </div >
    );
}


export default Project;