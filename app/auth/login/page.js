'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../auth.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Firebase auth burada entegre edilecek
      // const result = await signInWithEmailAndPassword(auth, email, password);
      console.log('Giriş yapılıyor:', { email, password });
      
      // Simüle edilmiş giriş
      setTimeout(() => {
        alert('Giriş başarılı!');
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      setError(err.message || 'Giriş başarısız oldu');
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    // Firebase Google Auth burada entegre edilecek
    console.log('Google ile giriş yapılıyor...');
    
    setTimeout(() => {
      alert('Google giriş başarılı!');
      window.location.href = '/';
    }, 1000);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Pers10a'ya Giriş Yap</h1>
          <p>Testlerinize devam edin ve sonuçlarınızı görün</p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        {/* Google Login */}
        <button
          className={styles.googleButton}
          onClick={handleGoogleLogin}
          disabled={loading}
        >
          <span>🔐</span>
          Google ile Giriş Yap
        </button>

        {/* Divider */}
        <div className={styles.divider}>
          <span>veya</span>
        </div>

        {/* Email Login Form */}
        <form onSubmit={handleEmailLogin}>
          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              id="email"
              type="email"
              placeholder="ornek@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Giriş yapılıyor...' : 'Giriş Yap'}
          </button>
        </form>

        {/* Links */}
        <div className={styles.authFooter}>
          <Link href="/auth/forgot-password">Şifreni mi unuttun?</Link>
          <p>
            Hesabın yok mu?{' '}
            <Link href="/auth/signup">Kayıt ol</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
