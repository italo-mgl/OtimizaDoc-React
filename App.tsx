
import React, { useState, useEffect } from 'react';
import { AppStatus, Stats } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import Dropzone from './components/Dropzone';
import ProcessingDashboard from './components/ProcessingDashboard';
import ResultArea from './components/ResultArea';
import ComparisonSection from './components/ComparisonSection';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [status, setStatus] = useState<AppStatus>(AppStatus.IDLE);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [stats, setStats] = useState<Stats>({
    sheetsSaved: 12543,
    timeSavedMinutes: 4200,
    carbonReducedKg: 84.5
  });

  // Gerenciamento de tema centralizado
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleFileUpload = (files: FileList) => {
    setStatus(AppStatus.UPLOADING);
    setTimeout(() => {
      setStatus(AppStatus.PROCESSING);
    }, 1500);
  };

  const handleProcessingComplete = () => {
    setStatus(AppStatus.COMPLETED);
    setStats(prev => ({
      ...prev,
      sheetsSaved: prev.sheetsSaved + 4
    }));
  };

  const reset = () => {
    setStatus(AppStatus.IDLE);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-500 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 overflow-x-hidden">
      <Header 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme} 
      />
      
      <main className="flex-grow">
        {status === AppStatus.IDLE && (
          <div className="animate-in fade-in duration-700">
            <Hero stats={stats} />
            
            <div id="converter" className="max-w-4xl mx-auto px-4 pb-24 scroll-mt-20">
              <Dropzone onUpload={handleFileUpload} />
              <div className="mt-12">
                <ComparisonSection />
              </div>
            </div>

            <HowItWorks />
            
            <Pricing />
          </div>
        )}

        {(status === AppStatus.UPLOADING || status === AppStatus.PROCESSING) && (
          <div className="max-w-4xl mx-auto px-4 py-24 animate-in fade-in slide-in-from-bottom-4">
            <ProcessingDashboard 
              status={status} 
              onComplete={handleProcessingComplete} 
            />
          </div>
        )}

        {status === AppStatus.COMPLETED && (
          <div className="max-w-4xl mx-auto px-4 py-24 animate-in zoom-in duration-300">
            <ResultArea onReset={reset} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
