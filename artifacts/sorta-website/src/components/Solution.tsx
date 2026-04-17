import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle2, Shuffle, Layers } from 'lucide-react';

const sortaLogoPath = '/sorta_logo.png';

export default function Solution() {
  const { tr } = useLanguage();

  return (
    <section id="solution" className="bg-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {tr('solution', 'overline')}
          </span>
          <h2 className="mb-6">
            {tr('solution', 'heading')}
          </h2>
          <p className="text-large text-[var(--color-text-muted)]">
            {tr('solution', 'body')}
          </p>
        </div>

        <div className="relative py-10 mb-16 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

            <div className="bg-[var(--color-navy)] rounded-xl p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center shadow-lg relative z-10">
              <Shuffle size={48} className="text-white/50 mb-4" />
              <div className="text-white font-semibold text-lg">
                {tr('solution', 'inputLabel')}
              </div>
            </div>

            <ArrowRight size={32} className="text-[var(--color-gold)] hidden md:block" />
            <ArrowRight size={32} className="text-[var(--color-gold)] md:hidden rotate-90" />

            <div className="bg-[var(--color-navy)] rounded-xl p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center border-2 border-[var(--color-gold)] shadow-[0_0_30px_rgba(225,162,0,0.15)] relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] to-[#1a2838] z-0" />
              <img src={sortaLogoPath} alt="Sorta" className="h-16 object-contain z-10 mb-4" />
              <div className="text-[var(--color-gold)] font-bold tracking-widest z-10">SORTA</div>
            </div>

            <ArrowRight size={32} className="text-[var(--color-gold)] hidden md:block" />
            <ArrowRight size={32} className="text-[var(--color-gold)] md:hidden rotate-90" />

            <div className="bg-[var(--color-fog)] border border-[var(--color-mist)] rounded-xl p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center shadow-sm relative z-10">
              <Layers size={48} className="text-[var(--color-sky)] mb-4" />
              <div className="text-[var(--color-navy)] font-semibold text-lg">
                {tr('solution', 'outputLabel')}
              </div>
            </div>

          </div>

          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-[var(--color-mist)] -translate-y-1/2 z-0" />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-500">
          {(
            ['point1', 'point2', 'point3'] as const
          ).map((key) => (
            <div key={key} className="flex items-center gap-3">
              <CheckCircle2 className="text-[var(--color-gold)] shrink-0" size={24} />
              <span className="font-semibold">{tr('solution', key)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
