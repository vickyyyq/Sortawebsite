import { JpH2 } from '@/components/JpH2';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1768677675301-627aae4d9427?auto=format&fit=crop&w=800&q=80',
    alt: 'Japan train station platform with stairs and signage',
  },
  {
    src: 'https://images.unsplash.com/photo-1713635632084-f0dd34f5623e?auto=format&fit=crop&w=800&q=80',
    alt: 'Japan street with people walking on the sidewalk',
  },
  {
    src: 'https://images.unsplash.com/photo-1522972592771-e273fa3e95b0?auto=format&fit=crop&w=800&q=80',
    alt: 'People inside a shopping mall',
  },
  {
    src: 'https://images.unsplash.com/photo-1755704942501-8b52b7e727df?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern circular office building interior with glass ceiling',
  },
  {
    src: 'https://images.unsplash.com/photo-1754250499198-3bbef3dfaf03?auto=format&fit=crop&w=800&q=80',
    alt: 'Large crowd at a concert inside a stadium',
  },
  {
    src: 'https://images.unsplash.com/photo-1760430722463-a83b1e51c552?auto=format&fit=crop&w=800&q=80',
    alt: 'People walk under decorative streamers at a Japanese festival',
  },
];

export default function UseCases() {
  const { tr } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cases = [
    { titleKey: 'case1Title' as const, photo: PHOTOS[0] },
    { titleKey: 'case2Title' as const, photo: PHOTOS[1] },
    { titleKey: 'case3Title' as const, photo: PHOTOS[2] },
    { titleKey: 'case4Title' as const, photo: PHOTOS[3] },
    { titleKey: 'case5Title' as const, photo: PHOTOS[4] },
    { titleKey: 'case6Title' as const, photo: PHOTOS[5] },
  ];

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement;
    if (!card) return;
    const left =
      card.getBoundingClientRect().left -
      track.getBoundingClientRect().left +
      track.scrollLeft;
    track.scrollTo({ left, behavior: 'smooth' });
    setActiveIndex(index);
  }, []);

  const prev = useCallback(() => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  }, [activeIndex, scrollToIndex]);

  const next = useCallback(() => {
    scrollToIndex(Math.min(cases.length - 1, activeIndex + 1));
  }, [activeIndex, cases.length, scrollToIndex]);

  const nextLooping = useCallback(() => {
    scrollToIndex((activeIndex + 1) % cases.length);
  }, [activeIndex, cases.length, scrollToIndex]);

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(nextLooping, 3000);
    return () => clearInterval(id);
  }, [isHovered, nextLooping]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const trackLeft = track.getBoundingClientRect().left;
      let closest = 0;
      let minDist = Infinity;
      Array.from(track.children).forEach((child, i) => {
        const dist = Math.abs(child.getBoundingClientRect().left - trackLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="use-cases" className="section-padding section-divider" style={{ background: 'var(--color-sky-wash)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-[1200px] mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-3 block">
            {tr('useCases', 'overline')}
          </span>
          <JpH2 className="text-[var(--color-navy)]">
            {tr('useCases', 'heading')}
          </JpH2>
        </div>

        <div
          className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
          style={{ animationDelay: '120ms' }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={trackRef}
            className="use-cases-track flex gap-4 overflow-x-auto pb-2"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {cases.map((useCase, index) => (
              <div
                key={index}
                className="use-cases-card"
                style={{ scrollSnapAlign: 'start', minWidth: 0 }}
              >
                <div
                  className="relative rounded-lg overflow-hidden"
                  style={{ aspectRatio: '3/4' }}
                >
                  <img
                    src={useCase.photo.src}
                    alt={useCase.photo.alt}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    draggable={false}
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(12,24,40,0.82) 0%, rgba(12,24,40,0.3) 40%, transparent 70%)',
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 pb-6">
                    <h4 className="text-white font-semibold text-base leading-snug">
                      {tr('useCases', useCase.titleKey)}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="flex gap-2">
              {cases.map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={activeIndex === i ? 'true' : undefined}
                  className="transition-all duration-200 rounded-full"
                  style={{
                    width: activeIndex === i ? '20px' : '8px',
                    height: '8px',
                    background: activeIndex === i ? 'var(--color-navy)' : 'var(--color-mist)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                disabled={activeIndex === 0}
                aria-label="Previous"
                className="flex items-center justify-center rounded-full border transition-all duration-200"
                style={{
                  width: '40px',
                  height: '40px',
                  borderColor: activeIndex === 0 ? 'var(--color-mist)' : 'var(--color-navy)',
                  color: activeIndex === 0 ? 'var(--color-mist)' : 'var(--color-navy)',
                  background: 'transparent',
                  cursor: activeIndex === 0 ? 'not-allowed' : 'pointer',
                  opacity: activeIndex === 0 ? 0.4 : 1,
                }}
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </button>
              <button
                onClick={next}
                disabled={activeIndex === cases.length - 1}
                aria-label="Next"
                className="flex items-center justify-center rounded-full border transition-all duration-200"
                style={{
                  width: '40px',
                  height: '40px',
                  borderColor: activeIndex === cases.length - 1 ? 'var(--color-mist)' : 'var(--color-navy)',
                  color: activeIndex === cases.length - 1 ? 'var(--color-mist)' : 'var(--color-navy)',
                  background: 'transparent',
                  cursor: activeIndex === cases.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: activeIndex === cases.length - 1 ? 0.4 : 1,
                }}
              >
                <ChevronRight size={18} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .use-cases-track::-webkit-scrollbar { display: none; }
        .use-cases-card { flex: 0 0 calc(72% - 8px); }
        @media (min-width: 640px)  { .use-cases-card { flex: 0 0 calc(55% - 8px); } }
        @media (min-width: 768px)  { .use-cases-card { flex: 0 0 calc(38% - 8px); } }
        @media (min-width: 1024px) { .use-cases-card { flex: 0 0 calc(32% - 8px); } }
      `}</style>
    </section>
  );
}
