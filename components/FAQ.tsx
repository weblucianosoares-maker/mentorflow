import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { FAQItem } from '../types';
import { Button } from './ui/Button';
import { Helmet } from 'react-helmet';

const faqData: FAQItem[] = [
  {
    question: "Como criar uma mentoria do zero sem conhecimento técnico de marketing?",
    answer: "Com certeza. O MentorFlow foi criado justamente para quem quer fugir da parte técnica. Nós não apenas ensinamos; nós construímos a sua Landing Page, configuramos seu CRM e ativamos suas campanhas de tráfego para que você foque apenas na entrega da sua mentoria."
  },
  {
    question: "O sistema funciona para quem está começando do zero com mentoria online?",
    answer: "Sim. O foco do MentorFlow Start é tirar o mentor da inércia. Se você tem um conhecimento prático de sucesso, nós estruturamos sua primeira oferta High Ticket e montamos sua máquina de vendas nos primeiros 25 dias de projeto."
  },
  {
    question: "Como aumentar as vendas da minha mentoria que não está escalando?",
    answer: "Sim, esse é um dos nossos focos principais. Muitas vezes o mentor 'empaqueta' porque sua oferta não é agressiva ou o tráfego está atraindo leads desqualificados. Nós auditamos seu posicionamento e ajustamos seus funis para que você alcance faturamentos de R$ 10k a R$ 20k de forma constante."
  },
  {
    question: "Quanto tempo preciso dedicar por dia para implementar o sistema de vendas?",
    answer: "Como somos uma implementadora, o seu esforço operacional é mínimo. Você precisará de tempo para as reuniões de estratégia na Fase 1 e para validar as entregas que nós faremos para você. A ideia é que o sistema trabalhe para você, e não o contrário."
  },
  {
    question: "Preciso contratar outras ferramentas ou agência de tráfego para vender mentoria?",
    answer: "Não. A MentorFlow substitui a necessidade de contratar gestores de tráfego ou social media isolados, pois entregamos a estratégia de anúncios e a produção com IA integrada. Você precisará apenas custear suas ferramentas de CRM e o investimento direto nas plataformas de anúncios (Meta/Google)."
  },
  {
    question: "Qual o suporte oferecido durante os 4 meses de acompanhamento?",
    answer: "Você terá acesso direto à estratégia de Luciano Soares, um executivo com mais de R$ 1 bilhão em vendas gerados. Além das reuniões de cronograma, temos o suporte para garantir que cada engrenagem da sua máquina de vendas esteja rodando com perfeição."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    const message = "Olá, Luciano! Acabei de ler a página da MentorFlow e ainda tenho algumas dúvidas antes de começar.";
    const url = `https://wa.me/5521972070247?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Schema.org FAQPage para rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Section bg="darker" id="faq" className="border-t border-slate-900">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-2 mb-4">
            <HelpCircle className="text-gold-500" />
            <span className="text-gold-500 uppercase tracking-widest font-bold text-sm">Tira-Dúvidas</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Perguntas Frequentes</h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`border border-slate-800 rounded-lg overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-900 border-gold-500/30' : 'bg-slate-900/50 hover:border-slate-700'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-gold-400' : 'text-slate-200'}`}>
                  {item.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-gold-500 min-w-[24px]" />
                ) : (
                  <ChevronDown className="text-slate-500 min-w-[24px]" />
                )}
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button onClick={handleWhatsApp} variant="success">
            AINDA TENHO DÚVIDA? FALAR NO WHATSAPP
          </Button>
        </div>
      </Section>
    </>
  );
};