import React from 'react';
import { Section } from './ui/Section';
import { X, PlayCircle, RefreshCw, ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

export const Problem: React.FC = () => {
  const scrollToCta = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    { label: "Estuda", rotation: 0 },
    { label: "Planeja", rotation: 60 },
    { label: "Posta", rotation: 120 },
    { label: "Tenta", rotation: 180 },
    { label: "Trava", rotation: 240 },
    { label: "Adia", rotation: 300 },
  ];

  return (
    <Section bg="dark" className="border-t border-slate-900">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Diagram Column */}
        <div className="flex flex-col items-center justify-center p-8 bg-slate-950/50 rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden group">
            {/* Background decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-900/10 rounded-full blur-3xl group-hover:bg-red-900/20 transition-all duration-700"></div>

            <h3 className="text-gold-500 font-bold uppercase tracking-wider mb-10 flex items-center gap-2 z-10">
                <RefreshCw className="animate-spin-slow" size={20} /> O Ciclo da Frustração
            </h3>
          
            {/* Cycle Container */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 mb-8">
                {/* Main Dashed Circle */}
                <div className="absolute inset-4 rounded-full border-2 border-dashed border-slate-700/50 animate-[spin_60s_linear_infinite]"></div>
                
                {/* Center Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
                    <div className="bg-slate-900/80 p-4 rounded-full border border-red-500/30 backdrop-blur-sm shadow-[0_0_20px_rgba(239,68,68,0.2)] animate-pulse">
                        <X size={48} className="text-red-500" />
                    </div>
                    <span className="text-slate-500 font-bold text-xs mt-2 tracking-widest uppercase">Sem Sistema</span>
                </div>

                {/* Steps Nodes */}
                {steps.map((step, index) => (
                    <div 
                        key={index}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none"
                        style={{ transform: `translate(-50%, -50%) rotate(${step.rotation}deg)` }}
                    >
                        {/* Node Item */}
                        <div 
                            className="absolute -top-5 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center transform"
                            style={{ transform: `translateX(-50%) rotate(-${step.rotation}deg)` }}
                        >
                            <div className="bg-slate-800 border border-red-500/40 text-red-200 text-xs md:text-sm font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-red-950/50 hover:border-red-500 transition-colors cursor-default whitespace-nowrap z-30 pointer-events-auto">
                                {step.label}
                            </div>
                            {/* Connector Line */}
                            <div className="h-4 w-px bg-gradient-to-b from-red-500/40 to-transparent mt-1"></div>
                        </div>
                    </div>
                ))}
            </div>
          
            {/* Solution Pill */}
            <div className="relative z-10 w-full">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex items-center gap-4 hover:border-gold-500/50 transition-colors group/solution cursor-default">
                    <PlayCircle className="text-green-500 flex-shrink-0 group-hover/solution:scale-110 transition-transform" size={40} />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <p className="text-white font-bold text-sm">A Solução MentorFlow</p>
                            <ArrowRight size={14} className="text-gold-500" />
                        </div>
                        <p className="text-slate-400 text-xs mt-1">Estrutura comercial pronta rodando por você.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Text Column */}
        <div className="pl-0 md:pl-8 flex flex-col items-start">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Isso acontece porque você está fazendo esforço <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">SEM SISTEMA</span>.
          </h2>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed mb-8">
            <p>
              Você entra em um ciclo vicioso: <br/>
              <span className="inline-flex flex-wrap gap-2 mt-2">
                {steps.map((s, i) => (
                    <span key={i} className="flex items-center gap-1 text-slate-400 text-base">
                        <span className="text-red-400 font-bold">{s.label}</span> 
                        {i < steps.length - 1 && <ArrowRight size={14} className="opacity-50" />}
                    </span>
                ))}
              </span>
            </p>
            <p className="border-l-4 border-slate-700 pl-4">
              Pare de achar que comprar um novo curso vai resolver. O que você precisa é de alguém que faça o trabalho duro por você e te entregue a estrutura comercial pronta.
            </p>
          </div>

          <Button onClick={scrollToCta} variant="success">
            CHEGA DE PATINAR. QUERO ESTRUTURA.
          </Button>
        </div>
      </div>
    </Section>
  );
};