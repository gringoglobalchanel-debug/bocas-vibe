import React, { useState } from 'react'
import { Phone, MapPin, Clock, Music, Users, DollarSign, Star } from 'lucide-react'

const NightlifePage = () => {
  const [activeFilter, setActiveFilter] = useState('all') // 'all', 'bar', 'club', 'lounge'

  const nightlifeVenues = [
    {
      id: 1,
      name: 'Aqua Lounge',
      type: 'Bar & Discoteca',
      price: '$$',
      rating: 4.5,
      image: '🏝️',
      location: 'Isla Carenero, frente a Bocas Town',
      phone: '+507 757-9401',
      hours: '2:00 PM - 2:00 AM',
      description: 'El bar flotante más famoso de Bocas con trampolines, música en vivo y ambiente festivo sobre el agua.',
      atmosphere: 'Festivo • Internacional • Juvenil',
      music: 'Reggae, EDM, Top 40',
      specials: ['Happy Hour 4PM-6PM', 'Noche de Reggae los Viernes', 'Trampolines acuáticos'],
      features: ['Bar flotante', 'Trampolines', 'Música en vivo', 'Zona de baile']
    },
    {
      id: 2,
      name: 'Mondo Taitu',
      type: 'Discoteca',
      price: '$$',
      rating: 4.3,
      image: '💃',
      location: 'Calle 3, Bocas Town',
      phone: '+507 757-9402',
      hours: '9:00 PM - 4:00 AM',
      description: 'La discoteca más emblemática de Bocas con temáticas cambiantes, luces láser y pista de baile amplia.',
      atmosphere: 'Energético • Alternativo • Internacional',
      music: 'Electrónica, Reggaeton, Hip Hop',
      specials: ['Noche de DJ los Sábados', 'Entrada gratuita antes de las 11PM'],
      features: ['Pista de baile', 'Bar completo', 'Terraza', 'Eventos temáticos']
    },
    {
      id: 3,
      name: 'La Iguana Bar',
      type: 'Bar',
      price: '$$',
      rating: 4.6,
      image: '🦎',
      location: 'Calle 1, Bocas Town',
      phone: '+507 757-9403',
      hours: '5:00 PM - 1:00 AM',
      description: 'Bar acogedor con decoración rústica, excelentes cocteles y música caribeña en vivo.',
      atmosphere: 'Relajado • Caribeño • Local',
      music: 'Salsa, Reggae, Música local',
      specials: ['Cocteles 2x1 los Jueves', 'Música en vivo los Viernes'],
      features: ['Terraza exterior', 'Música en vivo', 'Cocteles artesanales']
    },
    {
      id: 4,
      name: 'Bibi\'s Beach Bar',
      type: 'Bar en la Playa',
      price: '$$$',
      rating: 4.7,
      image: '🏖️',
      location: 'Playa Bluff, Isla Colón',
      phone: '+507 757-9404',
      hours: '11:00 AM - 10:00 PM',
      description: 'Bar boutique frente al mar con ambiente sofisticado, cocteles premium y atardeceres espectaculares.',
      atmosphere: 'Romántico • Sofisticado • Tranquilo',
      music: 'Jazz, Lounge, World Music',
      specials: ['Sundown Sessions', 'Cocteles premium', 'Mariscos frescos'],
      features: ['Vista al mar', 'Comida gourmet', 'Ambiente romántico']
    },
    {
      id: 5,
      name: 'Selina Bar',
      type: 'Bar & Lounge',
      price: '$$',
      rating: 4.4,
      image: '🎨',
      location: 'Selina Hostel, Bocas Town',
      phone: '+507 757-9405',
      hours: '4:00 PM - 12:00 AM',
      description: 'Bar social en el hostal Selina con ambiente bohemio, eventos culturales y comunidad internacional.',
      atmosphere: 'Bohemio • Social • Internacional',
      music: 'Indie, Alternative, Electronic',
      specials: ['Noche de Karaoke los Miércoles', 'Open Mic los Domingos'],
      features: ['Zona de coworking', 'Eventos sociales', 'Comunidad viajera']
    },
    {
      id: 6,
      name: 'El Pirata Bar',
      type: 'Bar Temático',
      price: '$$',
      rating: 4.2,
      image: '🏴‍☠️',
      location: 'Isla Carenero',
      phone: '+507 757-9406',
      hours: '3:00 PM - 12:00 AM',
      description: 'Bar pirata con decoración náutica, juegos de mesa y ambiente desenfadado perfecto para conocer gente.',
      atmosphere: 'Divertido • Temático • Social',
      music: 'Rock, Pop, Classics',
      specials: ['Juegos de mesa', 'Noche de trivia', 'Cocteles temáticos'],
      features: ['Decoración pirata', 'Juegos de mesa', 'Terraza']
    }
  ]

  const getFilteredVenues = () => {
    if (activeFilter === 'all') return nightlifeVenues
    return nightlifeVenues.filter(venue => 
      venue.type.toLowerCase().includes(activeFilter)
    )
  }

  const NightlifeCard = ({ venue }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-5xl">
        {venue.image}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{venue.name}</h2>
            <p className="text-gray-600 text-sm">{venue.type}</p>
          </div>
          <div className="flex items-center">
            <Star size={16} className="text-yellow-400 mr-1" />
            <span className="font-semibold">{venue.rating}</span>
          </div>
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-2">
          <MapPin size={14} className="mr-1" />
          {venue.location}
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock size={14} className="mr-1" />
          {venue.hours}
        </div>

        <p className="text-gray-600 mb-4 text-sm">{venue.description}</p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-sm">
            <Music size={14} className="mr-2" />
            Ambiente: <span className="font-normal ml-1 text-gray-600">{venue.atmosphere}</span>
          </h3>
          <p className="text-gray-600 text-sm mb-2">Música: {venue.music}</p>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm">Especiales:</h4>
          <div className="flex flex-wrap gap-1 mb-2">
            {venue.specials.map((special, index) => (
              <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                {special}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-700 mb-2 text-sm">Características:</h4>
          <div className="flex flex-wrap gap-1">
            {venue.features.map((feature, index) => (
              <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-gray-700">
            <DollarSign size={16} className="mr-1" />
            <span>{venue.price}</span>
          </div>
        </div>

        <div className="flex space-x-2">
          <a href={`tel:${venue.phone}`} className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center text-sm">
            <Phone size={14} className="mr-1" />
            Llamar
          </a>
          <a href={`https://wa.me/${venue.phone.replace('+', '')}?text=Hola, me interesa visitar: ${venue.name}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex-1 bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600 transition-colors flex items-center justify-center text-sm">
            <Users size={14} className="mr-1" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">🍸 Bares & Discotecas</h1>
      <p className="text-gray-600 mb-6">Vive la vibrante vida nocturna de Bocas del Toro</p>

      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold mb-4 text-gray-800">Filtrar por tipo</h3>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'all' 
                ? 'bg-purple-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🌟 Todos
          </button>
          <button
            onClick={() => setActiveFilter('bar')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'bar' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🍹 Bares
          </button>
          <button
            onClick={() => setActiveFilter('discoteca')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'discoteca' 
                ? 'bg-red-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            💃 Discotecas
          </button>
          <button
            onClick={() => setActiveFilter('lounge')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeFilter === 'lounge' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🎵 Lounges
          </button>
        </div>
      </div>

      {/* Información general */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
        <h3 className="text-xl font-bold mb-4 text-purple-800">🎉 Tips de Vida Nocturna</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">Horarios típicos:</h4>
            <ul className="text-purple-600 space-y-1">
              <li>• <strong>Bares:</strong> 4:00 PM - 1:00 AM</li>
              <li>• <strong>Discotecas:</strong> 9:00 PM - 4:00 AM</li>
              <li>• <strong>Happy Hours:</strong> 4:00 PM - 6:00 PM</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-purple-700 mb-2">Recomendaciones:</h4>
            <ul className="text-purple-600 space-y-1">
              <li>• Lleva efectivo para algunos lugares</li>
              <li>• Transporte seguro de regreso al hotel</li>
              <li>• Verifica horarios de lanchas nocturnas</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Lista de lugares */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getFilteredVenues().map(venue => (
          <NightlifeCard key={venue.id} venue={venue} />
        ))}
      </div>

      {/* Información de seguridad */}
      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-800">🛡️ Seguridad Nocturna</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Transporte seguro:</strong> Usa taxis oficiales o servicios de ride-sharing</li>
            <li>• <strong>Grupos:</strong> Siempre mejor en compañía</li>
            <li>• <strong>Documentos:</strong> Lleva identificación</li>
          </ul>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Bebidas:</strong> Mantén tu bebida a la vista</li>
            <li>• <strong>Emergencias:</strong> Guarda números de emergencia</li>
            <li>• <strong>Hotel:</strong> Ten la dirección de tu alojamiento</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NightlifePage
