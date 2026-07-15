import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Space_Grotesk, Manrope } from 'next/font/google';
import '../styles/tailwind.css';
import { ThemeProvider } from '@/context/ThemeContext';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Nandhitha Binu — Cloud & Infrastructure Engineer',
  description: 'Portfolio of Nandhitha Binu, a Linux System Administrator and Cloud Operations Engineer with 6+ months of hands-on AWS, Ansible, and DevOps experience.',
  openGraph: {
    title: 'Nandhitha Binu — Cloud & Infrastructure Engineer',
    description: 'Linux · AWS · Ansible · Docker · Jenkins · Terraform',
    type: 'website',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body className={manrope.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fnandhithap7129back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}