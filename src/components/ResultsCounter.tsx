import React, { useState, useEffect, useRef } from 'react';
import { PILOT_STATS, OFFICIAL_INFO } from '../data/primoraData';
import { MessageSquare, AlertCircle } from 'lucide-react';

interface AnimatedNumberProps {
  value: number;
  decimal?: number;
  prefix?: string;
  suffix?: string;
  hasTriggered: boolean;
  highlight?: boolean;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({
  value,
  decimal = 0,
  prefix = '',
  suffix = '',
  hasTriggered,
  highlight = false,
}) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!hasTriggered) return;

    let startTimestamp: number | null = null;
    const duration = 1600; // 1.6 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const val = easeOut * value;
      setCurrentValue(val);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCurrentValue(value);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasTriggered, value]);

  const formatted = decimal > 0 
    ? currentValue.toFixed(decimal).replace('.', ',') 
    : Math.floor(currentValue).toString();

  return (
    <div className="flex items-baseline flex-wrap gap-x-1.5 gap-y-0.5 leading-none">
      {prefix && (
        <span className={`font-heading font-black text-2xl sm:text-3xl lg:text-4xl ${
          highlight ? 'text-[#9E2A2B]' : 'text-neutral-200'
        }`}>
          {prefix.trim()}
        </span>
      )}
      <span className={`font-heading font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight ${
        highlight ? 'text-[#9E2A2B]' : 'text-white'
      }`}>
        {formatted}
      </span>
      {suffix && (
        <span className="font-heading font-bold text-base sm:text-lg lg:text-xl text-neutral-400 uppercase tracking-wider ml-1 whitespace-nowrap">
          {suffix.trim()}
        </span>
      )}
    </div>
  );
};

export const ResultsCounter: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasTriggered]);

  return (
    <section 
      id="resultados" 
      ref={sectionRef} 
      className="py-20 sm:py-28 bg-[#080808] relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#9E2A2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
            <span>CASE PRIMORA LACTA PROTEIN</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white uppercase tracking-tight leading-[0.98]">
            RESULTADOS QUE <br />
            <span className="text-[#9E2A2B]">FALAM NO CAMPO.</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 mt-4 leading-relaxed max-w-2xl mx-auto">
            Resultados comprovados a campo com a utilização do suplemento Primora Lacta Protein em lote monitorado.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PILOT_STATS.map((stat) => (
            <div
              key={stat.id}
              className={`rounded-sm p-8 border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                stat.highlight
                  ? 'bg-[#141414] border-[#9E2A2B]/40 shadow-2xl shadow-[#9E2A2B]/5'
                  : 'bg-[#101010] border-white/[0.08]'
              }`}
            >
              {/* Stat Number */}
              <div className="mb-4">
                <div className="min-h-[56px] flex items-center">
                  <AnimatedNumber
                    value={stat.value}
                    decimal={stat.decimal}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    hasTriggered={hasTriggered}
                    highlight={stat.highlight}
                  />
                </div>

                <div className="text-sm sm:text-base font-bold text-white uppercase tracking-wider mt-3">
                  {stat.label}
                </div>
              </div>

              {/* Stat Description */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-white/[0.06] pt-4">
                {stat.description}
              </p>
            </div>
          ))}

          {/* Quick CTA Box */}
          <div className="rounded-sm p-8 bg-[#161616] border border-white/[0.1] flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-2">
                AVALIAÇÃO EM SUA PROPRIEDADE
              </div>
              <h3 className="text-2xl font-heading font-black text-white uppercase leading-tight mb-2">
                QUER VER ESSES RESULTADOS NO SEU BALDE?
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Converse com nossa equipe para avaliarmos seu lote e planejar a estratégia nutricional adequada.
              </p>
            </div>

            <div className="pt-6">
              <a
                href={OFFICIAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#9E2A2B] hover:bg-[#7F181B] text-white w-full py-3.5 px-6 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Simular com Especialista</span>
              </a>
            </div>
          </div>
        </div>

        {/* Factual Context & Disclaimer Box */}
        <div className="mt-12 p-4 sm:p-5 rounded-sm bg-white/[0.03] border border-white/[0.08] flex items-start gap-3.5 max-w-3xl mx-auto">
          <AlertCircle className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-400 leading-relaxed">
            <span className="text-neutral-200 font-semibold uppercase tracking-wider block mb-0.5">
              Contextualização dos Dados:
            </span>
            Acompanhamento a campo realizado com 30 vacas avaliadas em condições reais de manejo e suplementação.
          </div>
        </div>

      </div>
    </section>
  );
};

