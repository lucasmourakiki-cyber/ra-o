import React from 'react';
import { TrendingUp, Award, Zap } from 'lucide-react';

export const ImpactBar: React.FC = () => {
  return (
    <section className="relative z-20 bg-[#0e0e0e] border-y border-white/[0.08] py-8 sm:py-10">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {/* Pillar 1: Desempenho */}
          <div className="flex items-center gap-4 sm:gap-5 pt-4 md:pt-0 md:px-6 first:pt-0 first:pl-0">
            <div className="w-12 h-12 rounded-sm bg-[#A92A2A]/10 border border-[#A92A2A]/20 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#A92A2A]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A92A2A] rounded-full" />
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-wide uppercase">
                  DESEMPENHO
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                Formulação técnica focada em ganho diário, conversão alimentar e resposta rápida no rebanho.
              </p>
            </div>
          </div>

          {/* Pillar 2: Produtividade */}
          <div className="flex items-center gap-4 sm:gap-5 pt-4 md:pt-0 md:px-6">
            <div className="w-12 h-12 rounded-sm bg-[#A92A2A]/10 border border-[#A92A2A]/20 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-[#A92A2A]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A92A2A] rounded-full" />
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-wide uppercase">
                  PRODUTIVIDADE
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                Mais litros de leite no tanque e maior peso de carcaça com sanidade e escore corporal.
              </p>
            </div>
          </div>

          {/* Pillar 3: Rentabilidade */}
          <div className="flex items-center gap-4 sm:gap-5 pt-4 md:pt-0 md:px-6">
            <div className="w-12 h-12 rounded-sm bg-[#A92A2A]/10 border border-[#A92A2A]/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-5 h-5 text-[#A92A2A]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#A92A2A] rounded-full" />
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white tracking-wide uppercase">
                  RENTABILIDADE
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-snug">
                Nutrição de precisão que se paga no cocho com margem líquida positiva e retorno sobre o investimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
