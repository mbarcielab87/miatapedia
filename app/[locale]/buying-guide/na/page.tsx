import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NABuyingGuideProps {
  params: { locale: Locale };
}

export default async function NABuyingGuide({ params }: NABuyingGuideProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Buying Guide', href: `/${params.locale}/buying-guide` },
            { label: 'NA (1989-1997)', href: `/${params.locale}/buying-guide/na` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-red rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">NA Buying Guide</h1>
              <div className="font-mono text-lg text-text-muted">1989-1997 • First Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            The original and purest Miata experience. Here&apos;s everything you need to know to find, inspect, and buy the perfect NA.
          </p>
        </div>

        {/* Quick Summary */}
        <section className="mb-12">
          <div className="bg-bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-accent-red">NA at a Glance</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="font-display text-lg font-bold mb-2">Price Range</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Project car</span>
                    <span className="text-text-primary">$3K-$6K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Driver condition</span>
                    <span className="text-text-primary">$6K-$12K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Excellent/low miles</span>
                    <span className="text-text-primary">$12K-$18K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Collector condition</span>
                    <span className="text-text-primary">$18K+</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Best Years</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• <strong>1994-1997:</strong> NA8 more power</li>
                  <li>• <strong>1996-1997:</strong> OBD-II, airbags</li>
                  <li>• <strong>1995:</strong> M-Edition desirable</li>
                  <li>• <strong>Avoid 1990:</strong> Short nose crank</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Ideal Spec</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• 1.8L engine (1994+)</li>
                  <li>• 5-speed manual transmission</li>
                  <li>• Torsen LSD (if available)</li>
                  <li>• Service history documented</li>
                  <li>• Rust-free body</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-4">
              <h4 className="font-display text-lg font-bold mb-2 text-accent-red">Why Buy an NA?</h4>
              <p className="text-text-secondary text-sm">
                The NA offers the purest Miata experience: lightest weight, most connected feel, iconic pop-up headlights, and huge aftermarket support. Perfect for weekend drives, track days, or as an enthusiast project.
              </p>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">What to Look For</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Engine & Drivetrain</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Engine Health Signs</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Smooth idle:</strong> Should idle steadily at ~850 RPM</li>
                    <li>• <strong>Oil condition:</strong> Check for metal particles or milky appearance</li>
                    <li>• <strong>Coolant system:</strong> No rust, proper fluid level</li>
                    <li>• <strong>No smoke:</strong> Blue or white smoke indicates issues</li>
                    <li>• <strong>Temperature gauge:</strong> Should run at center position</li>
                    <li>• <strong>Timing belt:</strong> Must be replaced every 60k miles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Transmission Check</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Smooth shifting:</strong> No grinding or resistance</li>
                    <li>• <strong>Clutch feel:</strong> Should engage smoothly</li>
                    <li>• <strong>No whining:</strong> Especially in 5th gear</li>
                    <li>• <strong>Proper fluid:</strong> Should be clean, not burnt</li>
                    <li>• <strong>Clutch hydraulics:</strong> Firm pedal feel</li>
                    <li>• <strong>Differential:</strong> Test LSD function if equipped</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Body & Interior</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Rust Inspection Points</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Rear fender wells:</strong> Most common rust area</li>
                    <li>• <strong>Door frames:</strong> Check inside and out</li>
                    <li>• <strong>Rocker panels:</strong> Behind plastic covers</li>
                    <li>• <strong>Battery area:</strong> Acid damage common</li>
                    <li>• <strong>Frame rails:</strong> Structural integrity critical</li>
                    <li>• <strong>Trunk floor:</strong> Water intrusion areas</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Interior Condition</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Seat wear:</strong> Check bolster condition</li>
                    <li>• <strong>Dashboard cracks:</strong> Common in sunny climates</li>
                    <li>• <strong>All switches work:</strong> Pop-ups, HVAC, lights</li>
                    <li>• <strong>Door handles:</strong> Interior handle breakage</li>
                    <li>• <strong>Carpet condition:</strong> Water damage signs</li>
                    <li>• <strong>Window regulators:</strong> Test both windows</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Top & Suspension</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Soft Top Assessment</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Fabric condition:</strong> No tears or excessive wear</li>
                    <li>• <strong>Plastic rear window:</strong> Clear, not yellowed/cracked</li>
                    <li>• <strong>Frame operation:</strong> Smooth up/down movement</li>
                    <li>• <strong>Seal integrity:</strong> Check for leaks during rain test</li>
                    <li>• <strong>Zipper function:</strong> Rear window zip should work</li>
                    <li>• <strong>Latch mechanism:</strong> Proper engagement/release</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Suspension & Brakes</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Shock condition:</strong> No leaking, proper damping</li>
                    <li>• <strong>Spring sag:</strong> Even ride height</li>
                    <li>• <strong>Brake pedal feel:</strong> Firm, not spongy</li>
                    <li>• <strong>Rotor condition:</strong> No excessive scoring</li>
                    <li>• <strong>Wheel alignment:</strong> No pulling or wandering</li>
                    <li>• <strong>Bushing wear:</strong> Control arm and diff bushings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Common Issues & Red Flags</h2>

          <div className="space-y-6">
            <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Major Red Flags</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Avoid These Issues</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Short nose crank (1990-1991):</strong> $3K+ repair</li>
                    <li>• <strong>Extensive rust:</strong> Structural compromise</li>
                    <li>• <strong>Timing belt failure:</strong> Interference engine</li>
                    <li>• <strong>Major accident damage:</strong> Affects handling</li>
                    <li>• <strong>No maintenance records:</strong> Unknown reliability</li>
                    <li>• <strong>Seized pop-up motors:</strong> Expensive to fix</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Negotiating Points</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Worn soft top:</strong> $800-1,200 replacement</li>
                    <li>• <strong>Clutch replacement needed:</strong> $800-1,000</li>
                    <li>• <strong>Paint fade/oxidation:</strong> $2,000-4,000 respray</li>
                    <li>• <strong>Suspension wear:</strong> $600-1,200 refresh</li>
                    <li>• <strong>Minor rust spots:</strong> $500-1,500 repair</li>
                    <li>• <strong>Deferred maintenance:</strong> Factor immediate costs</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Known Issues by Year</h3>

              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">1990-1991 (Early NA6)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Short nose crankshaft vulnerability</li>
                    <li>• No passenger airbag</li>
                    <li>• Less refined 1.6L engine tuning</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">1992-1993 (Late NA6)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Fixed crankshaft issue</li>
                    <li>• Added passenger airbag</li>
                    <li>• Still limited to 1.6L engine</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">1994-1997 (NA8)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• More powerful 1.8L engine</li>
                    <li>• OBD-II from 1996 (easier diagnostics)</li>
                    <li>• Generally more refined overall</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trim Levels & Variants */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Trim Levels & Special Editions</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Regular Production Trims</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Base Model</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Manual everything</li>
                      <li>• Steel wheels</li>
                      <li>• Basic radio</li>
                      <li>• Open differential</li>
                      <li>• <strong>Value:</strong> Purest experience</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Package A (1990-1993)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Power steering</li>
                      <li>• Alloy wheels</li>
                      <li>• Better radio</li>
                      <li>• <strong>Value:</strong> Good compromise</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">R-Package (1994-1997)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Torsen limited-slip differential</li>
                      <li>• Bilstein shocks</li>
                      <li>• Strut tower brace</li>
                      <li>• NO power steering</li>
                      <li>• <strong>Value:</strong> Track-focused</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">STO (1994-1995)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Sport Touring Package</li>
                      <li>• Leather interior</li>
                      <li>• Premium audio</li>
                      <li>• <strong>Value:</strong> Luxury option</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Desirable Special Editions</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-accent-red/30 border-2 rounded-lg p-4">
                    <h4 className="font-medium text-accent-red mb-2">British Racing Green (1991)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• 4,000 units produced</li>
                      <li>• BRG paint + tan interior</li>
                      <li>• Minilite-style wheels</li>
                      <li>• <strong>Value:</strong> $15K-25K+</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Black & Tan (1992-1993)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Classic color combination</li>
                      <li>• Leather interior</li>
                      <li>• Alloy wheels</li>
                      <li>• <strong>Value:</strong> $12K-20K+</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-accent-gold/30 border-2 rounded-lg p-4">
                    <h4 className="font-medium text-accent-gold mb-2">M-Edition (1996-1997)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Final NA special editions</li>
                      <li>• Multiple unique colors</li>
                      <li>• Special badges and trim</li>
                      <li>• <strong>Value:</strong> $18K-30K+</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Laguna Blue (1992)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Rare color option</li>
                      <li>• Blue interior accents</li>
                      <li>• Limited production</li>
                      <li>• <strong>Value:</strong> $15K-22K+</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Checklist */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Pre-Purchase Inspection Checklist</h2>

          <div className="bg-bg-card border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Before You Visit</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Research the specific car&apos;s history</li>
                  <li>• ✓ Verify VIN matches title and ads</li>
                  <li>• ✓ Check service records if available</li>
                  <li>• ✓ Bring flashlight for inspection</li>
                  <li>• ✓ Plan for extended test drive</li>
                  <li>• ✓ Arrange pre-purchase inspection</li>
                </ul>

                <h3 className="font-display text-lg font-bold mb-4 mt-6 text-accent-red">During Test Drive</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Cold start - should start easily</li>
                  <li>• ✓ All gears engage smoothly</li>
                  <li>• ✓ No strange noises or vibrations</li>
                  <li>• ✓ Pop-up headlights operate correctly</li>
                  <li>• ✓ Steering is precise and centered</li>
                  <li>• ✓ Brakes feel firm and even</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Physical Inspection</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Check all rust-prone areas thoroughly</li>
                  <li>• ✓ Inspect soft top condition completely</li>
                  <li>• ✓ Test all electrical components</li>
                  <li>• ✓ Check engine bay for leaks/damage</li>
                  <li>• ✓ Inspect tires for even wear patterns</li>
                  <li>• ✓ Look under car with flashlight</li>
                </ul>

                <h3 className="font-display text-lg font-bold mb-4 mt-6 text-accent-red">Documentation</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Clear title with no liens</li>
                  <li>• ✓ Maintenance receipts and records</li>
                  <li>• ✓ Any modification documentation</li>
                  <li>• ✓ Original owner&apos;s manual if available</li>
                  <li>• ✓ Keys (both if equipped)</li>
                  <li>• ✓ Registration current and valid</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ongoing Costs */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Ownership Costs & Maintenance</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Immediate Costs (Typical)</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">New soft top</span>
                  <span className="text-text-primary">$800-1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Timing belt service</span>
                  <span className="text-text-primary">$400-600</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Clutch replacement</span>
                  <span className="text-text-primary">$800-1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Suspension refresh</span>
                  <span className="text-text-primary">$600-1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Brake service (full)</span>
                  <span className="text-text-primary">$300-500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Paint correction</span>
                  <span className="text-text-primary">$500-1,500</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Annual Maintenance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Oil changes (2x/year)</span>
                  <span className="text-text-primary">$80-120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Registration/inspection</span>
                  <span className="text-text-primary">$50-150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Insurance (liability)</span>
                  <span className="text-text-primary">$400-800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Tires (every 2-3 years)</span>
                  <span className="text-text-primary">$400-800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Miscellaneous repairs</span>
                  <span className="text-text-primary">$300-800</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t border-border">
                  <span className="text-text-primary">Total Annual</span>
                  <span className="text-accent-red">$1,200-2,700</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-accent-green/10 border border-accent-green/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Money-Saving Tips</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>DIY maintenance:</strong> NA is very DIY-friendly</li>
                <li>• <strong>Join local clubs:</strong> Knowledge sharing and group buys</li>
                <li>• <strong>Buy quality parts:</strong> OEM or top aftermarket brands</li>
                <li>• <strong>Preventive care:</strong> Address issues before they worsen</li>
              </ul>
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>Learn basic repairs:</strong> Clutch bleeding, brake pads</li>
                <li>• <strong>Find a specialist:</strong> Miata-experienced mechanic</li>
                <li>• <strong>Keep records:</strong> Maintain value with documentation</li>
                <li>• <strong>Garage storage:</strong> Protect from elements</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/buying-guide`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-gold hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Back</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-gold transition-colors">
                  All Buying Guides
                </div>
                <div className="text-text-secondary text-sm">Compare all generations</div>
              </div>
              <div className="text-accent-gold opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href={`/${params.locale}/buying-guide/nb`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-gold hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Next</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-gold transition-colors">
                  NB Buying Guide
                </div>
                <div className="text-text-secondary text-sm">1998-2005 • Second Generation</div>
              </div>
              <div className="text-accent-gold opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <h3 className="font-display text-xl font-bold mb-4">Learn More About the NA</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${params.locale}/generations/na`}
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              NA Generation Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/na`}
              className="inline-flex items-center gap-2 border border-accent-red text-accent-red hover:bg-accent-red hover:text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Schedule
            </Link>
            <Link
              href={`/${params.locale}/special-editions?gen=na`}
              className="inline-flex items-center gap-2 border border-accent-red text-accent-red hover:bg-accent-red hover:text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Special Editions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}