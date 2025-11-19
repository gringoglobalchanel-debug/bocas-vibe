import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin } from 'lucide-react'

const EventsSection = () => {
  const featuredEvents = [
    {
      id: 1,
      name: 'Festival del Mar',
      date: '15 NOV',
      location: 'Playa Principal',
      image: '🎉',
      type: 'Festival'
    },
    {
      id: 2,
      name: 'Full Moon Party',
      date: '25 NOV',
      location: 'Aqua Lounge',
      image: '🌕',
      type: 'Fiesta'
    },
    {
      id: 3,
      name: 'Mercado Navideño',
      date: '15 DIC',
      location: 'Bocas Town',
      image: '🎄',
      type: 'Mercado'
    }
  ]

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-32 bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center text-5xl">
        {event.image}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg text-gray-800">{event.name}</h3>
          <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            {event.date}
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={14} className="mr-1" />
          {event.location}
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Calendar size={14} className="mr-1" />
          {event.type}
        </div>

        <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm">
          Ver detalles
        </button>
      </div>
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🎉 Eventos Destacados</h2>
        <Link to="/eventos" className="text-blue-600 font-semibold hover:underline flex items-center">
          Ver todos los eventos →
        </Link>
      </div>
      
      <div className="bg-orange-50 rounded-xl p-6 mb-6">
        <p className="text-orange-700 text-center text-sm">
          <strong>📅 Calendario lleno de actividades</strong> • <strong>🎵 Música en vivo</strong> • <strong>🎉 Festivales únicos</strong>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  )
}

export default EventsSection
