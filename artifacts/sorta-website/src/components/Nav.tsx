import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import sortaLogoPath from '@assets/sorta_logo_1776429326461.png';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Nav() {
  const { language, toggleLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'problem', en: 'Problem', jp: '課題' },
    { id: 'solution', en: 'Solution', jp: 'ソリューション' },
    { id: 'use-cases', en: 'Use Cases', jp: 'ユースケース' },
    { id: 'why-now', en: 'Why Now', jp: 'なぜ今か' },
    { id: 'team', en: 'Our Team', jp: 'チーム' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--color-navy)] py-4 shadow-md' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
        <div
          className="cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          data-testid="link-home"
        >
          <img src={sortaLogoPath} alt="Sorta Logo" className="h-8 md:h-10" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-white hover:text-[var(--color-gold)] text-sm font-semibold tracking-wide transition-colors"
                data-testid={`link-${link.id}`}
              >
                {t(link.en, link.jp)}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="text-white text-sm font-bold opacity-80 hover:opacity-100 transition-opacity"
              data-testid="button-lang-toggle"
            >
              {language === 'en' ? 'EN / JP' : 'JP / EN'}
            </button>
            <Button
              onClick={() => scrollTo('partner')}
              className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90 font-semibold px-6"
              data-testid="button-nav-cta"
            >
              {t('Get in touch', 'お問い合わせ')}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="text-white text-sm font-bold opacity-80 hover:opacity-100 transition-opacity"
            data-testid="button-lang-toggle-mobile"
          >
            {language === 'en' ? 'EN' : 'JP'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white p-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[var(--color-navy)] border-t border-[var(--color-navy)]/50 shadow-xl py-4 px-5 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-white text-left text-lg font-semibold py-2"
              data-testid={`link-mobile-${link.id}`}
            >
              {t(link.en, link.jp)}
            </button>
          ))}
          <Button
            onClick={() => scrollTo('partner')}
            className="bg-[var(--color-gold)] text-[var(--color-navy)] hover:bg-[var(--color-gold)]/90 font-semibold w-full mt-4"
            data-testid="button-mobile-cta"
          >
            {t('Get in touch', 'お問い合わせ')}
          </Button>
        </div>
      )}
    </nav>
  );
}
