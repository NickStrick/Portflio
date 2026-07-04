import Cert from '../../components/certificates/Certificate';

export const metadata = {
  title: 'Certifications',
  description:
    'AWS Certified Solutions Architect – Associate, plus certifications in full-stack development, digital marketing, and AI.',
};

export default function Page() {
  return (
    <div className="content-container">
      <div className="section-container">
        <div className="section-content !p-[0px]">
          <Cert />
        </div>
      </div>
    </div>
  );
}
