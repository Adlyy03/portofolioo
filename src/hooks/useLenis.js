import { useEffect, useCallback } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from '../lib/gsap'
import { useReducedMotion } from './useReducedMotion'

let globalLenisInstance = null

export function getLenis() {
  return globalLenisInstance
}

export function useLenis() {
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // If reduced motion is preferred, use browser native scroll
    if (prefersReducedMotion) {
      if (globalLenisInstance) {
        globalLenisInstance.destroy()
        globalLenisInstance = null
      }
      return
    }

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 1,
    })

    globalLenisInstance = lenis

    // Synchronize Lenis scroll position with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    // Connect Lenis to GSAP Ticker for 60fps frame synchronization
    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
      if (globalLenisInstance === lenis) {
        globalLenisInstance = null
      }
    }
  }, [prefersReducedMotion])

  const scrollTo = useCallback(
    (target, options = {}) => {
      if (globalLenisInstance) {
        globalLenisInstance.scrollTo(target, {
          offset: options.offset ?? 0,
          duration: options.duration ?? 1.2,
          immediate: prefersReducedMotion,
        })
      } else {
        const el = typeof target === 'string' ? document.querySelector(target) : target
        if (el) {
          el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })
        }
      }
    },
    [prefersReducedMotion],
  )

  return { scrollTo }
}
