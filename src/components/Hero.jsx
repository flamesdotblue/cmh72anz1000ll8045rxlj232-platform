import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { Rocket } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleField from './ParticleField';

const LazySpline = React.lazy(() => import('@splinetool/react-spline'));

function useShouldShow3D() {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const small = window.matchMedia('(max-width: 768px)').matches;
    setOk(!isMobile && !prefersReduced && !small);
  }, []);
  return ok;
}

export default function Hero() {
  const show3D = useShouldShow3D();
  const { scrollYProgress } = useScroll();
  const yTitle = useTransform(scrollYProgress, [0, 0.4], [0, -40]);
  const ySub = useTransform(scrollYProgress, [0, 0.4], [0, -20]);

  // Magnetic effect helpers for primary CTA
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });
  const resetMagnet = () => setMagnetic({ x: 0, y: 0 });
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    setMagnetic({ x: x * 0.15, y: y * 0.15 });
  };

  // Button ripple background (lightweight)
  const [ripple, setRipple] = useState({ x: 0, y: 0, show: false });
  const onRipple = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true });
    setTimeout(() => setRipple((r) => ({ ...r, show: false })), 350);
  };

  const rippleStyle = useMemo(() => ({
    background: ripple.show
      ? `radial-gradient( circle at ${ripple.x}px ${ripple.y}px, rgba(17,17,17,0.12) 0%, rgba(17,17,17,0.12) 30%, transparent 40% )`
      : 'transparent',
    transition: 'background 350ms ease-out',
  }), [ripple]);

  return (
    <section id="home" className="relative h-[80vh] sm:h-[88vh] lg:h-[92vh] overflow-hidden">
      {/* Background 3D / fallback */}
      <div className="absolute inset-0">
        {show3D ? (
          <Suspense fallback={<div className="w-full h-full bg-[radial-gradient(1000px_600px_at_20%_20%,rgba(16,185,129,0.15),transparent),radial-gradient(1000px_600px_at_80%_30%,rgba(34,211,238,0.12),transparent)]" />}> 
            <LazySpline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </Suspense>
        ) : (
          <div className="w-full h-full bg-[radial-gradient(1000px_600px_at_20%_20%,rgba(16,185,129,0.15),transparent),radial-gradient(1000px_600px_at_80%_30%,rgba(34,211,238,0.12),transparent)]" />
        )}
        {/* Particle field overlays the background, under content */}
        <ParticleField parallax={0.3} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/40 to-neutral-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>

      {/* Content with parallax */}
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.div
              style={{ y: ySub }}
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-300 mb-4"
            >
              <Rocket size={14} className="text-emerald-400" />
              Building the future of property management
            </motion.div>

            <motion.h1
              style={{ y: yTitle }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300">Every house deserves to be more than just four walls.</span>
            </motion.h1>

            <motion.p
              style={{ y: ySub }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: 'easeOut' }}
              className="mt-4 text-neutral-300 text-base sm:text-lg max-w-2xl"
            >
              We built A2S to make it possible. From empty rooms to living stories. Why guess your space when you can experience it?
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <motion.a
                onMouseMove={onMove}
                onMouseLeave={resetMagnet}
                onMouseDown={onRipple}
                style={{ x: magnetic.x, y: magnetic.y, ...rippleStyle }}
                variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                href="#plans"
                className="relative inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium px-5 py-3 hover:opacity-90 transition shadow-[0_10px_40px_-10px] shadow-emerald-400/40 overflow-hidden"
              >
                Get Started
              </motion.a>
              <motion.a
                variants={{ hidden: { y: 10, opacity: 0 }, show: { y: 0, opacity: 1 } }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#vendors"
                className="inline-flex items-center justify-center rounded-md border border-neutral-700/70 text-neutral-200 px-5 py-3 hover:border-neutral-500 hover:text-white transition"
              >
                Join Vendor Waitlist
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
