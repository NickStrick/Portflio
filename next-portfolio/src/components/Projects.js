import './styles/Projects.css';

import { projects } from '../data/projects';
import ProjectList from './Projects/ProjectList';

export default function Projects() {
  return (
    <div className="content-container">
      <div className="section-container">
        <ProjectList projects={projects} />
      </div>
    </div>
  );
}
