'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from '../auth.module.css';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validasyon
    if (!formData.name || !formData.email || !formData.password) {
      setError('Tüm alanları doldurunuz');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler eşleşmiyor');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Şifre en az 6 karakter olmalı');
      setLoading(false);
      return;
    }

    if (!agreedToTerms) {
      setError('Kullanım şartlarını kabul etmelisiniz');
      setLoading(false);
      return;
    }

    try {
      // Firebase auth burada entegre edilecek
      // const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      console.log('Kayıt yapılıyor:', formData);

      // Simüle edilmiş kayıt
      setTimeout(() => {
        alert('Kayıt başarılı! Hoş geldiniz!');
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      setError(err.message || 'Kayıt başarısız oldu');
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    setLoading(true);
    console.log('Google ile kayıt yapılıyor...');

    setTimeout(() => {
      alert('Google kayıt başarılı!');
      window.location.href = '/';
    }, 1000);
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Pers10a'ya Katıl</h1>
          <p>Kişilik testlerini çöz ve paylaş</p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        {/* Google Signup */}
        <button
          className={styles.googleButton}
          onClick={handleGoogleSignup}
          disabled={loading}
          type="button"
        >
          <span>🔐</span>
          Google ile Kayıt Ol
        </button>

        {/* Divider */}
        <div className={styles.divider}>
          <span>veya</span>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="ornek@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Şifreyi Onayla</label>
            <input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className={styles.checkboxGroup}>
            <input
              id="terms"
              type="checkbox"
              checked={agreedToTerms}
              onChange={(e) => setAgreedToTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              <Link href="/terms">Kullanım Şartlarını</Link> ve{' '}
              <Link href="/privacy">Gizlilik Politikasını</Link> kabul ediyorum
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? 'Kayıt yapılıyor...' : 'Kayıt Ol'}
          </button>
        </form>

        {/* Links */}
        <div className={styles.authFooter}>
          <p>
            Zaten hesabın var mı?{' '}
            <Link href="/auth/login">Giriş yap</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
