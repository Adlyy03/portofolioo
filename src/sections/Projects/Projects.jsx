import { useRef, useEffect } from 'react'
import { gsap } from '../../lib/gsap'
import { projectsData } from '../../data/portfolio'
import { SectionHeader } from '../../components/ui/SectionHeader'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { ExternalLink, CheckCircle2 } from 'lucide-react'
import { GithubIcon } from '../../components/ui/Icons'

// Procedural Project Visual Mockup Component
function ProjectVisual({ project }) {
  if (project.id === '01') {
    // GLOSINDO Digital Guestbook Mockup
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#0c0e14] p-4 sm:p-6 rounded-sm border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-white font-semibold">GLOSINDO // RECEPTION_DESK</span>
          </div>
          <span className="text-neutral-500 text-[10px]">VER: 2.4.0</span>
        </div>
        <div className="my-4 space-y-2">
          <div className="p-3 bg-white/[0.03] border border-white/[0.06] rounded flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-[10px]">
                IN
              </div>
              <div>
                <div className="text-white font-medium text-xs">Visitor Check-In Verified</div>
                <div className="text-neutral-500 text-[10px]">Destination: Executive Suite 4A</div>
              </div>
            </div>
            <span className="text-emerald-400 text-[10px] font-bold">LOGGED</span>
          </div>
          <div className="p-3 bg-white/[0.02] border border-white/[0.04] rounded flex items-center justify-between opacity-70">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-white/10 text-neutral-300 flex items-center justify-center font-bold text-[10px]">
                BADGE
              </div>
              <div>
                <div className="text-neutral-300 text-xs">Automated Pass #GL-8821</div>
                <div className="text-neutral-500 text-[10px]">Active Session Valid 4h</div>
              </div>
            </div>
            <span className="text-neutral-400 text-[10px]">ISSUED</span>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-neutral-500 border-t border-white/10 pt-2">
          <span>HOST NOTIFICATION: SENT</span>
          <span className="text-emerald-400">DATABASE: SYNCHRONIZED</span>
        </div>
      </div>
    )
  }

  if (project.id === '02') {
    // Arradea Marketplace Mockup
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#0c0e14] p-4 sm:p-6 rounded-sm border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-white font-semibold">ARRADEA // COMMERCE_ENGINE</span>
          </div>
          <span className="text-cyan-400 text-[10px]">MULTI_VENDOR</span>
        </div>
        <div className="my-3 grid grid-cols-2 gap-2">
          <div className="p-2.5 bg-white/[0.03] border border-white/[0.06] rounded">
            <div className="text-neutral-400 text-[10px]">TOTAL CATALOG</div>
            <div className="text-white text-base font-bold font-heading">1,420 Items</div>
            <div className="text-cyan-400 text-[9px] mt-1">Live Inventory Sync</div>
          </div>
          <div className="p-2.5 bg-white/[0.03] border border-white/[0.06] rounded">
            <div className="text-neutral-400 text-[10px]">CHECKOUT LATENCY</div>
            <div className="text-white text-base font-bold font-heading">~180ms</div>
            <div className="text-emerald-400 text-[9px] mt-1">Optimized Payload</div>
          </div>
        </div>
        <div className="p-2 bg-white/[0.02] border border-white/[0.05] rounded flex items-center justify-between text-[10px]">
          <span className="text-neutral-400">REST API Orders Endpoint</span>
          <span className="text-cyan-400">STATUS 200 OK</span>
        </div>
      </div>
    )
  }

  if (project.id === '03') {
    // Travel Story Mockup
    return (
      <div className="w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#0c0e14] p-4 sm:p-6 rounded-sm border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white font-semibold">TRAVEL STORY // JOURNAL</span>
          </div>
          <span className="text-neutral-500 text-[10px]">EDITORIAL</span>
        </div>
        <div className="my-4 p-3 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded">
          <div className="text-amber-400 text-[10px] font-bold uppercase tracking-wider">
            FEATURED ENTRY // NARRATIVE
          </div>
          <div className="text-white font-heading font-bold text-sm mt-1">
            Across Archipelago Horizons
          </div>
          <p className="text-neutral-400 text-[11px] mt-1 font-sans line-clamp-2">
            Dynamic viewport transitions and typography hierarchy tuned for immersive photojournalism.
          </p>
        </div>
        <div className="flex items-center justify-between text-[10px] text-neutral-500 border-t border-white/10 pt-2">
          <span>COORDINATES: -8.4095, 115.1889</span>
          <span className="text-amber-400">GSAP TIMELINE ACTIVE</span>
        </div>
      </div>
    )
  }

  // Project 04: System Architecture & Dev Tooling
  return (
    <div className="w-full h-full min-h-[220px] sm:min-h-[280px] bg-[#0c0e14] p-4 sm:p-6 rounded-sm border border-white/10 flex flex-col justify-between font-mono text-xs overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-white font-semibold">DEV_TOOLING // DOCKER_STACK</span>
        </div>
        <span className="text-purple-400 text-[10px]">CONTAINERIZED</span>
      </div>
      <div className="my-3 space-y-1.5 text-[11px]">
        <div className="text-neutral-400">$ docker-compose up -d</div>
        <div className="text-emerald-400">✔ Container web-server Started</div>
        <div className="text-emerald-400">✔ Container database-mysql Started</div>
        <div className="text-purple-300">✔ Cache & Redis Cluster Ready</div>
      </div>
      <div className="flex items-center justify-between text-[10px] text-neutral-500 border-t border-white/10 pt-2">
        <span>ENVIRONMENT: LINUX CLI</span>
        <span className="text-purple-400">ZERO DRIFT</span>
      </div>
    </div>
  )
}

export function Projects() {
  const containerRef = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) return

    const mm = gsap.matchMedia()

    mm.add('(min-width: 1024px)', () => {
      // Desktop: Scroll-driven staggered project card reveal & scale
      const cards = containerRef.current?.querySelectorAll('.project-card')
      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0.2, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 75%',
                end: 'top 30%',
                scrub: 0.5,
              },
            },
          )
        })
      }
    })

    mm.add('(max-width: 1023px)', () => {
      // Mobile: lightweight vertical reveal without scrub to guarantee 60fps on mid-range phones
      const cards = containerRef.current?.querySelectorAll('.project-card')
      if (cards) {
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            },
          )
        })
      }
    })

    return () => mm.revert()
  }, [prefersReducedMotion])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.06]"
      aria-label="Selected Projects Showcase"
    >
      <SectionHeader
        number="03"
        label="Featured Architecture"
        title="Selected Projects"
        description="Production web applications engineered with modern frontend interfaces, relational databases, and modular backend APIs."
      />

      <div className="space-y-12 sm:space-y-20">
        {projectsData.map((project) => {
          const hasGithub = Boolean(project.githubUrl)
          const hasLive = Boolean(project.liveUrl)

          return (
            <article
              key={project.id}
              className="project-card group relative p-6 sm:p-10 rounded-sm bg-[#11131a] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Information Column (Left) */}
                <div className="lg:col-span-6 flex flex-col justify-between order-2 lg:order-1">
                  <div>
                    {/* Index & Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-mono text-xs text-[#00f0ff] font-bold">
                        [{project.id}]
                      </span>
                      <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                        {project.category}
                      </span>
                      <span className="text-neutral-600">•</span>
                      <span className="font-mono text-xs text-neutral-500">{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight group-hover:text-[#00f0ff] transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-xs sm:text-sm font-mono text-neutral-400 mt-1 mb-4">
                      {project.subtitle}
                    </div>

                    {/* Description */}
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {project.description}
                    </p>

                    {/* Key features bullets */}
                    <div className="space-y-2 mb-6">
                      {project.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00f0ff] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-sm bg-white/[0.03] text-neutral-300 border border-white/[0.06]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions / Links: Note that if URLs are null, buttons cleanly self-hide */}
                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
                    {hasLive && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black font-mono font-semibold text-xs uppercase tracking-wider rounded-sm hover:bg-[#00f0ff] transition-colors"
                      >
                        <span>Live Preview</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {hasGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white border border-white/10 font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-white/10 transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}

                    {!hasLive && !hasGithub && (
                      <div className="flex items-center gap-2 font-mono text-[11px] text-neutral-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                        <span>Proprietary / Enterprise Workspace Codebase</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Visual Representation Column (Right) */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="relative rounded-sm overflow-hidden border border-white/[0.08] group-hover:border-white/20 transition-all">
                    <ProjectVisual project={project} />
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
