import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import Fleet from '../components/Fleet.jsx'
import Contact from '../components/Contact.jsx'

function Home() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [hash])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Contact />
    </>
  )
}

export default Home
