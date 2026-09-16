import { useRef, useEffect, useState } from 'react'
import { gsap } from '../../lib/gsap'
import { skillCategories } from '../../data/portfolio'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { Check, Code2, Database, Wrench, Compass } from 'lucide-react'

const categoryIcons = {
  frontend: Code2,
  backend: Database,
  tools: Wrench,
  practices: Compass,
}

export function Skills() {
  const containerRef = useRef(null)
  const gridRef = useRef(null)
  const tickerRef = useRef(null)
  const [activeCategory, setActiveCategory] = useState('all')
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const ctx = gsap.context(() => {
      // Reveal skill cards on scroll
      const cards = gridRef.current?.querySelectorAll('.skill-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          },
        )
      }

      // Marquee animation for ticker
      if (tickerRef.current) {
        gsap.to(tickerRef.current, {
          xPercent: -50,
          repeat: -1,
          duration: 35,
          ease: 'none',
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [prefersReducedMotion, activeCategory])

  const filteredCategories =
    activeCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === activeCategory)

  // Collect all skills for marquee
  const allSkillsList = skillCategories.flatMap((cat) => cat.skills.map((s) => s.name))

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06] overflow-hidden"
      aria-label="Bagian Keahlian & Teknologi"
    >
      <SectionHeader
        number="02"
        label="Kompetensi Teknis"
        title="Keahlian & Teknologi"
        description="Inventaris bahasa pemrograman, framework, sistem lingkungan, dan metodologi rekayasa perangkat lunak."
      />

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-3 border-b border-white/[0.06]">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-sm border transition-all ${
            activeCategory === 'all'
              ? 'bg-[#00f0ff] text-black border-[#00f0ff] font-semibold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
              : 'bg-white/[0.03] text-neutral-400 border-white/[0.08] hover:text-white hover:border-white/20'
          }`}
        >
          SEMUA KATEGORI
        </button>

        {skillCategories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase rounded-sm border transition-all ${
              activeCategory === cat.id
                ? 'bg-[#00f0ff] text-black border-[#00f0ff] font-semibold shadow-[0_0_12px_rgba(0,240,255,0.4)]'
                : 'bg-white/[0.03] text-neutral-400 border-white/[0.08] hover:text-white hover:border-white/20'
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Categorized Skills Grid */}
      <div ref={gridRef} className="space-y-8">
        {filteredCategories.map((category) => {
          const Icon = categoryIcons[category.id] || Code2
          return (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-sm bg-[#10121a]/80 border border-white/[0.08] relative overflow-hidden"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-white/[0.06] mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#00f0ff]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-neutral-400">{category.description}</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest self-start sm:self-center">
                  CAT.{category.id.toUpperCase()}
                </span>
              </div>

              {/* Skills Cards within Category */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="skill-card group p-3.5 rounded-sm bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] hover:border-[#00f0ff]/40 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-bold text-sm text-white group-hover:text-[#00f0ff] transition-colors">
                        {skill.name}
                      </span>
                      <Check className="w-3.5 h-3.5 text-neutral-600 group-hover:text-[#00f0ff] transition-colors" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-400 tracking-wider">
                      {skill.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Infinite Horizontal Technology Marquee */}
      <div className="mt-14 pt-8 border-t border-white/[0.06] overflow-hidden select-none">
        <div className="flex w-max" ref={tickerRef}>
          {[...allSkillsList, ...allSkillsList].map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-6 text-sm font-mono text-neutral-500 uppercase tracking-widest"
            >
              <span>{skill}</span>
              <span className="text-[#00f0ff] text-xs">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
