import React, { useEffect, useRef } from 'react';

export default function ParticleField({ parallax = 0.2, density = 70 }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(0);
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = prefersReduced ? Math.max(20, Math.floor((w * h) / 120000)) : Math.max(30, Math.floor((w * h) / (density * 100)));

    const particles = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.6 + 0.4,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      d: Math.random() * 0.6 + 0.4,
    }));
    particlesRef.current = particles;

    const onResize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    let scrollY = 0;
    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener('scroll', onScroll);

    const render = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.save();
      ctx.globalAlpha = 0.8;
      for (const p of particlesRef.current) {
        p.x += p.vx * p.d;
        p.y += p.vy * p.d;
        if (p.x < -10) p.x = w + 10; if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10; if (p.y > h + 10) p.y = -10;

        const py = p.y + (scrollY * parallax * p.d * 0.02);
        ctx.beginPath();
        ctx.fillStyle = 'rgba(16,185,129,0.35)';
        ctx.arc(p.x, py, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
      rafRef.current = requestAnimationFrame(render);
    };

    render();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, [parallax, density]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full"/>
    </div>
  );
}
