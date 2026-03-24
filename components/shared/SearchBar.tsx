'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';

interface SearchBarProps {
  locale: Locale;
  placeholder?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  autoFocus?: boolean;
}

export default function SearchBar({
  locale,
  placeholder = "Search Miatapedia...",
  className = "",
  size = 'md',
  autoFocus = false
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/${locale}/search?q=${encodeURIComponent(query)}`);
    }
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-4 text-base',
    lg: 'px-8 py-5 text-lg'
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className}`}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={`
          w-full bg-bg-card border border-border-light rounded text-text-primary font-body
          outline-none transition-colors focus:border-accent-gold pr-16
          ${sizeClasses[size]}
        `}
      />
      <button
        type="submit"
        className={`
          absolute right-2 top-1/2 -translate-y-1/2 bg-accent-gold hover:bg-accent-gold/80
          text-black font-semibold transition-colors rounded
          ${size === 'sm' ? 'px-3 py-1 text-xs' : size === 'lg' ? 'px-6 py-3' : 'px-4 py-2'}
        `}
      >
        {size === 'sm' ? '🔍' : 'Search'}
      </button>
    </form>
  );
}