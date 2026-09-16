import { useRef, useEffect } from 'react'
import { gsap } from '../../lib/gsap'
import { experienceData } from '../../data/portfolio'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { Badge } from '../../components/ui/Badge'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Calendar, MapPin } from 'lucide-react'

export function Experience() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const itemsRef = useRef([])
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Animate vertical timeline draw line on scroll
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            transformOrigin: 'top center',
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.5,
            },
          },
        )
      }

      // Progressive reveal of timeline cards and markers
      itemsRef.current.forEach((item) => {
        if (!item) return
        gsap.fromTo(
          item,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.75,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
      aria-label="Experience & Technical Journey"
    >
      <SectionHeader
        number="04"
        label="Trajectory & Background"
        title="Experience & Journey"
        description="Chronological progression through software engineering practice, practical internship, and computer science foundations."
      />

      <div className="relative mt-12 sm:mt-16 ml-2 sm:ml-4">
        {/* Animated vertical track line */}
        <div
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[11px] sm:left-[15px] w-px bg-white/10"
        >
          <div
            ref={lineRef}
            className="w-full h-full bg-gradient-to-b from-[#00f0ff] via-emerald-400 to-white/20 origin-top"
          />
        </div>

        {/* Timeline items list */}
        <div className="space-y-12 sm:space-y-16">
          {experienceData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="relative pl-10 sm:pl-14 group"
            >
              {/* Timeline marker node */}
              <div
                className="absolute left-0 top-1.5 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-[#090a0f] border-2 border-white/20 group-hover:border-[#00f0ff] flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(0,0,0,0.8)]"
                aria-hidden="true"
              >
                <div className="w-2 h-2 rounded-full bg-[#00f0ff] group-hover:scale-125 transition-transform" />
              </div>

              {/* Timeline content card */}
              <div className="p-6 sm:p-8 rounded-sm bg-[#11131a] border border-white/[0.08] group-hover:border-white/20 transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-white/[0.06] mb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#00f0ff]">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </div>
                  <Badge variant="neutral">{item.type}</Badge>
                </div>

                {/* Role and Organization */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white tracking-tight">
                  {item.role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-neutral-400 mt-1 mb-4">
                  <span className="text-neutral-300">{item.organization}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-500" />
                    {item.location}
                  </span>
                </div>

                {/* Narrative description */}
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Core competencies applied */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mr-2">
                    FOCUS:
                  </span>
                  {item.skillsApplied.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 text-xs font-mono rounded bg-white/[0.04] text-neutral-300 border border-white/[0.06]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
