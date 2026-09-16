import { useRef, useEffect } from 'react'
import { gsap } from '../../lib/gsap'
import { personalData } from '../../data/portfolio'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Layers, Cpu, ShieldCheck, Zap } from 'lucide-react'

export function About() {
  const containerRef = useRef(null)
  const statementRef = useRef(null)
  const paragraphsRef = useRef(null)
  const pillarsRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Statement reveal on scroll
      gsap.fromTo(
        statementRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statementRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )

      // Staggered paragraphs
      const paragraphs = paragraphsRef.current?.querySelectorAll('p')
      if (paragraphs) {
        gsap.fromTo(
          paragraphs,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: paragraphsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }

      // Pillars card reveal
      const cards = pillarsRef.current?.querySelectorAll('.pillar-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  const pillars = [
    {
      icon: Layers,
      title: 'Arsitektur Full-Stack',
      description: 'Rekayasa menyeluruh dari skema basis data relasional hingga manajemen state di sisi client.',
    },
    {
      icon: Cpu,
      title: 'Keandalan Backend',
      description: 'Logika bisnis yang kokoh, alur autentikasi aman, serta integrasi RESTful API yang stabil.',
    },
    {
      icon: Zap,
      title: 'Presisi Antarmuka',
      description: 'Responsif mobile-first, interaksi mikro cepat dan lancar, serta pola UI yang aksesibel.',
    },
    {
      icon: ShieldCheck,
      title: 'Kesiapan Produksi',
      description: 'Kode bersih yang mudah dirawat, penanganan error terstruktur, dan siap di dunia nyata.',
    },
  ]

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
      aria-label="Bagian Tentang"
    >
      <SectionHeader
        number="01"
        label="Filosofi Kerja"
        title="Tentang & Prinsip"
        description="Menjembatani keandalan arsitektur backend dengan antarmuka yang presisi dan ramah pengguna."
      />

      {/* Editorial Large Statement */}
      <div
        ref={statementRef}
        className="relative my-8 sm:my-14 p-6 sm:p-10 rounded-sm bg-white/[0.02] border border-white/[0.08] overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-1 h-full bg-[#00f0ff]" />
        <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] mb-3 block">
          // Prinsip Utama
        </span>
        <blockquote className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
          &ldquo;{personalData.statement}&rdquo;
        </blockquote>
      </div>

      {/* Supporting Text & Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 my-10 items-start">
        {/* Narrative Paragraphs */}
        <div ref={paragraphsRef} className="lg:col-span-7 flex flex-col gap-5 text-neutral-300 text-base sm:text-lg leading-relaxed">
          {personalData.aboutParagraphs.map((para, idx) => (
            <p key={idx} className="font-normal">
              {para}
            </p>
          ))}
        </div>

        {/* Technical Profile Key Values */}
        <div className="lg:col-span-5 bg-[#11131a] p-6 sm:p-8 rounded-sm border border-white/[0.08] flex flex-col gap-6">
          <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
            <span className="font-mono text-xs uppercase tracking-wider text-neutral-400">
              MATRIKS REKAYASA
            </span>
            <span className="font-mono text-xs text-[#00f0ff]">DEV.01</span>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {personalData.stats.map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-mono text-[11px] uppercase tracking-wider text-neutral-400">
                  {stat.label}
                </span>
                <span className="font-heading font-bold text-white text-base sm:text-lg mt-1">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.08] pt-4 font-mono text-xs text-neutral-400 flex items-center justify-between">
            <span>Fokus Utama</span>
            <span className="text-white">Aplikasi Web & Sistem Produksi</span>
          </div>
        </div>
      </div>

      {/* 4 Architectural Pillars */}
      <div
        ref={pillarsRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
      >
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon
          return (
            <div
              key={idx}
              className="pillar-card p-6 rounded-sm bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.06] hover:border-white/20 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff] group-hover:border-[#00f0ff]/40 transition-colors mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-white text-base tracking-tight mb-2">
                  {pillar.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="font-mono text-[10px] text-neutral-600 mt-6 tracking-widest uppercase">
                SPEC.0{idx + 1}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
