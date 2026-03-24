import { communities } from '@/data/communities';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import CommunityDirectory from '@/components/community/CommunityDirectory';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface CommunityPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function CommunityPage({ params }: CommunityPageProps) {
  const { locale } = await params;

  // Calculate stats
  const totalCommunities = communities.length;
  const forumCount = communities.filter(c => c.platform === 'Forum').length;
  const redditCount = communities.filter(c => c.platform === 'Reddit').length;
  const discordCount = communities.filter(c => c.platform === 'Discord').length;
  const facebookCount = communities.filter(c => c.platform === 'Facebook').length;

  // Get largest communities for highlighting
  const topCommunities = [
    communities.find(c => c.name === 'r/Miata'),
    communities.find(c => c.name === 'Miata.net Forum'),
    communities.find(c => c.name === 'MiataTurbo.net')
  ].filter((community): community is NonNullable<typeof community> => Boolean(community));

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={[{ label: 'Community', href: `/${locale}/community` }]}
        />

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-6xl font-black mb-6">MX-5 Online Communities</h1>
          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed mb-8">
            Connect with fellow Miata enthusiasts across forums, Reddit, Discord, and social media platforms. These online communities are separate from regional clubs and offer everything from technical support to social meetups and marketplace discussions.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">{totalCommunities}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Total Communities</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">{forumCount}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Forums</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">{redditCount}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Reddit</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">{discordCount}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Discord</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-purple-400">{facebookCount}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Facebook</div>
          </div>
        </div>

        {/* Featured Communities */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Featured Communities</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {topCommunities.map((community, idx) => (
              <a
                key={idx}
                href={community.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-card border border-border rounded-lg p-8 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="font-mono text-xs text-accent-red uppercase tracking-wider">
                    {community.platform}
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <div className="font-display text-2xl font-bold mb-4 group-hover:text-accent-gold transition-colors">
                  {community.name}
                </div>

                <div className="text-text-secondary text-sm leading-relaxed mb-4">
                  {community.description}
                </div>

                {community.members && (
                  <div className="font-mono text-sm text-accent-gold font-bold">
                    {community.members}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Community Guide */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Community Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">🗣️ Where to Ask Questions</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Technical Issues:</strong> MiataTurbo.net, Miata.net, or r/Miata</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Buying Advice:</strong> Regional forums or r/Miata weekly threads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Project Help:</strong> Discord communities for real-time support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Parts/Sales:</strong> Forum classified sections or Facebook groups</span>
                </li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">📱 Platform Strengths</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Forums:</strong> Deep technical knowledge, archived solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Reddit:</strong> Quick answers, photo sharing, daily discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Discord:</strong> Real-time chat, voice channels, project progress</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Facebook:</strong> Regional groups, local meetups, marketplace</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Community Directory */}
        <CommunityDirectory locale={locale} />

        {/* Additional Resources */}
        <div className="mt-20 space-y-16 border-t border-border pt-16">
          {/* Community Etiquette */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Community Etiquette</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">✅ Best Practices</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Search first:</strong> Most questions have been asked before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Be specific:</strong> Include year, generation, and symptoms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Share photos:</strong> Visual problems need visual solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Give back:</strong> Answer questions you know when you can</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">❌ Common Mistakes</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Vague titles:</strong> Help! or Question about my Miata</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Cross-posting:</strong> Same question across multiple communities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>No follow-up:</strong> Disappearing after getting help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Arguing specs:</strong> Most debates have been settled</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Popular Topics */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Popular Discussion Topics</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">🔧 Technical</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Engine swaps:</strong> LS, K-series, rotary conversions</p>
                  <p><strong>Forced induction:</strong> Turbo and supercharger builds</p>
                  <p><strong>Suspension:</strong> Coilovers, alignment, handling setup</p>
                  <p className="text-xs text-text-muted">MiataTurbo.net and forums excel here</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">📸 Lifestyle</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Photo sharing:</strong> Track days, scenic drives, builds</p>
                  <p><strong>Meet reports:</strong> Group drives and events</p>
                  <p><strong>Mods showcases:</strong> Before/after transformations</p>
                  <p className="text-xs text-text-muted">Reddit and Instagram-focused groups</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">💰 Marketplace</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Parts wanted:</strong> Hard-to-find OEM and rare parts</p>
                  <p><strong>Car sales:</strong> Complete builds and project cars</p>
                  <p><strong>Local deals:</strong> Regional Facebook groups</p>
                  <p className="text-xs text-text-muted">Facebook groups and forum classifieds</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Actions */}
          <section className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Looking for Local Connections?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              While online communities are great for knowledge sharing, nothing beats connecting with local enthusiasts for hands-on help and group drives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/clubs`}
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Find Local Clubs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/shops`}
                className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Browse Shops
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