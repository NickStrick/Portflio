import { notFound } from 'next/navigation';
import ProjectDetail from '../../../components/Projects/ProjectDetail';
import { projects, getProjectBySlug } from '../../../data/projects';

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} | Nick Stricker`,
      description: project.description,
      images: [project.img.src],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="content-container">
      <ProjectDetail project={project} />
    </div>
  );
}
