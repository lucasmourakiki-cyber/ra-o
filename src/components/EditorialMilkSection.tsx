import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { ArrowRight, CheckCircle2, TrendingUp, DollarSign, ShieldAlert, Sparkles, Activity, PlusCircle } from 'lucide-react';

const TIMELINE_STEPS = [
  {
    tag: 'FASE 01',
    phase: 'PROBLEMA',
    title: 'Desafio no Campo',
    desc: 'Oscilações na oferta de forragem, estresse metabólico e dificuldade em sustentar picos de lactação sem perda de escore corporal.',
    icon: ShieldAlert,
    color: 'text-amber-500',
    border: 'border-amber-500/30'
  },
  {
    tag: 'FASE 02',
    phase: 'ESTRATÉGIA',
    title: 'Estratégia Nutricional',
    desc: 'Formulação de alta digestibilidade que equilibra a fermentação no rúmen e potencializa o aproveitamento dos volumosos.',
    icon: Sparkles,
    color: 'text-[#9E2A2B]',
    border: 'border-[#9E2A2B]/40'
  },
  {
    tag: 'FASE 03',
    phase: 'APLICAÇÃO',
    title: 'Manejo no Cocho',
    desc: 'Suplementação diária com excelente palatabilidade, garantindo consumo homogêneo em todo o lote de animais em lactação.',
    icon: Activity,
    color: 'text-blue-400',
    border: 'border-blue-400/30'
  },
  {
    tag: 'FASE 04',
    phase: 'RESULTADO',
    title: 'Resposta Produtiva',
    desc: 'Ganho comprovado de +3,3 litros por vaca/dia e +23% de aumento na produção de leite, mantendo a saúde do animal.',
    icon: PlusCircle,
    color: 'text-emerald-400',
    border: 'border-emerald-400/30'
  },
  {
    tag: 'FASE 05',
    phase: 'RETORNO',
    title: 'Retorno Financeiro',
    desc: 'Lucro líquido de R$ 3,25/dia por vaca após dedução do custo da nutrição, gerando R$ 8,28 em receita adicional diária.',
    icon: DollarSign,
    color: 'text-emerald-500',
    border: 'border-emerald-500/40'
  },
];

const PILLARS = [
  {
    id: 'equilibrio',
    title: 'Equilíbrio Ruminal',
    desc: 'Ambiente favorável para as bactérias do rúmen, prevenindo distúrbios digestivos e otimizando a fermentação.'
  },
  {
    id: 'forragem',
    title: 'Digestibilidade da Fibra',
    desc: 'Maximização do aproveitamento da matéria seca das pastagens e silagens fornecidas ao rebanho.'
  },
  {
    id: 'resposta',
    title: 'Resposta Produtiva',
    desc: 'Estímulo contínuo à síntese de leite sem exigir mobilização excessiva de reservas corporais da vaca.'
  },
  {
    id: 'saude',
    title: 'Sustentação do Escore',
    desc: 'Animais com condição corporal preservada, fertilidade em dia e maior longevidade no rebanho.'
  }
];

export const EditorialMilkSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#080808] relative overflow-hidden border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>EDITORIAL TÉCNICO & CASE</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-[1.02] mb-6">
              MAIS LEITE NO BALDE <br />
              <span className="text-[#9E2A2B]">COMEÇA NO COCHO.</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              A produtividade da vaca leiteira depende diretamente do que ela consome diariamente. O <strong className="text-white">Primora Lacta Protein</strong> atua de forma precisa na digestibilidade ruminal, convertendo nutrientes em volume de leite e sustentação corporal.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PILLARS.map((pillar) => (
                <div key={pillar.id} className="p-4 sm:p-5 rounded-sm bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B]/40 transition-colors">
                  <div className="text-sm font-heading font-black text-white uppercase tracking-wider mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#9E2A2B]" />
                    {pillar.title}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Photo on the right */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-sm overflow-hidden border border-white/[0.1] shadow-2xl relative group bg-[#111111]">
              <img
                src={OFFICIAL_ASSETS.bovinoManejo}
                alt="Vaca de leite em nutrição técnica no cocho - Primora"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-1">
                  MANEJO & EFICIÊNCIA
                </div>
                <div className="text-lg font-heading font-black text-white uppercase leading-snug">
                  Nutrição correta no cocho reflete diretamente no tanque de leite.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Narrative Visual: PROBLEMA -> ESTRATÉGIA -> APLICAÇÃO -> RESULTADO -> RETORNO */}
        <div className="pt-16 border-t border-white/[0.08] mb-20">
          <div className="max-w-3xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>LINHA DO TEMPO DO CASE</span>
            </div>
            <h3 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">
              NARRATIVA VISUAL: <span className="text-[#9E2A2B]">DO COCHO AO RETORNO.</span>
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Como a intervenção nutricional estruturada transforma desafios de manejo em lucratividade comprovada.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {TIMELINE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[#121212] border ${step.border} p-5 rounded-sm flex flex-col justify-between relative transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
                        {step.tag}
                      </span>
                      <Icon className={`w-4 h-4 ${step.color}`} />
                    </div>

                    <div className={`text-xs font-bold uppercase tracking-wider ${step.color} mb-1`}>
                      {step.phase}
                    </div>

                    <h4 className="text-base font-heading font-black text-white uppercase tracking-wide mb-2">
                      {step.title}
                    </h4>

                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {idx < TIMELINE_STEPS.length - 1 && (
                    <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 text-neutral-600">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 14: Retorno do Investimento */}
        <div className="pt-16 border-t border-white/[0.08]">
          <div className="bg-[#121212] border border-[#9E2A2B]/30 rounded-sm p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#9E2A2B] text-white text-[10px] font-bold uppercase tracking-[0.16em] mb-4">
                  COMPROVAÇÃO ECONÔMICA
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-4">
                  O RETORNO SOBRE O <br />
                  <span className="text-[#9E2A2B]">INVESTIMENTO É REAL.</span>
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6">
                  A demonstração financeira aponta que cada centavo investido em nutrição estratégica retorna multiplicado no faturamento de leite entregue.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-sm bg-black/40 border border-white/[0.08]">
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Custo do Suplemento</div>
                    <div className="text-2xl font-heading font-black text-white">R$ 5,03</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">/ dia por vaca</div>
                  </div>
                  <div className="p-4 rounded-sm bg-black/40 border border-white/[0.08]">
                    <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-1">Receita Adicional</div>
                    <div className="text-2xl font-heading font-black text-white">R$ 8,28</div>
                    <div className="text-[10px] text-neutral-500 mt-0.5">/ dia por vaca</div>
                  </div>
                  <div className="p-4 rounded-sm bg-[#9E2A2B]/15 border border-[#9E2A2B]/40">
                    <div className="text-[10px] font-bold text-[#9E2A2B] uppercase tracking-wider mb-1">Lucro Líquido</div>
                    <div className="text-2xl font-heading font-black text-[#9E2A2B]">R$ 3,25</div>
                    <div className="text-[10px] text-neutral-300 mt-0.5">/ dia por vaca</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-end text-center lg:text-right">
                <p className="text-xs text-neutral-400 mb-6 max-w-sm">
                  Solicite um diagnóstico nutricional para o seu rebanho e comprove a rentabilidade no cocho.
                </p>
                <a
                  href={OFFICIAL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-[#9E2A2B] hover:bg-[#7F181B] text-white py-4 px-8 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-xl shadow-[#9E2A2B]/20"
                >
                  <span>Falar com a Primora</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
