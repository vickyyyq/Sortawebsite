import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Shuffle, Settings, Activity, ChevronRight } from 'lucide-react';

export default function Product() {
  const { t } = useLanguage();

  const capabilities = [
    { icon: Eye, label: t("Detects", "検知") },
    { icon: Shuffle, label: t("Sorts", "分別") },
    { icon: Settings, label: t("Processes", "処理") },
    { icon: Activity, label: t("Monitors", "監視") },
  ];

  const outcomes = [
    t("Preventing contamination of recyclables", "リサイクル品の汚染を防止"),
    t("Reducing recycling costs", "リサイクルコストの削減"),
    t("Increasing collection efficiency", "回収効率の向上")
  ];

  return (
    <section id="product" className="bg-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/2 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
            <span className="text-[var(--color-gold)] text-label mb-4 block">
              {t('The Product', '製品')}
            </span>
            <h2 className="mb-6">
              {t('Making horizontal recycling easier… for everyone.', '水平リサイクルをもっと簡単に。すべての人に。')}
            </h2>
            <p className="text-large text-[var(--color-text-muted)] mb-12">
              {t(
                "Sorta is a next-generation recycling system that brings sorting and preprocessing to the point of disposal — reducing contamination and enabling more efficient recycling.",
                "Sortaは、分別と前処理を廃棄の時点にもたらす次世代のリサイクルシステムです。汚染を減らし、より効率的なリサイクルを可能にします。"
              )}
            </p>

            <div className="grid grid-cols-4 gap-4 mb-12">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-[var(--color-fog)] border border-[var(--color-mist)] flex items-center justify-center mb-3">
                    <cap.icon size={24} className="text-[var(--color-navy)]" />
                  </div>
                  <span className="text-sm font-semibold">{cap.label}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              {outcomes.map((outcome, i) => (
                <div key={i} className="flex items-center gap-3">
                  <ChevronRight size={20} className="text-[var(--color-gold)] shrink-0" />
                  <span className="text-lg font-medium">{outcome}</span>
                </div>
              ))}
            </div>

            <p className="text-[var(--color-text-muted)] italic">
              {t("…all while removing human error from the equation.", "…そして、これらすべてを人為的ミスを排除しながら実現します。")}
            </p>
          </div>

          <div className="w-full lg:w-1/2 animate-in fade-in duration-1000 delay-300 fill-mode-both">
            <div className="aspect-video w-full bg-[var(--color-navy)] rounded-xl overflow-hidden flex items-center justify-center relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a1018] to-[var(--color-navy)]" />
              <div className="relative z-10 text-center px-6">
                <div className="w-16 h-16 rounded-full bg-white/5 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="text-[var(--color-sky)]" size={32} />
                </div>
                <h4 className="text-[var(--color-sky)] font-medium tracking-wide">
                  {t('Product Animation — Coming Soon', '製品アニメーション — 近日公開')}
                </h4>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
