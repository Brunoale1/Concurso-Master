
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: "O acesso é realmente vitalício?",
    a: "Sim! Você paga apenas uma vez e tem acesso a todo o conteúdo para sempre, inclusive às futuras atualizações."
  },
  {
    q: "Posso baixar os materiais?",
    a: "Com certeza. Todos os materiais de estudo, mapas mentais e simulados estão liberados para download em seu computador, tablet ou celular."
  },
  {
    q: "Os conteúdos servem para qual concurso?",
    a: "Nosso acervo é transversal, cobrindo as principais matérias cobradas em tribunais, carreiras policiais, administrativas e fiscais."
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de login para nossa plataforma exclusiva."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-extrabold text-white mb-4">Dúvidas Frequentes</h3>
          <p className="text-slate-400">Ainda tem alguma dúvida? Talvez ela esteja aqui.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-lg transition-all">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-900 transition-colors"
              >
                <span className="font-bold text-slate-200">{faq.q}</span>
                {openIndex === idx ? <Minus size={20} className="text-blue-500" /> : <Plus size={20} className="text-slate-600" />}
              </button>
              {openIndex === idx && (
                <div className="p-6 pt-0 text-slate-400 border-t border-slate-900 animate-fadeIn">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
