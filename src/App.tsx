import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import FeaturesShowcase from './components/FeaturesShowcase'
function App() {


  return (
    <div className="min-h-screen bg-[#2B2D32] text-white">
      <Header />
      <HeroSection/>
      <FeaturesShowcase/>
      <Footer/>
    </div>
  )
}

export default App

