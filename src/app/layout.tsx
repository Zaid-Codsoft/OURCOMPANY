import type { Metadata } from 'next';
import type { Viewport } from 'next/dist/lib/metadata/types/extra-types';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Providers from '../components/Providers';
import Header from '../components/Header/Header';
import StickyContact from '../components/StickyContact/StickyContact';
import Footer from '../components/Footer/Footer';
import Script from 'next/script';

// Initialize Plus Jakarta Sans font with optimized loading
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Business Website',
  description: 'A modern business website built with Next.js',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical assets */}
        <link rel="preload" href="/images/logo.png" as="image" />
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        
        {/* Inline critical CSS */}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-plus-jakarta-sans: ${plusJakartaSans.style.fontFamily};
          }
          body {
            margin: 0;
            padding: 0;
            font-family: var(--font-plus-jakarta-sans);
          }
        `}} />
      </head>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <Providers>
          <Header />
          <main>
            {children}
          </main>
          <StickyContact />
          <Footer />
        </Providers>

        {/* Defer non-critical scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR-GA-ID');
          `}
        </Script>
      </body>
    </html>
  );
} 