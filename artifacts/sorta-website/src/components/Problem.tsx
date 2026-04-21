import { JpH2 } from '@/components/JpH2';
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BOTTLE_H = 290; // desktop bottle height px
const CAP_W = 52;    // desktop cap width px

const metaConfig = [
  { valueKey: 'stat2Value', labelKey: 'stat2Label', accent: 'var(--color-sky)',  backBg: '#0A2535', backImage: '/stat-contamination.png', backDescKey: 'stat2Back' },
  { valueKey: 'stat3Value', labelKey: 'stat3Label', accent: 'var(--color-gold)', backBg: '#1A2710', backImage: '/stat-pet-waste.png',     backDescKey: 'stat3Back' },
  { valueKey: 'stat4Value', labelKey: 'stat4Label', accent: 'var(--color-sky)',  backBg: '#0A2535', backImage: '/stat-misuse.png',        backDescKey: 'stat4Back' },
  { valueKey: 'stat5Value', labelKey: 'stat5Label', accent: 'var(--color-gold)', backBg: '#2C1C0A', backImage: '/stat-confusion.png',     backDescKey: 'stat5Back' },
  { valueKey: 'stat6Value', labelKey: 'stat6Label', accent: 'var(--color-sky)',  backBg: '#0A2535', backImage: '/stat-labor.png',         backDescKey: 'stat6Back' },
] as const;

export default function Problem() {
  const { tr } = useLanguage();
  const [hovered, setHovered] = useState<number | null>(null);
  const [tapped, setTapped]   = useState<number | null>(null);

  return (
    <section id="problem" className="section-padding section-divider bg-white">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <div className="max-w-[640px] mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-3 block">{tr('problem', 'overline')}</span>
          <JpH2 className="mb-5">{tr('problem', 'heading')}</JpH2>
          <p className="text-large text-[var(--color-text-muted)]">{tr('problem', 'body')}</p>
        </div>

        {/* ── DESKTOP: landscape bottle ── */}
        <div
          className="hidden md:block animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
          style={{ animationDelay: '150ms' }}
        >
          <div className="relative" style={{ paddingRight: CAP_W }}>

            {/* Bottle body.
                 NOTE: overflow:hidden is intentionally omitted here.
                 Adding it would flatten the CSS preserve-3d context on each column's
                 flipper, turning the 3D rotateX card flip into a broken 2D squish.
                 Rounded-rect clipping is achieved instead by applying matching
                 border-radius on the individual card faces (faceRadius below). */}
            <div
              className="flex rounded-[28px]"
              style={{ background: 'var(--color-sky-wash)', height: BOTTLE_H }}
            >
              {metaConfig.map((metric, i) => {
                const isFirst = i === 0;
                const isLast  = i === metaConfig.length - 1;
                const faceRadius = isFirst ? '28px 0 0 28px' : isLast ? '0 28px 28px 0' : '0';
                const value   = tr('problem', metric.valueKey);
                const label   = tr('problem', metric.labelKey);
                const backDesc = tr('problem', metric.backDescKey);

                return (
                  <div
                    key={i}
                    className="flex-1 relative cursor-default"
                    style={{ perspective: '1000px' }}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* Flipper */}
                    <div
                      className="absolute inset-0"
                      style={{
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.6s ease',
                        transform: hovered === i ? 'rotateX(180deg)' : 'rotateX(0deg)',
                      }}
                    >
                      {/* Front face */}
                      <div
                        className={`absolute inset-0 flex flex-col justify-between px-6 py-8 ${i > 0 ? 'border-l border-[var(--color-mist)]' : ''}`}
                        style={{
                          backfaceVisibility: 'hidden',
                          background: 'var(--color-sky-wash)',
                          borderRadius: faceRadius,
                        }}
                      >
                        <div
                          className="font-heading font-extrabold leading-none"
                          style={{ color: metric.accent, fontSize: '50px', letterSpacing: '0.02em' }}
                        >
                          {value}
                        </div>
                        <p className="text-[var(--color-text-muted)] text-[13px] leading-snug font-medium line-clamp-3">
                          {label}
                        </p>
                      </div>

                      {/* Back face */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateX(180deg)',
                          background: metric.backBg,
                          borderRadius: faceRadius,
                        }}
                      >
                        {/* Real image tag */}
                        <img
                          src={metric.backImage}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }}
                        />
                        {/* Description */}
                        <p
                          className="absolute bottom-0 left-0 line-clamp-2"
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#FFFFFF',
                            padding: '20px 24px',
                          }}
                        >
                          {backDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cap tab — extends right */}
            <div
              className="absolute rounded-r-[20px]"
              style={{
                background: 'var(--color-sky-wash)',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: CAP_W,
                height: Math.round(BOTTLE_H * 0.44),
              }}
            />
          </div>
        </div>

        {/* ── MOBILE: portrait bottle ── */}
        <div
          className="md:hidden animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
          style={{ animationDelay: '150ms' }}
        >
          {/* marginTop makes room for the cap tab above */}
          <div className="relative" style={{ marginTop: 36 }}>

            {/* Cap tab — sits above the bottle body */}
            <div
              className="absolute left-1/2 rounded-t-[20px]"
              style={{
                background: 'var(--color-sky-wash)',
                transform: 'translateX(-50%)',
                width: '44%',
                height: 40,
                top: -36, // 4px overlap into body top
              }}
            />

            {/* Bottle body.
                 NOTE: overflow:hidden omitted for same preserve-3d reason as desktop.
                 Border-radius on individual row faces provides the silhouette shape. */}
            <div
              className="flex flex-col rounded-[28px]"
              style={{ background: 'var(--color-sky-wash)' }}
            >
              {metaConfig.map((metric, i) => {
                const isFirst = i === 0;
                const isLast  = i === metaConfig.length - 1;
                const faceRadius = isFirst ? '28px 28px 0 0' : isLast ? '0 0 28px 28px' : '0';
                const isTapped = tapped === i;
                const value    = tr('problem', metric.valueKey);
                const label    = tr('problem', metric.labelKey);
                const backDesc = tr('problem', metric.backDescKey);

                return (
                  <div
                    key={i}
                    className="relative cursor-pointer"
                    style={{ perspective: '1000px', height: 100 }}
                    onClick={() => setTapped(prev => (prev === i ? null : i))}
                  >
                    {/* Flipper — rotateY on tap */}
                    <div
                      className="absolute inset-0"
                      style={{
                        transformStyle: 'preserve-3d',
                        transition: 'transform 0.6s ease',
                        transform: isTapped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                      }}
                    >
                      {/* Front face */}
                      <div
                        className={`absolute inset-0 flex items-center gap-4 px-6 ${i > 0 ? 'border-t border-[var(--color-mist)]' : ''}`}
                        style={{
                          backfaceVisibility: 'hidden',
                          background: 'var(--color-sky-wash)',
                          borderRadius: faceRadius,
                        }}
                      >
                        <div
                          className="font-heading font-extrabold leading-none flex-shrink-0"
                          style={{ color: metric.accent, fontSize: '36px', letterSpacing: '0.02em', minWidth: 88 }}
                        >
                          {value}
                        </div>
                        <p className="text-[var(--color-text-muted)] text-[13px] leading-snug font-medium line-clamp-2 flex-1">
                          {label}
                        </p>
                      </div>

                      {/* Back face */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{
                          backfaceVisibility: 'hidden',
                          transform: 'rotateY(180deg)',
                          background: metric.backBg,
                          borderRadius: faceRadius,
                        }}
                      >
                        <img
                          src={metric.backImage}
                          alt=""
                          className="absolute inset-0 w-full h-full object-cover opacity-80"
                        />
                        <div
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }}
                        />
                        <p
                          className="absolute bottom-0 left-0 line-clamp-2"
                          style={{
                            fontFamily: 'var(--font-sans)',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: '#FFFFFF',
                            padding: '16px 24px',
                          }}
                        >
                          {backDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
