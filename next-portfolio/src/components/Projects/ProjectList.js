
import Project from './Project.js';
// let sWidth = screen.width;

const ProjectList = (props) => {
    let middle = props.projects.length % 2 !== 0 ? ((props.projects.length + 1) / 2) : props.projects.length / 2;

    return (
        <>


            <div className="projects section-content" >
                <h1 className='port-head proj-head'>Projects
                    {/* <span className='proj-count'> - {props.projects.length} </span> */}
                    </h1>
                <div className='projects-columns '>
                    <div className='project-list'>
                        {props.projects.map((project, index) => {
                            index = index - 2
                            if (middle > index) {
                                return <Project setDetail={props.setDetail} project={project} key={index} index={index} history={props.history} />
                            }
                        }
                        )}
                        {props.projects.map((project, index) => {
                            index = index - 2
                            if (middle <= index) {
                                return <Project setDetail={props.setDetail} project={project} key={index} index={index} history={props.history} />
                            }
                        }
                        )}
                        </div>
                </div>

            </div></>
    );
}


export default ProjectList;