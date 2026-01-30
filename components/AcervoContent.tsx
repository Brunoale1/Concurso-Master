
import React from 'react';
import { ACERVO_ITEMS } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Folder, ChevronRight, FileText } from 'lucide-react';

const AcervoContent: React.FC = () => {
  return (
    <section id="conteudo" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Luz decorativa */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">Pastas Compartilhadas</h2>
          <h3 className="text-4xl lg:text-6xl font-black text-white mb-6">Explore o Seu Novo Gabinete.</h3>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto font-medium">
            Toda a estrutura necessária para carreiras de alto nível, organizada por temas e recorrência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACERVO_ITEMS.map((item, index) => {
            const Icon = (LucideIcons as any)[item.icon];
            return (
              <div 
                key={index} 
                className="group relative bg-slate-900/40 rounded-[2rem] border border-slate-800/50 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden"
              >
                {/* Folder Tab Effect */}
                <div className="absolute top-0 left-0 w-32 h-2 bg-blue-600/20 group-hover:bg-blue-600 transition-colors"></div>
                
                <div className="p-8">
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center border border-slate-800 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={32} className="text-blue-500" />
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">Status</span>
                      <div className="flex items-center gap-1 text-green-500">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                        <span className="text-[10px] font-bold uppercase">Atualizado</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h4>
                  
                  <div className="space-y-3 mb-8">
                    {item.items.map((subItem, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-3 text-slate-400 text-sm font-medium group/line">
                        <FileText size={14} className="text-slate-600 group-hover/line:text-blue-500 transition-colors" />
                        <span className="group-hover/line:text-slate-200 transition-colors">{subItem}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-slate-800/50 flex items-center justify-between group-hover:border-blue-900/30 transition-colors">
                    <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Acesso Imediato</span>
                    <ChevronRight size={18} className="text-slate-700 group-hover:text-blue-500 transform group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AcervoContent;
