import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ScrollText, TrendingUp, Network } from 'lucide-react';

export default function WhyNow() {
  const { t } = useLanguage();

  const points = [
    {
      icon: ScrollText,
      title: t("Rising sustainability pressure", "持続可能性圧力の高まり"),
      desc: t(
        "Extended producer responsibility legislation is expanding globally, increasing liability for material end-of-life outcomes. [Insert data from deck]",
        "拡大生産者責任に関する法整備が世界中で進み、素材の寿命終了時の結果に対する責任が増大しています。[データ挿入]"
      )
    },
    {
      icon: TrendingUp,
      title: t("Increasing material costs", "原材料コストの上昇"),
      desc: t(
        "Virgin material prices and landfill costs are rising, making high-quality recycled feedstock economically attractive for the first time at scale. [Insert data]",
        "バージン素材の価格と埋め立てコストが上昇しており、高品質なリサイクル原料が初めて大規模に経済的魅力を持ち始めています。[データ挿入]"
      )
    },
    {
      icon: Network,
      title: t("Limits of current infrastructure", "現行インフラの限界"),
      desc: t(
        "Existing recycling infrastructure was not designed for the volume or variety of materials in circulation today. Retrofitting is insufficient.",
        "既存のリサイクルインフラは、現在流通している素材の量や多様性を想定して設計されていません。既存施設の改修では不十分です。"
      )
    }
  ];

  return (
    <section id="why-now" className="bg-[var(--color-fog)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {t('Why Now', 'なぜ今か')}
          </span>
          <h2>
            {t('The infrastructure moment has arrived.', 'インフラの転換点が来た。')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-[var(--color-mist)] shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-[var(--color-mist)]/30 rounded-lg flex items-center justify-center mb-6">
                <point.icon size={24} className="text-[var(--color-sky)]" />
              </div>
              <h4 className="mb-4">{point.title}</h4>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto animate-in fade-in duration-700 delay-400">
          <h3 className="text-[var(--color-navy)] font-extrabold px-6 py-8 border-y-2 border-[var(--color-mist)]">
            {t(
              "The shift to circular systems requires new infrastructure at the point of intake.",
              "循環型システムへの移行は、廃棄の起点における新しいインフラを必要とする。"
            )}
          </h3>
        </div>
      </div>
    </section>
  );
}
