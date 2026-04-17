import React from 'react';
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

export default function Home() {
  return (
    <div className="w-full min-h-[100dvh] bg-[var(--color-bg-page)] font-sans text-[var(--color-text-body)] overflow-x-hidden">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <ValueProp />
        <UseCases />
        <Product />
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
