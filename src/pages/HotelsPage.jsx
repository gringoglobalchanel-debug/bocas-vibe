import React from 'react'
import HotelsSection from '../components/Home/HotelsSection'

const HotelsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">🏨 Todos los Hoteles</h1>
          <p className="text-gray-600">Encuentra el alojamiento perfecto en Bocas del Toro</p>
        </div>
        <HotelsSection />
      </div>
    </div>
  )
}

export default HotelsPage
