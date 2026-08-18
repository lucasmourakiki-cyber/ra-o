import React from 'react';
import { Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0d0d0d] relative border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
            <span>RELATO DO CAMPO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            RESULTADO NA VOZ DE <span className="text-[#9E2A2B]">QUEM PRODUZ.</span>
          </h2>
        </div>

        {/* Real Testimonial Card */}
        <div className="max-w-3xl mx-auto bg-[#141414] border border-white/[0.08] rounded-sm p-8 sm:p-12 relative shadow-2xl">
          {/* Quote Icon */}
          <div className="w-12 h-12 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] flex items-center justify-center mb-6">
            <Quote className="w-6 h-6" />
          </div>

          {/* Quote Text */}
          <blockquote className="text-lg sm:text-2xl text-white font-medium leading-relaxed mb-8 italic">
            "Com o uso do Lacta Protein, as vacas responderam muito bem na produção, mesmo com os desafios da propriedade. O ganho foi visível no balde e no bolso."
          </blockquote>

          {/* Author Badge */}
          <div className="flex flex-wrap items-center justify-between border-t border-white/[0.08] pt-6 gap-4">
            <div>
              <div className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <span>Produtor Rural</span>
                <CheckCircle2 className="w-4 h-4 text-[#9E2A2B]" />
              </div>
              <div className="text-xs text-neutral-400 mt-0.5">
                Avaliação Lacta Protein • Videira - SC e Região
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-xs bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-wider">
              <span>Resposta Comprovada</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

