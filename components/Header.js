'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '@/lib/authContext';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Artık gerçek durumu çekiyor

  return (
    <header className={styles.header}>
      <div className="container flex-between">
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>✨</span>
          <span className={styles.logoText}>PERS10A</span>
        </Link>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <Link href="/" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>Ana Sayfa</Link>
          <Link href="/quiz" className={styles.navLink} onClick={() => setIsMenuOpen(false)}>  </Link>
        </nav>

        <div className={styles.authButtons}>
          {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '500' }}>
                Merhaba, {user.displayName || user.email?.split('@')[0]}
              </span>
              <button onClick={logout} className={styles.loginBtn}>Çıkış Yap</button>
            </div>
          ) : (
            <>
              <Link href="/auth/login" className={styles.loginBtn}> Giriş Yap </Link>
              <Link href="/auth/signup" className={styles.signupBtn}> Kayıt Ol </Link>
            </>
          )}
        </div>

        <button className={styles.menuToggle} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </header>
  );
}
