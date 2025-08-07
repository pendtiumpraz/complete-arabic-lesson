import { useState, useEffect } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  Award, 
  Star, 
  Target,
  Calendar,
  Clock,
  BookOpen,
  CheckCircle,
  BarChart3,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgressProps {
  userProgress: {
    level: string;
    completedLessons: string[];
    points: number;
    streak: number;
    lastActive: string;
  };
}

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: any;
  unlocked: boolean;
  progress: number;
  total: number;
  color: string;
}

interface Statistics {
  label: string;
  value: number | string;
  icon: any;
  color: string;
  trend?: number;
}

export default function Progress({ userProgress }: ProgressProps) {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'achievements' | 'statistics'>('overview');
  const [weeklyData, setWeeklyData] = useState<number[]>([45, 52, 38, 65, 72, 88, 95]);

  const achievements: Achievement[] = [
    {
      id: 'first-step',
      title: 'Langkah Pertama',
      description: 'Selesaikan pelajaran pertama',
      icon: Star,
      unlocked: userProgress.completedLessons.length > 0,
      progress: Math.min(userProgress.completedLessons.length, 1),
      total: 1,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      id: 'vocabulary-master',
      title: 'Master Kosakata',
      description: 'Pelajari 100 kata baru',
      icon: BookOpen,
      unlocked: false,
      progress: 35,
      total: 100,
      color: 'from-green-400 to-teal-500'
    },
    {
      id: 'grammar-expert',
      title: 'Ahli Nahwu',
      description: 'Selesaikan semua topik nahwu',
      icon: Trophy,
      unlocked: false,
      progress: 3,
      total: 10,
      color: 'from-purple-400 to-pink-500'
    },
    {
      id: 'streak-warrior',
      title: 'Konsisten',
      description: 'Belajar 7 hari berturut-turut',
      icon: Zap,
      unlocked: userProgress.streak >= 7,
      progress: userProgress.streak,
      total: 7,
      color: 'from-red-400 to-pink-500'
    },
    {
      id: 'point-collector',
      title: 'Kolektor Poin',
      description: 'Kumpulkan 1000 poin',
      icon: Award,
      unlocked: userProgress.points >= 1000,
      progress: userProgress.points,
      total: 1000,
      color: 'from-indigo-400 to-purple-500'
    },
    {
      id: 'perfect-score',
      title: 'Nilai Sempurna',
      description: 'Raih 100% dalam 5 kuis',
      icon: Target,
      unlocked: false,
      progress: 2,
      total: 5,
      color: 'from-blue-400 to-indigo-500'
    }
  ];

  const statistics: Statistics[] = [
    {
      label: 'Total Poin',
      value: userProgress.points,
      icon: Trophy,
      color: 'text-yellow-500',
      trend: 12
    },
    {
      label: 'Pelajaran Selesai',
      value: userProgress.completedLessons.length,
      icon: CheckCircle,
      color: 'text-green-500',
      trend: 8
    },
    {
      label: 'Streak Hari',
      value: userProgress.streak,
      icon: Zap,
      color: 'text-orange-500',
      trend: userProgress.streak > 0 ? 100 : -100
    },
    {
      label: 'Level',
      value: userProgress.level,
      icon: TrendingUp,
      color: 'text-purple-500'
    },
    {
      label: 'Waktu Belajar',
      value: '2.5 jam',
      icon: Clock,
      color: 'text-blue-500',
      trend: 25
    },
    {
      label: 'Kata Dipelajari',
      value: 156,
      icon: BookOpen,
      color: 'text-indigo-500',
      trend: 15
    }
  ];

  const learningPath = [
    { name: 'Huruf Hijaiyah', completed: true, current: false },
    { name: 'Harakat', completed: true, current: false },
    { name: 'Kosakata Dasar', completed: true, current: true },
    { name: 'Jumlah Ismiyyah', completed: false, current: false },
    { name: 'Jumlah Fi\'liyyah', completed: false, current: false },
    { name: 'Tashrif Dasar', completed: false, current: false },
    { name: 'Percakapan', completed: false, current: false }
  ];

  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
  const maxValue = Math.max(...weeklyData);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Progress Pembelajaran</h1>
        <p className="text-gray-600">Pantau perkembangan belajar bahasa Arab Anda</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedTab('overview')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            selectedTab === 'overview'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Ringkasan
        </button>
        <button
          onClick={() => setSelectedTab('achievements')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            selectedTab === 'achievements'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Pencapaian
        </button>
        <button
          onClick={() => setSelectedTab('statistics')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            selectedTab === 'statistics'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Statistik
        </button>
      </div>

      {selectedTab === 'overview' && (
        <div className="space-y-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {statistics.slice(0, 4).map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                    {stat.trend && (
                      <span className={`text-sm font-semibold ${
                        stat.trend > 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        {stat.trend > 0 ? '+' : ''}{stat.trend}%
                      </span>
                    )}
                  </div>
                  <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Weekly Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="w-6 h-6" />
              Aktivitas Minggu Ini
            </h2>
            <div className="flex items-end justify-between gap-2 h-40">
              {weeklyData.map((value, index) => (
                <div key={index} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${(value / maxValue) * 100}%` }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full bg-gradient-to-t from-indigo-500 to-purple-600 rounded-t-lg relative group"
                  >
                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      {value}
                    </span>
                  </motion.div>
                  <span className="text-xs text-gray-600">{days[index]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Jalur Pembelajaran
            </h2>
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-300"></div>
              
              {learningPath.map((step, index) => (
                <div key={index} className="relative flex items-center gap-4 mb-6 last:mb-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 ${
                    step.completed ? 'bg-green-500' :
                    step.current ? 'bg-indigo-600 animate-pulse' :
                    'bg-gray-300'
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-6 h-6 text-white" />
                    ) : (
                      <span className="text-white font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div className={`flex-1 p-4 rounded-lg ${
                    step.current ? 'bg-indigo-50 border-2 border-indigo-300' :
                    step.completed ? 'bg-green-50' :
                    'bg-gray-50'
                  }`}>
                    <p className={`font-semibold ${
                      step.current ? 'text-indigo-700' :
                      step.completed ? 'text-green-700' :
                      'text-gray-600'
                    }`}>
                      {step.name}
                    </p>
                    {step.current && (
                      <p className="text-sm text-indigo-600 mt-1">Sedang dipelajari</p>
                    )}
                    {step.completed && (
                      <p className="text-sm text-green-600 mt-1">Selesai</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTab === 'achievements' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            const progressPercentage = (achievement.progress / achievement.total) * 100;
            
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  achievement.unlocked ? 'ring-2 ring-yellow-400' : ''
                }`}
              >
                <div className={`bg-gradient-to-r ${achievement.color} p-6 text-white`}>
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="w-10 h-10" />
                    {achievement.unlocked && (
                      <div className="bg-white/20 backdrop-blur rounded-full p-2">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-bold mb-1">{achievement.title}</h3>
                  <p className="text-sm opacity-90">{achievement.description}</p>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-semibold">
                      {achievement.progress}/{achievement.total}
                    </span>
                  </div>
                  <div className="bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-500 ${
                        achievement.unlocked 
                          ? 'bg-gradient-to-r from-green-400 to-green-500' 
                          : 'bg-gradient-to-r from-gray-400 to-gray-500'
                      }`}
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {selectedTab === 'statistics' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Detailed Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6">Statistik Detail</h2>
            <div className="space-y-4">
              {statistics.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                      <span className="font-medium">{stat.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold">{stat.value}</span>
                      {stat.trend && (
                        <span className={`text-sm ${
                          stat.trend > 0 ? 'text-green-500' : 'text-red-500'
                        }`}>
                          {stat.trend > 0 ? '↑' : '↓'} {Math.abs(stat.trend)}%
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Calendar Heatmap */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Aktivitas 30 Hari Terakhir
            </h2>
            <div className="grid grid-cols-7 gap-2">
              {[...Array(30)].map((_, index) => {
                const intensity = Math.random();
                return (
                  <div
                    key={index}
                    className={`aspect-square rounded ${
                      intensity > 0.8 ? 'bg-green-500' :
                      intensity > 0.6 ? 'bg-green-400' :
                      intensity > 0.4 ? 'bg-green-300' :
                      intensity > 0.2 ? 'bg-green-200' :
                      'bg-gray-100'
                    }`}
                    title={`Hari ${index + 1}`}
                  />
                );
              })}
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-600">
              <span>Kurang</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-gray-100 rounded"></div>
                <div className="w-3 h-3 bg-green-200 rounded"></div>
                <div className="w-3 h-3 bg-green-300 rounded"></div>
                <div className="w-3 h-3 bg-green-400 rounded"></div>
                <div className="w-3 h-3 bg-green-500 rounded"></div>
              </div>
              <span>Lebih</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}