import React from 'react'
import { Clock, MapPin, Star, Waves, Sun, Shield } from 'lucide-react'

const IslandsPage = () => {
  const islands = [
    {
      id: 1,
      name: 'Isla Colón',
      image: '🏝️',
      timeFromColon: '0 min',
      description: 'La isla principal y corazón de Bocas del Toro, donde se encuentra Bocas Town con todos los servicios, restaurantes, hoteles y vida nocturna.',
      activities: [
        'Explorar Bocas Town y su arquitectura caribeña',
        'Visitar Playa Bluff para surf',
        'Recorrer el Parque Nacional Marino Isla Bastimentos',
        'Disfrutar de la vida nocturna en bares y discotecas',
        'Comprar artesanías en el mercado local'
      ],
      beaches: ['Playa Bluff', 'Playa Paunch', 'Playa Estrella'],
      tips: 'Es la base perfecta para explorar las otras islas. Tiene todos los servicios básicos.',
      transport: 'Centro de transporte principal con lanchas a todas las islas'
    },
    {
      id: 2,
      name: 'Isla Bastimentos',
      image: '🌴',
      timeFromColon: '10-15 min',
      description: 'La segunda isla más grande, famosa por su Parque Nacional Marino, playas vírgenes y comunidad afrocaribeña en Old Bank.',
      activities: [
        'Visitar Red Frog Beach con su arena dorada',
        'Caminar por el sendero del Parque Nacional',
        'Avistar ranitas rojas en la jungla',
        'Snorkeling en los arrecifes protegidos',
        'Conocer la cultura de Old Bank'
      ],
      beaches: ['Red Frog Beach', 'Playa Larga', 'Wizard Beach'],
      tips: 'Lleva zapatos para caminar y efectivo. Algunas áreas solo son accesibles en lancha.',
      transport: 'Lancha frecuente desde Bocas Town ($3-4)'
    },
    {
      id: 3,
      name: 'Isla Carenero',
      image: '🏄',
      timeFromColon: '5 min',
      description: 'Una pequeña isla frente a Bocas Town, conocida como la "Isla de los Surfistas" por sus olas consistentes y ambiente relajado.',
      activities: [
        'Surf en Black Rock y otras rompientes',
        'Comer en restaurantes frente al mar',
        'Paseos en kayak alrededor de la isla',
        'Snorkeling en aguas tranquilas',
        'Relajarse en playas poco concurridas'
      ],
      beaches: ['Playa Carenero', 'Black Rock Beach'],
      tips: 'Ideal para surfistas principiantes y avanzados. Muy cerca de Bocas Town.',
      transport: 'Lancha cada 15-20 min desde Bocas Town ($2)'
    },
    {
      id: 4,
      name: 'Isla Solarte',
      image: '🌅',
      timeFromColon: '15 min',
      description: 'Isla tranquila con historia hospitalaria, ahora conocida por sus aguas cristalinas y excelentes spots de snorkeling.',
      activities: [
        'Snorkeling en Hospital Point',
        'Visitar el antiguo hospital abandonado',
        'Observar delfines en la bahía',
        'Pícnic en playas desiertas',
        'Fotografía de paisajes'
      ],
      beaches: ['Hospital Point', 'Playa Solarte'],
      tips: 'Excelente para snorkeling. Lleva tu propio equipo y comida.',
      transport: 'Lancha desde Bocas Town ($3-4)'
    },
    {
      id: 5,
      name: 'Islas Zapatillas',
      image: '👟',
      timeFromColon: '45-60 min',
      description: 'Dos islas deshabitadas en el Parque Nacional Marino Isla Bastimentos, consideradas las más hermosas del archipiélago con arena blanca y aguas turquesas.',
      activities: [
        'Snorkeling en arrecifes de coral vírgenes',
        'Caminata por senderos naturales',
        'Observación de tortugas marinas (temporada)',
        'Pícnic en playas paradisíacas',
        'Fotografía de vida marina'
      ],
      beaches: ['Zapatilla #1', 'Zapatilla #2'],
      tips: 'Solo accesible con tour. Lleva protector solar, agua y snorkel.',
      transport: 'Tour organizado desde Bocas Town ($35-45)'
    },
    {
      id: 6,
      name: 'Isla San Cristóbal',
      image: '🦀',
      timeFromColon: '25 min',
      description: 'Isla más alejada con comunidades indígenas Ngäbe-Buglé y paisajes prístinos. Experiencia cultural auténtica.',
      activities: [
        'Visitar comunidades Ngäbe-Buglé',
        'Aprender sobre cultivo de cacao',
        'Caminatas por senderos tradicionales',
        'Observación de aves tropicales',
        'Comprar artesanías locales'
      ],
      beaches: ['Playas comunitarias'],
      tips: 'Respetar las costumbres locales. Se recomienda ir con guía.',
      transport: 'Lancha especial desde Bocas Town ($8-10)'
    }
  ]

  const IslandCard = ({ island }) => (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
      <div className="h-48 bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center text-6xl">
        {island.image}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-2xl font-bold text-gray-800">{island.name}</h2>
          <div className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            <Clock size={14} className="mr-1" />
            {island.timeFromColon}
          </div>
        </div>

        <p className="text-gray-600 mb-4">{island.description}</p>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Waves size={16} className="mr-2" />
            Actividades Principales:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            {island.activities.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                {activity}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
            <Sun size={16} className="mr-2" />
            Playas Destacadas:
          </h3>
          <div className="flex flex-wrap gap-2">
            {island.beaches.map((beach, index) => (
              <span key={index} className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">
                {beach}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <h4 className="font-semibold text-gray-700 mb-1 flex items-center text-sm">
            <Shield size={14} className="mr-1" />
            Consejos:
          </h4>
          <p className="text-gray-600 text-sm">{island.tips}</p>
        </div>

        <div className="bg-blue-50 p-3 rounded-lg">
          <h4 className="font-semibold text-blue-700 mb-1 flex items-center text-sm">
            <MapPin size={14} className="mr-1" />
            Transporte:
          </h4>
          <p className="text-blue-600 text-sm">{island.transport}</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">🏝️ Guía de Islas de Bocas del Toro</h1>
      <p className="text-gray-600 mb-6">Descubre el archipiélago caribeño y sus maravillas</p>

      {/* Mapa conceptual del archipiélago */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-xl p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">🗺️ Distribución del Archipiélago</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Islas Principales:</h3>
            <ul className="space-y-1">
              <li>• <strong>Isla Colón</strong> - Centro administrativo y turístico</li>
              <li>• <strong>Isla Bastimentos</strong> - Parque Nacional y naturaleza</li>
              <li>• <strong>Isla Carenero</strong> - Surf y proximidad</li>
              <li>• <strong>Isla Solarte</strong> - Historia y snorkeling</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Islas Especiales:</h3>
            <ul className="space-y-1">
              <li>• <strong>Islas Zapatillas</strong> - Paraíso virgen protegido</li>
              <li>• <strong>Isla San Cristóbal</strong> - Cultura indígena</li>
              <li>• <strong>Cayo de Agua</strong> - Pequeños cayos para snorkeling</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Información general */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">ℹ️ Información General</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">🌡️ Clima</h3>
            <p className="text-gray-600">Tropical húmedo. Temporada seca: Feb-Abr. Temporada lluviosa: May-Ene.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">💰 Moneda</h3>
            <p className="text-gray-600">Dólar estadounidense (USD). Efectivo recomendado para islas menores.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">🚤 Movilidad</h3>
            <p className="text-gray-600">Todas las islas están conectadas por servicio regular de lanchas.</p>
          </div>
        </div>
      </div>

      {/* Lista de islas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {islands.map(island => (
          <IslandCard key={island.id} island={island} />
        ))}
      </div>

      {/* Tips finales */}
      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-800">💡 Tips para Visitantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Reserva con tiempo</strong> los tours a islas lejanas</li>
            <li>• <strong>Lleva efectivo</strong> para compras en islas menores</li>
            <li>• <strong>Protector solar y repelente</strong> son esenciales</li>
          </ul>
          <ul className="text-yellow-700 space-y-2">
            <li>• <strong>Respeta el medio ambiente</strong> - no tires basura</li>
            <li>• <strong>Zapatos acuáticos</strong> recomendados para snorkeling</li>
            <li>• <strong>Hidratación constante</strong> en el clima tropical</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default IslandsPage
