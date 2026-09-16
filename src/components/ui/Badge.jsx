export function Badge({
  children,
  variant = 'neutral',
  dot = false,
  className = '',
}) {
  const variants = {
    neutral: 'bg-white/[0.04] text-neutral-300 border-white/[0.08]',
    emerald: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    amber: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  }

  const dotColors = {
    neutral: 'bg-neutral-400',
    emerald: 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]',
    cyan: 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]',
    amber: 'bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]',
    purple: 'bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.6)]',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono tracking-wider uppercase rounded-sm border ${variants[variant] || variants.neutral} ${className}`}
    >
      {dot && (
        <span
          className={`w-1.5 h-1.5 rounded-full animate-pulse ${dotColors[variant] || dotColors.neutral}`}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
