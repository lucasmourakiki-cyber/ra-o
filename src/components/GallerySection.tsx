import React, { useState } from 'react';
import { GALLERY_PHOTOS } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { X, ChevronLeft, ChevronRight, Eye, Maximize2 } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_PHOTOS.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length);
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#080808] relative border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>REGISTROS EM CAMPO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
              GALERIA <span className="text-[#9E2A2B]">PRIMORA.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Fotografias reais das propriedades atendidas, rebanho no cocho, pastagens e infraestrutura produtiva.
          </p>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Item 1: Bovinos no Cocho - Wide 7 Cols */}
          <div
            onClick={() => handleOpenLightbox(0)}
            className="md:col-span-7 group relative rounded-sm overflow-hidden bg-[#141414] border border-white/[0.08] cursor-pointer aspect-[16/10]"
          >
            <img
              src={GALLERY_PHOTOS[0]?.url || OFFICIAL_ASSETS.bovinosCocho}
              alt={GALLERY_PHOTOS[0]?.title || 'Bovinos no cocho'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="self-end p-2.5 rounded-xs bg-black/70 text-white backdrop-blur-sm border border-white/10">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E2A2B]">
                  NUTRIÇÃO NO COCHO
                </span>
                <div className="text-base sm:text-lg font-heading font-black text-white uppercase mt-0.5">
                  {GALLERY_PHOTOS[0]?.title}
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Pastagem Aérea - 5 Cols */}
          <div
            onClick={() => handleOpenLightbox(1)}
            className="md:col-span-5 group relative rounded-sm overflow-hidden bg-[#141414] border border-white/[0.08] cursor-pointer aspect-[16/10] md:aspect-auto"
          >
            <img
              src={GALLERY_PHOTOS[1]?.url || OFFICIAL_ASSETS.pastagemAerea}
              alt={GALLERY_PHOTOS[1]?.title || 'Pastagem aérea'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="self-end p-2.5 rounded-xs bg-black/70 text-white backdrop-blur-sm border border-white/10">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E2A2B]">
                  VISTA AÉREA & MANEJO
                </span>
                <div className="text-base sm:text-lg font-heading font-black text-white uppercase mt-0.5">
                  {GALLERY_PHOTOS[1]?.title}
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: Bovino Manejo / Vaca 5711 - 4 Cols */}
          <div
            onClick={() => handleOpenLightbox(2)}
            className="md:col-span-4 group relative rounded-sm overflow-hidden bg-[#141414] border border-white/[0.08] cursor-pointer aspect-[4/3]"
          >
            <img
              src={GALLERY_PHOTOS[2]?.url || OFFICIAL_ASSETS.bovinoManejo}
              alt={GALLERY_PHOTOS[2]?.title || 'Bovino em manejo'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="self-end p-2.5 rounded-xs bg-black/70 text-white backdrop-blur-sm border border-white/10">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E2A2B]">
                  SANIDADE & PRECISÃO
                </span>
                <div className="text-base font-heading font-black text-white uppercase mt-0.5">
                  {GALLERY_PHOTOS[2]?.title}
                </div>
              </div>
            </div>
          </div>

          {/* Item 4: Bovinos Produção / Silos - 4 Cols */}
          <div
            onClick={() => handleOpenLightbox(3)}
            className="md:col-span-4 group relative rounded-sm overflow-hidden bg-[#141414] border border-white/[0.08] cursor-pointer aspect-[4/3]"
          >
            <img
              src={GALLERY_PHOTOS[3]?.url || OFFICIAL_ASSETS.bovinosProducao}
              alt={GALLERY_PHOTOS[3]?.title || 'Bovinos em produção'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="self-end p-2.5 rounded-xs bg-black/70 text-white backdrop-blur-sm border border-white/10">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E2A2B]">
                  PRODUÇÃO AGROPECUÁRIA
                </span>
                <div className="text-base font-heading font-black text-white uppercase mt-0.5">
                  {GALLERY_PHOTOS[3]?.title}
                </div>
              </div>
            </div>
          </div>

          {/* Item 5: Bovinos a Pasto / vaca.jpg - 4 Cols */}
          <div
            onClick={() => handleOpenLightbox(4)}
            className="md:col-span-4 group relative rounded-sm overflow-hidden bg-[#141414] border border-white/[0.08] cursor-pointer aspect-[4/3]"
          >
            <img
              src={GALLERY_PHOTOS[4]?.url || OFFICIAL_ASSETS.vacaCampo}
              alt={GALLERY_PHOTOS[4]?.title || 'Bovinos a pasto'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-[#080808]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
              <div className="self-end p-2.5 rounded-xs bg-black/70 text-white backdrop-blur-sm border border-white/10">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E2A2B]">
                  CORTE A PASTO
                </span>
                <div className="text-base font-heading font-black text-white uppercase mt-0.5">
                  {GALLERY_PHOTOS[4]?.title}
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={handleCloseLightbox}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-[#9E2A2B] text-white transition-colors z-50 cursor-pointer"
            aria-label="Fechar galeria"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#9E2A2B] text-white transition-colors z-50 cursor-pointer"
            aria-label="Foto anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#9E2A2B] text-white transition-colors z-50 cursor-pointer"
            aria-label="Próxima foto"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div 
            className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={GALLERY_PHOTOS[selectedPhotoIndex]?.url}
              alt={GALLERY_PHOTOS[selectedPhotoIndex]?.title}
              className="max-w-full max-h-[75vh] object-contain rounded-sm shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <div className="text-base sm:text-lg font-heading font-black text-white uppercase tracking-wider">
                {GALLERY_PHOTOS[selectedPhotoIndex]?.title}
              </div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest mt-1">
                Registro {selectedPhotoIndex + 1} de {GALLERY_PHOTOS.length} • Primora Nutrição Animal
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
