import React from 'react'
import { Link } from 'react-router-dom'
import { Star, Phone, MapPin, Utensils, Clock } from 'lucide-react'

const RestaurantsSection = () => {
  const featuredRestaurants = [
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
      speciality: 'Langosta a la plancha'
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
      speciality: 'Pescado fresco con coco'
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
      speciality: 'Cena con vista al mar'
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
          <p className="text-sm text-gray-700">
            <span className="font-semibold">Especialidad:</span> {restaurant.speciality}
          </p>
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
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🍽️ Restaurantes Destacados</h2>
        <Link 
          to="/restaurantes" 
          className="text-blue-600 font-semibold hover:underline flex items-center"
        >
          Ver todos los restaurantes →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </section>
  )
}

export default RestaurantsSection
