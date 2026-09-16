import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const [percentage, setPercentage] = useState(0)
  const [statusText, setStatusText] = useState('Menginisialisasi sistem...')
  const prefersReducedMotion = useReducedMotion()
  const startedRef = useRef(false)

  useEffect(() => {
    // If user prefers reduced motion, hide and notify immediately
    if (prefersReducedMotion) {
      if (containerRef.current) {
        containerRef.current.style.display = 'none'
      }
      onComplete?.()
      return
    }

    // Prevent any duplicate invocation
    if (startedRef.current) return
    startedRef.current = true

    const ctx = gsap.context(() => {
      const counterObj = { val: 0 }

      const tl = gsap.timeline({
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.display = 'none'
          }
          onComplete?.()
        },
      })

      // Animate percentage counter smoothly from 0 to 100 over 4.2 seconds
      tl.to(counterObj, {
        val: 100,
        duration: 4.2,
        ease: 'power1.inOut',
        onUpdate: () => {
          const current = Math.floor(counterObj.val)
          setPercentage(current)

          if (current < 25) {
            setStatusText('Menghubungkan modul arsitektur...')
          } else if (current < 55) {
            setStatusText('Memuat komponen & pustaka...')
          } else if (current < 80) {
            setStatusText('Menyiapkan basis data & API...')
          } else if (current < 100) {
            setStatusText('Mengoptimalkan antarmuka...')
          } else {
            setStatusText('Sistem siap.')
          }
        },
      })

      // Brief pause at 100% so user clearly sees 100% and "Sistem siap" (~0.3s)
      tl.to({}, { duration: 0.3 })

      // Exit curtain animation with clean clip-path wipe over 0.65s (Total duration ~5.15s)
      tl.to(containerRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.65,
        ease: 'power4.inOut',
      })
    }, containerRef)

    return () => ctx.revert()
  }, [onComplete, prefersReducedMotion])

  if (prefersReducedMotion) return null

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#07080c] p-6 sm:p-12 text-white select-none pointer-events-auto"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
      role="status"
      aria-live="polite"
      aria-label="Memuat portofolio"
    >
      {/* Top row */}
      <div className="flex items-center justify-between font-mono text-xs text-neutral-400 tracking-wider uppercase">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
          ADLI.SYS // INISIALISASI
        </span>
        <span className="text-neutral-400">WIB [UTC+07:00]</span>
      </div>

      {/* Center typography */}
      <div className="max-w-xl mx-auto text-center my-auto">
        <div className="font-mono text-xs uppercase tracking-widest text-[#00f0ff] mb-4">
          Portofolio Pengembang
        </div>
        <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading">
          Muhamad Adli Fajriyansyah
        </div>
        <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-mono tracking-wide">
          Full-Stack Developer • Software Engineer
        </p>

        {/* Minimal progress bar */}
        <div className="w-full max-w-xs mx-auto mt-8 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00f0ff] to-emerald-400 transition-all duration-100 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Bottom percentage & progress indicator */}
      <div className="flex items-end justify-between font-mono border-t border-white/5 pt-4">
        <div className="text-xs text-neutral-400 tracking-widest uppercase">
          {statusText}
        </div>
        <div className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight tabular-nums">
          {String(percentage).padStart(2, '0')}
          <span className="text-xs sm:text-sm font-mono text-[#00f0ff] ml-1">%</span>
        </div>
      </div>
    </div>
  )
}
