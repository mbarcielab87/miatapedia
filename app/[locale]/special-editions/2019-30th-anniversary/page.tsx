import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface ThirtiethAnniversaryPageProps {
  params: { locale: Locale };
}

export default async function ThirtiethAnniversaryPage({ params }: ThirtiethAnniversaryPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Special Editions', href: `/${params.locale}/special-editions` },
            { label: '2019 30th Anniversary', href: `/${params.locale}/special-editions/2019-30th-anniversary` }
          ]}
        />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-20 rounded bg-accent-green"></div>
                <div>
                  <div className="font-display text-5xl font-black mb-2">
                    2019 30th Anniversary
                  </div>
                  <div className="font-mono text-lg text-text-muted">
                    ND Generation • Global Edition • 3,000 Units
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-bold text-accent-green mb-1">
                30
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Years of Joy
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed">
            Three decades after the original NA debuted, the MX-5 had become a global icon with over one million units sold. The 30th Anniversary Edition celebrated this remarkable journey with Racing Orange paint, exclusive Rays wheels, and premium Recaro seats — a fitting tribute to thirty years of pure driving joy.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">3,000</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Global Units</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">$35K</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Original MSRP</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">$42K+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Current Value</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">20%</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">ROI (5 years)</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* The Story */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">A Global Celebration</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                By 2019, the MX-5 had achieved something unprecedented in the automotive world — it had remained true to its original mission for three full decades while continuously evolving and improving. With over one million units sold across four generations, it had become the best-selling two-seat sports car in history.
              </p>
              <p>
                The 30th Anniversary Edition was different from previous special editions in a crucial way: it was the first to be offered globally. While earlier editions were often limited to specific markets, Mazda recognized that the MX-5&apos;s appeal was truly worldwide and deserved a global celebration.
              </p>
              <p>
                The Racing Orange color was a bold choice that harkened back to the car&apos;s motorsport roots. Combined with exclusive Rays forged wheels, Recaro seats, and Brembo brakes, this edition represented the pinnacle of ND generation engineering wrapped in a package that celebrated the MX-5&apos;s racing heritage.
              </p>
            </div>
          </section>

          {/* Specifications */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Complete Specifications</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Exterior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Exterior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Paint Color</span>
                    <span className="text-text-primary">Racing Orange (Exclusive)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Wheels</span>
                    <span className="text-text-primary">17&quot; Rays ZE40 Forged</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Soft Top</span>
                    <span className="text-text-primary">Black Canvas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Mirrors</span>
                    <span className="text-text-primary">Piano Black</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Badging</span>
                    <span className="text-text-primary">30th Anniversary Emblems</span>
                  </div>
                </div>
              </div>

              {/* Interior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Interior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Seats</span>
                    <span className="text-text-primary">Recaro Black/Orange</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Dashboard</span>
                    <span className="text-text-primary">Black with Orange Stitching</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Door Panels</span>
                    <span className="text-text-primary">Black Leather with Orange</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Steering Wheel</span>
                    <span className="text-text-primary">Alcantara with Orange Stitching</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Floor Mats</span>
                    <span className="text-text-primary">30th Anniversary Logo</span>
                  </div>
                </div>
              </div>

              {/* Engine & Performance */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Engine & Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Engine</span>
                    <span className="text-text-primary">2.0L SKYACTIV-G</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">181 hp @ 7,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">151 lb-ft @ 4,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Transmission</span>
                    <span className="text-text-primary">6-Speed Manual Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,341 lbs (1,062 kg)</span>
                  </div>
                </div>
              </div>

              {/* Chassis & Brakes */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Chassis & Brakes</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Suspension</span>
                    <span className="text-text-primary">Sport-Tuned Bilstein</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Front Brakes</span>
                    <span className="text-text-primary">Brembo 4-Piston Calipers</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Rear Brakes</span>
                    <span className="text-text-primary">Single-Piston with ABS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">LSD</span>
                    <span className="text-text-primary">Mechanical (Standard)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Tires</span>
                    <span className="text-text-primary">Bridgestone Potenza S001</span>
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
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Racing Orange Paint</h3>
                <p className="text-text-secondary leading-relaxed">
                  The exclusive Racing Orange was developed specifically for the 30th Anniversary and has never been offered on any other MX-5. The vibrant metallic orange captures attention while paying homage to the car&apos;s motorsport heritage and the iconic orange racing liveries of the past.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Rays ZE40 Forged Wheels</h3>
                <p className="text-text-secondary leading-relaxed">
                  The exclusive 17&quot; Rays ZE40 wheels are forged aluminum masterpieces that combine incredible strength with minimal weight. These wheels are lighter than stock while providing the perfect complement to the Racing Orange paint scheme.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Recaro Sport Seats</h3>
                <p className="text-text-secondary leading-relaxed">
                  The Recaro seats feature black Alcantara with orange accents and exceptional bolstering. These aren&apos;t just show pieces — they provide genuine track-level support while maintaining comfort for daily driving. The orange stitching throughout ties the interior theme together perfectly.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Global Exclusivity</h3>
                <p className="text-text-secondary leading-relaxed">
                  Unlike previous special editions that were often limited to single markets, the 30th Anniversary was offered globally with just 3,000 units worldwide. This global approach made it the most exclusive MX-5 special edition ever produced relative to the worldwide market.
                </p>
              </div>
            </div>
          </section>

          {/* ND Generation Evolution */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">ND Generation: Return to Roots</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8">
              <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
                <p>
                  The 30th Anniversary Edition showcased the ND generation at its best — a return to the original MX-5&apos;s lightweight philosophy while incorporating three decades of engineering advancement. At 2,341 pounds, it was lighter than the NC generation while offering more power and better handling than ever before.
                </p>
                <p>
                  The SKYACTIV-G 2.0L engine represents everything Mazda learned about naturally aspirated performance. With 181 horsepower and a 7,000 rpm redline, it delivers linear power delivery that rewards enthusiastic driving. The high-compression design provides excellent fuel economy while maintaining the free-revving character that defines the MX-5 experience.
                </p>
                <p>
                  The chassis improvements were equally impressive. The ND&apos;s body structure is 40% stiffer than the NC while remaining lighter. Combined with the sport-tuned Bilstein suspension and Brembo brakes, the 30th Anniversary offered handling precision that surpassed even the legendary NA generation.
                </p>
              </div>
            </div>
          </section>

          {/* Modern Technology */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Modern Technology Integration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Safety Features</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-blue mt-1">•</span>
                    <span>Advanced airbag system with knee airbags</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-blue mt-1">•</span>
                    <span>Electronic stability control and traction control</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-blue mt-1">•</span>
                    <span>ABS with electronic brake-force distribution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-blue mt-1">•</span>
                    <span>Reinforced cabin structure with crumple zones</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Technology Features</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-green mt-1">•</span>
                    <span>MAZDA CONNECT infotainment system</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-green mt-1">•</span>
                    <span>Bluetooth audio streaming and hands-free calling</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-green mt-1">•</span>
                    <span>USB connectivity and smartphone integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-green mt-1">•</span>
                    <span>Premium Bose audio system (9 speakers)</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Analysis */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Market Analysis & Future Collectibility</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="font-display text-xl font-bold mb-6 text-accent-gold">Current Market Value (2024)</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red mb-2">$38K - $42K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Daily Driver</div>
                  <div className="text-xs text-text-secondary">Moderate mileage, well-maintained, excellent condition</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold mb-2">$45K - $52K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Low Mileage</div>
                  <div className="text-xs text-text-secondary">Under 15k miles, garage kept, pristine condition</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-green mb-2">$55K+</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Collector Quality</div>
                  <div className="text-xs text-text-secondary">Ultra-low miles, perfect condition, investment grade</div>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 30th Anniversary Edition has shown steady appreciation since its release. Originally priced at $35,000, even moderate-mileage examples now command $40,000+, with low-mileage examples reaching $50,000 or more. This 20% appreciation in just five years suggests strong collector potential.
              </p>
              <p>
                The combination of global exclusivity (only 3,000 units worldwide), iconic Racing Orange paint, premium equipment, and milestone significance creates a perfect storm for collectibility. The car represents both the pinnacle of ND development and a celebration of 30 years of MX-5 excellence.
              </p>
              <p>
                Future appreciation potential is strong. The 30th Anniversary is likely the last major milestone special edition for the ND generation, making it historically significant. The Racing Orange paint and Rays wheels create instant visual recognition, while the Recaro seats and premium equipment justify the price premium.
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
                    <span>Perfect Racing Orange paint with no chips or fade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Original Rays ZE40 wheels in perfect condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Recaro seats with no wear or damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>All 30th Anniversary badging and floor mats present</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Complete service records and low mileage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Garage-kept with proper storage habits</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-red-400">Red Flags ⚠</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Paint damage or incorrect Racing Orange shade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Aftermarket wheels (Rays ZE40s are worth $3,000+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Modified or replaced Recaro seats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing anniversary badging or interior trim</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Track modifications or performance mods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Accident history or frame damage</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Legacy */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Legacy & Future Significance</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 2019 30th Anniversary Edition represents a perfect culmination of three decades of MX-5 evolution. It combines the lightweight philosophy of the original NA with modern engineering, safety, and technology. In many ways, it&apos;s the MX-5 that enthusiasts have always dreamed of — pure, lightweight, powerful, and refined.
              </p>
              <p>
                The global nature of this special edition also marked a new chapter in MX-5 history. For the first time, Mazda acknowledged that the MX-5&apos;s appeal was truly worldwide and deserved a worldwide celebration. This global approach suggests that future special editions will likely follow suit.
              </p>
              <p>
                As we look toward the future, the 30th Anniversary stands as a bridge between the MX-5&apos;s storied past and its electric future. It may be one of the last special editions to feature a naturally aspirated gasoline engine, making it historically significant as the end of an era and the celebration of everything that made the MX-5 special for three incredible decades.
              </p>
            </div>
          </section>

          {/* Related Special Editions CTA */}
          <section className="border-t border-border pt-16">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Continue the Anniversary Journey
              </h2>
              <p className="text-text-secondary mb-8">
                Explore more milestone editions that celebrated the MX-5&apos;s incredible journey
              </p>
              <Link
                href={`/${params.locale}/special-editions`}
                className="inline-flex items-center gap-2 bg-accent-green hover:bg-accent-green/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
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