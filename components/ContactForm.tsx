
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    pessoas: '1'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pelo interesse! Nossa equipe entrará em contato em breve.");
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-sm overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Sidebar visual */}
          <div className="md:w-1/3 bg-gold p-12 text-white flex flex-col justify-between relative overflow-hidden">
             <div className="z-10">
               <h3 className="text-2xl font-light mb-4">Próximo passo</h3>
               <p className="text-white/80 font-light italic text-sm">Estamos ansiosos para planejar cada detalhe da sua jornada pela Turquia.</p>
             </div>
             <div className="mt-12 z-10">
               <div className="text-xs uppercase tracking-widest opacity-60 mb-2">Datas da Viagem</div>
               <div className="font-medium">Setembro de 2026</div>
             </div>
             {/* Simple graphic */}
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full"></div>
          </div>

          {/* Form */}
          <div className="md:w-2/3 p-12">
            <div className="mb-10">
              <h2 className="text-3xl font-light text-slate-900 mb-2">Garanta seu lugar</h2>
              <p className="text-slate-500 font-light">Preencha o formulário abaixo e receba o contato da nossa equipe especializada.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">Nome Completo</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 focus:border-gold outline-none transition-all rounded-sm font-light"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">E-mail</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 focus:border-gold outline-none transition-all rounded-sm font-light"
                    placeholder="exemplo@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 focus:border-gold outline-none transition-all rounded-sm font-light"
                    placeholder="(00) 00000-0000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-slate-400 mb-2 font-bold">Total de Pessoas</label>
                  <select 
                    className="w-full bg-white border border-slate-200 px-4 py-3 text-slate-800 focus:border-gold outline-none transition-all rounded-sm font-light appearance-none"
                    value={formData.pessoas}
                    onChange={(e) => setFormData({...formData, pessoas: e.target.value})}
                  >
                    <option value="1">01 Pessoa</option>
                    <option value="2">02 Pessoas</option>
                    <option value="3">03 Pessoas</option>
                    <option value="4+">04 ou mais pessoas</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-gold text-white py-5 text-sm font-bold uppercase tracking-[0.3em] hover:bg-[#b88b4d] transition-all rounded-sm mt-4 shadow-lg"
              >
                Quero Reservar Minha Vaga
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
