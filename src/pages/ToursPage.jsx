import React from 'react'
import ToursSection from '../components/Home/ToursSection'

const ToursPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">🌴 Todos los Tours</h1>
          <p className="text-gray-600">Explora las mejores actividades y excursiones</p>
        </div>
        <ToursSection />
      </div>
    </div>
  )
}

export default ToursPage
