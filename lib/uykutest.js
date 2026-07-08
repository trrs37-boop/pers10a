export default {
  id: "uykutest",
  title: "Gece 3'te Uyuyamadığında Ne Yaparsına Göre Hangi Sanatçısın?",
  category: "Psikoloji",
  description: "Uykusuz gecelerin seni hangi dahiye benzetiyor? Karanlıkta parlayan yönünü keşfet!",
  image: "🌙",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Gece 3, tavan aydınlık. Aklında ne var?",
      answers: [
        { text: "Yarım kalan bir iş, bitirmem lazım kafamda dönüyor", points: { Kafka: 3, VanGogh: 1 } },
        { text: "Acayip garip hayaller, uçan saatler falan", points: { Dali: 3, Poe: 1 } },
        { text: "Geçmişte yaşadığım bir acı tekrar tekrar canlanıyor", points: { FridaKahlo: 3, VanGogh: 2 } },
        { text: "Karanlıkta bir huzursuzluk, tanımlayamadığım bir korku", points: { Poe: 3, Kafka: 2 } }
      ]
    },
    {
      id: 2,
      text: "Uyuyamamanın sebebi genelde ne?",
      answers: [
        { text: "Düşüncelerimi susturamıyorum, kafam durmadan çalışıyor", points: { Kafka: 3, VanGogh: 2 } },
        { text: "Fiziksel ya da duygusal bir sızı, eski yaralar", points: { FridaKahlo: 3, Poe: 1 } },
        { text: "Garip fikirler geliyor, not almam lazım yoksa kaçar", points: { Dali: 3, Kafka: 1 } },
        { text: "Yalnızlık ve anlamsızlık hissi çöküyor üstüme", points: { VanGogh: 3, Poe: 2 } }
      ]
    },
    {
      id: 3,
      text: "Uykusuz gecede telefonu eline aldın. Ne yaparsın?",
      answers: [
        { text: "Karanlık ve gizemli içerikler, true crime, korku hikayeleri", points: { Poe: 3, Dali: 1 } },
        { text: "Eski fotoğrafları karıştırırım, anılara dalarım", points: { FridaKahlo: 3, VanGogh: 2 } },
        { text: "Saçma sapan şeyler ararım, tuhaf videolar izlerim", points: { Dali: 3, Kafka: 1 } },
        { text: "Kimseye yazamam ama herkesin çevrimiçi olmasını dilerim", points: { VanGogh: 3, FridaKahlo: 1 } }
      ]
    },
    {
      id: 4,
      text: "Gece yarısı buzdolabının önündesin. Neye uzanırsın?",
      answers: [
        { text: "Bir şey yemem, sadece bakarım ve kapatırım", points: { Kafka: 3, Poe: 1 } },
        { text: "En garip kombinasyonu yaparım, turşulu çikolata gibi", points: { Dali: 3, FridaKahlo: 1 } },
        { text: "Tek başıma bir kadeh bir şeyler içerim", points: { VanGogh: 3, Poe: 2 } },
        { text: "Acı bir şey, sert bir kahve ya da biberli bir şey", points: { FridaKahlo: 3, VanGogh: 1 } }
      ]
    },
    {
      id: 5,
      text: "Uykusuz gecede pencereden dışarı baktığında ne hissedersin?",
      answers: [
        { text: "Yıldızlara bakarım, evrende ne kadar küçüğüz", points: { VanGogh: 3, Kafka: 1 } },
        { text: "Dışarıda bir şeylerin beni izlediği hissi", points: { Poe: 3, Dali: 2 } },
        { text: "Şehir uyuyor ama ben uyanığım, bu güç veriyor", points: { FridaKahlo: 3, Kafka: 1 } },
        { text: "Gölgeler hareket ediyor gibi, gerçekle hayal karışıyor", points: { Dali: 3, Poe: 2 } }
      ]
    },
    {
      id: 6,
      text: "Uyuyamadığın gece birisi sana mesaj atsa ne olur?",
      answers: [
        { text: "Sevinir ama cevap veremem, kelimeler ağır gelir", points: { VanGogh: 3, Kafka: 2 } },
        { text: "Kim bu saatte yazıyor diye şüphelenirim", points: { Poe: 3, Kafka: 1 } },
        { text: "Saatlerce derin bir sohbete dalarım", points: { FridaKahlo: 3, VanGogh: 1 } },
        { text: "Absürt şeyler yazarım, karşıdaki anlamaz ama gülerim", points: { Dali: 3, FridaKahlo: 1 } }
      ]
    },
    {
      id: 7,
      text: "Uykusuzluk seni yaratıcı yapar mı?",
      answers: [
        { text: "Evet, en iyi fikirlerim gece gelir ama yazamam", points: { Kafka: 3, VanGogh: 2 } },
        { text: "Gece rüya ile gerçek arası bir yerde şaheser üretirim", points: { Dali: 3, Poe: 1 } },
        { text: "Acıyı sanata dökerim, gece en dürüst olduğum zaman", points: { FridaKahlo: 3, VanGogh: 2 } },
        { text: "Karanlık atmosfer beni sarıyor, bir şeyler karalamak isterim", points: { Poe: 3, Kafka: 1 } }
      ]
    },
    {
      id: 8,
      text: "Sabaha karşı sonunda uyku geldi. Son düşüncen?",
      answers: [
        { text: "Yarın da aynı olacak, bu döngüden çıkamam", points: { Kafka: 3, Schopenhauer: 1 } },
        { text: "Az önce gördüğüm hayali unutmadan çizmeliyim", points: { Dali: 3, VanGogh: 1 } },
        { text: "Bir gün bu geceleri özleyeceğim belki", points: { FridaKahlo: 3, Poe: 1 } },
        { text: "Karanlık çekiliyor ama asıl karanlık içimde", points: { Poe: 3, VanGogh: 2 } }
      ]
    },
    {
      id: 9,
      text: "Uykusuz gecelerini birine anlatsan nasıl tarif edersin?",
      answers: [
        { text: "Kafamın içi bir labirent, çıkışı olmayan", points: { Kafka: 3, Poe: 2 } },
        { text: "Yıldızlı bir gece gibi, güzel ama hüzünlü", points: { VanGogh: 3, FridaKahlo: 1 } },
        { text: "Bir sirk gibi, her şey garip ama büyüleyici", points: { Dali: 3, FridaKahlo: 1 } },
        { text: "Bir savaş alanı, ben hem asker hem yara", points: { FridaKahlo: 3, VanGogh: 2 } }
      ]
    },
    {
      id: 10,
      text: "Uyuyamadığın gecelere bir şarkı seçsen?",
      answers: [
        { text: "Ağır, melankolik bir piyano parçası", points: { VanGogh: 3, Kafka: 2 } },
        { text: "Rahatsız edici, deneysel, tuhaf sesler", points: { Dali: 3, Poe: 1 } },
        { text: "Güçlü ve isyankar, beni ayakta tutan bir şey", points: { FridaKahlo: 3, VanGogh: 1 } },
        { text: "Sessizlik, hiçbir müzik bu geceye yetmez", points: { Kafka: 3, Poe: 2 } }
      ]
    }
  ],
  results: [
    {
      animal: "VanGogh",
      emoji: "🌻",
      title: "Sen Van Gogh'sun!",
      description: "Uykusuz gecelerin yıldızlı geceler gibi: hüzünlü ama inanılmaz güzel. Yalnızlığı derinden hissedersin ama o yalnızlık seni benzersiz kılar. Duygularını kelimelerle değil bakışlarla anlatırsın. İçindeki fırtına dışarıdan sakin görünür ama sen bilirsin, o fırtına bir gün başyapıt olacak. 🌻🌙"
    },
    {
      animal: "Kafka",
      emoji: "🪳",
      title: "Sen Kafka'sın!",
      description: "Gecenin ortasında düşüncelerinin esirisin! Kafanın içi bitmek bilmeyen bir roman gibi, her cümle bir sonrakini doğurur. Uyku gelmez çünkü beynin dur demek bilmez. Hayatı absürt bulursun ve haklısın da. Bir sabah böcek olarak uyansan bile şaşırmazsın. 🪳🌙"
    },
    {
      animal: "Dali",
      emoji: "🫠",
      title: "Sen Salvador Dali'sin!",
      description: "Gece senin oyun alanın! Rüya ile gerçek arasındaki çizgi sende zaten belirsiz. Uykusuz gecelerde en çılgın fikirlerin gelir, eriyen saatler gibi zaman senin için farklı akar. Normal insanlar uyurken sen evreni yeniden tasarlarsın. Sürrealizm senin doğal halin! 🫠🌙"
    },
    {
      animal: "FridaKahlo",
      emoji: "🌺",
      title: "Sen Frida Kahlo'sun!",
      description: "Gecenin acısını sanata dönüştüren bir savaşçısın! Yaralarını gizlemezsin, onları taşırsın. Uykusuz geceler seni kırmaz, bildiğini daha da pekiştirir. Acı çekersin ama asla boyun eğmezsin. Kırık bedeninde kırılmaz bir ruh var. 🌺🌙"
    },
    {
      animal: "Poe",
      emoji: "🐦‍⬛",
      title: "Sen Edgar Allan Poe'sun!",
      description: "Gecenin karanlığı senin doğal ortamın! Gölgeler, gizemler ve açıklanamayan sesler seni rahatsız etmez, ilham verir. Uykusuz gecelerinde bir yerlerde bir kuzgun öter ve sadece sen duyarsın. Korku seni besler, karanlık seni tamamlar. Nevermore! 🐦‍⬛🌙"
    }
  ]
};
