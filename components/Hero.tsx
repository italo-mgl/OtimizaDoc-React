
import React from 'react';
import { Stats } from '../types';

interface HeroProps {
  stats: Stats;
}

const Hero: React.FC<HeroProps> = ({ stats }) => {
  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-red-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-slate-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-bold mb-8 animate-bounce">
          <i className="fas fa-bolt"></i>
          <span>ECONOMIZE ATÉ 75% EM IMPRESSÃO</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
          Sua Logística <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
            Muito Mais Otimizada.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12">
          Automatize a limpeza e agrupamento de etiquetas (4-em-1). 
          Pare de perder tempo cortando papel e comece a escalar suas vendas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none transition-transform hover:-translate-y-1">
            <div className="text-red-600 mb-2">
              <i className="fas fa-file-invoice text-3xl"></i>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {stats.sheetsSaved.toLocaleString('pt-BR')}
            </div>
            <div className="text-sm font-medium text-slate-500">Folhas A4 economizadas</div>
          </div>
          
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none transition-transform hover:-translate-y-1">
            <div className="text-blue-500 mb-2">
              <i className="fas fa-clock text-3xl"></i>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {Math.floor(stats.timeSavedMinutes / 60)}h
            </div>
            <div className="text-sm font-medium text-slate-500">Tempo de triagem poupado</div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none transition-transform hover:-translate-y-1">
            <div className="text-emerald-500 mb-2">
              <i className="fas fa-leaf text-3xl"></i>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
              {stats.carbonReducedKg}kg
            </div>
            <div className="text-sm font-medium text-slate-500">Redução de CO2 (Papel)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
