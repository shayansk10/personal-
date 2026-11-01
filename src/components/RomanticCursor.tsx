import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export function RomanticCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Check if the device has a fine pointer (desktop mouse), disabled on mobile/touch
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsPointerFine(true);
    }
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    let idCounter = 0;
    const handleMouseMove = (e: MouseEvent) => {
      // Throttle creating particles
      if (Math.random() > 0.4) return;

      const newParticle: Particle = {
        id: idCounter++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 6,
        opacity: 0.8,
      };

      setParticles((prev) => [...prev.slice(-14), newParticle]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Fade out particles
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.08, y: p.y - 1 }))
          .filter((p) => p.opacity > 0)
      );
    }, 40);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute select-none transition-transform pointer-events-none text-rose-400"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            transform: 'translate(-50%, -50%)',
            opacity: p.opacity,
            fontSize: `${p.size}px`,
          }}
        >
          {p.id % 2 === 0 ? '✨' : '💖'}
        </span>
      ))}
    </div>
  );
}
