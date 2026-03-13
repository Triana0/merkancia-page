import React from 'react';
import { AlertCircle, PackageX, FileWarning, TrendingDown } from 'lucide-react';

const Problema = () => {
  const problemas = [
    {
      icon: <TrendingDown className="text-red-500 w-8 h-8" />,
      titulo: 'Desorden en las ventas',
      descripcion: 'Pérdida de información importante, cotizaciones olvidadas y dificultad para rastrear el rendimiento diario de tu negocio.'
    },
    {
      icon: <PackageX className="text-orange-500 w-8 h-8" />,
      titulo: 'Inventario mal controlado',
      descripcion: 'Falta de productos cuando los necesitas o exceso de mercancía sin rotación por no tener datos en tiempo real.'
    },
    {
      icon: <AlertCircle className="text-yellow-500 w-8 h-8" />,
      titulo: 'Cuentas pendientes olvidadas',
      descripcion: 'Dificultad para gestionar qué clientes te deben pagar y qué debes pagar a tus proveedores, afectando tu flujo de caja.'
    },
    {
      icon: <FileWarning className="text-blue-500 w-8 h-8" />,
      titulo: 'Falta de información clara',
      descripcion: 'No tener claridad sobre la salud financiera o el estado general de las operaciones para tomar decisiones estratégicas.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            ¿Cuánto Dinero Estás Perdiendo por No Tener el <span className="text-primary">Control de tu Negocio?</span>
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Administrar una empresa con procesos manuales u hojas de cálculo obsoletas no solo genera estrés, sino que frena tu crecimiento y rentabilidad diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problemas.map((problema, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:border-accent/30 transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                {problema.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{problema.titulo}</h3>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{problema.descripcion}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <h3 className="text-3xl font-extrabold text-white mb-6 relative z-10">
            Tenemos la Solución Exacta para Centralizar tu Operación Comercial
          </h3>
          <p className="text-gray-200 max-w-4xl mx-auto text-lg md:text-xl relative z-10">
            Olvídate del desorden. Integra ventas, inventario y reportes financieros automáticos en una plataforma en la nube intuitiva y diseñada para multiplicar tu productividad desde el primer día.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problema;
