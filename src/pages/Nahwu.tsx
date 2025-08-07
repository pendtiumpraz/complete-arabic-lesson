import { useState } from 'react';
import { nahwuTopics, grammarFormulas, irabTable } from '../data/nahwu';
import { Volume2, BookOpen, Info, CheckCircle, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NahwuProps {
  updateProgress: (lessonId: string, points: number) => void;
}

export default function Nahwu({ updateProgress }: NahwuProps) {
  const [selectedTopic, setSelectedTopic] = useState(nahwuTopics[0]);
  const [expandedFormula, setExpandedFormula] = useState<string | null>(null);
  const [completedTopics, setCompletedTopics] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'topics' | 'formulas' | 'irab'>('topics');

  const speakArabic = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  const markTopicComplete = (topicId: string) => {
    if (!completedTopics.includes(topicId)) {
      setCompletedTopics([...completedTopics, topicId]);
      updateProgress(`nahwu-${topicId}`, 15);
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Nahwu (النحو)</h1>
        <p className="text-gray-600">Pelajari tata bahasa Arab dari dasar hingga mahir</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('topics')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'topics'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Topik Nahwu
        </button>
        <button
          onClick={() => setActiveTab('formulas')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'formulas'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Rumus-Rumus
        </button>
        <button
          onClick={() => setActiveTab('irab')}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            activeTab === 'irab'
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          Tabel I'rab
        </button>
      </div>

      {activeTab === 'topics' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Topic List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Pilih Topik</h2>
              <div className="space-y-3">
                {nahwuTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => setSelectedTopic(topic)}
                    className={`w-full text-left p-4 rounded-lg transition-all ${
                      selectedTopic.id === topic.id
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className="font-semibold mb-1">{topic.title}</p>
                        <p className="text-sm arabic-text opacity-80">{topic.titleAr}</p>
                      </div>
                      {completedTopics.includes(topic.id) && (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      )}
                    </div>
                    <div className="mt-2">
                      <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                        selectedTopic.id === topic.id ? 'bg-white/20 text-white' : getLevelColor(topic.level)
                      }`}>
                        {topic.level === 'beginner' ? 'Pemula' :
                         topic.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Topic Content */}
          <div className="lg:col-span-2">
            <motion.div
              key={selectedTopic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedTopic.title}
                    </h2>
                    <p className="text-xl arabic-text text-indigo-600">
                      {selectedTopic.titleAr}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${getLevelColor(selectedTopic.level)}`}>
                    {selectedTopic.level === 'beginner' ? 'Pemula' :
                     selectedTopic.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                  </span>
                </div>
                <p className="text-gray-600">{selectedTopic.description}</p>
              </div>

              {/* Explanation */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" />
                  Penjelasan
                </h3>
                <div className="bg-blue-50 p-5 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    {selectedTopic.content.explanation}
                  </p>
                </div>
              </div>

              {/* Rules */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Kaidah-Kaidah
                </h3>
                <div className="space-y-3">
                  {selectedTopic.content.rules.map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                      <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Examples */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-3">Contoh Penerapan</h3>
                <div className="space-y-4">
                  {selectedTopic.content.examples.map((example, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <p className="text-2xl arabic-text text-indigo-600">
                          {example.arabic}
                        </p>
                        <button
                          onClick={() => speakArabic(example.arabic)}
                          className="p-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
                        >
                          <Volume2 className="w-4 h-4 text-indigo-600" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        {example.transliteration}
                      </p>
                      <p className="text-gray-700 mb-2">
                        "{example.indonesian}"
                      </p>
                      {example.analysis && (
                        <div className="mt-3 pt-3 border-t border-gray-300">
                          <p className="text-sm text-gray-600">
                            <AlertCircle className="w-4 h-4 inline mr-1" />
                            Analisis: {example.analysis}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Exercises */}
              {selectedTopic.exercises && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Latihan</h3>
                  <div className="space-y-4">
                    {selectedTopic.exercises.map((exercise, index) => (
                      <div key={index} className="bg-yellow-50 p-5 rounded-lg">
                        <p className="font-medium mb-3">{exercise.question}</p>
                        <div className="space-y-2">
                          {exercise.options.map((option, optIndex) => (
                            <button
                              key={optIndex}
                              className={`w-full text-left p-3 rounded-lg transition-colors ${
                                optIndex === exercise.correct
                                  ? 'bg-green-100 hover:bg-green-200'
                                  : 'bg-white hover:bg-gray-100'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                        <p className="text-sm text-gray-600 mt-3">
                          {exercise.explanation}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mark Complete Button */}
              {!completedTopics.includes(selectedTopic.id) && (
                <button
                  onClick={() => markTopicComplete(selectedTopic.id)}
                  className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-5 h-5" />
                  Tandai Selesai
                </button>
              )}
            </motion.div>
          </div>
        </div>
      )}

      {activeTab === 'formulas' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">{grammarFormulas.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {grammarFormulas.sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="border-2 border-gray-200 rounded-lg overflow-hidden hover:border-indigo-400 transition-colors"
              >
                <button
                  onClick={() => setExpandedFormula(
                    expandedFormula === section.name ? null : section.name
                  )}
                  className="w-full p-5 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-gray-100 hover:to-gray-150 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg">{section.name}</h3>
                    {expandedFormula === section.name ? (
                      <ChevronUp className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                  <p className="text-2xl arabic-text text-indigo-600 mt-2">
                    {section.formula}
                  </p>
                </button>
                
                <AnimatePresence>
                  {expandedFormula === section.name && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 bg-white border-t">
                        <p className="text-gray-700 mb-3">{section.explanation}</p>
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <p className="text-lg arabic-text text-indigo-700">{section.example}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'irab' && (
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">{irabTable.title}</h2>
          
          {irabTable.rows.map((category, catIndex) => (
            <div key={catIndex} className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-indigo-600">{category.category}</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                      {irabTable.headers.map((header, index) => (
                        <th key={index} className="border border-indigo-400 p-3 text-center">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {category.items.map((row, rowIndex) => (
                      <tr key={rowIndex} className="hover:bg-gray-50">
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
      )}
    </div>
  );
}