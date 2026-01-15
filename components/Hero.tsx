
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541432901912-2d8363ef3075?auto=format&fit=crop&q=80&w=2000" 
          alt="Balões na Capadócia ao amanhecer" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
            Viva a Turquia por meio de <span className="font-semibold italic">paisagens milenares</span> onde história e cultura se revelam.
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-light mb-10 leading-relaxed max-w-2xl">
            Capadócia, Istambul e Bodrum em um roteiro cuidadosamente planejado que equilibra contemplação, conhecimento e experiências exclusivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#roteiro" 
              className="bg-gold text-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#b88b4d] transition-all text-center rounded-sm"
            >
              Verificar Roteiro Completo
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/60 text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-white/30"></div>
      </div>
    </section>
  );
};

export default Hero;
