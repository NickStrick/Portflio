
import './ProjectDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { faGithub} from '@fortawesome/free-brands-svg-icons'
import WaveSvg2 from '../../../public/images/projects/project-split-2.js'

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
   
    var middle = Math.floor(contribution.length / 3); 
    var middle2 = Math.floor(contribution.length / 3) * 2
    splitDescription()
   function splitDescription(){
    
    var before = contribution.lastIndexOf(' ', middle);
    var after = contribution.indexOf(' ', middle + 1);

    if (middle - before < after - middle) {
        middle = before;
    } else {
        middle = after;
    }
    var before2 = contribution.lastIndexOf(' ', middle2);
    var after2 = contribution.indexOf(' ', middle2 + 1);

    if (middle2 - before2 < after2 - middle2) {
        middle2 = before2;
    } else {
        middle2 = after2;
    }

   }
    console.log(middle,middle2)
    var d1 = contribution.substr(0, middle);
    var d2 = contribution.substr(middle + 1, middle2);
    var d3 = contribution.substr(middle2 + 1 )
    // var descresult = (<span className="rotate"> 
    // {descarr.forEach(() =></span><span className="rotate">}}
    //             </span>);
    return (<>
        <div className="section-container project-detials">
            <div className=" section-content project-header" >
                <div className="proj-return" onClick={returnBack}><FontAwesomeIcon icon={faArrowLeft}/> Return to list</div>
                    <h1 className='port-head'>{name}</h1>
                    <div className="project-info">
                        <p className="quick-info"><strong>My Role</strong> {role}</p>
                        <p className="quick-info"><strong>Desription</strong> {description}</p>
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
                <div className="description-info">
                    <strong>What I Did</strong>
                    <p><span>{d1}</span><span>{d2}</span><span>{d3}</span></p>
                    {/* <p>{contribution}</p> */}
                </div>
            </div>
        </div>
        </>
    );
}


export default Project;