import React, { useState } from 'react'
import { Clock, Star, Phone, Users, MapPin } from 'lucide-react'

const ToursPage = () => {
  const [filters, setFilters] = useState({
    category: '',
    duration: '',
    price: ''
  })

  const tours = [
    { 
      id: 1, 
      name: 'Tour Islas Zapatillas', 
      price: 35, 
      duration: '5 horas', 
      image: '🏝️', 
      category: 'Parque Nacional',
      operator: 'Bocas Sailing Tours',
      phone: '+507 6789-1234',
      includes: 'Snorkel, almuerzo, guía',
      description: 'Explora las paradisíacas Islas Zapatillas en el Parque Nacional Marino',
      rating: 4.8,
      meeting: 'Muelle Principal, 8:00 AM'
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
      includes: 'Equipo snorkel, guía, frutas',
      description: 'Descubre el mundo submarino en los mejores arrecifes de coral',
      rating: 4.9,
      meeting: 'Muelle Sur, 9:00 AM y 2:00 PM'
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
      includes: 'Lancha, guía especializado',
      description: 'Experiencia mágica nadando en aguas que brillan en la oscuridad',
      rating: 4.7,
      meeting: 'Muelle Principal, 7:00 PM'
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
      includes: 'Avistamiento, snorkel, frutas',
      description: 'Avistamiento de delfines y visita a la famosa Playa de las Estrellas',
      rating: 4.8,
      meeting: 'Muelle Norte, 8:30 AM'
    },
    { 
      id: 5, 
      name: 'Tour de Surf en Playa Bluff', 
      price: 45, 
      duration: '4 horas', 
      image: '🏄', 
      category: 'Surf',
      operator: 'Bocas Surf School',
      phone: '+507 6789-7890',
      includes: 'Tabla, instructor, transporte',
      description: 'Aprende a surfar en las mejores olas del Caribe panameño',
      rating: 4.6,
      meeting: 'Playa Bluff, 7:00 AM'
    },
    { 
      id: 6, 
      name: 'Tour Cultural Ngäbe', 
      price: 50, 
      duration: '6 horas', 
      image: '🏛️', 
      category: 'Cultura',
      operator: 'Bocas Cultural Tours',
      phone: '+507 6789-2345',
      includes: 'Guía local, comida tradicional, artesanías',
      description: 'Inmersión en la cultura indígena Ngäbe-Buglé',
      rating: 4.9,
      meeting: 'Muelle Principal, 7:30 AM'
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
        
        <p className="text-sm text-gray-700 mb-3">{tour.description}</p>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <Clock size={14} className="mr-1" />
          {tour.duration}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <Users size={14} className="mr-1" />
          {tour.includes}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={14} className="mr-1" />
          {tour.meeting}
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-semibold">{tour.rating}</span>
          </div>
          <div className="text-blue-600 font-bold">${tour.price}/persona</div>
        </div>
        
        <a href={`https://wa.me/${tour.phone.replace('+', '')}?text=Hola, me interesa el tour: ${tour.name}`} 
           target="_blank" 
           rel="noopener noreferrer"
           className="mt-3 w-full bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center text-sm">
          <Phone size={14} className="mr-1" />
          Reservar por WhatsApp
        </a>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">🌊 Tours & Experiencias</h1>
      <p className="text-gray-600 mb-6">Vive aventuras inolvidables en el paraíso caribeño</p>
      
      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold mb-4 text-gray-800">Filtrar tours</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.category}
            onChange={(e) => setFilters({...filters, category: e.target.value})}
          >
            <option value="">Todas las categorías</option>
            <option value="Parque Nacional">Parque Nacional</option>
            <option value="Buceo">Buceo & Snorkeling</option>
            <option value="Nocturno">Nocturno</option>
            <option value="Naturaleza">Naturaleza</option>
            <option value="Surf">Surf</option>
            <option value="Cultura">Cultura</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.duration}
            onChange={(e) => setFilters({...filters, duration: e.target.value})}
          >
            <option value="">Todas las duraciones</option>
            <option value="0-3">0-3 horas</option>
            <option value="3-6">3-6 horas</option>
            <option value="6+">6+ horas</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.price}
            onChange={(e) => setFilters({...filters, price: e.target.value})}
          >
            <option value="">Todos los precios</option>
            <option value="0-30">$0 - $30</option>
            <option value="30-50">$30 - $50</option>
            <option value="50+">$50+</option>
          </select>
        </div>
      </div>

      {/* Lista de tours */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  )
}

export default ToursPage
