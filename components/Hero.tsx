import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/Button';
import { SovereigntyCarousel } from './SovereigntyCarousel';

export const Hero: React.FC = () => {
  const scrollToCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToVSL = () => {
    document.getElementById('vsl')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/107/1920/1080"
          alt="Mentor profissional ensinando estratégias de vendas para mentoria online de alta conversão"
          className="w-full h-full object-cover filter brightness-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E14] via-transparent to-[#0A0E14]/90"></div>
      </div>

      {/* Main Content Container - Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-8 lg:py-16">

        {/* Left Column - Text Content (60%) */}
        <div className="lg:col-span-7 space-y-6 animate-fade-in-up text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-serif">
            Assuma o comando da sua liberdade.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600">
              Pare de ser o operário
            </span><br />
            da sua própria mentoria.
          </h1>

          <div className="max-w-2xl mx-auto lg:mx-0">
            <p className="text-sm md:text-base lg:text-lg text-slate-300 leading-relaxed border-l-4 border-gold-500 pl-5 text-left">
              Enquanto o mercado te entrega <strong className="text-white">200 aulas</strong> para você assistir sozinho,
              nós <strong className="text-gold-400">implementamos o sistema comercial</strong> que já gerou
              <strong className="text-white"> R$ 1 bilhão em vendas</strong>.
            </p>
            <p className="text-xs md:text-sm lg:text-base text-slate-400 mt-3 italic">
              O Mentor inteligente não "tenta"; ele <span className="text-gold-500 font-semibold">constrói</span>.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Button onClick={scrollToCta} variant="success" className="text-base md:text-lg px-8 py-4 md:px-10 md:py-5 animate-pulse-slow font-bold tracking-wide">
              QUERO ASSUMIR O COMANDO
            </Button>
          </div>
        </div>

        {/* Right Column - Sovereignty Carousel (40%) */}
        <div className="lg:col-span-5 h-[350px] md:h-[400px] lg:h-[500px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <SovereigntyCarousel />
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="relative z-10 pb-8">
        <button
          onClick={scrollToVSL}
          className="text-gold-500 hover:text-gold-400 transition-colors animate-bounce"
        >
          <ChevronDown size={48} />
        </button>
      </div>
    </div>
  );
};