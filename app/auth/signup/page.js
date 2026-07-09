'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { auth, db } from '@/lib/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import styles from '../auth.module.css';

export default function SignupPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!formData.name || !formData.email || !formData.password) {
      setError('Lütfen tüm alanları doldurunuz.');
      setLoading(false); return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Şifreler eşleşmiyor.');
      setLoading(false); return;
    }

    if (formData.password.length < 6) {
      setError('Şifreniz en az 6 karakter olmalıdır.');
      setLoading(false); return;
    }

    if (!agreedToTerms) {
      setError('Kullanım şartlarını kabul etmelisiniz.');
      setLoading(false); return;
    }

    try {
      const result = await createUserWithEmailAndPassword(auth, formData.email, formData.password);

      // İsmi profile ekle
      await updateProfile(result.user, { displayName: formData.name });

      // Veritabanına kaydet
      await setDoc(doc(db, 'users', result.user.uid), {
        name: formData.name,
        email: formData.email,
        createdAt: new Date(),
        newsletterSubscribed: false,
      });

      router.push('/');
    } catch (err) {
      setError(getFirebaseError(err.code));
      setLoading(false);
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <div className={styles.authHeader}>
          <h1>Kayıt Ol</h1>
          <p>Kendini keşfetmeye hemen başla!</p>
        </div>

        {error && <div className={styles.errorAlert}>{error}</div>}

        <form onSubmit={handleSignup} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Ad Soyad</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">E-posta</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password">Şifre</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} required />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Şifre Tekrar</label>
            <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} required />
          </div>

          <div className={styles.checkboxGroup}>
            <input type="checkbox" id="terms" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} />
            <label htmlFor="terms">Kullanım Şartları ve Gizlilik Politikası'nı kabul ediyorum.</label>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? 'Kayıt olunuyor...' : 'Hesap Oluştur'}
          </button>
        </form>
        
        <div className={styles.authFooter}>
          <p>Zaten hesabın var mı? <Link href="/auth/login">Giriş Yap</Link></p>
        </div>
      </div>
    </div>
  );
}

function getFirebaseError(code) {
  const errors = {
    'auth/email-already-in-use': 'Bu e-posta adresi zaten kullanımda.',
    'auth/invalid-email': 'Geçersiz e-posta adresi.',
    'auth/weak-password': 'Şifre çok zayıf. Daha güçlü bir şifre seçin.',
  };
  return errors[code] || 'Kayıt olurken bir hata oluştu.';
}
