import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { Instagram, ArrowUpRight } from 'lucide-react';

const INSTA_POSTS = [
  {
    image: OFFICIAL_ASSETS.bovinosCocho,
    tag: '#ManejoNoCocho'
  },
  {
    image: OFFICIAL_ASSETS.bovinoManejo,
    tag: '#LactaProtein'
  },
  {
    image: OFFICIAL_ASSETS.pastagemAerea,
    tag: '#BovinoculturaLeite'
  },
  {
    image: OFFICIAL_ASSETS.vacaCampo,
    tag: '#BovinoculturaCorte'
  }
];

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#080808] relative border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Header & CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <Instagram className="w-3.5 h-3.5" />
              <span>{OFFICIAL_INFO.instagramUser}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight leading-[1.02]">
              ACOMPANHE A PRIMORA <br />
              <span className="text-[#9E2A2B]">NO INSTAGRAM.</span>
            </h2>
          </div>
          
          <div className="mt-4 md:mt-0">
            <a
              href={OFFICIAL_INFO.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white/[0.06] hover:bg-[#9E2A2B] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-md"
            >
              <Instagram className="w-4 h-4" />
              <span>Seguir {OFFICIAL_INFO.instagramUser}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 4-Photo Visual Grid using Real Field Assets */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {INSTA_POSTS.map((post, idx) => (
            <a
              key={idx}
              href={OFFICIAL_INFO.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-sm overflow-hidden bg-[#141414] border border-white/[0.08] block"
            >
              <img
                src={post.image}
                alt={`Primora Nutrição Animal Instagram ${post.tag}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/70 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <div className="text-center p-3">
                  <Instagram className="w-6 h-6 text-[#9E2A2B] mx-auto mb-2" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider block">
                    {post.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
