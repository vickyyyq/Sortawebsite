import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Droplet, Grid3X3, DollarSign } from 'lucide-react';

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="bg-[var(--color-fog)] section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="max-w-3xl mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ animationDelay: '100ms' }}>
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {t('The Problem', '課題')}
          </span>
          <h2 className="mb-6">
            {t('Recycling failure happens before collection.', 'リサイクルの失敗は、回収の前に起きている。')}
          </h2>
          <p className="text-large text-[var(--color-text-muted)]">
            {t(
              "Most recycling systems are designed around the assumption that waste arrives clean and sorted. It doesn't. By the time recyclables reach processing facilities, contamination and improper sorting have already undermined their value.",
              "ほとんどのリサイクルシステムは、廃棄物がきれいで分別された状態で到着するという前提で設計されています。しかし現実は違います。リサイクル品が処理施設に届く頃には、汚染や不適切な分別によってその価値はすでに損なわれています。"
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              stat: "[STAT]%",
              label: t("Horizontal recycling rate today", "現在の水平リサイクル率")
            },
            {
              stat: "[STAT]%",
              label: t("Of recyclables contaminated at the point of disposal", "廃棄時点で汚染されるリサイクル品")
            },
            {
              stat: "$[STAT]B",
              label: t("Annual downstream processing cost from contamination", "汚染による年間下流処理コスト")
            }
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white border border-[var(--color-mist)] p-8 rounded-xl flex flex-col justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="text-[var(--color-gold)] font-heading font-extrabold text-5xl mb-2">
                {item.stat}
              </div>
              <div className="text-[var(--color-text-muted)] italic text-sm mb-4">
                {t("Data to be added", "データ追加予定")}
              </div>
              <p className="font-semibold">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              icon: <Droplet size={32} className="text-[var(--color-sky)] mb-4" />,
              title: t("Contamination at intake", "受け入れ時の汚染"),
              desc: t(
                "Liquids, labels, and mixed waste degrade material quality before collection even begins.",
                "液体、ラベル、混合廃棄物は、回収が始まる前にすでに素材の品質を低下させます。"
              )
            },
            {
              icon: <Grid3X3 size={32} className="text-[var(--color-sky)] mb-4" />,
              title: t("Improper sorting at disposal", "廃棄時の不適切な分別"),
              desc: t(
                "Human error at the bin is the most consistent failure point in the recycling chain.",
                "ゴミ箱での人為的ミスは、リサイクルチェーンにおいて最も一貫した失敗の要因です。"
              )
            },
            {
              icon: <DollarSign size={32} className="text-[var(--color-sky)] mb-4" />,
              title: t("Downstream inefficiency", "下流の非効率性"),
              desc: t(
                "Facilities absorb the cost of sorting waste that should never have arrived mixed — in labor, energy, and rejected material.",
                "本来混合して到着すべきでない廃棄物の分別コスト（人件費、エネルギー、リジェクト品）を、処理施設が負担しています。"
              )
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {item.icon}
              <h4 className="mb-3">{item.title}</h4>
              <p className="text-[var(--color-text-muted)]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
