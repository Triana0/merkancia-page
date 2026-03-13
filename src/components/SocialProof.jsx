import React from 'react';

const SocialProof = () => {
  const testimonios = [
    {
      logo: "PRAXCV",
      empresa: "Grupo PRAXCV",
      texto: "\"Desde que implementamos MERKANCIA logramos mejorar la gestión de nuestros procesos y tener un mayor control de la información de la empresa.\"",
      autor: "Carlos Mendoza",
      cargo: "Gerente de Operaciones",
      bgColor: "bg-white",
      textColor: "text-gray-900"
    },
    {
      logo: "GeekTech",
      empresa: "Geek Technology",
      texto: "\"MERKANCIA transformó la forma en que gestionamos nuestros procesos empresariales. Ahora todo es más rápido y eficiente.\"",
      autor: "Laura Fernández",
      cargo: "Directora Administrativa",
      bgColor: "bg-primary text-white border-primary",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-24 bg-[#1B0B3B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            Respaldo Real: Negocios que ya Multiplicaron sus Ingresos
          </h2>
          <p className="text-lg text-gray-300 font-medium">
            Únete a cientos de empresas que dejaron atrás el caos operativo y ahora escalan sus ventas estructuralmente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {testimonios.map((testimonio, idx) => (
            <div key={idx} className={`p-10 rounded-2xl shadow-xl flex flex-col justify-between border border-white/10 ${testimonio.bgColor === 'bg-white' ? 'bg-white/5 backdrop-blur-sm' : testimonio.bgColor} transition-transform hover:-translate-y-2`}>
              <div className="mb-8 relative">
                <div className="text-5xl text-accent absolute -top-4 -left-2 opacity-50">"</div>
                <p className={`text-lg italic font-medium relative z-10 leading-relaxed ${testimonio.bgColor === 'bg-white' ? 'text-gray-200' : 'text-gray-100'}`}>
                  {testimonio.texto}
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center font-bold text-primary shadow-inner">
                  {testimonio.logo.substring(0, 2)}
                </div>
                <div>
                  <h4 className={`font-bold ${testimonio.bgColor === 'bg-white' ? 'text-white' : 'text-white'}`}>{testimonio.autor}</h4>
                  <p className={`text-sm ${testimonio.bgColor === 'bg-white' ? 'text-accent' : 'text-[#d7bbf5]'}`}>
                    {testimonio.cargo}, {testimonio.empresa}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-60 grayscale filter hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold text-white">TECHCORP</div>
          <div className="text-2xl font-bold text-white italic">GLOBAL VENTAS</div>
          <div className="text-2xl font-bold text-white tracking-widest">NEXUS</div>
          <div className="text-2xl font-bold text-white font-serif">Avanza Cía.</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
