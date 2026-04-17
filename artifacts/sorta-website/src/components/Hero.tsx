import React, { useEffect, useState } from 'react';
import { loadDefaultJapaneseParser } from 'budoux';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigation } from '@/contexts/NavigationContext';
import { ArrowDown, ArrowRight } from 'lucide-react';

const heroImagePath = '/hero_image.jpg';
const jpParser = loadDefaultJapaneseParser();

function JpLine({ text }: { text: string }) {
  const chunks = jpParser.parse(text);
  return (
    <>
      {chunks.map((chunk, i) => (
        <React.Fragment key={i}>
          <span style={{ display: 'inline-block' }}>{chunk}</span>
          {i < chunks.length - 1 && <wbr />}
        </React.Fragment>
      ))}
    </>
  );
}

export default function Hero() {
  const { tr, language } = useLanguage();
  const { navigateTo } = useNavigation();
  const isJP = language === 'jp';
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const headline = tr('hero', 'headline');
  const lines = headline.split('\n');

  return (
    <section className="relative h-[100dvh] w-full flex items-center overflow-hidden">
      <img
        src={heroImagePath}
        alt="Sorta hero"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: loaded ? 'blur(0px)' : 'blur(14px)',
          transform: loaded ? 'scale(1)' : 'scale(1.06)',
          transition: 'filter 1.4s cubic-bezier(0.4,0,0.2,1), transform 1.4s cubic-bezier(0.4,0,0.2,1)',
        }}
      />

      <div
        className="relative z-20 max-w-[1200px] w-full mx-auto px-5"
        style={{
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 1s ease 0.4s, transform 1s ease 0.4s',
        }}
      >
        <span className="text-[var(--color-navy)] text-label mb-5 block tracking-[0.15em] opacity-50">
          {tr('hero', 'overline')}
        </span>

        <h1
          className="text-[var(--color-navy)] max-w-2xl mb-8"
          style={isJP ? {
            fontSize: 'clamp(28px, 3.6vw, 50px)',
            letterSpacing: '0.04em',
            lineHeight: 1.5,
            fontWeight: 800,
            wordBreak: 'keep-all',
            overflowWrap: 'break-word',
          } : {
            fontSize: 'clamp(36px, 5vw, 68px)',
            letterSpacing: '-0.025em',
            lineHeight: 1.08,
          }}
        >
          {isJP
            ? lines.map((line, i, arr) => (
                <React.Fragment key={i}>
                  <JpLine text={line} />
                  {i < arr.length - 1 && <br />}
                </React.Fragment>
              ))
            : lines.map((line, i, arr) => (
                <React.Fragment key={i}>{line}{i < arr.length - 1 && <br />}</React.Fragment>
              ))
          }
        </h1>

        <button
          onClick={() => navigateTo('partner')}
          className="flex items-center gap-2 text-[var(--color-navy)]/60 hover:text-[var(--color-navy)] font-semibold text-sm transition-colors group"
          data-testid="button-hero-learn"
        >
          {tr('hero', 'ctaSecondary')}
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <button
        onClick={() => navigateTo('problem')}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[var(--color-navy)]/30 hover:text-[var(--color-navy)] transition-colors animate-bounce"
        aria-label="Scroll down"
        data-testid="button-scroll-indicator"
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.8s ease 1.2s' }}
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
