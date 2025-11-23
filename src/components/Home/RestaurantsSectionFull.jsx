import React, { useState } from 'react'
import { Star, Phone, MapPin, Utensils, Clock, DollarSign } from 'lucide-react'

// Importar imágenes
import restaurant1 from '../../assets/images/restaurants/restaurant-1.jpg'
import restaurant2 from '../../assets/images/restaurants/restaurant-2.jpg'
import restaurant3 from '../../assets/images/restaurants/restaurant-3.jpg'
import restaurant4 from '../../assets/images/restaurants/restaurant-4.jpg'
import restaurant5 from '../../assets/images/restaurants/restaurant-5.jpg'
import restaurant6 from '../../assets/images/restaurants/restaurant-6.jpg'

const RestaurantsSectionFull = () => {
  const [filters, setFilters] = useState({
    cuisine: '',
    price: '',
    location: ''
  })

  const allRestaurants = [
    { 
      id: 1, 
      name: 'El Ultimo Refugio', 
      cuisine: 'Mariscos & Caribeña', 
      price: '$$', 
      rating: 4.6, 
      image: restaurant1,
      location: 'Calle 1, Bocas Town',
      area: 'Bocas Town',
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
      image: restaurant2,
      location: 'Playa Bluff, Isla Colón',
      area: 'Playa Bluff',
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
      image: restaurant3,
      location: 'Calle 3, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9103',
      hours: '6:00 PM - 11:00 PM',
      speciality: 'Cena con vista al mar',
      description: 'Ambiente romántico con cocina internacional y vista al océano'
    },
    { 
      id: 4, 
      name: 'Raw Fusion', 
      cuisine: 'Sushi & Asiática', 
      price: '$$', 
      rating: 4.5, 
      image: restaurant4,
      location: 'Calle 5, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9104',
      hours: '5:00 PM - 10:30 PM',
      speciality: 'Rolls tropicales',
      description: 'Fusión asiática con ingredientes del Caribe'
    },
    { 
      id: 5, 
      name: 'Lili\'s Café', 
      cuisine: 'Desayunos & Café', 
      price: '$', 
      rating: 4.4, 
      image: restaurant5,
      location: 'Av. G, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9105',
      hours: '6:30 AM - 3:00 PM',
      speciality: 'Pancakes de coco',
      description: 'Desayunos frescos y café de especialidad'
    },
    { 
      id: 6, 
      name: 'Up in the Hill', 
      cuisine: 'Orgánica & Vegana', 
      price: '$$', 
      rating: 4.9, 
      image: restaurant6,
      location: 'Big Creek, Isla Colón',
      area: 'Big Creek',
      phone: '+507 757-9106',
      hours: '12:00 PM - 9:00 PM',
      speciality: 'Cocina de la granja',
      description: 'Cocina orgánica con productos de la finca'
    }
  ]

  // Aplicar filtros
  const filteredRestaurants = allRestaurants.filter(restaurant => {
    if (filters.cuisine && !restaurant.cuisine.includes(filters.cuisine)) return false
    if (filters.price && restaurant.price !== filters.price) return false
    if (filters.location && restaurant.area !== filters.location) return false
    return true
  })

  const RestaurantCard = ({ restaurant }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
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
    <div>
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
            <option value="Asiática">Asiática</option>
            <option value="Vegana">Vegana</option>
            <option value="Café">Café</option>
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
            <option value="Big Creek">Big Creek</option>
          </select>
        </div>
        
        {filters.cuisine || filters.price || filters.location ? (
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando {filteredRestaurants.length} de {allRestaurants.length} restaurantes
            </p>
            <button 
              onClick={() => setFilters({cuisine: '', price: '', location: ''})}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Limpiar filtros
            </button>
          </div>
        ) : null}
      </div>

      {/* Lista de restaurantes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRestaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      {filteredRestaurants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No se encontraron restaurantes con estos filtros</p>
          <button 
            onClick={() => setFilters({cuisine: '', price: '', location: ''})}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Ver todos los restaurantes
          </button>
        </div>
      )}
    </div>
  )
}

export default RestaurantsSectionFull
