import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RevealListener from '@/components/RevealListener';

export const metadata = {
  title: 'AshaJyothi · A home for special-needs children since 1998.',
  description: 'Official site of AshaJyothi Handicapped Welfare Society, Hanuman Junction, AP. A permanent home offering care, rehabilitation, and education for abandoned children with severe disabilities.',
  metadataBase: new URL('https://ashajyothiindia.org'),
  openGraph: {
    title: 'AshaJyothi · A home for special-needs children since 1998.',
    description: 'Providing care, education and rehabilitation for cerebral palsy, autism, and physical impairments since 1998.',
    url: 'https://ashajyothiindia.org',
    siteName: 'AshaJyothi',
    images: [
      {
        url: 'https://static.wixstatic.com/media/437f08_0fb69566f899453ea5ca54dacdf00004~mv2.jpg/v1/fill/w_440,h_280,al_c,q_85,enc_avif,quality_auto/AshaJyothi%20Kids%20(23)_JPG.jpg',
        width: 1200,
        height: 630,
        alt: 'AshaJyothi children',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AshaJyothi · A home for special-needs children since 1998.',
    description: 'Providing care, education and rehabilitation for cerebral palsy, autism, and physical impairments since 1998.',
    images: ['https://static.wixstatic.com/media/437f08_0fb69566f899453ea5ca54dacdf00004~mv2.jpg/v1/fill/w_440,h_280,al_c,q_85,enc_avif,quality_auto/AshaJyothi%20Kids%20(23)_JPG.jpg'],
  },
  icons: {
    icon: '/logo-mark.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
        <RevealListener />
      </body>
    </html>
  );
}
