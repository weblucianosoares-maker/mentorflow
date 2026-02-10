import React from 'react';
import { Section } from './ui/Section';
import { Check, X } from 'lucide-react';
import { Button } from './ui/Button';

export const Filter: React.FC = () => {
  const scrollToCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section bg="dark">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mas Atenção!</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">
            Continue apenas se você tem conhecimento real, sabe que pode faturar mais e aceita ser direcionado.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* NOT FOR YOU */}
          <div className="bg-red-950/20 border border-red-900/50 rounded-xl p-8 hover:bg-red-950/30 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center text-red-500">
                      <X size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-red-400">NÃO é para você se...</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                      <X size={18} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>Busca "fórmulas mágicas" de enriquecimento rápido.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <X size={18} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>Quer atalhos sem construir base sólida.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <X size={18} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>Espera que façamos tudo sem seu envolvimento estratégico.</span>
                  </li>
              </ul>
          </div>

          {/* IS FOR YOU */}
          <div className="bg-green-950/20 border border-green-900/50 rounded-xl p-8 hover:bg-green-950/30 transition-colors relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-green-500 blur-[80px] opacity-20"></div>
              <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-green-900/50 flex items-center justify-center text-green-500">
                      <Check size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-green-400">É PARA VOCÊ se...</h3>
              </div>
              <ul className="space-y-4 text-slate-300">
                  <li className="flex items-start gap-3">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Tem conhecimento real e transformador.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Sabe que pode faturar mais e escalar.</span>
                  </li>
                  <li className="flex items-start gap-3">
                      <Check size={18} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Aceita ser direcionado por especialistas.</span>
                  </li>
              </ul>
          </div>
      </div>

      <div className="flex justify-center">
        <Button onClick={scrollToCta} variant="success" className="px-12 text-lg">
            TENHO PERFIL E QUERO ESCALAR
        </Button>
      </div>
    </Section>
  );
};