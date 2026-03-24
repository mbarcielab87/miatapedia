import Link from 'next/link';
import { specialEditions } from '@/data/special-editions';
import type { Locale } from '@/lib/i18n/config';

interface EditionsTickerProps {
  locale: Locale;
  dict: any;
}

export default function EditionsTicker({ locale, dict }: EditionsTickerProps) {
  // Duplicate items for seamless loop
  const items = [...specialEditions, ...specialEditions];

  return (
    <section className="bg-bg-secondary border-t border-b border-border py-12 overflow-hidden">
      <div className="font-mono text-xs text-accent-red tracking-[0.15em] uppercase text-center mb-6">
        {dict.sections.special_editions} — Scroll to explore
      </div>

      <div className="ticker-wrapper overflow-hidden whitespace-nowrap">
        <div className="ticker inline-flex animate-[ticker_40s_linear_infinite] hover:pause">
          {items.map((edition, idx) => (
            <Link
              key={`${edition.slug}-${idx}`}
              href={`/${locale}/special-editions/${edition.slug}`}
              className="inline-flex items-center gap-4 px-8 py-3 mr-4 border border-border-light rounded transition-all hover:border-accent-gold hover:bg-accent-gold-dim cursor-pointer flex-shrink-0 no-underline"
            >
              <span className="font-mono text-xs text-accent-gold">{edition.year}</span>
              <span className="font-display text-base font-semibold text-text-primary">
                {edition.title[locale]}
              </span>
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-wide">
                {edition.generation}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
