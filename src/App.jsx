import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import ConsultationForm from './components/ConsultationForm'
import Payment from './components/Payment'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="App">
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <ConsultationForm />
      <Payment />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
