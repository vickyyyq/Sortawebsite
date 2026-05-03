const CIRCLE    = 68;
const LABEL_H   = 110;
const PIN_H     = 20;
const CONTAINER = LABEL_H + PIN_H + CIRCLE + PIN_H + LABEL_H;
const circleY   = LABEL_H + PIN_H;
const lineY     = circleY + CIRCLE / 2;

const NODES = [
  { num: '01', label: 'AIoT Smart Bin\nDevelopment', tag: 'In Progress', labelAbove: true,  color: '#00A5E5', bg: '#00A5E5', textColor: 'white',    active: true  },
  { num: '02', label: 'Full-Scale Demo Unit',        tag: 'Late 2026',   labelAbove: false, color: '#E1A200', bg: 'white',    textColor: '#E1A200', active: false },
  { num: '03', label: 'Pilot / PoC Deployment',      tag: '2027+',       labelAbove: true,  color: '#9BB0BF', bg: 'white',    textColor: '#9BB0BF', active: false },
];

export default function TractionPreview() {
  return (
    <div style={{ fontFamily:"'Quicksand','Segoe UI',sans-serif", background:'#F4F9FF', minHeight: CONTAINER + 120, display:'flex', flexDirection:'column', justifyContent:'center', padding:'40px 48px' }}>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@800&family=Quicksand:wght@600;700&display=swap" rel="stylesheet" />

      <div style={{ marginBottom: 40 }}>
        <span style={{ fontSize:11, fontWeight:700, letterSpacing:'0.18em', textTransform:'uppercase', color:'#00A5E5', display:'block', marginBottom:8 }}>Where We Are</span>
        <h2 style={{ fontFamily:"'Raleway',sans-serif", fontWeight:800, fontSize:30, color:'#121C29', margin:0, lineHeight:1.2 }}>Building toward full-scale deployment.</h2>
      </div>

      <div style={{ position:'relative', height:CONTAINER, maxWidth:860, margin:'0 auto', width:'100%' }}>

        {/* Horizontal track line */}
        <div style={{ position:'absolute', top:lineY, left:0, right:32, height:2, background:'linear-gradient(to right,#00A5E5 0%,#00A5E5 20%,#E1A200 48%,#E1A200 52%,#9BB0BF 80%,#9BB0BF 100%)', transform:'translateY(-50%)', zIndex:0 }} />

        {/* Arrow */}
        <div style={{ position:'absolute', top:lineY, right:24, transform:'translateY(-50%)', width:0, height:0, borderTop:'6px solid transparent', borderBottom:'6px solid transparent', borderLeft:'12px solid #9BB0BF', zIndex:1 }} />

        {NODES.map((node, i) => {
          const leftPct = i === 0 ? '20%' : i === 1 ? '50%' : '80%';
          return (
            <div key={i}>
              {node.labelAbove && (
                <div style={{ position:'absolute', bottom: CONTAINER - circleY + PIN_H, left:leftPct, transform:'translateX(-50%)', width:190, display:'flex', flexDirection:'column', alignItems:'center', zIndex:4 }}>
                  <span style={{ fontFamily:"'Raleway',sans-serif", fontSize:10, fontWeight:800, letterSpacing:'0.18em', textTransform:'uppercase', color:node.color, marginBottom:4 }}>STEP {node.num}</span>
                  <p style={{ fontSize:13, fontWeight:600, color: node.active ? '#121C29' : '#4A6070', textAlign:'center', margin:0, lineHeight:1.45, whiteSpace:'pre-line' }}>{node.label}</p>
                  <span style={{ marginTop:4, fontSize:10, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:node.color, background: node.active ? 'rgba(0,165,229,0.10)' : 'transparent', padding: node.active ? '2px 8px' : '2px 0', borderRadius:20 }}>{node.tag}</span>
                  <div style={{ marginTop:6, width:1.5, height:PIN_H, background:node.color, opacity:0.45, borderRadius:2 }} />
                </div>
              )}

              <div style={{ position:'absolute', top:circleY, left:leftPct, transform:'translateX(-50%)', width:CIRCLE, height:CIRCLE, borderRadius:'50%', background:node.bg, border:`3px solid ${node.color}`, boxShadow: node.active ? '0 4px 20px rgba(0,165,229,0.32),0 0 0 5px rgba(0,165,229,0.10)' : '0 2px 10px rgba(0,0,0,0.07)', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', zIndex:2 }}>
                <span style={{ fontFamily:"'Raleway',sans-serif", fontWeight:800, fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:node.textColor, opacity: node.active ? 0.8 : 0.6, lineHeight:1, marginBottom:3 }}>STEP</span>
                <span style={{ fontFamily:"'Raleway',sans-serif", fontWeight:800, fontSize:22, lineHeight:1, color:node.textColor }}>{node.num}</span>
              </div>

              {!node.labelAbove && (
                <div style={{ position:'absolute', top: circleY + CIRCLE + PIN_H, left:leftPct, transform:'translateX(-50%)', width:190, display:'flex', flexDirection:'column', alignItems:'center', zIndex:4 }}>
                  <div style={{ width:1.5, height:PIN_H, background:node.color, opacity:0.45, borderRadius:2, marginBottom:6, marginTop:-PIN_H }} />
                  <span style={{ fontFamily:"'Raleway',sans-serif", fontSize:10, fontWeight:800, letterSpacing:'0.18em', textTransform:'uppercase', color:node.color, marginBottom:4 }}>STEP {node.num}</span>
                  <p style={{ fontSize:13, fontWeight:600, color:'#4A6070', textAlign:'center', margin:0, lineHeight:1.45 }}>{node.label}</p>
                  <span style={{ marginTop:4, fontSize:10, fontWeight:700, letterSpacing:'0.08em', textTransform:'uppercase', color:node.color }}>{node.tag}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
