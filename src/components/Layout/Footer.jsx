import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">🌊</span>
              BocasVibe
            </h3>
            <p className="text-gray-400">Tu guía completa para descubrir el paraíso caribeño de Bocas del Toro</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Descubrir</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/alojamiento" className="hover:text-white transition-colors">Hoteles</Link></li>
              <li><Link to="/tours" className="hover:text-white transition-colors">Tours</Link></li>
              <li><Link to="/restaurantes" className="hover:text-white transition-colors">Restaurantes</Link></li>
              <li><Link to="/islas" className="hover:text-white transition-colors">Islas</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Para Negocios</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Lista tu negocio</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Alianzas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Publicidad</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+507 757-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>info@bocasvibe.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>Bocas Town, Isla Colón</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BocasVibe. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
