import { JpH2 } from '@/components/JpH2';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1746932123175-b96a752e71c4?auto=format&fit=crop&w=800&q=80',
    alt: 'Japan shinkansen bullet trains at a station platform',
  },
  {
    src: 'https://images.pexels.com/photos/37195143/pexels-photo-37195143/free-photo-of-serene-japanese-garden-with-reflective-pond.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Serene Japanese garden with reflective pond',
  },
  {
    src: 'https://images.unsplash.com/photo-1522972592771-e273fa3e95b0?auto=format&fit=crop&w=800&q=80',
    alt: 'People inside a shopping mall',
  },
  {
    src: 'https://images.unsplash.com/photo-1522968941782-e27ac665baa3?auto=format&fit=crop&w=800&q=80',
    alt: 'Photography of glass wall hallway in an office building',
  },
  {
    src: 'https://images.unsplash.com/photo-1754250499198-3bbef3dfaf03?auto=format&fit=crop&w=800&q=80',
    alt: 'Large crowd at a concert inside a stadium',
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1764689548241-b75c3c969b08?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Japan event venue with attendees',
  },
];

export default function UseCases() {
  const { tr } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);
  const isPausedRef = useRef(false);
  const isInteractingRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cases = [
    { titleKey: 'case1Title' as const, photo: PHOTOS[0] },
    { titleKey: 'case2Title' as const, photo: PHOTOS[1] },
    { titleKey: 'case3Title' as const, photo: PHOTOS[2] },
    { titleKey: 'case4Title' as const, photo: PHOTOS[3] },
    { titleKey: 'case5Title' as const, photo: PHOTOS[4] },
    { titleKey: 'case6Title' as const, photo: PHOTOS[5] },
  ];

  const TOTAL = cases.length;

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
    activeIndexRef.current = index;
  }, []);

  const pauseAutoPlay = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      if (!isInteractingRef.current) {
        isPausedRef.current = false;
      }
    }, 2000);
  }, []);

  const handleInteractionStart = useCallback(() => {
    isInteractingRef.current = true;
    pauseAutoPlay();
  }, [pauseAutoPlay]);

  const handleInteractionEnd = useCallback(() => {
    isInteractingRef.current = false;
    scheduleResume();
  }, [scheduleResume]);

  const prev = useCallback(() => {
    pauseAutoPlay();
    if (!isInteractingRef.current) scheduleResume();
    scrollToIndex(Math.max(0, activeIndexRef.current - 1));
  }, [scrollToIndex, pauseAutoPlay, scheduleResume]);

  const next = useCallback(() => {
    pauseAutoPlay();
    if (!isInteractingRef.current) scheduleResume();
    scrollToIndex(Math.min(TOTAL - 1, activeIndexRef.current + 1));
  }, [TOTAL, scrollToIndex, pauseAutoPlay, scheduleResume]);

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
      activeIndexRef.current = closest;
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (isPausedRef.current) return;
      const next = (activeIndexRef.current + 1) % TOTAL;
      scrollToIndex(next);
    }, 4000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [TOTAL, scrollToIndex]);

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
          onMouseEnter={handleInteractionStart}
          onMouseLeave={handleInteractionEnd}
          onTouchStart={handleInteractionStart}
          onTouchEnd={handleInteractionEnd}
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
                  onClick={() => { pauseAutoPlay(); if (!isInteractingRef.current) scheduleResume(); scrollToIndex(i); }}
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
