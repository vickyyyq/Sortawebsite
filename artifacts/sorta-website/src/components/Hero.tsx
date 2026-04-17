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
    <section className="relative w-full bg-white flex flex-col items-center pt-24 pb-16 md:pt-28 md:pb-20 min-h-screen">
      {/* Image — contained with white margins, ~80% width */}
      <div className="relative w-[82%] mx-auto">
        <img
          src={heroImagePath}
          alt="Sorta hero"
          className="w-full h-auto block rounded-sm"
        />

        {/* Text block — overlaps the bottom of the image */}
        <div className="absolute bottom-0 left-0 translate-y-[55%] px-2">
          <span className="text-[var(--color-sky)] text-label mb-3 block tracking-[0.15em]">
            {tr('hero', 'overline')}
          </span>
          <h1
            className="text-[var(--color-navy)] whitespace-nowrap"
            style={{ fontSize: 'clamp(22px, 3.5vw, 52px)', letterSpacing: '-0.02em', lineHeight: 1.05 }}
          >
            {tr('hero', 'headline')}
          </h1>
        </div>
      </div>

      <button
        onClick={() => scrollTo('problem')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--color-navy)]/40 hover:text-[var(--color-navy)] transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
