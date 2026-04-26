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
          <h4 style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-text-muted)', marginBottom: 4 }}>
            {tr('product', 'specTableHeading')}
          </h4>
          <table style={{ width: '100%', maxWidth: 780, borderCollapse: 'collapse', fontFamily: 'var(--font-body)' }}>
            <colgroup>
              <col style={{ width: '30%' }} />
              <col style={{ width: '70%' }} />
            </colgroup>
            <tbody>

              {/* ── PHYSICAL ── */}
              <tr>
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.3)', paddingTop: 28, paddingBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-navy)' }}>
                  {tr('product', 'specCatPhysical')}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specDimLabel')}</td>
                <td style={{ padding: '12px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specDimValue')}</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 28px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specCapTotalLabel')}</td>
                <td style={{ padding: '12px 0 28px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>
                  <div>{tr('product', 'specCapTotalValue')}</div>
                  <div style={{ marginTop: 6, paddingLeft: 12, borderLeft: '3px solid var(--color-mist)', display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 13 }}>{tr('product', 'specCapPET')} — {tr('product', 'specCapPETVal')}</span>
                    <span style={{ fontSize: 13 }}>{tr('product', 'specCapOther')} — {tr('product', 'specCapOtherVal')}</span>
                    <span style={{ fontSize: 13 }}>{tr('product', 'specCapGeneral')} — {tr('product', 'specCapGeneralVal')}</span>
                  </div>
                </td>
              </tr>

              {/* ── DETECTION ── */}
              <tr>
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.3)', paddingTop: 28, paddingBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-navy)' }}>
                  {tr('product', 'specCatDetection')}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 28px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specTechLabel')}</td>
                <td style={{ padding: '12px 0 28px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specTechValue')}</td>
              </tr>

              {/* ── SORTING ── */}
              <tr>
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.3)', paddingTop: 28, paddingBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-navy)' }}>
                  {tr('product', 'specCatSorting')}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specMechLabel')}</td>
                <td style={{ padding: '12px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specMechValue')}</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 28px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specStreamsLabel')}</td>
                <td style={{ padding: '12px 0 28px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingLeft: 12, borderLeft: '3px solid var(--color-mist)' }}>
                    <span style={{ fontSize: 13 }}>{tr('product', 'specStream1')}</span>
                    <span style={{ fontSize: 13 }}>{tr('product', 'specStream2')}</span>
                    <span style={{ fontSize: 13 }}>{tr('product', 'specStream3')}</span>
                  </div>
                </td>
              </tr>

              {/* ── PROCESSING ── */}
              <tr>
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.3)', paddingTop: 28, paddingBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-navy)' }}>
                  {tr('product', 'specCatProcessing')}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specPETLabel')}</td>
                <td style={{ padding: '12px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specPETValue')}</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 28px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specOutputLabel')}</td>
                <td style={{ padding: '12px 0 28px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specOutputValue')}</td>
              </tr>

              {/* ── MONITORING ── */}
              <tr>
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.3)', paddingTop: 28, paddingBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-navy)' }}>
                  {tr('product', 'specCatMonitoring')}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specCapTrackLabel')}</td>
                <td style={{ padding: '12px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specCapTrackValue')}</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 28px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specAlertLabel')}</td>
                <td style={{ padding: '12px 0 28px 0', color: 'var(--color-text-muted)', borderBottom: '1px solid var(--color-mist)', fontSize: 14 }}>{tr('product', 'specAlertValue')}</td>
              </tr>

              {/* ── DATA ── */}
              <tr>
                <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.3)', paddingTop: 28, paddingBottom: 8, fontSize: 11, fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: 'var(--color-navy)' }}>
                  {tr('product', 'specCatData')}
                </td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 20px 0', fontWeight: 600, color: 'var(--color-navy)', verticalAlign: 'top', fontSize: 14 }}>{tr('product', 'specDataLogLabel')}</td>
                <td style={{ padding: '12px 0 20px 0', color: 'var(--color-text-muted)', fontSize: 14 }}>{tr('product', 'specDataLogValue')}</td>
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
