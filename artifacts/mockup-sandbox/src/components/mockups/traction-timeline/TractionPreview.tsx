export default function TractionPreview() {
  const nodes = [
    { num: '01', label: 'AIoT Smart Bin Development', tag: 'In Progress', labelAbove: true, fill: 'linear-gradient(135deg,#0090C8,#00A5E5)', border: 'none', numColor: '#00A5E5', glow: '0 6px 32px rgba(0,165,229,0.35),0 0 0 12px rgba(0,165,229,0.10)', active: true },
    { num: '02', label: 'Full-Scale Demo Unit', tag: 'Late 2026', labelAbove: false, fill: 'white', border: '3px solid #CDDFED', numColor: '#E1A200', glow: '0 2px 16px rgba(0,0,0,0.06)', active: false },
    { num: '03', label: 'Pilot / PoC Deployment', tag: '2027+', labelAbove: true, fill: 'white', border: '3px solid #E0F4FD', numColor: '#9BB0BF', glow: 'none', active: false },
  ];

  const CIRCLE = 110;

  return (
    <div style={{ fontFamily: "'Quicksand','Segoe UI',sans-serif", background: '#F4F9FF', minHeight: 420, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 48px' }}>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Quicksand:wght@600;700&display=swap" rel="stylesheet" />
      <div style={{ width: '100%', maxWidth: 880 }}>
        <div style={{ marginBottom: 40 }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#00A5E5', display: 'block', marginBottom: 8 }}>Where We Are</span>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 800, fontSize: 32, color: '#121C29', margin: 0 }}>Building toward full-scale deployment.</h2>
        </div>

        <div style={{ position: 'relative', height: 320 }}>
          {/* Track */}
          <div style={{ position: 'absolute', top: '50%', left: '8%', right: '8%', height: 3, background: 'linear-gradient(to right,#00A5E5 0%,#00A5E5 16%,#CDDFED 35%,#CDDFED 65%,#E0F4FD 84%,#E0F4FD 100%)', transform: 'translateY(-50%)', zIndex: 0 }} />

          {nodes.map((node, i) => {
            const leftPct = i === 0 ? '16.5%' : i === 1 ? '50%' : '83.5%';
            return (
              <div key={i}>
                {/* Connector ring */}
                {i < nodes.length - 1 && (
                  <div style={{ position: 'absolute', top: '50%', left: i === 0 ? '33%' : '67%', transform: 'translate(-50%,-50%)', width: CIRCLE, height: CIRCLE, borderRadius: '50%', background: 'white', border: '3px solid #CDDFED', zIndex: 1, boxShadow: '0 1px 8px rgba(0,0,0,0.05)' }} />
                )}
                {/* Node wrapper */}
                <div style={{ position: 'absolute', top: '50%', left: leftPct, transform: 'translate(-50%,-50%)', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Label above */}
                  {node.labelAbove && (
                    <div style={{ position: 'absolute', bottom: `calc(100% + 16px)`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 160 }}>
                      <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: node.numColor }}> STEP {node.num}</span>
                      <p style={{ fontSize: 12.5, fontWeight: 600, color: node.active ? '#121C29' : '#4A6070', textAlign: 'center', margin: '2px 0', lineHeight: 1.4, maxWidth: 160 }}>{node.label}</p>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: node.numColor, background: node.active ? 'rgba(0,165,229,0.10)' : 'transparent', padding: node.active ? '2px 8px' : 0, borderRadius: 20 }}>{node.tag}</span>
                      <div style={{ width: 1.5, height: 16, background: node.numColor, opacity: 0.5, borderRadius: 2 }} />
                    </div>
                  )}
                  {/* Circle */}
                  <div style={{ width: CIRCLE, height: CIRCLE, borderRadius: '50%', background: node.fill, border: node.border, boxShadow: node.glow, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 800, fontSize: 28, color: node.active ? 'white' : node.numColor }}>{node.num}</span>
                  </div>
                  {/* Label below */}
                  {!node.labelAbove && (
                    <div style={{ position: 'absolute', top: `calc(100% + 16px)`, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 160 }}>
                      <div style={{ width: 1.5, height: 16, background: node.numColor, opacity: 0.5, borderRadius: 2, marginBottom: 2 }} />
                      <span style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', color: node.numColor }}>STEP {node.num}</span>
                      <p style={{ fontSize: 12.5, fontWeight: 600, color: '#4A6070', textAlign: 'center', margin: '2px 0', lineHeight: 1.4, maxWidth: 160 }}>{node.label}</p>
                      <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: node.numColor, marginTop: 2 }}>{node.tag}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
