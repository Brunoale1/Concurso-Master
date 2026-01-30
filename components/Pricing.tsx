
import React from 'react';
import { PLANS } from '../constants';
import { Check, Sparkles, TrendingUp } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="precos" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Luz de fundo sutil para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">Invista no seu Futuro</h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Nossos Melhores Pacotes</h3>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Escolha o plano ideal para sua rotina e garanta acesso vitalício com as melhores condições.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const isRecommended = plan.recommended || plan.name.includes('Premium');
            const savings = plan.oldPrice ? (parseFloat(plan.oldPrice.replace(',', '.')) - parseFloat(plan.price.replace(',', '.'))).toFixed(2).replace('.', ',') : null;
            
            return (
              <div 
                key={plan.id} 
                className={`flex flex-col rounded-[2.5rem] p-10 transition-all duration-500 relative group ${
                  isRecommended 
                    ? 'bg-slate-900 border-2 border-blue-500 shadow-[0_20px_50px_rgba(59,130,246,0.15)] scale-105 z-10' 
                    : 'bg-slate-900/40 text-slate-100 border border-slate-800/50 hover:border-slate-700'
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2.5 rounded-full shadow-lg flex items-center gap-2 whitespace-nowrap">
                    <Sparkles size={14} />
                    Melhor Custo Benefício
                  </div>
                )}
                
                <div className="mb-8 text-center lg:text-left">
                  <h4 className={`text-lg font-bold mb-4 uppercase tracking-widest ${isRecommended ? 'text-blue-400' : 'text-slate-500'}`}>
                    {plan.name}
                  </h4>
                  
                  <div className="relative">
                    {plan.oldPrice && (
                      <span className="text-sm text-slate-500 line-through absolute -top-5 left-0">
                        De R$ {plan.oldPrice}
                      </span>
                    )}
                    <div className="flex items-baseline justify-center lg:justify-start gap-1">
                      <span className="text-lg font-bold text-slate-400">R$</span>
                      <span className="text-6xl font-black text-white tracking-tighter">
                        {plan.price.split(',')[0]}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold text-slate-400 leading-none">,{plan.price.split(',')[1]}</span>
                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mt-1">Vitalício</span>
                      </div>
                    </div>
                  </div>

                  {savings && (
                    <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-xs font-bold border border-green-500/20">
                      <TrendingUp size={12} />
                      Economia de R$ {savings}
                    </div>
                  )}
                </div>

                <div className="w-full h-px bg-slate-800 mb-8"></div>

                <div className="flex-grow space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 group/item">
                      <div className={`mt-0.5 p-1 rounded-full shrink-0 transition-colors ${
                        isRecommended ? 'bg-blue-600 text-white' : 'bg-slate-800 text-blue-500'
                      }`}>
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium transition-colors ${isRecommended ? 'text-slate-200' : 'text-slate-400'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-5 rounded-2xl font-black text-lg transition-all transform active:scale-[0.98] ${
                  isRecommended 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-500/30' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                }`}>
                  {isRecommended ? 'Quero Acesso Premium' : 'Começar Agora'}
                </button>
                
                <p className="text-[10px] text-center mt-4 text-slate-600 font-bold uppercase tracking-[0.1em]">
                  Pagamento 100% Seguro
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
