import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Nav() {
  const { language, toggleLanguage, tr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { id: 'problem',   labelKey: 'problem'   as const },
    { id: 'solution',  labelKey: 'solution'  as const },
    { id: 'use-cases', labelKey: 'useCases'  as const },
    { id: 'team',      labelKey: 'ourTeam'   as const },
    { id: 'why-now',   labelKey: 'whyNow'    as const },
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[var(--color-mist)]'
        : 'bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 py-4 flex items-center justify-between gap-6">
        <div
          className="cursor-pointer flex-shrink-0"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="link-home"
        >
          <img src="/sorta_logo_black.png" alt="Sorta Logo" className="h-7 md:h-8" />
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-navy)] text-sm font-semibold tracking-wide transition-colors whitespace-nowrap"
              data-testid={`link-${link.id}`}
            >
              {tr('nav', link.labelKey)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={toggleLanguage}
            className="text-[var(--color-text-muted)] text-xs font-bold tracking-widest hover:text-[var(--color-navy)] transition-colors"
            data-testid="button-lang-toggle"
          >
            {language === 'en' ? 'EN / JP' : 'JP / EN'}
          </button>
          <button
            onClick={() => scrollTo('partner')}
            className="bg-[var(--color-sky)] text-white font-semibold px-5 py-2 text-sm rounded-sm hover:bg-[var(--color-sky)]/90 transition-colors whitespace-nowrap"
            data-testid="button-nav-cta"
          >
            {tr('nav', 'cta')}
          </button>
        </div>
      </div>
    </nav>
  );
}
