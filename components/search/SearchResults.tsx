'use client';

import { useState, useEffect, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { searchContent, getPopularSearches, getSearchStats, type SearchResult } from '@/lib/search';
import type { Locale } from '@/lib/i18n/config';

interface SearchResultsProps {
  locale: Locale;
  initialQuery: string;
}

export default function SearchResults({ locale, initialQuery }: SearchResultsProps) {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [generationFilter, setGenerationFilter] = useState<string>('all');
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get search statistics and popular searches
  const searchStats = useMemo(() => getSearchStats(), []);
  const popularSearches = useMemo(() => getPopularSearches(), []);

  // Perform search
  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    const searchResults = searchContent(searchQuery, 50);
    setResults(searchResults);
    setIsLoading(false);
  };

  // Filter results based on category and generation
  const filteredResults = useMemo(() => {
    let filtered = results;

    if (categoryFilter !== 'all') {
      filtered = filtered.filter(result => result.category === categoryFilter);
    }

    if (generationFilter !== 'all') {
      filtered = filtered.filter(result =>
        result.generation?.toLowerCase().includes(generationFilter.toLowerCase())
      );
    }

    return filtered;
  }, [results, categoryFilter, generationFilter]);

  // Handle search input
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      performSearch(query);
      // Update URL without page reload
      const newUrl = `/${locale}/search?q=${encodeURIComponent(query)}`;
      router.push(newUrl, { scroll: false });
    }
  };

  // Handle popular search clicks
  const handlePopularClick = (searchTerm: string) => {
    setQuery(searchTerm);
    performSearch(searchTerm);
    const newUrl = `/${locale}/search?q=${encodeURIComponent(searchTerm)}`;
    router.push(newUrl, { scroll: false });
  };

  // Perform initial search if query exists
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  // Get category icon
  const getCategoryIcon = (category: SearchResult['category']) => {
    const icons = {
      'Generation': '🏁',
      'Special Edition': '⭐',
      'Shop': '🛒',
      'Club': '👥',
      'Community': '💬',
      'Manual': '📖',
      'Content': '📄'
    };
    return icons[category] || '📄';
  };

  // Get category color
  const getCategoryColor = (category: SearchResult['category']) => {
    const colors = {
      'Generation': 'text-accent-red',
      'Special Edition': 'text-accent-gold',
      'Shop': 'text-accent-blue',
      'Club': 'text-accent-green',
      'Community': 'text-purple-400',
      'Manual': 'text-orange-400',
      'Content': 'text-text-primary'
    };
    return colors[category] || 'text-text-primary';
  };

  const categories = Array.from(new Set(results.map(r => r.category)));
  const generations = Array.from(new Set(
    results.map(r => r.generation).filter(Boolean)
  )).sort();

  return (
    <div>
      {/* Search Bar */}
      <div className="mb-8">
        <form onSubmit={handleSearch} className="max-w-4xl mx-auto mb-6">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Miatapedia... (e.g. 'NA8 diff ratios', '30th Anniversary specs')"
              className="w-full px-6 py-4 bg-bg-card border border-border-light rounded text-text-primary font-body text-base outline-none transition-colors focus:border-accent-gold pr-16"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent-gold hover:bg-accent-gold/80 text-black px-4 py-2 rounded font-semibold transition-colors"
            >
              Search
            </button>
          </div>
        </form>

        {/* Search Stats */}
        <div className="text-center mb-6">
          <div className="font-mono text-sm text-text-muted">
            {query ? (
              <span>
                Found <span className="text-accent-gold font-bold">{filteredResults.length}</span> results
                {filteredResults.length !== results.length && (
                  <span> (filtered from {results.length})</span>
                )}
              </span>
            ) : (
              <span>
                Search across <span className="text-accent-gold font-bold">{searchStats.total}</span> items:
                {' '}{searchStats.generations} generations, {searchStats.specialEditions} special editions,
                {' '}{searchStats.shops} shops, {searchStats.communities} communities, and more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Filters */}
      {results.length > 0 && (
        <div className="mb-8 pb-6 border-b border-border">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                Category
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
              >
                <option value="all">All Categories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat} ({results.filter(r => r.category === cat).length})
                  </option>
                ))}
              </select>
            </div>

            {generations.length > 0 && (
              <div>
                <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                  Generation
                </label>
                <select
                  value={generationFilter}
                  onChange={(e) => setGenerationFilter(e.target.value)}
                  className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
                >
                  <option value="all">All Generations</option>
                  {generations.map(gen => (
                    <option key={gen} value={gen}>{gen}</option>
                  ))}
                </select>
              </div>
            )}

            {(categoryFilter !== 'all' || generationFilter !== 'all') && (
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setCategoryFilter('all');
                    setGenerationFilter('all');
                  }}
                  className="bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-secondary hover:text-text-primary hover:border-accent-gold transition-colors font-mono text-sm"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Search Results */}
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-pulse">
            <div className="font-display text-xl text-text-muted">Searching...</div>
          </div>
        </div>
      ) : filteredResults.length > 0 ? (
        <div className="space-y-6">
          {filteredResults.map((result, idx) => (
            <a
              key={result.id || idx}
              href={result.url.startsWith('/') ? result.url : result.url}
              target={result.url.startsWith('http') ? '_blank' : '_self'}
              rel={result.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="block bg-bg-card border border-border rounded-lg p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{getCategoryIcon(result.category)}</span>
                  <div>
                    <div className="font-display text-xl font-bold group-hover:text-accent-gold transition-colors">
                      {result.title}
                    </div>
                    <div className={`font-mono text-xs uppercase tracking-wider ${getCategoryColor(result.category)}`}>
                      {result.category}
                      {result.generation && ` • ${result.generation}`}
                      {result.relevance && ` • ${result.relevance}% match`}
                    </div>
                  </div>
                </div>
                {result.url.startsWith('http') && (
                  <svg className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </div>
              <div className="text-text-secondary leading-relaxed">
                {result.description}
              </div>
              {result.tags && result.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {result.tags.slice(0, 5).map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="font-mono text-xs text-text-muted bg-bg-secondary border border-border px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </a>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🔍</div>
          <div className="font-display text-2xl font-bold mb-4">No results found</div>
          <div className="text-text-secondary mb-8">
            Try different keywords or check out popular searches below
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {popularSearches.map((search, idx) => (
              <button
                key={idx}
                onClick={() => handlePopularClick(search)}
                className="font-mono text-sm text-text-muted border border-border px-3 py-1.5 rounded transition-all hover:text-accent-gold hover:border-accent-gold cursor-pointer bg-transparent"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-6">🔍</div>
          <div className="font-display text-2xl font-bold mb-4">Start Your Search</div>
          <div className="text-text-secondary mb-8 max-w-2xl mx-auto">
            Search across all MX-5 content including generations, special editions, technical guides,
            shops, clubs, and community resources. Try popular searches below:
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {popularSearches.map((search, idx) => (
              <button
                key={idx}
                onClick={() => handlePopularClick(search)}
                className="font-mono text-sm text-text-muted border border-border px-4 py-2 rounded transition-all hover:text-accent-gold hover:border-accent-gold cursor-pointer bg-transparent"
              >
                {search}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}