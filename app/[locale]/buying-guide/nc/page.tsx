import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NCBuyingGuideProps {
  params: { locale: Locale };
}

export default async function NCBuyingGuide({ params }: NCBuyingGuideProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Buying Guide', href: `/${params.locale}/buying-guide` },
            { label: 'NC (2005-2015)', href: `/${params.locale}/buying-guide/nc` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-blue rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">NC Buying Guide</h1>
              <div className="font-mono text-lg text-text-muted">2005-2015 • Third Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            The practical modern classic. Contemporary design, advanced safety, and the revolutionary PRHT option. Your complete guide to finding the perfect NC.
          </p>
        </div>

        {/* Quick Summary */}
        <section className="mb-12">
          <div className="bg-bg-card border border-border rounded-lg p-8">
            <h2 className="font-display text-2xl font-bold mb-6 text-accent-blue">NC at a Glance</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="font-display text-lg font-bold mb-2">Price Range</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">High mileage/needs work</span>
                    <span className="text-text-primary">$12K-$16K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Good condition</span>
                    <span className="text-text-primary">$16K-$22K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Excellent/PRHT</span>
                    <span className="text-text-primary">$22K-$28K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Special editions</span>
                    <span className="text-text-primary">$25K-$35K</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Best Years</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• <strong>2009-2012 (NC2):</strong> 167hp, best balance</li>
                  <li>• <strong>2013-2015 (NC3):</strong> Most refined</li>
                  <li>• <strong>2007+ PRHT:</strong> Hardtop option</li>
                  <li>• <strong>Avoid 2006:</strong> First year issues</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-2">Ideal Spec</h3>
                <ul className="space-y-1 text-sm text-text-secondary">
                  <li>• 2.0L MZR engine</li>
                  <li>• 6-speed manual transmission</li>
                  <li>• PRHT (if desired)</li>
                  <li>• Sport or Touring trim</li>
                  <li>• Service history documented</li>
                </ul>
              </div>
            </div>

            <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-4">
              <h4 className="font-display text-lg font-bold mb-2 text-accent-blue">Why Buy an NC?</h4>
              <p className="text-text-secondary text-sm">
                The NC offers modern safety, comfort, and convenience while maintaining MX-5 driving dynamics. The PRHT provides unique targa-style experience, and overall refinement makes it excellent for daily driving.
              </p>
            </div>
          </div>
        </section>

        {/* What to Look For */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">What to Look For</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Engine & Performance</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">2.0L MZR Engine Health</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Power progression:</strong> NC1 (158hp) → NC2 (167hp) → NC3 (158hp efficiency)</li>
                    <li>• <strong>Direct injection (NC2+):</strong> Check for carbon buildup</li>
                    <li>• <strong>Smooth operation:</strong> No hesitation or rough running</li>
                    <li>• <strong>Oil consumption:</strong> Some usage normal in higher mileage</li>
                    <li>• <strong>Cooling system:</strong> Radiator and water pump condition</li>
                    <li>• <strong>Timing chain:</strong> Should be quiet, no rattling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Transmission & Drivetrain</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>6-speed manual:</strong> Smooth shifting, may be notchy when cold</li>
                    <li>• <strong>6-speed automatic:</strong> Smooth operation, proper shift points</li>
                    <li>• <strong>Clutch feel:</strong> Consistent engagement point</li>
                    <li>• <strong>Differential noise:</strong> Early models prone to rear diff whine</li>
                    <li>• <strong>CV joints:</strong> Check for clicking during turns</li>
                    <li>• <strong>No grinding:</strong> Especially in reverse gear</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">PRHT System (If Equipped)</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Operation Check</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Smooth cycle:</strong> 12-13 seconds open/close</li>
                    <li>• <strong>No hesitation:</strong> Should not pause during operation</li>
                    <li>• <strong>Proper alignment:</strong> Panels should align correctly</li>
                    <li>• <strong>Seal integrity:</strong> No wind noise or leaks</li>
                    <li>• <strong>Motor sounds:</strong> Should be relatively quiet</li>
                    <li>• <strong>Safety lockout:</strong> Won&apos;t operate while driving</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Common PRHT Issues</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Motor failure:</strong> $1,500-2,500 repair</li>
                    <li>• <strong>Hydraulic leaks:</strong> $500-1,200 repair</li>
                    <li>• <strong>Sensor problems:</strong> $200-600 repair</li>
                    <li>• <strong>Micro-switch failures:</strong> $100-300 repair</li>
                    <li>• <strong>Weatherstrip wear:</strong> $200-500 replacement</li>
                    <li>• <strong>Panel misalignment:</strong> $300-800 adjustment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Body & Interior</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Body Condition</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Less rust-prone:</strong> Better rust protection than NA/NB</li>
                    <li>• <strong>Check rear quarters:</strong> Still vulnerable area</li>
                    <li>• <strong>Door seals:</strong> Important for water intrusion</li>
                    <li>• <strong>Paint quality:</strong> Some colors fade more than others</li>
                    <li>• <strong>Panel gaps:</strong> Should be consistent</li>
                    <li>• <strong>Soft top frame:</strong> Check operation if equipped</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Interior Assessment</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>Seat condition:</strong> Wear on bolsters and cushions</li>
                    <li>• <strong>Dashboard quality:</strong> Generally good, check for cracks</li>
                    <li>• <strong>Electronics:</strong> More complex than earlier generations</li>
                    <li>• <strong>Climate control:</strong> Auto HVAC should function properly</li>
                    <li>• <strong>Window regulators:</strong> Test both windows</li>
                    <li>• <strong>Steering wheel wear:</strong> Check for excessive wear</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">NC-Specific Issues & Red Flags</h2>

          <div className="space-y-6">
            <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Major Concerns</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Expensive Problems</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>PRHT motor failure:</strong> $1,500-2,500 repair</li>
                    <li>• <strong>Rear differential replacement:</strong> $1,200-2,000</li>
                    <li>• <strong>Direct injection carbon buildup:</strong> $800-1,200 cleaning</li>
                    <li>• <strong>Transmission rebuild:</strong> $3,000-4,500</li>
                    <li>• <strong>Suspension component wear:</strong> $1,000-2,000 refresh</li>
                    <li>• <strong>Electronic system failures:</strong> $500-1,500</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Negotiation Points</h4>
                  <ul className="space-y-2 text-sm text-text-secondary">
                    <li>• <strong>PRHT issues:</strong> $500-2,500 depending on problem</li>
                    <li>• <strong>Soft top replacement:</strong> $900-1,400</li>
                    <li>• <strong>Clutch replacement:</strong> $1,000-1,400</li>
                    <li>• <strong>Brake system refresh:</strong> $400-800</li>
                    <li>• <strong>Carbon cleaning needed:</strong> $800-1,200</li>
                    <li>• <strong>Suspension wear:</strong> $600-1,200</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">NC Evolution Timeline</h3>

              <div className="space-y-4">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">2006-2008 (NC1)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• First year issues common in 2006</li>
                    <li>• 158hp with 5-speed manual or 6-speed automatic</li>
                    <li>• PRHT introduced in 2007</li>
                    <li>• Recommendation: <span className="text-accent-gold">2007-2008 preferred over 2006</span></li>
                  </ul>
                </div>

                <div className="border border-accent-green/30 border-2 rounded-lg p-4">
                  <h4 className="font-medium text-accent-green mb-2">2009-2012 (NC2) ⭐ Best Era</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Power increase to 167hp</li>
                    <li>• 6-speed manual becomes available</li>
                    <li>• Improved suspension tuning</li>
                    <li>• Recommendation: <span className="text-accent-green">Sweet spot for most buyers</span></li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">2013-2015 (NC3)</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Power reduced to 158hp (efficiency focus)</li>
                    <li>• Most refined with better NVH</li>
                    <li>• Final years with special editions</li>
                    <li>• Recommendation: <span className="text-accent-blue">Great for daily driving</span></li>
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
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Standard Trims</h3>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">Sport</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Base trim level</li>
                    <li>• Manual transmission</li>
                    <li>• 16-inch wheels</li>
                    <li>• Basic interior</li>
                    <li>• <strong>Value:</strong> Entry point</li>
                  </ul>
                </div>

                <div className="border border-accent-blue/30 border-2 rounded-lg p-4">
                  <h4 className="font-medium text-accent-blue mb-2">Touring ⭐</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Most popular trim</li>
                    <li>• 17-inch wheels</li>
                    <li>• Premium interior</li>
                    <li>• More options available</li>
                    <li>• <strong>Value:</strong> Best balance</li>
                  </ul>
                </div>

                <div className="border border-border rounded-lg p-4">
                  <h4 className="font-medium text-text-primary mb-2">Grand Touring</h4>
                  <ul className="space-y-1 text-sm text-text-secondary">
                    <li>• Luxury features</li>
                    <li>• Leather interior</li>
                    <li>• Premium audio</li>
                    <li>• Auto climate control</li>
                    <li>• <strong>Value:</strong> Comfort focused</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Special Editions</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Special Edition (2008-2009)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Unique paint colors</li>
                      <li>• Special interior trim</li>
                      <li>• Limited production numbers</li>
                      <li>• <strong>Value:</strong> $20K-28K</li>
                    </ul>
                  </div>

                  <div className="border border-accent-blue/30 border-2 rounded-lg p-4">
                    <h4 className="font-medium text-accent-blue mb-2">25th Anniversary (2014)</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Soul Red paint</li>
                      <li>• Commemorative features</li>
                      <li>• Final year special edition</li>
                      <li>• <strong>Value:</strong> $25K-32K</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">PRHT Options</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Available on most trims</li>
                      <li>• Adds ~$3,000 to value</li>
                      <li>• 104 lbs additional weight</li>
                      <li>• <strong>Consider:</strong> Maintenance costs</li>
                    </ul>
                  </div>

                  <div className="border border-border rounded-lg p-4">
                    <h4 className="font-medium text-text-primary mb-2">Performance Package</h4>
                    <ul className="space-y-1 text-sm text-text-secondary">
                      <li>• Limited-slip differential</li>
                      <li>• Bilstein dampers</li>
                      <li>• Performance tires</li>
                      <li>• <strong>Value:</strong> Enthusiast choice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Inspection Checklist */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">NC Inspection Checklist</h2>

          <div className="bg-bg-card border border-border rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Pre-Visit Research</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Verify PRHT function if equipped</li>
                  <li>• ✓ Check service history for major items</li>
                  <li>• ✓ Research specific model year issues</li>
                  <li>• ✓ Confirm all recalls completed</li>
                  <li>• ✓ Plan for extended test drive</li>
                  <li>• ✓ Arrange independent inspection</li>
                </ul>

                <h3 className="font-display text-lg font-bold mb-4 mt-6 text-accent-blue">Test Drive Focus</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Engine responds smoothly to throttle</li>
                  <li>• ✓ No differential whine under load</li>
                  <li>• ✓ Transmission shifts cleanly</li>
                  <li>• ✓ Steering is precise and well-weighted</li>
                  <li>• ✓ Brakes feel progressive and strong</li>
                  <li>• ✓ No unusual noises or vibrations</li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Physical Inspection</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ PRHT operation (multiple cycles)</li>
                  <li>• ✓ Engine bay condition and cleanliness</li>
                  <li>• ✓ Suspension component condition</li>
                  <li>• ✓ Tire wear patterns (alignment)</li>
                  <li>• ✓ Interior electronics function</li>
                  <li>• ✓ Body panel alignment</li>
                </ul>

                <h3 className="font-display text-lg font-bold mb-4 mt-6 text-accent-blue">Documentation</h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li>• ✓ Service records (especially major services)</li>
                  <li>• ✓ PRHT maintenance history if equipped</li>
                  <li>• ✓ Any warranty information remaining</li>
                  <li>• ✓ Modification documentation</li>
                  <li>• ✓ Clear title with no liens</li>
                  <li>• ✓ All keys and manuals included</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Ownership Costs */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">NC Ownership Costs</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Potential Major Expenses</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">PRHT motor replacement</span>
                  <span className="text-text-primary">$1,500-2,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Direct injection cleaning</span>
                  <span className="text-text-primary">$800-1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Clutch replacement</span>
                  <span className="text-text-primary">$1,000-1,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Suspension refresh</span>
                  <span className="text-text-primary">$1,000-2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Rear differential</span>
                  <span className="text-text-primary">$1,200-2,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Soft top replacement</span>
                  <span className="text-text-primary">$900-1,400</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Annual Maintenance</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Oil changes</span>
                  <span className="text-text-primary">$150-200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Insurance</span>
                  <span className="text-text-primary">$800-1,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Registration/inspection</span>
                  <span className="text-text-primary">$75-250</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Routine maintenance</span>
                  <span className="text-text-primary">$500-1,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Tires (every 3-4 years)</span>
                  <span className="text-text-primary">$600-1,000</span>
                </div>
                <div className="flex justify-between font-medium pt-2 border-t border-border">
                  <span className="text-text-primary">Estimated Annual</span>
                  <span className="text-accent-blue">$1,800-3,200</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/buying-guide/nb`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-gold hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Previous</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-gold transition-colors">
                  NB Buying Guide
                </div>
                <div className="text-text-secondary text-sm">1998-2005 • Second Generation</div>
              </div>
              <div className="text-accent-gold opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href={`/${params.locale}/buying-guide/nd`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-green hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Next</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-green transition-colors">
                  ND Buying Guide
                </div>
                <div className="text-text-secondary text-sm">2015-Present • Fourth Generation</div>
              </div>
              <div className="text-accent-green opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>

        {/* Related Links */}
        <div className="mt-12 text-center">
          <h3 className="font-display text-xl font-bold mb-4">Learn More About the NC</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${params.locale}/generations/nc`}
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/80 text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              NC Generation Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/nc`}
              className="inline-flex items-center gap-2 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Schedule
            </Link>
            <Link
              href={`/${params.locale}/special-editions?gen=nc`}
              className="inline-flex items-center gap-2 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Special Editions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}