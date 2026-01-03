
import React, { useState, useRef } from 'react';

interface DropzoneProps {
  onUpload: (files: FileList) => void;
}

const Dropzone: React.FC<DropzoneProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUpload(e.dataTransfer.files);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files);
    }
  };

  return (
    <div 
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
      className={`relative group cursor-pointer p-1 rounded-3xl transition-all duration-300 ${
        isDragging ? 'bg-red-500 scale-105 shadow-2xl' : 'bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800'
      }`}
    >
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        multiple 
        className="hidden" 
        accept="application/pdf"
      />
      <div className="bg-white dark:bg-slate-900 rounded-[calc(1.5rem-2px)] p-12 md:p-20 text-center border-2 border-dashed border-slate-300 dark:border-slate-700 group-hover:border-red-500 transition-colors">
        <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110">
          <i className="fas fa-cloud-arrow-up text-4xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Solte seus PDFs brutos aqui
        </h3>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">
          Arraste as etiquetas da Shopee ou Mercado Livre. Nós cuidamos da higienização e do layout 4-em-1 automaticamente.
        </p>
        <button className="bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-bold px-8 py-3 rounded-xl transition-all group-hover:shadow-lg active:scale-95">
          Selecionar Arquivos
        </button>
        <div className="mt-8 flex items-center justify-center gap-4 text-xs font-mono text-slate-400 dark:text-slate-500">
          <span><i className="fas fa-shield-halved mr-1"></i> PRIVACIDADE GARANTIDA</span>
          <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
          <span><i className="fas fa-file-pdf mr-1"></i> MAX 50MB</span>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
