import Link from 'next/link';
import { generations } from '@/data/generations';
import type { Locale } from '@/lib/i18n/config';

interface GenerationsGridProps {
  locale: Locale;
  dict: any;
}

export default function GenerationsGrid({ locale, dict }: GenerationsGridProps) {
  return (
    <section className="px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12 border-b border-border pb-6">
          <h2 className="font-display text-5xl font-bold tracking-tight">
            {dict.sections.generations}
          </h2>
          <Link
            href={`/${locale}/generations`}
            className="text-accent-gold no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary flex items-center gap-2"
          >
            {dict.sections.view_all} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {generations.map((gen) => (
            <Link
              key={gen.code}
              href={`/${locale}/generations/${gen.code.toLowerCase()}`}
              className="group bg-bg-card border border-border rounded p-8 transition-all duration-500 hover:bg-bg-card-hover hover:border-border-light hover:-translate-y-1 cursor-pointer relative overflow-hidden no-underline"
              style={{ '--card-accent': gen.accentColor } as React.CSSProperties}
            >
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: gen.accentColor }}
              />

              <div className="font-mono text-xs text-text-muted tracking-wider uppercase mb-2">
                {dict.generation_codes.first.replace('First', gen.code === 'NA' ? 'First' : gen.code === 'NB' ? 'Second' : gen.code === 'NC' ? 'Third' : 'Fourth')}
              </div>
              <div className="font-display text-3xl font-bold mb-3">{gen.name}</div>
              <div className="font-mono text-sm text-accent-gold mb-5">{gen.years}</div>

              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-sm text-text-secondary py-1.5 border-b border-border">
                  <span>{dict.specs.engine}</span>
                  <span className="text-text-primary font-semibold">{gen.engine}</span>
                </div>
                <div className="flex justify-between text-sm text-text-secondary py-1.5 border-b border-border">
                  <span>{dict.specs.power}</span>
                  <span className="text-text-primary font-semibold">{gen.power}</span>
                </div>
                <div className="flex justify-between text-sm text-text-secondary py-1.5 border-b border-border">
                  <span>{dict.specs.weight}</span>
                  <span className="text-text-primary font-semibold">{gen.weight}</span>
                </div>
                <div className="flex justify-between text-sm text-text-secondary py-1.5 border-b border-border">
                  <span>{dict.specs.acceleration}</span>
                  <span className="text-text-primary font-semibold">{gen.acceleration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
