import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServerRates } from './components/ServerRates';
import { Features } from './components/Features';
import { Guides } from './components/Guides';
import { Gallery } from './components/Gallery';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <main className="min-h-screen bg-scifi-dark text-slate-200 overflow-x-hidden selection:bg-streak-500 selection:text-black">
      <Navbar />
      <Hero />
      <ServerRates />
      <Features />
      <Gallery />
      <Guides />
      <Community />
      <Footer />
      <ScrollToTop />
    </main>
  );
}

export default App;