import React from 'react';
import { Play } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export const VSL: React.FC = () => {
  const scrollToCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section id="vsl" bg="darker" className="relative text-center">
      <div className="mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 max-w-5xl mx-auto leading-tight">
          Eu gravei um vídeo rápido para te mostrar porque você travou e como a <span className="text-gold-500">MentorFlow</span> é o melhor investimento que você vai fazer na sua vida
        </h2>
        <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
          Entenda em menos de 5 minutos como Luciano Soares utiliza a experiência de R$ 1 bilhão em vendas para construir sua máquina comercial.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(234,179,8,0.2)] border border-slate-800 group cursor-pointer bg-slate-900 mb-10">
        {/* Mock Video Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center">
          <img
            src="https://picsum.photos/id/3/1280/720"
            alt="Luciano Soares Thumbnail"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity"
          />
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-gold-500 rounded-full flex items-center justify-center pl-2 shadow-2xl group-hover:scale-110 transition-transform duration-300 animate-pulse-slow">
              <Play fill="black" stroke="none" size={40} />
            </div>
            <h3 className="mt-6 text-xl md:text-3xl font-bold text-white drop-shadow-md">
              O Fim da Inércia Operativa
            </h3>
          </div>
        </div>
      </div>

      <Button onClick={scrollToCta} variant="success" className="px-10 text-lg">
        QUERO SAIR DA INÉRCIA AGORA
      </Button>
    </Section>
  );
};