export default {
  id: "filozof-testi",
  title: "Stres Anında Verdiğin Tepkilere Göre Hangi Filozofsun?",
  category: "Eğlence",
  description: "Hayat seni sıkıştırdığında ortaya çıkan kişiliğin hangi filozofa denk düşüyor? Öğren!",
  image: "🏛️",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Sabah alarmın çalmadı, işe geç kalıyorsun. İlk tepkin ne olurdu?",
      answers: [
        { text: "Bu kaos beni güçlendirir, koşarak evden çıkarım", points: { Nietzsche: 3, Diogenes: 1 } },
        { text: "Sakin ol, panikle bir şey çözülmez diye düşünür hazırlanıp çıkarım", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Geç kaldıysan kaldın, böyle ufak bir şey stres yapmaya değmez", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Zaten işe gitmek zorunda olmam yetmiyor gibi bir de bu sorun çıktı", points: { Schopenhauer: 3, Nietzsche: 1 } }
      ]
    },
    {
      id: 2,
      text: "Patronun toplantıda seni haksız yere eleştirdi. Ne yaparsın?",
      answers: [
        { text: "Soğukkanlılıkla cevap verir herkesin içinde bunu yaptığına pişman ederim", points: { Sokrates: 3, Konfucyus: 2 } },
        { text: "Gülümserim, o zavallıyı düşünerek kendimi mahvedemem", points: { Diogenes: 3, Nietzsche: 1 } },
        { text: "Bu durumdan da bir ders çıkarırım, her olumsuzluk beni daha iyi hale getirecektir", points: { Nietzsche: 3, Schopenhauer: 1 } },
        { text: "Saygımı korur ama içimden de söver sayarım", points: { Konfucyus: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 3,
      text: "En yakın arkadaşın senin için çok özel bir sırrını herkese söylemiş. Hiç sevmediğin birinden bunu duydun. Tepkin nasıl olurdu?",
      answers: [
        { text: "Güvenilmez olacaklarını bildiğim halde insanlara sırlarımı vermenin acısını hissederdim", points: { Schopenhauer: 3, Diogenes: 2 } },
        { text: "Onunla oturup bunu bana neden yaptığını anlamaya çalışırım", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Umursamam, zaten millete anlattıysam benim için çok da özel değildir", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Bir dahaki sefere bunu unutmamaya çalışırım", points: { Nietzsche: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 4,
      text: "Trafik tıkanmış, bir saattir aynı yerdesin. Kafanın içi nasıl?",
      answers: [
        { text: "Trafikte boşa giden zamanı düşünüp canımı sıkarım", points: { Sokrates: 3, Nietzsche: 1 } },
        { text: "Hayatın saçmalığını düşünüp uzun uzun dalarım", points: { Diogenes: 3, Schopenhauer: 2 } },
        { text: "Sabırla beklerim, ölmedik ya", points: { Konfucyus: 3, Sokrates: 1 } },
        { text: "Sinirden çıldırırım, sayıp söverim", points: { Schopenhauer: 3, Diogenes: 1 } }
      ]
    },
    {
      id: 5,
      text: "Birisi seninle alay etmeye kalkma cüretini gösterdi. Tepki nasıl olurdu?",
      answers: [
        { text: "Güler geçerim, başkalarının fikirleri beni tanımlamaz", points: { Diogenes: 3, Nietzsche: 2 } },
        { text: "Neden böyle düşündüğünü sorgulayan sorular sorarım", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Bu beni motive eder, ona kendimi kanıtlarım", points: { Nietzsche: 3, Konfucyus: 1 } },
        { text: "Üzülürüm ama şaşırmam, insanoğlu çiğ süt emmiş", points: { Schopenhauer: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 6,
      text: "Büyük bir sınavın var ama hiç çalışmadın. Gece yarısı ne yaparsın?",
      answers: [
        { text: "Son dakika baskısı beni tetikler, gece boyu çalışırım", points: { Nietzsche: 3, Sokrates: 1 } },
        { text: "Aptal bir sınav hayatın anlamını belirlemez, yatar uyurum", points: { Diogenes: 3, Schopenhauer: 2 } },
        { text: "Disiplinsizliğimin sonucu, hak ettiğim şeyi yaşamaya hazırlarım kendimi", points: { Konfucyus: 3, Schopenhauer: 1 } },
        { text: "Endişeyle kıvranırım ama çalışmaya da başlayamam", points: { Schopenhauer: 3, Konfucyus: 1 } }
      ]
    },
    {
      id: 7,
      text: "Sevgilin seni terk etti. İlk haftasonu geldi çattı. Nasıl hissediyorsun?",
      answers: [
        { text: "Acıyı hissederim ama bu beni güçlendirecektir", points: { Nietzsche: 3, Schopenhauer: 2 } },
        { text: "Aşkın ne olduğunu, ilişkimizi analiz ederek düşünüp dururum", points: { Sokrates: 3, Konfucyus: 1 } },
        { text: "Bağlanmam zaten hataydı, özgürüm artık", points: { Diogenes: 3, Nietzsche: 1 } },
        { text: "Derin bir üzüntü ile kendimi eve kapatırım, hüzünlü şarkılar dinler dururum", points: { Schopenhauer: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 8,
      text: "Herkes senin hata yaptığını söylüyor ama sen haklı olduğuna eminsin. Ne yaparsın?",
      answers: [
        { text: "Tek başıma da kalsam fikrimi savunurum", points: { Nietzsche: 3, Diogenes: 2 } },
        { text: "Karşı tarafın argümanlarını tek tek çürütürüm", points: { Sokrates: 3, Nietzsche: 1 } },
        { text: "Toplumun ne düşündüğü umurumda değil", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Belki de toplumsal uyun için geri adım atmam gerekiyordur", points: { Konfucyus: 3, Sokrates: 1 } }
      ]
    },
    {
      id: 9,
      text: "Çok çalıştığın bir projede sıfır takdir aldın. Aksine amirlerin önemli kazanımlar elde etti. Ne düşünürdün?",
      answers: [
        { text: "Takdir beklemek zayıflıktır, kendi onayım yeter", points: { Nietzsche: 3, Diogenes: 1 } },
        { text: "Neden takdir edilmediğimi sorgularım, bu durumdan ders çıkarırım", points: { Sokrates: 3, Konfucyus: 2 } },
        { text: "Baştan beri başkası için çalışmak saçmalıktı", points: { Diogenes: 3, Schopenhauer: 1 } },
        { text: "Şaşırmadım, ilk hayal kırıklığım değil, insanlar nankördür", points: { Schopenhauer: 3, Konfucyus: 1 } }
      ]
    },
    {
      id: 10,
      text: "Hayatının en zor döneminde kendini hangi slogan ile ifade ederdin",
      answers: [
        { text: "Beni yıkamayan şey güçlendirir", points: { Nietzsche: 3, Sokrates: 1 } },
        { text: "Bu da geçer, dayanmalısın", points: { Sokrates: 3, Konfucyus: 2 } },
        { text: "Hiçbir şeye ihtiyacım yok", points: { Diogenes: 3, Nietzsche: 1 } },
        { text: "Acı çekmek özgürlükse, özgürüz ikimiz de", points: { Schopenhauer: 3, Diogenes: 1 } }
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
      description: "Hayatın acı olduğunu bilirsin ve bunu kabullenmişsindir. Stres seni şaşırtmaz çünkü zaten en kötüsünü bekliyorsundur. Ama bu karamsarlığın altında derin bir farkındalık yatar. Sanat, müzik ve düşünce sana sığınak olur. Kimse senden daha dürüst değildir. 🌧️🏛️"
    }
  ]
};
