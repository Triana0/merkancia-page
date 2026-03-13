import React from 'react';
import { Store, Building2, Briefcase, Rocket } from 'lucide-react';

const PublicoObjetivo = () => {
  const publicos = [
    {
      icon: <Store className="w-10 h-10 text-primary" />,
      titulo: 'Comercios locales',
      descripcion: 'Tiendas que necesitan llevar control de sus ventas de mostrador y su stock diario.',
    },
    {
      icon: <Rocket className="w-10 h-10 text-accent" />,
      titulo: 'Negocios en crecimiento',
      descripcion: 'Emprendimientos que buscan dejar atrás el papel y escalar su operación.',
    },
    {
      icon: <Briefcase className="w-10 h-10 text-secondary" />,
      titulo: 'Pequeñas empresas (PyMEs)',
      descripcion: 'Empresas con equipos pequeños que requieren una herramienta centralizada e intuitiva.',
    },
    {
      icon: <Building2 className="w-10 h-10 text-[#d7bbf5]" />,
      titulo: 'Empresas medianas',
      descripcion: 'Organizaciones que buscan organizar compras, ventas y deudas sin costos excesivos.',
    }
  ];

  return (
    <section className="py-24 bg-plomo/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            La Herramienta para Dueños que Buscan Escalar
          </h2>
          <p className="text-lg text-gray-600 font-medium">
            Nuestra plataforma se adapta a los modelos de negocio comerciales más exigentes, brindando el control necesario para multiplicar tus ingresos todos los días.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {publicos.map((publico, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-6 bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center">
                {publico.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{publico.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{publico.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublicoObjetivo;
