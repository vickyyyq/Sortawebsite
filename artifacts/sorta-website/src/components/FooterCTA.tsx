import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function FooterCTA() {
  const { tr } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[var(--color-gold)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-[var(--color-navy)] mb-6 font-extrabold">
            {tr('footerCta', 'heading')}
          </h2>
          <p className="text-[var(--color-navy)] opacity-90 text-lg mb-10">
            {tr('footerCta', 'body')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo('partner')}
              className="bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy)]/90 font-bold px-8 py-6 text-lg w-full sm:w-auto"
              data-testid="button-footer-cta-pilot"
            >
              {tr('footerCta', 'ctaPrimary')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('partner')}
              className="bg-transparent text-[var(--color-navy)] border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white font-bold px-8 py-6 text-lg w-full sm:w-auto"
              data-testid="button-footer-cta-contact"
            >
              {tr('footerCta', 'ctaSecondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
