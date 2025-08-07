import { useState } from 'react';
import { arabicLetters } from '../data/arabicLetters';
import { vocabulary } from '../data/vocabulary';
import { 
  Target, 
  Trophy, 
  Star, 
  Heart, 
  CheckCircle, 
  XCircle,
  Award,
  TrendingUp,
  Zap
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface PracticeProps {
  updateProgress: (lessonId: string, points: number) => void;
  userProgress: {
    level: string;
    points: number;
  };
}

interface Question {
  id: string;
  type: 'multiple-choice' | 'matching' | 'fill-blank' | 'translate';
  category: string;
  question: string;
  questionAr?: string;
  options?: string[];
  correctAnswer: string | number;
  explanation?: string;
  points: number;
}

export default function Practice({ updateProgress, userProgress }: PracticeProps) {
  const [selectedMode, setSelectedMode] = useState<'quiz' | 'challenge' | 'daily' | null>(null);
  const [currentQuiz, setCurrentQuiz] = useState<Question[] | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [streak, setStreak] = useState(0);
  // const [timeLeft, setTimeLeft] = useState(30); // Reserved for future timer feature
  const [quizComplete, setQuizComplete] = useState(false);

  const practiceMode = [
    {
      id: 'quiz',
      title: 'Kuis Cepat',
      description: 'Latihan singkat 10 soal pilihan ganda',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      points: 50
    },
    {
      id: 'challenge',
      title: 'Tantangan Harian',
      description: 'Selesaikan tantangan untuk mendapat bonus poin',
      icon: Trophy,
      color: 'from-purple-500 to-purple-600',
      points: 100
    },
    {
      id: 'daily',
      title: 'Latihan Rutin',
      description: 'Latihan komprehensif semua materi',
      icon: Star,
      color: 'from-green-500 to-green-600',
      points: 75
    }
  ];

  const generateQuestions = (_mode: string): Question[] => {
    const questions: Question[] = [];
    
    // Generate letter recognition questions
    for (let i = 0; i < 3; i++) {
      const letter = arabicLetters[Math.floor(Math.random() * arabicLetters.length)];
      const wrongOptions = arabicLetters
        .filter(l => l.id !== letter.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(l => l.name);
      
      questions.push({
        id: `letter-${i}`,
        type: 'multiple-choice',
        category: 'letters',
        question: 'Huruf apakah ini?',
        questionAr: letter.letter,
        options: [letter.name, ...wrongOptions].sort(() => Math.random() - 0.5),
        correctAnswer: letter.name,
        explanation: `Ini adalah huruf ${letter.name} (${letter.nameAr})`,
        points: 10
      });
    }
    
    // Generate vocabulary questions
    for (let i = 0; i < 4; i++) {
      const word = vocabulary[Math.floor(Math.random() * vocabulary.length)];
      const wrongOptions = vocabulary
        .filter(w => w.id !== word.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(w => w.indonesian);
      
      questions.push({
        id: `vocab-${i}`,
        type: 'multiple-choice',
        category: 'vocabulary',
        question: 'Apa arti kata ini?',
        questionAr: word.arabic,
        options: [word.indonesian, ...wrongOptions].sort(() => Math.random() - 0.5),
        correctAnswer: word.indonesian,
        explanation: `${word.arabic} (${word.transliteration}) = ${word.indonesian}`,
        points: 15
      });
    }
    
    // Generate grammar questions
    questions.push({
      id: 'grammar-1',
      type: 'multiple-choice',
      category: 'grammar',
      question: 'Manakah yang merupakan Jumlah Ismiyyah?',
      options: [
        'الطَّالِبُ مُجْتَهِدٌ',
        'كَتَبَ الطَّالِبُ',
        'يَكْتُبُ الطَّالِبُ',
        'اُكْتُبْ'
      ],
      correctAnswer: 'الطَّالِبُ مُجْتَهِدٌ',
      explanation: 'Jumlah Ismiyyah dimulai dengan isim (kata benda)',
      points: 20
    });
    
    questions.push({
      id: 'grammar-2',
      type: 'multiple-choice',
      category: 'grammar',
      question: 'Apa tanda i\'rab untuk Fa\'il?',
      options: ['Marfu\' (ــُـ)', 'Manshub (ــَـ)', 'Majrur (ــِـ)', 'Jazm (ــْـ)'],
      correctAnswer: 'Marfu\' (ــُـ)',
      explanation: 'Fa\'il selalu marfu\' (dibaca dhammah)',
      points: 20
    });
    
    questions.push({
      id: 'grammar-3',
      type: 'multiple-choice',
      category: 'grammar',
      question: 'Pilih kata yang berharakat fathah:',
      options: ['بَ', 'بِ', 'بُ', 'بْ'],
      correctAnswer: 'بَ',
      explanation: 'Fathah adalah garis miring di atas huruf (ــَـ)',
      points: 15
    });
    
    return questions.sort(() => Math.random() - 0.5);
  };

  const startPractice = (mode: string) => {
    setSelectedMode(mode as any);
    const questions = generateQuestions(mode);
    setCurrentQuiz(questions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setLives(3);
    setStreak(0);
    setQuizComplete(false);
    setShowResult(false);
    setSelectedAnswer(null);
  };

  const handleAnswer = (answer: string | number) => {
    if (showResult) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === currentQuiz![currentQuestionIndex].correctAnswer;
    
    if (isCorrect) {
      setScore(score + currentQuiz![currentQuestionIndex].points);
      setStreak(streak + 1);
    } else {
      setLives(lives - 1);
      setStreak(0);
    }
    
    setTimeout(() => {
      if (currentQuestionIndex < currentQuiz!.length - 1 && lives > 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setShowResult(false);
        setSelectedAnswer(null);
      } else {
        setQuizComplete(true);
        updateProgress(`practice-${selectedMode}`, score);
      }
    }, 2000);
  };

  const getAnswerColor = (option: string | number) => {
    if (!showResult) return 'bg-white hover:bg-gray-50';
    
    const isCorrect = option === currentQuiz![currentQuestionIndex].correctAnswer;
    const isSelected = option === selectedAnswer;
    
    if (isCorrect) return 'bg-green-100 border-green-500';
    if (isSelected && !isCorrect) return 'bg-red-100 border-red-500';
    return 'bg-gray-50';
  };

  if (!selectedMode) {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Latihan Interaktif</h1>
          <p className="text-gray-600">Uji pemahaman Anda dengan berbagai mode latihan</p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl p-6 text-white">
            <Trophy className="w-10 h-10 mb-3 opacity-90" />
            <p className="text-3xl font-bold">{userProgress.points}</p>
            <p className="text-sm opacity-90">Total Poin</p>
          </div>
          <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl p-6 text-white">
            <TrendingUp className="w-10 h-10 mb-3 opacity-90" />
            <p className="text-3xl font-bold capitalize">{userProgress.level}</p>
            <p className="text-sm opacity-90">Level Saat Ini</p>
          </div>
          <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-xl p-6 text-white">
            <Zap className="w-10 h-10 mb-3 opacity-90" />
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm opacity-90">Streak Hari</p>
          </div>
        </div>

        {/* Practice Modes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {practiceMode.map((mode) => {
            const Icon = mode.icon;
            return (
              <motion.button
                key={mode.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => startPractice(mode.id)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`bg-gradient-to-r ${mode.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-3" />
                  <h3 className="text-xl font-bold mb-2">{mode.title}</h3>
                  <p className="text-sm opacity-90">{mode.description}</p>
                </div>
                <div className="p-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Hadiah</span>
                    <span className="font-bold text-indigo-600">+{mode.points} poin</span>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Leaderboard Preview */}
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Award className="w-6 h-6 text-yellow-500" />
            Papan Peringkat Hari Ini
          </h2>
          <div className="space-y-3">
            {[
              { rank: 1, name: 'Ahmad', points: 2450, avatar: '🥇' },
              { rank: 2, name: 'Fatimah', points: 2100, avatar: '🥈' },
              { rank: 3, name: 'Umar', points: 1850, avatar: '🥉' },
              { rank: 4, name: 'Anda', points: userProgress.points, avatar: '👤' },
            ].map((player) => (
              <div
                key={player.rank}
                className={`flex items-center justify-between p-3 rounded-lg ${
                  player.name === 'Anda' ? 'bg-indigo-50 border-2 border-indigo-300' : 'bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{player.avatar}</span>
                  <div>
                    <p className="font-semibold">{player.name}</p>
                    <p className="text-sm text-gray-600">Peringkat #{player.rank}</p>
                  </div>
                </div>
                <p className="font-bold text-lg">{player.points} pts</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / (currentQuiz!.length * 15)) * 100);
    
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <Trophy className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-3xl font-bold mb-2">Latihan Selesai!</h2>
          
          <div className="my-6">
            <p className="text-5xl font-bold text-indigo-600 mb-2">{score}</p>
            <p className="text-gray-600">Poin Diperoleh</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-600">{percentage}%</p>
              <p className="text-sm text-green-700">Akurasi</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-purple-600">{streak}</p>
              <p className="text-sm text-purple-700">Streak Terbaik</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={() => startPractice(selectedMode)}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Coba Lagi
            </button>
            <button
              onClick={() => setSelectedMode(null)}
              className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Kembali ke Menu
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentQuestion = currentQuiz![currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / currentQuiz!.length) * 100;

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Soal {currentQuestionIndex + 1} dari {currentQuiz!.length}
          </h1>
          <div className="flex items-center gap-4">
            {/* Lives */}
            <div className="flex items-center gap-1">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-6 h-6 ${
                    i < lives ? 'text-red-500 fill-red-500' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            
            {/* Score */}
            <div className="bg-yellow-100 px-3 py-1 rounded-full">
              <span className="font-bold text-yellow-700">{score} pts</span>
            </div>
            
            {/* Streak */}
            {streak > 0 && (
              <div className="bg-purple-100 px-3 py-1 rounded-full">
                <span className="font-bold text-purple-700">🔥 {streak}</span>
              </div>
            )}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {/* Question */}
          <div className="text-center mb-8">
            <p className="text-xl font-semibold text-gray-800 mb-4">
              {currentQuestion.question}
            </p>
            {currentQuestion.questionAr && (
              <p className="text-5xl arabic-text text-indigo-600">
                {currentQuestion.questionAr}
              </p>
            )}
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQuestion.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={showResult}
                className={`p-4 border-2 rounded-lg transition-all ${getAnswerColor(option)} ${
                  !showResult && 'hover:border-indigo-400'
                }`}
              >
                <span className={/[\u0600-\u06FF]/.test(option) ? 'arabic-text text-xl' : ''}>
                  {option}
                </span>
                {showResult && option === currentQuestion.correctAnswer && (
                  <CheckCircle className="w-5 h-5 text-green-600 inline ml-2" />
                )}
                {showResult && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                  <XCircle className="w-5 h-5 text-red-600 inline ml-2" />
                )}
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showResult && currentQuestion.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-blue-50 rounded-lg"
            >
              <p className="text-sm text-blue-700">
                <strong>Penjelasan:</strong> {currentQuestion.explanation}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}