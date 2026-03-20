import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface EngineSwapsModsPageProps {
  params: { locale: Locale };
}

export default async function EngineSwapsModsPage({ params }: EngineSwapsModsPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Modifications', href: `/${params.locale}/mods` },
            { label: 'Engine Swaps', href: `/${params.locale}/mods/engine-swaps` },
          ]}
        />

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-green rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">Engine Swaps</h1>
              <p className="font-mono text-accent-green text-sm uppercase tracking-wider">
                🚀 Ultimate Transformation
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            The ultimate MX-5 modification. From Honda K-series to American V8s, engine swaps
            completely transform your car&apos;s character and capability. Here&apos;s your guide to the most popular swaps.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-gradient-to-r from-accent-red/10 to-accent-gold/10 border border-accent-red/20 rounded-lg p-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-3xl">🔧⚠️</span>
            <div>
              <h3 className="font-display text-xl font-bold text-accent-red">Master-Level Project</h3>
              <p className="text-text-secondary">This is not a weekend project</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <strong className="text-text-primary">Cost:</strong>
              <span className="text-text-secondary"> $8,000-$40,000+</span>
            </div>
            <div>
              <strong className="text-text-primary">Time:</strong>
              <span className="text-text-secondary"> 6 months - 2 years</span>
            </div>
            <div>
              <strong className="text-text-primary">Skill:</strong>
              <span className="text-text-secondary"> Professional/Expert level</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">$10K+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Minimum Budget</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">6-24 Months</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Project Time</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">Expert</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Skill Level</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">600HP+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Power Potential</div>
          </div>
        </div>

        {/* Popular Swaps */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Popular Engine Swaps</h2>

          <div className="space-y-8">
            {/* LS V8 */}
            <div className="bg-bg-card border border-accent-red rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏁</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-accent-red">LS V8 Swap</h3>
                  <p className="text-text-secondary">The king of MX-5 swaps - American muscle meets Japanese handling</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red">350-500HP</div>
                  <div className="text-xs text-text-muted">Power Range</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red">$15-30K</div>
                  <div className="text-xs text-text-muted">Total Cost</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red">8-18 Months</div>
                  <div className="text-xs text-text-muted">Build Time</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red">Extreme</div>
                  <div className="text-xs text-text-muted">Difficulty</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Popular Engines</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• <strong>LS3 (430HP):</strong> Most popular, great power/weight</li>
                    <li>• <strong>LS1 (350HP):</strong> Cheaper option, still very fast</li>
                    <li>• <strong>LS376/525:</strong> Crate engine, maximum power</li>
                    <li>• <strong>LQ4/LQ9:</strong> Iron block, budget builds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Major Modifications</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Custom subframes or kits (FM, V8R, etc.)</li>
                    <li>• T56 or T56 Magnum transmission</li>
                    <li>• Custom exhaust and headers</li>
                    <li>• Upgraded cooling system</li>
                    <li>• Brake upgrades essential</li>
                    <li>• Suspension modifications</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Pros & Cons</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong className="text-accent-green">Pros:</strong>
                      <ul className="text-text-secondary text-xs space-y-1 mt-1">
                        <li>• Massive power increase</li>
                        <li>• Amazing sound</li>
                        <li>• Huge aftermarket support</li>
                        <li>• Reliable when done right</li>
                      </ul>
                    </div>
                    <div>
                      <strong className="text-accent-red">Cons:</strong>
                      <ul className="text-text-secondary text-xs space-y-1 mt-1">
                        <li>• Very expensive</li>
                        <li>• Complex installation</li>
                        <li>• Weight distribution changes</li>
                        <li>• Insurance/registration issues</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-medium text-text-primary mb-3">Kit Providers</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-bg-primary rounded p-3">
                    <h5 className="text-accent-red font-medium">Flyin&apos; Miata</h5>
                    <p className="text-text-secondary text-xs">Complete LS swap packages, excellent support</p>
                  </div>
                  <div className="bg-bg-primary rounded p-3">
                    <h5 className="text-accent-red font-medium">V8 Roadsters</h5>
                    <p className="text-text-secondary text-xs">Specialized LS swap kits and services</p>
                  </div>
                  <div className="bg-bg-primary rounded p-3">
                    <h5 className="text-accent-red font-medium">Monster Miata</h5>
                    <p className="text-text-secondary text-xs">Pioneer in V8 Miata conversions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* K-Series */}
            <div className="bg-bg-card border border-accent-blue rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🏎️</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-accent-blue">Honda K-Series</h3>
                  <p className="text-text-secondary">High-revving Honda engineering in a Miata chassis</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-blue">220-350HP</div>
                  <div className="text-xs text-text-muted">Power Range</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-blue">$8-18K</div>
                  <div className="text-xs text-text-muted">Total Cost</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-blue">6-12 Months</div>
                  <div className="text-xs text-text-muted">Build Time</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-blue">High</div>
                  <div className="text-xs text-text-muted">Difficulty</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Popular Engines</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• <strong>K24A2:</strong> Most popular, good power/reliability</li>
                    <li>• <strong>K20A2:</strong> High-rev screamer from Type-R</li>
                    <li>• <strong>K24A4:</strong> Budget option, less power</li>
                    <li>• <strong>K20C1:</strong> Modern turbo engine (Civic Type-R)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Required Components</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• K-series engine + transmission</li>
                    <li>• Custom engine mounts</li>
                    <li>• ECU and wiring harness</li>
                    <li>• Custom driveshaft</li>
                    <li>• Radiator and cooling mods</li>
                    <li>• Exhaust fabrication</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Character</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• High-revving nature (8000+ RPM)</li>
                    <li>• VTEC engagement excitement</li>
                    <li>• Better weight distribution than V8</li>
                    <li>• Maintains Miata handling feel</li>
                    <li>• Great for autocross/track</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rotary */}
            <div className="bg-bg-card border border-accent-gold rounded-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">🔺</span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-accent-gold">Rotary Swaps</h3>
                  <p className="text-text-secondary">Mazda&apos;s rotary heritage meets the MX-5 platform</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold">250-400HP</div>
                  <div className="text-xs text-text-muted">Power Range</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold">$12-25K</div>
                  <div className="text-xs text-text-muted">Total Cost</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold">8-15 Months</div>
                  <div className="text-xs text-text-muted">Build Time</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold">Expert</div>
                  <div className="text-xs text-text-muted">Difficulty</div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Popular Options</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• <strong>13B-REW:</strong> Twin-turbo RX-7 engine</li>
                    <li>• <strong>13B-MSP:</strong> Renesis from RX-8</li>
                    <li>• <strong>20B-REW:</strong> Triple rotor (rare/expensive)</li>
                    <li>• <strong>Custom builds:</strong> Peripheral port, etc.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Unique Challenges</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Rotary-specific tuning knowledge</li>
                    <li>• Oil metering system adaptation</li>
                    <li>• Cooling system design critical</li>
                    <li>• Finding good donor engines</li>
                    <li>• Apex seal reliability concerns</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Why Choose Rotary</h4>
                  <ul className="space-y-2 text-text-secondary text-sm">
                    <li>• Keeps Mazda DNA</li>
                    <li>• Unique sound and character</li>
                    <li>• High power-to-weight ratio</li>
                    <li>• Smooth power delivery</li>
                    <li>• Rev-happy nature</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Other Swaps */}
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4">Other Notable Swaps</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Alternative Options</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-accent-blue">2JZ-GTE (Toyota):</strong>
                      <span className="text-text-secondary"> Legendary twin-turbo I6, 400HP+ potential</span>
                    </div>
                    <div>
                      <strong className="text-accent-blue">SR20DET (Nissan):</strong>
                      <span className="text-text-secondary"> Turbo 4-cylinder, popular drift choice</span>
                    </div>
                    <div>
                      <strong className="text-accent-blue">S2000 F20C:</strong>
                      <span className="text-text-secondary"> High-rev Honda, natural MX-5 evolution</span>
                    </div>
                    <div>
                      <strong className="text-accent-blue">Ecotec Turbo:</strong>
                      <span className="text-text-secondary"> GM 4-cylinder, good power/dollar</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-3">Electric Swaps</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-accent-green">Tesla Drive Unit:</strong>
                      <span className="text-text-secondary"> Modern EV conversion, instant torque</span>
                    </div>
                    <div>
                      <strong className="text-accent-green">Netgain Motors:</strong>
                      <span className="text-text-secondary"> Purpose-built EV conversion kits</span>
                    </div>
                    <div>
                      <strong className="text-accent-green">Custom Battery:</strong>
                      <span className="text-text-secondary"> Lithium packs, weight distribution key</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planning Your Swap */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Planning Your Engine Swap</h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Before You Start</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">1.</span>
                  <div>
                    <strong className="text-text-primary">Define your goals</strong> - Street, track, drag, show?
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">2.</span>
                  <div>
                    <strong className="text-text-primary">Set realistic budget</strong> - Add 50% to initial estimate
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">3.</span>
                  <div>
                    <strong className="text-text-primary">Research thoroughly</strong> - Join forums, talk to builders
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">4.</span>
                  <div>
                    <strong className="text-text-primary">Plan for downtime</strong> - 6+ months without driving
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">5.</span>
                  <div>
                    <strong className="text-text-primary">Legal considerations</strong> - Emissions, registration, insurance
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Common Pitfalls</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Underestimating costs</strong> - Hidden expenses add up quickly
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Inadequate workspace</strong> - Need proper tools and space
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Poor engine choice</strong> - Wrong engine for your goals
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Ignoring supporting systems</strong> - Brakes, suspension, cooling
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Scope creep</strong> - &quot;While I&apos;m at it...&quot; syndrome
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-bg-card border border-border rounded-lg p-8">
            <h3 className="font-display text-xl font-bold mb-6">Swap Cost Breakdown</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-text-primary mb-4 text-center">Budget Build</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Used engine/trans</span>
                    <span className="text-accent-green font-bold">$3,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Basic mount kit</span>
                    <span className="text-accent-green font-bold">$1,500-2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Wiring/ECU</span>
                    <span className="text-accent-green font-bold">$1,000-2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Exhaust/cooling</span>
                    <span className="text-accent-green font-bold">$1,500-2,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Miscellaneous</span>
                    <span className="text-accent-green font-bold">$1,000-2,000</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <span className="text-text-primary font-bold">Total</span>
                    <span className="text-accent-green font-bold">$8K-14K</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-text-primary mb-4 text-center">Quality Build</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Good engine/trans</span>
                    <span className="text-accent-gold font-bold">$6,000-10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Complete kit</span>
                    <span className="text-accent-gold font-bold">$3,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Standalone ECU</span>
                    <span className="text-accent-gold font-bold">$2,000-3,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Custom work</span>
                    <span className="text-accent-gold font-bold">$3,000-5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Supporting mods</span>
                    <span className="text-accent-gold font-bold">$2,000-4,000</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <span className="text-text-primary font-bold">Total</span>
                    <span className="text-accent-gold font-bold">$16K-27K</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-text-primary mb-4 text-center">Dream Build</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Crate engine</span>
                    <span className="text-accent-red font-bold">$10,000-15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Premium kit</span>
                    <span className="text-accent-red font-bold">$5,000-8,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Professional install</span>
                    <span className="text-accent-red font-bold">$8,000-12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Full build</span>
                    <span className="text-accent-red font-bold">$5,000-10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Everything else</span>
                    <span className="text-accent-red font-bold">$5,000-10,000</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-2">
                    <span className="text-text-primary font-bold">Total</span>
                    <span className="text-accent-red font-bold">$33K-55K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal & Practical */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Legal & Practical Considerations</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-accent-blue rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Legal Issues</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <strong className="text-text-primary">Emissions Compliance:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    Many swaps won&apos;t pass emissions testing. Research local laws carefully.
                    Some states are more restrictive than others.
                  </p>
                </div>
                <div>
                  <strong className="text-text-primary">Registration:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    May need to update registration. Some states require inspection
                    or special permits for modified vehicles.
                  </p>
                </div>
                <div>
                  <strong className="text-text-primary">Insurance:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    Notify your insurance company. Some may refuse coverage,
                    others may require appraisal or higher premiums.
                  </p>
                </div>
                <div>
                  <strong className="text-text-primary">Resale Value:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    Swapped cars often have lower resale value despite higher costs.
                    Market is limited to enthusiasts.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-red rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Practical Reality</h3>
              <div className="space-y-4 text-sm">
                <div>
                  <strong className="text-text-primary">Daily Driving:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    High-power swaps often sacrifice driveability. Consider if this
                    will be a street car or dedicated track machine.
                  </p>
                </div>
                <div>
                  <strong className="text-text-primary">Maintenance:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    Custom builds require custom solutions. Finding shops willing
                    and able to work on swapped cars can be challenging.
                  </p>
                </div>
                <div>
                  <strong className="text-text-primary">Reliability:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    Even well-executed swaps can have quirks. Budget time and money
                    for sorting out issues after initial installation.
                  </p>
                </div>
                <div>
                  <strong className="text-text-primary">Support:</strong>
                  <p className="text-text-secondary text-xs mt-1">
                    Join communities specific to your swap. Having others who&apos;ve
                    done the same conversion is invaluable for troubleshooting.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Resources & Communities</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">LS Swap Resources</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Flyin&apos; Miata Forum:</strong> LS swap section</li>
                <li>• <strong>V8Miata.net:</strong> Dedicated community</li>
                <li>• <strong>LS1Tech.com:</strong> General LS knowledge</li>
                <li>• <strong>Facebook groups:</strong> Many regional groups</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">K-Swap Resources</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>MiataForumz:</strong> K-swap builds section</li>
                <li>• <strong>K-Series.com:</strong> Honda engine expertise</li>
                <li>• <strong>Kpower Industries:</strong> Swap kit manufacturer</li>
                <li>• <strong>ClubRoadster:</strong> Many documented builds</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">General Resources</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Miata.net:</strong> All swap types represented</li>
                <li>• <strong>YouTube:</strong> Many documented builds</li>
                <li>• <strong>Local shops:</strong> Find experienced builders</li>
                <li>• <strong>Swap meets:</strong> See builds in person</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Ready for the Ultimate MX-5?
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Engine swaps represent the pinnacle of MX-5 modification. They&apos;re challenging, expensive,
            and time-consuming - but the results can be absolutely transformative.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#ls-swap"
              className="inline-flex items-center gap-2 border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              🏁 LS Swap Guide
            </a>
            <a
              href="#planning"
              className="inline-flex items-center gap-2 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              📋 Planning Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}