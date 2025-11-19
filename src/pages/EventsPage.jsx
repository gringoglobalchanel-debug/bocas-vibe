import React, { useState } from 'react'
import { Calendar, MapPin, Clock, Users, Ticket, Music, Star } from 'lucide-react'

const EventsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all') // 'all', 'music', 'cultural', 'sports', 'festival'

  const events = [
    {
      id: 1,
      name: 'Festival del Mar Bocas',
      type: 'Festival',
      category: 'festival',
      date: '2024-11-15',
      time: '10:00 AM - 10:00 PM',
      image: '🎉',
      location: 'Playa Principal, Bocas Town',
      price: 'Gratuito - $30',
      description: 'El festival marítimo más grande de Bocas del Toro con competencias de surf, música en vivo, comida local y exhibiciones culturales.',
      organizer: 'Municipalidad de Bocas del Toro',
      highlights: ['Competencia de surf', 'Música en vivo', 'Gastronomía local', 'Artesanías'],
      attendees: '5000+',
      status: 'upcoming'
    },
    {
      id: 2,
      name: 'Bocas Jazz & Blues Night',
      type: 'Música en Vivo',
      category: 'music',
      date: '2024-11-22',
      time: '7:00 PM - 12:00 AM',
      image: '🎵',
      location: 'La Iguana Bar, Bocas Town',
      price: '$15',
      description: 'Noche especial de jazz y blues con músicos locales e internacionales en un ambiente íntimo y sofisticado.',
      organizer: 'Bocas Music Society',
      highlights: ['Músicos internacionales', 'Ambiente íntimo', 'Cocteles especiales'],
      attendees: '150',
      status: 'upcoming'
    },
    {
      id: 3,
      name: 'Torneo de Pesca Anual',
      type: 'Deportes',
      category: 'sports',
      date: '2024-11-30',
      time: '6:00 AM - 4:00 PM',
      image: '🎣',
      location: 'Muelle Principal & Aguas Abiertas',
      price: '$50 por equipo',
      description: 'Competencia de pesca deportiva con premios en efectivo. Captura y liberación para especies protegidas.',
      organizer: 'Club de Pesca Bocas',
      highlights: ['Premios en efectivo', 'Categorías múltiples', 'Comida para participantes'],
      attendees: '200',
      status: 'upcoming'
    },
    {
      id: 4,
      name: 'Feria Cultural Ngäbe-Buglé',
      type: 'Cultural',
      category: 'cultural',
      date: '2024-12-05',
      time: '9:00 AM - 6:00 PM',
      image: '🏛️',
      location: 'Parque Central, Bocas Town',
      price: 'Gratuito',
      description: 'Celebración de la cultura indígena Ngäbe-Buglé con danzas tradicionales, artesanías, comida y música autóctona.',
      organizer: 'Comunidad Ngäbe-Buglé',
      highlights: ['Danzas tradicionales', 'Artesanías', 'Comida autóctona', 'Talleres culturales'],
      attendees: '1000+',
      status: 'upcoming'
    },
    {
      id: 5,
      name: 'Full Moon Party',
      type: 'Fiesta',
      category: 'music',
      date: '2024-11-25',
      time: '8:00 PM - 4:00 AM',
      image: '🌕',
      location: 'Aqua Lounge, Isla Carenero',
      price: '$10',
      description: 'La famosa fiesta de luna llena en el bar flotante con DJs internacionales, luces y ambiente festivo único.',
      organizer: 'Aqua Lounge',
      highlights: ['DJs internacionales', 'Bar flotante', 'Temática lunar', 'Fuegos artificiales'],
      attendees: '300+',
      status: 'upcoming'
    },
    {
      id: 6,
      name: 'Regata de Lanchas Tradicionales',
      type: 'Deportes',
      category: 'sports',
      date: '2024-12-10',
      time: '2:00 PM - 5:00 PM',
      image: '⛵',
      location: 'Bahía de Bocas del Toro',
      price: 'Gratuito para espectadores',
      description: 'Competencia de lanchas tradicionales decoradas, celebrando la herencia marítima de la región.',
      organizer: 'Asociación de Lancheros',
      highlights: ['Lanchas decoradas', 'Premios tradicionales', 'Música y comida'],
      attendees: '800+',
      status: 'upcoming'
    },
    {
      id: 7,
      name: 'Noche de Comedia Internacional',
      type: 'Entretenimiento',
      category: 'cultural',
      date: '2024-11-28',
      time: '8:00 PM - 10:00 PM',
      image: '🎭',
      location: 'Selina Hostel, Bocas Town',
      price: '$12',
      description: 'Show de comedia stand-up con comediantes internacionales en inglés y español.',
      organizer: 'Bocas Comedy Club',
      highlights: ['Comediantes internacionales', 'Show bilingüe', 'Bar temático'],
      attendees: '120',
      status: 'upcoming'
    },
    {
      id: 8,
      name: 'Mercado Navideño Bocas',
      type: 'Festival',
      category: 'festival',
      date: '2024-12-15',
      time: '10:00 AM - 8:00 PM',
      image: '🎄',
      location: 'Calles principales, Bocas Town',
      price: 'Gratuito',
      description: 'Mercado navideño con artesanías locales, comida tradicional, villancicos y actividades para niños.',
      organizer: 'Cámara de Turismo',
      highlights: ['Artesanías navideñas', 'Comida tradicional', 'Actividades infantiles', 'Villancicos'],
      attendees: '2000+',
      status: 'upcoming'
    }
  ]

  const getFilteredEvents = () => {
    if (activeFilter === 'all') return events
    return events.filter(event => event.category === activeFilter)
  }

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('es-ES', options)
  }

  const EventCard = ({ event }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-5xl">
        {event.image}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{event.name}</h2>
            <p className="text-gray-600 text-sm">{event.type}</p>
          </div>
          <div className="text-right">
            <div className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">
              Próximo
            </div>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Calendar size={14} className="mr-1" />
          {formatDate(event.date)}
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <Clock size={14} className="mr-1" />
          {event.time}
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin size={14} className="mr-1" />
          {event.location}
        </div>

        <p className="text-gray-600 mb-4 text-sm">{event.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm">Organizado por:</h4>
          <p className="text-gray-600 text-sm">{event.organizer}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm">Destacado:</h4>
          <div className="flex flex-wrap gap-1">
            {event.highlights.map((highlight, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-700">
            <Ticket size={14} className="mr-1" />
            <span className="text-sm">{event.price}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Users size={14} className="mr-1" />
            {event.attendees}
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 bg-orange-500 text-white text-center py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center text-sm">
            <Calendar size={14} className="mr-1" />
            Agendar
          </button>
          <button className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-sm">
            <Ticket size={14} className="mr-1" />
            Más Info
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">🎉 Eventos en Bocas del Toro</h1>
      <p className="text-gray-600 mb-6">Descubre los eventos más emocionantes del archipiélago</p>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold mb-4 text-gray-800">Filtrar eventos</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'all' 
                ? 'bg-orange-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🌟 Todos
          </button>
          <button
            onClick={() => setActiveFilter('music')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'music' 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🎵 Música
          </button>
          <button
            onClick={() => setActiveFilter('cultural')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'cultural' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🏛️ Cultural
          </button>
          <button
            onClick={() => setActiveFilter('sports')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'sports' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            ⚽ Deportes
          </button>
          <button
            onClick={() => setActiveFilter('festival')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'festival' 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🎉 Festivales
          </button>
        </div>
      </div>

      {/* Calendario destacado */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-orange-800">📅 Próximos Eventos Destacados</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-orange-600">15 NOV</div>
            <div className="font-semibold">Festival del Mar</div>
            <div className="text-gray-600 text-xs">Playa Principal</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-orange-600">25 NOV</div>
            <div className="font-semibold">Full Moon Party</div>
            <div className="text-gray-600 text-xs">Aqua Lounge</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="font-bold text-orange-600">15 DIC</div>
            <div className="font-semibold">Mercado Navideño</div>
            <div className="text-gray-600 text-xs">Bocas Town</div>
          </div>
        </div>
      </div>

      {/* Lista de eventos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredEvents().map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>

      {/* Información de tickets */}
      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-blue-800">🎟️ Información de Tickets</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Donde comprar:</h4>
            <ul className="text-blue-600 space-y-1">
              <li>• En la puerta del evento</li>
              <li>• Oficinas de turismo en Bocas Town</li>
              <li>• Sitios web oficiales de los organizadores</li>
              <li>• Hoteles y hostales asociados</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Recomendaciones:</h4>
            <ul className="text-blue-600 space-y-1">
              <li>• Compra con anticipación para eventos populares</li>
              <li>• Lleva identificación</li>
              <li>• Verifica políticas de reembolso</li>
              <li>• Confirma horarios y ubicaciones</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventsPage
