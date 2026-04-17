import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Shuffle, Settings, Activity, ChevronRight } from 'lucide-react';

export default function Product() {
  const { tr } = useLanguage();

  const capabilities = [
    { icon: Eye, labelKey: 'cap1' as const },
    { icon: Shuffle, labelKey: 'cap2' as const },
    { icon: Settings, labelKey: 'cap3' as const },
    { icon: Activity, labelKey: 'cap4' as const },
  ];

  const outcomes = [
    'outcome1' as const,
    'outcome2' as const,
    'outcome3' as const,
  ];

  return (
    <section id="product" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <span className="text-[var(--color-sky)] text-label mb-4 block">
              {tr('product', 'overline')}
            </span>
            <h2 className="mb-6">
              {tr('product', 'heading')}
            </h2>
            <p className="text-large text-[var(--color-text-muted)] mb-12">
              {tr('product', 'body')}
            </p>

            <div className="grid grid-cols-4 gap-4 mb-12">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-sm border border-[var(--color-mist)] flex items-center justify-center mb-3 bg-[var(--color-sky-wash)]">
                    <cap.icon size={22} className="text-[var(--color-sky)]" strokeWidth={1.5} />
                  </div>
                  <span className="text-xs font-semibold text-[var(--color-text-muted)]">{tr('product', cap.labelKey)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 mb-8 border-t border-[var(--color-mist)] pt-8">
              {outcomes.map((key) => (
                <div key={key} className="flex items-center gap-3">
                  <ChevronRight size={18} className="text-[var(--color-sky)] shrink-0" />
                  <span className="text-base font-medium">{tr('product', key)}</span>
                </div>
              ))}
            </div>

            <p className="text-[var(--color-text-muted)] text-sm italic">
              {tr('product', 'outcomeClose')}
            </p>
          </div>

          <div className="w-full lg:w-1/2 animate-in fade-in duration-1000 delay-300 fill-mode-both">
            <div
              className="aspect-video w-full rounded-sm overflow-hidden flex items-center justify-center relative"
              style={{ background: 'var(--color-sky-wash)', border: '1px solid var(--color-mist)' }}
            >
              <div className="text-center px-6">
                <div className="w-20 h-20 rounded-full border-2 border-[var(--color-sky)]/30 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="text-[var(--color-sky)]" size={32} strokeWidth={1.5} />
                </div>
                <p className="text-[var(--color-sky)] text-label tracking-[0.15em]">
                  {tr('product', 'videoPlaceholder')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
