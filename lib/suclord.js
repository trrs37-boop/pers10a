export default {
  id: "suclord",
  title: "Para Harcama Tarzına Göre Hangi Suç Lordusun?",
  category: "Eğlence",
  description: "Cüzdanını kullanma şeklin seni hangi efsanevi suçluya benzetiyor?",
  image: "💰",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Maaş yattı! İlk harcaman ne olur?",
      answers: [
        { text: "Herkese bir şey alırım, cömertlik benim işim", points: { Escobar: 3, AlCapone: 1 } },
        { text: "Pahalı bir restoranda kendimi ödüllendiririm", points: { AlCapone: 3, FrankCostello: 1 } },
        { text: "Kimse bilmez, sessizce biriktiririm", points: { TheodoreKaczynski: 3, FrankCostello: 2 } },
        { text: "Sevgilimle romantik bir akşam geçiririm", points: { TedBundy: 3, Escobar: 1 } }
      ]
    },
    {
      id: 2,
      text: "Arkadaşın senden borç istedi. Tepkin ne olurdu?",
      answers: [
        { text: "Hemen veririm, geri istemem bile", points: { Escobar: 3, TedBundy: 1 } },
        { text: "Veririm ama karşılığında sadakat beklerim", points: { AlCapone: 3, FrankCostello: 2 } },
        { text: "Duruma göre, güvendiğime veririm", points: { FrankCostello: 3, TheodoreKaczynski: 1 } },
        { text: "Param yok derim, olsa bile", points: { TheodoreKaczynski: 3, AlCapone: 1 } }
      ]
    },
    {
      id: 3,
      text: "Sevgiline bir hediye alacaksın. Nasıl bir hediye olurdu?",
      answers: [
        { text: "Abartılı ve gösterişli bir süs eşyası alırdım, herkes görsün", points: { Escobar: 3, AlCapone: 2 } },
        { text: "Kaliteli ve pahalı bir mücevher alırdım", points: { AlCapone: 3, FrankCostello: 1 } },
        { text: "Pratik ve işe yarar bir şey, gösterişsiz", points: { TheodoreKaczynski: 3, FrankCostello: 2 } },
        { text: "Onu etkileyecek romantik ve sürpriz bir hediye", points: { TedBundy: 3, Escobar: 1 } }
      ]
    },
    {
      id: 4,
      text: "Büyük ikramiyeyi kazandın! Ne yaparsın?",
      answers: [
        { text: "Yoksullara dağıtırım, cömertlik benim işim", points: { Escobar: 3, TedBundy: 1 } },
        { text: "Lüks bir araba veya mücevher alırım", points: { AlCapone: 3, FrankCostello: 1 } },
        { text: "Kimseye söylemem, saklar ve normal yaşamıma devam ederim", points: { TheodoreKaczynski: 3, FrankCostello: 2 } },
        { text: "Sevgilimle romantik bir gezi planlarım", points: { TedBundy: 3, Escobar: 1 } }
      ]
    },
    {
      id: 5,
      text: "Alışverişte pazarlık yapar mısın?",
      answers: [
        { text: "Asla, fiyat ne ise öderim, lüks benim hakkım", points: { Escobar: 3, AlCapone: 2 } },
        { text: "Ederim ama nezaketle, ilişkileri korurum", points: { AlCapone: 3, FrankCostello: 2 } },
        { text: "Kesinlikle, her kuruşun hesabını bilirim, israfa hayır", points: { TheodoreKaczynski: 3, FrankCostello: 1 } },
        { text: "Pazarlık yapmam, başka yere bakarım, gereksiz muhatap olmam", points: { TheodoreKaczynski: 2, TedBundy: 1 } }
      ]
    },
    {
      id: 6,
      text: "Lüks ve zenginlik sana ne ifade ediyor?",
      answers: [
        { text: "Güç ve saygınlık", points: { Escobar: 3, AlCapone: 2 } },
        { text: "İncelik ve stil", points: { AlCapone: 3, FrankCostello: 1 } },
        { text: "Gereksiz, sade bir hayat daha değerli", points: { TheodoreKaczynski: 3, FrankCostello: 2 } },
        { text: "Sevdiklerine sunabileceğin fırsatlar ve mutluluk", points: { TedBundy: 3, Escobar: 1 } }
      ]
    },
    {
      id: 7,
      text: "Biri sana pahalı bir hediye aldı. Ne düşünürsün?",
      answers: [
        { text: "Sevinirim ama karşılığını mutlaka veririm, borçlu kalmam", points: { Escobar: 3, AlCapone: 2 } },
        { text: "Şüphelenirim, karşılığında bir şey isteyecek", points: { FrankCostello: 3, TheodoreKaczynski: 2 } },
        { text: "Memnun olurum, nezaketine hayran kalırım", points: { AlCapone: 3, TedBundy: 2 } },
        { text: "Tedirgin olurum, borçlu hissederim, kabul etmek istemem", points: { TheodoreKaczynski: 3, FrankCostello: 1 } }
      ]
    },
    {
      id: 8,
      text: "Masraflar bizden olacak olsaydı, gelecek yaz için tatil planın ne olurdu?",
      answers: [
        { text: "Özel ada, yat, helikopter ve parti!", points: { Escobar: 3, AlCapone: 2 } },
        { text: "5 yıldızlı otel, lüks restoranlar, şık mekanlar", points: { AlCapone: 3, FrankCostello: 1 } },
        { text: "Kimsenin bulmayacağı, sakin ve gizli bir yer", points: { TheodoreKaczynski: 3, FrankCostello: 2 } },
        { text: "Sevgilimle romantik ve unutulmaz bir kaçamak", points: { TedBundy: 3, Escobar: 1 } }
      ]
    },
    {
      id: 9,
      text: "Ekonomik kriz olsaydı ilk ne yapardın?",
      answers: [
        { text: "Fark etmez, param hiç bitmez, kriz bana gelmez", points: { Escobar: 3, AlCapone: 1 } },
        { text: "Bağlantılarımı kullanır, krizi fırsata çeviririm", points: { AlCapone: 3, FrankCostello: 2 } },
        { text: "Çoktan hazırlıklıyım, her şeyi planladım", points: { TheodoreKaczynski: 3, FrankCostello: 2 } },
        { text: "Sevdiklerimi alır, uzaklara gider, yeni başlangıç", points: { TedBundy: 3, Escobar: 1 } }
      ]
    },
    {
      id: 10,
      text: "Hayattaki en büyük lüksün ne?",
      answers: [
        { text: "İstediğim her şeyi alabilmek", points: { Escobar: 3, AlCapone: 2 } },
        { text: "Saygı görmek ve itibar", points: { AlCapone: 3, FrankCostello: 1 } },
        { text: "Özgür olmak, kimseye hesap vermemek", points: { TheodoreKaczynski: 3, FrankCostello: 2 } },
        { text: "Sevdiklerimle huzurlu bir hayat, sessizlik", points: { TedBundy: 3, Escobar: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Escobar",
      emoji: "👑",
      title: "Sen Pablo Escobar'sın!",
      description: "Paranın kralısın ama cömertliğin de efsane! Lüks ve gösteriş senin için vazgeçilmez. Halka yardım eder, sadakat bekler, düşmanlarına göz açtırmazsın. Para senin için güç ve sevgi satın almanın aracı. 👑💰"
    },
    {
      animal: "AlCapone",
      emoji: "🎩",
      title: "Sen Al Capone'sun!",
      description: "Stil sahibi, karizmatik ve hesaplı birisin! Paranı gösterişli ama zevkli şekilde kullanırsın. Takım elbisen, puro ve lüks restoranlar senin olmazsa olmazın. Dışarıda centilmen, içeride acımasız. Para sana sınıf ve saygınlık kazandırır. 🎩💰"
    },
    {
      animal: "TedBundy",
      emoji: "😈",
      title: "Sen Ted Bundy'sin!",
      description: "Karizmatik, zeki ve manipülatif birisin! Dışarıdan ne kadar çekici ve kibar görünsen de, içinde hesapçı bir ruh var. Paranı insanları etkilemek, sevdiklerine romantik sürprizler yapmak için kullanırsın. Kimse senin gerçek yüzünü asla tam olarak göremez. 😈💰"
    },
    {
      animal: "FrankCostello",
      emoji: "🤵",
      title: "Sen Frank Costello'sun!",
      description: "Sessiz, stratejik ve akıllı bir para yöneticisisin! Gösterişten kaçınır, bağlantılarını ve yatırımlarını akıllıca kullanırsın. Paranı asla boşa harcamazsın, her harcamanın bir amacı vardır. İtibarın ve güvenilirliğin seni başarıya taşır. 🤵💰"
    },
    {
      animal: "TheodoreKaczynski",
      emoji: "🌲",
      title: "Sen Theodore Kaczynski'sin!",
      description: "Minimalist, gizemli ve özgür ruhlu birisin! Modern dünyanın gösterişinden nefret eder, sade ve doğal hayatı tercih edersin. Paranı göz önünde olmadan, ihtiyacın kadar harcarsın. Kimsenin seni bulamayacağı, hesap vermek zorunda olmadığın bir hayat senin için en büyük lükstür. 🌲💰"
    }
  ]
};
