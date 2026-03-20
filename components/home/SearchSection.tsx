'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';

interface SearchSectionProps {
  locale: Locale;
  dict: any;
}

export default function SearchSection({ locale, dict }: SearchSectionProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/search?q=${encodeURIComponent(query)}`);
    }
  };

  const hints = [
    dict.search.hints.na_vs_nb,
    dict.search.hints.torsen,
    dict.search.hints.mazdaspeed,
    dict.search.hints.coilovers,
    dict.search.hints.engine,
    dict.search.hints.vin,
  ];

  return (
    <section className="px-6 lg:px-12 py-20 text-center border-t border-border bg-gradient-to-b from-bg-primary to-bg-secondary">
      <h2 className="font-display text-4xl font-bold mb-2">{dict.search.heading}</h2>
      <p className="text-text-secondary text-base mb-8">{dict.search.subtitle}</p>

      <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={dict.search.placeholder}
          className="w-full px-6 py-4 bg-bg-card border border-border-light rounded text-text-primary font-body text-base outline-none transition-colors focus:border-accent-gold"
        />
      </form>

      <div className="flex flex-wrap gap-3 justify-center mt-4">
        {hints.map((hint, idx) => (
          <button
            key={idx}
            onClick={() => setQuery(hint)}
            className="font-mono text-xs text-text-muted border border-border px-3 py-1.5 rounded transition-all hover:text-accent-gold hover:border-accent-gold cursor-pointer bg-transparent"
          >
            {hint}
          </button>
        ))}
      </div>
    </section>
  );
}
