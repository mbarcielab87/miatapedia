import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface CommunitySectionProps {
  locale: Locale;
  dict: any;
}

export default function CommunitySection({ locale, dict }: CommunitySectionProps) {
  const communities = [
    {
      platform: 'Reddit',
      name: 'r/Miata',
      desc: 'The largest online MX-5 community. Builds, questions, memes, and everything in between.',
      members: '400k+ members',
      url: 'https://www.reddit.com/r/Miata/',
    },
    {
      platform: 'Forum',
      name: 'Miata.net Forum',
      desc: 'Running since 1994. The deepest technical knowledge base for all generations.',
      members: '1.4M monthly visits',
      url: 'https://forum.miata.net/vb/',
    },
    {
      platform: 'Forum',
      name: 'MiataTurbo.net',
      desc: 'The go-to for forced induction builds, engine swaps, and serious performance modifications.',
      members: '50k+ members',
      url: 'https://www.miataturbo.net/',
    },
    {
      platform: 'UK',
      name: 'MX-5 Owners Club',
      desc: 'The official UK owners club with regional meets, trackdays, and technical resources.',
      members: 'mx5oc.co.uk',
      url: 'https://forum.mx5oc.co.uk/',
    },
    {
      platform: 'Forum',
      name: 'ClubRoadster.net',
      desc: 'Active forum covering all generations with strong classifieds and technical sections.',
      members: 'Active community',
      url: 'https://www.clubroadster.net/',
    },
    {
      platform: 'Japan',
      name: 'Roadster Club Japan',
      desc: 'The heart of the Eunos Roadster community. Events, restoration, and JDM-specific knowledge.',
      members: 'roadster.jp',
      url: 'https://www.open-inc.co.jp/rcoj/',
    },
  ];

  return (
    <section className="bg-bg-secondary border-t border-border px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12 border-b border-border pb-6">
          <h2 className="font-display text-5xl font-bold tracking-tight">
            {dict.sections.community}
          </h2>
          <Link
            href={`/${locale}/community`}
            className="text-accent-gold no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary flex items-center gap-2"
          >
            {dict.sections.view_all_groups} →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community, idx) => (
            <a
              key={idx}
              href={community.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-card border border-border rounded p-8 transition-all hover:border-accent-gold hover:bg-bg-card-hover cursor-pointer no-underline"
            >
              <div className="font-mono text-[10px] text-accent-red tracking-wider uppercase mb-3">
                {community.platform}
              </div>
              <div className="font-display text-xl font-bold mb-2">{community.name}</div>
              <div className="text-sm text-text-secondary leading-relaxed">{community.desc}</div>
              <div className="font-mono text-xs text-accent-gold mt-4">{community.members}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
