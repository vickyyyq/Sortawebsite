export default function VerticalSteps() {
  const nodes = [
    {
      label: 'AIoT Smart Bin Development',
      sub: 'In Progress',
      status: 'active',
      year: '2025',
    },
    {
      label: 'Full-Scale Demo Unit',
      sub: 'Late 2026',
      status: 'upcoming',
      year: '2026',
    },
    {
      label: 'Pilot / PoC Deployment',
      sub: '2027',
      status: 'future',
      year: '2027',
    },
  ];

  return (
    <div style={{
      fontFamily: "'Quicksand', 'Segoe UI', sans-serif",
      background: '#F4F9FF',
      minHeight: '580px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '48px 40px',
    }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Quicksand:wght@400;500;600&display=swap" rel="stylesheet" />

      <div style={{ width: '100%', maxWidth: 900 }}>
        <div style={{ marginBottom: 48 }}>
          <span style={{
            fontFamily: "'Quicksand', sans-serif",
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#00A5E5',
            display: 'block',
            marginBottom: 10,
          }}>Where We Are</span>
          <h2 style={{
            fontFamily: "'Raleway', sans-serif",
            fontWeight: 800,
            fontSize: 36,
            color: '#121C29',
            margin: 0,
            lineHeight: 1.2,
          }}>Roadmap</h2>
        </div>

        <div style={{ display: 'flex', gap: 40, alignItems: 'flex-start' }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <div style={{
              position: 'absolute',
              left: 19,
              top: 20,
              bottom: 20,
              width: 2,
              background: 'linear-gradient(to bottom, #00A5E5 30%, #CDDFED)',
              borderRadius: 2,
            }} />

            {nodes.map((node, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 28,
                marginBottom: i < nodes.length - 1 ? 40 : 0,
                position: 'relative',
              }}>
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: node.status === 'active' ? '#00A5E5' : node.status === 'upcoming' ? 'white' : 'white',
                  border: node.status === 'active' ? '2px solid #00A5E5' : '2px solid #CDDFED',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: node.status === 'active' ? '0 0 0 8px rgba(0,165,229,0.12)' : 'none',
                }}>
                  {node.status === 'active' ? (
                    <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'white' }} />
                  ) : (
                    <span style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: node.status === 'upcoming' ? '#4A6070' : '#CDDFED',
                      fontFamily: "'Raleway', sans-serif",
                    }}>{i + 1}</span>
                  )}
                </div>

                <div style={{
                  flex: 1,
                  paddingTop: 8,
                  paddingBottom: 24,
                  borderBottom: i < nodes.length - 1 ? '1px solid #E0F4FD' : 'none',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                    <h4 style={{
                      margin: 0,
                      fontSize: 17,
                      fontWeight: node.status === 'active' ? 700 : 600,
                      color: node.status === 'active' ? '#121C29' : node.status === 'upcoming' ? '#4A6070' : '#9BB0BF',
                      fontFamily: "'Quicksand', sans-serif",
                    }}>{node.label}</h4>
                    {node.status === 'active' && (
                      <span style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#00A5E5',
                        background: '#E0F4FD',
                        padding: '2px 8px',
                        borderRadius: 20,
                      }}>Live</span>
                    )}
                  </div>
                  <p style={{
                    margin: 0,
                    fontSize: 13,
                    color: node.status === 'active' ? '#00A5E5' : '#9BB0BF',
                    fontWeight: 600,
                  }}>{node.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            width: 260,
            flexShrink: 0,
            borderLeft: '2px solid #00A5E5',
            paddingLeft: 24,
            paddingTop: 4,
          }}>
            <p style={{
              margin: 0,
              fontSize: 13.5,
              lineHeight: 1.75,
              color: '#4A6070',
              fontStyle: 'italic',
              fontFamily: "'Quicksand', sans-serif",
            }}>
              Actively recruiting pilot partners — municipalities, office buildings, and mixed-use facilities. Join us in shaping the future of smart recycling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
