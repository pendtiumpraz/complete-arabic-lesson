import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import ArabicLetters from './pages/ArabicLetters';
import Vocabulary from './pages/Vocabulary';
import Flashcards from './pages/Flashcards';
import Tashrif from './pages/Tashrif';
import Nahwu from './pages/Nahwu';
import Practice from './pages/Practice';
import AITutor from './pages/AITutor';
import Progress from './pages/Progress';
import AudioTest from './pages/AudioTest';
import Layout from './components/Layout';

interface UserProgress {
  level: string;
  completedLessons: string[];
  points: number;
  streak: number;
  lastActive: string;
}

function App() {
  const [userProgress, setUserProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('arabicLearningProgress');
    return saved ? JSON.parse(saved) : {
      level: 'beginner',
      completedLessons: [],
      points: 0,
      streak: 0,
      lastActive: new Date().toISOString()
    };
  });

  useEffect(() => {
    localStorage.setItem('arabicLearningProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const updateProgress = (lessonId: string, points: number) => {
    setUserProgress((prev) => ({
      ...prev,
      completedLessons: [...new Set([...prev.completedLessons, lessonId])],
      points: prev.points + points,
      lastActive: new Date().toISOString()
    }));
  };

  return (
    <Router>
      <Layout userProgress={userProgress}>
        <Routes>
          <Route path="/" element={<Home userProgress={userProgress} />} />
          <Route path="/letters" element={<ArabicLetters updateProgress={updateProgress} />} />
          <Route path="/vocabulary" element={<Vocabulary updateProgress={updateProgress} />} />
          <Route path="/flashcards" element={<Flashcards updateProgress={updateProgress} />} />
          <Route path="/tashrif" element={<Tashrif updateProgress={updateProgress} />} />
          <Route path="/nahwu" element={<Nahwu updateProgress={updateProgress} />} />
          <Route path="/practice" element={<Practice updateProgress={updateProgress} userProgress={userProgress} />} />
          <Route path="/ai-tutor" element={<AITutor />} />
          <Route path="/progress" element={<Progress userProgress={userProgress} />} />
          <Route path="/audio-test" element={<AudioTest />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;