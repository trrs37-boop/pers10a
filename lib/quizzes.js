export const allQuizzes = [
  {
    id: 'food-animal',
    title: 'Sevdiğin Yemeklere Göre Hangi Hayvan Çıkacaksın?',
    category: 'Kişilik',
    description: 'Yemek seçimlerin seni hangi hayvana benzetecek?',
    image: '🍔',
    attempts: 0,
    questions: [
      {
        id: 1,
        text: "Akşam yemeğine ne yemek istersin?",
        answers: [
          { text: "Sushi - balık ve çiğ yiyecekler", points: { Kartal: 2, Köpek: 1 } },
          { text: "Pizza - pratik ve lezzetli", points: { Köpek: 3, Kelebek: 1 } },
          { text: "Salata - sağlıklı seçim", points: { Panda: 3, Kelebek: 1 } },
          { text: "Et kızartması - ağır ve doyurucu", points: { Kartal: 3, Köpek: 1 } }
        ]
      },
      {
        id: 2,
        text: "Kahvaltıda hangisini tercih edersin?",
        answers: [
          { text: "Sadece kahve ve ekmek", points: { Kedi: 3, Kelebek: 1 } },
          { text: "Tam bir İngiliz kahvaltısı", points: { Panda: 2, Köpek: 2 } },
          { text: "Pancake ve reçel", points: { Köpek: 3, Kelebek: 1 } },
          { text: "Protein ağırlıklı - yumurta, et", points: { Kartal: 3, Köpek: 1 } }
        ]
      },
      {
        id: 3,
        text: "Hangisi senin ideal atıştırmalık?",
        answers: [
          { text: "Çikolata - rafine ve lezzetli", points: { Kedi: 3, Kelebek: 1 } },
          { text: "Cips ve popcorn - sosyal atıştırmalık", points: { Köpek: 3, Kelebek: 1 } },
          { text: "Meyve - doğal ve sağlıklı", points: { Panda: 3, Kelebek: 2 } },
          { text: "Fındık ve enerji barı", points: { Kartal: 3, Panda: 1 } }
        ]
      },
      {
        id: 4,
        text: "Restoranda yeni bir yemeğe cesaret eder misin?",
        answers: [
          { text: "Her zaman, heyecan verici! ⚡", points: { Kartal: 3, Köpek: 2 } },
          { text: "Evet ama güvenli seçeneklerle", points: { Köpek: 3, Panda: 1 } },
          { text: "Sadece tanıdıklarımı yem", points: { Kedi: 3, Kelebek: 1 } },
          { text: "Tercihim var ama açık fikirli", points: { Panda: 2, Kelebek: 2 } }
        ]
      },
      {
        id: 5,
        text: "Yemekten sonraki ideal saatler?",
        answers: [
          { text: "Hemen sosyalleş ve eğlen", points: { Köpek: 3, Kelebek: 1 } },
          { text: "Sakin bir ortamda konuş", points: { Panda: 3, Kelebek: 1 } },
          { text: "Kendi başına rahatlama zamanı", points: { Kedi: 3, Kelebek: 1 } },
          { text: "Sonraki işime hazırlan", points: { Kartal: 3, Köpek: 1 } }
        ]
      },
      {
        id: 6,
        text: "Acı yemekler hakkında ne düşünürsün?",
        answers: [
          { text: "Aşırı seviyorum, çok acı isteyelim", points: { Kartal: 3, Köpek: 1 } },
          { text: "Orta seviyede hoş", points: { Köpek: 3, Panda: 1 } },
          { text: "Az bir dokunuş yeterli", points: { Kedi: 3, Kelebek: 1 } },
          { text: "Hiç tercih etmem, ılık ve yumuşak", points: { Panda: 3, Kelebek: 1 } }
        ]
      },
      {
        id: 7,
        text: "Diyete başladığında ilk günü nasıl geçirir?",
        answers: [
          { text: "Katı disiplinle başlarım", points: { Kartal: 3, Kedi: 1 } },
          { text: "Sabrıyla devam ederim", points: { Panda: 3, Kedi: 1 } },
          { text: "Sosyal baskıya dayanamam", points: { Köpek: 3, Kelebek: 1 } },
          { text: "Esnek olarak uyarlarım", points: { Kelebek: 3, Panda: 1 } }
        ]
      },
      {
        id: 8,
        text: "Aile yemeğinde senin rolün?",
        answers: [
          { text: "Merkezdeyim, herkese danışılıyor", points: { Kartal: 3, Köpek: 1 } },
          { text: "Herkesin yararını düşünür seçer yaparım", points: { Panda: 3, Kelebek: 1 } },
          { text: "Sessizce otururum, sadece dinlerim", points: { Kedi: 3, Kelebek: 1 } },
          { text: "Herkese hitap eden fikir sunurum", points: { Köpek: 3, Panda: 1 } }
        ]
      },
      {
        id: 9,
        text: "Yemeği nasıl hazırlamayı seversin?",
        answers: [
          { text: "Hızlı ve verimli bir şekilde", points: { Kartal: 3, Köpek: 1 } },
          { text: "Adım adım, titizce", points: { Panda: 3, Kedi: 1 } },
          { text: "Yaratıcı ve farklı yollarla", points: { Kelebek: 3, Köpek: 1 } },
          { text: "En az çabamla lezzetli çıksın", points: { Kedi: 3, Kelebek: 1 } }
        ]
      },
      {
        id: 10,
        text: "Bütçe kısıtlı olduğunda ne yaparsın?",
        answers: [
          { text: "Yine de kaliteden taviz vermem", points: { Kedi: 3, Kartal: 1 } },
          { text: "Dengeli çözüm bulurum", points: { Panda: 3, Kelebek: 1 } },
          { text: "Yaratıcı kombinasyonlar denerim", points: { Kelebek: 3, Köpek: 1 } },
          { text: "Herkesin bulacağı bir yol bulurum", points: { Köpek: 3, Panda: 1 } }
        ]
      }
    ],
    results: [
      {
        animal: "Panda",
        emoji: "🐼",
        title: "Sen bir PANDASIN!",
        description: "Dengeli, sakin ve biraz alaycı bir yapın var. Yemeği sakin bir ortamda, huzurlu anlar içinde yaşamayı seversin. ✨"
      },
      {
        animal: "Köpek",
        emoji: "🐕",
        title: "Sen bir KÖPEKSİN!",
        description: "Sosyal, canlı ve vefalı bir yapın var. Yemekleri insanlarla paylaşmaktan keyif alırsın. 😊"
      },
      {
        animal: "Kedi",
        emoji: "🐱",
        title: "Sen bir KEDİSİN!",
        description: "Seçici, bağımsız ve biraz gizli bir yapın var. Yemek söz konusu olunca kaliteden taviz vermezsin. 😼"
      },
      {
        animal: "Kartal",
        emoji: "🦅",
        title: "Sen bir KARTALsIN!",
        description: "Cesur, kararlı ve hedef-odaklı bir yapın var. Başarıya giden yolda net adımlar atarsın. 💪"
      },
      {
        animal: "Kelebek",
        emoji: "🦋",
        title: "Sen bir KELEBEKSİN!",
        description: "Hafif, girift ve çok taraflı bir yapın var. Yaşamın her alanında esnekliği seversin. ✨"
      }
    ]
  }
];

export const getQuizById = (id) => {
  return allQuizzes.find(quiz => quiz.id === id);
};

export const quizData = {
  id: "futbol-takimi",
  title: "Gündelik Tercihlerine Göre Hangi Anadolu Takımını Tutmalısın?",
  description: "Hayat tarzın seni hangi takıma yönlendirecek? Öğren!",
  category: "Eğlence",
  image: "⚽",
  questions: [
    {
      id: 1,
      text: "Hafta sonu seni nerede bulurlar?",
      answers: [
        { text: "Kahvehaneye çay içmeye", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Kültür merkezinde sanat sergisinde", points: { Bursaspor: 3, Eskişehirspor: 1 } },
        { text: "Barlardan, klublardan birine", points: { Eskişehirspor: 3, Rizespor: 1 } },
        { text: "Evde kitap/film ile", points: { Sivasspor: 3, Bursaspor: 1 } }
      ]
    },
    {
      id: 2,
      text: "Arkadaşın seni ne ile tanımlardı?",
      answers: [
        { text: "Hızlı hareketli, asabi ve canlı biri", points: { Rizespor: 3, Eskişehirspor: 1 } },
        { text: "Sakin, düşünceli ve hesaplı biri", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Eğlenceli, sosyal ve sıcak biri", points: { Eskişehirspor: 3, Rizespor: 1 } },
        { text: "Kültürlü, okumuş ve entelektüel biri", points: { Bursaspor: 3, Sivasspor: 1 } }
      ]
    },
    {
      id: 3,
      text: "Kıyafet seçiminde ne önemli?",
      answers: [
        { text: "Rahatı ve pratikliği tercih ederim", points: { Sivasspor: 3, Çorumspor: 1 } },
        { text: "Moda ve stil en önemlisi", points: { Bursaspor: 3, Eskişehirspor: 1 } },
        { text: "Sosyal ortama göre uyumlu olması", points: { Eskişehirspor: 3, Bursaspor: 1 } },
        { text: "İslami ve geleneksel kurallar", points: { Çorumspor: 3, Sivasspor: 1 } }
      ]
    },
    {
      id: 4,
      text: "Dışarıda birine kızdığında?",
      answers: [
        { text: "Hemen patlarım, kim varsa söylerim", points: { Rizespor: 3, Çorumspor: 1 } },
        { text: "Sessiz kalıp içimde tutarım", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Sakin şekilde fikrimi söylerim", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Alayla cevap veririm, kahkaha atarız", points: { Eskişehirspor: 3, Rizespor: 1 } }
      ]
    },
    {
      id: 5,
      text: "Para kazandığında ne yaparsın?",
      answers: [
        { text: "Akıllıca harcayıp bir kısmını biriktirim", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Hayat kısa, tatmak gerekir diyerek harcam", points: { Eskişehirspor: 3, Rizespor: 1 } },
        { text: "Ailem ve gelecek için biriktiririm", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Sanat, kitap, deneyime yatırırım", points: { Bursaspor: 3, Eskişehirspor: 1 } }
      ]
    },
    {
      id: 6,
      text: "Tatil yapacaksan nereye gidersin?",
      answers: [
        { text: "Sıcak deniz, gece hayatı ve eğlence", points: { Eskişehirspor: 3, Rizespor: 1 } },
        { text: "Sakin, soğuk dağlar ve doğa", points: { Sivasspor: 3, Çorumspor: 1 } },
        { text: "Tarihi yerler ve kültür turları", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Aile ve yakın arkadaşlarla ev toplantısı", points: { Çorumspor: 3, Bursaspor: 1 } }
      ]
    },
    {
      id: 7,
      text: "Müzik zevkin nedir?",
      answers: [
        { text: "Halk müziği ve davul zurna", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Caz, klasik ve entelektüel müzikler", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Pop, elektronik ve dans müziği", points: { Eskişehirspor: 3, Bursaspor: 1 } },
        { text: "Arabesk ve duygusal türküler", points: { Rizespor: 3, Çorumspor: 1 } }
      ]
    },
    {
      id: 8,
      text: "Ailede ne kadar önemlidir?",
      answers: [
        { text: "Her karar onlar için, gelenekler kırılmaz", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Önemli ama kendi hayatımı da yaşamak isterim", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Seviyorum ama sık sık görüşmem gerekmiyor", points: { Bursaspor: 3, Eskişehirspor: 1 } },
        { text: "Çok ama bazen bağıcı hisseder", points: { Rizespor: 3, Çorumspor: 1 } }
      ]
    },
    {
      id: 9,
      text: "Karar alırken?",
      answers: [
        { text: "Duygularımla, hızlı ve spontan", points: { Rizespor: 3, Eskişehirspor: 1 } },
        { text: "Çok düşünüp, analiz ederek", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Aile ve toplum ne söylerse", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Eğlence ve sosyal etkiyi düşünerek", points: { Eskişehirspor: 3, Rizespor: 1 } }
      ]
    },
    {
      id: 10,
      text: "Hayattaki hedefin?",
      answers: [
        { text: "İstikrarlı, sakin, güvenli bir yaşam", points: { Sivasspor: 3, Çorumspor: 1 } },
        { text: "Bilgi, sanat ve ruh yükseltmek", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Eğlenmek, anılar yapmak, sosyal olmak", points: { Eskişehirspor: 3, Bursaspor: 1 } },
        { text: "Başarılı olmak, tepede durmak", points: { Rizespor: 3, Eskişehirspor: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Sivasspor",
      emoji: "❄️",
      title: "Sivas Taraftarısın!",
      description: "Soğuk seversen ve hesaplı yaşamayı önemli sayarsan, Sivasspor senin takımın! Duygudan ziyade akılla hareket eden, sakin ve ciddi bir yapın var. Yüksek rakımların soğuğu gibi sen de sadeliğin ve gerçekliğin peşindesin. Sivas bölgesinin kaynakları nasıl değerli ve nadir ise, senin gözüne de kaliteli ve az sayıdaki şeyler değerli görünür. ❄️⚽"
    },
    {
      animal: "Bursaspor",
      emoji: "📚",
      title: "Bursa Taraftarısın!",
      description: "Entelektüel, kültürlü ve sanatçı bir yapın var! Bursaspor'un eski ve değerli tarihi gibi, sen de gelişmiş şehirde yaşamaya yakışan, kitap okuyan, müze gezilen birisin. Felsefe, sanat ve kültür seni heyecanlandırır. Bursa'nın sofistike havası gibi, senin de ruh yüksekliğin ve derinliğin takdir edilir. 📚✨"
    },
    {
      animal: "Çorumspor",
      emoji: "🕌",
      title: "Çorum Taraftarısın!",
      description: "Gelenekçi, değerlere sadık ve aile-merkezli bir yapın var! Çorum'un tarihi ve muhafazakar ruhuna benzersin. Dinî ve milli değerleri yaşamında merkeze alırsın. Çorumspor'un sabit taraftarları gibi sen de bağlı, sadık ve ilkeleri olan birisin. Kültürü ve geçmişi yaşatan insanlar arasında bulunmayı tercih edersin. 🕌⚽"
    },
    {
      animal: "Rizespor",
      emoji: "🔥",
      title: "Rize Taraftarısın!",
      description: "Asabi, hızlı hareketli ve duygusal birisin! Rize'nin dağlı, yapısında dik insanları gibi senin de güçlü bir karakterin var. Ani kararlar alırsın, çabuk kızarsın ama çabuk da umarısın. Rize'nin çaylarında buharlaşan enerji gibi senin de içinde sürekli bir dinamizm var. Yaşamında heyecan ve hız eksik olmaz! 🔥⚽"
    },
    {
      animal: "Eskişehirspor",
      emoji: "🎉",
      title: "Eskişehir Taraftarısın!",
      description: "Sosyal, eğlenceli ve sıcak kalpli birisin! Eskişehir'in gece hayatı ve sosyal ortamları gibi, sen de insanlarla vakit geçirmekten, espri yapmaktan ve eğlenmekten keyif alırsın. Çevrende mutluluk ve gülüş yayarsın. Hayatı ciddiye alırken, onun tadını almayı da unutmazsın. Arkadaşların seni severek anırken görmek isterler! 🎉⚽"
    }
  ]
};
