import { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { arabicSpeech } from '../utils/speech';
import AudioButton from '../components/AudioButton';

export default function AudioTest() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [browserSupport, setBrowserSupport] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState<string>('');

  useEffect(() => {
    // Check browser support
    setBrowserSupport('speechSynthesis' in window);

    // Load voices
    const loadVoices = () => {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
      
      // Find Arabic voices
      const arabicVoices = availableVoices.filter(v => 
        v.lang.includes('ar') || v.name.includes('Arabic')
      );
      
      if (arabicVoices.length > 0) {
        setSelectedVoice(arabicVoices[0].name);
      }
    };

    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    loadVoices();

    // Retry after delay for Firefox/Safari
    setTimeout(loadVoices, 500);
  }, []);

  const testPhrases = [
    { arabic: 'السَّلَامُ عَلَيْكُمْ', meaning: 'Assalamu alaikum', text: 'Peace be upon you' },
    { arabic: 'مَرْحَبًا', meaning: 'Marhaban', text: 'Hello' },
    { arabic: 'كَيْفَ حَالُكَ؟', meaning: 'Kayfa haluk?', text: 'How are you?' },
    { arabic: 'شُكْرًا', meaning: 'Shukran', text: 'Thank you' },
    { arabic: 'مَا اسْمُكَ؟', meaning: 'Ma ismuk?', text: 'What is your name?' },
  ];

  const runDiagnostics = () => {
    console.log('=== AUDIO DIAGNOSTICS ===');
    console.log('Browser:', navigator.userAgent);
    console.log('Speech Synthesis Support:', 'speechSynthesis' in window);
    console.log('Total Voices:', voices.length);
    console.log('Arabic Voices:', voices.filter(v => v.lang.includes('ar')));
    
    const testResult = arabicSpeech.test();
    console.log('Test Result:', testResult);
  };

  const manualTest = () => {
    const text = 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ';
    
    // Method 1: Direct Speech Synthesis
    try {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA';
      utterance.rate = 0.8;
      
      if (selectedVoice) {
        const voice = voices.find(v => v.name === selectedVoice);
        if (voice) utterance.voice = voice;
      }
      
      speechSynthesis.speak(utterance);
      console.log('Manual test: Speaking with native API');
    } catch (error) {
      console.error('Manual test error:', error);
    }
  };

  const testGoogleTTS = () => {
    const text = 'السلام عليكم';
    arabicSpeech.speakWithGoogle(text);
    console.log('Testing Google TTS fallback');
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">🔊 Audio Test & Diagnostics</h1>

      {/* Status Check */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Browser Support Status</h2>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {browserSupport ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <AlertCircle className="w-6 h-6 text-red-500" />
            )}
            <span>Web Speech API: {browserSupport ? 'Supported ✅' : 'Not Supported ❌'}</span>
          </div>

          <div className="flex items-center gap-3">
            {voices.length > 0 ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            )}
            <span>Available Voices: {voices.length}</span>
          </div>

          <div className="flex items-center gap-3">
            {voices.some(v => v.lang.includes('ar')) ? (
              <CheckCircle className="w-6 h-6 text-green-500" />
            ) : (
              <AlertCircle className="w-6 h-6 text-yellow-500" />
            )}
            <span>Arabic Voices: {voices.filter(v => v.lang.includes('ar')).length}</span>
          </div>
        </div>

        {/* Voice Selector */}
        {voices.length > 0 && (
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">Select Voice:</label>
            <select 
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="w-full p-2 border rounded-lg"
            >
              <option value="">Default</option>
              {voices
                .filter(v => v.lang.includes('ar') || v.lang.includes('en'))
                .map(voice => (
                  <option key={voice.name} value={voice.name}>
                    {voice.name} ({voice.lang})
                  </option>
                ))}
            </select>
          </div>
        )}
      </div>

      {/* Test Buttons */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Test Methods</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={runDiagnostics}
            className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Run Diagnostics (Console)
          </button>
          
          <button
            onClick={manualTest}
            className="p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Test Native API
          </button>
          
          <button
            onClick={testGoogleTTS}
            className="p-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Test Google TTS
          </button>
          
          <button
            onClick={() => arabicSpeech.test()}
            className="p-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
          >
            Quick Test
          </button>
        </div>
      </div>

      {/* Test Phrases */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h2 className="text-xl font-bold mb-4">Test Phrases</h2>
        
        <div className="space-y-3">
          {testPhrases.map((phrase, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <p className="text-2xl arabic-text">{phrase.arabic}</p>
                <p className="text-sm text-gray-600">{phrase.meaning} - {phrase.text}</p>
              </div>
              <AudioButton text={phrase.arabic} showLabel />
            </div>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h2 className="text-lg font-bold mb-3 flex items-center gap-2">
          <Info className="w-5 h-5" />
          Troubleshooting Guide
        </h2>
        
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li><strong>Buka Console</strong> (F12) untuk melihat log diagnostik</li>
          <li><strong>Chrome/Edge:</strong> Biasanya langsung berfungsi</li>
          <li><strong>Firefox:</strong> Mungkin perlu click halaman dulu</li>
          <li><strong>Safari:</strong> Enable di Settings → Accessibility → Spoken Content</li>
          <li><strong>Mobile:</strong> Volume tidak boleh silent mode</li>
          <li><strong>Jika tetap tidak bersuara:</strong>
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Coba refresh halaman (F5)</li>
              <li>Clear browser cache</li>
              <li>Coba browser lain</li>
              <li>Pastikan tidak ada extension yang block audio</li>
              <li>Cek Windows Sound Settings</li>
            </ul>
          </li>
        </ol>

        <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
          <p className="text-sm"><strong>Alternative:</strong> Jika Web Speech API tidak berfungsi, system akan otomatis menggunakan Google TTS sebagai fallback.</p>
        </div>
      </div>
    </div>
  );
}