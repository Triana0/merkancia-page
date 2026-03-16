import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import Problema from './components/Problema';
import Modulos from './components/Modulos';
import Beneficios from './components/Beneficios';
import SocialProof from './components/SocialProof';
import PublicoObjetivo from './components/PublicoObjetivo';
import CtaFinal from './components/CtaFinal';

import Prices from "./pages/Prices";

function Home() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/precios" element={
          <>
            <Navbar />
            <Prices />
            <Footer />
          </>
        } />

      </Routes>
    </BrowserRouter>
  );
}


export default App;