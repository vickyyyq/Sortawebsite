import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Diamond, ArrowDownCircle, Leaf, Recycle } from 'lucide-react';

export default function ValueProp() {
  const { tr } = useLanguage();

  const pillars = [
    { icon: Diamond, titleKey: 'pillar1Title' as const, descKey: 'pillar1Body' as const },
    { icon: ArrowDownCircle, titleKey: 'pillar2Title' as const, descKey: 'pillar2Body' as const },
    { icon: Leaf, titleKey: 'pillar3Title' as const, descKey: 'pillar3Body' as const },
    { icon: Recycle, titleKey: 'pillar4Title' as const, descKey: 'pillar4Body' as const },
  ];

  return (
    <section id="value" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-[var(--color-sky)] text-label mb-3 block">
              {tr('valueProp', 'overline')}
            </span>
            <h2>
              {tr('valueProp', 'heading')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white p-10 md:p-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="w-10 h-10 flex items-center justify-center mb-6 border border-[var(--color-sky)]/30 rounded-sm">
                <pillar.icon className="text-[var(--color-sky)]" size={20} strokeWidth={1.5} />
              </div>
              <h4 className="mb-3">{tr('valueProp', pillar.titleKey)}</h4>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{tr('valueProp', pillar.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
