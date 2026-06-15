import { useEffect, useRef } from 'react';

interface HexBackgroundProps {
  hexColor?: string;
  opacity?: number;
  speed?: number;
  backgroundColor?: string;
  variant?: 'fixed' | 'absolute';
}

function drawHexGrid(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  radius: number,
  offsetX: number,
  offsetY: number,
  hexColor: string,
  opacity: number,
  backgroundColor: string,
) {
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);

  const hexW = radius * 2;
  const hexH = Math.sqrt(3) * radius;
  const colW = hexW * 0.75;
  const rowH = hexH;

  const cols = Math.ceil(width / colW) + 3;
  const rows = Math.ceil(height / rowH) + 3;

  const periodX = colW * 2;
  const wrappedOffX = ((offsetX % periodX) + periodX) % periodX;
  const wrappedOffY = ((offsetY % rowH) + rowH) % rowH;

  const startCol = -2;
  const startRow = -2;

  ctx.beginPath();

  for (let col = startCol; col < cols + startCol; col++) {
    for (let row = startRow; row < rows + startRow; row++) {
      const cx = col * colW + wrappedOffX - colW;
      const cy = row * rowH + (col % 2 === 0 ? 0 : rowH / 2) + wrappedOffY - rowH;

      ctx.moveTo(cx + radius, cy);
      for (let i = 1; i <= 6; i++) {
        const angle = (Math.PI / 3) * i;
        ctx.lineTo(cx + radius * Math.cos(angle), cy + radius * Math.sin(angle));
      }
    }
  }

  ctx.strokeStyle = hexColor;
  ctx.globalAlpha = opacity;
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.globalAlpha = 1;
}

export default function HexBackground({
  hexColor = '#2BACD1',
  opacity = 0.05,
  speed = 0.15,
  backgroundColor = '#EEF4F8',
  variant = 'fixed',
}: HexBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const getSize = () => {
      if (variant === 'absolute') {
        const parent = canvas.parentElement;
        return {
          w: parent ? parent.clientWidth : window.innerWidth,
          h: parent ? parent.clientHeight : window.innerHeight,
        };
      }
      return { w: window.innerWidth, h: window.innerHeight };
    };

    const setSize = () => {
      const { w, h } = getSize();
      canvas.width = w;
      canvas.height = h;
    };
    setSize();

    const loop = () => {
      offsetRef.current.x += speed;
      offsetRef.current.y += speed;
      drawHexGrid(
        ctx,
        canvas.width,
        canvas.height,
        40,
        offsetRef.current.x,
        offsetRef.current.y,
        hexColor,
        opacity,
        backgroundColor,
      );
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    const onResize = () => setSize();
    window.addEventListener('resize', onResize);

    let ro: ResizeObserver | null = null;
    if (variant === 'absolute' && canvas.parentElement) {
      ro = new ResizeObserver(() => setSize());
      ro.observe(canvas.parentElement);
    }

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      ro?.disconnect();
    };
  }, [hexColor, opacity, speed, backgroundColor, variant]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: variant === 'absolute' ? 'absolute' : 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
