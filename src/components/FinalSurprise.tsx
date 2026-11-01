import { useState } from 'react';
import { Heart, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

export function FinalSurprise() {
  const [hasSentHeart, setHasSentHeart] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const lines = [
    { text: "Before you leave, Meher… ❤️", style: "font-serif-romantic text-2xl sm:text-3xl font-bold text-white mb-4" },
    { text: "I just want you to know that you're important to me.", style: "text-lg sm:text-xl text-rose-200/90 font-light" },
    { text: "I'm sorry for the moments when I made you sad.", style: "text-lg sm:text-xl text-rose-300 font-light" },
    { text: "I can't change the past, but I can try to make things better.", style: "text-lg sm:text-xl text-rose-200/90 font-light" },
    { text: "You deserve honesty, care, respect, and a love that makes you feel safe.", style: "text-lg sm:text-xl text-rose-100 font-medium" },
    { text: "And if I could ask for just one thing today…", style: "text-lg sm:text-xl text-rose-200/80 font-light italic" },
    { text: "Let me try to put a little smile on your face again. 🥹❤️", style: "text-xl sm:text-2xl text-rose-300 font-semibold mt-2" },
  ];

  const handleSendHeart = () => {
    setIsSending(true);
    romanticAudio.playHeartChime();

    // Large celebratory confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#fb7185', '#fda4af', '#f43f5e', '#fff1f2'],
    });

    setTimeout(() => {
      setIsSending(false);
      setHasSentHeart(true);
    }, 800);
  };

  return (
    <section id="surprise" className="relative py-28 px-4 sm:px-6 overflow-hidden">
      {/* Cinematic dark romantic background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[750px] h-[350px] md:h-[750px] bg-gradient-to-tr from-rose-950 via-[#3a0624]/40 to-transparent rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Large Animated Glowing Center Heart */}
        <div className="relative mb-10 group">
          <div className="absolute -inset-6 bg-gradient-to-r from-rose-600 via-pink-600 to-rose-500 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000 animate-pulse" />
          
          <div
            className={`relative flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-rose-950 via-[#2f081d] to-pink-950 border border-rose-400/30 shadow-[0_0_50px_rgba(244,63,94,0.4)] ${
              isSending ? 'scale-125 transition-transform duration-700' : 'animate-heart-glow'
            }`}
          >
            <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-rose-400 fill-rose-500/80 drop-shadow-[0_0_20px_rgba(244,63,94,0.9)]" />
            <Sparkles className="absolute top-2 right-2 w-4 h-4 text-amber-200 animate-pulse" />
          </div>
        </div>

        {/* Line by line message container */}
        <div className="space-y-4 max-w-2xl px-4 font-sans-main">
          {lines.map((line, idx) => (
            <p key={idx} className={line.style} style={{ textWrap: 'balance' }}>
              {line.text}
            </p>
          ))}
        </div>

        {/* Large Glowing Signature */}
        <div className="my-10 pt-4">
          <p className="font-handwriting text-3xl sm:text-4xl md:text-5xl text-rose-300 drop-shadow-[0_0_15px_rgba(244,114,182,0.4)] tracking-wide">
            Always With Love, Your Person. 💗
          </p>
        </div>

        {/* Final Button & Animated Sky Heart Response */}
        {!hasSentHeart ? (
          <div className="flex flex-col items-center">
            <button
              onClick={handleSendHeart}
              disabled={isSending}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-medium text-white bg-gradient-to-r from-rose-600 via-rose-500 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-[0_0_35px_rgba(225,29,72,0.55)] hover:shadow-[0_0_55px_rgba(244,63,94,0.85)] transform hover:-translate-y-1 active:translate-y-0 transition-all duration-300 cursor-pointer border border-rose-300/30"
            >
              <Heart className="w-5 h-5 text-rose-100 fill-rose-200 group-hover:scale-125 transition-transform" />
              <span className="font-sans-main tracking-wide">Send Me A Little Heart ❤️</span>
              <Send className="w-4 h-4 text-rose-200 opacity-70 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="mt-3 text-xs text-rose-300/60 font-sans-main">
              Takes just one tap to brighten the day
            </p>
          </div>
        ) : (
          <div className="p-7 sm:p-8 rounded-3xl glass-romantic border border-rose-400/40 shadow-[0_0_40px_rgba(225,29,72,0.35)] animate-in fade-in zoom-in-95 duration-700 max-w-lg">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-rose-950/80 border border-rose-400/40 flex items-center justify-center animate-gentle-float">
              <Heart className="w-9 h-9 text-rose-400 fill-rose-500 shadow-glow" />
            </div>
            <p className="text-xl sm:text-2xl font-serif-romantic text-white font-semibold mb-2">
              Heart Received, Meher ❤️
            </p>
            <p className="text-base sm:text-lg text-rose-200/90 font-handwriting text-2xl leading-relaxed">
              &ldquo;Sending a little love your way, Meher. No pressure, just love. 💌&rdquo;
            </p>
            <button
              onClick={() => setHasSentHeart(false)}
              className="mt-6 text-xs text-rose-400/70 hover:text-rose-200 underline decoration-rose-500/30 cursor-pointer"
            >
              Send another heart anytime
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
