# 🚀 Pers10a Kurulum Rehberi

Adım adım Pers10a platformunuzu kurma ve Vercel'e dağıtma talimatları.

## 📋 Gereksinimler

- Node.js 18+ ([İndir](https://nodejs.org/))
- npm veya yarn
- Git ([İndir](https://git-scm.com/))
- GitHub hesabı
- Vercel hesabı (ücretsiz)
- Firebase hesabı (ücretsiz)

## 1️⃣ Firebase Projesi Oluşturma

### Adım 1: Firebase Console'a Girin
- https://console.firebase.google.com adresine gidin
- Google hesabınızla giriş yapın

### Adım 2: Yeni Proje Oluşturun
- "Proje Oluştur" tıklayın
- Proje adını girin: `pers10a`
- Google Analytics'i kapatabilirsiniz (opsiyonel)
- "Proje Oluştur" butonuna tıklayın

### Adım 3: Firestore Database Oluşturun
1. Sol menüden "Firestore Database" seçin
2. "Veritabanı Oluştur" tıklayın
3. Mod seçimi: **Üretim modu** (başlangıç olarak)
4. Konum: En yakın bölgeyi seçin
5. "Oluştur" tıklayın

### Adım 4: Firestore Güvenlik Kuralları
Test ortamı için (geliştirme sırasında) Firestore Rules'u güncelleyin:

**Firestore → Rules** seçin ve şunları yapıştırın:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Geliştirme sırasında: Her şey açık
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

⚠️ **UYARI:** Production'da uygun kurallar ayarlanmalıdır!

### Adım 5: Authentication Etkinleştirin

1. Sol menüden "Authentication" seçin
2. "Başlayın" tıklayın
3. Sağ sağlayıcı seçin: **Google**
   - Proje adını girin (pers10a)
   - Destek e-postasını girin
   - "Kaydet" tıklayın
4. **Email/Şifre** sağlayıcısını da etkinleştirin
   - "Email/Şifre" seçin
   - "Etkinleştir" tıklayın

### Adım 6: Firebase Config'i Alın

1. Proje Ayarları (gear icon) → "Proje Ayarları"
2. "Uygulamalarım" bölümünde web uygulaması kaydettirin
3. Firebase config bilgilerini kopyalayın:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "pers10a-xxx.firebaseapp.com",
  projectId: "pers10a-xxx",
  storageBucket: "pers10a-xxx.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

## 2️⃣ Yerel Geliştirme Ortamını Kurma

### Adım 1: Projeyi Clone Edin

```bash
# GitHub Desktop veya terminal kullanarak
git clone https://github.com/yourusername/pers10a.git
cd pers10a
```

### Adım 2: Bağımlılıkları Yükleyin

```bash
npm install
```

### Adım 3: Environment Variables Dosyası Oluşturun

`.env.local` dosyası oluşturun ve Firebase config'i ekleyin:

```bash
# İçeriği
NEXT_PUBLIC_FIREBASE_API_KEY=AIza...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=pers10a-xxx.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=pers10a-xxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=pers10a-xxx.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
NEXT_PUBLIC_USE_FIREBASE_EMULATOR=false
NEXT_PUBLIC_ADMIN_EMAILS=admin@example.com
```

### Adım 4: Development Sunucusunu Başlatın

```bash
npm run dev
```

Tarayıcıda `http://localhost:3000` açın. 🎉

## 3️⃣ Vercel'e Deploy Etme

### Adım 1: Kodunuzu GitHub'a Push Edin

```bash
git add .
git commit -m "Initial commit: Pers10a starter template"
git push origin main
```

### Adım 2: Vercel'e Giriş Yapın

- https://vercel.com adresine gidin
- "GitHub ile Giriş Yap" tıklayın
- GitHub hesabınızı bağlayın

### Adım 3: Projeyi İçeri Aktarın

1. "Yeni Proje" tıklayın
2. GitHub repo'nuzda `pers10a`'yı seçin
3. İçeri aktarın

### Adım 4: Environment Variables Ekleyin

Vercel dashboard'da:
1. Proje → Settings → Environment Variables
2. Şunları ekleyin:

```
NEXT_PUBLIC_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID
NEXT_PUBLIC_ADMIN_EMAILS
```

### Adım 5: Deploy Edin

"Deploy" butonuna tıklayın ve dağıtım tamamlanmasını bekleyin.

✅ Başarılı! Siteniz artık internette canlı: `https://pers10a.vercel.app`

## 4️⃣ İlk Test Verilerini Oluşturma

### Adım 1: Firebase Console'a Girin

1. Firebase Console → Firestore → Başla
2. `quizzes` koleksiyonu oluşturun

### Adım 2: Örnek Quiz Ekleyin

```json
{
  "title": "Hangi Hayvan Karakteri Sensin?",
  "category": "Kişilik",
  "description": "Kişiliğine göre hangi hayvan karakteri olduğunu öğren",
  "published": true,
  "createdAt": "2024-01-01",
  "attempts": 0
}
```

> Admin Panel hazır olduktan sonra, testleri web UI üzerinden ekleyebileceksiniz.

## 🔧 Sorun Giderme

### "Firebase Config Hatası"
- `.env.local` dosyasında tüm değerlerin doğru olduğundan emin olun
- Parolalı karakter yoksa, tırnak işaretleri kaldırın

### "Port 3000 Kullanımda"
```bash
# Farklı port kullan
npm run dev -- -p 3001
```

### "Vercel Deploy Başarısız"
- Environment variables'ları kontrol edin
- Build logs'ları kontrol edin (Vercel Dashboard)
- Node.js versiyonu 18+ olduğundan emin olun

### "Firestore Erişim Hatası"
- Firestore Security Rules'ı kontrol edin
- Kurallar "production mode"da çok sıkı olabilir
- Development sırasında daha esnek kurallar kullanın

## 📚 Sonraki Adımlar

1. **Admin Paneli Oluştur** - Test yönetimi için
2. **Yorum Sistemi Ekle** - Firestore ile
3. **Profil Sayfası Ekle** - Kullanıcı özelleştirmeleri
4. **Paylaşım Özellikleri** - Sosyal medya integrasyonu
5. **SEO Optimizasyonu** - next-seo kütüphanesi ekle

## 🛡️ Güvenlik Notları

1. **Production'da** Firestore rules'u sıkı kurallarla ayarlayın
2. Sensible veriler `.env.local`'de saklanmalı
3. Admin emails verification ekleyin
4. Rate limiting ekleyin (spam'dan korunmak için)

## 📞 Yardım

Sorun yaşıyorsanız:

- README.md dosyasını okuyun
- Firebase docs: https://firebase.google.com/docs
- Next.js docs: https://nextjs.org/docs
- Vercel docs: https://vercel.com/docs

---

**Tebrikler! Pers10a'yı başarıyla kurdum! 🎉**

Şimdi proje geliştirmeye başlayabilirsiniz. İyi kodlamalar! 💻
