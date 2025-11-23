import React from 'react'
import RestaurantsSection from '../components/Home/RestaurantsSection'

const RestaurantsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">🍽️ Todos los Restaurantes</h1>
          <p className="text-gray-600">Descubre los sabores del Caribe panameño</p>
        </div>
        <RestaurantsSection />
      </div>
    </div>
  )
}

export default RestaurantsPage
