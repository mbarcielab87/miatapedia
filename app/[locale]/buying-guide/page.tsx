import { generations } from '@/data/generations';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface BuyingGuidePageProps {
  params: { locale: Locale };
}

export default async function BuyingGuidePage({ params }: BuyingGuidePageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[{ label: 'Buying Guide', href: `/${params.locale}/buying-guide` }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">MX-5 Buying Guide</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Complete buying guides for every MX-5 generation. Learn what to look for, common issues, pricing expectations, and get expert advice for finding your perfect Miata.
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">$3K-$50K</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Price Range</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">4</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Generation Guides</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">35+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Years Covered</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">1.2M+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Cars to Choose From</div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Quick Start: Which Generation for You?</h2>

          <div className="bg-bg-card border border-border rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">First-Time Buyer?</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Budget under $10k:</strong> NA (1989-1997) - Classic charm</li>
                  <li>• <strong>Budget $10-20k:</strong> NB (1998-2005) - Modern reliability</li>
                  <li>• <strong>Budget $20-30k:</strong> NC (2005-2015) - Comfort & hardtop</li>
                  <li>• <strong>Budget $30k+:</strong> ND (2015+) - Latest & greatest</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Priorities?</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Pure driving experience:</strong> NA with manual everything</li>
                  <li>• <strong>Daily driver comfort:</strong> NC or ND with modern features</li>
                  <li>• <strong>Track/autocross:</strong> NA/NB for weight, ND for rigidity</li>
                  <li>• <strong>Modification potential:</strong> NA/NB huge aftermarket</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Universal MX-5 Buying Tips</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-text-primary mb-2">Essential Checks</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Service history documentation</li>
                  <li>• Rust inspection (especially rear)</li>
                  <li>• Soft top condition</li>
                  <li>• Transmission feel</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">Red Flags</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Missing maintenance records</li>
                  <li>• Rust bubbles or patches</li>
                  <li>• Harsh shifting or grinding</li>
                  <li>• Extensive modifications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">Best Value</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Higher mileage with service history</li>
                  <li>• Manual transmission preferred</li>
                  <li>• Avoid accident damage</li>
                  <li>• Consider future maintenance costs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Generation Buying Guides */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Generation-Specific Guides</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {generations.map((generation) => (
              <Link
                key={generation.code}
                href={`/${params.locale}/buying-guide/${generation.code.toLowerCase()}`}
                className="group block bg-bg-card border border-border rounded-lg p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover no-underline"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-12 rounded ${generation.accentClass}`}></div>
                    <div>
                      <div className="font-display text-2xl font-bold group-hover:text-accent-gold transition-colors">
                        {generation.code} Buying Guide
                      </div>
                      <div className="font-mono text-sm text-text-muted">
                        {generation.years}
                      </div>
                    </div>
                  </div>
                  <div className="text-text-muted group-hover:text-accent-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {getGenerationDescription(generation.code)}
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="font-mono text-text-muted uppercase tracking-wider mb-1">
                      Price Range
                    </div>
                    <div className="text-text-primary font-medium">
                      {getPriceRange(generation.code)}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-text-muted uppercase tracking-wider mb-1">
                      Best For
                    </div>
                    <div className="text-text-primary font-medium">
                      {getBestFor(generation.code)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Market Insights */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Current Market Insights</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-lg font-bold">Rising Values</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Clean NA and NB examples are appreciating. Low-mileage, original cars command premium prices.
              </p>
              <div className="text-accent-green text-sm font-medium">+15% year-over-year</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                <h3 className="font-display text-lg font-bold">Best Values</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                NC generation offers modern features at reasonable prices. PRHT models particularly attractive.
              </p>
              <div className="text-accent-blue text-sm font-medium">$15-25k sweet spot</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                <h3 className="font-display text-lg font-bold">Avoid</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                High-mileage examples without service history, extensive modifications, or rust issues.
              </p>
              <div className="text-accent-red text-sm font-medium">Save for better examples</div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Ready to dive deeper?
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Each generation has unique characteristics, common issues, and price considerations.
            Choose your generation below for detailed buying advice.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {generations.map((generation) => (
              <Link
                key={generation.code}
                href={`/${params.locale}/buying-guide/${generation.code.toLowerCase()}`}
                className={`inline-flex items-center gap-2 border-2 hover:bg-white hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm ${getGenerationButtonClasses(generation.code)}`}
              >
                {generation.code} Guide
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getGenerationDescription(code: string): string {
  const descriptions = {
    'NA': 'The classic. Perfect for enthusiasts who want the pure roadster experience with iconic pop-up headlights.',
    'NB': 'The sweet spot. More refined than NA with modern conveniences, excellent aftermarket support.',
    'NC': 'The practical choice. Contemporary safety, optional hardtop, comfortable for daily driving.',
    'ND': 'The latest evolution. Modern technology meets classic MX-5 DNA with excellent build quality.'
  };
  return descriptions[code as keyof typeof descriptions] || '';
}

function getPriceRange(code: string): string {
  const ranges = {
    'NA': '$3K-$15K',
    'NB': '$6K-$20K',
    'NC': '$12K-$28K',
    'ND': '$20K-$45K'
  };
  return ranges[code as keyof typeof ranges] || '';
}

function getBestFor(code: string): string {
  const bestFor = {
    'NA': 'Purists',
    'NB': 'First-timers',
    'NC': 'Daily drivers',
    'ND': 'Modern features'
  };
  return bestFor[code as keyof typeof bestFor] || '';
}

function getGenerationButtonClasses(code: string): string {
  const classes = {
    'NA': 'border-accent-red text-accent-red',
    'NB': 'border-accent-gold text-accent-gold',
    'NC': 'border-accent-blue text-accent-blue',
    'ND': 'border-accent-green text-accent-green'
  };
  return classes[code as keyof typeof classes] || 'border-accent-red text-accent-red';
}