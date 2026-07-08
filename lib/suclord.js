export default {
  id: "suclord",
  title: "Para Harcama Tarzına Göre Hangi Suç Lordusun?",
  category: "Eğlence",
  description: "Cüzdanını kullanma şeklin seni hangi efsanevi suç lorduna benzetiyor? Merak etme, sadece eğlence!",
  image: "💰",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Maaş yattı! İlk harcaman ne olur?",
      answers: [
        { text: "Herkese bir şey alırım, cömertlik benim işim", points: { Escobar: 3, Capone: 2 } },
        { text: "Pahalı bir restoranda kendime ödül veririm", points: { Capone: 3, Escobar: 1 } },
        { text: "Kimse bilmez, sessizce biriktiririm", points: { ElChapo: 3, CemG: 1 } },
        { text: "Sevgilimle çılgınca bir gece geçiririm", points: { Bonnie: 3, Capone: 1 } }
      ]
    },
    {
      id: 2,
      text: "Arkadaşın senden borç istedi. Tepkin?",
      answers: [
        { text: "Hemen veririm, geri istemem bile", points: { Escobar: 3, Bonnie: 1 } },
        { text: "Veririm ama iyiliğimi unutmamasını beklerim", points: { Capone: 3, ElChapo: 1 } },
        { text: "Duruma göre, güvendiğime veririm", points: { ElChapo: 3, CemG: 2 } },
        { text: "Param yok derim, olsa bile", points: { CemG: 3, ElChapo: 1 } }
      ]
    },
    {
      id: 3,
      text: "Bir hediye alacaksın. Tarzın ne?",
      answers: [
        { text: "Abartılı ve gösterişli, herkes görsün", points: { Escobar: 3, Capone: 2 } },
        { text: "Kaliteli ve pahalı, marka önemli", points: { Capone: 3, ElChapo: 1 } },
        { text: "Pratik ve işe yarar bir şey", points: { ElChapo: 3, CemG: 1 } },
        { text: "Sevgilime alırım, başkası umurumda değil", points: { Bonnie: 3, Escobar: 1 } }
      ]
    },
    {
      id: 4,
      text: "Büyük para kazandın! Ne yaparsın?",
      answers: [
        { text: "Mahalleye dağıtırım, futbol sahası yaptırırım", points: { Escobar: 3, Capone: 1 } },
        { text: "Lüks bir araba ve takım elbise alırım", points: { Capone: 3, ElChapo: 1 } },
        { text: "Kimseye söylemem, gizli yerlerde saklarım", points: { ElChapo: 3, CemG: 2 } },
        { text: "Sevgilimle kaçar uzaklara giderim", points: { Bonnie: 3, Escobar: 1 } }
      ]
    },
    {
      id: 5,
      text: "Alışverişte pazarlık yapar mısın?",
      answers: [
        { text: "Asla, fiyat ne ise öderim gösteriş önemli", points: { Escobar: 3, Capone: 2 } },
        { text: "Ederim ama nezaketle, karşılıklı saygı", points: { Capone: 3, Escobar: 1 } },
        { text: "Kesinlikle, her kuruşun hesabını bilirim", points: { ElChapo: 3, CemG: 2 } },
        { text: "Pazarlık yerine başka yere giderim", points: { CemG: 3, Bonnie: 1 } }
      ]
    },
    {
      id: 6,
      text: "Lüks ve zenginlik sana ne ifade eder?",
      answers: [
        { text: "Güç ve saygınlık, herkes seni tanısın", points: { Escobar: 3, Capone: 2 } },
        { text: "İncelik ve stil, sınıf meselesi", points: { Capone: 3, ElChapo: 1 } },
        { text: "Gereksiz, para araçtır gösteriş değil", points: { ElChapo: 3, CemG: 1 } },
        { text: "Sevdiğinle paylaşınca anlamlı", points: { Bonnie: 3, Escobar: 1 } }
      ]
    },
    {
      id: 7,
      text: "Biri sana pahalı bir hediye aldı. Ne düşünürsün?",
      answers: [
        { text: "Güzel ama ben daha pahalısını alırım karşılığında", points: { Escobar: 3, Capone: 1 } },
        { text: "Şüphelenirim, karşılığında ne istiyor acaba", points: { ElChapo: 3, CemG: 2 } },
        { text: "Memnun olurum, nezaketine hayran kalırım", points: { Capone: 3, Bonnie: 1 } },
        { text: "Tedirgin olurum, borçlu hissetmekten hoşlanmam", points: { CemG: 3, ElChapo: 1 } }
      ]
    },
    {
      id: 8,
      text: "Tatil planın nasıl?",
      answers: [
        { text: "Özel ada, yat, helikopter - büyük düşün", points: { Escobar: 3, Capone: 1 } },
        { text: "5 yıldızlı otel, güzel restoranlar, şık mekanlar", points: { Capone: 3, Escobar: 1 } },
        { text: "Kimsenin bulmayacağı sessiz ve gizli bir yer", points: { ElChapo: 3, CemG: 2 } },
        { text: "Sevgilimle yolda, nereye giderse gitsin", points: { Bonnie: 3, CemG: 1 } }
      ]
    },
    {
      id: 9,
      text: "Ekonomik kriz olsa ilk ne yaparsın?",
      answers: [
        { text: "Fark etmez, benim param bitmez", points: { Escobar: 3, ElChapo: 1 } },
        { text: "Bağlantılarımı kullanır fırsata çeviririm", points: { Capone: 3, ElChapo: 2 } },
        { text: "Çoktan hazırlığımı yapmıştım zaten", points: { ElChapo: 3, CemG: 1 } },
        { text: "Sevdiklerimi alır sessizce kayboluruz", points: { Bonnie: 3, CemG: 2 } }
      ]
    },
    {
      id: 10,
      text: "Hayattaki en büyük lüksün ne?",
      answers: [
        { text: "İstediğim her şeyi anında alabilmek", points: { Escobar: 3, Capone: 2 } },
        { text: "Saygı görmek, bir odaya girince herkesin kalkması", points: { Capone: 3, Escobar: 1 } },
        { text: "Özgürlük, kimseye hesap vermemek", points: { ElChapo: 3, Bonnie: 2 } },
        { text: "Görünmez olmak, rahat bırakılmak", points: { CemG: 3, ElChapo: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Escobar",
      emoji: "👑",
      title: "Sen Pablo Escobar'sın!",
      description: "Paranın kralısın ama cömertliğin de efsane! Bir elinle saçar, diğer elinle kazanırsın. Mahallenin sevgilisi, düşmanın kabusu. Para senin için güç değil, sevgi satın almanın aracı. Herkese yardım edersin ama karşılığında sadakat beklersin. 👑💰"
    },
    {
      animal: "Capone",
      emoji: "🎩",
      title: "Sen Al Capone'sun!",
      description: "Stil sahibi, karizmatik ve hesaplı bir harcamacısın! Paranı gösterişli ama zevkli şekilde kullanırsın. Takım elbisen, puroların ve lüks restoranların eksik olmaz. Dışarıda centilmen, içeride acımasız. Para sana sınıf ve saygınlık kazandırır. 🎩💰"
    },
    {
      animal: "ElChapo",
      emoji: "🏔️",
      title: "Sen El Chapo'sun!",
      description: "Sessiz, hesaplı ve stratejik bir para yöneticisisin! Gösterişten nefret edersin, her kuruş bir yere gider. Kimse senin ne kadar paran olduğunu bilmez ve sen de öyle istersin. Tüneller kazar gibi planların hep gizli ve derin. Paranın gerçek gücünü bilen tek kişi sensin. 🏔️💰"
    },
    {
      animal: "CemG",
      emoji: "🕶️",
      title: "Sen Cem Garipoğlu'sun!",
      description: "Paranı gizler, kendini gizler, her şeyi gizlersin! Dikkat çekmekten hoşlanmazsın, radarın altında kalmak senin hayat felsefeni. Harcaman azdır ama biriktirmen de değil, sadece görünmez olmak istersin. Sosyal ortamlardan kaçar, kendi dünyanda yaşarsın. 🕶️💰"
    },
    {
      animal: "Bonnie",
      emoji: "💕",
      title: "Sen Bonnie & Clyde'sın!",
      description: "Para senin için araç, aşk ise amaç! Sevdiğin insanla dünyanın sonuna kadar gidersin. Paranız olsun olmasın fark etmez, yeter ki beraber olun. Romantik, maceracı ve biraz da pervasızsın. Banka soysan bile sevgiline çiçek almayı unutmazsın. 💕💰"
    }
  ]
};
