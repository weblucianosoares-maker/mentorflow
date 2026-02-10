import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000); // 10 seconds delay

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = "Olá, Luciano! Acabei de ler a página da MentorFlow e quero entender como você pode implementar minha máquina de vendas para eu faturar meus primeiros R$ 10k.";
    const url = `https://wa.me/5521972070247?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {showMessage && (
        <div className="bg-white text-slate-900 p-3 rounded-lg shadow-xl max-w-[250px] relative animate-fade-in-up mb-2 border-l-4 border-gold-500">
            <button 
                onClick={(e) => { e.stopPropagation(); setShowMessage(false); }}
                className="absolute -top-2 -right-2 bg-slate-200 rounded-full p-0.5 text-slate-600 hover:text-red-500"
            >
                <X size={14} />
            </button>
          <p className="text-sm font-semibold">
            Dúvida sobre como sair da inércia? Clique aqui e vamos conversar.
          </p>
        </div>
      )}
      
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
        aria-label="Falar no WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:opacity-100 duration-1000"></span>
        <MessageCircle size={32} color="white" className="relative z-10" />
      </button>
    </div>
  );
};