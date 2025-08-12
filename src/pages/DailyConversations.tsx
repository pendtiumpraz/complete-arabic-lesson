import { useState } from 'react';
import { MessageSquare, Users, ChevronRight, Search, Filter } from 'lucide-react';
import AudioButton from '../components/AudioButton';
import { dailyConversations, conversationCategories } from '../data/dailyConversations';

interface DailyConversationsProps {
  updateProgress?: (lessonId: string, points: number) => void;
}

export default function DailyConversations({ updateProgress }: DailyConversationsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState<'all' | 'beginner' | 'intermediate' | 'advanced'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedConversation, setExpandedConversation] = useState<string | null>(null);
  const [completedConversations, setCompletedConversations] = useState<Set<string>>(new Set());

  const filteredConversations = dailyConversations.filter(conv => {
    const matchesCategory = selectedCategory === 'all' || conv.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || conv.level === selectedLevel;
    const matchesSearch = searchQuery === '' || 
      conv.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conv.titleAr.includes(searchQuery) ||
      conv.dialogue.some(d => 
        d.arabic.includes(searchQuery) || 
        d.indonesian.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const handleConversationComplete = (convId: string) => {
    if (!completedConversations.has(convId)) {
      const newCompleted = new Set(completedConversations);
      newCompleted.add(convId);
      setCompletedConversations(newCompleted);
      
      if (updateProgress) {
        updateProgress(`conversation-${convId}`, 15);
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
      greetings: '👋',
      shopping: '🛒',
      restaurant: '🍽️',
      travel: '✈️',
      directions: '🧭',
      time: '⏰',
      weather: '☀️',
      health: '🏥',
      education: '📚',
      work: '💼'
    };
    return categoryMap[category] || '💬';
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Percakapan Sehari-hari</h1>
        </div>
        <p className="text-gray-600">
          Pelajari percakapan praktis dalam bahasa Arab untuk situasi sehari-hari
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
              placeholder="Cari percakapan..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="all">Semua Kategori</option>
              {conversationCategories.map(cat => (
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
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
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{dailyConversations.length}</div>
          <div className="text-blue-100">Total Percakapan</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">{completedConversations.size}</div>
          <div className="text-green-100">Selesai Dipelajari</div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4">
          <div className="text-2xl font-bold">
            {Math.round((completedConversations.size / dailyConversations.length) * 100)}%
          </div>
          <div className="text-purple-100">Progress</div>
        </div>
      </div>

      {/* Conversations List */}
      <div className="space-y-4">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            className={`bg-white rounded-xl shadow-md overflow-hidden transition-all ${
              completedConversations.has(conversation.id) ? 'ring-2 ring-green-400' : ''
            }`}
          >
            {/* Conversation Header */}
            <div
              className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => setExpandedConversation(
                expandedConversation === conversation.id ? null : conversation.id
              )}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{getCategoryIcon(conversation.category)}</span>
                    <h3 className="text-xl font-bold text-gray-800">
                      {conversation.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(conversation.level)}`}>
                      {conversation.level === 'beginner' ? 'Pemula' : 
                       conversation.level === 'intermediate' ? 'Menengah' : 'Mahir'}
                    </span>
                  </div>
                  <p className="text-2xl font-arabic text-gray-700 mb-2">{conversation.titleAr}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {conversation.dialogue.length} dialog
                    </span>
                    {conversation.vocabulary && (
                      <span>{conversation.vocabulary.length} kosakata baru</span>
                    )}
                  </div>
                </div>
                <ChevronRight 
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    expandedConversation === conversation.id ? 'rotate-90' : ''
                  }`} 
                />
              </div>
            </div>

            {/* Expanded Content */}
            {expandedConversation === conversation.id && (
              <div className="border-t border-gray-200">
                {/* Dialogue */}
                <div className="p-6 bg-gray-50">
                  <h4 className="font-bold text-gray-700 mb-4">Dialog:</h4>
                  <div className="space-y-4">
                    {conversation.dialogue.map((line, index) => (
                      <div key={index} className="bg-white rounded-lg p-4">
                        <div className="flex items-start justify-between mb-2">
                          <span className="font-bold text-blue-600">{line.speaker}:</span>
                          <AudioButton text={line.arabic} />
                        </div>
                        <p className="text-2xl font-arabic text-gray-800 mb-2 text-right">
                          {line.arabic}
                        </p>
                        <p className="text-sm text-gray-600 italic mb-1">
                          {line.transliteration}
                        </p>
                        <p className="text-gray-700">
                          "{line.indonesian}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Vocabulary */}
                {conversation.vocabulary && conversation.vocabulary.length > 0 && (
                  <div className="p-6 border-t border-gray-200">
                    <h4 className="font-bold text-gray-700 mb-4">Kosakata Penting:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {conversation.vocabulary.map((word, index) => (
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

                {/* Grammar Notes */}
                {conversation.grammarNotes && conversation.grammarNotes.length > 0 && (
                  <div className="p-6 bg-blue-50 border-t border-gray-200">
                    <h4 className="font-bold text-gray-700 mb-3">Catatan Tata Bahasa:</h4>
                    <ul className="space-y-2">
                      {conversation.grammarNotes.map((note, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-700">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Actions */}
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        // Play all dialogue
                        conversation.dialogue.forEach((line, index) => {
                          setTimeout(() => {
                            const audio = new SpeechSynthesisUtterance(line.arabic);
                            audio.lang = 'ar';
                            speechSynthesis.speak(audio);
                          }, index * 3000);
                        });
                      }}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Putar Semua Dialog
                    </button>
                    {!completedConversations.has(conversation.id) && (
                      <button
                        onClick={() => handleConversationComplete(conversation.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                      >
                        Tandai Selesai
                      </button>
                    )}
                    {completedConversations.has(conversation.id) && (
                      <span className="px-4 py-2 bg-green-100 text-green-700 rounded-lg">
                        ✓ Selesai Dipelajari
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredConversations.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl shadow-md">
          <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">Tidak ada percakapan yang ditemukan</p>
        </div>
      )}
    </div>
  );
}