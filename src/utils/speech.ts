// Enhanced Arabic Text-to-Speech utility
export class ArabicSpeech {
  private static instance: ArabicSpeech;
  private voices: SpeechSynthesisVoice[] = [];
  private arabicVoice: SpeechSynthesisVoice | null = null;
  private isReady: boolean = false;

  private constructor() {
    this.init();
  }

  static getInstance(): ArabicSpeech {
    if (!ArabicSpeech.instance) {
      ArabicSpeech.instance = new ArabicSpeech();
    }
    return ArabicSpeech.instance;
  }

  private init() {
    if (!('speechSynthesis' in window)) {
      console.error('Browser tidak mendukung Text-to-Speech');
      return;
    }

    // Load voices
    const loadVoices = () => {
      this.voices = speechSynthesis.getVoices();
      
      // Prioritas voice Arab
      const arabicVoices = this.voices.filter(voice => 
        voice.lang.includes('ar') || 
        voice.lang.includes('AR') ||
        voice.name.includes('Arabic')
      );

      if (arabicVoices.length > 0) {
        // Prioritaskan ar-SA (Saudi Arabia)
        this.arabicVoice = arabicVoices.find(v => v.lang === 'ar-SA') || arabicVoices[0];
        console.log('Arabic voice found:', this.arabicVoice.name);
      } else {
        console.warn('No Arabic voice found, using default');
      }
      
      this.isReady = true;
    };

    // Chrome needs this event
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
    
    // Firefox/Safari
    loadVoices();
    
    // Retry after delay
    setTimeout(loadVoices, 100);
  }

  speak(text: string, options?: { rate?: number; pitch?: number; volume?: number }) {
    if (!('speechSynthesis' in window)) {
      alert('Browser Anda tidak mendukung fitur suara. Gunakan Chrome/Edge untuk hasil terbaik.');
      return;
    }

    // Cancel any ongoing speech
    speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set Arabic language
    utterance.lang = 'ar-SA';
    
    // Use Arabic voice if available
    if (this.arabicVoice) {
      utterance.voice = this.arabicVoice;
    }
    
    // Set options
    utterance.rate = options?.rate || 0.8;
    utterance.pitch = options?.pitch || 1;
    utterance.volume = options?.volume || 1;
    
    // Error handling
    utterance.onerror = (event) => {
      console.error('Speech error:', event);
      // Fallback: Try with different language code
      if (event.error === 'not-allowed') {
        alert('Microphone/Audio permission diperlukan. Silakan izinkan di browser settings.');
      } else {
        // Retry with generic Arabic
        utterance.lang = 'ar';
        speechSynthesis.speak(utterance);
      }
    };

    // Speak
    try {
      speechSynthesis.speak(utterance);
      console.log('Speaking:', text);
    } catch (error) {
      console.error('Failed to speak:', error);
      alert('Error: ' + error);
    }
  }

  // Alternative using Google Translate TTS (backup)
  speakWithGoogle(text: string) {
    const audio = new Audio(
      `https://translate.google.com/translate_tts?ie=UTF-8&tl=ar&client=tw-ob&q=${encodeURIComponent(text)}`
    );
    audio.play().catch(err => {
      console.error('Google TTS error:', err);
      alert('Audio tidak dapat dimainkan. Coba refresh halaman.');
    });
  }

  // Test function
  test() {
    console.log('Testing Arabic TTS...');
    console.log('Voices available:', this.voices.length);
    console.log('Arabic voice:', this.arabicVoice?.name || 'None');
    console.log('Is ready:', this.isReady);
    
    // Test with simple Arabic
    this.speak('السلام عليكم');
    
    // List all voices
    return this.voices;
  }
}

// Export singleton instance
export const arabicSpeech = ArabicSpeech.getInstance();

// Simple function for backward compatibility
export const speakArabic = (text: string) => {
  arabicSpeech.speak(text);
};