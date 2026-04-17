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
    <section className="section-padding" style={{ background: 'var(--color-sky-wash)', borderTop: '1px solid var(--color-mist)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[var(--color-sky)] text-label mb-6 block">
            {tr('footerCta', 'overline')}
          </span>
          <h2 className="text-[var(--color-navy)] mb-6 font-extrabold">
            {tr('footerCta', 'heading')}
          </h2>
          <p className="text-[var(--color-text-muted)] text-lg mb-10">
            {tr('footerCta', 'body')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              onClick={() => scrollTo('partner')}
              className="bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy)]/90 font-bold px-8 py-6 text-base w-full sm:w-auto rounded-sm"
              data-testid="button-footer-cta-pilot"
            >
              {tr('footerCta', 'ctaPrimary')}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('partner')}
              className="bg-transparent text-[var(--color-navy)] border border-[var(--color-navy)]/30 hover:border-[var(--color-navy)] font-bold px-8 py-6 text-base w-full sm:w-auto rounded-sm"
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
