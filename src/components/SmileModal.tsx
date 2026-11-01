import { Heart, X, Sparkles } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface SmileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SmileModal({ isOpen, onClose }: SmileModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-md rounded-3xl glass-romantic border border-rose-400/40 p-7 sm:p-9 text-center shadow-[0_0_60px_rgba(244,63,94,0.4)] animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-rose-950/60 hover:bg-rose-900/80 text-rose-300 hover:text-white transition-colors cursor-pointer"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cute Animated Heart & Avatar */}
        <div className="relative w-20 h-20 mx-auto mb-5">
          <div className="absolute inset-0 bg-gradient-to-tr from-rose-600 to-pink-500 rounded-full blur-xl opacity-60 animate-pulse" />
          <div className="relative w-full h-full rounded-full bg-gradient-to-tr from-rose-900 via-[#3a0624] to-pink-900 border border-rose-400/50 flex items-center justify-center shadow-lg animate-heart-glow">
            <Heart className="w-10 h-10 text-rose-300 fill-rose-500" />
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-200" />
          </div>
        </div>

        {/* Message */}
        <h3 className="font-serif-romantic text-2xl sm:text-3xl font-bold text-white mb-3">
          Bas yahi smile toh dekhni hai, Meher. <span className="text-rose-400">❤️</span>
        </h3>

        <p className="text-base sm:text-lg text-rose-200/90 font-handwriting text-2xl leading-relaxed mb-6">
          Jab tum smile karti ho na, toh sach mein sab theek lagne lagta hai. 🥺
        </p>

        <button
          onClick={() => {
            romanticAudio.playHeartChime();
            onClose();
          }}
          className="w-full py-3 px-6 rounded-full text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-lg shadow-rose-600/30 transition-all cursor-pointer font-sans-main border border-rose-300/30"
        >
          Aww, Okay I&apos;m Smiling A Little Bit! 🙈❤️
        </button>
      </div>
    </div>
  );
}
