import { JpH2 } from '@/components/JpH2';
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';


function DetectIcon({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
      <g className={animate ? 'icon-detect' : ''} style={{ transformOrigin: '24px 22px' }}>
        <circle cx="20" cy="20" r="10" stroke="white" strokeWidth="2.5" fill="none" />
        <line x1="27.5" y1="27.5" x2="36" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="16" y1="20" x2="24" y2="20" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="20" y1="16" x2="20" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      {animate && (
        <circle
          className="icon-detect-ring"
          cx="20" cy="20" r="10"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
          opacity="0"
          style={{ transformOrigin: '20px 20px' }}
        />
      )}
    </svg>
  );
}

function SortIcon({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
      <circle
        cx="24" cy="10" r="4"
        fill="white"
        className={animate ? 'icon-sort-n1' : ''}
        style={{ opacity: animate ? undefined : 1 }}
      />
      <circle
        cx="12" cy="36" r="4"
        fill="white"
        className={animate ? 'icon-sort-n2' : ''}
        style={{ opacity: animate ? undefined : 1 }}
      />
      <circle
        cx="36" cy="36" r="4"
        fill="white"
        className={animate ? 'icon-sort-n3' : ''}
        style={{ opacity: animate ? undefined : 1 }}
      />
      <line x1="24" y1="14" x2="12" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <line x1="24" y1="14" x2="36" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProcessIcon({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
      <g
        className={animate ? 'icon-gear-hovered' : ''}
        style={{ transformOrigin: '24px 24px' }}
      >
        <path
          d="M24 15a9 9 0 1 1 0 18 9 9 0 0 1 0-18zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
          fill="white"
        />
        <path
          d="M24 10v4M24 34v4M10 24h4M34 24h4M14.1 14.1l2.83 2.83M31.07 31.07l2.83 2.83M14.1 33.9l2.83-2.83M31.07 16.93l2.83-2.83"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}

function MonitorIcon({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" fill="none" aria-hidden="true">
      <g
        className={animate ? 'icon-bell' : ''}
        style={{ transformOrigin: '24px 12px' }}
      >
        <path
          d="M24 8C24 8 14 14 14 26v6h20v-6C34 14 24 8 24 8z"
          stroke="white" strokeWidth="2.5" fill="none" strokeLinejoin="round"
        />
        <line x1="20" y1="32" x2="28" y2="32" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="24" y1="32" x2="24" y2="36" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M22 36a2 2 0 0 0 4 0" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>
      {animate && (
        <circle
          cx="35" cy="14" r="4"
          fill="var(--color-sky)"
          stroke="var(--color-navy)"
          strokeWidth="1.5"
          className="icon-notif"
          style={{ opacity: 0 }}
        />
      )}
    </svg>
  );
}

type CardType = 'detect' | 'sort' | 'process' | 'monitor';

interface ProcessCardProps {
  step: number;
  title: string;
  description: string;
  outcome: string;
  type: CardType;
  initialAnimate: boolean;
  visible: boolean;
  delay: number;
  className?: string;
}

function ProcessCard({ step, title, description, outcome, type, initialAnimate, visible, delay, className = '' }: ProcessCardProps) {
  const [animKey, setAnimKey] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
    setAnimKey((k) => k + 1);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const shouldAnimate = initialAnimate || hovered;

  const renderIcon = () => {
    const key = `${type}-${animKey}`;
    switch (type) {
      case 'detect':  return <DetectIcon key={key} animate={shouldAnimate} />;
      case 'sort':    return <SortIcon key={key} animate={shouldAnimate} />;
      case 'process': return <ProcessIcon key={key} animate={hovered} />;
      case 'monitor': return <MonitorIcon key={key} animate={shouldAnimate} />;
    }
  };

  return (
    <div
      className={`relative flex flex-col pt-14 ${className}`}
      style={{
        flex: '1 1 0',
        minWidth: 0,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex flex-col flex-1"
        style={{
          background: 'var(--color-fog)',
          borderRadius: '24px',
          minHeight: '360px',
          padding: '64px 28px 28px',
        }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center"
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '50%',
            background: 'var(--color-sky)',
          }}
        >
          {renderIcon()}
        </div>

        <div
          className="text-xs font-semibold mb-3"
          style={{
            color: 'var(--color-sky)',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          Step {step}
        </div>

        <h3
          className="mb-3"
          style={{
            color: 'var(--color-navy)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '22px',
            lineHeight: 1.2,
          }}
        >
          {title}
        </h3>

        <p
          className="flex-1"
          style={{
            color: 'var(--color-navy)',
            opacity: 0.7,
            fontFamily: 'var(--font-body)',
            fontSize: '14px',
            lineHeight: 1.65,
          }}
        >
          {description}
        </p>

        <div
          style={{
            height: '1px',
            background: 'var(--color-mist)',
            margin: '20px 0 16px',
          }}
        />

        <div
          className="text-center text-sm font-semibold"
          style={{
            color: 'var(--color-navy)',
            fontFamily: 'var(--font-body)',
            opacity: 0.85,
          }}
        >
          {outcome}
        </div>
      </div>
    </div>
  );
}

function ChevronArrow({ visible, delay, className = '' }: { visible: boolean; delay: number; className?: string }) {
  return (
    <div
      className={`process-arrow flex-shrink-0 flex items-center justify-center ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {/* Right-pointing: desktop only (≥1024px) */}
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        aria-hidden="true"
        className="hidden lg:block"
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="var(--color-sky)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Down-pointing: mobile and tablet (<1024px) */}
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        aria-hidden="true"
        className="block lg:hidden"
        style={{ transform: 'rotate(90deg)' }}
      >
        <path
          d="M9 6l6 6-6 6"
          stroke="var(--color-sky)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default function Solution() {
  const { tr } = useLanguage();
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const cards = [
    {
      type: 'detect' as CardType,
      title: tr('solution', 'card1Title'),
      desc: tr('solution', 'card1Desc'),
      outcome: tr('solution', 'card1Outcome'),
    },
    {
      type: 'sort' as CardType,
      title: tr('solution', 'card2Title'),
      desc: tr('solution', 'card2Desc'),
      outcome: tr('solution', 'card2Outcome'),
    },
    {
      type: 'process' as CardType,
      title: tr('solution', 'card3Title'),
      desc: tr('solution', 'card3Desc'),
      outcome: tr('solution', 'card3Outcome'),
    },
    {
      type: 'monitor' as CardType,
      title: tr('solution', 'card4Title'),
      desc: tr('solution', 'card4Desc'),
      outcome: tr('solution', 'card4Outcome'),
    },
  ];

  return (
    <section ref={sectionRef} id="solution" className="relative section-padding section-divider overflow-hidden">
      <img
        src="/problem_bg.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      />
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(234, 247, 234, 0.60)' }} />

      <div className="relative z-20 max-w-[1200px] mx-auto px-5">
        <div className="max-w-2xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-navy)] text-label mb-3 block opacity-70">
            {tr('solution', 'overline')}
          </span>
          <JpH2 className="mb-5 text-[var(--color-navy)]">
            {tr('solution', 'heading')}
          </JpH2>
          <p className="text-large text-[var(--color-navy)]/70">
            {tr('solution', 'body')}
          </p>
        </div>

        {/* 4-card process flow */}
        <div className="relative mb-16">
          {/*
            Layout:
              mobile  (<640px):  single column, arrows point down
              tablet  (640–1023px): 2×2 grid, arrows point down
              desktop (≥1024px): 4-column row, all arrows point right
          */}
          <div className="flex flex-col sm:grid sm:grid-cols-[1fr_auto_1fr] lg:flex lg:flex-row items-stretch gap-4 sm:gap-4 lg:gap-2">
            {/* Row 1 */}
            <ProcessCard
              step={1}
              title={cards[0].title}
              description={cards[0].desc}
              outcome={cards[0].outcome}
              type={cards[0].type}
              initialAnimate={hasAnimated}
              visible={hasAnimated}
              delay={0}
              className="sm:col-start-1 sm:row-start-1"
            />
            <ChevronArrow visible={hasAnimated} delay={80} className="sm:col-start-2 sm:row-start-1" />
            <ProcessCard
              step={2}
              title={cards[1].title}
              description={cards[1].desc}
              outcome={cards[1].outcome}
              type={cards[1].type}
              initialAnimate={hasAnimated}
              visible={hasAnimated}
              delay={160}
              className="sm:col-start-3 sm:row-start-1"
            />

            {/* Inter-row arrow: hidden at tablet (sm), visible at mobile and desktop */}
            <ChevronArrow visible={hasAnimated} delay={240} className="sm:hidden lg:flex" />

            {/* Row 2 */}
            <ProcessCard
              step={3}
              title={cards[2].title}
              description={cards[2].desc}
              outcome={cards[2].outcome}
              type={cards[2].type}
              initialAnimate={hasAnimated}
              visible={hasAnimated}
              delay={320}
              className="sm:col-start-1 sm:row-start-2"
            />
            <ChevronArrow visible={hasAnimated} delay={400} className="sm:col-start-2 sm:row-start-2" />
            <ProcessCard
              step={4}
              title={cards[3].title}
              description={cards[3].desc}
              outcome={cards[3].outcome}
              type={cards[3].type}
              initialAnimate={hasAnimated}
              visible={hasAnimated}
              delay={480}
              className="sm:col-start-3 sm:row-start-2"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
