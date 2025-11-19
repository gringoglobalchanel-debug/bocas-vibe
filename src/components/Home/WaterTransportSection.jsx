import React from 'react'
import { Link } from 'react-router-dom'
import { Ship, Phone, MapPin, Clock, Users } from 'lucide-react'

const WaterTransportSection = () => {
  const waterTransportServices = [
    { 
      id: 1, 
      name: 'Bocas Water Taxi Coop', 
      type: 'Lanchas Colectivas', 
      price: '$3-8', 
      image: '🚤',
      location: 'Muelle Principal, Bocas Town',
      phone: '+507 757-9301',
      hours: '6:00 AM - 6:00 PM',
      description: 'Servicio regular entre islas. Rutas: Colón-Bastimentos-Carenero',
      routes: 'Colón ↔ Bastimentos ↔ Carenero'
    },
    { 
      id: 2, 
      name: 'Private Boat Tours', 
      type: 'Lanchas Privadas', 
      price: '$80-150', 
      image: '⛵',
      location: 'Muelle Sur, Bocas Town',
      phone: '+507 757-9302',
      hours: '6:00 AM - 5:00 PM',
      description: 'Lanchas privadas para grupos hasta 8 personas. Tours personalizados',
      routes: 'Tour personalizado'
    },
    { 
      id: 3, 
      name: 'Island Hopper Express', 
      type: 'Transporte Rápido', 
      price: '$5-12', 
      image: '🚀',
      location: 'Muelle Norte, Bocas Town',
      phone: '+507 757-9303',
      hours: '5:30 AM - 7:00 PM', 
      description: 'Servicio express entre islas principales. Horarios fijos',
      routes: 'Colón ↔ Bastimentos ↔ Solarte'
    }
  ]

  const WaterTransportCard = ({ service }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-32 bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center text-5xl">
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
            <div className="text-xs text-gray-500">por persona</div>
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

        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Users size={14} className="mr-1" />
          {service.routes}
        </div>

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
          <a href={`https://wa.me/${service.phone.replace('+', '')}?text=Hola, me interesa el servicio de lancha: ${service.name}`} 
             target="_blank" 
             rel="noopener noreferrer"
             className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-sm">
            <Ship size={14} className="mr-1" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🚤 Transporte en Lanchas</h2>
        <Link 
          to="/transporte" 
          className="text-blue-600 font-semibold hover:underline flex items-center"
        >
          Ver todas las opciones →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {waterTransportServices.map(service => (
          <WaterTransportCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default WaterTransportSection
