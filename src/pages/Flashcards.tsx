import { useState, useEffect } from 'react';
import { vocabulary, vocabularyCategories } from '../data/vocabulary';
import { Volume2, RotateCw, Check, X, Eye, EyeOff, Shuffle, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FlashcardsProps {
  updateProgress: (lessonId: string, points: number) => void;
}

interface FlashcardSession {
  cards: typeof vocabulary;
  currentIndex: number;
  correct: number;
  incorrect: number;
  showAnswer: boolean;
  completed: boolean;
}

export default function Flashcards({ updateProgress }: FlashcardsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sessionSize, setSessionSize] = useState(10);
  const [session, setSession] = useState<FlashcardSession | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionHistory, setSessionHistory] = useState<{correct: number, total: number, date: string}[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('flashcardHistory');
    if (saved) {
      setSessionHistory(JSON.parse(saved));
    }
  }, []);

  const speakArabic = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const startSession = () => {
    let cards = [...vocabulary];
    
    if (selectedCategory !== 'all') {
      cards = cards.filter(word => word.category === selectedCategory);
    }
    
    // Shuffle cards
    cards = cards.sort(() => Math.random() - 0.5).slice(0, sessionSize);
    
    setSession({
      cards,
      currentIndex: 0,
      correct: 0,
      incorrect: 0,
      showAnswer: false,
      completed: false
    });
    setIsFlipped(false);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (!session) return;
    
    const newSession = {
      ...session,
      correct: session.correct + (isCorrect ? 1 : 0),
      incorrect: session.incorrect + (isCorrect ? 0 : 1)
    };
    
    if (session.currentIndex < session.cards.length - 1) {
      newSession.currentIndex = session.currentIndex + 1;
      newSession.showAnswer = false;
      setIsFlipped(false);
    } else {
      newSession.completed = true;
      
      // Save to history
      const history = {
        correct: newSession.correct,
        total: session.cards.length,
        date: new Date().toISOString()
      };
      const newHistory = [...sessionHistory, history];
      setSessionHistory(newHistory);
      localStorage.setItem('flashcardHistory', JSON.stringify(newHistory));
      
      // Update progress
      updateProgress('flashcard-session', newSession.correct * 10);
    }
    
    setSession(newSession);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    if (session && !isFlipped) {
      speakArabic(session.cards[session.currentIndex].arabic);
    }
  };

  const resetSession = () => {
    setSession(null);
    setIsFlipped(false);
  };

  if (!session) {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Flashcards</h1>
          <p className="text-gray-600">Latih hafalan kosakata dengan sistem kartu pintar</p>
        </div>

        {/* Session Setup */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">Atur Sesi Flashcard</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">Semua Kategori</option>
                {vocabularyCategories.map(cat => (
                  <option key={cat.id} value={cat.id}>
                    {cat.icon} {cat.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jumlah Kartu
              </label>
              <select
                value={sessionSize}
                onChange={(e) => setSessionSize(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value={5}>5 kartu</option>
                <option value={10}>10 kartu</option>
                <option value={15}>15 kartu</option>
                <option value={20}>20 kartu</option>
                <option value={30}>30 kartu</option>
              </select>
            </div>
          </div>
          
          <button
            onClick={startSession}
            className="mt-6 w-full md:w-auto px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all flex items-center justify-center gap-2"
          >
            <Shuffle className="w-5 h-5" />
            Mulai Sesi Flashcard
          </button>
        </div>

        {/* Statistics */}
        {sessionHistory.length > 0 && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold mb-6">Statistik Pembelajaran</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-lg">
                <p className="text-sm text-green-600 mb-1">Total Sesi</p>
                <p className="text-2xl font-bold text-green-700">{sessionHistory.length}</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <p className="text-sm text-blue-600 mb-1">Total Kartu</p>
                <p className="text-2xl font-bold text-blue-700">
                  {sessionHistory.reduce((acc, h) => acc + h.total, 0)}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                <p className="text-sm text-purple-600 mb-1">Rata-rata Akurasi</p>
                <p className="text-2xl font-bold text-purple-700">
                  {Math.round(
                    (sessionHistory.reduce((acc, h) => acc + h.correct, 0) / 
                     sessionHistory.reduce((acc, h) => acc + h.total, 0)) * 100
                  )}%
                </p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">Riwayat Sesi Terakhir</h3>
              <div className="space-y-2">
                {sessionHistory.slice(-5).reverse().map((history, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <span className="text-sm text-gray-600">
                      {new Date(history.date).toLocaleDateString('id-ID')}
                    </span>
                    <span className="font-semibold">
                      {history.correct}/{history.total} benar
                    </span>
                    <span className={`text-sm font-medium ${
                      (history.correct / history.total) >= 0.8 ? 'text-green-600' :
                      (history.correct / history.total) >= 0.6 ? 'text-yellow-600' :
                      'text-red-600'
                    }`}>
                      {Math.round((history.correct / history.total) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (session.completed) {
    const accuracy = Math.round((session.correct / session.cards.length) * 100);
    
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center"
        >
          <Award className="w-20 h-20 mx-auto text-yellow-500 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Sesi Selesai!</h2>
          
          <div className="my-6">
            <p className="text-5xl font-bold text-indigo-600 mb-2">{accuracy}%</p>
            <p className="text-gray-600">Tingkat Akurasi</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-green-600">{session.correct}</p>
              <p className="text-sm text-green-700">Benar</p>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-2xl font-bold text-red-600">{session.incorrect}</p>
              <p className="text-sm text-red-700">Salah</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <button
              onClick={startSession}
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCw className="w-5 h-5" />
              Ulangi Sesi
            </button>
            <button
              onClick={resetSession}
              className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Sesi Baru
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  const currentCard = session.cards[session.currentIndex];
  const progress = ((session.currentIndex + 1) / session.cards.length) * 100;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Sesi Flashcard</h1>
        <div className="flex items-center gap-6">
          <p className="text-gray-600">
            Kartu {session.currentIndex + 1} dari {session.cards.length}
          </p>
          <div className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-600" />
            <span className="font-semibold text-green-600">{session.correct}</span>
            <X className="w-5 h-5 text-red-600 ml-3" />
            <span className="font-semibold text-red-600">{session.incorrect}</span>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-gray-200 rounded-full h-2 mb-8">
        <div
          className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Flashcard */}
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCard.id}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="relative h-96 preserve-3d cursor-pointer"
            onClick={flipCard}
          >
            {/* Front Side */}
            <div className={`absolute inset-0 ${isFlipped ? 'invisible' : ''}`}>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl p-8 h-full flex flex-col items-center justify-center text-white">
                <p className="text-6xl arabic-text mb-4">{currentCard.arabic}</p>
                <p className="text-xl opacity-90">{currentCard.transliteration}</p>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakArabic(currentCard.arabic);
                  }}
                  className="mt-6 p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Volume2 className="w-6 h-6" />
                </button>
                
                <p className="absolute bottom-4 text-sm opacity-70 flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Klik untuk melihat arti
                </p>
              </div>
            </div>

            {/* Back Side */}
            <div className={`absolute inset-0 ${!isFlipped ? 'invisible' : ''}`} style={{ transform: 'rotateY(180deg)' }}>
              <div className="bg-white rounded-2xl shadow-2xl p-8 h-full flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-gray-800 mb-2">{currentCard.indonesian}</p>
                <p className="text-xl text-gray-600 mb-4">{currentCard.english}</p>
                
                {currentCard.example && (
                  <div className="bg-gray-50 rounded-lg p-4 mt-4">
                    <p className="text-xl arabic-text text-indigo-600">{currentCard.example.arabic}</p>
                    <p className="text-sm text-gray-600 mt-2">{currentCard.example.indonesian}</p>
                  </div>
                )}
                
                <p className="absolute bottom-4 text-sm text-gray-500 flex items-center gap-2">
                  <EyeOff className="w-4 h-4" />
                  Klik untuk kembali
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Answer Buttons */}
        {isFlipped && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-4 justify-center mt-8"
          >
            <button
              onClick={() => handleAnswer(false)}
              className="px-8 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2"
            >
              <X className="w-5 h-5" />
              Salah
            </button>
            <button
              onClick={() => handleAnswer(true)}
              className="px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors flex items-center gap-2"
            >
              <Check className="w-5 h-5" />
              Benar
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}