import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NODES = [
  {
    num: '01',
    nodeKey:    'node1' as const,
    tag:        { en: 'In Progress', jp: '開発中' },
    labelAbove: true,
    color:      '#00A5E5',
    bg:         '#00A5E5',
    textColor:  'white',
    active:     true,
  },
  {
    num: '02',
    nodeKey:    'node2' as const,
    tag:        { en: 'Early 2027', jp: '2027年初頭' },
    labelAbove: false,
    color:      '#E1A200',
    bg:         'white',
    textColor:  '#E1A200',
    active:     false,
  },
  {
    num: '03',
    nodeKey:    'node3' as const,
    tag:        { en: '2027+', jp: '2027年〜' },
    labelAbove: true,
    color:      '#9BB0BF',
    bg:         'white',
    textColor:  '#9BB0BF',
    active:     false,
  },
];

/* strip " — status" suffix */
function nodeTitle(text: string) {
  return text.replace(/[\s　]*[—–].*$/, '').replace(/[\s　]+(開発中|In Progress)$/, '').trim();
}

const CIRCLE    = 68;   // px diameter
const LABEL_H   = 110;  // vertical space reserved above/below for label
const PIN_H     = 20;
const CONTAINER = LABEL_H + PIN_H + CIRCLE + PIN_H + LABEL_H; // ≈ 328 px

export default function Traction() {
  const { tr, language } = useLanguage();
  const lang = language === 'jp' ? 'jp' : 'en';

  /* vertical position of circle top edge inside container */
  const circleY = LABEL_H + PIN_H;
  /* y of the horizontal line (circle vertical center) */
  const lineY   = circleY + CIRCLE / 2;

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

        {/* ── DESKTOP timeline ── */}
        <div
          className="hidden md:block animate-in fade-in duration-1000 delay-200 fill-mode-both"
        >
          <div style={{ position: 'relative', height: CONTAINER, maxWidth: 860, margin: '0 auto' }}>

            {/* ── Horizontal line ── */}
            <div style={{
              position:   'absolute',
              top:        lineY,
              left:       0,
              right:      32,
              height:     2,
              background: `linear-gradient(to right,
                #00A5E5 0%, #00A5E5 20%,
                #E1A200 48%, #E1A200 52%,
                #9BB0BF 80%, #9BB0BF 100%)`,
              transform:  'translateY(-50%)',
              zIndex:     0,
            }} />

            {/* ── Arrow tip ── */}
            <div style={{
              position:    'absolute',
              top:         lineY,
              right:       24,
              transform:   'translateY(-50%)',
              width:       0,
              height:      0,
              borderTop:   '6px solid transparent',
              borderBottom:'6px solid transparent',
              borderLeft:  '12px solid #9BB0BF',
              zIndex:      1,
            }} />

            {/* ── Nodes ── */}
            {NODES.map((node, i) => {
              const leftPct = i === 0 ? '20%' : i === 1 ? '50%' : '80%';

              return (
                <React.Fragment key={node.nodeKey}>

                  {/* ── Label ABOVE ── */}
                  {node.labelAbove && (
                    <div style={{
                      position:  'absolute',
                      bottom:    CONTAINER - circleY + PIN_H,   // sits above the circle
                      left:      leftPct,
                      transform: 'translateX(-50%)',
                      width:     190,
                      display:   'flex',
                      flexDirection: 'column',
                      alignItems:    'center',
                      zIndex:    4,
                    }}>
                      <span style={{
                        fontFamily:    'var(--font-heading)',
                        fontSize:      10,
                        fontWeight:    800,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color:         node.color,
                        marginBottom:  4,
                      }}>STEP {node.num}</span>

                      <p style={{
                        fontFamily:  'var(--font-body)',
                        fontSize:    13,
                        fontWeight:  600,
                        color:       node.active ? 'var(--color-navy)' : 'var(--color-text-muted)',
                        textAlign:   'center',
                        margin:      0,
                        lineHeight:  1.45,
                      }}>
                        {nodeTitle(tr('traction', node.nodeKey))}
                      </p>

                      <span style={{
                        marginTop:     4,
                        fontSize:      10,
                        fontWeight:    700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color:         node.color,
                        background:    node.active ? 'rgba(0,165,229,0.10)' : 'transparent',
                        padding:       node.active ? '2px 8px' : '2px 0',
                        borderRadius:  20,
                      }}>
                        {node.tag[lang]}
                      </span>

                      {/* pin down to circle */}
                      <div style={{
                        marginTop:    6,
                        width:        1.5,
                        height:       PIN_H,
                        background:   node.color,
                        opacity:      0.45,
                        borderRadius: 2,
                      }} />
                    </div>
                  )}

                  {/* ── Circle ── */}
                  <div style={{
                    position:  'absolute',
                    top:       circleY,
                    left:      leftPct,
                    transform: 'translateX(-50%)',
                    width:     CIRCLE,
                    height:    CIRCLE,
                    borderRadius: '50%',
                    background:   node.bg,
                    border:       `3px solid ${node.color}`,
                    boxShadow:    node.active
                      ? `0 4px 20px rgba(0,165,229,0.32), 0 0 0 5px rgba(0,165,229,0.10)`
                      : '0 2px 10px rgba(0,0,0,0.07)',
                    display:        'flex',
                    flexDirection:  'column',
                    alignItems:     'center',
                    justifyContent: 'center',
                    zIndex:         2,
                    cursor:         'default',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize:   11,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color:      node.textColor,
                      opacity:    node.active ? 0.8 : 0.6,
                      lineHeight: 1,
                      marginBottom: 3,
                    }}>STEP</span>
                    <span style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 800,
                      fontSize:   22,
                      lineHeight: 1,
                      color:      node.textColor,
                    }}>{node.num}</span>
                  </div>

                  {/* ── Label BELOW ── */}
                  {!node.labelAbove && (
                    <div style={{
                      position:  'absolute',
                      top:       circleY + CIRCLE + PIN_H,
                      left:      leftPct,
                      transform: 'translateX(-50%)',
                      width:     190,
                      display:   'flex',
                      flexDirection: 'column',
                      alignItems:    'center',
                      zIndex:    4,
                    }}>
                      {/* pin up from circle */}
                      <div style={{
                        width:        1.5,
                        height:       PIN_H,
                        background:   node.color,
                        opacity:      0.45,
                        borderRadius: 2,
                        marginBottom: 6,
                        marginTop:    -PIN_H,
                      }} />

                      <span style={{
                        fontFamily:    'var(--font-heading)',
                        fontSize:      10,
                        fontWeight:    800,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color:         node.color,
                        marginBottom:  4,
                      }}>STEP {node.num}</span>

                      <p style={{
                        fontFamily:  'var(--font-body)',
                        fontSize:    13,
                        fontWeight:  600,
                        color:       'var(--color-text-muted)',
                        textAlign:   'center',
                        margin:      0,
                        lineHeight:  1.45,
                      }}>
                        {nodeTitle(tr('traction', node.nodeKey))}
                      </p>

                      <span style={{
                        marginTop:     4,
                        fontSize:      10,
                        fontWeight:    700,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color:         node.color,
                      }}>
                        {node.tag[lang]}
                      </span>
                    </div>
                  )}

                </React.Fragment>
              );
            })}

          </div>
        </div>

        {/* ── MOBILE: vertical stack ── */}
        <div className="md:hidden flex flex-col gap-0 relative animate-in fade-in duration-700 delay-200 fill-mode-both">
          {/* vertical line */}
          <div style={{
            position: 'absolute',
            left:     31,
            top:      32,
            bottom:   32,
            width:    2,
            background: 'linear-gradient(to bottom,#00A5E5,#E1A200,#9BB0BF)',
          }} />

          {NODES.map((node, i) => (
            <div
              key={node.nodeKey}
              className="flex items-start gap-5"
              style={{
                paddingBottom: i < NODES.length - 1 ? 36 : 0,
                animationDelay: `${i * 120}ms`,
              }}
            >
              {/* circle on the line */}
              <div style={{
                flexShrink:   0,
                width:        64,
                height:       64,
                borderRadius: '50%',
                background:   node.bg,
                border:       `3px solid ${node.color}`,
                boxShadow:    node.active ? '0 4px 16px rgba(0,165,229,0.25)' : 'none',
                display:      'flex',
                flexDirection:'column',
                alignItems:   'center',
                justifyContent: 'center',
                zIndex:       1,
                position:     'relative',
              }}>
                <span style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:9, letterSpacing:'0.1em', textTransform:'uppercase', color:node.textColor, opacity:0.7, lineHeight:1, marginBottom:2 }}>STEP</span>
                <span style={{ fontFamily:'var(--font-heading)', fontWeight:800, fontSize:20, lineHeight:1, color:node.textColor }}>{node.num}</span>
              </div>

              <div style={{ paddingTop: 12 }}>
                <span style={{ fontSize:10, fontWeight:800, letterSpacing:'0.14em', textTransform:'uppercase', color:node.color, display:'block', marginBottom:4 }}>
                  STEP {node.num}
                </span>
                <p style={{ fontFamily:'var(--font-body)', fontSize:14, fontWeight:700, color: node.active ? 'var(--color-navy)' : 'var(--color-text-muted)', margin:'0 0 4px' }}>
                  {nodeTitle(tr('traction', node.nodeKey))}
                </p>
                <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:node.color }}>
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
