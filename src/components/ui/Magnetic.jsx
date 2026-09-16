import { useRef, useEffect } from 'react'
import { gsap } from '../../lib/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function Magnetic({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el || prefersReducedMotion) return

    // Only enable magnetic pull on pointer: fine (mouse) and hover-capable screens
    const isMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!isMouse) return

    const xTo = gsap.quickTo(el, 'x', { duration: 0.8, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.8, ease: 'power3.out' })

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength

      xTo(deltaX)
      yTo(deltaY)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
      gsap.killTweensOf(el)
    }
  }, [strength, prefersReducedMotion])

  return (
    <div ref={ref} className={`inline-block ${className}`}>
      {children}
    </div>
  )
}
