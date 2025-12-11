import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectGrid } from './components/ProjectGrid';
import { Statement } from './components/Statement';
import { History } from './components/History';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-studio-white text-studio-black font-sans selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProjectGrid />
        <Statement />
        <History />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;