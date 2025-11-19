import React, { useState } from 'react'
import { Star, Phone, MapPin, Utensils, Clock, DollarSign } from 'lucide-react'

const RestaurantsPage = () => {
  const [filters, setFilters] = useState({
    cuisine: '',
    price: '',
    location: ''
  })

  const restaurants = [
    { 
      id: 1, 
      name: 'El Ultimo Refugio', 
      cuisine: 'Mariscos & Caribeña', 
      price: '$$', 
      rating: 4.6, 
      image: '🦞',
      location: 'Calle 1, Bocas Town',
      phone: '+507 757-9101',
      hours: '7:00 AM - 10:00 PM',
      speciality: 'Langosta a la plancha',
      description: 'Restaurante familiar con los mejores mariscos frescos del Caribe'
    },
    { 
      id: 2, 
      name: 'Bibi\'s on the Beach', 
      cuisine: 'Fusión Caribeña', 
      price: '$$$', 
      rating: 4.8, 
      image: '🏖️',
      location: 'Playa Bluff, Isla Colón',
      phone: '+507 757-9102', 
      hours: '11:00 AM - 9:00 PM',
      speciality: 'Pescado fresco con coco',
      description: 'Experiencia gastronómica única frente al mar en Playa Bluff'
    },
    { 
      id: 3, 
      name: 'Guari Guari', 
      cuisine: 'Internacional', 
      price: '$$$', 
      rating: 4.7, 
      image: '🍽️',
      location: 'Calle 3, Bocas Town',
      phone: '+507 757-9103',
      hours: '6:00 PM - 11:00 PM',
      speciality: 'Cena con vista al mar',
      description: 'Ambiente romántico con cocina internacional y vista al océano'
    },
    { 
      id: 4, 
      name: 'El Pirata', 
      cuisine: 'Mariscos', 
      price: '$$', 
      rating: 4.4, 
      image: '🏴‍☠️',
      location: 'Isla Carenero',
      phone: '+507 757-9104',
      hours: '8:00 AM - 8:00 PM',
      speciality: 'Ceviche mixto',
      description: 'Auténtica comida de mar en ambiente rústico y acogedor'
    },
    { 
      id: 5, 
      name: 'Raw Fusion', 
      cuisine: 'Saludable & Vegana', 
      price: '$$', 
      rating: 4.5, 
      image: '🥗',
      location: 'Calle 2, Bocas Town',
      phone: '+507 757-9105',
      hours: '8:00 AM - 6:00 PM',
      speciality: 'Bowls saludables',
      description: 'Opción saludable con ingredientes frescos y opciones veganas'
    },
    { 
      id: 6, 
      name: 'La Italiana', 
      cuisine: 'Italiana', 
      price: '$$$', 
      rating: 4.3, 
      image: '🍝',
      location: 'Av. G, Bocas Town',
      phone: '+507 757-9106',
      hours: '12:00 PM - 10:00 PM',
      speciality: 'Pasta fresca',
      description: 'Auténtica cocina italiana en el corazón de Bocas Town'
    }
  ]

  const RestaurantCard = ({ restaurant }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-32 bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-5xl">
        {restaurant.image}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{restaurant.name}</h3>
            <p className="text-gray-600 text-sm">{restaurant.cuisine}</p>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-semibold">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin size={14} className="mr-1" />
          {restaurant.location}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock size={14} className="mr-1" />
          {restaurant.hours}
        </div>

        <div className="mb-3">
          <p className="text-sm text-gray-700 mb-2">
            <span className="font-semibold">Especialidad:</span> {restaurant.speciality}
          </p>
          <p className="text-sm text-gray-600">{restaurant.description}</p>
        </div>

        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center text-gray-700">
            <DollarSign size={16} className="mr-1" />
            <span>{restaurant.price}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <a href={`tel:${restaurant.phone}`} className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center text-sm">
            <Phone size={14} className="mr-1" />
            Reservar
          </a>
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-sm">
            <Utensils size={14} className="mr-1" />
            Menú
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">🍽️ Restaurantes en Bocas del Toro</h1>
      <p className="text-gray-600 mb-6">Descubre los sabores del Caribe panameño</p>
      
      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold mb-4 text-gray-800">Filtrar restaurantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.cuisine}
            onChange={(e) => setFilters({...filters, cuisine: e.target.value})}
          >
            <option value="">Todas las cocinas</option>
            <option value="Mariscos">Mariscos</option>
            <option value="Caribeña">Caribeña</option>
            <option value="Internacional">Internacional</option>
            <option value="Italiana">Italiana</option>
            <option value="Saludable">Saludable & Vegana</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.price}
            onChange={(e) => setFilters({...filters, price: e.target.value})}
          >
            <option value="">Todos los precios</option>
            <option value="$">$ Económico</option>
            <option value="$$">$$ Moderado</option>
            <option value="$$$">$$$ Alto</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
          >
            <option value="">Todas las ubicaciones</option>
            <option value="Bocas Town">Bocas Town</option>
            <option value="Playa Bluff">Playa Bluff</option>
            <option value="Isla Carenero">Isla Carenero</option>
          </select>
        </div>
      </div>

      {/* Lista de restaurantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantsPage
