import React from 'react'
import { CheckCircle, Calendar, Smartphone, Headphones } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: <CheckCircle size={32} />,
      title: "Reservas Directas",
      description: "Reserva sin intermediarios y mejores precios"
    },
    {
      icon: <Calendar size={32} />,
      title: "Planificación Flexible",
      description: "Cancela o modifica fácilmente tus reservas"
    },
    {
      icon: <Smartphone size={32} />,
      title: "App Móvil Gratuita",
      description: "Todo Bocas en tu teléfono, sin costo adicional"
    },
    {
      icon: <Headphones size={32} />,
      title: "Soporte 24/7",
      description: "Asistencia en español siempre disponible"
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 border-transparent hover:border-blue-400 text-center"
          >
            <div className="text-blue-600 mb-4 flex justify-center">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
