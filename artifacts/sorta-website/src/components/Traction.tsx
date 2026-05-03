import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

/* ─── sizes ──────────────────────────────────────────────────────── */
const OUTER   = 148;   // outer ring diameter (px)
const BORDER  = 10;    // ring border width  (px)
const INNER   = OUTER - BORDER * 2; // inner fill diameter

const NODES = [
  {
    num: '01',
    nodeKey: 'node1'  as const,
    tag:     { en: 'In Progress', jp: '開発中' },
    labelAbove: true,
    ringColor:  '#00A5E5',
    innerFill:  'linear-gradient(135deg,#0090C8 0%,#00A5E5 100%)',
    numColor:   'white',
    stepColor:  '#00A5E5',
    active: true,
  },
  {
    num: '02',
    nodeKey: 'node2'  as const,
    tag:     { en: 'Late 2026', jp: '2026年後半' },
    labelAbove: false,
    ringColor:  '#CDDFED',
    innerFill:  'white',
    numColor:   '#E1A200',
    stepColor:  '#E1A200',
    active: false,
  },
  {
    num: '03',
    nodeKey: 'node3'  as const,
    tag:     { en: '2027+', jp: '2027年〜' },
    labelAbove: true,
    ringColor:  '#D6E8F4',
    innerFill:  'white',
    numColor:   '#9BB0BF',
    stepColor:  '#9BB0BF',
    active: false,
  },
];

/* strip " — suffix" and japanese status words so only the title shows */
function nodeTitle(text: string) {
  return text.replace(/[\s　]*[—–].*$/, '').replace(/[\s　]+(開発中|In Progress)$/, '').trim();
}

export default function Traction() {
  const { tr, language } = useLanguage();
  const lang = language === 'jp' ? 'jp' : 'en';

  /* vertical real-estate: label zone + pin + circle + pin + label zone */
  const LABEL_H = 90;
  const PIN_H   = 24;
  const TOTAL_H = LABEL_H + PIN_H + OUTER + PIN_H + LABEL_H; // 474

  /* circle vertical centre inside the container */
  const circleTop = LABEL_H + PIN_H; // y where circle's top edge sits

  return (
    <section
      id="traction"
      className="section-padding section-divider"
      style={{ background: 'var(--color-sky-wash)' }}
    >
      <div className="max-w-[1200px] mx-auto px-5">

        {/* ── Heading ── */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-3 block">{tr('traction', 'overline')}</span>
          <JpH2>{tr('traction', 'heading')}</JpH2>
        </div>

        {/* ── DESKTOP: interlocking ring timeline ── */}
        <div
          className="hidden md:block animate-in fade-in duration-1000 delay-200 fill-mode-both"
          style={{ position: 'relative', height: TOTAL_H, maxWidth: 780, margin: '0 auto' }}
        >
          {/* ── Gray track bar (sits behind circles, creates connected path) ── */}
          <div style={{
            position: 'absolute',
            top:    circleTop + OUTER / 2 - BORDER / 2,
            left:   '16%',
            right:  '16%',
            height: BORDER,
            borderRadius: BORDER / 2,
            background: `linear-gradient(to right,
              #00A5E5 0%,
              #CDDFED 40%,
              #D6E8F4 100%)`,
            zIndex: 0,
          }} />

          {NODES.map((node, i) => {
            /* node centres at 16%, 50%, 84% */
            const leftPct = i === 0 ? '16%' : i === 1 ? '50%' : '84%';

            return (
              <React.Fragment key={node.nodeKey}>

                {/* ── Label above ── */}
                {node.labelAbove && (
                  <div style={{
                    position: 'absolute',
                    top:  0,
                    left: leftPct,
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 180,
                    zIndex: 4,
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: node.stepColor,
                      marginBottom: 4,
                    }}>
                      STEP {node.num}
                    </span>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: node.active ? 'var(--color-navy)' : 'var(--color-text-muted)',
                      textAlign: 'center',
                      margin: 0,
                      lineHeight: 1.45,
                      maxWidth: 160,
                    }}>
                      {nodeTitle(tr('traction', node.nodeKey))}
                    </p>
                    <span style={{
                      marginTop: 5,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: node.stepColor,
                      background: node.active ? 'rgba(0,165,229,0.10)' : 'transparent',
                      padding: node.active ? '2px 8px' : 0,
                      borderRadius: 20,
                    }}>
                      {node.tag[lang]}
                    </span>
                    {/* ── pin line ── */}
                    <div style={{
                      marginTop: 6,
                      width: 1.5,
                      height: PIN_H,
                      background: node.stepColor,
                      opacity: 0.45,
                      borderRadius: 2,
                    }} />
                  </div>
                )}

                {/* ── Circle (outer ring + inner fill) ── */}
                <div style={{
                  position: 'absolute',
                  top:  circleTop,
                  left: leftPct,
                  transform: 'translateX(-50%)',
                  width:  OUTER,
                  height: OUTER,
                  zIndex: 2,
                }}>
                  {/* outer ring */}
                  <div style={{
                    position:     'absolute',
                    inset:        0,
                    borderRadius: '50%',
                    border:       `${BORDER}px solid ${node.ringColor}`,
                    background:   'white',
                    boxShadow:    node.active
                      ? `0 6px 28px rgba(0,165,229,0.28), 0 0 0 6px rgba(0,165,229,0.08)`
                      : '0 2px 12px rgba(0,0,0,0.05)',
                  }} />
                  {/* inner fill circle */}
                  <div style={{
                    position:     'absolute',
                    top:          BORDER,
                    left:         BORDER,
                    width:        INNER,
                    height:       INNER,
                    borderRadius: '50%',
                    background:   node.innerFill,
                    display:      'flex',
                    alignItems:   'center',
                    justifyContent: 'center',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize:   30,
                      lineHeight:  1,
                      color:       node.numColor,
                    }}>
                      {node.num}
                    </span>
                  </div>
                </div>

                {/* ── Label below ── */}
                {!node.labelAbove && (
                  <div style={{
                    position: 'absolute',
                    top:  circleTop + OUTER + PIN_H,
                    left: leftPct,
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 180,
                    zIndex: 4,
                  }}>
                    {/* ── pin line ── */}
                    <div style={{
                      width: 1.5,
                      height: PIN_H,
                      background: node.stepColor,
                      opacity: 0.45,
                      borderRadius: 2,
                      marginBottom: 6,
                      /* pin already accounted for in `top` offset */
                      marginTop: -PIN_H,
                    }} />
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: node.stepColor,
                      marginBottom: 4,
                    }}>
                      STEP {node.num}
                    </span>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 12.5,
                      fontWeight: 600,
                      color: 'var(--color-text-muted)',
                      textAlign: 'center',
                      margin: 0,
                      lineHeight: 1.45,
                      maxWidth: 160,
                    }}>
                      {nodeTitle(tr('traction', node.nodeKey))}
                    </p>
                    <span style={{
                      marginTop: 5,
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: node.stepColor,
                    }}>
                      {node.tag[lang]}
                    </span>
                  </div>
                )}

              </React.Fragment>
            );
          })}
        </div>

        {/* ── MOBILE: vertical stack ── */}
        <div className="md:hidden flex flex-col gap-8 animate-in fade-in duration-700 delay-200 fill-mode-both">
          {NODES.map((node, i) => (
            <div
              key={node.nodeKey}
              className="flex items-center gap-5"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              <div style={{
                position: 'relative',
                width:  72,
                height: 72,
                flexShrink: 0,
              }}>
                <div style={{
                  position:     'absolute',
                  inset:        0,
                  borderRadius: '50%',
                  border:       `6px solid ${node.ringColor}`,
                  background:   'white',
                  boxShadow:    node.active ? '0 4px 16px rgba(0,165,229,0.25)' : 'none',
                }} />
                <div style={{
                  position:     'absolute',
                  top:          6,
                  left:         6,
                  width:        60,
                  height:       60,
                  borderRadius: '50%',
                  background:   node.innerFill,
                  display:      'flex',
                  alignItems:   'center',
                  justifyContent: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    fontSize:   18,
                    color:      node.numColor,
                  }}>
                    {node.num}
                  </span>
                </div>
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize:   14,
                  fontWeight: 700,
                  color:      node.active ? 'var(--color-navy)' : 'var(--color-text-muted)',
                  margin:     '0 0 4px',
                }}>
                  {nodeTitle(tr('traction', node.nodeKey))}
                </p>
                <span style={{
                  fontSize:      11,
                  fontWeight:    700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color:         node.stepColor,
                }}>
                  {node.tag[lang]}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Body quote ── */}
        <div className="max-w-[1200px] mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <p className="text-[var(--color-text-muted)] italic text-base border-l-2 border-[var(--color-sky)] pl-6 py-2">
            {tr('traction', 'body')}
          </p>
        </div>

      </div>
    </section>
  );
}
