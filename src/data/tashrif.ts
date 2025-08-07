export interface VerbForm {
  id: string;
  name: string;
  nameAr: string;
  formula: string;
  description: string;
}

export interface VerbConjugation {
  pronoun: string;
  pronounAr: string;
  past: string;
  present: string;
  future: string;
  imperative?: string;
}

export interface VerbPattern {
  id: string;
  pattern: string;
  patternAr: string;
  meaning: string;
  root: string;
  masdar: string;
  failMadi: string;
  failMudhari: string;
  failAmr: string;
  ismFail: string;
  ismMaful: string;
  conjugations: VerbConjugation[];
  examples: {
    arabic: string;
    indonesian: string;
    transliteration: string;
  }[];
}

export const verbForms: VerbForm[] = [
  {
    id: "form-1",
    name: "Bentuk I",
    nameAr: "الوزن الأول",
    formula: "فَعَلَ",
    description: "Bentuk dasar, makna asli dari kata kerja"
  },
  {
    id: "form-2",
    name: "Bentuk II",
    nameAr: "الوزن الثاني",
    formula: "فَعَّلَ",
    description: "Intensitas/pengulangan, atau membuat jadi (kausatif)"
  },
  {
    id: "form-3",
    name: "Bentuk III",
    nameAr: "الوزن الثالث",
    formula: "فَاعَلَ",
    description: "Melakukan bersama/timbal balik"
  },
  {
    id: "form-4",
    name: "Bentuk IV",
    nameAr: "الوزن الرابع",
    formula: "أَفْعَلَ",
    description: "Kausatif (menyebabkan)"
  },
  {
    id: "form-5",
    name: "Bentuk V",
    nameAr: "الوزن الخامس",
    formula: "تَفَعَّلَ",
    description: "Refleksif dari bentuk II"
  },
  {
    id: "form-6",
    name: "Bentuk VI",
    nameAr: "الوزن السادس",
    formula: "تَفَاعَلَ",
    description: "Timbal balik/berpura-pura"
  },
  {
    id: "form-7",
    name: "Bentuk VII",
    nameAr: "الوزن السابع",
    formula: "اِنْفَعَلَ",
    description: "Pasif/refleksif"
  },
  {
    id: "form-8",
    name: "Bentuk VIII",
    nameAr: "الوزن الثامن",
    formula: "اِفْتَعَلَ",
    description: "Refleksif dengan usaha"
  },
  {
    id: "form-9",
    name: "Bentuk IX",
    nameAr: "الوزن التاسع",
    formula: "اِفْعَلَّ",
    description: "Untuk warna dan cacat"
  },
  {
    id: "form-10",
    name: "Bentuk X",
    nameAr: "الوزن العاشر",
    formula: "اِسْتَفْعَلَ",
    description: "Meminta/menganggap"
  }
];

export const verbPatterns: VerbPattern[] = [
  {
    id: "kataba",
    pattern: "فَعَلَ",
    patternAr: "كَتَبَ",
    meaning: "menulis",
    root: "ك-ت-ب",
    masdar: "كِتَابَة",
    failMadi: "كَتَبَ",
    failMudhari: "يَكْتُبُ",
    failAmr: "اُكْتُبْ",
    ismFail: "كَاتِب",
    ismMaful: "مَكْتُوب",
    conjugations: [
      {
        pronoun: "Ana (Saya)",
        pronounAr: "أَنَا",
        past: "كَتَبْتُ",
        present: "أَكْتُبُ",
        future: "سَأَكْتُبُ"
      },
      {
        pronoun: "Anta (Kamu L)",
        pronounAr: "أَنْتَ",
        past: "كَتَبْتَ",
        present: "تَكْتُبُ",
        future: "سَتَكْتُبُ",
        imperative: "اُكْتُبْ"
      },
      {
        pronoun: "Anti (Kamu P)",
        pronounAr: "أَنْتِ",
        past: "كَتَبْتِ",
        present: "تَكْتُبِينَ",
        future: "سَتَكْتُبِينَ",
        imperative: "اُكْتُبِي"
      },
      {
        pronoun: "Huwa (Dia L)",
        pronounAr: "هُوَ",
        past: "كَتَبَ",
        present: "يَكْتُبُ",
        future: "سَيَكْتُبُ"
      },
      {
        pronoun: "Hiya (Dia P)",
        pronounAr: "هِيَ",
        past: "كَتَبَتْ",
        present: "تَكْتُبُ",
        future: "سَتَكْتُبُ"
      },
      {
        pronoun: "Nahnu (Kami)",
        pronounAr: "نَحْنُ",
        past: "كَتَبْنَا",
        present: "نَكْتُبُ",
        future: "سَنَكْتُبُ"
      },
      {
        pronoun: "Antum (Kalian L)",
        pronounAr: "أَنْتُمْ",
        past: "كَتَبْتُمْ",
        present: "تَكْتُبُونَ",
        future: "سَتَكْتُبُونَ",
        imperative: "اُكْتُبُوا"
      },
      {
        pronoun: "Antunna (Kalian P)",
        pronounAr: "أَنْتُنَّ",
        past: "كَتَبْتُنَّ",
        present: "تَكْتُبْنَ",
        future: "سَتَكْتُبْنَ",
        imperative: "اُكْتُبْنَ"
      },
      {
        pronoun: "Hum (Mereka L)",
        pronounAr: "هُمْ",
        past: "كَتَبُوا",
        present: "يَكْتُبُونَ",
        future: "سَيَكْتُبُونَ"
      },
      {
        pronoun: "Hunna (Mereka P)",
        pronounAr: "هُنَّ",
        past: "كَتَبْنَ",
        present: "يَكْتُبْنَ",
        future: "سَيَكْتُبْنَ"
      }
    ],
    examples: [
      {
        arabic: "كَتَبَ الطَّالِبُ الدَّرْسَ",
        indonesian: "Siswa menulis pelajaran",
        transliteration: "kataba aṭ-ṭālibu ad-darsa"
      },
      {
        arabic: "أَكْتُبُ رِسَالَةً",
        indonesian: "Saya menulis surat",
        transliteration: "aktubu risālatan"
      }
    ]
  },
  {
    id: "qara2a",
    pattern: "فَعَلَ",
    patternAr: "قَرَأَ",
    meaning: "membaca",
    root: "ق-ر-أ",
    masdar: "قِرَاءَة",
    failMadi: "قَرَأَ",
    failMudhari: "يَقْرَأُ",
    failAmr: "اِقْرَأْ",
    ismFail: "قَارِئ",
    ismMaful: "مَقْرُوء",
    conjugations: [
      {
        pronoun: "Ana (Saya)",
        pronounAr: "أَنَا",
        past: "قَرَأْتُ",
        present: "أَقْرَأُ",
        future: "سَأَقْرَأُ"
      },
      {
        pronoun: "Anta (Kamu L)",
        pronounAr: "أَنْتَ",
        past: "قَرَأْتَ",
        present: "تَقْرَأُ",
        future: "سَتَقْرَأُ",
        imperative: "اِقْرَأْ"
      },
      {
        pronoun: "Anti (Kamu P)",
        pronounAr: "أَنْتِ",
        past: "قَرَأْتِ",
        present: "تَقْرَئِينَ",
        future: "سَتَقْرَئِينَ",
        imperative: "اِقْرَئِي"
      },
      {
        pronoun: "Huwa (Dia L)",
        pronounAr: "هُوَ",
        past: "قَرَأَ",
        present: "يَقْرَأُ",
        future: "سَيَقْرَأُ"
      },
      {
        pronoun: "Hiya (Dia P)",
        pronounAr: "هِيَ",
        past: "قَرَأَتْ",
        present: "تَقْرَأُ",
        future: "سَتَقْرَأُ"
      },
      {
        pronoun: "Nahnu (Kami)",
        pronounAr: "نَحْنُ",
        past: "قَرَأْنَا",
        present: "نَقْرَأُ",
        future: "سَنَقْرَأُ"
      },
      {
        pronoun: "Antum (Kalian L)",
        pronounAr: "أَنْتُمْ",
        past: "قَرَأْتُمْ",
        present: "تَقْرَؤُونَ",
        future: "سَتَقْرَؤُونَ",
        imperative: "اِقْرَؤُوا"
      },
      {
        pronoun: "Antunna (Kalian P)",
        pronounAr: "أَنْتُنَّ",
        past: "قَرَأْتُنَّ",
        present: "تَقْرَأْنَ",
        future: "سَتَقْرَأْنَ",
        imperative: "اِقْرَأْنَ"
      },
      {
        pronoun: "Hum (Mereka L)",
        pronounAr: "هُمْ",
        past: "قَرَؤُوا",
        present: "يَقْرَؤُونَ",
        future: "سَيَقْرَؤُونَ"
      },
      {
        pronoun: "Hunna (Mereka P)",
        pronounAr: "هُنَّ",
        past: "قَرَأْنَ",
        present: "يَقْرَأْنَ",
        future: "سَيَقْرَأْنَ"
      }
    ],
    examples: [
      {
        arabic: "قَرَأْتُ الْقُرْآنَ",
        indonesian: "Saya membaca Al-Quran",
        transliteration: "qara'tu al-qur'āna"
      },
      {
        arabic: "يَقْرَأُ الْكِتَابَ",
        indonesian: "Dia membaca buku",
        transliteration: "yaqra'u al-kitāba"
      }
    ]
  },
  {
    id: "fahima",
    pattern: "فَعِلَ",
    patternAr: "فَهِمَ",
    meaning: "memahami",
    root: "ف-ه-م",
    masdar: "فَهْم",
    failMadi: "فَهِمَ",
    failMudhari: "يَفْهَمُ",
    failAmr: "اِفْهَمْ",
    ismFail: "فَاهِم",
    ismMaful: "مَفْهُوم",
    conjugations: [
      {
        pronoun: "Ana (Saya)",
        pronounAr: "أَنَا",
        past: "فَهِمْتُ",
        present: "أَفْهَمُ",
        future: "سَأَفْهَمُ"
      },
      {
        pronoun: "Anta (Kamu L)",
        pronounAr: "أَنْتَ",
        past: "فَهِمْتَ",
        present: "تَفْهَمُ",
        future: "سَتَفْهَمُ",
        imperative: "اِفْهَمْ"
      },
      {
        pronoun: "Anti (Kamu P)",
        pronounAr: "أَنْتِ",
        past: "فَهِمْتِ",
        present: "تَفْهَمِينَ",
        future: "سَتَفْهَمِينَ",
        imperative: "اِفْهَمِي"
      },
      {
        pronoun: "Huwa (Dia L)",
        pronounAr: "هُوَ",
        past: "فَهِمَ",
        present: "يَفْهَمُ",
        future: "سَيَفْهَمُ"
      },
      {
        pronoun: "Hiya (Dia P)",
        pronounAr: "هِيَ",
        past: "فَهِمَتْ",
        present: "تَفْهَمُ",
        future: "سَتَفْهَمُ"
      },
      {
        pronoun: "Nahnu (Kami)",
        pronounAr: "نَحْنُ",
        past: "فَهِمْنَا",
        present: "نَفْهَمُ",
        future: "سَنَفْهَمُ"
      },
      {
        pronoun: "Antum (Kalian L)",
        pronounAr: "أَنْتُمْ",
        past: "فَهِمْتُمْ",
        present: "تَفْهَمُونَ",
        future: "سَتَفْهَمُونَ",
        imperative: "اِفْهَمُوا"
      },
      {
        pronoun: "Antunna (Kalian P)",
        pronounAr: "أَنْتُنَّ",
        past: "فَهِمْتُنَّ",
        present: "تَفْهَمْنَ",
        future: "سَتَفْهَمْنَ",
        imperative: "اِفْهَمْنَ"
      },
      {
        pronoun: "Hum (Mereka L)",
        pronounAr: "هُمْ",
        past: "فَهِمُوا",
        present: "يَفْهَمُونَ",
        future: "سَيَفْهَمُونَ"
      },
      {
        pronoun: "Hunna (Mereka P)",
        pronounAr: "هُنَّ",
        past: "فَهِمْنَ",
        present: "يَفْهَمْنَ",
        future: "سَيَفْهَمْنَ"
      }
    ],
    examples: [
      {
        arabic: "فَهِمْتُ الدَّرْسَ",
        indonesian: "Saya memahami pelajaran",
        transliteration: "fahimtu ad-darsa"
      },
      {
        arabic: "هَلْ تَفْهَمُ الْعَرَبِيَّةَ؟",
        indonesian: "Apakah kamu memahami bahasa Arab?",
        transliteration: "hal tafhamu al-'arabiyyata?"
      }
    ]
  }
];

export const tasrifTable = {
  title: "Tabel Rumus Tashrif",
  description: "Pola perubahan kata kerja dalam bahasa Arab",
  headers: ["Wazan", "Fi'il Madhi", "Fi'il Mudhari'", "Fi'il Amr", "Ism Fa'il", "Ism Maf'ul", "Masdar"],
  rows: [
    ["فَعَلَ", "فَعَلَ", "يَفْعُلُ", "اُفْعُلْ", "فَاعِل", "مَفْعُول", "فَعْل"],
    ["فَعَّلَ", "فَعَّلَ", "يُفَعِّلُ", "فَعِّلْ", "مُفَعِّل", "مُفَعَّل", "تَفْعِيل"],
    ["فَاعَلَ", "فَاعَلَ", "يُفَاعِلُ", "فَاعِلْ", "مُفَاعِل", "مُفَاعَل", "مُفَاعَلَة/فِعَال"],
    ["أَفْعَلَ", "أَفْعَلَ", "يُفْعِلُ", "أَفْعِلْ", "مُفْعِل", "مُفْعَل", "إِفْعَال"],
    ["تَفَعَّلَ", "تَفَعَّلَ", "يَتَفَعَّلُ", "تَفَعَّلْ", "مُتَفَعِّل", "مُتَفَعَّل", "تَفَعُّل"],
    ["تَفَاعَلَ", "تَفَاعَلَ", "يَتَفَاعَلُ", "تَفَاعَلْ", "مُتَفَاعِل", "مُتَفَاعَل", "تَفَاعُل"],
    ["اِنْفَعَلَ", "اِنْفَعَلَ", "يَنْفَعِلُ", "اِنْفَعِلْ", "مُنْفَعِل", "مُنْفَعَل", "اِنْفِعَال"],
    ["اِفْتَعَلَ", "اِفْتَعَلَ", "يَفْتَعِلُ", "اِفْتَعِلْ", "مُفْتَعِل", "مُفْتَعَل", "اِفْتِعَال"],
    ["اِفْعَلَّ", "اِفْعَلَّ", "يَفْعَلُّ", "-", "مُفْعَلّ", "-", "اِفْعِلَال"],
    ["اِسْتَفْعَلَ", "اِسْتَفْعَلَ", "يَسْتَفْعِلُ", "اِسْتَفْعِلْ", "مُسْتَفْعِل", "مُسْتَفْعَل", "اِسْتِفْعَال"]
  ]
};

export const pronounTable = {
  title: "Tabel Kata Ganti (Dhamir)",
  description: "Kata ganti dalam bahasa Arab dan perubahannya",
  headers: ["Kata Ganti", "Arab", "Tunggal", "Dual", "Jamak"],
  categories: [
    {
      name: "Dhamir Munfashil (Terpisah)",
      rows: [
        ["Orang Pertama", "أَنَا", "أَنَا (ana)", "-", "نَحْنُ (nahnu)"],
        ["Orang Kedua (L)", "أَنْتَ", "أَنْتَ (anta)", "أَنْتُمَا (antumā)", "أَنْتُمْ (antum)"],
        ["Orang Kedua (P)", "أَنْتِ", "أَنْتِ (anti)", "أَنْتُمَا (antumā)", "أَنْتُنَّ (antunna)"],
        ["Orang Ketiga (L)", "هُوَ", "هُوَ (huwa)", "هُمَا (humā)", "هُمْ (hum)"],
        ["Orang Ketiga (P)", "هِيَ", "هِيَ (hiya)", "هُمَا (humā)", "هُنَّ (hunna)"]
      ]
    },
    {
      name: "Dhamir Muttashil (Bersambung)",
      rows: [
        ["Kepunyaan-ku", "ـِي", "كِتَابِي (kitābī)", "-", "-"],
        ["Kepunyaan-mu (L)", "ـكَ", "كِتَابُكَ (kitābuka)", "كِتَابُكُمَا", "كِتَابُكُمْ"],
        ["Kepunyaan-mu (P)", "ـكِ", "كِتَابُكِ (kitābuki)", "كِتَابُكُمَا", "كِتَابُكُنَّ"],
        ["Kepunyaan-nya (L)", "ـهُ", "كِتَابُهُ (kitābuhu)", "كِتَابُهُمَا", "كِتَابُهُمْ"],
        ["Kepunyaan-nya (P)", "ـهَا", "كِتَابُهَا (kitābuhā)", "كِتَابُهُمَا", "كِتَابُهُنَّ"]
      ]
    }
  ]
};