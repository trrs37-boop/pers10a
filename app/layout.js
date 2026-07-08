import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Pers10a - Kişilik Testi Platformu',
  description: 'Buzzfeed tarzı eğlenceli kişilik testleri. Testleri çöz, sonucunu öğren, paylaş!',
  keywords: 'kişilik testi, quiz, eğlence, karakter analizi',
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
