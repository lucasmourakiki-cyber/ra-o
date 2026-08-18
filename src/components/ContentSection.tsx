import React, { useState } from 'react';
import { ARTICLES, OFFICIAL_INFO } from '../data/primoraData';
import { BookOpen, Clock, ArrowRight, X, MessageSquare } from 'lucide-react';
import { ContentArticle } from '../types';

export const ContentSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ContentArticle | null>(null);

  // Take the 3 main articles as requested
  const displayArticles = ARTICLES.slice(0, 3);

  return (
    <section id="conteudos" className="py-20 sm:py-28 bg-[#0b0b0b] relative border-t border-white/[0.08]">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#9E2A2B]/10 border border-[#9E2A2B]/20 text-[#9E2A2B] text-xs font-bold uppercase tracking-[0.2em] mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CONHECIMENTO TÉCNICO</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight leading-[1.02]">
              CONTEÚDO PARA QUEM <br />
              <span className="text-[#9E2A2B]">VIVE O CAMPO.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-4 md:mt-0 leading-relaxed">
            Orientações técnicas e artigos práticos sobre manejo nutricional e respostas zootécnicas para bovinos de corte e leite.
          </p>
        </div>

        {/* Content Articles Grid (3 Clean, Elegant Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {displayArticles.map((art) => (
            <article
              key={art.id}
              className="bg-[#121212] border border-white/[0.08] hover:border-[#9E2A2B]/40 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#9E2A2B]/5"
            >
              <div>
                {/* Article Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-900">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-xs bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-[0.16em] text-neutral-200">
                      {art.category}
                    </span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-neutral-400 text-xs mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#9E2A2B]" />
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="text-lg font-heading font-black text-white uppercase leading-snug group-hover:text-[#9E2A2B] transition-colors mb-3">
                    {art.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {art.summary}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="p-6 pt-0 border-t border-white/[0.04] mt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(art)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#9E2A2B] transition-colors cursor-pointer"
                >
                  <span>Ler Artigo Completo</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#9E2A2B]" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-[#121212] border border-white/[0.15] rounded-sm max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Fechar artigo"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-block px-2.5 py-1 bg-[#9E2A2B]/20 text-[#9E2A2B] border border-[#9E2A2B]/40 text-[10px] font-bold uppercase tracking-[0.2em] mb-3 rounded-xs">
              {selectedArticle.category}
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight mb-4">
              {selectedArticle.title}
            </h3>

            <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6 pb-4 border-b border-white/[0.08]">
              <Clock className="w-3.5 h-3.5 text-[#9E2A2B]" />
              <span>{selectedArticle.readTime}</span>
            </div>

            <div className="aspect-[16/9] w-full rounded-sm overflow-hidden mb-6 bg-neutral-900">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed mb-8">
              <p className="font-semibold text-white">
                {selectedArticle.summary}
              </p>
              <p>
                O equilíbrio nutricional no cocho e no pastejo é a principal alavanca para a sustentabilidade econômica do produtor rural. Quando a dieta fornece os nutrientes na proporção exata exigida pelo animal, as perdas metabólicas são minimizadas e a resposta produtiva é imediata.
              </p>
              <p>
                A equipe técnica da Primora Nutrição Animal está à disposição para avaliar os desafios específicos da sua propriedade, coletar amostras e indicar a melhor combinação de rações, suplementos minerais e núcleos para o seu lote.
              </p>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-neutral-400">
                Dúvidas técnicas sobre este tema?
              </span>
              <a
                href={OFFICIAL_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#9E2A2B] hover:bg-[#7F181B] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-wider transition-colors shadow-lg"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Conversar com Nutricionista</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
