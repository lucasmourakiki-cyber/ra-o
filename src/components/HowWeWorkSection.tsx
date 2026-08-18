import React from 'react';
import { HOW_WE_WORK_STEPS, OFFICIAL_INFO } from '../data/primoraData';
import { Stethoscope, Compass, UserCheck, TrendingUp, MessageSquare } from 'lucide-react';

const STEP_ICONS = [Stethoscope, Compass, UserCheck, TrendingUp];

export const HowWeWorkSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0b0b0b] relative border-t border-white/[0.08] overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#9E2A2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>METODOLOGIA DE CAMPO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight leading-[1.02]">
              COMO <span className="text-[#9E2A2B]">TRABALHAMOS.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Processo estruturado em 4 etapas contínuas para identificar gargalos, formular dietas de precisão e acompanhar resultados no cocho.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {HOW_WE_WORK_STEPS.map((item, idx) => {
            const Icon = STEP_ICONS[idx] || TrendingUp;
            return (
              <div
                key={item.step}
                className="bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B]/50 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group relative"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-neutral-600 group-hover:text-[#9E2A2B] transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-sm bg-white/[0.04] group-hover:bg-[#9E2A2B]/15 border border-white/10 group-hover:border-[#9E2A2B]/30 flex items-center justify-center text-neutral-300 group-hover:text-[#9E2A2B] transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-heading font-black text-white uppercase tracking-wide mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Step Indicator */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 group-hover:text-[#9E2A2B] transition-colors">
                    Etapa {item.step} de 04
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="mt-12 text-center">
          <a
            href={OFFICIAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#9E2A2B] hover:bg-[#7F181B] text-white px-7 py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-lg shadow-[#9E2A2B]/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Agendar Diagnóstico Nutricional</span>
          </a>
        </div>

      </div>
    </section>
  );
};
