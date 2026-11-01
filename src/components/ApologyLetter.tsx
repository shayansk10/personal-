import { useState } from 'react';
import { Heart, Sparkles, Bookmark, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export function ApologyLetter() {
  const [isSaved, setIsSaved] = useState(false);
  const [heartsCount, setHeartsCount] = useState(0);

  const paragraphs = [
    "Meher, meri jaan… ❤️",
    "Mujhe nahi pata ke main apni feelings ko words mein kitna achay se explain kar paunga, lekin ek baat dil se kehna chahta hoon.",
    "Agar meri kisi baat, meri kisi harkat ya meri kisi ghalti se aapka dil dukha hai, toh I'm genuinely sorry. 🥺",
    "Mera kabhi bhi yeh intention nahi tha ke meri wajah se aap udaas hon. Aapki narazgi mere liye matter karti hai, kyun ke aap mere liye matter karti hain.",
    "Main yeh nahi chahta ke aap sirf meri baat maan kar sab bhool jaayein. Main chahta hoon ke aap meri feelings samjhein aur meri taraf se ki gayi ghalti ko sudharne ki koshish bhi dekhein.",
    "Aapki smile, aapki baatein, aapka woh cute sa andaaz… yeh sab mere liye bohat special hai.",
    "Main perfect nahi hoon, Meher. Mujhse ghaltiyan ho sakti hain, lekin main aapki feelings ko samajhna aur aapke liye behtar banna chahta hoon.",
    "Aaj bas itna kehna hai…",
    "I'm sorry, meri Meher. ❤️",
    "Jab aapka dil kare, mujhse baat kar lijiye. Main aapki baat sunna chahta hoon.",
    "No pressure, no complaints. Bas dil se ek sorry aur aapke chehre par ek choti si smile ki umeed.",
    "— Aapka, with all my heart. ❤️"
  ];

  const handleTapHeart = () => {
    setHeartsCount(prev => prev + 1);

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#f43f5e', '#fb7185', '#fda4af'],
    });
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <section id="letter" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[650px] h-[400px] md:h-[650px] bg-rose-950/25 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/30 text-rose-300 text-xs font-sans-main tracking-widest uppercase mb-3">
            <Heart className="w-3 h-3 text-rose-400 fill-rose-500" />
            <span>Straight from the heart</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-romantic font-bold text-white tracking-tight">
            A Heartfelt Apology — Please Read This, Meher 🥺
          </h2>
          <p className="mt-2 text-rose-200/70 text-sm sm:text-base font-sans-main max-w-md mx-auto">
            Take your time. Every single word here is honest and sincere.
          </p>
        </div>

        {/* Letter Card */}
        <div className="relative rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-12 glass-romantic border border-rose-400/20 shadow-[0_15px_60px_-15px_rgba(225,29,72,0.35)] transition-all">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-4 left-4 text-rose-400/30 pointer-events-none select-none">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute top-4 right-4 text-rose-400/30 pointer-events-none select-none">
            <Sparkles className="w-5 h-5" />
          </div>
          <div className="absolute bottom-4 left-4 text-rose-400/30 pointer-events-none select-none">
            <Heart className="w-4 h-4 fill-rose-400/20" />
          </div>
          <div className="absolute bottom-4 right-4 text-rose-400/30 pointer-events-none select-none">
            <Heart className="w-4 h-4 fill-rose-400/20" />
          </div>

          {/* Letter Content */}
          <div className="space-y-5 text-rose-100/90 font-sans-main text-base sm:text-lg leading-relaxed sm:leading-loose">
            {paragraphs.map((para, index) => {
              const isGreeting = index === 0;
              const isSorryHighlight = para.includes("I'm sorry, meri Meher. ❤️");
              const isSignoff = index === paragraphs.length - 1;

              if (isGreeting) {
                return (
                  <p
                    key={index}
                    className="font-serif-romantic text-2xl sm:text-3xl text-rose-200 font-semibold tracking-wide border-b border-rose-500/20 pb-4 mb-6"
                  >
                    {para}
                  </p>
                );
              }

              if (isSorryHighlight) {
                return (
                  <div
                    key={index}
                    className="my-6 py-4 px-5 rounded-xl bg-gradient-to-r from-rose-950/70 via-rose-900/40 to-pink-950/70 border border-rose-400/30 shadow-inner text-center"
                  >
                    <p className="font-serif-romantic text-xl sm:text-2xl text-rose-200 font-medium tracking-wide">
                      {para}
                    </p>
                  </div>
                );
              }

              if (isSignoff) {
                return (
                  <div key={index} className="pt-6 border-t border-rose-500/20 mt-8 text-right">
                    <p className="font-handwriting text-2xl sm:text-3xl text-rose-300 font-medium tracking-wide">
                      {para}
                    </p>
                  </div>
                );
              }

              return (
                <p key={index} className="transition-opacity duration-300 hover:text-white">
                  {para}
                </p>
              );
            })}
          </div>

          {/* Card Interaction Footer */}
          <div className="mt-8 pt-6 border-t border-rose-500/15 flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={handleTapHeart}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-950/50 hover:bg-rose-900/60 border border-rose-500/25 text-rose-200 text-xs sm:text-sm font-medium transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-rose-400 fill-rose-500" />
              <span>Feel This Heart</span>
              {heartsCount > 0 && (
                <span className="ml-1 px-2 py-0.5 rounded-full bg-rose-800/80 text-rose-100 text-xs font-mono">
                  {heartsCount}
                </span>
              )}
            </button>

            <button
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-rose-300/80 hover:text-rose-100 transition-colors cursor-pointer"
            >
              {isSaved ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Saved to memory ✨</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-4 h-4 text-rose-400" />
                  <span>Keep this close</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
