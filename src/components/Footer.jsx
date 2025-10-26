import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900/70 bg-neutral-950 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-emerald-400 to-cyan-400 flex items-center justify-center text-neutral-900 font-bold shadow-[0_0_30px_-10px] shadow-cyan-400/50">A</div>
              <div>
                <div className="text-sm text-neutral-300">A2S</div>
                <div className="text-xs text-neutral-500">Aesthetics to Spaces</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-neutral-400 max-w-xs">A2S blends real estate technology with interior design and smart home experiences for inspiring, effortless, and trustworthy spaces.</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-200">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li><a href="#about" className="hover:text-neutral-200">About Us</a></li>
              <li><a href="#plans" className="hover:text-neutral-200">Plans & Features</a></li>
              <li><a href="#vendors" className="hover:text-neutral-200">Vendor Waitlist</a></li>
              <li><a href="#contact" className="hover:text-neutral-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-200">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>Property Search</li>
              <li>Interior & Vastu</li>
              <li>Vendor & Factory Onboarding</li>
              <li>Smart Tools (AR/VR, AI Valuation, IoT)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-neutral-200">Contact</h4>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>Email: <a href="mailto:ravsil.a2s.co@gmail.com" className="text-emerald-400 hover:underline">ravsil.a2s.co@gmail.com</a></li>
              <li>Phone: <a href="tel:+919703631298" className="text-emerald-400 hover:underline">9703631298</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-xs text-neutral-500 border-t border-neutral-900/70 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>© 2024 A2S - Aesthetics to Spaces. Building the future of property management.</div>
          <div className="text-neutral-600">Enhanced visuals with 3D and motion</div>
        </div>
      </div>
    </footer>
  );
}
