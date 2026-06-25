import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Team from '@/components/Team';
import { JpH2 } from '@/components/JpH2';
import { useLanguage } from '@/contexts/LanguageContext';

type NoticeRow = {
  date: string;
  title: React.ReactNode;
  href?: string;
};

export default function Company() {
  const { tr, language } = useLanguage();

  useEffect(() => {
    const wantsTeam =
      sessionStorage.getItem('sorta:scrollToTeam') === '1' ||
      window.location.hash === '#team';
    if (wantsTeam) {
      sessionStorage.removeItem('sorta:scrollToTeam');
      requestAnimationFrame(() => {
        document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
      });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  const isEn = language === 'en';

  const infoRows: ({ label: string; value: React.ReactNode } | null)[] = [
    { label: tr('company', 'labelTradeName'), value: tr('company', 'valueTradeName') },
    isEn ? null : { label: tr('company', 'labelEnglishName'), value: tr('company', 'valueEnglishName') },
    { label: tr('company', 'labelAddress'), value: tr('company', 'valueAddress') },
    isEn ? null : { label: tr('company', 'labelRepresentative'), value: tr('company', 'valueRepresentative') },
    isEn ? null : { label: tr('company', 'labelCapital'), value: tr('company', 'valueCapital') },
    {
      label: tr('company', 'labelBusiness'),
      value: isEn ? (
        tr('company', 'businessSummary')
      ) : (
        <ol className="list-decimal pl-5 space-y-1.5">
          <li>{tr('company', 'business1')}</li>
          <li>{tr('company', 'business2')}</li>
          <li>{tr('company', 'business3')}</li>
          <li>{tr('company', 'business4')}</li>
        </ol>
      ),
    },
    {
      label: tr('company', 'labelContact'),
      value: (
        <a
          href="mailto:hello@sorta.co.jp"
          className="text-[var(--color-sky)] hover:underline font-medium"
          data-testid="link-company-email"
        >
          hello@sorta.co.jp
        </a>
      ),
    },
    { label: tr('company', 'labelPublicNotice'), value: tr('company', 'valuePublicNotice') },
  ];

  const notices: NoticeRow[] = [];

  return (
    <div
      data-lang={language}
      className="w-full min-h-[100dvh] bg-[var(--color-bg-page)] font-sans text-[var(--color-text-body)] overflow-x-hidden"
    >
      <Helmet>
        <title>{tr('company', 'metaTitle')}</title>
        <link rel="canonical" href="https://sorta.co.jp/company" />
      </Helmet>

      <Nav />

      <main className="pt-32 md:pt-40 pb-24">
        <div className="max-w-[860px] mx-auto px-5">
          <div className="mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <span className="text-label mb-3 block">{tr('company', 'overline')}</span>
            <JpH2>{tr('company', 'heading')}</JpH2>
          </div>

          {/* Company information */}
          <div className="border border-[var(--color-mist)] rounded-sm overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            {infoRows.filter((row): row is { label: string; value: React.ReactNode } => row !== null).map((row, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row border-b border-[var(--color-mist)] last:border-b-0"
              >
                <div className="sm:w-52 flex-shrink-0 bg-[var(--color-sky-wash)] px-5 py-4 text-sm font-semibold text-[var(--color-navy)]">
                  {row.label}
                </div>
                <div className="px-5 py-4 text-sm text-[var(--color-text-body)] leading-relaxed">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <Team />

        <div className="max-w-[860px] mx-auto px-5">
          {/* Electronic public notices */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            <h3 className="text-base font-semibold text-[var(--color-navy)] mb-4">
              {tr('company', 'noticeHeading')}
            </h3>
            <div className="border border-[var(--color-mist)] rounded-sm overflow-hidden">
              {/* Header */}
              <div className="flex bg-[var(--color-sky-wash)] border-b border-[var(--color-mist)] text-xs font-semibold uppercase tracking-wider text-[var(--color-navy)]">
                <div className="w-36 flex-shrink-0 px-5 py-3">{tr('company', 'noticeColDate')}</div>
                <div className="px-5 py-3">{tr('company', 'noticeColTitle')}</div>
              </div>
              {/* Body — fixed height to show exactly 3 rows, scrollable */}
              <div className="h-[156px] overflow-y-auto">
                {notices.length === 0 ? (
                  <div className="h-[52px] flex items-center px-5 text-sm text-[var(--color-text-muted)]">
                    {tr('company', 'noticeEmpty')}
                  </div>
                ) : (
                  notices.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center border-b border-[var(--color-mist)] last:border-b-0 h-[52px]"
                    >
                      <div className="w-36 flex-shrink-0 px-5 text-sm text-[var(--color-text-muted)]">
                        {row.date}
                      </div>
                      <div className="px-5 text-sm">
                        {row.href ? (
                          <a
                            href={row.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-sky)] hover:underline font-medium"
                          >
                            {row.title}
                          </a>
                        ) : (
                          row.title
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
