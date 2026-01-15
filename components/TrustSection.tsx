
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-semibold text-slate-900 mb-4 uppercase tracking-widest">Transparência e Confiança</h2>
          <p className="text-slate-500 font-light italic leading-relaxed mb-8">
            A MIMÓ Viagens é uma agência regularizada, atuando com curadoria, organização e compromisso em experiências internacionais, oferecendo segurança e suporte em todas as etapas da jornada.
          </p>
          <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-full border border-slate-200 shadow-sm">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Registro Cadastur</span>
            <span className="text-gold font-medium">42.906.291/0001-21</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
