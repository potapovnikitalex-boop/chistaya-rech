import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import GamesTeaser from './components/GamesTeaser'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <GamesTeaser />
        <Testimonials />
        <Pricing />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}
