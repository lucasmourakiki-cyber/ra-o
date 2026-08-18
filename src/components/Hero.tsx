import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { ArrowRight, MessageSquare, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const handleScrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('a-primora');
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080808] pt-24 pb-16 lg:py-0"
    >
      {/* Background Media Container with Cinematic Composition */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Ultra-realistic Cinematic Background with Subtle Smooth Camera Motion */}
        <div className="absolute inset-0 w-full h-full transform scale-105 animate-[subtle-drift_25s_ease-in-out_infinite_alternate]">
          <img
            src={OFFICIAL_ASSETS.heroCinematic}
            alt="Paisagem cinematográfica com rebanho bovino ao amanhecer - Primora Nutrição Animal"
            className="w-full h-full object-cover object-[center_right] opacity-85 brightness-95 contrast-105"
            loading="eager"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Left-Side Negative Space Gradient (Protects Left 40% Typography) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 md:via-[#080808]/75 via-45% to-transparent" />
        
        {/* Top and Bottom Atmospheric Cinematic Blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/70" />
        
        {/* Golden Sun & Volumetric Light Glow on Right Edge */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-5 sm:px-8 py-16 lg:py-24 flex flex-col justify-center">
        <div className="max-w-3xl">
          {/* Eyebrow Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-sm bg-white/[0.05] border border-white/[0.12] backdrop-blur-md mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-[#9E2A2B]" />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] text-neutral-300">
              NUTRIÇÃO ANIMAL & AGROPECUÁRIA
            </span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-heading font-black text-white leading-[0.94] tracking-tight uppercase mb-6 sm:mb-8">
            <span>NUTRIÇÃO QUE TRANSFORMA</span> <br />
            <span className="text-[#9E2A2B]">DESEMPENHO</span> <br />
            <span>EM RESULTADO.</span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-2xl mb-10 text-pretty">
            Soluções em nutrição animal para bovinocultura de corte e leite, desenvolvidas para potencializar o desempenho do seu rebanho com eficiência e resultado no campo.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            {/* Primary CTA - WhatsApp */}
            <a
              href={OFFICIAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#9E2A2B] hover:bg-[#7F181B] text-white px-8 py-4 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#9E2A2B]/30 group"
              id="hero-cta-whatsapp"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Fale com um Especialista</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </a>

            {/* Secondary CTA - Smooth Scroll */}
            <a
              href="#a-primora"
              onClick={handleScrollToAbout}
              className="inline-flex items-center justify-center gap-2 bg-white/[0.05] hover:bg-white/[0.12] text-neutral-200 hover:text-white px-7 py-4 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-[0.16em] border border-white/[0.15] backdrop-blur-sm transition-all"
              id="hero-cta-about"
            >
              <span>Conheça a Primora</span>
            </a>
          </div>

          {/* Indicators below Hero */}
          <div className="mt-14 pt-8 border-t border-white/[0.08] flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-400 font-semibold tracking-wider uppercase">
            <span className="text-white">NUTRIÇÃO ANIMAL</span>
            <span className="text-[#9E2A2B]">•</span>
            <span className="text-white">BOVINOCULTURA DE CORTE</span>
            <span className="text-[#9E2A2B]">•</span>
            <span className="text-white">BOVINOCULTURA DE LEITE</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div 
        className="absolute bottom-5 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
        onClick={handleScrollToAbout}
      >
        <span className="text-[9px] uppercase font-bold tracking-[0.24em]">Rolar</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#9E2A2B]" />
      </div>

      {/* Bottom Gradient Fade into Next Section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
};
