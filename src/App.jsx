import { useState } from 'react'
import { useLenis } from './hooks/useLenis'
import { Preloader } from './components/layout/Preloader'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { NoiseOverlay } from './components/ui/NoiseOverlay'
import { TechnicalGrid } from './components/ui/TechnicalGrid'

import { Hero } from './sections/Hero/Hero'
import { About } from './sections/About/About'
import { Skills } from './sections/Skills/Skills'
import { Projects } from './sections/Projects/Projects'
import { Experience } from './sections/Experience/Experience'
import { Contact } from './sections/Contact/Contact'

import './App.css'

export default function App() {
  const [ready, setReady] = useState(false)

  // Initialize Lenis smooth scroll and connect with GSAP ScrollTrigger
  useLenis()

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-[#e5e7eb] selection:bg-[#00f0ff]/20 selection:text-[#00f0ff] overflow-x-hidden">
      {/* Background Ambience & Textures */}
      <NoiseOverlay />
      <TechnicalGrid />

      {/* Preloader Transition */}
      <Preloader onComplete={() => setReady(true)} />

      {/* Header Navigation */}
      <Navbar ready={ready} />

      {/* Main Narrative Flow */}
      <main id="main-content" className="relative z-10 flex flex-col">
        <Hero ready={ready} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
