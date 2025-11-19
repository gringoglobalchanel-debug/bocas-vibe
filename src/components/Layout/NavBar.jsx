import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Hotel, Compass, Utensils, Ship, Map, Music, Wine, Users, Menu, X } from 'lucide-react'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const NavItem = ({ icon, text, to }) => (
    <Link
      to={to}
      className={`flex items-center space-x-1 transition-colors ${
        location.pathname === to ? 'text-yellow-300' : 'hover:text-yellow-300'
      }`}
      onClick={() => setMenuOpen(false)}
    >
      {icon}
      <span>{text}</span>
    </Link>
  )

  const MobileNavItem = ({ icon, text, to }) => (
    <Link
      to={to}
      className="flex items-center space-x-2 py-2 hover:bg-blue-600 px-2 rounded"
      onClick={() => setMenuOpen(false)}
    >
      {icon}
      <span>{text}</span>
    </Link>
  )

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-3xl">🌊</span>
            <span className="text-2xl font-bold">BocasVibe</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <NavItem icon={<Hotel size={18} />} text="Alojamiento" to="/alojamiento" />
            <NavItem icon={<Compass size={18} />} text="Tours" to="/tours" />
            <NavItem icon={<Utensils size={18} />} text="Restaurantes" to="/restaurantes" />
            <NavItem icon={<Ship size={18} />} text="Transporte" to="/transporte" />
            <NavItem icon={<Map size={18} />} text="Islas" to="/islas" />
            <NavItem icon={<Wine size={18} />} text="Bares & Discotecas" to="/bares" />
            <NavItem icon={<Users size={18} />} text="Guías Turísticos" to="/guias" />
            <NavItem icon={<Music size={18} />} text="Eventos" to="/eventos" />
          </div>

          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-blue-700 pb-4">
          <div className="flex flex-col space-y-2 px-4">
            <MobileNavItem icon={<Hotel size={18} />} text="Alojamiento" to="/alojamiento" />
            <MobileNavItem icon={<Compass size={18} />} text="Tours" to="/tours" />
            <MobileNavItem icon={<Utensils size={18} />} text="Restaurantes" to="/restaurantes" />
            <MobileNavItem icon={<Ship size={18} />} text="Transporte" to="/transporte" />
            <MobileNavItem icon={<Map size={18} />} text="Islas" to="/islas" />
            <MobileNavItem icon={<Wine size={18} />} text="Bares & Discotecas" to="/bares" />
            <MobileNavItem icon={<Users size={18} />} text="Guías Turísticos" to="/guias" />
            <MobileNavItem icon={<Music size={18} />} text="Eventos" to="/eventos" />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
