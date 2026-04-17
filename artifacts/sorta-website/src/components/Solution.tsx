import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, CheckCircle2, Shuffle, Layers } from 'lucide-react';
import sortaLogoPath from '@assets/sorta_logo_1776429326461.png';

export default function Solution() {
  const { t } = useLanguage();

  return (
    <section id="solution" className="bg-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {t('Our Approach', '私たちのアプローチ')}
          </span>
          <h2 className="mb-6">
            {t('Move critical recycling processes upstream.', '重要なリサイクルプロセスを上流へ。')}
          </h2>
          <p className="text-large text-[var(--color-text-muted)]">
            {t(
              "Sorta relocates sorting, separation, and preprocessing to the point of disposal — where intervention has the highest impact. The result is cleaner input for downstream facilities and a meaningfully more efficient recycling chain.",
              "Sortaは、分別、分離、前処理を廃棄の時点（最も介入効果が高い場所）に移動させます。その結果、下流の施設への入力がよりクリーンになり、リサイクルチェーン全体が意味のある形で効率化されます。"
            )}
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="relative py-10 mb-16 animate-in fade-in duration-1000 delay-300 fill-mode-both">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            
            {/* Left Node */}
            <div className="bg-[var(--color-navy)] rounded-xl p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center shadow-lg relative z-10">
              <Shuffle size={48} className="text-white/50 mb-4" />
              <div className="text-white font-semibold text-lg">
                {t('Mixed waste stream', '混合廃棄物ストリーム')}
              </div>
            </div>

            {/* Arrow 1 */}
            <ArrowRight size={32} className="text-[var(--color-gold)] hidden md:block" />
            <ArrowRight size={32} className="text-[var(--color-gold)] md:hidden rotate-90" />

            {/* Middle Node (Sorta) */}
            <div className="bg-[var(--color-navy)] rounded-xl p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center border-2 border-[var(--color-gold)] shadow-[0_0_30px_rgba(225,162,0,0.15)] relative z-10 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-navy)] to-[#1a2838] z-0" />
              <img src={sortaLogoPath} alt="Sorta" className="h-16 object-contain z-10 mb-4" />
              <div className="text-[var(--color-gold)] font-bold tracking-widest z-10">SORTA</div>
            </div>

            {/* Arrow 2 */}
            <ArrowRight size={32} className="text-[var(--color-gold)] hidden md:block" />
            <ArrowRight size={32} className="text-[var(--color-gold)] md:hidden rotate-90" />

            {/* Right Node */}
            <div className="bg-[var(--color-fog)] border border-[var(--color-mist)] rounded-xl p-8 w-full md:w-1/3 aspect-[4/3] flex flex-col items-center justify-center text-center shadow-sm relative z-10">
              <Layers size={48} className="text-[var(--color-sky)] mb-4" />
              <div className="text-[var(--color-navy)] font-semibold text-lg">
                {t('Clean, separated material streams', 'クリーンな分別済み素材ストリーム')}
              </div>
            </div>

          </div>
          
          {/* Background connector line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-[var(--color-mist)] -translate-y-1/2 z-0" />
        </div>

        {/* Value Points */}
        <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both delay-500">
          {[
            t("Sorting and separation at the disposal point", "廃棄時点での分別と分離"),
            t("Preprocessing designed for real-world environments", "実環境向けに設計された前処理"),
            t("Compatible with existing downstream infrastructure", "既存の下流インフラとの互換性")
          ].map((text, i) => (
            <div key={i} className="flex items-center gap-3">
              <CheckCircle2 className="text-[var(--color-gold)] shrink-0" size={24} />
              <span className="font-semibold">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
