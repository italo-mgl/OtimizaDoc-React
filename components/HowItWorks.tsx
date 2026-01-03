
import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Simples, Rápido e <span className="text-red-600">Extremamente Econômico</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Nossa plataforma utiliza algoritmos avançados de PDF para reorganizar suas etiquetas de envio, eliminando desperdícios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 text-red-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
              <i className="fas fa-upload"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">1. Upload Inteligente</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Arraste suas etiquetas da Shopee, ML ou qualquer transportadora. Aceitamos múltiplos arquivos simultâneos.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
              <i className="fas fa-microchip"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">2. Agilidade Máxima</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Em segundos, removemos logotipos inúteis e higienizamos os dados, agrupando 4 etiquetas em uma única folha A4.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
              <i className="fas fa-piggy-bank"></i>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">3. Economia Real</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              Imprima 75% menos papel e gaste menos tinta. Otimize seu tempo de corte e separação de pedidos.
            </p>
          </div>
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-4xl text-red-600">
              <i className="fas fa-chart-line"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">Escalabilidade para seu E-commerce</h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Empresas que usam o OtimizaDoc reduzem o tempo de expedição em até 40%.</p>
            </div>
          </div>
          <button 
            onClick={() => document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' })}
            className="whitespace-nowrap bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
          >
            Começar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
