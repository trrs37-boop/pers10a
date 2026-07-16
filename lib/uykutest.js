export default {
  id: "uykutest",
  title: "Gece 3'te Uyuyamadığında Yaptıklarına Göre Hangi Sanatçısın?",
  category: "Eğlence",
  description: "Uykusuz gecelerin seni hangi dahiye benzetiyor? Karanlıkta parlayan yönünü keşfet!",
  image: "🌙",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Gece 3, tavan aydınlık. Aklında ne var?",
      answers: [
        { text: "Yarım kalan bir iş, bitirmem lazım yoksa kafamda dönüyor", points: { Kafka: 3, VanGogh: 1 } },
        { text: "Acayip garip hayaller, birbirine girmiş görüntüler", points: { Dali: 3, Poe: 1 } },
        { text: "Geçmişte yaşadığım bir acı zihnimde tekrar tekrar canlanıyor", points: { FridaKahlo: 3, VanGogh: 2 } },
        { text: "Karanlıkta bir huzursuzluk, tanımlayamadığım bir korku var", points: { Poe: 3, Kafka: 2 } }
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
        { text: "Youtube'da karanlık ve gizemli içerikler arasında kaybolurum", points: { Poe: 3, Dali: 1 } },
        { text: "Galeride eski fotoğrafları karıştırırım, anılara dalarım", points: { FridaKahlo: 3, VanGogh: 2 } },
        { text: "Twitter ya da Instagramda komik videolar izlerim", points: { Dali: 3, Kafka: 1 } },
        { text: "Kimler whatsappta çevrimiçi diye bakarım", points: { VanGogh: 3, FridaKahlo: 1 } }
      ]
    },
    {
      id: 4,
      text: "Gece yarısı buzdolabının önündesin. Neye uzanırsın?",
      answers: [
        { text: "Bir şey yemem, sadece bakarım ve dalgın bir şekilde kapatırım", points: { Kafka: 3, Poe: 1 } },
        { text: "En garip kombinasyonu yaparım, peynirli çikolata gibi", points: { Dali: 3, FridaKahlo: 1 } },
        { text: "Bir kadeh bir şeyler içerim", points: { VanGogh: 3, Poe: 2 } },
        { text: "Acı bir şey, sert bir kahve ya da biberli bir şey", points: { FridaKahlo: 3, VanGogh: 1 } }
      ]
    },
    {
      id: 5,
      text: "Uykusuz gecede pencereden dışarı baktığında ne hissedersin?",
      answers: [
        { text: "Yıldızlara bakar, evrende ne kadar küçük olduğumuzu düşünürüm", points: { VanGogh: 3, Kafka: 1 } },
        { text: "Dışarıda bir şeylerin beni izlediği hissine kapılırım", points: { Poe: 3, Dali: 2 } },
        { text: "Şehir uyuyor ama ben uyanığım", points: { FridaKahlo: 3, Kafka: 1 } },
        { text: "Gölgeler hareket ediyor gibi, gerçekle hayal birbirine karışıyor", points: { Dali: 3, Poe: 2 } }
      ]
    },
    {
      id: 6,
      text: "Uyuyamadığın gece bir yeni mesaj geldiğine dair bildirim alırsan ilk ne düşünürsün?",
      answers: [
        { text: "Sevinir ama bu mesaja cevap veremem, bu saatte gelen mesaj hayra değildir", points: { VanGogh: 3, Kafka: 2 } },
        { text: "Bu saatte kim yazıyor diye şüphelenirim", points: { Poe: 3, Kafka: 1 } },
        { text: "Mesaj atan kişiyle saatlerce derin bir sohbete dalarım", points: { FridaKahlo: 3, VanGogh: 1 } },
        { text: "Yine hangi bet sitesinden numaram bulunmuş diye hayıflanırım", points: { Dali: 3, FridaKahlo: 1 } }
      ]
    },
    {
      id: 7,
      text: "Uykusuzluk seni yaratıcı yapar mı?",
      answers: [
        { text: "Evet, en iyi fikirlerim gece gelir ama yazamam", points: { Kafka: 3, VanGogh: 2 } },
        { text: "Gece rüya ile gerçek arası bir yerde şaheserler üretirim", points: { Dali: 3, Poe: 1 } },
        { text: "Acıyı sanata dökerim, gece en dürüst olduğum zamandır", points: { FridaKahlo: 3, VanGogh: 2 } },
        { text: "Karanlık atmosfer beni sarıyor, bir şeyler karalamak isterim", points: { Poe: 3, Kafka: 1 } }
      ]
    },
    {
      id: 8,
      text: "Sabaha karşı alarm çalmaya yakın sonunda uyku geldi. Son düşüncen?",
      answers: [
        { text: "Yarın da aynı olacak, bu uykusuzluk döngüsünden çıkamam, bu huzursuzluk meyvesini vermeli artık", points: { Kafka: 3, Schopenhauer: 1 } },
        { text: "Az önce gördüğüm hayali unutmadan çizmeliyim", points: { Dali: 3, VanGogh: 1 } },
        { text: "Bir gün bu geceleri bile özleyeceğim belki", points: { FridaKahlo: 3, Poe: 1 } },
        { text: "Uyandığımda karşılaşacaklarımı düşününce uykuya dalmak karanlığa çekilmek gibi geliyor", points: { Poe: 3, VanGogh: 2 } }
      ]
    },
    {
      id: 9,
      text: "Uykusuz gecelerini birine anlatsan nasıl tarif edersin?",
      answers: [
        { text: "Kafamın içi bir labirent, çıkışı olmayan", points: { Kafka: 3, Poe: 2 } },
        { text: "Yıldızlı bir gece gibi, güzel ama hüzünlü", points: { VanGogh: 3, FridaKahlo: 1 } },
        { text: "Bir sirk gibi, her şey garip ama büyüleyici", points: { Dali: 3, FridaKahlo: 1 } },
        { text: "Bir savaş alanı, ben ise yaralı bir asker", points: { FridaKahlo: 3, VanGogh: 2 } }
      ]
    },
    {
      id: 10,
      text: "Uyuyamadığın gecelere bir şarkı seçsen?",
      answers: [
        { text: "Erik Satie - Gymnopedie No.1", points: { VanGogh: 3, Kafka: 2 } },
        { text: "Kavinsky - Nightcall", points: { Dali: 3, Poe: 1 } },
        { text: "Rage Against The Machine - Killing in the Name", points: { FridaKahlo: 3, VanGogh: 1 } },
        { text: "Enya - Only Time", points: { Kafka: 3, Poe: 2 } }
      ]
    }
  ],
  results: [
    {
      animal: "VanGogh",
      emoji: "🌻",
      title: "Sen Van Gogh'sun!",
      description: "Uykusuz gecelerin yıldızlı geceler gibi: Hüzünlü ama inanılmaz güzel. Yalnızlığı derinden hissedersin ama o yalnızlık seni benzersiz kılar. Duygularını kelimelerle değil bakışlarla anlatırsın. İçindeki fırtına dışarıdan sakin görünür ama sen bilirsin, o fırtına bir gün başyapıt olacak. 🌻🌙"
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
      description: "Gecenin karanlığı senin doğal ortamın! Gölgeler, gizemler ve açıklanamayan sesler seni rahatsız etmez, ilham verir. Uykusuz gecelerinde bir yerlerde bir kuzgun öter ve sadece sen duyarsın. Korku seni besler, karanlık seni tamamlar 🐦‍⬛🌙"
    }
  ]
};
