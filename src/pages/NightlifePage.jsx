import React from 'react'
import NightlifeSectionFull from '../components/Home/NightlifeSectionFull'

const NightlifePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">🍸 Toda la Vida Nocturna</h1>
          <p className="text-gray-600">Descubre los mejores bares y discotecas</p>
        </div>
        <NightlifeSectionFull />
      </div>
    </div>
  )
}

export default NightlifePage
