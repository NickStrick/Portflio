import React from 'react';

import ArrowSvg from '../../images/svg/projCard.js'
import arrow from '../../images/rightArrow.png'

const Project = (props) => {
    if (!(props.project.name)) {
        props.project.name = 'ERROR'
    }
    const { img, description, name, link } = props.project

    function projectPage() {
        window.scrollTo({ top: 0, left: 0 })
        props.history.push(`/project/${props.index}`)
    }
    console.log('props', props)
    // return (<></>)
    return (

        <div className="project-container item">
            <div className='img-overflow' style={{background: `url(${img})`, backgroundSize: 'cover'}}>
            </div>
            <div className="img-overlay"><span>{name}</span></div>
            <div className="svg-contain">
                <ArrowSvg fillColor={'#98FF98'} index={props.index}/>
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