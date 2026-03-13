import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Beneficios = () => {
  const beneficios = [
    {
      titulo: 'Domina tus Ventas',
      descripcion: 'Visualiza qué productos te dan más dinero y descubre exactamente dónde están tus mayores ganancias diarias.'
    },
    {
      titulo: 'Cobra a Tiempo Siempre',
      descripcion: 'Nuestro sistema automático de seguimiento de cuentas por cobrar te garantiza liquidez sin perseguir clientes.'
    },
    {
      titulo: 'Stock Perfecto, Cero Pérdidas',
      descripcion: 'Conoce el valor real de tu inventario en segundos y evita quedarte sin el producto que tus clientes buscan.'
    },
    {
      titulo: 'Negocia Mejor con Proveedores',
      descripcion: 'Registra tu historial de compras y obtén datos precisos para exigir mejores precios a tus proveedores.'
    },
    {
      titulo: 'Métricas que Escalan tu Negocio',
      descripcion: 'Reportes ejecutivos visuales y directos para tomar decisiones que multipliquen tus ingresos mes a mes.'
    },
    {
      titulo: 'Implementación Inmediata',
      descripcion: 'Diseño ultra-sencillo que tu equipo aprenderá en minutos. Sin instalaciones ni capacitaciones largas.'
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Beneficios Reales que Impactan Directo en tu <span className="text-accent underline decoration-4 underline-offset-4">Bolsillo</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 font-medium">
              Nuestra plataforma está pensada exclusivamente para liberar tu tiempo operativo y enfocarte en lo único que importa: hacer crecer tus ventas.
            </p>
            
            <div className="space-y-6">
              {beneficios.slice(0, 3).map((beneficio, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent font-bold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{beneficio.titulo}</h3>
                    <p className="text-gray-600 mt-1">{beneficio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex flex-col gap-8">
            <img src="/business_office.png" alt="Equipo de ventas y gestión en oficina" className="w-full h-64 object-cover rounded-3xl shadow-lg border border-gray-100 hover:scale-[1.02] transition-transform duration-300" />
            <div className="bg-plomo/30 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl shadow-slate-200/50">
              <div className="space-y-8">
              {beneficios.slice(3).map((beneficio, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-accent font-bold" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{beneficio.titulo}</h3>
                    <p className="text-gray-600 mt-1">{beneficio.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-300">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
                  ))}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  <span className="text-primary font-bold">+500 Negocios Rentables</span> ya maximizan sus ingresos hoy.
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
