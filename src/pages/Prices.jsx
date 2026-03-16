import { useState } from "react";

const Prices = () => {

  const [selectedPlan, setSelectedPlan] = useState(1);

  const plans = [
    {
      name: "Básico",
      price: "$9",
      color: "primary",
      features: [
        "Gestión de ventas",
        "Control de inventario",
        "Registro de compras",
        "Reportes básicos"
      ]
    },
    {
      name: "Profesional",
      price: "$19",
      color: "accent",
      features: [
        "Todo lo del plan Básico",
        "Cuentas por cobrar",
        "Cuentas por pagar",
        "Cotizaciones",
        "Reportes avanzados"
      ]
    },
    {
      name: "Empresa",
      price: "$39",
      color: "secondary",
      features: [
        "Todo lo del plan Profesional",
        "Multiusuarios",
        "Reportes personalizados",
        "Prioridad en soporte",
        "Exportación de datos"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 px-6 bg-slate-50">

      {/* título */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">
          Planes de MERKANCIA
        </h1>
        <p className="text-slate-600 text-lg">
          Selecciona el plan ideal para tu negocio
        </p>
      </div>

      {/* tarjetas */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-end">

        {plans.map((plan, index) => {

          const isSelected = selectedPlan === index;

          return (

            <div
              key={index}
              className={`
              relative bg-white border p-8 flex flex-col rounded-xl
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
              ${isSelected ? "scale-105 shadow-xl border-accent z-10" : "border-slate-200 shadow-md"}
              `}
            >

              {isSelected && (
                <span className="absolute -top-3 right-4 bg-accent text-white text-xs px-3 py-1 rounded-md shadow">
                  Seleccionado
                </span>
              )}

              <h3 className="text-xl font-semibold mb-2">
                {plan.name}
              </h3>

              <div className="text-3xl font-bold mb-6">
                {plan.price}
                <span className="text-base text-slate-500 font-normal">
                  {" "} / mes
                </span>
              </div>

              <ul className="space-y-3 text-slate-600 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button
                onClick={() => setSelectedPlan(index)}
                className={`
                py-3 rounded-lg text-white font-medium
                transition-all duration-300
                transform hover:scale-105 active:scale-95
                shadow-md hover:shadow-lg
                ${
                  plan.color === "primary"
                    ? "bg-primary hover:bg-primary/90"
                    : plan.color === "accent"
                    ? "bg-accent hover:bg-accent/90"
                    : "bg-secondary hover:bg-secondary/90"
                }
                `}
              >
                Elegir plan
              </button>

            </div>

          );

        })}

      </div>

    </div>
  );
};

export default Prices;
