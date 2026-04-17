import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle2, Shuffle, Layers } from 'lucide-react';

const sortaLogoPath = '/sorta_logo.png';

export default function Solution() {
  const { tr } = useLanguage();

  return (
    <section id="solution" className="section-padding section-divider" style={{ background: 'var(--color-sky-wash)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-sky)] text-label mb-3 block">
            {tr('solution', 'overline')}
          </span>
          <h2 className="mb-5">
            {tr('solution', 'heading')}
          </h2>
          <p className="text-large text-[var(--color-text-muted)]">
            {tr('solution', 'body')}
          </p>
        </div>

        {/* Flow Diagram — editorial, clean */}
        <div className="relative mb-16 animate-in fade-in duration-1000 delay-200 fill-mode-both">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">

            <div className="border border-[var(--color-mist)] bg-white rounded-sm p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center">
              <Shuffle size={40} className="text-[var(--color-mist)] mb-4" strokeWidth={1.5} />
              <div className="text-[var(--color-text-muted)] font-semibold text-sm">
                {tr('solution', 'inputLabel')}
              </div>
            </div>

            <ArrowRight size={28} className="text-[var(--color-sky)] hidden md:block flex-shrink-0" />
            <ArrowRight size={28} className="text-[var(--color-sky)] md:hidden rotate-90" />

            <div className="border-2 border-[var(--color-sky)] bg-white rounded-sm p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center shadow-md">
              <img src={sortaLogoPath} alt="Sorta" className="h-14 object-contain mb-3" />
              <div className="text-[var(--color-sky)] font-bold tracking-[0.2em] text-xs">SORTA</div>
            </div>

            <ArrowRight size={28} className="text-[var(--color-sky)] hidden md:block flex-shrink-0" />
            <ArrowRight size={28} className="text-[var(--color-sky)] md:hidden rotate-90" />

            <div className="border border-[var(--color-sky)] bg-[var(--color-sky-light)] rounded-sm p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center">
              <Layers size={40} className="text-[var(--color-sky)] mb-4" strokeWidth={1.5} />
              <div className="text-[var(--color-navy)] font-semibold text-sm">
                {tr('solution', 'outputLabel')}
              </div>
            </div>

          </div>
        </div>

        {/* Value points */}
        <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-400 border-t border-[var(--color-mist)] pt-10">
          {(
            ['point1', 'point2', 'point3'] as const
          ).map((key) => (
            <div key={key} className="flex items-center gap-3">
              <CheckCircle2 className="text-[var(--color-sky)] shrink-0" size={20} strokeWidth={2} />
              <span className="font-semibold text-sm text-[var(--color-navy)]">{tr('solution', key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
