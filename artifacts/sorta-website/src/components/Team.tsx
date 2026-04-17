import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Team() {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: t("Founder Name", "創業者名"),
      role: t("CEO & Co-founder", "CEO・共同創業者"),
      bio: t("[BIO COPY — INSERT FROM DECK]", "[略歴コピー — デッキから挿入]")
    },
    {
      name: t("Founder Name", "創業者名"),
      role: t("CTO & Co-founder", "CTO・共同創業者"),
      bio: t("[BIO COPY — INSERT FROM DECK]", "[略歴コピー — デッキから挿入]")
    }
  ];

  return (
    <section id="team" className="bg-white section-padding">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[var(--color-gold)] text-label mb-4 block">
            {t('The Team', 'チーム')}
          </span>
          <h2>
            {t('Built by people who understand the problem.', '課題を理解した人々によって作られた。')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white border border-[var(--color-mist)] p-8 rounded-xl flex flex-col items-center text-center shadow-sm animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-[var(--color-fog)] mb-6 bg-[var(--color-mist)]">
                <img src="https://placehold.co/120x120/CDDFED/121C29?text=Photo" alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="mb-1">{member.name}</h3>
              <div className="text-[var(--color-sky)] font-semibold text-sm uppercase tracking-wider mb-4">
                {member.role}
              </div>
              <div className="bg-[var(--color-fog)] p-4 rounded-lg w-full">
                <p className="text-[var(--color-text-muted)] italic text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center animate-in fade-in duration-700 delay-300">
          <p className="text-[var(--color-text-muted)] font-medium text-lg border-t border-[var(--color-mist)] pt-12 inline-block max-w-2xl">
            {t(
              "We are recruiting across engineering, operations, and partnerships. Interested? ",
              "エンジニアリング、オペレーション、パートナーシップの各分野で採用中です。ご興味のある方は"
            )}
            <a href="mailto:hello@sorta.co" className="text-[var(--color-sky)] hover:underline font-bold" data-testid="link-team-email">
              hello@sorta.co
            </a>
            {t("", " まで。")}
          </p>
        </div>
      </div>
    </section>
  );
}
