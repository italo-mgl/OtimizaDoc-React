
import React from 'react';

const ComparisonSection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tight">
          Veja a mágica acontecer
        </h2>
        <p className="text-slate-500 dark:text-slate-400">
          Transformamos o caos logístico em eficiência pura.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Antes */}
        <div className="relative group">
          <div className="absolute -top-3 left-4 bg-slate-900 text-white px-3 py-1 rounded-full text-xs font-bold z-10">
            PDF ORIGINAL (CAOS)
          </div>
          <div className="bg-slate-200 dark:bg-slate-800 rounded-3xl p-6 border-2 border-transparent group-hover:border-slate-300 transition-all overflow-hidden h-96 flex flex-col gap-4">
            <div className="w-full h-full bg-white dark:bg-slate-700 rounded-lg p-4 opacity-70 grayscale">
              {/* Mock Shopee Label */}
              <div className="border-2 border-orange-500 p-2 mb-2 flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500"></div>
                <div className="space-y-1 flex-grow">
                  <div className="h-2 w-24 bg-slate-200 rounded"></div>
                  <div className="h-2 w-16 bg-slate-200 rounded"></div>
                </div>
              </div>
              <div className="space-y-4">
                 <div className="h-4 w-full bg-slate-100 rounded"></div>
                 <div className="h-24 w-full bg-slate-100 rounded flex items-center justify-center">
                    <i className="fas fa-barcode text-4xl opacity-20"></i>
                 </div>
                 <div className="h-32 w-full bg-slate-100 rounded opacity-30"></div>
              </div>
            </div>
            <div className="text-center text-slate-500 font-medium text-sm">
              <i className="fas fa-triangle-exclamation mr-2 text-yellow-500"></i>
              Logotipos desnecessários e muito espaço desperdiçado.
            </div>
          </div>
        </div>

        {/* Depois */}
        <div className="relative group">
          <div className="absolute -top-3 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow-lg shadow-red-500/30">
            OTIMIZADOC (EFICIÊNCIA)
          </div>
          <div className="bg-red-50 dark:bg-red-900/10 rounded-3xl p-6 border-2 border-red-200 dark:border-red-900/30 group-hover:border-red-400 transition-all overflow-hidden h-96 flex flex-col gap-4">
            <div className="w-full h-full bg-white dark:bg-slate-700 rounded-lg p-2 grid grid-cols-2 grid-rows-2 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="border border-red-100 bg-red-50/30 p-1 flex flex-col overflow-hidden">
                  <div className="h-1 bg-red-400 w-1/2 rounded-full mb-1"></div>
                  <div className="flex-grow bg-slate-100 rounded-sm opacity-50 relative">
                     <i className="fas fa-barcode absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-75 opacity-20"></i>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center text-red-600 font-bold text-sm">
              <i className="fas fa-check-circle mr-2"></i>
              75% menos papel. Sem logotipos. Pronto para envio.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
