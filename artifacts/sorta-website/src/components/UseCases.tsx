import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Train, TreePine, ShoppingBag, Building2, Ticket, Tent } from 'lucide-react';

export default function UseCases() {
  const { tr } = useLanguage();

  const cases = [
    { icon: Train, titleKey: 'case1Title' as const, descKey: 'case1Body' as const },
    { icon: TreePine, titleKey: 'case2Title' as const, descKey: 'case2Body' as const },
    { icon: ShoppingBag, titleKey: 'case3Title' as const, descKey: 'case3Body' as const },
    { icon: Building2, titleKey: 'case4Title' as const, descKey: 'case4Body' as const },
    { icon: Ticket, titleKey: 'case5Title' as const, descKey: 'case5Body' as const },
    { icon: Tent, titleKey: 'case6Title' as const, descKey: 'case6Body' as const },
  ];

  return (
    <section id="use-cases" className="section-padding section-divider" style={{ background: 'var(--color-sky-wash)' }}>
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-2xl mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-3 block">
            {tr('useCases', 'overline')}
          </span>
          <JpH2 className="text-[var(--color-navy)]">
            {tr('useCases', 'heading')}
          </JpH2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white p-8 md:p-10 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${80 + index * 60}ms` }}
            >
              <useCase.icon size={28} className="text-[var(--color-sky)] mb-5" strokeWidth={1.5} />
              <h4 className="text-[var(--color-navy)] mb-3 text-base">{tr('useCases', useCase.titleKey)}</h4>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {tr('useCases', useCase.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
