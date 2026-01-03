
import React, { useState, useEffect } from 'react';
import { AppStatus } from '../types';

interface ProcessingDashboardProps {
  status: AppStatus;
  onComplete: () => void;
}

const ProcessingDashboard: React.FC<ProcessingDashboardProps> = ({ status, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Importando documentos...', icon: 'fa-upload' },
    { label: 'Higienizando camadas visuais...', icon: 'fa-broom' },
    { label: 'Atualizando datas fiscais...', icon: 'fa-calendar-check' },
    { label: 'Engenharia de Layout 4-em-1...', icon: 'fa-layer-group' },
    { label: 'Finalizando PDF otimizado...', icon: 'fa-circle-check' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.random() * 8;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const stepSize = 100 / steps.length;
    setCurrentStep(Math.min(Math.floor(progress / stepSize), steps.length - 1));
  }, [progress, steps.length]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 md:p-12 shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Circle Progress */}
        <div className="relative w-48 h-48 flex-shrink-0">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle 
              className="text-slate-100 dark:text-slate-700 stroke-current" 
              strokeWidth="10" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
            />
            <circle 
              className="text-red-600 stroke-current transition-all duration-300" 
              strokeWidth="10" 
              strokeDasharray={251.2}
              strokeDashoffset={251.2 - (251.2 * progress) / 100}
              strokeLinecap="round" 
              fill="transparent" 
              r="40" 
              cx="50" 
              cy="50" 
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-extrabold text-slate-900 dark:text-white">{Math.round(progress)}%</span>
            <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Processando</span>
          </div>
        </div>

        <div className="flex-grow w-full">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
            <i className={`fas ${steps[currentStep].icon} text-red-600 animate-pulse`}></i>
            {steps[currentStep].label}
          </h2>

          <div className="space-y-4">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                  idx < currentStep ? 'bg-emerald-500 text-white' : 
                  idx === currentStep ? 'bg-red-600 text-white animate-pulse' : 
                  'bg-slate-200 dark:bg-slate-700 text-slate-400'
                }`}>
                  {idx < currentStep ? <i className="fas fa-check"></i> : idx + 1}
                </div>
                <span className={`text-sm font-medium ${
                  idx < currentStep ? 'text-slate-400' : 
                  idx === currentStep ? 'text-slate-900 dark:text-white' : 
                  'text-slate-500'
                }`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg flex items-center justify-center">
          <i className="fas fa-lightbulb"></i>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-400 italic">
          <strong>Dica:</strong> Você sabia que o OtimizaDoc remove automaticamente propagandas de transportadoras para economizar até 30% mais tinta de impressão?
        </p>
      </div>
    </div>
  );
};

export default ProcessingDashboard;
