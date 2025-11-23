import React, { useState } from 'react'
import { Car, Phone, MapPin, Clock } from 'lucide-react'

// Importar imágenes
import transport1 from '../../assets/images/transport/lancha-1.jpg'
import transport2 from '../../assets/images/transport/lancha-2.jpg'
import transport3 from '../../assets/images/transport/lancha-3.jpg'
import transport4 from '../../assets/images/transport/lancha-4.jpg'
import transport5 from '../../assets/images/transport/lancha-5.jpg'
import transport6 from '../../assets/images/transport/lancha-6.jpg'

const TransportSectionFull = () => {
  const [filters, setFilters] = useState({
    type: '',
    price: '',
    location: ''
  })

  const allTransportServices = [
    { 
      id: 1, 
      name: 'Bocas Taxi Service', 
      type: 'Taxi', 
      category: 'Terrestre',
      price: '$3-10', 
      priceRange: 'bajo',
      image: transport1,
      location: 'Bocas Town, Isla Colón',
      area: 'Bocas Town',
      phone: '+507 757-9201',
      hours: '24/7',
      description: 'Servicio de taxi en golf cart por toda Isla Colón'
    },
    { 
      id: 2, 
      name: 'Bocas Bike Rental', 
      type: 'Bicicleta', 
      category: 'Terrestre',
      price: '$8/día', 
      priceRange: 'bajo',
      image: transport2,
      location: 'Calle 2, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9202',
      hours: '7:00 AM - 7:00 PM', 
      description: 'Bicicletas para explorar la isla a tu ritmo'
    },
    { 
      id: 3, 
      name: 'Island Golf Cart Rentals', 
      type: 'Golf Cart', 
      category: 'Terrestre',
      price: '$35/día', 
      priceRange: 'medio',
      image: transport3,
      location: 'Av. H, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9203',
      hours: '7:00 AM - 8:00 PM',
      description: 'Golf carts para grupos y familias'
    },
    { 
      id: 4, 
      name: 'Bocas Water Taxi Coop', 
      type: 'Lancha Colectiva', 
      category: 'Acuático',
      price: '$3-8', 
      priceRange: 'bajo',
      image: transport4,
      location: 'Muelle Principal, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9301',
      hours: '6:00 AM - 6:00 PM',
      description: 'Servicio regular entre islas. Rutas: Colón-Bastimentos-Carenero'
    },
    { 
      id: 5, 
      name: 'Private Boat Tours', 
      type: 'Lancha Privada', 
      category: 'Acuático',
      price: '$80-150', 
      priceRange: 'alto',
      image: transport5,
      location: 'Muelle Sur, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9302',
      hours: '6:00 AM - 5:00 PM',
      description: 'Lanchas privadas para grupos hasta 8 personas. Tours personalizados'
    },
    { 
      id: 6, 
      name: 'Island Hopper Express', 
      type: 'Lancha Express', 
      category: 'Acuático',
      price: '$5-12', 
      priceRange: 'medio',
      image: transport6,
      location: 'Muelle Norte, Bocas Town',
      area: 'Bocas Town',
      phone: '+507 757-9303',
      hours: '5:30 AM - 7:00 PM', 
      description: 'Servicio express entre islas principales. Horarios fijos'
    }
  ]

  // Aplicar filtros
  const filteredTransport = allTransportServices.filter(service => {
    if (filters.type && service.category !== filters.type) return false
    if (filters.price && service.priceRange !== filters.price) return false
    if (filters.location && service.area !== filters.location) return false
    return true
  })

  const TransportCard = ({ service }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-gray-800">{service.name}</h3>
            <p className="text-gray-600 text-sm">{service.type}</p>
          </div>
          <div className="text-green-600 font-bold text-right">
            <div>{service.price}</div>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-1">
          <MapPin size={14} className="mr-1" />
          {service.location}
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <Clock size={14} className="mr-1" />
          {service.hours}
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
          <a href={`https://wa.me/${service.phone.replace(/[^0-9]/g, '')}?text=Hola, me interesa el servicio: ${service.name}`}
             target="_blank" 
             rel="noopener noreferrer"
             className="flex-1 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center text-sm">
            <Car size={14} className="mr-1" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )

  return (
    <div>
      {/* Filtros */}
      <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
        <h3 className="font-bold mb-4 text-gray-800">Filtrar transporte</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.type}
            onChange={(e) => setFilters({...filters, type: e.target.value})}
          >
            <option value="">Todos los tipos</option>
            <option value="Terrestre">Terrestre</option>
            <option value="Acuático">Acuático</option>
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
          
          <select 
            className="px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-blue-500"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
          >
            <option value="">Todas las ubicaciones</option>
            <option value="Bocas Town">Bocas Town</option>
            <option value="Muelle Principal">Muelle Principal</option>
            <option value="Muelle Sur">Muelle Sur</option>
          </select>
        </div>
        
        {filters.type || filters.price || filters.location ? (
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando {filteredTransport.length} de {allTransportServices.length} servicios
            </p>
            <button 
              onClick={() => setFilters({type: '', price: '', location: ''})}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Limpiar filtros
            </button>
          </div>
        ) : null}
      </div>

      {/* Lista de transporte */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTransport.map(service => (
          <TransportCard key={service.id} service={service} />
        ))}
      </div>

      {filteredTransport.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No se encontraron servicios con estos filtros</p>
          <button 
            onClick={() => setFilters({type: '', price: '', location: ''})}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Ver todos los servicios
          </button>
        </div>
      )}
    </div>
  )
}

export default TransportSectionFull
