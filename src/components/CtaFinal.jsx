import React from 'react';

const CtaFinal = () => {
  return (
    <section id="demo" className="py-24 bg-primary text-white relative flex items-center overflow-hidden">
      {/* Decorative patterns */}
      <img src="/tech_automation.png" alt="Tech Background" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary opacity-80"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Es Hora de Dejar de Perder Dinero y Empezar a Escalar
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
          Únete a los negocios que ya transformaron su desorden administrativo en una máquina de ventas inteligente, centralizada y altamente rentable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-accent hover:bg-white hover:text-primary text-white px-8 py-4 rounded-full font-extrabold text-lg w-full sm:w-auto shadow-xl shadow-accent/40 transition-all hover:-translate-y-1">
            QUIERO MULTIPLICAR MIS VENTAS
          </button>
          <button className="bg-white/10 text-white hover:bg-white/20 border border-white/30 px-8 py-4 rounded-full font-bold text-lg w-full sm:w-auto transition-all">
            Hablar con un Asesor
          </button>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Sin compromisos. Cancela en cualquier momento.
        </p>
      </div>
    </section>
  );
};

export default CtaFinal;
