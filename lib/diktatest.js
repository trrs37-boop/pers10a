export default {
  id: "diktatest",
  title: "Sevdiğin Filmlere Göre Hangi Ünlü Diktatörsün?",
  category: "Eğlence",
  description: "Film zevklerin seni hangi tarihi diktatöre benzetecek? Korkma, sadece eğlence!",
  image: "🎬",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Hangi film türü seni en çok cezbeder?",
      answers: [
        { text: "Savaş ve askeri filmler - strateji ve güç", points: { Stalin: 2, Pinochet: 3 } },
        { text: "Epik tarih filmleri - büyük imparatorluklar", points: { Hitler: 3, Mussolini: 1 } },
        { text: "Politik gerilimler - entrika ve komplo", points: { Franco: 2, Stalin: 3 } },
        { text: "Aksiyon ve macera - karizmatik kahramanlar", points: { Mussolini: 3, Hitler: 1 } }
      ]
    },
    {
      id: 2,
      text: "Bir filmde en çok hangi karakter tipi ilgini çeker?",
      answers: [
        { text: "Soğukkanlı stratejist - her şeyi planlayan", points: { Pinochet: 3, Stalin: 2 } },
        { text: "Karizmatik lider - kalabalıkları peşinden sürükleyen", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Sanatçı ruhlu ama karanlık - idealist ve tutkulu", points: { Hitler: 3, Franco: 1 } },
        { text: "Sessiz otorite - az konuşup çok iş yapan", points: { Franco: 3, Pinochet: 2 } }
      ]
    },
    {
      id: 3,
      text: "Film izlerken kötü adam ne yapınca saygı duyarsın?",
      answers: [
        { text: "Herkesi kendi sistemine boyun eğdirince", points: { Stalin: 3, Pinochet: 1 } },
        { text: "Gösterişli bir planla sahneyi ele geçirince", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Sabırla yıllarca sessizce güç biriktirince", points: { Franco: 3, Pinochet: 2 } },
        { text: "Acımasızca ama düzenli şekilde temizlik yapınca", points: { Pinochet: 3, Stalin: 2 } }
      ]
    },
    {
      id: 4,
      text: "Bir filmin sahnelerinde seni en çok ne etkiler?",
      answers: [
        { text: "Görkemli mimari ve görsel estetik", points: { Hitler: 3, Mussolini: 2 } },
        { text: "Karanlık ve gerilimli atmosfer", points: { Stalin: 3, Franco: 1 } },
        { text: "Kalabalık mitinglerin ve konuşmaların gücü", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Soğuk ve hesaplı diyaloglar", points: { Pinochet: 3, Franco: 2 } }
      ]
    },
    {
      id: 5,
      text: "Bir filmde başkarakter ihanete uğrayınca ne düşünürsün?",
      answers: [
        { text: "Hainlerin hepsini listele, tek tek hesap sor", points: { Stalin: 3, Pinochet: 2 } },
        { text: "Gösterişli bir intikam sahnesi şart", points: { Mussolini: 3, Hitler: 1 } },
        { text: "Soğukkanlı kal, doğru zamanı bekle", points: { Franco: 3, Pinochet: 2 } },
        { text: "Sistemi baştan kur, kimseye güvenme", points: { Pinochet: 3, Stalin: 1 } }
      ]
    },
    {
      id: 6,
      text: "Hangi dönemin filmleri seni daha çok çeker?",
      answers: [
        { text: "Soğuk Savaş dönemi - casusluk ve paranoya", points: { Stalin: 3, Pinochet: 2 } },
        { text: "İkinci Dünya Savaşı - destansı çatışmalar", points: { Hitler: 3, Mussolini: 2 } },
        { text: "Latin Amerika devrimleri - darbe ve direniş", points: { Pinochet: 3, Franco: 1 } },
        { text: "İç savaş dönemleri - ideoloji çatışması", points: { Franco: 3, Stalin: 1 } }
      ]
    },
    {
      id: 7,
      text: "Film sonunda nasıl bir kapanış tercih edersin?",
      answers: [
        { text: "Kahraman tek başına zirveye ulaşsın, rakip kalmasın", points: { Stalin: 3, Hitler: 1 } },
        { text: "Büyük bir zafer geçidi ve alkış sahnesi", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Sessiz bir son - kahraman koltuğunda, kontrol onda", points: { Franco: 3, Pinochet: 2 } },
        { text: "Düzen sağlanmış, muhalifler susturulmuş", points: { Pinochet: 3, Franco: 1 } }
      ]
    },
    {
      id: 8,
      text: "Arkadaşlarınla film seçerken senin rolün ne?",
      answers: [
        { text: "Ben seçerim, tartışma yok", points: { Stalin: 3, Pinochet: 1 } },
        { text: "Herkesi ikna ederim, oylamaya bile gerek kalmaz", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Sessizce bir şey önerir, herkesin kabul etmesini beklerim", points: { Franco: 3, Pinochet: 1 } },
        { text: "Estetik ve kaliteli olanı seçip gerekçesiyle sunarım", points: { Hitler: 3, Franco: 1 } }
      ]
    },
    {
      id: 9,
      text: "Bir belgeselde seni en çok ne ilgilendirir?",
      answers: [
        { text: "İktidar mücadeleleri ve tasfiyeler", points: { Stalin: 3, Pinochet: 2 } },
        { text: "Propaganda, sanat ve kitle psikolojisi", points: { Hitler: 3, Mussolini: 2 } },
        { text: "Askeri darbeler ve rejim değişiklikleri", points: { Pinochet: 3, Franco: 2 } },
        { text: "Uzun süre iktidarda kalma stratejileri", points: { Franco: 3, Stalin: 1 } }
      ]
    },
    {
      id: 10,
      text: "Kötü bir film izledikten sonra tepkin ne olur?",
      answers: [
        { text: "Yönetmeni ve yapımcıyı araştırır, kara listeme alırım", points: { Stalin: 3, Pinochet: 1 } },
        { text: "Neden kötü olduğunu analiz edip herkes anlayana kadar anlatırım", points: { Hitler: 3, Franco: 1 } },
        { text: "Kısa keserim: Berbattı der geçerim, vakit kaybetmem", points: { Pinochet: 3, Mussolini: 1 } },
        { text: "Dalga geçerim, komik anlarını bulur eğlenirim", points: { Mussolini: 3, Franco: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Stalin",
      emoji: "☭",
      title: "Sen bir Stalin'sin!",
      description: "Paranoyak, kontrol düşkünü ve amansız bir film izleyicisisin! Listeler yaparsın, beğenmediğini bir daha izlemezsin, herkesten şüphelenirsin. Film seçiminde de hayatta da kimseye güvenmez, her şeyi kendi kontrol edersin. Ama itiraf et, iyi bir gerilim filmi izlerken gizlice gülümsüyorsun. ☭🎬"
    },
    {
      animal: "Hitler",
      emoji: "🎭",
      title: "Sen bir Hitler'sin!",
      description: "Estetik takıntılı, dramatik ve vizyoner bir sinemaseversin! Filmlerde görsel mükemmellik, epik sahneler ve duygusal yoğunluk ararsın. Bir filmin renk paleti bile seni rahatsız edebilir. Sanatı ciddiye alırsın - belki biraz fazla. Yönetmenlik yapsaydın, her kareyi 47 kere çekerdin. 🎭🎬"
    },
    {
      animal: "Mussolini",
      emoji: "🎪",
      title: "Sen bir Mussolini'sin!",
      description: "Karizmatik, gösterişçi ve sahne seven bir film tutkunusun! Filmlerde büyük jest ve aksiyonu seversin. İzlerken de anlatırken de performans sergilersin. Bir sahneyi beğendiğinde alkış tutabilirsin. Film izlemek senin için sosyal bir gösteri - ve sen her zaman başroldesin! 🎪🎬"
    },
    {
      animal: "Pinochet",
      emoji: "🦅",
      title: "Sen bir Pinochet'sin!",
      description: "Soğukkanlı, hesapçı ve acımasız bir film eleştirmenisin! Duygusallığa yer yok, mantık ve düzen her şeyin önünde. Bir filmi beğenmezsen silip geçersin, beğenirsen sessizce not alırsın. Film listelerin askeri düzen gibidir. Kimse senin izleme sıranı bozamaz! 🦅🎬"
    },
    {
      animal: "Franco",
      emoji: "⛪",
      title: "Sen bir Franco'sun!",
      description: "Sabırlı, gelenekçi ve dayanıklı bir sinema hastasısın! Trendlere kapılmazsın, klasiklere bağlısın. Herkes yeni filmlerin peşindeyken sen 40 yıllık bir başyapıtı tekrar izlersin. Sessiz ama kararlı tercihlerin var. Film zevkin değişmez - tıpkı senin gibi. ⛪🎬"
    }
  ]
};
