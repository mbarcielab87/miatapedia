import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NDPageProps {
  params: { locale: Locale };
}

export default async function NDPage({ params }: NDPageProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Generations', href: `/${params.locale}/generations` },
            { label: 'ND (2015-Present)', href: `/${params.locale}/generations/nd` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-green rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">ND Generation</h1>
              <div className="font-mono text-lg text-text-muted">2015-Present • Fourth Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            Back to basics with modern sophistication. The ND returns to NA-like proportions and weight while delivering contemporary performance, safety, and technology.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-8 border-b border-border">
          <div>
            <div className="font-display text-2xl font-bold text-accent-green">350,000+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Production to Date</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-green">9+ Years</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Current Production</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-green">15+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Special Editions</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-green">2</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Sub-generations</div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Return to Essence</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary leading-relaxed mb-4">
              The ND generation marked a dramatic return to the MX-5&apos;s roots. After the NC&apos;s growth in size and weight, Mazda made the bold decision to downsize, creating a car closer to the original NA in spirit and dimensions while incorporating decades of technological advancement.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Built on an entirely new Skyactiv platform, the ND features ultra-high-tensile steel construction that&apos;s both lighter and stronger than previous generations. The result is a car that weighs just 200 pounds more than the original NA while offering dramatically improved safety, performance, and refinement.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The ND represents the culmination of 25 years of MX-5 evolution, combining the purity and lightweight philosophy of the NA with modern performance, efficiency, and safety standards. It&apos;s simultaneously the most capable and most connected MX-5 ever built.
            </p>
          </div>
        </section>

        {/* ND1 vs ND2 */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">ND1 vs ND2</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-xl font-bold">ND1 (2016-2018)</h3>
              </div>
              <div className="mb-4">
                <div className="font-display text-lg font-bold mb-2">2.0L Skyactiv-G</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">155 hp @ 6,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">148 lb-ft @ 4,600 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,332 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">6.1 sec</span>
                  </div>
                </div>
              </div>
              <div className="text-text-secondary text-sm">
                The reborn MX-5. Revolutionary lightweight construction with modern safety and efficiency standards.
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-xl font-bold">ND2 (2019-Present)</h3>
              </div>
              <div className="mb-4">
                <div className="font-display text-lg font-bold mb-2">2.0L Skyactiv-G Revised</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">181 hp @ 7,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">151 lb-ft @ 4,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,341 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">5.7 sec</span>
                  </div>
                </div>
              </div>
              <div className="text-text-secondary text-sm">
                Refined and more powerful. Higher compression ratio, revised intake, and enhanced driving dynamics.
              </div>
            </div>
          </div>

          <div className="mt-6 bg-bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Key ND2 Improvements (2019+)</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-text-primary mb-2">Engine Enhancements</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Higher 13.0:1 compression ratio</li>
                  <li>• Revised intake and exhaust systems</li>
                  <li>• New pistons and connecting rods</li>
                  <li>• Advanced engine management</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">Chassis & Suspension</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Revised suspension tuning</li>
                  <li>• Larger front brakes</li>
                  <li>• Updated steering calibration</li>
                  <li>• Improved NVH characteristics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skyactiv Technology */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Skyactiv Technology</h2>

          <div className="bg-bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Skyactiv-Chassis</h3>
            <p className="text-text-secondary mb-4">
              The ND&apos;s chassis represents a masterclass in lightweight engineering. Using ultra-high-tensile steel in critical areas while maintaining conventional steel in others, Mazda achieved a 220-pound weight reduction compared to the NC while dramatically improving rigidity.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-text-primary mb-1">Torsional Rigidity</div>
                <div className="text-accent-green">+15% vs NC</div>
              </div>
              <div>
                <div className="font-medium text-text-primary mb-1">Weight Reduction</div>
                <div className="text-accent-green">-220 lbs vs NC</div>
              </div>
              <div>
                <div className="font-medium text-text-primary mb-1">Steel Usage</div>
                <div className="text-accent-green">58% high-tensile</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Skyactiv-G Engine</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• High compression ratio (13.0:1 ND2)</li>
                <li>• Advanced combustion chamber design</li>
                <li>• Optimized intake and exhaust systems</li>
                <li>• Reduced friction throughout</li>
                <li>• Excellent fuel efficiency</li>
                <li>• Linear power delivery</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Skyactiv-MT/AT</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Ultra-precise 6-speed manual</li>
                <li>• Short-throw shifter design</li>
                <li>• Optimized gear ratios</li>
                <li>• Available 6-speed automatic</li>
                <li>• Manual mode with paddle shifters</li>
                <li>• Sport mode programming</li>
              </ul>
            </div>
          </div>
        </section>

        {/* RF vs Soft Top */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">RF vs Soft Top</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">MX-5 Soft Top</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Weight</span>
                  <span className="text-text-primary">2,341 lbs (ND2)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Top Operation</span>
                  <span className="text-text-primary">Manual, ~8 seconds</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Price</span>
                  <span className="text-text-primary">Base model</span>
                </div>
              </div>
              <div className="text-text-secondary text-sm mb-4">
                Classic roadster purity with minimal weight penalty. Features a refined manual soft top that&apos;s easier to operate than any previous generation.
              </div>
              <div className="text-accent-green text-sm font-medium">Purist&apos;s choice for weight and simplicity</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">MX-5 RF (Retractable Fastback)</h3>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Weight</span>
                  <span className="text-text-primary">2,445 lbs (+104 lbs)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Top Operation</span>
                  <span className="text-text-primary">Electric, 13 seconds</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-muted">Price</span>
                  <span className="text-text-primary">+$3,000 premium</span>
                </div>
              </div>
              <div className="text-text-secondary text-sm mb-4">
                Unique targa-style design with power operation. Maintains roof pillars for distinctive coupe-like profile even when open.
              </div>
              <div className="text-accent-green text-sm font-medium">Distinctive fastback styling with open-air freedom</div>
            </div>
          </div>
        </section>

        {/* Trim Levels & Options */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Trim Levels & Key Options</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-lg font-bold">Sport</h3>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Base Trim</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• LED headlights and taillights</li>
                <li>• 16-inch alloy wheels</li>
                <li>• Manual air conditioning</li>
                <li>• 6-speed manual transmission standard</li>
                <li>• Cloth seats with manual adjustment</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-lg font-bold">Club</h3>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Performance Focus</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Limited-slip differential</li>
                <li>• Bilstein dampers</li>
                <li>• Sport-tuned suspension</li>
                <li>• Strut tower brace</li>
                <li>• BBS wheels (available)</li>
                <li>• Recaro seats (available)</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-lg font-bold">Grand Touring</h3>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Luxury & Technology</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Premium leather interior</li>
                <li>• Automatic climate control</li>
                <li>• Heated seats</li>
                <li>• Premium Bose audio system</li>
                <li>• Advanced keyless entry</li>
                <li>• Auto-dimming rearview mirror</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Special Editions */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Notable Special Editions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-green">30th Anniversary (2019)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Celebrating three decades with Racing Orange paint, Rays wheels, Recaro seats, and Bilstein suspension.
              </p>
              <div className="text-xs text-text-muted">3,000 units worldwide</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-green">100th Anniversary (2020)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Honoring Mazda&apos;s centennial with Snowflake White Pearl paint, red interior accents, and special badging.
              </p>
              <div className="text-xs text-text-muted">Limited production run</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-green">Club (2016-Present)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Performance-focused trim with LSD, Bilstein dampers, and available BBS wheels for track enthusiasts.
              </p>
              <div className="text-xs text-text-muted">Ongoing production trim</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-green">RF Launch Edition (2017)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Introduced the RF variant with Machine Gray paint, Auburn leather, and premium appointments.
              </p>
              <div className="text-xs text-text-muted">1,000 units for US market</div>
            </div>
          </div>
        </section>

        {/* Advanced Features */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Modern Technology & Safety</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Safety Systems</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Advanced airbag system</li>
                <li>• Roll bars with pop-up system</li>
                <li>• Dynamic Stability Control (DSC)</li>
                <li>• Traction Control System (TCS)</li>
                <li>• Anti-lock Braking System (ABS)</li>
                <li>• Electronic Brakeforce Distribution</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Technology Features</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• MZD Connect infotainment system</li>
                <li>• Apple CarPlay / Android Auto</li>
                <li>• Premium Bose audio (GT trim)</li>
                <li>• Automatic climate control</li>
                <li>• LED lighting throughout</li>
                <li>• Advanced key system</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Reliability & Maintenance</h2>

          <div className="bg-accent-green/10 border border-accent-green/20 rounded-lg p-6 mb-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Reliability Highlights</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>Excellent reliability:</strong> Skyactiv engines proven across Mazda lineup</li>
              <li>• <strong>Quality build:</strong> Hiroshima plant known for precision assembly</li>
              <li>• <strong>Strong warranties:</strong> Comprehensive coverage for peace of mind</li>
              <li>• <strong>Simple maintenance:</strong> Straightforward service requirements</li>
              <li>• <strong>Parts availability:</strong> Excellent global parts network</li>
            </ul>
          </div>

          <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6 mb-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Minor Issues to Monitor</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>RF mechanism:</strong> Occasional motor or sensor issues</li>
              <li>• <strong>Infotainment:</strong> Early models had software bugs</li>
              <li>• <strong>Paint:</strong> Machine Gray prone to water spots</li>
              <li>• <strong>Soft top:</strong> Premature wear in extreme climates</li>
              <li>• <strong>Clutch feel:</strong> Some prefer aftermarket solutions</li>
            </ul>
          </div>

          <div className="bg-bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Maintenance Schedule</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>7,500 miles:</strong> Oil change and multi-point inspection</li>
              <li>• <strong>15,000 miles:</strong> Cabin filter, tire rotation</li>
              <li>• <strong>30,000 miles:</strong> Major service, transmission fluid</li>
              <li>• <strong>60,000 miles:</strong> Spark plugs, major fluid changes</li>
              <li>• <strong>100,000 miles:</strong> Timing chain inspection, cooling system service</li>
            </ul>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-start pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/generations/nc`}
            className="flex-1 max-w-md bg-bg-card border border-border rounded-lg p-6 hover:border-accent-blue hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Previous</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-blue transition-colors">
                  NC Generation
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
              href={`/${params.locale}/buying-guide/nd`}
              className="inline-flex items-center gap-2 bg-accent-green hover:bg-accent-green/80 text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              ND Buying Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/nd`}
              className="inline-flex items-center gap-2 border border-accent-green text-accent-green hover:bg-accent-green hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Guide
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