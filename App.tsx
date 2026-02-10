import React from 'react';
import { SEOHead } from './components/SEOHead';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { VSL } from './components/VSL';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Comparison } from './components/Comparison';
import { Deliverables } from './components/Deliverables';
import { SocialProof } from './components/SocialProof';
import { Authority } from './components/Authority';
import { Filter } from './components/Filter';
import { RichContent } from './components/RichContent';
import { FAQ } from './components/FAQ';
import { FinalCta } from './components/FinalCta';
import { WhatsAppButton } from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0E14] text-slate-50 selection:bg-gold-500 selection:text-black">
      <SEOHead />
      <TopBar />
      <Hero />
      <VSL />
      <Problem />
      <Solution />
      <Comparison />
      <Deliverables />
      <SocialProof />
      <Authority />
      <Filter />
      <RichContent />
      <FAQ />
      <FinalCta />

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-slate-600 text-sm">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-gold-500 font-bold tracking-widest">MENTORFLOW</div>
          <p>&copy; {new Date().getFullYear()} MentorFlow. Todos os direitos reservados.</p>
          <p className="mt-2">Luciano Soares</p>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

export default App;