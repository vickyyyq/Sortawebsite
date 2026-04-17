import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

export default function FooterCTA() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[var(--color-gold)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5 text-center">
        <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-[var(--color-navy)] mb-6 font-extrabold">
            {t("Ready to rethink recycling infrastructure?", "リサイクルインフラを再考する準備ができていますか？")}
          </h2>
          <p className="text-[var(--color-navy)] opacity-90 text-lg mb-10">
            {t(
              "Whether you're a potential partner or an investor, we want to hear from you.",
              "パートナー候補の方も、投資家の方も、ぜひご連絡ください。"
            )}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo('partner')}
              className="bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy)]/90 font-bold px-8 py-6 text-lg w-full sm:w-auto"
              data-testid="button-footer-cta-pilot"
            >
              {t("Apply for Pilot", "パイロットを申請する")}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollTo('partner')}
              className="bg-transparent text-[var(--color-navy)] border-2 border-[var(--color-navy)] hover:bg-[var(--color-navy)] hover:text-white font-bold px-8 py-6 text-lg w-full sm:w-auto"
              data-testid="button-footer-cta-contact"
            >
              {t("Get in Touch", "お問い合わせ")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
