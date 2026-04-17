import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const heroVideoPath = '/hero_video.mp4';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideoPath} type="video/mp4" />
      </video>

      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-[var(--color-navy)]/60 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-[1200px] w-full mx-auto px-5 flex flex-col items-start justify-center h-full pt-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <span className="text-[var(--color-gold)] text-label mb-6 block">
          {t('NEXT-GENERATION RECYCLING INFRASTRUCTURE', '次世代リサイクルインフラ')}
        </span>
        
        <h1 className="text-white max-w-4xl mb-6">
          {t('Make horizontal recycling a reality.', '水平リサイクルを、現実のものに。')}
        </h1>
        
        <p className="text-white/90 text-xl md:text-2xl max-w-2xl mb-10 font-sans leading-relaxed">
          {t(
            'Intelligent sorting and preprocessing at the point of intake. Smarter, cleaner, and more sustainable.',
            '廃棄時点での知的な分別と前処理。よりスマートに、よりクリーンに、より持続可能に。'
          )}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            size="lg"
            onClick={() => scrollTo('partner')}
            className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90 font-semibold px-8 py-6 text-lg w-full sm:w-auto rounded-lg"
            data-testid="button-hero-partner"
          >
            {t('Partner with us', 'パートナーになる')}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('problem')}
            className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-semibold px-8 py-6 text-lg w-full sm:w-auto rounded-lg"
            data-testid="button-hero-learn"
          >
            {t('Learn more', '詳細を見る')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
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
