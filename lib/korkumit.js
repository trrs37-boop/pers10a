export default {
  id: "korkumit",
  title: "En Büyük Korkularına Göre Hangi Yunan Mitolojik Varlığısın?",
  category: "Gizem",
  description: "Karanlık korkuların, seni hangi efsanevi yaratığa dönüştürüyor?",
  image: "⚡",
  attempts: 0,
  questions: [
    {
      id: 1,
      text: "En korktuğun şey nedir?",
      answers: [
        { text: "Yalnız kalmak, terk edilmek", points: { Medusa: 3, Satyr: 1 } },
        { text: "Kontrolü kaybetmek, tuzağa düşmek", points: { Minotaur: 3, Cerberus: 1 } },
        { text: "Yükseklik ve düşmek", points: { Griffin: 3, Medusa: 1 } },
        { text: "Karanlık ve bilinmezlik", points: { Cerberus: 3, Minotaur: 1 } },
        { text: "Özgürlüğümü kaybetmek, bağlanmak", points: { Satyr: 3, Griffin: 1 } }
      ]
    },
    {
      id: 2,
      text: "Bir labirentte mahsur kalsan ilk tepkin ne olur?",
      answers: [
        { text: "Sakinleşir, mantıklı bir çıkış yolu ararım", points: { Griffin: 3, Minotaur: 1 } },
        { text: "Panikler, etrafa saldırırım", points: { Minotaur: 3, Cerberus: 2 } },
        { text: "Sesimi çıkarmaz, saklanır, bir zayıflık ararım", points: { Medusa: 3, Satyr: 1 } },
        { text: "Kaçmaya çalışır, her köşeyi denerim", points: { Satyr: 3, Griffin: 2 } },
        { text: "Kaderime razı olur, çıkışı bulmaya çalışmam", points: { Cerberus: 3, Medusa: 1 } }
      ]
    },
    {
      id: 3,
      text: "Karanlık bir odada gözlerini açtığında ne yaparsın?",
      answers: [
        { text: "Hemen ışığı ararım, görmek isterim", points: { Griffin: 3, Medusa: 1 } },
        { text: "Olduğum yerde kalır, ne olduğunu anlamaya çalışırım", points: { Cerberus: 3, Minotaur: 2 } },
        { text: "Korkarım, gözlerimi kapatıp dua ederim", points: { Medusa: 3, Satyr: 1 } },
        { text: "Etrafı hisseder, tanımadığım bir yerde panik yaparım", points: { Minotaur: 3, Cerberus: 1 } },
        { text: "Özgürlüğümü isterim, kapıları zorlarım", points: { Satyr: 3, Griffin: 2 } }
      ]
    },
    {
      id: 4,
      text: "İnsanlara güvenir misin?",
      answers: [
        { text: "Hayır, herkes beni aldatabilir", points: { Medusa: 3, Satyr: 2 } },
        { text: "Sadece kendi çıkarları için güvenirim", points: { Minotaur: 3, Cerberus: 1 } },
        { text: "Evet, ama yükseklerden düşmekten korkarım", points: { Griffin: 3, Medusa: 1 } },
        { text: "Güvenirim, ama özgürlüğümü kısıtlarlarsa isyan ederim", points: { Satyr: 3, Griffin: 2 } },
        { text: "Hiç kimseye güvenmem, karanlık her yerde", points: { Cerberus: 3, Minotaur: 1 } }
      ]
    },
    {
      id: 5,
      text: "Ölümden sonra ne olacağını düşünüyorsun?",
      answers: [
        { text: "Karanlık, sonsuz bir hiçlik", points: { Cerberus: 3, Medusa: 1 } },
        { text: "Başka bir dünya, ama zorlu sınavlar", points: { Minotaur: 3, Griffin: 2 } },
        { text: "Ruhum özgürleşir, bedenimden kurtulur", points: { Satyr: 3, Cerberus: 1 } },
        { text: "Yeniden doğuş, dönüşüm", points: { Medusa: 3, Satyr: 2 } },
        { text: "Bir anlamı yok, sadece son", points: { Griffin: 3, Minotaur: 1 } }
      ]
    },
    {
      id: 6,
      text: "En büyük zayıflığın ne olurdu?",
      answers: [
        { text: "Duygularıma yenik düşmek, aşk", points: { Medusa: 3, Satyr: 2 } },
        { text: "Öfke ve kontrolsüzlük", points: { Minotaur: 3, Cerberus: 1 } },
        { text: "Gurur, fazla kendine güven", points: { Griffin: 3, Medusa: 1 } },
        { text: "Başkalarına güvenmek, ihanete uğramak", points: { Cerberus: 3, Satyr: 2 } },
        { text: "Özgürlüğüme düşkünlük, sınırlara dayanamamak", points: { Satyr: 3, Griffin: 1 } }
      ]
    },
    {
      id: 7,
      text: "Bir ormanda kaybolsan en çok neyden korkarsın?",
      answers: [
        { text: "Vahşi hayvanlardan, saldırıya uğramaktan", points: { Minotaur: 3, Cerberus: 2 } },
        { text: "Yalnızlıktan, yardım alamamaktan", points: { Medusa: 3, Satyr: 1 } },
        { text: "Yüksek uçurumlardan, düşmekten", points: { Griffin: 3, Medusa: 1 } },
        { text: "Karanlıktan, görünmeyen tehlikelerden", points: { Cerberus: 3, Minotaur: 2 } },
        { text: "Sonsuz döngüden, çıkış bulamamaktan", points: { Satyr: 3, Griffin: 1 } }
      ]
    },
    {
      id: 8,
      text: "Bir sır saklayabilir misin?",
      answers: [
        { text: "Evet, ama içimde kemirir, zehirler", points: { Medusa: 3, Griffin: 1 } },
        { text: "Zor, sinirlerime hakim olamam", points: { Minotaur: 3, Cerberus: 2 } },
        { text: "En iyi saklayıcı benim, asla açığa çıkmaz", points: { Griffin: 3, Medusa: 1 } },
        { text: "Saklarım ama özgürlüğüm için kullanırım", points: { Satyr: 3, Minotaur: 1 } },
        { text: "Saklamak benim işim, bekçi ruhum var", points: { Cerberus: 3, Satyr: 2 } }
      ]
    },
    {
      id: 9,
      text: "Bir kahraman sana doğru geliyor, ne yaparsın?",
      answers: [
        { text: "Onu taşa çeviririm, tehdit ortadan kalksın", points: { Medusa: 3, Cerberus: 1 } },
        { text: "Ona meydan okur, savaşırım", points: { Minotaur: 3, Griffin: 2 } },
        { text: "Uçar, kaçar, yükseklere sığınırım", points: { Griffin: 3, Medusa: 1 } },
        { text: "Onu kandırır, yanıltır, tuzağa düşürürüm", points: { Satyr: 3, Minotaur: 2 } },
        { text: "Onun geçmesine izin vermem, bekçi ruhum", points: { Cerberus: 3, Satyr: 1 } }
      ]
    },
    {
      id: 10,
      text: "Hayatından memnun musun?",
      answers: [
        { text: "Hayır, ihanetlerle dolu, kimseye güvenemiyorum", points: { Medusa: 3, Cerberus: 2 } },
        { text: "Değilim, hep bir labirent gibi, çıkış yok", points: { Minotaur: 3, Satyr: 1 } },
        { text: "Evet, yükseklerden bakmak çok güzel", points: { Griffin: 3, Medusa: 1 } },
        { text: "Kısmen, özgür olmadıkça mutlu değilim", points: { Satyr: 3, Griffin: 2 } },
        { text: "Bilmiyorum, karanlık ve belirsiz", points: { Cerberus: 3, Minotaur: 1 } }
      ]
    }
  ],
  results: [
    {
      animal: "Medusa",
      emoji: "🐍",
      title: "Sen Medusa'sın!",
      description: "Korkunun gözlerinde saklı. İhanete uğramış, yalnız ve kırgınsın. İnsanlara güvenmekte zorlanıyor, onları taşa çevirecek kadar sertleşmişsin. Ama içinde hâlâ anlaşılmayı bekleyen bir yan var. Dikkat et, göz göze gelmek tehlikeli! 🐍⚡"
    },
    {
      animal: "Minotaur",
      emoji: "🐂",
      title: "Sen Minotaur'sun!",
      description: "Kontrol kaybı ve öfke seni ele geçirir. Labirent gibi karmaşık duygular içinde boğulur, çıkış arayışında saldırganlaşırsın. Vahşi ve güçlüsün, ama aslında tuzaklardan ve yalnızlıktan korkarsın. Kimse seni durduramaz. 🐂🔥"
    },
    {
      animal: "Griffin",
      emoji: "🦅",
      title: "Sen Griffin'sin!",
      description: "Yükseklerden bakmayı seven, gururlu ve özgür ruhlusun. En büyük korkun düşmek ve itibarını kaybetmek. Başkalarına göz kulak olur ama kimse sana yaklaşamaz. Hem aslan cesareti hem kartal görüşüne sahipsin. 🦅👑"
    },
    {
      animal: "Satyr",
      emoji: "🐐",
      title: "Sen Satyr'sin!",
      description: "Özgürlüğüne düşkün, eğlenceyi ve doğayı seven birisin. En büyük korkun bağlanmak, sınırlanmak ve sıkışmak. Kurnaz, uyanık ve kıvrak zekalısın. Her tuzaktan sıyrılır, dans ederek kaçarsın. Özgür ruhlu bir yaratıksın. 🐐🎶"
    },
    {
      animal: "Cerberus",
      emoji: "🐕",
      title: "Sen Cerberus'sun!",
      description: "Karanlık ve ölümle iç içesin. Sadık, güçlü ve korkutucusun. En büyük korkun bilinmezlik ve yalnızlık, ama kimse bunu bilmez. Bekçi ruhunla her girişi korursun. Üç başınla farklı yönleri görür, tehlikeleri erken sezersin. Ama içinde bir yerlerde sevgi arayışı var. 🐕🌑"
    }
  ]
};
