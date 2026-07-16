'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import { allQuizzes } from '@/lib/quizzes';

const CATEGORIES = [
  { id: 'all', name: 'Tümü', icon: '✨' },
  { id: 'personality', name: 'Kişilik', icon: '😊' },
  { id: 'politics', name: 'Siyaset', icon: '💼' },
  { id: 'fun', name: 'Eğlence', icon: '🎉' },
  { id: 'love', name: 'İlişkiler', icon: '❤️' },
  { id: 'history', name: 'Tarih', icon: '📜' },
  { id: 'sport', name: 'Spor', icon: '⚽' },
  { id: 'mystery', name: 'Gizem', icon: '🔍' },
  { id: 'astro', name: 'Astroloji', icon: '🔮' },
];

export default function Home() {
  const [quizzes, setQuizzes] = useState(allQuizzes);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(false);

  const handleCategoryFilter = (categoryId) => {
    setSelectedCategory(categoryId);
    setLoading(true);
    
    setTimeout(() => {
      if (categoryId === 'all') {
        setQuizzes(allQuizzes);
      } else {
        const categoryMap = {
          personality: 'Kişilik',
          career: 'Kariyer',
          fun: 'Eğlence',
          tech: 'Teknoloji'
        };
        const filtered = allQuizzes.filter(quiz => quiz.category === categoryMap[categoryId]);
        setQuizzes(filtered);
      }
      setLoading(false);
    }, 300);
  };

  return (
    <div className={styles.homepage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>PERS10A'ya Hoş Geldin!</h1>
          <p>Eğlenceli kişilik testleriyle kendinizi keşfedin</p>
          <Link href="#quizzes" className="btn btn-primary btn-lg">
            Testleri Keşfet
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className={styles.filterSection}>
        <div className="container">
          <h2>Kategoriler</h2>
          <div className={styles.categoryGrid}>
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                className={`${styles.categoryBtn} ${
                  selectedCategory === category.id ? styles.active : ''
                }`}
                onClick={() => handleCategoryFilter(category.id)}
              >
                <span className={styles.categoryIcon}>{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quizzes Grid */}
      <section id="quizzes" className={styles.quizzesSection}>
        <div className="container">
          <h2>Popüler Testler</h2>
          
          {loading ? (
            <div className={styles.loading}>Yükleniyor...</div>
          ) : (
            <div className={styles.quizGrid}>
              {quizzes.map((quiz) => (
                <div key={quiz.id} className="card">
                  <div className={styles.quizCard}>
                    <div className={styles.quizImage}>{quiz.image}</div>
                    <h3>{quiz.title}</h3>
                    <p className="text-muted">{quiz.description}</p>
                    <div className={styles.quizFooter}>
                      <span className={styles.category}>{quiz.category}</span>
                      <span className={styles.attempts}>
                        {quiz.attempts} çözüldü
                      </span>
                    </div>
                    <Link href={`/quiz/${quiz.id}`} className="btn btn-primary w-full">
                      Başla →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2>Yeni Testler Hazırlanıyor!</h2>
          <p>Her gün yeni test ekleniyor!</p>
          <Link href="/auth/signup" className="btn btn-secondary btn-lg">
            Hesap Oluştur
          </Link>
        </div>
      </section>
    </div>
  );
}
