import React from 'react';
import { Section } from './ui/Section';
import { X, Check, Ghost, Rocket, AlertOctagon, Crown } from 'lucide-react';
import { Button } from './ui/Button';

export const Comparison: React.FC = () => {
    const scrollToCta = () => {
        document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Section bg="dark" className="border-t border-slate-900 relative">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">
                    O Sábio vs. O Esforçado
                </h2>
                <p className="text-gold-500 text-lg uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
                    <AlertOctagon size={20} /> Por que você travou até aqui?
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch mb-8">
                {/* Side A: O Esforçado */}
                <div className="bg-slate-950/40 border border-slate-800 rounded-2xl p-8 md:p-10 relative overflow-hidden group hover:bg-slate-950/60 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 via-slate-800 to-slate-900"></div>

                    <div className="mb-8 flex items-center gap-4 pb-8 border-b border-slate-800/50">
                        <div className="p-3 bg-red-950/30 rounded-lg text-red-500 border border-red-900/30">
                            <Ghost size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-slate-300">O Mentor Comum</h3>
                            <p className="text-red-500 font-bold uppercase text-xs tracking-widest">O ESFORÇADO</p>
                        </div>
                    </div>

                    <ul className="space-y-6">
                        {[
                            "Vira escravo de ferramentas técnicas.",
                            "Assiste aulas infinitas sem implementar nada.",
                            "Exausto antes de vender o primeiro produto.",
                            "Perde meses 'montando' sem ver a cor do dinheiro.",
                            "Sozinho em um mar de dúvidas e frustrações."
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-slate-400 group-hover:text-slate-300 transition-colors">
                                <div className="shrink-0 mt-1 bg-red-950/50 rounded-full p-1">
                                    <X className="text-red-500" size={16} />
                                </div>
                                <span className="font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Side B: O Sábio - MentorFlow */}
                <div className="bg-gradient-to-b from-slate-900 to-black border border-gold-500/40 rounded-2xl p-8 md:p-10 relative overflow-hidden shadow-[0_0_30px_rgba(217,119,6,0.15)] transform md:-translate-y-4 z-10">
                    <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-gold-400 to-gold-600"></div>
                    <div className="absolute inset-0 bg-gold-500/5 pointer-events-none"></div>

                    <div className="mb-8 flex items-center gap-4 pb-8 border-b border-gold-500/20 relative z-10">
                        <div className="p-3 bg-gold-500/20 rounded-lg text-gold-500 border border-gold-500/30">
                            <Crown size={32} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">O Mentor MentorFlow</h3>
                            <p className="text-gold-500 font-bold uppercase text-xs tracking-widest">O SÁBIO</p>
                        </div>
                    </div>

                    <ul className="space-y-6 relative z-10">
                        {[
                            { title: "Foca no propósito:", desc: "Delega a engenharia para quem domina." },
                            { title: "Escala com sistema:", desc: "Máquina de vendas rodando em 25 dias." },
                            { title: "Zero desperdício:", desc: "Não perde tempo aprendendo o que não precisa." },
                            { title: "Sócio estratégico:", desc: "Mentor executivo de R$ 1 bilhão ao seu lado." },
                            { title: "Liberdade total:", desc: "Trabalha no negócio, não como operário dele." },
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="bg-green-500 p-1 rounded-full shrink-0 mt-1 shadow-lg shadow-green-500/20">
                                    <Check className="text-black" size={14} strokeWidth={4} />
                                </div>
                                <div>
                                    <strong className="text-white block text-lg">{item.title}</strong>
                                    <span className="text-slate-300 text-sm leading-relaxed">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Central Wisdom Quote */}
            <div className="max-w-3xl mx-auto mb-12">
                <div className="bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border-y border-gold-500/30 py-6 px-8">
                    <p className="text-center text-xl md:text-2xl text-gold-400 font-serif italic">
                        "A inteligência está em saber o que não fazer."
                    </p>
                </div>
            </div>

            <div className="flex justify-center">
                <Button onClick={scrollToCta} variant="success" className="px-10">
                    QUERO O CAMINHO DA SABEDORIA
                </Button>
            </div>
        </Section>
    );
};