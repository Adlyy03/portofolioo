export function SectionHeader({
  number,
  label,
  title,
  description,
  className = '',
}) {
  return (
    <header className={`mb-12 md:mb-16 ${className}`}>
      {/* Index & Label */}
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="text-[#00f0ff] font-mono text-xs tracking-widest font-semibold">
            // {number}
          </span>
        )}
        {label && (
          <span className="text-neutral-400 font-mono text-xs uppercase tracking-wider">
            {label}
          </span>
        )}
        <div className="h-px bg-white/10 flex-1 max-w-[120px] hidden sm:block" />
      </div>

      {/* Main Section Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
        {title}
      </h2>

      {/* Subtitle / Description */}
      {description && (
        <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed">
          {description}
        </p>
      )}
    </header>
  )
}
