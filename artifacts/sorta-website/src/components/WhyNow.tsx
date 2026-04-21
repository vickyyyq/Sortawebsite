import { JpH2 } from '@/components/JpH2';
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
    <section id="why-now" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-label mb-3 block">
            {tr('whyNow', 'overline')}
          </span>
          <JpH2>
            {tr('whyNow', 'heading')}
          </JpH2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden mb-14">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <point.icon size={24} className="text-[var(--color-sky)] mb-5" strokeWidth={1.5} />
              <h4 className="mb-3 text-base">{tr('whyNow', point.labelKey)}</h4>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {tr('whyNow', point.bodyKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-in fade-in duration-700 delay-400">
          <h3 className="text-[var(--color-navy)] font-extrabold border-l-4 border-[var(--color-sky)] pl-6 py-2 leading-tight">
            {tr('whyNow', 'closing')}
          </h3>
        </div>
      </div>
    </section>
  );
}
