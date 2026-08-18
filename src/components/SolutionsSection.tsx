import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { MessageSquare, ArrowRight, Milk, Beef } from 'lucide-react';

export const SolutionsSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 sm:py-28 bg-[#080808] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#9E2A2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
            <span>SOLUÇÕES PRIMORA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-[1.02]">
            SOLUÇÕES PARA CADA <br />
            <span className="text-[#9E2A2B]">DESAFIO DO CAMPO.</span>
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Soluções completas e estruturadas para atender às exigências de produtividade, conversão e rentabilidade da bovinocultura no campo.
          </p>
        </div>

        {/* Two Grand Editorial Cards: Bovinocultura de Leite & Bovinocultura de Corte */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Bovinocultura de Leite */}
          <div className="group relative rounded-sm overflow-hidden bg-[#111111] border border-white/[0.08] hover:border-[#9E2A2B]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9E2A2B]/15 flex flex-col justify-between">
            {/* Image Container with Smooth Zoom */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
              <img
                src={OFFICIAL_ASSETS.bovinosCocho}
                alt="Bovinocultura de Leite - Primora Nutrição Animal"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Badge & Icon */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#9E2A2B]">
                  <Milk className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-xs bg-black/80 backdrop-blur-md text-white border border-white/15">
                  Alta Lactação & Saúde
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-wide group-hover:text-[#9E2A2B] transition-colors mb-4">
                  BOVINOCULTURA DE LEITE
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  Soluções nutricionais de alta densidade energética e proteica para vacas em lactação, período de transição e bezerras. Foco em estabilidade ruminal, aumento sustentado de litros por vaca/dia e manutenção do escore corporal.
                </p>
                <div className="space-y-2 mb-8 text-xs sm:text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                    <span>Estabilidade do pH ruminal e prevenção de acidose</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                    <span>Aumento comprovado na média diária de litros no tanque</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                    <span>Sustentação do pico e persistência da lactação</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href={OFFICIAL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white group-hover:text-[#9E2A2B] transition-colors"
                >
                  <span>Conhecer Soluções de Leite</span>
                  <ArrowRight className="w-4 h-4 text-[#9E2A2B] transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Bovinocultura de Corte */}
          <div className="group relative rounded-sm overflow-hidden bg-[#111111] border border-white/[0.08] hover:border-[#9E2A2B]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9E2A2B]/15 flex flex-col justify-between">
            {/* Image Container with Smooth Zoom */}
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
              <img
                src={OFFICIAL_ASSETS.vacaCampo}
                alt="Bovinocultura de Corte - Primora Nutrição Animal"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
              
              {/* Badge & Icon */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                <div className="w-11 h-11 rounded-sm bg-black/80 backdrop-blur-md border border-white/15 flex items-center justify-center text-[#9E2A2B]">
                  <Beef className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-xs bg-black/80 backdrop-blur-md text-white border border-white/15">
                  Ganho Diário & Conversão
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-wide group-hover:text-[#9E2A2B] transition-colors mb-4">
                  BOVINOCULTURA DE CORTE
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  Estratégias de suplementação a pasto e formulações para confinamento com foco em ganho médio diário acelerado (GMD), melhoria da conversão alimentar, terminação uniforme de carcaça e redução do ciclo de produção.
                </p>
                <div className="space-y-2 mb-8 text-xs sm:text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                    <span>Aproveitamento máximo da forragem em todas as estações</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                    <span>Ganho de peso rápido com acabamento padronizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
                    <span>Suplementos minerais e proteicos de alta biodisponibilidade</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href={OFFICIAL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-white group-hover:text-[#9E2A2B] transition-colors"
                >
                  <span>Conhecer Soluções de Corte</span>
                  <ArrowRight className="w-4 h-4 text-[#9E2A2B] transition-transform duration-300 group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Technical Callout Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-sm bg-[#111111] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-1">
              CONSULTORIA NUTRICIONAL NO COCHO
            </div>
            <h4 className="text-lg sm:text-xl font-heading font-black text-white uppercase">
              Deseja uma recomendação técnica personalizada para a sua fazenda?
            </h4>
            <p className="text-xs text-neutral-400 mt-1">
              Nossa equipe técnica atua no campo para formular dietas ajustadas à forragem e metas do seu lote.
            </p>
          </div>

          <a
            href={OFFICIAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2.5 bg-[#9E2A2B] hover:bg-[#7F181B] text-white px-6 py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg shadow-[#9E2A2B]/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Nutricionista</span>
          </a>
        </div>

      </div>
    </section>
  );
};
