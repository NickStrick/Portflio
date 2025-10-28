import Image from 'next/image';
import BlobSvg from '../../../public/images/skills/skillSvg.js'
const SkillItem = (props) => {
    const { skill, logo } = props.item;

    return (
        <div className="item">
            <div className='skill-image'>
                <Image src={logo} alt={skill} id={props.id} width={44} height={44} />
            </div>
            <p className="skill-text">{skill}</p>
            <BlobSvg  index={props.index}/>

        </div >
    );
}


export default SkillItem;