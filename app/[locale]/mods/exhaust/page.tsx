import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface ExhaustModsPageProps {
  params: { locale: Locale };
}

export default async function ExhaustModsPage({ params }: ExhaustModsPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Modifications', href: `/${params.locale}/mods` },
            { label: 'Exhaust', href: `/${params.locale}/mods/exhaust` },
          ]}
        />

        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-red rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">Exhaust Systems</h1>
              <p className="font-mono text-accent-red text-sm uppercase tracking-wider">
                🔥 Sound & Performance
              </p>
            </div>
          </div>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            Give your MX-5 the sound it deserves while gaining performance. From simple muffler swaps
            to complete header-back systems, find the perfect exhaust setup for your style and goals.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">$150</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Entry Price</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">2-4 Hours</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Install Time</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">Beginner</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Skill Level</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">15HP+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Potential Gains</div>
          </div>
        </div>

        {/* Exhaust Types */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Types of Exhaust Mods</h2>

          <div className="grid gap-6 mb-8">
            {/* Muffler Only */}
            <div className="bg-bg-card border border-accent-green rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-accent-green mb-1">Muffler Only</h3>
                  <p className="text-text-secondary text-sm">Simplest mod - just swap the rear muffler</p>
                </div>
                <div className="text-right">
                  <div className="text-accent-green font-bold">$150-400</div>
                  <div className="text-xs text-text-muted">1-2 hours install</div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Pros</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Cheapest option</li>
                    <li>• Easy installation</li>
                    <li>• Reversible modification</li>
                    <li>• Immediate sound change</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Cons</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Limited performance gains</li>
                    <li>• May create backpressure issues</li>
                    <li>• Sound quality depends on rest of system</li>
                    <li>• Not optimal for turbo builds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Popular Options</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Racing Beat muffler</li>
                    <li>• Magnaflow straight-through</li>
                    <li>• Borla ATAK</li>
                    <li>• Custom fabrication</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Cat-Back */}
            <div className="bg-bg-card border border-accent-gold rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-1">Cat-Back System</h3>
                  <p className="text-text-secondary text-sm">Replace everything from catalytic converter back</p>
                </div>
                <div className="text-right">
                  <div className="text-accent-gold font-bold">$400-1000</div>
                  <div className="text-xs text-text-muted">2-3 hours install</div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Pros</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Optimized pipe diameter</li>
                    <li>• Better sound quality</li>
                    <li>• Modest performance gains</li>
                    <li>• Complete system design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Cons</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• More expensive</li>
                    <li>• Still limited by header/cat</li>
                    <li>• May need hangers/mounts</li>
                    <li>• Harder to return to stock</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Popular Options</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Borla S-Type</li>
                    <li>• Corksport cat-back</li>
                    <li>• GoodWin Racing</li>
                    <li>• Racing Beat Power Pulse</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Header + Cat-Back */}
            <div className="bg-bg-card border border-accent-blue rounded-lg p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-1">Header + Cat-Back</h3>
                  <p className="text-text-secondary text-sm">Complete system replacement for maximum gains</p>
                </div>
                <div className="text-right">
                  <div className="text-accent-blue font-bold">$800-1800</div>
                  <div className="text-xs text-text-muted">4-6 hours install</div>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Pros</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Maximum performance gains</li>
                    <li>• Optimized flow throughout</li>
                    <li>• Best sound quality</li>
                    <li>• Foundation for turbo builds</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Cons</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Most expensive</li>
                    <li>• Complex installation</li>
                    <li>• May affect emissions</li>
                    <li>• Requires tuning for best results</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary mb-2">Popular Options</h4>
                  <ul className="text-text-secondary text-xs space-y-1">
                    <li>• Racing Beat header + exhaust</li>
                    <li>• Jackson Racing system</li>
                    <li>• Header4All + custom</li>
                    <li>• Stainless Works system</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Systems by Budget */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Popular Systems by Budget</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg-card border border-accent-green rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Budget ($200-500)</h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-border pb-3">
                  <h4 className="font-medium text-text-primary">Racing Beat Muffler</h4>
                  <p className="text-text-secondary text-xs mb-1">Classic Miata sound, well-regarded by community</p>
                  <div className="text-accent-green font-bold">$280-320</div>
                </div>
                <div className="border-b border-border pb-3">
                  <h4 className="font-medium text-text-primary">Magnaflow 14832</h4>
                  <p className="text-text-secondary text-xs mb-1">Straight-through design, deeper tone</p>
                  <div className="text-accent-green font-bold">$180-220</div>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">ISR Performance</h4>
                  <p className="text-text-secondary text-xs mb-1">Full cat-back system, good value</p>
                  <div className="text-accent-green font-bold">$350-450</div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-gold rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Mid-Range ($500-1000)</h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-border pb-3">
                  <h4 className="font-medium text-text-primary">Borla S-Type</h4>
                  <p className="text-text-secondary text-xs mb-1">Aggressive sound, quality construction</p>
                  <div className="text-accent-gold font-bold">$650-750</div>
                </div>
                <div className="border-b border-border pb-3">
                  <h4 className="font-medium text-text-primary">GoodWin Racing</h4>
                  <p className="text-text-secondary text-xs mb-1">Track-tested, multiple sound options</p>
                  <div className="text-accent-gold font-bold">$580-680</div>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Corksport Cat-Back</h4>
                  <p className="text-text-secondary text-xs mb-1">Balanced sound and performance</p>
                  <div className="text-accent-gold font-bold">$700-800</div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-red rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Premium ($1000+)</h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-border pb-3">
                  <h4 className="font-medium text-text-primary">Stainless Works</h4>
                  <p className="text-text-secondary text-xs mb-1">Header-back system, maximum performance</p>
                  <div className="text-accent-red font-bold">$1200-1500</div>
                </div>
                <div className="border-b border-border pb-3">
                  <h4 className="font-medium text-text-primary">Racing Beat Complete</h4>
                  <p className="text-text-secondary text-xs mb-1">Header + Power Pulse exhaust combo</p>
                  <div className="text-accent-red font-bold">$1000-1300</div>
                </div>
                <div>
                  <h4 className="font-medium text-text-primary">Custom Fab</h4>
                  <p className="text-text-secondary text-xs mb-1">Tailored to your exact specifications</p>
                  <div className="text-accent-red font-bold">$1200-2000</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sound Characteristics */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Sound Characteristics Guide</h2>

          <div className="bg-bg-card border border-border rounded-lg p-8">
            <h3 className="font-display text-2xl font-bold mb-6">Understanding Exhaust Sound</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-medium text-text-primary mb-4">Sound Types</h4>
                <div className="space-y-4">
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="text-accent-blue font-medium mb-2">Mellow/Subtle</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      Slight improvement over stock. Good for daily drivers who want mild enhancement.
                    </p>
                    <div className="text-xs text-accent-blue">Examples: OEM+, Magnaflow quiet series</div>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="text-accent-gold font-medium mb-2">Sporty/Balanced</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      Noticeable sound improvement without being obnoxious. Most popular choice.
                    </p>
                    <div className="text-xs text-accent-gold">Examples: Racing Beat, Corksport</div>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="text-accent-red font-medium mb-2">Aggressive/Loud</h5>
                    <p className="text-text-secondary text-xs mb-2">
                      Track-oriented sound. May be too loud for daily driving in some areas.
                    </p>
                    <div className="text-xs text-accent-red">Examples: Borla ATAK, straight pipe</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-text-primary mb-4">Factors Affecting Sound</h4>
                <div className="space-y-4">
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="text-accent-blue font-medium mb-2">Pipe Diameter</h5>
                    <p className="text-text-secondary text-xs">
                      Larger diameter = deeper sound but may lose low-end torque on NA builds.
                    </p>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="text-accent-gold font-medium mb-2">Muffler Design</h5>
                    <p className="text-text-secondary text-xs">
                      Straight-through = louder, chambered = quieter but may restrict flow.
                    </p>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="text-accent-red font-medium mb-2">Resonator</h5>
                    <p className="text-text-secondary text-xs">
                      Removes drone frequencies. Important for highway comfort.
                    </p>
                  </div>
                  <div className="bg-bg-primary rounded p-4">
                    <h5 className="text-accent-green font-medium mb-2">Generation</h5>
                    <p className="text-text-secondary text-xs">
                      NA/NB sound more aggressive naturally. NC/ND need more work to sound good.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance Gains */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Expected Performance Gains</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-display text-lg font-bold mb-2 text-accent-green">Muffler Only</h3>
              <div className="text-3xl font-bold text-accent-green mb-2">2-4 HP</div>
              <p className="text-text-secondary text-xs">
                Minimal gains due to restriction remaining in rest of system
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-display text-lg font-bold mb-2 text-accent-gold">Cat-Back</h3>
              <div className="text-3xl font-bold text-accent-gold mb-2">5-8 HP</div>
              <p className="text-text-secondary text-xs">
                Noticeable improvement, especially in high RPM range
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-display text-lg font-bold mb-2 text-accent-blue">Header + Cat-Back</h3>
              <div className="text-3xl font-bold text-accent-blue mb-2">10-15 HP</div>
              <p className="text-text-secondary text-xs">
                Significant gains, especially with proper tuning
              </p>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="font-display text-lg font-bold mb-2 text-accent-red">Full System + Tune</h3>
              <div className="text-3xl font-bold text-accent-red mb-2">15-20 HP</div>
              <p className="text-text-secondary text-xs">
                Maximum naturally aspirated gains with professional tuning
              </p>
            </div>
          </div>
        </section>

        {/* Installation Tips */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Installation & Tuning</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Installation Tips</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Use penetrating oil</strong> - Exhaust bolts rust badly
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Work when cold</strong> - Hot exhaust can cause burns
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Support properly</strong> - Use jack stands, not just jack
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Check clearances</strong> - Ensure no contact with body/chassis
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-red font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">New gaskets</strong> - Always replace header gaskets when removing
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Tuning Considerations</h3>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Header needs tune</strong> - ECU expects stock backpressure
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">O2 sensor extension</strong> - May need for proper readings
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Cat-back usually OK</strong> - Minimal ECU impact
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Emissions testing</strong> - Check local regulations
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-gold font-bold">•</span>
                  <div>
                    <strong className="text-text-primary">Break-in period</strong> - Sound changes after 500+ miles
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Generation Specific */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Generation-Specific Notes</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-bg-card border border-accent-red rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-accent-red rounded"></div>
                  <h3 className="font-display text-lg font-bold">NA/NB (1989-2005)</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Easiest platform</strong> - huge aftermarket support</li>
                  <li>• <strong>Racing Beat header</strong> - gold standard for NA/NB</li>
                  <li>• <strong>Simple routing</strong> - straightforward installation</li>
                  <li>• <strong>Great sound naturally</strong> - 4-cylinder character</li>
                  <li>• <strong>Budget friendly</strong> - many used options available</li>
                </ul>
              </div>

              <div className="bg-bg-card border border-accent-blue rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-accent-blue rounded"></div>
                  <h3 className="font-display text-lg font-bold">NC (2005-2015)</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>More restrictive stock</strong> - bigger gains possible</li>
                  <li>• <strong>Complex routing</strong> - harder installation</li>
                  <li>• <strong>Emissions considerations</strong> - dual cats from factory</li>
                  <li>• <strong>Growing market</strong> - more options now available</li>
                  <li>• <strong>PRHT considerations</strong> - different clearances needed</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-bg-card border border-accent-green rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1 h-8 bg-accent-green rounded"></div>
                  <h3 className="font-display text-lg font-bold">ND (2015+)</h3>
                </div>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>Warranty concerns</strong> - consider dealer relationship</li>
                  <li>• <strong>Limited options</strong> - newer platform, fewer choices</li>
                  <li>• <strong>Good stock sound</strong> - less dramatic improvement</li>
                  <li>• <strong>Modern emissions</strong> - very restrictive regulations</li>
                  <li>• <strong>Growing aftermarket</strong> - more options coming</li>
                </ul>
              </div>

              <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-6">
                <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Sound Samples</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Before buying, search YouTube for sound clips of specific exhaust systems on your generation.
                  Sound can vary significantly between generations due to engine differences.
                </p>
                <div className="text-xs text-accent-blue font-medium">
                  Popular search terms: "[Brand] [Generation] exhaust sound"
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            Give Your MX-5 the Sound It Deserves
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            An exhaust system is one of the most satisfying modifications you can make.
            Start with a cat-back system for the best balance of sound and performance.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#budget"
              className="inline-flex items-center gap-2 border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              Budget Options
            </a>
            <a
              href="#sound"
              className="inline-flex items-center gap-2 border-2 border-accent-red text-accent-red hover:bg-accent-red hover:text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              Sound Guide
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}