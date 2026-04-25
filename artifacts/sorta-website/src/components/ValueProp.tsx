import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CloudUpload, CopyCheck, JapaneseYen, Trash2 } from 'lucide-react';

const TITLE_CLS = 'font-semibold text-[var(--color-navy)] text-sm mb-1';
const DESC_CLS  = 'text-[var(--color-text-muted)] text-xs leading-relaxed';
const DESK_CIRCLE = 'w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0';
const MOB_CIRCLE  = 'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0';

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

        {/* ── DESKTOP: Radial layout — single relative container, pillars absolutely positioned ── */}
        <div className="hidden md:block relative" style={{ height: 580 }}>

          {/* Globe — centered, cylindrical CSS spinning animation */}
          <div
            className="absolute rounded-full overflow-hidden animate-in fade-in duration-700 fill-mode-both"
            style={{
              width: 260,
              height: 260,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              animationDelay: '50ms',
              background: '#fff',
            }}
          >
            <img
              src="/world-map.jpg"
              alt="World globe"
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: '200%',
                height: 'auto',
                minHeight: '100%',
                animation: 'globeSpin 20s linear infinite',
                filter: 'grayscale(1) brightness(1.45) contrast(0.55)',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'radial-gradient(circle at 38% 35%, rgba(255,255,255,0.25) 0%, transparent 45%, rgba(180,190,200,0.45) 100%)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* TOP — Missorting (pillar2, CopyCheck, #00A5E5) */}
          <div
            className="absolute flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ top: 0, left: '50%', transform: 'translateX(-50%)', animationDelay: '100ms' }}
          >
            <div className={DESK_CIRCLE} style={{ background: '#00A5E5' }}>
              <CopyCheck size={24} strokeWidth={1.5} color="white" />
            </div>
            <div className="text-center" style={{ maxWidth: 240 }}>
              <p className={TITLE_CLS}>{tr('valueProp', 'pillar2Title')}</p>
              <p className={DESC_CLS}>{tr('valueProp', 'pillar2Body')}</p>
            </div>
          </div>

          {/* RIGHT — Overflow (pillar4, Trash2, #3F8B44) */}
          <div
            className="absolute flex flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              maxWidth: 'calc(50% - 150px)',
              animationDelay: '200ms',
            }}
          >
            <div className={DESK_CIRCLE} style={{ background: '#3F8B44' }}>
              <Trash2 size={24} strokeWidth={1.5} color="white" />
            </div>
            <div className="min-w-0">
              <p className={TITLE_CLS}>{tr('valueProp', 'pillar4Title')}</p>
              <p className={DESC_CLS}>{tr('valueProp', 'pillar4Body')}</p>
            </div>
          </div>

          {/* BOTTOM — Data (pillar1, CloudUpload, #121C29) */}
          <div
            className="absolute flex flex-col items-center gap-3 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', animationDelay: '300ms' }}
          >
            <div className="text-center" style={{ maxWidth: 240 }}>
              <p className={TITLE_CLS}>{tr('valueProp', 'pillar1Title')}</p>
              <p className={DESC_CLS}>{tr('valueProp', 'pillar1Body')}</p>
            </div>
            <div className={DESK_CIRCLE} style={{ background: '#121C29' }}>
              <CloudUpload size={24} strokeWidth={1.5} color="white" />
            </div>
          </div>

          {/* LEFT — Labor (pillar3, JapaneseYen, #E1A200) */}
          <div
            className="absolute flex flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              maxWidth: 'calc(50% - 150px)',
              animationDelay: '200ms',
            }}
          >
            <div className="min-w-0 text-right">
              <p className={TITLE_CLS}>{tr('valueProp', 'pillar3Title')}</p>
              <p className={DESC_CLS}>{tr('valueProp', 'pillar3Body')}</p>
            </div>
            <div className={DESK_CIRCLE} style={{ background: '#E1A200' }}>
              <JapaneseYen size={24} strokeWidth={1.5} color="white" />
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
