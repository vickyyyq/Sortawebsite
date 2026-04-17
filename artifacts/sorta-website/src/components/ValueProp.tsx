import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Diamond, ArrowDownCircle, Leaf, Recycle } from 'lucide-react';

export default function ValueProp() {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Diamond,
      title: t("High-quality recyclable output", "高品質なリサイクル素材"),
      desc: t(
        "Clean, separated material commands higher market value and reduces rejection rates at processing facilities.",
        "クリーンで分別された素材は、市場価値が高く、処理施設での拒否率を低下させます。"
      )
    },
    {
      icon: ArrowDownCircle,
      title: t("Reduced downstream costs", "下流コストの削減"),
      desc: t(
        "Less contamination means less labor, fewer rejected loads, and lower total processing cost per tonne.",
        "汚染が少ないということは、労働力の削減、拒否される荷の減少、そしてトン当たりの総処理コストの低下を意味します。"
      )
    },
    {
      icon: Leaf,
      title: t("Cleaner environments", "クリーンな環境"),
      desc: t(
        "Preprocessing at intake reduces odor, liquid spillage, and hygiene issues at high-traffic collection points.",
        "受け入れ時の前処理により、トラフィックの多い回収場所での悪臭、液体の流出、衛生問題が軽減されます。"
      )
    },
    {
      icon: Recycle,
      title: t("Improved sustainability outcomes", "持続可能性の向上"),
      desc: t(
        "Higher-quality inputs enable true horizontal recycling — closing the material loop rather than downcycling.",
        "高品質な入力により、ダウンサイクルではなく素材のループを閉じる真の水平リサイクルが可能になります。"
      )
    }
  ];

  return (
    <section id="value" className="bg-[var(--color-fog)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {t('Why It Matters', 'なぜ重要か')}
          </span>
          <h2>
            {t('Better for the system. Better for the bottom line.', 'システムにも、収益にも。')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="bg-white border border-[var(--color-mist)] p-8 md:p-10 rounded-xl relative overflow-hidden group animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              {/* Decorative background icon */}
              <div className="absolute -right-8 -top-8 text-[var(--color-gold)] opacity-[0.03] transition-transform duration-500 group-hover:scale-110">
                <pillar.icon size={200} />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center mb-6">
                  <pillar.icon className="text-[var(--color-gold)]" size={28} />
                </div>
                <h4 className="mb-4">{pillar.title}</h4>
                <p className="text-[var(--color-text-muted)]">{pillar.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
