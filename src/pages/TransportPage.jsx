import React from 'react'
import TransportSectionFull from '../components/Home/TransportSectionFull'

const TransportPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gray-800">🚗 Todo el Transporte</h1>
          <p className="text-gray-600">Movilízate por las islas fácilmente</p>
        </div>
        <TransportSectionFull />
      </div>
    </div>
  )
}

export default TransportPage
