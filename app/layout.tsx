import type { Metadata } from 'next';
import { Press_Start_2P, VT323 } from 'next/font/google';
import './globals.css';

const pixel = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
});

const retro = VT323({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-retro',
});

export const metadata: Metadata = {
  title: 'K75 — The Mechanical Keyboard for Cloud Engineers',
  description:
    'The K75 is a premium 75% mechanical keyboard designed for cloud engineers and developers. Launching October 20. Join the waitlist.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixel.variable} ${retro.variable} dark`} suppressHydrationWarning>
      <body className="font-retro" suppressHydrationWarning>{children}</body>
    </html>
  );
}
