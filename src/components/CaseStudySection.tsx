import React from 'react';
import { CASE_CARDS, OFFICIAL_INFO } from '../data/primoraData';
import { CheckCircle2, TrendingUp, Sparkles, MessageSquare, DollarSign } from 'lucide-react';

export const CaseStudySection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0c0c0c] relative border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Case Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ESTUDO DE CASO OFICIAL</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-[1.02]">
            RESPOSTA COMPROVADA COM <br />
            <span className="text-[#9E2A2B]">PRIMORA LACTA PROTEIN.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed">
            Apresentação técnica da resposta produtiva e econômica aferida em rebanho leiteiro na região de Videira - SC.
          </p>
        </div>

        {/* Case Study Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Key Pillars & Financial Gain */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/[0.08] rounded-sm p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-[#9E2A2B] text-white text-[10px] font-bold uppercase tracking-[0.16em] mb-4">
                RETORNO ECONÔMICO
              </div>

              <h3 className="text-2xl sm:text-4xl font-heading font-black text-white uppercase tracking-wide mb-4">
                MAIS PRODUÇÃO. <br />
                <span className="text-[#9E2A2B]">MAIS RENTABILIDADE.</span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-8">
                A nutrição animal não deve ser encarada como custo, mas como motor de faturamento. O uso do suplemento demonstrou superação do ponto de equilíbrio com ampla folga na relação custo-benefício.
              </p>

              {/* Highlight Financial Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="p-5 rounded-sm bg-[#1c1c1c] border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-[#9E2A2B] mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Lucro Líquido Adicional</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-black text-white">
                    R$ 3,25 <span className="text-xs text-neutral-400 font-sans">/ dia por vaca</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-2">
                    Margem real descontando o investimento em nutrição.
                  </p>
                </div>

                <div className="p-5 rounded-sm bg-[#1c1c1c] border border-white/[0.08]">
                  <div className="flex items-center gap-2 text-[#9E2A2B] mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">Receita Bruta Adicional</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-heading font-black text-white">
                    R$ 8,28 <span className="text-xs text-neutral-400 font-sans">/ dia por vaca</span>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-2">
                    Faturamento diário extra obtido no leite entregue.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom summary note */}
            <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
              <span className="font-semibold text-neutral-300">Base da Avaliação:</span>
              <span>30 Vacas Leiteiras Acompanhadas</span>
            </div>
          </div>

          {/* Right Column: Resposta em Condições Desafiadoras */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/[0.08] rounded-sm p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-xs bg-white/[0.08] text-neutral-300 text-[10px] font-bold uppercase tracking-[0.16em] mb-4">
                RESILIÊNCIA EM CAMPO
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-wide mb-4">
                EFICIÊNCIA MESMO EM <br />
                <span className="text-[#9E2A2B]">CONDIÇÕES DESAFIADORAS.</span>
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                A estabilidade produtiva foi confirmada mesmo diante de fatores limitantes comumente encontrados na rotina das fazendas:
              </p>

              {/* Challenge items */}
              <div className="space-y-3.5 mb-8">
                {[
                  { title: 'Baixa oferta de pastagem', desc: 'Sustentação de volume mesmo com escassez de forragem verde.' },
                  { title: 'Vacas mais idosas no lote', desc: 'Manutenção de apetite e curva de lactação estável.' },
                  { title: 'Desafios de imunidade', desc: 'Aporte de microminerais auxiliando a saúde geral do animal.' },
                  { title: 'Estabilidade da resposta', desc: 'Segurança produtiva sem picos ou oscilações indesejadas.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#9E2A2B]/15 text-[#9E2A2B] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white uppercase">{item.title}</div>
                      <div className="text-xs text-neutral-400">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/[0.06]">
              <a
                href={OFFICIAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-[#9E2A2B] text-white py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.14em] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Conversar sobre Lacta Protein</span>
              </a>
            </div>
          </div>

        </div>

        {/* 3 Real Case Statements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASE_CARDS.map((item) => (
            <div
              key={item.id}
              className="bg-[#101010] border border-white/[0.08] hover:border-[#9E2A2B]/40 rounded-sm p-7 transition-all duration-300 group"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-3">
                {item.tag}
              </div>
              <h4 className="text-lg sm:text-xl font-heading font-black text-white uppercase leading-snug group-hover:text-[#9E2A2B] transition-colors mb-3">
                "{item.title}"
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
