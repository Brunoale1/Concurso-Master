
import React from 'react';
import { ArrowRight, Star, CheckCircle, Shield, FolderOpen, Search, Lock } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('conteudo');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-400 px-4 py-2 rounded-full font-bold text-xs mb-8 border border-blue-600/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
            <Shield size={14} />
            <span className="uppercase tracking-[0.2em]">Foco em Carreiras Policiais e Jurídicas</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tighter">
            O Acervo Definitivo <br/> 
            <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">Para Sua Aprovação.</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Tudo o que você precisa em um só lugar. Tenha uma central de inteligência com **Vade Mecum Esquematizado**, **Informativos** e **Simulados de Elite** prontos para o download.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start mb-12">
            <a href="#precos" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-lg hover:bg-blue-500 transition-all shadow-[0_20px_40px_rgba(59,130,246,0.3)] flex items-center justify-center gap-3 group">
              QUERO SER APROVADO <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#conteudo" 
              onClick={scrollToContent}
              className="px-10 py-5 bg-slate-900 text-white border border-slate-800 rounded-2xl font-black text-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <Search size={20} className="text-blue-500" /> CONHECER O CONTEÚDO
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-70">
            <div className="flex items-center gap-2 text-slate-300 text-sm font-bold uppercase tracking-widest">
              <CheckCircle size={16} className="text-blue-500" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300 text-sm font-bold uppercase tracking-widest">
              <Lock size={16} className="text-blue-500" />
              <span>Segurança SSL</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          {/* Mockup do Acervo */}
          <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-4 shadow-2xl relative overflow-hidden">
            <div className="bg-slate-950 rounded-[1.8rem] border border-slate-800 p-6">
                {/* Simulador de Interface de Pastas */}
                <div className="flex items-center justify-between mb-8 border-b border-slate-900 pb-4">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40"></div>
                    </div>
                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Biblioteca Digital CM v2.5</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl flex flex-col gap-3 group-hover:bg-blue-600/10 transition-colors">
                        <FolderOpen className="text-blue-500" size={32} />
                        <span className="text-xs font-black text-white uppercase">Direito Penal</span>
                    </div>
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-3">
                        <FolderOpen className="text-slate-600" size={32} />
                        <span className="text-xs font-black text-slate-400 uppercase">Processo Civil</span>
                    </div>
                    <div className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col gap-3">
                        <FolderOpen className="text-slate-600" size={32} />
                        <span className="text-xs font-black text-slate-400 uppercase">Jurisprudência</span>
                    </div>
                    <div className="p-4 bg-indigo-600/5 border border-indigo-500/20 rounded-2xl flex flex-col gap-3">
                        <FolderOpen className="text-indigo-500" size={32} />
                        <span className="text-xs font-black text-white uppercase">Mapas Mentais</span>
                    </div>
                </div>

                <div className="mt-8 p-4 bg-slate-900/50 rounded-2xl border border-dashed border-slate-800 flex items-center justify-center">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter italic">Acervo Organizado para Policiais e Jurídicos</p>
                </div>
            </div>
            
            {/* Overlay Info Card */}
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-2xl p-5 shadow-2xl hidden md:block animate-bounce shadow-black/50">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Star size={20} fill="currentColor" />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-slate-400 uppercase leading-none mb-1">Nota dos Alunos</p>
                        <p className="text-lg font-black text-slate-900 leading-none">Excelência 4.9</p>
                    </div>
                </div>
            </div>
          </div>
          
          {/* Background Glows */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-600/10 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-indigo-600/10 blur-[100px] rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
