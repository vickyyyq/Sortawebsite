import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Droplets, HardHat } from 'lucide-react';

export default function Problem() {
  const { tr } = useLanguage();

  const stats = [
    { valueKey: 'stat1Value' as const, labelKey: 'stat1Label' as const, bg: '/bottle-left.png',   nudge: 0   },
    { valueKey: 'stat2Value' as const, labelKey: 'stat2Label' as const, bg: '/bottle-middle.png', nudge: -14 },
    { valueKey: 'stat3Value' as const, labelKey: 'stat3Label' as const, bg: '/bottle-right.png',  nudge: 0   },
  ];

  return (
    <section id="problem" className="section-padding section-divider" style={{ background: 'var(--color-sky-wash)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-sky)] text-label mb-3 block">
            {tr('problem', 'overline')}
          </span>
          <JpH2 className="mb-5">
            {tr('problem', 'heading')}
          </JpH2>
          <p className="text-large text-[var(--color-text-muted)]">
            {tr('problem', 'body')}
          </p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-mist)] mb-20 border border-[var(--color-mist)] rounded-sm overflow-hidden max-w-[860px]">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative p-8 md:p-10 flex flex-col justify-center items-center md:items-start gap-2 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both overflow-hidden min-h-[320px]"
              style={{ animationDelay: `${150 + index * 100}ms` }}
            >
              <img
                src={item.bg}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover rotate-90 md:rotate-0 pointer-events-none select-none"
                style={{ mixBlendMode: 'screen' }}
              />
              <div
                className="relative z-10 flex flex-col gap-2 text-center md:text-left"
                style={{ transform: item.nudge ? `translateY(${item.nudge}%)` : undefined }}
              >
                <div className="text-[var(--color-navy)] font-heading font-extrabold text-5xl md:text-6xl" style={{ letterSpacing: '-0.02em' }}>
                  {tr('problem', item.valueKey)}
                </div>
                <p className="font-semibold text-sm text-[var(--color-text-muted)]">{tr('problem', item.labelKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Problem points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {(
            [
              { icon: <Droplets size={24} className="text-[var(--color-sky)] mb-5" strokeWidth={1.5} />, titleKey: 'point1Title', bodyKey: 'point1Body' },
              { icon: <Users size={24} className="text-[var(--color-sky)] mb-5" strokeWidth={1.5} />, titleKey: 'point2Title', bodyKey: 'point2Body' },
              { icon: <HardHat size={24} className="text-[var(--color-sky)] mb-5" strokeWidth={1.5} />, titleKey: 'point3Title', bodyKey: 'point3Body' },
            ] as const
          ).map((item, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {item.icon}
              <h4 className="mb-3">{tr('problem', item.titleKey)}</h4>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{tr('problem', item.bodyKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
