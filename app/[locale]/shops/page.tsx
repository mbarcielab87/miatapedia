'use client';

import { useState } from 'react';
import { shops, getShopsByCategory } from '@/data/shops';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface ShopsPageProps {
  params: { locale: Locale };
}

export default function ShopsPage({ params }: ShopsPageProps) {
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

  // Calculate stats
  const totalShops = shops.length;
  const totalCountries = countries.length;
  const performanceShops = shops.filter(s => s.category === 'Performance').length;
  const worldwideShops = shops.filter(s => s.shipping.includes('Worldwide')).length;

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[{ label: 'Shops', href: `/${params.locale}/shops` }]}
        />

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-6xl font-black mb-6">MX-5 Parts & Performance Shops</h1>
          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed mb-8">
            The most comprehensive directory of MX-5 parts suppliers worldwide. From OEM replacement parts to cutting-edge performance upgrades, we&apos;ve curated the best shops across the globe. Whether you&apos;re restoring a classic NA or building a track monster ND, find exactly what you need.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">{totalShops}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Total Shops</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">{totalCountries}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Countries</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">{performanceShops}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Performance Shops</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">{worldwideShops}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Ship Worldwide</div>
          </div>
        </div>

        {/* Shopping Guide */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Shopping Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Choosing the Right Shop</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>OEM Parts:</strong> Choose official dealers for warranty-backed genuine Mazda parts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Performance:</strong> Research shop reputation and track record for your specific goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Used Parts:</strong> Verify return policies and part condition descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>International:</strong> Factor in shipping costs, customs, and return logistics</span>
                </li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Money-Saving Tips</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Compare Prices:</strong> Same part can vary 20-50% between suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Bulk Orders:</strong> Many shops offer discounts for larger orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Local First:</strong> Check domestic suppliers before ordering internationally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Seasonal Sales:</strong> Black Friday and end-of-year sales offer big savings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

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

        {/* Additional Resources */}
        <div className="mt-20 space-y-16 border-t border-border pt-16">
          {/* Shipping & International Guide */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">International Shipping Guide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">🌍 Worldwide Shipping</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Many MX-5 shops offer international shipping, but costs and times vary significantly. Japanese parts suppliers often have the best selection but longer shipping times.
                </p>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue">•</span>
                    <span><strong>Japan to USA:</strong> 7-14 days, $20-50 shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue">•</span>
                    <span><strong>Europe to USA:</strong> 5-10 days, $30-70 shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue">•</span>
                    <span><strong>Australia/NZ:</strong> 10-21 days worldwide</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">📋 Customs & Duties</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  International orders may incur customs duties and taxes. Research your local import regulations before ordering expensive parts.
                </p>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>USA:</strong> Duty-free under $800, varies by state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>EU:</strong> VAT + duties on orders over €150</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Canada:</strong> Taxes on orders over CAD $20</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Regional Recommendations */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Regional Recommendations</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">🇺🇸 North America</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Best for OEM:</strong> Jim Ellis Mazda Parts, MazdaParts.org</p>
                  <p><strong>Best for Performance:</strong> Flyin&apos; Miata, Good-Win Racing</p>
                  <p><strong>Best for Used:</strong> Treasure Coast Miata, Planet Miata</p>
                  <p className="text-xs text-text-muted">Domestic shipping is fast and affordable. Performance scene is very active.</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">🇪🇺 Europe</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Best for OEM:</strong> MX5Parts (UK), IL Motorsport (DE)</p>
                  <p><strong>Best for Performance:</strong> BBR GTi, BOFI Racing</p>
                  <p><strong>Best for Used:</strong> Autolink MX5, MX5 Heaven</p>
                  <p className="text-xs text-text-muted">EU-wide shipping available. Strong track culture drives performance market.</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">🌏 Asia-Pacific</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Best for OEM:</strong> MegaZip (JP), MX5 Mania (AU)</p>
                  <p><strong>Best for Performance:</strong> Maruha Motors (JP)</p>
                  <p><strong>Best for Rare Parts:</strong> UP GARAGE, Yahoo Auctions</p>
                  <p className="text-xs text-text-muted">Japan has the largest selection. Australia/NZ serve the region well.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Actions */}
          <section className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Need Help Finding the Right Parts?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Check out our comprehensive guides for generation-specific buying advice and maintenance schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.locale}/buying-guide`}
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Buying Guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${params.locale}/maintenance`}
                className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Maintenance Guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
