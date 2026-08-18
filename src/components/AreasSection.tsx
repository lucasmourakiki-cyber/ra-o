import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { ArrowUpRight } from 'lucide-react';

const AREAS = [
  {
    id: 'leite',
    title: 'BOVINOCULTURA DE LEITE',
    tag: 'Produção & Saúde Ruminal',
    description: 'Nutrição de alta densidade proteica e energética para vacas em lactação, período de transição e bezerras, promovendo mais litros no balde com sustentação de escore corporal.',
    image: OFFICIAL_ASSETS.bovinosCocho,
    alt: 'Bovinocultura de leite - Vacas leiteiras no cocho com Primora'
  },
  {
    id: 'corte',
    title: 'BOVINOCULTURA DE CORTE',
    tag: 'Desempenho & Ganho de Peso',
    description: 'Suplementação estratégica a pasto e formulações para confinamento focadas em conversão alimentar acelerada, acabamento uniforme de carcaça e redução do ciclo de produção.',
    image: OFFICIAL_ASSETS.vacaCampo,
    alt: 'Bovinocultura de corte - Gado em pastagem'
  },
  {
    id: 'agropecuaria',
    title: 'AGROPECUÁRIA',
    tag: 'Soluções Integradas',
    description: 'Fabricação própria de rações, suplementos minerais balanceados, núcleos e insumos agropecuários de qualidade com entrega ágil para Videira e região.',
    image: OFFICIAL_ASSETS.bovinosProducao,
    alt: 'Estrutura agropecuária e produção Primora'
  }
];

export const AreasSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] relative border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>ÁREAS DE ATUAÇÃO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight leading-[1.02]">
              SOLUÇÕES PARA DIFERENTES <br />
              <span className="text-[#9E2A2B]">REALIDADES DO CAMPO.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Estrutura e tecnologia dedicada para fornecer a nutrição correta para cada perfil e objetivo do produtor rural.
          </p>
        </div>

        {/* 3 Main Cinematic Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {AREAS.map((area) => (
            <div
              key={area.id}
              className="group relative rounded-sm overflow-hidden bg-[#141414] border border-white/[0.08] transition-all duration-500 hover:border-[#9E2A2B]/50 hover:shadow-2xl hover:shadow-[#9E2A2B]/10 flex flex-col justify-between"
            >
              {/* Image Container with Smooth Zoom */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-900">
                <img
                  src={area.image}
                  alt={area.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />
                
                {/* Floating Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-xs bg-[#080808]/85 backdrop-blur-md border border-white/[0.1] text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-300">
                    {area.tag}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wide group-hover:text-[#9E2A2B] transition-colors mb-3">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-300 group-hover:text-white transition-colors">
                    Fale com a Primora
                  </span>
                  <a
                    href={OFFICIAL_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-sm bg-white/[0.05] group-hover:bg-[#9E2A2B] text-white flex items-center justify-center transition-all"
                    aria-label={`Falar sobre ${area.title}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
