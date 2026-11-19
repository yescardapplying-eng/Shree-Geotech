import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { MouseFollower } from '@/components/common/MouseFollower';
import { ScrollObserver } from '@/components/common/ScrollObserver';
import { JsonLd } from '@/components/seo/JsonLd';
import { siteConfig } from '@/data/siteConfig';

export const viewport: Viewport = {
  themeColor: '#102C4E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: 'Shree Geotech | Geotechnical Engineering & Soil Testing Services',
    template: '%s | Shree Geotech',
  },
  description:
    'Reliable soil testing and geotechnical investigation services in Dombivli, Kalyan, Thane, Navi Mumbai, and Mumbai. Borehole drilling, Plate Load SBC test, SPT N-value, and laboratory testing.',
  applicationName: 'Shree Geotech',
  authors: [{ name: 'Shree Geotech' }],
  generator: 'Next.js',
  keywords: [
    'Soil Testing Services',
    'Geotechnical Investigation Services',
    'Soil Investigation Company',
    'Soil Testing Company Dombivli',
    'Soil Testing Thane',
    'Soil Testing Kalyan',
    'Geotechnical Investigation Mumbai',
    'Soil Bearing Capacity Test',
    'Standard Penetration Test',
    'Soil Boring Test',
    'Plate Load Test',
    'Chemical Analysis of Soil',
  ],
  creator: 'Shree Geotech',
  publisher: 'Shree Geotech',
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: 'Shree Geotech | Geotechnical Engineering & Soil Testing Services',
    description:
      'Accurate soil investigation, geotechnical testing and technical reporting for construction and infrastructure projects across Mumbai Metropolitan Region.',
    url: siteConfig.domain,
    siteName: 'Shree Geotech',
    images: [
      {
        url: '/brand/shree-geotech-logo.png',
        width: 1200,
        height: 630,
        alt: 'Shree Geotech Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shree Geotech | Geotechnical Engineering & Soil Testing Services',
    description:
      'Professional soil investigation, exploratory borehole drilling, and laboratory testing across Dombivli, Kalyan, Thane, and Mumbai.',
    images: ['/brand/shree-geotech-logo.png'],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#102C4E] antialiased overflow-x-hidden selection:bg-[#F47B20] selection:text-white">
        <MouseFollower />
        <ScrollObserver />
        <Header />
        <main className="flex-1 w-full overflow-x-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
