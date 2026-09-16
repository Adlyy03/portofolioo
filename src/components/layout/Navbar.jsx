import { useState, useEffect, useRef } from 'react'
import { navLinks, personalData } from '../../data/portfolio'
import { useLenis } from '../../hooks/useLenis'
import { gsap, ScrollTrigger } from '../../lib/gsap'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export function Navbar({ ready }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { scrollTo } = useLenis()
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const menuLinksRef = useRef([])

  // Header background transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section tracking via ScrollTrigger
  useEffect(() => {
    if (!ready) return

    const sections = navLinks.map((link) => link.href.substring(1))
    const triggers = []

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const trigger = ScrollTrigger.create({
        trigger: el,
        start: 'top center',
        end: 'bottom center',
        onEnter: () => setActiveSection(id),
        onEnterBack: () => setActiveSection(id),
      })
      triggers.push(trigger)
    })

    return () => {
      triggers.forEach((t) => t.kill())
    }
  }, [ready])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  // Animate mobile menu items when opened
  useEffect(() => {
    if (!mobileMenuRef.current) return

    if (mobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' },
      )
      gsap.fromTo(
        menuLinksRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power3.out',
          delay: 0.1,
        },
      )
    }
  }, [mobileMenuOpen])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    scrollTo(href, { offset: -70 })
  }

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#090a0f]/90 backdrop-blur-md border-b border-white/[0.08] py-3.5 shadow-lg shadow-black/40'
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            onClick={(e) => handleNavClick(e, '#root')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center font-mono font-bold text-xs text-white group-hover:border-[#00f0ff]/50 group-hover:text-[#00f0ff] transition-colors">
              AF
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-sm tracking-tight text-white group-hover:text-[#00f0ff] transition-colors">
                {personalData.shortName}
              </span>
              <span className="font-mono text-[10px] text-neutral-400 tracking-wider hidden sm:inline-block">
                DEV.PORTFOLIO
              </span>
            </div>
          </a>

          {/* Availability Status Tag (Desktop & Tablet) */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-neutral-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.7)]" />
            <span className="text-neutral-300">Available for projects</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Desktop Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors rounded-sm ${
                    isActive
                      ? 'text-[#00f0ff] font-semibold'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <span className="text-[10px] text-neutral-600 mr-1.5">{link.number}</span>
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.7)]" />
                  )}
                </a>
              )
            })}

            {personalData.cvUrl && (
              <a
                href={personalData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Muhammad-Adli-Fajriyansyah.pdf"
                className="px-3 py-1.5 text-xs font-mono tracking-wider uppercase bg-white/[0.05] text-neutral-200 hover:text-[#00f0ff] hover:bg-[#00f0ff]/10 border border-white/10 hover:border-[#00f0ff]/40 rounded-sm transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
                aria-label="Download CV"
              >
                <span>CV</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            )}

            {/* Quick CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="ml-2 px-4 py-1.5 text-xs font-mono tracking-wider uppercase bg-white text-black font-semibold rounded-sm hover:bg-[#00f0ff] transition-colors flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
            >
              Contact
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Mobile Menu Trigger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-sm bg-white/5 border border-white/10 text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] active:scale-95 transition-all"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden fixed inset-0 z-40 bg-[#090a0f]/98 backdrop-blur-xl flex flex-col justify-between pt-24 pb-8 px-6 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Menu System Header */}
          <div className="font-mono text-[11px] text-[#00f0ff] uppercase tracking-widest border-b border-white/10 pb-3">
            // NAVIGATION DIRECTORY
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-4 my-auto py-6" aria-label="Mobile Links">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  ref={(el) => (menuLinksRef.current[idx] = el)}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-baseline justify-between py-3 border-b border-white/[0.06] group focus:outline-none ${
                    isActive ? 'text-[#00f0ff]' : 'text-neutral-200'
                  }`}
                >
                  <span className="font-heading text-3xl font-extrabold tracking-tight group-hover:text-[#00f0ff] transition-colors">
                    {link.name}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 tracking-widest">
                    [{link.number}]
                  </span>
                </a>
              )
            })}
          </nav>

          {personalData.cvUrl && (
            <div className="py-3 border-t border-white/10">
              <a
                href={personalData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Muhammad-Adli-Fajriyansyah.pdf"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white/5 border border-white/15 text-white font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-all active:scale-[0.98]"
              >
                <span>Download CV (PDF)</span>
                <ArrowUpRight className="w-4 h-4 text-[#00f0ff]" />
              </a>
            </div>
          )}

          {/* Mobile Footer Meta */}
          <div className="border-t border-white/10 pt-4 flex flex-col gap-2 font-mono text-xs text-neutral-400">
            <div className="flex items-center justify-between">
              <span className="text-neutral-400">STATUS:</span>
              <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Work
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-neutral-400">LOCATION:</span>
              <span className="text-neutral-300">Indonesia (UTC+07)</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
