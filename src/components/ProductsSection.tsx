import React from 'react';
import { PRODUCTS, OFFICIAL_INFO } from '../data/primoraData';
import { MessageSquare, Check, ArrowRight } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const getProductWhatsappUrl = (productName: string) => {
    const text = encodeURIComponent(`Olá! Gostaria de mais informações técnicas sobre o produto ${productName} da Primora.`);
    return `https://wa.me/${OFFICIAL_INFO.whatsappRaw}?text=${text}`;
  };

  return (
    <section id="produtos" className="py-20 sm:py-28 bg-[#0b0b0b] relative border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>PRODUTOS & SUPLEMENTOS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight leading-[1.02]">
              SOLUÇÕES <br />
              <span className="text-[#9E2A2B]">PRIMORA.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Formulações de alta performance desenvolvidas para responder aos desafios reais da bovinocultura no campo.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B]/40 rounded-sm overflow-hidden transition-all duration-300 flex flex-col justify-between group shadow-xl hover:shadow-2xl hover:shadow-[#9E2A2B]/10"
            >
              {/* Product Packaging Showcase */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-b from-[#181818] to-[#0e0e0e] p-6 flex items-center justify-center">
                {/* Subtle Radial Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(158,42,43,0.12)_0%,transparent_70%)] pointer-events-none" />
                
                <img
                  src={prod.image}
                  alt={`${prod.name} - Primora Nutrição Animal`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Badge */}
                {prod.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2.5 py-1 rounded-xs bg-[#9E2A2B] text-white text-[10px] font-bold uppercase tracking-[0.16em] shadow-lg">
                      {prod.badge}
                    </span>
                  </div>
                )}
                
                {/* Category tag */}
                <div className="absolute bottom-3 left-4 z-10">
                  <span className="text-[11px] font-semibold text-neutral-300 uppercase tracking-wider bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-xs border border-white/10">
                    {prod.category}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-wide group-hover:text-[#9E2A2B] transition-colors mb-3">
                    {prod.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-5">
                    {prod.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 mb-6">
                    {prod.highlights.map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                        <div className="w-4 h-4 rounded-full bg-[#9E2A2B]/15 flex items-center justify-center text-[#9E2A2B] flex-shrink-0">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
                  <a
                    href={getProductWhatsappUrl(prod.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-white hover:text-[#9E2A2B] transition-colors group/link"
                  >
                    <span>Consultar Produto</span>
                    <ArrowRight className="w-4 h-4 text-[#9E2A2B] transition-transform group-hover/link:translate-x-1" />
                  </a>

                  <a
                    href={getProductWhatsappUrl(prod.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-sm bg-[#9E2A2B] hover:bg-[#7F181B] text-white transition-all transform hover:-translate-y-0.5 shadow-md shadow-[#9E2A2B]/20"
                    title={`Solicitar cotação de ${prod.name}`}
                  >
                    <MessageSquare className="w-4 h-4" />
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

