
import React from 'react';
import { ItineraryDay } from '../types';

const itineraryData: ItineraryDay[] = [
  {
    day: "1º DIA",
    date: "26/09 Sábado",
    location: "Brasil",
    title: "Embarque",
    description: "Encontro com a equipe MIMÓ Viagens no Aeroporto de Guarulhos para embarque com destino à Turquia.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800",
    region: "Brasil"
  },
  {
    day: "2º DIA",
    date: "27/09 Domingo",
    location: "Capadócia",
    title: "Chegada",
    description: "Chegada na Turquia e traslado privativo para a Capadócia. Check in no hotel, acomodação e descanso.",
    image: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?auto=format&fit=crop&q=80&w=800",
    region: "Capadócia"
  },
  {
    day: "3º DIA",
    date: "28/09 Segunda",
    location: "Capadócia",
    title: "Vales e Tradições",
    description: "Opcional de voo de balão ao amanhecer. Tour pelo Museu a Céu Aberto de Goreme (UNESCO), vilas históricas e paradas para contemplação. Visita à Vila de Avanos, famosa pelas cerâmicas turcas.",
    image: "https://images.unsplash.com/photo-1518116391443-4f901297f6c3?auto=format&fit=crop&q=80&w=800",
    region: "Capadócia"
  },
  {
    day: "4º DIA",
    date: "29/09 Terça",
    location: "Capadócia",
    title: "Cidade Subterrânea e Jeep Safari",
    description: "Visita a uma Cidade Subterrânea, Ihlara Valley e Árvore dos Desejos. À tarde, Jeep Safari pelos vales com encerramento ao pôr do sol no Vale Vermelho.",
    image: "https://images.unsplash.com/photo-1541432901912-2d8363ef3075?auto=format&fit=crop&q=80&w=800",
    region: "Capadócia"
  },
  {
    day: "5º DIA",
    date: "30/09 Quarta",
    location: "Capadócia → Istambul",
    title: "Voo para a Capital das Civilizações",
    description: "Manhã livre. Traslado ao aeroporto para voo interno até Istambul. Check-in e tarde livre na região de Sultanahmet.",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=800",
    region: "Istambul"
  },
  {
    day: "6º DIA",
    date: "01/10 Quinta",
    location: "Istambul",
    title: "O Coração de Istambul",
    description: "Walking tour privativo: Mesquita Santa Sofia, Mesquita Azul, Hipódromo Romano e Palácio Topkapi. Ingressos inclusos.",
    image: "https://images.unsplash.com/photo-1544654803-b69110bb8154?auto=format&fit=crop&q=80&w=800",
    region: "Istambul"
  },
  {
    day: "7º DIA",
    date: "02/10 Sexta",
    location: "Istambul",
    title: "Cisterna e Pôr do sol no Bósforo",
    description: "Visita à Cisterna Basílica, Grand Bazaar e Bazar Egípcio. Encerramento com passeio de Yacht privativo pelo Bósforo entre os dois continentes.",
    image: "https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&q=80&w=800",
    region: "Istambul"
  },
  {
    day: "8º DIA",
    date: "03/10 Sábado",
    location: "Istambul",
    title: "Lado Asiático e Balat",
    description: "Tour pelos bairros históricos de Balat e pelo lado asiático. Vivência do cotidiano local fora do circuito tradicional.",
    image: "https://images.unsplash.com/photo-1512148154611-664448514930?auto=format&fit=crop&q=80&w=800",
    region: "Istambul"
  },
  {
    day: "9º DIA",
    date: "04/10 Domingo",
    location: "Istambul → Bodrum",
    title: "Paraíso Egeu",
    description: "Traslado ao aeroporto para voo até Bodrum. Check-in em hotel boutique e acomodação para descanso.",
    image: "https://images.unsplash.com/photo-1581452140447-987cc7287955?auto=format&fit=crop&q=80&w=800",
    region: "Bodrum"
  },
  {
    day: "10º DIA",
    date: "05/10 Segunda",
    location: "Bodrum",
    title: "Dia Livre na Marina",
    description: "Dia livre para explorar o centrinho de Bodrum, lojas exclusivas e gastronomia à beira mar.",
    image: "https://images.unsplash.com/photo-1588653903107-f38379468516?auto=format&fit=crop&q=80&w=800",
    region: "Bodrum"
  },
  {
    day: "11º DIA",
    date: "06/10 Terça",
    location: "Bodrum",
    title: "Navegação Gulet",
    description: "Passeio de barco gulet privativo pela Baía de Bodrum no Mar Egeu, com almoço incluso a bordo.",
    image: "https://images.unsplash.com/photo-1590480394626-820d5c215870?auto=format&fit=crop&q=80&w=800",
    region: "Bodrum"
  },
  {
    day: "12º DIA",
    date: "07/10 Quarta",
    location: "Bodrum",
    title: "Contemplação ou História",
    description: "Dia livre. Opcionais de bate-volta à Ilha de Kos (Grécia) ou Éfeso e Casa de Maria.",
    image: "https://images.unsplash.com/photo-1590480394626-820d5c215870?auto=format&fit=crop&q=80&w=800",
    region: "Bodrum"
  },
  {
    day: "13º DIA",
    date: "08/10 Quinta",
    location: "Bodrum → Brasil",
    title: "Retorno",
    description: "Traslado ao aeroporto para voo de retorno ao Brasil via Istambul. Fim da experiência MIMÓ.",
    image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?auto=format&fit=crop&q=80&w=800",
    region: "Brasil"
  }
];

const Itinerary: React.FC = () => {
  return (
    <section id="roteiro" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-4 italic">
            Veja o roteiro completo da experiência Turquia 2026
          </h2>
          <div className="flex flex-col items-center gap-2">
            <p className="text-lg text-slate-500 font-medium">Período: 26 de setembro a 08 de outubro de 2026</p>
            <p className="text-sm text-gold tracking-widest uppercase font-semibold">Com acompanhamento em português</p>
            <div className="w-16 h-1 bg-gold mt-4"></div>
          </div>
        </div>

        <div className="space-y-24">
          {itineraryData.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}
            >
              {/* Image Container */}
              <div className="w-full lg:w-1/2 overflow-hidden rounded-sm shadow-xl aspect-video lg:aspect-square relative group">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 text-xs font-bold tracking-widest uppercase text-slate-900">
                  {item.region}
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-light text-soft-pink">{item.day}</span>
                  <div className="h-[1px] w-12 bg-slate-300"></div>
                  <span className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{item.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">{item.title}</h3>
                <p className="text-slate-600 text-lg leading-relaxed font-light mb-8 italic">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-gold font-semibold text-xs tracking-widest uppercase">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {item.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
