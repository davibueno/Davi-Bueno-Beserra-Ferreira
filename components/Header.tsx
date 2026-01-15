
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="text-2xl font-light tracking-widest text-slate-800">
            MIMÓ <span className="text-gold font-medium">VIAGENS</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-slate-600">
          <a href="#experiencia" className="hover:text-gold transition-colors">A Experiência</a>
          <a href="#roteiro" className="hover:text-gold transition-colors">Roteiro</a>
          <a href="#investimento" className="hover:text-gold transition-colors">Investimento</a>
        </nav>
        <a 
          href="#contato" 
          className="bg-gold text-white px-6 py-2.5 text-xs font-semibold uppercase tracking-widest hover:bg-[#b88b4d] transition-all rounded-sm shadow-sm"
        >
          Reservar
        </a>
      </div>
    </header>
  );
};

export default Header;
