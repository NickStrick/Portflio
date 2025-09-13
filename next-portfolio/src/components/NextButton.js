'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function NextButton() {
  const pathname = usePathname() || '/';
  const router = useRouter();

  const pagesDict = {
    '/':         ['/services',   'Check out my services'],
    '/services': ['/projects',   'View my projects'],
    '/projects': ['/skills',     'Explore my skills'],
    '/skills':   ['/experience', 'See my experience'],
    '/experience': ['/contact',  'Get in touch'],
    '/contact':  ['',            ''],
  };

  const next = pagesDict[pathname] || ['', ''];
  const [nextPath, nextLabel] = next;

  if (!nextPath) return null; // No next step on the last page

  return (
    <Link
      href={nextPath}
      onClick={() => {
        window.scrollTo(0, 0);
        router.push(nextPath);
      }}
      className="next-button nav-contact"
    >
      {nextLabel}
      <span className="nav-contact-overlay"></span>
    </Link>
  );
}
