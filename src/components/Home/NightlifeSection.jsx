import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Music, Star } from 'lucide-react'

// Importar imágenes de vida nocturna
import nightlife1 from '../../assets/images/nightlife/nightlife-1.jpg'
import nightlife2 from '../../assets/images/nightlife/nightlife-2.jpg'
import nightlife3 from '../../assets/images/nightlife/nightlife-3.jpg'
import nightlife4 from '../../assets/images/nightlife/nightlife-4.jpg'
import nightlife5 from '../../assets/images/nightlife/nightlife-5.jpg'
import nightlife6 from '../../assets/images/nightlife/nightlife-6.jpg'

const NightlifeSection = () => {
  const featuredVenues = [
    {
      id: 1,
      name: 'Aqua Lounge',
      type: 'Bar Flotante',
      hours: '2PM - 2AM',
      rating: 4.5,
      image: nightlife1,
      special: 'Trampolines acuáticos'
    },
    {
      id: 2,
      name: 'Mondo Taitu',
      type: 'Discoteca',
      hours: '9PM - 4AM',
      rating: 4.3,
      image: nightlife2,
      special: 'DJ en vivo'
    },
    {
      id: 3,
      name: 'La Iguana Bar',
      type: 'Bar Caribeño',
      hours: '5PM - 1AM',
      rating: 4.6,
      image: nightlife3,
      special: 'Música en vivo'
    },
    {
      id: 4,
      name: 'Barco Hundido',
      type: 'Bar Temático',
      hours: '4PM - 12AM',
      rating: 4.4,
      image: nightlife4,
      special: 'Vista al mar'
    },
    {
      id: 5,
      name: 'Selina Rooftop',
      type: 'Bar & Lounge',
      hours: '6PM - 2AM',
      rating: 4.7,
      image: nightlife5,
      special: 'Terraza panorámica'
    },
    {
      id: 6,
      name: 'Bocas Brewery',
      type: 'Cervecería',
      hours: '3PM - 11PM',
      rating: 4.5,
      image: nightlife6,
      special: 'Cervezas artesanales'
    }
  ]

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
