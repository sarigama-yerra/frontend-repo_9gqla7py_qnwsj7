import React from 'react'
import Hero from './components/Hero'
import InfluencerCards from './components/InfluencerCards'
import Brands from './components/Brands'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-[#050510] text-white">
      <Hero />
      <InfluencerCards />
      <Brands />
      <About />
      <Footer />
    </div>
  )
}

export default App
