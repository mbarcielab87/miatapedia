'use client';

import { useState } from 'react';
import { shops, getShopsByCategory } from '@/data/shops';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import type { Locale } from '@/lib/i18n/config';

export default function ShopsPage() {
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterCountry, setFilterCountry] = useState<string>('all');

  const shopsByCategory = getShopsByCategory();
  const categories = Object.keys(shopsByCategory).sort();
  const countries = [...new Set(shops.map(s => s.country))].sort();

  const filteredShops = shops.filter(shop => {
    const matchesCategory = filterCategory === 'all' || shop.category === filterCategory;
    const matchesCountry = filterCountry === 'all' || shop.country === filterCountry;
    return matchesCategory && matchesCountry;
  });

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={'en' as Locale}
          items={[{ label: 'Shops', href: '/en/shops' }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">MX-5 Parts & Performance Shops</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            The most comprehensive directory of MX-5 parts suppliers worldwide. From OEM parts to performance upgrades, organized by category and region.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
              Category
            </label>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
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
              className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
            >
              <option value="all">All Countries</option>
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>

          <div className="ml-auto flex items-end">
            <div className="font-mono text-sm text-text-muted">
              Showing {filteredShops.length} of {shops.length} shops
            </div>
          </div>
        </div>

        {/* Shops List */}
        <div className="space-y-12">
          {categories.map(category => {
            const catShops = filteredShops.filter(s => s.category === category);
            if (catShops.length === 0) return null;

            return (
              <div key={category}>
                <h2 className="font-display text-3xl font-bold mb-6 flex items-center gap-3">
                  {category}
                  <span className="font-mono text-sm text-text-muted font-normal">
                    ({catShops.length})
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {catShops.map((shop, idx) => (
                    <a
                      key={idx}
                      href={shop.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bg-card border border-border rounded p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="font-display text-xl font-bold group-hover:text-accent-gold transition-colors">
                          {shop.name}
                        </div>
                        <div className="font-mono text-xs text-text-muted">
                          {shop.countryCode !== 'WW' ? shop.countryCode : '🌍'}
                        </div>
                      </div>

                      {shop.specialty && (
                        <div className="text-sm text-text-secondary mb-3 leading-relaxed">
                          {shop.specialty}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mb-2">
                        {shop.generations.map((gen) => (
                          <span
                            key={gen}
                            className="font-mono text-xs px-2 py-0.5 bg-bg-secondary border border-border rounded text-text-muted"
                          >
                            {gen}
                          </span>
                        ))}
                      </div>

                      <div className="font-mono text-xs text-accent-gold mt-3">
                        🚚 {shop.shipping}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
