'use client';

import { useEffect, useState } from 'react';

const images = [
  '/images/hero/profile1.jpg',
  '/images/hero/profile2.jpg',
  '/images/hero/profile3.jpg',
  '/images/hero/profile5.png',
  '/images/hero/profileCafe.jpg',
];

export default function HomeImageCarousel({ intervalMs = 3250 }) {
  // [currentIndex, prevIndex] - currentIndex sits behind at full opacity,
  // prevIndex renders on top and animates its opacity down to 0, revealing
  // currentIndex underneath (a crossfade using only one animated layer).
  const [[currentIndex, prevIndex], setIndices] = useState([0, null]);

  useEffect(() => {
    if (images.length < 2) return undefined;

    const id = setInterval(() => {
      setIndices(([current]) => [(current + 1) % images.length, current]);
    }, intervalMs);

    return () => clearInterval(id);
  }, [intervalMs]);

  return (
    <div className="home-carousel">
      <div
        className="home-main-image home-carousel-layer"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      />
      {prevIndex !== null && (
        <div
          key={prevIndex}
          className="home-main-image home-carousel-layer home-carousel-layer-fade"
          style={{ backgroundImage: `url(${images[prevIndex]})` }}
        />
      )}
    </div>
  );
}
