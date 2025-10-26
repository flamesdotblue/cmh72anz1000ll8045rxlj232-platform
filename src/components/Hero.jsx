import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] sm:h-[85vh] lg:h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-neutral-950/40 to-neutral-950" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-neutral-950 to-transparent" />
      </div>
      <div className="relative z-10 h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-300 mb-4">
              <Rocket size={14} className="text-emerald-400" />
              Building the future of property management
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Every house deserves to be more than just four walls.
            </h1>
            <p className="mt-4 text-neutral-300 text-base sm:text-lg max-w-2xl">
              We built A2S to make it possible. From empty rooms to living stories. Why guess your space when you can experience it?
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#plans" className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium px-5 py-3 hover:opacity-90 transition">
                Get Started
              </a>
              <a href="#vendors" className="inline-flex items-center justify-center rounded-md border border-neutral-700 text-neutral-200 px-5 py-3 hover:border-neutral-500 hover:text-white transition">
                Join Vendor Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
