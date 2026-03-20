import { shops } from '@/data/shops';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import ShopsDirectory from '@/components/shops/ShopsDirectory';
import type { Locale } from '@/lib/i18n/config';

interface ShopsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ShopsPage({ params }: ShopsPageProps) {
  const { locale } = await params;

  // Calculate stats
  const countries = Array.from(new Set(shops.map(s => s.country)));
  const totalShops = shops.length;
  const totalCountries = countries.length;
  const performanceShops = shops.filter(s => s.category === 'Performance').length;
  const worldwideShops = shops.filter(s => s.shipping.includes('Worldwide')).length;

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={[{ label: 'Shops', href: `/${locale}/shops` }]}
        />

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-6xl font-black mb-6">MX-5 Parts & Performance Shops</h1>
          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed mb-8">
            The most comprehensive directory of MX-5 parts suppliers worldwide. From OEM replacement parts to cutting-edge performance upgrades, we&apos;ve curated the best shops across the globe. Whether you&apos;re restoring a classic NA or building a track monster ND, find exactly what you need.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">{totalShops}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Total Shops</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">{totalCountries}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Countries</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">{performanceShops}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Performance Shops</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">{worldwideShops}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Ship Worldwide</div>
          </div>
        </div>

        {/* Shopping Guide */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Shopping Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Choosing the Right Shop</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>OEM Parts:</strong> Choose official dealers for warranty-backed genuine Mazda parts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Performance:</strong> Research shop reputation and track record for your specific goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Used Parts:</strong> Verify return policies and part condition descriptions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>International:</strong> Factor in shipping costs, customs, and return logistics</span>
                </li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Money-Saving Tips</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Compare Prices:</strong> Same part can vary 20-50% between suppliers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Bulk Orders:</strong> Many shops offer discounts for larger orders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Local First:</strong> Check domestic suppliers before ordering internationally</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Seasonal Sales:</strong> Black Friday and end-of-year sales offer big savings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Shops Directory */}
        <ShopsDirectory locale={locale} />

        {/* Additional Resources */}
        <div className="mt-20 space-y-16 border-t border-border pt-16">
          {/* Shipping & International Guide */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">International Shipping Guide</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">🌍 Worldwide Shipping</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Many MX-5 shops offer international shipping, but costs and times vary significantly. Japanese parts suppliers often have the best selection but longer shipping times.
                </p>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue">•</span>
                    <span><strong>Japan to USA:</strong> 7-14 days, $20-50 shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue">•</span>
                    <span><strong>Europe to USA:</strong> 5-10 days, $30-70 shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-blue">•</span>
                    <span><strong>Australia/NZ:</strong> 10-21 days worldwide</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">📋 Customs & Duties</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  International orders may incur customs duties and taxes. Research your local import regulations before ordering expensive parts.
                </p>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>USA:</strong> Duty-free under $800, varies by state</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>EU:</strong> VAT + duties on orders over €150</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Canada:</strong> Taxes on orders over CAD $20</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Regional Recommendations */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Regional Recommendations</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">🇺🇸 North America</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Best for OEM:</strong> Jim Ellis Mazda Parts, MazdaParts.org</p>
                  <p><strong>Best for Performance:</strong> Flyin&apos; Miata, Good-Win Racing</p>
                  <p><strong>Best for Used:</strong> Treasure Coast Miata, Planet Miata</p>
                  <p className="text-xs text-text-muted">Domestic shipping is fast and affordable. Performance scene is very active.</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">🇪🇺 Europe</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Best for OEM:</strong> MX5Parts (UK), IL Motorsport (DE)</p>
                  <p><strong>Best for Performance:</strong> BBR GTi, BOFI Racing</p>
                  <p><strong>Best for Used:</strong> Autolink MX5, MX5 Heaven</p>
                  <p className="text-xs text-text-muted">EU-wide shipping available. Strong track culture drives performance market.</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">🌏 Asia-Pacific</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Best for OEM:</strong> MegaZip (JP), MX5 Mania (AU)</p>
                  <p><strong>Best for Performance:</strong> Maruha Motors (JP)</p>
                  <p><strong>Best for Rare Parts:</strong> UP GARAGE, Yahoo Auctions</p>
                  <p className="text-xs text-text-muted">Japan has the largest selection. Australia/NZ serve the region well.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Actions */}
          <section className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Need Help Finding the Right Parts?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Check out our comprehensive guides for generation-specific buying advice and maintenance schedules.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/buying-guide`}
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Buying Guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/maintenance`}
                className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Maintenance Guides
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
