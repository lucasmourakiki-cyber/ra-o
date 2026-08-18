import React, { useState, useEffect } from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { OFFICIAL_ASSETS } from '../data/primoraAssets';
import { Menu, X, MessageSquare, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'A Primora', href: '#a-primora' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Produtos', href: '#produtos' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Conteúdos', href: '#conteudos' },
  { label: 'Contato', href: '#contato' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#080808]/92 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3.5' 
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo Oficial */}
        <a 
          href="#inicio" 
          onClick={(e) => handleNavClick(e, '#inicio')}
          className="focus:outline-none transition-transform hover:scale-[1.02] flex items-center"
          aria-label="Primora Nutrição Animal - Início"
        >
          <img 
            src={OFFICIAL_ASSETS.logo}
            alt="Primora Nutrição Animal" 
            className="h-10 sm:h-12 w-auto object-contain"
            loading="eager"
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors relative ${
                  isActive 
                    ? 'text-white' 
                    : 'text-neutral-300 hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#9E2A2B] rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={OFFICIAL_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#9E2A2B] hover:bg-[#7F181B] text-white px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-[0.14em] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#9E2A2B]/25"
            id="header-cta-btn"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Fale com um Especialista</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white hover:text-[#9E2A2B] focus:outline-none transition-colors"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          id="mobile-menu-toggle-btn"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[60px] bg-[#080808]/98 backdrop-blur-xl border-b border-white/[0.08] px-6 py-8 shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`py-3 text-sm font-bold uppercase tracking-[0.14em] border-b border-white/[0.05] flex items-center justify-between ${
                    isActive ? 'text-[#9E2A2B]' : 'text-neutral-200 hover:text-white'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#9E2A2B]" />}
                </a>
              );
            })}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={OFFICIAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#9E2A2B] hover:bg-[#7F181B] text-white py-3.5 rounded-sm text-xs font-bold uppercase tracking-[0.14em] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com um Especialista</span>
            </a>
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 pt-1">
              <Phone className="w-3.5 h-3.5 text-[#9E2A2B]" />
              <span>(49) 99193-6317</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
