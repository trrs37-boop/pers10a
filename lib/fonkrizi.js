export default {
  id: "fonkrizi",
  title: "Hangi Fon Krizi Karakterisin?",
  category: "Siyaset",
  description: "Piyasalar sallanırken, dolar fırlarken sen hangi karaktere bürünüyorsun? 10 soruda kriz refleksini keşfet.",
  image: "💸",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Piyasalarda büyük bir çöküş haberi aldığında ilk 10 dakikada ne yaparsın?",
      answers: [
        { text: "Panik satışı yapanların malını ucuza toplar, fırsatı koklarım.", points: { FatmaBetul: 3 } },
        { text: "Arkadaşlarıma alım fırsatı bu kapın der ana paramdan anam kalana kadar almaya devam ederim", points: { Cevdet: 3 } },
        { text: "Önce sessizce kimin ne bildiğini öğrenir, sonra çevreme haber veririm.", points: { Emre: 3 } },
        { text: "Bu geçici bir dalgalanma, ülkemizi bölemeyeceksiniz diye tweet atarım", points: { Sahap: 3 } },
        { text: "Bu işin arkasından nelerin çıkacağını tahmin etmeye çalışırım", points: { Savci: 3 } }
      ]
    },
    {
      id: 2,
      text: "Bir arkadaş grubunda herkes kayıptan şikayet ediyor. Sen ne yaparsın?",
      answers: [
        { text: "\"Bakın, bu rakamlar aslında iyiye gidiyor\" der, vaatlerde bulunurum", points: { Sahap: 3 } },
        { text: "O kayıp gelmeden önce çoktan nakite geçtiğim için sanki zarardaymış gibi davranıp sinsice sızlanırım", points: { FatmaBetul: 3 } },
        { text: "Herkes kendi riskini bilerek bu işe girdi yapacak bir şey yok der suçu arkadaşlarıma atarım", points: { Cevdet: 3 } },
        { text: "Bu kayıpları yaşatan arkadaşın kim olduğunu teşhis edip ona güvenmemeleri için uyarıda bulunurum", points: { Savci: 3 } },
        { text: "\"Sizin anlamadığınız şey şu...\" diyip bir başka shitcoin/ponziye övgüler yağdırırım", points: { Emre: 3 } }
      ]
    },
    {
      id: 3,
      text: "Uzun vadeli bir yatırım planı yaparken seni en çok ne motive eder?",
      answers: [
        { text: "Rakamlarla ölçülebilir, planlı bir yol haritası", points: { Cevdet: 3 } },
        { text: "Kendi doğrumu savunmak, kimseye boyun eğmemek", points: { Savci: 3 } },
        { text: "Kısa yoldan paramı katlamayı tercih ederim", points: { FatmaBetul: 3 } },
        { text: "Kendi doğrumu savunmak, kimseye açıklama yapmamak", points: { Sahap: 3 } },
        { text: "Sistemin açıklarını bulup onları kullanmak", points: { Emre: 3 } }
      ]
    },
    {
      id: 4,
      text: "Krizde bir arkadaşın zor durumda; ona nasıl yaklaşırsın?",
      answers: [
        { text: "Konuyu espriye bağlar, ortamı yumuşatırım", points: { Savci: 3 } },
        { text: "Yanında dururum, bu işi yapanlardan da hesap soracağız diye sakinleştirmeye çalışırım", points: { Sahap: 3 } },
        { text: "Önce durumundan faydalanabilir miyim diye bakarım; yardım edersem karşılığı olmalı.", points: { FatmaBetul: 3 } },
        { text: "Ona yol gösteririm ama asıl planımı kendime saklarım; bilgi güçtür", points: { Emre: 3 } },
        { text: "Ne yapacağımı bilemem ama biliyormuş gibi görünmeyi iyi bilirim", points: { Cevdet: 3 } }
      ]
    },
    {
      id: 5,
      text: "Kamuoyuna bir açıklama yapman gerekse üslubun nasıl olur?",
      answers: [
        { text: "\"Bu geçici, birkaç ay içinde düzelir\" der, gündemi değiştiririm", points: { Sahap: 3 } },
        { text: "Kimsenin hiçbir şey anlamayacağı bir konuşma yaparak polemiğin sürmesini sağlarım", points: { Cevdet: 3 } },
        { text: "Sert ve doğrudan konuşurum; haksızlığı dile getirir, hesap sorarım", points: { Savci: 3 } },
        { text: "Net konuşur gibi davranır ama asıl mesajı satır arasında veririm; herkes duymak istediğini duyar", points: { Emre: 3 } },
        { text: "Kendimi garantiye alır, sonra mağduru oynar gözyaşı dökerim", points: { FatmaBetul: 3 } }
      ]
    },
    {
      id: 6,
      text: "Krizden çıkış için bir plan masaya yatırıldı; senin katkın ne olur?",
      answers: [
        { text: "Bence acele etmeyelim, itidalli olalım derim; planın içeriğine dair katkı sunmam", points: { Cevdet: 3 } },
        { text: "Adil olmayan maddeleri ısrarla öne sürer ve bunlara itiraz ederim", points: { Savci: 3 } },
        { text: "Planı satır satır okur, zayıf noktaları görür, buna göre strateji geliştiririm", points: { Emre: 3 } },
        { text: "Planın açıklarını bulur, kendi payımı büyütecek şekilde insanlara baskı uygularım", points: { FatmaBetul: 3 } },
        { text: "\"Her şey kontrol altında\" mesajı, verir uzaktan seyrederim", points: { Sahap: 3 } }
      ]
    },
    {
      id: 7,
      text: "Sana haksızlık yapıldığını düşündüğünde tepkin ne olur?",
      answers: [
        { text: "Çevremi kullanarak bu kişileri susturmaya çalışırım, asla doğrudan muhatap olmam", points: { Sahap: 3 } },
        { text: "Direkt karşı çıkarım; bu işin peşini bırakmam, sürekli gündem yaratırım", points: { Savci: 3 } },
        { text: "Ortalığı karıştırır, kendimi mağdur gösterir, asıl suçluyu başkası gibi gösteririm", points: { FatmaBetul: 3 } },
        { text: "Bu sorunun benden kaynaklanmadığını söyler, ucu açık ifadeler ile dikkatleri başka yere çekerim", points: { Cevdet: 3 } },
        { text: "Durumu analiz eder, bu işi yapanları pişman etmek için sinsice uğraşırım", points: { Emre: 3 } }
      ]
    },
    {
      id: 8,
      text: "Borsada bir dedikodu dolaşırken senin rolün ne olur?",
      answers: [
        { text: "Dedikoduyu çarpıtır, kendi lehime bir senaryoya dönüştürürüm", points: { Sahap: 3 } },
        { text: "Dedikoduyu yayarım ama kaynağı ben olmam; kimse bana dokunamaz", points: { FatmaBetul: 3 } },
        { text: "Kime nasıl servis edileceğini bilirim; dedikodu benim elimde silah olur", points: { Emre: 3 } },
        { text: "Canım yandıysa gerçeği ortaya çıkarır, hesabını sorarım", points: { Savci: 3 } },
        { text: "Bunların dedikodu olduğunu söyler derhal hiçbir sonuç çıkmayan bir açıklama yaparak dikkat dağıtırım", points: { Cevdet: 3 } }
      ]
    },
    {
      id: 9,
      text: "Kriz döneminde bir görev veya resmi pozisyon sana verilse nasıl kullanırsın?",
      answers: [
        { text: "Görevi bir sistem kurma aracı olarak görürüm; kimse fark etmeden kendi düzenimi kurarım", points: { Emre: 3 } },
        { text: "Bolca toplantı yapar hiçbir yetkilinin sorumlu olmayacağı bir sistem inşa ederim", points: { Cevdet: 3 } },
        { text: "Rakiplerime hesap sormak için bir fırsat olarak görüp gizli belgeleri medyaya veririm", points: { Savci: 3 } },
        { text: "Kendi ceplerimi ne kadar doldurabileceğimi düşünür, pozisyonları sadık kişilerle doldururum", points: { FatmaBetul: 3 } },
        { text: "Asla sorumluluk almam tüm yetkilerimi elimde tutarken sorumluluklarımı dağıtırım", points: { Sahap: 3 } }
      ]
    },
    {
      id: 10,
      text: "Bir krizin sonunda seni en çok ne mutlu eder?",
      answers: [
        { text: "Herkesin ağzının içine baktığı kişi olmak", points: { Emre: 3 } },
        { text: "Adaletin simgesi olarak görülmek", points: { Savci: 3 } },
        { text: "Kimseye hesap vermek zorunda olmamak", points: { Sahap: 3 } },
        { text: "En yüksek fayda ile işten sıyrılmak", points: { FatmaBetul: 3 } },
        { text: "Sorumluluk almadan mağdurların tepkilerini dindirebilmek", points: { Cevdet: 3 } }
      ]
    }
  ],
  results: [
    {
      animal: "FatmaBetul",
      emoji: "🕊️",
      title: "Fatma Betül Sayan Kaya",
      description: "Kriz senin için bir felaket değil, bir fırsat. Herkes paniklerken sen sessizce etrafı kollarsın; kimin düştüğünü, kimin ne kaybettiğini hesaplarsın. Yardım eder gibi görünür, aslında kendi payını büyütürsün. İntikamını soğuk kanlı alır, kimseye fark ettirmezsin. Hak yiyen deseler de sen kendini akıllı sanırsın. Ama unutma: en büyük payı almak, en büyük yalnızlığı da getirebilir. 🕊️"
    },
    {
      animal: "Cevdet",
      emoji: "📊",
      title: "Cevdet Yılmaz",
      description: "Ortalık yanarken sen sakin olun dersin. Ama aslında ne olduğunu tam olarak bilmezsin; rakamlar, detaylar, temel bilgiler... Senin için fazla karmaşık. Sorumluluk almaktan kaçınır, bana neden verdiler bilmiyorum diyerek imza atarsın. İtidal çağrın kulağa bilgece gelir ama çoğu zaman boş bir sestir. Belki de en büyük kriz, farkında olmadığın kendi cehaletindir."
    },
    {
      animal: "Emre",
      emoji: "🔥",
      title: "Emre Tezmen",
      description: "Piyasayı okumakta üstüne yok. Kimin ne bildiğini, kimin neye ihtiyacı olduğunu bilirsin; ağın geniş, gözün keskin. Kriz anlarında öne çıkmazsın ama asıl yönlendiren hep sensindir. Kurnaz derler, sen buna zeki dersin. Bilgiyi silah gibi kullanır, kimseye fark ettirmeden kendi düzenini kurarsın. Ama bu oyunlarda bir gün kendi ağına takılma riskini de taşırsın. 🔍"
    },
    {
      animal: "Sahap",
      emoji: "🗿",
      title: "Şahap Kavcıoğlu",
      description: "Yetkiyi eline geçirdiğinde onu kendi çıkarına kullanırsın. İşi ehline değil, sana yakın olana verirsin. Ortalığı bulandırır, kendini mağdur gösterir, asıl suçluyu başkası gibi gösterirsin. Her şey kontrol altında derken aslında kendi kaçış planını hazırlıyorsundur. Manipülasyon senin dilin, üçkağıtçılık senin imzan. Ama şunu unutma: en iyi manipülatör bile bir gün maskesinin düştüğünü görür."
    },
    {
      animal: "Savci",
      emoji: "🎤",
      title: "Savcı Sayan",
      description: "Canın yanmış, hem de derinden. Haksızlığa tahammülün yok; birinin hakkı yendiğinde içinden bir şey kopar. Kriz anlarında susmaz, hesap sorarsın. Rövanş senin için intikam değil, adaletin tecellisi. Sert, doğrudan ve cesursun. Ama bazen o yara seni öyle yönlendirir ki, sadece geçmişin hesabını sorarken bugünün fırsatlarını kaçırabilirsin."
    }
  ]
};
