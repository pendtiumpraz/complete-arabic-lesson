export interface IdiomProverb {
  id: string;
  arabic: string;
  indonesian: string;
  literal: string;
  meaning: string;
  transliteration: string;
  category: 'idiom' | 'proverb';
  usage?: string;
  example?: {
    arabic: string;
    indonesian: string;
    transliteration: string;
  };
}

export const idiomsProverbs: IdiomProverb[] = [
  // PROVERBS (أمثال)
  {
    id: 'proverb-1',
    arabic: 'الصَّبْرُ مِفْتَاحُ الفَرَجِ',
    indonesian: 'Kesabaran adalah kunci kelapangan',
    literal: 'Kesabaran adalah kunci pembebasan',
    meaning: 'Dengan kesabaran, semua masalah akan terselesaikan',
    transliteration: 'Aṣ-ṣabru miftāḥu l-faraj',
    category: 'proverb',
    usage: 'Digunakan untuk menenangkan orang yang sedang menghadapi kesulitan',
    example: {
      arabic: 'لَا تَقْلَقْ، الصَّبْرُ مِفْتَاحُ الفَرَجِ',
      indonesian: 'Jangan khawatir, kesabaran adalah kunci kelapangan',
      transliteration: 'Lā taqlaq, aṣ-ṣabru miftāḥu l-faraj'
    }
  },
  {
    id: 'proverb-2',
    arabic: 'العِلْمُ نُورٌ وَالجَهْلُ ظَلَامٌ',
    indonesian: 'Ilmu adalah cahaya dan kebodohan adalah kegelapan',
    literal: 'Ilmu adalah cahaya dan kebodohan adalah kegelapan',
    meaning: 'Ilmu menerangi kehidupan seseorang',
    transliteration: 'Al-ʿilmu nūrun wa-l-jahlu ẓalām',
    category: 'proverb',
    usage: 'Untuk memotivasi orang agar belajar'
  },
  {
    id: 'proverb-3',
    arabic: 'الوَقْتُ كَالسَّيْفِ إِنْ لَمْ تَقْطَعْهُ قَطَعَكَ',
    indonesian: 'Waktu bagaikan pedang, jika kau tidak memotongnya, ia akan memotongmu',
    literal: 'Waktu seperti pedang jika tidak kau potong ia memotongmu',
    meaning: 'Gunakan waktu dengan baik atau waktu akan merugikanmu',
    transliteration: 'Al-waqtu ka-s-sayfi in lam taqṭaʿhu qaṭaʿak',
    category: 'proverb',
    usage: 'Mengingatkan pentingnya manajemen waktu'
  },
  {
    id: 'proverb-4',
    arabic: 'مَنْ طَلَبَ العُلَا سَهِرَ اللَّيَالِي',
    indonesian: 'Siapa yang mencari kemuliaan akan begadang malam-malam',
    literal: 'Siapa mencari ketinggian begadang malam-malam',
    meaning: 'Kesuksesan memerlukan kerja keras dan pengorbanan',
    transliteration: 'Man ṭalaba l-ʿulā sahira l-layālī',
    category: 'proverb',
    usage: 'Memotivasi untuk bekerja keras'
  },
  {
    id: 'proverb-5',
    arabic: 'الصَّدِيقُ وَقْتَ الضِّيقِ',
    indonesian: 'Teman sejati diketahui saat kesulitan',
    literal: 'Teman waktu sempit',
    meaning: 'Teman sejati adalah yang membantu saat susah',
    transliteration: 'Aṣ-ṣadīqu waqta ḍ-ḍīq',
    category: 'proverb',
    usage: 'Menjelaskan nilai persahabatan sejati'
  },
  {
    id: 'proverb-6',
    arabic: 'لَا تُؤَجِّلْ عَمَلَ اليَوْمِ إِلَى الغَدِ',
    indonesian: 'Jangan tunda pekerjaan hari ini sampai besok',
    literal: 'Jangan tunda kerja hari ini ke besok',
    meaning: 'Selesaikan tugas tepat waktu',
    transliteration: 'Lā tuʾajjil ʿamala l-yawmi ilā l-ghad',
    category: 'proverb',
    usage: 'Mengingatkan untuk tidak menunda-nunda'
  },
  {
    id: 'proverb-7',
    arabic: 'خَيْرُ الكَلَامِ مَا قَلَّ وَدَلَّ',
    indonesian: 'Sebaik-baik perkataan adalah yang singkat dan bermakna',
    literal: 'Terbaik perkataan apa yang sedikit dan menunjukkan',
    meaning: 'Berbicara secukupnya lebih baik',
    transliteration: 'Khayru l-kalāmi mā qalla wa dall',
    category: 'proverb',
    usage: 'Mengajarkan untuk berbicara efektif'
  },
  {
    id: 'proverb-8',
    arabic: 'العَقْلُ السَّلِيمُ فِي الجِسْمِ السَّلِيمِ',
    indonesian: 'Akal yang sehat dalam tubuh yang sehat',
    literal: 'Akal sehat di tubuh sehat',
    meaning: 'Kesehatan fisik mempengaruhi kesehatan mental',
    transliteration: 'Al-ʿaqlu s-salīmu fī l-jismi s-salīm',
    category: 'proverb',
    usage: 'Menekankan pentingnya kesehatan holistik'
  },
  {
    id: 'proverb-9',
    arabic: 'اِتَّقِ شَرَّ مَنْ أَحْسَنْتَ إِلَيْهِ',
    indonesian: 'Waspadalah terhadap kejahatan orang yang kau beri kebaikan',
    literal: 'Takutlah kejahatan siapa yang kau berbuat baik kepadanya',
    meaning: 'Kadang orang yang kita bantu bisa menyakiti kita',
    transliteration: 'Ittaqi sharra man aḥsanta ilayh',
    category: 'proverb',
    usage: 'Peringatan untuk berhati-hati'
  },
  {
    id: 'proverb-10',
    arabic: 'الطُّيُورُ عَلَى أَشْكَالِهَا تَقَعُ',
    indonesian: 'Burung hinggap dengan sejenisnya',
    literal: 'Burung-burung pada bentuknya jatuh',
    meaning: 'Orang cenderung berkumpul dengan yang sepemikiran',
    transliteration: 'Aṭ-ṭuyūru ʿalā ashkālihā taqaʿ',
    category: 'proverb',
    usage: 'Menjelaskan kecenderungan manusia berkelompok'
  },

  // IDIOMS (تعابير)
  {
    id: 'idiom-1',
    arabic: 'ضَرَبَ عُصْفُورَيْنِ بِحَجَرٍ وَاحِدٍ',
    indonesian: 'Membunuh dua burung dengan satu batu',
    literal: 'Memukul dua burung dengan satu batu',
    meaning: 'Menyelesaikan dua masalah sekaligus',
    transliteration: 'Ḍaraba ʿuṣfūrayni bi-ḥajarin wāḥid',
    category: 'idiom',
    usage: 'Ketika seseorang berhasil mencapai dua tujuan dengan satu tindakan',
    example: {
      arabic: 'ذَهَبْتُ إِلَى السُّوقِ وَضَرَبْتُ عُصْفُورَيْنِ بِحَجَرٍ وَاحِدٍ',
      indonesian: 'Saya pergi ke pasar dan menyelesaikan dua hal sekaligus',
      transliteration: 'Dhahabtu ilā s-sūqi wa ḍarabtu ʿuṣfūrayni bi-ḥajarin wāḥid'
    }
  },
  {
    id: 'idiom-2',
    arabic: 'وَضَعَ النُّقَاطَ عَلَى الحُرُوفِ',
    indonesian: 'Memperjelas situasi',
    literal: 'Meletakkan titik-titik pada huruf-huruf',
    meaning: 'Menjelaskan sesuatu dengan sangat jelas',
    transliteration: 'Waḍaʿa n-nuqāṭa ʿalā l-ḥurūf',
    category: 'idiom',
    usage: 'Ketika seseorang menjelaskan dengan detail'
  },
  {
    id: 'idiom-3',
    arabic: 'قَلْبُهُ عَلَى يَدِهِ',
    indonesian: 'Tulus dan jujur',
    literal: 'Hatinya di tangannya',
    meaning: 'Orang yang terbuka dan tidak menyembunyikan perasaan',
    transliteration: 'Qalbuhu ʿalā yadih',
    category: 'idiom',
    usage: 'Menggambarkan orang yang jujur dan terbuka'
  },
  {
    id: 'idiom-4',
    arabic: 'يَبِيعُ المَاءَ فِي حَارَةِ السَّقَّائِينَ',
    indonesian: 'Mengajari orang yang sudah ahli',
    literal: 'Menjual air di kampung tukang air',
    meaning: 'Melakukan sesuatu yang tidak perlu',
    transliteration: 'Yabīʿu l-māʾa fī ḥārati s-saqqāʾīn',
    category: 'idiom',
    usage: 'Ketika seseorang mencoba mengajari ahlinya'
  },
  {
    id: 'idiom-5',
    arabic: 'ذَهَبَ بِلَا رَجْعَةٍ',
    indonesian: 'Pergi untuk selamanya',
    literal: 'Pergi tanpa kembali',
    meaning: 'Meninggal atau hilang selamanya',
    transliteration: 'Dhahaba bi-lā rajʿa',
    category: 'idiom',
    usage: 'Ungkapan halus untuk kematian'
  },
  {
    id: 'idiom-6',
    arabic: 'أَكَلَ الدَّهْرُ عَلَيْهِ وَشَرِبَ',
    indonesian: 'Sangat tua atau usang',
    literal: 'Masa telah makan dan minum atasnya',
    meaning: 'Sesuatu yang sudah sangat lama',
    transliteration: 'Akala d-dahru ʿalayhi wa sharib',
    category: 'idiom',
    usage: 'Menggambarkan sesuatu yang sangat tua'
  },
  {
    id: 'idiom-7',
    arabic: 'عَلَى رَأْسِ لِسَانِي',
    indonesian: 'Di ujung lidah',
    literal: 'Di kepala lidahku',
    meaning: 'Hampir ingat tapi belum bisa mengucapkan',
    transliteration: 'ʿAlā raʾsi lisānī',
    category: 'idiom',
    usage: 'Ketika hampir mengingat sesuatu'
  },
  {
    id: 'idiom-8',
    arabic: 'بَيْنَ المِطْرَقَةِ وَالسِّنْدَانِ',
    indonesian: 'Terjepit di antara dua pilihan sulit',
    literal: 'Antara palu dan landasan',
    meaning: 'Dalam situasi sulit tanpa jalan keluar',
    transliteration: 'Bayna l-miṭraqati wa-s-sindān',
    category: 'idiom',
    usage: 'Menggambarkan dilema'
  },
  {
    id: 'idiom-9',
    arabic: 'قَطْرَةٌ فِي بَحْرٍ',
    indonesian: 'Setetes air di lautan',
    literal: 'Tetesan dalam laut',
    meaning: 'Sesuatu yang sangat kecil dibanding keseluruhan',
    transliteration: 'Qaṭratun fī baḥr',
    category: 'idiom',
    usage: 'Menggambarkan sesuatu yang tidak signifikan'
  },
  {
    id: 'idiom-10',
    arabic: 'يَضْحَكُ فِي سِرِّهِ',
    indonesian: 'Tertawa dalam hati',
    literal: 'Tertawa dalam rahasianya',
    meaning: 'Merasa senang tapi tidak menunjukkannya',
    transliteration: 'Yaḍḥaku fī sirrih',
    category: 'idiom',
    usage: 'Ketika seseorang senang tapi menyembunyikannya'
  },

  // Additional proverbs
  {
    id: 'proverb-11',
    arabic: 'إِنَّ مَعَ العُسْرِ يُسْرًا',
    indonesian: 'Sesungguhnya bersama kesulitan ada kemudahan',
    literal: 'Sesungguhnya dengan kesulitan kemudahan',
    meaning: 'Setiap kesulitan pasti ada jalan keluarnya',
    transliteration: 'Inna maʿa l-ʿusri yusrā',
    category: 'proverb',
    usage: 'Memberikan harapan saat kesulitan'
  },
  {
    id: 'proverb-12',
    arabic: 'مَنْ جَدَّ وَجَدَ',
    indonesian: 'Siapa yang bersungguh-sungguh akan berhasil',
    literal: 'Siapa bersungguh-sungguh menemukan',
    meaning: 'Kerja keras akan membuahkan hasil',
    transliteration: 'Man jadda wajad',
    category: 'proverb',
    usage: 'Memotivasi untuk berusaha'
  },
  {
    id: 'proverb-13',
    arabic: 'الحَاجَةُ أُمُّ الاخْتِرَاعِ',
    indonesian: 'Kebutuhan adalah ibu dari penemuan',
    literal: 'Kebutuhan ibu penemuan',
    meaning: 'Kesulitan mendorong kreativitas',
    transliteration: 'Al-ḥājatu ummu l-ikhtirāʿ',
    category: 'proverb',
    usage: 'Menjelaskan sumber inovasi'
  },
  {
    id: 'proverb-14',
    arabic: 'لِكُلِّ مَقَامٍ مَقَالٌ',
    indonesian: 'Setiap situasi ada kata yang tepat',
    literal: 'Untuk setiap tempat ada perkataan',
    meaning: 'Berbicara sesuai konteks',
    transliteration: 'Li-kulli maqāmin maqāl',
    category: 'proverb',
    usage: 'Mengajarkan kesesuaian berbicara'
  },
  {
    id: 'proverb-15',
    arabic: 'العَيْنُ بَصِيرَةٌ وَاليَدُ قَصِيرَةٌ',
    indonesian: 'Mata dapat melihat tapi tangan pendek',
    literal: 'Mata melihat dan tangan pendek',
    meaning: 'Menginginkan sesuatu tapi tidak mampu meraihnya',
    transliteration: 'Al-ʿaynu baṣīratun wa-l-yadu qaṣīra',
    category: 'proverb',
    usage: 'Menggambarkan keterbatasan kemampuan'
  },

  // Additional idioms
  {
    id: 'idiom-11',
    arabic: 'عَلَى قَدْرِ أَهْلِ العَزْمِ',
    indonesian: 'Sesuai dengan tekad',
    literal: 'Sesuai kadar orang yang bertekad',
    meaning: 'Hasil sesuai dengan usaha',
    transliteration: 'ʿAlā qadri ahli l-ʿazm',
    category: 'idiom',
    usage: 'Menjelaskan proporsi usaha dan hasil'
  },
  {
    id: 'idiom-12',
    arabic: 'شَعْرَةٌ مِنْ بَعِيرٍ',
    indonesian: 'Sangat sedikit',
    literal: 'Sehelai rambut dari unta',
    meaning: 'Bagian yang sangat kecil',
    transliteration: 'Shaʿratun min baʿīr',
    category: 'idiom',
    usage: 'Menggambarkan porsi yang sangat kecil'
  },
  {
    id: 'idiom-13',
    arabic: 'لَا يُسْمِنُ وَلَا يُغْنِي مِنْ جُوعٍ',
    indonesian: 'Tidak berguna sama sekali',
    literal: 'Tidak menggemukkan dan tidak menghilangkan lapar',
    meaning: 'Sesuatu yang tidak ada manfaatnya',
    transliteration: 'Lā yusminu wa lā yughnī min jūʿ',
    category: 'idiom',
    usage: 'Menggambarkan sesuatu yang sia-sia'
  },
  {
    id: 'idiom-14',
    arabic: 'يَقْلِبُ الأُمُورَ رَأْسًا عَلَى عَقِبٍ',
    indonesian: 'Membalikkan keadaan',
    literal: 'Membalik urusan kepala di atas tumit',
    meaning: 'Mengubah situasi secara drastis',
    transliteration: 'Yaqlibu l-umūra raʾsan ʿalā ʿaqib',
    category: 'idiom',
    usage: 'Menggambarkan perubahan besar'
  },
  {
    id: 'idiom-15',
    arabic: 'فِي كُلِّ وَادٍ عَصَاهُ',
    indonesian: 'Terlibat dalam banyak hal',
    literal: 'Di setiap lembah ada tongkatnya',
    meaning: 'Ikut campur dalam banyak urusan',
    transliteration: 'Fī kulli wādin ʿaṣāh',
    category: 'idiom',
    usage: 'Menggambarkan orang yang suka ikut campur'
  }
];