import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface HundredthAnniversaryPageProps {
  params: { locale: Locale };
}

export default async function HundredthAnniversaryPage({ params }: HundredthAnniversaryPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Special Editions', href: `/${params.locale}/special-editions` },
            { label: '2020 100th Anniversary', href: `/${params.locale}/special-editions/2020-100th-anniversary` }
          ]}
        />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-1 h-20 rounded bg-accent-gold"></div>
                <div>
                  <div className="font-display text-5xl font-black mb-2">
                    2020 100th Anniversary
                  </div>
                  <div className="font-mono text-lg text-text-muted">
                    ND Generation • Mazda Centennial • Limited Production
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-bold text-accent-gold mb-1">
                100
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Years of Mazda
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed">
            A century of automotive innovation culminated in this extraordinary special edition. The 100th Anniversary MX-5 celebrated not just the MX-5&apos;s legacy, but Mazda&apos;s entire centennial journey from cork manufacturer to global automotive icon. With Snowflake White Pearl paint and burgundy Nappa leather, it embodied a century of craftsmanship and passion.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">Limited</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Global Production</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">$38K</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Original MSRP</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">$48K+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Current Value</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">26%</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">ROI (4 years)</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* The Story */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">A Century of Innovation</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                In 1920, Jujiro Matsuda founded what would eventually become Mazda Motor Corporation as Toyo Cork Kogyo Co., Ltd. A century later, in 2020, Mazda celebrated 100 years of innovation, craftsmanship, and the relentless pursuit of driving pleasure. The 100th Anniversary MX-5 was the crown jewel of this centennial celebration.
              </p>
              <p>
                This wasn&apos;t just another MX-5 special edition — it was a tribute to everything Mazda had learned about creating beautiful, engaging automobiles. From the hand-crafted cork products of the 1920s to the SKYACTIV technology of the 2020s, every element of the 100th Anniversary Edition reflected a century of refinement and attention to detail.
              </p>
              <p>
                The timing was particularly meaningful. As the automotive industry faced unprecedented changes with electrification and autonomy, the 100th Anniversary MX-5 served as both a celebration of the past and a statement about Mazda&apos;s commitment to the pure joy of driving. It was a reminder that some things — like the connection between human and machine — are timeless.
              </p>
            </div>
          </section>

          {/* Specifications */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Complete Specifications</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Exterior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Exterior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Paint Color</span>
                    <span className="text-text-primary">Snowflake White Pearl</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Wheels</span>
                    <span className="text-text-primary">17&quot; Dark Silver Alloy</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Soft Top</span>
                    <span className="text-text-primary">Dark Brown Canvas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Badges</span>
                    <span className="text-text-primary">100th Anniversary Emblems</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Special Details</span>
                    <span className="text-text-primary">Cherry Wood Accents</span>
                  </div>
                </div>
              </div>

              {/* Interior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Premium Interior</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Seats</span>
                    <span className="text-text-primary">Burgundy Nappa Leather</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Dashboard</span>
                    <span className="text-text-primary">White with Cherry Accents</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Door Panels</span>
                    <span className="text-text-primary">Matching Burgundy Leather</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Steering Wheel</span>
                    <span className="text-text-primary">Burgundy Leather with Cherry</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Floor Mats</span>
                    <span className="text-text-primary">100th Anniversary Logo</span>
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
                    <span className="text-text-primary">6-Speed Manual / 6-Speed Auto</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,341 lbs (1,062 kg)</span>
                  </div>
                </div>
              </div>

              {/* Special Features */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Centennial Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Cherry Wood</span>
                    <span className="text-text-primary">Dashboard &amp; Steering Wheel</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Numbered Plaque</span>
                    <span className="text-text-primary">Individual Serial Number</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Key Fob</span>
                    <span className="text-text-primary">Special 100th Anniversary Design</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Welcome Lighting</span>
                    <span className="text-text-primary">100th Anniversary Logo Projection</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Documentation</span>
                    <span className="text-text-primary">Centennial Certificate</span>
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
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Snowflake White Pearl</h3>
                <p className="text-text-secondary leading-relaxed">
                  The exclusive Snowflake White Pearl paint was developed specifically for the 100th Anniversary celebration. The multi-layer pearl finish creates depth and brilliance that changes with lighting conditions, representing the purity and elegance of Mazda&apos;s design philosophy throughout the decades.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Burgundy Nappa Leather</h3>
                <p className="text-text-secondary leading-relaxed">
                  The sumptuous burgundy Nappa leather interior was the finest leather ever fitted to an MX-5. Hand-selected and carefully crafted, it provided luxury that rivaled far more expensive grand tourers while maintaining the intimate, driver-focused cockpit that defines the MX-5 experience.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Cherry Wood Accents</h3>
                <p className="text-text-secondary leading-relaxed">
                  The cherry wood dashboard and steering wheel accents were a direct homage to Mazda&apos;s origins as a cork and wood products company. Each piece was carefully crafted and finished, creating a warm, natural contrast to the modern technology surrounding it.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Historical Significance</h3>
                <p className="text-text-secondary leading-relaxed">
                  This wasn&apos;t just an MX-5 special edition — it was a celebration of Mazda&apos;s entire century of innovation. Every detail, from the welcome lighting to the numbered plaque, connected the owner to 100 years of Mazda history and craftsmanship.
                </p>
              </div>
            </div>
          </section>

          {/* Mazda&apos;s Century of Innovation */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Mazda&apos;s Century of Innovation</h2>

            <div className="space-y-8">
              {/* Timeline */}
              <div className="bg-bg-card border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-bold mb-6 text-accent-gold">Key Milestones (1920-2020)</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Early Years (1920s-1960s)</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-gold mt-1">•</span>
                        <span>1920: Founded as Toyo Cork Kogyo Co., Ltd.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-gold mt-1">•</span>
                        <span>1931: First automobile - Mazda-Go three-wheeler</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-gold mt-1">•</span>
                        <span>1960: Introduction of the R360 coupe</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-gold mt-1">•</span>
                        <span>1967: Cosmo Sport - first production rotary</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-text-primary mb-3">Modern Era (1970s-2020s)</h4>
                    <ul className="space-y-2 text-text-secondary">
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>1978: RX-7 launches rotary sports car era</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>1989: MX-5 Miata revives roadster market</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>2012: SKYACTIV technology revolutionizes efficiency</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-accent-blue mt-1">•</span>
                        <span>2020: Centennial celebration and electrification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Innovation Philosophy */}
              <div className="bg-bg-card border border-border rounded-lg p-8">
                <h3 className="font-display text-xl font-bold mb-6 text-accent-red">Innovation Philosophy</h3>

                <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
                  <p>
                    Throughout its century of existence, Mazda has consistently chosen the unconventional path. While other manufacturers followed trends, Mazda pioneered the rotary engine, championed lightweight construction, and prioritized driving enjoyment over pure performance numbers. The 100th Anniversary MX-5 embodied all these principles.
                  </p>
                  <p>
                    The cherry wood accents weren&apos;t just decoration — they were a direct connection to the company&apos;s roots in natural materials. The emphasis on craftsmanship over ostentation reflected Mazda&apos;s Japanese heritage and commitment to substance over style. Every detail told the story of a company that had never lost sight of its core values.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Craftsmanship Details */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Exceptional Craftsmanship</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Cherry Wood Details</h3>
                  <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
                    <p>
                      The cherry wood dashboard and steering wheel accents were hand-crafted using traditional Japanese woodworking techniques. Each piece was individually selected, shaped, and finished to ensure perfect grain matching and color consistency. The wood was treated with multiple coats of clear finish to protect against wear while maintaining its natural beauty.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Nappa Leather Process</h3>
                  <div className="prose prose-invert max-w-none text-text-secondary leading-relaxed">
                    <p>
                      The burgundy Nappa leather underwent an extensive 14-step tanning process to achieve its exceptional softness and durability. Each hide was individually inspected and only the finest sections were selected for the MX-5 interior. The deep burgundy color was achieved through multiple dye applications to ensure color-fastness and richness.
                    </p>
                  </div>
                </div>
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
                  <div className="font-display text-2xl font-bold text-accent-red mb-2">$42K - $48K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Excellent Condition</div>
                  <div className="text-xs text-text-secondary">Well-maintained, moderate mileage, original condition</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold mb-2">$52K - $58K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Low Mileage</div>
                  <div className="text-xs text-text-secondary">Under 10k miles, garage kept, pristine condition</div>
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
                The 100th Anniversary Edition has shown strong appreciation since its 2020 debut. Originally priced at $38,000, examples now consistently command $45,000+, with pristine low-mileage examples reaching $60,000 or more. This 26% appreciation in just four years suggests exceptional collector potential.
              </p>
              <p>
                The combination of historical significance (Mazda&apos;s centennial), exceptional materials (Nappa leather and cherry wood), and limited global production creates a perfect collector car. The 100th Anniversary represents both the culmination of Mazda&apos;s first century and potentially the end of the internal combustion MX-5 era.
              </p>
              <p>
                Future appreciation potential is exceptionally strong. As electrification transforms the automotive landscape, the 100th Anniversary stands as a monument to the golden age of naturally aspirated sports cars. Its historical significance, exceptional materials, and limited production make it one of the most collectible MX-5s ever produced.
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
                    <span>Perfect Snowflake White Pearl paint condition</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Burgundy Nappa leather without wear or staining</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Cherry wood accents intact and undamaged</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>All 100th Anniversary badging and certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Complete service records and low mileage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Garage-kept with proper care history</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-red-400">Red Flags ⚠</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Paint damage or incorrect Snowflake White shade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Worn, cracked, or recolored burgundy leather</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Damaged, scratched, or missing cherry wood</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing centennial badges or certificates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Aftermarket modifications or non-original parts</span>
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
            <h2 className="font-display text-3xl font-bold mb-8">Legacy & Historical Significance</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 2020 100th Anniversary Edition stands as perhaps the most historically significant MX-5 ever produced. It represents not just 31 years of MX-5 evolution, but an entire century of Mazda&apos;s automotive journey. From cork products to SKYACTIV technology, every innovation and lesson learned was distilled into this exceptional special edition.
              </p>
              <p>
                The car also serves as a bridge between eras. Released at the dawn of automotive electrification, it may represent the final flowering of the naturally aspirated sports car. The emphasis on craftsmanship, natural materials, and human connection to the driving experience feels particularly poignant in an increasingly digital automotive landscape.
              </p>
              <p>
                For collectors and enthusiasts, the 100th Anniversary MX-5 is more than a car — it&apos;s a piece of automotive history. It encapsulates Mazda&apos;s philosophy that cars should engage all the senses and stir the soul. In a world moving toward autonomous driving and electric powertrains, it stands as a beautiful reminder of what made driving special in the first place.
              </p>
            </div>
          </section>

          {/* Related Special Editions CTA */}
          <section className="border-t border-border pt-16">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                The Complete Special Edition Story
              </h2>
              <p className="text-text-secondary mb-8">
                From the first British Racing Green to this centennial celebration, explore the complete history of MX-5 special editions
              </p>
              <Link
                href={`/${params.locale}/special-editions`}
                className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
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