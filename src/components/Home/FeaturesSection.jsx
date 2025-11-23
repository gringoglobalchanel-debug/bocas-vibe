import React from 'react'
import { Link } from 'react-router-dom'
import { Hotel, Compass, Utensils, Car, Island, Music, Users, Calendar } from 'lucide-react'

const FeaturesSection = () => {
  const services = [
    {
      icon: <Hotel size={32} />,
      title: 'Alojamiento',
      description: 'Hoteles, hostales y eco-lodges',
      link: '/alojamiento',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Compass size={32} />,
      title: 'Tours',
      description: 'Excursiones y actividades',
      link: '/tours',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: <Utensils size={32} />,
      title: 'Restaurantes',
      description: 'Gastronomía caribeña',
      link: '/restaurantes',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Car size={32} />,
      title: 'Transporte',
      description: 'Lanchas, taxis y más',
      link: '/transporte',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Island size={32} />,
      title: 'Islas',
      description: 'Guía del archipiélago',
      link: '/islas',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: <Music size={32} />,
      title: 'Bares & Discotecas',
      description: 'Vida nocturna vibrante',
      link: '/bares',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: <Users size={32} />,
      title: 'Guías Turísticos',
      description: 'Expertos locales',
      link: '/guias',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Calendar size={32} />,
      title: 'Eventos',
      description: 'Festivales y actividades',
      link: '/eventos',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Explora Nuestros Servicios
        </h2>
        <p className="text-gray-600 text-lg">
          Todo lo que necesitas para tu aventura en Bocas del Toro
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            className="group"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {service.description}
              </p>
              <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                Explorar →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection
