import { useEffect, useRef } from 'react';
import p5 from 'p5';

export const CanvasPlayground = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sketchRef = useRef<p5 | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (s: p5) => {
      let t = 0;

      s.setup = () => {
        const parent = containerRef.current;
        if (!parent) return;
        const width = parent.clientWidth;
        const height = parent.clientHeight;
        s.createCanvas(width, height);
        s.noStroke();
      };

      s.windowResized = () => {
        const parent = containerRef.current;
        if (!parent) return;
        s.resizeCanvas(parent.clientWidth, parent.clientHeight);
      };

      s.draw = () => {
        s.clear();
        s.background(0, 0);

        for (let i = 0; i < 18; i++) {
          const x = s.width / 2 + Math.sin(t + i) * (s.width * 0.24);
          const y = s.height / 2 + Math.cos(t + i * 1.2) * (s.height * 0.18);
          const size = 28 + Math.sin(t * 2 + i) * 12;
          s.fill(183 + i * 3, 255 - i * 7, 190 + i * 2, 140);
          s.circle(x, y, size);
        }

        t += 0.01;
      };
    };

    sketchRef.current = new p5(sketch, containerRef.current);

    return () => {
      sketchRef.current?.remove();
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-funky border border-ink/20 bg-aqua/30 p-3 shadow-card">
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[size:32px_32px]" />
      <div ref={containerRef} className="relative h-64 w-full rounded-funky bg-white/50" />
      <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white/80 px-3 py-1 text-xs font-semibold uppercase text-ink/80">
        <span className="h-2 w-2 rounded-full bg-coral" />
        Live P5 playground
      </div>
    </div>
  );
};
