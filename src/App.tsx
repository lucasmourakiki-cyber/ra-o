/**
 * PRIMORA NUTRIÇÃO ANIMAL - WEBSITE INSTITUCIONAL PREMIUM
 * @license Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ImpactBar } from './components/ImpactBar';
import { AboutSection } from './components/AboutSection';
import { AreasSection } from './components/AreasSection';
import { SolutionsSection } from './components/SolutionsSection';
import { ProductsSection } from './components/ProductsSection';
import { ResultsCounter } from './components/ResultsCounter';
import { CaseStudySection } from './components/CaseStudySection';
import { EditorialMilkSection } from './components/EditorialMilkSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { FieldHighlight } from './components/FieldHighlight';
import { TestimonialSection } from './components/TestimonialSection';
import { GallerySection } from './components/GallerySection';
import { ContentSection } from './components/ContentSection';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F3] font-sans antialiased overflow-x-hidden selection:bg-[#9E2A2B] selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (Cinematic 90-100vh with parallax and treated background) */}
        <Hero />

        {/* 2. Impact Bar (Desempenho, Produtividade, Rentabilidade) */}
        <ImpactBar />

        {/* 3. A Primora (Institucional com visão de campo e linha decorativa) */}
        <AboutSection />

        {/* 4. Soluções Editoriais (Bovinocultura de Leite e Bovinocultura de Corte) */}
        <SolutionsSection />

        {/* 5. Áreas de Atuação Integradas */}
        <AreasSection />

        {/* 6. Produtos Oficiais (Lacta Protein, Sup Energia, Rações, Minerais) */}
        <ProductsSection />

        {/* 7. Resultados Aferidos no Campo (+3,3L, +23%, R$ 3,25/dia lucro) */}
        <ResultsCounter />

        {/* 8. Estudo de Caso Primora Lacta Protein & Rentabilidade */}
        <CaseStudySection />

        {/* 9. Editorial Mais Leite no Balde Começa no Cocho */}
        <EditorialMilkSection />

        {/* 10. Como Trabalhamos (01 Diagnóstico, 02 Estratégia, 03 Acompanhamento, 04 Resultado) */}
        <HowWeWorkSection />

        {/* 11. Destaque No Campo */}
        <FieldHighlight />

        {/* 12. Prova Social / Depoimento */}
        <TestimonialSection />

        {/* 13. Galeria Fotográfica Assimétrica com Lightbox */}
        <GallerySection />

        {/* 14. Conteúdo para quem vive o campo */}
        <ContentSection />

        {/* 15. Instagram Oficial */}
        <InstagramSection />

        {/* 16. Localização / Videira - SC */}
        <LocationSection />

        {/* 17. Contato & Conversão com formulário e botão Solicitar Contato */}
        <ContactSection />
      </main>

      {/* WhatsApp Flutuante */}
      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}
