import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import FeaturesShowcase from './components/FeaturesShowcase'
import JourneySection from './components/JourneySection'
import VideoTestimonialSection from './components/VideoTestimonialSection'
import UserTestimonialsSection from './components/UserTestimonialsSection'
import PromotionalCard from './components/PromotionalCard'

function App() {
  return (
    <div className="min-h-screen bg-[#2B2D32] text-white">
      <Header />
      <HeroSection/>
      <FeaturesShowcase/>
      <JourneySection />
      <VideoTestimonialSection />
      <UserTestimonialsSection />
      <PromotionalCard />
      <Footer/>
    </div>
  )
}

export default App

