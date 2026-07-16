import diktatest from './diktatest';
import filozof from './filozof';
import uykutest from './uykutest';
import suclord from './suclord';
export const allQuizzes = [
  {
    id: 'food-animal',
    title: "Sevdiğin Yemeklere Göre Önceki Hayatında Hangi Hayvandın?",
  description: "Yemek seçimlerin seni hangi hayvana benzetecek?",
  category: "Eğlence",
  image: "🍔",
  questions: [
    {
      id: 1,
      text: "İş çıkışı bir akşam yemeğine gidiyorsun. Restoranda hangi yemeği sipariş ederdin?",
      answers: [
        { text: "Sushi", points: { Kartal: 2, Köpek: 1 } },
        { text: "Pizza", points: { Köpek: 3, Kelebek: 1 } },
        { text: "Diyet salata", points: { Panda: 3, Kelebek: 1 } },
        { text: "Döner", points: { Kartal: 3, Köpek: 1 } }
      ]
    },
    {
      id: 2,
        text: "Kahvaltıda hangisini tercih edersin?",
      answers: [
        { text: "Kahve ve kruvasan", points: { Kedi: 3, Kelebek: 1 } },
        { text: "Menemen", points: { Panda: 2, Köpek: 2 } },
        { text: "Pancake ve reçel", points: { Köpek: 3, Kelebek: 1 } },
        { text: "Sucuklu yumurta", points: { Kartal: 3, Köpek: 1 } }
      ]
    },
    {
      id: 3,
      text: "Hangisi senin için ideal atıştırmalık?",
      answers: [
        { text: "Çikolata", points: { Kedi: 3, Kelebek: 1 } },
        { text: "Cips ve patlamış mısır", points: { Köpek: 3, Kelebek: 1 } },
        { text: "Kurutulmuş meyveler", points: { Panda: 3, Kelebek: 2 } },
        { text: "Fındık, kaju gibi çerezler", points: { Kartal: 3, Panda: 1 } }
      ]
    },
    {
      id: 4,
      text: "İlk kez gittiğin bir restoranda yeni bir yemek denemeye cesaret edebilir misin?",
      answers: [
        { text: "Her zaman, bu heyecan verici bir deneyim", points: { Kartal: 3, Köpek: 2 } },
        { text: "Evet ama güvenli seçeneklerle", points: { Köpek: 3, Panda: 1 } },
        { text: "Sadece bildiğim yemekleri yerim", points: { Kedi: 3, Kelebek: 1 } },
        { text: "Tercihlerim önceliklidir ama ruh halime göre yeni bir şey de deneyebilirim", points: { Panda: 2, Kelebek: 2 } }
      ]
    },
    {
      id: 5,
      text: "Yemekten sonra neler yapmayı seversin?",
      answers: [
        { text: "Arkadaşlarımla sosyalleşmeyi", points: { Köpek: 3, Kelebek: 1 } },
        { text: "Sakin bir ortamda sevdiklerimle vakit geçirmeyi", points: { Panda: 3, Kelebek: 1 } },
        { text: "Kendi başıma dinlenmeyi", points: { Kedi: 3, Kelebek: 1 } },
        { text: "Sonraki işime hazırlanmayı", points: { Kartal: 3, Köpek: 1 } }
      ]
    },
    {
      id: 6,
      text: "Acı yemekler hakkında ne düşünürsün?",
      answers: [
        { text: "Aşırı seviyorum, ben zaten her acının tiryakisi olmuşum", points: { Kartal: 3, Köpek: 1 } },
        { text: "Orta seviyede olabilir", points: { Köpek: 3, Panda: 1 } },
        { text: "Az bir dokunuş yeterli", points: { Kedi: 3, Kelebek: 1 } },
        { text: "Hiç tercih etmem, acıdan hoşlanmam", points: { Panda: 3, Kelebek: 1 } }
      ]
    },
    {
      id: 7,
      text: "Diyete başladığında ilk günü nasıl geçiyor?",
      answers: [
        { text: "Katı disiplinle, tavizsiz", points: { Kartal: 3, Kedi: 1 } },
        { text: "Geçmek bilmiyor", points: { Panda: 3, Kedi: 1 } },
        { text: "Diyetim ilk günden bozuluyor", points: { Köpek: 3, Kelebek: 1 } },
        { text: "Esnek bir biçimde uyguladığım için sorun olmuyor", points: { Kelebek: 3, Panda: 1 } }
      ]
    },
    {
      id: 8,
      text: "Aile yemeğinde senin rolün nedir?",
      answers: [
        { text: "Merkezdeyim, herkes benimle aktif iletişim içindedir", points: { Kartal: 3, Köpek: 1 } },
        { text: "Herkesin gönlünü hoş etmek için çabalarım", points: { Panda: 3, Kelebek: 1 } },
        { text: "Sessizce oturup yemeğimi yerim", points: { Kedi: 3, Kelebek: 1 } },
        { text: "Herkese hitap eden hikayeler anlatırım", points: { Köpek: 3, Panda: 1 } }
      ]
    },
    {
      id: 9,
      text: "İşten eve geldiğinde yemeğini nasıl hazırlamayı seversin?",
      answers: [
        { text: "Hızlı ve verimli bir şekilde", points: { Kartal: 3, Köpek: 1 } },
        { text: "Adım adım, titizce", points: { Panda: 3, Kedi: 1 } },
        { text: "Yaratıcı ve farklı yollarla", points: { Kelebek: 3, Köpek: 1 } },
        { text: "En az çabayla", points: { Kedi: 3, Kelebek: 1 } }
      ]
    },
    {
      id: 10,
      text: "Yemek için bütçen kısıtlı olduğunda ne yaparsın?",
      answers: [
        { text: "Yine de kaliteden taviz vermem", points: { Kedi: 3, Kartal: 1 } },
        { text: "Dengeli bir orta yol bulurum", points: { Panda: 3, Kelebek: 1 } },
        { text: "Yaratıcı kombinasyonlar denerim", points: { Kelebek: 3, Köpek: 1 } },
        { text: "Çok kafaya takmam karnım doysun yeter", points: { Köpek: 3, Panda: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Panda",
      emoji: "🐼",
      title: "Sen bir PANDASIN!",
      description: "Dengeli, sakin ve biraz alaycı bir yapın var. Yemeği sakin bir ortamda, huzurlu anlar içinde yaşamayı seversin. Kararlarında titiz ve düşünceli davranışın diğerlerini etkileyip onları rahatlatır. Çevrende huzur yayarsın. ✨"
    },
    {
      animal: "Köpek",
      emoji: "🐕",
      title: "Sen bir KÖPEKSİN!",
      description: "Sosyal, canlı ve vefalı bir yapın var. Yemekleri diğer insanlarla paylaşmaktan keyif alırsın. Herkesin mutluluğunu düşünürsün, esnek ve uyumlusun. Çevrenden istediğini elde etmesini bilirsin ve herkes seni sever. 😊"
    },
    {
      animal: "Kedi",
      emoji: "🐱",
      title: "Sen bir KEDİSİN!",
      description: "Seçici, bağımsız ve biraz gizemli bir yapın var. Yemek söz konusu olunca kaliteden taviz vermezsin. Kendi kurallarınla yaşarsın ve insanlar seni anlamaya çalışır. Gizli bir çekiciliğin var ve kendine güvenlisin. 😼"
    },
    {
      animal: "Kartal",
      emoji: "🦅",
      title: "Sen bir KARTALsIN!",
      description: "Cesur, kararlı ve hedef-odaklı bir yapın var. Yemek seçiminde de, hayatta da net kararlar alırsın. Riskleri göze almaktan korkmaz ve liderliğinle diğerlerini etkilersin. Başarıya giden yolda net adımlar atarsın. 💪"
    },
    {
      animal: "Kelebek",
      emoji: "🦋",
      title: "Sen bir KELEBEKSİN!",
      description: "Hafif, karmaşık ve çok yönlü bir yapın var. Yaşamın her alanında esnekliği seversin ve monotonluğu sevmezsin. Yemekten hayata her şeyde değişkenlikleri tercih edersin. Ruh halinde hızlı değişimler yaşarsın ama bu seni ilginç kılar. ✨"
      }
    ]
  },
  {
    id: "futbol-takimi",
  title: "Gündelik Tercihlerine Göre Hangi Anadolu Takımını Tutmalısın?",
  description: "Hayat tarzın seni hangi takıma yönlendirecek? Öğren!",
  category: "Spor",
  image: "⚽",
  questions: [
    {
      id: 1,
      text: "Hafta sonu seni nerede bulurlar?",
      answers: [
        { text: "Kıraathanede çay içip oyun oynarken", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Şehrin kültür merkezinde ya da bir sanat sergisinde", points: { Bursaspor: 3, Eskişehirspor: 1 } },
        { text: "Sabah kafede akşam gece kulübünde", points: { Eskişehirspor: 3, Rizespor: 1 } },
        { text: "Evde kitap okurken ya da film izlerken", points: { Sivasspor: 3, Çorumspor: 1 } }
      ]
    },
    {
      id: 2,
      text: "En yakın arkadaşın seni nasıl tanımlar?",
      answers: [
        { text: "Asabi ve heyecanlı", points: { Rizespor: 3, Çorumspor: 1 } },
        { text: "Sakin ve düşünceli", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Eğlenceli, sosyal ve sıcak", points: { Eskişehirspor: 3, Bursaspor: 1 } },
        { text: "Kültürlü, okumuş ve entelektüel biri", points: { Bursaspor: 3, Eskişehirspor: 1 } }
      ]
    },
    {
      id: 3,
      text: "Kıyafet seçiminde senin için en önemli şey nedir?",
      answers: [
        { text: "Rahatlık ve pratikliği tercih ederim", points: { Eskişehirspor: 3, Çorumspor: 1 } },
        { text: "Moda ve stil en önemlisi", points: { Bursaspor: 3, Eskişehirspor: 1 } },
        { text: "Bulunduğum ortama göre uyumlu olması", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Geleneklerimize uygun olması", points: { Çorumspor: 3, Sivasspor: 1 } }
      ]
    },
    {
      id: 4,
      text: "Dışarıda bir arkadaşına kızdığında ne yaparsın?",
      answers: [
        { text: "Hemen patlarım, ağzıma ne gelirse söylerim", points: { Rizespor: 3, Çorumspor: 1 } },
        { text: "Sessiz kalıp içimde tutarım", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Sakin şekilde fikrimi ifade ederim", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Alayla cevap veririm, birlikte kahkaha atarız", points: { Eskişehirspor: 3, Rizespor: 1 } }
      ]
    },
    {
      id: 5,
      text: "Piyangodan yüklü bir miktar para kazandığında ne yaparsın?",
      answers: [
        { text: "Akıllıca harcayıp bir kısmını da biriktirim", points: { Sivasspor: 3, Rizespor: 1 } },
        { text: "Hayat kısa, anı yaşa", points: { Eskişehirspor: 3, Bursaspor: 1 } },
        { text: "Ailem ve geleceğim için yatırım yaparım", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "O hep görmek istediğim ülkelere seyahat planı oluştururum", points: { Bursaspor: 3, Eskişehirspor: 1 } }
      ]
    },
    {
      id: 6,
      text: "Gelecek yıl tatile nereye gitmek isterdin?",
      answers: [
        { text: "Sıcak deniz, gece hayatı ve eğlence dolu bir turizm cennetine", points: { Eskişehirspor: 3, Rizespor: 1 } },
        { text: "Sakin, doğa ile iç içe yerlere", points: { Sivasspor: 3, Rizespor: 1 } },
        { text: "Tarihi önemi olan yerlere", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Ailemin yanına, memleketime", points: { Çorumspor: 3, Bursaspor: 1 } }
      ]
    },
    {
      id: 7,
      text: "En son ne tür müzik dinledin?",
      answers: [
        { text: "Türk halk müziği, türküler gibisi yoktur", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "70'lerin slow şarkılarını dinledim", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Hareketli pop şarkılar ve protest rap", points: { Eskişehirspor: 3, Bursaspor: 1 } },
        { text: "Arabesk ve duygusal türküler", points: { Sivasspor: 3, Çorumspor: 1 } }
      ]
    },
    {
      id: 8,
      text: "Ailen senin için ne kadar önemlidir?",
      answers: [
        { text: "Her kararımda onları göz önünde bulundururum", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Önemliler ama kendi hayatım önceliklidir", points: { Sivasspor: 3, Bursaspor: 1 } },
        { text: "Seviyorum ama sık sık görüşmemiz de şart değil", points: { Bursaspor: 3, Eskişehirspor: 1 } },
        { text: "Çok önemlidir ama beni bazen çok sinir ediyorlar", points: { Rizespor: 3, Çorumspor: 1 } }
      ]
    },
    {
      id: 9,
      text: "Önemli bir konuda karar alırken nasıl bir ruh halindesindir?",
      answers: [
        { text: "Duygularımla, hızlı karar alırım uzun düşünmeye gerek yok", points: { Rizespor: 3, Eskişehirspor: 1 } },
        { text: "Çok düşünüp, analiz ederim", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Aile ya da yakınlarıma danışarak süreci titizlikle yürütürüm", points: { Çorumspor: 3, Sivasspor: 1 } },
        { text: "Önemli konu yoktur canım hangisini isterse", points: { Eskişehirspor: 3, Rizespor: 1 } }
      ]
    },
    {
      id: 10,
      text: "Hayattaki hedefin nedir?",
      answers: [
        { text: "İstikrarlı ve sakin bir yaşam ve huzurlu bir ölüm", points: { Sivasspor: 3, Çorumspor: 1 } },
        { text: "Sanatın getirdiği haz ile dingin bir ruha erişmek", points: { Bursaspor: 3, Sivasspor: 1 } },
        { text: "Eğlenmek, anılar biriktirmek", points: { Eskişehirspor: 3, Bursaspor: 1 } },
        { text: "Başarılı olmak, zirveye tırmanmak", points: { Rizespor: 3, Eskişehirspor: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Sivasspor",
      emoji: "❄️",
      title: "Sivasspor Taraftarısın!",
      description: "Mücadeleci bir ruha sahip, hesaplı yaşayan biri olarak Sivasspor senin takımın! Duygudan ziyade akılla hareket eden, sakin ve ciddi bir yapın var. Yükseklerin soğuğu gibi sen de sadeliğin ve gerçekliğin peşindesin. Sivas bölgesinin kaynakları nasıl değerli ve nadir ise, senin gözüne de kaliteli ve az sayıdaki şeyler değerli görünür. ❄️⚽"
    },
    {
      animal: "Bursaspor",
      emoji: "🐊",
      title: "Bursaspor Taraftarısın!",
      description: "Entelektüel, kültürlü ve sanat seven bir yapın var! Bursaspor'un eski ve değerli tarihi gibi, sen de köklü bir yerde yaşamaya alışkın, kitap okuyan, müze gezmeyi seven birisin. Felsefe, sanat ve kültür seni heyecanlandırıyor. Bursa'nın sofistike havası gibi, senin de ruh yüksekliğin ve derinliğin takdir edilir. 📚✨"
    },
    {
      animal: "Çorumspor",
      emoji: "🕌",
      title: "Çorumspor Taraftarısın!",
      description: "Gelenekçi, değerlere sadık ve aile-merkezli bir yapın var! Çorum'un tarihi ve muhafazakar ruhuna benziyorsun. Dinî ve milli değerleri yaşamında merkeze alırsın. Çorumspor'un sabit taraftarları gibi sen de bağlı, sadık ve ilkeleri olan birisin. Kültürü ve geçmişi bir arada yaşayan insanlar arasında bulunmayı tercih edersin. 🕌⚽"
    },
    {
      animal: "Rizespor",
      emoji: "☕",
      title: "Rizespor Taraftarısın!",
      description: "Asabi, hızlı, hareketli ve duygusal birisin! Rize'nin dağlık yapısında ve sert insanları gibi senin de güçlü bir karakterin var. Ani kararlar alırsın, çabuk kızarsın. Rize'nin çaylarında biriken enerji gibi senin de içinde sürekli bir dinamizm var. Yaşamında heyecan ve hız eksik olmaz! 🔥⚽"
    },
    {
      animal: "Eskişehirspor",
      emoji: "🎉",
      title: "Eskişehirspor Taraftarısın!",
      description: "Sosyal, eğlenceli ve sıcak kalpli birisin! Eskişehir'in gece hayatı ve sosyal ortamları gibi, sen de insanlarla vakit geçirmekten, espri yapmaktan ve eğlenmekten keyif alırsın. Çevrene mutluluk ve enerji yayarsın. Hayatı ciddiye alırken, onun tadını çıkarmayı da unutmazsın 🎉⚽"
    }
    ]
  },
  diktatest,
  filozof,
  uykutest,
  suclord
];

export const getQuizById = (id) => {
  return allQuizzes.find(quiz => quiz.id === id);
};
