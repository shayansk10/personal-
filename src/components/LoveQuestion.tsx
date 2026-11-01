import { useState } from 'react';
import { Heart, Sparkles, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

export function LoveQuestion() {
  const [selectedResponse, setSelectedResponse] = useState<'okay' | 'hmm' | null>(null);

  const handleOkay = () => {
    setSelectedResponse('okay');
    romanticAudio.playHeartChime();

    // Burst of hearts and rose confetti
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#e11d48', '#ffe4e6'],
    });
  };

  const handleHmm = () => {
    setSelectedResponse('hmm');
    romanticAudio.playHeartChime();

    // Gentle cute sparkle shower
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.65 },
      colors: ['#fda4af', '#fecdd3', '#fbcfe8'],
    });
  };

  const handleReset = () => {
    setSelectedResponse(null);
  };

  return (
    <section id="question" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] md:w-[600px] h-[380px] md:h-[600px] bg-rose-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="rounded-3xl p-7 sm:p-10 md:p-12 glass-romantic border border-rose-400/25 shadow-[0_15px_50px_rgba(225,29,72,0.2)] text-center relative overflow-hidden">
          {/* Subtle top badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/40 text-rose-300 text-xs font-sans-main tracking-wider uppercase mb-5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>A Gentle Question</span>
          </div>

          {/* Question Text */}
          <h2 className="text-2xl sm:text-3xl font-serif-romantic font-bold text-white mb-2">
            Meher, ek choti si baat poochun? 🥺
          </h2>
          <p className="text-lg sm:text-xl text-rose-200/90 font-handwriting text-2xl mb-8">
            Can I try to make you smile today?
          </p>

          {/* Buttons or Result */}
          {selectedResponse === null ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <button
                onClick={handleOkay}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-[0_0_25px_rgba(225,29,72,0.5)] hover:shadow-[0_0_35px_rgba(244,63,94,0.7)] transition-all duration-300 cursor-pointer w-full sm:w-auto border border-rose-300/30 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-4 h-4 text-rose-100 fill-rose-200 group-hover:scale-125 transition-transform" />
                <span className="font-sans-main">Okay, Try Karlo ❤️</span>
              </button>

              <button
                onClick={handleHmm}
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-base font-medium text-rose-200 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-500/30 hover:border-rose-400/50 shadow-sm transition-all duration-300 cursor-pointer w-full sm:w-auto transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span className="text-base">🙈</span>
                <span className="font-sans-main">Hmm, Dekhte Hain</span>
              </button>
            </div>
          ) : selectedResponse === 'okay' ? (
            <div className="p-6 rounded-2xl bg-rose-950/60 border border-rose-400/30 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-900/60 border border-rose-400/40 flex items-center justify-center text-rose-300 animate-bounce">
                <Heart className="w-8 h-8 fill-rose-500 text-rose-300" />
              </div>
              <p className="text-xl sm:text-2xl font-serif-romantic text-rose-100 font-semibold mb-2">
                YAYYY! 🥹❤️
              </p>
              <p className="text-base sm:text-lg text-rose-200/90 font-sans-main leading-relaxed max-w-lg mx-auto">
                Ab meri koshish hai ke tumhari smile wapas aa jaye. Tumhari khushi mere liye important hai.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-200 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Change your answer anytime</span>
              </button>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-rose-950/60 border border-rose-400/30 animate-in fade-in zoom-in-95 duration-500">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-rose-900/60 border border-rose-400/40 flex items-center justify-center text-rose-300 animate-gentle-float">
                <span className="text-2xl">🙈</span>
              </div>
              <p className="text-xl sm:text-2xl font-serif-romantic text-rose-100 font-semibold mb-2">
                Fair enough, Meher. 🥹
              </p>
              <p className="text-base sm:text-lg text-rose-200/90 font-sans-main leading-relaxed max-w-lg mx-auto">
                Main jaldi nahi karunga. Bas ek genuine si smile ke liye apni taraf se choti si koshish kar raha hoon. ❤️
              </p>
              <button
                onClick={handleReset}
                className="mt-6 inline-flex items-center gap-1.5 text-xs text-rose-400 hover:text-rose-200 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Want to try the other option?</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
