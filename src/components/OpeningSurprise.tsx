import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, MailOpen } from 'lucide-react';

interface OpeningSurpriseProps {
  onOpen: () => void;
}

export function OpeningSurprise({ onOpen }: OpeningSurpriseProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenSurprise = () => {
    setIsOpening(true);

    // Trigger sweet petal and heart confetti shower
    const count = 200;
    const defaults = {
      origin: { y: 0.65 },
      colors: ['#e11d48', '#fb7185', '#fda4af', '#f43f5e', '#ffe4e6', '#fbbf24'],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      shapes: ['circle'],
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.4,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });

    // Gentle delayed transition for the heart bloom animation to finish gracefully
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between px-6 py-10 transition-all duration-1000 ${
        isOpening
          ? 'opacity-0 scale-105 pointer-events-none'
          : 'opacity-100 scale-100 bg-radial from-[#1e0716] via-[#10030c] to-[#060105]'
      }`}
    >
      {/* Decorative ambient glowing backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] md:w-[600px] h-[340px] md:h-[600px] bg-rose-600/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-700/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Top subtle indicator */}
      <div className="w-full max-w-md flex justify-center items-center text-xs text-rose-300/60 font-sans tracking-wide">
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/40 text-rose-300">
          <Sparkles className="w-3.5 h-3.5 text-rose-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>A Little Secret Just For You</span>
        </span>
      </div>

      {/* Center Heart and Text */}
      <div className="flex flex-col items-center text-center my-auto max-w-lg z-10 px-4">
        {/* Animated Glowing Heart */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-600 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-75 transition duration-1000 animate-pulse" />
          
          <div
            className={`relative flex items-center justify-center w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-tr from-rose-950 via-[#370d24] to-rose-900 border border-rose-400/30 shadow-[0_0_50px_rgba(225,29,72,0.5)] transition-transform duration-700 ${
              isOpening ? 'scale-150 rotate-12' : 'animate-heart-glow hover:scale-105'
            }`}
          >
            <Heart className="w-14 h-14 md:w-18 md:h-18 text-rose-400 fill-rose-500/80 drop-shadow-[0_0_20px_rgba(244,63,94,0.8)]" />
            
            {/* Tiny floating hearts surrounding */}
            <Heart className="absolute -top-1 -right-2 w-5 h-5 text-pink-300 fill-pink-400/70 animate-bounce" style={{ animationDuration: '2.5s' }} />
            <Heart className="absolute -bottom-2 -left-2 w-4 h-4 text-rose-300 fill-rose-400/70 animate-bounce" style={{ animationDuration: '3.2s' }} />
            <Sparkles className="absolute top-2 left-0 w-4 h-4 text-amber-200 animate-pulse" />
          </div>
        </div>

        {/* Text */}
        <h1 className="text-3xl md:text-5xl font-serif-romantic text-white tracking-tight mb-3">
          Hey, Meher… <span className="inline-block text-rose-400 animate-pulse">❤️</span>
        </h1>
        
        <p className="text-base md:text-xl text-rose-200/80 font-sans-main font-light max-w-sm mb-8 leading-relaxed">
          Someone has something to tell you.
        </p>

        {/* Glowing Button */}
        <button
          onClick={handleOpenSurprise}
          disabled={isOpening}
          className="group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-base font-medium text-white bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-[0_0_35px_rgba(225,29,72,0.6)] hover:shadow-[0_0_50px_rgba(244,63,94,0.85)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer overflow-hidden border border-rose-300/30"
        >
          <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <MailOpen className="w-5 h-5 text-rose-100 transition-transform group-hover:scale-110" />
          <span className="relative z-10 tracking-wide font-sans-main">Open This Little Surprise 💌</span>
        </button>
      </div>

      {/* Tiny handwritten note at the bottom */}
      <div className="z-10 text-center pb-2">
        <p className="font-handwriting text-xl md:text-2xl text-rose-300/80 tracking-wide">
          Made with love, just for you.
        </p>
      </div>
    </div>
  );
}
