import { JpH2 } from '@/components/JpH2';
import React, { useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Product() {
  const { tr } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }

  const showButton = !isPlaying || isHovered;

  return (
    <section id="product" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Heading */}
        <div className="max-w-2xl mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-label mb-4 block">
            {tr('product', 'overline')}
          </span>
          <JpH2 className="mb-5">
            {tr('product', 'heading')}
          </JpH2>
          <p className="text-large text-[var(--color-text-muted)]">
            {tr('product', 'body')}
          </p>
        </div>

        {/* Outcome callout */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-200">
          <p className="text-[var(--color-navy)] font-heading font-extrabold text-xl md:text-2xl leading-snug" style={{ letterSpacing: '-0.01em' }}>
            {tr('product', 'outcomeClose')}
          </p>
        </div>

        {/* Specifications table */}
        <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-200">

          {/* Mobile responsive styles */}
          <style>{`
            @media (max-width: 768px) {
              .specs-table tr.specs-data-row { display: block; padding: 18px 0; }
              .specs-table td.specs-label {
                display: block !important;
                font-size: 11px !important;
                text-transform: uppercase;
                letter-spacing: 0.05em;
                margin-bottom: 4px;
                border-left: none !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                padding-top: 0 !important;
                padding-bottom: 0 !important;
                border-bottom: none !important;
              }
              .specs-table td.specs-value {
                display: block !important;
                font-size: 15px !important;
                padding: 0 0 18px 0 !important;
                border-bottom: 1px solid rgba(205,223,237,0.4) !important;
              }
              .specs-table tr.specs-cat-row td { padding-top: 32px !important; }
              .specs-cap-breakdown { font-size: 12px !important; margin-top: 4px !important; }
              .specs-table tr.specs-data-row:last-child td.specs-value { border-bottom: none !important; }
            }
          `}</style>

          {/* Sub-header */}
          <div style={{ maxWidth: 560, marginBottom: 48 }}>
            <span className="text-label mb-3 block">
              {tr('product', 'specTableHeading')}
            </span>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 40, fontWeight: 800, color: 'var(--color-navy)', lineHeight: 1.15, marginBottom: 16 }}>
              {tr('product', 'specSubHeading')}
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-text-muted)', maxWidth: 480, lineHeight: 1.7 }}>
              {tr('product', 'specSubText')}
            </p>
          </div>

          <table className="specs-table" style={{ width: '100%', maxWidth: 1040, borderCollapse: 'collapse' }}>
            <colgroup>
              <col style={{ width: '24%' }} />
              <col style={{ width: '76%' }} />
            </colgroup>
            <tbody>

              {/* ── PHYSICAL ── */}
              <tr className="specs-cat-row">
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.25)', paddingTop: 0, paddingBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-sky)', borderLeft: '3px solid var(--color-gold)', paddingLeft: 10 }}>
                    {tr('product', 'specCatPhysical')}
                  </span>
                </td>
              </tr>
              <tr className="specs-data-row">
                <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                  {tr('product', 'specDimLabel')}
                </td>
                <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                  {tr('product', 'specDimValue')}
                </td>
              </tr>
              <tr className="specs-data-row">
                <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                  {tr('product', 'specCapLabel')}
                </td>
                <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                  <span style={{ display: 'block', fontSize: 15, fontWeight: 500, color: 'var(--color-text-muted)' }}>
                    {tr('product', 'specCapPrimary')}
                  </span>
                  <span className="specs-cap-breakdown" style={{ display: 'block', fontSize: 13, fontWeight: 400, color: 'rgba(74,96,112,0.6)', marginTop: 5, letterSpacing: '0.01em' }}>
                    {tr('product', 'specCapBreakdown')}
                  </span>
                </td>
              </tr>

              {/* ── CORE FEATURES ── */}
              <tr className="specs-cat-row">
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.25)', paddingTop: 48, paddingBottom: 10 }}>
                  <span style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-sky)', borderLeft: '3px solid var(--color-gold)', paddingLeft: 10 }}>
                    {tr('product', 'specCatCoreFeatures')}
                  </span>
                </td>
              </tr>
              <tr className="specs-data-row">
                <td className="specs-label" style={{ padding: '24px 32px 24px 12px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', borderLeft: '2px solid rgba(205,223,237,0.6)' }}>
                  {tr('product', 'specFeatDetectLabel')}
                </td>
                <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                  {tr('product', 'specFeatDetectValue')}
                </td>
              </tr>
              <tr className="specs-data-row">
                <td className="specs-label" style={{ padding: '24px 32px 24px 12px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', borderLeft: '2px solid rgba(205,223,237,0.6)' }}>
                  {tr('product', 'specFeatSortLabel')}
                </td>
                <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                  {tr('product', 'specFeatSortValue')}
                </td>
              </tr>
              <tr className="specs-data-row">
                <td className="specs-label" style={{ padding: '24px 32px 24px 12px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', borderLeft: '2px solid rgba(205,223,237,0.6)' }}>
                  {tr('product', 'specFeatProcessLabel')}
                </td>
                <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                  {tr('product', 'specFeatProcessValue')}
                </td>
              </tr>
              <tr className="specs-data-row">
                <td className="specs-label" style={{ padding: '24px 32px 24px 12px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', borderLeft: '2px solid rgba(205,223,237,0.6)' }}>
                  {tr('product', 'specFeatMonitorLabel')}
                </td>
                <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                  {tr('product', 'specFeatMonitorValue')}
                </td>
              </tr>
              <tr className="specs-data-row">
                <td className="specs-label" style={{ padding: '24px 32px 24px 12px', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderLeft: '2px solid rgba(205,223,237,0.6)' }}>
                  {tr('product', 'specFeatDataLabel')}
                </td>
                <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', lineHeight: 1.65 }}>
                  {tr('product', 'specFeatDataValue')}
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Product video */}
        <div
          className="relative w-full mb-14 rounded-sm overflow-hidden animate-in fade-in duration-700 fill-mode-both delay-300"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <video
            ref={videoRef}
            src="/sorta_product.mp4"
            loop
            muted
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            className="w-full h-auto block rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px]"
          />

          {/* Play/Pause overlay button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2"
            style={{
              background: 'transparent',
              opacity: showButton ? 1 : 0,
              transition: 'opacity 0.2s ease',
            }}
          >
            <div className="w-16 h-16 rounded-full bg-black/50 flex items-center justify-center backdrop-blur-sm pointer-events-none">
              {isPlaying ? (
                /* Pause icon */
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="4" width="4" height="16" rx="1" />
                  <rect x="15" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                /* Play icon — offset slightly right to look centered */
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '3px' }}>
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
