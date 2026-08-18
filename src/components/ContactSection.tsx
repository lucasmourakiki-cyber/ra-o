import React, { useState } from 'react';
import { OFFICIAL_INFO } from '../data/primoraData';
import { MessageSquare, Send, CheckCircle2, Phone, MapPin, Instagram } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    activity: 'Bovinocultura de Leite',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Construct structured WhatsApp message with lead info
    const leadText = `*Contato Primora Nutrição Animal:*%0A%0A` +
      `*Nome:* ${encodeURIComponent(formData.name)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(formData.phone)}%0A` +
      `*E-mail:* ${encodeURIComponent(formData.email || 'Não informado')}%0A` +
      `*Atividade:* ${encodeURIComponent(formData.activity)}%0A` +
      `*Mensagem:* ${encodeURIComponent(formData.message || 'Gostaria de falar com um especialista.')}`;

    const whatsappUrl = `https://wa.me/${OFFICIAL_INFO.whatsappRaw}?text=${leadText}`;
    
    setIsSubmitted(true);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#080808] relative overflow-hidden border-t border-white/[0.08]">
      {/* Background Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#9E2A2B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 sm:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E2A2B]" />
              <span>ATENDIMENTO DIRETO</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-heading font-black text-white uppercase tracking-tight leading-[1.02] mb-4">
              VAMOS FALAR SOBRE <br />
              <span className="text-[#9E2A2B]">O SEU REBANHO?</span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
              Fale com a equipe Primora e conheça as soluções mais adequadas para a sua operação.
            </p>

            {/* Quick Contact Points */}
            <div className="space-y-4 mb-8">
              <a
                href={OFFICIAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B]/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-[#9E2A2B]/15 text-[#9E2A2B] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">WhatsApp Oficial</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#9E2A2B] transition-colors">{OFFICIAL_INFO.phone}</div>
                  </div>
                </div>
                <MessageSquare className="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={OFFICIAL_INFO.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-sm bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B]/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-sm bg-[#9E2A2B]/15 text-[#9E2A2B] flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">Instagram</div>
                    <div className="text-sm font-bold text-white group-hover:text-[#9E2A2B] transition-colors">{OFFICIAL_INFO.instagramUser}</div>
                  </div>
                </div>
                <span className="text-xs text-neutral-500 group-hover:text-white transition-colors font-bold uppercase tracking-wider">Seguir</span>
              </a>

              <div className="p-4 rounded-sm bg-[#121212] border border-white/[0.08] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-sm bg-[#9E2A2B]/15 text-[#9E2A2B] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">Localização</div>
                  <div className="text-xs font-medium text-white">{OFFICIAL_INFO.fullAddress}</div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <a
              href={OFFICIAL_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 bg-[#9E2A2B] hover:bg-[#7F181B] text-white py-4 px-6 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#9E2A2B]/30"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar com um Especialista</span>
            </a>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-[#121212] border border-white/[0.08] rounded-sm p-8 sm:p-10 shadow-2xl">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-black text-white uppercase tracking-wide">
                FALE COM UM ESPECIALISTA
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Preencha os dados abaixo para receber um atendimento técnico personalizado.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#181818] border border-[#9E2A2B]/40 rounded-sm p-8 text-center animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#9E2A2B]/20 text-[#9E2A2B] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-heading font-black text-white uppercase mb-2">
                  SOLICITAÇÃO PREPARADA!
                </h4>
                <p className="text-xs text-neutral-300 max-w-md mx-auto mb-6">
                  Sua mensagem foi direcionada ao WhatsApp oficial da Primora Nutrição Animal.
                </p>
                <a
                  href={OFFICIAL_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#9E2A2B] hover:bg-[#7F181B] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Abrir WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="block mx-auto mt-4 text-[11px] text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Nome */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/[0.1] focus:border-[#9E2A2B] rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Telefone / WhatsApp */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(49) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/[0.1] focus:border-[#9E2A2B] rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* E-mail */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      E-mail
                    </label>
                    <input
                      type="email"
                      placeholder="seuemail@exemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/[0.1] focus:border-[#9E2A2B] rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Tipo de atividade */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Tipo de Atividade
                    </label>
                    <select
                      value={formData.activity}
                      onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                      className="w-full bg-[#0a0a0a] border border-white/[0.1] focus:border-[#9E2A2B] rounded-sm px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="Bovinocultura de Leite">Bovinocultura de Leite</option>
                      <option value="Bovinocultura de Corte">Bovinocultura de Corte</option>
                      <option value="Corte e Leite (Misto)">Corte e Leite (Misto)</option>
                      <option value="Agropecuária / Revenda">Agropecuária / Revenda</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Conte brevemente sobre o número de animais e os objetivos nutricionais da propriedade."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#0a0a0a] border border-white/[0.1] focus:border-[#9E2A2B] rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#9E2A2B] hover:bg-[#7F181B] text-white py-4 rounded-sm text-xs font-bold uppercase tracking-[0.16em] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#9E2A2B]/20 cursor-pointer"
                  id="contact-form-submit-btn"
                >
                  <Send className="w-4 h-4" />
                  <span>SOLICITAR CONTATO</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
