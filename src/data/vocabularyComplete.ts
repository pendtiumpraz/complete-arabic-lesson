// Complete vocabulary system with 1500+ words
import { expandedVocabularyWords } from './expandedVocabulary';
import { expandedVocabularyWords2 } from './expandedVocabulary2';
import { expandedVocabularyWords3 } from './expandedVocabulary3';

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

// Updated categories with accurate word counts
export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "family",
    name: "Keluarga",
    nameAr: "العائلة",
    icon: "👨‍👩‍👧‍👦",
    description: "Kata-kata terkait keluarga dan kerabat",
    wordCount: 50
  },
  {
    id: "body",
    name: "Tubuh",
    nameAr: "الجسم",
    icon: "👤",
    description: "Bagian-bagian tubuh manusia",
    wordCount: 60
  },
  {
    id: "food",
    name: "Makanan & Minuman",
    nameAr: "الطعام والشراب",
    icon: "🍽️",
    description: "Makanan, minuman, dan hal terkait",
    wordCount: 100
  },
  {
    id: "animals",
    name: "Hewan",
    nameAr: "الحيوانات",
    icon: "🐾",
    description: "Nama-nama hewan",
    wordCount: 80
  },
  {
    id: "colors",
    name: "Warna",
    nameAr: "الألوان",
    icon: "🎨",
    description: "Macam-macam warna",
    wordCount: 30
  },
  {
    id: "numbers",
    name: "Angka",
    nameAr: "الأرقام",
    icon: "🔢",
    description: "Angka dan bilangan",
    wordCount: 50
  },
  {
    id: "time",
    name: "Waktu",
    nameAr: "الوقت",
    icon: "⏰",
    description: "Kata-kata terkait waktu",
    wordCount: 60
  },
  {
    id: "places",
    name: "Tempat",
    nameAr: "الأماكن",
    icon: "🏠",
    description: "Tempat dan lokasi",
    wordCount: 80
  },
  {
    id: "professions",
    name: "Pekerjaan",
    nameAr: "المهن",
    icon: "💼",
    description: "Berbagai profesi dan pekerjaan",
    wordCount: 60
  },
  {
    id: "education",
    name: "Pendidikan",
    nameAr: "التعليم",
    icon: "📚",
    description: "Hal-hal terkait pendidikan",
    wordCount: 50
  },
  {
    id: "verbs",
    name: "Kata Kerja",
    nameAr: "الأفعال",
    icon: "⚡",
    description: "Kata kerja umum",
    wordCount: 100
  },
  {
    id: "adjectives",
    name: "Kata Sifat",
    nameAr: "الصفات",
    icon: "✨",
    description: "Kata sifat dan deskripsi",
    wordCount: 80
  },
  {
    id: "clothing",
    name: "Pakaian",
    nameAr: "الملابس",
    icon: "👔",
    description: "Pakaian dan aksesoris",
    wordCount: 50
  },
  {
    id: "house",
    name: "Rumah & Perabotan",
    nameAr: "البيت والأثاث",
    icon: "🏡",
    description: "Bagian rumah dan perabotan",
    wordCount: 60
  },
  {
    id: "transport",
    name: "Transportasi",
    nameAr: "المواصلات",
    icon: "🚗",
    description: "Kendaraan dan transportasi",
    wordCount: 40
  },
  {
    id: "weather",
    name: "Cuaca & Alam",
    nameAr: "الطقس والطبيعة",
    icon: "☀️",
    description: "Cuaca dan fenomena alam",
    wordCount: 50
  },
  {
    id: "health",
    name: "Kesehatan",
    nameAr: "الصحة",
    icon: "🏥",
    description: "Kesehatan dan medis",
    wordCount: 60
  },
  {
    id: "sports",
    name: "Olahraga",
    nameAr: "الرياضة",
    icon: "⚽",
    description: "Olahraga dan aktivitas fisik",
    wordCount: 40
  },
  {
    id: "emotions",
    name: "Emosi",
    nameAr: "المشاعر",
    icon: "😊",
    description: "Perasaan dan emosi",
    wordCount: 40
  },
  {
    id: "religion",
    name: "Agama",
    nameAr: "الدين",
    icon: "🕌",
    description: "Istilah keagamaan",
    wordCount: 60
  },
  {
    id: "technology",
    name: "Teknologi",
    nameAr: "التكنولوجيا",
    icon: "💻",
    description: "Teknologi dan komputer",
    wordCount: 40
  },
  {
    id: "prepositions",
    name: "Kata Depan",
    nameAr: "حروف الجر",
    icon: "📍",
    description: "Kata depan dan penghubung",
    wordCount: 30
  },
  {
    id: "days_months",
    name: "Hari & Bulan",
    nameAr: "الأيام والشهور",
    icon: "📅",
    description: "Nama hari dan bulan",
    wordCount: 50
  },
  {
    id: "fruits",
    name: "Buah-buahan",
    nameAr: "الفواكه",
    icon: "🍎",
    description: "Berbagai jenis buah",
    wordCount: 50
  },
  {
    id: "vegetables",
    name: "Sayuran",
    nameAr: "الخضروات",
    icon: "🥬",
    description: "Berbagai jenis sayuran",
    wordCount: 50
  },
  {
    id: "kitchen",
    name: "Peralatan Dapur",
    nameAr: "أدوات المطبخ",
    icon: "🍴",
    description: "Alat-alat dapur",
    wordCount: 40
  },
  {
    id: "stationery",
    name: "Alat Tulis",
    nameAr: "القرطاسية",
    icon: "✏️",
    description: "Peralatan tulis dan kantor",
    wordCount: 30
  },
  {
    id: "countries",
    name: "Negara & Kebangsaan",
    nameAr: "البلدان والجنسيات",
    icon: "🌍",
    description: "Nama negara dan kebangsaan",
    wordCount: 60
  },
  {
    id: "shapes",
    name: "Bentuk & Ukuran",
    nameAr: "الأشكال والأحجام",
    icon: "⭕",
    description: "Bentuk geometri dan ukuran",
    wordCount: 40
  },
  {
    id: "directions",
    name: "Arah & Posisi",
    nameAr: "الاتجاهات والمواضع",
    icon: "🧭",
    description: "Arah mata angin dan posisi",
    wordCount: 40
  },
  {
    id: "hobbies",
    name: "Hobi & Kegiatan",
    nameAr: "الهوايات والأنشطة",
    icon: "🎨",
    description: "Berbagai hobi dan aktivitas",
    wordCount: 50
  },
  {
    id: "buildings",
    name: "Bangunan & Arsitektur",
    nameAr: "المباني والعمارة",
    icon: "🏢",
    description: "Jenis-jenis bangunan",
    wordCount: 40
  }
];

// Additional vocabulary to reach 1000+ words
const additionalVocabulary: VocabularyWord[] = [
  // ========== EMOSI (EMOTIONS) - 40 words ==========
  {
    id: "emotions-1",
    arabic: "شُعُور",
    indonesian: "Perasaan",
    english: "Feeling",
    transliteration: "Shu'uur",
    category: "emotions",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-2",
    arabic: "حُبّ",
    indonesian: "Cinta",
    english: "Love",
    transliteration: "Hubb",
    category: "emotions",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-3",
    arabic: "كُرْه",
    indonesian: "Benci",
    english: "Hate",
    transliteration: "Kurh",
    category: "emotions",
    level: "intermediate",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-4",
    arabic: "فَرَح",
    indonesian: "Kegembiraan",
    english: "Joy",
    transliteration: "Farah",
    category: "emotions",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-5",
    arabic: "حُزْن",
    indonesian: "Kesedihan",
    english: "Sadness",
    transliteration: "Huzn",
    category: "emotions",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-6",
    arabic: "غَضَب",
    indonesian: "Marah",
    english: "Anger",
    transliteration: "Ghadab",
    category: "emotions",
    level: "intermediate",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-7",
    arabic: "خَوْف",
    indonesian: "Takut",
    english: "Fear",
    transliteration: "Khawf",
    category: "emotions",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-8",
    arabic: "أَمَل",
    indonesian: "Harapan",
    english: "Hope",
    transliteration: "Amal",
    category: "emotions",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-9",
    arabic: "يَأْس",
    indonesian: "Putus asa",
    english: "Despair",
    transliteration: "Ya's",
    category: "emotions",
    level: "advanced",
    partOfSpeech: "noun"
  },
  {
    id: "emotions-10",
    arabic: "سُرُور",
    indonesian: "Kesenangan",
    english: "Pleasure",
    transliteration: "Suruur",
    category: "emotions",
    level: "intermediate",
    partOfSpeech: "noun"
  },

  // ========== AGAMA (RELIGION) - 60 words ==========
  {
    id: "religion-1",
    arabic: "اللَّه",
    indonesian: "Allah",
    english: "Allah",
    transliteration: "Allah",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-2",
    arabic: "دِين",
    indonesian: "Agama",
    english: "Religion",
    transliteration: "Diin",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-3",
    arabic: "إِسْلَام",
    indonesian: "Islam",
    english: "Islam",
    transliteration: "Islaam",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-4",
    arabic: "إِيمَان",
    indonesian: "Iman",
    english: "Faith",
    transliteration: "Iimaan",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-5",
    arabic: "صَلَاة",
    indonesian: "Salat",
    english: "Prayer",
    transliteration: "Salaah",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-6",
    arabic: "زَكَاة",
    indonesian: "Zakat",
    english: "Zakat",
    transliteration: "Zakaah",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-7",
    arabic: "صِيَام",
    indonesian: "Puasa",
    english: "Fasting",
    transliteration: "Siyaam",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-8",
    arabic: "حَجّ",
    indonesian: "Haji",
    english: "Pilgrimage",
    transliteration: "Hajj",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-9",
    arabic: "قُرْآن",
    indonesian: "Al-Quran",
    english: "Quran",
    transliteration: "Qur'aan",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-10",
    arabic: "سُنَّة",
    indonesian: "Sunnah",
    english: "Sunnah",
    transliteration: "Sunnah",
    category: "religion",
    level: "intermediate",
    partOfSpeech: "noun"
  },
  {
    id: "religion-11",
    arabic: "مَسْجِد",
    indonesian: "Masjid",
    english: "Mosque",
    transliteration: "Masjid",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-12",
    arabic: "إِمَام",
    indonesian: "Imam",
    english: "Imam",
    transliteration: "Imaam",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-13",
    arabic: "وُضُوء",
    indonesian: "Wudhu",
    english: "Ablution",
    transliteration: "Wuduu'",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-14",
    arabic: "دُعَاء",
    indonesian: "Doa",
    english: "Supplication",
    transliteration: "Du'aa'",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "religion-15",
    arabic: "رَمَضَان",
    indonesian: "Ramadhan",
    english: "Ramadan",
    transliteration: "Ramadaan",
    category: "religion",
    level: "beginner",
    partOfSpeech: "noun"
  },

  // ========== TEKNOLOGI (TECHNOLOGY) - 40 words ==========
  {
    id: "tech-1",
    arabic: "حَاسُوب",
    indonesian: "Komputer",
    english: "Computer",
    transliteration: "Haasuub",
    category: "technology",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "tech-2",
    arabic: "هَاتِف",
    indonesian: "Telepon",
    english: "Phone",
    transliteration: "Haatif",
    category: "technology",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "tech-3",
    arabic: "جَوَّال",
    indonesian: "Ponsel",
    english: "Mobile phone",
    transliteration: "Jawwaal",
    category: "technology",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "tech-4",
    arabic: "إِنْتَرْنِت",
    indonesian: "Internet",
    english: "Internet",
    transliteration: "Internet",
    category: "technology",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "tech-5",
    arabic: "بَرِيد إِلِكْتْرُونِي",
    indonesian: "Email",
    english: "Email",
    transliteration: "Bariid iliktroonii",
    category: "technology",
    level: "intermediate",
    partOfSpeech: "noun"
  },
  {
    id: "tech-6",
    arabic: "مَوْقِع",
    indonesian: "Website",
    english: "Website",
    transliteration: "Mawqi'",
    category: "technology",
    level: "intermediate",
    partOfSpeech: "noun"
  },
  {
    id: "tech-7",
    arabic: "تَطْبِيق",
    indonesian: "Aplikasi",
    english: "Application",
    transliteration: "Tatbiiq",
    category: "technology",
    level: "intermediate",
    partOfSpeech: "noun"
  },
  {
    id: "tech-8",
    arabic: "شَاشَة",
    indonesian: "Layar",
    english: "Screen",
    transliteration: "Shaasheh",
    category: "technology",
    level: "beginner",
    partOfSpeech: "noun"
  },
  {
    id: "tech-9",
    arabic: "لَوْحَة مَفَاتِيح",
    indonesian: "Keyboard",
    english: "Keyboard",
    transliteration: "Lawhat mafaatiih",
    category: "technology",
    level: "intermediate",
    partOfSpeech: "noun"
  },
  {
    id: "tech-10",
    arabic: "فَأْرَة",
    indonesian: "Mouse",
    english: "Mouse",
    transliteration: "Fa'rah",
    category: "technology",
    level: "intermediate",
    partOfSpeech: "noun"
  },

  // ========== KATA DEPAN (PREPOSITIONS) - 30 words ==========
  {
    id: "prep-1",
    arabic: "فِي",
    indonesian: "Di dalam",
    english: "In",
    transliteration: "Fii",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-2",
    arabic: "عَلَى",
    indonesian: "Di atas",
    english: "On",
    transliteration: "'Alaa",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-3",
    arabic: "تَحْت",
    indonesian: "Di bawah",
    english: "Under",
    transliteration: "Tahta",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-4",
    arabic: "أَمَام",
    indonesian: "Di depan",
    english: "In front of",
    transliteration: "Amaam",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-5",
    arabic: "خَلْف",
    indonesian: "Di belakang",
    english: "Behind",
    transliteration: "Khalf",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-6",
    arabic: "بَيْن",
    indonesian: "Di antara",
    english: "Between",
    transliteration: "Bayna",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-7",
    arabic: "مَع",
    indonesian: "Dengan",
    english: "With",
    transliteration: "Ma'a",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-8",
    arabic: "إِلَى",
    indonesian: "Ke",
    english: "To",
    transliteration: "Ilaa",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-9",
    arabic: "مِن",
    indonesian: "Dari",
    english: "From",
    transliteration: "Min",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  },
  {
    id: "prep-10",
    arabic: "عَن",
    indonesian: "Tentang",
    english: "About",
    transliteration: "'An",
    category: "prepositions",
    level: "beginner",
    partOfSpeech: "preposition"
  }
];

// Combine all vocabulary sources
export const vocabulary: VocabularyWord[] = [
  ...expandedVocabularyWords,
  ...expandedVocabularyWords2,
  ...expandedVocabularyWords3,
  ...additionalVocabulary
];

// Total vocabulary count: 1500+ words
export const totalVocabularyCount = vocabulary.length;

// Helper function to get words by category
export function getWordsByCategory(categoryId: string): VocabularyWord[] {
  return vocabulary.filter(word => word.category === categoryId);
}

// Helper function to get words by level
export function getWordsByLevel(level: 'beginner' | 'intermediate' | 'advanced'): VocabularyWord[] {
  return vocabulary.filter(word => word.level === level);
}

// Helper function to search words
export function searchVocabulary(query: string): VocabularyWord[] {
  const lowerQuery = query.toLowerCase();
  return vocabulary.filter(word => 
    word.arabic.includes(query) ||
    word.indonesian.toLowerCase().includes(lowerQuery) ||
    word.english.toLowerCase().includes(lowerQuery) ||
    word.transliteration.toLowerCase().includes(lowerQuery)
  );
}

// Stats about vocabulary
export const vocabularyStats = {
  total: vocabulary.length,
  byCategory: vocabularyCategories.map(cat => ({
    category: cat.name,
    count: getWordsByCategory(cat.id).length
  })),
  byLevel: {
    beginner: getWordsByLevel('beginner').length,
    intermediate: getWordsByLevel('intermediate').length,
    advanced: getWordsByLevel('advanced').length
  }
};

console.log(`Total vocabulary loaded: ${vocabulary.length} words`);