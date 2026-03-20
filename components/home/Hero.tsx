interface HeroProps {
  dict: any;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-32 pb-16 relative overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute top-0 right-[-10%] w-[60%] h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent-red-glow to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="font-mono text-xs text-accent-red tracking-[0.15em] uppercase mb-6 flex items-center gap-3 animate-in">
          <span className="w-10 h-px bg-accent-red" />
          {dict.hero.label}
        </div>

        <h1 className="font-display text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight mb-8 animate-in delay-1">
          {dict.hero.title_part1} <em className="italic text-accent-gold">{dict.hero.title_part2}</em>
          <br />
          {dict.hero.title_part3}
        </h1>

        <p className="text-xl text-text-secondary max-w-xl leading-relaxed font-light animate-in delay-2">
          {dict.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-12 mt-16 animate-in delay-3">
          <div className="border-l-2 border-border-light pl-5">
            <div className="font-display text-4xl font-bold text-text-primary">4</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">
              {dict.hero.stats.generations}
            </div>
          </div>
          <div className="border-l-2 border-border-light pl-5">
            <div className="font-display text-4xl font-bold text-text-primary">1.2M+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">
              {dict.hero.stats.units}
            </div>
          </div>
          <div className="border-l-2 border-border-light pl-5">
            <div className="font-display text-4xl font-bold text-text-primary">35+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">
              {dict.hero.stats.years}
            </div>
          </div>
          <div className="border-l-2 border-border-light pl-5">
            <div className="font-display text-4xl font-bold text-text-primary">120+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider mt-1">
              {dict.hero.stats.editions}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
