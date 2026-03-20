import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NDMaintenancePageProps {
  params: {
    locale: Locale;
  };
}

const ndMaintenanceSchedule = [
  {
    interval: '10,000 miles',
    service: 'Oil & Filter Change',
    difficulty: 'Easy',
    cost: '$50-80',
    critical: true,
    notes: '0W-20 synthetic oil. Oil life monitor provides guidance.'
  },
  {
    interval: '20,000 miles',
    service: 'Cabin & Engine Air Filter',
    difficulty: 'Easy',
    cost: '$40-70',
    critical: false,
    notes: 'Behind glove box (cabin) and in engine bay. Check for debris.'
  },
  {
    interval: '30,000 miles',
    service: 'Transmission Service',
    difficulty: 'Moderate',
    cost: '$150-250',
    critical: true,
    notes: 'Manual or auto service. Inspect clutch operation on manual.'
  },
  {
    interval: '60,000 miles',
    service: 'Major Service Interval',
    difficulty: 'Moderate',
    cost: '$400-700',
    critical: true,
    notes: 'Spark plugs, belts, coolant service, brake fluid flush.'
  },
  {
    interval: '100,000 miles',
    service: 'Comprehensive Inspection',
    difficulty: 'Hard',
    cost: '$300-500',
    critical: true,
    notes: 'Timing chain inspection, suspension components, software updates.'
  },
  {
    interval: '3-4 years',
    service: 'Brake System Service',
    difficulty: 'Moderate',
    cost: '$120-200',
    critical: true,
    notes: 'Brake fluid flush, pad inspection. DOT 4 fluid required.'
  }
];

const ndSpecificConsiderations = [
  {
    topic: 'Warranty Considerations',
    details: ['Maintain service records', 'Use genuine or approved parts', 'Follow severe service intervals if applicable'],
    importance: 'Critical',
    note: 'ND models may still be under warranty - maintain compliance'
  },
  {
    topic: 'Software Updates',
    details: ['Infotainment system updates', 'ECU calibration updates', 'Safety system calibrations'],
    importance: 'Medium',
    note: 'Dealer visits may be required for software updates'
  },
  {
    topic: 'Advanced Safety Systems',
    details: ['Camera calibration after windshield replacement', 'Radar sensor alignment', 'Lane departure system maintenance'],
    importance: 'High',
    note: 'ADAS systems require specialized equipment and procedures'
  },
  {
    topic: 'Carbon Build-up Prevention',
    details: ['Regular highway driving', 'Quality fuel with detergents', 'Occasional Italian tune-up'],
    importance: 'Medium',
    note: 'Direct injection engines prone to carbon deposits'
  }
];

const ndFluidSpecs = [
  { system: 'Engine Oil', spec: '0W-20 Full Synthetic', capacity: '4.2 qts', brand: 'Mazda Genuine, Mobil 1' },
  { system: 'Manual Trans', spec: 'GL-4 75W-80', capacity: '1.6 qts', brand: 'Mazda Genuine MTF' },
  { system: 'Automatic Trans', spec: 'Mazda ATF FZ', capacity: '6.8 qts', brand: 'Mazda Genuine ATF FZ' },
  { system: 'Differential', spec: 'GL-5 75W-90', capacity: '0.7 qts', brand: 'Mazda Genuine, Redline' },
  { system: 'Coolant', spec: 'FL-22 Long Life', capacity: '6.2 qts', brand: 'Mazda FL-22 Only' },
  { system: 'Brake Fluid', spec: 'DOT 4', capacity: '1 qt', brand: 'Mazda Genuine, ATE Type 200' }
];

const ndModernFeatures = [
  {
    system: 'Skyactiv-G Engine',
    benefits: ['High compression ratio', 'Excellent fuel economy', 'Direct injection'],
    maintenance: 'Quality fuel, regular oil changes, carbon cleaning as needed'
  },
  {
    system: 'i-ACTIVSENSE Safety',
    benefits: ['Automatic emergency braking', 'Blind spot monitoring', 'Lane departure warning'],
    maintenance: 'Camera/radar cleaning, professional calibration after service'
  },
  {
    system: 'MAZDA CONNECT',
    benefits: ['Smartphone integration', 'Navigation', 'Audio streaming'],
    maintenance: 'Software updates, screen protection, backup camera cleaning'
  }
];

const ndOwnershipTips = [
  {
    category: 'Warranty Compliance',
    tips: [
      'Use Mazda-approved oil (0W-20 synthetic)',
      'Follow maintenance schedule exactly',
      'Keep all service records',
      'Use genuine parts for warranty items'
    ]
  },
  {
    category: 'Technology Care',
    tips: [
      'Keep cameras and sensors clean',
      'Protect touchscreen with film',
      'Update software regularly',
      'Learn system calibration procedures'
    ]
  },
  {
    category: 'Long-term Value',
    tips: [
      'Maintain complete service history',
      'Address recalls promptly',
      'Protect paint and interior',
      'Drive regularly to prevent issues'
    ]
  }
];

export default async function NDMaintenancePage({ params }: NDMaintenancePageProps) {
  const dict = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dict.nav.home, href: `/${params.locale}` },
    { label: 'Maintenance', href: `/${params.locale}/maintenance` },
    { label: 'ND (2016+)', href: `/${params.locale}/maintenance/nd` }
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
              <h1 className="font-display text-4xl font-bold text-accent-green">
                ND Generation Maintenance
              </h1>
              <span className="px-3 py-1 bg-accent-green/20 text-accent-green rounded-full text-sm font-medium">
                2016+
              </span>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
              The modern MX-5 with advanced technology and Skyactiv engineering. Longer service intervals,
              sophisticated systems, and warranty considerations make maintenance different from earlier generations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-bg-card rounded-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-green">0-8</div>
                <div className="text-sm text-text-secondary">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-green">20K-80K</div>
                <div className="text-sm text-text-secondary">Typical Mileage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-green">$400</div>
                <div className="text-sm text-text-secondary">Annual Maintenance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-green">Easy</div>
                <div className="text-sm text-text-secondary">Difficulty</div>
              </div>
            </div>
          </div>

          {/* Modern Features Overview */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Modern ND Technology
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {ndModernFeatures.map((feature, index) => (
                <div key={index} className="bg-bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display text-lg font-bold text-accent-green mb-3">
                    {feature.system}
                  </h3>

                  <div className="mb-4">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                      Benefits
                    </span>
                    <ul className="mt-1 text-text-secondary text-sm">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-xs text-text-muted">
                    <strong>Maintenance:</strong> {feature.maintenance}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Maintenance Schedule */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Maintenance Schedule
            </h2>

            <div className="space-y-4">
              {ndMaintenanceSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`bg-bg-card rounded-xl border p-6 ${
                    item.critical
                      ? 'border-accent-green/30 bg-accent-green/5'
                      : 'border-border'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-display text-xl font-bold text-text-primary">
                          {item.service}
                        </h3>
                        {item.critical && (
                          <span className="px-2 py-1 bg-accent-green/20 text-accent-green rounded text-xs font-medium">
                            Critical
                          </span>
                        )}
                      </div>

                      <p className="text-text-secondary mb-2">
                        {item.notes}
                      </p>

                      <div className="flex flex-wrap gap-4 text-sm">
                        <span className="text-text-muted">
                          <strong>Interval:</strong> {item.interval}
                        </span>
                        <span className="text-text-muted">
                          <strong>Difficulty:</strong> {item.difficulty}
                        </span>
                        <span className="text-text-muted">
                          <strong>Cost:</strong> {item.cost}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-accent-green text-sm">
                      <span>Service Guide</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent-green/10 rounded-lg">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">ND Advantage:</strong> Extended service intervals
                and improved reliability mean lower annual maintenance costs. The oil life monitoring
                system provides intelligent service reminders based on actual driving conditions.
              </p>
            </div>
          </section>

          {/* ND-Specific Considerations */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              ND-Specific Considerations
            </h2>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {ndSpecificConsiderations.map((consideration, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-xl border border-border p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      {consideration.topic}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      consideration.importance === 'Critical'
                        ? 'bg-red-500/20 text-red-500'
                        : consideration.importance === 'High'
                        ? 'bg-accent-green/20 text-accent-green'
                        : 'bg-accent-blue/20 text-accent-blue'
                    }`}>
                      {consideration.importance}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                        Key Points
                      </span>
                      <ul className="mt-1 text-text-secondary">
                        {consideration.details.map((detail, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 bg-accent-green/10 rounded-lg">
                      <p className="text-sm text-text-secondary">
                        <strong className="text-text-primary">Note:</strong> {consideration.note}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Fluid Specifications */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Fluid Specifications
            </h2>

            <div className="bg-bg-card rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-bg-secondary">
                    <tr>
                      <th className="text-left p-4 font-medium text-text-primary">System</th>
                      <th className="text-left p-4 font-medium text-text-primary">Specification</th>
                      <th className="text-left p-4 font-medium text-text-primary">Capacity</th>
                      <th className="text-left p-4 font-medium text-text-primary">Recommended Brands</th>
                    </tr>
                  </thead>
                  <tbody>
                    {ndFluidSpecs.map((fluid, index) => (
                      <tr key={index} className="border-t border-border">
                        <td className="p-4 font-medium text-text-primary">{fluid.system}</td>
                        <td className="p-4 text-text-secondary">{fluid.spec}</td>
                        <td className="p-4 text-text-secondary">{fluid.capacity}</td>
                        <td className="p-4 text-text-secondary">{fluid.brand}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4 p-4 bg-red-500/10 rounded-lg">
              <p className="text-sm text-text-secondary">
                <strong className="text-red-500">Warranty Warning:</strong> Using non-approved fluids
                or parts may void your warranty. Always verify compatibility and approval status
                before service, especially during the warranty period.
              </p>
            </div>
          </section>

          {/* Ownership Tips */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              ND Ownership Best Practices
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {ndOwnershipTips.map((category, index) => (
                <div key={index}>
                  <h3 className="font-display text-xl font-bold text-accent-green mb-4">
                    {category.category}
                  </h3>

                  <div className="space-y-3">
                    {category.tips.map((tip, i) => (
                      <div
                        key={i}
                        className="bg-bg-card rounded-xl border border-border p-4"
                      >
                        <p className="text-sm text-text-secondary flex items-start">
                          <span className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {tip}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ND Summary */}
          <section>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              ND Maintenance Summary
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-green mb-4">
                    Advantages
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Extended intervals:</strong> 10k mile oil changes with synthetic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Intelligent monitoring:</strong> Systems track actual component wear</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Proven reliability:</strong> Skyactiv engineering is well-tested</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-4">
                    Considerations
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Warranty compliance:</strong> Follow schedules exactly during warranty</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Technology complexity:</strong> Some services require dealer equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Premium fluids:</strong> Specifications are more critical than older cars</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-green/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">ND Bottom Line:</strong> The most advanced and
                  reliable MX-5 yet. With proper maintenance following Mazda&apos;s guidelines, the ND should
                  provide trouble-free ownership for many years. The key is respecting the technology
                  while enjoying the pure MX-5 driving experience.
                </p>
              </div>
            </div>
          </section>

          {/* Navigation to Other Generations */}
          <div className="mt-16 pt-8 border-t border-border">
            <h3 className="font-display text-xl font-bold text-text-primary mb-4">
              Other Generations
            </h3>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${params.locale}/maintenance/na`}
                className="px-4 py-2 bg-bg-card border border-border rounded-lg
                         hover:border-accent-red transition-colors text-text-secondary hover:text-text-primary"
              >
                NA (1989-1997)
              </Link>
              <Link
                href={`/${params.locale}/maintenance/nb`}
                className="px-4 py-2 bg-bg-card border border-border rounded-lg
                         hover:border-accent-gold transition-colors text-text-secondary hover:text-text-primary"
              >
                NB (1998-2005)
              </Link>
              <Link
                href={`/${params.locale}/maintenance/nc`}
                className="px-4 py-2 bg-bg-card border border-border rounded-lg
                         hover:border-accent-blue transition-colors text-text-secondary hover:text-text-primary"
              >
                NC (2006-2015)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}