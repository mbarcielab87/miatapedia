'use client';

import { useState } from 'react';
import { communities } from '@/data/communities';
import type { Locale } from '@/lib/i18n/config';

interface CommunityDirectoryProps {
  locale: Locale;
}

export default function CommunityDirectory({ locale }: CommunityDirectoryProps) {
  const [filterPlatform, setFilterPlatform] = useState<string>('all');
  const [filterFocus, setFilterFocus] = useState<string>('all');

  const platforms = Array.from(new Set(communities.map(c => c.platform))).sort();
  const focuses = Array.from(new Set(communities.map(c => c.focus).filter(Boolean))).sort();

  const filteredCommunities = communities.filter(community => {
    const matchesPlatform = filterPlatform === 'all' || community.platform === filterPlatform;
    const matchesFocus = filterFocus === 'all' || community.focus === filterFocus;
    return matchesPlatform && matchesFocus;
  });

  return (
    <>
      {/* Advanced Filters */}
      <div className="mb-8">
        <h2 className="font-display text-2xl font-bold mb-6">Find Your Community</h2>

        <div className="bg-bg-card border border-border rounded-lg p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                Platform
              </label>
              <select
                value={filterPlatform}
                onChange={(e) => setFilterPlatform(e.target.value)}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold transition-colors"
              >
                <option value="all">All Platforms ({communities.length})</option>
                {platforms.map(platform => (
                  <option key={platform} value={platform}>
                    {platform} ({communities.filter(c => c.platform === platform).length})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
                Focus
              </label>
              <select
                value={filterFocus}
                onChange={(e) => setFilterFocus(e.target.value)}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold transition-colors"
              >
                <option value="all">All Topics</option>
                {focuses.map(focus => (
                  <option key={focus} value={focus}>{focus}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilterPlatform('all');
                  setFilterFocus('all');
                }}
                className="w-full bg-bg-secondary border border-border-light rounded px-4 py-2 text-text-secondary hover:text-text-primary hover:border-accent-gold transition-colors font-mono text-sm"
              >
                Clear Filters
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <div className="font-mono text-text-muted">
              Showing <span className="text-accent-gold font-bold">{filteredCommunities.length}</span> of {communities.length} communities
            </div>
            <div className="flex gap-4 text-xs text-text-muted">
              <span>🌍 Global reach</span>
              <span>💬 Active communities</span>
              <span>🔧 Technical support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Communities List */}
      <div className="space-y-12">
        {platforms.map(platform => {
          const platCommunities = filteredCommunities.filter(c => c.platform === platform);
          if (platCommunities.length === 0) return null;

          const platformColors = {
            'Reddit': 'text-orange-400',
            'Discord': 'text-indigo-400',
            'Forum': 'text-accent-blue',
            'Facebook': 'text-blue-400'
          };

          const platformDescriptions = {
            'Reddit': 'Vote-based discussions, image sharing, and community-driven content',
            'Discord': 'Real-time chat, voice channels, and instant community support',
            'Forum': 'Traditional forums with deep technical discussions and archives',
            'Facebook': 'Regional groups, local meetups, and marketplace discussions'
          };

          return (
            <div key={platform}>
              <div className="mb-8">
                <h2 className={`font-display text-3xl font-bold mb-2 flex items-center gap-3 ${platformColors[platform as keyof typeof platformColors] || 'text-text-primary'}`}>
                  {platform}
                  <span className="font-mono text-sm text-text-muted font-normal">
                    ({platCommunities.length} communities)
                  </span>
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed max-w-4xl">
                  {platformDescriptions[platform as keyof typeof platformDescriptions]}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {platCommunities.map((community, idx) => (
                  <a
                    key={idx}
                    href={community.url !== '#' ? community.url : undefined}
                    target={community.url !== '#' ? '_blank' : undefined}
                    rel={community.url !== '#' ? 'noopener noreferrer' : undefined}
                    className={`bg-bg-card border border-border rounded-lg p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline ${community.url === '#' ? 'cursor-default opacity-80' : ''}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex flex-col gap-1">
                        <div className="font-mono text-xs text-accent-red uppercase tracking-wider">
                          {community.focus || community.platform}
                        </div>
                        {community.platform === 'Facebook' && community.focus && (
                          <div className="font-mono text-xs text-text-muted">
                            📍 {community.focus}
                          </div>
                        )}
                      </div>
                      {community.url !== '#' ? (
                        <svg className="w-4 h-4 text-text-muted group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      ) : (
                        <div className="text-text-muted text-xs">
                          Search
                        </div>
                      )}
                    </div>

                    <div className="font-display text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                      {community.name}
                    </div>

                    {community.description && (
                      <div className="text-sm text-text-secondary mb-4 leading-relaxed">
                        {community.description}
                      </div>
                    )}

                    <div className="flex justify-between items-center">
                      {community.members && (
                        <div className="font-mono text-sm text-accent-gold font-bold">
                          {community.members}
                        </div>
                      )}

                      {community.url === '#' && (
                        <div className="font-mono text-xs text-text-muted">
                          Search on {platform === 'Discord' ? 'Disboard or Discord' : platform}
                        </div>
                      )}
                    </div>

                    {/* Platform-specific indicators */}
                    {platform === 'Reddit' && (
                      <div className="mt-3 flex gap-2">
                        <span className="bg-orange-400/20 border border-orange-400/40 text-orange-400 font-mono text-xs px-2 py-1 rounded">
                          Upvote system
                        </span>
                        <span className="bg-orange-400/20 border border-orange-400/40 text-orange-400 font-mono text-xs px-2 py-1 rounded">
                          Image posts
                        </span>
                      </div>
                    )}

                    {platform === 'Discord' && (
                      <div className="mt-3 flex gap-2">
                        <span className="bg-indigo-400/20 border border-indigo-400/40 text-indigo-400 font-mono text-xs px-2 py-1 rounded">
                          Real-time chat
                        </span>
                        <span className="bg-indigo-400/20 border border-indigo-400/40 text-indigo-400 font-mono text-xs px-2 py-1 rounded">
                          Voice channels
                        </span>
                      </div>
                    )}

                    {platform === 'Forum' && (
                      <div className="mt-3 flex gap-2">
                        <span className="bg-accent-blue/20 border border-accent-blue/40 text-accent-blue font-mono text-xs px-2 py-1 rounded">
                          Technical depth
                        </span>
                        <span className="bg-accent-blue/20 border border-accent-blue/40 text-accent-blue font-mono text-xs px-2 py-1 rounded">
                          Searchable archive
                        </span>
                      </div>
                    )}

                    {platform === 'Facebook' && (
                      <div className="mt-3 flex gap-2">
                        <span className="bg-blue-400/20 border border-blue-400/40 text-blue-400 font-mono text-xs px-2 py-1 rounded">
                          Local focus
                        </span>
                        <span className="bg-blue-400/20 border border-blue-400/40 text-blue-400 font-mono text-xs px-2 py-1 rounded">
                          Marketplace
                        </span>
                      </div>
                    )}
                  </a>
                ))}
              </div>
            </div>
          );
        })}

        {filteredCommunities.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            <div className="font-display text-2xl mb-4">No communities found</div>
            <div className="text-sm">Try adjusting your filters</div>
          </div>
        )}
      </div>
    </>
  );
}