import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Send, Bot, User, Loader, AlertCircle, BookOpen, HelpCircle, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI('AIzaSyBLp8taix7VJ5LIHkdCP4rVhGsH4VNm58I');

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface QuickQuestion {
  text: string;
  icon: any;
  category: string;
}

export default function AITutor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'أهلاً وسهلاً! Saya adalah tutor AI bahasa Arab Anda. Saya siap membantu Anda belajar bahasa Arab, mulai dari huruf hijaiyah, kosakata, tata bahasa nahwu, tashrif, hingga percakapan sehari-hari. Silakan tanyakan apa saja!',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions: QuickQuestion[] = [
    { text: 'Bagaimana cara membaca huruf hijaiyah dengan benar?', icon: BookOpen, category: 'hijaiyah' },
    { text: 'Jelaskan perbedaan mudzakkar dan muannats', icon: HelpCircle, category: 'nahwu' },
    { text: 'Apa itu tashrif dan bagaimana cara menggunakannya?', icon: MessageSquare, category: 'tashrif' },
    { text: 'Berikan contoh kalimat jumlah ismiyyah', icon: BookOpen, category: 'nahwu' },
    { text: 'Bagaimana cara mengucapkan huruf ض dengan benar?', icon: HelpCircle, category: 'pronunciation' },
    { text: 'Jelaskan tentang harakat dalam bahasa Arab', icon: MessageSquare, category: 'harakat' }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (text: string = inputText) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);
    setError(null);

    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      
      const prompt = `Anda adalah tutor bahasa Arab yang ahli dan ramah. Tugas Anda adalah membantu siswa Indonesia belajar bahasa Arab.
      
      Konteks:
      - Siswa sedang belajar bahasa Arab dari dasar
      - Gunakan bahasa Indonesia untuk penjelasan
      - Sertakan teks Arab dengan harakat bila perlu
      - Berikan contoh yang relevan dan mudah dipahami
      - Jika diminta menjelaskan grammar/nahwu, berikan rumus dan contohnya
      - Jika diminta tentang tashrif, berikan tabel konjugasi
      - Selalu sertakan cara baca (transliterasi) untuk teks Arab
      
      Pertanyaan siswa: ${text}
      
      Berikan jawaban yang terstruktur, jelas, dan edukatif. Gunakan format yang mudah dibaca dengan poin-poin bila perlu.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const responseText = response.text();

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error calling Gemini AI:', err);
      setError('Maaf, terjadi kesalahan saat menghubungi AI. Silakan coba lagi.');
      
      // Fallback response
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Maaf, saya mengalami kesulitan teknis. Silakan coba lagi atau ajukan pertanyaan yang berbeda.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, fallbackMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    // Simple formatting for better display
    return content.split('\n').map((line, index) => {
      // Check if line is Arabic text (contains Arabic characters)
      const hasArabic = /[\u0600-\u06FF]/.test(line);
      
      if (hasArabic) {
        return (
          <p key={index} className="text-2xl arabic-text text-indigo-600 my-2 text-center">
            {line}
          </p>
        );
      }
      
      // Check for bullet points
      if (line.startsWith('•') || line.startsWith('-')) {
        return (
          <li key={index} className="ml-4 my-1">
            {line.substring(1).trim()}
          </li>
        );
      }
      
      // Check for numbered points
      if (/^\d+\./.test(line)) {
        return (
          <li key={index} className="ml-4 my-1">
            {line}
          </li>
        );
      }
      
      // Regular paragraph
      return line.trim() ? (
        <p key={index} className="my-2">
          {line}
        </p>
      ) : null;
    });
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">AI Tutor Bahasa Arab</h1>
        <p className="text-gray-600">Tanyakan apa saja tentang bahasa Arab, saya siap membantu!</p>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="p-6 border-b bg-gradient-to-r from-indigo-50 to-purple-50">
            <h3 className="font-semibold text-gray-700 mb-3">Pertanyaan Cepat:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickQuestions.map((question, index) => {
                const Icon = question.icon;
                return (
                  <button
                    key={index}
                    onClick={() => sendMessage(question.text)}
                    className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-all text-left group"
                  >
                    <Icon className="w-5 h-5 text-indigo-600 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-700">{question.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex gap-3 ${
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.role === 'assistant' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                )}
                
                <div
                  className={`max-w-[70%] rounded-2xl px-5 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.role === 'user' ? (
                    <p>{message.content}</p>
                  ) : (
                    <div className="prose prose-sm max-w-none">
                      {formatMessage(message.content)}
                    </div>
                  )}
                  <p className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('id-ID', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
                
                {message.role === 'user' && (
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-3"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="bg-gray-100 rounded-2xl px-5 py-3">
                <div className="flex items-center gap-2">
                  <Loader className="w-4 h-4 animate-spin" />
                  <span className="text-gray-600">Sedang mengetik...</span>
                </div>
              </div>
            </motion.div>
          )}
          
          {error && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-700 rounded-lg">
              <AlertCircle className="w-5 h-5" />
              <p>{error}</p>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex gap-3">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ketik pertanyaan Anda di sini..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows={1}
              disabled={isLoading}
            />
            <button
              onClick={() => sendMessage()}
              disabled={!inputText.trim() || isLoading}
              className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Kirim
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Tekan Enter untuk mengirim, Shift+Enter untuk baris baru
          </p>
        </div>
      </div>
    </div>
  );
}