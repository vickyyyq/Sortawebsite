import { useEffect, useRef } from 'react';

export default function DarkRoadmap() {
  const pulseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.04;
      if (pulseRef.current) {
        const scale = 1 + 0.12 * Math.sin(t);
        const opacity = 0.4 + 0.25 * Math.sin(t);
        pulseRef.current.style.transform = `translate(-50%, -50%) scale(${scale})`;
        pulseRef.current.style.opacity = String(opacity);
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const nodes = [
    {
      label: 'AIoT Smart Bin Development',
      detail: 'Hardware + ML pipeline, sensor fusion, real-time classification',
      status: 'active',
      tag: 'In Progress',
      num: '01',
    },
    {
      label: 'Full-Scale Demo Unit',
      detail: 'Production-grade prototype for enterprise evaluation',
      status: 'upcoming',
      tag: 'Late 2026',
      num: '02',
    },
    {
      label: 'Pilot / PoC Deployment',
      detail: 'Deployed at partner sites — municipalities & offices',
      status: 'future',
      tag: '2027',
      num: '03',
    },
  ];

  return (
    <div style={{
      fontFamily: "'Quicksand', 'Segoe UI', sans-serif",
      background: 'linear-gradient(135deg, #0D1620 0%, #121C29 50%, #0A1520 100%)',
      minHeight: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 48px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{
        position: 'absolute', top: '-30%', left: '-10%',
        width: 600, height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,165,229,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-20%', right: '5%',
        width: 400, height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(225,162,0,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: 960, position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{
            fontSize: 11, fontWeight: 600,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#00A5E5', display: 'block', marginBottom: 10,
          }}>Where We Are</span>
          <h2 style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 800, fontSize: 38,
            color: 'white', margin: 0, lineHeight: 1.15,
          }}>Roadmap</h2>
        </div>

        <div style={{ display: 'flex', gap: 0, alignItems: 'stretch', position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 28, left: 28, right: 28,
            height: 1,
            background: 'linear-gradient(to right, rgba(0,165,229,0.5) 0%, rgba(0,165,229,0.15) 40%, rgba(205,223,237,0.1) 100%)',
          }} />

          {nodes.map((node, i) => (
            <div key={i} style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              paddingTop: 0,
              paddingLeft: i > 0 ? 12 : 0,
              paddingRight: i < nodes.length - 1 ? 12 : 0,
              position: 'relative',
            }}>
              <div style={{ position: 'relative', marginBottom: 28 }}>
                {node.status === 'active' && (
                  <div ref={pulseRef} style={{
                    position: 'absolute',
                    top: '50%', left: '50%',
                    width: 72, height: 72,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,165,229,0.35) 0%, transparent 70%)',
                    pointerEvents: 'none',
                    transformOrigin: 'center',
                  }} />
                )}
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: node.status === 'active'
                    ? 'linear-gradient(135deg, #0090C8, #00A5E5)'
                    : 'transparent',
                  border: node.status === 'active'
                    ? '2px solid rgba(0,165,229,0.8)'
                    : node.status === 'upcoming'
                    ? '2px solid rgba(205,223,237,0.25)'
                    : '2px solid rgba(205,223,237,0.1)',
                  boxShadow: node.status === 'active'
                    ? '0 0 24px rgba(0,165,229,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                    : 'none',
                  position: 'relative',
                  zIndex: 2,
                }}>
                  <span style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 800, fontSize: 16,
                    color: node.status === 'active' ? 'white' : node.status === 'upcoming' ? 'rgba(205,223,237,0.5)' : 'rgba(205,223,237,0.2)',
                  }}>{node.num}</span>
                </div>
              </div>

              <div style={{
                flex: 1,
                background: node.status === 'active'
                  ? 'linear-gradient(135deg, rgba(0,165,229,0.12), rgba(0,165,229,0.05))'
                  : 'rgba(255,255,255,0.03)',
                border: node.status === 'active'
                  ? '1px solid rgba(0,165,229,0.25)'
                  : '1px solid rgba(205,223,237,0.07)',
                borderRadius: 16,
                padding: '20px 22px',
                width: '100%',
                boxSizing: 'border-box',
                boxShadow: node.status === 'active' ? '0 4px 24px rgba(0,165,229,0.1)' : 'none',
              }}>
                <div style={{
                  display: 'inline-block',
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: node.status === 'active' ? '#00A5E5' : node.status === 'upcoming' ? '#E1A200' : 'rgba(205,223,237,0.3)',
                  background: node.status === 'active' ? 'rgba(0,165,229,0.12)' : 'transparent',
                  padding: node.status === 'active' ? '2px 8px' : '2px 0',
                  borderRadius: 20,
                  marginBottom: 10,
                }}>{node.tag}</div>

                <h4 style={{
                  margin: '0 0 8px',
                  fontSize: 14.5, fontWeight: 700,
                  color: node.status === 'active' ? 'white' : node.status === 'upcoming' ? 'rgba(255,255,255,0.55)' : 'rgba(255,255,255,0.22)',
                  lineHeight: 1.4,
                  fontFamily: "'Quicksand', sans-serif",
                }}>{node.label}</h4>

                <p style={{
                  margin: 0, fontSize: 12,
                  color: node.status === 'active' ? 'rgba(224,244,253,0.65)' : 'rgba(205,223,237,0.25)',
                  lineHeight: 1.65,
                }}>{node.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32,
          borderTop: '1px solid rgba(205,223,237,0.08)',
          paddingTop: 24,
        }}>
          <p style={{
            margin: 0, fontSize: 13,
            color: 'rgba(205,223,237,0.45)',
            fontStyle: 'italic',
            lineHeight: 1.75,
          }}>
            Actively recruiting pilot partners — municipalities, office buildings, and mixed-use facilities. Join us in shaping the future of smart recycling.
          </p>
        </div>
      </div>
    </div>
  );
}
