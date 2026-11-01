import { useState, useEffect } from 'react';
import { Sparkles, Edit3, Heart, Image as ImageIcon, Check, X } from 'lucide-react';
import { romanticAudio } from '../utils/audio';

// Default moments images generated for Meher
import littleThingsImg from '../assets/images/memory_little_things_1793549249478.jpg';
import momentsMatterImg from '../assets/images/memory_moments_matter_1793549250289.jpg';
import futureAheadImg from '../assets/images/memory_future_ahead_1793549249790.jpg';

interface MomentItem {
  id: string;
  title: string;
  defaultImg: string;
  customImg?: string;
  subtitle: string;
  description: string;
}

const DEFAULT_MOMENTS: MomentItem[] = [
  {
    id: 'little-things',
    title: 'The Little Things',
    defaultImg: littleThingsImg,
    subtitle: 'Quiet smiles & warm thoughts',
    description: 'The gentle moments, the random laughs, and the small everyday instances that make you so special in my thoughts.',
  },
  {
    id: 'moments-matter',
    title: 'The Moments That Matter',
    defaultImg: momentsMatterImg,
    subtitle: 'Heartfelt understanding & presence',
    description: 'Every conversation that brought us closer, every time you shared your world, and the genuine bond that matters deeply to me.',
  },
  {
    id: 'future-ahead',
    title: 'More Beautiful Memories Ahead',
    defaultImg: futureAheadImg,
    subtitle: 'Looking forward with warmth',
    description: 'A future filled with more smiles, less misunderstandings, more laughter, and countless peaceful chapters together.',
  },
];

export function OurMoments() {
  const [moments, setMoments] = useState<MomentItem[]>(DEFAULT_MOMENTS);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editSubtitle, setEditSubtitle] = useState('');
  const [editDesc, setEditDesc] = useState('');
  const [editImg, setEditImg] = useState('');

  // Load from localStorage if user previously customized
  useEffect(() => {
    try {
      const saved = localStorage.getItem('meher_moments_data');
      if (saved) {
        setMoments(JSON.parse(saved));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const startEdit = (moment: MomentItem) => {
    setEditingId(moment.id);
    setEditTitle(moment.title);
    setEditSubtitle(moment.subtitle);
    setEditDesc(moment.description);
    setEditImg(moment.customImg || '');
  };

  const saveEdit = (id: string) => {
    romanticAudio.playHeartChime();
    const updated = moments.map((m) =>
      m.id === id
        ? {
            ...m,
            title: editTitle.trim() || m.title,
            subtitle: editSubtitle.trim() || m.subtitle,
            description: editDesc.trim() || m.description,
            customImg: editImg.trim() || undefined,
          }
        : m
    );
    setMoments(updated);
    try {
      localStorage.setItem('meher_moments_data', JSON.stringify(updated));
    } catch {
      // Ignore
    }
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <section id="moments" className="relative py-20 px-4 sm:px-6 scroll-mt-20">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-rose-500/20 bg-rose-950/30 text-rose-300 text-xs font-sans-main tracking-widest uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>Cherished &amp; Unwritten</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif-romantic font-bold text-white tracking-tight">
            Our Little Moments ✨
          </h2>
          <p className="mt-2 text-rose-200/70 text-sm sm:text-base font-sans-main max-w-xl mx-auto">
            Placeholders for our story. You can easily personalize any card with your own memories and photo links.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {moments.map((moment) => {
            const imgSrc = moment.customImg || moment.defaultImg;
            const isEditing = editingId === moment.id;

            return (
              <div
                key={moment.id}
                className="group relative rounded-3xl glass-romantic overflow-hidden border border-rose-500/20 hover:border-rose-400/40 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Scrim */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-rose-950/60">
                  <img
                    src={imgSrc}
                    alt={moment.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to default generated image if custom URL fails
                      (e.currentTarget as HTMLImageElement).src = moment.defaultImg;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12040d] via-black/20 to-transparent opacity-80" />
                  
                  {/* Edit button */}
                  <button
                    onClick={() => startEdit(moment)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-rose-900/80 text-rose-200 border border-rose-400/30 backdrop-blur-sm transition-all cursor-pointer shadow-md"
                    title="Personalize this memory"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                  </button>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-rose-200/80">
                    <span className="font-handwriting text-lg text-rose-300">
                      {moment.subtitle}
                    </span>
                    <Heart className="w-3.5 h-3.5 text-rose-400 fill-rose-500/50" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  {isEditing ? (
                    <div className="space-y-3">
                      <div>
                        <label className="text-xs text-rose-300 font-sans-main">Title</label>
                        <input
                          type="text"
                          value={editTitle}
                          onChange={(e) => setEditTitle(e.target.value)}
                          className="w-full mt-1 px-3 py-1.5 rounded-lg bg-black/50 border border-rose-500/30 text-white text-sm focus:outline-none focus:border-rose-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-rose-300 font-sans-main">Subtitle / Note</label>
                        <input
                          type="text"
                          value={editSubtitle}
                          onChange={(e) => setEditSubtitle(e.target.value)}
                          className="w-full mt-1 px-3 py-1.5 rounded-lg bg-black/50 border border-rose-500/30 text-white text-sm focus:outline-none focus:border-rose-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-rose-300 font-sans-main">Message</label>
                        <textarea
                          rows={3}
                          value={editDesc}
                          onChange={(e) => setEditDesc(e.target.value)}
                          className="w-full mt-1 px-3 py-1.5 rounded-lg bg-black/50 border border-rose-500/30 text-white text-sm focus:outline-none focus:border-rose-400"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-rose-300 font-sans-main flex items-center gap-1">
                          <ImageIcon className="w-3 h-3" />
                          <span>Custom Photo URL (optional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="https://..."
                          value={editImg}
                          onChange={(e) => setEditImg(e.target.value)}
                          className="w-full mt-1 px-3 py-1.5 rounded-lg bg-black/50 border border-rose-500/30 text-white text-xs focus:outline-none focus:border-rose-400"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-2">
                        <button
                          onClick={() => saveEdit(moment.id)}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white text-xs font-medium cursor-pointer"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div>
                        <h3 className="text-xl font-serif-romantic font-bold text-white mb-2">
                          {moment.title}
                        </h3>
                        <p className="text-sm text-rose-200/80 font-sans-main leading-relaxed">
                          {moment.description}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-rose-500/10 flex items-center justify-between text-xs text-rose-400/60 font-sans-main">
                        <span>A chapter in progress</span>
                        <button
                          onClick={() => startEdit(moment)}
                          className="text-rose-400 hover:text-rose-200 transition-colors cursor-pointer"
                        >
                          Personalize
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
