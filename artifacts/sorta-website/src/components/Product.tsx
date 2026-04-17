import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Shuffle, Settings, Activity } from 'lucide-react';

export default function Product() {
  const { tr } = useLanguage();

  const capabilities = [
    { icon: Eye, labelKey: 'cap1' as const, descKey: 'cap1Desc' as const },
    { icon: Shuffle, labelKey: 'cap2' as const, descKey: 'cap2Desc' as const },
    { icon: Settings, labelKey: 'cap3' as const, descKey: 'cap3Desc' as const },
    { icon: Activity, labelKey: 'cap4' as const, descKey: 'cap4Desc' as const },
  ];

  return (
    <section id="product" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-2xl mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-sky)] text-label mb-4 block">
            {tr('product', 'overline')}
          </span>
          <h2 className="mb-5">
            {tr('product', 'heading')}
          </h2>
          <p className="text-large text-[var(--color-text-muted)]">
            {tr('product', 'body')}
          </p>
        </div>

        {/* 4 capabilities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-200">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white p-8 md:p-10 flex gap-5">
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center border border-[var(--color-mist)] rounded-sm">
                <cap.icon size={18} className="text-[var(--color-sky)]" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-base mb-2">{tr('product', cap.labelKey)}</h4>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{tr('product', cap.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Specs + result */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-400">
          <div>
            <h4 className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-4 font-semibold">Specifications</h4>
            <div className="divide-y divide-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-white">
                <span className="text-[var(--color-text-muted)] text-sm">{tr('product', 'specSizeLabel')}</span>
                <span className="text-[var(--color-navy)] font-semibold text-sm">{tr('product', 'specSize')}</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 bg-white">
                <span className="text-[var(--color-text-muted)] text-sm">{tr('product', 'specCapacityLabel')}</span>
                <span className="text-[var(--color-navy)] font-semibold text-sm text-right">{tr('product', 'specCapacity')}</span>
              </div>
            </div>
          </div>

          <div className="border-l border-[var(--color-mist)] pl-12">
            <p className="text-[var(--color-navy)] font-heading font-extrabold text-xl md:text-2xl leading-snug" style={{ letterSpacing: '-0.01em' }}>
              {tr('product', 'outcomeClose')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
