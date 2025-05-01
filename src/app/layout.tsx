import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Header from '../components/Header/Header';
import StickyContact from '../components/StickyContact/StickyContact';
import Footer from '../components/Footer/Footer';
import Script from 'next/script';
import ThemeRegistry from '../components/ThemeRegistry';
import AuroraBackground from '../components/AuroraBackground';

// Initialize Plus Jakarta Sans font with optimized loading
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata: Metadata = {
  title: 'AZ PRO - Professional Services',
  description: 'Professional services for your business needs',
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Professional services for your business needs" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={plusJakartaSans.className} suppressHydrationWarning>
        <ThemeRegistry>
          <AuroraBackground />
          <Header />
          <main>
            {children}
          </main>
          <StickyContact />
          <Footer />
        </ThemeRegistry>

        {/* Defer non-critical scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
} 