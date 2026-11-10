export default {
  id: "fonkrizi",
  title: "Hangi Fon Krizi Karakterisin?",
  category: "Siyaset",
  description: "Piyasalar sallanırken, dolar fırlarken sen hangi karaktere bürünüyorsun? 10 soruda kriz refleksini keşfet.",
  image: "💸",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Piyasalarda büyük bir çöküş haberi aldığında ilk 10 dakikada ne yaparsın?",
      answers: [
        { text: "\"Sakin olun, panik yapmayın\" der, çevremdekileri teselli ederim", points: { FatmaBetul: 3 } },
        { text: "Hemen grafikleri açar, rakamlara bakar, durumu analiz ederim", points: { Cevdet: 3 } },
        { text: "\"Ben demiştim, bu balon patlayacaktı\" diye sosyal medyada paylaşırım", points: { Emre: 3 } },
        { text: "\"Bu geçici bir dalgalanma, altı ay sonra konuşuruz\" der, gündemi değiştiririm", points: { Sahap: 3 } },
        { text: "\"Fırsat bu fırsat\" deyip alım yapar, herkese anlatırım", points: { Savci: 3 } }
      ]
    },
    {
      id: 2,
      text: "Bir arkadaş grubunda herkes kayıptan şikayet ediyor. Sen ne yaparsın?",
      answers: [
        { text: "\"Bakın, bu rakamlar aslında iyiye gidiyor\" der, tabloyu çeviririm", points: { Sahap: 3 } },
        { text: "\"Hepimiz aynı gemideyiz, birlikte atlatacağız\" der, moral veririm", points: { FatmaBetul: 3 } },
        { text: "Sessizce dinler, sonra \"aslında enflasyonun ana kalemi şu\" diye teknik açıklama yaparım", points: { Cevdet: 3 } },
        { text: "\"Boşverin, hayat kısa, bugünü yaşayın\" der, ortamı şenlendiririm", points: { Savci: 3 } },
        { text: "\"Sizin anlamadığınız şey şu...\" diye uzun bir eleştiri yazısı yazarım", points: { Emre: 3 } }
      ]
    },
    {
      id: 3,
      text: "Uzun vadeli bir yatırım planı yaparken seni en çok ne motive eder?",
      answers: [
        { text: "Rakamlarla ölçülebilir, planlı bir yol haritası", points: { Cevdet: 3 } },
        { text: "Herkesin hayran olacağı bir başarı hikayesi", points: { Savci: 3 } },
        { text: "Çocuklarımın geleceği, ailemin güvenliği", points: { FatmaBetul: 3 } },
        { text: "Kendi doğrumu savunmak, kimseye boyun eğmemek", points: { Sahap: 3 } },
        { text: "Sistemin açıklarını bulup onları ifşa etmek", points: { Emre: 3 } }
      ]
    },
    {
      id: 4,
      text: "Bir toplantıda senin fikrine karşı çıkıldığında nasıl tepki verirsin?",
      answers: [
        { text: "Konuyu espriye bağlar, ortamı yumuşatırım", points: { Savci: 3 } },
        { text: "Fikrimi savunur, geri adım atmam, sonuna kadar diretirim", points: { Sahap: 3 } },
        { text: "\"Anlıyorum, haklı olabilirsiniz\" der, ortak nokta ararım", points: { FatmaBetul: 3 } },
        { text: "\"Siz anlamıyorsunuz\" der, sert bir karşılık veririm", points: { Emre: 3 } },
        { text: "Verilerle cevap verir, rakamlarla ikna etmeye çalışırım", points: { Cevdet: 3 } }
      ]
    },
    {
      id: 5,
      text: "Aniden işinle ilgili kötü bir haber aldığında (zam yok, kriz var, proje iptal) ilk tepkin ne olur?",
      answers: [
        { text: "\"Bu geçici, birkaç ay içinde düzelir\" der, gündemi değiştiririm", points: { Sahap: 3 } },
        { text: "Oturur, bir yol haritası çıkarır, B planını hazırlarım", points: { Cevdet: 3 } },
        { text: "\"Hayırlısı olsun\" der, kendime yeni bir hedef koyar, moral bozmam", points: { Savci: 3 } },
        { text: "\"İşte bu sistemin çürümüşlüğü\" der, uzun bir yazı yazarım", points: { Emre: 3 } },
        { text: "\"Hep birlikte çözeriz\" der, ekibi toplarım", points: { FatmaBetul: 3 } }
      ]
    },
    {
      id: 6,
      text: "Sosyal medyada ekonomiyle ilgili bir paylaşım yaparken tarzın nasıldır?",
      answers: [
        { text: "Grafik, tablo, veri paylaşırım, yorum yapmam", points: { Cevdet: 3 } },
        { text: "Esprili, renkli, dikkat çekici, bol emoji", points: { Savci: 3 } },
        { text: "Sert eleştiri, \"ben demiştim\" tonu, cesur", points: { Emre: 3 } },
        { text: "Aile, birlik, beraberlik temalı, duygusal ve kapsayıcı", points: { FatmaBetul: 3 } },
        { text: "\"Her şey kontrol altında\" mesajı, sakinleştirici", points: { Sahap: 3 } }
      ]
    },
    {
      id: 7,
      text: "Bir kriz anında insanlar senin yanına gelip ne ister?",
      answers: [
        { text: "Güvence, \"her şey yolunda\" mesajı", points: { Sahap: 3 } },
        { text: "Eğlence, moral, kahkaha", points: { Savci: 3 } },
        { text: "Teselli ve moral", points: { FatmaBetul: 3 } },
        { text: "Somut bir çözüm ve plan", points: { Cevdet: 3 } },
        { text: "Gerçeği duymak, sert bir analiz", points: { Emre: 3 } }
      ]
    },
    {
      id: 8,
      text: "Kendini en çok hangi durumda rahatsız hissedersin?",
      answers: [
        { text: "Fikrimden vazgeçmeye zorlanmak", points: { Sahap: 3 } },
        { text: "İnsanların birbirine düştüğünü görmek", points: { FatmaBetul: 3 } },
        { text: "Haksızlık karşısında susmak", points: { Emre: 3 } },
        { text: "Ortamın sessizliği, ilgi görmemek", points: { Savci: 3 } },
        { text: "Belirsizlik, plansızlık, kaos", points: { Cevdet: 3 } }
      ]
    },
    {
      id: 9,
      text: "Bir yatırım aracı seçerken hangisi seni daha çok cezbeder?",
      answers: [
        { text: "Kimsenin görmediği, sistemin açığını bulduğum fırsat", points: { Emre: 3 } },
        { text: "Uzun vadeli, hesaplanmış, düşük riskli getiri", points: { Cevdet: 3 } },
        { text: "Herkesin konuşacağı, parlak ve popüler bir yatırım", points: { Savci: 3 } },
        { text: "Güvenli liman, ailem için birikim", points: { FatmaBetul: 3 } },
        { text: "Kendi bildiğim, kimsenin karışmadığı bir alan", points: { Sahap: 3 } }
      ]
    },
    {
      id: 10,
      text: "Bir krizin sonunda seni en çok ne mutlu eder?",
      answers: [
        { text: "\"Ben demiştim\" demek, haklı çıkmak", points: { Emre: 3 } },
        { text: "Herkesin seni konuşması, takdir edilmesi", points: { Savci: 3 } },
        { text: "Kimseye boyun eğmeden, dik durabilmek", points: { Sahap: 3 } },
        { text: "İnsanların bir arada kalması, kimsenin yalnız kalmaması", points: { FatmaBetul: 3 } },
        { text: "Planın tutması, rakamların doğru çıkması", points: { Cevdet: 3 } }
      ]
    }
  ],
  results: [
    {
      animal: "FatmaBetul",
      emoji: "🕊️",
      title: "Fatma Betül Sayan Kaya",
      description: "Kriz anlarında sakinleştirici gücünle öne çıkıyorsun. İnsanlar paniklerken sen \"hep birlikte atlatacağız\" diyen ses oluyorsun. Duygusal zekân yüksek, koruyucu ve kapsayıcısın. Ama bazen kendi kaygını arka plana atıp herkesi teselli etmeye çalışırken kendini ihmal edebilirsin. Sana iyi gelen şey: biraz da kendine alan açmak. 🕊️"
    },
    {
      animal: "Cevdet",
      emoji: "📊",
      title: "Cevdet Yılmaz",
      description: "Sen bir kriz anında duygularını bir kenara bırakıp rakamlara sarılan tipsin. Planlı, analitik ve soğukkanlısın. \"Orta vadeli program\" senin ruhunun yansıması. Belirsizlik seni rahatsız eder, kontrol edemediğin şeyler karşısında huzursuz olursun. Ama bazen fazla hesaplı olmak spontanlığını öldürebilir. Sana iyi gelen şey: bazen planı bozup akışa bırakmak. 📊"
    },
    {
      animal: "Emre",
      emoji: "🔥",
      title: "Emre Tezmen",
      description: "Sistemin açıklarını görüp dile getiren, \"ben demiştim\" demeyi seven eleştirel bir zihinsin. Kriz anlarında dış ses olmayı, gerçeği haykırmayı seversin. Asi, sorgulayıcı ve cesursun. Ama bu keskin dil bazen seni yalnızlaştırabilir, insanlar seni \"hep olumsuz\" olarak etiketleyebilir. Sana iyi gelen şey: eleştirinin yanına biraz da çözüm koymak. 🔥"
    },
    {
      animal: "Sahap",
      emoji: "🗿",
      title: "Şahap Kavcıoğlu",
      description: "Kendi doğruna sonuna kadar inanan, baskı altında daha da dikleşen bir tipsin. \"Bu geçici\" diyerek gündemi değiştirme, meydan okuma ve inatçılık senin imzan. Fikrinden vazgeçmeye zorlanmak seni en çok rahatsız eden şey. Ama bazen bu dik başlılık seni yeni bilgilere kapatabilir. Sana iyi gelen şey: \"acaba yanılıyor muyum?\" diyebilmek. 🗿"
    },
    {
      animal: "Savci",
      emoji: "🎤",
      title: "Savcı Sayan",
      description: "Kriz anlarında bile ortamı şenlendiren, \"her şey yolunda\" diyen pozitif enerji topusun. Dışa dönük, gösterişçi ve iyimsersin. İnsanlar senin yanında moral bulur. Ama bazen gerçekleri görmezden gelmek, \"polyannacılık\" olarak algılanabilir. Sana iyi gelen şey: iyimserliğini korurken gerçeği de görmek. 🎤"
    }
  ]
};
