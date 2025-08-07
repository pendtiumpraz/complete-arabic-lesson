import { Volume2, VolumeX, Loader } from 'lucide-react';
import { useState } from 'react';
import { arabicSpeech } from '../utils/speech';

interface AudioButtonProps {
  text: string;
  className?: string;
  showLabel?: boolean;
}

export default function AudioButton({ text, className = '', showLabel = false }: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    setHasError(false);
    
    try {
      // Try Web Speech API first
      arabicSpeech.speak(text);
      
      // Reset state after speech (estimate)
      setTimeout(() => {
        setIsPlaying(false);
      }, text.length * 100);
    } catch (error) {
      console.error('Audio error:', error);
      
      // Fallback to Google TTS
      try {
        arabicSpeech.speakWithGoogle(text);
        setTimeout(() => setIsPlaying(false), 2000);
      } catch (err) {
        setHasError(true);
        setIsPlaying(false);
        alert('Audio tidak tersedia. Pastikan browser Anda mendukung Web Speech API.');
      }
    }
  };

  return (
    <button
      onClick={handlePlay}
      disabled={isPlaying}
      className={`inline-flex items-center gap-2 p-2 rounded-lg transition-all ${
        hasError 
          ? 'bg-red-100 text-red-600 hover:bg-red-200' 
          : isPlaying
          ? 'bg-blue-100 text-blue-600'
          : 'bg-green-100 text-green-600 hover:bg-green-200'
      } ${className}`}
      title={hasError ? 'Audio error' : isPlaying ? 'Playing...' : 'Click to play audio'}
    >
      {isPlaying ? (
        <Loader className="w-5 h-5 animate-spin" />
      ) : hasError ? (
        <VolumeX className="w-5 h-5" />
      ) : (
        <Volume2 className="w-5 h-5" />
      )}
      {showLabel && (
        <span className="text-sm font-medium">
          {isPlaying ? 'Playing...' : 'Dengarkan'}
        </span>
      )}
    </button>
  );
}