export default {
  id: "muhafazakar",
  title: "Ne Kadar Muhafazakarsın?",
  category: "Siyaset",
  description: "Geleneklere bakışın, modern hayat ve gündelik tercihlerinle muhafazakarlık seviyeni ölç! 14 soruda karakterinin pusulasını belirle.",
  image: "⚖️",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "Sabah uyandığında ilk işin ne olur?",
      answers: [
        {
          text: "Hemen telefonu elime alır, bildirimleri kontrol ederim.",
          points: { tam_sekuler: 3, sekuler: 1, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Ailemle kahvaltıya oturur, güne sohbetle başlarım.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Meditasyon veya egzersiz yapar, zihnimi açarım.",
          points: { tam_sekuler: 1, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Günün planını yapar, ajandamı kontrol ederim.",
          points: { tam_sekuler: 1, sekuler: 2, kismen_muhafazakar: 1, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Besmele çeker, abdest alır namazımı kılarım.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 1, tam_muhafazakar: 3 }
        }
      ]
    },
    {
      id: 2,
      text: "Hafta sonu kahvaltısında ne tercih edersin?",
      answers: [
        {
          text: "Zeytin, peynir, reçel, bal, tereyağı.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Smoothie bowl veya avokadolu tost gibi sağlıklı seçenekler.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Menemen veya omlet gibi sıcak bir şey.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 1 }
        },
        {
          text: "Dışarıda bir kafede kahve ve kruvasan.",
          points: { tam_sekuler: 2, sekuler: 3, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Çay ve ev yapımı börek, poğaça, ekmek.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        }
      ]
    },
    {
      id: 3,
      text: "Bayramlarda (Ramazan/Kurban) hissettiğin duygu?",
      answers: [
        {
          text: "Heyecanla beklerim, aile ziyaretleri, tatlılar, bayramlaşma benim için çok önemlidir.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Güzel bir tatil fırsatı olarak görürüm, dinlenmeye bakarım.",
          points: { tam_sekuler: 2, sekuler: 2, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Ne özel bir heyecanım vardır ne de reddederim; sıradan bir gün gibi geçer.",
          points: { tam_sekuler: 3, sekuler: 1, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Ailemle bir araya gelmek güzel ama bazı gelenekler bana eski moda gelir.",
          points: { tam_sekuler: 1, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Bayram benim için manevi bir arınma ve tövbe vaktidir.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 1, tam_muhafazakar: 3 }
        }
      ]
    },
    {
      id: 4,
      text: "Evlilik ve aile kurumu hakkında ne düşünüyorsun?",
      answers: [
        {
          text: "Evlilik kutsaldır ve hayatın temelidir; herkes evlenmeli ve çekirdek aile kurmalıdır.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Evlilik önemli ama herkesin kendi tercihidir; birlikte yaşamak da alternatif olabilir.",
          points: { tam_sekuler: 2, sekuler: 3, kismen_muhafazakar: 2, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Evlilik kurumu değişime açık olmalı, modern ilişki biçimleri desteklenmeli.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Geleneksel aile yapısını korumak gerek ama bireysel özgürlüklere de saygılıyım.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 0 }
        },
        {
          text: "Aile her şeydir, ama evlilik resmiyeti bazen gereksizdir.",
          points: { tam_sekuler: 2, sekuler: 3, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        }
      ]
    },
    {
      id: 5,
      text: "Çocukların eğitiminde hangisi daha önemli?",
      answers: [
        {
          text: "Disiplin, ahlak, geleneklerin öğretilmesi.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Yaratıcılık, özgür düşünce, sorgulama becerisi.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Hem akademik başarı hem sosyal beceriler dengeli olmalı.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 0 }
        },
        {
          text: "Çocuklar kendi ilgi alanlarını keşfetmeli, müfredat esnek olmalı.",
          points: { tam_sekuler: 2, sekuler: 3, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Din eğitimi de verilmeli, manevi değerler aşılanmalı.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 1, tam_muhafazakar: 3 }
        }
      ]
    },
    {
      id: 6,
      text: "Yemek kültüründe hangisine yakınsın?",
      answers: [
        {
          text: "Fast food veya dünya mutfağını denerim, geleneksel yemekler sıkıcı gelir.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Anneannemin tarifleriyle yapılan geleneksel yemekler vazgeçilmezimdir.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Her ikisinden de severim, ruh halime göre değişir.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 0 }
        },
        {
          text: "Yeni lezzetleri denemeyi severim ama geleneksel tatları da unutmam.",
          points: { tam_sekuler: 0, sekuler: 2, kismen_muhafazakar: 3, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Sadece helal/gıda kurallarına uygun, geleneksel beslenmeye dikkat ederim.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        }
      ]
    },
    {
      id: 7,
      text: "Giyim tarzın nasıldır?",
      answers: [
        {
          text: "Rahat, modern giyinir ve kendimce bir tarzı takip ederim.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Mütevazı ve geleneksel çizgilerde.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Kombinlerimi özenle seçerim, stilime düşkünümdür.",
          points: { tam_sekuler: 1, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Klasik ve zamansız parçaları tercih ederim; ne çok modern ne çok eski.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 1 }
        },
        {
          text: "Spor giyim rahatlığı her şeyden önemlidir.",
          points: { tam_sekuler: 3, sekuler: 1, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        }
      ]
    },
    {
      id: 8,
      text: "Tatil yaparken nereyi tercih edersin?",
      answers: [
        {
          text: "Yurtdışı, egzotik yerler, modern oteller.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Memleketim veya tarihi ve kültürel değerleri olan diğer yerler.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Deniz, kum, güneş; her yıl aynı yere giderim.",
          points: { tam_sekuler: 0, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 0 }
        },
        {
          text: "Doğayla iç içe, kamp, yürüyüş.",
          points: { tam_sekuler: 0, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Farklı kültürler tanımak için farklı yerlere seyahat ederim.",
          points: { tam_sekuler: 2, sekuler: 2, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        }
      ]
    },
    {
      id: 9,
      text: "Eve misafir geldiğinde nasıl bir tavrın olur?",
      answers: [
        {
          text: "Misafirperverlik benim için önemlidir, elimden geldiğince ağırlarım.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Misafir gelmesini pek sevmem, planlarımı bozar.",
          points: { tam_sekuler: 3, sekuler: 1, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Geleneklere uygun ağırlarım: başımın üstünde yerleri var.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Samimi ve rahat bir ortam yaratırım.",
          points: { tam_sekuler: 1, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Misafirlerin rahat etmesi için her şeyi ayarlarım, ama kendi rutinimden de ödün vermem.",
          points: { tam_sekuler: 2, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 0, tam_muhafazakar: 0 }
        }
      ]
    },
    {
      id: 10,
      text: "Teknoloji ve sosyal medya kullanımın nasıldır?",
      answers: [
        {
          text: "Sürekli telefonumdayım, sosyal medya hayatımın merkezindedir.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Teknolojiyi iş ve ihtiyaç için kullanırım, ama sosyal medyadan uzak dururum.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Sosyal medyayı takip ederim ama fazla vakit harcamam.",
          points: { tam_sekuler: 1, sekuler: 3, kismen_muhafazakar: 3, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Yeni teknolojilere açığım ama mahremiyetime dikkat ederim.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 3, tam_muhafazakar: 2 }
        },
        {
          text: "Teknolojiyi sadece gerekli durumlarda kullanır, ekran süresini kısıtlarım.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        }
      ]
    },
    {
      id: 11,
      text: "Konuşurken yabancı kelime kullanımın nasıldır?",
      answers: [
        {
          text: "Bol bol kullanırım, daha havalı (hawalı) duruyor.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Türkçe karşılıkları varsa onları kullanmaya çalışırım.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Ölçülü kullanırım, Türkçe daha iyi ifade edemeyeceksem.",
          points: { tam_sekuler: 1, sekuler: 3, kismen_muhafazakar: 2, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Dilin özüne önem veririm, yabancı kelimelerden anlatımın bozulmasına kulak asmadan kesinlikle kaçınırım.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Günlük hayatta fark etmez, önemli olan anlaşmak.",
          points: { tam_sekuler: 2, sekuler: 2, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        }
      ]
    },
    {
      id: 12,
      text: "Dini inanç ve ibadet alışkanlıkların nasıldır?",
      answers: [
        {
          text: "Düzenli ibadet ederim, din kurallarına yaşamımda sıkı sıkıya bağlıyım.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 1, tam_muhafazakar: 3 }
        },
        {
          text: "İnanırım ama ibadetleri zamanında yerine getiremem, esnek davranırım.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 1 }
        },
        {
          text: "Dinle ilgili sorgulayıcıyım, bazı kuralları fazla katı bulurum.",
          points: { tam_sekuler: 2, sekuler: 2, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Tamamen agnostik veya ateistim, dini inancım yok.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Maneviyata inanırım ama resmi din kurallarına pek uymam.",
          points: { tam_sekuler: 1, sekuler: 3, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        }
      ]
    },
    {
      id: 13,
      text: "Siyasi görüşlerin hakkında neler söyleyebilirsin?",
      answers: [
        {
          text: "Geleneksel değerleri, milliyetçiliği ve otoriteyi savunurum.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 0, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Liberal, özgürlükçü, bireysel hakların ön planda olmasını isterim.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Merkezde dururum, her iki taraftan da fikirlerim vardır.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Değişime açık ama köklü değerlerin de korunmasından yanayım.",
          points: { tam_sekuler: 1, sekuler: 2, kismen_muhafazakar: 2, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Siyasetle ilgilenmem, günlük hayatıma odaklanırım.",
          points: { tam_sekuler: 1, sekuler: 1, kismen_muhafazakar: 1, muhafazakar: 1, tam_muhafazakar: 1 }
        }
      ]
    },
    {
      id: 14,
      text: "Tarihe ve geçmişe nasıl bakarsın?",
      answers: [
        {
          text: "Geçmişteki gelenekler, görenekler ve yaşam tarzı örnek alınmalı, modern dünyaya uyarlanmalı.",
          points: { tam_sekuler: 0, sekuler: 0, kismen_muhafazakar: 1, muhafazakar: 2, tam_muhafazakar: 3 }
        },
        {
          text: "Geçmiş geride kaldı, ileriye bakmak gerek, eskiyi takıntı haline getirmem.",
          points: { tam_sekuler: 3, sekuler: 2, kismen_muhafazakar: 0, muhafazakar: 0, tam_muhafazakar: 0 }
        },
        {
          text: "Geçmişten ders çıkarır, geleceği şekillendiririm, ne eskiye köle olurum ne de yeniye.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 3, muhafazakar: 1, tam_muhafazakar: 0 }
        },
        {
          text: "Kültürel mirasımızı korumak şart, modernleşmeyle uyumlu olmalı.",
          points: { tam_sekuler: 0, sekuler: 1, kismen_muhafazakar: 2, muhafazakar: 2, tam_muhafazakar: 0 }
        },
        {
          text: "Tarih ilginç ama günümüz ihtiyaçlarına göre yaşamak daha önemli.",
          points: { tam_sekuler: 2, sekuler: 3, kismen_muhafazakar: 1, muhafazakar: 0, tam_muhafazakar: 0 }
        }
      ]
    }
  ],
  results: [
    {
      animal: "tam_sekuler",
      emoji: "🌞",
      title: "Sen tam bir sekülersin!",
      description: "Modern hayatın ritmi seninle atıyor! Geleneklerden bağımsız, özgürlükçü ve yenilikçi bir duruşun var. Kuralları sorgular, değişimi kucaklarsın. Din, aile ve toplum kalıpları sana dar gelir; kendi yolunu çizmekten çekinmezsin. Dünyaya açık, rasyonel ve bireyci birisin. 🌞✨"
    },
    {
      animal: "sekuler",
      emoji: "🌿",
      title: "Seküler bir insansın",
      description: "Geleneklere mesafelisin ama tamamen kopmuş da değilsin. Modern yaşamı benimsiyor, bireysel özgürlüklere önem veriyorsun. Dini ve kültürel kalıpları eleştirel gözle değerlendirirsin; ancak tamamen reddetmezsin. Dengeli, hoşgörülü ve çağdaş bir duruşun var. 🌿📱"
    },
    {
      animal: "kismen_muhafazakar",
      emoji: "⚖️",
      title: "Sen kısmen muhafazakarsın",
      description: "Gelenekle modern arasında bir köprü gibi duruyorsun. Her iki dünyanın da güzel yanlarını alıp harmanlıyorsun. Aile bağlarına önem verirsin ama değişime de açıksın. Ne tamamen eskiye bağlısın ne de yeniliğe kapalı; dengeli bir karaktere sahipsin. ⚖️🌺"
    },
    {
      animal: "muhafazakar",
      emoji: "🕌",
      title: "Sen muhafazakar bir insansın",
      description: "Geleneklerin, ailenin ve toplumsal değerlerin senin için büyük önemi var. Değişime temkinli yaklaşır, köklü yapıları korumayı tercih edersin. Disiplin, sadakat ve otorite senin için anlamlıdır. Toplumun temel taşlarının sağlam kalması gerektiğine inanırsın. 🕌🤝"
    },
    {
      animal: "tam_muhafazakar",
      emoji: "🏛️",
      title: "Sen tam bir muhafazakarsın!",
      description: "Köklü gelenekler, dini inanç ve aile bağları hayatının merkezinde yer alıyor. Değişimi tehlikeli görür, eskiye bağlılıkla hareket edersin. Otoriteye saygılı, düzenin ve istikrarın savunucususun. Toplumun manevi değerlerini korumak için gerektiğinde direnirsin. 📜🛡️"
    }
  ]
};
