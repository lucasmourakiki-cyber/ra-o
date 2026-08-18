import React from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { MapPin, Phone, Instagram, ArrowUp, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 70;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#050505] text-neutral-300 border-t border-white/[0.08] relative">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6 cursor-pointer inline-block" onClick={scrollToTop}>
                <img 
                  src={OFFICIAL_ASSETS.logo}
                  alt="Primora Nutrição Animal" 
                  className="h-12 sm:h-14 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 max-w-sm leading-relaxed mb-6">
                Soluções completas em nutrição animal para bovinocultura de corte e leite, fabricação de rações e suplementos minerais de alto desempenho.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={OFFICIAL_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B] hover:bg-[#9E2A2B] text-white flex items-center justify-center transition-colors"
                aria-label="Instagram Oficial da Primora"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={OFFICIAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-sm bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B] hover:bg-[#9E2A2B] text-white flex items-center justify-center transition-colors"
                aria-label="WhatsApp Oficial da Primora"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Navegação
            </div>
            <ul className="space-y-3 text-xs uppercase font-semibold tracking-wider">
              {[
                { label: 'Início', href: '#inicio' },
                { label: 'A Primora', href: '#a-primora' },
                { label: 'Soluções', href: '#solucoes' },
                { label: 'Produtos', href: '#produtos' },
                { label: 'Resultados', href: '#resultados' },
                { label: 'Conteúdos', href: '#conteudos' },
                { label: 'Contato', href: '#contato' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-neutral-400 hover:text-[#9E2A2B] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="lg:col-span-4">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-white mb-6">
              Contato & Localização
            </div>
            
            <div className="space-y-4 text-xs text-neutral-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#9E2A2B] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{OFFICIAL_INFO.address}</div>
                  <div>{OFFICIAL_INFO.neighborhood} • {OFFICIAL_INFO.cityState}</div>
                  <div>CEP: {OFFICIAL_INFO.cep}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#9E2A2B] flex-shrink-0" />
                <a 
                  href={OFFICIAL_INFO.whatsappLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#9E2A2B] font-semibold transition-colors"
                >
                  {OFFICIAL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-[#9E2A2B] flex-shrink-0" />
                <a 
                  href={OFFICIAL_INFO.instagramLink}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#9E2A2B] transition-colors"
                >
                  {OFFICIAL_INFO.instagramUser}
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp className="w-4 h-4 text-[#9E2A2B]" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Primora Nutrição Animal. Todos os direitos reservados.
          </div>
          <div className="text-neutral-500">
            Videira - Santa Catarina
          </div>
        </div>

      </div>
    </footer>
  );
};
