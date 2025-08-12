import { useState } from 'react';
import { Hand, Moon, ChevronRight, Search, Filter, Award, Clock, BookHeart } from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { prayers, prayerCategories } from '../data/prayers';

interface PrayersProps {
  updateProgress?: (lessonId: string, points: number) => void;
}

export default function Prayers({ updateProgress }: PrayersProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPrayer, setExpandedPrayer] = useState<string | null>(null);
  const [memorizedPrayers, setMemorizedPrayers] = useState<Set<string>>(new Set());

  const filteredPrayers = prayers.filter(prayer => {
    const matchesCategory = selectedCategory === 'all' || prayer.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      prayer.arabic.includes(searchQuery) ||
      prayer.indonesian.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prayer.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prayer.meaning.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prayer.transliteration.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const handlePrayerMemorized = (prayerId: string) => {
    if (!memorizedPrayers.has(prayerId)) {
      const newMemorized = new Set(memorizedPrayers);
      newMemorized.add(prayerId);
      setMemorizedPrayers(newMemorized);
      
      if (updateProgress) {
        updateProgress(`prayer-${prayerId}`, 15);
      }
    }
  };

  const getCategoryIcon = (category: string) => {
    const categoryMap: { [key: string]: string } = {
      daily: '🌅',
      'morning-evening': '🌄',
      eating: '🍽️',
      travel: '✈️',
      worship: '🕌',
      protection: '🛡️',
      forgiveness: '🤲',
      gratitude: '🙏',
      difficulty: '💪',
      health: '💚'
    };
    return categoryMap[category] || '🤲';
  };

  const getCategoryName = (categoryId: string) => {
    const category = prayerCategories.find(cat => cat.id === categoryId);
    return category ? category.name : categoryId;
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Hand className="w-8 h-8 text-teal-600" />
          <h1 className="text-3xl font-bold text-gray-800">Doa-doa Harian</h1>
        </div>
        <p className="text-gray-600">
          Koleksi doa-doa pilihan untuk berbagai situasi dalam kehidupan sehari-hari
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
              placeholder="Cari doa..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 appearance-none"
            >
              <option value="all">Semua Kategori</option>
              {prayerCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{prayers.length}</div>
          <div className="text-teal-100">Total Doa</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{memorizedPrayers.size}</div>
          <div className="text-green-100">Sudah Dihafal</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">
            {Math.round((memorizedPrayers.size / prayers.length) * 100)}%
          </div>
          <div className="text-purple-100">Progress</div>
        </div>
      </div>

      {/* Prayers List */}
      <div className="space-y-4">
        {filteredPrayers.map((prayer) => (
          <div
            key={prayer.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
              memorizedPrayers.has(prayer.id) ? 'ring-2 ring-green-400' : ''
            }`}
          >
            {/* Prayer Header */}
            <div
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedPrayer(
                expandedPrayer === prayer.id ? null : prayer.id
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{getCategoryIcon(prayer.category)}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {prayer.title}
                    </h3>
                    <span className="px-2 py-1 bg-teal-100 text-teal-700 rounded-full text-xs font-medium">
                      {getCategoryName(prayer.category)}
                    </span>
                  </div>
                  
                  <p className="text-lg font-arabic text-gray-700 mb-2">{prayer.titleAr}</p>
                  
                  <p className="text-2xl font-arabic text-gray-800 mb-3 text-right leading-relaxed">
                    {prayer.arabic}
                  </p>
                  
                  <p className="text-sm text-gray-600 italic mb-2">
                    {prayer.transliteration}
                  </p>
                  
                  <p className="text-gray-700 mb-2">
                    "{prayer.indonesian}"
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    {prayer.when && (
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {prayer.when}
                      </span>
                    )}
                    {prayer.benefits && (
                      <span>{prayer.benefits.length} manfaat</span>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 ml-4">
                  <AudioButton text={prayer.arabic} />
                  <ChevronRight 
                    className={`w-6 h-6 text-gray-400 transition-transform ${
                      expandedPrayer === prayer.id ? 'rotate-90' : ''
                    }`} 
                  />
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedPrayer === prayer.id && (
              <div className="border-t border-gray-200">
                {/* Meaning */}
                <div className="p-6 bg-blue-50">
                  <h4 className="font-bold text-gray-700 mb-3">Makna & Hikmah:</h4>
                  <p className="text-gray-700">{prayer.meaning}</p>
                </div>

                {/* Benefits */}
                {prayer.benefits && prayer.benefits.length > 0 && (
                  <div className="p-6 border-t border-gray-200 bg-green-50">
                    <h4 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5 text-green-600" />
                      Manfaat & Keutamaan:
                    </h4>
                    <ul className="space-y-2">
                      {prayer.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Source */}
                {prayer.source && (
                  <div className="p-6 bg-yellow-50 border-t border-gray-200">
                    <h4 className="font-bold text-gray-700 mb-3 flex items-center gap-2">
                      <BookHeart className="w-5 h-5 text-yellow-600" />
                      Sumber:
                    </h4>
                    <p className="text-gray-700 font-medium">{prayer.source}</p>
                  </div>
                )}

                {/* Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        const audio = new SpeechSynthesisUtterance(prayer.arabic);
                        audio.lang = 'ar';
                        audio.rate = 0.7;
                        speechSynthesis.speak(audio);
                      }}
                      className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                    >
                      Putar Audio
                    </button>
                    {!memorizedPrayers.has(prayer.id) && (
                      <button
                        onClick={() => handlePrayerMemorized(prayer.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Tandai Sudah Dihafal
                      </button>
                    )}
                    {memorizedPrayers.has(prayer.id) && (
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg flex items-center gap-2">
                        <Moon className="w-4 h-4 fill-current" />
                        Sudah Dihafal
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredPrayers.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <Hand className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Tidak ada doa yang ditemukan</p>
        </div>
      )}

      {/* Quick Prayer Tips */}
      <div className="mt-8 bg-teal-50 border-2 border-teal-200 rounded-xl p-6">
        <h3 className="text-lg font-bold text-teal-800 mb-3">🤲 Tips Menghafal Doa</h3>
        <ul className="space-y-2 text-teal-700">
          <li>• Mulai dengan doa-doa pendek yang sering digunakan</li>
          <li>• Ulangi bacaan sambil memahami artinya</li>
          <li>• Gunakan fitur audio untuk memperbaiki pelafalan</li>
          <li>• Praktekkan doa sesuai dengan waktunya</li>
          <li>• Buat jadwal rutin untuk mengulang hafalan</li>
        </ul>
      </div>
    </div>
  );
}