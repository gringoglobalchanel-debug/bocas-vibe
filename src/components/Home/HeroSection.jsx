import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  // Mapeo de palabras clave a rutas
  const keywordRoutes = {
    // Hoteles y alojamiento
    'hotel': '/alojamiento',
    'hoteles': '/alojamiento',
    'alojamiento': '/alojamiento',
    'hospedaje': '/alojamiento',
    'resort': '/alojamiento',
    'hostal': '/alojamiento',
    'airbnb': '/alojamiento',
    'cabaña': '/alojamiento',
    'bungalow': '/alojamiento',

    // Tours y actividades
    'tour': '/tours',
    'tours': '/tours',
    'excursión': '/tours',
    'excursiones': '/tours',
    'actividad': '/tours',
    'actividades': '/tours',
    'aventura': '/tours',
    'snorkel': '/tours',
    'snorkeling': '/tours',
    'buceo': '/tours',
    'surf': '/tours',
    'bioluminiscencia': '/tours',
    'delfines': '/tours',

    // Restaurantes
    'restaurante': '/restaurantes',
    'restaurantes': '/restaurantes',
    'comida': '/restaurantes',
    'cenar': '/restaurantes',
    'almorzar': '/restaurantes',
    'desayunar': '/restaurantes',
    'bar': '/restaurantes',
    'mariscos': '/restaurantes',
    'gastronomía': '/restaurantes',

    // Transporte
    'transporte': '/transporte',
    'taxi': '/transporte',
    'lancha': '/transporte',
    'water taxi': '/transporte',
    'bote': '/transporte',
    'barco': '/transporte',
    'golf cart': '/transporte',
    'bicicleta': '/transporte',
    'alquiler': '/transporte',
    'movilidad': '/transporte',

    // Islas
    'isla': '/islas',
    'islas': '/islas',
    'playa': '/islas',
    'playas': '/islas',
    'colon': '/islas',
    'bastimentos': '/islas',
    'carenero': '/islas',
    'zapatillas': '/islas',
    'solarte': '/islas',

    // Bares y vida nocturna
    'discoteca': '/bares',
    'fiesta': '/bares',
    'noche': '/bares',
    'nocturno': '/bares',
    'música': '/bares',
    'baile': '/bares',
    'copas': '/bares',
    'coctel': '/bares',

    // Eventos
    'evento': '/eventos',
    'eventos': '/eventos',
    'festival': '/eventos',
    'concierto': '/eventos',
    'celebración': '/eventos'
  }

cd /c/BocasVibe

# Actualizar HeroSection.jsx
cat > src/components/Home/HeroSection.jsx << 'EOF'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  // Mapeo de palabras clave a rutas
  const keywordRoutes = {
    // Hoteles y alojamiento
    'hotel': '/alojamiento',
    'hoteles': '/alojamiento',
    'alojamiento': '/alojamiento',
    'hospedaje': '/alojamiento',
    'resort': '/alojamiento',
    'hostal': '/alojamiento',
    'airbnb': '/alojamiento',
    'cabaña': '/alojamiento',
    'bungalow': '/alojamiento',

    // Tours y actividades
    'tour': '/tours',
    'tours': '/tours',
    'excursión': '/tours',
    'excursiones': '/tours',
    'actividad': '/tours',
    'actividades': '/tours',
    'aventura': '/tours',
    'snorkel': '/tours',
    'snorkeling': '/tours',
    'buceo': '/tours',
    'surf': '/tours',
    'bioluminiscencia': '/tours',
    'delfines': '/tours',

    // Restaurantes
    'restaurante': '/restaurantes',
    'restaurantes': '/restaurantes',
    'comida': '/restaurantes',
    'cenar': '/restaurantes',
    'almorzar': '/restaurantes',
    'desayunar': '/restaurantes',
    'bar': '/restaurantes',
    'mariscos': '/restaurantes',
    'gastronomía': '/restaurantes',

    // Transporte
    'transporte': '/transporte',
    'taxi': '/transporte',
    'lancha': '/transporte',
    'water taxi': '/transporte',
    'bote': '/transporte',
    'barco': '/transporte',
    'golf cart': '/transporte',
    'bicicleta': '/transporte',
    'alquiler': '/transporte',
    'movilidad': '/transporte',

    // Islas
    'isla': '/islas',
    'islas': '/islas',
    'playa': '/islas',
    'playas': '/islas',
    'colon': '/islas',
    'bastimentos': '/islas',
    'carenero': '/islas',
    'zapatillas': '/islas',
    'solarte': '/islas',

    // Bares y vida nocturna
    'discoteca': '/bares',
    'fiesta': '/bares',
    'noche': '/bares',
    'nocturno': '/bares',
    'música': '/bares',
    'baile': '/bares',
    'copas': '/bares',
    'coctel': '/bares',

    // Eventos
    'evento': '/eventos',
    'eventos': '/eventos',
    'festival': '/eventos',
    'concierto': '/eventos',
    'celebración': '/eventos'
  }

  const handleSearch = (e) => {
    e.preventDefault()

    if (!searchQuery.trim()) return

    const query = searchQuery.toLowerCase().trim()

    // Buscar coincidencias exactas primero
    for (const [keyword, route] of Object.entries(keywordRoutes)) {
      if (query === keyword) {
        navigate(route)
        return
      }
    }

    // Buscar coincidencias parciales
    for (const [keyword, route] of Object.entries(keywordRoutes)) {
      if (query.includes(keyword)) {
        navigate(route)
        return
      }
    }

    // Si no encuentra coincidencia, mostrar mensaje o redirigir a página de búsqueda
    alert(`No encontramos resultados para "${searchQuery}". Intenta con palabras como: hotel, tour, restaurante, transporte, etc.`)
    // Alternativamente: navigate('/busqueda', { state: { query: searchQuery } })
  }

  const popularSearches = [
    { term: 'Hoteles', route: '/alojamiento' },
    { term: 'Tours de snorkel', route: '/tours' },
    { term: 'Restaurantes', route: '/restaurantes' },
    { term: 'Lanchas', route: '/transporte' },
    { term: 'Islas', route: '/islas' },
    { term: 'Bares', route: '/bares' }
  ]

  return (
    <div className="space-y-8">
      {/* Banner con imagen */}
      <div
        className="relative h-96 rounded-3xl overflow-hidden shadow-2xl mt-4 bg-cover bg-center"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}images/hero-banner.png')` }}
      >
        {/* Overlay para mejor legibilidad del texto */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Descubre Bocas del Toro
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl drop-shadow-lg">
            Tu guía completa para el paraíso caribeño de Panamá
          </p>
        </div>
      </div>

      {/* Barra de búsqueda FUERA del banner */}
      <div className="max-w-4xl mx-auto px-6 -mt-4">
        <form onSubmit={handleSearch} className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar hoteles, tours, restaurantes, transporte..."
                className="pl-10 pr-4 py-3 w-full rounded-lg border-2 border-gray-200 focus:border-blue-500 text-gray-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center space-x-2 min-w-[120px]"
            >
              <Search size={20} />
              <span>Buscar</span>
            </button>
          </div>

          {/* Búsquedas populares */}
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Búsquedas populares:</p>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((search, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => {
                    setSearchQuery(search.term)
                    setTimeout(() => document.querySelector('form').requestSubmit(), 100)
                  }}
                  className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors"
                >
                  {search.term}
                </button>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HeroSection
