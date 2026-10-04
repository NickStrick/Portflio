import Project from './Project.js';

const ProjectList = ({ projects }) => (
    <div className="projects section-content">
        <h1 className='port-head proj-head'>Projects</h1>
        <div className='projects-columns'>
            <div className='project-list'>
                {projects.map((project, index) => (
                    <Project project={project} key={project.slug} index={index - 2} />
                ))}
            </div>
        </div>
    </div>
);

export default ProjectList;
