import { JpH2 } from '@/components/JpH2';
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Team() {
  const { tr, language } = useLanguage();

  type Member = {
    photo: string | null;
    imgStyle?: React.CSSProperties;
    nameNode: React.ReactNode;
    roleKey: 'member1Role' | 'member2Role' | 'member3Role';
    bioKey: 'member1Bio' | 'member2Bio' | 'member3Bio';
  };

  const teamMembers: Member[] = [
    {
      photo: '/amber_photo.jpg',
      imgStyle: { transform: 'scale(1.7)', transformOrigin: '50% 18%' },
      nameNode:
        language === 'jp' ? (
          <><ruby>倉増<rt>クラマス</rt></ruby> アンバー</>
        ) : (
          'Amber Kuramasu'
        ),
      roleKey: 'member1Role',
      bioKey: 'member1Bio',
    },
    {
      photo: '/justin_photo.jpg',
      nameNode:
        language === 'jp' ? (
          <><ruby>林<rt>ハヤシ</rt></ruby> ジャスティン</>
        ) : (
          'Justin Lin'
        ),
      roleKey: 'member2Role',
      bioKey: 'member2Bio',
    },
    {
      photo: '/vicky_photo.jpg',
      nameNode:
        language === 'jp' ? (
          <><ruby>楊<rt>ヨー</rt></ruby> <ruby>韻琦<rt>ユンチー</rt></ruby></>
        ) : (
          'Vicky Yang'
        ),
      roleKey: 'member3Role',
      bioKey: 'member3Bio',
    },
  ];

  return (
    <section id="team" className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="mb-14 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="text-[var(--color-sky)] text-label mb-3 block">
            {tr('team', 'overline')}
          </span>
          <JpH2>
            {tr('team', 'heading')}
          </JpH2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--color-mist)] border border-[var(--color-mist)] rounded-sm overflow-hidden mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-10 flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <div className="w-[72px] h-[72px] flex-shrink-0 rounded-full overflow-hidden border border-[var(--color-mist)] mb-6">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={typeof member.nameNode === 'string' ? member.nameNode : undefined}
                    className="w-full h-full object-cover object-top"
                    style={member.imgStyle}
                  />
                ) : (
                  <div className="w-full h-full bg-[var(--color-sky-wash)] flex items-center justify-center text-[var(--color-sky)] text-sm font-semibold">
                    +
                  </div>
                )}
              </div>
              <h4 className="mb-1 text-base">{member.nameNode}</h4>
              <div className="text-[var(--color-sky)] font-semibold text-xs uppercase tracking-wider mb-4">
                {tr('team', member.roleKey)}
              </div>
              <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
                {tr('team', member.bioKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="animate-in fade-in duration-700 delay-300">
          <p className="text-[var(--color-text-muted)] text-sm">
            {tr('team', 'hiring')}
            {' '}
            <a href="mailto:hello@sorta.co.jp" className="text-[var(--color-sky)] hover:underline font-bold" data-testid="link-team-email">
              hello@sorta.co.jp
            </a>
            {language === 'jp' && ' まで。'}
          </p>
        </div>
      </div>
    </section>
  );
}
