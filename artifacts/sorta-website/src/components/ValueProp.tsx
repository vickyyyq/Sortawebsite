import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CloudUpload, CopyCheck, JapaneseYen, Trash2 } from 'lucide-react';

const TITLE_CLS = 'font-semibold text-[var(--color-navy)] text-sm mb-1';
const DESC_CLS  = 'text-[var(--color-text-muted)] text-xs leading-relaxed';
const DESK_CIRCLE = 'w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0';
const MOB_CIRCLE  = 'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0';

const ORBIT_RADIUS = 190;
const PERIOD = 30;

const PILLARS = [
  { Icon: CopyCheck,    color: '#00A5E5', titleKey: 'pillar2Title' as const, descKey: 'pillar2Body' as const, delay: 0     },
  { Icon: Trash2,       color: '#3F8B44', titleKey: 'pillar4Title' as const, descKey: 'pillar4Body' as const, delay: -7.5  },
  { Icon: CloudUpload,  color: '#121C29', titleKey: 'pillar1Title' as const, descKey: 'pillar1Body' as const, delay: -15   },
  { Icon: JapaneseYen,  color: '#E1A200', titleKey: 'pillar3Title' as const, descKey: 'pillar3Body' as const, delay: -22.5 },
] as const;

export default function ValueProp() {
  const { tr } = useLanguage();

  return (
    <section id="value" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">

        <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-label mb-3 block">{tr('valueProp', 'overline')}</span>
          <JpH2>{tr('valueProp', 'heading')}</JpH2>
        </div>

        {/* ── DESKTOP: Orbital radial layout ── */}
        <div className="hidden md:block relative" style={{ height: 640 }}>

          {/* Orbit ring */}
          <svg
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 390,
              height: 390,
              overflow: 'visible',
              zIndex: 0,
            }}
          >
            <circle
              cx={195}
              cy={195}
              r={ORBIT_RADIUS}
              fill="none"
              stroke="#CDDFED"
              strokeWidth={1.5}
              strokeDasharray="3 9"
              strokeLinecap="round"
            />
          </svg>

          {/* Globe — centered */}
          <img
            src="/globe.png"
            alt="World globe"
            className="absolute rounded-full animate-in fade-in duration-700 fill-mode-both"
            style={{
              width: 260,
              height: 260,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              objectFit: 'cover',
              zIndex: 1,
              animationDelay: '50ms',
            }}
          />

          {/* Orbiting pillars */}
          {PILLARS.map((p, i) => (
            <div
              key={i}
              className="orbit-pivot"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: 0,
                height: 0,
                transformOrigin: '0 0',
                animation: `orbitSpin ${PERIOD}s linear infinite`,
                animationDelay: `${p.delay}s`,
                zIndex: 2,
              }}
            >
              {/* Counter-rotating content — icon center sits at orbit radius */}
              <div
                className="orbit-content"
                style={{
                  position: 'absolute',
                  top: -(ORBIT_RADIUS + 28 + 12 + 55),
                  left: -140,
                  width: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  animation: `counterOrbitSpin ${PERIOD}s linear infinite`,
                  animationDelay: `${p.delay}s`,
                }}
              >
                <div style={{ maxWidth: 280, textAlign: 'center' }}>
                  <p className={TITLE_CLS}>{tr('valueProp', p.titleKey)}</p>
                  <p className={DESC_CLS}>{tr('valueProp', p.descKey)}</p>
                </div>
                <div className={DESK_CIRCLE} style={{ background: p.color }}>
                  <p.Icon size={24} strokeWidth={1.5} color="white" />
                </div>
              </div>
            </div>
          ))}

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
