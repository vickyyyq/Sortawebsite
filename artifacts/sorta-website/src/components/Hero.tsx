import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';

const heroVideoPath = '/hero_video.mp4';

export default function Hero() {
  const { tr } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideoPath} type="video/mp4" />
      </video>

      {/* Light sky-blue tint overlay — airy not heavy */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00A5E5]/30 via-white/20 to-white/60 z-10" />
      <div className="absolute inset-0 bg-white/25 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-5 flex flex-col items-start justify-end h-full pb-20 md:pb-28">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <span className="text-[var(--color-sky)] text-label mb-4 block tracking-[0.15em]">
            {tr('hero', 'overline')}
          </span>

          <h1 className="text-[var(--color-navy)] max-w-5xl mb-6 leading-[1.0]">
            {tr('hero', 'headline')}
          </h1>

          <p className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-2xl mb-10 font-sans leading-relaxed">
            {tr('hero', 'subheadline')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <button
              onClick={() => scrollTo('partner')}
              className="bg-[var(--color-sky)] text-white font-semibold px-8 py-4 text-base rounded-sm hover:bg-[var(--color-sky)]/90 transition-colors w-full sm:w-auto"
              data-testid="button-hero-partner"
            >
              {tr('hero', 'ctaPrimary')}
            </button>
            <button
              onClick={() => scrollTo('problem')}
              className="bg-transparent text-[var(--color-navy)] border border-[var(--color-navy)]/30 font-semibold px-8 py-4 text-base rounded-sm hover:border-[var(--color-navy)] transition-colors w-full sm:w-auto"
              data-testid="button-hero-learn"
            >
              {tr('hero', 'ctaSecondary')}
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => scrollTo('problem')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[var(--color-navy)]/60 hover:text-[var(--color-navy)] transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
