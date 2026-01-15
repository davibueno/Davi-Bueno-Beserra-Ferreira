
import React from 'react';

const inclusions = [
  "Passagens aéreas internacionais ida e volta (sujeitas a alteração)",
  "Voos internos na Turquia",
  "Traslados privativos aeroporto-hotel-aeroporto em todos os destinos",
  "Hospedagem em hotéis 4 superior, 5 estrelas e boutique",
  "Guias em português na Capadócia e em Istambul",
  "Ingressos para todos os locais visitados previstos no roteiro",
  "Passeio de Yacht privativo em Istambul",
  "Passeio de Jeep Safari na Capadócia",
  "Passeio de barco privativo em Bodrum com almoço incluso",
  "Seguro viagem internacional",
  "Acompanhante MIMÓ Viagens desde o Brasil"
];

const exclusions = [
  "Passeio de balão na Capadócia",
  "Almoços e jantares não mencionados no roteiro",
  "Passeios e atividades opcionais",
  "Gorjetas",
  "Despesas pessoais como bebidas e lavanderia",
  "Custos com emissão ou renovação de passaporte"
];

const InclusionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* O que está incluso */}
          <div className="p-10 border border-slate-100 bg-slate-50/50 rounded-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-gold/10 text-gold flex items-center justify-center text-sm">✓</span>
              O que está incluso nesta experiência
            </h2>
            <ul className="space-y-4">
              {inclusions.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-600 font-light items-start">
                  <span className="text-gold mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* O que não está incluso */}
          <div className="p-10 border border-slate-100 rounded-sm">
            <h2 className="text-2xl font-semibold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-soft-pink/10 text-soft-pink flex items-center justify-center text-sm">×</span>
              O que não está incluso
            </h2>
            <ul className="space-y-4">
              {exclusions.map((item, idx) => (
                <li key={idx} className="flex gap-3 text-slate-400 font-light items-start">
                  <span className="text-soft-pink mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InclusionSection;
