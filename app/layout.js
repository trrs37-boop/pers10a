import { AuthProvider } from '@/lib/authContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

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
