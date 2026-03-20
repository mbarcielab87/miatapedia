import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface TenthAnniversaryPageProps {
  params: { locale: Locale };
}

export default async function TenthAnniversaryPage({ params }: TenthAnniversaryPageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[
            { label: 'Special Editions', href: `/${params.locale}/special-editions` },
            { label: '1999 10th Anniversary', href: `/${params.locale}/special-editions/1999-10th-anniversary` }
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
                    1999 10th Anniversary
                  </div>
                  <div className="font-mono text-lg text-text-muted">
                    NB Generation • Limited Edition • 7,500 Units
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-display text-3xl font-bold text-accent-gold mb-1">
                10
              </div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Years of Excellence
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed">
            A decade after its revolutionary debut, the MX-5 had proven itself as the world&apos;s best-selling roadster. The 1999 10th Anniversary Edition celebrated this milestone with exclusive Sapphire Blue Mica paint, matching blue interior, and special badging that marked ten years of pure driving joy.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">7,500</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Units Produced</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">$22K</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Original MSRP</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">$28K+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Current Value</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">27%</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">ROI (25 years)</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* The Story */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Celebrating a Decade of Success</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                By 1999, the MX-5 had achieved something remarkable — it had single-handedly revived the affordable roadster market and become the best-selling two-seat convertible in history. With over 500,000 units sold worldwide, the little roadster from Hiroshima had exceeded every expectation and proven that pure driving joy never goes out of style.
              </p>
              <p>
                The 10th Anniversary Edition arrived at a crucial moment. The NB generation, launched in 1998, had matured the MX-5 design with more power, better aerodynamics, and refined styling. This special edition was Mazda&apos;s way of both celebrating the past decade and showcasing the evolution of their iconic roadster.
              </p>
              <p>
                The choice of Sapphire Blue Mica was bold and distinctive. While previous special editions had used more conservative colors, this deep, metallic blue made a statement. Combined with the matching blue interior and special anniversary badging, it created one of the most visually striking MX-5s ever produced.
              </p>
            </div>
          </section>

          {/* Specifications */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Complete Specifications</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Exterior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Exterior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Paint Color</span>
                    <span className="text-text-primary">Sapphire Blue Mica</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Wheels</span>
                    <span className="text-text-primary">15&quot; Alloy Wheels</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Soft Top</span>
                    <span className="text-text-primary">Blue Canvas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Mirrors</span>
                    <span className="text-text-primary">Body-Colored</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Badging</span>
                    <span className="text-text-primary">10th Anniversary Emblems</span>
                  </div>
                </div>
              </div>

              {/* Interior */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Interior Features</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Seats</span>
                    <span className="text-text-primary">Blue Cloth with Leather Bolsters</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Dashboard</span>
                    <span className="text-text-primary">Black with Blue Accents</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Door Panels</span>
                    <span className="text-text-primary">Blue Cloth Inserts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Steering Wheel</span>
                    <span className="text-text-primary">Leather-Wrapped</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Special Features</span>
                    <span className="text-text-primary">10th Anniversary Floor Mats</span>
                  </div>
                </div>
              </div>

              {/* Engine & Performance */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Engine & Performance</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Engine</span>
                    <span className="text-text-primary">1.8L BP-4W DOHC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Power</span>
                    <span className="text-text-primary">140 hp @ 6,500 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Torque</span>
                    <span className="text-text-primary">119 lb-ft @ 5,000 rpm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Transmission</span>
                    <span className="text-text-primary">5-Speed Manual / 4-Speed Auto</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Weight</span>
                    <span className="text-text-primary">2,341 lbs (1,062 kg)</span>
                  </div>
                </div>
              </div>

              {/* Production Details */}
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Production Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-text-muted">Production Year</span>
                    <span className="text-text-primary">1999 Model Year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Total Production</span>
                    <span className="text-text-primary">7,500 Units</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Markets</span>
                    <span className="text-text-primary">US Only</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">VIN Identifier</span>
                    <span className="text-text-primary">8th Digit &quot;6&quot; (Manual) / &quot;5&quot; (Auto)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-muted">Factory Code</span>
                    <span className="text-text-primary">AE (Anniversary Edition)</span>
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
                <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Exclusive Sapphire Blue</h3>
                <p className="text-text-secondary leading-relaxed">
                  The Sapphire Blue Mica paint was exclusive to the 10th Anniversary Edition and remains one of the most striking MX-5 colors ever offered. The deep metallic blue shifts from dark navy in shadows to brilliant sapphire in direct sunlight, creating a paint job that photographs beautifully and stands out in any crowd.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">Coordinated Interior</h3>
                <p className="text-text-secondary leading-relaxed">
                  Unlike many special editions that only change exterior colors, the 10th Anniversary featured a completely coordinated blue interior. The blue cloth with leather bolsters created a unique cabin atmosphere while maintaining the premium feel expected from a special edition.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">NB Generation Refinement</h3>
                <p className="text-text-secondary leading-relaxed">
                  Built on the refined NB platform, this edition showcased the MX-5&apos;s evolution with more power (140hp vs 116hp NA), better aerodynamics, improved chassis rigidity, and modern safety features while maintaining the pure driving experience that made the original famous.
                </p>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">Milestone Significance</h3>
                <p className="text-text-secondary leading-relaxed">
                  This wasn&apos;t just another special edition — it commemorated a genuine milestone. Ten years of production, over half a million cars sold, countless racing victories, and the revival of an entire segment. The 10th Anniversary represented the MX-5&apos;s transformation from hopeful experiment to automotive icon.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Advances */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">NB Generation Technical Advances</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-accent-red">Engine Improvements</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-red mt-1">•</span>
                      <span>Larger 1.8L BP-4W engine with 140hp (+24hp over NA8)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-red mt-1">•</span>
                      <span>Variable Intake Manifold for better torque curve</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-red mt-1">•</span>
                      <span>Improved engine bay cooling and aerodynamics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-red mt-1">•</span>
                      <span>Electronic throttle body for better response</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">Chassis & Safety</h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li className="flex items-start gap-3">
                      <span className="text-accent-blue mt-1">•</span>
                      <span>Reinforced frame with additional bracing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-blue mt-1">•</span>
                      <span>Dual airbags standard (driver &amp; passenger)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-blue mt-1">•</span>
                      <span>Improved crumple zones and side impact protection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent-blue mt-1">•</span>
                      <span>Better NVH isolation without sacrificing feel</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Market Analysis */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Market Analysis & Collectibility</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8 mb-8">
              <h3 className="font-display text-xl font-bold mb-6 text-accent-gold">Current Market Value (2024)</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-red mb-2">$15K - $20K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Daily Driver</div>
                  <div className="text-xs text-text-secondary">High mileage, well-maintained, some wear</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-gold mb-2">$22K - $30K</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Excellent Condition</div>
                  <div className="text-xs text-text-secondary">Low mileage, original paint, well cared for</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-accent-green mb-2">$35K+</div>
                  <div className="font-mono text-sm text-text-muted mb-2">Concours Quality</div>
                  <div className="text-xs text-text-secondary">Museum quality, ultra-low miles, perfect</div>
                </div>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 10th Anniversary Edition occupies an interesting position in the MX-5 special edition hierarchy. While not as rare as the British Racing Green (4,000 vs 7,500 units), it represents a significant milestone in MX-5 history and showcases the matured NB platform at its best.
              </p>
              <p>
                The Sapphire Blue paint has proven to be both blessing and curse for values. It&apos;s absolutely stunning when perfect but shows imperfections more readily than darker colors. Finding an example with pristine paint significantly impacts value, with perfect examples commanding premium prices.
              </p>
              <p>
                From an investment perspective, the 10th Anniversary represents solid value appreciation without the extreme prices of earlier special editions. The higher production numbers mean more examples available, but the milestone significance and unique color ensure continued demand from collectors.
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
                    <span>Perfect Sapphire Blue paint with no chips or fade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Blue interior in excellent condition (cloth holds up well)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Matching blue soft top without tears or stains</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Original 15&quot; alloy wheels with good paint</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>All 10th Anniversary badging and floor mats present</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">•</span>
                    <span>Manual transmission (more desirable than automatic)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-red-400">Red Flags ⚠</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Paint damage or incorrect Sapphire Blue shade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Interior reupholstered in different color or material</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Replaced soft top in wrong color (should be blue)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Missing anniversary badging or floor mats</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>Evidence of accidents or frame damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 mt-1">•</span>
                    <span>NB-specific issues: timing belt neglect, coil pack failure</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Anniversary Legacy */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Anniversary Legacy</h2>
            <div className="prose prose-invert max-w-none space-y-6 text-text-secondary leading-relaxed">
              <p>
                The 1999 10th Anniversary Edition represented more than just a special paint job — it was proof that the MX-5 formula was timeless. After a decade of production, the car had evolved and improved while staying true to its core mission: deliver pure driving joy at an affordable price.
              </p>
              <p>
                The success of this special edition also demonstrated the growing collectibility of MX-5s. While earlier special editions like the British Racing Green were seen as curiosities, the 10th Anniversary was actively sought after by enthusiasts who recognized it as a future collectible.
              </p>
              <p>
                Today, the 10th Anniversary stands as a bridge between the classic NA era and the modern evolution that followed. It represents the MX-5 at a perfect moment — mature enough to iron out early issues, but still pure enough to maintain the original&apos;s magic. For many enthusiasts, it&apos;s the ideal blend of classic MX-5 character and modern reliability.
              </p>
            </div>
          </section>

          {/* Related Special Editions CTA */}
          <section className="border-t border-border pt-16">
            <div className="text-center">
              <h2 className="font-display text-2xl font-bold mb-4">
                Explore More Milestone Editions
              </h2>
              <p className="text-text-secondary mb-8">
                Discover other special editions that marked important moments in MX-5 history
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