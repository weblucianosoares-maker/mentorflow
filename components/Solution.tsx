import React from 'react';
import { Section } from './ui/Section';
import { CheckCircle2, ArrowRight, ArrowDown, XCircle, TrendingUp, AlertTriangle } from 'lucide-react';
import { Button } from './ui/Button';

export const Solution: React.FC = () => {
  const scrollToCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Promise of Value */}
      <Section bg="darker" className="relative overflow-hidden">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-5 relative">
            <div className="absolute inset-0 bg-gold-500 rounded-2xl transform rotate-3 opacity-10"></div>
            <img 
              src="https://picsum.photos/id/1059/600/800" 
              alt="Luciano Authority" 
              className="rounded-2xl shadow-2xl w-full object-cover relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
          <div className="md:col-span-7 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Meu trabalho é transformar seu potencial travado em <span className="text-gold-500">faturamento real</span>.
            </h2>
            <p className="text-slate-300 text-lg">
              Eu faço isso mesmo que você não tenha tempo sobrando, nunca tenha criado um produto digital ou tenha medo de dar errado de novo. O Método MentorFlow não depende de talento; depende de <strong className="text-white">estrutura + acompanhamento</strong>.
            </p>
            <ul className="space-y-4">
               {["Método validado", "Sem 'gurus' ou fórmulas mágicas", "Foco total em execução e ROI"].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gold-400 font-medium">
                       <CheckCircle2 size={24} />
                       {item}
                   </li>
               ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Diagnosis Comparison - Redesigned */}
      <Section bg="dark" className="relative overflow-visible">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sejamos Honestos.</h2>
            <p className="text-slate-400 mt-2">A diferença entre quem patina e quem escala é apenas <span className="text-gold-500 font-bold">estrutura</span>.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
            {/* The Transition Container */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative mb-12">
                
                {/* Connector Arrow (Desktop: Center Absolute | Mobile: Between Grids) */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-slate-900 p-3 rounded-full border-4 border-slate-800 shadow-xl">
                    <div className="bg-gold-500 rounded-full p-3 animate-pulse-slow">
                        <ArrowRight size={32} className="text-black" />
                    </div>
                </div>
                
                {/* Mobile Connector */}
                <div className="md:hidden absolute left-1/2 top-[48%] -translate-x-1/2 -translate-y-1/2 z-30">
                     <div className="bg-slate-900 p-2 rounded-full border-2 border-slate-800">
                        <div className="bg-gold-500 rounded-full p-2">
                            <ArrowDown size={24} className="text-black" />
                        </div>
                    </div>
                </div>

                {/* Left Side: Current Situation (Pain) */}
                <div className="bg-slate-950/80 border border-slate-800 rounded-3xl p-8 md:p-10 relative group hover:border-red-900/50 transition-colors">
                    <div className="absolute top-0 left-8 -translate-y-1/2 bg-slate-900 border border-slate-700 px-4 py-1 rounded-full text-xs font-bold tracking-widest text-slate-400 uppercase">
                        Sua Situação Atual
                    </div>
                    
                    <div className="mb-6 flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                         <AlertTriangle size={40} className="text-red-500" />
                    </div>

                    <p className="text-slate-400 mb-8 leading-relaxed">
                        Você já estudou, seguiu gurus e comprou cursos. Mesmo assim, não tem um produto claro e vive uma <strong className="text-red-400">montanha-russa financeira</strong> sem saber o que fazer amanhã.
                    </p>

                    <div className="space-y-4">
                        {[
                            "Sem previsibilidade de caixa",
                            "Excesso de tarefas operacionais",
                            "Atrai apenas curiosos (leads ruins)"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 text-slate-500 group-hover:text-slate-300 transition-colors">
                                <XCircle size={20} className="text-red-900 group-hover:text-red-500 transition-colors shrink-0" />
                                <span className="font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: MentorFlow (Solution) */}
                <div className="bg-gradient-to-br from-gold-400 to-yellow-600 rounded-3xl p-8 md:p-10 relative shadow-[0_0_50px_rgba(234,179,8,0.15)] transform md:scale-105 z-10 text-black border border-gold-300">
                     <div className="absolute top-0 right-8 -translate-y-1/2 bg-black px-6 py-2 rounded-full text-sm font-bold tracking-widest text-gold-500 uppercase shadow-lg border border-gold-500">
                        Com MentorFlow
                    </div>

                    <div className="mb-6 flex items-center justify-between">
                         <div className="p-3 bg-black/10 rounded-xl">
                            <TrendingUp size={40} className="text-black" />
                         </div>
                         <span className="text-xs font-bold uppercase tracking-wide bg-black/10 px-3 py-1 rounded">Resultado</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-4">Estrutura Profissional</h3>
                    <p className="font-medium opacity-80 mb-8 leading-relaxed border-l-2 border-black/20 pl-4">
                        Eliminamos a incerteza. Implementamos um sistema validado que <strong className="text-black">atrai, qualifica e converte</strong>, permitindo que você foque apenas na entrega da sua expertise.
                    </p>

                    <div className="space-y-4">
                         {[
                            "Faturamento Recorrente (10k-20k)",
                            "Processos 100% Automatizados",
                            "Autoridade de Mercado Real"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 size={24} className="text-black shrink-0 fill-white/20" />
                                <span className="font-bold text-black">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <Button onClick={scrollToCta} variant="success" className="px-12 text-lg">
                    QUERO AUTOMATIZAR MEU FATURAMENTO
                </Button>
            </div>
        </div>
      </Section>
    </>
  );
};