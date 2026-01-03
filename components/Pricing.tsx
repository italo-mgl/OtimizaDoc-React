
import React from 'react';

const Pricing: React.FC = () => {
  const scrollToConverter = () => {
    document.getElementById('converter')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Mensal',
      price: '19,90',
      period: 'mês',
      description: 'Ideal para quem está começando e quer testar a potência.',
      features: ['Etiquetas ilimitadas', 'Layout 4-em-1', 'Suporte via Chat'],
      buttonText: 'Assinar Mensal',
      highlight: false
    },
    {
      name: 'Semestral',
      price: '89,90',
      period: '6 meses',
      description: 'O equilíbrio perfeito para e-commerces em crescimento.',
      features: ['Tudo do mensal', 'Suporte prioritário', 'Economia de 25% vs mensal'],
      buttonText: 'Assinar Semestral',
      highlight: false
    },
    {
      name: 'Anual',
      price: '129,90',
      period: 'ano',
      description: 'O melhor valor para quem leva a logística a sério.',
      features: ['Tudo do semestral', 'Acesso antecipado a APIs', 'Maior economia disponível'],
      buttonText: 'Assinar Anual',
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-900/50 transition-colors duration-500 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Planos que cabem no <span className="text-red-600">seu bolso</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Escolha o plano que melhor se adapta ao volume de vendas da sua operação logística.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div 
              key={idx}
              className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-white dark:bg-slate-800 border-red-600 shadow-2xl shadow-red-500/10 scale-105 z-10' 
                  : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-red-400'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Melhor Valor
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-bold text-slate-500">R$</span>
                  <span className="text-5xl font-extrabold text-slate-900 dark:text-white">{plan.price}</span>
                  <span className="text-slate-500">/{plan.period}</span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                    <i className="fas fa-check text-red-600"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <button 
                onClick={scrollToConverter}
                className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 ${
                  plan.highlight
                    ? 'bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-500/30'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
