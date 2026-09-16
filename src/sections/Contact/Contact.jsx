import { useRef, useEffect, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { contactData, personalData } from '../../data/portfolio'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { Magnetic } from '../../components/ui/Magnetic'
import { Badge } from '../../components/ui/Badge'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Mail, Copy, Check, ArrowUpRight, Clock, Send, FileText } from 'lucide-react'
import { GithubIcon } from '../../components/ui/Icons'

export function Contact() {
  const containerRef = useRef(null)
  const bigHeadingRef = useRef(null)
  const [copied, setCopied] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Big title reveal
      gsap.fromTo(
        bigHeadingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bigHeadingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  const copyEmail = () => {
    navigator.clipboard?.writeText(contactData.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const githubObj = contactData.socials.find((s) => s.name === 'GitHub')

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-24 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06] overflow-hidden"
      aria-label="Contact Section"
    >
      {/* Background ambient spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-t from-[#00f0ff]/5 via-emerald-500/5 to-transparent blur-3xl"
      />

      <SectionHeader
        number="05"
        label="Saluran Komunikasi"
        title="Mulai Percakapan"
        description="Terbuka untuk diskusi kebutuhan teknis, peluang kerja sama proyek web, maupun rekayasa sistem full-stack."
      />

      <div className="my-10">
        {/* Giant Typographic Statement */}
        <div ref={bigHeadingRef} className="max-w-4xl">
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white tracking-tight leading-[1.05]">
            {contactData.title}
          </h2>
          <p className="mt-3 text-2xl sm:text-4xl text-neutral-400 font-heading font-semibold">
            {contactData.subtitle}
          </p>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl leading-relaxed font-normal">
            {contactData.description}
          </p>
        </div>

        {/* Action Center Card */}
        <div className="mt-12 p-6 sm:p-10 rounded-sm bg-[#11131a] border border-white/[0.08] max-w-3xl">
          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4 mb-6">
            <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
              SALURAN KOMUNIKASI
            </span>
            <Badge variant="emerald" dot={true}>
              Kotak Masuk Aktif
            </Badge>
          </div>

          {/* Email address display & copy interaction */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 rounded bg-white/[0.02] border border-white/[0.06] mb-8">
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-9 h-9 rounded bg-[#00f0ff]/10 text-[#00f0ff] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-mono text-sm sm:text-base text-white truncate select-all">
                {contactData.email}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={copyEmail}
                className="px-3.5 py-2 text-xs font-mono tracking-wider uppercase rounded bg-white/[0.05] hover:bg-white/10 text-neutral-300 hover:text-white border border-white/10 transition-colors flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
                aria-label="Salin alamat email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">TERSALIN</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>SALIN</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contactData.email}`}
                className="px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded bg-[#00f0ff] hover:bg-[#00f0ff]/90 text-black transition-colors flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,240,255,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>KIRIM EMAIL</span>
                <Send className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-4">
            {githubObj?.url && (
              <Magnetic strength={0.2}>
                <a
                  href={githubObj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono text-xs tracking-wider transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub {githubObj.handle}</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </Magnetic>
            )}

            {personalData.cvUrl && (
              <Magnetic strength={0.2}>
                <a
                  href={personalData.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV-Muhamad-Adli-Fajriyansyah.pdf"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-white/[0.04] hover:bg-[#00f0ff]/10 border border-white/10 hover:border-[#00f0ff]/40 text-white hover:text-[#00f0ff] font-mono text-xs tracking-wider transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#00f0ff]" />
                  <span>Unduh CV (PDF)</span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </Magnetic>
            )}
          </div>

          {/* System metadata line */}
          <div className="mt-8 pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-400">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#00f0ff]" />
              Zona Waktu: Indonesia [{personalData.timezone}]
            </span>
            <span>Estimasi Respon: 24-48 Jam</span>
          </div>
        </div>
      </div>
    </section>
  )
}
