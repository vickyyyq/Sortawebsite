import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle2, Shuffle, Layers } from 'lucide-react';

const sortaLogoPath = '/sorta_logo_black.png';

export default function Solution() {
  const { tr } = useLanguage();

  return (
    <section id="solution" className="relative section-padding section-divider overflow-hidden">
      {/* Background image */}
      <img
        src="/problem_bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* 20% light green overlay */}
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(134, 194, 134, 0.20)' }} />

      <div className="relative z-20 max-w-[1200px] mx-auto px-5">
        <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-navy)] text-label mb-3 block opacity-70">
            {tr('solution', 'overline')}
          </span>
          <h2 className="mb-5 text-[var(--color-navy)]">
            {tr('solution', 'heading')}
          </h2>
          <p className="text-large text-[var(--color-navy)]/70">
            {tr('solution', 'body')}
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative mb-16 animate-in fade-in duration-1000 delay-200 fill-mode-both">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">

            <div className="bg-white/70 backdrop-blur-sm rounded-sm p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center">
              <Shuffle size={40} className="text-[var(--color-navy)]/30 mb-4" strokeWidth={1.5} />
              <div className="text-[var(--color-navy)]/70 font-semibold text-sm">
                {tr('solution', 'inputLabel')}
              </div>
            </div>

            <ArrowRight size={28} className="text-[var(--color-navy)]/50 hidden md:block flex-shrink-0" />
            <ArrowRight size={28} className="text-[var(--color-navy)]/50 md:hidden rotate-90" />

            <div className="bg-white/90 backdrop-blur-sm rounded-sm p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center shadow-md border border-white/60">
              <img src={sortaLogoPath} alt="Sorta" className="h-14 object-contain mb-3" />
              <div className="text-[var(--color-navy)]/50 font-bold tracking-[0.2em] text-xs">SORTA</div>
            </div>

            <ArrowRight size={28} className="text-[var(--color-navy)]/50 hidden md:block flex-shrink-0" />
            <ArrowRight size={28} className="text-[var(--color-navy)]/50 md:hidden rotate-90" />

            <div className="bg-white/70 backdrop-blur-sm rounded-sm p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center">
              <Layers size={40} className="text-[var(--color-navy)]/40 mb-4" strokeWidth={1.5} />
              <div className="text-[var(--color-navy)]/70 font-semibold text-sm">
                {tr('solution', 'outputLabel')}
              </div>
            </div>

          </div>
        </div>

        {/* Value points */}
        <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-400 border-t border-white/40 pt-10">
          {(
            ['point1', 'point2', 'point3'] as const
          ).map((key) => (
            <div key={key} className="flex items-center gap-3">
              <CheckCircle2 className="text-[var(--color-navy)]/60 shrink-0" size={20} strokeWidth={2} />
              <span className="font-semibold text-sm text-[var(--color-navy)]/80">{tr('solution', key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
