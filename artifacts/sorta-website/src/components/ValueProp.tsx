import { JpH2 } from '@/components/JpH2';
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CloudUpload, CopyCheck, JapaneseYen, Trash2 } from 'lucide-react';

const TITLE_CLS = 'font-semibold text-[var(--color-navy)] text-sm mb-1';
const DESC_CLS  = 'text-[var(--color-text-muted)] text-xs leading-relaxed';
const MOB_CIRCLE = 'w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0';

const CYCLE    = 3000;
const FADE_OUT =  300;
const MOVE     =  700;

const NODES = [
  { id: 'missorting', Icon: CopyCheck,   color: '#00A5E5', titleKey: 'pillar2Title' as const, descKey: 'pillar2Body' as const },
  { id: 'overflow',   Icon: Trash2,      color: '#2D6A3F', titleKey: 'pillar4Title' as const, descKey: 'pillar4Body' as const },
  { id: 'data',       Icon: CloudUpload, color: '#121C29', titleKey: 'pillar1Title' as const, descKey: 'pillar1Body' as const },
  { id: 'labor',      Icon: JapaneseYen, color: '#E1A200', titleKey: 'pillar3Title' as const, descKey: 'pillar3Body' as const },
];

const ICON_POSITIONS: React.CSSProperties[] = [
  { top: '-80px', left: '50%',   transform: 'translateX(-50%)' },
  { top: '50%',   left: '110%',  transform: 'translateY(-50%)' },
  { top: '110%',  left: '50%',   transform: 'translateX(-50%)' },
  { top: '50%',   left: '-30px', transform: 'translateY(-50%)' },
];

function SlotText({
  slotIndex,
  slots,
  textVisible,
}: {
  slotIndex: number;
  slots: number[];
  textVisible: boolean;
}) {
  const { tr } = useLanguage();
  const node = NODES[slots[slotIndex]];
  return (
    <div
      className="node-text"
      style={{
        opacity: textVisible ? 1 : 0,
        transition: `opacity ${FADE_OUT}ms ease`,
        pointerEvents: textVisible ? 'auto' : 'none',
      }}
    >
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 800, color: 'var(--color-navy)', marginBottom: 8 }}>
        {tr('valueProp', node.titleKey)}
      </p>
      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
        {tr('valueProp', node.descKey)}
      </p>
    </div>
  );
}

export default function ValueProp() {
  const { tr } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const [slots, setSlots] = useState<number[]>([0, 1, 2, 3]);
  const [textVisible, setTextVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          setTextVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setTextVisible(false);
      setTimeout(() => {
        setSlots(prev => {
          const copy = [...prev];
          copy.push(copy.shift()!);
          return copy;
        });
        setTimeout(() => {
          setTextVisible(true);
        }, MOVE);
      }, FADE_OUT);
    }, CYCLE);
    return () => clearInterval(interval);
  }, [isVisible]);

  const transitionBase = 'opacity 0.6s ease, transform 0.6s ease';

  return (
    <section ref={sectionRef} id="value" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">

        <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-label mb-3 block">{tr('valueProp', 'overline')}</span>
          <JpH2>{tr('valueProp', 'heading')}</JpH2>
        </div>

        {/* ── DESKTOP: Globe node carousel ── */}
        <div
          className="hidden md:grid"
          style={{
            gridTemplateColumns: '1fr auto 1fr',
            gridTemplateRows: 'auto auto auto',
            alignItems: 'center',
            justifyItems: 'center',
            gap: 40,
            minHeight: 600,
          }}
        >
          {/* Row 1, Col 2 — Top text slot */}
          <div
            style={{
              gridColumn: 2,
              gridRow: 1,
              textAlign: 'center',
              maxWidth: 240,
              paddingBottom: 12,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(-24px)',
              transition: transitionBase,
              transitionDelay: '0.15s',
            }}
          >
            <SlotText slotIndex={0} slots={slots} textVisible={textVisible} />
          </div>

          {/* Row 2, Col 1 — Left text slot */}
          <div
            style={{
              gridColumn: 1,
              gridRow: 2,
              textAlign: 'right',
              maxWidth: 220,
              paddingRight: 16,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
              transition: transitionBase,
              transitionDelay: '0.45s',
            }}
          >
            <SlotText slotIndex={3} slots={slots} textVisible={textVisible} />
          </div>

          {/* Row 2, Col 2 — Globe + icon circles */}
          <div
            className="globe-wrapper"
            style={{
              gridColumn: 2,
              gridRow: 2,
              position: 'relative',
              width: 320,
              height: 320,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.85)',
              transition: transitionBase,
              transitionDelay: '0s',
            }}
          >
            {/* Spinning globe map */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                className="globe-map"
                src="/world-map.jpg"
                alt="Rotating world map"
                style={{
                  width: '200%',
                  height: '100%',
                  objectFit: 'cover',
                  animation: 'globe-rotate 24s linear infinite',
                }}
              />
            </div>

            {/* Atmospheric glow ring */}
            <div
              className="globe-glow"
              style={{
                position: 'absolute',
                inset: -6,
                borderRadius: '50%',
                border: '6px solid rgba(0,165,229,0.18)',
                boxShadow: '0 0 24px 6px rgba(0,165,229,0.12), inset 0 0 24px 6px rgba(0,165,229,0.08)',
                animation: 'glow-pulse 3.5s ease-in-out infinite',
                pointerEvents: 'none',
              }}
            />

            {/* Icon circles — move between slots via CSS transition */}
            {NODES.map((node, nodeIdx) => {
              const slotIdx = slots.indexOf(nodeIdx);
              const pos = ICON_POSITIONS[slotIdx];
              return (
                <div
                  key={node.id}
                  style={{
                    position: 'absolute',
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    background: node.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    transition: `top ${MOVE}ms cubic-bezier(0.4,0,0.2,1), left ${MOVE}ms cubic-bezier(0.4,0,0.2,1)`,
                    boxShadow: '0 2px 12px rgba(0,0,0,0.18)',
                    ...pos,
                  }}
                >
                  <node.Icon size={26} strokeWidth={1.5} color="white" />
                </div>
              );
            })}
          </div>

          {/* Row 2, Col 3 — Right text slot */}
          <div
            style={{
              gridColumn: 3,
              gridRow: 2,
              textAlign: 'left',
              maxWidth: 220,
              paddingLeft: 16,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(24px)',
              transition: transitionBase,
              transitionDelay: '0.3s',
            }}
          >
            <SlotText slotIndex={1} slots={slots} textVisible={textVisible} />
          </div>

          {/* Row 3, Col 2 — Bottom text slot */}
          <div
            style={{
              gridColumn: 2,
              gridRow: 3,
              textAlign: 'center',
              maxWidth: 240,
              paddingTop: 12,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: transitionBase,
              transitionDelay: '0.3s',
            }}
          >
            <SlotText slotIndex={2} slots={slots} textVisible={textVisible} />
          </div>
        </div>

        {/* ── MOBILE: Vertical stacked list ── */}
        <div className="md:hidden flex flex-col gap-6">
          {([
            { Icon: CopyCheck,   titleKey: 'pillar2Title' as const, descKey: 'pillar2Body' as const, color: '#00A5E5' },
            { Icon: Trash2,      titleKey: 'pillar4Title' as const, descKey: 'pillar4Body' as const, color: '#2D6A3F' },
            { Icon: CloudUpload, titleKey: 'pillar1Title' as const, descKey: 'pillar1Body' as const, color: '#121C29' },
            { Icon: JapaneseYen, titleKey: 'pillar3Title' as const, descKey: 'pillar3Body' as const, color: '#E1A200' },
          ]).map((item, i) => (
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
