import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Droplet, Grid3X3, DollarSign } from 'lucide-react';

export default function Problem() {
  const { tr } = useLanguage();

  return (
    <section id="problem" className="relative section-padding section-divider overflow-hidden">
      {/* Background image */}
      <img
        src="/problem_bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* Very light overlay to lift contrast slightly without killing the image */}
      <div className="absolute inset-0 bg-white/20 z-10" />

      <div className="relative z-20 max-w-[1200px] mx-auto px-5">
        {/* Header */}
        <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-navy)] text-label mb-3 block opacity-70">
            {tr('problem', 'overline')}
          </span>
          <h2 className="text-[var(--color-navy)] mb-5">
            {tr('problem', 'heading')}
          </h2>
          <p className="text-large text-[var(--color-navy)]/70">
            {tr('problem', 'body')}
          </p>
        </div>

        {/* Stat cards — frosted glass on cyan background */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-20">
          {(
            [
              { stat: '[STAT]%', labelKey: 'stat1Label' },
              { stat: '[STAT]%', labelKey: 'stat2Label' },
              { stat: '$[STAT]B', labelKey: 'stat3Label' },
            ] as const
          ).map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both rounded-sm"
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <div>
                <div className="text-[var(--color-navy)] font-heading font-extrabold text-5xl md:text-6xl mb-1" style={{ letterSpacing: '-0.02em' }}>
                  {item.stat}
                </div>
                <div className="text-[var(--color-navy)]/50 text-xs mb-4 italic">
                  {tr('problem', 'dataPlaceholder')}
                </div>
              </div>
              <p className="font-semibold text-sm text-[var(--color-navy)]/80">{tr('problem', item.labelKey)}</p>
            </div>
          ))}
        </div>

        {/* Problem points — white pill cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {(
            [
              { icon: <Droplet size={24} className="text-[var(--color-navy)] mb-5 opacity-60" />, titleKey: 'point1Title', bodyKey: 'point1Body' },
              { icon: <Grid3X3 size={24} className="text-[var(--color-navy)] mb-5 opacity-60" />, titleKey: 'point2Title', bodyKey: 'point2Body' },
              { icon: <DollarSign size={24} className="text-[var(--color-navy)] mb-5 opacity-60" />, titleKey: 'point3Title', bodyKey: 'point3Body' },
            ] as const
          ).map((item, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm p-8 rounded-sm animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {item.icon}
              <h4 className="mb-3 text-[var(--color-navy)]">{tr('problem', item.titleKey)}</h4>
              <p className="text-[var(--color-navy)]/65 text-sm leading-relaxed">{tr('problem', item.bodyKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
