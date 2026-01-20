export function ScrollCue() {
  return (
    <div className="mt-10 flex items-center gap-3 text-sm text-brand-blue/70">
      <div className="relative h-10 w-6 rounded-full border border-brand-gold/40 bg-white/60">
        <div
          className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-brand-gold motion-reduce:animate-none animate-cue"
          aria-hidden="true"
        />
      </div>
      <span>Scroll to explore</span>
    </div>
  );
}

