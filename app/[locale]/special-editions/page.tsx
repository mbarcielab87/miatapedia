import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface SpecialEditionsPageProps {
  params: {
    locale: Locale;
  };
}

const specialEditions = [
  {
    slug: '1991-british-racing-green',
    title: 'British Racing Green (1991)',
    generation: 'NA',
    year: '1991',
    production: '4,000 units',
    rarity: 'Rare',
    significance: 'First Official Special Edition',
    color: 'accent-red',
    description: 'The very first MX-5 special edition that started the tradition. Iconic British Racing Green paint with tan leather interior.',
    keyFeatures: ['British Racing Green paint', 'Tan leather interior', 'Wood-rimmed steering wheel', 'Special badges'],
    currentValue: '$15,000 - $25,000'
  },
  {
    slug: '1999-10th-anniversary',
    title: '10th Anniversary (1999)',
    generation: 'NB',
    year: '1999',
    production: '7,500 units',
    rarity: 'Limited',
    significance: 'Decade Celebration',
    color: 'accent-gold',
    description: 'Celebrating 10 years of MX-5 magic with exclusive Sapphire Blue Mica paint and premium appointments.',
    keyFeatures: ['Sapphire Blue Mica paint', 'Blue/black leather', '6-speed transmission', 'Bilstein shocks'],
    currentValue: '$12,000 - $20,000'
  },
  {
    slug: '2004-mazdaspeed',
    title: 'Mazdaspeed MX-5 (2004)',
    generation: 'NB',
    year: '2004',
    production: '5,428 units',
    rarity: 'Very Rare',
    significance: 'Factory Turbocharged',
    color: 'accent-blue',
    description: 'The only factory-turbocharged MX-5 ever produced. A true unicorn with 178 HP and aggressive aero.',
    keyFeatures: ['Turbocharged engine (178 HP)', 'Racing Beat exhaust', 'Unique aero kit', '6-speed manual only'],
    currentValue: '$20,000 - $35,000'
  },
  {
    slug: '2019-30th-anniversary',
    title: '30th Anniversary (2019)',
    generation: 'ND',
    year: '2019',
    production: '3,000 units worldwide',
    rarity: 'Very Limited',
    significance: 'Three Decades of Joy',
    color: 'accent-green',
    description: 'Honoring 30 years of pure driving joy with Racing Orange paint and premium Recaro seats.',
    keyFeatures: ['Racing Orange paint', 'Recaro seats', 'Bilstein dampers', 'Brembo brakes'],
    currentValue: '$35,000 - $45,000'
  },
  {
    slug: '2020-100th-anniversary',
    title: '100th Anniversary (2020)',
    generation: 'ND',
    year: '2020',
    production: '1,000 units (USA)',
    rarity: 'Extremely Rare',
    significance: 'Mazda Centennial',
    color: 'accent-red',
    description: 'Celebrating Mazda&apos;s 100th anniversary with exclusive Snowflake White Pearl and burgundy details.',
    keyFeatures: ['Snowflake White Pearl paint', 'Burgundy soft top', 'Special wheels', '100th Anniversary badges'],
    currentValue: '$40,000 - $55,000'
  }
];

const editionStats = [
  { label: 'Total Special Editions', value: '120+', color: 'accent-red' },
  { label: 'Years Spanning', value: '35+', color: 'accent-gold' },
  { label: 'Most Produced', value: '7,500 units', color: 'accent-blue' },
  { label: 'Rarest Edition', value: '500 units', color: 'accent-green' }
];

const editionCategories = [
  {
    category: 'Anniversary Editions',
    count: '15+',
    description: 'Celebrating milestones in MX-5 and Mazda history',
    examples: ['10th Anniversary', '30th Anniversary', '100th Anniversary']
  },
  {
    category: 'Color Specials',
    count: '40+',
    description: 'Unique paint colors and interior combinations',
    examples: ['British Racing Green', 'Brilliant Black', 'Velocity Red']
  },
  {
    category: 'Performance Editions',
    count: '25+',
    description: 'Enhanced performance and handling packages',
    examples: ['Mazdaspeed', 'Club Sport', 'R-Package']
  },
  {
    category: 'Regional Exclusives',
    count: '40+',
    description: 'Market-specific editions for different regions',
    examples: ['J-Limited', 'Europe-only', 'JDM Specials']
  }
];

export default async function SpecialEditionsPage({ params }: SpecialEditionsPageProps) {
  const dict = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dict.nav.home, href: `/${params.locale}` },
    { label: 'Special Editions', href: `/${params.locale}/special-editions` }
  ];

  return (
    <>
      <div className="min-h-screen bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs locale={params.locale} items={breadcrumbItems} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">✨</span>
              <h1 className="font-display text-4xl font-bold text-text-primary">
                MX-5 Special Editions
              </h1>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
              From the iconic British Racing Green to the ultra-rare 100th Anniversary, explore the most
              coveted MX-5 special editions that have captured enthusiast hearts for over three decades.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-bg-card rounded-xl border border-border">
              {editionStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Special Editions */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Iconic Special Editions
            </h2>

            <div className="space-y-6">
              {specialEditions.map((edition, index) => (
                <Link
                  key={edition.slug}
                  href={`/${params.locale}/special-editions/${edition.slug}`}
                  className="block group"
                >
                  <div className="bg-bg-card rounded-xl border border-border p-8
                                transition-all duration-300 hover:border-border-light
                                hover:shadow-lg hover:shadow-accent-red/10">

                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`w-1 h-16 rounded bg-${edition.color}`}></div>
                          <div>
                            <h3 className="font-display text-2xl font-bold text-text-primary group-hover:text-accent-gold transition-colors">
                              {edition.title}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-text-muted">
                              <span className="font-mono">{edition.generation} Generation</span>
                              <span>•</span>
                              <span>{edition.year}</span>
                              <span>•</span>
                              <span>{edition.production}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {edition.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                              Key Features
                            </span>
                            <ul className="mt-1 text-sm text-text-secondary">
                              {edition.keyFeatures.slice(0, 2).map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                              Significance & Value
                            </span>
                            <div className="mt-1">
                              <div className="text-sm text-text-secondary">{edition.significance}</div>
                              <div className="text-sm font-medium text-text-primary">{edition.currentValue}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            edition.rarity === 'Extremely Rare'
                              ? 'bg-red-500/20 text-red-500'
                              : edition.rarity === 'Very Rare'
                              ? 'bg-accent-red/20 text-accent-red'
                              : edition.rarity === 'Very Limited'
                              ? 'bg-accent-gold/20 text-accent-gold'
                              : edition.rarity === 'Limited'
                              ? 'bg-accent-blue/20 text-accent-blue'
                              : 'bg-accent-green/20 text-accent-green'
                          }`}>
                            {edition.rarity}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-accent-red text-sm
                                      group-hover:translate-x-1 transition-transform">
                          <span>Learn More</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Edition Categories */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Edition Categories
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {editionCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-xl border border-border p-6"
                >
                  <div className="text-center mb-4">
                    <div className="font-display text-2xl font-bold text-accent-gold">
                      {category.count}
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary mt-2">
                      {category.category}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {category.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                      Examples
                    </span>
                    <ul className="mt-2 space-y-1">
                      {category.examples.map((example, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Collection Guide */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Collector&apos;s Guide
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-red mb-4">
                    Investment Potential
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Ultra-rare editions:</strong> 100th Anniversary, Mazdaspeed appreciating rapidly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Condition is king:</strong> Low-mileage, unmodified examples command premium</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Documentation matters:</strong> Original window stickers and certificates add value</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-4">
                    What to Look For
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Authenticity:</strong> Verify VIN, build sheets, and special edition features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Originality:</strong> Unmodified examples with original paint and interior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Service history:</strong> Complete maintenance records and regular care</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-red/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Collector Tip:</strong> Special editions represent the peak
                  of MX-5 exclusivity and engineering. Each tells a unique story of Mazda&apos;s innovation and the
                  MX-5&apos;s cultural impact. Choose based on personal connection, rarity, and long-term appreciation potential.
                </p>
              </div>
            </div>
          </section>

          {/* Market Trends */}
          <section>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Market Trends
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-3">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-4">
                    Rising Stars
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• <strong>Mazdaspeed MX-5:</strong> Only factory turbo</li>
                    <li>• <strong>R-Package:</strong> Pure performance focus</li>
                    <li>• <strong>30th Anniversary:</strong> Modern classic status</li>
                    <li>• <strong>Club Sport:</strong> Track-ready from factory</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-green mb-4">
                    Stable Classics
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• <strong>British Racing Green:</strong> First special edition</li>
                    <li>• <strong>10th Anniversary:</strong> Sapphire Blue beauty</li>
                    <li>• <strong>M-Edition:</strong> Premium luxury variant</li>
                    <li>• <strong>Shinsen:</strong> JDM exclusive appeal</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-4">
                    Future Classics
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• <strong>100th Anniversary:</strong> Mazda centennial</li>
                    <li>• <strong>RF Launch Edition:</strong> Hardtop introduction</li>
                    <li>• <strong>Final ND editions:</strong> End of generation</li>
                    <li>• <strong>Regional exclusives:</strong> Limited availability</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}