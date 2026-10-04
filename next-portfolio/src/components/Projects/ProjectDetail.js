import Link from 'next/link'
import '../styles/Projects.css';
import './ProjectDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import WaveSvg2 from '../../../public/images/projects/project-split-2.js'

const ProjectDetail = ({ project }) => {
    const { img, description, name, link, role, contribution, deployed } = project

    // Contributions are written as blank-line separated paragraphs
    const paragraphs = (contribution || '')
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    const isGithub = link && link.includes('github.com')

    return (<>
        <div className="section-container project-detials">
            <div className=" section-content project-header" >
                <Link href="/projects" className="proj-return"><FontAwesomeIcon icon={faArrowLeft}/> Return to list</Link>
                    <h1 className='port-head'>{name}</h1>
                    <div className="project-info">
                        <p className="quick-info"><strong>My Role</strong> {role}</p>
                        <p className="quick-info"><strong>Description</strong> {description}</p>
                    </div>
                    <div className="project-btns">
                        {deployed ? (
                            <a href={deployed} target="_blank" rel="noopener noreferrer" className="project-a main-btn">Deployed Site</a>
                        ) : null}
                        {isGithub ? (
                            <a href={link} target="_blank" rel="noopener noreferrer" className="project-a main-btn main-btn-icon" aria-label={`${name} on GitHub`}>
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                        ) : null}
                    </div>
            </div>
        </div>

        <div className="image-section-container">
        <WaveSvg2 index={'1'}/>
        <div className="section-container section-container-image-background" style={{backgroundImage:`url(${img.src})`}}>
        </div>
        <div className="section-container section-container-image">
            <div className=" section-content proj-image-content" >
                    <div className="project-image" style={{backgroundImage:`url(${img.src})`}}></div>
            </div>

        </div>
        <div className=" section-content proj-image-content" >
                    <div className="project-image" style={{backgroundImage:`url(${img.src})`}}></div>
            </div>
        <WaveSvg2 index={'2'}/>
        </div>

        {paragraphs.length ? (
            <div className="section-container project-description">
                <div className=" section-content" >
                    <div className="description-info">
                        <strong>What I Did</strong>
                        <p>{paragraphs.map((paragraph, i) => <span key={i}>{paragraph}</span>)}</p>
                    </div>
                </div>
            </div>
        ) : null}
        </>
    );
}

export default ProjectDetail;
