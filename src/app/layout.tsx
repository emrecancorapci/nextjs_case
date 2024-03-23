import './globals.css';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import type { Metadata } from 'next';

import { Toaster } from '@/components/ui/toaster';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable} antialiased`} lang="en">
      <body className="flex min-h-screen max-w-[100vw] flex-col bg-background font-sans">
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
