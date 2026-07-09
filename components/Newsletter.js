'use client';
import { useState } from 'react';
import styles from './Newsletter.module.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading'); setMessage('');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success'); setMessage(data.message); setEmail('');
      } else {
        setStatus('error'); setMessage(data.error);
      }
    } catch (err) {
      setStatus('error'); setMessage('Bir hata oluştu.');
    }
  };

  return (
    <div className={styles.newsletter}>
      <h4>Bültene Abone Ol</h4>
      <p>Yeni testlerden ilk sen haberdar ol!</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <input 
          type="email" value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder="E-posta adresin" required disabled={status === 'loading'}
        />
        <button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Ekleniyor...' : 'Abone Ol'}
        </button>
      </form>
      
      {message && (
        <p className={`${styles.message} ${status === 'error' ? styles.error : styles.success}`}>
          {message}
        </p>
      )}
    </div>
  );
}
