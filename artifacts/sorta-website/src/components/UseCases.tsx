import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Train, TreePine, ShoppingBag, Building2, Ticket, Tent } from 'lucide-react';

export default function UseCases() {
  const { t } = useLanguage();

  const cases = [
    {
      icon: Train,
      title: t("Train stations & airports", "駅・空港"),
      desc: t(
        "High daily throughput with minimal staff oversight makes contamination control at the bin level essential.",
        "日々の処理量が多く、スタッフの監視が最小限であるため、ゴミ箱レベルでの汚染制御が不可欠です。"
      )
    },
    {
      icon: TreePine,
      title: t("Public infrastructure — parks, streets", "公共インフラ（公園・街路）"),
      desc: t(
        "Distributed, unmanned locations require reliable autonomous sorting without ongoing maintenance.",
        "分散した無人の場所では、継続的なメンテナンスなしで信頼できる自律的な分別が必要です。"
      )
    },
    {
      icon: ShoppingBag,
      title: t("Shopping centers & retail", "ショッピングセンター・小売"),
      desc: t(
        "Consumer behavior varies widely; automated preprocessing removes the burden of correct disposal from shoppers.",
        "消費者の行動は大きく異なります。自動化された前処理により、買い物客の正しい廃棄の負担が取り除かれます。"
      )
    },
    {
      icon: Building2,
      title: t("Office buildings", "オフィスビル"),
      desc: t(
        "Consistent daily waste generation benefits from embedded preprocessing at point of generation.",
        "日々一貫して発生する廃棄物は、発生時点での組み込み型前処理から恩恵を受けます。"
      )
    },
    {
      icon: Ticket,
      title: t("Entertainment facilities", "エンターテインメント施設"),
      desc: t(
        "High-volume, mixed-material disposal in limited windows requires intelligent, fast triage.",
        "限られた時間枠での大量の混合素材の廃棄には、知的で高速なトリアージが必要です。"
      )
    },
    {
      icon: Tent,
      title: t("Events & venues", "イベント・会場"),
      desc: t(
        "Temporary, high-volume events generate significant recyclable waste with minimal infrastructure and oversight.",
        "一時的で大規模なイベントは、最小限のインフラと監視で大量のリサイクル可能な廃棄物を生み出します。"
      )
    }
  ];

  return (
    <section id="use-cases" className="bg-[var(--color-navy)] text-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both">
          <span className="text-[var(--color-sky)] text-label mb-4 block">
            {t('Where Sorta Works', 'Sortaが活躍する場所')}
          </span>
          <h2 className="text-white">
            {t('Built for high-traffic, high-volume environments.', '高トラフィック・高ボリューム環境のために。')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-[#1A2635] border border-[var(--color-mist)]/20 p-8 rounded-xl hover:border-[var(--color-sky)]/50 transition-colors animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <useCase.icon size={36} className="text-[var(--color-sky)] mb-6 stroke-1" />
              <h4 className="text-white mb-3">{useCase.title}</h4>
              <p className="text-[var(--color-mist)] opacity-80 text-sm leading-relaxed">
                {useCase.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
