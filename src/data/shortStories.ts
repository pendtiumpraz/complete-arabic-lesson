export interface Story {
  id: string;
  title: string;
  titleAr: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  content: {
    arabic: string;
    indonesian: string;
    transliteration: string;
  }[];
  vocabulary: {
    arabic: string;
    indonesian: string;
    transliteration: string;
  }[];
  moral?: string;
  moralAr?: string;
}

export const storyCategories = [
  { id: 'fables', name: 'Dongeng', nameAr: 'الحكايات' },
  { id: 'daily', name: 'Kehidupan Sehari-hari', nameAr: 'الحياة اليومية' },
  { id: 'islamic', name: 'Kisah Islami', nameAr: 'القصص الإسلامية' },
  { id: 'wisdom', name: 'Kisah Hikmah', nameAr: 'قصص الحكمة' },
  { id: 'adventure', name: 'Petualangan', nameAr: 'المغامرات' }
];

export const shortStories: Story[] = [
  // BEGINNER STORIES
  {
    id: 'story-1',
    title: 'Keluarga Bahagia',
    titleAr: 'الأسرة السعيدة',
    level: 'beginner',
    category: 'daily',
    content: [
      {
        arabic: 'أَحْمَدُ طَالِبٌ فِي المَدْرَسَةِ.',
        indonesian: 'Ahmad adalah siswa di sekolah.',
        transliteration: 'Aḥmadu ṭālibun fī l-madrasa.'
      },
      {
        arabic: 'يَسْكُنُ مَعَ أُسْرَتِهِ فِي بَيْتٍ جَمِيلٍ.',
        indonesian: 'Dia tinggal bersama keluarganya di rumah yang indah.',
        transliteration: 'Yaskunu maʿa usratihi fī baytin jamīl.'
      },
      {
        arabic: 'أَبُوهُ طَبِيبٌ وَأُمُّهُ مُعَلِّمَةٌ.',
        indonesian: 'Ayahnya dokter dan ibunya guru.',
        transliteration: 'Abūhu ṭabībun wa ummuhu muʿallima.'
      },
      {
        arabic: 'لَهُ أَخٌ صَغِيرٌ وَأُخْتٌ كَبِيرَةٌ.',
        indonesian: 'Dia punya adik laki-laki dan kakak perempuan.',
        transliteration: 'Lahu akhun ṣaghīrun wa ukhtun kabīra.'
      },
      {
        arabic: 'كُلَّ صَبَاحٍ يَذْهَبُونَ إِلَى أَعْمَالِهِمْ.',
        indonesian: 'Setiap pagi mereka pergi ke tempat kerja mereka.',
        transliteration: 'Kulla ṣabāḥin yadh-habūna ilā aʿmālihim.'
      },
      {
        arabic: 'وَفِي المَسَاءِ يَجْتَمِعُونَ لِتَنَاوُلِ العَشَاءِ.',
        indonesian: 'Dan di malam hari mereka berkumpul untuk makan malam.',
        transliteration: 'Wa fī l-masāʾi yajtamiʿūna li-tanāwuli l-ʿashāʾ.'
      },
      {
        arabic: 'يُحِبُّونَ بَعْضَهُمْ بَعْضًا كَثِيرًا.',
        indonesian: 'Mereka sangat saling mencintai.',
        transliteration: 'Yuḥibbūna baʿḍahum baʿḍan kathīran.'
      },
      {
        arabic: 'هَذِهِ أُسْرَةٌ سَعِيدَةٌ.',
        indonesian: 'Ini adalah keluarga yang bahagia.',
        transliteration: 'Hādhihi usratun saʿīda.'
      }
    ],
    vocabulary: [
      { arabic: 'أُسْرَة', indonesian: 'keluarga', transliteration: 'usra' },
      { arabic: 'طَالِب', indonesian: 'siswa', transliteration: 'ṭālib' },
      { arabic: 'سَعِيد', indonesian: 'bahagia', transliteration: 'saʿīd' }
    ]
  },

  {
    id: 'story-2',
    title: 'القط والفأر',
    titleAr: 'القط والفأر',
    level: 'beginner',
    category: 'fables',
    content: [
      {
        arabic: 'كَانَ هُنَاكَ قِطٌّ جَائِعٌ.',
        indonesian: 'Ada seekor kucing yang lapar.',
        transliteration: 'Kāna hunāka qiṭṭun jāʾiʿ.'
      },
      {
        arabic: 'رَأَى فَأْرًا صَغِيرًا فِي المَطْبَخِ.',
        indonesian: 'Dia melihat tikus kecil di dapur.',
        transliteration: 'Raʾā faʾran ṣaghīran fī l-maṭbakh.'
      },
      {
        arabic: 'حَاوَلَ القِطُّ أَنْ يُمْسِكَ الفَأْرَ.',
        indonesian: 'Kucing mencoba menangkap tikus.',
        transliteration: 'Ḥāwala l-qiṭṭu an yumsika l-faʾr.'
      },
      {
        arabic: 'لَكِنَّ الفَأْرَ كَانَ سَرِيعًا جِدًّا.',
        indonesian: 'Tapi tikus itu sangat cepat.',
        transliteration: 'Lākinna l-faʾra kāna sarīʿan jiddan.'
      },
      {
        arabic: 'دَخَلَ الفَأْرُ فِي ثُقْبٍ صَغِيرٍ.',
        indonesian: 'Tikus masuk ke lubang kecil.',
        transliteration: 'Dakhala l-faʾru fī thuqbin ṣaghīr.'
      },
      {
        arabic: 'جَلَسَ القِطُّ يَنْتَظِرُ أَمَامَ الثُّقْبِ.',
        indonesian: 'Kucing duduk menunggu di depan lubang.',
        transliteration: 'Jalasa l-qiṭṭu yantaẓiru amāma th-thuqb.'
      },
      {
        arabic: 'لَكِنَّ الفَأْرَ لَمْ يَخْرُجْ.',
        indonesian: 'Tapi tikus tidak keluar.',
        transliteration: 'Lākinna l-faʾra lam yakhruj.'
      },
      {
        arabic: 'الذَّكَاءُ أَفْضَلُ مِنَ القُوَّةِ.',
        indonesian: 'Kecerdasan lebih baik dari kekuatan.',
        transliteration: 'Adh-dhakāʾu afḍalu mina l-quwwa.'
      }
    ],
    vocabulary: [
      { arabic: 'قِطّ', indonesian: 'kucing', transliteration: 'qiṭṭ' },
      { arabic: 'فَأْر', indonesian: 'tikus', transliteration: 'faʾr' },
      { arabic: 'ذَكَاء', indonesian: 'kecerdasan', transliteration: 'dhakāʾ' }
    ],
    moral: 'Kecerdasan lebih berharga daripada kekuatan fisik',
    moralAr: 'الذَّكَاءُ أَغْلَى مِنَ القُوَّةِ البَدَنِيَّةِ'
  },

  // INTERMEDIATE STORIES
  {
    id: 'story-3',
    title: 'الصديق الوفي',
    titleAr: 'الصديق الوفي',
    level: 'intermediate',
    category: 'wisdom',
    content: [
      {
        arabic: 'كَانَ لِرَجُلٍ غَنِيٍّ أَصْدِقَاءُ كَثِيرُونَ.',
        indonesian: 'Seorang pria kaya memiliki banyak teman.',
        transliteration: 'Kāna li-rajulin ghaniyyin aṣdiqāʾu kathīrūn.'
      },
      {
        arabic: 'كَانُوا يَزُورُونَهُ كُلَّ يَوْمٍ فِي قَصْرِهِ الكَبِيرِ.',
        indonesian: 'Mereka mengunjunginya setiap hari di istananya yang besar.',
        transliteration: 'Kānū yazūrūnahu kulla yawmin fī qaṣrihi l-kabīr.'
      },
      {
        arabic: 'يَأْكُلُونَ طَعَامَهُ وَيَشْرَبُونَ شَرَابَهُ.',
        indonesian: 'Mereka makan makanannya dan minum minumannya.',
        transliteration: 'Yaʾkulūna ṭaʿāmahu wa yashrabūna sharābah.'
      },
      {
        arabic: 'وَفِي يَوْمٍ مِنَ الأَيَّامِ خَسِرَ الرَّجُلُ كُلَّ مَالِهِ.',
        indonesian: 'Suatu hari pria itu kehilangan semua hartanya.',
        transliteration: 'Wa fī yawmin mina l-ayyāmi khasira r-rajulu kulla mālih.'
      },
      {
        arabic: 'أَصْبَحَ فَقِيرًا وَتَرَكَ قَصْرَهُ.',
        indonesian: 'Dia menjadi miskin dan meninggalkan istananya.',
        transliteration: 'Aṣbaḥa faqīran wa taraka qaṣrah.'
      },
      {
        arabic: 'اخْتَفَى جَمِيعُ أَصْدِقَائِهِ إِلَّا وَاحِدًا.',
        indonesian: 'Semua temannya menghilang kecuali satu.',
        transliteration: 'Ikhtafā jamīʿu aṣdiqāʾihi illā wāḥidan.'
      },
      {
        arabic: 'بَقِيَ مَعَهُ صَدِيقٌ وَاحِدٌ وَفِيٌّ.',
        indonesian: 'Satu teman setia tetap bersamanya.',
        transliteration: 'Baqiya maʿahu ṣadīqun wāḥidun wafiyy.'
      },
      {
        arabic: 'سَاعَدَهُ وَشَارَكَهُ طَعَامَهُ البَسِيطَ.',
        indonesian: 'Dia membantunya dan berbagi makanan sederhana.',
        transliteration: 'Sāʿadahu wa shārakahu ṭaʿāmahu l-basīṭ.'
      },
      {
        arabic: 'عَرَفَ الرَّجُلُ قِيمَةَ الصَّدَاقَةِ الحَقِيقِيَّةِ.',
        indonesian: 'Pria itu mengetahui nilai persahabatan sejati.',
        transliteration: 'ʿArafa r-rajulu qīmata ṣ-ṣadāqati l-ḥaqīqiyya.'
      },
      {
        arabic: 'الصَّدِيقُ وَقْتَ الضِّيقِ.',
        indonesian: 'Teman sejati diketahui saat kesulitan.',
        transliteration: 'Aṣ-ṣadīqu waqta ḍ-ḍīq.'
      }
    ],
    vocabulary: [
      { arabic: 'وَفِيّ', indonesian: 'setia', transliteration: 'wafiyy' },
      { arabic: 'صَدَاقَة', indonesian: 'persahabatan', transliteration: 'ṣadāqa' },
      { arabic: 'ضِيق', indonesian: 'kesulitan', transliteration: 'ḍīq' }
    ],
    moral: 'Teman sejati adalah yang tetap bersama kita di saat susah',
    moralAr: 'الصَّدِيقُ الحَقِيقِيُّ مَنْ يَبْقَى مَعَنَا فِي الشِّدَّةِ'
  },

  {
    id: 'story-4',
    title: 'التاجر الأمين',
    titleAr: 'التاجر الأمين',
    level: 'intermediate',
    category: 'islamic',
    content: [
      {
        arabic: 'عَاشَ فِي المَدِينَةِ تَاجِرٌ أَمِينٌ اسْمُهُ عَبْدُ اللهِ.',
        indonesian: 'Di kota tinggal seorang pedagang jujur bernama Abdullah.',
        transliteration: 'ʿĀsha fī l-madīnati tājirun amīnun ismuhu ʿAbdu llāh.'
      },
      {
        arabic: 'كَانَ يَبِيعُ القُمَاشَ فِي السُّوقِ.',
        indonesian: 'Dia menjual kain di pasar.',
        transliteration: 'Kāna yabīʿu l-qumāsha fī s-sūq.'
      },
      {
        arabic: 'ذَاتَ يَوْمٍ جَاءَتْ امْرَأَةٌ عَجُوزٌ لِشِرَاءِ قُمَاشٍ.',
        indonesian: 'Suatu hari datang seorang wanita tua untuk membeli kain.',
        transliteration: 'Dhāta yawmin jāʾat imraʾatun ʿajūzun li-shirāʾi qumāsh.'
      },
      {
        arabic: 'دَفَعَتْ لَهُ كِيسًا مَلِيئًا بِالذَّهَبِ.',
        indonesian: 'Dia membayarnya dengan kantong penuh emas.',
        transliteration: 'Dafaʿat lahu kīsan malīʾan bi-dh-dhahab.'
      },
      {
        arabic: 'وَلَكِنَّهَا نَسِيَتْ أَنْ تَأْخُذَ القُمَاشَ.',
        indonesian: 'Tapi dia lupa mengambil kainnya.',
        transliteration: 'Wa lākinnaha nasiyat an taʾkhudha l-qumāsh.'
      },
      {
        arabic: 'انْتَظَرَهَا التَّاجِرُ طَوِيلًا لَكِنَّهَا لَمْ تَعُدْ.',
        indonesian: 'Pedagang menunggunya lama tapi dia tidak kembali.',
        transliteration: 'Intaẓarahā t-tājiru ṭawīlan lākinnaha lam taʿud.'
      },
      {
        arabic: 'فِي اليَوْمِ التَّالِي بَحَثَ عَنْهَا فِي كُلِّ مَكَانٍ.',
        indonesian: 'Keesokan harinya dia mencarinya di mana-mana.',
        transliteration: 'Fī l-yawmi t-tālī baḥatha ʿanhā fī kulli makān.'
      },
      {
        arabic: 'وَجَدَهَا أَخِيرًا وَأَعْطَاهَا القُمَاشَ وَالذَّهَبَ.',
        indonesian: 'Akhirnya dia menemukannya dan memberikan kain dan emasnya.',
        transliteration: 'Wajadahā akhīran wa aʿṭāhā l-qumāsha wa-dh-dhahab.'
      },
      {
        arabic: 'قَالَتْ لَهُ: "أَنْتَ تَاجِرٌ أَمِينٌ حَقًّا".',
        indonesian: 'Dia berkata: "Kamu benar-benar pedagang yang jujur".',
        transliteration: 'Qālat lahu: "Anta tājirun amīnun ḥaqqan".'
      },
      {
        arabic: 'انْتَشَرَ خَبَرُ أَمَانَتِهِ فِي المَدِينَةِ كُلِّهَا.',
        indonesian: 'Berita kejujurannya tersebar di seluruh kota.',
        transliteration: 'Intashara khabaru amānatihi fī l-madīnati kullihā.'
      }
    ],
    vocabulary: [
      { arabic: 'تَاجِر', indonesian: 'pedagang', transliteration: 'tājir' },
      { arabic: 'أَمِين', indonesian: 'jujur/amanah', transliteration: 'amīn' },
      { arabic: 'أَمَانَة', indonesian: 'kejujuran', transliteration: 'amāna' }
    ],
    moral: 'Kejujuran adalah modal terbaik dalam berdagang',
    moralAr: 'الأَمَانَةُ رَأْسُ مَالِ التَّاجِرِ'
  },

  // ADVANCED STORIES
  {
    id: 'story-5',
    title: 'الحكيم والملك',
    titleAr: 'الحكيم والملك',
    level: 'advanced',
    category: 'wisdom',
    content: [
      {
        arabic: 'حَكَى أَنَّ مَلِكًا ظَالِمًا كَانَ يَحْكُمُ بِلَادًا وَاسِعَةً.',
        indonesian: 'Dikisahkan bahwa seorang raja zalim memerintah negeri yang luas.',
        transliteration: 'Ḥakā anna malikan ẓāliman kāna yaḥkumu bilādan wāsiʿa.'
      },
      {
        arabic: 'كَانَ يَأْخُذُ أَمْوَالَ النَّاسِ بِغَيْرِ حَقٍّ.',
        indonesian: 'Dia mengambil harta rakyat tanpa hak.',
        transliteration: 'Kāna yaʾkhudhu amwāla n-nāsi bi-ghayri ḥaqq.'
      },
      {
        arabic: 'فِي يَوْمٍ مِنَ الأَيَّامِ زَارَ حَكِيمٌ عَابِرٌ هَذِهِ البِلَادَ.',
        indonesian: 'Suatu hari seorang hakim bijak mengunjungi negeri ini.',
        transliteration: 'Fī yawmin mina l-ayyāmi zāra ḥakīmun ʿābirun hādhihi l-bilād.'
      },
      {
        arabic: 'سَمِعَ المَلِكُ عَنْ حِكْمَتِهِ فَاسْتَدْعَاهُ إِلَى قَصْرِهِ.',
        indonesian: 'Raja mendengar tentang kebijaksanaannya lalu memanggilnya ke istana.',
        transliteration: 'Samiʿa l-maliku ʿan ḥikmatihi fa-stadʿāhu ilā qaṣrih.'
      },
      {
        arabic: 'قَالَ المَلِكُ: "أَيُّهَا الحَكِيمُ، أَخْبِرْنِي كَيْفَ أَكُونُ أَعْظَمَ مَلِكٍ؟"',
        indonesian: 'Raja berkata: "Wahai orang bijak, beritahu aku bagaimana menjadi raja terhebat?"',
        transliteration: 'Qāla l-malik: "Ayyuhā l-ḥakīm, akhbirnī kayfa akūnu aʿẓama malik?"'
      },
      {
        arabic: 'أَجَابَ الحَكِيمُ: "العَظَمَةُ الحَقِيقِيَّةُ فِي العَدْلِ وَالرَّحْمَةِ".',
        indonesian: 'Sang bijak menjawab: "Kebesaran sejati ada dalam keadilan dan kasih sayang".',
        transliteration: 'Ajāba l-ḥakīm: "Al-ʿaẓamatu l-ḥaqīqiyyatu fī l-ʿadli wa-r-raḥma".'
      },
      {
        arabic: 'غَضِبَ المَلِكُ وَقَالَ: "أَنَا عَظِيمٌ بِقُوَّتِي وَجَيْشِي!"',
        indonesian: 'Raja marah dan berkata: "Aku hebat dengan kekuatan dan tentaraku!"',
        transliteration: 'Ghaḍiba l-maliku wa qāla: "Anā ʿaẓīmun bi-quwwatī wa jayshī!"'
      },
      {
        arabic: 'قَالَ الحَكِيمُ: "المُلْكُ الَّذِي يُبْنَى عَلَى الظُّلْمِ لَنْ يَدُومَ".',
        indonesian: 'Sang bijak berkata: "Kerajaan yang dibangun atas kezaliman tidak akan bertahan".',
        transliteration: 'Qāla l-ḥakīm: "Al-mulku lladhī yubnā ʿalā ẓ-ẓulmi lan yadūm".'
      },
      {
        arabic: 'ثُمَّ رَسَمَ دَائِرَةً عَلَى الأَرْضِ وَوَضَعَ نَمْلَةً فِيهَا.',
        indonesian: 'Kemudian dia menggambar lingkaran di tanah dan meletakkan semut di dalamnya.',
        transliteration: 'Thumma rasama dāʾiratan ʿalā l-arḍi wa waḍaʿa namlatan fīhā.'
      },
      {
        arabic: 'قَالَ: "هَذِهِ النَّمْلَةُ مَلِكَةٌ فِي دَائِرَتِهَا الصَّغِيرَةِ".',
        indonesian: 'Dia berkata: "Semut ini adalah ratu di lingkaran kecilnya".',
        transliteration: 'Qāla: "Hādhihi n-namlatu malikatun fī dāʾiratihā ṣ-ṣaghīra".'
      },
      {
        arabic: '"وَأَنْتَ مَلِكٌ فِي مَمْلَكَتِكَ، لَكِنَّ اللهَ مَلِكُ المُلُوكِ".',
        indonesian: '"Dan kamu raja di kerajaanmu, tapi Allah adalah Raja segala raja".',
        transliteration: '"Wa anta malikun fī mamlakātika, lākinna llāha maliku l-mulūk".'
      },
      {
        arabic: 'فَكَّرَ المَلِكُ طَوِيلًا فِي كَلَامِ الحَكِيمِ.',
        indonesian: 'Raja berpikir lama tentang kata-kata sang bijak.',
        transliteration: 'Fakkara l-maliku ṭawīlan fī kalāmi l-ḥakīm.'
      },
      {
        arabic: 'وَمُنْذُ ذَلِكَ اليَوْمِ بَدَأَ يَحْكُمُ بِالعَدْلِ.',
        indonesian: 'Dan sejak hari itu dia mulai memerintah dengan adil.',
        transliteration: 'Wa mundhu dhālika l-yawmi badaʾa yaḥkumu bi-l-ʿadl.'
      }
    ],
    vocabulary: [
      { arabic: 'حَكِيم', indonesian: 'orang bijak', transliteration: 'ḥakīm' },
      { arabic: 'عَدْل', indonesian: 'keadilan', transliteration: 'ʿadl' },
      { arabic: 'ظُلْم', indonesian: 'kezaliman', transliteration: 'ẓulm' }
    ],
    moral: 'Kekuasaan sejati terletak pada keadilan dan kebijaksanaan',
    moralAr: 'القُوَّةُ الحَقِيقِيَّةُ فِي العَدْلِ وَالحِكْمَةِ'
  },

  {
    id: 'story-6',
    title: 'رحلة البحث عن المعرفة',
    titleAr: 'رحلة البحث عن المعرفة',
    level: 'advanced',
    category: 'adventure',
    content: [
      {
        arabic: 'قَرَّرَ شَابٌّ اسْمُهُ يُوسُفُ أَنْ يُسَافِرَ طَلَبًا لِلْعِلْمِ.',
        indonesian: 'Seorang pemuda bernama Yusuf memutuskan untuk bepergian mencari ilmu.',
        transliteration: 'Qarrara shābbun ismuhu Yūsufu an yusāfira ṭalaban li-l-ʿilm.'
      },
      {
        arabic: 'وَدَّعَ أَهْلَهُ وَحَمَلَ زَادَهُ وَانْطَلَقَ فِي رِحْلَتِهِ.',
        indonesian: 'Dia pamit pada keluarganya, membawa bekal, dan memulai perjalanannya.',
        transliteration: 'Waddaʿa ahlahu wa ḥamala zādahu wa-nṭalaqa fī riḥlatih.'
      },
      {
        arabic: 'سَافَرَ إِلَى بِلَادٍ بَعِيدَةٍ وَتَعَلَّمَ لُغَاتٍ جَدِيدَةً.',
        indonesian: 'Dia bepergian ke negeri jauh dan belajar bahasa-bahasa baru.',
        transliteration: 'Sāfara ilā bilādin baʿīdatin wa taʿallama lughātin jadīda.'
      },
      {
        arabic: 'فِي دِمَشْقَ تَعَلَّمَ عُلُومَ الدِّينِ وَالفِقْهِ.',
        indonesian: 'Di Damaskus dia belajar ilmu agama dan fikih.',
        transliteration: 'Fī Dimashqa taʿallama ʿulūma d-dīni wa-l-fiqh.'
      },
      {
        arabic: 'وَفِي بَغْدَادَ دَرَسَ الفَلْسَفَةَ وَالمَنْطِقَ.',
        indonesian: 'Dan di Baghdad dia mempelajari filsafat dan logika.',
        transliteration: 'Wa fī Baghdāda darasa l-falsafata wa-l-manṭiq.'
      },
      {
        arabic: 'ثُمَّ سَافَرَ إِلَى القَاهِرَةِ وَتَعَلَّمَ الطِّبَّ وَالعُلُومَ.',
        indonesian: 'Kemudian dia pergi ke Kairo dan belajar kedokteran dan sains.',
        transliteration: 'Thumma sāfara ilā l-Qāhirati wa taʿallama ṭ-ṭibba wa-l-ʿulūm.'
      },
      {
        arabic: 'قَضَى عَشْرَ سَنَوَاتٍ فِي طَلَبِ العِلْمِ.',
        indonesian: 'Dia menghabiskan sepuluh tahun mencari ilmu.',
        transliteration: 'Qaḍā ʿashra sanawātin fī ṭalabi l-ʿilm.'
      },
      {
        arabic: 'عِنْدَمَا عَادَ إِلَى بَلَدِهِ كَانَ عَالِمًا كَبِيرًا.',
        indonesian: 'Ketika dia kembali ke negerinya, dia sudah menjadi ulama besar.',
        transliteration: 'ʿIndamā ʿāda ilā baladihi kāna ʿāliman kabīran.'
      },
      {
        arabic: 'فَتَحَ مَدْرَسَةً وَعَلَّمَ النَّاسَ مَا تَعَلَّمَهُ.',
        indonesian: 'Dia membuka sekolah dan mengajarkan kepada orang-orang apa yang dipelajarinya.',
        transliteration: 'Fataḥa madrasatan wa ʿallama n-nāsa mā taʿallamah.'
      },
      {
        arabic: 'أَصْبَحَتْ مَدْرَسَتُهُ مَنَارَةً لِلْعِلْمِ فِي المِنْطَقَةِ.',
        indonesian: 'Sekolahnya menjadi mercusuar ilmu di wilayah itu.',
        transliteration: 'Aṣbaḥat madrasatuhu manāratan li-l-ʿilmi fī l-minṭaqa.'
      },
      {
        arabic: 'العِلْمُ نُورٌ وَالجَهْلُ ظَلَامٌ.',
        indonesian: 'Ilmu adalah cahaya dan kebodohan adalah kegelapan.',
        transliteration: 'Al-ʿilmu nūrun wa-l-jahlu ẓalām.'
      }
    ],
    vocabulary: [
      { arabic: 'عِلْم', indonesian: 'ilmu', transliteration: 'ʿilm' },
      { arabic: 'رِحْلَة', indonesian: 'perjalanan', transliteration: 'riḥla' },
      { arabic: 'مَعْرِفَة', indonesian: 'pengetahuan', transliteration: 'maʿrifa' }
    ],
    moral: 'Mencari ilmu adalah perjalanan yang mulia dan bermanfaat',
    moralAr: 'طَلَبُ العِلْمِ رِحْلَةٌ شَرِيفَةٌ وَنَافِعَةٌ'
  },

  // Additional stories
  {
    id: 'story-7',
    title: 'الطفل والعصفور',
    titleAr: 'الطفل والعصفور',
    level: 'beginner',
    category: 'fables',
    content: [
      {
        arabic: 'وَجَدَ طِفْلٌ عُصْفُورًا صَغِيرًا.',
        indonesian: 'Seorang anak menemukan burung kecil.',
        transliteration: 'Wajada ṭiflun ʿuṣfūran ṣaghīran.'
      },
      {
        arabic: 'كَانَ العُصْفُورُ جَرِيحًا لَا يَسْتَطِيعُ الطَّيَرَانَ.',
        indonesian: 'Burung itu terluka tidak bisa terbang.',
        transliteration: 'Kāna l-ʿuṣfūru jarīḥan lā yastaṭīʿu ṭ-ṭayarān.'
      },
      {
        arabic: 'أَخَذَهُ الطِّفْلُ إِلَى البَيْتِ.',
        indonesian: 'Anak itu membawanya ke rumah.',
        transliteration: 'Akhadhahu ṭ-ṭiflu ilā l-bayt.'
      },
      {
        arabic: 'اعْتَنَى بِهِ وَأَطْعَمَهُ كُلَّ يَوْمٍ.',
        indonesian: 'Dia merawatnya dan memberinya makan setiap hari.',
        transliteration: 'Iʿtanā bihi wa aṭʿamahu kulla yawm.'
      },
      {
        arabic: 'بَعْدَ أُسْبُوعٍ شُفِيَ العُصْفُورُ.',
        indonesian: 'Setelah seminggu burung itu sembuh.',
        transliteration: 'Baʿda usbūʿin shufiya l-ʿuṣfūr.'
      },
      {
        arabic: 'أَطْلَقَهُ الطِّفْلُ فَطَارَ فَرِحًا.',
        indonesian: 'Anak itu melepaskannya dan burung itu terbang dengan gembira.',
        transliteration: 'Aṭlaqahu ṭ-ṭiflu fa-ṭāra fariḥan.'
      },
      {
        arabic: 'الرَّحْمَةُ بِالحَيَوَانِ مِنَ الإِيمَانِ.',
        indonesian: 'Kasih sayang pada hewan adalah bagian dari iman.',
        transliteration: 'Ar-raḥmatu bi-l-ḥayawāni mina l-īmān.'
      }
    ],
    vocabulary: [
      { arabic: 'عُصْفُور', indonesian: 'burung', transliteration: 'ʿuṣfūr' },
      { arabic: 'رَحْمَة', indonesian: 'kasih sayang', transliteration: 'raḥma' }
    ],
    moral: 'Berbuat baik pada makhluk hidup akan mendapat balasan kebaikan',
    moralAr: 'الإِحْسَانُ إِلَى المَخْلُوقَاتِ يُجْزَى بِالإِحْسَانِ'
  }
];