import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface SuspensionModsPageProps {
  params: { locale: Locale };
}

export default async function SuspensionModsPage({ params }: SuspensionModsPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Modifications', href: `/${params.locale}/mods` },
            { label: 'Suspension', href: `/${params.locale}/mods/suspension` },
          ]}
        />

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-blue rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">Suspension Mods</h1>
              <p className="font-mono text-accent-blue text-sm uppercase tracking-wider">
                🏁 Transform Your Handling
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            The foundation of any good MX-5 build starts with suspension. From budget-friendly sway bars
            to full coilover setups, discover how to transform your car&apos;s handling and cornering ability.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">$100</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Entry Price</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">1-2 Days</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Install Time</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">Intermediate</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Skill Level</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">Huge</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Impact</div>
          </div>
        </div>

        {/* Priority Order */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Suspension Upgrade Order</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-bg-card border border-accent-green rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent-green text-black px-2 py-1 rounded font-bold text-sm">1st</span>
                <h3 className="font-display text-xl font-bold text-accent-green">Sway Bars</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Biggest bang for buck. Reduces body roll immediately and improves cornering feel.
              </p>
              <div className="space-y-2 text-xs">
                <div><strong>Price:</strong> $150-400</div>
                <div><strong>Install:</strong> 2-4 hours</div>
                <div><strong>Brands:</strong> Flyin&apos; Miata, Racing Beat, Whiteline</div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-gold rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent-gold text-black px-2 py-1 rounded font-bold text-sm">2nd</span>
                <h3 className="font-display text-xl font-bold text-accent-gold">Springs/Shocks</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Lower the car, improve spring rates. Matched spring/shock combo is crucial.
              </p>
              <div className="space-y-2 text-xs">
                <div><strong>Price:</strong> $400-800</div>
                <div><strong>Install:</strong> 4-6 hours</div>
                <div><strong>Brands:</strong> Koni, Bilstein, Eibach</div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-blue rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-accent-blue text-black px-2 py-1 rounded font-bold text-sm">3rd</span>
                <h3 className="font-display text-xl font-bold text-accent-blue">Coilovers</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Ultimate suspension upgrade. Height and damping adjustment for perfect setup.
              </p>
              <div className="space-y-2 text-xs">
                <div><strong>Price:</strong> $800-3000</div>
                <div><strong>Install:</strong> 6-8 hours</div>
                <div><strong>Brands:</strong> Ohlins, KW, BC Racing</div>
              </div>
            </div>
          </div>
        </section>

        {/* Coilovers Deep Dive */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Coilover Guide</h2>

          <div className="bg-bg-card border border-border rounded-lg p-8 mb-8">
            <h3 className="font-display text-2xl font-bold mb-6">Popular Coilover Options</h3>

            <div className="grid gap-6">
              {/* Budget Tier */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-accent-green mb-1">Budget Tier ($800-1200)</h4>
                    <p className="text-text-secondary text-sm">Great entry point for track day use</p>
                  </div>
                  <div className="text-accent-green font-bold text-lg">★★★☆☆</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="font-medium text-text-primary mb-2">BC Racing BR Series</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      32-way adjustable damping, separate height adjustment. Good build quality for the price.
                    </p>
                    <div className="text-xs text-accent-green">$850-950 • Popular choice</div>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="font-medium text-text-primary mb-2">Tein Flex Z</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      16-way adjustable, proven reliability. Japanese engineering at budget price.
                    </p>
                    <div className="text-xs text-accent-green">$900-1000 • Reliable</div>
                  </div>
                </div>
              </div>

              {/* Mid Tier */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-accent-gold mb-1">Mid Tier ($1200-2000)</h4>
                    <p className="text-text-secondary text-sm">Serious performance with comfort balance</p>
                  </div>
                  <div className="text-accent-gold font-bold text-lg">★★★★☆</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="font-medium text-text-primary mb-2">KW V3</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      Separate compression/rebound adjustment. German engineering, track-proven.
                    </p>
                    <div className="text-xs text-accent-gold">$1600-1800 • Track favorite</div>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="font-medium text-text-primary mb-2">Bilstein PSS10</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      10-position adjustment, comfortable for street use while track-capable.
                    </p>
                    <div className="text-xs text-accent-gold">$1400-1600 • Balanced</div>
                  </div>
                </div>
              </div>

              {/* Premium Tier */}
              <div className="border border-border rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-display text-xl font-bold text-accent-red mb-1">Premium Tier ($2000-3500)</h4>
                    <p className="text-text-secondary text-sm">Professional-grade performance</p>
                  </div>
                  <div className="text-accent-red font-bold text-lg">★★★★★</div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="font-medium text-text-primary mb-2">Ohlins Road & Track</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      Motorsport pedigree, incredibly well-damped. The gold standard for MX-5 coilovers.
                    </p>
                    <div className="text-xs text-accent-red">$2800-3200 • Best overall</div>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="font-medium text-text-primary mb-2">AST 5100 Series</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      Motorsport-derived, external reservoir option. Used in professional racing.
                    </p>
                    <div className="text-xs text-accent-red">$3000-3500 • Race spec</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Supporting Mods */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Supporting Modifications</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Chassis Reinforcement</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Front Strut Bar</h4>
                    <p className="text-text-secondary text-xs">Reduces chassis flex under cornering</p>
                  </div>
                  <span className="text-accent-blue text-sm font-bold">$100-200</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Rear Strut Bar</h4>
                    <p className="text-text-secondary text-xs">Complements front bar, improves rear end stability</p>
                  </div>
                  <span className="text-accent-blue text-sm font-bold">$80-150</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Frame Rails</h4>
                    <p className="text-text-secondary text-xs">Ultimate chassis stiffening, welded-in</p>
                  </div>
                  <span className="text-accent-blue text-sm font-bold">$300-500</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Butterfly Brace</h4>
                    <p className="text-text-secondary text-xs">Triangulates shock towers, significant improvement</p>
                  </div>
                  <span className="text-accent-blue text-sm font-bold">$400-600</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Alignment & Setup</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Racing Alignment</h4>
                    <p className="text-text-secondary text-xs">More negative camber, toe adjustments</p>
                  </div>
                  <span className="text-accent-gold text-sm font-bold">$100-150</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Camber Bolts</h4>
                    <p className="text-text-secondary text-xs">Allows more aggressive front camber settings</p>
                  </div>
                  <span className="text-accent-gold text-sm font-bold">$30-50</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Corner Balancing</h4>
                    <p className="text-text-secondary text-xs">Optimize weight distribution with coilovers</p>
                  </div>
                  <span className="text-accent-gold text-sm font-bold">$150-250</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-text-primary">Adjustable Arms</h4>
                    <p className="text-text-secondary text-xs">Rear upper control arms for better geometry</p>
                  </div>
                  <span className="text-accent-gold text-sm font-bold">$200-400</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Generation Differences */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Generation-Specific Notes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-bg-card border border-accent-red rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-accent-red rounded"></div>
                  <h3 className="font-display text-lg font-bold">NA (1989-1997)</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Softest springs</strong> from factory - biggest improvement potential</li>
                  <li>• <strong>Bilstein shocks</strong> are popular OEM+ upgrade</li>
                  <li>• <strong>Double wishbone</strong> front suspension - excellent geometry</li>
                  <li>• <strong>Chassis flex</strong> more noticeable - bracing helps significantly</li>
                  <li>• <strong>Lightweight</strong> - suspension changes have bigger impact</li>
                </ul>
              </div>

              <div className="bg-bg-card border border-accent-gold rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-accent-gold rounded"></div>
                  <h3 className="font-display text-lg font-bold">NB (1998-2005)</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Stiffer chassis</strong> than NA - less need for bracing</li>
                  <li>• <strong>Sport package</strong> (2001+) has better factory suspension</li>
                  <li>• <strong>Same mounting</strong> as NA - most parts interchange</li>
                  <li>• <strong>Bilstein shocks</strong> available from factory on Sport models</li>
                  <li>• <strong>MSM</strong> has unique suspension components</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-bg-card border border-accent-blue rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-accent-blue rounded"></div>
                  <h3 className="font-display text-lg font-bold">NC (2005-2015)</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Multilink rear</strong> - more complex than NA/NB</li>
                  <li>• <strong>DSC/ABS integration</strong> - affects wheel speed sensors</li>
                  <li>• <strong>Heavier car</strong> - needs stiffer springs than NA/NB</li>
                  <li>• <strong>Club/Grand Touring</strong> packages have sport suspension</li>
                  <li>• <strong>More limited</strong> coilover selection than NA/NB</li>
                </ul>
              </div>

              <div className="bg-bg-card border border-accent-green rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-accent-green rounded"></div>
                  <h3 className="font-display text-lg font-bold">ND (2015+)</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Most advanced</strong> factory suspension setup</li>
                  <li>• <strong>Bilstein dampers</strong> standard on Club/RF models</li>
                  <li>• <strong>Limited coilover options</strong> - newer platform</li>
                  <li>• <strong>Warranty concerns</strong> - consider dealer relationship</li>
                  <li>• <strong>Electronic systems</strong> integration more complex</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Tips */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Installation & Setup Tips</h2>

          <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-8">
            <h3 className="font-display text-xl font-bold mb-6 text-accent-blue">Professional Tips</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-text-primary mb-4">Tools & Preparation</h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Spring compressors</strong> - essential for safety</li>
                  <li>• <strong>Torque wrench</strong> - proper specification critical</li>
                  <li>• <strong>Jack stands</strong> - never work under car on jack only</li>
                  <li>• <strong>Alignment after</strong> - mandatory after suspension work</li>
                  <li>• <strong>Break-in period</strong> - 500 miles before final adjustment</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-text-primary mb-4">Setup Guidelines</h4>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Start conservative</strong> - softer settings first</li>
                  <li>• <strong>One change at a time</strong> - track what works</li>
                  <li>• <strong>Corner balance</strong> - crucial for coilover setups</li>
                  <li>• <strong>Tire pressure</strong> - affects suspension feel significantly</li>
                  <li>• <strong>Document settings</strong> - write down what works</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-accent-blue/20">
              <h4 className="font-medium text-text-primary mb-4">Common Setup Ranges</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-bg-card rounded p-4">
                  <h5 className="text-accent-blue font-medium mb-2">Street Setup</h5>
                  <ul className="space-y-1 text-text-secondary">
                    <li>• Front camber: -1.0° to -1.5°</li>
                    <li>• Rear camber: -1.5° to -2.0°</li>
                    <li>• Toe: Slight toe-in front/rear</li>
                    <li>• Damping: 25-50% range</li>
                  </ul>
                </div>
                <div className="bg-bg-card rounded p-4">
                  <h5 className="text-accent-gold font-medium mb-2">Track Setup</h5>
                  <ul className="space-y-1 text-text-secondary">
                    <li>• Front camber: -2.0° to -2.5°</li>
                    <li>• Rear camber: -2.0° to -2.5°</li>
                    <li>• Toe: Zero or slight toe-out</li>
                    <li>• Damping: 50-75% range</li>
                  </ul>
                </div>
                <div className="bg-bg-card rounded p-4">
                  <h5 className="text-accent-red font-medium mb-2">Autocross Setup</h5>
                  <ul className="space-y-1 text-text-secondary">
                    <li>• Front camber: -2.5° to -3.0°</li>
                    <li>• Rear camber: -2.0° to -2.5°</li>
                    <li>• Toe: Zero or slight toe-out</li>
                    <li>• Damping: 60-80% range</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Transform Your MX-5&apos;s Handling
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Suspension modifications provide the biggest improvement to your MX-5&apos;s driving experience.
            Start with sway bars and work your way up to a full coilover setup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#coilovers"
              className="inline-flex items-center gap-2 border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              View Coilover Guide
            </a>
            <a
              href="#setup"
              className="inline-flex items-center gap-2 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              Setup Tips
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}