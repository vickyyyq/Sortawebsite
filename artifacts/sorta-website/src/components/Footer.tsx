import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'problem', en: 'Problem', jp: '課題' },
    { id: 'solution', en: 'Solution', jp: 'ソリューション' },
    { id: 'use-cases', en: 'Use Cases', jp: 'ユースケース' },
    { id: 'partner', en: 'Partner with Us', jp: 'パートナーシップ' },
    { id: 'partner', en: 'Contact', jp: 'コンタクト' },
  ];

  return (
    <footer className="bg-[var(--color-navy)] text-white py-16 border-t border-[var(--color-mist)]/10">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <div className="text-[var(--color-gold)] font-heading font-extrabold text-3xl tracking-wide mb-4">
              SORTA
            </div>
            <a href="mailto:hello@sorta.co" className="text-[var(--color-mist)] hover:text-white transition-colors" data-testid="link-footer-email">
              hello@sorta.co
            </a>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            {navLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => scrollTo(link.id)}
                className="text-[var(--color-mist)] hover:text-white font-medium transition-colors text-sm"
                data-testid={`link-footer-${link.id}`}
              >
                {t(link.en, link.jp)}
              </button>
            ))}
          </div>
        </div>

        <div className="text-center md:text-left pt-8 border-t border-[var(--color-mist)]/20 text-[var(--color-text-muted)] text-sm">
          &copy; 2026 Sorta. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
