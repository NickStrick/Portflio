import Skills from '../../components/skills/SkillsSection';

export const metadata = {
  title: 'Skills',
  description:
    'Technical discovery and pre-sales frameworks (MEDDPICC, ARC), AWS cloud & security expertise, and full-stack development skills.',
};

export default function Page() {
  return (
    <div className="content-container">
      <div className="section-container">
        <div className="section-content !p-[0px]">
          <Skills />
        </div>
      </div>
    </div>
  );
}
