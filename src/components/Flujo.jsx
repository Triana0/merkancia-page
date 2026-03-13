import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Flujo = () => {
  const flujos = [
    { source: "Cotización", target: "Venta", dotColor: "bg-amber-400", targetColor: "bg-emerald-400" },
    { source: "Compra", target: "Inventario", dotColor: "bg-blue-400", targetColor: "bg-purple-400" },
    { source: "Venta pendiente", target: "Cuenta por cobrar", dotColor: "bg-red-400", targetColor: "bg-teal-400" },
    { source: "Compra pendiente", target: "Cuenta por pagar", dotColor: "bg-orange-400", targetColor: "bg-rose-400" }
  ];

  return (
    <section className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-accent">
            Automatiza tu Flujo de Caja y Evita Fugas de Capital
          </h2>
          <p className="text-lg text-gray-300 font-medium">
            Registra una venta y el sistema descuenta el inventario, actualiza tus ingresos y alerta pagos pendientes al instante. Conecta cada área de tu negocio para cerrar brechas financieras.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {flujos.map((f, i) => (
            <div key={i} className="bg-secondary/30 border border-accent/20 rounded-2xl p-6 flex flex-col items-center sm:flex-row sm:justify-between transition-transform hover:-translate-y-1 hover:border-accent">
              <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-lg w-full sm:w-2/5 justify-center mb-4 sm:mb-0">
                <div className={`w-3 h-3 rounded-full ${f.dotColor}`}></div>
                <span className="font-bold text-center">{f.source}</span>
              </div>
              
              <div className="text-accent hidden sm:block">
                <ArrowRight size={24} />
              </div>
              <div className="text-accent sm:hidden mb-4">
                <ArrowDown size={24} />
              </div>
              
              <div className="flex items-center gap-3 bg-white/10 px-4 py-3 rounded-lg w-full sm:w-2/5 justify-center">
                <div className={`w-3 h-3 rounded-full ${f.targetColor}`}></div>
                <span className="font-bold text-center">{f.target}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center p-[2px] rounded-full bg-gradient-to-r from-accent via-[#d7bbf5] to-accent shadow-lg shadow-accent/20">
            <div className="px-8 py-3 bg-primary rounded-full">
              <span className="font-extrabold text-white uppercase tracking-wider text-sm">
                INTEGRACIÓN TOTAL EN TIEMPO REAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flujo;
