const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');
const { allQuizzes } = require('../lib/quizzes');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
});

const db = admin.firestore();

async function setupQuizzes() {
  for (const quiz of allQuizzes) {
    await db.collection('quizzes').doc(quiz.id).set({
      title: quiz.title,
      description: quiz.description,
      emoji: quiz.emoji,
      solvedCount: 0,
    });
    console.log(`✓ ${quiz.id} eklendi`);
  }
  console.log('Tamamlandı!');
  process.exit(0);
}

setupQuizzes();
