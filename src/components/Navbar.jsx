import React from 'react';
import { Home, Layers, Sparkles, Store, Phone, LogIn, UserPlus } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-neutral-950/70 border-b border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-neutral-900 font-bold">A</div>
          <div className="leading-tight">
            <div className="text-sm text-neutral-300">A2S</div>
            <div className="text-xs text-neutral-500">Aesthetics to Spaces</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-neutral-300 hover:text-white transition">About</a>
          <a href="#plans" className="text-neutral-300 hover:text-white transition">Plans</a>
          <a href="#features" className="text-neutral-300 hover:text-white transition">Features</a>
          <a href="#vendors" className="text-neutral-300 hover:text-white transition">Vendors</a>
          <a href="#contact" className="text-neutral-300 hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#login" className="hidden sm:inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-700 text-neutral-200 hover:border-neutral-500 hover:text-white transition">
            <LogIn size={16} />
            <span>Login</span>
          </a>
          <a href="#signup" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 text-neutral-900 font-medium hover:opacity-90 transition">
            <UserPlus size={16} />
            <span>Sign Up</span>
          </a>
        </div>
      </div>
      <div className="md:hidden border-t border-neutral-800">
        <div className="px-4 py-2 flex flex-wrap gap-4 text-sm">
          <a href="#about" className="flex items-center gap-2 text-neutral-300"><Home size={16}/>About</a>
          <a href="#plans" className="flex items-center gap-2 text-neutral-300"><Layers size={16}/>Plans</a>
          <a href="#features" className="flex items-center gap-2 text-neutral-300"><Sparkles size={16}/>Features</a>
          <a href="#vendors" className="flex items-center gap-2 text-neutral-300"><Store size={16}/>Vendors</a>
          <a href="#contact" className="flex items-center gap-2 text-neutral-300"><Phone size={16}/>Contact</a>
        </div>
      </div>
    </header>
  );
}
