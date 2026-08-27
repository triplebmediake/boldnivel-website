import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Fraunces, DM_Sans } from 'next/font/google';
import '../styles/tailwind.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'Bold Nivel — Leadership & Transformation Coaching',
  description: 'Bold Nivel equips leaders, professionals and teams with identity-rooted training and coaching to unlock potential through the IPL Model.',
  keywords: [
    'leadership development', 'executive coaching', 'corporate training',
    'emotional intelligence', 'personal branding', 'communication skills',
    'public speaking coaching', 'sales influence training', 'identity coaching',
    'leadership coaching Kenya', 'professional development Africa',
  ],
  openGraph: {
    title: 'Bold Nivel — Brand Your Story',
    description: 'Identity-rooted leadership development and coaching. Know who you are. Lead with unshakeable confidence.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
icons: {
  icon: [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`,
      type: 'image/x-icon',
    },
  ],
},

  export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className={dmSans.className}>
        {children}
</body>
    </html>
  );
}
