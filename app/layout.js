import { AuthProvider } from '@/lib/authContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';
import { useEffect } from 'react';

export default function RootLayout({ children }) {
  useEffect(() => {
    // Google Analytics script
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', process.env.NEXT_PUBLIC_GA_ID=G-7JEM3TM7LF);
  }, []);

  return (
    <html>
      <head>
        <script 
          async 
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
export const metadata = {
  title: 'PERS10A - Kişilik Testi Platformu',
  description: 'Eğlenceli ve düşündürücü kişilik testleri. Testleri çöz, sonucunu öğren, paylaş!',
  keywords: 'kişilik testi, quiz, eğlence, karakter analizi',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body>
        <AuthProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
