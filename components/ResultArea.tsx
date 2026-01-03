
import React from 'react';

interface ResultAreaProps {
  onReset: () => void;
}

const ResultArea: React.FC<ResultAreaProps> = ({ onReset }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 shadow-2xl animate-in fade-in zoom-in duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Sucesso! Seus documentos estão prontos.</h2>
          <p className="text-slate-500 dark:text-slate-400">Layout 4-em-1 aplicado com economia de 3 folhas de papel.</p>
        </div>
        <button 
          onClick={onReset}
          className="text-red-600 hover:text-red-700 font-bold flex items-center gap-2 px-6 py-2 rounded-xl hover:bg-red-50 dark:hover:bg-red-900/20 transition-all"
        >
          <i className="fas fa-arrow-left"></i>
          Otimizar novos arquivos
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Preview Visualization */}
        <div className="bg-slate-100 dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 flex items-center justify-center">
          <div className="relative w-64 h-[90.51px] bg-white shadow-2xl rounded-sm border-2 border-red-500/30 transform transition-transform hover:scale-105" style={{ aspectRatio: '1/1.414' }}>
            <div className="absolute inset-0 p-4 grid grid-cols-2 grid-rows-2 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="border border-slate-200 bg-slate-50 flex flex-col p-1">
                  <div className="w-full h-1/3 bg-slate-200 rounded-sm mb-1"></div>
                  <div className="w-3/4 h-2 bg-slate-100 rounded-sm mb-1"></div>
                  <div className="w-full h-2 bg-slate-100 rounded-sm mb-1"></div>
                  <div className="mt-auto flex justify-between">
                    <div className="w-2 h-2 bg-slate-200 rounded-full"></div>
                    <div className="w-6 h-2 bg-slate-200 rounded-sm"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute -top-4 -right-4 bg-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
              4x
            </div>
          </div>
        </div>

        {/* Download Actions */}
        <div className="flex flex-col justify-center space-y-6">
          <div className="p-6 bg-red-50 dark:bg-red-900/10 rounded-2xl border border-red-100 dark:border-red-900/30">
            <h3 className="text-lg font-bold text-red-900 dark:text-red-400 mb-4 flex items-center gap-2">
              <i className="fas fa-bolt"></i>
              Opções de Download
            </h3>
            
            <button className="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-red-500/30 flex items-center justify-center gap-3 mb-4 group active:scale-[0.98]">
              <i className="fas fa-file-pdf text-xl transition-transform group-hover:bounce"></i>
              Baixar PDF Otimizado
              <span className="text-sm opacity-60 font-normal ml-auto">(1.2 MB)</span>
            </button>
            
            <button className="w-full bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:border-red-500 text-slate-700 dark:text-white px-8 py-4 rounded-xl text-lg font-bold transition-all flex items-center justify-center gap-3 group active:scale-[0.98]">
              <i className="fas fa-print text-xl"></i>
              Imprimir Diretamente
            </button>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-900/50 p-4 rounded-xl">
             <i className="fas fa-info-circle text-blue-500"></i>
             Seu arquivo ficará disponível para download por 1 hora antes de ser deletado permanentemente dos nossos servidores.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultArea;
