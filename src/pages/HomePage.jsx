import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import FeaturesSection from '../components/Home/FeaturesSection'
import ToursSection from '../components/Home/ToursSection'
import HotelsSection from '../components/Home/HotelsSection'
import RestaurantsSection from '../components/Home/RestaurantsSection'
import TransportSection from '../components/Home/TransportSection'
import WaterTransportSection from '../components/Home/WaterTransportSection'
import IslandsSection from '../components/Home/IslandsSection'
import NightlifeSection from '../components/Home/NightlifeSection'
import EventsSection from '../components/Home/EventsSection'
import TestimonialsSection from '../components/Home/TestimonialsSection'

const HomePage = () => {
  return (
    <div className="space-y-16 pb-12">
      <HeroSection />
      <FeaturesSection />
      <ToursSection />
      <HotelsSection />
      <RestaurantsSection />
      <TransportSection />
      <WaterTransportSection />
      <IslandsSection />
      <NightlifeSection />
      <EventsSection />
      <TestimonialsSection />
      
      {/* Sección App Download */}
      <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-12 rounded-3xl text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">📱 Lleva Bocas Contigo</h2>
          <p className="text-xl mb-6">Descarga nuestra app para reservas en el camino y mapas offline</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              App Store
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Google Play
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
