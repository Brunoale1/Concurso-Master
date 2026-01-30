
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AcervoContent from './components/AcervoContent';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import CountdownTimer from './components/CountdownTimer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-10 sm:pt-8">
      <CountdownTimer />
      <Navbar />
      <main>
        <Hero />
        
        {/* Social Proof Bar */}
        <div className="bg-blue-600 py-12 relative overflow-hidden shadow-2xl shadow-blue-900/40">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white relative z-10">
            <div>
              <p className="text-4xl font-black mb-1">15k+</p>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Materiais de Estudo</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-1">5k+</p>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Mapas Mentais</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-1">50k+</p>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Questões</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-1">4.5k+</p>
              <p className="text-blue-100 text-sm font-bold uppercase tracking-widest">Alunos Aprovados</p>
            </div>
          </div>
          {/* Subtle bg patterns */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-32 h-32 border-4 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 border-8 border-white rounded-full translate-x-1/2 translate-y-1/2"></div>
          </div>
        </div>

        <Features />
        
        {/* NEW SECTION: What's in the Library */}
        <AcervoContent />

        <Testimonials />
        <Pricing />
        
        {/* Call to Action Banner */}
        <section className="py-24 bg-slate-900 relative overflow-hidden border-t border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-4xl lg:text-6xl font-black text-white mb-8 leading-tight">
              Sua vaga não vai esperar. <br/> <span className="text-blue-500">Comece hoje mesmo.</span>
            </h3>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Garanta acesso imediato ao acervo mais completo de conteúdos do Brasil. Pare de perder tempo com material desorganizado.
            </p>
            <a href="#precos" className="inline-block px-12 py-5 bg-blue-600 text-white rounded-2xl font-black text-xl hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/30 hover:scale-105 active:scale-95">
              QUERO MINHA APROVAÇÃO AGORA
            </a>
          </div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        </section>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
