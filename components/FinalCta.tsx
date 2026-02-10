import React, { useState } from 'react';
import { Section } from './ui/Section';
import { MessageCircle, X, Loader2, Hand, CheckCircle2 } from 'lucide-react';
import { TrustBadges } from './TrustBadges';

export const FinalCta: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = "Olá, Luciano! Acabei de ler a página da MentorFlow e quero entender como você pode implementar minha máquina de vendas para eu faturar meus primeiros R$ 10k.";
    const url = `https://wa.me/5521972070247?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      <Section id="final-cta" bg="darker" className="pb-24 pt-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-serif">
            Chegou a hora de decidir:<br />
            <span className="text-gold-500">Comando ou Operário?</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
            Você pode continuar sendo escravo da montagem técnica, ou pode assumir o controle com um sócio estratégico de <strong className="text-white">R$ 1 bilhão</strong> ao seu lado.
          </p>

          <TrustBadges />

          <div className="space-y-6">
            {/* Option 1: Main Offer */}
            <div className="border-2 border-gold-500 rounded-2xl p-6 md:p-8 bg-slate-900/50 hover:bg-slate-900 transition-colors shadow-[0_0_30px_rgba(234,179,8,0.1)] group relative overflow-hidden">
              {/* Shine effect */}
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-10 group-hover:animate-shine" />

              <p className="text-gold-400 font-bold mb-6 flex items-center justify-center gap-2 text-sm md:text-base uppercase tracking-wide">
                <Hand className="rotate-90" size={20} />
                Implementação Soberana Completa
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-gradient-to-b from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-black font-black text-xl md:text-2xl py-6 rounded-xl shadow-lg transform transition-all duration-200 hover:-translate-y-1 active:translate-y-0 uppercase tracking-wide"
              >
                REIVINDICAR MINHA LIBERDADE
              </button>
            </div>

            <div className="text-slate-500 font-medium text-sm uppercase tracking-widest">ou</div>

            {/* Option 2: WhatsApp */}
            <div className="border border-green-600 rounded-2xl p-6 md:p-8 bg-green-950/10 hover:bg-green-950/20 transition-colors">
              <p className="text-green-500 font-bold mb-6 text-sm md:text-base">
                Quero tirar dúvidas antes de começar:
              </p>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xl py-5 rounded-xl shadow-lg transform transition-all duration-200 hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <MessageCircle size={28} />
                Falar no WhatsApp
              </button>
            </div>
          </div>

          <p className="mt-12 text-slate-500 text-xs md:text-sm font-medium tracking-wide">
            Vagas Limitadas • Implementação Soberana • Resultados Previsíveis
          </p>
        </div>
      </Section>

      {/* Lead Modal Form */}
      {isModalOpen && <LeadFormModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

// --- Modal Component ---

interface LeadFormModalProps {
  onClose: () => void;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    vendeMentoria: '', // 'Sim' | 'Não'
    niche: '',
    revenue: '', // Faturamento ou Renda atual
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // URL do Google Apps Script
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyj7sghPYrqcLgiYxUZ7xS0oQXqlOFs-m9sDBoGNNjXIJAfoO9K1ee4MEgO2iUSPdGb1w/exec';

    console.log("Enviando dados para Google Sheets:", formData);

    try {
      // Enviar dados para Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Importante para evitar erro de CORS
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      console.log("Dados enviados com sucesso para Google Sheets!");

      // Redirecionar para WhatsApp após envio bem-sucedido
      const message = `Olá, Luciano! Me chamo ${formData.nome}. Preenchi o formulário de aplicação para o MentorFlow.`;
      window.open(`https://wa.me/5521972070247?text=${encodeURIComponent(message)}`, '_blank');

      onClose();
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Erro ao enviar. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-slate-900 border border-gold-500/30 rounded-2xl w-full max-w-lg relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

        {/* Header */}
        <div className="bg-slate-950 p-4 md:p-6 border-b border-slate-800 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white">Aplicação MentorFlow</h3>
            <p className="text-gold-500 text-xs uppercase tracking-wider font-semibold">Vagas Limitadas</p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-colors bg-slate-800 p-2 rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <label className="block text-slate-300 text-sm font-medium mb-1">Seu Nome Completo</label>
                <input
                  required
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  type="text"
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                  placeholder="Ex: João Silva"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">WhatsApp</label>
                  <input
                    required
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    type="tel"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">E-mail</label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-800 my-2"></div>

            {/* Qualification */}
            <div>
              <label className="block text-white text-base font-bold mb-3">Você já vende mentoria hoje?</label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all ${formData.vendeMentoria === 'Sim' ? 'bg-gold-500/10 border-gold-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'}`}>
                  <input type="radio" name="vendeMentoria" value="Sim" checked={formData.vendeMentoria === 'Sim'} onChange={handleChange} className="sr-only" />
                  <CheckCircle2 size={24} className={formData.vendeMentoria === 'Sim' ? 'text-gold-500' : 'text-slate-600'} />
                  <span className="font-semibold">Sim, já vendo</span>
                </label>
                <label className={`cursor-pointer border rounded-xl p-4 flex flex-col items-center justify-center gap-2 transition-all ${formData.vendeMentoria === 'Não' ? 'bg-gold-500/10 border-gold-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'}`}>
                  <input type="radio" name="vendeMentoria" value="Não" checked={formData.vendeMentoria === 'Não'} onChange={handleChange} className="sr-only" />
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${formData.vendeMentoria === 'Não' ? 'border-gold-500' : 'border-slate-600'}`}>
                    {formData.vendeMentoria === 'Não' && <div className="w-3 h-3 bg-gold-500 rounded-full" />}
                  </div>
                  <span className="font-semibold">Ainda não</span>
                </label>
              </div>
            </div>

            {/* Conditional Fields */}
            {formData.vendeMentoria === 'Sim' && (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Qual é o nicho da sua mentoria?</label>
                  <input
                    required
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                    placeholder="Ex: Finanças, Emagrecimento, Carreira..."
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Qual seu faturamento mensal atual com a mentoria?</label>
                  <select
                    required
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-gold-500 outline-none appearance-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="Até R$ 5k">Até R$ 5.000 /mês</option>
                    <option value="R$ 5k a R$ 10k">R$ 5.000 a R$ 10.000 /mês</option>
                    <option value="R$ 10k a R$ 30k">R$ 10.000 a R$ 30.000 /mês</option>
                    <option value="+ R$ 30k">Acima de R$ 30.000 /mês</option>
                  </select>
                </div>
              </div>
            )}

            {formData.vendeMentoria === 'Não' && (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Qual nicho você pretende atuar?</label>
                  <input
                    required
                    name="niche"
                    value={formData.niche}
                    onChange={handleChange}
                    type="text"
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-gold-500 outline-none"
                    placeholder="Sobre o que você tem conhecimento?"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 text-sm font-medium mb-1">Qual sua faixa de renda mensal atual?</label>
                  <select
                    required
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-gold-500 outline-none appearance-none"
                  >
                    <option value="">Selecione...</option>
                    <option value="Até R$ 5k">Até R$ 5.000 /mês</option>
                    <option value="R$ 5k a R$ 10k">R$ 5.000 a R$ 10.000 /mês</option>
                    <option value="R$ 10k a R$ 20k">R$ 10.000 a R$ 20.000 /mês</option>
                    <option value="+ R$ 20k">Acima de R$ 20.000 /mês</option>
                  </select>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-gold-400 to-yellow-600 text-black font-bold py-4 rounded-xl mt-4 hover:shadow-gold-500/20 shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" />
                  Enviando...
                </>
              ) : (
                "ENVIAR APLICAÇÃO"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};