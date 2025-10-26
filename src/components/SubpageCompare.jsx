import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowLeft, Layers } from 'lucide-react';

const Row = ({ label, basic, premium, enterprise }) => (
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 items-center py-3 border-b border-neutral-900/60">
    <div className="text-sm text-neutral-300">{label}</div>
    <div className="text-xs sm:text-sm text-neutral-200 flex items-center gap-2">{basic ? <Check size={16} className="text-emerald-400"/> : <span className="text-neutral-600">—</span>}</div>
    <div className="text-xs sm:text-sm text-neutral-200 flex items-center gap-2">{premium ? <Check size={16} className="text-emerald-400"/> : <span className="text-neutral-600">—</span>}</div>
    <div className="text-xs sm:text-sm text-neutral-200 flex items-center gap-2">{enterprise ? <Check size={16} className="text-emerald-400"/> : <span className="text-neutral-600">—</span>}</div>
  </div>
);

export default function SubpageCompare() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
          <a href="#home" className="inline-flex items-center gap-2 text-neutral-300 hover:text-white">
            <ArrowLeft size={16}/> Back to home
          </a>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/70 border border-neutral-800 text-xs text-neutral-300">
            <Layers size={14} className="text-emerald-400"/> Plans Comparison
          </div>
          <h1 className="mt-3 text-3xl sm:text-4xl font-semibold">Choose the plan that fits</h1>
          <p className="mt-2 text-neutral-400 max-w-2xl">Quickly scan what’s included across Basic, Premium, and Enterprise.</p>
        </motion.div>

        <div className="mt-10 rounded-2xl border border-neutral-800 bg-neutral-900/30 overflow-hidden">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 px-4 sm:px-6 py-4 bg-neutral-900/50">
            <div className="text-xs uppercase tracking-wider text-neutral-400">Feature</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400">Basic</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400">Premium</div>
            <div className="text-xs uppercase tracking-wider text-neutral-400">Enterprise</div>
          </div>
          <div className="px-4 sm:px-6">
            <Row label="Verified Listings" basic premium enterprise />
            <Row label="2.5D Room Designer" basic premium enterprise />
            <Row label="AI B2C Consultants" basic premium enterprise />
            <Row label="Auto Design Options" basic premium enterprise />
            <Row label="B2C Analytics" basic premium enterprise />
            <Row label="AR/VR Management" basic premium enterprise />
            <Row label="Predictive Maintenance" basic={false} premium enterprise />
            <Row label="Tenant Screening" basic={false} premium enterprise />
            <Row label="Resident Experience" basic={false} premium enterprise />
            <Row label="Sustainability Suite" basic={false} premium enterprise />
            <Row label="Blockchain Transfer" basic={false} premium={false} enterprise />
            <Row label="Smart Contract Rent" basic={false} premium={false} enterprise />
            <Row label="Virtual Portfolio Mgmt" basic={false} premium={false} enterprise />
            <Row label="AI Valuation & Forecast" basic={false} premium={false} enterprise />
            <Row label="Dedicated Account Manager" basic={false} premium={false} enterprise />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#plans" className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium px-5 py-3 hover:opacity-90 transition">Get Started</a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-neutral-700/70 text-neutral-200 px-5 py-3 hover:border-neutral-500 hover:text-white transition">Talk to sales</a>
        </div>
      </div>
    </section>
  );
}
