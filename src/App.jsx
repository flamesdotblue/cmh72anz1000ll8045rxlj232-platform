import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter relative overflow-x-hidden">
      {/* Ambient gradient glows */}
      <div className="pointer-events-none fixed -top-48 -right-48 h-[38rem] w-[38rem] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-emerald-500/30 to-cyan-500/30 animate-pulse" />
      <div className="pointer-events-none fixed -bottom-56 -left-56 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-20 bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20" />

      {/* Subtle grid overlay */}
      <div className="pointer-events-none fixed inset-0 [background-image:linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]" />

      <Navbar />
      <main>
        <Hero />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}
