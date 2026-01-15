
import React from 'react';

const features = [
  {
    title: "Roteiro Curado",
    description: "Conectando três regiões únicas, revelando uma Turquia rica em história e energia contemporânea.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "Hospedagem Premium",
    description: "Hotéis 4 superior, 5 estrelas e boutique com localização privilegiada e conforto elevado.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Traslados Privativos",
    description: "Transporte terrestre exclusivo e seguro entre aeroportos, hotéis e todos os passeios.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    )
  },
  {
    title: "Guias Especializados",
    description: "Acompanhamento local em português na Capadócia e Istambul para vivências profundas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    )
  },
  {
    title: "Grupos Exclusivos",
    description: "Poucas pessoas no grupo, garantindo uma experiência fluida, personalizada e íntima.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Suporte Contínuo",
    description: "Atenção a cada detalhe durante toda a jornada, cuidando da sua tranquilidade.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section id="experiencia" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative background texture */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" className="text-gold" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-gold text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Diferenciais Mimó</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-8 leading-tight">
            O que torna a experiência da <span className="font-semibold text-gold">MIMÓ VIAGENS</span> na Turquia verdadeiramente <span className="italic">especial</span>
          </h2>
          <div className="w-24 h-0.5 bg-soft-pink mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, idx) => (
            <div key={idx} className="group relative">
              {/* Card Decoration */}
              <div className="absolute -inset-4 bg-slate-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100 -z-10"></div>
              
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Icon Container */}
                <div className="mb-8 relative">
                   <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-all duration-500">
                    {feature.icon}
                   </div>
                   <div className="absolute -top-2 -right-2 text-[10px] font-bold text-soft-pink/40 tracking-widest uppercase">
                    Exclusivo
                   </div>
                </div>

                <h3 className="text-xl font-semibold uppercase tracking-widest text-slate-800 mb-4 transition-colors group-hover:text-gold">
                  {feature.title}
                </h3>
                <div className="w-8 h-[1px] bg-gold/30 mb-4 lg:mx-0 mx-auto group-hover:w-16 transition-all duration-500"></div>
                <p className="text-slate-500 leading-relaxed font-light italic text-base max-w-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing CTA or Visual detail */}
        <div className="mt-24 text-center">
           <p className="text-slate-400 font-light text-sm tracking-widest uppercase">Curadoria • Segurança • Exclusividade</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
