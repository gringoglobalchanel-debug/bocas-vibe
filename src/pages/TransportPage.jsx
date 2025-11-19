import React, { useState } from 'react'
import { Phone, MapPin, Clock, Users, Car, Ship } from 'lucide-react'

const TransportPage = () => {
  const [activeTab, setActiveTab] = useState('all') // 'all', 'land', 'water'

  const landTransport = [
    { 
      id: 1, 
      name: 'Bocas Taxi Service', 
      type: 'Taxis Locales', 
      price: '$3-10', 
      image: '🚕',
      location: 'Bocas Town, Isla Colón',
      phone: '+507 757-9201',
      hours: '24/7',
      description: 'Servicio de taxi en golf cart por toda Isla Colón',
      vehicle: 'Golf Cart',
      capacity: '4-6 personas'
    },
    { 
      id: 2, 
      name: 'Bocas Bike Rental', 
      type: 'Alquiler de Bicicletas', 
      price: '$8/día', 
      image: '🚲',
      location: 'Calle 2, Bocas Town',
      phone: '+507 757-9202',
      hours: '7:00 AM - 7:00 PM', 
      description: 'Bicicletas para explorar la isla a tu ritmo',
      vehicle: 'Bicicleta',
      capacity: '1 persona'
    },
    { 
      id: 3, 
      name: 'Island Golf Cart Rentals', 
      type: 'Alquiler Golf Carts', 
      price: '$35/día', 
      image: '🛺',
      location: 'Av. H, Bocas Town',
      phone: '+507 757-9203',
      hours: '7:00 AM - 8:00 PM',
      description: 'Golf carts para grupos y familias',
      vehicle: 'Golf Cart',
      capacity: '4-8 personas'
    }
  ]

  const waterTransport = [
    { 
      id: 4, 
      name: 'Bocas Water Taxi Coop', 
      type: 'Lanchas Colectivas', 
      price: '$3-8', 
      image: '🚤',
      location: 'Muelle Principal, Bocas Town',
      phone: '+507 757-9301',
      hours: '6:00 AM - 6:00 PM',
      description: 'Servicio regular entre islas. Rutas: Colón-Bastimentos-Carenero',
      vehicle: 'Lancha rápida',
      capacity: '15-20 personas',
      routes: 'Colón ↔ Bastimentos ↔ Carenero'
    },
    { 
      id: 5, 
      name: 'Private Boat Tours', 
      type: 'Lanchas Privadas', 
      price: '$80-150', 
      image: '⛵',
      location: 'Muelle Sur, Bocas Town',
      phone: '+507 757-9302',
      hours: '6:00 AM - 5:00 PM',
      description: 'Lanchas privadas para grupos hasta 8 personas. Tours personalizados',
      vehicle: 'Lancha privada',
      capacity: '6-8 personas',
      routes: 'Tour personalizado'
    },
    { 
      id: 6, 
      name: 'Island Hopper Express', 
      type: 'Transporte Rápido', 
      price: '$5-12', 
      image: '🚀',
      location: 'Muelle Norte, Bocas Town',
      phone: '+507 757-9303',
      hours: '5:30 AM - 7:00 PM', 
      description: 'Servicio express entre islas principales. Horarios fijos',
      vehicle: 'Lancha express',
      capacity: '12 personas',
      routes: 'Colón ↔ Bastimentos ↔ Solarte'
    }
  ]

  const allTransport = [...landTransport, ...waterTransport]

  const TransportCard = ({ service }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className={`h-32 flex items-center justify-center text-5xl ${
        service.type.includes('Lancha') ? 'bg-gradient-to-br from-blue-400 to-cyan-400' : 'bg-gradient-to-br from-purple-400 to-pink-400'
      }`}>
        {service.image}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.type}</p>
          </div>
          <div className="text-green-600 font-bold text-right">
            <div>{service.price}</div>
            <div className="text-xs text-gray-500">{service.type.includes('Lancha') ? 'por persona' : 'por servicio'}</div>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin size={14} className="mr-1" />
          {service.location}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <Clock size={14} className="mr-1" />
          {service.hours}
        </div>

        <div className="flex items-center text-sm text-gray-600 mb-1">
          <Users size={14} className="mr-1" />
          {service.capacity} • {service.vehicle}
        </div>

        {service.routes && (
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <Ship size={14} className="mr-1" />
            {service.routes}
          </div>
        )}

        <div className="mb-3">
          <p className="text-sm text-gray-700">
            {service.description}
          </p>
        </div>

        <div className="flex space-x-2">
          <a href={`tel:${service.phone}`} className="flex-1 bg-green-500 text-white text-center py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center text-sm">
            <Phone size={14} className="mr-1" />
            Llamar
          </a>
          <a href={`https://wa.me/${service.phone.replace('+', '')}?text=Hola, me interesa el servicio: ${service.name}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-sm">
            {service.type.includes('Lancha') ? <Ship size={14} className="mr-1" /> : <Car size={14} className="mr-1" />}
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )

  const getServicesToShow = () => {
    switch(activeTab) {
      case 'land': return landTransport
      case 'water': return waterTransport
      default: return allTransport
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">🚗 Transporte en Bocas del Toro</h1>
      <p className="text-gray-600 mb-6">Muévete fácilmente por las islas</p>
      
      {/* Tabs de Navegación */}
      <div className="bg-white p-4 rounded-xl shadow-lg mb-8">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'all' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🌟 Todos los Servicios
          </button>
          <button
            onClick={() => setActiveTab('land')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'land' 
                ? 'bg-green-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚗 Transporte Terrestre
          </button>
          <button
            onClick={() => setActiveTab('water')}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeTab === 'water' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            🚤 Transporte Acuático
          </button>
        </div>
      </div>

      {/* Información de Rutas */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
        <h3 className="font-bold text-lg text-blue-800 mb-3">🗺️ Rutas Principales de Lanchas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Ruta Norte:</h4>
            <p className="text-blue-600">Bocas Town → Bastimentos → Carenero → Solarte</p>
            <p className="text-blue-500 text-xs mt-1">Frecuencia: cada 30-45 minutos</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-700 mb-2">Ruta Sur:</h4>
            <p className="text-blue-600">Bocas Town → Isla Colón (playas) → Playa Bluff</p>
            <p className="text-blue-500 text-xs mt-1">Frecuencia: cada 1-2 horas</p>
          </div>
        </div>
      </div>

      {/* Lista de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getServicesToShow().map(service => (
          <TransportCard key={service.id} service={service} />
        ))}
      </div>

      {/* Información adicional */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">💡 Consejos de Transporte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Para Transporte Terrestre:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Los golf carts son la forma principal de transporte en Isla Colón</li>
              <li>• Las bicicletas son ideales para distancias cortas</li>
              <li>• Siempre confirma el precio antes de subir</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Para Transporte Acuático:</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>• Las lanchas colectivas son la opción más económica</li>
              <li>• Las lanchas privadas ofrecen mayor flexibilidad</li>
              <li>• Lleva protector solar y una chaqueta ligera</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransportPage
