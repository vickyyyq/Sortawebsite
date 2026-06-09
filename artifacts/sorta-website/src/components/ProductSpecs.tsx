import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ProductSpecs() {
  const { tr } = useLanguage();

  return (
    <div className="bg-white section-padding section-divider">
      <div className="max-w-[1200px] mx-auto px-5">

        <style>{`
          @media (max-width: 768px) {
            .specs-table          { display: block !important; overflow: hidden; }
            .specs-table colgroup { display: none; }
            .specs-table tbody    { display: block !important; }
            .specs-table tr.specs-data-row { display: block; padding: 18px 0; }
            .specs-table td.specs-label {
              display: block !important;
              font-size: 11px !important;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              margin-bottom: 4px;
              border-left: none !important;
              padding-left: 0 !important;
              padding-right: 0 !important;
              padding-top: 0 !important;
              padding-bottom: 0 !important;
              border-bottom: none !important;
            }
            .specs-table td.specs-value {
              display: block !important;
              font-size: 15px !important;
              padding: 0 0 18px 0 !important;
              border-bottom: 1px solid rgba(205,223,237,0.4) !important;
            }
            .specs-table tr.specs-cat-row td { padding-top: 32px !important; }
            .specs-cap-breakdown { font-size: 12px !important; margin-top: 4px !important; }
            .specs-table tr.specs-data-row:last-child td.specs-value { border-bottom: none !important; }
          }
        `}</style>

        <table className="specs-table animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both" style={{ width: '100%', maxWidth: 1040, borderCollapse: 'collapse' }}>
          <colgroup>
            <col style={{ width: '20%' }} />
            <col style={{ width: '80%' }} />
          </colgroup>
          <tbody>

            {/* ── CORE FEATURES ── */}
            <tr className="specs-cat-row">
              <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.25)', paddingTop: 0, paddingBottom: 10 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-sky)', borderLeft: '3px solid var(--color-gold)', paddingLeft: 10 }}>
                  {tr('product', 'specCatCoreFeatures')}
                </span>
              </td>
            </tr>
            <tr className="specs-data-row">
              <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                {tr('product', 'specFeatDetectLabel')}
              </td>
              <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                {tr('product', 'specFeatDetectValue')}
              </td>
            </tr>
            <tr className="specs-data-row">
              <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                {tr('product', 'specFeatSortLabel')}
              </td>
              <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                {tr('product', 'specFeatSortValue')}
              </td>
            </tr>
            <tr className="specs-data-row">
              <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                {tr('product', 'specFeatProcessLabel')}
              </td>
              <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                {tr('product', 'specFeatProcessValue')}
              </td>
            </tr>
            <tr className="specs-data-row">
              <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                {tr('product', 'specFeatMonitorLabel')}
              </td>
              <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                {tr('product', 'specFeatMonitorValue')}
              </td>
            </tr>
            <tr className="specs-data-row">
              <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                {tr('product', 'specFeatDataLabel')}
              </td>
              <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                {tr('product', 'specFeatDataValue')}
              </td>
            </tr>

            {/* ── PHYSICAL ── */}
            <tr className="specs-cat-row">
              <td colSpan={2} style={{ borderBottom: '2px solid rgba(0,165,229,0.25)', paddingTop: 48, paddingBottom: 10 }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 11, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-sky)', borderLeft: '3px solid var(--color-gold)', paddingLeft: 10 }}>
                  {tr('product', 'specCatPhysical')}
                </span>
              </td>
            </tr>
            <tr className="specs-data-row">
              <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)' }}>
                {tr('product', 'specDimLabel')}
              </td>
              <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', borderBottom: '1px solid rgba(205,223,237,0.4)', lineHeight: 1.65 }}>
                {tr('product', 'specDimValue')}
              </td>
            </tr>
            <tr className="specs-data-row">
              <td className="specs-label" style={{ padding: '24px 32px 24px 0', fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 15, color: 'var(--color-navy)', verticalAlign: 'top' }}>
                {tr('product', 'specCapLabel')}
              </td>
              <td className="specs-value" style={{ padding: '24px 0', fontFamily: 'var(--font-body)', fontWeight: 400, fontSize: 15, color: 'var(--color-text-muted)', verticalAlign: 'top', lineHeight: 1.65 }}>
                <span style={{ display: 'block', fontSize: 15, fontWeight: 500, color: 'var(--color-text-muted)' }}>
                  {tr('product', 'specCapPrimary')}
                </span>
                <span className="specs-cap-breakdown" style={{ display: 'block', fontSize: 13, fontWeight: 400, color: 'rgba(74,96,112,0.6)', marginTop: 5, letterSpacing: '0.01em' }}>
                  {tr('product', 'specCapBreakdown')}
                </span>
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  );
}
