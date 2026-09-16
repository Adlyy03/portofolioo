export function TechnicalGrid() {
  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle vertical rule lines on desktop */}
      <div className="absolute inset-x-0 mx-auto max-w-7xl h-full border-x border-white/[0.03] flex justify-between">
        <div className="hidden md:block w-px h-full bg-white/[0.02]" />
        <div className="hidden lg:block w-px h-full bg-white/[0.02]" />
        <div className="hidden md:block w-px h-full bg-white/[0.02]" />
      </div>

      {/* Subtle crosshair accents in corners */}
      <div className="absolute top-6 left-6 text-white/20 font-mono text-[10px] select-none tracking-widest hidden sm:block">
        +
      </div>
      <div className="absolute top-6 right-6 text-white/20 font-mono text-[10px] select-none tracking-widest hidden sm:block">
        +
      </div>
      <div className="absolute bottom-6 left-6 text-white/20 font-mono text-[10px] select-none tracking-widest hidden sm:block">
        +
      </div>
      <div className="absolute bottom-6 right-6 text-white/20 font-mono text-[10px] select-none tracking-widest hidden sm:block">
        +
      </div>
    </div>
  )
}
