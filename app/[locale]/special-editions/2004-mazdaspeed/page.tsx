import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface MazdaspeedPageProps {
  params: { locale: Locale };
}

export default async function MazdaspeedPage({ params }: MazdaspeedPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Special Editions', href: `/${params.locale}/special-editions` },
            { label: '2004 Mazdaspeed MX-5', href: `/${params.locale}/special-editions/2004-mazdaspeed` }
          ]}
        />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-20 rounded bg-accent-red"></div>
                <div>
                  <div className="font-display text-5xl font-black mb-2">
                    2004 Mazdaspeed MX-5
                  </div>
                  <div className="font-mono text-lg text-text-muted">
                    NB Generation • Turbocharged • 5,428 Units
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-bold text-accent-red mb-1">
                178
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Horsepower
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed">
            The most radical MX-5 ever produced from the factory. The Mazdaspeed MX-5 took everything wonderful about the NB and added a turbocharger, sport suspension, racing wheels, and aggressive styling. It was Mazda&apos;s answer to those who wanted more power without sacrificing the MX-5&apos;s legendary balance.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">5,428</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Units Produced</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">$27K</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Original MSRP</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">$45K+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Current Value</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">67%</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">ROI (20 years)</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* The Story */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">The Ultimate Factory Hotrod</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                By 2004, the MX-5 had established itself as the definitive lightweight sports car, but one criticism persisted: &quot;It needs more power.&quot; Mazda had resisted turbocharging the MX-5, believing that more power would upset the car&apos;s perfect balance. The Mazdaspeed MX-5 was their chance to prove that a turbocharged MX-5 could be even better.
              </p>
              <p>
                This wasn&apos;t just an MX-5 with a turbo bolted on. Every system was re-engineered: the suspension was firmed up and lowered, the brakes were enlarged, the wheels and tires were upgraded, and the engine was internally strengthened. The result was a car that felt familiar yet completely transformed.
              </p>
              <p>
                The Mazdaspeed represented Mazda&apos;s performance division at its peak. Fresh off successes with the Mazdaspeed Protegé and upcoming Mazdaspeed3, the division had the credibility and engineering expertise to create something truly special. The MX-5 would be their crown jewel.
              </p>
            </div>
          </section>

          {/* Specifications */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Complete Specifications</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Engine & Turbo */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Turbocharged Engine</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Engine</span>
                    <span className="text-text-primary">1.8L BP-4W Turbo DOHC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">178 hp @ 6,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">166 lb-ft @ 4,500 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Turbocharger</span>
                    <span className="text-text-primary">IHI VJ35 (8.5 psi boost)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Intercooler</span>
                    <span className="text-text-primary">Air-to-air front mount</span>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Performance Figures</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">0-60 mph</span>
                    <span className="text-text-primary">6.2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Quarter Mile</span>
                    <span className="text-text-primary">14.7 @ 95 mph</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Top Speed</span>
                    <span className="text-text-primary">135 mph (limited)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Transmission</span>
                    <span className="text-text-primary">6-Speed Manual Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,500 lbs (1,134 kg)</span>
                  </div>
                </div>
              </div>

              {/* Exterior Features */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Exterior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Colors</span>
                    <span className="text-text-primary">Velocity Red, Titanium Gray</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Wheels</span>
                    <span className="text-text-primary">17&quot; Racing Hart Wheels</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Tires</span>
                    <span className="text-text-primary">Bridgestone RE040 225/45R17</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Aerodynamics</span>
                    <span className="text-text-primary">Front Air Dam, Side Skirts, Rear Spoiler</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Badging</span>
                    <span className="text-text-primary">Mazdaspeed Emblems</span>
                  </div>
                </div>
              </div>

              {/* Suspension & Brakes */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Chassis Upgrades</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Suspension</span>
                    <span className="text-text-primary">Bilstein Shocks, Sport Springs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Ride Height</span>
                    <span className="text-text-primary">15mm Lower than Base</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Front Brakes</span>
                    <span className="text-text-primary">11.7&quot; Vented Discs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Rear Brakes</span>
                    <span className="text-text-primary">11.0&quot; Solid Discs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">LSD</span>
                    <span className="text-text-primary">Torsen Type-II</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* What Made It Special */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">What Made It Special</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Factory Turbocharger</h3>
                <p className="text-text-secondary leading-relaxed">
                  The IHI VJ35 turbocharger was perfectly sized for the 1.8L engine, providing strong mid-range torque without overwhelming lag. At 8.5 psi of boost, it delivered 178hp — a 38hp increase over the standard NB while maintaining excellent reliability and drivability.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Racing Hart Wheels</h3>
                <p className="text-text-secondary leading-relaxed">
                  The exclusive 17&quot; Racing Hart wheels weren&apos;t just for looks — they were lighter than stock 15&quot; wheels despite being larger. Combined with 225-width Bridgestone RE040 tires, they provided massive grip improvement while maintaining the MX-5&apos;s precise steering feel.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Bilstein Suspension</h3>
                <p className="text-text-secondary leading-relaxed">
                  The Bilstein shock absorbers and sport springs lowered the car 15mm while providing exceptional control. The suspension was tuned specifically for the increased power and weight, maintaining the MX-5&apos;s legendary balance while handling the turbo&apos;s extra performance.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Complete Aero Package</h3>
                <p className="text-text-secondary leading-relaxed">
                  The front air dam, side skirts, and rear spoiler weren&apos;t just cosmetic — they were functional aerodynamic aids that improved high-speed stability. The front air dam also helped direct cooling air to the intercooler and radiator.
                </p>
              </div>
            </div>
          </section>

          {/* Engineering Deep Dive */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Engineering Excellence</h2>

            <div className="space-y-8">
              {/* Turbo System */}
              <div className="bg-bg-card border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-bold mb-6 text-accent-red">Turbocharger System</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Turbocharger Specs</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-red mt-1">•</span>
                        <span>IHI VJ35 turbocharger with ceramic turbine wheel</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-red mt-1">•</span>
                        <span>Maximum boost pressure: 8.5 psi (0.6 bar)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-red mt-1">•</span>
                        <span>Electronic boost control for precise regulation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-red mt-1">•</span>
                        <span>Minimal lag thanks to small, efficient design</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Supporting Systems</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>Front-mounted air-to-air intercooler</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>Upgraded fuel injectors and fuel pump</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>Revised ECU mapping for turbo operation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>Enhanced cooling system with larger radiator</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Chassis Modifications */}
              <div className="bg-bg-card border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-bold mb-6 text-accent-blue">Chassis Modifications</h3>

                <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
                  <p>
                    The Mazdaspeed wasn&apos;t just about more power — every chassis component was upgraded to handle the increased performance. The Bilstein shocks used valving specifically tuned for the car&apos;s weight distribution and power delivery. The sport springs lowered the center of gravity while maintaining proper suspension geometry.
                  </p>
                  <p>
                    The brake system received significant upgrades with larger rotors front and rear. The 17&quot; wheels allowed for the larger brakes while reducing unsprung weight. The Torsen Type-II limited-slip differential was essential for putting the turbo&apos;s power down effectively, especially in wet conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Driving Experience */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">The Driving Experience</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8">
              <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
                <p>
                  The Mazdaspeed MX-5 transformed the driving experience while preserving everything that made the MX-5 special. The turbo&apos;s power delivery was smooth and progressive — no sudden rush, just a steady build of torque that pushed you back in the seat. The power came on strong from 3,000 rpm and held all the way to redline.
                </p>
                <p>
                  What impressed most was how civilized the car remained. In normal driving, the turbo was barely noticeable — just smoother power delivery and better passing ability. But when you wanted to play, the extra 38 horsepower and 46 lb-ft of torque made a dramatic difference, especially on track.
                </p>
                <p>
                  The chassis modifications worked in perfect harmony. The Bilstein shocks controlled body roll without harshness, the wider tires provided incredible grip, and the larger brakes inspired confidence at speed. It was still recognizably an MX-5, just with all its capabilities turned up to 11.
                </p>
              </div>
            </div>
          </section>

          {/* Market Analysis */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Market Analysis & Investment Potential</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="font-display text-xl font-bold mb-6 text-accent-gold">Current Market Value (2024)</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red mb-2">$30K - $38K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Driver Quality</div>
                  <div className="text-xs text-text-secondary">High mileage, some modifications, good runner</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold mb-2">$40K - $55K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Excellent Stock</div>
                  <div className="text-xs text-text-secondary">Low mileage, unmodified, excellent condition</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-green mb-2">$65K+</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Museum Quality</div>
                  <div className="text-xs text-text-secondary">Ultra-low miles, perfect condition, collector grade</div>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The Mazdaspeed MX-5 has experienced the strongest appreciation of any MX-5 special edition. Originally priced at $27,000, even high-mileage examples now command $30,000+, with pristine examples reaching $65,000 or more. This represents returns that far exceed traditional investments.
              </p>
              <p>
                Several factors drive this appreciation: it&apos;s the only factory turbocharged MX-5 ever made, production was limited to just 5,428 units, many were modified or tracked hard (reducing survivor count), and it represents the pinnacle of NB development. The Mazdaspeed has become the holy grail for MX-5 performance enthusiasts.
              </p>
              <p>
                For investors, the Mazdaspeed represents the strongest MX-5 investment case. The combination of rarity, performance significance, and growing collector interest suggests continued appreciation, especially for unmodified examples with complete documentation.
              </p>
            </div>
          </section>

          {/* Buying Guide */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Buying Guide: What to Look For</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-green-400">Green Flags ✓</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Completely stock with all original components</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Original Racing Hart wheels (worth $3,000+ alone)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Turbocharger functioning properly with no oil leaks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Complete service records, especially turbo maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>All Mazdaspeed badging and aero pieces intact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Original paint in Velocity Red or Titanium Gray</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-red-400">Red Flags ⚠</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Aftermarket turbo or engine modifications</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing or damaged Racing Hart wheels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Turbo problems: smoking, oil leaks, lack of boost</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Track-only modifications or stripped interiors</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Accident damage or rust (especially engine bay)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing maintenance records or unknown history</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legacy */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Legacy & Impact</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 2004 Mazdaspeed MX-5 proved that the MX-5 formula could handle more power without losing its soul. It demonstrated that enthusiasts were willing to pay premium prices for factory-engineered performance, paving the way for future high-performance variants of mainstream sports cars.
              </p>
              <p>
                More importantly, it showed Mazda what was possible with the MX-5 platform. The lessons learned from the Mazdaspeed program influenced the development of the NC generation, which featured a larger, more powerful engine from day one. The turbo car also established Mazdaspeed as a legitimate performance brand.
              </p>
              <p>
                Today, the Mazdaspeed MX-5 stands as the ultimate expression of the NB generation. It&apos;s the car that answered every criticism of the MX-5 while amplifying everything that made it great. For collectors and enthusiasts, it represents the pinnacle of factory MX-5 performance — a car that delivered on every promise and then some.
              </p>
            </div>
          </section>

          {/* Related Special Editions CTA */}
          <section className="border-t border-border pt-16">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Explore More Performance Editions
              </h2>
              <p className="text-text-secondary mb-8">
                Discover other special editions that pushed the MX-5&apos;s performance envelope
              </p>
              <Link
                href={`/${params.locale}/special-editions`}
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                View All Special Editions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}