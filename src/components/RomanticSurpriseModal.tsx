import { useState, useEffect } from 'react';
import { Heart, X, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RomanticSurpriseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RomanticSurpriseModal({ isOpen, onClose }: RomanticSurpriseModalProps) {
  const [hugSent, setHugSent] = useState(false);

  // Reset hug state when reopened so it can be triggered repeatedly
  useEffect(() => {
    if (isOpen) {
      setHugSent(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSendHug = () => {
    setHugSent(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#fbcfe8', '#ffe4e6'],
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-3xl glass-romantic border border-rose-400/35 p-6 sm:p-8 text-center shadow-[0_0_60px_rgba(244,63,94,0.35)] animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 hover:text-white transition-colors cursor-pointer"
          aria-label="Close surprise"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Floating animated glowing heart */}
        <div className="relative w-18 h-18 sm:w-20 sm:h-20 mx-auto mb-4">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-rose-900 via-[#3a0624] to-pink-900 border border-rose-400/40 flex items-center justify-center shadow-lg animate-heart-glow">
            <Heart className="w-9 h-9 sm:w-10 sm:h-10 text-rose-300 fill-rose-500" />
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-200 animate-pulse" />
          </div>
        </div>

        {/* Message */}
        <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-white mb-3">
          Ek choti si baat, Meher… <span className="text-rose-400">❤️</span>
        </h3>

        <p className="text-base sm:text-lg text-rose-200/90 font-sans-main leading-relaxed mb-6 font-light">
          Aapki smile mere liye bohat special hai. Bas dil se yahi chahta hoon ke aap khush rahein aur aapke chehre par hamesha muskurahat rahe. 🥹💗
        </p>

        {/* Hug interaction */}
        {!hugSent ? (
          <button
            onClick={handleSendHug}
            className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm sm:text-base font-medium text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-[0_0_20px_rgba(225,29,72,0.4)] hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer w-full border border-rose-300/30 font-sans-main"
          >
            <span className="text-base group-hover:scale-125 transition-transform">🫶</span>
            <span>A little hug? 🫶</span>
          </button>
        ) : (
          <div className="p-4 rounded-2xl bg-rose-950/70 border border-rose-400/30 animate-in fade-in zoom-in-95 duration-500">
            {/* Animated two hearts coming together */}
            <div className="flex items-center justify-center gap-1.5 mb-2">
              <span className="text-xl animate-in slide-in-from-left-4 duration-500">❤️</span>
              <span className="text-lg">🫂</span>
              <span className="text-xl animate-in slide-in-from-right-4 duration-500">💖</span>
            </div>
            <p className="font-serif-romantic text-lg sm:text-xl text-rose-100 font-semibold mb-1">
              Sending you the warmest virtual hug, Meher. ❤️🫂
            </p>
            <p className="text-xs text-rose-300/70 font-sans-main mt-2">
              Always here for you, always caring.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
