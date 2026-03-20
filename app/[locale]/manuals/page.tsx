'use client';

import { useState } from 'react';
import { manuals } from '@/data/manuals';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import type { Locale } from '@/lib/i18n/config';

export default function ManualsPage() {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterGen, setFilterGen] = useState<string>('all');

  const types = Array.from(new Set(manuals.map(m => m.type))).sort();
  const gens = ['NA', 'NB', 'NC', 'ND'];

  const filteredManuals = manuals.filter(manual => {
    const matchesType = filterType === 'all' || manual.type === filterType;
    const matchesGen = filterGen === 'all' || manual.generations.includes(filterGen);
    return matchesType && matchesGen;
  });

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={'en' as Locale}
          items={[{ label: 'Technical Manuals', href: '/en/manuals' }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">Technical Manuals & Resources</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Factory service manuals, wiring diagrams, and technical documentation for all MX-5 generations. Most resources are free and community-maintained.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
              Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
            >
              <option value="all">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
              Generation
            </label>
            <select
              value={filterGen}
              onChange={(e) => setFilterGen(e.target.value)}
              className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
            >
              <option value="all">All Generations</option>
              {gens.map(gen => (
                <option key={gen} value={gen}>{gen}</option>
              ))}
            </select>
          </div>

          <div className="ml-auto flex items-end">
            <div className="font-mono text-sm text-text-muted">
              {filteredManuals.length} resources
            </div>
          </div>
        </div>

        {/* Manuals List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredManuals.map((manual, idx) => (
            <a
              key={idx}
              href={manual.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-card border border-border rounded p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
            >
              <div className="font-mono text-xs text-accent-red uppercase tracking-wider mb-2">
                {manual.type}
              </div>

              <div className="font-display text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                {manual.title}
              </div>

              {manual.description && (
                <div className="text-sm text-text-secondary mb-3">
                  {manual.description}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {manual.generations.map((gen) => (
                  <span
                    key={gen}
                    className="font-mono text-xs px-2 py-0.5 bg-bg-secondary border border-border rounded text-text-muted"
                  >
                    {gen}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
