'use client';

import { useEffect } from 'react';
import { incrementSolvedCount } from '@/lib/firebase';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import styles from './quiz.module.css';
import { allQuizzes } from '@/lib/quizzes';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizId = params.id;

  // lib/quizzes.js'den ilgili quizi bul
  const quiz = allQuizzes.find((q) => q.id === quizId);
useEffect(() => {
  if (quiz) {
    incrementSolvedCount(quizId);
  }
}, [quiz, quizId]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Quiz bulunamazsa hata göster
  if (!quiz) {
    return (
      <div className={styles.quizContainer}>
        <div className={styles.quizCard}>
          <h2>Quiz bulunamadı 😕</h2>
          <p>"{quizId}" ID'li bir quiz mevcut değil.</p>
          <div className={styles.nextButtonSection}>
            <button className="btn btn-primary" onClick={() => router.push('/')}>
              ← Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];
  const totalQuestions = quiz.questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);

    // Puanları güncelle
    const newScores = { ...scores };
    Object.keys(answer.points).forEach((key) => {
      newScores[key] = (newScores[key] || 0) + answer.points[key];
    });
    setScores(newScores);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const getResult = () => {
    if (Object.keys(scores).length === 0) return null;
    const maxScore = Math.max(...Object.values(scores));
    const resultKey = Object.keys(scores).find((key) => scores[key] === maxScore);
    const resultObj = quiz.results.find((r) => r.animal === resultKey);
    return resultObj;
  };

  if (quizCompleted) {
    const result = getResult()

useEffect(() => {
  incrementSolvedCount(quizId); // quizId'yi parametrelerden al
}, []);

return (
      <div className={styles.quizContainer}>
        <div className={styles.resultCard}>
          <h1 className={styles.resultTitle}>{result?.emoji} {result?.title}</h1>
          <p className={styles.resultDescription}>
            {result?.description}
          </p>
          <div className={styles.shareButtons}>
            <button
              className="btn btn-primary"
             onClick={() => {
  const shareUrl = window.location.href;
  const shareText = `${result?.emoji} ${result?.title}\n${result?.description}\n\n${shareUrl}`;
  navigator.clipboard.writeText(shareText);
  alert('Sonuç kopyalandı!');
}}
            >
              🔗 Sonucu Paylaş
            </button>
            <button
              className="btn btn-outline"
              onClick={() => router.push('/')}
            >
              ↩ Ana Sayfaya Dön
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quizContainer}>
      <div className={styles.quizCard}>
        {/* Progress Bar */}
        <div className={styles.progressSection}>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className={styles.progressText}>
            Soru {currentQuestion + 1} / {totalQuestions}
          </p>
        </div>

        {/* Question */}
        <h2 className={styles.question}>{question.text}</h2>

        {/* Options */}
        <div className={styles.optionsGrid}>
          {question.answers.map((answer, index) => (
            <button
              key={index}
              className={`${styles.optionButton} ${
                selectedAnswer === answer ? styles.selected : ''
              }`}
              onClick={() => handleAnswerSelect(answer)}
            >
              {answer.text}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className={styles.nextButtonSection}>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            {currentQuestion === totalQuestions - 1
              ? 'Sonuçları Gönder 🎯'
              : 'Sonraki Soru →'}
          </button>
        </div>
      </div>
    </div>
  );
}
