export interface Conversation {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  dialogue: {
    speaker: string;
    arabic: string;
    indonesian: string;
    transliteration: string;
  }[];
  vocabulary?: {
    arabic: string;
    indonesian: string;
    transliteration: string;
  }[];
  grammarNotes?: string[];
}

export const conversationCategories = [
  { id: 'greetings', name: 'Salam & Perkenalan', nameAr: 'التحية والتعارف' },
  { id: 'shopping', name: 'Berbelanja', nameAr: 'التسوق' },
  { id: 'restaurant', name: 'Di Restoran', nameAr: 'في المطعم' },
  { id: 'travel', name: 'Perjalanan', nameAr: 'السفر' },
  { id: 'directions', name: 'Arah & Lokasi', nameAr: 'الاتجاهات' },
  { id: 'time', name: 'Waktu & Jadwal', nameAr: 'الوقت والجدول' },
  { id: 'weather', name: 'Cuaca', nameAr: 'الطقس' },
  { id: 'health', name: 'Kesehatan', nameAr: 'الصحة' },
  { id: 'education', name: 'Pendidikan', nameAr: 'التعليم' },
  { id: 'work', name: 'Pekerjaan', nameAr: 'العمل' }
];

export const dailyConversations: Conversation[] = [
  // GREETINGS & INTRODUCTIONS
  {
    id: 'conv-1',
    title: 'Perkenalan Pertama',
    titleAr: 'التعارف الأول',
    category: 'greetings',
    level: 'beginner',
    dialogue: [
      {
        speaker: 'أحمد',
        arabic: 'السَّلَامُ عَلَيْكُمْ',
        indonesian: 'Assalamualaikum',
        transliteration: 'As-salāmu ʿalaykum'
      },
      {
        speaker: 'فاطمة',
        arabic: 'وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللهِ',
        indonesian: 'Waalaikumsalam warahmatullah',
        transliteration: 'Wa ʿalaykumu s-salāmu wa raḥmatu l-lāh'
      },
      {
        speaker: 'أحمد',
        arabic: 'مَا اسْمُكِ؟',
        indonesian: 'Siapa namamu? (perempuan)',
        transliteration: 'Mā ismuki?'
      },
      {
        speaker: 'فاطمة',
        arabic: 'اِسْمِي فَاطِمَة، وَأَنْتَ؟',
        indonesian: 'Nama saya Fatimah, dan kamu?',
        transliteration: 'Ismī Fāṭima, wa anta?'
      },
      {
        speaker: 'أحمد',
        arabic: 'أَنَا أَحْمَد، تَشَرَّفْتُ بِمَعْرِفَتِكِ',
        indonesian: 'Saya Ahmad, senang berkenalan denganmu',
        transliteration: 'Anā Aḥmad, tasharraftu bi maʿrifatiki'
      },
      {
        speaker: 'فاطمة',
        arabic: 'وَأَنَا أَيْضًا، أَهْلًا وَسَهْلًا',
        indonesian: 'Saya juga, selamat datang',
        transliteration: 'Wa anā ayḍan, ahlan wa sahlan'
      }
    ],
    vocabulary: [
      { arabic: 'اِسْم', indonesian: 'nama', transliteration: 'ism' },
      { arabic: 'تَشَرَّفْتُ', indonesian: 'senang/terhormat', transliteration: 'tasharraftu' },
      { arabic: 'مَعْرِفَة', indonesian: 'perkenalan', transliteration: 'maʿrifa' }
    ],
    grammarNotes: [
      'مَا (mā) digunakan untuk bertanya "apa"',
      'Suffix كِ (ki) untuk kata ganti perempuan',
      'Suffix كَ (ka) untuk kata ganti laki-laki'
    ]
  },
  {
    id: 'conv-2',
    title: 'Menanyakan Kabar',
    titleAr: 'السؤال عن الحال',
    category: 'greetings',
    level: 'beginner',
    dialogue: [
      {
        speaker: 'علي',
        arabic: 'صَبَاحُ الخَيْرِ',
        indonesian: 'Selamat pagi',
        transliteration: 'Ṣabāḥu l-khayr'
      },
      {
        speaker: 'عائشة',
        arabic: 'صَبَاحُ النُّورِ',
        indonesian: 'Selamat pagi juga',
        transliteration: 'Ṣabāḥu n-nūr'
      },
      {
        speaker: 'علي',
        arabic: 'كَيْفَ حَالُكِ؟',
        indonesian: 'Bagaimana kabarmu?',
        transliteration: 'Kayfa ḥāluki?'
      },
      {
        speaker: 'عائشة',
        arabic: 'أَنَا بِخَيْرٍ، الحَمْدُ لِلَّهِ. وَأَنْتَ؟',
        indonesian: 'Saya baik-baik saja, alhamdulillah. Dan kamu?',
        transliteration: 'Anā bi-khayrin, al-ḥamdu li-llāh. Wa anta?'
      },
      {
        speaker: 'علي',
        arabic: 'أَنَا أَيْضًا بِخَيْرٍ، شُكْرًا',
        indonesian: 'Saya juga baik-baik saja, terima kasih',
        transliteration: 'Anā ayḍan bi-khayrin, shukran'
      }
    ],
    vocabulary: [
      { arabic: 'صَبَاح', indonesian: 'pagi', transliteration: 'ṣabāḥ' },
      { arabic: 'خَيْر', indonesian: 'kebaikan', transliteration: 'khayr' },
      { arabic: 'حَال', indonesian: 'keadaan/kabar', transliteration: 'ḥāl' }
    ]
  },

  // SHOPPING
  {
    id: 'conv-3',
    title: 'Di Pasar',
    titleAr: 'في السوق',
    category: 'shopping',
    level: 'beginner',
    dialogue: [
      {
        speaker: 'المشتري',
        arabic: 'بِكَمْ هَذَا التُّفَّاحُ؟',
        indonesian: 'Berapa harga apel ini?',
        transliteration: 'Bi-kam hādhā t-tuffāḥ?'
      },
      {
        speaker: 'البائع',
        arabic: 'بِخَمْسَةِ رِيَالَاتٍ لِلْكِيلُو',
        indonesian: 'Lima riyal per kilo',
        transliteration: 'Bi-khamsati riyālātin li-l-kīlū'
      },
      {
        speaker: 'المشتري',
        arabic: 'هَلْ يُمْكِنُ التَّخْفِيضُ؟',
        indonesian: 'Bisa dikurangi?',
        transliteration: 'Hal yumkinu t-takhfīḍ?'
      },
      {
        speaker: 'البائع',
        arabic: 'آسِف، السِّعْرُ ثَابِتٌ',
        indonesian: 'Maaf, harga pas',
        transliteration: 'Āsif, as-siʿru thābit'
      },
      {
        speaker: 'المشتري',
        arabic: 'حَسَنًا، أُرِيدُ كِيلُو وَاحِدًا',
        indonesian: 'Baiklah, saya mau satu kilo',
        transliteration: 'Ḥasanan, urīdu kīlū wāḥidan'
      },
      {
        speaker: 'البائع',
        arabic: 'تَفَضَّلْ، شُكْرًا لَكَ',
        indonesian: 'Silakan, terima kasih',
        transliteration: 'Tafaḍḍal, shukran laka'
      }
    ],
    vocabulary: [
      { arabic: 'سُوق', indonesian: 'pasar', transliteration: 'sūq' },
      { arabic: 'سِعْر', indonesian: 'harga', transliteration: 'siʿr' },
      { arabic: 'تَخْفِيض', indonesian: 'diskon', transliteration: 'takhfīḍ' }
    ]
  },

  // RESTAURANT
  {
    id: 'conv-4',
    title: 'Memesan Makanan',
    titleAr: 'طلب الطعام',
    category: 'restaurant',
    level: 'intermediate',
    dialogue: [
      {
        speaker: 'النادل',
        arabic: 'أَهْلًا وَسَهْلًا، تَفَضَّلُوا بِالجُلُوسِ',
        indonesian: 'Selamat datang, silakan duduk',
        transliteration: 'Ahlan wa sahlan, tafaḍḍalū bi-l-julūs'
      },
      {
        speaker: 'الزبون',
        arabic: 'شُكْرًا، هَلْ يُمْكِنُنِي رُؤْيَةُ القَائِمَةِ؟',
        indonesian: 'Terima kasih, boleh lihat menu?',
        transliteration: 'Shukran, hal yumkinunī ruʾyatu l-qāʾima?'
      },
      {
        speaker: 'النادل',
        arabic: 'بِالتَّأْكِيدِ، هَذِهِ القَائِمَةُ. مَا الَّذِي تُرِيدُونَ؟',
        indonesian: 'Tentu, ini menunya. Apa yang Anda inginkan?',
        transliteration: 'Bi-t-taʾkīd, hādhihi l-qāʾima. Mā lladhī turīdūn?'
      },
      {
        speaker: 'الزبون',
        arabic: 'أُرِيدُ الأَرُزَّ بِاللَّحْمِ وَعَصِيرَ البُرْتُقَالِ',
        indonesian: 'Saya mau nasi dengan daging dan jus jeruk',
        transliteration: 'Urīdu l-aruzza bi-l-laḥmi wa ʿaṣīra l-burtuqāl'
      },
      {
        speaker: 'النادل',
        arabic: 'مُمْتَازٌ، هَلْ تُرِيدُ شَيْئًا آخَرَ؟',
        indonesian: 'Baik, apa ada yang lain?',
        transliteration: 'Mumtāz, hal turīdu shayʾan ākhar?'
      },
      {
        speaker: 'الزبون',
        arabic: 'لَا، هَذَا كَافٍ. كَمْ الحِسَابُ؟',
        indonesian: 'Tidak, ini cukup. Berapa totalnya?',
        transliteration: 'Lā, hādhā kāfin. Kam al-ḥisāb?'
      },
      {
        speaker: 'النادل',
        arabic: 'عِشْرُونَ رِيَالًا',
        indonesian: 'Dua puluh riyal',
        transliteration: 'ʿIshrūna riyālan'
      }
    ],
    vocabulary: [
      { arabic: 'قَائِمَة', indonesian: 'menu/daftar', transliteration: 'qāʾima' },
      { arabic: 'طَعَام', indonesian: 'makanan', transliteration: 'ṭaʿām' },
      { arabic: 'حِسَاب', indonesian: 'tagihan', transliteration: 'ḥisāb' }
    ]
  },

  // TRAVEL
  {
    id: 'conv-5',
    title: 'Di Bandara',
    titleAr: 'في المطار',
    category: 'travel',
    level: 'intermediate',
    dialogue: [
      {
        speaker: 'المسافر',
        arabic: 'عَفْوًا، أَيْنَ مَكْتَبُ التَّسْجِيلِ؟',
        indonesian: 'Permisi, di mana konter check-in?',
        transliteration: 'ʿAfwan, ayna maktabu t-tasjīl?'
      },
      {
        speaker: 'الموظف',
        arabic: 'اِذْهَبْ مُبَاشَرَةً ثُمَّ اِنْعَطِفْ يَمِينًا',
        indonesian: 'Jalan lurus lalu belok kanan',
        transliteration: 'Idh-hab mubāsharatan thumma inʿaṭif yamīnan'
      },
      {
        speaker: 'المسافر',
        arabic: 'هَلْ الطَّائِرَةُ فِي الوَقْتِ المُحَدَّدِ؟',
        indonesian: 'Apakah pesawat tepat waktu?',
        transliteration: 'Hal aṭ-ṭāʾiratu fī l-waqti l-muḥaddad?'
      },
      {
        speaker: 'الموظف',
        arabic: 'نَعَمْ، سَتُقْلِعُ فِي السَّاعَةِ العَاشِرَةِ',
        indonesian: 'Ya, akan lepas landas jam 10',
        transliteration: 'Naʿam, sa-tuqliʿu fī s-sāʿati l-ʿāshira'
      },
      {
        speaker: 'المسافر',
        arabic: 'مَا رَقْمُ البَوَّابَةِ؟',
        indonesian: 'Berapa nomor gerbangnya?',
        transliteration: 'Mā raqmu l-bawwāba?'
      },
      {
        speaker: 'الموظف',
        arabic: 'البَوَّابَةُ رَقْمُ خَمْسَةَ عَشَرَ',
        indonesian: 'Gerbang nomor 15',
        transliteration: 'Al-bawwābatu raqmu khamsata ʿashar'
      }
    ],
    vocabulary: [
      { arabic: 'مَطَار', indonesian: 'bandara', transliteration: 'maṭār' },
      { arabic: 'طَائِرَة', indonesian: 'pesawat', transliteration: 'ṭāʾira' },
      { arabic: 'إِقْلَاع', indonesian: 'lepas landas', transliteration: 'iqlāʿ' }
    ]
  },

  // DIRECTIONS
  {
    id: 'conv-6',
    title: 'Menanyakan Arah',
    titleAr: 'السؤال عن الاتجاه',
    category: 'directions',
    level: 'beginner',
    dialogue: [
      {
        speaker: 'السائح',
        arabic: 'عَفْوًا، أَيْنَ المَسْجِدُ؟',
        indonesian: 'Permisi, di mana masjid?',
        transliteration: 'ʿAfwan, ayna l-masjid?'
      },
      {
        speaker: 'المار',
        arabic: 'المَسْجِدُ قَرِيبٌ مِنْ هُنَا',
        indonesian: 'Masjid dekat dari sini',
        transliteration: 'Al-masjidu qarībun min hunā'
      },
      {
        speaker: 'السائح',
        arabic: 'كَيْفَ أَذْهَبُ إِلَى هُنَاكَ؟',
        indonesian: 'Bagaimana cara ke sana?',
        transliteration: 'Kayfa adh-habu ilā hunāk?'
      },
      {
        speaker: 'المار',
        arabic: 'اِمْشِ مُبَاشَرَةً حَوَالَيْ مِائَةِ مِتْرٍ',
        indonesian: 'Jalan lurus sekitar 100 meter',
        transliteration: 'Imshi mubāsharatan ḥawālay miʾati mitrin'
      },
      {
        speaker: 'السائح',
        arabic: 'ثُمَّ مَاذَا؟',
        indonesian: 'Lalu apa?',
        transliteration: 'Thumma mādhā?'
      },
      {
        speaker: 'المار',
        arabic: 'ثُمَّ اِنْعَطِفْ يَسَارًا، سَتَرَى المَسْجِدَ أَمَامَكَ',
        indonesian: 'Lalu belok kiri, Anda akan lihat masjid di depan',
        transliteration: 'Thumma inʿaṭif yasāran, sa-tarā l-masjida amāmak'
      }
    ],
    vocabulary: [
      { arabic: 'قَرِيب', indonesian: 'dekat', transliteration: 'qarīb' },
      { arabic: 'بَعِيد', indonesian: 'jauh', transliteration: 'baʿīd' },
      { arabic: 'أَمَام', indonesian: 'depan', transliteration: 'amām' }
    ]
  },

  // TIME & SCHEDULE
  {
    id: 'conv-7',
    title: 'Berbicara tentang Waktu',
    titleAr: 'الحديث عن الوقت',
    category: 'time',
    level: 'intermediate',
    dialogue: [
      {
        speaker: 'خالد',
        arabic: 'كَمِ السَّاعَةُ الآنَ؟',
        indonesian: 'Jam berapa sekarang?',
        transliteration: 'Kami s-sāʿatu l-ān?'
      },
      {
        speaker: 'سارة',
        arabic: 'السَّاعَةُ الثَّالِثَةُ وَالنِّصْفُ',
        indonesian: 'Jam setengah empat',
        transliteration: 'As-sāʿatu th-thālithatu wa-n-niṣf'
      },
      {
        speaker: 'خالد',
        arabic: 'مَتَى يَبْدَأُ الاِجْتِمَاعُ؟',
        indonesian: 'Kapan rapat dimulai?',
        transliteration: 'Matā yabdaʾu l-ijtimāʿ?'
      },
      {
        speaker: 'سارة',
        arabic: 'بَعْدَ رُبْعِ سَاعَةٍ',
        indonesian: 'Setelah 15 menit',
        transliteration: 'Baʿda rubʿi sāʿa'
      },
      {
        speaker: 'خالد',
        arabic: 'إِذَنْ يَجِبُ أَنْ نَسْتَعِدَّ',
        indonesian: 'Kalau begitu kita harus bersiap',
        transliteration: 'Idhan yajibu an nastaʿidd'
      },
      {
        speaker: 'سارة',
        arabic: 'نَعَمْ، لَا نُرِيدُ أَنْ نَتَأَخَّرَ',
        indonesian: 'Ya, kita tidak mau terlambat',
        transliteration: 'Naʿam, lā nurīdu an nataʾakhkhar'
      }
    ],
    vocabulary: [
      { arabic: 'سَاعَة', indonesian: 'jam', transliteration: 'sāʿa' },
      { arabic: 'دَقِيقَة', indonesian: 'menit', transliteration: 'daqīqa' },
      { arabic: 'وَقْت', indonesian: 'waktu', transliteration: 'waqt' }
    ]
  },

  // WEATHER
  {
    id: 'conv-8',
    title: 'Membicarakan Cuaca',
    titleAr: 'الحديث عن الطقس',
    category: 'weather',
    level: 'beginner',
    dialogue: [
      {
        speaker: 'يوسف',
        arabic: 'كَيْفَ الطَّقْسُ اليَوْمَ؟',
        indonesian: 'Bagaimana cuaca hari ini?',
        transliteration: 'Kayfa ṭ-ṭaqsu l-yawm?'
      },
      {
        speaker: 'مريم',
        arabic: 'الجَوُّ حَارٌّ جِدًّا',
        indonesian: 'Cuacanya sangat panas',
        transliteration: 'Al-jawwu ḥārrun jiddan'
      },
      {
        speaker: 'يوسف',
        arabic: 'هَلْ سَتُمْطِرُ غَدًا؟',
        indonesian: 'Apakah besok akan hujan?',
        transliteration: 'Hal sa-tumṭiru ghadan?'
      },
      {
        speaker: 'مريم',
        arabic: 'رُبَّمَا، السَّمَاءُ مُلَبَّدَةٌ بِالغُيُومِ',
        indonesian: 'Mungkin, langit berawan',
        transliteration: 'Rubbamā, as-samāʾu mulabbadat bi-l-ghuyūm'
      },
      {
        speaker: 'يوسف',
        arabic: 'أَفَضِّلُ الطَّقْسَ البَارِدَ',
        indonesian: 'Saya lebih suka cuaca dingin',
        transliteration: 'Ufaḍḍilu ṭ-ṭaqsa l-bārid'
      },
      {
        speaker: 'مريم',
        arabic: 'وَأَنَا أُحِبُّ الرَّبِيعَ',
        indonesian: 'Dan saya suka musim semi',
        transliteration: 'Wa anā uḥibbu r-rabīʿ'
      }
    ],
    vocabulary: [
      { arabic: 'طَقْس', indonesian: 'cuaca', transliteration: 'ṭaqs' },
      { arabic: 'مَطَر', indonesian: 'hujan', transliteration: 'maṭar' },
      { arabic: 'شَمْس', indonesian: 'matahari', transliteration: 'shams' }
    ]
  },

  // HEALTH
  {
    id: 'conv-9',
    title: 'Di Klinik Kesehatan',
    titleAr: 'في العيادة',
    category: 'health',
    level: 'intermediate',
    dialogue: [
      {
        speaker: 'المريض',
        arabic: 'أَشْعُرُ بِأَلَمٍ فِي رَأْسِي',
        indonesian: 'Saya merasa sakit kepala',
        transliteration: 'Ashʿuru bi-alamin fī raʾsī'
      },
      {
        speaker: 'الطبيب',
        arabic: 'مُنْذُ مَتَى وَأَنْتَ تَشْعُرُ بِهَذَا؟',
        indonesian: 'Sejak kapan Anda merasakannya?',
        transliteration: 'Mundhu matā wa anta tashʿuru bi-hādhā?'
      },
      {
        speaker: 'المريض',
        arabic: 'مُنْذُ يَوْمَيْنِ',
        indonesian: 'Sejak dua hari lalu',
        transliteration: 'Mundhu yawmayn'
      },
      {
        speaker: 'الطبيب',
        arabic: 'هَلْ لَدَيْكَ حُمَّى؟',
        indonesian: 'Apakah Anda demam?',
        transliteration: 'Hal ladayka ḥummā?'
      },
      {
        speaker: 'المريض',
        arabic: 'نَعَمْ، وَأَيْضًا أَشْعُرُ بِالتَّعَبِ',
        indonesian: 'Ya, dan juga merasa lelah',
        transliteration: 'Naʿam, wa ayḍan ashʿuru bi-t-taʿab'
      },
      {
        speaker: 'الطبيب',
        arabic: 'سَأَكْتُبُ لَكَ دَوَاءً، خُذْهُ ثَلَاثَ مَرَّاتٍ يَوْمِيًّا',
        indonesian: 'Saya akan tuliskan obat, minum tiga kali sehari',
        transliteration: 'Sa-aktubu laka dawāʾan, khudh-hu thalātha marrātin yawmiyyan'
      }
    ],
    vocabulary: [
      { arabic: 'طَبِيب', indonesian: 'dokter', transliteration: 'ṭabīb' },
      { arabic: 'مَرِيض', indonesian: 'pasien', transliteration: 'marīḍ' },
      { arabic: 'دَوَاء', indonesian: 'obat', transliteration: 'dawāʾ' }
    ]
  },

  // EDUCATION
  {
    id: 'conv-10',
    title: 'Di Sekolah',
    titleAr: 'في المدرسة',
    category: 'education',
    level: 'intermediate',
    dialogue: [
      {
        speaker: 'الطالب',
        arabic: 'أُسْتَاذُ، هَلْ يُمْكِنُكَ إِعَادَةُ الشَّرْحِ؟',
        indonesian: 'Ustadz, bisakah Anda mengulangi penjelasannya?',
        transliteration: 'Ustādhu, hal yumkinuka iʿādatu sh-sharḥ?'
      },
      {
        speaker: 'المعلم',
        arabic: 'بِالطَّبْعِ، أَيُّ جُزْءٍ لَمْ تَفْهَمْ؟',
        indonesian: 'Tentu, bagian mana yang tidak kamu pahami?',
        transliteration: 'Bi-ṭ-ṭabʿi, ayyu juzʾin lam tafham?'
      },
      {
        speaker: 'الطالب',
        arabic: 'القَوَاعِدُ النَّحْوِيَّةُ صَعْبَةٌ',
        indonesian: 'Aturan nahwu sulit',
        transliteration: 'Al-qawāʿidu n-naḥwiyyatu ṣaʿba'
      },
      {
        speaker: 'المعلم',
        arabic: 'سَأَشْرَحُ بِبُطْءٍ مَعَ أَمْثِلَةٍ',
        indonesian: 'Saya akan jelaskan pelan-pelan dengan contoh',
        transliteration: 'Sa-ashraḥu bi-buṭʾin maʿa amthila'
      },
      {
        speaker: 'الطالب',
        arabic: 'مَتَى الاِمْتِحَانُ القَادِمُ؟',
        indonesian: 'Kapan ujian berikutnya?',
        transliteration: 'Matā l-imtiḥānu l-qādim?'
      },
      {
        speaker: 'المعلم',
        arabic: 'الأُسْبُوعَ القَادِمَ، يَوْمَ الخَمِيسِ',
        indonesian: 'Minggu depan, hari Kamis',
        transliteration: 'Al-usbūʿa l-qādima, yawma l-khamīs'
      }
    ],
    vocabulary: [
      { arabic: 'مَدْرَسَة', indonesian: 'sekolah', transliteration: 'madrasa' },
      { arabic: 'طَالِب', indonesian: 'murid', transliteration: 'ṭālib' },
      { arabic: 'دَرْس', indonesian: 'pelajaran', transliteration: 'dars' }
    ]
  },

  // WORK
  {
    id: 'conv-11',
    title: 'Di Kantor',
    titleAr: 'في المكتب',
    category: 'work',
    level: 'advanced',
    dialogue: [
      {
        speaker: 'المدير',
        arabic: 'هَلْ أَنْجَزْتَ التَّقْرِيرَ؟',
        indonesian: 'Apakah kamu sudah selesaikan laporannya?',
        transliteration: 'Hal anjazta t-taqrīr?'
      },
      {
        speaker: 'الموظف',
        arabic: 'نَعَمْ، سَأُرْسِلُهُ بِالبَرِيدِ الإِلِكْتِرُونِيِّ',
        indonesian: 'Ya, saya akan kirim lewat email',
        transliteration: 'Naʿam, sa-ursiluhu bi-l-barīdi l-iliktrūnī'
      },
      {
        speaker: 'المدير',
        arabic: 'مُمْتَازٌ، نَحْتَاجُهُ لِلاِجْتِمَاعِ',
        indonesian: 'Bagus, kita butuh untuk rapat',
        transliteration: 'Mumtāz, naḥtājuhu li-l-ijtimāʿ'
      },
      {
        speaker: 'الموظف',
        arabic: 'مَتَى سَيَكُونُ الاِجْتِمَاعُ؟',
        indonesian: 'Kapan rapatnya?',
        transliteration: 'Matā sa-yakūnu l-ijtimāʿ?'
      },
      {
        speaker: 'المدير',
        arabic: 'فِي السَّاعَةِ الثَّانِيَةِ بَعْدَ الظُّهْرِ',
        indonesian: 'Jam 2 siang',
        transliteration: 'Fī s-sāʿati th-thāniyati baʿda ẓ-ẓuhr'
      },
      {
        speaker: 'الموظف',
        arabic: 'حَسَنًا، سَأَكُونُ مُسْتَعِدًّا',
        indonesian: 'Baik, saya akan siap',
        transliteration: 'Ḥasanan, sa-akūnu mustaʿiddan'
      }
    ],
    vocabulary: [
      { arabic: 'مَكْتَب', indonesian: 'kantor', transliteration: 'maktab' },
      { arabic: 'عَمَل', indonesian: 'pekerjaan', transliteration: 'ʿamal' },
      { arabic: 'تَقْرِير', indonesian: 'laporan', transliteration: 'taqrīr' }
    ]
  },

  // Additional beginner conversations
  {
    id: 'conv-12',
    title: 'Meminta Bantuan',
    titleAr: 'طلب المساعدة',
    category: 'greetings',
    level: 'beginner',
    dialogue: [
      {
        speaker: 'زينب',
        arabic: 'هَلْ يُمْكِنُكَ مُسَاعَدَتِي؟',
        indonesian: 'Bisakah kamu membantuku?',
        transliteration: 'Hal yumkinuka musāʿadatī?'
      },
      {
        speaker: 'حسن',
        arabic: 'بِكُلِّ سُرُورٍ، مَاذَا تُرِيدِينَ؟',
        indonesian: 'Dengan senang hati, apa yang kamu inginkan?',
        transliteration: 'Bi-kulli surūr, mādhā turīdīn?'
      },
      {
        speaker: 'زينب',
        arabic: 'لَا أَفْهَمُ هَذِهِ الكَلِمَةَ',
        indonesian: 'Saya tidak paham kata ini',
        transliteration: 'Lā afhamu hādhihi l-kalima'
      },
      {
        speaker: 'حسن',
        arabic: 'دَعِينِي أَشْرَحُ لَكِ',
        indonesian: 'Biar saya jelaskan',
        transliteration: 'Daʿīnī ashraḥu laki'
      }
    ],
    vocabulary: [
      { arabic: 'مُسَاعَدَة', indonesian: 'bantuan', transliteration: 'musāʿada' },
      { arabic: 'فَهْم', indonesian: 'pemahaman', transliteration: 'fahm' }
    ]
  }
];