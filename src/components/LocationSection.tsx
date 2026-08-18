import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { MapPin, Navigation, Phone, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#0b0b0b] relative border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>UNIDADE & FÁBRICA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
            ONDE <span className="text-[#9E2A2B]">ESTAMOS.</span>
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 mt-2">
            Localização estratégica no polo agropecuário de Videira - SC para atendimento ágil a produtores da região.
          </p>
        </div>

        {/* Location Box & Map Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address & Details Card */}
          <div className="lg:col-span-5 bg-[#121212] border border-white/[0.08] rounded-sm p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-4">
                SEDE OPERACIONAL
              </div>

              <h3 className="text-2xl font-heading font-black text-white uppercase mb-6">
                PRIMORA NUTRIÇÃO ANIMAL
              </h3>

              <div className="space-y-5 mb-8 text-neutral-300 text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9E2A2B] flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Endereço</div>
                    <div className="text-white font-medium mt-0.5">{OFFICIAL_INFO.address}</div>
                    <div className="text-neutral-400 text-xs mt-0.5">{OFFICIAL_INFO.neighborhood} • {OFFICIAL_INFO.cityState}</div>
                    <div className="text-neutral-400 text-xs">CEP: {OFFICIAL_INFO.cep}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-sm bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-[#9E2A2B] flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase text-neutral-400 tracking-wider">Telefone / WhatsApp</div>
                    <a 
                      href={OFFICIAL_INFO.whatsappLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-white hover:text-[#9E2A2B] font-semibold transition-colors mt-0.5 block"
                    >
                      {OFFICIAL_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Como Chegar Button */}
            <div className="pt-6 border-t border-white/[0.08]">
              <a
                href={OFFICIAL_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-[#9E2A2B] hover:bg-[#7F181B] text-white py-4 px-6 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#9E2A2B]/20"
              >
                <Navigation className="w-4 h-4" />
                <span>Como Chegar no Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Map / Directions Card */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/[0.08] rounded-sm overflow-hidden relative flex flex-col justify-between min-h-[360px]">
            {/* Interactive Embedded Google Maps Iframe */}
            <iframe
              title="Localização Primora Nutrição Animal"
              src="https://maps.google.com/maps?q=Videira%2C%20SC%20Rod%20das%20Lombadas&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[340px] border-0 grayscale contrast-125 opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />

            {/* Overlay Map Ribbon */}
            <div className="p-4 bg-[#080808]/90 backdrop-blur-md border-t border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#9E2A2B]" />
                <span>Videira - SC • Rio das Pedras</span>
              </div>
              <a
                href={OFFICIAL_INFO.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold uppercase tracking-wider text-[#9E2A2B] hover:text-white transition-colors flex items-center gap-1"
              >
                <span>Abrir rota no Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

