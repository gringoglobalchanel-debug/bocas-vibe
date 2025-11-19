import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Star, Phone, Users } from 'lucide-react'

const ToursSection = () => {
  const popularTours = [
    { 
      id: 1, 
      name: 'Tour Islas Zapatillas', 
      price: 35, 
      duration: '5 horas', 
      image: '🏝️', 
      category: 'Parque Nacional',
      operator: 'Bocas Sailing Tours',
      phone: '+507 6789-1234',
      includes: 'Snorkel, almuerzo, guía'
    },
    { 
      id: 2, 
      name: 'Snorkeling en Coral Cay', 
      price: 25, 
      duration: '3 horas', 
      image: '🤿', 
      category: 'Buceo',
      operator: 'Bocas Water Sports',
      phone: '+507 6789-5678',
      includes: 'Equipo snorkel, guía'
    },
    { 
      id: 3, 
      name: 'Tour Bioluminiscencia', 
      price: 40, 
      duration: '2 horas', 
      image: '✨', 
      category: 'Nocturno',
      operator: 'Bocas Night Tours',
      phone: '+507 6789-9012',
      includes: 'Lancha, guía especializado'
    },
    { 
      id: 4, 
      name: 'Dolphin Bay + Starfish Beach', 
      price: 30, 
      duration: '4 horas', 
      image: '🐬', 
      category: 'Naturaleza',
      operator: 'Bocas Eco Tours',
      phone: '+507 6789-3456',
      includes: 'Avistamiento, snorkel, frutas'
    }
  ]

  const TourCard = ({ tour }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all tour-card">
      <div className="h-32 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-5xl">
        {tour.image}
      </div>
      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">{tour.category}</span>
        <h3 className="font-bold mt-2 mb-1 text-gray-800">{tour.name}</h3>
        <p className="text-sm text-gray-600 mb-2">por {tour.operator}</p>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Clock size={14} className="mr-1" />
          {tour.duration} • <Users size={14} className="ml-2 mr-1" /> {tour.includes}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-blue-600 font-bold">${tour.price}/persona</div>
          <a href={`https://wa.me/${tour.phone.replace('+', '')}?text=Hola, me interesa el tour: ${tour.name}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors flex items-center">
            <Phone size={14} className="mr-1" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🌴 Tours Populares</h2>
        <Link 
          to="/tours" 
          className="text-blue-600 font-semibold hover:underline flex items-center"
        >
          Ver todos los tours →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {popularTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  )
}

export default ToursSection
