import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface ForcedInductionModsPageProps {
  params: { locale: Locale };
}

export default async function ForcedInductionModsPage({ params }: ForcedInductionModsPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Modifications', href: `/${params.locale}/mods` },
            { label: 'Forced Induction', href: `/${params.locale}/mods/forced-induction` },
          ]}
        />

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-gold rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">Forced Induction</h1>
              <p className="font-mono text-accent-gold text-sm uppercase tracking-wider">
                ⚡ Double Your Power
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Transform your MX-5 from fun to ferocious with turbocharging or supercharging.
            From bolt-on kits to custom builds, explore the path to serious power gains.
          </p>
        </div>

        {/* Warning Banner */}
        <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6 mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">⚠️</span>
            <h3 className="font-display text-xl font-bold text-accent-red">Expert Level Modification</h3>
          </div>
          <p className="text-text-secondary text-sm">
            Forced induction is complex and requires significant supporting modifications. Improper installation
            can damage your engine. Consider professional installation and tuning for best results.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">$3000+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Entry Price</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">40+ Hours</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Install Time</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">Expert</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Skill Level</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">200HP+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Power Potential</div>
          </div>
        </div>

        {/* Turbo vs Supercharger */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Turbo vs Supercharger</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-accent-blue rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌪️</span>
                <h3 className="font-display text-xl font-bold text-accent-blue">Turbocharger</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Advantages</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Higher efficiency (uses exhaust energy)</li>
                    <li>• Better fuel economy when not in boost</li>
                    <li>• More power potential at high RPM</li>
                    <li>• Cooler air charge (with intercooler)</li>
                    <li>• More tuning flexibility</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Disadvantages</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Turbo lag below boost threshold</li>
                    <li>• More complex installation</li>
                    <li>• Heat management challenges</li>
                    <li>• More supporting modifications needed</li>
                    <li>• Potential oil supply issues</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent-blue/10 rounded p-4">
                <h5 className="text-accent-blue font-medium mb-1">Best For:</h5>
                <p className="text-text-secondary text-xs">
                  Maximum power builds, track cars, those who don't mind complexity
                </p>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-gold rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🌀</span>
                <h3 className="font-display text-xl font-bold text-accent-gold">Supercharger</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Advantages</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Instant throttle response (no lag)</li>
                    <li>• Simpler installation and plumbing</li>
                    <li>• More reliable (fewer moving parts)</li>
                    <li>• Better low-end torque</li>
                    <li>• Easier to tune and maintain</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Disadvantages</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Uses engine power to make power</li>
                    <li>• Higher intake air temperatures</li>
                    <li>• More expensive for equivalent power</li>
                    <li>• Limited high RPM potential</li>
                    <li>• Constant parasitic load</li>
                  </ul>
                </div>
              </div>

              <div className="bg-accent-gold/10 rounded p-4">
                <h5 className="text-accent-gold font-medium mb-1">Best For:</h5>
                <p className="text-text-secondary text-xs">
                  Street cars, autocross, those who want reliability and simplicity
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Kits */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Popular Forced Induction Kits</h2>

          <div className="space-y-8">
            {/* Turbo Kits */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-accent-blue">Turbocharger Kits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-blue">Flyin' Miata FM2 Turbo</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> 160-200HP (depends on tune/fuel)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $4,500-6,000 (kit only)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> NA/NB (1989-2005)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> Most proven kit, excellent support, water-cooled</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-blue font-bold text-sm">Gold Standard</span>
                      <span className="text-xs text-text-muted">★★★★★</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-blue">Bell Engineering</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> 180-250HP+ (depends on setup)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $3,500-5,500 (various options)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> NA/NB/NC</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> High power potential, track-proven, custom options</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-blue font-bold text-sm">High Performance</span>
                      <span className="text-xs text-text-muted">★★★★☆</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-blue">BEGI S4 Turbo</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> 150-180HP (conservative tune)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $3,200-4,200 (basic kit)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> NA/NB (1989-2005)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> Budget option, simple design, good entry kit</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-blue font-bold text-sm">Budget Choice</span>
                      <span className="text-xs text-text-muted">★★★☆☆</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-blue">Custom Builds</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> 200-400HP+ (sky's the limit)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $5,000-15,000+ (highly variable)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> All (with proper planning)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> Maximum flexibility, requires expertise, unlimited potential</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-blue font-bold text-sm">Ultimate Power</span>
                      <span className="text-xs text-text-muted">★★★★★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Supercharger Kits */}
            <div>
              <h3 className="font-display text-2xl font-bold mb-4 text-accent-gold">Supercharger Kits</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-gold">Flyin' Miata CARB Legal SC</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> 158HP (CARB legal tune)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $5,500-6,500 (complete kit)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> NA/NB (1994-2005)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> Emissions legal, warranty friendly, bolt-on</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-gold font-bold text-sm">Street Legal</span>
                      <span className="text-xs text-text-muted">★★★★★</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-gold">Jackson Racing C30-94</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> 160-180HP (depends on tune)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $4,000-5,000 (used market)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> NA (1994-1997) primarily</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> Discontinued but proven, Eaton M45 blower</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-gold font-bold text-sm">Classic Choice</span>
                      <span className="text-xs text-text-muted">★★★★☆</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-gold">Kraftwerks Supercharger</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> 190-210HP (aggressive tune)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $6,000-7,500 (when available)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> NC (2006-2015)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> Rotrex C30, smooth power delivery, limited availability</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-gold font-bold text-sm">NC Option</span>
                      <span className="text-xs text-text-muted">★★★★☆</span>
                    </div>
                  </div>
                </div>

                <div className="bg-bg-card border border-border rounded-lg p-6">
                  <h4 className="font-display text-lg font-bold mb-3 text-accent-gold">ND Options</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong className="text-text-primary">Power:</strong>
                      <span className="text-text-secondary"> TBD (limited options)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Price:</strong>
                      <span className="text-text-secondary"> $7,000-10,000+ (estimated)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Generations:</strong>
                      <span className="text-text-secondary"> ND (2015+)</span>
                    </div>
                    <div>
                      <strong className="text-text-primary">Notable:</strong>
                      <span className="text-text-secondary"> Very limited, warranty concerns, developing market</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="text-accent-gold font-bold text-sm">Future Options</span>
                      <span className="text-xs text-text-muted">★★☆☆☆</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Modifications */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Required Supporting Modifications</h2>

          <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-8 mb-6">
            <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Critical Components</h3>
            <p className="text-text-secondary text-sm mb-4">
              These modifications are typically REQUIRED for safe forced induction operation.
              Skipping any can result in engine damage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Engine Internals</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Engine Management</h4>
                    <p className="text-text-secondary text-xs">Standalone ECU or piggyback system for proper tuning</p>
                  </div>
                  <span className="text-accent-red text-sm font-bold">Required</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Fuel System Upgrade</h4>
                    <p className="text-text-secondary text-xs">Larger injectors, fuel pump, possibly fuel rail</p>
                  </div>
                  <span className="text-accent-red text-sm font-bold">Required</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Intercooler (Turbo)</h4>
                    <p className="text-text-secondary text-xs">Cool charged air for power and reliability</p>
                  </div>
                  <span className="text-accent-gold text-sm font-bold">Recommended</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Engine Rebuild</h4>
                    <p className="text-text-secondary text-xs">Lower compression pistons, forged internals for high boost</p>
                  </div>
                  <span className="text-accent-blue text-sm font-bold">High Power</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Supporting Systems</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Clutch Upgrade</h4>
                    <p className="text-text-secondary text-xs">Handle increased torque output</p>
                  </div>
                  <span className="text-accent-red text-sm font-bold">Required</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Radiator/Cooling</h4>
                    <p className="text-text-secondary text-xs">Manage additional heat from forced induction</p>
                  </div>
                  <span className="text-accent-gold text-sm font-bold">Recommended</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Oil Cooler</h4>
                    <p className="text-text-secondary text-xs">Maintain proper oil temperatures under boost</p>
                  </div>
                  <span className="text-accent-gold text-sm font-bold">Recommended</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Torsen LSD</h4>
                    <p className="text-text-secondary text-xs">Handle power delivery and traction</p>
                  </div>
                  <span className="text-accent-blue text-sm font-bold">Track Use</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Power Expectations */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Power & Cost Breakdown</h2>

          <div className="grid gap-6">
            <div className="bg-bg-card border border-accent-green rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-green">Conservative Build ($5,000-8,000)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Target Power</h4>
                  <div className="text-2xl font-bold text-accent-green">160-180HP</div>
                  <p className="text-text-secondary text-xs">Safe, reliable daily driver power</p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Key Components</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Basic turbo kit or supercharger</li>
                    <li>• ECU tune or piggyback</li>
                    <li>• Clutch upgrade</li>
                    <li>• Basic supporting mods</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Reliability</h4>
                  <div className="text-accent-green font-bold">Excellent</div>
                  <p className="text-text-secondary text-xs">Stock engine can handle this power level with proper tune</p>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-gold rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Performance Build ($8,000-15,000)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Target Power</h4>
                  <div className="text-2xl font-bold text-accent-gold">200-250HP</div>
                  <p className="text-text-secondary text-xs">Serious performance, weekend warrior</p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Key Components</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Quality turbo kit with intercooler</li>
                    <li>• Standalone ECU</li>
                    <li>• Fuel system upgrades</li>
                    <li>• Cooling system improvements</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Reliability</h4>
                  <div className="text-accent-gold font-bold">Good</div>
                  <p className="text-text-secondary text-xs">May need engine refresh sooner, proper maintenance critical</p>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-red rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Race Build ($15,000-30,000+)</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Target Power</h4>
                  <div className="text-2xl font-bold text-accent-red">300-400HP+</div>
                  <p className="text-text-secondary text-xs">Track/race only, maximum performance</p>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Key Components</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Engine rebuild with forged internals</li>
                    <li>• Large turbo with custom setup</li>
                    <li>• Race fuel/E85 capability</li>
                    <li>• Full safety equipment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Reliability</h4>
                  <div className="text-accent-red font-bold">Race Grade</div>
                  <p className="text-text-secondary text-xs">Frequent maintenance, not suitable for street use</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Installation & Tuning */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Installation & Tuning</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Professional Recommendations</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Find experienced tuner</strong> - Miata-specific knowledge crucial
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Dyno tuning essential</strong> - Street tuning not safe for FI
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Budget for professional install</strong> - $1,500-3,000 labor
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Plan for iterations</strong> - First tune rarely perfect
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Data logging setup</strong> - Monitor AFR, knock, temps
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Common Mistakes to Avoid</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Skipping fuel system</strong> - Will lean out and damage engine
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Cheap ECU tune</strong> - Generic maps don't work for FI
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Ignoring heat management</strong> - Leads to detonation
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Too much boost too soon</strong> - Start conservative
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">⚠</span>
                  <div>
                    <strong className="text-text-primary">Inadequate oil supply</strong> - Turbos need clean oil flow
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Ready for Serious Power?
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Forced induction transforms your MX-5 into a different animal. Start with a proven kit
            and professional installation for the best results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#kits"
              className="inline-flex items-center gap-2 border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              🌪️ Turbo Kits
            </a>
            <a
              href="#supercharger"
              className="inline-flex items-center gap-2 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              🌀 Supercharger Kits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}