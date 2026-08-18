import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { MessageSquare } from 'lucide-react';

export const FieldHighlight: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden border-t border-white/[0.08]">
      {/* Panoramic Real Field Photographic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={OFFICIAL_ASSETS.agroPanorama}
          alt="Paisagem rural e rebanho bovino em Videira SC - Primora Nutrição Animal"
          className="w-full h-full object-cover opacity-35 brightness-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/70 to-[#080808]" />
      </div>

      <div className="relative z-10 max-w-[1320px] mx-auto px-5 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/[0.08] border border-white/[0.12] backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.24em] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#9E2A2B]" />
          <span>NO CAMPO</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black text-white uppercase tracking-tight leading-[0.98] mb-6">
          RESULTADO COMEÇA <br />
          <span className="text-[#9E2A2B]">NO CAMPO.</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
          A presença no dia a dia da lida, o acompanhamento dos animais no cocho e o ajuste fino da nutrição fazem a diferença real entre produzir leite e obter lucro.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={OFFICIAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#9E2A2B] hover:bg-[#7F181B] text-white px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#9E2A2B]/30"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Nossa Equipe Técnica</span>
          </a>
        </div>
      </div>
    </section>
  );
};
