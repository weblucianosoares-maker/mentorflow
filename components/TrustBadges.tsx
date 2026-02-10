import React from 'react';
import { Shield, Award, TrendingUp, Users } from 'lucide-react';

export const TrustBadges: React.FC = () => {
    const badges = [
        {
            icon: Shield,
            title: "Garantia de 30 Dias",
            description: "100% do seu dinheiro de volta se não ficar satisfeito"
        },
        {
            icon: Award,
            title: "+R$ 1 bilhão Gerado",
            description: "Estratégias validadas em vendas reais"
        },
        {
            icon: TrendingUp,
            title: "Resultados Comprovados",
            description: "Mentores alcançando R$ 10k-20k/mês"
        },
        {
            icon: Users,
            title: "Execução por Equipe",
            description: "Profissionais especializados"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-slate-900/50 border border-slate-800 rounded-lg hover:border-gold-500/30 transition-all"
                    >
                        <div className="bg-gradient-to-br from-gold-500 to-yellow-600 p-4 rounded-full mb-4">
                            <Icon className="text-slate-950" size={32} />
                        </div>
                        <h3 className="font-bold text-white mb-2">{badge.title}</h3>
                        <p className="text-sm text-slate-400">{badge.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
