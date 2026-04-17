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
    <section id="value" className="bg-[var(--color-fog)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {tr('valueProp', 'overline')}
          </span>
          <h2>
            {tr('valueProp', 'heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white border border-[var(--color-mist)] p-8 md:p-10 rounded-xl relative overflow-hidden group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="absolute -right-8 -top-8 text-[var(--color-gold)] opacity-[0.03] transition-transform duration-500 group-hover:scale-110">
                <pillar.icon size={200} />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center mb-6">
                  <pillar.icon className="text-[var(--color-gold)]" size={28} />
                </div>
                <h4 className="mb-4">{tr('valueProp', pillar.titleKey)}</h4>
                <p className="text-[var(--color-text-muted)]">{tr('valueProp', pillar.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
