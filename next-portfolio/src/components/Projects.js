import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faArrowUpRightFromSquare,
  faChartLine,
  faDiagramProject,
  faFolderOpen,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

import './styles/ProjectsShowcase.scss';
import { featuredProjects, moreProjects } from '../data/projects';

const rows = [
  { key: 'problem', label: 'The problem', icon: faTriangleExclamation },
  { key: 'built', label: 'What I built', icon: faDiagramProject },
  { key: 'result', label: 'The result', icon: faChartLine },
];

function CaseStudyCard({ project, flip }) {
  const study = project.caseStudy;

  return (
    <article className={`showcase-card case-card${flip ? ' case-card-flip' : ''}`} data-aos="fade-up" data-aos-duration="700">
      <div className="case-media">
        {/* Desktop screenshots keep their wide shape, framed like a browser window and centered beside the text */}
        <div className="case-frame">
          <div className="case-browser-bar" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="case-shot">
            <Image src={project.img} alt={`${project.name} screenshot`} fill sizes="(max-width: 900px) 100vw, 560px" />
          </div>
        </div>
      </div>

      <div className="case-body">
        <div className="showcase-eyebrow">{study.eyebrow}</div>
        <h2 className="case-title">{study.title}</h2>

        <dl className="case-rows">
          {rows.map((row) => (
            <div key={row.key} className={row.key === 'result' ? 'case-row case-row-result' : 'case-row'}>
              <dt>
                <FontAwesomeIcon icon={row.icon} aria-hidden="true" />
                {row.label}
              </dt>
              <dd>{study[row.key]}</dd>
            </div>
          ))}
        </dl>

        <div className="case-actions">
          {project.deployed ? (
            <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="btn-inverted case-btn">
              {study.linkLabel}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
            </a>
          ) : null}
          {project.contribution ? (
            <Link href={`/projects/${project.slug}`} className="case-more">
              Read the full story <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function MoreWorkCard({ project, index }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="showcase-card more-card"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={(index % 3) * 80}
    >
      <div className="more-media">
        <Image src={project.img} alt={`${project.name} screenshot`} fill sizes="(max-width: 900px) 100vw, 380px" />
      </div>
      <div className="more-body">
        <div className="showcase-eyebrow">{project.type}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <span className="more-link">
          View project <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

export default function Projects() {
  return (
    <div className="content-container">
      <section className="section-container">
        <div className="section-content showcase">
          <header className="showcase-header">
            <span className="section-eyebrow">
              <FontAwesomeIcon icon={faFolderOpen} /> Proof
            </span>
            <h1 className="port-head">Real work. Real results.</h1>
            <p>Here&apos;s what was broken, what I built, and what changed.</p>
          </header>

          <div className="case-list">
            {featuredProjects.map((project, i) => (
              <CaseStudyCard key={project.slug} project={project} flip={i % 2 === 1} />
            ))}
          </div>

          <h2 className="more-heading">More projects I&apos;ve built</h2>
          <div className="more-grid">
            {moreProjects.map((project, i) => (
              <MoreWorkCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
