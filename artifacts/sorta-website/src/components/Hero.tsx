import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowDown } from 'lucide-react';

const heroImagePath = '/hero_image.jpg';

export default function Hero() {
  const { tr } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-end overflow-hidden">
      <img
        src={heroImagePath}
        alt="Sorta hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Content anchored to bottom */}
      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-5 pb-6 md:pb-8">
        <span className="text-[var(--color-sky)] text-label mb-4 block tracking-[0.15em]">
          {tr('hero', 'overline')}
        </span>
        <h1 className="text-[var(--color-navy)] max-w-3xl leading-[1.0]">
          {tr('hero', 'headline')}
        </h1>
      </div>

      <button
        onClick={() => scrollTo('problem')}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 text-[var(--color-navy)]/40 hover:text-[var(--color-navy)] transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
