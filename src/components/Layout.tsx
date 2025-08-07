import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { 
  BookOpen, 
  Languages, 
  GraduationCap, 
  Home,
  Trophy,
  MessageSquare,
  PenTool,
  Layers,
  BookMarked,
  Menu,
  X
} from 'lucide-react';
import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  userProgress: {
    level: string;
    points: number;
    streak: number;
  };
}

export default function Layout({ children, userProgress }: LayoutProps) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', href: '/', icon: Home },
    { name: 'Huruf Hijaiyah', href: '/letters', icon: Languages },
    { name: 'Kosakata', href: '/vocabulary', icon: BookOpen },
    { name: 'Flashcards', href: '/flashcards', icon: Layers },
    { name: 'Tashrif', href: '/tashrif', icon: BookMarked },
    { name: 'Nahwu', href: '/nahwu', icon: GraduationCap },
    { name: 'Latihan', href: '/practice', icon: PenTool },
    { name: 'AI Tutor', href: '/ai-tutor', icon: MessageSquare },
    { name: 'Progress', href: '/progress', icon: Trophy },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-md sticky top-0 z-50">
        <div className="flex items-center justify-between p-4">
          <div>
            <h1 className="text-xl font-bold text-indigo-600">
              تَعَلَّمْ العَرَبِيَّة
            </h1>
            <p className="text-xs text-gray-600">Belajar Bahasa Arab</p>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile User Stats Bar */}
        <div className="px-4 pb-3">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-3 rounded-lg">
            <div className="flex justify-around text-center">
              <div>
                <p className="text-xs opacity-90">Level</p>
                <p className="font-bold text-sm capitalize">{userProgress.level}</p>
              </div>
              <div>
                <p className="text-xs opacity-90">Poin</p>
                <p className="font-bold text-sm">{userProgress.points}</p>
              </div>
              <div>
                <p className="text-xs opacity-90">Streak</p>
                <p className="font-bold text-sm">{userProgress.streak} hari</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)}>
          <div 
            className="bg-white w-72 h-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <h1 className="text-2xl font-bold text-indigo-600 mb-2">
                تَعَلَّمْ العَرَبِيَّة
              </h1>
              <p className="text-sm text-gray-600">Belajar Bahasa Arab</p>
            </div>

            {/* Mobile Navigation */}
            <nav className="px-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-indigo-100 text-indigo-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      <div className="flex">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:block w-64 min-h-screen bg-white shadow-xl">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-indigo-600 mb-2">
              تَعَلَّمْ العَرَبِيَّة
            </h1>
            <p className="text-sm text-gray-600">Belajar Bahasa Arab</p>
          </div>

          {/* Desktop User Stats */}
          <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white mx-4 rounded-lg mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Level</span>
              <span className="font-bold capitalize">{userProgress.level}</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm opacity-90">Poin</span>
              <span className="font-bold">{userProgress.points}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm opacity-90">Streak</span>
              <span className="font-bold">{userProgress.streak} hari</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="px-4">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-indigo-100 text-indigo-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 lg:p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}