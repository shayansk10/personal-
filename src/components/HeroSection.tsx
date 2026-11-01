import { useState, useEffect } from 'react';
import { Heart, Mail, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/audio';

interface HeroSectionProps {
  onTriggerSmileModal: () => void;
}

export function HeroSection({ onTriggerSmileModal }: HeroSectionProps) {
  const fullHeadline = "MEHER, YOU HAVE A SPECIAL PLACE IN MY HEART.";
  const [typedHeadline, setTypedHeadline] = useState('');
  const [showSub1, setShowSub1] = useState(false);
  const [showSub2, setShowSub2] = useState(false);

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setTypedHeadline(fullHeadline.slice(0, index));
      if (index >= fullHeadline.length) {
        clearInterval(interval);
        // Sequential reveals
        setTimeout(() => setShowSub1(true), 400);
        setTimeout(() => setShowSub2(true), 1300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const handleSmileClick = () => {
    romanticAudio.playHeartChime();

    // Trigger sweet heart confetti
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f43f5e', '#fb7185', '#fda4af', '#fecdd3', '#fff1f2'],
    });

    onTriggerSmileModal();
  };

  const scrollToLetter = () => {
    const el = document.getElementById('letter');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[680px] h-[350px] md:h-[680px] bg-gradient-to-tr from-rose-900/30 via-pink-600/20 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-rose-950/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 bg-pink-950/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Subtle decorative eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/20 bg-rose-950/30 text-rose-300 text-xs font-sans-main tracking-wider uppercase mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>A Dedicated Love Letter</span>
          <Heart className="w-3 h-3 text-rose-400 fill-rose-500" />
        </div>

        {/* Main Headline with Typewriter */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif-romantic font-bold text-white tracking-tight leading-[1.2] mb-6 min-h-[3.8rem] sm:min-h-[4.5rem]"
          style={{ textWrap: 'balance' }}
        >
          {typedHeadline}
          {typedHeadline.length < fullHeadline.length && (
            <span className="inline-block w-1 h-8 md:h-12 bg-rose-400 ml-1.5 animate-pulse align-middle" />
          )}
        </h1>

        {/* Line-by-line reveal 1 */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-rose-200/90 font-sans-main font-light max-w-2xl leading-relaxed transition-all duration-700 transform mb-4 ${
            showSub1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ textWrap: 'balance' }}
        >
          Out of all the people in this world, there&apos;s one person whose smile means a little more to me…
        </p>

        {/* Line-by-line reveal 2 */}
        <p
          className={`text-xl sm:text-2xl md:text-3xl font-handwriting text-rose-300 transition-all duration-700 delay-150 transform mb-10 ${
            showSub2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          And that&apos;s you, Meher. 🥹<span className="text-rose-400 font-sans ml-1">❤️</span>
        </p>

        {/* Two Glowing CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-700 delay-300 ${
            showSub2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={scrollToLetter}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-[0_0_25px_rgba(225,29,72,0.45)] hover:shadow-[0_0_40px_rgba(244,63,94,0.7)] transition-all duration-300 cursor-pointer w-full sm:w-auto border border-rose-300/30 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Mail className="w-4 h-4 text-rose-200 transition-transform group-hover:scale-110" />
            <span className="font-sans-main whitespace-nowrap">There&apos;s Something I Want to Say 💌</span>
          </button>

          <button
            onClick={handleSmileClick}
            className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm sm:text-base font-medium text-rose-200 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-500/30 hover:border-rose-400/60 shadow-[0_0_20px_rgba(225,29,72,0.2)] hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] transition-all duration-300 cursor-pointer w-full sm:w-auto transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Heart className="w-4 h-4 text-rose-400 fill-rose-500/60 group-hover:scale-110 transition-transform" />
            <span className="font-sans-main whitespace-nowrap">Just One Little Smile? 🥺</span>
          </button>
        </div>
      </div>
    </section>
  );
}
