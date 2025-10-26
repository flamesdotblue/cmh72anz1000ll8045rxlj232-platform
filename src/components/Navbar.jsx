import React from 'react';
import { LogIn, UserPlus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/55 border-b border-neutral-800/60">
      <motion.div
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
      >
        <a href="#home" className="group flex items-center gap-3">
          <div className="relative">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-neutral-900 font-bold shadow-[0_0_30px_-10px] shadow-cyan-400/50">A</div>
            <div className="absolute inset-0 rounded-md ring-2 ring-transparent group-hover:ring-emerald-400/40 transition" />
          </div>
          <div className="leading-tight">
            <div className="text-sm text-neutral-200">A2S</div>
            <div className="text-[11px] text-neutral-500">Aesthetics to Spaces</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {[
            { label: 'About', href: '#about' },
            { label: 'Plans', href: '#plans' },
            { label: 'Features', href: '#features' },
            { label: 'Vendors', href: '#vendors' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-neutral-300 hover:text-white transition"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-700/70 text-neutral-200 hover:border-neutral-500 hover:text-white transition"
          >
            <LogIn size={16} />
            <span>Login</span>
          </a>
          <a
            href="#signup"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium hover:opacity-90 transition shadow-[0_8px_30px_-10px] shadow-emerald-400/40"
          >
            <UserPlus size={16} />
            <span>Sign Up</span>
          </a>
        </div>
      </motion.div>
      <div className="md:hidden border-t border-neutral-800/60">
        <div className="px-4 py-2 flex flex-wrap gap-4 text-sm">
          {[
            { label: 'About', href: '#about' },
            { label: 'Plans', href: '#plans' },
            { label: 'Features', href: '#features' },
            { label: 'Vendors', href: '#vendors' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="text-neutral-300 hover:text-white transition">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
