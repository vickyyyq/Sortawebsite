import HexBackground from '@/components/HexBackground';

export default function HexBackgroundDemo() {
  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <HexBackground
        hexColor="#2BACD1"
        opacity={0.05}
        speed={0.15}
        backgroundColor="#EEF4F8"
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
        }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.82)',
            backdropFilter: 'blur(8px)',
            borderRadius: '16px',
            padding: '3rem 4rem',
            textAlign: 'center',
            boxShadow: '0 4px 32px rgba(18, 28, 41, 0.08)',
            maxWidth: '480px',
            width: '100%',
          }}
        >
          <div
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              color: '#1A2B3C',
              letterSpacing: '-0.02em',
              marginBottom: '0.5rem',
              fontFamily: 'Raleway, sans-serif',
            }}
          >
            Sorta
          </div>
          <div
            style={{
              fontSize: '0.95rem',
              color: '#1A2B3C',
              lineHeight: 1.7,
              opacity: 0.75,
              fontFamily: 'Quicksand, sans-serif',
            }}
          >
            資源循環を、捨てる瞬間から変えていく。
          </div>
        </div>
      </div>
    </div>
  );
}
