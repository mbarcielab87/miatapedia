'use client';

import { useState } from 'react';
import { communities } from '@/data/communities';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import type { Locale } from '@/lib/i18n/config';

export default function CommunityPage() {
  const [filterPlatform, setFilterPlatform] = useState<string>('all');

  const platforms = Array.from(new Set(communities.map(c => c.platform))).sort();

  const filteredCommunities = communities.filter(community => {
    return filterPlatform === 'all' || community.platform === filterPlatform;
  });

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={'en' as Locale}
          items={[{ label: 'Online Communities', href: '/en/community' }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">Online Communities</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Connect with MX-5 enthusiasts on forums, Reddit, Discord, and social media. These are online communities separate from regional clubs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 pb-6 border-b border-border">
          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">
              Platform
            </label>
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="bg-bg-card border border-border-light rounded px-4 py-2 text-text-primary font-body outline-none focus:border-accent-gold"
            >
              <option value="all">All Platforms</option>
              {platforms.map(platform => (
                <option key={platform} value={platform}>{platform}</option>
              ))}
            </select>
          </div>

          <div className="ml-auto flex items-end">
            <div className="font-mono text-sm text-text-muted">
              {filteredCommunities.length} communities
            </div>
          </div>
        </div>

        {/* Communities by Platform */}
        <div className="space-y-12">
          {platforms.map(platform => {
            const platCommunities = filteredCommunities.filter(c => c.platform === platform);
            if (platCommunities.length === 0) return null;

            return (
              <div key={platform}>
                <h2 className="font-display text-3xl font-bold mb-6">{platform}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {platCommunities.map((community, idx) => (
                    <a
                      key={idx}
                      href={community.url !== '#' ? community.url : undefined}
                      target={community.url !== '#' ? '_blank' : undefined}
                      rel={community.url !== '#' ? 'noopener noreferrer' : undefined}
                      className={`bg-bg-card border border-border rounded p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline ${community.url === '#' ? 'cursor-default' : ''}`}
                    >
                      <div className="font-mono text-xs text-accent-red uppercase tracking-wider mb-2">
                        {community.focus || community.platform}
                      </div>

                      <div className="font-display text-xl font-bold mb-2 group-hover:text-accent-gold transition-colors">
                        {community.name}
                      </div>

                      {community.description && (
                        <div className="text-sm text-text-secondary mb-3 leading-relaxed">
                          {community.description}
                        </div>
                      )}

                      {community.members && (
                        <div className="font-mono text-xs text-accent-gold">
                          {community.members}
                        </div>
                      )}

                      {community.url === '#' && (
                        <div className="font-mono text-xs text-text-muted mt-2">
                          Search on {platform === 'Discord' ? 'Disboard or Discord' : platform}
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
