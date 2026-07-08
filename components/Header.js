'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null); // Simüle edilmiş user state

  return (
    <header className={styles.header}>
      <div className="container flex-between">
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>✨</span>
          <span className={styles.logoText}>PERS10A</span>
        </Link>

        {/* Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navLink}>
            Anasayfa
          </Link>
          <Link href="/#quizzes" className={styles.navLink}>
            Testler
          </Link>
          <Link href="/about" className={styles.navLink}>
            Hakkında
          </Link>
        </nav>

        {/* Auth Buttons */}
        <div className={styles.authSection}>
          {user ? (
            <>
              <span className={styles.userGreeting}>{user.name}</span>
              <Link href="/profile" className="btn btn-ghost btn-sm">
                Profil
              </Link>
              <button
                className="btn btn-outline btn-sm"
                onClick={() => setUser(null)}
              >
                Çıkış
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="btn btn-ghost btn-sm">
                Giriş Yap
              </Link>
              <Link href="/auth/signup" className="btn btn-primary btn-sm">
                Kayıt Ol
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.menuToggle}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu aç/kapat"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
