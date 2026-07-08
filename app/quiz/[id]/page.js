'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import styles from './quiz.module.css';

// Mock Quiz Data
const MOCK_QUIZ = {
  id: '1',
  title: 'Hangi Hayvan Karakteri Sensin?',
  description: 'Kişiliğine göre hangi hayvan karakteri olduğunu öğren!',
  totalQuestions: 8,
  questions: [
    {
      id: '1',
      question: 'Sosyal ortamlarda ne yaparsın?',
      options: [
        {
          id: 'opt1',
          text: 'Merkezdeyim, herkes benimle konuşmak ister',
          results: { tiger: 10, eagle: 8, wolf: 5, rabbit: 2 },
        },
        {
          id: 'opt2',
          text: 'İyi bir grupça vakit geçiririm',
          results: { dolphin: 10, eagle: 7, tiger: 5, wolf: 3 },
        },
        {
          id: 'opt3',
          text: 'Az konuşurum ama güzeldir',
          results: { wolf: 10, eagle: 6, tiger: 3, dolphin: 4 },
        },
        {
          id: 'opt4',
          text: 'Rahat hissedersem katılırım',
          results: { rabbit: 10, dolphin: 7, eagle: 4, tiger: 2 },
        },
      ],
    },
    {
      id: '2',
      question: 'Stres altında nasıl davranırsın?',
      options: [
        {
          id: 'opt1',
          text: 'Hızlı kararlar alırım',
          results: { tiger: 10, eagle: 9, wolf: 6, dolphin: 3 },
        },
        {
          id: 'opt2',
          text: 'Detaylı analiz ederim',
          results: { eagle: 10, wolf: 8, tiger: 4, dolphin: 5 },
        },
        {
          id: 'opt3',
          text: 'Yalnız kalırım',
          results: { wolf: 10, rabbit: 8, eagle: 5, tiger: 2 },
        },
        {
          id: 'opt4',
          text: 'Başkalarından destek isterim',
          results: { dolphin: 10, rabbit: 9, tiger: 3, eagle: 4 },
        },
      ],
    },
    {
      id: '3',
      question: 'İdeal çalışma ortamı hangisi?',
      options: [
        {
          id: 'opt1',
          text: 'Rekabetçi, hızlı tempolu',
          results: { tiger: 10, eagle: 8, wolf: 5, rabbit: 2 },
        },
        {
          id: 'opt2',
          text: 'Yapılandırılmış, sistematik',
          results: { eagle: 10, wolf: 8, dolphin: 4, tiger: 3 },
        },
        {
          id: 'opt3',
          text: 'Özgür, bağımsız',
          results: { wolf: 10, eagle: 6, tiger: 4, rabbit: 3 },
        },
        {
          id: 'opt4',
          text: 'İşbirliğine dayalı',
          results: { dolphin: 10, rabbit: 8, tiger: 3, eagle: 4 },
        },
      ],
    },
    {
      id: '4',
      question: 'Hedeflerine ulaşırken ne yaparsın?',
      options: [
        {
          id: 'opt1',
          text: 'Doğrudan ilerlerim, hiçbir engel beni durduramaz',
          results: { tiger: 10, eagle: 7, wolf: 5, rabbit: 2 },
        },
        {
          id: 'opt2',
          text: 'Planlı stratejik adımlar atarım',
          results: { eagle: 10, wolf: 7, tiger: 5, dolphin: 4 },
        },
        {
          id: 'opt3',
          text: 'Kendi tempomdaki yolumu bulursum',
          results: { wolf: 10, rabbit: 8, eagle: 5, tiger: 3 },
        },
        {
          id: 'opt4',
          text: 'İnsanlarla işbirliği yapıp ilerlerim',
          results: { dolphin: 10, rabbit: 7, tiger: 3, wolf: 4 },
        },
      ],
    },
    {
      id: '5',
      question: 'En büyük güçlü yanın nedir?',
      options: [
        {
          id: 'opt1',
          text: 'Cesaret ve liderlik',
          results: { tiger: 10, eagle: 8, wolf: 4, dolphin: 3 },
        },
        {
          id: 'opt2',
          text: 'İntellijen ve analitik düşünce',
          results: { eagle: 10, wolf: 7, tiger: 4, dolphin: 4 },
        },
        {
          id: 'opt3',
          text: 'Bağımsızlık ve içgüdü',
          results: { wolf: 10, eagle: 6, tiger: 4, rabbit: 3 },
        },
        {
          id: 'opt4',
          text: 'Empati ve iletişim',
          results: { dolphin: 10, rabbit: 8, tiger: 2, eagle: 4 },
        },
      ],
    },
    {
      id: '6',
      question: 'Boş zamanında ne yapmayı seversin?',
      options: [
        {
          id: 'opt1',
          text: 'Heyecan ve macera',
          results: { tiger: 10, eagle: 7, wolf: 6, dolphin: 4 },
        },
        {
          id: 'opt2',
          text: 'Öğrenme ve araştırma',
          results: { eagle: 10, wolf: 7, tiger: 3, dolphin: 4 },
        },
        {
          id: 'opt3',
          text: 'Doğada zaman geçirmek',
          results: { wolf: 10, rabbit: 8, eagle: 4, tiger: 2 },
        },
        {
          id: 'opt4',
          text: 'Arkadaşlarla sosyalleşmek',
          results: { dolphin: 10, tiger: 6, rabbit: 5, eagle: 3 },
        },
      ],
    },
    {
      id: '7',
      question: 'Başarıyı nasıl tanımlarsın?',
      options: [
        {
          id: 'opt1',
          text: 'Üstün olmak, kazanmak',
          results: { tiger: 10, eagle: 7, wolf: 5, rabbit: 2 },
        },
        {
          id: 'opt2',
          text: 'Amaçlara ulaşmak',
          results: { eagle: 10, tiger: 6, wolf: 5, dolphin: 4 },
        },
        {
          id: 'opt3',
          text: 'Bağımsız ve özgür olmak',
          results: { wolf: 10, eagle: 6, rabbit: 5, tiger: 3 },
        },
        {
          id: 'opt4',
          text: 'Diğerleriyle pozitif ilişkiler',
          results: { dolphin: 10, rabbit: 8, tiger: 2, eagle: 3 },
        },
      ],
    },
    {
      id: '8',
      question: 'Hayatın felsefesi nedir?',
      options: [
        {
          id: 'opt1',
          text: 'Yaşamı en iyi şekilde yaşamak',
          results: { tiger: 10, eagle: 8, dolphin: 5, rabbit: 3 },
        },
        {
          id: 'opt2',
          text: 'Bilgi ve anlayış aramak',
          results: { eagle: 10, wolf: 7, tiger: 3, rabbit: 4 },
        },
        {
          id: 'opt3',
          text: 'İç barışı bulup yaşamak',
          results: { wolf: 10, rabbit: 8, eagle: 4, tiger: 2 },
        },
        {
          id: 'opt4',
          text: 'Başkalarını mutlu etmek',
          results: { dolphin: 10, rabbit: 9, tiger: 2, eagle: 3 },
        },
      ],
    },
  ],
  results: {
    tiger: {
      title: '🐯 Kaplan Karakteri',
      description: 'Cesur, kararlı ve lider. Cesaretin ve güçlü iradeni ile ön plana çıkarsın.',
      traits: ['Lider', 'Cesur', 'Kararlı', 'Güven dolu', 'Hızlı kararlar'],
      details:
        'Bir Kaplan karakteri olarak, doğal bir lidersın. İnsanlar seni takip eder çünkü senin kararlılığınız ve cesaretin ilham vericidir. Risk almaktan korkmaz ve zorluklar karşısında güçlü durursun. Ancak bazen çok acele hareket edebilir ve başkalarının duygularını göz ardı edebilirsin.',
    },
    eagle: {
      title: '🦅 Kartal Karakteri',
      description: 'Zeki, stratejik ve vizyoner. Geniş bakış açın ve analitik düşüncen sayesinde başarı yakın.',
      traits: ['Zeki', 'Stratejik', 'Vizyoner', 'Detaycı', 'Lojik'],
      details:
        'Kartal karakteri olarak, yüksek zeka ve stratejik düşüncen sayesinde başarı yakalamak kolay. Bir adım gerisinden bütünü görebilir ve en iyi yolu planlayabilirsin. Lojik ve analitiksin ama bazen duygularını yeterince göz önünde bulundurmayabilirsin.',
    },
    wolf: {
      title: '🐺 Kurt Karakteri',
      description: 'Bağımsız, gizemli ve içgüdülü. Kendi yolunu bul ve güven.',
      traits: ['Bağımsız', 'İçgüdülü', 'Gizemli', 'Sabırlı', 'Disiplinli'],
      details:
        'Kurt karakteri olarak, başkalarının tutsağı olmayan bağımsız bir ruh taşısın. İçgüdün güçlü ve sezgilerin sana doğru yolu gösterir. Sabırlı ve disiplinlisin ama bazen çok kapalı olabilir ve sosyal bağlantıları hak ettiklerinden daha az geliştire bilirsin.',
    },
    dolphin: {
      title: '🐬 Yunus Karakteri',
      description: 'Arkadaş canlısı, zeki ve öz bilinci yüksek. İnsanlarla bağlantı kurmak senin süper güçün.',
      traits: ['Arkadaş canlısı', 'Zeki', 'Empatik', 'Sosyal', 'Uyumlu'],
      details:
        'Yunus karakteri olarak, insanlarla bağlantı kurmakta doğal yeteneklerin vardır. Empatik ve anlayışlısın, diğer insanların duygularını hisseder ve saygı gösterirsin. Çok sosyal ve işbirliğine açıksın. Ancak bazen çok uyumlu olmaya çalışarak kendi duygularını göz ardı edebilirsin.',
    },
    rabbit: {
      title: '🐰 Tavşan Karakteri',
      description: 'Hassas, hızlı ve uyarlanabilir. Çevrene dikkat ediş ve incelikli yaklaşımın değerlidir.',
      traits: ['Hassas', 'Hızlı', 'Uyarlanabilir', 'Düşünceli', 'Zeki'],
      details:
        'Tavşan karakteri olarak, çevrene karşı yüksek duyarlılığa sahipsin. Hızlı hareket eder ve değişikliklere kolay adapte olabilirsin. Diğer insanların duygularını derin bir şekilde anlarsın. Ancak bazen çok kaygı duyabilir ve kontrol kaybetme korkusu yaşayabilirsin.',
    },
  },
};

export default function QuizPage() {
  const params = useParams();
  const quizId = params.id;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    tiger: 0,
    eagle: 0,
    wolf: 0,
    dolphin: 0,
    rabbit: 0,
  });
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const quiz = MOCK_QUIZ;
  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.totalQuestions) * 100;

  const handleOptionSelect = (option) => {
    setSelectedOption(option.id);

    // Puanları güncelle
    const newScores = { ...scores };
    Object.keys(option.results).forEach((key) => {
      newScores[key] += option.results[key];
    });
    setScores(newScores);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const getResult = () => {
    const maxScore = Math.max(...Object.values(scores));
    const resultKey = Object.keys(scores).find(
      (key) => scores[key] === maxScore
    );
    return quiz.results[resultKey];
  };

  if (quizCompleted) {
    const result = getResult();
    return (
      <div className={styles.quizContainer}>
        <div className={styles.resultCard}>
          <h1 className={styles.resultTitle}>{result.title}</h1>
          <p className={styles.resultDescription}>{result.description}</p>
          <p className={styles.resultDetails}>{result.details}</p>

          <div className={styles.traits}>
            <h3>Özellikler</h3>
            <div className={styles.traitsGrid}>
              {result.traits.map((trait, index) => (
                <span key={index} className={styles.trait}>
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.shareButtons}>
            <button className="btn btn-primary" onClick={() => alert('Paylaş!')}>
              🔗 Sonucu Paylaş
            </button>
            <button className="btn btn-outline" onClick={() => window.location.href = '/'}>
              ← Ana Sayfaya Dön
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
            Soru {currentQuestion + 1} / {quiz.totalQuestions}
          </p>
        </div>

        {/* Question */}
        <h2 className={styles.question}>{question.question}</h2>

        {/* Options */}
        <div className={styles.optionsGrid}>
          {question.options.map((option) => (
            <button
              key={option.id}
              className={`${styles.optionButton} ${
                selectedOption === option.id ? styles.selected : ''
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option.text}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className={styles.nextButtonSection}>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === quiz.questions.length - 1
              ? 'Sonuçları Göster'
              : 'Sonraki Soru →'}
          </button>
        </div>
      </div>
    </div>
  );
}
