'use client';

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import ArrowSvg from '../../../public/images/svg/projCard.js'
import WaveSvg from '../../../public/images/projects/itemSvg.js'

const Project = ({ project, index }) => {
    const { name, pills, type, slug, color, hover } = project
    const fill = color || '#28da00'

    return (
        <Link
            href={`/projects/${slug}`}
            className={`project-container item proj-item-${index} bg-blue-200`}
            style={color ? { backgroundColor: color } : undefined}
            onMouseEnter={(e) => { if (hover) e.currentTarget.style.backgroundColor = hover }}
            onMouseLeave={(e) => { if (color) e.currentTarget.style.backgroundColor = color }}
        >
            <div className="img-back"></div>
            <div className={`img-overflow`} >
                <WaveSvg fillColor={'#28da00'} index={index}/>
            </div>
            <div className="img-overlay">
                <div className="project-type"><div className="project-type-text">{type}</div></div>
                <span>{name}</span>
                <div className="info-pill-conatiner">
                    {pills.map((pill) => <div key={pill} className="info-pill">{pill}</div>)}
                </div>
            </div>

            <div className="svg-contain">
                <ArrowSvg fillColor={fill} index={index}/>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        </Link>
    );
}

export default Project;
