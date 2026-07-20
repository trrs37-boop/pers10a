export default {
  id: "krizpsikoloji",
  title: "Kriz Anlarındaki Tepkilerine Göre Hangi Psikolojik Rahatsızlığın Baskın?",
  category: "Psikoloji",
  description: "Zor anlarda verdiğin tepkiler, içindeki hangi rahatsızlığın gölgesini büyütüyor?",
  image: "🧠",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Bir iş toplantısında beklenmedik bir soru sorulduğunda ilk tepkin ne olur?",
      answers: [
        { text: "Hemen cevap vermeye çalışırım ama aklım karışır, dağılırım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Doğru kelimeleri ararken içimde bir rahatsızlık başlar", points: { PanikAtak: 3, Anksiyete: 2 } },
        { text: "Susar, kaçış arar, zaten cevap veremezdim derim", points: { Depresyon: 3, Anksiyete: 1 } },
        { text: "Cevabı ezbere söylemeye çalışır, her kelimeyi tartarım", points: { OKB: 3, PanikAtak: 1 } }
      ]
    },
    {
      id: 2,
      text: "Trafikte aniden fren yapmak zorunda kaldığında ne hissedersin?",
      answers: [
        { text: "Kalbim hızla çarpar, nefesim daralır, ölecek gibi olurum", points: { PanikAtak: 3, Anksiyete: 2 } },
        { text: "Sinir olur, kornaya basar, sabırsızlanırım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Kendimi suçlar, hep böyle olacağını düşünürüm", points: { Depresyon: 3, Anksiyete: 1 } },
        { text: "Hemen durumu analiz eder, tekrar yaşanmaması için önlem alırım", points: { OKB: 3, DEHB: 1 } }
      ]
    },
    {
      id: 3,
      text: "Önemli bir sınavdan önceki gece nasıl geçer?",
      answers: [
        { text: "Aynı konuyu defalarca tekrar eder, her detayı ezberlemeye çalışırım", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Uyuyamam, sürekli kötü sonuç hayalleri kurarım", points: { Anksiyete: 3, PanikAtak: 1 } },
        { text: "Son anda çalışmaya başlar, dağınık bir şekilde konu değiştiririm", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Hiçbir şey yapmak istemem, zaten başaracak değilim", points: { Depresyon: 3, DEHB: 1 } }
      ]
    },
    {
      id: 4,
      text: "Sevgilinle tartıştıktan sonra ne yaparsın?",
      answers: [
        { text: "O anı zihnimde sürekli canlandırır, neler konuştuğumuzu düşünüp dururum", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Kalbim sıkışır, ellerim terler, bu düşünceden uzaklaşmak isterim", points: { PanikAtak: 3, Anksiyete: 1 } },
        { text: "Yataktan çıkamam, her şey anlamsız gelir", points: { Depresyon: 3, PanikAtak: 1 } },
        { text: "Hemen başka şeylere dalar, düşünmemeye çalışırım", points: { DEHB: 3, Depresyon: 1 } }
      ]
    },
    {
      id: 5,
      text: "Patronun ani bir proje teslim tarihi verdiğinde ilk düşündüğün nedir?",
      answers: [
        { text: "Yetişemeyeceğim, başarısız olacağım, mide bulantısı gelir", points: { Anksiyete: 3, PanikAtak: 2 } },
        { text: "Hemen işe girişirim ama çabuk sıkılıp başka işler karıştırırım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "İşi mükemmel yapmak için her adımı planlar, defalarca kontrol ederim", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Zaten hiçbir şey değişmez, boş veririm", points: { Depresyon: 3, OKB: 1 } }
      ]
    },
    {
      id: 6,
      text: "Kalabalık bir ortamda ansızın fenalaşma hissi geldiğinde ne yaparsın?",
      answers: [
        { text: "Hemen dışarı çıkmayı düşünürüm, nefes alamıyormuş gibi hissederim", points: { PanikAtak: 3, Anksiyete: 2 } },
        { text: "Dışardakilerin beni yargıladığını düşünür, bakışlarından rahatsız olurum", points: { Anksiyete: 3, PanikAtak: 1 } },
        { text: "Zihnim tamamen dağılır, etraftakileri duyamam", points: { DEHB: 3, Anksiyete: 2 } },
        { text: "Bu hislerin geçmesini bekler ama içimden en kötü senaryoları düşünürüm", points: { Depresyon: 3, DEHB: 1 } }
      ]
    },
    {
      id: 7,
      text: "Vücudunda garip bir belirti hissettiğinde ilk yaptığın ne olur?",
      answers: [
        { text: "Hemen doktora gitmem gerektiğini düşünür, en kötü senaryoları kafamda kurarım", points: { Anksiyete: 3, PanikAtak: 2 } },
        { text: "Boş ver, sanki ölecek miyiz derim", points: { Depresyon: 3, Anksiyete: 1 } },
        { text: "Belirtiyi sürekli kontrol eder, her gün aynı saatte ölçerim", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Hemen başka işlere dalar, düşünmemeye çalışırım", points: { DEHB: 3, OKB: 1 } }
      ]
    },
    {
      id: 8,
      text: "Maddi bir sıkıntıyla karşılaştığında tepkin ne olur?",
      answers: [
        { text: "Uyuyamam, sürekli hesaplar yapar, her ihtimali düşünürüm", points: { Anksiyete: 3, OKB: 2 } },
        { text: "Hemen acil bir çözüm arar, riskli kararlar alırım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Her harcamayı not alır, harcamalarımı defalarca kontrol ederim", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Umursamam, zaten bu noktaya geleceği belliydi", points: { Depresyon: 3, DEHB: 1 } }
      ]
    },
    {
      id: 9,
      text: "Bir arkadaşın aniden ziyarete geldiğinde ev dağınıksa ne yaparsın?",
      answers: [
        { text: "Çok utanır, hemen toplamaya çalışırken ellerim titrer", points: { Anksiyete: 3, OKB: 1 } },
        { text: "Kapıyı açarım, dağınıklık beni rahatsız etmez, umrumda değil", points: { DEHB: 3, Depresyon: 1 } },
        { text: "Her şeyi tek tek düzene sokar, misafir görmeden yetiştirmeye çalışırım", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Zaten bir şekilde sorun bulacaktı, ne fark eder", points: { Depresyon: 3, DEHB: 1 } }
      ]
    },
    {
      id: 10,
      text: "Yoğun iş temposunda bir günün nasıl geçer?",
      answers: [
        { text: "Sabah hızlı başlar ama hemen dağılır, bir işten diğerine atlarım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Her şeyi bitirmek zorundayım, yetişemezsem mahvolurum diye acele ederim", points: { Anksiyete: 3, PanikAtak: 2 } },
        { text: "Her adımı titizlikle planlarım, aksamaya tahammül edemem", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Yataktan çıkmak istemem, sabah işe gitmek için zorlanırım", points: { Depresyon: 3, DEHB: 1 } }
      ]
    },
    {
      id: 11,
      text: "Kalabalık bir AVM'de aniden üzerine gelen bir kalabalık gördüğünde ne hissedersin?",
      answers: [
        { text: "Hemen uzaklaşmaya çalışırım, kalabalıkta nefesim daralır", points: { PanikAtak: 3, Anksiyete: 2 } },
        { text: "Kalabalığı uzaktan izlerim rahatsız olmam ama dikkatim dağılır, etrafımla ilgilenemem", points: { DEHB: 3, PanikAtak: 1 } },
        { text: "Birilerinin zarar görmemesi için endişe ile kalabalığı odaklanırım", points: { Anksiyete: 3, OKB: 2 } },
        { text: "Her yer kalabalık zaten bu insan seli beni boğuyor", points: { Depresyon: 3, PanikAtak: 2 } }
      ]
    },
    {
      id: 12,
      text: "Çok sevdiğin birinin amansız bir hastalığa yakalandığını öğrendiğinde ilk yaptığın ne olur?",
      answers: [
        { text: "Gece gündüz bunu düşünürüm, ağzıma lokma gözüme uyku girmez", points: { Anksiyete: 2, Depresyon: 3 } },
        { text: "Hemen araştırma yapar, çözüm bulmaya odaklanır, diğer her şeyi unuturum", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Doktor ziyaretlerini planlar, ilaçlarını takip eder, her detayı not alırım", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Acıdan ne yapacağımı bilemez, eve kapanır çaresizlik içinde yalnızca süreci seyrederim", points: { Depresyon: 3, OKB: 1 } }
      ]
    },
    {
      id: 13,
      text: "Patronun toplantıda seni övdüğünde nasıl tepki verirsin?",
      answers: [
        { text: "Ne diyeceğimi şaşırır, kızarır, hemen alçakgönüllü davranırım", points: { Anksiyete: 3, DEHB: 1 } },
        { text: "Hemen heyecanlanır, başka işler konuşmaya başlarım", points: { DEHB: 3, Anksiyete: 2 } },
        { text: "Övgüyü hak etmediğimi düşünür, içten içe sorgularım", points: { Depresyon: 3, Anksiyete: 1 } },
        { text: "Övgüyü analiz eder, samimi mi acaba diye düşünürüm", points: { OKB: 3, Depresyon: 1 } }
      ]
    },
    {
      id: 14,
      text: "Yeni bir şehre taşındığında ilk gün nasıldır?",
      answers: [
        { text: "Evden çıkmak istemem, yabancı ortamlar beni korkutur", points: { Anksiyete: 3, PanikAtak: 1 } },
        { text: "Hemen keşfe çıkar, sokakları ezberlemeye çalışırım", points: { DEHB: 3, Anksiyete: 2 } },
        { text: "Eşyalarımı simetrik bir düzende yerleştirir, her şeyin yerli yerinde olmasına dikkat ederim", points: { OKB: 3, Anksiyete: 1 } },
        { text: "Hiçbir heyecan duymam, sadece yeni bir yer daha", points: { Depresyon: 3, DEHB: 1 } }
      ]
    },
    {
      id: 15,
      text: "Uçakta türbülans yaşandığında ne yaparsın?",
      answers: [
        { text: "Nefesim daralır, öleceğimi düşünürüm", points: { PanikAtak: 3, Anksiyete: 2 } },
        { text: "Hemen müzik dinlemeye dalar, başka şeylerle oyalanırım", points: { DEHB: 3, PanikAtak: 1 } },
        { text: "Emniyet kemerini kontrol eder, kabin ekibinin talimatlarını defalarca okurum", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Ne yaptığım sonucu değiştirmeyecek", points: { Depresyon: 3, OKB: 1 } }
      ]
    },
    {
      id: 16,
      text: "Bir sunum yapman gerektiğinde hazırlığın nasıldır?",
      answers: [
        { text: "Metni ezberler, her kelimeyi doğru söylemeye çalışırım", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Sunumdan önceki gece uyuyamam, kalbim sıkışır", points: { Anksiyete: 3, PanikAtak: 1 } },
        { text: "Sunumu son anda hazırlar, anlatımı da akışına bırakırım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Başarısız olacağımı düşünürüm, sunumu yapmak zorunda olduğum için canım sıkılır", points: { Depresyon: 3, DEHB: 1 } }
      ]
    },
    {
      id: 17,
      text: "Bir trafik kazasına şahit olduğunda ne yaparsın?",
      answers: [
        { text: "Hemen yardım ederim ama sonra günlerce o anı düşünürüm", points: { Anksiyete: 3, OKB: 2 } },
        { text: "Olay yerinden uzaklaşır, dikkatimi dağıtacak başka bir şeyler ararım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Olayı detaylı zihnime kazır, aklımda sürekli tekrar ederim", points: { OKB: 3, PanikAtak: 2 } },
        { text: "Kazayı yapan ben olsaydım nasıl olurdu diye düşünürdüm", points: { Depresyon: 3, OKB: 1 } }
      ]
    },
    {
      id: 18,
      text: "Sevdiğin birinden uzun süre mesaj gelmediğinde ne düşünürsün?",
      answers: [
        { text: "En kötü senaryoları kurar, telefonu sürekli kontrol ederim", points: { Anksiyete: 3, OKB: 2 } },
        { text: "Mesaj gelmeyince başka işler yapar, unutmaya çabalarım", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Mesaj gelene kadar olası konuşmaları zihnimde tekrar ederim", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Bir kusur işlediğim için yakında başıma geleceklerin sonuçlarını düşünürüm", points: { Depresyon: 3, OKB: 1 } }
      ]
    },
    {
      id: 19,
      text: "Bir hata yaptığında ve fark edildiğinde ilk hissin ne olur?",
      answers: [
        { text: "Tüm gece o hatayı düşünür, kendimi suçlar, değersiz hissederim", points: { Depresyon: 3, Anksiyete: 2 } },
        { text: "Hatayı kabullenir, düzeltmek için başka şeyler yapmaya çalışırım", points: { DEHB: 3, OKB: 1 } },
        { text: "Hatayı telafi etmek için her detayı kontrol eder, başkalarının tepkilerini değerlendiririm", points: { OKB: 3, Anksiyete: 2 } },
        { text: "Yüzüm kızarır, terlerim, ortamdan kaçmak isterim", points: { PanikAtak: 3, Depresyon: 1 } }
      ]
    },
    {
      id: 20,
      text: "Gece yatağa uzandığında zihnin nasıldır?",
      answers: [
        { text: "Bin bir düşünceyle dolar, uyuyamam", points: { Anksiyete: 3, OKB: 2 } },
        { text: "Uyumak için zorlanırım, bacaklarımı hareket ettiririm", points: { DEHB: 3, Anksiyete: 1 } },
        { text: "Yatağın düzenini kontrol eder, uyku pozisyonumu defalarca değiştiririm", points: { OKB: 3, DEHB: 1 } },
        { text: "Uyuyabilirim ama sabah kalkmak çok zor gelir", points: { Depresyon: 3, DEHB: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Anksiyete",
      emoji: "😰",
      title: "Baskın Eğilimin: Anksiyete Bozukluğu",
      description: "Sürekli gelecek kaygısı, kontrol edemediğin düşünceler ve bedensel belirtilerle yaşıyorsun. Her şeyin kötü gideceğini varsayar, küçük ayrıntılarda bile felaket senaryoları kurarsın. Zihnin asla susmaz, sürekli bir tehdit arar. Rahatlamak ve anda kalmak için nefes egzersizleri ve profesyonel destek iyi gelebilir. 😰🌪️"
    },
    {
      animal: "DEHB",
      emoji: "🌀",
      title: "Baskın Eğilimin: Dikkat Eksikliği ve Hiperaktivite",
      description: "Kriz anlarında odaklanmakta zorlanır, dürtüsel kararlar verir ve işleri son ana bırakırsın. Zihnin sürekli dağılır, bir işten diğerine atlarsın. Sessiz kalmak ve tek bir şeye odaklanmak senin için işkence gibidir. Enerjini doğru yönlendirmek, yapılandırılmış rutinler ve küçük hedefler belirlemek sana yardımcı olabilir. 🌀⚡"
    },
    {
      animal: "OKB",
      emoji: "🔁",
      title: "Baskın Eğilimin: Obsesif Kompulsif Bozukluk",
      description: "Kontrol takıntısı, simetri, tekrarlayan düşünceler ve zorlantılı davranışlar hayatını ele geçirmiş. Kriz anlarında her şeyi mükemmel yapmak için aşırı çaba gösterir, en ufak aksamada iç huzurun bozulur. Düşüncelerin sürekli döngüye girer, ancak bu döngüyü kırmanın yollarını bulmak mümkün. Terapi ve farkındalık çalışmaları önemli. 🔁🧠"
    },
    {
      animal: "Depresyon",
      emoji: "🌧️",
      title: "Baskın Eğilimin: Depresyon",
      description: "Krizler karşısında umutsuzluğa kapılır, hiçbir çabanın anlamı olmadığını düşünürsün. Enerjin düşer, isteksizlik, değersizlik ve karamsarlık içinde boğulursun. Dış dünyayla bağ kurmak zorlaşır, sosyal çekilme yaşarsın. Küçük adımlarla hareket etmek, destek almak ve kendine şefkat göstermek bu karanlıktan çıkış için ilk adımlardır. 🌧️🕯️"
    },
    {
      animal: "PanikAtak",
      emoji: "💥",
      title: "Baskın Eğilimin: Panik Atak Bozukluğu",
      description: "Ani, beklenmedik yoğun korku atakları yaşar, bedenin alarm durumuna geçer. Kalp çarpıntısı, nefes darlığı, terleme ve ölüm korkusu seni ele geçirir. Kriz anlarında kaçma ya da savaşma tepkisi verirsin, ama çoğu zaman tehdit aslında içindedir. Nefes teknikleri, zeminle bağlantı kurma ve bir uzmandan yardım almak atakların şiddetini azaltabilir. 💥🧘"
    }
  ]
};
