import React, { useState } from 'react'
import { MapPin, Star, Phone, Globe, Wifi, Car, Coffee, Snowflake } from 'lucide-react'

const HotelsPage = () => {
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    type: '',
    rating: ''
  })

  const hotels = [
    { 
      id: 1, 
      name: 'Hotel Bocas del Toro', 
      price: 85, 
      rating: 4.2, 
      image: '🏨', 
      location: 'Calle 3, Bocas Town',
      phone: '+507 757-9001',
      website: 'https://hotelbocasdeltoro.com',
      description: 'Hotel céntrico con vistas al mar y comodidades modernas',
      amenities: ['wifi', 'breakfast', 'ac', 'parking'],
      type: 'hotel'
    },
    { 
      id: 2, 
      name: 'Selina Bocas del Toro', 
      price: 45, 
      rating: 4.5, 
      image: '🎨', 
      location: 'Calle 1, Bocas Town',
      phone: '+507 757-9002',
      website: 'https://selina.com/bocas-del-toro',
      description: 'Hostal con ambiente social, ideal para mochileros',
      amenities: ['wifi', 'co-working', 'bar', 'activities'],
      type: 'hostal'
    },
    { 
      id: 3, 
      name: 'Tropical Suites Hotel', 
      price: 95, 
      rating: 4.3, 
      image: '🏝️', 
      location: 'Av. G, Bocas Town',
      phone: '+507 757-9003',
      website: 'https://tropicalsuitesbocas.com',
      description: 'Suites espaciosas con balcón y vista al océano',
      amenities: ['wifi', 'breakfast', 'ac', 'pool'],
      type: 'hotel'
    },
    { 
      id: 4, 
      name: 'Bocas Beach Resort', 
      price: 120, 
      rating: 4.7, 
      image: '🏖️', 
      location: 'Playa Bluff, Isla Colón',
      phone: '+507 757-9004',
      website: 'https://bocasbeachresort.com',
      description: 'Resort de lujo frente a la playa con todos los servicios',
      amenities: ['wifi', 'breakfast', 'ac', 'pool', 'spa', 'restaurant'],
      type: 'resort'
    },
    { 
      id: 5, 
      name: 'Carenero Bungalows', 
      price: 65, 
      rating: 4.4, 
      image: '🏡', 
      location: 'Isla Carenero',
      phone: '+507 757-9005',
      website: 'https://carenerobungalows.com',
      description: 'Bungalows rústicos frente al mar, perfectos para desconectar',
      amenities: ['wifi', 'breakfast', 'fan'],
      type: 'bungalow'
    },
    { 
      id: 6, 
      name: 'Bastimentos Eco Lodge', 
      price: 75, 
      rating: 4.6, 
      image: '🌴', 
      location: 'Isla Bastimentos',
      phone: '+507 757-9006',
      website: 'https://bastimentosecolodge.com',
      description: 'Alojamiento ecológico en medio de la naturaleza virgen',
      amenities: ['wifi', 'breakfast', 'fan', 'tours'],
      type: 'eco-lodge'
    }
  ]

  const getAmenityIcon = (amenity) => {
    switch(amenity) {
      case 'wifi': return <Wifi size={16} />
      case 'breakfast': return <Coffee size={16} />
      case 'ac': return <Snowflake size={16} />
      case 'parking': return <Car size={16} />
      default: return null
    }
  }

  const HotelCard = ({ hotel }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hotel-card">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-300 flex items-center justify-center text-6xl">
        {hotel.image}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{hotel.name}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={14} className="mr-1" />
          {hotel.location}
        </div>
        <p className="text-gray-600 text-sm mb-3">{hotel.description}</p>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {hotel.amenities.map((amenity, index) => (
            <span key={index} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
              {getAmenityIcon(amenity)}
              <span className="ml-1">{amenity}</span>
            </span>
          ))}
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-semibold">{hotel.rating}</span>
          </div>
          <div className="text-blue-600 font-bold">${hotel.price}/noche</div>
        </div>
        
        <div className="flex space-x-2">
          <a href={`tel:${hotel.phone}`} className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center text-sm">
            <Phone size={16} className="mr-1" />
            Llamar
          </a>
          <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-sm">
            <Globe size={16} className="mr-1" />
            Web
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">🏨 Alojamiento en Bocas del Toro</h1>
      <p className="text-gray-600 mb-6">Encuentra el lugar perfecto para tu estadía</p>
      
      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold mb-4 text-gray-800">Filtrar alojamientos</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
          >
            <option value="">Todas las ubicaciones</option>
            <option value="Bocas Town">Bocas Town</option>
            <option value="Playa Bluff">Playa Bluff</option>
            <option value="Isla Carenero">Isla Carenero</option>
            <option value="Isla Bastimentos">Isla Bastimentos</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.type}
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="">Todos los tipos</option>
            <option value="hotel">Hotel</option>
            <option value="hostal">Hostal</option>
            <option value="resort">Resort</option>
            <option value="bungalow">Bungalow</option>
            <option value="eco-lodge">Eco-Lodge</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.price}
            onChange={(e) => setFilters({...filters, price: e.target.value})}
          >
            <option value="">Todos los precios</option>
            <option value="0-50">$0 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100+">$100+</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.rating}
            onChange={(e) => setFilters({...filters, rating: e.target.value})}
          >
            <option value="">Todas las puntuaciones</option>
            <option value="4.5">4.5+ ⭐</option>
            <option value="4.0">4.0+ ⭐</option>
            <option value="3.5">3.5+ ⭐</option>
          </select>
        </div>
      </div>

      {/* Lista de hoteles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  )
}

export default HotelsPage
