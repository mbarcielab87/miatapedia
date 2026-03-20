'use client';

import { useState } from 'react';
import { manuals } from '@/data/manuals';
import type { Locale } from '@/lib/i18n/config';

interface ManualsDirectoryProps {
  locale: Locale;
}

export default function ManualsDirectory({ locale }: ManualsDirectoryProps) {
  const [filterType, setFilterType] = useState<string>('all');
  const [filterGeneration, setFilterGeneration] = useState<string>('all');

  const types = Array.from(new Set(manuals.map(m => m.type))).sort();
  const generations = ['NA', 'NB', 'NC', 'ND'];

  const filteredManuals = manuals.filter(manual => {
    const matchesType = filterType === 'all' || manual.type === filterType;
    const matchesGeneration = filterGeneration === 'all' || manual.generations.includes(filterGeneration);
    return matchesType && matchesGeneration;
  });

  return (
    <>
      {/* Advanced Filters */}
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold mb-6">Browse All Resources</h2>

        <div className="bg-bg-card border border-border rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                Resource Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold transition-colors"
              >
                <option value="all">All Types ({manuals.length})</option>
                {types.map(type => (
                  <option key={type} value={type}>
                    {type} ({manuals.filter(m => m.type === type).length})
                  </option>
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
                  setFilterType('all');
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
              Showing <span className="text-accent-gold font-bold">{filteredManuals.length}</span> of {manuals.length} resources
            </div>
            <div className="flex gap-4 text-xs text-text-muted">
              <span>📖 Service Manuals</span>
              <span>⚡ Wiring Diagrams</span>
              <span>🔗 Interactive Guides</span>
            </div>
          </div>
        </div>
      </div>

      {/* Manuals List */}
      <div className="space-y-12">
        {types.map(type => {
          const typeManuals = filteredManuals.filter(m => m.type === type);
          if (typeManuals.length === 0) return null;

          const typeColors = {
            'Service Manual': 'text-accent-red',
            'Wiring Diagram': 'text-accent-blue',
            'Interactive Manual': 'text-accent-green',
            'Resource Collection': 'text-accent-gold'
          };

          const typeDescriptions = {
            'Service Manual': 'Complete factory service procedures, torque specifications, and diagnostic information',
            'Wiring Diagram': 'Electrical circuit diagrams, wire colors, and connector pinouts',
            'Interactive Manual': 'Modern web-based manuals with searchable content and interactive features',
            'Resource Collection': 'Community-curated collections of multiple manuals and technical resources'
          };

          const typeIcons = {
            'Service Manual': '📖',
            'Wiring Diagram': '⚡',
            'Interactive Manual': '🔗',
            'Resource Collection': '📚'
          };

          return (
            <div key={type}>
              <div className="mb-8">
                <h2 className={`font-display text-3xl font-bold mb-2 flex items-center gap-3 ${typeColors[type as keyof typeof typeColors] || 'text-text-primary'}`}>
                  <span>{typeIcons[type as keyof typeof typeIcons]}</span>
                  {type}
                  <span className="font-mono text-sm text-text-muted font-normal">
                    ({typeManuals.length} resources)
                  </span>
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed max-w-4xl">
                  {typeDescriptions[type as keyof typeof typeDescriptions]}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {typeManuals.map((manual, idx) => (
                  <a
                    key={idx}
                    href={manual.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-bg-card border border-border rounded-lg p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{typeIcons[type as keyof typeof typeIcons]}</span>
                        <div className="font-mono text-xs text-accent-red uppercase tracking-wider">
                          {type}
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    <div className="font-display text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                      {manual.title}
                    </div>

                    {manual.description && (
                      <div className="text-sm text-text-secondary mb-4 leading-relaxed">
                        {manual.description}
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      <div className="flex flex-wrap gap-2">
                        {manual.generations.map((gen) => {
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

                      {/* Resource type specific indicators */}
                      {type === 'Service Manual' && (
                        <div className="text-xs text-accent-red font-mono">
                          COMPLETE
                        </div>
                      )}
                      {type === 'Wiring Diagram' && (
                        <div className="text-xs text-accent-blue font-mono">
                          ELECTRICAL
                        </div>
                      )}
                      {type === 'Interactive Manual' && (
                        <div className="text-xs text-accent-green font-mono">
                          SEARCHABLE
                        </div>
                      )}
                      {type === 'Resource Collection' && (
                        <div className="text-xs text-accent-gold font-mono">
                          MULTI-SOURCE
                        </div>
                      )}
                    </div>

                    {/* URL preview for known sources */}
                    <div className="mt-3 text-xs text-text-muted font-mono">
                      {manual.url.includes('mellens.net') && '📁 Mellens Collection'}
                      {manual.url.includes('archive.org') && '🏛️ Internet Archive'}
                      {manual.url.includes('mx5manual.com') && '🌐 Interactive Web Manual'}
                      {manual.url.includes('forum.') && '💬 Community Forum'}
                      {manual.url.includes('mighty5s.com') && '🔧 Technical Community'}
                      {manual.url.includes('fixmycarinfo.com') && '🛠️ Repair Database'}
                      {(!manual.url.includes('mellens.net') &&
                        !manual.url.includes('archive.org') &&
                        !manual.url.includes('mx5manual.com') &&
                        !manual.url.includes('forum.') &&
                        !manual.url.includes('mighty5s.com') &&
                        !manual.url.includes('fixmycarinfo.com')) && '🔗 External Resource'}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        {filteredManuals.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            <div className="text-6xl mb-4">📚</div>
            <div className="font-display text-2xl mb-4">No resources found</div>
            <div className="text-sm">Try adjusting your filters to see more results</div>
          </div>
        )}
      </div>
    </>
  );
}