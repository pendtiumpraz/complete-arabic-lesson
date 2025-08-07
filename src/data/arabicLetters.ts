export interface ArabicLetter {
  id: string;
  letter: string;
  name: string;
  nameAr: string;
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  transliteration: string;
  pronunciation: string;
  strokeOrder: string[];
  examples: {
    word: string;
    meaning: string;
    transliteration: string;
  }[];
}

export interface Harakat {
  id: string;
  name: string;
  nameAr: string;
  symbol: string;
  sound: string;
  description: string;
  examples: {
    letter: string;
    withHarakat: string;
    transliteration: string;
  }[];
}

export const arabicLetters: ArabicLetter[] = [
  {
    id: "alif",
    letter: "ا",
    name: "Alif",
    nameAr: "ألف",
    isolated: "ا",
    initial: "ا",
    medial: "ـا",
    final: "ـا",
    transliteration: "a/ā",
    pronunciation: "Seperti 'a' dalam 'ayah'",
    strokeOrder: ["Garis vertikal dari atas ke bawah"],
    examples: [
      { word: "أسد", meaning: "Singa", transliteration: "asad" },
      { word: "باب", meaning: "Pintu", transliteration: "bāb" }
    ]
  },
  {
    id: "ba",
    letter: "ب",
    name: "Ba",
    nameAr: "باء",
    isolated: "ب",
    initial: "بـ",
    medial: "ـبـ",
    final: "ـب",
    transliteration: "b",
    pronunciation: "Seperti 'b' dalam 'buku'",
    strokeOrder: ["Garis horizontal dari kanan ke kiri", "Tambahkan satu titik di bawah"],
    examples: [
      { word: "بيت", meaning: "Rumah", transliteration: "bayt" },
      { word: "كتاب", meaning: "Buku", transliteration: "kitāb" }
    ]
  },
  {
    id: "ta",
    letter: "ت",
    name: "Ta",
    nameAr: "تاء",
    isolated: "ت",
    initial: "تـ",
    medial: "ـتـ",
    final: "ـت",
    transliteration: "t",
    pronunciation: "Seperti 't' dalam 'taman'",
    strokeOrder: ["Garis horizontal dari kanan ke kiri", "Tambahkan dua titik di atas"],
    examples: [
      { word: "تفاح", meaning: "Apel", transliteration: "tuffāḥ" },
      { word: "بنت", meaning: "Anak perempuan", transliteration: "bint" }
    ]
  },
  {
    id: "tha",
    letter: "ث",
    name: "Tha",
    nameAr: "ثاء",
    isolated: "ث",
    initial: "ثـ",
    medial: "ـثـ",
    final: "ـث",
    transliteration: "th",
    pronunciation: "Seperti 'th' dalam 'think' (Inggris)",
    strokeOrder: ["Garis horizontal dari kanan ke kiri", "Tambahkan tiga titik di atas"],
    examples: [
      { word: "ثلج", meaning: "Salju", transliteration: "thalj" },
      { word: "ثوب", meaning: "Pakaian", transliteration: "thawb" }
    ]
  },
  {
    id: "jim",
    letter: "ج",
    name: "Jim",
    nameAr: "جيم",
    isolated: "ج",
    initial: "جـ",
    medial: "ـجـ",
    final: "ـج",
    transliteration: "j",
    pronunciation: "Seperti 'j' dalam 'jalan'",
    strokeOrder: ["Kurva dari kanan atas ke kiri bawah", "Tambahkan satu titik di tengah"],
    examples: [
      { word: "جمل", meaning: "Unta", transliteration: "jamal" },
      { word: "مسجد", meaning: "Masjid", transliteration: "masjid" }
    ]
  },
  {
    id: "ha",
    letter: "ح",
    name: "Ha",
    nameAr: "حاء",
    isolated: "ح",
    initial: "حـ",
    medial: "ـحـ",
    final: "ـح",
    transliteration: "ḥ",
    pronunciation: "Ha dari tenggorokan, lebih berat dari 'h' biasa",
    strokeOrder: ["Kurva dari kanan atas ke kiri bawah"],
    examples: [
      { word: "حليب", meaning: "Susu", transliteration: "ḥalīb" },
      { word: "صباح", meaning: "Pagi", transliteration: "ṣabāḥ" }
    ]
  },
  {
    id: "kha",
    letter: "خ",
    name: "Kha",
    nameAr: "خاء",
    isolated: "خ",
    initial: "خـ",
    medial: "ـخـ",
    final: "ـخ",
    transliteration: "kh",
    pronunciation: "Seperti 'ch' dalam 'Bach' (Jerman) atau clearing throat",
    strokeOrder: ["Kurva dari kanan atas ke kiri bawah", "Tambahkan satu titik di atas"],
    examples: [
      { word: "خبز", meaning: "Roti", transliteration: "khubz" },
      { word: "أخ", meaning: "Saudara laki-laki", transliteration: "akh" }
    ]
  },
  {
    id: "dal",
    letter: "د",
    name: "Dal",
    nameAr: "دال",
    isolated: "د",
    initial: "د",
    medial: "ـد",
    final: "ـد",
    transliteration: "d",
    pronunciation: "Seperti 'd' dalam 'dua'",
    strokeOrder: ["Kurva kecil dari kanan atas ke kiri"],
    examples: [
      { word: "دار", meaning: "Rumah", transliteration: "dār" },
      { word: "يد", meaning: "Tangan", transliteration: "yad" }
    ]
  },
  {
    id: "dzal",
    letter: "ذ",
    name: "Dzal",
    nameAr: "ذال",
    isolated: "ذ",
    initial: "ذ",
    medial: "ـذ",
    final: "ـذ",
    transliteration: "dh",
    pronunciation: "Seperti 'th' dalam 'this' (Inggris)",
    strokeOrder: ["Kurva kecil dari kanan atas ke kiri", "Tambahkan satu titik di atas"],
    examples: [
      { word: "ذهب", meaning: "Emas", transliteration: "dhahab" },
      { word: "أستاذ", meaning: "Guru/Professor", transliteration: "ustādh" }
    ]
  },
  {
    id: "ra",
    letter: "ر",
    name: "Ra",
    nameAr: "راء",
    isolated: "ر",
    initial: "ر",
    medial: "ـر",
    final: "ـر",
    transliteration: "r",
    pronunciation: "Seperti 'r' yang digetarkan",
    strokeOrder: ["Kurva kecil menurun dari kanan ke kiri"],
    examples: [
      { word: "رجل", meaning: "Pria", transliteration: "rajul" },
      { word: "نار", meaning: "Api", transliteration: "nār" }
    ]
  },
  {
    id: "zay",
    letter: "ز",
    name: "Zay",
    nameAr: "زاي",
    isolated: "ز",
    initial: "ز",
    medial: "ـز",
    final: "ـز",
    transliteration: "z",
    pronunciation: "Seperti 'z' dalam 'zebra'",
    strokeOrder: ["Kurva kecil menurun dari kanan ke kiri", "Tambahkan satu titik di atas"],
    examples: [
      { word: "زهرة", meaning: "Bunga", transliteration: "zahrah" },
      { word: "أرز", meaning: "Nasi", transliteration: "aruzz" }
    ]
  },
  {
    id: "sin",
    letter: "س",
    name: "Sin",
    nameAr: "سين",
    isolated: "س",
    initial: "سـ",
    medial: "ـسـ",
    final: "ـس",
    transliteration: "s",
    pronunciation: "Seperti 's' dalam 'satu'",
    strokeOrder: ["Tiga kurva kecil berurutan", "Garis horizontal di bawah"],
    examples: [
      { word: "سماء", meaning: "Langit", transliteration: "samā'" },
      { word: "مدرس", meaning: "Guru", transliteration: "mudarris" }
    ]
  },
  {
    id: "shin",
    letter: "ش",
    name: "Shin",
    nameAr: "شين",
    isolated: "ش",
    initial: "شـ",
    medial: "ـشـ",
    final: "ـش",
    transliteration: "sh",
    pronunciation: "Seperti 'sy' dalam 'syukur'",
    strokeOrder: ["Tiga kurva kecil berurutan", "Garis horizontal di bawah", "Tiga titik di atas"],
    examples: [
      { word: "شمس", meaning: "Matahari", transliteration: "shams" },
      { word: "عطش", meaning: "Haus", transliteration: "'aṭash" }
    ]
  },
  {
    id: "sad",
    letter: "ص",
    name: "Sad",
    nameAr: "صاد",
    isolated: "ص",
    initial: "صـ",
    medial: "ـصـ",
    final: "ـص",
    transliteration: "ṣ",
    pronunciation: "'S' emfatik, lidah terangkat",
    strokeOrder: ["Oval dengan ekor", "Garis horizontal"],
    examples: [
      { word: "صباح", meaning: "Pagi", transliteration: "ṣabāḥ" },
      { word: "قصة", meaning: "Cerita", transliteration: "qiṣṣah" }
    ]
  },
  {
    id: "dad",
    letter: "ض",
    name: "Dad",
    nameAr: "ضاد",
    isolated: "ض",
    initial: "ضـ",
    medial: "ـضـ",
    final: "ـض",
    transliteration: "ḍ",
    pronunciation: "'D' emfatik, lidah terangkat",
    strokeOrder: ["Oval dengan ekor", "Garis horizontal", "Satu titik di atas"],
    examples: [
      { word: "ضوء", meaning: "Cahaya", transliteration: "ḍaw'" },
      { word: "أرض", meaning: "Bumi", transliteration: "arḍ" }
    ]
  },
  {
    id: "ta2",
    letter: "ط",
    name: "Tha",
    nameAr: "طاء",
    isolated: "ط",
    initial: "طـ",
    medial: "ـطـ",
    final: "ـط",
    transliteration: "ṭ",
    pronunciation: "'T' emfatik, lidah terangkat",
    strokeOrder: ["Oval", "Garis vertikal di atas"],
    examples: [
      { word: "طائر", meaning: "Burung", transliteration: "ṭā'ir" },
      { word: "مطر", meaning: "Hujan", transliteration: "maṭar" }
    ]
  },
  {
    id: "za",
    letter: "ظ",
    name: "Zha",
    nameAr: "ظاء",
    isolated: "ظ",
    initial: "ظـ",
    medial: "ـظـ",
    final: "ـظ",
    transliteration: "ẓ",
    pronunciation: "'Z' emfatik atau 'dh' emfatik",
    strokeOrder: ["Oval", "Garis vertikal di atas", "Satu titik di atas"],
    examples: [
      { word: "ظل", meaning: "Bayangan", transliteration: "ẓill" },
      { word: "نظر", meaning: "Melihat", transliteration: "naẓar" }
    ]
  },
  {
    id: "ain",
    letter: "ع",
    name: "Ain",
    nameAr: "عين",
    isolated: "ع",
    initial: "عـ",
    medial: "ـعـ",
    final: "ـع",
    transliteration: "'",
    pronunciation: "Suara dari tenggorokan dalam",
    strokeOrder: ["Kurva seperti angka 3 terbalik"],
    examples: [
      { word: "عين", meaning: "Mata", transliteration: "'ayn" },
      { word: "سمع", meaning: "Mendengar", transliteration: "sami'a" }
    ]
  },
  {
    id: "ghain",
    letter: "غ",
    name: "Ghain",
    nameAr: "غين",
    isolated: "غ",
    initial: "غـ",
    medial: "ـغـ",
    final: "ـغ",
    transliteration: "gh",
    pronunciation: "Seperti 'g' tapi dari tenggorokan (gargling)",
    strokeOrder: ["Kurva seperti angka 3 terbalik", "Satu titik di atas"],
    examples: [
      { word: "غروب", meaning: "Terbenam", transliteration: "ghurūb" },
      { word: "صغير", meaning: "Kecil", transliteration: "ṣaghīr" }
    ]
  },
  {
    id: "fa",
    letter: "ف",
    name: "Fa",
    nameAr: "فاء",
    isolated: "ف",
    initial: "فـ",
    medial: "ـفـ",
    final: "ـف",
    transliteration: "f",
    pronunciation: "Seperti 'f' dalam 'fakta'",
    strokeOrder: ["Lingkaran kecil", "Ekor ke kiri", "Satu titik di atas"],
    examples: [
      { word: "فيل", meaning: "Gajah", transliteration: "fīl" },
      { word: "كيف", meaning: "Bagaimana", transliteration: "kayf" }
    ]
  },
  {
    id: "qaf",
    letter: "ق",
    name: "Qaf",
    nameAr: "قاف",
    isolated: "ق",
    initial: "قـ",
    medial: "ـقـ",
    final: "ـق",
    transliteration: "q",
    pronunciation: "'K' dari tenggorokan dalam",
    strokeOrder: ["Lingkaran kecil", "Ekor ke kiri", "Dua titik di atas"],
    examples: [
      { word: "قمر", meaning: "Bulan", transliteration: "qamar" },
      { word: "شرق", meaning: "Timur", transliteration: "sharq" }
    ]
  },
  {
    id: "kaf",
    letter: "ك",
    name: "Kaf",
    nameAr: "كاف",
    isolated: "ك",
    initial: "كـ",
    medial: "ـكـ",
    final: "ـك",
    transliteration: "k",
    pronunciation: "Seperti 'k' dalam 'kaki'",
    strokeOrder: ["Garis vertikal", "Garis diagonal", "Hamzah kecil di dalam"],
    examples: [
      { word: "كبير", meaning: "Besar", transliteration: "kabīr" },
      { word: "ملك", meaning: "Raja", transliteration: "malik" }
    ]
  },
  {
    id: "lam",
    letter: "ل",
    name: "Lam",
    nameAr: "لام",
    isolated: "ل",
    initial: "لـ",
    medial: "ـلـ",
    final: "ـل",
    transliteration: "l",
    pronunciation: "Seperti 'l' dalam 'lama'",
    strokeOrder: ["Garis vertikal", "Kurva di bawah"],
    examples: [
      { word: "ليل", meaning: "Malam", transliteration: "layl" },
      { word: "جمل", meaning: "Unta", transliteration: "jamal" }
    ]
  },
  {
    id: "mim",
    letter: "م",
    name: "Mim",
    nameAr: "ميم",
    isolated: "م",
    initial: "مـ",
    medial: "ـمـ",
    final: "ـم",
    transliteration: "m",
    pronunciation: "Seperti 'm' dalam 'makan'",
    strokeOrder: ["Lingkaran kecil", "Ekor menurun"],
    examples: [
      { word: "ماء", meaning: "Air", transliteration: "mā'" },
      { word: "قلم", meaning: "Pena", transliteration: "qalam" }
    ]
  },
  {
    id: "nun",
    letter: "ن",
    name: "Nun",
    nameAr: "نون",
    isolated: "ن",
    initial: "نـ",
    medial: "ـنـ",
    final: "ـن",
    transliteration: "n",
    pronunciation: "Seperti 'n' dalam 'nama'",
    strokeOrder: ["Setengah lingkaran", "Satu titik di atas"],
    examples: [
      { word: "نور", meaning: "Cahaya", transliteration: "nūr" },
      { word: "بن", meaning: "Putra dari", transliteration: "ibn" }
    ]
  },
  {
    id: "ha2",
    letter: "ه",
    name: "Ha",
    nameAr: "هاء",
    isolated: "ه",
    initial: "هـ",
    medial: "ـهـ",
    final: "ـه",
    transliteration: "h",
    pronunciation: "Seperti 'h' dalam 'hari'",
    strokeOrder: ["Oval kecil"],
    examples: [
      { word: "هدى", meaning: "Petunjuk", transliteration: "hudā" },
      { word: "وجه", meaning: "Wajah", transliteration: "wajh" }
    ]
  },
  {
    id: "waw",
    letter: "و",
    name: "Waw",
    nameAr: "واو",
    isolated: "و",
    initial: "و",
    medial: "ـو",
    final: "ـو",
    transliteration: "w/ū",
    pronunciation: "Seperti 'w' dalam 'waktu' atau 'u' panjang",
    strokeOrder: ["Lingkaran kecil dengan ekor"],
    examples: [
      { word: "ورد", meaning: "Mawar", transliteration: "ward" },
      { word: "نور", meaning: "Cahaya", transliteration: "nūr" }
    ]
  },
  {
    id: "ya",
    letter: "ي",
    name: "Ya",
    nameAr: "ياء",
    isolated: "ي",
    initial: "يـ",
    medial: "ـيـ",
    final: "ـي",
    transliteration: "y/ī",
    pronunciation: "Seperti 'y' dalam 'yakin' atau 'i' panjang",
    strokeOrder: ["Kurva dengan dua titik di bawah"],
    examples: [
      { word: "يد", meaning: "Tangan", transliteration: "yad" },
      { word: "في", meaning: "Di dalam", transliteration: "fī" }
    ]
  }
];

export const harakat: Harakat[] = [
  {
    id: "fathah",
    name: "Fathah",
    nameAr: "فَتْحَة",
    symbol: "َ",
    sound: "a",
    description: "Garis miring di atas huruf, menghasilkan bunyi 'a' pendek",
    examples: [
      { letter: "ب", withHarakat: "بَ", transliteration: "ba" },
      { letter: "ك", withHarakat: "كَ", transliteration: "ka" },
      { letter: "م", withHarakat: "مَ", transliteration: "ma" }
    ]
  },
  {
    id: "kasrah",
    name: "Kasrah",
    nameAr: "كَسْرَة",
    symbol: "ِ",
    sound: "i",
    description: "Garis miring di bawah huruf, menghasilkan bunyi 'i' pendek",
    examples: [
      { letter: "ب", withHarakat: "بِ", transliteration: "bi" },
      { letter: "ك", withHarakat: "كِ", transliteration: "ki" },
      { letter: "م", withHarakat: "مِ", transliteration: "mi" }
    ]
  },
  {
    id: "dammah",
    name: "Dammah",
    nameAr: "ضَمَّة",
    symbol: "ُ",
    sound: "u",
    description: "Seperti koma kecil di atas huruf, menghasilkan bunyi 'u' pendek",
    examples: [
      { letter: "ب", withHarakat: "بُ", transliteration: "bu" },
      { letter: "ك", withHarakat: "كُ", transliteration: "ku" },
      { letter: "م", withHarakat: "مُ", transliteration: "mu" }
    ]
  },
  {
    id: "sukun",
    name: "Sukun",
    nameAr: "سُكُون",
    symbol: "ْ",
    sound: "-",
    description: "Lingkaran kecil di atas huruf, menandakan huruf mati (tanpa vokal)",
    examples: [
      { letter: "ب", withHarakat: "بْ", transliteration: "b" },
      { letter: "ك", withHarakat: "كْ", transliteration: "k" },
      { letter: "م", withHarakat: "مْ", transliteration: "m" }
    ]
  },
  {
    id: "tanwin-fath",
    name: "Tanwin Fathah",
    nameAr: "تَنْوِين فَتْح",
    symbol: "ً",
    sound: "an",
    description: "Dua fathah di atas huruf, menghasilkan bunyi 'an'",
    examples: [
      { letter: "ب", withHarakat: "بً", transliteration: "ban" },
      { letter: "ك", withHarakat: "كً", transliteration: "kan" },
      { letter: "م", withHarakat: "مً", transliteration: "man" }
    ]
  },
  {
    id: "tanwin-kasr",
    name: "Tanwin Kasrah",
    nameAr: "تَنْوِين كَسْر",
    symbol: "ٍ",
    sound: "in",
    description: "Dua kasrah di bawah huruf, menghasilkan bunyi 'in'",
    examples: [
      { letter: "ب", withHarakat: "بٍ", transliteration: "bin" },
      { letter: "ك", withHarakat: "كٍ", transliteration: "kin" },
      { letter: "م", withHarakat: "مٍ", transliteration: "min" }
    ]
  },
  {
    id: "tanwin-damm",
    name: "Tanwin Dammah",
    nameAr: "تَنْوِين ضَمّ",
    symbol: "ٌ",
    sound: "un",
    description: "Dua dammah di atas huruf, menghasilkan bunyi 'un'",
    examples: [
      { letter: "ب", withHarakat: "بٌ", transliteration: "bun" },
      { letter: "ك", withHarakat: "كٌ", transliteration: "kun" },
      { letter: "م", withHarakat: "مٌ", transliteration: "mun" }
    ]
  },
  {
    id: "shaddah",
    name: "Shaddah",
    nameAr: "شَدَّة",
    symbol: "ّ",
    sound: "double",
    description: "Seperti huruf 'w' kecil di atas huruf, menggandakan bunyi konsonan",
    examples: [
      { letter: "ب", withHarakat: "بّ", transliteration: "bb" },
      { letter: "ك", withHarakat: "كّ", transliteration: "kk" },
      { letter: "م", withHarakat: "مّ", transliteration: "mm" }
    ]
  },
  {
    id: "maddah",
    name: "Maddah",
    nameAr: "مَدَّة",
    symbol: "آ",
    sound: "ā",
    description: "Garis bergelombang di atas alif, menghasilkan bunyi 'a' panjang",
    examples: [
      { letter: "ا", withHarakat: "آ", transliteration: "ā" },
      { letter: "ء", withHarakat: "آ", transliteration: "ā" },
      { letter: "ا", withHarakat: "آل", transliteration: "āl" }
    ]
  }
];