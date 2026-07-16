export default {
  id: "imparatorluktesti",
  title: "Karakterine Göre Hangi İmparatorluk Döneminde Yaşamalıydın?",
  category: "Tarih",
  description: "Tahtlar, kılıçlar ve entrikalar... Karakterinin izini süren bu testte, ruhunun en uyumlu olduğu imparatorluk dönemini keşfet!",
  image: "🏛️",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Bir imparatorluk kurmak için ilk adımı atıyorsun. Sana göre en önemli şey nedir?",
      answers: [
        { text: "Disiplinli, iyi techizatlı ve eğitimli bir ordu", points: { Roma: 3, Osmanlı: 1 } },
        { text: "Güçlü istihbarat ağı oluşturmak", points: { Bizans: 3, Britanya: 1 } },
        { text: "Adil bir devlet bürokrasisi yaratmak", points: { Osmanlı: 3, Çin: 1 } },
        { text: "Denizlere hakim güçlü bir donanma ve ticaret ağı", points: { Britanya: 3, Osmanlı: 1 } },
        { text: "Geniş toprakları fethetmek için hızlı ve hafif bir ordu", points: { Moğol: 3, Britanya: 1 } },
        { text: "Kadim bilgelik ve uyum içinde, uzun vadeli bir medeniyet planı", points: { Çin: 3, Bizans: 1 } }
      ]
    },
    {
      id: 2,
      text: "Sarayında bir komplo söylentisi var. İçgüdün ne yapmanı söyler?",
      answers: [
        { text: "Komployu araştır, suçluları yargıla ve kanun önünde cezalandır", points: { Roma: 3, Osmanlı: 2 } },
        { text: "Karşı istihbaratla komployu çökert, kendi muhbir ağını kullan", points: { Bizans: 3, Çin: 2 } },
        { text: "Bilge bir danışmanla durumu değerlendir, uzlaşmacı ama kararlı ol", points: { Osmanlı: 3, Çin: 1 } },
        { text: "Soğukkanlılıkla delil topla, suçluları sessizce tasfiye et", points: { Britanya: 3, Bizans: 2 } },
        { text: "Hızla müdahale et, isyanı daha büyümeden ez", points: { Moğol: 3, Roma: 2 } },
        { text: "Uzun vadeli bir stratejiyle sadakat testi yap, tehdidi zarafetle yok et", points: { Çin: 3, Osmanlı: 1 } }
      ]
    },
    {
      id: 3,
      text: "Bir halk isyanıyla karşı karşıyasın. İmparator olarak tavrın ne olur?",
      answers: [
        { text: "İsyancı liderlerle müzakere etmeden önce bölgeye güçlü bir ordu konuşlandır", points: { Roma: 3, Britanya: 1 } },
        { text: "Halkın şikayetlerini dinler gibi yap, sonra elebaşlarını gizlice sustur", points: { Bizans: 3, Britanya: 1 } },
        { text: "Halkı dinlemek için bir divan kur, adalet sözü vererek gönüllerini kazan", points: { Osmanlı: 3, Çin: 2 } },
        { text: "Reform sözü ver ama imparatorluk otoritesinden asla taviz verme", points: { Britanya: 3, Osmanlı: 1 } },
        { text: "İsyancıları affet ama bir daha kalkışırlarsa kılıcının hakkı olduğunu göster", points: { Moğol: 3, Roma: 1 } },
        { text: "Bilge filozoflar ve bürokratlarla danış, sorunu eğitim ve uyumla çöz", points: { Çin: 3 } }
      ]
    },
    {
      id: 4,
      text: "Boş bir vaktinde sarayda ne yapmak sana huzur verir?",
      answers: [
        { text: "Gladyatör dövüşlerini izlemek veya strateji oyunları oynamak", points: { Roma: 3, Bizans: 2 } },
        { text: "Gizli bir geçitte dini metinler okumak veya ikonalar çizmek", points: { Bizans: 3, Osmanlı: 1 } },
        { text: "Şiir dinletisi veya resim sanatıyla uğraşmak", points: { Osmanlı: 3, Çin: 2 } },
        { text: "Çay eşliğinde gazete okumak veya siyasi hiciv yazmak", points: { Britanya: 3, Osmanlı: 2 } },
        { text: "Atlarla bozkırda gezintiye çıkmak", points: { Moğol: 3, Çin: 1 } },
        { text: "Bahçede şenlik yapmak, resepsiyon düzenlemek", points: { Çin: 3, Bizans: 2 } }
      ]
    },
    {
      id: 5,
      text: "Bir elçi, komşu bir krallıktan geldi ve sana saygısızca bir mesaj iletti. Tepkin?",
      answers: [
        { text: "Elçiyi zincire vurdur, orduyu topla ve savaş ilan et", points: { Roma: 3 } },
        { text: "Elçiye aşırı kibarlık göster, hediyeler ver ve gerçek planlarını gizle", points: { Bizans: 3 } },
        { text: "Elçiye bir fincan kahve ikram et, sakin bir dille cevap ver ama kendini asla ezdirme", points: { Osmanlı: 3 } },
        { text: "Soğukkanlılıkla not al, sonra ordunu gönderip kenti ablukaya al", points: { Britanya: 3 } },
        { text: "Elçinin kellesini kes, ordunu topla ve o krallığı yerle bir et", points: { Moğol: 3 } },
        { text: "Elçiyi beklet, danışmanlarınla toplan, sonra zarif ama kesin bir reddiye gönder", points: { Çin: 3 } }
      ]
    },
    {
      id: 6,
      text: "Savaşta en etkili silahın nedir?",
      answers: [
        { text: "Kalkan ve kılıçla düzenli bir harekat", points: { Roma: 3 } },
        { text: "Casus ağlarının getirdiği avantajları kullanarak sinsice operasyon", points: { Bizans: 3 } },
        { text: "Ağır zırhlı askerler ve yoğun ateş gücü", points: { Osmanlı: 3 } },
        { text: "Güçlü donanma ve disiplinli piyadeler", points: { Britanya: 3 } },
        { text: "Hızlı ve hafif mobil birlikler", points: { Moğol: 3 } },
        { text: "Hile ve stratejik savaş", points: { Çin: 3 } }
      ]
    },
    {
      id: 7,
      text: "Gelecek nesillere nasıl bir miras bırakmak istersin?",
      answers: [
        { text: "Sağlam yollar, su kemerleri ve hukuk sistemi", points: { Roma: 3 } },
        { text: "Muhteşem mozaikler, binlerce yıl ayakta kalacak görkemli yapıtlar ve entrika dolu bir saray efsanesi", points: { Bizans: 3 } },
        { text: "Adalet, kültürel zenginlik ve ihtişamlı yapıtlar", points: { Osmanlı: 3 } },
        { text: "Küresel güç, hegemonik devlet", points: { Britanya: 3 } },
        { text: "Sınır tanımayan bir imparatorluk efsanesi ve korkusuz bir ulus", points: { Moğol: 3 } },
        { text: "Bilgelik dolu kitaplar ve uyum içinde bir toplum", points: { Çin: 3 } }
      ]
    },
    {
      id: 8,
      text: "Bir casusun var: senin için en değerli bilgi hangisi olur?",
      answers: [
        { text: "Düşman ordularının sayısı ve konumu", points: { Roma: 3 } },
        { text: "Saraydaki ihanet zinciri ve gizli ittifaklar", points: { Bizans: 3 } },
        { text: "Halkın memnuniyet düzeyi ve uzak topraklardaki sorunlar", points: { Osmanlı: 3 } },
        { text: "Rakiplerinin teknolojik yenilikleri ve ticaret rotaları", points: { Britanya: 3 } },
        { text: "Düşman liderlerin zayıflıkları ve aralarındaki anlaşmazlıklar", points: { Moğol: 3 } },
        { text: "Geleceği şekillendirmeye katkı sağlayacak ilimler", points: { Çin: 3 } }
      ]
    },
    {
      id: 9,
      text: "İmparatorlukta bir gelenek var ama çağdışı kalmış. Ne yaparsın?",
      answers: [
        { text: "Gelenek işe yaramıyorsa kanunla değiştiririm", points: { Roma: 3 } },
        { text: "Görünüşte korur, perde arkasından yavaşça etkisizleştiririm", points: { Bizans: 3 } },
        { text: "Din adamlarına danışır, halkın nabzını ölçüp reformu zamana yayarım", points: { Osmanlı: 3 } },
        { text: "Toplumu günümüz koşullarına göre dönüştürürüm", points: { Britanya: 3 } },
        { text: "Eskiyi yıkıp yerine kendi yasalarımı koyarım, gelenek falan umurumda olmaz", points: { Moğol: 3 } },
        { text: "Kadim öğretilerle yeni durumu harmanlar, dengeyi bulurum", points: { Çin: 3 } }
      ]
    },
    {
      id: 10,
      text: "Ölüm döşeğinde, son nefesinde aklından ne geçerdi?",
      answers: [
        { text: "İmparatorluğum ebedi olsun, ulusun ruhu asla ölmesin", points: { Roma: 3 } },
        { text: "İmparatorluğu kurtarmak için her yolu denedim, gerisi kader", points: { Bizans: 3 } },
        { text: "Adaletle hükmettim, dilerim ki ardımdan gelenler de aynı yolda yürüsün", points: { Osmanlı: 3 } },
        { text: "Dünya değişiyor, ama bayrağım dalgalanmaya devam edecek", points: { Britanya: 3 } },
        { text: "Bir lider olarak doğdum, büyük bir lider olarak ölüyorum, halkımın yolu açık olsun", points: { Moğol: 3 } },
        { text: "Uyum içinde, bilgece bir ömür sürdüm; imparatorluğum göklere yükselsin", points: { Çin: 3 } }
      ]
    }
  ],
  results: [
    {
      animal: "Roma",
      emoji: "🏛️",
      title: "Roma İmparatorluğu'nda Yaşamalıydın!",
      description: "Sen Roma İmparatorluğu vatandaşı olarak doğmalıydın! Disiplin, strateji ve ihtişam senin doğanda var. Senato kürsüsünde konuşma yaparken ya da lejyonlarının başında zafer kazanırken gözümüzde canlanıyorsun. 'Veni, vidi, vici' mottondur. Yollar, su kemerleri ve hukukla bir medeniyet inşa ederdin. 🏛️🌿"
    },
    {
      animal: "Bizans",
      emoji: "🏰",
      title: "Bizans İmparatorluğu'nda Yaşamalıydın!",
      description: "Entrikalarla dolu saray koridorları ve altın mozaiklerin arasında kaybolurdun. Bizans İmparatorluğu'nda yaşamalıydın; kurnazlık, diplomasi ve derin inançların seni başarıya götürürdü. Komploları bozar, ikonalarla zafer kazanır, gizli geçitlerde imparatorluğun kaderini yazardın. Gösteriş kadar gölge oyunlarını da seversin. 🏰🕊️"
    },
    {
      animal: "Osmanlı",
      emoji: "🕌",
      title: "Osmanlı İmparatorluğu'nda Yaşamalıydın!",
      description: "Adalet, hoşgörü ve ihtişamın birleştiği Osmanlı İmparatorluğu tam sana göre. Divan-ı Hümayun'da vezirlerle meseleleri çözer, seferlere çıkar, kahvehanede şiir dinlerken bulurdun kendini. Farklı kültürleri bir arada yaşatan bir cihan imparatorluğunun ruhunu taşıyorsun. Hem kılıcı hem kalemi iyi kullanırdın. 🕌☕"
    },
    {
      animal: "Britanya",
      emoji: "👑",
      title: "Britanya İmparatorluğu'nda Yaşamalıydın!",
      description: "Sanayi devriminin buharı, dünya denizlerindeki filolar ve çay saatinde zarif sohbetler... Sen Britanya İmparatorluğu'nda yaşamalıydın. Medeniyet, yenilik ve kendine has o soğukkanlılıkla dünyayı şekillendirirdin. Parlamento kürsüsünde sıkı bir konuşma yaparken ya da kraliyet donanmasıyla okyanusları aşarken hayal et kendini. 👑🌊"
    },
    {
      animal: "Moğol",
      emoji: "🏹",
      title: "Moğol İmparatorluğu'nda Yaşamalıydın!",
      description: "Rüzgarın, atların ve sonsuz bozkırların çocuğusun. Cengiz Han'ın ordusunda yer almak, çadırında kımız içip yeni seferler planlamak sana göre. Özgürlük, savaşçılık ve sadakat karakterini yansıtıyor. Atlarını eyerle, yayını kuşan; sen önüne çıkan her engeli yıldırım hızıyla aşan bir fatihsin! 🏹🐎"
    },
    {
      animal: "Çin",
      emoji: "🐉",
      title: "Çin İmparatorluğu'nda Yaşamalıydın!",
      description: "Bilgelik, uyum ve ihtişamlı bir medeniyet... Sen Çin İmparatorluğu'nda yaşamalıydın. Konfüçyüs'ün öğretileriyle ahlak bulur, imparatorun huzurunda zarif şiirler okur, ipek yolu kervanlarına katılırdın. Uzun vadeli düşünür, barut ve pusula gibi icatlarla tarihe yön verirdin. Ejderhanın ruhu içinde yaşıyor. 🐉🍵"
    }
  ]
};
