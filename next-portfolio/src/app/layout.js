import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
// If you use global SCSS, import it here too:
// import './globals.scss';

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
