import React from 'react';
import { ShoppingCart, PackageOpen, FileText, ClipboardList, Wallet, FileSignature, BarChart4 } from 'lucide-react';

const Modulos = () => {
  const modulos = [
    {
      id: "ventas",
      icon: <ShoppingCart className="w-6 h-6 text-emerald-500" />,
      titulo: 'Ventas',
      descripcion: 'Registra tus ventas fácilmente. Mantén el récord por cliente, fecha y método de pago en un solo clic.',
      color: "bg-emerald-50",
      borde: "border-emerald-100"
    },
    {
      id: "compras",
      icon: <PackageOpen className="w-6 h-6 text-blue-500" />,
      titulo: 'Compras',
      descripcion: 'Registra el ingreso de mercancía de tus proveedores, costos y actualiza saldos automáticamente.',
      color: "bg-blue-50",
      borde: "border-blue-100"
    },
    {
      id: "inventario",
      icon: <ClipboardList className="w-6 h-6 text-purple-500" />,
      titulo: 'Inventario',
      descripcion: 'Control en tiempo real de tu stock. Alertas de bajo stock y valoración de tus productos al instante.',
      color: "bg-purple-50",
      borde: "border-purple-100"
    },
    {
      id: "cotizaciones",
      icon: <FileSignature className="w-6 h-6 text-amber-500" />,
      titulo: 'Cotizaciones',
      descripcion: 'Genera cotizaciones profesionales y conviértelas en ventas rápidamente cuando el cliente apruebe.',
      color: "bg-amber-50",
      borde: "border-amber-100"
    },
    {
      id: "cuentas_cobrar",
      icon: <Wallet className="w-6 h-6 text-teal-500" />,
      titulo: 'Cuentas por cobrar y pagar',
      descripcion: 'Seguimiento exacto de los clientes con deudas pendientes. Registra abonos y saldos de forma organizada.',
      color: "bg-teal-50",
      borde: "border-teal-100"
    },
    {
      id: "reportes",
      icon: <BarChart4 className="w-6 h-6 text-indigo-500" />,
      titulo: 'Reportes',
      descripcion: 'Reportes detallados de ventas, costos y utilidades para tomar decisiones basadas en datos reales.',
      color: "bg-indigo-50",
      borde: "border-indigo-100"
    }
  ];

  return (
    <section id="modulos" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
            Herramientas Integradas para Acelerar tu Crecimiento
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Desbloquea el verdadero potencial de tu negocio con módulos diseñados para cubrir cada etapa de tu ciclo comercial y generar ganancias sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modulos.map((modulo, index) => (
            <div
              key={index}
              className={`flex flex-col items-start p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${index === 6 ? 'lg:col-span-3 lg:w-1/3 lg:mx-auto' : ''}`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${modulo.color} ${modulo.borde} border`}>
                {modulo.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{modulo.titulo}</h3>
              <p className="text-gray-600">{modulo.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modulos;
