'use client';

import { useState } from 'react';
import { shops, getShopsByCategory } from '@/data/shops';
import type { Locale } from '@/lib/i18n/config';

interface ShopsDirectoryProps {
  locale: Locale;
}

export default function ShopsDirectory({ locale }: ShopsDirectoryProps) {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [filterGeneration, setFilterGeneration] = useState<string>('all');

  const shopsByCategory = getShopsByCategory();
  const categories = Object.keys(shopsByCategory).sort();
  const countries = Array.from(new Set(shops.map(s => s.country))).sort();
  const generations = ['NA', 'NB', 'NC', 'ND'];

  const filteredShops = shops.filter(shop => {
    const matchesCategory = filterCategory === 'all' || shop.category === filterCategory;
    const matchesCountry = filterCountry === 'all' || shop.country === filterCountry;
    const matchesGeneration = filterGeneration === 'all' || shop.generations.includes(filterGeneration);
    return matchesCategory && matchesCountry && matchesGeneration;
  });

  return (
    <>
      {/* Advanced Filters */}
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold mb-6">Find Your Perfect Shop</h2>

        <div className="bg-bg-card border border-border rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                Category
              </label>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold transition-colors"
              >
                <option value="all">All Categories ({shops.length})</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat} ({shopsByCategory[cat].length})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                Country
              </label>
              <select
                value={filterCountry}
                onChange={(e) => setFilterCountry(e.target.value)}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold transition-colors"
              >
                <option value="all">All Countries</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                Generation
              </label>
              <select
                value={filterGeneration}
                onChange={(e) => setFilterGeneration(e.target.value)}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold transition-colors"
              >
                <option value="all">All Generations</option>
                {generations.map(gen => (
                  <option key={gen} value={gen}>{gen}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterCategory('all');
                  setFilterCountry('all');
                  setFilterGeneration('all');
                }}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-secondary hover:text-text-primary hover:border-accent-gold transition-colors font-mono text-sm"
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="font-mono text-text-muted">
              Showing <span className="text-accent-gold font-bold">{filteredShops.length}</span> of {shops.length} shops
            </div>
            <div className="flex gap-4 text-xs text-text-muted">
              <span>🌍 Worldwide shipping available</span>
              <span>⚡ Performance specialists</span>
              <span>🔧 OEM parts authorized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Shops List */}
      <div className="space-y-12">
        {categories.map(category => {
          const catShops = filteredShops.filter(s => s.category === category);
          if (catShops.length === 0) return null;

          const categoryColors = {
            'OEM New': 'text-accent-blue',
            'OEM Used': 'text-accent-green',
            'OEM + Aftermarket': 'text-accent-gold',
            'Performance': 'text-accent-red',
            'Marketplace': 'text-purple-400'
          };

          const categoryDescriptions = {
            'OEM New': 'Genuine Mazda parts directly from authorized dealers and distributors',
            'OEM Used': 'Pre-owned OEM parts from salvage yards and part-out specialists',
            'OEM + Aftermarket': 'Mixed inventory offering both genuine Mazda and aftermarket parts',
            'Performance': 'Specialized performance parts, turbo kits, suspension, and racing components',
            'Marketplace': 'Auction sites and marketplaces for finding rare and unique parts'
          };

          return (
            <div key={category}>
              <div className="mb-8">
                <h2 className={`font-display text-3xl font-bold mb-2 flex items-center gap-3 ${categoryColors[category as keyof typeof categoryColors] || 'text-text-primary'}`}>
                  {category}
                  <span className="font-mono text-sm text-text-muted font-normal">
                    ({catShops.length} shops)
                  </span>
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed max-w-4xl">
                  {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {catShops.map((shop, idx) => (
                  <a
                    key={idx}
                    href={shop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bg-card border border-border rounded-lg p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="font-display text-xl font-bold group-hover:text-accent-gold transition-colors">
                        {shop.name}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-text-muted">
                          {shop.countryCode !== 'WW' ? shop.countryCode : '🌍'}
                        </span>
                        <svg className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </div>

                    {shop.specialty && (
                      <div className="text-sm text-text-secondary mb-4 leading-relaxed">
                        {shop.specialty}
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-2">
                        {shop.generations.map((gen) => {
                          const genColors = {
                            'NA': 'bg-accent-red/20 border-accent-red/40 text-accent-red',
                            'NB': 'bg-accent-gold/20 border-accent-gold/40 text-accent-gold',
                            'NC': 'bg-accent-blue/20 border-accent-blue/40 text-accent-blue',
                            'ND': 'bg-accent-green/20 border-accent-green/40 text-accent-green'
                          };
                          return (
                            <span
                              key={gen}
                              className={`font-mono text-xs px-2 py-1 border rounded ${genColors[gen as keyof typeof genColors] || 'bg-bg-secondary border-border text-text-muted'}`}
                            >
                              {gen}
                            </span>
                          );
                        })}
                      </div>

                      <div className="flex items-center gap-2 font-mono text-xs text-accent-gold">
                        <span>🚚</span>
                        <span>{shop.shipping}</span>
                      </div>

                      <div className="text-xs text-text-muted">
                        📍 {shop.country}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}