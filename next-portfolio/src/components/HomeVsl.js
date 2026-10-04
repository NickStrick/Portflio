'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const VIDEO_ID = 'qInhbf1h5vk';
const VIDEO_TITLE = "Welcome, I'm Nick!";

// Lightweight YouTube facade: renders the thumbnail + play button and only
// swaps in the real iframe on click, so the landing page doesn't pay for the
// YouTube player (~1MB of JS) until someone actually wants to watch.
export default function HomeVsl() {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className="home-vsl"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-delay="800"
    >
      {playing ? (
        <iframe
          className="home-vsl-frame"
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title={VIDEO_TITLE}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="home-vsl-facade"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${VIDEO_TITLE}`}
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg)` }}
        >
          <span className="home-vsl-play">
            <FontAwesomeIcon icon={faPlay} />
          </span>
          <span className="home-vsl-label">Watch the intro</span>
        </button>
      )}
    </div>
  );
}
