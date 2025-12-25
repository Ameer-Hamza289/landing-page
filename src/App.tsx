import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import FeaturesShowcase from './components/FeaturesShowcase'
import JourneySection from './components/JourneySection'

function App() {
  return (
    <div className="min-h-screen bg-[#2B2D32] text-white">
      <Header />
      <HeroSection/>
      <FeaturesShowcase/>
      <JourneySection />
      <Footer/>
    </div>
  )
}

export default App

