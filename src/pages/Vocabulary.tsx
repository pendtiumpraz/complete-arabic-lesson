import { useState } from 'react';
import { vocabulary, vocabularyCategories } from '../data/vocabulary';
import { Volume2, Search, Filter, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface VocabularyProps {
  updateProgress: (lessonId: string, points: number) => void;
}

export default function Vocabulary({ updateProgress }: VocabularyProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');

  const speakArabic = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const filteredVocabulary = vocabulary.filter(word => {
    const matchesCategory = selectedCategory === 'all' || word.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || word.level === selectedLevel;
    const matchesSearch = searchTerm === '' || 
      word.arabic.includes(searchTerm) ||
      word.indonesian.toLowerCase().includes(searchTerm.toLowerCase()) ||
      word.transliteration.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleLearnWord = (wordId: string) => {
    speakArabic(vocabulary.find(w => w.id === wordId)?.arabic || '');
    updateProgress(`vocab-${wordId}`, 5);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Kosakata Bahasa Arab</h1>
        <p className="text-gray-600">Pelajari kosakata dengan kategori dan tingkat kesulitan</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Search className="w-4 h-4 inline mr-1" />
              Cari Kata
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Cari dalam Arab, Indonesia, atau transliterasi..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Filter className="w-4 h-4 inline mr-1" />
              Kategori
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">Semua Kategori</option>
              {vocabularyCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.icon} {cat.name} ({cat.wordCount} kata)
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <BookOpen className="w-4 h-4 inline mr-1" />
              Tingkat
            </label>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value as any)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="all">Semua Tingkat</option>
              <option value="beginner">Pemula</option>
              <option value="intermediate">Menengah</option>
              <option value="advanced">Mahir</option>
            </select>
          </div>
        </div>

        <div className="mt-4 text-sm text-gray-600">
          Menampilkan {filteredVocabulary.length} dari {vocabulary.length} kata
        </div>
      </div>

      {/* Category Cards */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
          {vocabularyCategories.slice(0, 10).map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-3xl mb-2">{cat.icon}</div>
              <h3 className="font-semibold text-sm">{cat.name}</h3>
              <p className="text-xs text-gray-600">{cat.wordCount} kata</p>
            </button>
          ))}
        </div>
      )}

      {/* Vocabulary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVocabulary.map((word, index) => (
          <motion.div
            key={word.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            {/* Word Header */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6 text-white">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <p className="text-4xl arabic-text mb-2">{word.arabic}</p>
                  <p className="text-sm opacity-90">{word.transliteration}</p>
                </div>
                <button
                  onClick={() => handleLearnWord(word.id)}
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Word Details */}
            <div className="p-6">
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-800">{word.indonesian}</p>
                <p className="text-sm text-gray-600">{word.english}</p>
              </div>

              {/* Metadata */}
              <div className="flex items-center gap-3 mb-4">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                  {word.partOfSpeech}
                </span>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  word.level === 'beginner' ? 'bg-green-100 text-green-700' :
                  word.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {word.level === 'beginner' ? 'Pemula' :
                   word.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                </span>
              </div>

              {/* Example */}
              {word.example && (
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm font-medium text-gray-700 mb-1">Contoh:</p>
                  <p className="text-lg arabic-text text-indigo-600">{word.example.arabic}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    {word.example.transliteration}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    "{word.example.indonesian}"
                  </p>
                </div>
              )}

              {/* Root */}
              {word.root && (
                <div className="mt-3 text-xs text-gray-500">
                  Akar kata: {word.root}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredVocabulary.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Tidak ada kata yang ditemukan</p>
          <p className="text-gray-400 mt-2">Coba ubah filter pencarian Anda</p>
        </div>
      )}
    </div>
  );
}