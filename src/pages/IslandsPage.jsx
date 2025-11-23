import React from 'react'
import IslandsSection from '../components/Home/IslandsSection'

const IslandsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">🏝️ Guía de Islas</h1>
          <p className="text-gray-600">Descubre cada isla del archipiélago de Bocas del Toro</p>
        </div>
        <IslandsSection />
      </div>
    </div>
  )
}

export default IslandsPage
