import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface BritishRacingGreenPageProps {
  params: { locale: Locale };
}

export default async function BritishRacingGreenPage({ params }: BritishRacingGreenPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Special Editions', href: `/${params.locale}/special-editions` },
            { label: '1991 British Racing Green', href: `/${params.locale}/special-editions/1991-british-racing-green` }
          ]}
        />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-20 rounded bg-accent-red"></div>
                <div>
                  <div className="font-display text-5xl font-black mb-2">
                    1991 British Racing Green
                  </div>
                  <div className="font-mono text-lg text-text-muted">
                    NA Generation • Limited Edition • 4,000 Units
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-bold text-accent-red mb-1">
                #001
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                First Special Edition
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed">
            The British Racing Green Limited Edition marked a pivotal moment in MX-5 history — the very first factory special edition. Released to commemorate Mazda&apos;s racing heritage and the MX-5&apos;s early motorsport success, this iconic model set the template for decades of special editions to come.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">4,000</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Units Produced</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">$16K</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Original MSRP</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">$35K+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Current Value</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">118%</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">ROI (30+ years)</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* The Story */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">The Racing Heritage Story</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                In 1991, the MX-5 was barely two years old but had already proven its motorsport credentials. SCCA racers were discovering what Mazda engineers knew all along — this lightweight roadster was born to race. The British Racing Green Limited Edition was Mazda&apos;s way of celebrating this racing DNA while creating something truly special for enthusiasts.
              </p>
              <p>
                The choice of British Racing Green wasn&apos;t arbitrary. This iconic color has deep motorsport roots, traditionally associated with British racing teams since the early 1900s. Mazda chose it to honor the MX-5&apos;s spiritual connection to classic British roadsters like the Lotus Elan and MGB, cars that directly inspired the MX-5&apos;s development.
              </p>
              <p>
                What made this edition truly special wasn&apos;t just the paint — it was the attention to detail. Every element was carefully considered to create a cohesive, motorsport-inspired aesthetic that would influence special editions for decades to come.
              </p>
            </div>
          </section>

          {/* Specifications */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Complete Specifications</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Exterior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Exterior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Paint Color</span>
                    <span className="text-text-primary">British Racing Green Mica</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Wheels</span>
                    <span className="text-text-primary">15&quot; BBS Alloy Wheels</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Soft Top</span>
                    <span className="text-text-primary">Tan Canvas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Mirrors</span>
                    <span className="text-text-primary">Color-Matched</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Badging</span>
                    <span className="text-text-primary">Special BRG Emblems</span>
                  </div>
                </div>
              </div>

              {/* Interior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Interior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Seats</span>
                    <span className="text-text-primary">Tan Leather</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Dashboard</span>
                    <span className="text-text-primary">Black with Tan Accents</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Door Panels</span>
                    <span className="text-text-primary">Tan Leather Inserts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Steering Wheel</span>
                    <span className="text-text-primary">Leather-Wrapped</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Numbering</span>
                    <span className="text-text-primary">Individual Serial Plate</span>
                  </div>
                </div>
              </div>

              {/* Engine & Performance */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Engine & Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Engine</span>
                    <span className="text-text-primary">1.6L B6-ZE DOHC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">116 hp @ 6,500 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">100 lb-ft @ 5,500 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Transmission</span>
                    <span className="text-text-primary">5-Speed Manual Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,116 lbs (960 kg)</span>
                  </div>
                </div>
              </div>

              {/* Production Details */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Production Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Production Year</span>
                    <span className="text-text-primary">1991 Model Year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Total Production</span>
                    <span className="text-text-primary">4,000 Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Markets</span>
                    <span className="text-text-primary">US Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">VIN Range</span>
                    <span className="text-text-primary">JM1NA3511M0100001-104000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Factory Code</span>
                    <span className="text-text-primary">SE (Special Edition)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Made It Special */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">What Made It Special</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Exclusive Color Combination</h3>
                <p className="text-text-secondary leading-relaxed">
                  The British Racing Green Mica paint was exclusive to this edition and has never been offered again on any MX-5. Combined with the tan soft top and matching tan leather interior, it created a sophisticated, classic roadster aesthetic that perfectly captured the MX-5&apos;s British sports car inspiration.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Premium BBS Wheels</h3>
                <p className="text-text-secondary leading-relaxed">
                  The 15&quot; BBS alloy wheels weren&apos;t just for show — they were lighter than the standard steel wheels and featured a distinctive spoke design that became highly sought after. These wheels alone can command $800-1,200 today if in good condition.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Tan Leather Interior</h3>
                <p className="text-text-secondary leading-relaxed">
                  While other early MX-5s had vinyl or cloth interiors, the BRG featured full tan leather seats and door panel inserts. This premium interior treatment added luxury to the sports car formula and created a warm, inviting cabin atmosphere.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Individual Numbering</h3>
                <p className="text-text-secondary leading-relaxed">
                  Each BRG received an individual serial number plate, making it easy to verify authenticity and track production numbers. This attention to exclusivity set the standard for all future MX-5 special editions.
                </p>
              </div>
            </div>
          </section>

          {/* Market Analysis */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Market Analysis & Investment Potential</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="font-display text-xl font-bold mb-6 text-accent-gold">Current Market Value (2024)</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red mb-2">$20K - $25K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Driver Quality</div>
                  <div className="text-xs text-text-secondary">High mileage, some wear, mechanically sound</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold mb-2">$30K - $40K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Excellent Condition</div>
                  <div className="text-xs text-text-secondary">Well-maintained, low mileage, original paint</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-green mb-2">$45K+</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Concours Quality</div>
                  <div className="text-xs text-text-secondary">Museum quality, ultra-low miles, perfect condition</div>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 1991 British Racing Green has shown remarkable appreciation since its introduction. Originally priced around $16,000, even average examples now command $25,000+, representing a 56% increase over inflation alone. Exceptional examples have reached $50,000+ at auction.
              </p>
              <p>
                Several factors drive this appreciation: it&apos;s the first MX-5 special edition, the color combination has never been repeated, the leather interior ages beautifully, and the BBS wheels are increasingly rare. As the oldest special edition, it also benefits from being built during the &quot;golden era&quot; of NA production when build quality was at its peak.
              </p>
              <p>
                For investors, the BRG represents a sweet spot — significant enough production numbers to find examples, but rare enough to maintain exclusivity. The key is finding original, unmodified examples, as modifications significantly impact value.
              </p>
            </div>
          </section>

          {/* Buying Guide */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Buying Guide: What to Look For</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-green-400">Green Flags ✓</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Original British Racing Green paint with clear coat intact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Tan leather interior in good condition (no cracking)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Original BBS wheels present and undamaged</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Serial number plate still attached and matches documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Original tan soft top in good condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Complete maintenance records and clean Carfax</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-red-400">Red Flags ⚠</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Repainted in different color or obvious touch-up work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Interior reupholstered in different color or material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing or damaged BBS wheels (replacements cost $1,000+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing serial number plate or mismatched VIN</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Extensive modifications (turbo, roll cage, racing seats)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Rust around wheel wells, sills, or soft top frame</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legacy */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Legacy & Impact</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 1991 British Racing Green Limited Edition established the template that Mazda would follow for special editions over the next three decades. The formula — unique color combination, premium interior materials, special wheels, individual numbering, and motorsport inspiration — became the blueprint for over 100 special editions worldwide.
              </p>
              <p>
                More importantly, it proved that MX-5 buyers weren&apos;t just looking for basic transportation — they wanted something special, something with character and exclusivity. This insight led to increasingly creative special editions, from the wild graphics of the R-Package to the sophisticated luxury of the Grand Touring editions.
              </p>
              <p>
                Today, the BRG is considered the &quot;holy grail&quot; of NA special editions. Its combination of first-edition status, gorgeous color scheme, and motorsport heritage makes it one of the most desirable MX-5s ever produced. For many collectors, owning a BRG is the ultimate expression of MX-5 enthusiasm — a connection to the car&apos;s racing roots and the beginning of the special edition tradition.
              </p>
            </div>
          </section>

          {/* Related Special Editions CTA */}
          <section className="border-t border-border pt-16">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Explore More Special Editions
              </h2>
              <p className="text-text-secondary mb-8">
                Discover the complete history of MX-5 special editions and their unique stories
              </p>
              <Link
                href={`/${params.locale}/special-editions`}
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                View All Special Editions
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