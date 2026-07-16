export default {
  id: "diktatest",
  title: "Sevdiğin Filmlere Göre Hangi Ünlü Diktatörsün?",
  category: "Siyasi",
  description: "Film zevklerine göre hangi ünlü diktatöre benziyorsun?",
  image: "🎬",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Hangi film türü seni en çok cezbeder?",
      answers: [
        { text: "Savaş filmleri", points: { Stalin: 2, Saddam: 3 } },
        { text: "Epik tarihi filmler", points: { Hitler: 3, Mussolini: 1 } },
        { text: "Entrika ve komplolar içeren politik gerilim filmleri", points: { Franco: 2, Stalin: 3 } },
        { text: "Süper kahramanlara odaklanan macera filmleri", points: { Mussolini: 3, Hitler: 1 } }
      ]
    },
    {
      id: 2,
      text: "Bir filmde en çok hangi karakter tipi ilgini çeker?",
      answers: [
        { text: "Her şeyi planlayan soğukkanlı bir stratejist", points: { Saddam: 2, Stalin: 3 } },
        { text: "Kalabalıkları peşinden sürükleyen karizmatik bir yönetici", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Tutkulu ve derin bir sanatçı", points: { Hitler: 3, Franco: 1 } },
        { text: "Sessizce arka planda iş çeviren bir ajan", points: { Franco: 3, Saddam: 2 } }
      ]
    },
    {
      id: 3,
      text: "Filmde kötü adam ne yapınca ona saygı duyarsın?",
      answers: [
        { text: "Herkesi kendi sistemine boyun eğdirince", points: { Stalin: 3, Saddam: 1 } },
        { text: "Gösterişli bir planla ganimeti ele geçirince", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Sabırla yıllarca sessizce güç biriktirince", points: { Franco: 3, Saddam: 2 } },
        { text: "Acımasızca ama düzenli şekilde düşman temizliği yapınca", points: { Saddam: 3, Stalin: 2 } }
      ]
    },
    {
      id: 4,
      text: "Bir filmde seni en çok ne etkiler?",
      answers: [
        { text: "Görkemli mimari ve görsel estetik", points: { Hitler: 3, Mussolini: 2 } },
        { text: "Karanlık ve gerilimli atmosfer", points: { Stalin: 3, Franco: 1 } },
        { text: "Kalabalık mitingler ve coşkulu hitabet", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Soğukkanlı ve şok edici diyaloglar", points: { Saddam: 3, Franco: 2 } }
      ]
    },
    {
      id: 5,
      text: "Bir filmde başkarakter ihanete uğrayınca ne düşünürsün?",
      answers: [
        { text: "Hainlerin hepsini listele, tek tek hesap sor", points: { Stalin: 3, Saddam: 3 } },
        { text: "Gösterişli bir intikam sahnesi şart", points: { Mussolini: 3, Hitler: 1 } },
        { text: "Soğukkanlı kal, doğru zamanı bekle", points: { Franco: 3, Saddam: 2 } },
        { text: "Sistemi baştan kur, kimseye güvenme", points: { Saddam: 3, Stalin: 1 } }
      ]
    },
    {
      id: 6,
      text: "Hangi dönemin filmleri seni daha çok çeker?",
      answers: [
        { text: "Casusluk ve paranoya içeren soğuk savaş filmleri", points: { Stalin: 3, Saddam: 2 } },
        { text: "İkinci Dünya Savaşı filmleri", points: { Hitler: 3, Mussolini: 2 } },
        { text: "Darbe ve devrim içeren 20.yüzyıl filmleri", points: { Saddam: 3, Franco: 2 } },
        { text: "İdeolojik çatışmalar içeren politik gerilim filmleri", points: { Franco: 3, Stalin: 1 } }
      ]
    },
    {
      id: 7,
      text: "Film sonunda nasıl bir kapanış tercih edersin?",
      answers: [
        { text: "Kahraman tek başına zirveye ulaşsın, rakibi kalmasın", points: { Stalin: 3, Saddam: 2 } },
        { text: "Büyük bir zafer geçidi ve alkış sahnesi", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Diktatörün ülkesinin sessizliğe boğduğu bir son", points: { Franco: 3, Saddam: 2 } },
        { text: "Muhaliflerin susturulduğu bir düzen", points: { Saddam: 3, Franco: 1 } }
      ]
    },
    {
      id: 8,
      text: "Arkadaşlarınla film seçerken senin rolün hangisidir?",
      answers: [
        { text: "Ben seçerim, tartışma yok", points: { Stalin: 3, Saddam: 1 } },
        { text: "Herkesi ikna ederim, oylamaya bile gerek kalmaz", points: { Mussolini: 3, Hitler: 2 } },
        { text: "Sessizce bir şey önerir, herkesin kabul etmesini beklerim", points: { Franco: 3, Saddam: 1 } },
        { text: "Estetik ve kaliteli olanı seçip gerekçesini sunarım", points: { Hitler: 3, Franco: 1 } }
      ]
    },
    {
      id: 9,
      text: "Bir belgeselde seni en çok ne ilgilendirir?",
      answers: [
        { text: "İktidar mücadeleleri ve tasfiyeler", points: { Stalin: 3, Saddam: 2 } },
        { text: "Propaganda, sanat ve kitle psikolojisi", points: { Hitler: 3, Mussolini: 2 } },
        { text: "Askeri darbeler ve rejim değişiklikleri", points: { Saddam: 3, Franco: 2 } },
        { text: "Uzun süre iktidarda kalma stratejileri", points: { Franco: 3, Stalin: 1 } }
      ]
    },
    {
      id: 10,
      text: "Kötü bir film izledikten sonra tepkin ne olur?",
      answers: [
        { text: "Yönetmeni ve yapımcıyı araştırır, kara listeme alırım", points: { Stalin: 3, Saddam: 1 } },
        { text: "Neden kötü olduğunu analiz edip herkes anlayana kadar anlatırım", points: { Hitler: 3, Franco: 1 } },
        { text: "Berbattı der geçerim, vakit kaybetmem", points: { Saddam: 3, Mussolini: 1 } },
        { text: "Dalga geçerim, komik anlarını bulur eğlenirim", points: { Mussolini: 3, Franco: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Stalin",
      emoji: "☭",
      title: "Sen Stalin'sin!",
      description: "Paranoyak, kontrol düşkünü ve amansız bir film izleyicisisin! Listeler yaparsın, beğenmediğini bir daha izlemezsin, herkesten şüphelenirsin. Film seçiminde de hayatta da kimseye güvenmez, her şeyi kendin kontrol edersin. Ama itiraf et, iyi bir gerilim filmi izlerken gizlice gülümsüyorsun. ☭🎬"
    },
    {
      animal: "Hitler",
      emoji: "🎭",
      title: "Sen Hitler'sin!",
      description: "Estetik takıntılı, dramatik ve vizyoner bir sinemaseversin! Filmlerde görsel mükemmellik, epik sahneler ve duygusal yoğunluk ararsın. Bir filmin renk paleti bile seni rahatsız edebilir. Sanatı ciddiye alırsın - belki biraz fazla. Yönetmenlik yapsaydın, her kareyi 37 kez çekerdin. 🎭🎬"
    },
    {
      animal: "Mussolini",
      emoji: "🎪",
      title: "Sen Mussolini'sin!",
      description: "Karizmatik, gösterişçi ve sahne seven bir film tutkunusun! Filmlerde büyük jest ve aksiyonu seversin. İzlerken de anlatırken de performans sergilersin. Bir sahneyi beğendiğinde alkış tutabilirsin. Film izlemek senin için sosyal bir gösteri ve sen her zaman başroldesin! 🎪🎬"
    },
    {
      animal: "Saddam",
      emoji: "🦅",
      title: "Sen Saddam'sın!",
      description: "Soğukkanlı, hesapçı ve acımasız bir film eleştirmenisin! Duygusallığa yer yok, mantık ve düzen her şeyin önünde. Bir filmi beğenmezsen silip geçersin, beğenirsen sessizce not alırsın. Film listelerin askeri düzen gibidir. Kimse senin izleme sıranı bozamaz! 🦅🎬"
    },
    {
      animal: "Franco",
      emoji: "⛪",
      title: "Sen Franco'sun!",
      description: "Sabırlı, gelenekçi ve dayanıklı bir sinema hastasısın! Trendlere kapılmazsın, klasiklere bağlısın. Herkes yeni filmlerin peşindeyken sen 40 yıllık bir başyapıtı tekrar izlersin. Sessiz ama kararlı tercihlerin var. Film zevkin değişmez, tıpkı senin gibi. ⛪🎬"
    }
  ]
};
