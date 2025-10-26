import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Sparkles, Cpu, Shield, Gauge, LineChart } from 'lucide-react';

const Card = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{opacity:0, y:16}}
    whileInView={{opacity:1, y:0}}
    viewport={{ once: true, amount: 0.3 }}
    transition={{duration:0.6}}
    className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6"
  >
    <div className="h-10 w-10 rounded-lg bg-neutral-800/70 flex items-center justify-center mb-4">
      <Icon size={18} className="text-emerald-400" />
    </div>
    <div className="text-lg font-semibold text-white">{title}</div>
    <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{desc}</p>
  </motion.div>
);

export default function SubpageDeepDive() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <a href="#home" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white">
            <ArrowLeft size={16}/> Back to home
          </a>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-300">
            <Sparkles size={14} className="text-emerald-400"/> Feature deep-dive
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">How A2S blends AI, AR/VR and IoT</h1>
          <p className="mt-2 text-neutral-400 max-w-2xl">Explore the core systems powering property discovery, design, and management.</p>
        </motion.div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card icon={Cpu} title="AI Design Assistant" desc="Our models generate multiple layout options, optimize furniture placement, and adapt to your preferences in real time with privacy-first on-device hints."/>
          <Card icon={Shield} title="Trusted Data Stack" desc="Verification pipelines, screening analytics, and tamper-evident records ensure transparency for tenants, owners, and vendors."/>
          <Card icon={Gauge} title="Predictive Maintenance" desc="IoT sensors stream health metrics for HVAC, plumbing, and electrical—detecting anomalies before they become breakdowns."/>
          <Card icon={LineChart} title="Valuation & Forecasting" desc="Historical price trends, infra signals, and demand indicators converge to provide accurate valuation and forward-looking insights."/>
          <Card icon={Sparkles} title="AR/VR Immersion" desc="From 2.5D room planning to AR walkthroughs and VR tours, experience spaces before you decide—at home or on-site."/>
          <Card icon={Cpu} title="Personalized Experience" desc="Resident journeys are tailored with privacy-aware analytics: smarter services, community engagement, and sustainability nudges."/>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#plans" className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium px-5 py-3 hover:opacity-90 transition">See pricing</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-neutral-700/70 text-neutral-200 px-5 py-3 hover:border-neutral-500 hover:text-white transition">Request a demo</a>
        </div>
      </div>
    </section>
  );
}
