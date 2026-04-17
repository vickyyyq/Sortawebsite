import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Droplet, Grid3X3, DollarSign } from 'lucide-react';

export default function Problem() {
  const { tr } = useLanguage();

  return (
    <section id="problem" className="bg-[var(--color-fog)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: '100ms' }}>
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {tr('problem', 'overline')}
          </span>
          <h2 className="mb-6">
            {tr('problem', 'heading')}
          </h2>
          <p className="text-large text-[var(--color-text-muted)]">
            {tr('problem', 'body')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {(
            [
              { stat: '[STAT]%', labelKey: 'stat1Label' },
              { stat: '[STAT]%', labelKey: 'stat2Label' },
              { stat: '$[STAT]B', labelKey: 'stat3Label' },
            ] as const
          ).map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--color-mist)] p-8 rounded-xl flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-[var(--color-gold)] font-heading font-extrabold text-5xl mb-2">
                {item.stat}
              </div>
              <div className="text-[var(--color-text-muted)] italic text-sm mb-4">
                {tr('problem', 'dataPlaceholder')}
              </div>
              <p className="font-semibold">{tr('problem', item.labelKey)}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {(
            [
              {
                icon: <Droplet size={32} className="text-[var(--color-sky)] mb-4" />,
                titleKey: 'point1Title',
                bodyKey: 'point1Body',
              },
              {
                icon: <Grid3X3 size={32} className="text-[var(--color-sky)] mb-4" />,
                titleKey: 'point2Title',
                bodyKey: 'point2Body',
              },
              {
                icon: <DollarSign size={32} className="text-[var(--color-sky)] mb-4" />,
                titleKey: 'point3Title',
                bodyKey: 'point3Body',
              },
            ] as const
          ).map((item, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {item.icon}
              <h4 className="mb-3">{tr('problem', item.titleKey)}</h4>
              <p className="text-[var(--color-text-muted)]">{tr('problem', item.bodyKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
