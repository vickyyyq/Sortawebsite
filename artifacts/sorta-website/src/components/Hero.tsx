import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown, ArrowRight } from 'lucide-react';

const heroImagePath = '/hero_image.jpg';

export default function Hero() {
  const { tr } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center overflow-hidden">
      <img
        src={heroImagePath}
        alt="Sorta hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-5">
        <span className="text-[var(--color-navy)] text-label mb-5 block tracking-[0.15em] opacity-50">
          {tr('hero', 'overline')}
        </span>

        <h1
          className="text-[var(--color-navy)] max-w-2xl mb-8"
          style={{ fontSize: 'clamp(36px, 5vw, 68px)', letterSpacing: '-0.025em', lineHeight: 1.08 }}
        >
          {tr('hero', 'headline')}
        </h1>

        <button
          onClick={() => scrollTo('partner')}
          className="flex items-center gap-2 text-[var(--color-navy)]/60 hover:text-[var(--color-navy)] font-semibold text-sm transition-colors group"
          data-testid="button-hero-learn"
        >
          {tr('hero', 'ctaSecondary')}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <button
        onClick={() => scrollTo('problem')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[var(--color-navy)]/30 hover:text-[var(--color-navy)] transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
