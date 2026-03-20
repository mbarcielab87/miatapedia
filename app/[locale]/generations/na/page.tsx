import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NAPageProps {
  params: { locale: Locale };
}

export default async function NAPage({ params }: NAPageProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Generations', href: `/${params.locale}/generations` },
            { label: 'NA (1989-1997)', href: `/${params.locale}/generations/na` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-red rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">NA Generation</h1>
              <div className="font-mono text-lg text-text-muted">1989-1997 • First Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            The legend begins. The NA established the modern roadster formula and created a legacy that continues today. Pure, lightweight, and perfectly balanced.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-8 border-b border-border">
          <div>
            <div className="font-display text-2xl font-bold text-accent-red">431,000+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Total Production</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-red">9 Years</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Production Run</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-red">20+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Special Editions</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-red">2</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Sub-generations</div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">The Original Vision</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary leading-relaxed mb-4">
              The NA Miata didn&apos;t just revive the roadster—it perfected it. When Mazda launched the MX-5 in 1989, the lightweight sports car segment had been dormant for over a decade. The NA brought back the pure joy of open-top motoring with modern reliability and everyday usability.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Inspired by classic British roadsters like the Lotus Elan, the NA team created something entirely new while honoring the past. The result was a car that weighed just over 2,100 pounds, featured perfect 50/50 weight distribution, and delivered an unmatched connection between driver and machine.
            </p>
            <p className="text-text-secondary leading-relaxed">
              The NA&apos;s success exceeded all expectations, saving the roadster category and inspiring countless imitators. Today, it remains the gold standard for pure driving experience and the foundation upon which all subsequent MX-5s are built.
            </p>
          </div>
        </section>

        {/* Sub-generations */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">NA6 vs NA8</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                <h3 className="font-display text-xl font-bold">NA6 (1989-1993)</h3>
              </div>
              <div className="mb-4">
                <div className="font-display text-lg font-bold mb-2">1.6L B6-ZE Engine</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">116 hp @ 6,500 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">100 lb-ft @ 5,500 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,116 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">8.6 sec</span>
                  </div>
                </div>
              </div>
              <div className="text-text-secondary text-sm">
                The original and purest. Lightweight, nimble, and perfectly balanced. Many enthusiasts consider this the definitive MX-5 experience.
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                <h3 className="font-display text-xl font-bold">NA8 (1994-1997)</h3>
              </div>
              <div className="mb-4">
                <div className="font-display text-lg font-bold mb-2">1.8L BP-ZE Engine</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">128 hp @ 6,500 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">110 lb-ft @ 5,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,182 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">8.1 sec</span>
                  </div>
                </div>
              </div>
              <div className="text-text-secondary text-sm">
                More power and torque with refined suspension. Dual airbags and improved safety features while maintaining the NA character.
              </div>
            </div>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Design Philosophy</h2>
          <div className="bg-bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Jinba Ittai</h3>
            <p className="text-text-secondary leading-relaxed">
              The NA embodied Mazda&apos;s &quot;Jinba Ittai&quot; philosophy—the unity between horse and rider. Every design decision prioritized the connection between driver and machine, resulting in a car that feels like an extension of your body rather than a separate entity you control.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Engineering Purity</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Perfect 50/50 weight distribution</li>
                <li>• Ultra-low center of gravity</li>
                <li>• Minimal weight (under 2,200 lbs)</li>
                <li>• Short-throw 5-speed manual transmission</li>
                <li>• Double-wishbone front suspension</li>
                <li>• Multi-link rear suspension</li>
              </ul>
            </div>
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Iconic Styling</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Pop-up headlights (signature feature)</li>
                <li>• Classic long-hood, short-deck proportions</li>
                <li>• Minimalist interior design</li>
                <li>• Functional aerodynamics</li>
                <li>• Timeless color palette</li>
                <li>• Manual soft top operation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Notable Features */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Iconic Features</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                <h3 className="font-display text-xl font-bold">Pop-up Headlights</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Perhaps the most beloved feature of the NA, the pop-up headlights gave the car incredible character and charm. When closed, they created clean aerodynamic lines. When raised, they gave the Miata an alert, eager expression that perfectly matched its personality.
              </p>
              <div className="text-accent-red text-sm font-medium">Last production car sold in the US with pop-up headlights</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                <h3 className="font-display text-xl font-bold">Manual Soft Top</h3>
              </div>
              <p className="text-text-secondary mb-4">
                The simple, lightweight manual soft top could be operated in seconds without leaving the driver&apos;s seat. No motors, no complexity—just pure functionality that added minimal weight while maximizing the open-air experience.
              </p>
              <div className="text-accent-red text-sm font-medium">Sub-15 second operation when mastered</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                <h3 className="font-display text-xl font-bold">Perfect Ergonomics</h3>
              </div>
              <p className="text-text-secondary mb-4">
                Every control fell perfectly to hand. The driving position, pedal placement, shifter location, and steering wheel position were all optimized for the pure driving experience. Many consider it the best driver interface ever created.
              </p>
              <div className="text-accent-red text-sm font-medium">Blueprint for sports car ergonomics</div>
            </div>
          </div>
        </section>

        {/* Special Editions */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Iconic Special Editions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-red">British Racing Green (1991)</h3>
              <p className="text-text-secondary text-sm mb-3">
                The first and most iconic Miata special edition, featuring classic BRG paint with tan interior and Minilite-style wheels.
              </p>
              <div className="text-xs text-text-muted">4,000 units produced</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-red">Black & Tan (1992-1993)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Classic combination of black exterior with tan leather interior, becoming one of the most desirable NA configurations.
              </p>
              <div className="text-xs text-text-muted">4,000 units across two years</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-red">R-Package (1994-1997)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Performance-focused variant with Torsen LSD, Bilstein shocks, front strut tower brace, and no power steering.
              </p>
              <div className="text-xs text-text-muted">Available throughout NA8 production</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-red">M-Edition (1996-1997)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Final special editions featuring unique colors, premium interiors, and special badging to commemorate the end of NA production.
              </p>
              <div className="text-xs text-text-muted">3,000+ units across multiple colors</div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Common Issues & Maintenance</h2>

          <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6 mb-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Known Issues</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>Rust:</strong> Rear fender wells, door frames, and rockers (especially in salt climates)</li>
              <li>• <strong>Soft top:</strong> Plastic rear window brittleness and general wear</li>
              <li>• <strong>Pop-up headlights:</strong> Motor failures and alignment issues</li>
              <li>• <strong>Timing belt:</strong> Interference engine requires regular replacement</li>
              <li>• <strong>Short nose crank:</strong> Early 1.6L engines (1990-1991) vulnerable to keyway failure</li>
              <li>• <strong>Differential:</strong> Open diff in base models limits performance</li>
            </ul>
          </div>

          <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Maintenance Excellence</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>60,000 miles:</strong> Timing belt replacement (critical)</li>
              <li>• <strong>5,000 miles:</strong> Regular oil changes maintain engine health</li>
              <li>• <strong>Annual:</strong> Soft top treatment and inspection</li>
              <li>• <strong>As needed:</strong> Clutch hydraulics refresh for better feel</li>
              <li>• <strong>Preventive:</strong> Rust prevention and body maintenance</li>
              <li>• <strong>Seasonal:</strong> Pop-up headlight cleaning and lubrication</li>
            </ul>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Legacy & Impact</h2>

          <div className="bg-bg-card border border-border rounded-lg p-6">
            <p className="text-text-secondary leading-relaxed mb-6">
              The NA Miata&apos;s impact extends far beyond its production numbers. It single-handedly revived the affordable sports car segment, proved that pure driving joy didn&apos;t require massive power, and established a template that continues to influence car design today.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-display text-lg font-bold mb-3 text-accent-red">Cultural Icon</h4>
                <ul className="space-y-1 text-text-secondary text-sm">
                  <li>• Most successful roadster ever</li>
                  <li>• Featured in countless movies and media</li>
                  <li>• Symbol of pure driving joy</li>
                  <li>• Inspired a generation of enthusiasts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-bold mb-3 text-accent-red">Racing Heritage</h4>
                <ul className="space-y-1 text-text-secondary text-sm">
                  <li>• Spec Miata racing series</li>
                  <li>• SCCA autocross domination</li>
                  <li>• Grassroots motorsports favorite</li>
                  <li>• Track day accessibility</li>
                </ul>
              </div>
              <div>
                <h4 className="font-display text-lg font-bold mb-3 text-accent-red">Market Influence</h4>
                <ul className="space-y-1 text-text-secondary text-sm">
                  <li>• Inspired numerous competitors</li>
                  <li>• Proved lightweight philosophy</li>
                  <li>• Established affordable sports car market</li>
                  <li>• Continues to appreciate in value</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex justify-end pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/generations/nb`}
            className="flex-1 max-w-md bg-bg-card border border-border rounded-lg p-6 hover:border-accent-gold hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Next</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-gold transition-colors">
                  NB Generation
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
              href={`/${params.locale}/buying-guide/na`}
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              NA Buying Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/na`}
              className="inline-flex items-center gap-2 border border-accent-red text-accent-red hover:bg-accent-red hover:text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Guide
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