import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NBBuyingGuideProps {
  params: { locale: Locale };
}

export default async function NBBuyingGuide({ params }: NBBuyingGuideProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Buying Guide', href: `/${params.locale}/buying-guide` },
            { label: 'NB (1998-2005)', href: `/${params.locale}/buying-guide/nb` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-gold rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">NB Buying Guide</h1>
              <div className="font-mono text-lg text-text-muted">1998-2005 • Second Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            The sweet spot for many enthusiasts. More refined than the NA while maintaining the pure driving experience. Here&apos;s your complete NB buying guide.
          </p>
        </div>

        {/* Quick Summary */}
        <section className="mb-12">
          <div className="bg-bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-accent-gold">NB at a Glance</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="font-display text-lg font-bold mb-2">Price Range</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">High mileage/needs work</span>
                    <span className="text-text-primary">$6K-$10K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Good condition</span>
                    <span className="text-text-primary">$10K-$16K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Excellent/low miles</span>
                    <span className="text-text-primary">$16K-$22K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Special editions</span>
                    <span className="text-text-primary">$20K-$35K</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Best Years</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• <strong>2004-2005:</strong> Most refined</li>
                  <li>• <strong>2001+:</strong> 1.8L with 142hp</li>
                  <li>• <strong>2004 Mazdaspeed:</strong> Factory turbo</li>
                  <li>• <strong>Avoid early 1999:</strong> Some issues</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Ideal Spec</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• 1.8L BP-VE engine (2001+)</li>
                  <li>• 6-speed manual (2001+)</li>
                  <li>• Sport Package with LSD</li>
                  <li>• Service history documented</li>
                  <li>• Rust-free body</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-4">
              <h4 className="font-display text-lg font-bold mb-2 text-accent-gold">Why Buy an NB?</h4>
              <p className="text-text-secondary text-sm">
                The NB represents the perfect evolution of the original concept. More refined interior, improved reliability, better performance, while maintaining the lightweight philosophy and engaging driving experience.
              </p>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">What to Look For</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Engine & Performance</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Engine Health (1.6L vs 1.8L)</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>1.8L preferred (2001+):</strong> 142hp vs 130hp (1.6L)</li>
                    <li>• <strong>Smooth operation:</strong> No rough idle or hesitation</li>
                    <li>• <strong>Oil consumption:</strong> Some oil usage normal</li>
                    <li>• <strong>Cooling system:</strong> Check for leaks and overheating</li>
                    <li>• <strong>Variable cam timing:</strong> VVT should operate smoothly</li>
                    <li>• <strong>Timing belt:</strong> 60k mile replacement critical</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Transmission Assessment</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>6-speed preferred (2001+):</strong> Better gearing than 5-speed</li>
                    <li>• <strong>Smooth shifting:</strong> May be notchy when cold</li>
                    <li>• <strong>Syncro wear:</strong> Common in 2nd gear</li>
                    <li>• <strong>Clutch operation:</strong> Smooth engagement</li>
                    <li>• <strong>Differential:</strong> Test LSD function if equipped</li>
                    <li>• <strong>No grinding sounds:</strong> Especially during shifts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Body & Chassis</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Rust Inspection</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Rear wheel wells:</strong> Still the #1 problem area</li>
                    <li>• <strong>Door frames:</strong> Check drain holes aren&apos;t blocked</li>
                    <li>• <strong>Rocker panels:</strong> Behind side skirts</li>
                    <li>• <strong>Rear subframe:</strong> Mounting points vulnerable</li>
                    <li>• <strong>Battery tray area:</strong> Acid corrosion common</li>
                    <li>• <strong>Trunk floor:</strong> Water intrusion points</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Interior Quality</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Seat condition:</strong> Bolsters wear on sports seats</li>
                    <li>• <strong>Dashboard:</strong> Less prone to cracking than NA</li>
                    <li>• <strong>HVAC system:</strong> Check AC compressor function</li>
                    <li>• <strong>Window regulators:</strong> Common failure point</li>
                    <li>• <strong>Door locks:</strong> Actuators may fail</li>
                    <li>• <strong>Radio/electronics:</strong> Check all functions</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Suspension & Brakes</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Suspension Components</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Sport Package shocks:</strong> Bilstein dampers preferred</li>
                    <li>• <strong>Spring condition:</strong> Check for sagging or breaks</li>
                    <li>• <strong>Control arm bushings:</strong> Wear causes alignment issues</li>
                    <li>• <strong>Sway bar links:</strong> Common wear item</li>
                    <li>• <strong>Strut mounts:</strong> Upper mounts wear over time</li>
                    <li>• <strong>Wheel alignment:</strong> Should track straight</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Brake System</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Brake feel:</strong> Should be firm and responsive</li>
                    <li>• <strong>Rotor condition:</strong> Check for warping/scoring</li>
                    <li>• <strong>Pad life:</strong> Inspect remaining thickness</li>
                    <li>• <strong>Brake lines:</strong> Rubber lines may be original</li>
                    <li>• <strong>Master cylinder:</strong> Check for leaks</li>
                    <li>• <strong>ABS system:</strong> Test operation if equipped</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NB Specific Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">NB-Specific Issues & Red Flags</h2>

          <div className="space-y-6">
            <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Major Concerns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Serious Issues</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Timing belt failure:</strong> Interference engine damage</li>
                    <li>• <strong>Extensive rust:</strong> Structural/safety compromise</li>
                    <li>• <strong>Engine overheating:</strong> Possible head gasket damage</li>
                    <li>• <strong>Major accident damage:</strong> Affects handling precision</li>
                    <li>• <strong>Transmission damage:</strong> Expensive rebuild required</li>
                    <li>• <strong>No service records:</strong> Unknown maintenance history</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Costly Repairs</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Soft top replacement:</strong> $800-1,200</li>
                    <li>• <strong>Clutch replacement:</strong> $800-1,100</li>
                    <li>• <strong>Suspension refresh:</strong> $800-1,500</li>
                    <li>• <strong>Paint correction/respray:</strong> $2,000-5,000</li>
                    <li>• <strong>Rust repair:</strong> $1,000-3,000+</li>
                    <li>• <strong>Window regulator:</strong> $200-400 each</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Year-by-Year Issues</h3>

              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">1999-2000 (Early NB1)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Some early production quality issues</li>
                    <li>• 5-speed transmission only</li>
                    <li>• 1.6L engine (less power than later models)</li>
                    <li>• Recommendation: <span className="text-accent-gold">Consider later years if budget allows</span></li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">2001-2002 (NB2)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Introduction of 1.8L engine and 6-speed transmission</li>
                    <li>• Improved interior and exterior styling</li>
                    <li>• Better build quality than early models</li>
                    <li>• Recommendation: <span className="text-accent-green">Excellent choice for most buyers</span></li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">2003-2005 (NB2.5)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Most refined NB with improved NVH</li>
                    <li>• Best build quality of the generation</li>
                    <li>• Includes Mazdaspeed turbo model (2004-2005)</li>
                    <li>• Recommendation: <span className="text-accent-green">Top choice if budget permits</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trim Levels */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Trim Levels & Packages</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Standard Trims</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Base (1999-2000)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• 1.6L engine, 5-speed manual</li>
                      <li>• Steel wheels, manual top</li>
                      <li>• Basic interior appointments</li>
                      <li>• <strong>Value:</strong> Entry-level option</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">LS (2001+)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• 1.8L engine, 6-speed manual</li>
                      <li>• Alloy wheels, upgraded interior</li>
                      <li>• Power accessories</li>
                      <li>• <strong>Value:</strong> Sweet spot for most</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-accent-gold/30 border-2 rounded-lg p-4">
                    <h4 className="font-medium text-accent-gold mb-2">Sport Package</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Torsen limited-slip differential</li>
                      <li>• Bilstein dampers</li>
                      <li>• Performance-oriented setup</li>
                      <li>• <strong>Value:</strong> Best for enthusiasts</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Leather Package</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Leather seating surfaces</li>
                      <li>• Upgraded trim pieces</li>
                      <li>• Premium appearance</li>
                      <li>• <strong>Value:</strong> Luxury option</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Special Editions</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-accent-red/30 border-2 rounded-lg p-4">
                    <h4 className="font-medium text-accent-red mb-2">10th Anniversary (1999)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Sapphire Blue Mica paint</li>
                      <li>• Tan leather interior</li>
                      <li>• Special badging and trim</li>
                      <li>• <strong>Value:</strong> $18K-28K+</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">SE (2002)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Titanium Gray Metallic</li>
                      <li>• Black leather interior</li>
                      <li>• Performance package included</li>
                      <li>• <strong>Value:</strong> $16K-22K+</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-accent-gold/30 border-2 rounded-lg p-4">
                    <h4 className="font-medium text-accent-gold mb-2">Mazdaspeed (2004-2005)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Factory turbocharged (178hp)</li>
                      <li>• Unique body kit and wheels</li>
                      <li>• Enhanced suspension</li>
                      <li>• <strong>Value:</strong> $20K-35K+</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Shinsen (2005)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Sunlight Silver paint</li>
                      <li>• Blue interior accents</li>
                      <li>• Final NB edition</li>
                      <li>• <strong>Value:</strong> $16K-24K+</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Checklist */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">NB-Specific Inspection Guide</h2>

          <div className="bg-bg-card border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Engine Bay Check</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Timing belt condition (replacement evidence)</li>
                  <li>• ✓ Coolant level and condition</li>
                  <li>• ✓ Oil leaks around valve cover</li>
                  <li>• ✓ Variable cam timing operation</li>
                  <li>• ✓ Air intake system integrity</li>
                  <li>• ✓ Alternator and belt condition</li>
                </ul>

                <h3 className="font-display text-lg font-bold mb-4 mt-6 text-accent-gold">Drivetrain Test</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ 6-speed shifts smoothly (if equipped)</li>
                  <li>• ✓ Clutch engagement point consistent</li>
                  <li>• ✓ No grinding in 2nd gear (common issue)</li>
                  <li>• ✓ Differential function (LSD test)</li>
                  <li>• ✓ CV joints during turns</li>
                  <li>• ✓ Driveline vibrations</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Electrical Systems</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ All lights function (headlights, taillights)</li>
                  <li>• ✓ Window operation (regulators)</li>
                  <li>• ✓ Door locks and central locking</li>
                  <li>• ✓ HVAC blower and AC compressor</li>
                  <li>• ✓ Radio and any optional equipment</li>
                  <li>• ✓ Warning lights behavior</li>
                </ul>

                <h3 className="font-display text-lg font-bold mb-4 mt-6 text-accent-gold">Body Integrity</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Panel gaps consistent</li>
                  <li>• ✓ Paint condition and matching</li>
                  <li>• ✓ Soft top frame operation</li>
                  <li>• ✓ Drain hole function</li>
                  <li>• ✓ Undercarriage rust inspection</li>
                  <li>• ✓ Structural mounting points</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ownership Costs */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">NB Ownership Costs</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Typical Immediate Needs</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Timing belt service</span>
                  <span className="text-text-primary">$450-650</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Soft top replacement</span>
                  <span className="text-text-primary">$800-1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Window regulator repair</span>
                  <span className="text-text-primary">$200-400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Suspension refresh</span>
                  <span className="text-text-primary">$800-1,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Clutch replacement</span>
                  <span className="text-text-primary">$800-1,100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Brake system service</span>
                  <span className="text-text-primary">$300-600</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Annual Maintenance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Oil changes (2-3x/year)</span>
                  <span className="text-text-primary">$100-150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Insurance</span>
                  <span className="text-text-primary">$600-1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Registration/inspection</span>
                  <span className="text-text-primary">$50-200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Preventive maintenance</span>
                  <span className="text-text-primary">$400-800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Tires (every 2-3 years)</span>
                  <span className="text-text-primary">$500-900</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t border-border">
                  <span className="text-text-primary">Estimated Annual</span>
                  <span className="text-accent-gold">$1,500-3,000</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-accent-green/10 border border-accent-green/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-green">NB Ownership Benefits</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>Excellent reliability:</strong> More refined than NA</li>
                <li>• <strong>Strong community:</strong> Great online and local support</li>
                <li>• <strong>Parts availability:</strong> Many shared with NA</li>
                <li>• <strong>Moderate appreciation:</strong> Clean examples holding value</li>
              </ul>
              <ul className="space-y-2 text-text-secondary">
                <li>• <strong>DIY friendly:</strong> Good documentation available</li>
                <li>• <strong>Performance potential:</strong> Great modification platform</li>
                <li>• <strong>Daily drivable:</strong> More comfortable than NA</li>
                <li>• <strong>Insurance friendly:</strong> Generally reasonable rates</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/buying-guide/na`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-red hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Previous</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-red transition-colors">
                  NA Buying Guide
                </div>
                <div className="text-text-secondary text-sm">1989-1997 • First Generation</div>
              </div>
              <div className="text-accent-red opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href={`/${params.locale}/buying-guide/nc`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-blue hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Next</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-blue transition-colors">
                  NC Buying Guide
                </div>
                <div className="text-text-secondary text-sm">2005-2015 • Third Generation</div>
              </div>
              <div className="text-accent-blue opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <h3 className="font-display text-xl font-bold mb-4">Learn More About the NB</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${params.locale}/generations/nb`}
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              NB Generation Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/nb`}
              className="inline-flex items-center gap-2 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Schedule
            </Link>
            <Link
              href={`/${params.locale}/special-editions?gen=nb`}
              className="inline-flex items-center gap-2 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Special Editions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}