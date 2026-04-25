import React, { useEffect } from 'react';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Problem from '@/components/Problem';
import Solution from '@/components/Solution';
import ValueProp from '@/components/ValueProp';
import UseCases from '@/components/UseCases';
import Product from '@/components/Product';
import Traction from '@/components/Traction';
import Partner from '@/components/Partner';
import Mission from '@/components/Mission';
import Team from '@/components/Team';
import WhyNow from '@/components/WhyNow';
import FooterCTA from '@/components/FooterCTA';
import Footer from '@/components/Footer';
import { NavigationProvider, useNavigation } from '@/contexts/NavigationContext';
import { useLanguage } from '@/contexts/LanguageContext';

type HomeContentProps = {
  initialSection?: string;
};

function HomeContent({ initialSection }: HomeContentProps) {
  const { blurring } = useNavigation();
  const { language } = useLanguage();

  useEffect(() => {
    if (!initialSection) return;
    const scrollToSection = () => {
      const el = document.getElementById(initialSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const timer = setTimeout(scrollToSection, 300);
    return () => clearTimeout(timer);
  }, [initialSection]);

  return (
    <div data-lang={language} className="w-full min-h-[100dvh] bg-[var(--color-bg-page)] font-sans text-[var(--color-text-body)] overflow-x-hidden">
      <div
        className="fixed inset-0 z-[40] pointer-events-none"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: blurring ? 1 : 0,
          transition: 'opacity 280ms ease',
        }}
      />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Product />
        <ValueProp />
        <UseCases />
        <Traction />
        <Partner />
        <Mission />
        <Team />
        <WhyNow />
        <FooterCTA />
      </main>
      <Footer />
    </div>
  );
}

type HomeProps = {
  initialSection?: string;
};

export default function Home({ initialSection }: HomeProps) {
  return (
    <NavigationProvider>
      <HomeContent initialSection={initialSection} />
    </NavigationProvider>
  );
}
