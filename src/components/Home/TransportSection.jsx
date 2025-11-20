import React from 'react'
import { Link } from 'react-router-dom'
import { Car, Bus, Phone, MapPin, Clock } from 'lucide-react'

// Importar imágenes de transporte
import transport1 from '../../assets/images/transport/lancha-1.jpg'
import transport2 from '../../assets/images/transport/lancha-2.jpg'
import transport3 from '../../assets/images/transport/lancha-3.jpg'
import transport4 from '../../assets/images/transport/lancha-4.jpg'
import transport5 from '../../assets/images/transport/lancha-5.jpg'
import transport6 from '../../assets/images/transport/lancha-6.jpg'

const TransportSection = () => {
  const transportServices = [
    { 
      id: 1, 
      name: 'Bocas Taxi Service', 
      type: 'Taxis Locales', 
      price: '$3-10', 
      image: transport1,
      location: 'Bocas Town, Isla Colón',
      phone: '+507 757-9201',
      hours: '24/7',
      description: 'Servicio de taxi en golf cart por toda Isla Colón'
    },
    { 
      id: 2, 
      name: 'Bocas Bike Rental', 
      type: 'Alquiler de Bicicletas', 
      price: '$8/día', 
      image: transport2,
      location: 'Calle 2, Bocas Town',
      phone: '+507 757-9202',
      hours: '7:00 AM - 7:00 PM', 
      description: 'Bicicletas para explorar la isla a tu ritmo'
    },
    { 
      id: 3, 
      name: 'Island Golf Cart Rentals', 
      type: 'Alquiler Golf Carts', 
      price: '$35/día', 
      image: transport3,
      location: 'Av. H, Bocas Town',
      phone: '+507 757-9203',
      hours: '7:00 AM - 8:00 PM',
      description: 'Golf carts para grupos y familias'
    },
    { 
      id: 4, 
      name: 'Bocas Water Taxi Coop', 
      type: 'Lanchas Colectivas', 
      price: '$3-8', 
      image: transport4,
      location: 'Muelle Principal, Bocas Town',
      phone: '+507 757-9301',
      hours: '6:00 AM - 6:00 PM',
      description: 'Servicio regular entre islas. Rutas: Colón-Bastimentos-Carenero'
    },
    { 
      id: 5, 
      name: 'Private Boat Tours', 
      type: 'Lanchas Privadas', 
      price: '$80-150', 
      image: transport5,
      location: 'Muelle Sur, Bocas Town',
      phone: '+507 757-9302',
      hours: '6:00 AM - 5:00 PM',
      description: 'Lanchas privadas para grupos hasta 8 personas. Tours personalizados'
    },
    { 
      id: 6, 
      name: 'Island Hopper Express', 
      type: 'Transporte Rápido', 
      price: '$5-12', 
      image: transport6,
      location: 'Muelle Norte, Bocas Town',
      phone: '+507 757-9303',
      hours: '5:30 AM - 7:00 PM', 
      description: 'Servicio express entre islas principales. Horarios fijos'
    }
  ]

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
          <div className="text-green-600 font-bold">{service.price}</div>
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
    <section className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">🚗 Transporte en Bocas</h2>
        <Link 
          to="/transporte" 
          className="text-blue-600 font-semibold hover:underline flex items-center"
        >
          Ver todos los servicios →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {transportServices.map(service => (
          <TransportCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  )
}

export default TransportSection
