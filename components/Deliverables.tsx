import React from 'react';
import { Section } from './ui/Section';
import { Check, CalendarClock, Shield, Target, Zap, Brain } from 'lucide-react';
import { TimelinePhase } from '../types';
import { Button } from './ui/Button';

const pilares = [
    {
        icon: Shield,
        title: "Arquitetura High Ticket",
        desc: "Estruturação da oferta que impõe respeito e atrai investidores, não curiosos."
    },
    {
        icon: Target,
        title: "Engenharia de Conversão",
        desc: "Páginas e funis que filtram curiosos e convertem decisores em clientes."
    },
    {
        icon: Zap,
        title: "Governança de Tráfego",
        desc: "Anúncios estratégicos trabalhando pela sua autoridade 24 horas por dia."
    },
    {
        icon: Brain,
        title: "Inteligência de Vendas",
        desc: "Scripts, automações e sistemas para fechamentos previsíveis e escaláveis."
    },
];

const phases: TimelinePhase[] = [
    { title: "Fase 1: Auditoria & PCI", days: "Até o 5º dia", description: "Auditoria de oferta e definição de metas e Persona (PCI)." },
    { title: "Fase 2: Proposta Irresistível", days: "Até o 15º dia", description: "Teste de temas campeões e criação da Proposta Irresistível." },
    { title: "Fase 3: Automação & Scripts", days: "Até o 25º dia", description: "Landing Page oficial, Scripts e Automação com IA rodando." },
    { title: "Fase 4: Pitch & Evento", days: "Até o 45º dia", description: "Formatação do Evento de Vendas e Pitch de Alta Autoridade." },
    { title: "Fase 5: Escala", days: "Até o 120º dia", description: "Monitoramento e rumo aos seus primeiros R$ 50k/mês." },
];

export const Deliverables: React.FC = () => {
    const scrollToCta = () => {
        document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            {/* As Engrenagens do Poder */}
            <Section bg="dark">
                <div className="text-center mb-12">
                    <p className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-3">Os 4 Pilares do Sistema</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
                        Nós não criamos cursos.<br />
                        Nós erguemos <span className="text-gold-500">Ativos de Vendas</span>.
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
                    {pilares.map((pilar, index) => {
                        const Icon = pilar.icon;
                        return (
                            <div key={index} className="bg-gradient-to-br from-slate-900 to-slate-950 border border-gold-500/20 p-8 rounded-xl hover:border-gold-500/50 transition-all group relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl group-hover:bg-gold-500/10 transition-all"></div>
                                <div className="relative z-10">
                                    <div className="w-14 h-14 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors border border-gold-500/30">
                                        <Icon size={28} className="text-gold-500" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 font-serif">{pilar.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">{pilar.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center">
                    <Button onClick={scrollToCta} variant="success" className="px-10">
                        SOLICITAR DIAGNÓSTICO DE ELITE
                    </Button>
                </div>
            </Section>


            {/* Timeline */}
            <Section bg="darker" className="relative">
                <div className="text-center mb-16">
                    <p className="text-gold-500 font-bold text-sm tracking-widest uppercase mb-3">Implementação Soberana</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 font-serif">O Cronograma da Máquina</h2>
                    <p className="text-slate-400 font-medium">Aceleramos o seu comercial em tempo recorde</p>
                </div>

                <div className="relative max-w-3xl mx-auto pl-4 md:pl-0 mb-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-600 via-gold-400 to-slate-800 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {phases.map((phase, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Spacer for layout balance */}
                                <div className="hidden md:block w-5/12"></div>

                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-slate-900 border-4 border-gold-500 rounded-full transform -translate-x-1/2 z-10"></div>

                                {/* Content Card */}
                                <div className="w-full pl-12 md:pl-0 md:w-5/12">
                                    <div className={`bg-slate-900 p-6 rounded-lg border-l-4 border-gold-500 shadow-xl ${index % 2 === 0 ? 'md:text-left' : 'md:text-right md:border-l-0 md:border-r-4'}`}>
                                        <div className={`flex items-center gap-2 text-gold-500 mb-2 font-mono text-sm ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                            <CalendarClock size={16} />
                                            <span>{phase.days}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                                        <p className="text-slate-400 text-sm">{phase.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <Button onClick={scrollToCta} variant="success" className="px-10">
                        QUERO MINHA MÁQUINA EM 25 DIAS
                    </Button>
                </div>
            </Section>
        </>
    );
};