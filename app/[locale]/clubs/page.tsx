'use client';

import { useState } from 'react';
import { clubs, getClubsByCountry } from '@/data/clubs';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import type { Locale } from '@/lib/i18n/config';

export default function ClubsPage() {
  const [filterCountry, setFilterCountry] = useState<string>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const clubsByCountry = getClubsByCountry();
  const countries = Object.keys(clubsByCountry).sort();

  const filteredClubs = clubs.filter(club => {
    const matchesCountry = filterCountry === 'all' || club.country === filterCountry;
    const matchesType = filterType === 'all' || club.type === filterType;
    return matchesCountry && matchesType;
  });

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={'en' as Locale}
          items={[{ label: 'Clubs', href: '/en/clubs' }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">MX-5 Clubs Worldwide</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Connect with MX-5 enthusiasts around the world. Official clubs, regional groups, and online communities organized by country.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
              Filter by Country
            </label>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
              className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
            >
              <option value="all">All Countries ({clubs.length})</option>
              {countries.map(country => (
                <option key={country} value={country}>
                  {country} ({clubsByCountry[country].length})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
              Filter by Type
            </label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
            >
              <option value="all">All Types</option>
              <option value="Club">Club</option>
              <option value="Forum">Forum</option>
              <option value="Community">Community</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
            </select>
          </div>

          <div className="ml-auto flex items-end">
            <div className="font-mono text-sm text-text-muted">
              Showing {filteredClubs.length} of {clubs.length} clubs
            </div>
          </div>
        </div>

        {/* Clubs List */}
        <div className="space-y-8">
          {countries.map(country => {
            const countryClubs = filteredClubs.filter(c => c.country === country);
            if (countryClubs.length === 0) return null;

            return (
              <div key={country}>
                <h2 className="font-display text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-4xl">{countryClubs[0].countryCode}</span>
                  {country}
                  <span className="font-mono text-sm text-text-muted font-normal">
                    ({countryClubs.length})
                  </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {countryClubs.map((club, idx) => (
                    <a
                      key={idx}
                      href={club.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-bg-card border border-border rounded p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
                    >
                      <div className="font-mono text-xs text-accent-red uppercase tracking-wider mb-2">
                        {club.type}
                      </div>
                      <div className="font-display text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
                        {club.name}
                      </div>
                      {club.region && (
                        <div className="font-mono text-xs text-text-muted mb-2">
                          📍 {club.region}
                        </div>
                      )}
                      {club.language && (
                        <div className="font-mono text-xs text-text-secondary">
                          🗣️ {club.language}
                        </div>
                      )}
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
