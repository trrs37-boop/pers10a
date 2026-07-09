'use client';

import Link from 'next/link';
import styles from './Footer.module.css';
import Newsletter from './Newsletter';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand */}
          <div className={styles.footerSection}>
            <h4>Pers10a</h4>
            <p>Kişilik testleriyle kendinizi keşfedin ve paylaşın.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="TikTok">🎵</a>
            </div>
          </div>

          {/* Links */}
          <div className={styles.footerSection}>
            <h4>Linkler</h4>
            <ul>
              <li><Link href="/">Anasayfa</Link></li>
              <li><Link href="/#quizzes">Testler</Link></li>
              <li><Link href="/about">Hakkında</Link></li>
              <li><Link href="/contact">İletişim</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className={styles.footerSection}>
            <h4>Yasal</h4>
            <ul>
              <li><Link href="/privacy">Gizlilik Politikası</Link></li>
              <li><Link href="/terms">Kullanım Şartları</Link></li>
              <li><Link href="/cookies">Çerez Politikası</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.footerSection}>
             <Newsletter />
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.footerBottom}>
          <p>
            © {currentYear} PERS10A. Tüm hakları saklıdır.
          </p>
          <p className="text-muted">
            Azim ve inanç ile üretildi.
          </p>
        </div>
      </div>
    </footer>
  );
}
