import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, MapPin } from 'lucide-react'

// Importar imágenes de islas
import island1 from '../../assets/images/islands/island-1.jpg'
import island2 from '../../assets/images/islands/island-2.jpg'
import island3 from '../../assets/images/islands/island-3.jpg'
import island4 from '../../assets/images/islands/island-4.jpg'
import island5 from '../../assets/images/islands/island-5.jpg'
import island6 from '../../assets/images/islands/island-6.jpg'

const IslandsSection = () => {
  const featuredIslands = [
    {
      id: 1,
      name: 'Isla Colón',
      time: '0 min',
      description: 'El corazón de Bocas con todos los servicios',
      image: island1
    },
    {
      id: 2,
      name: 'Isla Bastimentos',
      time: '15 min',
      description: 'Parque Nacional y playas vírgenes',
      image: island2
    },
    {
      id: 3,
      name: 'Islas Zapatillas',
      time: '45 min',
      description: 'Paraíso virgen con arena blanca',
      image: island3
    },
    {
      id: 4,
      name: 'Isla Carenero',
      time: '5 min',
      description: 'Surf y ambiente relajado',
      image: island4
    },
    {
      id: 5,
      name: 'Isla Solarte',
      time: '20 min',
      description: 'Snorkel en Hospital Point',
      image: island5
    },
    {
      id: 6,
      name: 'Isla Cristóbal',
      time: '25 min',
      description: 'Comunidad indígena y cultura Ngäbe',
      image: island6
    }
  ]

  const IslandCard = ({ island }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={island.image} 
          alt={island.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{island.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Clock size={14} className="mr-1" />
          {island.time} desde Colón
        </div>
        <p className="text-gray-600 text-sm">{island.description}</p>
        <button className="mt-3 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm">
          Explorar isla
        </button>
      </div>
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🏝️ Descubre Nuestras Islas</h2>
        <Link to="/islas" className="text-blue-600 font-semibold hover:underline flex items-center">
          Ver guía completa →
        </Link>
      </div>
      
      <div className="bg-blue-50 rounded-xl p-6 mb-6">
        <p className="text-blue-700 text-center">
          <strong>🗺️ Archipiélago de 9 islas principales</strong> • <strong>🚤 Conectadas por lanchas</strong> • <strong>🌊 Paraíso caribeño</strong>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredIslands.map(island => (
          <IslandCard key={island.id} island={island} />
        ))}
      </div>
    </section>
  )
}

export default IslandsSection
