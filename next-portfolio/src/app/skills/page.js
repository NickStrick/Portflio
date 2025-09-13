'use client';
import Skills from '../../components/skills/SkillsSection';
import Cert from '../../components/certificates/Certificate';


export default function Page() {
  return (
    <div className="content-container">
      <div className="section-container">
        <div className="section-content !p-[0px]">
          <Skills />
          <Cert />
        </div>
      </div>
    </div>
  );
}
