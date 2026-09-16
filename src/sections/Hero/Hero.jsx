import { useRef, useEffect } from 'react'
import { gsap } from '../../lib/gsap'
import { personalData } from '../../data/portfolio'
import { ArrowDown, ArrowUpRight, Terminal, FileText } from 'lucide-react'
import { Magnetic } from '../../components/ui/Magnetic'
import { Badge } from '../../components/ui/Badge'
import { useLenis } from '../../hooks/useLenis'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Hero({ ready }) {
  const containerRef = useRef(null)
  const titleLine1Ref = useRef(null)
  const titleLine2Ref = useRef(null)
  const roleRef = useRef(null)
  const descRef = useRef(null)
  const ctaRef = useRef(null)
  const metaRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const bgGridRef = useRef(null)

  const { scrollTo } = useLenis()
  const prefersReducedMotion = useReducedMotion()

  // Main Hero GSAP Entrance Animation (triggered when preloader completes)
  useEffect(() => {
    if (!ready) return

    if (prefersReducedMotion) {
      // Show immediately
      gsap.set(
        [
          titleLine1Ref.current,
          titleLine2Ref.current,
          roleRef.current,
          descRef.current,
          ctaRef.current,
          metaRef.current,
          scrollIndicatorRef.current,
        ],
        { opacity: 1, y: 0, clipPath: 'none' },
      )
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Meta info fade in
      tl.fromTo(
        metaRef.current,
        { opacity: 0, y: -15 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.1,
      )

      // Large typography reveal using clip-path masks
      tl.fromTo(
        [titleLine1Ref.current, titleLine2Ref.current],
        {
          opacity: 0,
          y: 80,
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
        },
        {
          opacity: 1,
          y: 0,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          stagger: 0.12,
          duration: 1.1,
        },
        0.2,
      )

      // Role and ethos tag
      tl.fromTo(
        roleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.5,
      )

      // Description text
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.6,
      )

      // CTAs
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.7,
      )

      // Scroll indicator
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        0.9,
      )
    }, containerRef)

    return () => ctx.revert()
  }, [ready, prefersReducedMotion])

  // Continuous subtle scroll indicator bounce
  useEffect(() => {
    if (prefersReducedMotion || !scrollIndicatorRef.current) return

    const tween = gsap.to(scrollIndicatorRef.current.querySelector('.bounce-arrow'), {
      y: 6,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: 'power1.inOut',
    })

    return () => tween.kill()
  }, [prefersReducedMotion])

  // Subtle mouse parallax for desktop only
  useEffect(() => {
    if (prefersReducedMotion) return
    const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isDesktop || !bgGridRef.current) return

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      const xNorm = (e.clientX / innerWidth - 0.5) * 20
      const yNorm = (e.clientY / innerHeight - 0.5) * 20

      gsap.to(bgGridRef.current, {
        x: xNorm,
        y: yNorm,
        duration: 1.2,
        ease: 'power2.out',
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [prefersReducedMotion])

  const handleScrollClick = (target) => {
    scrollTo(target, { offset: -70 })
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Subtle Background Radial Glow & Industrial Rings */}
      <div
        ref={bgGridRef}
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-gradient-to-br from-[#00f0ff]/5 via-purple-600/5 to-transparent blur-3xl"
      />

      {/* Top Metadata Header Bar */}
      <div
        ref={metaRef}
        className="flex flex-wrap items-center justify-between gap-4 pt-2 border-b border-white/[0.06] pb-4"
      >
        <div className="flex items-center gap-3">
          <Badge variant="emerald" dot={true}>
            {personalData.status}
          </Badge>
          <span className="hidden sm:inline-block font-mono text-xs text-neutral-400">
            LOC: {personalData.location} [{personalData.timezone}]
          </span>
        </div>

        <div className="flex items-center gap-4 font-mono text-xs text-neutral-400">
          <span className="hidden lg:inline-block">SYS // 64-BIT FULL_STACK</span>
          <span className="text-[#00f0ff] flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5" />
            READY
          </span>
        </div>
      </div>

      {/* Main Center Typographic Stage */}
      <div className="my-auto py-8 sm:py-12">
        {/* Role eyebrow */}
        <div ref={roleRef} className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="w-6 h-px bg-[#00f0ff]" />
          <h2 className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[#00f0ff] font-semibold">
            {personalData.role}
          </h2>
        </div>

        {/* Huge Headline Typography */}
        <h1 className="font-heading font-extrabold tracking-tighter text-white leading-[0.92] sm:leading-[0.90] select-none">
          <div className="overflow-hidden">
            <span
              ref={titleLine1Ref}
              className="block text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-white"
            >
              MUHAMMAD
            </span>
          </div>
          <div className="overflow-hidden mt-1 sm:mt-2">
            <span
              ref={titleLine2Ref}
              className="block text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500"
            >
              ADLI FAJRIYANSYAH
            </span>
          </div>
        </h1>

        {/* Concise Description */}
        <p
          ref={descRef}
          className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed"
        >
          {personalData.tagline}
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={() => handleScrollClick('#projects')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-black font-mono font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm hover:bg-[#00f0ff] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] shadow-lg shadow-white/5 active:scale-95"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </Magnetic>

          <Magnetic strength={0.25}>
            <button
              type="button"
              onClick={() => handleScrollClick('#contact')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white/[0.04] text-white border border-white/10 font-mono font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </button>
          </Magnetic>

          {personalData.cvUrl && (
            <Magnetic strength={0.25}>
              <a
                href={personalData.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Muhammad-Adli-Fajriyansyah.pdf"
                className="group inline-flex items-center gap-2 px-5 py-3.5 bg-white/[0.03] text-neutral-200 border border-white/10 font-mono font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-sm hover:bg-[#00f0ff]/10 hover:border-[#00f0ff]/40 hover:text-[#00f0ff] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] active:scale-95"
                aria-label="Download CV Document"
              >
                <FileText className="w-4 h-4 text-[#00f0ff] group-hover:scale-110 transition-transform" />
                <span>Resume / CV</span>
              </a>
            </Magnetic>
          )}
        </div>
      </div>

      {/* Bottom Technical Grid Row & Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-neutral-400"
      >
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline-block">
            COORDINATES: <span className="text-neutral-300">{personalData.coordinates}</span>
          </span>
          <span className="hidden md:inline-block">STACK: REACT • LARAVEL • GSAP</span>
        </div>

        {/* Interactive Scroll Down Prompt */}
        <button
          type="button"
          onClick={() => handleScrollClick('#about')}
          className="group flex items-center gap-2 text-neutral-400 hover:text-white transition-colors focus:outline-none"
          aria-label="Scroll to About Section"
        >
          <span className="tracking-widest uppercase text-[11px]">SCROLL TO EXPLORE</span>
          <div className="bounce-arrow w-6 h-6 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#00f0ff] transition-colors">
            <ArrowDown className="w-3 h-3 text-[#00f0ff]" />
          </div>
        </button>
      </div>
    </section>
  )
}
