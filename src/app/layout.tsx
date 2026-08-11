import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingActions from '@/components/layout/FloatingActions';
import BackToTop from '@/components/layout/BackToTop';
import CookieConsent from '@/components/layout/CookieConsent';
import PwaRegister from '@/components/layout/PwaRegister';
import { buildMetadata, localBusinessJsonLd } from '@/lib/seo';
import { SITE } from '@/lib/constants';

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  ...buildMetadata({ title: SITE.name, description: SITE.description }),
  metadataBase: new URL(SITE.url),
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Kirunda Construction'
  },
  formatDetection: { telephone: false, address: false, email: false }
};

export const viewport: Viewport = {
  themeColor: '#0A1F3F'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="pt-[76px]">{children}</main>
        <Footer />
        <FloatingActions />
        <BackToTop />
        <CookieConsent />
        <PwaRegister />
      </body>
    </html>
  );
}
