import { useEffect, useRef, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Preloader({ onComplete }) {
  const containerRef = useRef(null)
  const counterRef = useRef(null)
  const textRef = useRef(null)
  const [percentage, setPercentage] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // If user prefers reduced motion, skip preloader immediately
    if (prefersReducedMotion) {
      if (containerRef.current) {
        containerRef.current.style.display = 'none'
      }
      onComplete?.()
      return
    }

    const ctx = gsap.context(() => {
      const counterObj = { val: 0 }

      const tl = gsap.timeline({
        onComplete: () => {
          onComplete?.()
        },
      })

      // Animate percentage counter quickly to ~100 in 0.75s
      tl.to(counterObj, {
        val: 100,
        duration: 0.75,
        ease: 'power2.out',
        onUpdate: () => {
          setPercentage(Math.floor(counterObj.val))
        },
      })

      // Quick text shimmer
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: 'power3.out',
        },
        0.1,
      )

      // Exit curtain animation with clean clip-path wipe
      tl.to(containerRef.current, {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
        duration: 0.55,
        ease: 'power4.inOut',
        delay: 0.05,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [onComplete, prefersReducedMotion])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col justify-between bg-[#07080c] p-6 sm:p-12 text-white select-none pointer-events-auto"
      style={{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading portfolio"
    >
      {/* Top row */}
      <div className="flex items-center justify-between font-mono text-xs text-neutral-400 tracking-wider uppercase">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff] animate-ping" />
          ADLI.SYS // DEV_INIT
        </span>
        <span className="text-neutral-500">UTC+07:00</span>
      </div>

      {/* Center typography */}
      <div className="max-w-xl mx-auto text-center my-auto">
        <div
          ref={textRef}
          className="opacity-0 translate-y-3 font-mono text-xs uppercase tracking-widest text-[#00f0ff] mb-4"
        >
          Engineering Portfolio
        </div>
        <div className="text-2xl sm:text-4xl font-extrabold tracking-tighter text-white font-heading">
          Muhammad Adli Fajriyansyah
        </div>
        <p className="mt-2 text-xs sm:text-sm text-neutral-400 font-mono tracking-wide">
          Full-Stack Developer • System Engineering
        </p>
      </div>

      {/* Bottom percentage & progress indicator */}
      <div className="flex items-end justify-between font-mono">
        <div className="text-xs text-neutral-500 tracking-widest uppercase">
          {percentage < 100 ? 'Configuring environment...' : 'Ready.'}
        </div>
        <div
          ref={counterRef}
          className="text-4xl sm:text-6xl font-extrabold text-white tracking-tighter tabular-nums"
        >
          {String(percentage).padStart(2, '0')}
          <span className="text-xs sm:text-sm font-mono text-[#00f0ff] ml-1">%</span>
        </div>
      </div>
    </div>
  )
}
