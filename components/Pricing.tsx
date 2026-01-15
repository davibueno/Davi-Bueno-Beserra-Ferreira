
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="investimento" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm uppercase tracking-[0.3em] text-gold font-bold mb-6">Investimento</h2>
          <div className="mb-12">
            <span className="text-slate-400 text-lg font-light">A partir de</span>
            <div className="text-6xl md:text-8xl font-light text-white my-4">EUR 4.145,00</div>
            <p className="text-slate-400 font-light italic max-w-lg mx-auto leading-relaxed">
              Valor por pessoa em quarto duplo, acrescido do valor do aéreo internacional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-2xl mx-auto border-t border-white/10 pt-12">
            <div>
              <h4 className="text-gold font-semibold uppercase text-xs tracking-widest mb-4">Formas de Pagamento</h4>
              <p className="text-white/80 font-light leading-relaxed">
                Parcelamento disponível conforme período de início dos pagamentos.
              </p>
            </div>
            <div>
              <h4 className="text-gold font-semibold uppercase text-xs tracking-widest mb-4">Observações</h4>
              <p className="text-white/80 font-light leading-relaxed">
                Condições sujeitas à variação cambial e disponibilidade no momento da reserva.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <a 
              href="#contato" 
              className="inline-block border-2 border-gold text-gold px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-gold hover:text-white transition-all rounded-sm"
            >
              Consultar Disponibilidade
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
