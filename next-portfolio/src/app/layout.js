import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// If you use global SCSS, import it here too:
// import './globals.scss';
import { Analytics } from "@vercel/analytics/next"

// Font Awesome ships its own CSS via a JS-injected <style> tag by default,
// which happens after hydration and causes icons to flash at their raw SVG
// size before snapping down. Importing the stylesheet directly and disabling
// autoAddCss makes it part of the real CSS bundle, so it's present on first paint.
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import ClientShell from '../components/shell/ClientShell';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Nick Stricker',
  description: 'Portfolio of Nick Stricker',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ClientShell>{children}</ClientShell>
        <Analytics />
      </body>
    </html>
  );
}
