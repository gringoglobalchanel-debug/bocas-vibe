import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Music, Star } from 'lucide-react'

const NightlifeSection = () => {
  const featuredVenues = [
    {
      id: 1,
      name: 'Aqua Lounge',
      type: 'Bar Flotante',
      hours: '2PM - 2AM',
      rating: 4.5,
      image: '🏝️',
      special: 'Trampolines acuáticos'
    },
    {
      id: 2,
      name: 'Mondo Taitu',
      type: 'Discoteca',
      hours: '9PM - 4AM',
      rating: 4.3,
      image: '💃',
      special: 'DJ en vivo'
    },
    {
      id: 3,
      name: 'La Iguana Bar',
      type: 'Bar Caribeño',
      hours: '5PM - 1AM',
      rating: 4.6,
      image: '🦎',
      special: 'Música en vivo'
    }
  ]

  const NightlifeCard = ({ venue }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-32 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-5xl">
        {venue.image}
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
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🍸 Bares & Discotecas</h2>
        <Link to="/bares" className="text-blue-600 font-semibold hover:underline flex items-center">
          Ver vida nocturna →
        </Link>
      </div>
      
      <div className="bg-purple-50 rounded-xl p-6 mb-6">
        <p className="text-purple-700 text-center text-sm">
          <strong>🎉 Vida nocturna vibrante</strong> • <strong>🎵 Música en vivo</strong> • <strong>🌊 Bares únicos</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredVenues.map(venue => (
          <NightlifeCard key={venue.id} venue={venue} />
        ))}
      </div>
    </section>
  )
}

export default NightlifeSection
