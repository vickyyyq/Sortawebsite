import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Mission() {
  const { tr, language } = useLanguage();

  return (
    <section id="mission" className="section-padding section-divider" style={{ background: 'var(--color-sky-wash)' }}>
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-start">
        <span className="text-[var(--color-sky)] text-label mb-10 block animate-in fade-in slide-in-from-bottom-8 duration-700">
          {tr('mission', 'overline')}
        </span>

        <div className="w-full animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 border-t border-[var(--color-mist)] pt-10">
          {language === 'jp' && (
            <p className="text-[var(--color-sky)] font-heading font-extrabold text-2xl md:text-3xl mb-6 leading-snug" style={{ letterSpacing: '-0.01em' }}>
              {tr('mission', 'statementJP')}
            </p>
          )}

        </div>

        <div className="mt-16 w-full border-t border-[var(--color-mist)] pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <p className="text-[var(--color-text-muted)] italic text-base leading-relaxed max-w-2xl">
            {tr('mission', 'visionPlaceholder')}
          </p>
        </div>
      </div>
    </section>
  );
}
