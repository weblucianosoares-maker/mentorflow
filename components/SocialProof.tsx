import React, { useState, useEffect, useCallback } from 'react';
import { Section } from './ui/Section';
import { Star, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { Button } from './ui/Button';

interface TestimonialData {
  name: string;
  role: string;
  title: string;
  description: string;
  quote: string;
  featured?: boolean;
}

const testimonials: TestimonialData[] = [
  {
    name: "Lara Mendonça",
    role: "Psicanalista e Mentora",
    title: "De Especialista a Mentora de Elite",
    description: "Psicanalista e mentora especializada em mulheres. Antes da MentorFlow, possuía um conhecimento vasto, mas travado na execução digital. Com a implementação do nosso sistema, estruturou sua mentoria High Ticket e hoje possui uma máquina de vendas previsível.",
    quote: "Eu já tinha tido experiências onde várias pessoas cuidavam de cada parte e isso era muito difícil de administrar. Com o Luciano, ele vê todo o projeto: gestão de tráfego, atendimento ao cliente, página de internet, estratégia e planejamento. O grande diferencial dele é o interesse real em entender o nosso propósito e o que estamos vendendo.",
    featured: true
  },
  {
    name: "Marcelo Alves",
    role: "Mentor de Finanças",
    title: "Do Caos Financeiro à Paz Familiar",
    description: "Marcelo Alves enfrentava o \"pesadelo operacional\" de muitos mentores: dívidas acumuladas e falta de tempo para a família. Através da implementação comercial, ele organizou seus processos e recuperou a previsibilidade do seu faturamento.",
    quote: "Hoje tenho paz e felicidade com o que faço. O apoio, orientação e trabalho que o time da MentorFlorw executo aqui no meu negócio de mentoria foi decisivo, antes eu estava patinando, agora eles cuidam de tudo enquanto eu foco na entrega e na estratégia."
  },
  {
    name: "Eduarda Kilmmer",
    role: "Mentora de Carreira",
    title: "Escala High Ticket com Previsibilidade",
    description: "Eduarda Kilmmer possuía autoridade no mundo offline, mas atraía apenas \"curiosos\" no digital. Ao implementar os pilares de Conversão e Escala da MentorFlow, ela substituiu a sorte por um sistema ativo de vendas.",
    quote: "Saí do operacional para focar na estratégia e bati minha meta de R$ 20k no último mês. Os leads já chegam mais qualificados e a Landing Page converte enquanto eu foco na entrega. É o profissionalismo que faltava para o meu negócio."
  }
];

export const SocialProof: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const scrollToCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const current = testimonials[currentIndex];

  return (
    <Section bg="dark">
      <div className="text-center mb-12">
        <p className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-3 flex items-center justify-center gap-2">
          <Award size={18} /> A Prova dos Mestres
        </p>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
          Quem decidiu assumir o comando<br />e hoje colhe os frutos.
        </h2>
      </div>

      <div className="max-w-5xl mx-auto relative px-4 md:px-12 mb-12">
        {/* Navigation Buttons (Desktop) */}
        <button
          onClick={prevSlide}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-slate-800 text-gold-500 hover:bg-gold-500 hover:text-black transition-all border border-slate-700"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center rounded-full bg-slate-800 text-gold-500 hover:bg-gold-500 hover:text-black transition-all border border-slate-700"
          aria-label="Próximo"
        >
          <ChevronRight size={24} />
        </button>

        {/* Card Content */}
        <div className="overflow-hidden relative min-h-[500px] md:min-h-[400px]">
          <div
            key={currentIndex}
            className="bg-gradient-to-b from-slate-900 to-slate-950 p-8 md:p-12 rounded-2xl border-2 border-gold-500/30 shadow-2xl relative animate-fade-in-up"
          >
            {/* Golden Seal Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-br from-gold-400 to-gold-600 text-black font-bold py-2 px-5 rounded-full shadow-lg transform rotate-6 z-10 text-xs md:text-sm border-4 border-gold-700">
              {current.featured ? '⭐ DESTAQUE' : 'CASE DE SUCESSO'}
            </div>

            <div className="flex flex-col items-center text-center space-y-6">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} className="text-gold-500 fill-gold-500" />)}
              </div>

              {/* Title & Desc */}
              <div className="space-y-4 max-w-3xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">{current.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  <strong className="text-white block mb-1 text-lg">{current.name}</strong>
                  <span className="text-gold-600 text-sm uppercase tracking-wider font-bold mb-3 block">{current.role}</span>
                  {current.description}
                </p>
              </div>

              {/* Quote Box */}
              <div className="bg-gradient-to-r from-slate-800/80 to-slate-800/40 p-6 rounded-lg border-l-4 border-gold-500 w-full max-w-3xl relative mt-4">
                <Quote className="absolute top-2 right-2 text-gold-500/20" size={40} />
                <p className="text-slate-200 italic font-medium relative z-10 text-sm md:text-base">
                  "{current.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation & Dots */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex md:hidden gap-4">
            <button onClick={prevSlide} className="p-2 rounded-full bg-slate-800 text-gold-500"><ChevronLeft /></button>
            <button onClick={() => { nextSlide(); setIsAutoPlaying(false); }} className="p-2 rounded-full bg-slate-800 text-gold-500"><ChevronRight /></button>
          </div>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-gold-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={scrollToCta} variant="success" className="px-10">
          QUERO SER UM MESTRE DE ELITE
        </Button>
      </div>
    </Section>
  );
};