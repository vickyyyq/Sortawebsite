export default function MilestoneTrack() {
  const nodes = [
    {
      label: 'AIoT Smart Bin Development',
      sub: 'In Progress',
      status: 'active',
      num: '01',
    },
    {
      label: 'Full-Scale Demo Unit',
      sub: 'Late 2026',
      status: 'upcoming',
      num: '02',
    },
    {
      label: 'Pilot / PoC Deployment',
      sub: '2027',
      status: 'future',
      num: '03',
    },
  ];

  return (
    <div style={{
      fontFamily: "'Quicksand', 'Segoe UI', sans-serif",
      background: 'white',
      minHeight: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 48px',
    }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <div style={{ width: '100%', maxWidth: 960 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
          <div>
            <span style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#E1A200',
              display: 'block',
              marginBottom: 10,
            }}>Where We Are</span>
            <h2 style={{
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 800,
              fontSize: 38,
              color: '#121C29',
              margin: 0,
              lineHeight: 1.15,
            }}>Roadmap</h2>
          </div>
          <p style={{
            maxWidth: 300,
            margin: 0,
            fontSize: 13.5,
            lineHeight: 1.7,
            color: '#4A6070',
            fontStyle: 'italic',
            borderLeft: '3px solid #E1A200',
            paddingLeft: 16,
          }}>
            Actively recruiting pilot partners — municipalities, office buildings, and mixed-use facilities.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: 44,
            left: '16%',
            right: '16%',
            height: 6,
            background: '#F0F4F8',
            borderRadius: 6,
            zIndex: 0,
          }} />
          <div style={{
            position: 'absolute',
            top: 44,
            left: '16%',
            width: '10%',
            height: 6,
            background: 'linear-gradient(to right, #E1A200, #00A5E5)',
            borderRadius: 6,
            zIndex: 1,
          }} />

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            position: 'relative',
            zIndex: 2,
          }}>
            {nodes.map((node, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '33%',
                gap: 20,
              }}>
                <div style={{
                  width: 88,
                  height: 88,
                  borderRadius: '50%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: node.status === 'active'
                    ? 'linear-gradient(135deg, #E1A200, #00A5E5)'
                    : node.status === 'upcoming' ? 'white' : 'white',
                  border: node.status === 'active' ? 'none' : '3px solid #CDDFED',
                  boxShadow: node.status === 'active'
                    ? '0 8px 32px rgba(0,165,229,0.25), 0 0 0 8px rgba(0,165,229,0.08)'
                    : node.status === 'upcoming' ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
                }}>
                  <span style={{
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 800,
                    fontSize: node.status === 'active' ? 26 : 22,
                    color: node.status === 'active' ? 'white' : node.status === 'upcoming' ? '#4A6070' : '#CDDFED',
                    lineHeight: 1,
                  }}>{node.num}</span>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <h4 style={{
                    margin: '0 0 6px',
                    fontSize: 15,
                    fontWeight: 700,
                    color: node.status === 'active' ? '#121C29' : node.status === 'upcoming' ? '#4A6070' : '#CDDFED',
                    lineHeight: 1.35,
                    maxWidth: 180,
                    fontFamily: "'Quicksand', sans-serif",
                  }}>{node.label}</h4>
                  <span style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: node.status === 'active' ? '#E1A200' : node.status === 'upcoming' ? '#00A5E5' : '#CDDFED',
                  }}>{node.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
