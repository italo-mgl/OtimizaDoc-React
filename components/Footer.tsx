
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white">
            <i className="fas fa-boxes-packing"></i>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">
            Otimiza<span className="text-red-600">Doc</span>
          </span>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
          <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Ajuda</a>
          <a href="#" className="hover:text-white transition-colors">Status</a>
        </div>
        
        <p className="text-xs font-mono mb-2">
          MADE FOR SELLERS, BY SELLERS. 🚀
        </p>
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} OtimizaDoc - Otimização Logística Inteligente. 
          Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
