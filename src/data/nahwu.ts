export interface GrammarTopic {
  id: string;
  title: string;
  titleAr: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  content: {
    explanation: string;
    rules: string[];
    examples: {
      arabic: string;
      indonesian: string;
      transliteration: string;
      analysis?: string;
    }[];
  };
  exercises?: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
}

export const nahwuTopics: GrammarTopic[] = [
  {
    id: "jumlah-ismiyyah",
    title: "Jumlah Ismiyyah",
    titleAr: "الجُمْلَة الاِسْمِيَّة",
    level: "beginner",
    description: "Kalimat yang dimulai dengan kata benda (isim)",
    content: {
      explanation: "Jumlah Ismiyyah adalah kalimat yang dimulai dengan kata benda (isim). Terdiri dari Mubtada' (مُبْتَدَأ) sebagai subjek dan Khabar (خَبَر) sebagai predikat.",
      rules: [
        "Mubtada' harus ma'rifah (definitif) atau nakirah yang memiliki keterangan",
        "Khabar bisa berupa isim, jumlah fi'liyyah, atau jumlah ismiyyah",
        "Mubtada' dan Khabar harus sesuai dalam jumlah (tunggal/dual/jamak) dan jenis (mudzakkar/muannats)",
        "Mubtada' biasanya marfu' (dibaca dhammah)",
        "Khabar juga marfu' jika berupa isim mufrad"
      ],
      examples: [
        {
          arabic: "الْكِتَابُ جَدِيدٌ",
          indonesian: "Buku itu baru",
          transliteration: "al-kitābu jadīdun",
          analysis: "الْكِتَابُ (mubtada') + جَدِيدٌ (khabar)"
        },
        {
          arabic: "الطَّالِبُ فِي الْفَصْلِ",
          indonesian: "Siswa itu di dalam kelas",
          transliteration: "aṭ-ṭālibu fī al-faṣli",
          analysis: "الطَّالِبُ (mubtada') + فِي الْفَصْلِ (khabar - jar majrur)"
        },
        {
          arabic: "مُحَمَّدٌ مُدَرِّسٌ",
          indonesian: "Muhammad adalah guru",
          transliteration: "muḥammadun mudarrisun",
          analysis: "مُحَمَّدٌ (mubtada') + مُدَرِّسٌ (khabar)"
        }
      ]
    },
    exercises: [
      {
        question: "Manakah yang merupakan Jumlah Ismiyyah?",
        options: ["كَتَبَ الطَّالِبُ", "الطَّالِبُ كَتَبَ", "اُكْتُبْ", "يَكْتُبُ"],
        correct: 1,
        explanation: "الطَّالِبُ كَتَبَ adalah Jumlah Ismiyyah karena dimulai dengan isim (الطَّالِبُ)"
      }
    ]
  },
  {
    id: "jumlah-filiyyah",
    title: "Jumlah Fi'liyyah",
    titleAr: "الجُمْلَة الفِعْلِيَّة",
    level: "beginner",
    description: "Kalimat yang dimulai dengan kata kerja (fi'il)",
    content: {
      explanation: "Jumlah Fi'liyyah adalah kalimat yang dimulai dengan kata kerja (fi'il). Terdiri dari Fi'il (فِعْل) sebagai kata kerja, Fa'il (فَاعِل) sebagai pelaku, dan kadang Maf'ul Bih (مَفْعُول بِه) sebagai objek.",
      rules: [
        "Fi'il harus sesuai dengan fa'il dalam jenis (mudzakkar/muannats)",
        "Fa'il selalu marfu' (dibaca dhammah)",
        "Maf'ul bih selalu manshub (dibaca fathah)",
        "Urutan standar: Fi'il + Fa'il + Maf'ul Bih",
        "Fi'il bisa madhi (lampau), mudhari' (sekarang/akan), atau amr (perintah)"
      ],
      examples: [
        {
          arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ",
          indonesian: "Siswa menulis pelajaran",
          transliteration: "kataba aṭ-ṭālibu ad-darsa",
          analysis: "كَتَبَ (fi'il) + الطَّالِبُ (fa'il) + الدَّرْسَ (maf'ul bih)"
        },
        {
          arabic: "يَقْرَأُ أَحْمَدُ الْقُرْآنَ",
          indonesian: "Ahmad membaca Al-Quran",
          transliteration: "yaqra'u aḥmadu al-qur'āna",
          analysis: "يَقْرَأُ (fi'il mudhari') + أَحْمَدُ (fa'il) + الْقُرْآنَ (maf'ul bih)"
        },
        {
          arabic: "ذَهَبَتْ فَاطِمَةُ",
          indonesian: "Fatimah pergi",
          transliteration: "dhahabat fāṭimatu",
          analysis: "ذَهَبَتْ (fi'il + ta' ta'nits) + فَاطِمَةُ (fa'il muannats)"
        }
      ]
    }
  },
  {
    id: "irab",
    title: "I'rab (Tanda Baca)",
    titleAr: "الإِعْرَاب",
    level: "beginner",
    description: "Perubahan akhir kata sesuai kedudukan dalam kalimat",
    content: {
      explanation: "I'rab adalah perubahan harakat atau huruf di akhir kata sesuai dengan kedudukannya dalam kalimat. Ada tiga jenis i'rab utama: Rafa' (مَرْفُوع), Nashab (مَنْصُوب), dan Jarr (مَجْرُور).",
      rules: [
        "Rafa' (ــُـ): untuk mubtada', khabar, fa'il - tanda: dhammah, waw, alif",
        "Nashab (ــَـ): untuk maf'ul bih, hal, tamyiz - tanda: fathah, alif, ya', kasrah",
        "Jarr (ــِـ): setelah huruf jarr - tanda: kasrah, ya', fathah",
        "Jazm (ــْـ): untuk fi'il mudhari' setelah huruf jazm - tanda: sukun",
        "Kata yang mu'rab (berubah) vs mabni (tetap)"
      ],
      examples: [
        {
          arabic: "جَاءَ الطَّالِبُ",
          indonesian: "Siswa datang",
          transliteration: "jā'a aṭ-ṭālibu",
          analysis: "الطَّالِبُ marfu' karena fa'il (dhammah)"
        },
        {
          arabic: "رَأَيْتُ الطَّالِبَ",
          indonesian: "Saya melihat siswa",
          transliteration: "ra'aytu aṭ-ṭāliba",
          analysis: "الطَّالِبَ manshub karena maf'ul bih (fathah)"
        },
        {
          arabic: "مَرَرْتُ بِالطَّالِبِ",
          indonesian: "Saya melewati siswa",
          transliteration: "marartu bi-ṭ-ṭālibi",
          analysis: "بِالطَّالِبِ majrur karena huruf jarr بِ (kasrah)"
        }
      ]
    }
  },
  {
    id: "huruf-jarr",
    title: "Huruf Jarr",
    titleAr: "حُرُوف الجَرّ",
    level: "beginner",
    description: "Preposisi dalam bahasa Arab",
    content: {
      explanation: "Huruf Jarr adalah kata depan yang menyebabkan kata setelahnya menjadi majrur (berbunyi kasrah). Setiap huruf jarr memiliki makna dan penggunaan khusus.",
      rules: [
        "Kata setelah huruf jarr selalu majrur",
        "Huruf jarr + isim = jar wa majrur",
        "Jar wa majrur bisa menjadi khabar, hal, atau keterangan",
        "Beberapa huruf jarr memiliki makna ganda",
        "Huruf jarr tidak bisa berdiri sendiri"
      ],
      examples: [
        {
          arabic: "فِي الْبَيْتِ",
          indonesian: "Di dalam rumah",
          transliteration: "fī al-bayti",
          analysis: "فِي (di dalam) + الْبَيْتِ (majrur)"
        },
        {
          arabic: "مِنَ الْمَدْرَسَةِ",
          indonesian: "Dari sekolah",
          transliteration: "mina al-madrasati",
          analysis: "مِنْ (dari) + الْمَدْرَسَةِ (majrur)"
        },
        {
          arabic: "إِلَى الْمَسْجِدِ",
          indonesian: "Ke masjid",
          transliteration: "ilā al-masjidi",
          analysis: "إِلَى (ke) + الْمَسْجِدِ (majrur)"
        },
        {
          arabic: "عَلَى الطَّاوِلَةِ",
          indonesian: "Di atas meja",
          transliteration: "'alā aṭ-ṭāwilati",
          analysis: "عَلَى (di atas) + الطَّاوِلَةِ (majrur)"
        },
        {
          arabic: "بِالْقَلَمِ",
          indonesian: "Dengan pena",
          transliteration: "bi-l-qalami",
          analysis: "بِ (dengan) + الْقَلَمِ (majrur)"
        }
      ]
    }
  },
  {
    id: "mudzakkar-muannats",
    title: "Mudzakkar dan Muannats",
    titleAr: "المُذَكَّر والمُؤَنَّث",
    level: "beginner",
    description: "Jenis kelamin dalam tata bahasa Arab",
    content: {
      explanation: "Dalam bahasa Arab, setiap kata benda memiliki jenis kelamin: Mudzakkar (مُذَكَّر) untuk maskulin dan Muannats (مُؤَنَّث) untuk feminin.",
      rules: [
        "Muannats biasanya berakhiran ة (ta' marbuthah)",
        "Ada muannats lafzhi (terlihat) dan muannats ma'nawi (makna)",
        "Kata sifat harus sesuai dengan jenis kelamin kata bendanya",
        "Fi'il untuk muannats ditambah ت di awal (mudhari') atau akhir (madhi)",
        "Beberapa kata muannats tidak berakhiran ة seperti شَمْس (matahari)"
      ],
      examples: [
        {
          arabic: "طَالِبٌ جَدِيدٌ",
          indonesian: "Siswa baru (laki-laki)",
          transliteration: "ṭālibun jadīdun",
          analysis: "Mudzakkar + sifat mudzakkar"
        },
        {
          arabic: "طَالِبَةٌ جَدِيدَةٌ",
          indonesian: "Siswi baru (perempuan)",
          transliteration: "ṭālibatun jadīdatun",
          analysis: "Muannats + sifat muannats (dengan ة)"
        },
        {
          arabic: "كَتَبَ الوَلَدُ",
          indonesian: "Anak laki-laki menulis",
          transliteration: "kataba al-waladu",
          analysis: "Fi'il untuk mudzakkar"
        },
        {
          arabic: "كَتَبَتْ البِنْتُ",
          indonesian: "Anak perempuan menulis",
          transliteration: "katabat al-bintu",
          analysis: "Fi'il + ت untuk muannats"
        }
      ]
    }
  },
  {
    id: "mufrad-mutsanna-jamak",
    title: "Mufrad, Mutsanna, dan Jamak",
    titleAr: "المُفْرَد والمُثَنَّى والجَمْع",
    level: "intermediate",
    description: "Bentuk tunggal, dual, dan jamak",
    content: {
      explanation: "Bahasa Arab memiliki tiga bentuk bilangan: Mufrad (مُفْرَد) untuk tunggal, Mutsanna (مُثَنَّى) untuk dua, dan Jamak (جَمْع) untuk tiga atau lebih.",
      rules: [
        "Mutsanna mudzakkar: tambahkan ان (rafa') atau ين (nashab/jarr)",
        "Mutsanna muannats: tambahkan تان (rafa') atau تين (nashab/jarr)",
        "Jamak mudzakkar salim: tambahkan ون (rafa') atau ين (nashab/jarr)",
        "Jamak muannats salim: tambahkan ات",
        "Jamak taksir: perubahan bentuk kata (tidak beraturan)"
      ],
      examples: [
        {
          arabic: "مُسْلِمٌ - مُسْلِمَانِ - مُسْلِمُونَ",
          indonesian: "Muslim (1) - Muslim (2) - Muslim (banyak)",
          transliteration: "muslimun - muslimāni - muslimūna",
          analysis: "Mufrad - Mutsanna - Jamak Mudzakkar Salim"
        },
        {
          arabic: "مُسْلِمَةٌ - مُسْلِمَتَانِ - مُسْلِمَاتٌ",
          indonesian: "Muslimah (1) - Muslimah (2) - Muslimah (banyak)",
          transliteration: "muslimatun - muslimatāni - muslimātun",
          analysis: "Mufrad - Mutsanna - Jamak Muannats Salim"
        },
        {
          arabic: "كِتَابٌ - كِتَابَانِ - كُتُبٌ",
          indonesian: "Buku (1) - Buku (2) - Buku (banyak)",
          transliteration: "kitābun - kitābāni - kutubun",
          analysis: "Mufrad - Mutsanna - Jamak Taksir"
        }
      ]
    }
  },
  {
    id: "nakirah-marifah",
    title: "Nakirah dan Ma'rifah",
    titleAr: "النَّكِرَة والمَعْرِفَة",
    level: "beginner",
    description: "Kata benda tak tentu dan tentu",
    content: {
      explanation: "Nakirah (نَكِرَة) adalah kata benda tak tentu (indefinit), sedangkan Ma'rifah (مَعْرِفَة) adalah kata benda tentu (definit).",
      rules: [
        "Nakirah: berakhiran tanwin (ـٌ ـً ـٍ)",
        "Ma'rifah dengan ال (alif lam ta'rif)",
        "Nama diri adalah ma'rifah",
        "Kata ganti (dhamir) adalah ma'rifah",
        "Idhafah membuat mudhaf ilayh menjadi ma'rifah",
        "Kata yang dipanggil (munada) adalah ma'rifah"
      ],
      examples: [
        {
          arabic: "كِتَابٌ",
          indonesian: "Sebuah buku",
          transliteration: "kitābun",
          analysis: "Nakirah (dengan tanwin)"
        },
        {
          arabic: "الْكِتَابُ",
          indonesian: "Buku itu",
          transliteration: "al-kitābu",
          analysis: "Ma'rifah (dengan ال)"
        },
        {
          arabic: "مُحَمَّدٌ",
          indonesian: "Muhammad",
          transliteration: "muḥammadun",
          analysis: "Ma'rifah (nama diri)"
        },
        {
          arabic: "كِتَابُ الطَّالِبِ",
          indonesian: "Buku siswa",
          transliteration: "kitābu aṭ-ṭālibi",
          analysis: "Ma'rifah (idhafah)"
        }
      ]
    }
  },
  {
    id: "idhafah",
    title: "Idhafah",
    titleAr: "الإِضَافَة",
    level: "intermediate",
    description: "Struktur kepemilikan/hubungan",
    content: {
      explanation: "Idhafah adalah struktur yang menunjukkan kepemilikan atau hubungan antara dua kata benda. Terdiri dari Mudhaf (مُضَاف) dan Mudhaf Ilayh (مُضَاف إِلَيْه).",
      rules: [
        "Mudhaf tidak boleh ada ال dan tanwin",
        "Mudhaf ilayh selalu majrur",
        "Mudhaf mengikuti i'rab sesuai kedudukannya",
        "Jika mudhaf ilayh ma'rifah, mudhaf juga menjadi ma'rifah",
        "Tidak boleh ada pemisah antara mudhaf dan mudhaf ilayh"
      ],
      examples: [
        {
          arabic: "كِتَابُ الطَّالِبِ",
          indonesian: "Buku siswa",
          transliteration: "kitābu aṭ-ṭālibi",
          analysis: "كِتَابُ (mudhaf) + الطَّالِبِ (mudhaf ilayh majrur)"
        },
        {
          arabic: "بَيْتُ اللهِ",
          indonesian: "Rumah Allah",
          transliteration: "baytu allāhi",
          analysis: "بَيْتُ (mudhaf) + اللهِ (mudhaf ilayh)"
        },
        {
          arabic: "مُدَرِّسُ اللُّغَةِ الْعَرَبِيَّةِ",
          indonesian: "Guru bahasa Arab",
          transliteration: "mudarrisu al-lughati al-'arabiyyati",
          analysis: "مُدَرِّسُ (mudhaf) + اللُّغَةِ (mudhaf ilayh) + الْعَرَبِيَّةِ (sifat)"
        }
      ]
    }
  },
  {
    id: "nawasikh",
    title: "Nawasikh",
    titleAr: "النَّوَاسِخ",
    level: "intermediate",
    description: "Kata yang mengubah i'rab jumlah ismiyyah",
    content: {
      explanation: "Nawasikh adalah kata-kata yang masuk pada jumlah ismiyyah dan mengubah i'rab mubtada' dan khabar. Terdiri dari Kana wa Akhwatuha dan Inna wa Akhwatuha.",
      rules: [
        "Kana wa Akhwatuha: mubtada' tetap marfu' (disebut ism kana), khabar menjadi manshub",
        "Inna wa Akhwatuha: mubtada' menjadi manshub (disebut ism inna), khabar tetap marfu'",
        "Kana = adalah/telah, Inna = sesungguhnya",
        "Akhwat Kana: أصبح، أمسى، ظل، بات، صار، ليس، ما زال",
        "Akhwat Inna: أنّ، كأنّ، لكنّ، ليت، لعلّ"
      ],
      examples: [
        {
          arabic: "كَانَ الطَّالِبُ مُجْتَهِدًا",
          indonesian: "Siswa itu (telah) rajin",
          transliteration: "kāna aṭ-ṭālibu mujtahidan",
          analysis: "كَانَ + الطَّالِبُ (ism kana - marfu') + مُجْتَهِدًا (khabar kana - manshub)"
        },
        {
          arabic: "إِنَّ الطَّالِبَ مُجْتَهِدٌ",
          indonesian: "Sesungguhnya siswa itu rajin",
          transliteration: "inna aṭ-ṭāliba mujtahidun",
          analysis: "إِنَّ + الطَّالِبَ (ism inna - manshub) + مُجْتَهِدٌ (khabar inna - marfu')"
        },
        {
          arabic: "لَيْسَ الْجَوُّ بَارِدًا",
          indonesian: "Cuaca tidak dingin",
          transliteration: "laysa al-jawwu bāridan",
          analysis: "لَيْسَ (negasi) + الْجَوُّ (ism laysa) + بَارِدًا (khabar laysa)"
        }
      ]
    }
  },
  {
    id: "hal",
    title: "Hal (Kondisi)",
    titleAr: "الحَال",
    level: "advanced",
    description: "Kata yang menjelaskan keadaan pelaku atau objek",
    content: {
      explanation: "Hal adalah kata yang menjelaskan keadaan pelaku (fa'il) atau objek (maf'ul bih) saat melakukan atau menerima perbuatan. Hal selalu manshub dan biasanya nakirah.",
      rules: [
        "Hal selalu manshub (fathah)",
        "Hal biasanya nakirah",
        "Shahib hal (pemilik hal) harus ma'rifah",
        "Hal bisa berupa mufrad, jumlah, atau syibh jumlah",
        "Hal menjawab pertanyaan 'bagaimana?'"
      ],
      examples: [
        {
          arabic: "جَاءَ الطَّالِبُ مَاشِيًا",
          indonesian: "Siswa datang dengan berjalan kaki",
          transliteration: "jā'a aṭ-ṭālibu māshiyan",
          analysis: "مَاشِيًا (hal - manshub) menjelaskan keadaan الطَّالِبُ"
        },
        {
          arabic: "أَكَلْتُ الطَّعَامَ جَائِعًا",
          indonesian: "Saya makan makanan dalam keadaan lapar",
          transliteration: "akaltu aṭ-ṭa'āma jā'i'an",
          analysis: "جَائِعًا (hal) menjelaskan keadaan pelaku (أنا)"
        },
        {
          arabic: "رَأَيْتُهُ يَضْحَكُ",
          indonesian: "Saya melihatnya sedang tertawa",
          transliteration: "ra'aytuhu yaḍḥaku",
          analysis: "يَضْحَكُ (hal berupa jumlah fi'liyyah)"
        }
      ]
    }
  }
];

export const grammarFormulas = {
  title: "Rumus-Rumus Penting Nahwu",
  sections: [
    {
      name: "Jumlah Ismiyyah",
      formula: "مُبْتَدَأ + خَبَر",
      explanation: "Mubtada' (Subjek) + Khabar (Predikat)",
      example: "الطَّالِبُ مُجْتَهِدٌ"
    },
    {
      name: "Jumlah Fi'liyyah",
      formula: "فِعْل + فَاعِل + (مَفْعُول بِه)",
      explanation: "Fi'il (Kata Kerja) + Fa'il (Pelaku) + (Maf'ul Bih/Objek)",
      example: "كَتَبَ الطَّالِبُ الدَّرْسَ"
    },
    {
      name: "Idhafah",
      formula: "مُضَاف + مُضَاف إِلَيْه",
      explanation: "Mudhaf (tanpa ال dan tanwin) + Mudhaf Ilayh (majrur)",
      example: "كِتَابُ الطَّالِبِ"
    },
    {
      name: "Na'at Man'ut",
      formula: "مَوْصُوف + صِفَة",
      explanation: "Kata Benda + Kata Sifat (harus sesuai dalam 4 hal)",
      example: "طَالِبٌ مُجْتَهِدٌ"
    },
    {
      name: "Jar Majrur",
      formula: "حَرْف جَرّ + اِسْم مَجْرُور",
      explanation: "Huruf Jarr + Isim Majrur (kasrah)",
      example: "فِي الْبَيْتِ"
    }
  ]
};

export const irabTable = {
  title: "Tabel I'rab",
  headers: ["Kedudukan", "Tanda Rafa'", "Tanda Nashab", "Tanda Jarr", "Tanda Jazm"],
  rows: [
    {
      category: "Isim Mufrad",
      items: [
        ["Isim Shahih", "ضمة ـُ", "فتحة ـَ", "كسرة ـِ", "-"],
        ["Jamak Taksir", "ضمة ـُ", "فتحة ـَ", "كسرة ـِ", "-"],
        ["Jamak Muannats", "ضمة ـُ", "كسرة ـِ", "كسرة ـِ", "-"]
      ]
    },
    {
      category: "Isim Mutsanna",
      items: [
        ["Mutsanna", "ألف ونون ـان", "ياء ونون ـين", "ياء ونون ـين", "-"]
      ]
    },
    {
      category: "Jamak Mudzakkar Salim",
      items: [
        ["Jamak Mudzakkar", "واو ونون ـون", "ياء ونون ـين", "ياء ونون ـين", "-"]
      ]
    },
    {
      category: "Asma' Khamsah",
      items: [
        ["أب، أخ، حم، فو، ذو", "واو ـو", "ألف ـا", "ياء ـي", "-"]
      ]
    },
    {
      category: "Fi'il Mudhari'",
      items: [
        ["Shahih Akhir", "ضمة ـُ", "فتحة ـَ", "-", "سكون ـْ"],
        ["Mu'tal Akhir", "ضمة مقدرة", "فتحة مقدرة", "-", "حذف حرف علة"]
      ]
    }
  ]
};