import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Languages, 
  GraduationCap, 
  Brain,
  Trophy,
  MessageSquare,
  PenTool,
  Layers,
  BookMarked,
  ArrowRight,
  Star,
  TrendingUp,
  Quote,
  Hand,
  Users
} from 'lucide-react';

interface HomeProps {
  userProgress: {
    level: string;
    completedLessons: string[];
    points: number;
    streak: number;
  };
}

export default function Home({ userProgress }: HomeProps) {
  const modules = [
    {
      title: 'Huruf Hijaiyah',
      description: 'Pelajari 28 huruf Arab dengan harakat dan cara penulisannya',
      icon: Languages,
      href: '/letters',
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
      progress: 0
    },
    {
      title: 'Kosakata',
      description: 'Perbendaharaan kata dengan kategori dan audio',
      icon: BookOpen,
      href: '/vocabulary',
      color: 'bg-gradient-to-br from-green-500 to-green-600',
      progress: 0
    },
    {
      title: 'Flashcards',
      description: 'Latihan menghafal dengan sistem kartu pintar',
      icon: Layers,
      href: '/flashcards',
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
      progress: 0
    },
    {
      title: 'Tashrif',
      description: 'Konjugasi kata kerja dan rumus-rumus tashrif',
      icon: BookMarked,
      href: '/tashrif',
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
      progress: 0
    },
    {
      title: 'Nahwu',
      description: 'Tata bahasa Arab dari dasar hingga mahir',
      icon: GraduationCap,
      href: '/nahwu',
      color: 'bg-gradient-to-br from-red-500 to-red-600',
      progress: 0
    },
    {
      title: 'Percakapan Harian',
      description: 'Dialog praktis untuk situasi sehari-hari',
      icon: MessageSquare,
      href: '/daily-conversations',
      color: 'bg-gradient-to-br from-blue-600 to-blue-700',
      progress: 0
    },
    {
      title: 'Cerita Pendek',
      description: 'Tingkatkan kemampuan membaca dengan cerita menarik',
      icon: BookOpen,
      href: '/short-stories',
      color: 'bg-gradient-to-br from-purple-600 to-purple-700',
      progress: 0
    },
    {
      title: 'Idiom & Peribahasa',
      description: 'Ungkapan idiomatik dan peribahasa Arab',
      icon: Quote,
      href: '/idioms-proverbs',
      color: 'bg-gradient-to-br from-orange-600 to-orange-700',
      progress: 0
    },
    {
      title: 'Doa-doa Harian',
      description: 'Koleksi doa pilihan untuk kehidupan sehari-hari',
      icon: Hand,
      href: '/prayers',
      color: 'bg-gradient-to-br from-teal-500 to-teal-600',
      progress: 0
    },
    {
      title: 'Latihan',
      description: 'Tes pemahaman dan latihan interaktif',
      icon: PenTool,
      href: '/practice',
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      progress: 0
    }
  ];

  const quickStats = [
    { label: 'Total Poin', value: userProgress.points, icon: Trophy, color: 'text-yellow-500' },
    { label: 'Streak Hari', value: userProgress.streak, icon: TrendingUp, color: 'text-green-500' },
    { label: 'Pelajaran Selesai', value: userProgress.completedLessons.length, icon: Star, color: 'text-purple-500' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl lg:rounded-2xl p-6 lg:p-8 mb-6 lg:mb-8 text-white">
        <h1 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
          أَهْلًا وَسَهْلًا
        </h1>
        <p className="text-lg lg:text-xl mb-2">Selamat Datang di Aplikasi Belajar Bahasa Arab</p>
        <p className="text-base lg:text-lg opacity-90 mb-4 lg:mb-6">
          Kuasai bahasa Arab dari dasar hingga mahir dengan metode pembelajaran interaktif
        </p>
        
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mt-6 lg:mt-8">
          {quickStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white/10 backdrop-blur rounded-lg p-3 lg:p-4">
                <div className="flex items-center gap-2 lg:gap-3">
                  <Icon className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color}`} />
                  <div>
                    <p className="text-2xl lg:text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs lg:text-sm opacity-90">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Learning Path */}
      <div className="mb-6 lg:mb-8">
        <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4">Jalur Pembelajaran</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.title}
                to={module.href}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`${module.color} p-5 lg:p-6 h-full`}>
                  <div className="flex items-start justify-between mb-3 lg:mb-4">
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white/90" />
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 text-white/60 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-white/80 text-xs lg:text-sm">{module.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white rounded-full h-2 transition-all duration-300"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                    <p className="text-xs text-white/70 mt-1">{module.progress}% selesai</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* AI Tutor CTA */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-xl lg:rounded-2xl p-6 lg:p-8 text-white">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4">
          <div className="text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-bold mb-2">AI Tutor Pribadi</h2>
            <p className="text-base lg:text-lg opacity-90 mb-4">
              Dapatkan bantuan pembelajaran personal dengan AI yang memahami kebutuhan belajar Anda
            </p>
            <Link
              to="/ai-tutor"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-4 lg:px-6 py-2.5 lg:py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-sm lg:text-base"
            >
              <MessageSquare className="w-4 h-4 lg:w-5 lg:h-5" />
              Mulai Belajar dengan AI
              <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
            </Link>
          </div>
          <Brain className="w-24 h-24 lg:w-32 lg:h-32 text-white/20 hidden lg:block" />
        </div>
      </div>

      {/* Learning Tips */}
      <div className="mt-6 lg:mt-8 bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 lg:p-6">
        <h3 className="text-base lg:text-lg font-bold text-yellow-800 mb-3">💡 Tips Belajar</h3>
        <ul className="space-y-2 text-yellow-700 text-sm lg:text-base">
          <li>• Luangkan waktu 15-30 menit setiap hari untuk konsistensi</li>
          <li>• Mulai dari huruf hijaiyah sebelum ke kosakata</li>
          <li>• Gunakan flashcards untuk menghafal kosakata baru</li>
          <li>• Praktekkan menulis huruf Arab dengan fitur stroke order</li>
          <li>• Tanyakan AI Tutor jika ada yang tidak dipahami</li>
        </ul>
      </div>
    </div>
  );
}