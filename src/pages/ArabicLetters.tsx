import { useState } from 'react';
import { arabicLetters, harakat } from '../data/arabicLetters';
import { Volume2, ChevronLeft, ChevronRight, Info, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface ArabicLettersProps {
  updateProgress: (lessonId: string, points: number) => void;
}

export default function ArabicLetters({ updateProgress }: ArabicLettersProps) {
  const [selectedLetter, setSelectedLetter] = useState(arabicLetters[0]);
  const [selectedHarakat, setSelectedHarakat] = useState(harakat[0]);
  const [activeTab, setActiveTab] = useState<'letters' | 'harakat'>('letters');
  const [showStrokeOrder, setShowStrokeOrder] = useState(false);

  const speakArabic = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const currentIndex = arabicLetters.findIndex(l => l.id === selectedLetter.id);

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedLetter(arabicLetters[currentIndex - 1]);
    }
  };

  const goToNext = () => {
    if (currentIndex < arabicLetters.length - 1) {
      setSelectedLetter(arabicLetters[currentIndex + 1]);
      updateProgress(`letter-${selectedLetter.id}`, 10);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Huruf Hijaiyah</h1>
        <p className="text-gray-600">Pelajari 28 huruf Arab dengan harakat dan cara penulisannya</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('letters')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'letters'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Huruf Hijaiyah
        </button>
        <button
          onClick={() => setActiveTab('harakat')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'harakat'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Harakat
        </button>
      </div>

      {activeTab === 'letters' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Letter Grid */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Pilih Huruf</h2>
              <div className="grid grid-cols-7 gap-2">
                {arabicLetters.map((letter) => (
                  <button
                    key={letter.id}
                    onClick={() => setSelectedLetter(letter)}
                    className={`p-3 rounded-lg text-2xl arabic-text transition-all ${
                      selectedLetter.id === letter.id
                        ? 'bg-indigo-600 text-white shadow-lg transform scale-110'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {letter.letter}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Letter Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedLetter.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {/* Letter Display */}
              <div className="text-center mb-8">
                <div className="text-9xl arabic-text text-indigo-600 mb-4">
                  {selectedLetter.letter}
                </div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedLetter.name} ({selectedLetter.nameAr})
                </h2>
                <p className="text-xl text-gray-600 mb-4">
                  Transliterasi: {selectedLetter.transliteration}
                </p>
                <button
                  onClick={() => speakArabic(selectedLetter.letter)}
                  className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                  Dengarkan Pengucapan
                </button>
              </div>

              {/* Letter Forms */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Bentuk Huruf
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Terpisah</p>
                    <div className="text-4xl arabic-text bg-gray-100 rounded-lg p-4">
                      {selectedLetter.isolated}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Awal</p>
                    <div className="text-4xl arabic-text bg-gray-100 rounded-lg p-4">
                      {selectedLetter.initial}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Tengah</p>
                    <div className="text-4xl arabic-text bg-gray-100 rounded-lg p-4">
                      {selectedLetter.medial}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Akhir</p>
                    <div className="text-4xl arabic-text bg-gray-100 rounded-lg p-4">
                      {selectedLetter.final}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pronunciation */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-2">Cara Pengucapan</h3>
                <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                  {selectedLetter.pronunciation}
                </p>
              </div>

              {/* Stroke Order */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Cara Menulis</h3>
                <button
                  onClick={() => setShowStrokeOrder(!showStrokeOrder)}
                  className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-lg hover:bg-indigo-200 transition-colors mb-4"
                >
                  {showStrokeOrder ? 'Sembunyikan' : 'Tampilkan'} Urutan Goresan
                </button>
                {showStrokeOrder && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ol className="list-decimal list-inside space-y-2">
                      {selectedLetter.strokeOrder.map((step, index) => (
                        <li key={index} className="text-gray-700">{step}</li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>

              {/* Examples */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Contoh Kata</h3>
                <div className="space-y-3">
                  {selectedLetter.examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                      <div>
                        <p className="text-2xl arabic-text text-indigo-600 mb-1">
                          {example.word}
                        </p>
                        <p className="text-sm text-gray-600">
                          {example.transliteration} - {example.meaning}
                        </p>
                      </div>
                      <button
                        onClick={() => speakArabic(example.word)}
                        className="p-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={goToPrevious}
                  disabled={currentIndex === 0}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Sebelumnya
                </button>
                <div className="text-center">
                  <p className="text-sm text-gray-600">Huruf</p>
                  <p className="font-bold">{currentIndex + 1} / {arabicLetters.length}</p>
                </div>
                <button
                  onClick={goToNext}
                  disabled={currentIndex === arabicLetters.length - 1}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Selanjutnya
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      ) : (
        /* Harakat Tab */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Harakat List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Pilih Harakat</h2>
              <div className="space-y-2">
                {harakat.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHarakat(h)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedHarakat.id === h.id
                        ? 'bg-indigo-600 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{h.name}</p>
                        <p className="text-sm opacity-80">{h.nameAr}</p>
                      </div>
                      <span className="text-3xl arabic-text">بَ{h.symbol}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Harakat Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedHarakat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="text-center mb-8">
                <div className="text-9xl arabic-text text-indigo-600 mb-4">
                  بَ{selectedHarakat.symbol}
                </div>
                <h2 className="text-3xl font-bold mb-2">
                  {selectedHarakat.name} ({selectedHarakat.nameAr})
                </h2>
                <p className="text-xl text-gray-600 mb-2">
                  Bunyi: {selectedHarakat.sound}
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Keterangan
                </h3>
                <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                  {selectedHarakat.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Contoh Penggunaan</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedHarakat.examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <p className="text-4xl arabic-text text-indigo-600 mb-2">
                        {example.withHarakat}
                      </p>
                      <p className="text-sm text-gray-600">
                        {example.letter} → {example.transliteration}
                      </p>
                      <button
                        onClick={() => speakArabic(example.withHarakat)}
                        className="mt-2 p-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200 transition-colors"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}