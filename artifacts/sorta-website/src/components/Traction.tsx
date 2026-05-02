import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const NODES = [
  {
    num: '01',
    nodeKey: 'node1' as const,
    tag: { en: 'In Progress', jp: '開発中' },
    labelAbove: true,
    fill: 'linear-gradient(135deg, #0090C8 0%, #00A5E5 100%)',
    border: 'none',
    numColor: '#00A5E5',
    iconColor: 'white',
    glow: '0 6px 32px rgba(0,165,229,0.35), 0 0 0 12px rgba(0,165,229,0.10)',
    active: true,
  },
  {
    num: '02',
    nodeKey: 'node2' as const,
    tag: { en: 'Late 2026', jp: '2026年後半' },
    labelAbove: false,
    fill: 'white',
    border: '3px solid #CDDFED',
    numColor: '#E1A200',
    iconColor: '#CDDFED',
    glow: '0 2px 16px rgba(0,0,0,0.06)',
    active: false,
  },
  {
    num: '03',
    nodeKey: 'node3' as const,
    tag: { en: '2027+', jp: '2027年〜' },
    labelAbove: true,
    fill: 'white',
    border: '3px solid #E0F4FD',
    numColor: '#9BB0BF',
    iconColor: '#E0F4FD',
    glow: 'none',
    active: false,
  },
];

export default function Traction() {
  const { tr, language } = useLanguage();

  return (
    <section
      id="traction"
      className="section-padding section-divider"
      style={{ background: 'var(--color-sky-wash)' }}
    >
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-3 block">{tr('traction', 'overline')}</span>
          <JpH2>{tr('traction', 'heading')}</JpH2>
        </div>

        {/* ── DESKTOP: circular chain timeline ── */}
        <div className="hidden md:block animate-in fade-in duration-1000 delay-200 fill-mode-both">
          <div style={{ position: 'relative', height: 340 }}>

            {/* Horizontal track line */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '8%',
              right: '8%',
              height: 3,
              background: 'linear-gradient(to right, #00A5E5 0%, #00A5E5 16%, #CDDFED 35%, #CDDFED 65%, #E0F4FD 84%, #E0F4FD 100%)',
              transform: 'translateY(-50%)',
              zIndex: 0,
            }} />

            {NODES.map((node, i) => {
              const leftPct = i === 0 ? '16.5%' : i === 1 ? '50%' : '83.5%';
              const CIRCLE = 110;

              return (
                <React.Fragment key={node.nodeKey}>
                  {/* Connector ring between nodes */}
                  {i < NODES.length - 1 && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: i === 0 ? '33%' : '67%',
                      transform: 'translate(-50%, -50%)',
                      width: CIRCLE,
                      height: CIRCLE,
                      borderRadius: '50%',
                      background: 'white',
                      border: '3px solid #CDDFED',
                      zIndex: 1,
                      boxShadow: '0 1px 8px rgba(0,0,0,0.05)',
                    }} />
                  )}

                  {/* Node */}
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: leftPct,
                    transform: 'translate(-50%, -50%)',
                    zIndex: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    {/* Label above */}
                    {node.labelAbove && (
                      <div style={{
                        position: 'absolute',
                        bottom: `calc(100% + 16px)`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                        minWidth: 160,
                      }}>
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: node.numColor,
                          display: 'block',
                          marginBottom: 2,
                        }}>STEP {node.num}</span>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: node.active ? 'var(--color-navy)' : 'var(--color-text-muted)',
                          textAlign: 'center',
                          margin: 0,
                          lineHeight: 1.4,
                          maxWidth: 160,
                        }}>
                          {tr('traction', node.nodeKey).replace(/\s*—.*$/, '')}
                        </p>
                        <span style={{
                          display: 'inline-block',
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: node.numColor,
                          background: node.active ? 'rgba(0,165,229,0.10)' : 'transparent',
                          padding: node.active ? '2px 8px' : '2px 0',
                          borderRadius: 20,
                          marginTop: 2,
                        }}>
                          {node.tag[language === 'jp' ? 'jp' : 'en']}
                        </span>
                        {/* Pin line */}
                        <div style={{
                          width: 1.5,
                          height: 16,
                          background: node.numColor,
                          opacity: 0.5,
                          borderRadius: 2,
                        }} />
                      </div>
                    )}

                    {/* Circle */}
                    <div style={{
                      width: CIRCLE,
                      height: CIRCLE,
                      borderRadius: '50%',
                      background: node.fill,
                      border: node.border,
                      boxShadow: node.glow,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 800,
                        fontSize: 28,
                        color: node.active ? 'white' : node.numColor,
                        lineHeight: 1,
                      }}>
                        {node.num}
                      </span>
                    </div>

                    {/* Label below */}
                    {!node.labelAbove && (
                      <div style={{
                        position: 'absolute',
                        top: `calc(100% + 16px)`,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 4,
                        minWidth: 160,
                      }}>
                        {/* Pin line */}
                        <div style={{
                          width: 1.5,
                          height: 16,
                          background: node.numColor,
                          opacity: 0.5,
                          borderRadius: 2,
                          marginBottom: 2,
                        }} />
                        <span style={{
                          fontFamily: 'var(--font-heading)',
                          fontSize: 11,
                          fontWeight: 800,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: node.numColor,
                          display: 'block',
                          marginBottom: 2,
                        }}>STEP {node.num}</span>
                        <p style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: 12.5,
                          fontWeight: 600,
                          color: 'var(--color-text-muted)',
                          textAlign: 'center',
                          margin: 0,
                          lineHeight: 1.4,
                          maxWidth: 160,
                        }}>
                          {tr('traction', node.nodeKey).replace(/\s*—.*$/, '')}
                        </p>
                        <span style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: node.numColor,
                          marginTop: 2,
                        }}>
                          {node.tag[language === 'jp' ? 'jp' : 'en']}
                        </span>
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}
          </div>
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
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: node.fill,
                border: node.border,
                boxShadow: node.active ? '0 4px 16px rgba(0,165,229,0.3)' : 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: 18,
                  color: node.active ? 'white' : node.numColor,
                }}>
                  {node.num}
                </span>
              </div>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 14,
                  fontWeight: 700,
                  color: node.active ? 'var(--color-navy)' : 'var(--color-text-muted)',
                  margin: '0 0 4px',
                }}>
                  {tr('traction', node.nodeKey).replace(/\s*—.*$/, '')}
                </p>
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: node.numColor,
                }}>
                  {node.tag[language === 'jp' ? 'jp' : 'en']}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Body quote */}
        <div className="max-w-[1200px] mt-14 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both">
          <p className="text-[var(--color-text-muted)] italic text-base border-l-2 border-[var(--color-sky)] pl-6 py-2">
            {tr('traction', 'body')}
          </p>
        </div>

      </div>
    </section>
  );
}
