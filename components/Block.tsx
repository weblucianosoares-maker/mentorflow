import React from 'react';
import { Section } from './ui/Section';
import { Settings } from 'lucide-react';

export const Block: React.FC = () => {
  return (
    <Section bg="darker" className="relative overflow-hidden text-center">
      {/* Background Gears Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <Settings size={600} className="text-gold-500 animate-spin-slow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          O que está te travando <span className="text-red-500">DE VERDADE</span>.
        </h2>
        <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
          Não é falta de conhecimento, inteligência ou vontade. <br />
          <strong className="text-gold-500 font-bold">É execução sem estrutura.</strong>
        </p>
        <p className="text-slate-400">
          Você não precisa estudar mais; precisa de alguém que sente do seu lado e construa a operação com você.
        </p>
      </div>
    </Section>
  );
};