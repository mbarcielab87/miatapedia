import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface MaintenancePageProps {
  params: {
    locale: Locale;
  };
}

const maintenanceSchedules = [
  {
    generation: 'NA',
    years: '1989-1997',
    slug: 'na',
    color: 'accent-red',
    mileage: '120,000-200,000',
    keyPoints: ['Timing belt', 'Short nose crank', 'Body rust prevention'],
    difficulty: 'Moderate',
    description: 'Simple mechanicals, but age-related challenges'
  },
  {
    generation: 'NB',
    years: '1998-2005',
    slug: 'nb',
    color: 'accent-gold',
    mileage: '100,000-180,000',
    keyPoints: ['Timing belt service', 'VVT system', 'Soft top care'],
    difficulty: 'Easy-Moderate',
    description: 'Most reliable generation with proven systems'
  },
  {
    generation: 'NC',
    years: '2006-2015',
    slug: 'nc',
    color: 'accent-blue',
    mileage: '80,000-150,000',
    keyPoints: ['RHT maintenance', 'Power steering', 'Timing chain'],
    difficulty: 'Moderate',
    description: 'Modern complexity but improved reliability'
  },
  {
    generation: 'ND',
    years: '2016+',
    slug: 'nd',
    color: 'accent-green',
    mileage: '20,000-80,000',
    keyPoints: ['Warranty coverage', 'Modern diagnostics', 'Software updates'],
    difficulty: 'Easy',
    description: 'Latest technology with manufacturer support'
  }
];

const maintenanceCategories = [
  {
    title: 'Scheduled Maintenance',
    icon: '📅',
    description: 'Factory intervals and essential services',
    items: ['Oil changes', 'Timing belts', 'Brake fluid', 'Coolant flushes']
  },
  {
    title: 'Preventive Care',
    icon: '🔧',
    description: 'Stop problems before they start',
    items: ['Rubber seals', 'Weatherstripping', 'Rust prevention', 'Fluid checks']
  },
  {
    title: 'Seasonal Prep',
    icon: '🌦️',
    description: 'Weather-specific maintenance tasks',
    items: ['Winter storage', 'Summer prep', 'Soft top care', 'Underhood cleaning']
  },
  {
    title: 'Troubleshooting',
    icon: '🔍',
    description: 'Common issues and solutions',
    items: ['Starting problems', 'Rough idle', 'Leaks', 'Electrical gremlins']
  }
];

const maintenanceTips = [
  {
    title: 'Document Everything',
    description: 'Keep detailed records of all maintenance. This helps with resale value and troubleshooting.',
    priority: 'High'
  },
  {
    title: 'Use Quality Fluids',
    description: 'Your MX-5 deserves good fluids. Don&apos;t cheap out on oil, coolant, or brake fluid.',
    priority: 'High'
  },
  {
    title: 'Address Issues Early',
    description: 'Small problems become big expenses. Fix leaks, noises, and wear items promptly.',
    priority: 'Medium'
  },
  {
    title: 'Learn Basic DIY',
    description: 'MX-5s are DIY-friendly. Learn oil changes, brake pads, and basic troubleshooting.',
    priority: 'Medium'
  }
];

export default async function MaintenancePage({ params }: MaintenancePageProps) {
  const dict = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dict.nav.home, href: `/${params.locale}` },
    { label: 'Maintenance', href: `/${params.locale}/maintenance` }
  ];

  return (
    <>
      <div className="min-h-screen bg-bg-primary">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Breadcrumbs locale={params.locale} items={breadcrumbItems} />

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-2xl">🔧</span>
              <h1 className="font-display text-4xl font-bold text-text-primary">
                MX-5 Maintenance
              </h1>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
              Keep your MX-5 running like new with proper maintenance. From basic oil changes
              to timing belt services, learn how to maintain your Miata across all generations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-bg-card rounded-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-red">35+</div>
                <div className="text-sm text-text-secondary">Years Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">4</div>
                <div className="text-sm text-text-secondary">Generations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue">50+</div>
                <div className="text-sm text-text-secondary">Maintenance Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-green">$500/yr</div>
                <div className="text-sm text-text-secondary">Avg Annual Cost</div>
              </div>
            </div>
          </div>

          {/* Generation-Specific Guides */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Maintenance by Generation
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {maintenanceSchedules.map((gen) => (
                <Link
                  key={gen.slug}
                  href={`/${params.locale}/maintenance/${gen.slug}`}
                  className="block group"
                >
                  <div className="bg-bg-card rounded-xl border border-border p-6
                                transition-all duration-300 hover:border-border-light
                                hover:shadow-lg hover:shadow-accent-red/10">

                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`font-display text-2xl font-bold text-${gen.color} mb-1`}>
                          {gen.generation} Generation
                        </h3>
                        <div className="text-text-secondary font-medium">
                          {gen.years}
                        </div>
                      </div>

                      <div className="text-right text-sm text-text-secondary">
                        <div>Typical Mileage</div>
                        <div className="font-medium text-text-primary">
                          {gen.mileage}
                        </div>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-4">
                      {gen.description}
                    </p>

                    <div className="space-y-3">
                      <div>
                        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                          Key Maintenance Points
                        </span>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {gen.keyPoints.map((point, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-bg-secondary rounded text-xs text-text-secondary"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                            Difficulty
                          </span>
                          <div className="text-sm font-medium text-text-primary">
                            {gen.difficulty}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-accent-red text-sm
                                      group-hover:translate-x-1 transition-transform">
                          <span>View Guide</span>
                          <span>→</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Maintenance Categories */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Maintenance Categories
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {maintenanceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-xl border border-border p-6"
                >
                  <div className="text-center mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="font-display text-lg font-bold text-text-primary mt-2">
                      {category.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {category.description}
                    </p>
                  </div>

                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-sm text-text-secondary flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Essential Maintenance Tips */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Essential Maintenance Tips
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {maintenanceTips.map((tip, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-xl border border-border p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-display text-lg font-bold text-text-primary">
                      {tip.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      tip.priority === 'High'
                        ? 'bg-accent-red/20 text-accent-red'
                        : 'bg-accent-gold/20 text-accent-gold'
                    }`}>
                      {tip.priority}
                    </span>
                  </div>
                  <p className="text-text-secondary">
                    {tip.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Reference */}
          <section>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Quick Reference
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-red mb-4">
                    Critical Services
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• <strong>Oil change:</strong> 3,000-5,000 miles</li>
                    <li>• <strong>Timing belt:</strong> 60,000-90,000 miles</li>
                    <li>• <strong>Brake fluid:</strong> 2-3 years</li>
                    <li>• <strong>Coolant:</strong> 30,000-50,000 miles</li>
                    <li>• <strong>Transmission fluid:</strong> 30,000-60,000 miles</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-4">
                    Annual Checks
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Soft top and weatherstripping</li>
                    <li>• Brake pads and rotors</li>
                    <li>• Suspension bushings</li>
                    <li>• Battery and charging system</li>
                    <li>• Tire wear and alignment</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-4">
                    Red Flags
                  </h3>
                  <ul className="space-y-2 text-text-secondary">
                    <li>• Unusual noises or vibrations</li>
                    <li>• Fluid leaks or low levels</li>
                    <li>• Warning lights or codes</li>
                    <li>• Poor performance or economy</li>
                    <li>• Steering or handling changes</li>
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