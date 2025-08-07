import { useState } from 'react';
import { verbForms, verbPatterns, tasrifTable, pronounTable } from '../data/tashrif';
import { Volume2, BookOpen, Table, ChevronRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface TashrifProps {
  updateProgress: (lessonId: string, points: number) => void;
}

export default function Tashrif({ updateProgress }: TashrifProps) {
  const [selectedForm, setSelectedForm] = useState(verbForms[0]);
  const [selectedPattern, setSelectedPattern] = useState(verbPatterns[0]);
  const [activeTab, setActiveTab] = useState<'patterns' | 'forms' | 'tables'>('patterns');

  const speakArabic = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Tashrif (التصريف)</h1>
        <p className="text-gray-600">Pelajari konjugasi kata kerja dan pola-pola tashrif dalam bahasa Arab</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('patterns')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
            activeTab === 'patterns'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <BookOpen className="w-5 h-5" />
          Pola Konjugasi
        </button>
        <button
          onClick={() => setActiveTab('forms')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
            activeTab === 'forms'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ChevronRight className="w-5 h-5" />
          10 Bentuk Wazan
        </button>
        <button
          onClick={() => setActiveTab('tables')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
            activeTab === 'tables'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <Table className="w-5 h-5" />
          Tabel Rumus
        </button>
      </div>

      {activeTab === 'patterns' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pattern Selector */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Pilih Kata Kerja</h2>
              <div className="space-y-3">
                {verbPatterns.map((pattern) => (
                  <button
                    key={pattern.id}
                    onClick={() => {
                      setSelectedPattern(pattern);
                      updateProgress(`tashrif-${pattern.id}`, 10);
                    }}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedPattern.id === pattern.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-2xl arabic-text mb-1">{pattern.patternAr}</p>
                        <p className="text-sm opacity-80">{pattern.meaning}</p>
                      </div>
                      <Volume2 
                        className="w-5 h-5 opacity-60 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakArabic(pattern.patternAr);
                        }}
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Pattern Details */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedPattern.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {/* Header */}
              <div className="text-center mb-8">
                <h2 className="text-5xl arabic-text text-indigo-600 mb-3">
                  {selectedPattern.patternAr}
                </h2>
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  Makna: {selectedPattern.meaning}
                </p>
                <p className="text-gray-600">
                  Akar kata: {selectedPattern.root}
                </p>
              </div>

              {/* Forms */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-blue-600 mb-1">Fi'il Madhi</p>
                  <p className="text-2xl arabic-text text-blue-700">{selectedPattern.failMadi}</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-green-600 mb-1">Fi'il Mudhari'</p>
                  <p className="text-2xl arabic-text text-green-700">{selectedPattern.failMudhari}</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-purple-600 mb-1">Fi'il Amr</p>
                  <p className="text-2xl arabic-text text-purple-700">{selectedPattern.failAmr}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-orange-600 mb-1">Ism Fa'il</p>
                  <p className="text-2xl arabic-text text-orange-700">{selectedPattern.ismFail}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-red-600 mb-1">Ism Maf'ul</p>
                  <p className="text-2xl arabic-text text-red-700">{selectedPattern.ismMaful}</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-indigo-600 mb-1">Masdar</p>
                  <p className="text-2xl arabic-text text-indigo-700">{selectedPattern.masdar}</p>
                </div>
              </div>

              {/* Conjugation Table */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Tabel Konjugasi
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border p-3 text-left">Kata Ganti</th>
                        <th className="border p-3 text-center">Fi'il Madhi</th>
                        <th className="border p-3 text-center">Fi'il Mudhari'</th>
                        <th className="border p-3 text-center">Fi'il Mustaqbal</th>
                        <th className="border p-3 text-center">Fi'il Amr</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedPattern.conjugations.map((conj, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border p-3">
                            <div>
                              <p className="font-medium">{conj.pronoun}</p>
                              <p className="text-sm arabic-text text-gray-600">{conj.pronounAr}</p>
                            </div>
                          </td>
                          <td className="border p-3 text-center">
                            <button
                              onClick={() => speakArabic(conj.past)}
                              className="text-xl arabic-text text-indigo-600 hover:text-indigo-800"
                            >
                              {conj.past}
                            </button>
                          </td>
                          <td className="border p-3 text-center">
                            <button
                              onClick={() => speakArabic(conj.present)}
                              className="text-xl arabic-text text-green-600 hover:text-green-800"
                            >
                              {conj.present}
                            </button>
                          </td>
                          <td className="border p-3 text-center">
                            <button
                              onClick={() => speakArabic(conj.future)}
                              className="text-xl arabic-text text-blue-600 hover:text-blue-800"
                            >
                              {conj.future}
                            </button>
                          </td>
                          <td className="border p-3 text-center">
                            {conj.imperative && (
                              <button
                                onClick={() => speakArabic(conj.imperative!)}
                                className="text-xl arabic-text text-purple-600 hover:text-purple-800"
                              >
                                {conj.imperative}
                              </button>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examples */}
              <div>
                <h3 className="text-lg font-bold mb-4">Contoh Penggunaan</h3>
                <div className="space-y-3">
                  {selectedPattern.examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg flex items-center justify-between">
                      <div>
                        <p className="text-xl arabic-text text-indigo-600 mb-1">
                          {example.arabic}
                        </p>
                        <p className="text-sm text-gray-600">
                          {example.transliteration}
                        </p>
                        <p className="text-gray-700 mt-1">
                          "{example.indonesian}"
                        </p>
                      </div>
                      <button
                        onClick={() => speakArabic(example.arabic)}
                        className="p-2 bg-indigo-100 text-indigo-600 rounded-lg hover:bg-indigo-200"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {activeTab === 'forms' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">10 Bentuk Wazan (الأوزان)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verbForms.map((form) => (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg mb-1">{form.name}</h3>
                    <p className="text-sm text-gray-600">{form.nameAr}</p>
                  </div>
                  <button
                    onClick={() => speakArabic(form.formula)}
                    className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                  >
                    <Volume2 className="w-4 h-4 text-indigo-600" />
                  </button>
                </div>
                <div className="text-center mb-4">
                  <p className="text-3xl arabic-text text-indigo-600">{form.formula}</p>
                </div>
                <p className="text-sm text-gray-700">{form.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'tables' && (
        <div className="space-y-8">
          {/* Tashrif Formula Table */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2">{tasrifTable.title}</h2>
            <p className="text-gray-600 mb-6">{tasrifTable.description}</p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                    {tasrifTable.headers.map((header, index) => (
                      <th key={index} className="border border-indigo-400 p-3 text-center">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tasrifTable.rows.map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border p-3 text-center">
                          <span className="arabic-text text-lg">{cell}</span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pronoun Table */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-2">{pronounTable.title}</h2>
            <p className="text-gray-600 mb-6">{pronounTable.description}</p>
            
            {pronounTable.categories.map((category, catIndex) => (
              <div key={catIndex} className="mb-8">
                <h3 className="text-lg font-bold mb-4 text-indigo-600">{category.name}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        {pronounTable.headers.map((header, index) => (
                          <th key={index} className="border p-3 text-center">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {category.rows.map((row, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          {row.map((cell, cellIndex) => (
                            <td key={cellIndex} className="border p-3 text-center">
                              <span className={cellIndex > 0 ? "arabic-text text-lg" : ""}>
                                {cell}
                              </span>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}