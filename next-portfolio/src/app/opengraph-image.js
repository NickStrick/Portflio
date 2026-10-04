import { ImageResponse } from 'next/og';

export const alt = 'Nick Stricker, Solutions Architect & Senior Full-Stack Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Social preview card (LinkedIn, Slack, iMessage, etc.), rendered at build time.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'rgb(35,40,40)',
          color: 'whitesmoke',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 96, fontWeight: 800, letterSpacing: 2, textTransform: 'uppercase' }}>
          Nick Stricker
        </div>
        <div style={{ display: 'flex', marginTop: 24, fontSize: 40, fontStyle: 'italic', color: '#28da00' }}>
          Bridging the Gap Between Complex Architecture and Enterprise Outcomes.
        </div>
        <div style={{ display: 'flex', marginTop: 40, fontSize: 30, color: '#c9d1d9' }}>
          Senior Full-Stack Engineer · AWS Certified Solutions Architect · Founder, Stricker Digital
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 56,
            height: 12,
            width: 360,
            borderRadius: 6,
            backgroundImage: 'linear-gradient(to right, #1ea100, #c57104)',
          }}
        />
      </div>
    ),
    size
  );
}
