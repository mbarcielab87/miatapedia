'use client';

import { useState } from 'react';
import { events } from '@/data/events';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import type { Locale } from '@/lib/i18n/config';

export default function EventsPage() {
  const [filterType, setFilterType] = useState<string>('all');

  const types = [...new Set(events.map(e => e.type))].sort();

  const filteredEvents = events.filter(event => {
    return filterType === 'all' || event.type === filterType;
  });

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={'en' as Locale}
          items={[{ label: 'Events', href: '/en/events' }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">MX-5 Events & Gatherings</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Major international events, regional meetups, racing series, and club gatherings. From Miatas at the Gap to track days and conventions.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
              Event Type
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

          <div className="ml-auto flex items-end">
            <div className="font-mono text-sm text-text-muted">
              {filteredEvents.length} events
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredEvents.map((event, idx) => (
            <div
              key={idx}
              className="bg-bg-card border border-border rounded p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover"
            >
              <div className="font-mono text-xs text-accent-red uppercase tracking-wider mb-2">
                {event.type}
              </div>

              <div className="font-display text-xl font-bold mb-2">
                {event.name}
              </div>

              <div className="font-mono text-xs text-text-muted mb-3">
                📍 {event.country} {event.countryCode}
              </div>

              {event.description && (
                <div className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {event.description}
                </div>
              )}

              {event.frequency && (
                <div className="font-mono text-xs text-accent-gold mb-2">
                  🗓️ {event.frequency}
                </div>
              )}

              {event.url && (
                <a
                  href={event.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs text-accent-gold hover:text-text-primary transition-colors"
                >
                  Visit website →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
