import React from 'react';
import { ArrowRight, BarChart3, Package } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-primary text-white relative overflow-hidden py-24 lg:py-36 min-h-[75vh] flex items-center">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-accent opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-tight">
          Multiplica tus Ganancias y Toma el <span className="text-accent">Control Total</span> de tus Ventas
        </h1>

        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto font-medium">
          El sistema Todo en Uno diseñado para empresas que quieren dejar de perder tiempo en procesos manuales y empezar a escalar con inteligencia y organización.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#demo" className="bg-accent hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-extrabold text-lg flex items-center justify-center gap-2 transition-all hover:scale-105 shadow-xl shadow-accent/40">
            SOLICITAR DEMO
            <ArrowRight size={20} />
          </a>
          <a href="#modulos" className="bg-white/0 hover:bg-white/0 text-white border border-white/0 px-0 py-5 rounded-full font-bold text-lg flex items-center justify-center transition-colors">

          </a>
        </div>
      </div>


      {/* Target audience tags */}
      <div className="w-full bg-[#200D35] py-5 border-t border-accent/20 mt-16 sm:mt-24 absolute bottom-0">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm md:text-base font-bold text-gray-300">
          <span>AUMENTA TUS CIERRES</span>
          <span className="text-accent/50">|</span>
          <span>REDUCE PÉRDIDAS ONLINE</span>
          <span className="text-accent/50">|</span>
          <span>INVENTARIO SIN ERRORES</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
