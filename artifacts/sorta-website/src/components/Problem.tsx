import { JpH2 } from '@/components/JpH2';
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { RotateCcw } from 'lucide-react';

const metaConfig = [
  { valueKey: 'stat2Value', labelKey: 'stat2Label', accent: 'var(--color-sky)',  backBg: '#0E3A52' },
  { valueKey: 'stat3Value', labelKey: 'stat3Label', accent: 'var(--color-gold)', backBg: '#1C2C1A' },
  { valueKey: 'stat4Value', labelKey: 'stat4Label', accent: 'var(--color-sky)',  backBg: '#0E3A52' },
  { valueKey: 'stat5Value', labelKey: 'stat5Label', accent: 'var(--color-gold)', backBg: '#2C1C0A' },
  { valueKey: 'stat6Value', labelKey: 'stat6Label', accent: 'var(--color-sky)',  backBg: '#0E3A52' },
] as const;

export default function Problem() {
  const { tr } = useLanguage();
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlipped(prev => (prev === index ? null : index));
  };

  return (
    <section id="problem" className="section-padding section-divider bg-white">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading — constrained so it wraps naturally to ~2 lines */}
        <div className="max-w-[640px] mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-3 block">
            {tr('problem', 'overline')}
          </span>
          <JpH2 className="mb-5">
            {tr('problem', 'heading')}
          </JpH2>
          <p className="text-large text-[var(--color-text-muted)]">
            {tr('problem', 'body')}
          </p>
        </div>

        {/* Infographic: bottle + flip cards */}
        <div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
          style={{ animationDelay: '150ms' }}
        >

          {/* Bottle image */}
          <div className="flex-shrink-0 flex items-center justify-center w-full md:w-[240px]">
            <img
              src="/bottle-middle.png"
              alt="Sorta recycling bottle"
              className="w-44 md:w-full max-h-[480px] object-contain drop-shadow-lg select-none"
            />
          </div>

          {/* Flip card metrics */}
          <div className="flex-1 flex flex-col gap-3 w-full">
            {metaConfig.map((metric, index) => {
              const isFlipped = flipped === index;
              const value = tr('problem', metric.valueKey);
              const label = tr('problem', metric.labelKey);

              return (
                <div
                  key={index}
                  className="relative cursor-pointer"
                  style={{ perspective: '1000px', height: '90px' }}
                  onClick={() => handleFlip(index)}
                >
                  <div
                    className="relative w-full transition-transform duration-500"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      height: '90px',
                    }}
                  >
                    {/* Front face */}
                    <div
                      className="absolute inset-0 flex items-center gap-5 px-5 rounded-sm border border-[var(--color-mist)] bg-white hover:bg-[var(--color-fog)] transition-colors"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div
                        className="w-1 self-stretch rounded-full flex-shrink-0 my-4"
                        style={{ background: metric.accent }}
                      />
                      <div className="flex-1 min-w-0">
                        <div
                          className="font-heading font-extrabold text-3xl md:text-4xl leading-none mb-1"
                          style={{ color: metric.accent, letterSpacing: '0.02em' }}
                        >
                          {value}
                        </div>
                        <p className="text-[var(--color-text-muted)] text-sm leading-snug line-clamp-1">
                          {label}
                        </p>
                      </div>
                      <div className="flex-shrink-0 flex flex-col items-center gap-1 text-[var(--color-mist)]">
                        <RotateCcw size={14} />
                        <span className="text-[10px] font-semibold uppercase tracking-wider leading-none">flip</span>
                      </div>
                    </div>

                    {/* Back face */}
                    <div
                      className="absolute inset-0 flex items-stretch rounded-sm overflow-hidden border border-[var(--color-mist)]"
                      style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)',
                      }}
                    >
                      {/* Image placeholder */}
                      <div
                        className="w-24 md:w-32 flex-shrink-0 flex items-center justify-center text-center px-2"
                        style={{ background: metric.backBg }}
                      >
                        <span className="text-white/40 text-[9px] font-semibold uppercase tracking-wider leading-relaxed">
                          Image<br />coming<br />soon
                        </span>
                      </div>
                      {/* Text area */}
                      <div className="flex-1 bg-[var(--color-fog)] flex items-center px-5">
                        <p className="text-[var(--color-text-muted)] text-sm leading-relaxed line-clamp-2">
                          {value} — {label}
                        </p>
                      </div>
                      {/* Close hint */}
                      <div className="flex-shrink-0 flex items-center pr-4 pl-2 bg-[var(--color-fog)]">
                        <div className="flex flex-col items-center gap-1 text-[var(--color-mist)]">
                          <RotateCcw size={14} />
                          <span className="text-[10px] font-semibold uppercase tracking-wider leading-none">back</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
