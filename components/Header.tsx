
import React from 'react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  const scrollToConverter = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            onClick={() => window.location.reload()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white transform transition-transform group-hover:rotate-12">
              <i className="fas fa-boxes-packing text-xl"></i>
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight transition-colors">
              Otimiza<span className="text-red-600">Doc</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
              <a href="#how-it-works" onClick={scrollToSection('how-it-works')} className="hover:text-red-600 transition-colors">Como funciona</a>
              <a href="#pricing" onClick={scrollToSection('pricing')} className="hover:text-red-600 transition-colors">Preços</a>
              <a href="#converter" onClick={scrollToConverter} className="hover:text-red-600 transition-colors">API</a>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-yellow-400 hover:scale-110 transition-all border border-slate-200 dark:border-slate-700"
                title={isDarkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
              >
                {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
              <button 
                onClick={scrollToConverter}
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-red-500/20 active:scale-95"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
