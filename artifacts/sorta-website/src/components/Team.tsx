import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Team() {
  const { tr, language } = useLanguage();

  const teamMembers = [
    {
      name: tr('team', 'founderName'),
      role: tr('team', 'founderRole'),
      bio: tr('team', 'founderBio'),
    },
    {
      name: tr('team', 'founderName'),
      role: tr('team', 'founderRole'),
      bio: tr('team', 'founderBio'),
    },
  ];

  return (
    <section id="team" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[var(--color-sky)] text-label mb-3 block">
            {tr('team', 'overline')}
          </span>
          <h2>
            {tr('team', 'heading')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-10 flex gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="w-[80px] h-[80px] flex-shrink-0 rounded-sm overflow-hidden border border-[var(--color-mist)]">
                <img
                  src="https://placehold.co/80x80/EDF7FD/00A5E5?text=+"
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="mb-1">{member.name}</h4>
                <div className="text-[var(--color-sky)] font-semibold text-xs uppercase tracking-wider mb-3">
                  {member.role}
                </div>
                <p className="text-[var(--color-text-muted)] text-sm leading-relaxed italic">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-in fade-in duration-700 delay-300">
          <p className="text-[var(--color-text-muted)] text-sm">
            {tr('team', 'hiring')}
            {' '}
            <a href="mailto:hello@sorta.co" className="text-[var(--color-sky)] hover:underline font-bold" data-testid="link-team-email">
              hello@sorta.co
            </a>
            {language === 'jp' && ' まで。'}
          </p>
        </div>
      </div>
    </section>
  );
}
