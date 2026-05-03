const OUTER  = 148;
const BORDER = 10;
const INNER  = OUTER - BORDER * 2;

const NODES = [
  { num: '01', label: 'AIoT Smart Bin Development', tag: 'In Progress', labelAbove: true,  ringColor: '#00A5E5', innerFill: 'linear-gradient(135deg,#0090C8,#00A5E5)', numColor: 'white',    stepColor: '#00A5E5', active: true  },
  { num: '02', label: 'Full-Scale Demo Unit',        tag: 'Late 2026',   labelAbove: false, ringColor: '#CDDFED', innerFill: 'white',                                   numColor: '#E1A200', stepColor: '#E1A200', active: false },
  { num: '03', label: 'Pilot / PoC Deployment',      tag: '2027+',       labelAbove: true,  ringColor: '#D6E8F4', innerFill: 'white',                                   numColor: '#9BB0BF', stepColor: '#9BB0BF', active: false },
];

const LABEL_H = 90;
const PIN_H   = 24;
const TOTAL_H = LABEL_H + PIN_H + OUTER + PIN_H + LABEL_H;
const circleTop = LABEL_H + PIN_H;

export default function TractionPreview() {
  return (
    <div style={{ fontFamily: "'Quicksand','Segoe UI',sans-serif", background: '#F4F9FF', minHeight: TOTAL_H + 80, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '40px 48px' }}>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Quicksand:wght@600;700&display=swap" rel="stylesheet" />

      <div style={{ marginBottom: 40 }}>
        <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#00A5E5', display: 'block', marginBottom: 8 }}>Where We Are</span>
        <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 800, fontSize: 30, color: '#121C29', margin: 0, lineHeight: 1.2 }}>Building toward full-scale deployment.</h2>
      </div>

      <div style={{ position: 'relative', height: TOTAL_H, maxWidth: 780, margin: '0 auto', width: '100%' }}>
        {/* Track bar */}
        <div style={{ position: 'absolute', top: circleTop + OUTER / 2 - BORDER / 2, left: '16%', right: '16%', height: BORDER, borderRadius: BORDER / 2, background: 'linear-gradient(to right,#00A5E5 0%,#CDDFED 40%,#D6E8F4 100%)', zIndex: 0 }} />

        {NODES.map((node, i) => {
          const leftPct = i === 0 ? '16%' : i === 1 ? '50%' : '84%';
          return (
            <div key={i}>
              {node.labelAbove && (
                <div style={{ position: 'absolute', top: 0, left: leftPct, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 180, zIndex: 4 }}>
                  <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: node.stepColor, marginBottom: 4 }}>STEP {node.num}</span>
                  <p style={{ fontSize: 12.5, fontWeight: 600, color: node.active ? '#121C29' : '#4A6070', textAlign: 'center', margin: 0, lineHeight: 1.45, maxWidth: 160 }}>{node.label}</p>
                  <span style={{ marginTop: 5, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: node.stepColor, background: node.active ? 'rgba(0,165,229,0.10)' : 'transparent', padding: node.active ? '2px 8px' : 0, borderRadius: 20 }}>{node.tag}</span>
                  <div style={{ marginTop: 6, width: 1.5, height: PIN_H, background: node.stepColor, opacity: 0.45, borderRadius: 2 }} />
                </div>
              )}

              {/* Circle */}
              <div style={{ position: 'absolute', top: circleTop, left: leftPct, transform: 'translateX(-50%)', width: OUTER, height: OUTER, zIndex: 2 }}>
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: `${BORDER}px solid ${node.ringColor}`, background: 'white', boxShadow: node.active ? '0 6px 28px rgba(0,165,229,0.28),0 0 0 6px rgba(0,165,229,0.08)' : '0 2px 12px rgba(0,0,0,0.05)' }} />
                <div style={{ position: 'absolute', top: BORDER, left: BORDER, width: INNER, height: INNER, borderRadius: '50%', background: node.innerFill, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 800, fontSize: 30, color: node.numColor }}>{node.num}</span>
                </div>
              </div>

              {!node.labelAbove && (
                <div style={{ position: 'absolute', top: circleTop + OUTER + PIN_H, left: leftPct, transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', width: 180, zIndex: 4 }}>
                  <div style={{ width: 1.5, height: PIN_H, background: node.stepColor, opacity: 0.45, borderRadius: 2, marginBottom: 6, marginTop: -PIN_H }} />
                  <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color: node.stepColor, marginBottom: 4 }}>STEP {node.num}</span>
                  <p style={{ fontSize: 12.5, fontWeight: 600, color: '#4A6070', textAlign: 'center', margin: 0, lineHeight: 1.45, maxWidth: 160 }}>{node.label}</p>
                  <span style={{ marginTop: 5, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: node.stepColor }}>{node.tag}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
