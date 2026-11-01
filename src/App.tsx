import { useState } from 'react';
import { RosePetalsCanvas } from './components/RosePetalsCanvas';
import { OpeningSurprise } from './components/OpeningSurprise';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ApologyLetter } from './components/ApologyLetter';
import { SpecialCards } from './components/SpecialCards';
import { LoveQuestion } from './components/LoveQuestion';
import { FinalSurprise } from './components/FinalSurprise';
import { SmileModal } from './components/SmileModal';
import { RomanticSurpriseModal } from './components/RomanticSurpriseModal';
import { ScrollToTopHeart } from './components/ScrollToTopHeart';
import { RomanticCursor } from './components/RomanticCursor';
import { Footer } from './components/Footer';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showSmileModal, setShowSmileModal] = useState(false);
  const [showRomanticSurprise, setShowRomanticSurprise] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0b0307] text-[#fce7f3] selection:bg-rose-500/30 selection:text-rose-100 overflow-x-hidden">
      {/* Background drifting rose petals */}
      <RosePetalsCanvas />

      {/* Desktop-only delicate sparkle trail */}
      <RomanticCursor />

      {/* Fullscreen Initial Opening Surprise */}
      {!hasEntered && (
        <OpeningSurprise
          onOpen={() => setHasEntered(true)}
        />
      )}

      {/* Main Experience (rendered behind with smooth transition once entered) */}
      <div
        className={`transition-opacity duration-1000 ${
          hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Navbar
          onSendSmile={() => setShowSmileModal(true)}
          onOpenRomanticSurprise={() => setShowRomanticSurprise(true)}
        />

        <main className="relative z-10">
          <HeroSection onTriggerSmileModal={() => setShowSmileModal(true)} />
          <ApologyLetter />
          <SpecialCards />
          <LoveQuestion />
          <FinalSurprise />
        </main>

        <Footer onReopenSurprise={() => setHasEntered(false)} />

        {/* Floating back-to-top heart button */}
        <ScrollToTopHeart />

        {/* Modal triggered by smile button */}
        <SmileModal
          isOpen={showSmileModal}
          onClose={() => setShowSmileModal(false)}
        />

        {/* Romantic Heart Surprise Popup */}
        <RomanticSurpriseModal
          isOpen={showRomanticSurprise}
          onClose={() => setShowRomanticSurprise(false)}
        />
      </div>
    </div>
  );
}
