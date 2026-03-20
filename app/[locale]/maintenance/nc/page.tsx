import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NCMaintenancePageProps {
  params: {
    locale: Locale;
  };
}

const ncMaintenanceSchedule = [
  {
    interval: '7,500 miles',
    service: 'Oil & Filter Change',
    difficulty: 'Easy',
    cost: '$40-60',
    critical: true,
    notes: '0W-20 or 5W-30. Extended intervals possible with synthetic oil.'
  },
  {
    interval: '15,000 miles',
    service: 'Cabin & Engine Air Filter',
    difficulty: 'Easy',
    cost: '$30-50',
    critical: false,
    notes: 'Cabin filter behind glove box. Check MAF sensor cleaning.'
  },
  {
    interval: '30,000 miles',
    service: 'Transmission Service',
    difficulty: 'Moderate',
    cost: '$120-200',
    critical: true,
    notes: '6-speed manual or automatic ATF. Inspect clutch operation.'
  },
  {
    interval: '60,000 miles',
    service: 'Major Service',
    difficulty: 'Hard',
    cost: '$500-1000',
    critical: true,
    notes: 'Spark plugs, belts, coolant, brake fluid. No timing belt!'
  },
  {
    interval: '100,000 miles',
    service: 'Timing Chain Inspection',
    difficulty: 'Hard',
    cost: '$300-600',
    critical: true,
    notes: 'Check chain stretch and tensioner. Usually good to 200k+.'
  },
  {
    interval: '3 years',
    service: 'Brake & Coolant Flush',
    difficulty: 'Moderate',
    cost: '$150-250',
    critical: true,
    notes: 'DOT 3/4 brake fluid. Long-life coolant service.'
  }
];

const ncSpecificIssues = [
  {
    issue: 'Retractable Hardtop (RHT) Problems',
    symptoms: ['Slow operation', 'Error codes', 'Hydraulic leaks', 'Misalignment'],
    urgency: 'High',
    solution: 'Regular lubrication, hydraulic fluid service, sensor cleaning',
    cost: '$200-2000',
    prevention: 'Monthly operation, keep drains clear, gentle use'
  },
  {
    issue: 'Power Steering Problems',
    symptoms: ['Whining noise', 'Heavy steering', 'Fluid leaks'],
    urgency: 'Medium',
    solution: 'Fluid replacement, rack rebuild, pump replacement',
    cost: '$300-1500',
    prevention: 'Regular fluid changes, gentle driving'
  },
  {
    issue: 'Starter Motor Issues',
    symptoms: ['Slow cranking', 'Click no start', 'Grinding noise'],
    urgency: 'High',
    solution: 'Starter replacement, solenoid service',
    cost: '$400-700',
    prevention: 'Quality battery, avoid heat cycling'
  },
  {
    issue: 'Suspension Bushing Wear',
    symptoms: ['Clunking noises', 'Poor handling', 'Alignment issues'],
    urgency: 'Medium',
    solution: 'Replace worn bushings, consider polyurethane upgrades',
    cost: '$300-800',
    prevention: 'Regular inspection, avoid harsh impacts'
  }
];

const ncFluidSpecs = [
  { system: 'Engine Oil', spec: '0W-20 or 5W-30', capacity: '4.5 qts', brand: 'Mobil 1, Mazda Genuine' },
  { system: 'Manual Trans', spec: 'GL-4 75W-90', capacity: '2.0 qts', brand: 'Redline MT-90, Mazda OEM' },
  { system: 'Automatic Trans', spec: 'Mazda ATF FZ', capacity: '7.4 qts', brand: 'Mazda Genuine ATF FZ' },
  { system: 'Differential', spec: 'GL-5 75W-90', capacity: '0.95 qts', brand: 'Redline 75W-90' },
  { system: 'Coolant', spec: 'FL-22 Long Life', capacity: '7.9 qts', brand: 'Mazda FL-22, Prestone' },
  { system: 'Power Steering', spec: 'ATF Dexron III', capacity: '1 qt', brand: 'Dexron VI compatible' },
  { system: 'RHT Hydraulic', spec: 'Mazda RHT Fluid', capacity: '0.5 qts', brand: 'Mazda Genuine Only' }
];

const ncTechFeatures = [
  {
    feature: 'Timing Chain System',
    description: 'No timing belt! Chain typically lasts 200k+ miles with proper maintenance.',
    maintenance: 'Inspect at 100k intervals, listen for rattling'
  },
  {
    feature: 'Drive-by-Wire Throttle',
    description: 'Electronic throttle control improves response and fuel economy.',
    maintenance: 'Keep MAF sensor clean, throttle body service at 60k'
  },
  {
    feature: 'Advanced Electronics',
    description: 'More complex electrical systems require proper diagnostic tools.',
    maintenance: 'Regular battery testing, clean grounds, quality scan tool'
  }
];

export default async function NCMaintenancePage({ params }: NCMaintenancePageProps) {
  const dict = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dict.nav.home, href: `/${params.locale}` },
    { label: 'Maintenance', href: `/${params.locale}/maintenance` },
    { label: 'NC (2006-2015)', href: `/${params.locale}/maintenance/nc` }
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
              <h1 className="font-display text-4xl font-bold text-accent-blue">
                NC Generation Maintenance
              </h1>
              <span className="px-3 py-1 bg-accent-blue/20 text-accent-blue rounded-full text-sm font-medium">
                2006-2015
              </span>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
              The modern MX-5 with sophisticated systems. Timing chains replace belts, retractable hardtops
              add complexity, but improved build quality and modern conveniences make daily driving a joy.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-bg-card rounded-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue">10-18</div>
                <div className="text-sm text-text-secondary">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue">80K-150K</div>
                <div className="text-sm text-text-secondary">Typical Mileage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue">$750</div>
                <div className="text-sm text-text-secondary">Annual Maintenance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-blue">Moderate</div>
                <div className="text-sm text-text-secondary">Difficulty</div>
              </div>
            </div>
          </div>

          {/* NC Technology Features */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              NC Technology & Maintenance
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {ncTechFeatures.map((tech, index) => (
                <div key={index} className="bg-bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display text-lg font-bold text-accent-blue mb-3">
                    {tech.feature}
                  </h3>
                  <p className="text-text-secondary text-sm mb-4">
                    {tech.description}
                  </p>
                  <div className="text-xs text-text-muted">
                    <strong>Maintenance:</strong> {tech.maintenance}
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
              {ncMaintenanceSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`bg-bg-card rounded-xl border p-6 ${
                    item.critical
                      ? 'border-accent-blue/30 bg-accent-blue/5'
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
                          <span className="px-2 py-1 bg-accent-blue/20 text-accent-blue rounded text-xs font-medium">
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

                    <div className="flex items-center gap-2 text-accent-blue text-sm">
                      <span>DIY Guide</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-accent-blue/10 rounded-lg">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">NC Advantage:</strong> No timing belt maintenance!
                The timing chain system typically lasts 200,000+ miles with proper oil changes.
                This eliminates the major 60k service expense of earlier generations.
              </p>
            </div>
          </section>

          {/* NC-Specific Issues */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Common NC Issues
            </h2>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {ncSpecificIssues.map((issue, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-xl border border-border p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-xl font-bold text-text-primary">
                      {issue.issue}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      issue.urgency === 'Critical'
                        ? 'bg-red-500/20 text-red-500'
                        : issue.urgency === 'High'
                        ? 'bg-accent-blue/20 text-accent-blue'
                        : 'bg-accent-gold/20 text-accent-gold'
                    }`}>
                      {issue.urgency}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                        Symptoms
                      </span>
                      <ul className="mt-1 text-text-secondary">
                        {issue.symptoms.map((symptom, i) => (
                          <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-accent-blue rounded-full mr-2 flex-shrink-0"></span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                        Solution
                      </span>
                      <p className="text-text-secondary mt-1">{issue.solution}</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                          Typical Cost
                        </span>
                        <div className="text-sm font-medium text-text-primary">
                          {issue.cost}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                          Prevention
                        </span>
                        <div className="text-sm text-text-secondary">
                          {issue.prevention}
                        </div>
                      </div>
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
                    {ncFluidSpecs.map((fluid, index) => (
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
          </section>

          {/* RHT Specific Maintenance */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Retractable Hardtop (RHT) Maintenance
            </h2>

            <div className="bg-bg-card rounded-xl border border-accent-blue/20 p-8">
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-4">
                    Monthly Checks
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Exercise the system:</strong> One complete cycle to keep seals lubricated</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Clear drain holes:</strong> Behind seats and in rear deck</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Lubricate hinges:</strong> Light spray oil on pivot points</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-4">
                    Annual Service
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Hydraulic fluid check:</strong> Level and condition inspection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Sensor cleaning:</strong> Position sensors and micro switches</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Alignment check:</strong> Proper seating when closed</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-red-500/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong className="text-red-500">RHT Warning:</strong> Never force the operation if it stops
                  mid-cycle. Use manual override procedure and diagnose the problem. Forcing can cause
                  expensive damage to the hydraulic system or roof mechanism.
                </p>
              </div>
            </div>
          </section>

          {/* NC Maintenance Tips */}
          <section>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              NC Maintenance Strategy
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-4">
                    Diagnostic Approach
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Scan tool essential:</strong> Modern electronics require proper diagnostics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Follow DTCs:</strong> Don&apos;t guess, use diagnostic trouble codes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Quality parts matter:</strong> Electronics are sensitive to cheap parts</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-green mb-4">
                    Cost Management
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Extended oil intervals:</strong> Quality synthetic allows longer changes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>No timing belt:</strong> Saves $1000+ over earlier generations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-green rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Preventive is key:</strong> Modern systems expensive to repair if neglected</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-blue/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">NC Reality:</strong> More sophisticated than earlier
                  generations, but also more reliable when properly maintained. The timing chain elimination
                  and improved electronics make this a great choice for daily driving and long-term ownership.
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
                href={`/${params.locale}/maintenance/nd`}
                className="px-4 py-2 bg-bg-card border border-border rounded-lg
                         hover:border-accent-green transition-colors text-text-secondary hover:text-text-primary"
              >
                ND (2016+)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}