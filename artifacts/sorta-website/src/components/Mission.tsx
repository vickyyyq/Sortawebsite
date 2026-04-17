import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Mission() {
  const { tr } = useLanguage();

  return (
    <section id="mission" className="bg-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5 text-center flex flex-col items-center">
        <span className="text-[var(--color-gold)] text-label mb-8 block animate-in fade-in slide-in-from-bottom-8 duration-700">
          {tr('mission', 'overline')}
        </span>

        <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <p className="text-xl md:text-2xl text-[var(--color-text-muted)] font-medium tracking-wide">
            {tr('mission', 'statementJP')}
          </p>
          <h2 className="text-[var(--color-navy)] font-extrabold leading-tight">
            {tr('mission', 'statementEN')}
          </h2>
        </div>

        <div className="mt-16 w-full max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <div className="bg-[var(--color-fog)] border border-[var(--color-mist)] p-8 rounded-xl">
            <p className="text-[var(--color-text-muted)] italic">
              {tr('mission', 'visionPlaceholder')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
