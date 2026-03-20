import { generations } from '@/data/generations';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface GenerationsPageProps {
  params: { locale: Locale };
}

export default async function GenerationsPage({ params }: GenerationsPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[{ label: 'Generations', href: `/${params.locale}/generations` }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">MX-5 Generations</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Four decades of evolution, four distinct generations. Each MX-5 generation brought its own character, improvements, and loyal following. Explore the complete history of the world&apos;s best-selling roadster.
          </p>
        </div>

        {/* Generation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">35+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Years</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">1.2M+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Units Produced</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">120+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Special Editions</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">4</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Generations</div>
          </div>
        </div>

        {/* Generations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {generations.map((generation) => (
            <Link
              key={generation.code}
              href={`/${params.locale}/generations/${generation.code.toLowerCase()}`}
              className="group block bg-bg-card border border-border rounded-lg p-8 transition-all hover:border-accent-gold hover:bg-bg-card-hover no-underline"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-block w-1 h-16 rounded mr-4 ${generation.accentClass}`}></div>
                  <div className="inline-block">
                    <div className="font-display text-3xl font-bold group-hover:text-accent-gold transition-colors">
                      {generation.code}
                    </div>
                    <div className="font-mono text-sm text-text-muted">
                      {generation.years}
                    </div>
                  </div>
                </div>
                <div className="text-text-muted group-hover:text-accent-gold transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                {generation.name}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {generation.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    Engine
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.engine}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    Power
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.power}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    Weight
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.weight}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    Production
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.production}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-16 space-y-12">
          {/* Buying Guide CTA */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Ready to find your perfect MX-5?
            </h2>
            <p className="text-text-secondary mb-6">
              Check out our comprehensive buying guides for each generation
            </p>
            <Link
              href={`/${params.locale}/buying-guide`}
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              View Buying Guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Maintenance CTA */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Want to keep your MX-5 running perfectly?
            </h2>
            <p className="text-text-secondary mb-6">
              Learn proper maintenance with our generation-specific guides
            </p>
            <Link
              href={`/${params.locale}/maintenance`}
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              View Maintenance Guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}