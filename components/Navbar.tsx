
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
            <span className="text-white font-black text-xl">CM</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-white">ConcursoMaster</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-400">
          <a href="#beneficios" className="hover:text-blue-400 transition-colors">Benefícios</a>
          <a href="#conteudo" className="hover:text-blue-400 transition-colors">Conteúdo</a>
          <a href="#depoimentos" className="hover:text-blue-400 transition-colors">Depoimentos</a>
          <a href="#precos" className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-lg hover:shadow-blue-500/30">
            Garantir Minha Vaga
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
