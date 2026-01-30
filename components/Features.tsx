
import React from 'react';
import { FEATURES } from '../constants';
import * as LucideIcons from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase text-sm mb-3">Tecnologia e Estratégia</h2>
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Por que somos o melhor acervo?</h3>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Conteúdo de alta performance, atualizado e estrategicamente organizado para quem busca resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => {
            const Icon = (LucideIcons as any)[feature.icon];
            return (
              <div key={feature.id} className="group p-8 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-900/20">
                <div className="w-14 h-14 bg-slate-800 text-blue-400 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
