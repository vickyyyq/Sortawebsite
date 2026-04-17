import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const heroVideoPath = '/hero_video.mp4';

export default function Hero() {
  const { tr } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
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

      <div className="absolute inset-0 bg-[var(--color-navy)]/60 z-10" />

      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-5 flex flex-col items-start justify-center h-full pt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="text-[var(--color-gold)] text-label mb-6 block">
          {tr('hero', 'overline')}
        </span>

        <h1 className="text-white max-w-4xl mb-6">
          {tr('hero', 'headline')}
        </h1>

        <p className="text-white/90 text-xl md:text-2xl max-w-2xl mb-10 font-sans leading-relaxed">
          {tr('hero', 'subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            onClick={() => scrollTo('partner')}
            className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90 font-semibold px-8 py-6 text-lg w-full sm:w-auto rounded-lg"
            data-testid="button-hero-partner"
          >
            {tr('hero', 'ctaPrimary')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('problem')}
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold px-8 py-6 text-lg w-full sm:w-auto rounded-lg"
            data-testid="button-hero-learn"
          >
            {tr('hero', 'ctaSecondary')}
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollTo('problem')}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/70 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-indicator"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
}
