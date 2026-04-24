import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CloudUpload, CopyCheck, JapaneseYen, Trash2 } from 'lucide-react';

const DESK_CIRCLE = 'w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0';
const MOB_CIRCLE  = 'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0';

const TITLE_CLS = 'font-semibold text-[var(--color-navy)] text-sm mb-1';
const DESC_CLS  = 'text-[var(--color-text-muted)] text-xs leading-relaxed';

export default function ValueProp() {
  const { tr } = useLanguage();

  return (
    <section id="value" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Section heading */}
        <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-label mb-3 block">{tr('valueProp', 'overline')}</span>
          <JpH2>{tr('valueProp', 'heading')}</JpH2>
        </div>

        {/* ── DESKTOP: Radial orbital layout ── */}
        <div className="hidden md:flex flex-col items-center gap-10">

          {/* TOP — Missorting */}
          <div
            className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: '100ms' }}
          >
            <div className={DESK_CIRCLE} style={{ background: '#00A5E5' }}>
              <CopyCheck size={24} strokeWidth={1.5} color="white" />
            </div>
            <div className="text-center">
              <p className={TITLE_CLS}>{tr('valueProp', 'pillar2Title')}</p>
              <p className={`${DESC_CLS} max-w-[240px]`}>{tr('valueProp', 'pillar2Body')}</p>
            </div>
          </div>

          {/* MIDDLE ROW — Labor | Globe | Overflow */}
          <div className="flex items-center gap-10 w-full">

            {/* LEFT — Labor */}
            <div
              className="flex-1 flex flex-row items-center justify-end gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: '200ms' }}
            >
              <div className="text-right">
                <p className={TITLE_CLS}>{tr('valueProp', 'pillar3Title')}</p>
                <p className={`${DESC_CLS} max-w-[200px] ml-auto`}>{tr('valueProp', 'pillar3Body')}</p>
              </div>
              <div className={DESK_CIRCLE} style={{ background: '#E1A200' }}>
                <JapaneseYen size={24} strokeWidth={1.5} color="white" />
              </div>
            </div>

            {/* GLOBE */}
            <div
              className="flex-shrink-0 animate-in fade-in duration-700 fill-mode-both"
              style={{ animationDelay: '50ms' }}
            >
              <img
                src="/globe.png"
                alt="World globe"
                className="rounded-full"
                style={{ width: 260, height: 260, objectFit: 'cover' }}
              />
            </div>

            {/* RIGHT — Overflow */}
            <div
              className="flex-1 flex flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: '200ms' }}
            >
              <div className={DESK_CIRCLE} style={{ background: '#3F8B44' }}>
                <Trash2 size={24} strokeWidth={1.5} color="white" />
              </div>
              <div>
                <p className={TITLE_CLS}>{tr('valueProp', 'pillar4Title')}</p>
                <p className={`${DESC_CLS} max-w-[200px]`}>{tr('valueProp', 'pillar4Body')}</p>
              </div>
            </div>

          </div>

          {/* BOTTOM — Data */}
          <div
            className="flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: '300ms' }}
          >
            <div className="text-center">
              <p className={TITLE_CLS}>{tr('valueProp', 'pillar1Title')}</p>
              <p className={`${DESC_CLS} max-w-[240px]`}>{tr('valueProp', 'pillar1Body')}</p>
            </div>
            <div className={DESK_CIRCLE} style={{ background: '#121C29' }}>
              <CloudUpload size={24} strokeWidth={1.5} color="white" />
            </div>
          </div>

        </div>

        {/* ── MOBILE: Vertical stacked list ── */}
        <div className="md:hidden flex flex-col gap-6">
          {([
            { Icon: CopyCheck,   titleKey: 'pillar2Title', descKey: 'pillar2Body', color: '#00A5E5' },
            { Icon: Trash2,      titleKey: 'pillar4Title', descKey: 'pillar4Body', color: '#3F8B44' },
            { Icon: CloudUpload, titleKey: 'pillar1Title', descKey: 'pillar1Body', color: '#121C29' },
            { Icon: JapaneseYen, titleKey: 'pillar3Title', descKey: 'pillar3Body', color: '#E1A200' },
          ] as const).map((item, i) => (
            <div
              key={i}
              className="flex flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${100 + i * 100}ms` }}
            >
              <div className={MOB_CIRCLE} style={{ background: item.color }}>
                <item.Icon size={20} strokeWidth={1.5} color="white" />
              </div>
              <div>
                <p className={TITLE_CLS}>{tr('valueProp', item.titleKey)}</p>
                <p className={DESC_CLS}>{tr('valueProp', item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
