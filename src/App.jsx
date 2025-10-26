import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainSections from './components/MainSections';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-inter">
      <Navbar />
      <main>
        <Hero />
        <MainSections />
      </main>
      <Footer />
    </div>
  );
}
