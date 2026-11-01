import { useState } from 'react';
import { RosePetalsCanvas } from './components/RosePetalsCanvas';
import { OpeningSurprise } from './components/OpeningSurprise';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ApologyLetter } from './components/ApologyLetter';
import { SpecialCards } from './components/SpecialCards';
import { LoveQuestion } from './components/LoveQuestion';
import { OurMoments } from './components/OurMoments';
import { FinalSurprise } from './components/FinalSurprise';
import { SmileModal } from './components/SmileModal';
import { ScrollToTopHeart } from './components/ScrollToTopHeart';
import { RomanticCursor } from './components/RomanticCursor';
import { Footer } from './components/Footer';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [showSmileModal, setShowSmileModal] = useState(false);

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
          musicEnabled={musicPlaying}
          setMusicEnabled={setMusicPlaying}
        />
      )}

      {/* Main Experience (rendered behind with smooth transition once entered) */}
      <div
        className={`transition-opacity duration-1000 ${
          hasEntered ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Navbar
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
          onSendSmile={() => setShowSmileModal(true)}
        />

        <main className="relative z-10">
          <HeroSection onTriggerSmileModal={() => setShowSmileModal(true)} />
          <ApologyLetter />
          <SpecialCards />
          <LoveQuestion />
          <OurMoments />
          <FinalSurprise />
        </main>

        <Footer onReopenSurprise={() => setHasEntered(false)} />

        {/* Floating back-to-top heart button */}
        <ScrollToTopHeart />

        {/* Modal triggered by smile buttons */}
        <SmileModal
          isOpen={showSmileModal}
          onClose={() => setShowSmileModal(false)}
        />
      </div>
    </div>
  );
}
