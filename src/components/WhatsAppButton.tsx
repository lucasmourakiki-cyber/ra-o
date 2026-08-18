import React, { useState } from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tooltip */}
      <div 
        className={`hidden sm:flex items-center bg-[#141414]/95 text-white text-xs font-semibold px-3.5 py-2 rounded-sm border border-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-none ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span>Fale com a Primora</span>
        <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-[#141414] rotate-45 border-r border-t border-white/10" />
      </div>

      {/* WhatsApp Floating Circle Button */}
      <a
        href={OFFICIAL_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale com a Primora no WhatsApp"
        id="floating-whatsapp-btn"
        className="w-[54px] h-[54px] sm:w-[58px] sm:h-[58px] rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-2xl transition-all transform hover:scale-105 active:scale-95 animate-whatsapp-pulse cursor-pointer"
      >
        <svg 
          viewBox="0 0 24 24" 
          width="30" 
          height="30" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="text-white fill-white"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </a>
    </div>
  );
};
