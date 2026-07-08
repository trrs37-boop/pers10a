# Pers10a - Kişilik Testi Platformu

Buzzfeed tarzı eğlenceli kişilik testleri platformu. Kullanıcılar testleri çözer, cevaplarına göre sonuç alır ve paylaşır.

🌐 **Demo:** https://pers10a.vercel.app

## ✨ Özellikler

- 🎯 **Quiz Sistemi** - Her soru farklı sonuçlara puan ekler
- 👤 **Kullanıcı Sistemi** - Google ve Email ile giriş
- 🏷️ **Kategoriler** - Testleri kategorilere göre filtreleme
- 💬 **Yorum Sistemi** - Testler altında yorum yapabilme
- 🔧 **Admin Paneli** - Yeni testler oluşturma ve yönetme
- 📱 **Responsive Design** - Mobil ve desktop uyumlu

## 🛠️ Teknoloji Stack

| Katman | Teknoloji | Açıklama |
|--------|-----------|----------|
| Frontend | Next.js 14 | React + Server Components |
| Styling | Vanilla CSS | Custom design system |
| Database | Firebase Firestore | Ücretsiz NoSQL |
| Auth | Firebase Auth | Google + Email giriş |
| Hosting | Vercel | Ücretsiz deploy |

## 🚀 Hızlı Başlangıç

### 1. Gereksinimler

- Node.js 18+ ve npm

### 2. Kodu İndir

```bash
git clone https://github.com/yourusername/pers10a.git
cd pers10a
npm install
```

### 3. Firebase Kurulumu

1. [Firebase Console](https://console.firebase.google.com) açın
2. Yeni proje oluşturun
3. Firestore Database oluşturun
4. Firebase Authentication'ı etkinleştirin (Google + Email)
5. Proje ayarlarından config'i kopyalayın

### 4. Environment Variables

`.env.local.example` dosyasını `.env.local` olarak kopyalayın ve Firebase credentials'larınızı ekleyin:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 5. Development Sunucusunu Başlat

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` açın.

## 📁 Proje Yapısı

```
pers10a/
├── app/                    # Next.js App Router
│   ├── page.js            # Ana sayfa
│   ├── layout.js          # Root layout
│   ├── globals.css        # Globel stiller + design system
│   ├── quiz/
│   │   └── [id]/
│   │       ├── page.js    # Quiz çözme sayfası
│   │       └── quiz.module.css
│   └── auth/
│       ├── login/
│       ├── signup/
│       └── auth.module.css
├── components/            # Reusable components
│   ├── Header.js
│   ├── Footer.js
│   └── *.module.css
├── lib/
│   └── firebase.js        # Firebase konfigürasyonu
├── public/                # Static files
├── package.json
└── README.md
```

## 📝 Firestore Database Yapısı

```
quizzes/
  ├── {quizId}/
  │   ├── title: string
  │   ├── description: string
  │   ├── category: string
  │   ├── published: boolean
  │   └── questions/
  │       └── {questionId}/
  │           ├── question: string
  │           └── options/
  │               └── {optionId}/
  │                   ├── text: string
  │                   └── results: object

users/
  ├── {userId}/
  │   ├── name: string
  │   ├── email: string
  │   ├── isAdmin: boolean
  │   └── solvedQuizzes: array

results/
  ├── {quizId}/
  │   └── {userId}/
  │       ├── result: string
  │       ├── timestamp: date
  │       └── scores: object

comments/
  ├── {quizId}/
  │   └── {commentId}/
  │       ├── userId: string
  │       ├── text: string
  │       ├── timestamp: date
  │       └── likes: number
```

## 🎨 Design System

Tüm renkler, typography ve spacing `app/globals.css` içinde CSS variables olarak tanımlanmıştır.

**Ana Renkler:**
- Primary (İndigo): `--primary: #6366f1`
- Secondary (Pembe): `--secondary: #ec4899`
- Success: `--success: #10b981`
- Error: `--error: #ef4444`

## 📦 Dağıtım (Vercel)

### Vercel'e Deploy Etme

1. GitHub repo'nuzda kodu push edin
2. [Vercel Dashboard](https://vercel.com) açın
3. "New Project" tıklayın ve GitHub repo'nuzı seçin
4. Environment variables'ları ekleyin
5. Deploy edin! 🎉

### Environment Variables (Vercel)

Vercel dashboard'da Settings → Environment Variables'e gidin ve şunları ekleyin:

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_ADMIN_EMAILS
```

## 🗺️ Geliştirme Yol Haritası

- [x] Next.js projesi oluştur
- [x] Firebase kurulumu
- [x] Design system
- [x] Ana sayfa
- [x] Quiz çözme sayfası
- [x] Sonuç sayfası
- [x] Auth (UI)
- [ ] Firebase Auth entegrasyonu
- [ ] Yorum sistemi
- [ ] Admin paneli
- [ ] Profil sayfası
- [ ] Paylaşım özellikleri

## 🤝 Katkı Yapma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Push edin (`git push origin feature/AmazingFeature`)
5. Pull Request açın

## 📄 Lisans

MIT License - Detaylar için [LICENSE](LICENSE) dosyasına bakın

## 📞 İletişim

- Email: info@pers10a.com
- Twitter: [@pers10a](https://twitter.com/pers10a)
- Instagram: [@pers10a](https://instagram.com/pers10a)

## 🙏 Teşekkürler

- Next.js ekibine
- Firebase ekibine
- Vercel'e ücretsiz hosting için

---

**Made with ❤️ using Next.js + Firebase**
