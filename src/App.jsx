import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import GaussElectricLaw from './sections/GaussElectricLaw';
import GaussMagneticLaw from './sections/GaussMagneticLaw';
import FaradayLaw from './sections/FaradayLaw';
import AmpereMaxwellLaw from './sections/AmpereMaxwellLaw';
import Footer from './components/Footer';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden">
      {/* Partículas de fondo */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
      </div>
      
      <Header />
      
      <main className="relative z-10">
        <Hero />
        <GaussElectricLaw />
        <GaussMagneticLaw />
        <FaradayLaw />
        <AmpereMaxwellLaw />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;