import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigation } from '@/contexts/NavigationContext';

const SECTION_ROUTE_MAP: Record<string, string> = {
  problem: '/problem',
  solution: '/solution',
  'use-cases': '/use-cases',
  partner: '/contact',
};

export default function Nav() {
  const { language, toggleLanguage, tr } = useLanguage();
  const { navigateTo } = useNavigation();
  const [location, setLocation] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const onHomePage = !location.startsWith('/company');

  const goToSection = (id: string) => {
    if (id === 'team') {
      goToTeam();
      return;
    }
    if (onHomePage) {
      navigateTo(id);
    } else {
      setLocation(SECTION_ROUTE_MAP[id] ?? '/');
    }
  };

  const goToTeam = () => {
    if (location.startsWith('/company')) {
      document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      sessionStorage.setItem('sorta:scrollToTeam', '1');
      setLocation('/company');
    }
  };

  const goHome = () => {
    if (onHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setLocation('/');
    }
  };

  const goCompany = () => {
    setMenuOpen(false);
    setLocation('/company');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { id: 'problem',   labelKey: 'problem'   as const },
    { id: 'solution',  labelKey: 'solution'  as const },
    { id: 'use-cases', labelKey: 'useCases'  as const },
    { id: 'team',      labelKey: 'ourTeam'   as const },
  ];

  const handleNav = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => goToSection(id), 50);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/60 backdrop-blur-md border-b border-black/[0.06]'
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1200px] mx-auto px-5 py-4 flex items-center justify-between gap-6">
          <div
            className="cursor-pointer flex-shrink-0"
            onClick={goHome}
            data-testid="link-home"
          >
            <img src="/sorta_logo_black.png" alt="Sorta Logo" className="h-7 md:h-8" />
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-navy)] text-[10px] font-bold uppercase tracking-[0.15em] transition-colors whitespace-nowrap"
                data-testid={`link-${link.id}`}
              >
                {tr('nav', link.labelKey)}
              </button>
            ))}
            <button
              onClick={goCompany}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-navy)] text-[10px] font-bold uppercase tracking-[0.15em] transition-colors whitespace-nowrap"
              data-testid="link-company"
            >
              {tr('nav', 'company')}
            </button>
          </div>

          {/* Desktop right controls */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <button
              onClick={toggleLanguage}
              className="text-[var(--color-text-muted)] text-xs font-bold tracking-widest hover:text-[var(--color-navy)] transition-colors"
              data-testid="button-lang-toggle"
            >
              {language === 'en' ? 'EN / JP' : 'JP / EN'}
            </button>
            <button
              onClick={() => goToSection('partner')}
              className="bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/90 text-black text-[11px] font-semibold px-5 py-2.5 rounded-full transition-all whitespace-nowrap"
              data-testid="button-nav-cta"
            >
              {tr('nav', 'cta')}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 text-[var(--color-navy)]"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setMenuOpen(false)}
        />
        {/* Panel */}
        <div className={`absolute top-0 right-0 h-full w-72 bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Close button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--color-mist)]">
            <img src="/sorta_logo_black.png" alt="Sorta" className="h-6" />
            <button
              onClick={() => setMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-[var(--color-navy)]"
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={2} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="text-left text-[var(--color-navy)] text-sm font-bold uppercase tracking-[0.15em] py-3.5 border-b border-[var(--color-mist)] hover:text-[var(--color-sky)] transition-colors"
                data-testid={`link-${link.id}`}
              >
                {tr('nav', link.labelKey)}
              </button>
            ))}
            <button
              onClick={goCompany}
              className="text-left text-[var(--color-navy)] text-sm font-bold uppercase tracking-[0.15em] py-3.5 border-b border-[var(--color-mist)] hover:text-[var(--color-sky)] transition-colors"
              data-testid="link-company"
            >
              {tr('nav', 'company')}
            </button>
          </nav>

          {/* Bottom controls */}
          <div className="px-6 pb-10 flex flex-col gap-3">
            <button
              onClick={() => { handleNav('partner'); }}
              className="w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold)]/90 text-black text-[11px] font-semibold px-5 py-3.5 rounded-full transition-all"
              data-testid="button-nav-cta"
            >
              {tr('nav', 'cta')}
            </button>
            <button
              onClick={toggleLanguage}
              className="w-full text-[var(--color-text-muted)] text-xs font-bold tracking-widest hover:text-[var(--color-navy)] transition-colors py-2"
              data-testid="button-lang-toggle"
            >
              {language === 'en' ? 'EN / JP' : 'JP / EN'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
