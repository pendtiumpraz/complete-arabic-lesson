import { useState } from 'react';
import { Heart, BookOpen, ChevronRight, Search, Filter, Award, Quote } from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { idiomsProverbs } from '../data/idiomsProverbs';

interface IdiomsProverbsProps {
  updateProgress?: (lessonId: string, points: number) => void;
}

export default function IdiomsProverbs({ updateProgress }: IdiomsProverbsProps) {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'idiom' | 'proverb'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [learnedItems, setLearnedItems] = useState<Set<string>>(new Set());

  const filteredItems = idiomsProverbs.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.arabic.includes(searchQuery) ||
      item.indonesian.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.transliteration.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const handleItemLearned = (itemId: string) => {
    if (!learnedItems.has(itemId)) {
      const newLearned = new Set(learnedItems);
      newLearned.add(itemId);
      setLearnedItems(newLearned);
      
      if (updateProgress) {
        updateProgress(`idiom-proverb-${itemId}`, 10);
      }
    }
  };

  const getCategoryName = (category: string) => {
    return category === 'idiom' ? 'Idiom' : 'Peribahasa';
  };

  const getCategoryColor = (category: string) => {
    return category === 'idiom' 
      ? 'bg-blue-100 text-blue-700' 
      : 'bg-green-100 text-green-700';
  };

  const getCategoryIcon = (category: string) => {
    return category === 'idiom' ? '💭' : '📝';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Quote className="w-8 h-8 text-orange-600" />
          <h1 className="text-3xl font-bold text-gray-800">Idiom & Peribahasa Arab</h1>
        </div>
        <p className="text-gray-600">
          Pelajari ungkapan idiomatik dan peribahasa dalam bahasa Arab untuk memperkaya kemampuan berbahasa Anda
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari idiom atau peribahasa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as any)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 appearance-none"
            >
              <option value="all">Semua Kategori</option>
              <option value="idiom">Idiom</option>
              <option value="proverb">Peribahasa</option>
            </select>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{idiomsProverbs.length}</div>
          <div className="text-orange-100">Total Ungkapan</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{learnedItems.size}</div>
          <div className="text-green-100">Sudah Dipelajari</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">
            {Math.round((learnedItems.size / idiomsProverbs.length) * 100)}%
          </div>
          <div className="text-purple-100">Progress</div>
        </div>
      </div>

      {/* Items List */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
              learnedItems.has(item.id) ? 'ring-2 ring-green-400' : ''
            }`}
          >
            {/* Item Header */}
            <div
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedItem(
                expandedItem === item.id ? null : item.id
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{getCategoryIcon(item.category)}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                      {getCategoryName(item.category)}
                    </span>
                  </div>
                  
                  <p className="text-2xl font-arabic text-gray-800 mb-2 text-right leading-relaxed">
                    {item.arabic}
                  </p>
                  
                  <p className="text-sm text-gray-600 italic mb-2">
                    {item.transliteration}
                  </p>
                  
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {item.indonesian}
                  </h3>
                  
                  <p className="text-gray-600 text-sm">
                    {item.meaning}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <AudioButton text={item.arabic} />
                  <ChevronRight 
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      expandedItem === item.id ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedItem === item.id && (
              <div className="border-t border-gray-200">
                {/* Literal Translation */}
                <div className="p-6 bg-blue-50">
                  <h4 className="font-bold text-gray-700 mb-3">Terjemahan Literal:</h4>
                  <p className="text-gray-700 italic">"{item.literal}"</p>
                </div>

                {/* Usage */}
                {item.usage && (
                  <div className="p-6 border-t border-gray-200 bg-yellow-50">
                    <h4 className="font-bold text-gray-700 mb-3">Penggunaan:</h4>
                    <p className="text-gray-700">{item.usage}</p>
                  </div>
                )}

                {/* Example */}
                {item.example && (
                  <div className="p-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-700 mb-4">Contoh Penggunaan:</h4>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-xl font-arabic text-gray-800 text-right flex-1 leading-relaxed">
                          {item.example.arabic}
                        </p>
                        <AudioButton text={item.example.arabic} className="ml-4" />
                      </div>
                      <p className="text-sm text-gray-600 italic mb-2">
                        {item.example.transliteration}
                      </p>
                      <p className="text-gray-700">
                        "{item.example.indonesian}"
                      </p>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        const audio = new SpeechSynthesisUtterance(item.arabic);
                        audio.lang = 'ar';
                        audio.rate = 0.8;
                        speechSynthesis.speak(audio);
                      }}
                      className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                    >
                      Putar Audio
                    </button>
                    {!learnedItems.has(item.id) && (
                      <button
                        onClick={() => handleItemLearned(item.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Tandai Sudah Dipelajari
                      </button>
                    )}
                    {learnedItems.has(item.id) && (
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                        <Heart className="w-4 h-4 fill-current" />
                        Sudah Dipelajari
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <Quote className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Tidak ada idiom atau peribahasa yang ditemukan</p>
        </div>
      )}
    </div>
  );
}