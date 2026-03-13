import React from 'react';
import Hero from './components/Hero';
import Problema from './components/Problema';
import Modulos from './components/Modulos';
import Beneficios from './components/Beneficios';
import Flujo from './components/Flujo';
import SocialProof from './components/SocialProof';
import PublicoObjetivo from './components/PublicoObjetivo';
import CtaFinal from './components/CtaFinal';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <Navbar />
      <main>
        <Hero />
        <Problema />
        <Modulos />
        <Beneficios />
        <SocialProof />
        <PublicoObjetivo />
        <CtaFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
