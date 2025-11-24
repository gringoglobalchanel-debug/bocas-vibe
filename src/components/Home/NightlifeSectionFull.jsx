import React, { useState } from 'react'
import { Clock, Music, Star } from 'lucide-react'

// Importar imágenes
import nightlife1 from '../../assets/images/nightlife/nightlife-1.jpg'
import nightlife2 from '../../assets/images/nightlife/nightlife-2.jpg'
import nightlife3 from '../../assets/images/nightlife/nightlife-3.jpg'
import nightlife4 from '../../assets/images/nightlife/nightlife-4.jpg'
import nightlife5 from '../../assets/images/nightlife/nightlife-5.jpg'
import nightlife6 from '../../assets/images/nightlife/nightlife-6.jpg'

const NightlifeSectionFull = () => {
  const [filters, setFilters] = useState({
    type: '',
    music: '',
    price: ''
  })

  const allVenues = [
    {
      id: 1,
      name: 'Aqua Lounge',
      type: 'Bar Flotante',
      category: 'Bar',
      hours: '2PM - 2AM',
      rating: 4.5,
      image: nightlife1,
      special: 'Trampolines acuáticos',
      musicType: 'Reggae',
      priceRange: 'medio',
      location: 'Bocas Town'
    },
    {
      id: 2,
      name: 'Mondo Taitu',
      type: 'Discoteca',
      category: 'Discoteca',
      hours: '9PM - 4AM',
      rating: 4.3,
      image: nightlife2,
      special: 'DJ en vivo',
      musicType: 'Electrónica',
      priceRange: 'medio',
      location: 'Bocas Town'
    },
    {
      id: 3,
      name: 'La Iguana Bar',
      type: 'Bar Caribeño',
      category: 'Bar',
      hours: '5PM - 1AM',
      rating: 4.6,
      image: nightlife3,
      special: 'Música en vivo',
      musicType: 'Reggae',
      priceRange: 'bajo',
      location: 'Bocas Town'
    },
    {
      id: 4,
      name: 'Barco Hundido',
      type: 'Bar Temático',
      category: 'Bar',
      hours: '4PM - 12AM',
      rating: 4.4,
      image: nightlife4,
      special: 'Vista al mar',
      musicType: 'Tropical',
      priceRange: 'bajo',
      location: 'Bocas Town'
    },
    {
      id: 5,
      name: 'Selina Rooftop',
      type: 'Bar & Lounge',
      category: 'Lounge',
      hours: '6PM - 2AM',
      rating: 4.7,
      image: nightlife5,
      special: 'Terraza panorámica',
      musicType: 'Variado',
      priceRange: 'medio',
      location: 'Bocas Town'
    },
    {
      id: 6,
      name: 'Toro Loco',
      type: 'Bar de Playa',
      category: 'Bar',
      hours: '12PM - 11PM',
      rating: 4.5,
      image: nightlife6,
      special: 'Tragos tropicales',
      musicType: 'Tropical',
      priceRange: 'medio',
      location: 'Bocas Town'
    }
  ]

  // Aplicar filtros
  const filteredVenues = allVenues.filter(venue => {
    if (filters.type && venue.category !== filters.type) return false
    if (filters.music && venue.musicType !== filters.music) return false
    if (filters.price && venue.priceRange !== filters.price) return false
    return true
  })

  const NightlifeCard = ({ venue }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={venue.image} 
          alt={venue.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{venue.name}</h3>
            <p className="text-gray-600 text-sm">{venue.type}</p>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-semibold">{venue.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Clock size={14} className="mr-1" />
          {venue.hours}
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Music size={14} className="mr-1" />
          {venue.special}
        </div>
        <button className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors text-sm">
          Ver detalles
        </button>
      </div>
    </div>
  )

  return (
    <div>
      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold mb-4 text-gray-800">Filtrar vida nocturna</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.type}
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="">Todos los tipos</option>
            <option value="Bar">Bar</option>
            <option value="Discoteca">Discoteca</option>
            <option value="Lounge">Lounge</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.music}
            onChange={(e) => setFilters({...filters, music: e.target.value})}
          >
            <option value="">Todos los estilos</option>
            <option value="Reggae">Reggae</option>
            <option value="Electrónica">Electrónica</option>
            <option value="Tropical">Tropical</option>
            <option value="Variado">Variado</option>
          </select>
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.price}
            onChange={(e) => setFilters({...filters, price: e.target.value})}
          >
            <option value="">Todos los precios</option>
            <option value="bajo">$ Económico</option>
            <option value="medio">$$ Moderado</option>
            <option value="alto">$$$ Alto</option>
          </select>
        </div>
        
        {filters.type || filters.music || filters.price ? (
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando {filteredVenues.length} de {allVenues.length} lugares
            </p>
            <button 
              onClick={() => setFilters({type: '', music: '', price: ''})}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Limpiar filtros
            </button>
          </div>
        ) : null}
      </div>

      {/* Lista de lugares */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVenues.map(venue => (
          <NightlifeCard key={venue.id} venue={venue} />
        ))}
      </div>

      {filteredVenues.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No se encontraron lugares con estos filtros</p>
          <button 
            onClick={() => setFilters({type: '', music: '', price: ''})}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Ver todos los lugares
          </button>
        </div>
      )}
    </div>
  )
}

export default NightlifeSectionFull
