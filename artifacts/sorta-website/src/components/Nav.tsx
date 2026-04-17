import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const sortaLogoPath = '/sorta_logo.png';

export default function Nav() {
  const { language, toggleLanguage, tr } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { id: 'problem', labelKey: 'problem' as const },
    { id: 'solution', labelKey: 'solution' as const },
    { id: 'use-cases', labelKey: 'useCases' as const },
    { id: 'why-now', labelKey: 'whyNow' as const },
    { id: 'team', labelKey: 'ourTeam' as const },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-[var(--color-mist)]' : 'bg-white'
    }`}>
      <div className="max-w-[1200px] mx-auto px-5 py-4 flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="link-home"
        >
          <img src={sortaLogoPath} alt="Sorta Logo" className="h-7 md:h-8" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-[var(--color-text-muted)] hover:text-[var(--color-navy)] text-sm font-semibold tracking-wide transition-colors"
                data-testid={`link-${link.id}`}
              >
                {tr('nav', link.labelKey)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-[var(--color-text-muted)] text-xs font-bold tracking-widest hover:text-[var(--color-navy)] transition-colors"
              data-testid="button-lang-toggle"
            >
              {language === 'en' ? 'EN / JP' : 'JP / EN'}
            </button>
            <button
              onClick={() => scrollTo('partner')}
              className="bg-[var(--color-sky)] text-white font-semibold px-5 py-2 text-sm rounded-sm hover:bg-[var(--color-sky)]/90 transition-colors"
              data-testid="button-nav-cta"
            >
              {tr('nav', 'cta')}
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-[var(--color-text-muted)] text-xs font-bold tracking-widest"
            data-testid="button-lang-toggle-mobile"
          >
            {language === 'en' ? 'EN' : 'JP'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-[var(--color-navy)] p-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[var(--color-mist)] py-4 px-5 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-[var(--color-navy)] text-left text-base font-semibold py-3 border-b border-[var(--color-mist)] last:border-0"
              data-testid={`link-mobile-${link.id}`}
            >
              {tr('nav', link.labelKey)}
            </button>
          ))}
          <button
            onClick={() => scrollTo('partner')}
            className="bg-[var(--color-sky)] text-white font-semibold w-full mt-4 py-3 text-sm rounded-sm"
            data-testid="button-mobile-cta"
          >
            {tr('nav', 'cta')}
          </button>
        </div>
      )}
    </nav>
  );
}
