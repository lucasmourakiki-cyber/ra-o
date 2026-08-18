import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { CheckCircle2, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="a-primora" className="py-20 sm:py-28 bg-[#080808] relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#9E2A2B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/40 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Institutional Text */}
          <div className="lg:col-span-7 flex flex-col">
            {/* Tag / Eyebrow */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>A PRIMORA</span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-[1.02] mb-4">
              NUTRIÇÃO ANIMAL <br />
              <span className="text-[#9E2A2B]">COM VISÃO DE CAMPO.</span>
            </h2>

            {/* Decorative Red Line */}
            <div className="w-20 h-1 bg-[#9E2A2B] rounded-full mb-6" />

            {/* Body Copy */}
            <div className="space-y-4 text-neutral-300 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                A <strong className="text-white font-semibold">Primora Nutrição Animal</strong> atua no desenvolvimento e fornecimento de soluções voltadas à nutrição animal, com foco na bovinocultura de corte e leite, sempre próxima da realidade do produtor rural.
              </p>
              <p className="text-neutral-300">
                A empresa trabalha com a fabricação de rações, suplementos minerais e soluções nutricionais formuladas para maximizar o desempenho, a saúde ruminal e a rentabilidade do rebanho no campo, conectando nutrição, manejo e eficiência produtiva.
              </p>
            </div>

            {/* 4 Official Visual Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {[
                { title: 'NUTRIÇÃO ANIMAL APLICADA', desc: 'Formulações de alta precisão e digestibilidade' },
                { title: 'BOVINOCULTURA DE CORTE', desc: 'Ganho de peso diário e conversão alimentar' },
                { title: 'BOVINOCULTURA DE LEITE', desc: 'Produção sustentada, escore corporal e sanidade' },
                { title: 'FOCO EM RESULTADOS', desc: 'Aumento consistente no balde e rentabilidade real' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-sm bg-white/[0.03] border border-white/[0.08] hover:border-[#9E2A2B]/40 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#9E2A2B] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-white">{item.title}</div>
                    <div className="text-xs text-neutral-400 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Regional Badge & Quick Contact */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#9E2A2B]" />
                <span>Videira - SC e Região</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#9E2A2B]" />
                <a href={OFFICIAL_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9E2A2B] font-semibold transition-colors">
                  {OFFICIAL_INFO.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Real Photography Presentation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-sm overflow-hidden border border-white/[0.1] bg-[#111111] shadow-2xl group">
              {/* Main Photo: High Quality Cattle / Farming */}
              <div className="aspect-[4/5] w-full overflow-hidden bg-neutral-900">
                <img
                  src={OFFICIAL_ASSETS.bovinosProducao}
                  alt="Rebanho bovino em manejo no campo - Primora Nutrição Animal"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Photo Overlay Badge */}
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent">
                <div className="inline-block px-2.5 py-1 bg-[#9E2A2B] text-white text-[10px] font-bold uppercase tracking-[0.2em] mb-2 rounded-xs">
                  NUTRIÇÃO & AGROPECUÁRIA
                </div>
                <h3 className="text-lg font-heading font-bold text-white uppercase tracking-wide">
                  COMPROMISSO COM O PRODUTOR
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Soluções técnicas desenhadas para as exigências reais do cocho e da pastagem.
                </p>
              </div>
            </div>

            {/* Floating Metric Card */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-4 bg-[#111111]/95 backdrop-blur-md border border-white/[0.12] p-4 rounded-sm shadow-2xl">
              <div className="w-10 h-10 rounded-sm bg-[#9E2A2B] flex items-center justify-center flex-shrink-0 text-white">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">Foco Primora</div>
                <div className="text-sm font-bold text-white uppercase">Eficiência & Rentabilidade</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
