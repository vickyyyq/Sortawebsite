import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollText, TrendingUp, Network } from 'lucide-react';

export default function WhyNow() {
  const { tr } = useLanguage();

  const points = [
    { icon: ScrollText, labelKey: 'col1Label' as const, bodyKey: 'col1Body' as const },
    { icon: TrendingUp, labelKey: 'col2Label' as const, bodyKey: 'col2Body' as const },
    { icon: Network, labelKey: 'col3Label' as const, bodyKey: 'col3Body' as const },
  ];

  return (
    <section id="why-now" className="bg-[var(--color-fog)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {tr('whyNow', 'overline')}
          </span>
          <h2>
            {tr('whyNow', 'heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border border-[var(--color-mist)] shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[var(--color-mist)]/30 rounded-lg flex items-center justify-center mb-6">
                <point.icon size={24} className="text-[var(--color-sky)]" />
              </div>
              <h4 className="mb-4">{tr('whyNow', point.labelKey)}</h4>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {tr('whyNow', point.bodyKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
          <h3 className="text-[var(--color-navy)] font-extrabold px-6 py-8 border-y-2 border-[var(--color-mist)]">
            {tr('whyNow', 'closing')}
          </h3>
        </div>
      </div>
    </section>
  );
}
