import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NDBuyingGuideProps {
  params: { locale: Locale };
}

export default async function NDBuyingGuide({ params }: NDBuyingGuideProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Buying Guide', href: `/${params.locale}/buying-guide` },
            { label: 'ND (2015-Present)', href: `/${params.locale}/buying-guide/nd` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-green rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">ND Buying Guide</h1>
              <div className="font-mono text-lg text-text-muted">2015-Present • Fourth Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            The latest evolution combines NA-like proportions with modern performance and technology. Your complete guide to buying the current generation MX-5.
          </p>
        </div>

        {/* Quick Summary */}
        <section className="mb-12">
          <div className="bg-bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-accent-green">ND at a Glance</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="font-display text-lg font-bold mb-2">Price Range</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">2016-2018 ND1</span>
                    <span className="text-text-primary">$20K-$28K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">2019+ ND2</span>
                    <span className="text-text-primary">$25K-$35K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">RF models</span>
                    <span className="text-text-primary">+$3K-5K premium</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">New 2024+</span>
                    <span className="text-text-primary">$30K-$45K</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Best Years</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• <strong>2019+ (ND2):</strong> 181hp, more refined</li>
                  <li>• <strong>2021+:</strong> Latest improvements</li>
                  <li>• <strong>2017 RF:</strong> RF introduction year</li>
                  <li>• <strong>Avoid 2016:</strong> First model year issues</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Ideal Spec</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• ND2 (2019+) preferred</li>
                  <li>• 6-speed manual transmission</li>
                  <li>• Club or GT trim</li>
                  <li>• RF if hardtop desired</li>
                  <li>• Low mileage with warranty</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-green/10 border border-accent-green/20 rounded-lg p-4">
              <h4 className="font-display text-lg font-bold mb-2 text-accent-green">Why Buy an ND?</h4>
              <p className="text-text-secondary text-sm">
                The ND delivers modern performance, safety, and refinement while returning to the NA&apos;s lightweight philosophy. It&apos;s the most capable and connected MX-5 ever built, perfect for enthusiasts who want contemporary technology.
              </p>
            </div>
          </div>
        </section>

        {/* ND1 vs ND2 */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">ND1 vs ND2: What to Know</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-xl font-bold">ND1 (2016-2018)</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Specifications</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• 155hp @ 6,000 rpm</li>
                    <li>• 148 lb-ft @ 4,600 rpm</li>
                    <li>• 2,332 lbs (soft top)</li>
                    <li>• 0-60 mph: 6.1 seconds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Value Proposition</h4>
                  <p className="text-text-secondary text-sm">Lower entry price, proven reliability, still excellent driving experience. Good choice for budget-conscious buyers.</p>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-green/30 border-2 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-xl font-bold text-accent-green">ND2 (2019+) ⭐ Recommended</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Improvements</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• 181hp @ 7,000 rpm (+26hp)</li>
                    <li>• 151 lb-ft @ 4,000 rpm</li>
                    <li>• Revised suspension tuning</li>
                    <li>• 0-60 mph: 5.7 seconds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Why Choose ND2</h4>
                  <p className="text-text-secondary text-sm">Significantly more power, better refinement, latest technology. Worth the premium for most buyers.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">What to Look For</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Engine & Performance</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Skyactiv-G Engine Health</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Excellent reliability:</strong> Proven across Mazda lineup</li>
                    <li>• <strong>High compression:</strong> 13.0:1 in ND2, requires premium fuel</li>
                    <li>• <strong>Smooth operation:</strong> Linear power delivery</li>
                    <li>• <strong>Oil changes:</strong> 0W-20 synthetic required</li>
                    <li>• <strong>No carbon issues:</strong> Port injection prevents buildup</li>
                    <li>• <strong>Timing chain:</strong> Maintenance-free for 100K+ miles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Transmission Assessment</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>6-speed manual:</strong> Precise, short-throw shifter</li>
                    <li>• <strong>6-speed automatic:</strong> Sport mode available</li>
                    <li>• <strong>Clutch feel:</strong> Should be consistent and smooth</li>
                    <li>• <strong>Rev-matching:</strong> Some models have this feature</li>
                    <li>• <strong>No grinding:</strong> Synchros should be strong</li>
                    <li>• <strong>Hill start assist:</strong> Standard feature</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">RF vs Soft Top</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">RF Specific Checks</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Operation cycle:</strong> 13 seconds, smooth movement</li>
                    <li>• <strong>Panel alignment:</strong> Should align precisely</li>
                    <li>• <strong>Motor sounds:</strong> Relatively quiet operation</li>
                    <li>• <strong>Sealing:</strong> No wind noise when closed</li>
                    <li>• <strong>Speed lockout:</strong> Won&apos;t operate above ~25 mph</li>
                    <li>• <strong>Weight impact:</strong> 104 lbs heavier than soft top</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Soft Top Inspection</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Fabric condition:</strong> Should be like new in most NDs</li>
                    <li>• <strong>Operation:</strong> Easy single-hand operation</li>
                    <li>• <strong>Sealing:</strong> Excellent water protection</li>
                    <li>• <strong>Frame integrity:</strong> Should show no wear</li>
                    <li>• <strong>Window clarity:</strong> Glass rear window standard</li>
                    <li>• <strong>Latch mechanism:</strong> Smooth engagement/release</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Technology & Features</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Infotainment System</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>MZD Connect:</strong> Should boot quickly and respond well</li>
                    <li>• <strong>CarPlay/Android Auto:</strong> 2018+ models</li>
                    <li>• <strong>Touchscreen:</strong> Check for responsiveness</li>
                    <li>• <strong>Navigation:</strong> If equipped, verify function</li>
                    <li>• <strong>Bluetooth:</strong> Pairing and audio quality</li>
                    <li>• <strong>USB ports:</strong> Test charging and data functions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Safety & Driver Aids</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Backup camera:</strong> Clear image quality</li>
                    <li>• <strong>Blind spot monitoring:</strong> If equipped, test alerts</li>
                    <li>• <strong>Cross traffic alert:</strong> Rear parking assistance</li>
                    <li>• <strong>Lane departure:</strong> Some models have warning</li>
                    <li>• <strong>Automatic headlights:</strong> Should function properly</li>
                    <li>• <strong>Rain-sensing wipers:</strong> If equipped</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trim Levels */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Trim Levels & Options</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Standard Trims</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">Sport</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Base trim level</li>
                    <li>• 16-inch wheels</li>
                    <li>• Manual A/C</li>
                    <li>• Cloth seats</li>
                    <li>• <strong>Value:</strong> Pure driving focus</li>
                  </ul>
                </div>

                <div className="border border-accent-green/30 border-2 rounded-lg p-4">
                  <h4 className="font-medium text-accent-green mb-2">Club ⭐</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Limited-slip differential</li>
                    <li>• Bilstein dampers</li>
                    <li>• Strut tower brace</li>
                    <li>• Sport suspension</li>
                    <li>• <strong>Value:</strong> Best for enthusiasts</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">Grand Touring</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Leather interior</li>
                    <li>• Premium Bose audio</li>
                    <li>• Auto climate control</li>
                    <li>• Advanced features</li>
                    <li>• <strong>Value:</strong> Comfort & luxury</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Special Editions & Packages</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Launch Edition (2016)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• 1,000 units produced</li>
                      <li>• Soul Red paint</li>
                      <li>• Special interior trim</li>
                      <li>• <strong>Value:</strong> $28K-35K+</li>
                    </ul>
                  </div>

                  <div className="border border-accent-green/30 border-2 rounded-lg p-4">
                    <h4 className="font-medium text-accent-green mb-2">30th Anniversary (2019)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Racing Orange paint</li>
                      <li>• Rays forged wheels</li>
                      <li>• Recaro seats</li>
                      <li>• <strong>Value:</strong> $35K-45K+</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">RF Launch Edition (2017)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Machine Gray paint</li>
                      <li>• Auburn leather interior</li>
                      <li>• Premium appointments</li>
                      <li>• <strong>Value:</strong> $32K-38K</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">100th Anniversary (2020)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Snowflake White Pearl</li>
                      <li>• Red interior accents</li>
                      <li>• Centennial badging</li>
                      <li>• <strong>Value:</strong> $30K-38K</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">ND Issues & Considerations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent-green/10 border border-accent-green/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Reliability Highlights</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Excellent overall reliability:</strong> Best MX-5 generation</li>
                <li>• <strong>Strong build quality:</strong> Hiroshima manufacturing</li>
                <li>• <strong>Proven powertrain:</strong> Skyactiv technology</li>
                <li>• <strong>Good warranty coverage:</strong> 3yr/36k mile bumper-to-bumper</li>
                <li>• <strong>Active recalls:</strong> Check for completion</li>
                <li>• <strong>Strong resale value:</strong> Holds value well</li>
              </ul>
            </div>

            <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Minor Issues to Watch</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Infotainment bugs:</strong> Early models (software updates available)</li>
                <li>• <strong>RF mechanism:</strong> Rare motor or sensor failures</li>
                <li>• <strong>Paint quality:</strong> Machine Gray prone to water spots</li>
                <li>• <strong>Road noise:</strong> Minimal sound deadening</li>
                <li>• <strong>Storage space:</strong> Very limited trunk capacity</li>
                <li>• <strong>Premium fuel:</strong> Required for ND2 models</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Buying Strategy */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">ND Buying Strategy</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">New vs Used</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">New Purchase Benefits</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Full warranty coverage</li>
                    <li>• Latest features and improvements</li>
                    <li>• Known maintenance history</li>
                    <li>• Financing incentives available</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Used Purchase Value</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Significant depreciation savings</li>
                    <li>• Avoid first-year issues</li>
                    <li>• Known reliability record</li>
                    <li>• More trim/color options available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Negotiation Points</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Value Factors</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• ND2 commands $3K-5K premium</li>
                    <li>• RF adds $3K-5K to value</li>
                    <li>• Club trim preferred by enthusiasts</li>
                    <li>• Manual transmission preferred</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Market Conditions</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Strong demand keeps prices high</li>
                    <li>• Limited depreciation on clean examples</li>
                    <li>• Special editions hold premium</li>
                    <li>• Winter months may offer better deals</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ownership Costs */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">ND Ownership Costs</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Low Maintenance Costs</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Oil changes (synthetic)</span>
                  <span className="text-text-primary">$80-120</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Brake pads (per axle)</span>
                  <span className="text-text-primary">$150-300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Tires (set of 4)</span>
                  <span className="text-text-primary">$600-1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Annual service</span>
                  <span className="text-text-primary">$300-500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Major service (60k)</span>
                  <span className="text-text-primary">$500-800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">RF maintenance (if needed)</span>
                  <span className="text-text-primary">$200-600</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Total Cost of Ownership</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Insurance (full coverage)</span>
                  <span className="text-text-primary">$1,000-1,500/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Fuel (premium required ND2)</span>
                  <span className="text-text-primary">$1,200-1,800/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Maintenance</span>
                  <span className="text-text-primary">$600-1,000/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Registration/taxes</span>
                  <span className="text-text-primary">$200-600/year</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Depreciation (used)</span>
                  <span className="text-text-primary">$1,500-3,000/year</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t border-border">
                  <span className="text-text-primary">Total Annual Cost</span>
                  <span className="text-accent-green">$4,500-7,900</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-start pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/buying-guide/nc`}
            className="flex-1 max-w-md bg-bg-card border border-border rounded-lg p-6 hover:border-accent-blue hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Previous</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-blue transition-colors">
                  NC Buying Guide
                </div>
                <div className="text-text-secondary text-sm">2005-2015 • Third Generation</div>
              </div>
              <div className="text-accent-blue opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <h3 className="font-display text-xl font-bold mb-4">Learn More About the ND</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${params.locale}/generations/nd`}
              className="inline-flex items-center gap-2 bg-accent-green hover:bg-accent-green/80 text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              ND Generation Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/nd`}
              className="inline-flex items-center gap-2 border border-accent-green text-accent-green hover:bg-accent-green hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Schedule
            </Link>
            <Link
              href={`/${params.locale}/special-editions?gen=nd`}
              className="inline-flex items-center gap-2 border border-accent-green text-accent-green hover:bg-accent-green hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Special Editions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}