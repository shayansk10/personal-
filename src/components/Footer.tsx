import { Heart, Sparkles } from 'lucide-react';

interface FooterProps {
  onReopenSurprise: () => void;
}

export function Footer({ onReopenSurprise }: FooterProps) {
  return (
    <footer className="relative border-t border-rose-500/15 py-12 px-6 bg-[#080206] text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-2 text-rose-400">
          <Sparkles className="w-4 h-4" />
          <Heart className="w-5 h-5 fill-rose-500 text-rose-400 animate-pulse" />
          <Sparkles className="w-4 h-4" />
        </div>

        <p className="font-handwriting text-2xl sm:text-3xl text-rose-200">
          Made with love &amp; care, just for Meher.
        </p>

        <p className="text-xs sm:text-sm text-rose-300/60 font-sans-main max-w-md">
          No matter how long it takes, I will always be here to listen whenever you&apos;re ready.
        </p>

        <button
          onClick={onReopenSurprise}
          className="mt-2 text-xs text-rose-400 hover:text-rose-200 underline decoration-rose-500/30 underline-offset-4 cursor-pointer transition-colors"
        >
          View opening surprise screen again
        </button>

        <p className="text-[11px] text-rose-400/40 font-mono tracking-wider pt-4">
          FOR MEHER · WITH ALL MY HEART
        </p>
      </div>
    </footer>
  );
}
