import { useState } from 'react';
import { BookOpen, Star, ChevronRight, Search, Filter, Award } from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { shortStories, storyCategories } from '../data/shortStories';

interface ShortStoriesProps {
  updateProgress?: (lessonId: string, points: number) => void;
}

export default function ShortStories({ updateProgress }: ShortStoriesProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedStory, setExpandedStory] = useState<string | null>(null);
  const [completedStories, setCompletedStories] = useState<Set<string>>(new Set());
  const [readingMode, setReadingMode] = useState<'normal' | 'sentence'>('normal');

  const filteredStories = shortStories.filter(story => {
    const matchesCategory = selectedCategory === 'all' || story.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || story.level === selectedLevel;
    const matchesSearch = searchQuery === '' || 
      story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      story.titleAr.includes(searchQuery) ||
      story.content.some(c => 
        c.arabic.includes(searchQuery) || 
        c.indonesian.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleStoryComplete = (storyId: string) => {
    if (!completedStories.has(storyId)) {
      const newCompleted = new Set(completedStories);
      newCompleted.add(storyId);
      setCompletedStories(newCompleted);
      
      if (updateProgress) {
        updateProgress(`story-${storyId}`, 20);
      }
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

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      fables: '🦊',
      daily: '🏠',
      islamic: '🕌',
      wisdom: '💎',
      adventure: '🗺️'
    };
    return categoryMap[category] || '📖';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="w-8 h-8 text-purple-600" />
          <h1 className="text-3xl font-bold text-gray-800">Cerita Pendek Arab</h1>
        </div>
        <p className="text-gray-600">
          Tingkatkan kemampuan membaca dengan cerita-cerita menarik dalam bahasa Arab
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari cerita..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 appearance-none"
            >
              <option value="all">Semua Kategori</option>
              {storyCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value as any)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
          >
            <option value="all">Semua Level</option>
            <option value="beginner">Pemula</option>
            <option value="intermediate">Menengah</option>
            <option value="advanced">Mahir</option>
          </select>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{shortStories.length}</div>
          <div className="text-purple-100">Total Cerita</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{completedStories.size}</div>
          <div className="text-green-100">Selesai Dibaca</div>
        </div>
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">
            {Math.round((completedStories.size / shortStories.length) * 100)}%
          </div>
          <div className="text-orange-100">Progress</div>
        </div>
      </div>

      {/* Stories List */}
      <div className="space-y-4">
        {filteredStories.map((story) => (
          <div
            key={story.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
              completedStories.has(story.id) ? 'ring-2 ring-green-400' : ''
            }`}
          >
            {/* Story Header */}
            <div
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedStory(
                expandedStory === story.id ? null : story.id
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{getCategoryIcon(story.category)}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {story.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(story.level)}`}>
                      {story.level === 'beginner' ? 'Pemula' : 
                       story.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                    </span>
                  </div>
                  <p className="text-2xl font-arabic text-gray-700 mb-2">{story.titleAr}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{story.content.length} paragraf</span>
                    {story.vocabulary && (
                      <span>{story.vocabulary.length} kosakata penting</span>
                    )}
                    {story.moral && (
                      <span className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        Ada pesan moral
                      </span>
                    )}
                  </div>
                </div>
                <ChevronRight 
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    expandedStory === story.id ? 'rotate-90' : ''
                  }`} 
                />
              </div>
            </div>

            {/* Expanded Content */}
            {expandedStory === story.id && (
              <div className="border-t border-gray-200">
                {/* Reading Mode Toggle */}
                <div className="p-4 bg-gray-50 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">Mode Baca:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setReadingMode('normal')}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          readingMode === 'normal' 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        Normal
                      </button>
                      <button
                        onClick={() => setReadingMode('sentence')}
                        className={`px-3 py-1 rounded-lg text-sm ${
                          readingMode === 'sentence' 
                            ? 'bg-purple-600 text-white' 
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        Per Kalimat
                      </button>
                    </div>
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6 bg-gray-50">
                  <h4 className="font-bold text-gray-700 mb-4">Cerita:</h4>
                  
                  {readingMode === 'normal' ? (
                    // Normal reading mode - full story
                    <div className="bg-white rounded-lg p-6 space-y-4">
                      {story.content.map((paragraph, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-start">
                            <p className="text-2xl font-arabic text-gray-800 text-right flex-1 leading-relaxed">
                              {paragraph.arabic}
                            </p>
                            <AudioButton text={paragraph.arabic} className="ml-4" />
                          </div>
                          <p className="text-sm text-gray-600 italic">
                            {paragraph.transliteration}
                          </p>
                          <p className="text-gray-700">
                            {paragraph.indonesian}
                          </p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    // Sentence by sentence mode
                    <div className="space-y-3">
                      {story.content.map((paragraph, index) => (
                        <div key={index} className="bg-white rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium text-gray-500">
                              Kalimat {index + 1}
                            </span>
                            <AudioButton text={paragraph.arabic} />
                          </div>
                          <p className="text-2xl font-arabic text-gray-800 mb-2 text-right leading-relaxed">
                            {paragraph.arabic}
                          </p>
                          <p className="text-sm text-gray-600 italic mb-2">
                            {paragraph.transliteration}
                          </p>
                          <p className="text-gray-700 bg-blue-50 rounded p-2">
                            {paragraph.indonesian}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Moral */}
                {story.moral && (
                  <div className="p-6 bg-yellow-50 border-t border-gray-200">
                    <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-600" />
                      Pesan Moral:
                    </h4>
                    <div className="bg-white rounded-lg p-4">
                      {story.moralAr && (
                        <p className="text-xl font-arabic text-gray-800 mb-2 text-center">
                          {story.moralAr}
                        </p>
                      )}
                      <p className="text-gray-700 text-center italic">
                        "{story.moral}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Vocabulary */}
                {story.vocabulary && story.vocabulary.length > 0 && (
                  <div className="p-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-700 mb-4">Kosakata Penting:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {story.vocabulary.map((word, index) => (
                        <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                          <div className="flex-1">
                            <span className="font-arabic text-xl text-gray-800">{word.arabic}</span>
                            <span className="mx-2 text-gray-400">•</span>
                            <span className="text-gray-700">{word.indonesian}</span>
                            <span className="text-sm text-gray-500 italic block">
                              ({word.transliteration})
                            </span>
                          </div>
                          <AudioButton text={word.arabic} />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        // Play full story
                        let delay = 0;
                        story.content.forEach((paragraph) => {
                          setTimeout(() => {
                            const audio = new SpeechSynthesisUtterance(paragraph.arabic);
                            audio.lang = 'ar';
                            audio.rate = 0.8;
                            speechSynthesis.speak(audio);
                          }, delay);
                          delay += paragraph.arabic.length * 50;
                        });
                      }}
                      className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Putar Cerita Lengkap
                    </button>
                    {!completedStories.has(story.id) && (
                      <button
                        onClick={() => handleStoryComplete(story.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Tandai Selesai
                      </button>
                    )}
                    {completedStories.has(story.id) && (
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Selesai Dibaca
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredStories.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Tidak ada cerita yang ditemukan</p>
        </div>
      )}
    </div>
  );
}