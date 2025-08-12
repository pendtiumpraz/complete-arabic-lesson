export interface Prayer {
  id: string;
  title: string;
  titleAr: string;
  category: string;
  arabic: string;
  indonesian: string;
  transliteration: string;
  meaning: string;
  when?: string;
  benefits?: string[];
  source?: string;
}

export const prayerCategories = [
  { id: 'daily', name: 'Doa Harian', nameAr: 'الأدعية اليومية' },
  { id: 'morning-evening', name: 'Pagi & Petang', nameAr: 'أذكار الصباح والمساء' },
  { id: 'eating', name: 'Makan & Minum', nameAr: 'أدعية الطعام والشراب' },
  { id: 'travel', name: 'Perjalanan', nameAr: 'أدعية السفر' },
  { id: 'worship', name: 'Ibadah', nameAr: 'أدعية العبادة' },
  { id: 'protection', name: 'Perlindungan', nameAr: 'أدعية الحماية' },
  { id: 'forgiveness', name: 'Istighfar', nameAr: 'الاستغفار' },
  { id: 'gratitude', name: 'Syukur', nameAr: 'الشكر' },
  { id: 'difficulty', name: 'Kesulitan', nameAr: 'أدعية الكرب' },
  { id: 'health', name: 'Kesehatan', nameAr: 'أدعية الصحة' }
];

export const prayers: Prayer[] = [
  // DAILY PRAYERS
  {
    id: 'prayer-1',
    title: 'Doa Bangun Tidur',
    titleAr: 'دعاء الاستيقاظ من النوم',
    category: 'daily',
    arabic: 'الحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    indonesian: 'Segala puji bagi Allah yang telah menghidupkan kami setelah mematikan kami, dan kepada-Nya lah kami dibangkitkan',
    transliteration: 'Alḥamdulillāhi lladhī aḥyānā baʿda mā amātanā wa ilayhi n-nushūr',
    meaning: 'Bersyukur kepada Allah yang menghidupkan kembali setelah tidur',
    when: 'Dibaca segera setelah bangun tidur',
    benefits: ['Memulai hari dengan bersyukur', 'Mengingat kekuasaan Allah'],
    source: 'HR. Bukhari dan Muslim'
  },
  {
    id: 'prayer-2',
    title: 'Doa Sebelum Tidur',
    titleAr: 'دعاء النوم',
    category: 'daily',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    indonesian: 'Dengan nama-Mu ya Allah, aku mati dan aku hidup',
    transliteration: 'Bismika llāhumma amūtu wa aḥyā',
    meaning: 'Berserah diri kepada Allah saat tidur',
    when: 'Dibaca saat hendak tidur',
    benefits: ['Perlindungan saat tidur', 'Berserah diri kepada Allah'],
    source: 'HR. Bukhari dan Muslim'
  },
  {
    id: 'prayer-3',
    title: 'Doa Masuk Kamar Mandi',
    titleAr: 'دعاء دخول الخلاء',
    category: 'daily',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الخُبُثِ وَالخَبَائِثِ',
    indonesian: 'Ya Allah, sesungguhnya aku berlindung kepada-Mu dari godaan setan laki-laki dan perempuan',
    transliteration: 'Allāhumma innī aʿūdhu bika mina l-khubuthi wa-l-khabāʾith',
    meaning: 'Memohon perlindungan dari gangguan setan',
    when: 'Sebelum masuk kamar mandi',
    benefits: ['Perlindungan dari setan', 'Menjaga kesucian'],
    source: 'HR. Bukhari dan Muslim'
  },
  {
    id: 'prayer-4',
    title: 'Doa Keluar Kamar Mandi',
    titleAr: 'دعاء الخروج من الخلاء',
    category: 'daily',
    arabic: 'غُفْرَانَكَ',
    indonesian: 'Aku memohon ampunan-Mu',
    transliteration: 'Ghufrānak',
    meaning: 'Memohon ampunan setelah membuang hajat',
    when: 'Setelah keluar dari kamar mandi',
    benefits: ['Memohon ampunan', 'Bersyukur atas nikmat'],
    source: 'HR. Abu Dawud dan Tirmidzi'
  },

  // MORNING & EVENING
  {
    id: 'prayer-5',
    title: 'Dzikir Pagi',
    titleAr: 'أذكار الصباح',
    category: 'morning-evening',
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ المُلْكُ لِلَّهِ، وَالحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    indonesian: 'Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya',
    transliteration: 'Aṣbaḥnā wa aṣbaḥa l-mulku lillāh, wa-l-ḥamdu lillāh, lā ilāha illā llāhu waḥdahu lā sharīka lah',
    meaning: 'Mengawali pagi dengan tauhid dan pujian kepada Allah',
    when: 'Setelah Subuh hingga matahari terbit',
    benefits: ['Perlindungan sepanjang hari', 'Keberkahan rezeki'],
    source: 'HR. Muslim'
  },
  {
    id: 'prayer-6',
    title: 'Dzikir Petang',
    titleAr: 'أذكار المساء',
    category: 'morning-evening',
    arabic: 'أَمْسَيْنَا وَأَمْسَى المُلْكُ لِلَّهِ، وَالحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ',
    indonesian: 'Kami telah memasuki waktu petang dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya',
    transliteration: 'Amsaynā wa amsā l-mulku lillāh, wa-l-ḥamdu lillāh, lā ilāha illā llāhu waḥdahu lā sharīka lah',
    meaning: 'Mengakhiri hari dengan tauhid dan pujian kepada Allah',
    when: 'Setelah Ashar hingga Maghrib',
    benefits: ['Perlindungan malam hari', 'Ketenangan hati'],
    source: 'HR. Muslim'
  },

  // EATING & DRINKING
  {
    id: 'prayer-7',
    title: 'Doa Sebelum Makan',
    titleAr: 'دعاء قبل الطعام',
    category: 'eating',
    arabic: 'بِسْمِ اللهِ وَعَلَى بَرَكَةِ اللهِ',
    indonesian: 'Dengan menyebut nama Allah dan atas berkah Allah',
    transliteration: 'Bismillāhi wa ʿalā barakati llāh',
    meaning: 'Memulai makan dengan nama Allah',
    when: 'Sebelum mulai makan',
    benefits: ['Keberkahan makanan', 'Perlindungan dari setan'],
    source: 'Hadits shahih'
  },
  {
    id: 'prayer-8',
    title: 'Doa Setelah Makan',
    titleAr: 'دعاء بعد الطعام',
    category: 'eating',
    arabic: 'الحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    indonesian: 'Segala puji bagi Allah yang telah memberi kami makan dan minum, serta menjadikan kami muslim',
    transliteration: 'Alḥamdulillāhi lladhī aṭʿamanā wa saqānā wa jaʿalanā muslimīn',
    meaning: 'Bersyukur atas nikmat makanan dan Islam',
    when: 'Setelah selesai makan',
    benefits: ['Ungkapan syukur', 'Mendapat ridha Allah'],
    source: 'HR. Abu Dawud dan Tirmidzi'
  },

  // TRAVEL
  {
    id: 'prayer-9',
    title: 'Doa Naik Kendaraan',
    titleAr: 'دعاء ركوب الدابة',
    category: 'travel',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ',
    indonesian: 'Maha Suci Allah yang telah menundukkan ini untuk kami, padahal kami sebelumnya tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami',
    transliteration: 'Subḥāna lladhī sakhkhara lanā hādhā wa mā kunnā lahu muqrinīn, wa innā ilā rabbinā la-munqalibūn',
    meaning: 'Mengakui kekuasaan Allah atas segala sesuatu',
    when: 'Saat naik kendaraan',
    benefits: ['Keselamatan perjalanan', 'Perlindungan dari kecelakaan'],
    source: 'QS. Az-Zukhruf: 13-14'
  },
  {
    id: 'prayer-10',
    title: 'Doa Safar (Perjalanan)',
    titleAr: 'دعاء السفر',
    category: 'travel',
    arabic: 'اللَّهُمَّ إِنَّا نَسْأَلُكَ فِي سَفَرِنَا هَذَا البِرَّ وَالتَّقْوَى، وَمِنَ العَمَلِ مَا تَرْضَى',
    indonesian: 'Ya Allah, sesungguhnya kami memohon kepada-Mu dalam perjalanan kami ini kebaikan dan ketakwaan, serta amal yang Engkau ridhai',
    transliteration: 'Allāhumma innā nasʾaluka fī safarinā hādhā l-birra wa-t-taqwā, wa mina l-ʿamali mā tarḍā',
    meaning: 'Memohon kebaikan dalam perjalanan',
    when: 'Saat memulai perjalanan jauh',
    benefits: ['Kemudahan perjalanan', 'Perlindungan dari bahaya'],
    source: 'HR. Muslim'
  },

  // WORSHIP
  {
    id: 'prayer-11',
    title: 'Doa Masuk Masjid',
    titleAr: 'دعاء دخول المسجد',
    category: 'worship',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    indonesian: 'Ya Allah, bukakanlah untukku pintu-pintu rahmat-Mu',
    transliteration: 'Allāhumma-ftaḥ lī abwāba raḥmatik',
    meaning: 'Memohon rahmat Allah saat masuk masjid',
    when: 'Masuk masjid dengan kaki kanan',
    benefits: ['Mendapat rahmat Allah', 'Khusyuk dalam ibadah'],
    source: 'HR. Muslim'
  },
  {
    id: 'prayer-12',
    title: 'Doa Keluar Masjid',
    titleAr: 'دعاء الخروج من المسجد',
    category: 'worship',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    indonesian: 'Ya Allah, sesungguhnya aku memohon kepada-Mu dari karunia-Mu',
    transliteration: 'Allāhumma innī asʾaluka min faḍlik',
    meaning: 'Memohon karunia Allah untuk aktivitas dunia',
    when: 'Keluar masjid dengan kaki kiri',
    benefits: ['Keberkahan rezeki', 'Kemudahan urusan'],
    source: 'HR. Muslim'
  },
  {
    id: 'prayer-13',
    title: 'Doa Setelah Wudhu',
    titleAr: 'دعاء بعد الوضوء',
    category: 'worship',
    arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    indonesian: 'Aku bersaksi bahwa tidak ada ilah selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku bersaksi bahwa Muhammad adalah hamba dan utusan-Nya',
    transliteration: 'Ashhadu an lā ilāha illā llāhu waḥdahu lā sharīka lah, wa ashhadu anna Muḥammadan ʿabduhu wa rasūluh',
    meaning: 'Kesaksian tauhid setelah bersuci',
    when: 'Setelah selesai wudhu',
    benefits: ['Dibukakan 8 pintu surga', 'Penghapusan dosa'],
    source: 'HR. Muslim'
  },

  // PROTECTION
  {
    id: 'prayer-14',
    title: 'Ayat Kursi',
    titleAr: 'آية الكرسي',
    category: 'protection',
    arabic: 'اللَّهُ لَا إِلَهَ إِلَّا هُوَ الحَيُّ القَيُّومُ، لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ',
    indonesian: 'Allah, tidak ada ilah selain Dia Yang Hidup kekal lagi terus menerus mengurus. Tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi',
    transliteration: 'Allāhu lā ilāha illā huwa l-ḥayyu l-qayyūm, lā taʾkhudhuhū sinatun wa lā nawm, lahu mā fī s-samāwāti wa mā fī l-arḍ',
    meaning: 'Ayat tentang keagungan dan kekuasaan Allah',
    when: 'Setelah shalat, sebelum tidur, saat butuh perlindungan',
    benefits: ['Perlindungan dari setan', 'Penjagaan dari Allah'],
    source: 'QS. Al-Baqarah: 255'
  },
  {
    id: 'prayer-15',
    title: 'Doa Perlindungan dari Kejahatan',
    titleAr: 'دعاء الحماية من الشر',
    category: 'protection',
    arabic: 'أَعُوذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ',
    indonesian: 'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang diciptakan-Nya',
    transliteration: 'Aʿūdhu bi-kalimāti llāhi t-tāmmāti min sharri mā khalaq',
    meaning: 'Berlindung kepada Allah dari segala kejahatan',
    when: 'Pagi, petang, dan saat merasa takut',
    benefits: ['Perlindungan dari gangguan', 'Ketenangan hati'],
    source: 'HR. Muslim'
  },

  // FORGIVENESS
  {
    id: 'prayer-16',
    title: 'Sayyidul Istighfar',
    titleAr: 'سيد الاستغفار',
    category: 'forgiveness',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ',
    indonesian: 'Ya Allah, Engkau adalah Tuhanku, tidak ada ilah selain Engkau. Engkau menciptakanku dan aku adalah hamba-Mu. Aku berada dalam perjanjian dan janji-Mu semampuku',
    transliteration: 'Allāhumma anta rabbī lā ilāha illā ant, khalaqtanī wa anā ʿabduk, wa anā ʿalā ʿahdika wa waʿdika mā-staṭaʿt',
    meaning: 'Istighfar yang paling utama',
    when: 'Pagi dan petang',
    benefits: ['Jaminan surga jika dibaca dengan yakin', 'Pengampunan dosa'],
    source: 'HR. Bukhari'
  },
  {
    id: 'prayer-17',
    title: 'Istighfar',
    titleAr: 'الاستغفار',
    category: 'forgiveness',
    arabic: 'أَسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الحَيُّ القَيُّومُ وَأَتُوبُ إِلَيْهِ',
    indonesian: 'Aku memohon ampun kepada Allah Yang Maha Agung, yang tidak ada ilah selain Dia, Yang Hidup kekal lagi terus menerus mengurus, dan aku bertaubat kepada-Nya',
    transliteration: 'Astaghfiru llāha l-ʿaẓīma lladhī lā ilāha illā huwa l-ḥayyu l-qayyūmu wa atūbu ilayh',
    meaning: 'Memohon ampunan dan bertaubat',
    when: 'Setiap saat, minimal 100x sehari',
    benefits: ['Penghapusan dosa', 'Kemudahan rezeki', 'Jalan keluar dari masalah'],
    source: 'HR. Abu Dawud dan Tirmidzi'
  },

  // GRATITUDE
  {
    id: 'prayer-18',
    title: 'Doa Syukur',
    titleAr: 'دعاء الشكر',
    category: 'gratitude',
    arabic: 'الحَمْدُ لِلَّهِ الَّذِي بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
    indonesian: 'Segala puji bagi Allah yang dengan nikmat-Nya sempurnalah segala kebaikan',
    transliteration: 'Alḥamdulillāhi lladhī bi-niʿmatihi tatimmu ṣ-ṣāliḥāt',
    meaning: 'Bersyukur atas kesempurnaan nikmat',
    when: 'Saat mendapat kebahagiaan atau keberhasilan',
    benefits: ['Menambah nikmat', 'Ridha Allah'],
    source: 'HR. Hakim'
  },
  {
    id: 'prayer-19',
    title: 'Doa Melihat Nikmat pada Orang Lain',
    titleAr: 'دعاء رؤية النعمة',
    category: 'gratitude',
    arabic: 'اللَّهُمَّ بَارِكْ لَهُ فِيمَا رَزَقْتَهُ',
    indonesian: 'Ya Allah, berkahilah apa yang telah Engkau rezekikan kepadanya',
    transliteration: 'Allāhumma bārik lahu fīmā razaqtah',
    meaning: 'Mendoakan keberkahan untuk orang lain',
    when: 'Melihat nikmat pada orang lain',
    benefits: ['Terhindar dari hasad', 'Mendapat berkah'],
    source: 'Hadits shahih'
  },

  // DIFFICULTY
  {
    id: 'prayer-20',
    title: 'Doa Menghadapi Kesulitan',
    titleAr: 'دعاء الكرب',
    category: 'difficulty',
    arabic: 'لَا إِلَهَ إِلَّا اللهُ العَظِيمُ الحَلِيمُ، لَا إِلَهَ إِلَّا اللهُ رَبُّ العَرْشِ العَظِيمِ',
    indonesian: 'Tidak ada ilah selain Allah Yang Maha Agung lagi Maha Penyantun. Tidak ada ilah selain Allah Tuhan Arsy yang agung',
    transliteration: 'Lā ilāha illā llāhu l-ʿaẓīmu l-ḥalīm, lā ilāha illā llāhu rabbu l-ʿarshi l-ʿaẓīm',
    meaning: 'Berserah diri pada Allah saat kesulitan',
    when: 'Saat menghadapi masalah berat',
    benefits: ['Kemudahan dari Allah', 'Ketenangan hati'],
    source: 'HR. Bukhari dan Muslim'
  },
  {
    id: 'prayer-21',
    title: 'Doa Memohon Kemudahan',
    titleAr: 'دعاء التيسير',
    category: 'difficulty',
    arabic: 'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا، وَأَنْتَ تَجْعَلُ الحَزْنَ إِذَا شِئْتَ سَهْلًا',
    indonesian: 'Ya Allah, tidak ada yang mudah kecuali yang Engkau jadikan mudah. Dan Engkau menjadikan kesedihan, jika Engkau kehendaki, menjadi mudah',
    transliteration: 'Allāhumma lā sahla illā mā jaʿaltahu sahlan, wa anta tajʿalu l-ḥazna idhā shiʾta sahlan',
    meaning: 'Memohon kemudahan dari Allah',
    when: 'Menghadapi tugas atau ujian sulit',
    benefits: ['Kemudahan urusan', 'Pertolongan Allah'],
    source: 'HR. Ibnu Hibban'
  },

  // HEALTH
  {
    id: 'prayer-22',
    title: 'Doa untuk Orang Sakit',
    titleAr: 'دعاء للمريض',
    category: 'health',
    arabic: 'اللَّهُمَّ رَبَّ النَّاسِ، أَذْهِبِ البَأْسَ، اشْفِ أَنْتَ الشَّافِي، لَا شِفَاءَ إِلَّا شِفَاؤُكَ',
    indonesian: 'Ya Allah, Tuhan manusia, hilangkanlah penyakit, sembuhkanlah, Engkaulah Yang Maha Menyembuhkan. Tidak ada kesembuhan kecuali kesembuhan dari-Mu',
    transliteration: 'Allāhumma rabba n-nās, adh-hibi l-baʾs, ishfi anta sh-shāfī, lā shifāʾa illā shifāʾuk',
    meaning: 'Memohon kesembuhan dari Allah',
    when: 'Mendoakan orang sakit atau diri sendiri',
    benefits: ['Kesembuhan dari Allah', 'Pahala mendoakan'],
    source: 'HR. Bukhari dan Muslim'
  },
  {
    id: 'prayer-23',
    title: 'Doa Memohon Kesehatan',
    titleAr: 'دعاء طلب العافية',
    category: 'health',
    arabic: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي',
    indonesian: 'Ya Allah, berikanlah kesehatan pada badanku. Ya Allah, berikanlah kesehatan pada pendengaranku. Ya Allah, berikanlah kesehatan pada penglihatanku',
    transliteration: 'Allāhumma ʿāfinī fī badanī, Allāhumma ʿāfinī fī samʿī, Allāhumma ʿāfinī fī baṣarī',
    meaning: 'Memohon kesehatan tubuh dan indera',
    when: 'Pagi dan petang (3x)',
    benefits: ['Kesehatan tubuh', 'Perlindungan dari penyakit'],
    source: 'HR. Abu Dawud'
  },

  // Additional important prayers
  {
    id: 'prayer-24',
    title: 'Doa Memohon Ilmu yang Bermanfaat',
    titleAr: 'دعاء طلب العلم النافع',
    category: 'worship',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا',
    indonesian: 'Ya Allah, sesungguhnya aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amal yang diterima',
    transliteration: 'Allāhumma innī asʾaluka ʿilman nāfiʿan, wa rizqan ṭayyiban, wa ʿamalan mutaqabbalan',
    meaning: 'Memohon tiga hal utama dalam hidup',
    when: 'Setelah shalat Subuh',
    benefits: ['Ilmu bermanfaat', 'Rezeki halal', 'Amal diterima'],
    source: 'HR. Ibnu Majah'
  },
  {
    id: 'prayer-25',
    title: 'Doa Mohon Husnul Khatimah',
    titleAr: 'دعاء حسن الخاتمة',
    category: 'worship',
    arabic: 'اللَّهُمَّ أَحْسِنْ عَاقِبَتَنَا فِي الأُمُورِ كُلِّهَا، وَأَجِرْنَا مِنْ خِزْيِ الدُّنْيَا وَعَذَابِ الآخِرَةِ',
    indonesian: 'Ya Allah, perbaikilah kesudahan kami dalam segala urusan, dan lindungilah kami dari kehinaan dunia dan siksa akhirat',
    transliteration: 'Allāhumma aḥsin ʿāqibatanā fī l-umūri kullihā, wa ajirnā min khizyi d-dunyā wa ʿadhābi l-ākhira',
    meaning: 'Memohon akhir yang baik dalam segala hal',
    when: 'Setiap saat',
    benefits: ['Husnul khatimah', 'Perlindungan dunia akhirat'],
    source: 'HR. Ahmad'
  }
];