import React from 'react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';
import { ShieldCheck, MessageSquare } from 'lucide-react';

export const Offer: React.FC = () => {
    const handleBuy = () => {
        window.open('https://wa.me/5511999999999?text=Quero+garantir+minha+implementacao+MentorFlow', '_blank');
    };

  return (
    <Section bg="gradient" className="text-center pb-24">
      <div className="max-w-3xl mx-auto bg-slate-900 rounded-2xl border border-gold-500 shadow-[0_0_60px_rgba(234,179,8,0.1)] overflow-hidden">
         <div className="bg-gold-500 py-3 text-black font-bold uppercase tracking-widest text-sm">
             Oportunidade de Implementação
         </div>
         <div className="p-8 md:p-12 space-y-8">
             <h2 className="text-3xl md:text-4xl font-bold text-white">
                 Agora a decisão é sua.
             </h2>
             <p className="text-slate-400 text-lg">
                 Implementação Completa por 4 meses.
             </p>

             <div className="space-y-2">
                 <p className="text-slate-500 text-lg line-through">De R$ 10.000</p>
                 <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                     <span className="text-2xl text-slate-300">por apenas</span>
                     <span className="text-5xl md:text-6xl font-extrabold text-white">12x R$ 550,00</span>
                 </div>
                 <p className="text-gold-500 font-semibold">ou R$ 5.000,00 à vista</p>
             </div>

             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 max-w-md mx-auto">
                 <p className="text-sm text-slate-300">
                     <span className="text-white font-bold block mb-1">Ancoragem de Valor:</span>
                     Por menos de <span className="text-green-400 font-bold">R$ 19,00 por dia</span>, você contrata um time comercial executivo para o seu negócio.
                 </p>
             </div>

             <div className="space-y-4">
                 <Button onClick={handleBuy} fullWidth className="text-xl py-6 animate-pulse-slow">
                     QUERO MINHA MÁQUINA DE VENDAS
                 </Button>
                 
                 <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                     <div className="flex items-center gap-1">
                         <ShieldCheck size={16} className="text-green-500" />
                         <span>Garantia de 7 dias</span>
                     </div>
                     <div className="flex items-center gap-1">
                         <ShieldCheck size={16} className="text-green-500" />
                         <span>Compra Segura</span>
                     </div>
                 </div>
             </div>
         </div>
      </div>
      
      <div className="mt-8">
          <button onClick={handleBuy} className="text-slate-400 hover:text-white flex items-center gap-2 mx-auto transition-colors">
              <MessageSquare size={18} />
              <span>Ficou com alguma dúvida? Fale no WhatsApp</span>
          </button>
      </div>
    </Section>
  );
};