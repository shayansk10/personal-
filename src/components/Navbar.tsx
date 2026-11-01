import { Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onSendSmile: () => void;
  onOpenRomanticSurprise: () => void;
}

export function Navbar({ onSendSmile, onOpenRomanticSurprise }: NavbarProps) {
  const handleHeartClick = () => {
    // Burst of floating hearts and tiny sparkles
    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.1, x: 0.85 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#ffe4e6'],
    });

    onOpenRomanticSurprise();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0e040c]/80 backdrop-blur-md border-b border-rose-500/15 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#hero"
          className="text-lg font-serif-romantic font-semibold tracking-wide text-rose-100 hover:text-white flex items-center gap-2 whitespace-nowrap shrink-0 transition-colors"
        >
          <span className="text-xl">For Meher</span>
          <span className="text-rose-500 animate-pulse">❤️</span>
        </a>

        {/* Zone 2: Clean single-line nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-rose-200/70 font-sans-main">
          <a
            href="#hero"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            My Meher
          </a>
          <a
            href="#letter"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            The Letter
          </a>
          <a
            href="#special"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            Why You
          </a>
          <a
            href="#question"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            A Question
          </a>
          <a
            href="#surprise"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            For You
          </a>
        </nav>

        {/* Zone 3: Actions - Smile button + Glowing Romantic Heart Surprise Button */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onSendSmile}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-200 bg-rose-950/60 border border-rose-500/25 rounded-full hover:bg-rose-900/60 hover:border-rose-400/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
            title="Send Meher a cute smile"
          >
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500/50" />
            <span>Smile Meher? 🥺</span>
          </button>

          {/* Glowing Romantic Heart Surprise Button replacing music toggle */}
          <button
            onClick={handleHeartClick}
            className="group relative flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-full bg-gradient-to-r from-rose-950/80 via-[#2f081d] to-pink-950/80 hover:from-rose-900/90 hover:to-pink-900/90 text-rose-100 border border-rose-400/40 shadow-[0_0_15px_rgba(244,63,94,0.35)] hover:shadow-[0_0_25px_rgba(244,63,94,0.6)] active:scale-95 transition-all duration-300 cursor-pointer whitespace-nowrap shrink-0 overflow-hidden"
            title="A Little Romantic Surprise for Meher ❤️"
            aria-label="Romantic surprise for Meher"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-rose-500/10 via-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500 animate-pulse group-hover:scale-125 transition-transform" />
            <span className="relative z-10 font-sans-main tracking-wide">For Meher</span>
            <Sparkles className="w-3 h-3 text-amber-200 opacity-80 animate-pulse" />
          </button>
        </div>
      </div>
    </header>
  );
}
