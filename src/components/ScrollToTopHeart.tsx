import { useState, useEffect } from 'react';
import { Heart, ChevronUp } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

export function ScrollToTopHeart() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    romanticAudio.playHeartChime();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3.5 rounded-full bg-gradient-to-tr from-rose-700 to-pink-600 text-white shadow-[0_0_25px_rgba(225,29,72,0.6)] hover:shadow-[0_0_35px_rgba(244,63,94,0.85)] border border-rose-300/40 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
      title="Scroll back to top"
    >
      <div className="relative">
        <Heart className="w-5 h-5 text-rose-100 fill-white transition-transform group-hover:scale-110" />
        <ChevronUp className="w-3.5 h-3.5 text-white absolute -top-1.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </button>
  );
}
