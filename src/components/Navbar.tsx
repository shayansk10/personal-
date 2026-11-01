import { Volume2, VolumeX, Heart } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

interface NavbarProps {
  musicPlaying: boolean;
  setMusicPlaying: (playing: boolean) => void;
  onSendSmile: () => void;
}

export function Navbar({ musicPlaying, setMusicPlaying, onSendSmile }: NavbarProps) {
  const toggleMusic = () => {
    const newState = romanticAudio.toggle();
    setMusicPlaying(newState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#0e040c]/80 backdrop-blur-md border-b border-rose-500/15 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-5 py-3.5 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark */}
        <a
          href="#hero"
          className="text-lg font-serif-romantic font-semibold tracking-wide text-rose-100 hover:text-white flex items-center gap-2 whitespace-nowrap shrink-0 transition-colors"
        >
          <span className="text-xl">For Meher</span>
          <span className="text-rose-500 animate-pulse">❤️</span>
        </a>

        {/* Zone 2: 4–5 single-line clean nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-rose-200/70 font-sans-main">
          <a
            href="#hero"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            My Meher
          </a>
          <a
            href="#letter"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            The Letter
          </a>
          <a
            href="#special"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            Why You
          </a>
          <a
            href="#question"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            A Question
          </a>
          <a
            href="#moments"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            Our Moments
          </a>
          <a
            href="#surprise"
            className="hover:text-rose-100 transition-colors whitespace-nowrap shrink-0"
          >
            For You
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onSendSmile}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-rose-200 bg-rose-950/60 border border-rose-500/25 rounded-full hover:bg-rose-900/60 hover:border-rose-400/40 transition-all cursor-pointer whitespace-nowrap shrink-0"
            title="Send Meher a cute smile"
          >
            <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500/50" />
            <span>Smile Meher? 🥺</span>
          </button>

          <button
            onClick={toggleMusic}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
              musicPlaying
                ? 'bg-rose-600/30 text-rose-100 border-rose-400/50 shadow-[0_0_15px_rgba(244,63,94,0.3)]'
                : 'bg-rose-950/40 text-rose-300/70 border-rose-500/20 hover:text-rose-200'
            }`}
            title={musicPlaying ? 'Mute romantic music' : 'Play soft romantic music'}
          >
            {musicPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
                <span>Music: On</span>
                {/* Micro equalizer wave indicator */}
                <span className="flex items-end gap-0.5 h-2.5 ml-1">
                  <span className="w-0.5 bg-rose-400 animate-pulse h-full" />
                  <span className="w-0.5 bg-rose-300 animate-pulse h-2/3" style={{ animationDelay: '0.2s' }} />
                  <span className="w-0.5 bg-rose-400 animate-pulse h-4/5" style={{ animationDelay: '0.4s' }} />
                </span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-rose-400/60" />
                <span>Music: Off</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
