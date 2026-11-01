import { useState } from 'react';
import { Heart, Sparkles, Smile, Star, Eye } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface CardData {
  id: number;
  title: string;
  icon: typeof Heart;
  tag: string;
  revealedMessage: string;
  accentColor: string;
}

export function SpecialCards() {
  const cards: CardData[] = [
    {
      id: 1,
      title: "Your Smile ❤️",
      icon: Smile,
      tag: "The Sunshine",
      revealedMessage: "Because even a small smile from you can make an ordinary day feel beautiful.",
      accentColor: "from-rose-500/20 to-pink-500/20",
    },
    {
      id: 2,
      title: "Your Presence 🫶",
      icon: Heart,
      tag: "The Comfort",
      revealedMessage: "There's something about you that makes you different from everyone else.",
      accentColor: "from-pink-500/20 to-rose-600/20",
    },
    {
      id: 3,
      title: "Your Little Things 🥹",
      icon: Sparkles,
      tag: "The Magic",
      revealedMessage: "Your little expressions, your way of talking, and the smallest things about you mean more than you know.",
      accentColor: "from-rose-600/20 to-red-500/20",
    },
    {
      id: 4,
      title: "You, Just You 💗",
      icon: Star,
      tag: "The Truth",
      revealedMessage: "I don't need you to be perfect. I appreciate you for being the person you are.",
      accentColor: "from-pink-600/20 to-rose-400/20",
    },
  ];

  // Keep track of which cards are revealed
  const [revealedIds, setRevealedIds] = useState<number[]>([1]); // First card unlocked by default as an intuitive hint

  const toggleCard = (id: number) => {
    romanticAudio.playHeartChime();
    setRevealedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const revealAll = () => {
    romanticAudio.playHeartChime();
    setRevealedIds([1, 2, 3, 4]);
  };

  return (
    <section id="special" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-rose-900/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/30 text-rose-300 text-xs font-sans-main tracking-widest uppercase mb-3">
            <Heart className="w-3 h-3 text-rose-400 fill-rose-500" />
            <span>Four Reasons Among Millions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-romantic font-bold text-white tracking-tight">
            Why You&apos;re So Special to Me 🌹
          </h2>
          <p className="mt-2 text-rose-200/70 text-sm sm:text-base font-sans-main max-w-lg mx-auto">
            Click each card to reveal the little things that make you irreplaceable, Meher.
          </p>

          <button
            onClick={revealAll}
            className="mt-4 inline-flex items-center gap-1.5 text-xs text-rose-400/80 hover:text-rose-200 underline decoration-rose-500/40 underline-offset-4 cursor-pointer transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Reveal all messages at once</span>
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => {
            const isRevealed = revealedIds.includes(card.id);
            const Icon = card.icon;

            return (
              <div
                key={card.id}
                onClick={() => toggleCard(card.id)}
                className={`group relative rounded-2xl p-6 cursor-pointer select-none transition-all duration-500 transform hover:-translate-y-1.5 ${
                  isRevealed
                    ? 'glass-romantic border-rose-400/40 shadow-[0_10px_30px_rgba(225,29,72,0.25)]'
                    : 'bg-[#150610]/70 hover:bg-[#1f0918]/80 border border-rose-500/20 shadow-md'
                }`}
              >
                {/* Subtle gradient wash */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                  {/* Top card bar */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-rose-950/80 border border-rose-400/30 flex items-center justify-center text-rose-400 shadow-sm group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5 text-rose-400 fill-rose-500/30" />
                      </div>
                      <span className="text-xs text-rose-300/60 font-sans-main tracking-wider uppercase">
                        {card.tag}
                      </span>
                    </div>

                    <h3 className="font-serif-romantic text-xl font-bold text-white mb-2">
                      {card.title}
                    </h3>
                  </div>

                  {/* Body / Revealed message */}
                  <div className="my-auto py-2">
                    {isRevealed ? (
                      <p className="text-sm sm:text-base text-rose-100/95 font-sans-main leading-relaxed animate-in fade-in zoom-in-95 duration-300">
                        &ldquo;{card.revealedMessage}&rdquo;
                      </p>
                    ) : (
                      <div className="flex items-center gap-2 text-xs text-rose-400/70 font-sans-main py-4">
                        <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '4s' }} />
                        <span>Tap to open this note…</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom reveal indicator */}
                  <div className="pt-3 border-t border-rose-500/10 flex items-center justify-between text-xs text-rose-300/60 font-sans-main">
                    <span>{isRevealed ? 'Tap to close' : 'Hidden message'}</span>
                    <Heart
                      className={`w-3.5 h-3.5 transition-colors ${
                        isRevealed ? 'text-rose-400 fill-rose-500' : 'text-rose-500/30'
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
