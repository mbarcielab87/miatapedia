import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NCPageProps {
  params: { locale: Locale };
}

export default async function NCPage({ params }: NCPageProps) {
  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Generations', href: `/${params.locale}/generations` },
            { label: 'NC (2005-2015)', href: `/${params.locale}/generations/nc` }
          ]}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-1 h-16 bg-accent-blue rounded"></div>
            <div>
              <h1 className="font-display text-6xl font-black">NC Generation</h1>
              <div className="font-mono text-lg text-text-muted">2005-2015 • Third Generation</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            The modern classic. The NC brought contemporary design, advanced safety, and improved performance while staying true to the MX-5&apos;s lightweight philosophy.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-8 border-b border-border">
          <div>
            <div className="font-display text-2xl font-bold text-accent-blue">320,000+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Total Production</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-blue">10 Years</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Production Run</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-blue">25+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Special Editions</div>
          </div>
          <div>
            <div className="font-display text-2xl font-bold text-accent-blue">3</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Facelifts</div>
          </div>
        </div>

        {/* Overview */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Overview</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-text-secondary leading-relaxed mb-4">
              The NC generation represented the most significant evolution of the MX-5 formula since the original NA. Launched in 2005, the NC was larger, more powerful, and more sophisticated than its predecessors, yet maintained the essential characteristics that made the MX-5 legendary.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Built on an entirely new platform, the NC featured modern safety standards, contemporary styling, and significantly improved performance. Despite being larger and heavier than previous generations, clever engineering ensured the NC retained the agile handling and driving purity that defined the MX-5 experience.
            </p>
            <p className="text-text-secondary leading-relaxed">
              With a production run spanning a decade, the NC evolved through three distinct phases, each bringing refinements in power, efficiency, and refinement while staying true to the core MX-5 philosophy.
            </p>
          </div>
        </section>

        {/* Design Philosophy */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Design Philosophy</h2>
          <div className="bg-bg-card border border-border rounded-lg p-6 mb-6">
            <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Exterior Evolution</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Contemporary &quot;Kodo&quot; design language preview with flowing lines</li>
              <li>• Larger dimensions for improved safety and comfort</li>
              <li>• Distinctive &quot;shark nose&quot; front end design</li>
              <li>• Integrated headlight and bumper design</li>
              <li>• Improved aerodynamics with functional air ducting</li>
              <li>• Power retractable hardtop (PRHT) option from 2007</li>
            </ul>
          </div>
          <div className="bg-bg-card border border-border rounded-lg p-6">
            <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Interior Advancement</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>• Significantly improved interior space and storage</li>
              <li>• Modern dashboard layout with better materials</li>
              <li>• Enhanced climate control and infotainment systems</li>
              <li>• Improved seat design with better support</li>
              <li>• Advanced safety features including multiple airbags</li>
              <li>• Better NVH characteristics for refined driving experience</li>
            </ul>
          </div>
        </section>

        {/* Engine Specifications */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Engine Specifications</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                <h3 className="font-display text-xl font-bold">2.0L MZR LF-VE (2006-2008)</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Displacement</span>
                    <span className="text-text-primary">1,999 cc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">158 hp @ 6,700 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">140 lb-ft @ 5,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Compression</span>
                    <span className="text-text-primary">10.8:1</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">6.9 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Top Speed</span>
                    <span className="text-text-primary">130 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,447 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Redline</span>
                    <span className="text-text-primary">7,200 rpm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                <h3 className="font-display text-xl font-bold">2.0L MZR LF-VE (2009-2012) - NC2</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Displacement</span>
                    <span className="text-text-primary">1,999 cc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">167 hp @ 7,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">140 lb-ft @ 5,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Compression</span>
                    <span className="text-text-primary">11.0:1</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">6.6 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Top Speed</span>
                    <span className="text-text-primary">135 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,480 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Redline</span>
                    <span className="text-text-primary">7,200 rpm</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                <h3 className="font-display text-xl font-bold">2.0L MZR LF-VD (2013-2015) - NC3</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Displacement</span>
                    <span className="text-text-primary">1,999 cc</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">158 hp @ 6,700 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">140 lb-ft @ 5,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Compression</span>
                    <span className="text-text-primary">10.8:1</span>
                  </div>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">7.0 sec</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Top Speed</span>
                    <span className="text-text-primary">130 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,447 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Fuel Economy</span>
                    <span className="text-text-primary">22/28 mpg</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Model Evolution */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Model Evolution</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-display text-lg font-bold text-accent-blue">2006-2008 (NC1)</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">First Generation</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Launch with completely new platform and 2.0L engine</li>
                <li>• 5-speed manual and 6-speed automatic transmissions</li>
                <li>• Sport, Touring, and Grand Touring trim levels</li>
                <li>• Introduction of Power Retractable Hardtop (PRHT) in 2007</li>
                <li>• Advanced safety features including stability control</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-display text-lg font-bold text-accent-blue">2009-2012 (NC2)</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">First Facelift</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Revised front and rear styling with new headlights</li>
                <li>• Power increase to 167 hp with revised engine tuning</li>
                <li>• Introduction of 6-speed manual transmission</li>
                <li>• Enhanced suspension tuning and LSD availability</li>
                <li>• Improved interior materials and technology</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="font-display text-lg font-bold text-accent-blue">2013-2015 (NC3)</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Final Evolution</div>
              </div>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Second facelift with updated styling and LED accents</li>
                <li>• Focus on fuel efficiency and emissions compliance</li>
                <li>• Refined suspension tuning for better balance</li>
                <li>• Special editions celebrating end of production</li>
                <li>• Final model year with limited production numbers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Power Retractable Hardtop */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Power Retractable Hardtop (PRHT)</h2>

          <div className="bg-bg-card border border-border rounded-lg p-6">
            <p className="text-text-secondary mb-6 leading-relaxed">
              The NC was the first MX-5 to offer a factory power retractable hardtop, combining the open-air experience of a convertible with the security and weather protection of a coupe.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Advantages</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• Enhanced security and theft protection</li>
                  <li>• Better noise insulation when closed</li>
                  <li>• Improved climate control efficiency</li>
                  <li>• No manual top storage required</li>
                  <li>• Premium coupe appearance</li>
                  <li>• 12-second open/close operation</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Considerations</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• 77 lbs additional weight</li>
                  <li>• Reduced trunk space</li>
                  <li>• Higher purchase price</li>
                  <li>• More complex mechanical systems</li>
                  <li>• Potential maintenance requirements</li>
                  <li>• Cannot operate while driving</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Notable Special Editions */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Notable Special Editions</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-blue">Grand Touring (2007-2008)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Top-tier trim with PRHT, premium leather, Bose audio system, and advanced features.
              </p>
              <div className="text-xs text-text-muted">Flagship model through early NC years</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-blue">R3 (2008)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Racing-focused variant with Recaro seats, Bilstein suspension, and aerodynamic package.
              </p>
              <div className="text-xs text-text-muted">2,000 units produced</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-blue">Special Edition (2009-2010)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Unique paint colors, premium interior appointments, and enhanced feature content.
              </p>
              <div className="text-xs text-text-muted">Multiple color options available</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-blue">25th Anniversary (2014)</h3>
              <p className="text-text-secondary text-sm mb-3">
                Celebrating 25 years of MX-5 with unique Soul Red paint and commemorative features.
              </p>
              <div className="text-xs text-text-muted">Limited production run</div>
            </div>
          </div>
        </section>

        {/* Common Issues */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Common Issues & Maintenance</h2>

          <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6 mb-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-red">Known Issues</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>PRHT system:</strong> Motor failures and hydraulic leaks</li>
              <li>• <strong>Differential:</strong> Early models prone to rear diff noise</li>
              <li>• <strong>Engine:</strong> Carbon buildup in direct injection engines</li>
              <li>• <strong>Transmission:</strong> 6-speed notchy when cold, synchro wear</li>
              <li>• <strong>Suspension:</strong> Shock absorber failures around 60k miles</li>
              <li>• <strong>Electrical:</strong> Window regulators and various sensors</li>
            </ul>
          </div>

          <div className="bg-accent-blue/10 border border-accent-blue/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Maintenance Schedule</h3>
            <ul className="space-y-2 text-text-secondary text-sm">
              <li>• <strong>7,500 miles:</strong> Oil change and basic inspection</li>
              <li>• <strong>15,000 miles:</strong> Air filter, cabin filter, fluid top-off</li>
              <li>• <strong>30,000 miles:</strong> Major service, transmission fluid change</li>
              <li>• <strong>60,000 miles:</strong> Spark plugs, major system inspection</li>
              <li>• <strong>105,000 miles:</strong> Timing chain inspection, coolant system</li>
              <li>• <strong>As needed:</strong> PRHT maintenance, differential service</li>
            </ul>
          </div>
        </section>

        {/* Market Reception */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">Market Reception & Legacy</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Critical Reception</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Praised for improved safety and refinement</li>
                <li>• Some criticism for increased weight and size</li>
                <li>• PRHT widely appreciated for practicality</li>
                <li>• Performance improvements well-received</li>
                <li>• Handling characteristics maintained MX-5 DNA</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-lg font-bold mb-4 text-accent-blue">Enthusiast Perspective</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• Strong aftermarket support and modification potential</li>
                <li>• Popular choice for track day enthusiasts</li>
                <li>• Reliable platform with good parts availability</li>
                <li>• Balanced compromise between NA purity and modern features</li>
                <li>• Growing appreciation as values stabilize</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          <Link
            href={`/${params.locale}/generations/nb`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-gold hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Previous</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-gold transition-colors">
                  NB Generation
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
            href={`/${params.locale}/generations/nd`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-green hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Next</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-green transition-colors">
                  ND Generation
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
              href={`/${params.locale}/buying-guide/nc`}
              className="inline-flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/80 text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              NC Buying Guide
            </Link>
            <Link
              href={`/${params.locale}/maintenance/nc`}
              className="inline-flex items-center gap-2 border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-4 py-2 rounded font-semibold transition-colors no-underline text-sm"
            >
              Maintenance Guide
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