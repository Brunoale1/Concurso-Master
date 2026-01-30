
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white mb-6">Quem usou, aprovou.</h3>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Junte-se a milhares de concurseiros que saíram da inércia e conquistaram a estabilidade financeira.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-slate-950 p-8 rounded-3xl border border-slate-800 shadow-xl relative group hover:border-blue-500/30 transition-all">
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-slate-700 group-hover:border-blue-500/50 transition-colors" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-blue-400 font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
