import { Suspense } from 'react';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import SearchResults from '@/components/search/SearchResults';
import type { Locale } from '@/lib/i18n/config';

interface SearchPageProps {
  params: Promise<{ locale: Locale }>;
  searchParams: Promise<{ q?: string }>;
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  const { locale } = await params;
  const { q: query } = await searchParams;

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={[
            { label: 'Search', href: `/${locale}/search` },
            ...(query ? [{ label: `"${query}"`, href: `/${locale}/search?q=${encodeURIComponent(query)}` }] : [])
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-6">
            {query ? 'Search Results' : 'Search Miatapedia'}
          </h1>
          {query ? (
            <p className="text-text-secondary text-lg">
              Showing results for <span className="text-accent-gold font-semibold">&quot;{query}&quot;</span>
            </p>
          ) : (
            <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
              Search across all MX-5 generations, special editions, technical guides, shops, and community resources.
              Find exactly what you need with our comprehensive database.
            </p>
          )}
        </div>

        {/* Search Results Component */}
        <Suspense
          fallback={
            <div className="flex justify-center items-center py-20">
              <div className="animate-pulse">
                <div className="font-display text-xl text-text-muted">Searching...</div>
              </div>
            </div>
          }
        >
          <SearchResults locale={locale} initialQuery={query || ''} />
        </Suspense>
      </div>
    </div>
  );
}

// Generate metadata for search pages
export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q: query } = await searchParams;

  if (query) {
    return {
      title: `Search Results: "${query}" | Miatapedia`,
      description: `Search results for "${query}" across MX-5 generations, guides, shops, and community resources.`
    };
  }

  return {
    title: 'Search | Miatapedia',
    description: 'Search the complete MX-5 database including generations, special editions, technical guides, shops, and community resources.'
  };
}