
import React from 'react';
import { Mail, Phone, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">CM</span>
              </div>
              <span className="font-bold text-xl">ConcursoMaster</span>
            </div>
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
              Nossa missão é democratizar a aprovação em concursos públicos através de materiais de alta qualidade e preço acessível. Juntos rumo à posse!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-800"><Youtube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-slate-200">Links Úteis</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#beneficios" className="hover:text-blue-400 transition-colors">Benefícios</a></li>
              <li><a href="#precos" className="hover:text-blue-400 transition-colors">Planos</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacidade</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-slate-200">Suporte</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center gap-3"><Mail size={18} className="text-blue-500" /> suporte@concursomaster.com.br</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-blue-500" /> (11) 99999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} ConcursoMaster - CNPJ 00.000.000/0000-00. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
