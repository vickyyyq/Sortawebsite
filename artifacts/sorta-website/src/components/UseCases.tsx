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
    <section id="use-cases" className="bg-[var(--color-navy)] text-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-sky)] text-label mb-4 block">
            {tr('useCases', 'overline')}
          </span>
          <h2 className="text-white">
            {tr('useCases', 'heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-[#1A2635] border border-[var(--color-mist)]/20 p-8 rounded-xl hover:border-[var(--color-sky)]/50 transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <useCase.icon size={36} className="text-[var(--color-sky)] mb-6 stroke-1" />
              <h4 className="text-white mb-3">{tr('useCases', useCase.titleKey)}</h4>
              <p className="text-[var(--color-mist)] opacity-80 text-sm leading-relaxed">
                {tr('useCases', useCase.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
