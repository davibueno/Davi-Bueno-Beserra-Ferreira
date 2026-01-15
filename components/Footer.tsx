
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-16 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="text-2xl font-light tracking-widest text-slate-800 mb-4">
              MIMÓ <span className="text-gold font-medium">VIAGENS</span>
            </div>
            <p className="text-slate-400 text-xs font-light tracking-wide">© 2024 Mimó Viagens. Todos os direitos reservados.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-slate-900 font-bold mb-4">Contato</h4>
              <ul className="text-slate-500 text-sm font-light space-y-2">
                <li><a href="https://wa.me/5521969933867" className="hover:text-gold transition-colors">WhatsApp: (21) 969933867</a></li>
                <li>Email: contato@mimoviagens.com.br</li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-slate-900 font-bold mb-4">Social</h4>
              <ul className="text-slate-500 text-sm font-light space-y-2">
                <li><a href="https://instagram.com/mimo_viagens" target="_blank" rel="noopener" className="hover:text-gold transition-colors">Instagram: @mimo_viagens</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-slate-900 font-bold mb-4">Legal</h4>
              <ul className="text-slate-500 text-sm font-light space-y-2">
                <li>CNPJ: 42.906.291/0001-21</li>
                <li>Cadastur: Ativo</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
