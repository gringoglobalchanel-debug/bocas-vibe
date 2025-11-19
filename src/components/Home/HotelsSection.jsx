import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Star, Phone, Globe } from 'lucide-react'

const HotelsSection = () => {
  const featuredHotels = [
    { 
      id: 1, 
      name: 'Hotel Bocas del Toro', 
      price: 85, 
      rating: 4.2, 
      image: '🏨', 
      location: 'Calle 3, Bocas Town',
      phone: '+507 757-9001',
      website: 'https://hotelbocasdeltoro.com'
    },
    { 
      id: 2, 
      name: 'Selina Bocas del Toro', 
      price: 45, 
      rating: 4.5, 
      image: '🎨', 
      location: 'Calle 1, Bocas Town',
      phone: '+507 757-9002',
      website: 'https://selina.com/bocas-del-toro'
    },
    { 
      id: 3, 
      name: 'Tropical Suites Hotel', 
      price: 95, 
      rating: 4.3, 
      image: '🏝️', 
      location: 'Av. G, Bocas Town',
      phone: '+507 757-9003',
      website: 'https://tropicalsuitesbocas.com'
    }
  ]

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
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-semibold">{hotel.rating}</span>
          </div>
          <div className="text-blue-600 font-bold">${hotel.price}/noche</div>
        </div>
        <div className="flex space-x-2">
          <a href={`tel:${hotel.phone}`} className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center">
            <Phone size={16} className="mr-1" />
            Llamar
          </a>
          <a href={hotel.website} target="_blank" rel="noopener noreferrer" className="flex-1 bg-blue-500 text-white text-center py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center">
            <Globe size={16} className="mr-1" />
            Web
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🏨 Hoteles Recomendados</h2>
        <Link 
          to="/alojamiento" 
          className="text-blue-600 font-semibold hover:underline flex items-center"
        >
          Ver todos los hoteles →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredHotels.map(hotel => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </section>
  )
}

export default HotelsSection
