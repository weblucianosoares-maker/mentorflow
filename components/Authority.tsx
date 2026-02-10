import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { Award, Briefcase, TrendingUp } from 'lucide-react';

export const Authority: React.FC = () => {
    const scrollToCta = () => {
        document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Section bg="darker" className="border-t border-slate-900">
            <div className="grid md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-5 order-2 md:order-1">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gold-500 rounded-full blur-3xl opacity-20"></div>
                        <img
                            src="./luciano.jpg"
                            alt="Luciano Soares - Estrategista Executivo"
                            className="relative z-10 rounded-2xl shadow-2xl border-2 border-gold-500/30 grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-4 left-4 right-4 bg-[#0A0E14]/95 p-4 rounded border border-gold-500/50 backdrop-blur-sm z-20">
                            <p className="font-bold text-white text-lg font-serif">Luciano Soares</p>
                            <p className="text-gold-500 text-sm font-semibold">Sócio Estratégico de R$ 1 bilhão</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-7 order-1 md:order-2 space-y-6">
                    <div className="space-y-2">
                        <p className="text-gold-500 font-bold text-sm tracking-widest uppercase">O Estrategista</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-serif">
                            Você não está contratando uma agência.<br />
                            Está trazendo um <span className="text-gold-500">sócio estratégico de R$ 1 bilhão</span> para o seu lado.
                        </h2>
                    </div>

                    <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-800">
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <Award className="text-gold-500" size={32} />
                            </div>
                            <p className="text-2xl font-bold text-white">20+</p>
                            <p className="text-slate-400 text-sm">Anos de Experiência</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <TrendingUp className="text-gold-500" size={32} />
                            </div>
                            <p className="text-2xl font-bold text-white">R$ 1Bi+</p>
                            <p className="text-slate-400 text-sm">Em Vendas Geradas</p>
                        </div>
                        <div className="text-center">
                            <div className="flex justify-center mb-2">
                                <Briefcase className="text-gold-500" size={32} />
                            </div>
                            <p className="text-2xl font-bold text-white">2016</p>
                            <p className="text-slate-400 text-sm">No Digital</p>
                        </div>
                    </div>

                    <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
                        <p>
                            Com mais de <strong className="text-white">30 anos de carreira profissional</strong> e tendo gerado mais de <strong className="text-white">R$ 1 milhão em vendas</strong> para empresas gigantes, eu vivi o topo do mundo corporativo.
                        </p>
                        <p>
                            Mas ao entrar no mundo das mentorias digitais, me deparei com um cenário frustrante. Vi mentores brilhantes afundados em configurações técnicas por meses, chegando ao ponto de <strong className="text-white">desistir antes mesmo do primeiro cliente</strong>.
                        </p>
                        <div className="border-l-4 border-gold-500 pl-6 py-4 my-6 bg-gradient-to-r from-gold-500/10 to-transparent rounded-r-lg">
                            <p className="italic text-slate-200 font-medium text-lg">
                                "A MentorFlow nasceu desse inconformismo. Minha missão é uma só: <span className="text-gold-400 font-bold">tirar o peso da execução das suas costas e colocar o dinheiro no seu bolso</span>."
                            </p>
                        </div>
                    </div>

                    <Button onClick={scrollToCta} variant="success" className="w-full md:w-auto mt-6">
                        QUERO ESSE SÓCIO ESTRATÉGICO
                    </Button>
                </div>
            </div>
        </Section>
    );
};