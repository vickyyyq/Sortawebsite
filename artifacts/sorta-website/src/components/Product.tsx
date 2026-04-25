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

        {/* Specs + outcome */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-200">
          <div>
            <h4 className="text-[var(--color-text-muted)] text-xs uppercase tracking-widest mb-4 font-semibold">Specifications</h4>
            <div className="divide-y divide-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-white">
                <span className="text-[var(--color-text-muted)] text-sm">{tr('product', 'specSizeLabel')}</span>
                <span className="text-[var(--color-navy)] font-semibold text-sm">{tr('product', 'specSize')}</span>
              </div>
              <div className="flex items-center justify-between px-6 py-4 bg-white">
                <span className="text-[var(--color-text-muted)] text-sm">{tr('product', 'specCapacityLabel')}</span>
                <span className="text-[var(--color-navy)] font-semibold text-sm text-right">{tr('product', 'specCapacity')}</span>
              </div>
            </div>
          </div>

          <div className="border-l border-[var(--color-mist)] pl-12">
            <p className="text-[var(--color-navy)] font-heading font-extrabold text-xl md:text-2xl leading-snug" style={{ letterSpacing: '-0.01em' }}>
              {tr('product', 'outcomeClose')}
            </p>
          </div>
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
