import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NBPageProps {
  params: { locale: Locale };
}

export default async function NBPage({ params }: NBPageProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Generations', href: `/${params.locale}/generations` },
            { label: 'NB (1998-2005)', href: `/${params.locale}/generations/nb` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-gold rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">NB Generation</h1>
              <div className="font-mono text-lg text-text-muted">1998-2005 • Second Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            The refined evolution. The NB brought modern styling, improved refinement, and better practicality while maintaining the pure driving spirit of the original NA.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-8 border-b border-border">
          <div>
            <div className="font-display text-2xl font-bold text-accent-gold">214,864</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Total Production</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-gold">7 Years</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Production Run</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-gold">15+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Special Editions</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-gold">2</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Facelifts</div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary leading-relaxed mb-4">
              The NB generation marked Mazda&apos;s commitment to refining the MX-5 formula without losing its essence. Launched in 1998, the NB featured a completely redesigned exterior with more flowing lines, fixed headlights (except for the Japanese market), and improved aerodynamics.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Internally known as the NB, this generation addressed many of the NA&apos;s practical shortcomings while maintaining the lightweight philosophy and perfect weight distribution that made the original so beloved. The result was a more refined, comfortable, and capable sports car that still delivered pure driving joy.
            </p>
            <p className="text-text-secondary leading-relaxed">
              With production spanning seven years, the NB evolved significantly, receiving two major facelifts and numerous improvements to engines, transmissions, and safety equipment.
            </p>
          </div>
        </section>

        {/* Design Evolution */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Design Evolution</h2>
          <div className="bg-bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Exterior Design</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Fixed headlights (most markets) for improved aerodynamics and modern appearance</li>
              <li>• More flowing, organic body lines with reduced panel gaps</li>
              <li>• Larger front air intake and integrated fog lights</li>
              <li>• Redesigned taillights with clear lenses</li>
              <li>• Improved door handles and side mirror integration</li>
              <li>• Better aerodynamics: Cd 0.38 vs NA&apos;s 0.40</li>
            </ul>
          </div>
          <div className="bg-bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Interior Improvements</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Revised dashboard layout with better ergonomics</li>
              <li>• Improved HVAC system with better climate control</li>
              <li>• More storage space including larger door pockets</li>
              <li>• Better seat design with improved lateral support</li>
              <li>• Optional leather interior packages</li>
              <li>• Enhanced sound insulation for reduced road noise</li>
            </ul>
          </div>
        </section>

        {/* Engine Specifications */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Engine Specifications</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-gold rounded-full"></div>
                <h3 className="font-display text-xl font-bold">1.6L BP-ZE (1998-2000)</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Displacement</span>
                  <span className="text-text-primary">1,597 cc</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Power</span>
                  <span className="text-text-primary">130 hp @ 6,500 rpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Torque</span>
                  <span className="text-text-primary">107 lb-ft @ 5,000 rpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Compression</span>
                  <span className="text-text-primary">9.4:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Redline</span>
                  <span className="text-text-primary">7,000 rpm</span>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-gold rounded-full"></div>
                <h3 className="font-display text-xl font-bold">1.8L BP-VE (2001-2005)</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-muted">Displacement</span>
                  <span className="text-text-primary">1,839 cc</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Power</span>
                  <span className="text-text-primary">142 hp @ 6,500 rpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Torque</span>
                  <span className="text-text-primary">125 lb-ft @ 4,500 rpm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Compression</span>
                  <span className="text-text-primary">10.0:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">Redline</span>
                  <span className="text-text-primary">7,000 rpm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Performance Figures</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">1.6L (Manual)</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">8.3 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Top Speed</span>
                    <span className="text-text-primary">119 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,293 lbs</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">1.8L (Manual)</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">7.2 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Top Speed</span>
                    <span className="text-text-primary">127 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,339 lbs</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">1.8L (Auto)</div>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">8.9 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Top Speed</span>
                    <span className="text-text-primary">124 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,403 lbs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Years & Changes */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Model Years & Major Changes</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-display text-lg font-bold text-accent-gold">1999-2000 (NB1)</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">First Phase</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Launch model with 1.6L BP-ZE engine</li>
                <li>• 5-speed manual or 4-speed automatic transmissions</li>
                <li>• Torsen limited-slip differential optional</li>
                <li>• Standard dual airbags and ABS</li>
                <li>• Base and LS trim levels in US market</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-display text-lg font-bold text-accent-gold">2001-2002 (NB2)</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">First Facelift</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Introduction of 1.8L BP-VE engine (142 hp)</li>
                <li>• Revised front and rear styling</li>
                <li>• Improved 6-speed manual transmission</li>
                <li>• Enhanced interior materials and design</li>
                <li>• Introduction of Sport Package with Bilstein shocks</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-display text-lg font-bold text-accent-gold">2003-2005 (NB2.5)</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Final Evolution</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Further styling refinements</li>
                <li>• Improved NVH (noise, vibration, harshness)</li>
                <li>• Enhanced safety features</li>
                <li>• Final special editions including Mazdaspeed MX-5</li>
                <li>• End of production in July 2005</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Notable Special Editions */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Notable Special Editions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-gold">10th Anniversary (1999)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Celebrating a decade of the MX-5 with special Sapphire Blue Mica paint, tan leather interior, and unique badging.
              </p>
              <div className="text-xs text-text-muted">7,500 units produced globally</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-gold">SE (2002)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Special Edition featuring Titanium Gray Metallic paint, black leather interior, and performance upgrades.
              </p>
              <div className="text-xs text-text-muted">3,000 units for US market</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-gold">Mazdaspeed (2004-2005)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Factory turbocharged variant with 178 hp, unique body kit, and enhanced suspension setup.
              </p>
              <div className="text-xs text-text-muted">5,428 units produced</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-gold">Shinsen (2005)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Final NB special edition with Sunlight Silver paint, blue interior accents, and commemorative features.
              </p>
              <div className="text-xs text-text-muted">2,000 units for US market</div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Common Issues & Maintenance</h2>

          <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6 mb-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Known Issues</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>Rear wheel wells:</strong> Rust-prone areas, especially in salt climates</li>
              <li>• <strong>Soft top:</strong> Plastic rear window degradation and torn seams</li>
              <li>• <strong>Transmission:</strong> 5-speed synchro wear, 6-speed notchy shifting when cold</li>
              <li>• <strong>Cooling system:</strong> Radiator and water pump failures around 80k miles</li>
              <li>• <strong>Suspension:</strong> Worn shocks and springs affect handling</li>
              <li>• <strong>Electrical:</strong> Window regulators and door lock actuators</li>
            </ul>
          </div>

          <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">Maintenance Schedule</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>5,000 miles:</strong> Oil change, basic inspection</li>
              <li>• <strong>15,000 miles:</strong> Air filter, cabin filter replacement</li>
              <li>• <strong>30,000 miles:</strong> Major service, transmission fluid change</li>
              <li>• <strong>60,000 miles:</strong> Timing belt replacement (critical)</li>
              <li>• <strong>100,000 miles:</strong> Water pump, major cooling system service</li>
              <li>• <strong>As needed:</strong> Clutch replacement (80-120k miles typical)</li>
            </ul>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/generations/na`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-red hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Previous</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-red transition-colors">
                  NA Generation
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
            href={`/${params.locale}/generations/nc`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-blue hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Next</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-blue transition-colors">
                  NC Generation
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
              href={`/${params.locale}/buying-guide/nb`}
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              NB Buying Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/nb`}
              className="inline-flex items-center gap-2 border border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Guide
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