export interface VocabularyWord {
  id: string;
  arabic: string;
  indonesian: string;
  english: string;
  transliteration: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  example?: {
    arabic: string;
    indonesian: string;
    transliteration: string;
  };
  root?: string;
  partOfSpeech: 'noun' | 'verb' | 'adjective' | 'adverb' | 'preposition' | 'pronoun' | 'conjunction';
}

export interface VocabularyCategory {
  id: string;
  name: string;
  nameAr: string;
  icon: string;
  description: string;
  wordCount: number;
}

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "family",
    name: "Keluarga",
    nameAr: "العائلة",
    icon: "👨‍👩‍👧‍👦",
    description: "Kata-kata terkait keluarga dan kerabat",
    wordCount: 30
  },
  {
    id: "body",
    name: "Tubuh",
    nameAr: "الجسم",
    icon: "👤",
    description: "Bagian-bagian tubuh manusia",
    wordCount: 40
  },
  {
    id: "food",
    name: "Makanan",
    nameAr: "الطعام",
    icon: "🍽️",
    description: "Makanan, minuman, dan hal terkait",
    wordCount: 50
  },
  {
    id: "animals",
    name: "Hewan",
    nameAr: "الحيوانات",
    icon: "🦁",
    description: "Nama-nama hewan",
    wordCount: 45
  },
  {
    id: "colors",
    name: "Warna",
    nameAr: "الألوان",
    icon: "🎨",
    description: "Nama-nama warna",
    wordCount: 15
  },
  {
    id: "numbers",
    name: "Angka",
    nameAr: "الأرقام",
    icon: "🔢",
    description: "Angka dan bilangan",
    wordCount: 30
  },
  {
    id: "time",
    name: "Waktu",
    nameAr: "الوقت",
    icon: "⏰",
    description: "Kata-kata terkait waktu",
    wordCount: 35
  },
  {
    id: "nature",
    name: "Alam",
    nameAr: "الطبيعة",
    icon: "🌳",
    description: "Alam dan lingkungan",
    wordCount: 40
  },
  {
    id: "house",
    name: "Rumah",
    nameAr: "البيت",
    icon: "🏠",
    description: "Ruangan dan perabotan rumah",
    wordCount: 45
  },
  {
    id: "clothes",
    name: "Pakaian",
    nameAr: "الملابس",
    icon: "👕",
    description: "Jenis-jenis pakaian",
    wordCount: 30
  },
  {
    id: "education",
    name: "Pendidikan",
    nameAr: "التعليم",
    icon: "📚",
    description: "Kata-kata terkait sekolah dan belajar",
    wordCount: 40
  },
  {
    id: "work",
    name: "Pekerjaan",
    nameAr: "العمل",
    icon: "💼",
    description: "Profesi dan pekerjaan",
    wordCount: 35
  },
  {
    id: "transport",
    name: "Transportasi",
    nameAr: "المواصلات",
    icon: "🚗",
    description: "Alat transportasi",
    wordCount: 25
  },
  {
    id: "emotions",
    name: "Emosi",
    nameAr: "المشاعر",
    icon: "😊",
    description: "Perasaan dan emosi",
    wordCount: 30
  },
  {
    id: "religion",
    name: "Agama",
    nameAr: "الدين",
    icon: "🕌",
    description: "Kata-kata terkait agama",
    wordCount: 40
  }
];

export const vocabulary: VocabularyWord[] = [
  // Keluarga
  {
    id: "family-1",
    arabic: "أُسْرَة",
    indonesian: "Keluarga",
    english: "Family",
    transliteration: "usrah",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun",
    example: {
      arabic: "هَذِهِ أُسْرَتِي",
      indonesian: "Ini keluarga saya",
      transliteration: "hādhihi usratī"
    }
  },
  {
    id: "family-2",
    arabic: "أَب",
    indonesian: "Ayah",
    english: "Father",
    transliteration: "ab",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun",
    example: {
      arabic: "أَبِي طَبِيب",
      indonesian: "Ayah saya dokter",
      transliteration: "abī ṭabīb"
    }
  },
  {
    id: "family-3",
    arabic: "أُمّ",
    indonesian: "Ibu",
    english: "Mother",
    transliteration: "umm",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun",
    example: {
      arabic: "أُمِّي مُدَرِّسَة",
      indonesian: "Ibu saya guru",
      transliteration: "ummī mudarrisah"
    }
  },
  {
    id: "family-4",
    arabic: "أَخ",
    indonesian: "Saudara laki-laki",
    english: "Brother",
    transliteration: "akh",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "family-5",
    arabic: "أُخْت",
    indonesian: "Saudara perempuan",
    english: "Sister",
    transliteration: "ukht",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "family-6",
    arabic: "جَدّ",
    indonesian: "Kakek",
    english: "Grandfather",
    transliteration: "jadd",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "family-7",
    arabic: "جَدَّة",
    indonesian: "Nenek",
    english: "Grandmother",
    transliteration: "jaddah",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "family-8",
    arabic: "ابْن",
    indonesian: "Anak laki-laki",
    english: "Son",
    transliteration: "ibn",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "family-9",
    arabic: "بِنْت",
    indonesian: "Anak perempuan",
    english: "Daughter",
    transliteration: "bint",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "family-10",
    arabic: "زَوْج",
    indonesian: "Suami",
    english: "Husband",
    transliteration: "zawj",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "family-11",
    arabic: "زَوْجَة",
    indonesian: "Istri",
    english: "Wife",
    transliteration: "zawjah",
    category: "family",
    level: "beginner",
    partOfSpeech: "noun"
  },
  
  // Tubuh
  {
    id: "body-1",
    arabic: "رَأْس",
    indonesian: "Kepala",
    english: "Head",
    transliteration: "ra's",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "body-2",
    arabic: "عَيْن",
    indonesian: "Mata",
    english: "Eye",
    transliteration: "'ayn",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "body-3",
    arabic: "أُذُن",
    indonesian: "Telinga",
    english: "Ear",
    transliteration: "udhun",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "body-4",
    arabic: "أَنْف",
    indonesian: "Hidung",
    english: "Nose",
    transliteration: "anf",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "body-5",
    arabic: "فَم",
    indonesian: "Mulut",
    english: "Mouth",
    transliteration: "fam",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "body-6",
    arabic: "يَد",
    indonesian: "Tangan",
    english: "Hand",
    transliteration: "yad",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "body-7",
    arabic: "رِجْل",
    indonesian: "Kaki",
    english: "Leg/Foot",
    transliteration: "rijl",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "body-8",
    arabic: "قَلْب",
    indonesian: "Jantung",
    english: "Heart",
    transliteration: "qalb",
    category: "body",
    level: "beginner",
    partOfSpeech: "noun"
  },
  
  // Makanan
  {
    id: "food-1",
    arabic: "خُبْز",
    indonesian: "Roti",
    english: "Bread",
    transliteration: "khubz",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-2",
    arabic: "أَرُزّ",
    indonesian: "Nasi",
    english: "Rice",
    transliteration: "aruzz",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-3",
    arabic: "لَحْم",
    indonesian: "Daging",
    english: "Meat",
    transliteration: "laḥm",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-4",
    arabic: "دَجَاج",
    indonesian: "Ayam",
    english: "Chicken",
    transliteration: "dajāj",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-5",
    arabic: "سَمَك",
    indonesian: "Ikan",
    english: "Fish",
    transliteration: "samak",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-6",
    arabic: "مَاء",
    indonesian: "Air",
    english: "Water",
    transliteration: "mā'",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-7",
    arabic: "حَلِيب",
    indonesian: "Susu",
    english: "Milk",
    transliteration: "ḥalīb",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-8",
    arabic: "قَهْوَة",
    indonesian: "Kopi",
    english: "Coffee",
    transliteration: "qahwah",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-9",
    arabic: "شَاي",
    indonesian: "Teh",
    english: "Tea",
    transliteration: "shāy",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "food-10",
    arabic: "فَاكِهَة",
    indonesian: "Buah",
    english: "Fruit",
    transliteration: "fākihah",
    category: "food",
    level: "beginner",
    partOfSpeech: "noun"
  },
  
  // Hewan
  {
    id: "animal-1",
    arabic: "قِطّ",
    indonesian: "Kucing",
    english: "Cat",
    transliteration: "qiṭṭ",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-2",
    arabic: "كَلْب",
    indonesian: "Anjing",
    english: "Dog",
    transliteration: "kalb",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-3",
    arabic: "حِصَان",
    indonesian: "Kuda",
    english: "Horse",
    transliteration: "ḥiṣān",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-4",
    arabic: "بَقَرَة",
    indonesian: "Sapi",
    english: "Cow",
    transliteration: "baqarah",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-5",
    arabic: "خَرُوف",
    indonesian: "Domba",
    english: "Sheep",
    transliteration: "kharūf",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-6",
    arabic: "جَمَل",
    indonesian: "Unta",
    english: "Camel",
    transliteration: "jamal",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-7",
    arabic: "أَسَد",
    indonesian: "Singa",
    english: "Lion",
    transliteration: "asad",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-8",
    arabic: "فِيل",
    indonesian: "Gajah",
    english: "Elephant",
    transliteration: "fīl",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-9",
    arabic: "طَائِر",
    indonesian: "Burung",
    english: "Bird",
    transliteration: "ṭā'ir",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "animal-10",
    arabic: "سَمَكَة",
    indonesian: "Ikan",
    english: "Fish",
    transliteration: "samakah",
    category: "animals",
    level: "beginner",
    partOfSpeech: "noun"
  },
  
  // Warna
  {
    id: "color-1",
    arabic: "أَحْمَر",
    indonesian: "Merah",
    english: "Red",
    transliteration: "aḥmar",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-2",
    arabic: "أَزْرَق",
    indonesian: "Biru",
    english: "Blue",
    transliteration: "azraq",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-3",
    arabic: "أَخْضَر",
    indonesian: "Hijau",
    english: "Green",
    transliteration: "akhḍar",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-4",
    arabic: "أَصْفَر",
    indonesian: "Kuning",
    english: "Yellow",
    transliteration: "aṣfar",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-5",
    arabic: "أَسْوَد",
    indonesian: "Hitam",
    english: "Black",
    transliteration: "aswad",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-6",
    arabic: "أَبْيَض",
    indonesian: "Putih",
    english: "White",
    transliteration: "abyaḍ",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-7",
    arabic: "بُرْتُقَالِيّ",
    indonesian: "Oranye",
    english: "Orange",
    transliteration: "burtuqālī",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-8",
    arabic: "بَنَفْسَجِيّ",
    indonesian: "Ungu",
    english: "Purple",
    transliteration: "banafsajī",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-9",
    arabic: "رَمَادِيّ",
    indonesian: "Abu-abu",
    english: "Gray",
    transliteration: "ramādī",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  {
    id: "color-10",
    arabic: "بُنِّيّ",
    indonesian: "Coklat",
    english: "Brown",
    transliteration: "bunnī",
    category: "colors",
    level: "beginner",
    partOfSpeech: "adjective"
  },
  
  // Angka
  {
    id: "number-1",
    arabic: "وَاحِد",
    indonesian: "Satu",
    english: "One",
    transliteration: "wāḥid",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-2",
    arabic: "اِثْنَان",
    indonesian: "Dua",
    english: "Two",
    transliteration: "ithnān",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-3",
    arabic: "ثَلَاثَة",
    indonesian: "Tiga",
    english: "Three",
    transliteration: "thalāthah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-4",
    arabic: "أَرْبَعَة",
    indonesian: "Empat",
    english: "Four",
    transliteration: "arba'ah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-5",
    arabic: "خَمْسَة",
    indonesian: "Lima",
    english: "Five",
    transliteration: "khamsah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-6",
    arabic: "سِتَّة",
    indonesian: "Enam",
    english: "Six",
    transliteration: "sittah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-7",
    arabic: "سَبْعَة",
    indonesian: "Tujuh",
    english: "Seven",
    transliteration: "sab'ah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-8",
    arabic: "ثَمَانِيَة",
    indonesian: "Delapan",
    english: "Eight",
    transliteration: "thamāniyah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-9",
    arabic: "تِسْعَة",
    indonesian: "Sembilan",
    english: "Nine",
    transliteration: "tis'ah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "number-10",
    arabic: "عَشَرَة",
    indonesian: "Sepuluh",
    english: "Ten",
    transliteration: "'asharah",
    category: "numbers",
    level: "beginner",
    partOfSpeech: "noun"
  }
];