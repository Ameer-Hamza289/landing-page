import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'

function App() {


  return (
    <div className="min-h-screen bg-[#2B2D32] text-white">
      <Header />
      <HeroSection/>

      <Footer/>
    </div>
  )
}

export default App

