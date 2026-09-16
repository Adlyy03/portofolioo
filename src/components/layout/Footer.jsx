import { useLenis } from '../../hooks/useLenis'
import { personalData, contactData } from '../../data/portfolio'
import { ArrowUp } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { Magnetic } from '../ui/Magnetic'

export function Footer() {
  const { scrollTo } = useLenis()
  const currentYear = new Date().getFullYear()

  const handleBackToTop = (e) => {
    e.preventDefault()
    scrollTo(0, { duration: 1.4 })
  }

  const githubLink = contactData.socials.find((s) => s.name === 'GitHub')?.url

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080c] py-12 sm:py-16 text-neutral-400 font-mono text-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/[0.05]">
          {/* Brand & Purpose */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-white font-heading font-bold text-base tracking-tight">
              <span>{personalData.name}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
            </div>
            <p className="text-neutral-400 text-xs font-mono max-w-sm">
              Full-Stack Developer & Software Engineer. Building resilient digital products.
            </p>
          </div>

          {/* Socials & Back to top */}
          <div className="flex items-center gap-6 self-end md:self-auto">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}

            <Magnetic strength={0.3}>
              <button
                type="button"
                onClick={handleBackToTop}
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-white/[0.04] border border-white/10 hover:border-[#00f0ff]/40 text-white text-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
                aria-label="Back to top of page"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#00f0ff]" />
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Bottom copyright & timestamp */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11px] text-neutral-400">
          <div>
            © {currentYear} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>INDEX // PROD_BUILD</span>
            <span className="text-neutral-500">•</span>
            <span>REACT 19 • GSAP • LENIS • TAILWIND</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
