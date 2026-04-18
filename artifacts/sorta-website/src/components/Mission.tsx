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

        <div className="w-full border-t border-[var(--color-mist)] flex items-center py-14 md:py-20 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <p
            className="text-[var(--color-sky)] font-heading font-extrabold text-2xl md:text-3xl leading-snug"
            style={{ letterSpacing: '-0.01em', whiteSpace: 'pre-line' }}
          >
            {language === 'jp' ? tr('mission', 'statementJP') : tr('mission', 'statementEN')}
          </p>
        </div>

        <div className="w-full border-t border-[var(--color-mist)] pt-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <p className="text-[var(--color-text-muted)] text-base leading-relaxed max-w-2xl whitespace-pre-line">
            {tr('mission', 'visionPlaceholder')}
          </p>
        </div>
      </div>
    </section>
  );
}
