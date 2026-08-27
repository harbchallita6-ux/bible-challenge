const questions = [
  {
    ar: "من بنى الفلك؟",
    en: "Who built the ark?",
    answers: [
      "إبراهيم — Abraham",
      "موسى — Moses",
      "نوح — Noah",
      "داود — David"
    ],
    correct: 2,
    level: "Easy"
  },

  {
    ar: "من كان أول إنسان؟",
    en: "Who was the first man?",
    answers: [
      "آدم — Adam",
      "نوح — Noah",
      "إبراهيم — Abraham",
      "موسى — Moses"
    ],
    correct: 0,
    level: "Easy"
  },

  {
    ar: "من كانت أم يسوع؟",
    en: "Who was the mother of Jesus?",
    answers: [
      "مرثا — Martha",
      "مريم — Mary",
      "أليصابات — Elizabeth",
      "راعوث — Ruth"
    ],
    correct: 1,
    level: "Easy"
  },

  {
    ar: "كم يومًا استغرق خلق الله للعالم قبل يوم الراحة؟",
    en: "How many days did God take to create the world before the day of rest?",
    answers: [
      "5",
      "6",
      "7",
      "10"
    ],
    correct: 1,
    level: "Easy"
  },

  {
    ar: "من شقّ البحر الأحمر بقوة الله؟",
    en: "Who, through God's power, parted the Red Sea?",
    answers: [
      "يشوع — Joshua",
      "هارون — Aaron",
      "موسى — Moses",
      "إيليا — Elijah"
    ],
    correct: 2,
    level: "Easy"
  },

  {
    ar: "أين وُلد يسوع؟",
    en: "Where was Jesus born?",
    answers: [
      "أورشليم — Jerusalem",
      "بيت لحم — Bethlehem",
      "الناصرة — Nazareth",
      "أريحا — Jericho"
    ],
    correct: 1,
    level: "Easy"
  },

  {
    ar: "كم كان عدد تلاميذ يسوع؟",
    en: "How many disciples did Jesus have?",
    answers: [
      "10",
      "12",
      "14",
      "7"
    ],
    correct: 1,
    level: "Easy"
  },

  {
    ar: "من هزم جليات؟",
    en: "Who defeated Goliath?",
    answers: [
      "شاول — Saul",
      "سليمان — Solomon",
      "داود — David",
      "صموئيل — Samuel"
    ],
    correct: 2,
    level: "Easy"
  },

  {
    ar: "ما أول سفر في الكتاب المقدس؟",
    en: "What is the first book of the Bible?",
    answers: [
      "الخروج — Exodus",
      "المزامير — Psalms",
      "التكوين — Genesis",
      "متى — Matthew"
    ],
    correct: 2,
    level: "Easy"
  },

  {
    ar: "ما آخر سفر في الكتاب المقدس؟",
    en: "What is the last book in the Bible?",
    answers: [
      "يهوذا — Jude",
      "أعمال الرسل — Acts",
      "رؤيا يوحنا — Revelation",
      "رومية — Romans"
    ],
    correct: 2,
    level: "Easy"
  },

  {
    ar: "من ابتلعته الحوتة الكبيرة؟",
    en: "Who was swallowed by a great fish?",
    answers: [
      "يونان — Jonah",
      "دانيال — Daniel",
      "بطرس — Peter",
      "أيوب — Job"
    ],
    correct: 0,
    level: "Easy"
  },

  {
    ar: "لمن أعطى الله الوصايا العشر؟",
    en: "To whom did God give the Ten Commandments?",
    answers: [
      "داود — David",
      "موسى — Moses",
      "يشوع — Joshua",
      "إبراهيم — Abraham"
    ],
    correct: 1,
    level: "Easy"
  },

  {
    ar: "من كان والد يوحنا المعمدان؟",
    en: "Who was the father of John the Baptist?",
    answers: [
      "يوسف — Joseph",
      "زكريا — Zechariah",
      "سمعان — Simeon",
      "نيقوديموس — Nicodemus"
    ],
    correct: 1,
    level: "Easy"
  },

  {
    ar: "ما أول معجزة ليسوع في إنجيل يوحنا؟",
    en: "What was Jesus' first miracle in the Gospel of John?",
    answers: [
      "شفاء أعمى — Healing a blind man",
      "المشي على الماء — Walking on water",
      "تحويل الماء إلى خمر — Turning water into wine",
      "إطعام الخمسة آلاف — Feeding the five thousand"
    ],
    correct: 2,
    level: "Easy"
  },

  {
    ar: "من خان يسوع؟",
    en: "Who betrayed Jesus?",
    answers: [
      "بطرس — Peter",
      "يهوذا الإسخريوطي — Judas Iscariot",
      "توما — Thomas",
      "يوحنا — John"
    ],
    correct: 1,
    level: "Easy"
  },

  {
    ar: "من كان معروفًا بقوته العظيمة؟",
    en: "Who was known for his great strength?",
    answers: [
      "شمشون — Samson",
      "جدعون — Gideon",
      "كالب — Caleb",
      "شاول — Saul"
    ],
    correct: 0,
    level: "Medium"
  },

  {
    ar: "من أصبح ملكًا بعد شاول؟",
    en: "Who became king after Saul?",
    answers: [
      "سليمان — Solomon",
      "داود — David",
      "صموئيل — Samuel",
      "يوناثان — Jonathan"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من بنى الهيكل في أورشليم؟",
    en: "Who built the Temple in Jerusalem?",
    answers: [
      "داود — David",
      "سليمان — Solomon",
      "موسى — Moses",
      "عزرا — Ezra"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من صعد إلى السماء في مركبة من نار؟",
    en: "Who was taken up to heaven in a chariot of fire?",
    answers: [
      "أليشع — Elisha",
      "إشعياء — Isaiah",
      "إيليا — Elijah",
      "إرميا — Jeremiah"
    ],
    correct: 2,
    level: "Medium"
  },

  {
    ar: "من كان أخا موسى؟",
    en: "Who was Moses' brother?",
    answers: [
      "هارون — Aaron",
      "يشوع — Joshua",
      "كالب — Caleb",
      "صموئيل — Samuel"
    ],
    correct: 0,
    level: "Medium"
  },

  {
    ar: "من كانت زوجة إبراهيم؟",
    en: "Who was Abraham's wife?",
    answers: [
      "راحيل — Rachel",
      "سارة — Sarah",
      "رفقة — Rebekah",
      "ليئة — Leah"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من كان ابن إبراهيم الذي وُلد له من سارة؟",
    en: "Who was Abraham's son born to Sarah?",
    answers: [
      "إسماعيل — Ishmael",
      "إسحاق — Isaac",
      "يعقوب — Jacob",
      "عيسو — Esau"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من كان والد يعقوب؟",
    en: "Who was Jacob's father?",
    answers: [
      "إسحاق — Isaac",
      "إبراهيم — Abraham",
      "يوسف — Joseph",
      "عيسو — Esau"
    ],
    correct: 0,
    level: "Medium"
  },

  {
    ar: "كم عدد إخوة يوسف؟",
    en: "How many brothers did Joseph have?",
    answers: [
      "10",
      "11",
      "12",
      "7"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من فسر أحلام فرعون؟",
    en: "Who interpreted Pharaoh's dreams?",
    answers: [
      "دانيال — Daniel",
      "يوسف — Joseph",
      "موسى — Moses",
      "هارون — Aaron"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من أُلقي في جب الأسود؟",
    en: "Who was thrown into the lions' den?",
    answers: [
      "دانيال — Daniel",
      "إرميا — Jeremiah",
      "حزقيال — Ezekiel",
      "نحميا — Nehemiah"
    ],
    correct: 0,
    level: "Medium"
  },

  {
    ar: "من مشى على الماء نحو يسوع؟",
    en: "Who walked on water toward Jesus?",
    answers: [
      "يوحنا — John",
      "بطرس — Peter",
      "يعقوب — James",
      "أندراوس — Andrew"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من أنكر يسوع ثلاث مرات؟",
    en: "Who denied Jesus three times?",
    answers: [
      "توما — Thomas",
      "بطرس — Peter",
      "يهوذا — Judas",
      "متى — Matthew"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من شكّ في قيامة يسوع حتى رأى الدليل؟",
    en: "Who doubted Jesus' resurrection until he saw evidence?",
    answers: [
      "فيلبس — Philip",
      "توما — Thomas",
      "أندراوس — Andrew",
      "يعقوب — James"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من كان أول شهيد في الكنيسة الأولى؟",
    en: "Who was the first martyr of the early church?",
    answers: [
      "استفانوس — Stephen",
      "بولس — Paul",
      "بطرس — Peter",
      "برنابا — Barnabas"
    ],
    correct: 0,
    level: "Medium"
  },

  {
    ar: "من كان اسمه شاول قبل أن يُعرف ببولس؟",
    en: "Who was known as Saul before being called Paul?",
    answers: [
      "بطرس — Peter",
      "بولس — Paul",
      "برنابا — Barnabas",
      "سيلا — Silas"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "أين دُعي التلاميذ مسيحيين لأول مرة؟",
    en: "Where were the disciples first called Christians?",
    answers: [
      "أورشليم — Jerusalem",
      "روما — Rome",
      "أنطاكية — Antioch",
      "كورنثوس — Corinth"
    ],
    correct: 2,
    level: "Medium"
  },

  {
    ar: "من كتب عددًا كبيرًا من رسائل العهد الجديد؟",
    en: "Who wrote many of the New Testament letters?",
    answers: [
      "بطرس — Peter",
      "بولس — Paul",
      "يوحنا — John",
      "لوقا — Luke"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من كان أخا مريم ومرثا؟",
    en: "Who was the brother of Mary and Martha?",
    answers: [
      "لعازر — Lazarus",
      "زكا — Zacchaeus",
      "نيقوديموس — Nicodemus",
      "بارتيماوس — Bartimaeus"
    ],
    correct: 0,
    level: "Medium"
  },

  {
    ar: "ماذا أطعم يسوع خمسة آلاف رجل؟",
    en: "What did Jesus use to feed the five thousand men?",
    answers: [
      "7 أرغفة و3 أسماك — 7 loaves and 3 fish",
      "5 أرغفة وسمكتان — 5 loaves and 2 fish",
      "رغيفان و5 أسماك — 2 loaves and 5 fish",
      "12 رغيفًا وسمكتان — 12 loaves and 2 fish"
    ],
    correct: 1,
    level: "Medium"
  },

  {
    ar: "من كان أول ملك على إسرائيل؟",
    en: "Who was the first king of Israel?",
    answers: [
      "داود — David",
      "سليمان — Solomon",
      "شاول — Saul",
      "صموئيل — Samuel"
    ],
    correct: 2,
    level: "Hard"
  },

  {
    ar: "كم سنة تاه بنو إسرائيل في البرية؟",
    en: "How many years did the Israelites wander in the wilderness?",
    answers: [
      "20",
      "30",
      "40",
      "70"
    ],
    correct: 2,
    level: "Hard"
  },

  {
    ar: "من كان أصغر أبناء يعقوب؟",
    en: "Who was Jacob's youngest son?",
    answers: [
      "يوسف — Joseph",
      "بنيامين — Benjamin",
      "يهوذا — Judah",
      "لاوي — Levi"
    ],
    correct: 1,
    level: "Hard"
  },

  {
    ar: "أي نبي واجه أنبياء البعل على جبل الكرمل؟",
    en: "Which prophet confronted the prophets of Baal on Mount Carmel?",
    answers: [
      "أليشع — Elisha",
      "إيليا — Elijah",
      "إشعياء — Isaiah",
      "إرميا — Jeremiah"
    ],
    correct: 1,
    level: "Hard"
  },

  {
    ar: "من هي المرأة التي أصبحت ملكة وأنقذت شعبها؟",
    en: "Who was the woman who became queen and saved her people?",
    answers: [
      "راعوث — Ruth",
      "أستير — Esther",
      "دبورة — Deborah",
      "حنة — Hannah"
    ],
    correct: 1,
    level: "Hard"
  },

  {
    ar: "من كان الملك الذي أمر بقتل أطفال بيت لحم عندما وُلد يسوع؟",
    en: "Which king ordered the killing of the children in Bethlehem when Jesus was born?",
    answers: [
      "هيرودس — Herod",
      "قيصر — Caesar",
      "بيلاطس — Pilate",
      "أغريباس — Agrippa"
    ],
    correct: 0,
    level: "Hard"
  },

  {
    ar: "من غسل يديه أثناء محاكمة يسوع؟",
    en: "Who washed his hands during Jesus' trial?",
    answers: [
      "هيرودس — Herod",
      "بيلاطس البنطي — Pontius Pilate",
      "قيافا — Caiaphas",
      "حنان — Annas"
    ],
    correct: 1,
    level: "Hard"
  },

  {
    ar: "كم يومًا صام يسوع في البرية؟",
    en: "How many days did Jesus fast in the wilderness?",
    answers: [
      "7",
      "30",
      "40",
      "50"
    ],
    correct: 2,
    level: "Hard"
  },

  {
    ar: "من كان رئيس الكهنة الذي شارك في محاكمة يسوع؟",
    en: "Who was the high priest involved in Jesus' trial?",
    answers: [
      "قيافا — Caiaphas",
      "غمالائيل — Gamaliel",
      "نيقوديموس — Nicodemus",
      "زكريا — Zechariah"
    ],
    correct: 0,
    level: "Hard"
  },

  {
    ar: "ما اسم الجبل الذي تلقّى عليه موسى الوصايا؟",
    en: "What was the name of the mountain where Moses received the commandments?",
    answers: [
      "جبل الكرمل — Mount Carmel",
      "جبل سيناء — Mount Sinai",
      "جبل صهيون — Mount Zion",
      "جبل الزيتون — Mount Olivet"
    ],
    correct: 1,
    level: "Hard"
  },

  {
    ar: "من كان القاضي الذي قاد جيش إسرائيل مع باراق؟",
    en: "Who was the judge who led Israel's army alongside Barak?",
    answers: [
      "دبورة — Deborah",
      "راعوث — Ruth",
      "أستير — Esther",
      "حنة — Hannah"
    ],
    correct: 0,
    level: "Hard"
  },

  {
    ar: "ما اسم المدينة التي سقطت أسوارها بعد أن دار حولها الإسرائيليون؟",
    en: "Which city's walls fell after the Israelites marched around it?",
    answers: [
      "أريحا — Jericho",
      "عاي — Ai",
      "حبرون — Hebron",
      "بيت إيل — Bethel"
    ],
    correct: 0,
    level: "Hard"
  },

  {
    ar: "من كان خادم أليشع؟",
    en: "Who was Elisha's servant?",
    answers: [
      "جيحزي — Gehazi",
      "يشوع — Joshua",
      "صموئيل — Samuel",
      "عوبديا — Obadiah"
    ],
    correct: 0,
    level: "Hard"
  },

  {
    ar: "من كتب سفر الرؤيا؟",
    en: "Who wrote the Book of Revelation?",
    answers: [
      "بطرس — Peter",
      "بولس — Paul",
      "يوحنا — John",
      "يعقوب — James"
    ],
    correct: 2,
    level: "Hard"
  },

  {
    ar: "ماذا قال يسوع على الصليب في إنجيل يوحنا قبل أن أسلم الروح؟",
    en: "What did Jesus say on the cross in the Gospel of John before giving up His spirit?",
    answers: [
      "قد أُكمل — It is finished",
      "أنا عطشان — I am thirsty",
      "يا أبتاه، اغفر لهم — Father, forgive them",
      "في يديك أستودع روحي — Into Your hands I commit My spirit"
    ],
    correct: 0,
    level: "Hard"
  }
];
