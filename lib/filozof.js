export default {
  id: "filozof-testi",
  title: "Stres Anında Verdiğin Tepkilere Göre Hangi Filozofsun?",
  category: "Psikoloji",
  description: "Hayat seni sıkıştırdığında ortaya çıkan kişiliğin hangi filozofa denk düşüyor? Öğren!",
  image: "🏛️",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Sabah alarmın çalmadı, işe geç kalıyorsun. İlk tepkin?",
      answers: [
        { text: "Bu kaos beni güçlendirir, koşarak çıkarım", points: { Nietzsche: 3, Diogenes: 1 } },
        { text: "Sakin ol, panikle bir şey çözülmez diye düşünürüm", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Geç kaldıysan kaldın, stres yapmaya değmez", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Zaten hayat acı, bir kötülük daha eklendi", points: { Schopenhauer: 3, Nietzsche: 1 } }
      ]
    },
    {
      id: 2,
      text: "Patronun toplantıda seni haksız yere eleştirdi. Ne yaparsın?",
      answers: [
        { text: "Soğukkanlılıkla sorular sorarak onu köşeye sıkıştırırım", points: { Sokrates: 3, Konfucyus: 2 } },
        { text: "Gülümserim, bir insanın beni küçültme gücü yok", points: { Diogenes: 3, Nietzsche: 1 } },
        { text: "Bu acıdan bir ders çıkarırım, her darbe çelikleştirir", points: { Nietzsche: 3, Schopenhauer: 1 } },
        { text: "Saygımı korur ama içimden düzeni sorgularım", points: { Konfucyus: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 3,
      text: "En yakın arkadaşın sırrını başkalarına söylemiş. Tepkin?",
      answers: [
        { text: "İnsanlar zaten güvenilmez, şaşırmam bile", points: { Schopenhauer: 3, Diogenes: 2 } },
        { text: "Onunla oturup neden yaptığını anlamaya çalışırım", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Umursamam, zaten sırlarıma bu kadar değer vermem", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Acı verir ama bu beni daha bağımsız yapar", points: { Nietzsche: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 4,
      text: "Trafik tıkanmış, bir saattir aynı yerdesin. Kafanın içi nasıl?",
      answers: [
        { text: "Bu boşa giden zamanı düşünmeye ayırırım", points: { Sokrates: 3, Nietzsche: 1 } },
        { text: "Modern hayatın saçmalığına gülerim", points: { Diogenes: 3, Schopenhauer: 2 } },
        { text: "Sabırla beklerim, düzen kendini gösterir", points: { Konfucyus: 3, Sokrates: 1 } },
        { text: "Sinirden çıldırırım, bu dünya çekilmez", points: { Schopenhauer: 3, Diogenes: 1 } }
      ]
    },
    {
      id: 5,
      text: "Birisi seni küçümseyen bir yorum yaptı. Cevabın?",
      answers: [
        { text: "Güler geçerim, başkalarının fikirleri beni tanımlamaz", points: { Diogenes: 3, Nietzsche: 2 } },
        { text: "Neden böyle düşündüğünü sorgulayan sorular sorarım", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Bu beni motive eder, kendimi kanıtlarım", points: { Nietzsche: 3, Konfucyus: 1 } },
        { text: "Üzülürüm ama şaşırmam, insanlar genelde kötüdür", points: { Schopenhauer: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 6,
      text: "Büyük bir sınavın var ama hiç çalışmadın. Gece yarısı ne yaparsın?",
      answers: [
        { text: "Son dakika baskısı beni tetikler, gece boyu çalışırım", points: { Nietzsche: 3, Sokrates: 1 } },
        { text: "Sınavlar hayatın anlamını belirlemez, yatarım", points: { Diogenes: 3, Schopenhauer: 2 } },
        { text: "Disiplinsizliğimin sonucu, hak ettiğim şeyi yaşarım", points: { Konfucyus: 3, Schopenhauer: 1 } },
        { text: "Endişeyle kıvranırım ama çalışmaya da başlayamam", points: { Schopenhauer: 3, Konfucyus: 1 } }
      ]
    },
    {
      id: 7,
      text: "Sevgilin seni terk etti. İlk hafta nasıl geçer?",
      answers: [
        { text: "Acıyı hissederim ama bu beni dönüştürür", points: { Nietzsche: 3, Schopenhauer: 2 } },
        { text: "Aşkın ne olduğunu, ilişkiyi analiz ederim", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Bağlanma zaten hataydı, özgürüm artık", points: { Diogenes: 3, Nietzsche: 1 } },
        { text: "Derin bir üzüntü, hayat zaten ıstırapla dolu", points: { Schopenhauer: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 8,
      text: "Herkes senin yanlış olduğunu söylüyor ama sen haklı olduğuna eminsin. Ne yaparsın?",
      answers: [
        { text: "Tek başıma da kalsam fikrimi savunurum", points: { Nietzsche: 3, Diogenes: 2 } },
        { text: "Karşı tarafın argümanlarını tek tek çürütürüm", points: { Sokrates: 3, Nietzsche: 1 } },
        { text: "Toplumun ne düşündüğü umurumda değil zaten", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Belki de toplumsal ahenk için geri adım atarım", points: { Konfucyus: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 9,
      text: "Çok çalıştığın bir projede sıfır takdir aldın. Hissin?",
      answers: [
        { text: "Takdir beklemek zayıflıktır, kendi onayım yeter", points: { Nietzsche: 3, Diogenes: 1 } },
        { text: "Neden takdir edilmediğimi sorgularım, ders çıkarırım", points: { Sokrates: 3, Konfucyus: 2 } },
        { text: "Baştan beri başkası için çalışmak saçmalıktı", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Hayal kırıklığı, insanlar nankörlüğe mahkum", points: { Schopenhauer: 3, Konfucyus: 1 } }
      ]
    },
    {
      id: 10,
      text: "Hayatının en zor döneminde kendine ne söylersin?",
      answers: [
        { text: "Beni yıkamayan şey güçlendirir", points: { Nietzsche: 3, Sokrates: 1 } },
        { text: "Bu da geçer, önemli olan kendimi tanımam", points: { Sokrates: 3, Konfucyus: 2 } },
        { text: "Hiçbir şeye ihtiyacım yok, özgürüm", points: { Diogenes: 3, Nietzsche: 1 } },
        { text: "Hayatın doğası bu, acı kaçınılmaz", points: { Schopenhauer: 3, Diogenes: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Nietzsche",
      emoji: "⚡",
      title: "Sen Nietzsche'sin!",
      description: "Stres seni yıkmaz, dönüştürür! Her darbeyi güce çevirirsin. Acıdan kaçmaz, onunla yüzleşirsin. Sürüden ayrılmaktan korkmazsın. Zorluklar seni Übermensch'e bir adım daha yaklaştırır. Etrafındakiler seni ya hayran kalarak ya da korkarak izler. ⚡🏛️"
    },
    {
      animal: "Sokrates",
      emoji: "🤔",
      title: "Sen Sokrates'sin!",
      description: "Stres anında bile soru sorarsın! Her şeyi anlamaya, çözümlemeye çalışırsın. Panik yerine mantık, öfke yerine diyalog seçersin. Tek bildiğin şey hiçbir şey bilmediğindir ama bu bile seni herkesten bir adım öne koyar. Bilgeliğin silahın, sabrın kalkanın. 🤔🏛️"
    },
    {
      animal: "Diogenes",
      emoji: "🛢️",
      title: "Sen Diogenes'sin!",
      description: "Stres mi? Hangi stres? Toplumun kurallarını, beklentilerini ve baskılarını umursamazsın. Bir fıçıda da yaşasan mutlu olursun. İnsanlar seni tuhaf bulur ama gizlice kıskanır. Özgürlüğün her şeyin üstünde. Büyük İskender bile seni etkileyemezdi. 🛢️🏛️"
    },
    {
      animal: "Konfucyus",
      emoji: "☯️",
      title: "Sen Konfüçyüs'sün!",
      description: "Stres anında bile düzeni ve ahengi korursun. Disiplin, saygı ve sorumluluk senin üç temel direğin. Kaos ortamında sakin kalır, toplumsal uyumu gözetirsin. İnsanlar zor zamanlarda sana danışır çünkü dengen bulaşıcıdır. ☯️🏛️"
    },
    {
      animal: "Schopenhauer",
      emoji: "🌧️",
      title: "Sen Schopenhauer'sın!",
      description: "Hayatın acı olduğunu bilirsin ve bunu kabullenmişsindir. Stres seni şaşırtmaz çünkü zaten en kötüsünü bekliyordundur. Ama bu karamsarlığın altında derin bir farkındalık yatar. Sanat, müzik ve düşünce sana sığınak olur. Kimse senden daha dürüst değildir. 🌧️🏛️"
    }
  ]
};
