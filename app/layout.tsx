import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://glohc.id'),
  title: {
    default: 'GloHC — Global Hospitality Coach | Pelatihan Service Excellence Perhotelan, Resto, Salon & Klinik Estetika',
    template: '%s | GloHC Global Hospitality Coach',
  },
  description: 'Lembaga pelatihan dan konsultasi hospitality terkemuka di Indonesia. Standarisasi Service Excellence berstandar bintang lima untuk perhotelan, restoran, salon wellness, dan klinik estetika.',
  keywords: [
    'pelatihan hospitality indonesia',
    'training service excellence',
    'training perhotelan',
    'pelatihan f&b restoran',
    'training salon spa wellness',
    'pelatihan klinik estetika',
    'customer service klinik kecantikan',
    'yayu windharti',
    'in-house training hotel',
    'glohc',
  ],
  authors: [{ name: 'Global Hospitality Coach (GloHC)' }],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/logo-glohc.png',
    shortcut: '/images/logo-glohc.png',
    apple: '/images/logo-glohc.png',
  },
  openGraph: {
    locale: 'id_ID',
    type: 'website',
    title: 'GloHC — Global Hospitality Coach | Standarisasi Layanan Perhotelan, Resto, Salon & Klinik Estetika',
    description: 'Tingkatkan standar pelayanan tim perhotelan, restoran, salon wellness, dan klinik estetika Anda bersama para praktisi bintang lima. Kurikulum terapan & audit mutu operasional.',
    url: 'https://glohc.id/',
    siteName: 'Global Hospitality Coach (GloHC)',
    images: [
      {
        url: '/images/pro-person-blank.png',
        width: 1200,
        height: 630,
        alt: 'GloHC Global Hospitality Coach - Service Excellence Training',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GloHC — Global Hospitality Coach | Transformasi Layanan Bintang Lima',
    description: 'Pelatihan & Konsultasi Service Excellence Bintang Lima untuk Hotel, Restoran, Salon Wellness, & Klinik Estetika di Indonesia.',
    images: ['/images/pro-person-blank.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'EducationalOrganization',
                  '@id': 'https://glohc.id/#organization',
                  name: 'Global Hospitality Coach',
                  alternateName: 'GloHC',
                  url: 'https://glohc.id/',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://glohc.id/images/logo-glohc.png',
                  },
                  image: 'https://glohc.id/images/pro-person-blank.png',
                  description:
                    'Institusi pelatihan dan konsultasi hospitality terkemuka di Indonesia yang mengembangkan standar pelayanan kelas dunia untuk perhotelan, restoran, salon wellness, dan klinik estetika.',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Jakarta',
                    addressCountry: 'ID',
                  },
                  founder: {
                    '@type': 'Person',
                    name: 'Yayu Windharti',
                    jobTitle: 'Director of Operation',
                    description:
                      'Veteran hospitality leadership dengan 16+ tahun pengalaman di Sofitel Grand Mahakam, Accor Ibis, Hyatt Regency, dan Sheraton.',
                  },
                  areaServed: 'Indonesia',
                  knowsAbout: [
                    'Hospitality Training',
                    'Service Excellence',
                    'Front Office Leadership',
                    'Food & Beverage Service',
                    'Complaint Handling & Recovery',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://glohc.id/#website',
                  url: 'https://glohc.id/',
                  name: 'Global Hospitality Coach (GloHC)',
                  publisher: {
                    '@id': 'https://glohc.id/#organization',
                  },
                  inLanguage: 'id-ID',
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

