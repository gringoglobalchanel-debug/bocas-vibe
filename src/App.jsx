import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'
import HomePage from './pages/HomePage'
import HotelsPage from './pages/HotelsPage'
import ToursPage from './pages/ToursPage'
import RestaurantsPage from './pages/RestaurantsPage'
import TransportPage from './pages/TransportPage'
import IslandsPage from './pages/IslandsPage'
import NightlifePage from './pages/NightlifePage'
import GuidesPage from './pages/GuidesPage'
import EventsPage from './pages/EventsPage'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <NavBar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/alojamiento" element={<HotelsPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/restaurantes" element={<RestaurantsPage />} />
          <Route path="/transporte" element={<TransportPage />} />
          <Route path="/islas" element={<IslandsPage />} />
          <Route path="/bares" element={<NightlifePage />} />
          <Route path="/guias" element={<GuidesPage />} />
          <Route path="/eventos" element={<EventsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
