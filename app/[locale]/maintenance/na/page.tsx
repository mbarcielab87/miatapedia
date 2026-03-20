import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NAMaintenancePageProps {
  params: {
    locale: Locale;
  };
}

const naMaintenanceSchedule = [
  {
    interval: '3,000-5,000 miles',
    service: 'Oil & Filter Change',
    difficulty: 'Easy',
    cost: '$30-50',
    critical: true,
    notes: 'Use 5W-30 or 10W-30. Check for leaks at oil pan gasket.'
  },
  {
    interval: '7,500 miles',
    service: 'Tire Rotation & Inspection',
    difficulty: 'Easy',
    cost: '$20-40',
    critical: false,
    notes: 'Check for uneven wear patterns. Inspect sidewalls.'
  },
  {
    interval: '15,000 miles',
    service: 'Air Filter Replacement',
    difficulty: 'Easy',
    cost: '$15-30',
    critical: false,
    notes: 'More frequent in dusty conditions. K&N reusable option.'
  },
  {
    interval: '30,000 miles',
    service: 'Transmission Fluid Change',
    difficulty: 'Moderate',
    cost: '$60-100',
    critical: true,
    notes: 'Use GL-4 75W-90. Inspect for synchro wear.'
  },
  {
    interval: '60,000 miles',
    service: 'Timing Belt & Water Pump',
    difficulty: 'Hard',
    cost: '$600-1200',
    critical: true,
    notes: 'INTERFERENCE ENGINE. Replace tensioner, idler, seals too.'
  },
  {
    interval: '2-3 years',
    service: 'Brake Fluid Flush',
    difficulty: 'Moderate',
    cost: '$80-150',
    critical: true,
    notes: 'DOT 3 or 4. Bleed until fluid runs clear.'
  }
];

const naSpecificIssues = [
  {
    issue: 'Short Nose Crank (1990-1991)',
    symptoms: ['Woodruff key failure', 'Crank pulley wobble', 'Timing issues'],
    urgency: 'Critical',
    solution: 'Upgrade to long nose crank or reinforce with Flyin&apos; Miata kit',
    cost: '$500-2000',
    prevention: 'Regular inspection of crank pulley stability'
  },
  {
    issue: 'Rear Wheel Well Rust',
    symptoms: ['Visible rust spots', 'Paint bubbling', 'Drain holes clogged'],
    urgency: 'High',
    solution: 'Cut, treat, and patch. Keep drain holes clear.',
    cost: '$200-800',
    prevention: 'Regular washing, drain hole maintenance'
  },
  {
    issue: 'Soft Top Deterioration',
    symptoms: ['Torn plastic window', 'Leaking seams', 'Faded fabric'],
    urgency: 'Medium',
    solution: 'Window replacement or full top replacement',
    cost: '$300-1500',
    prevention: 'UV protection, proper storage, gentle cleaning'
  },
  {
    issue: 'CAS (Crank Angle Sensor)',
    symptoms: ['No start', 'Intermittent stalling', 'Lost spark'],
    urgency: 'High',
    solution: 'Replace CAS unit',
    cost: '$200-400',
    prevention: 'None - age-related failure'
  }
];

const naFluidSpecs = [
  { system: 'Engine Oil', spec: '5W-30 or 10W-30', capacity: '3.6 qts', brand: 'Mobil 1, Castrol GTX' },
  { system: 'Transmission', spec: 'GL-4 75W-90', capacity: '1.8 qts', brand: 'Redline MT-90, Ford XT-M5-QS' },
  { system: 'Differential', spec: 'GL-5 75W-90', capacity: '0.8 qts', brand: 'Redline 75W-90, Mobil 1 Gear Oil' },
  { system: 'Coolant', spec: '50/50 Ethylene Glycol', capacity: '6.3 qts', brand: 'Prestone, Zerex G-05' },
  { system: 'Brake Fluid', spec: 'DOT 3 or DOT 4', capacity: '1 qt', brand: 'Valvoline SynPower, Motul RBF600' },
  { system: 'Power Steering', spec: 'ATF Dexron III', capacity: '1 qt', brand: 'Dexron VI compatible' }
];

const naToolsNeeded = [
  { category: 'Basic Tools', items: ['Socket set (8-19mm)', 'Wrenches', 'Screwdrivers', 'Jack & stands'] },
  { category: 'Specialty Tools', items: ['Oil filter wrench', 'Timing light', 'Compression tester', 'Multimeter'] },
  { category: 'Safety Equipment', items: ['Safety glasses', 'Nitrile gloves', 'Drain pan', 'Funnel set'] }
];

export default async function NAMaintenancePage({ params }: NAMaintenancePageProps) {
  const dict = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dict.nav.home, href: `/${params.locale}` },
    { label: 'Maintenance', href: `/${params.locale}/maintenance` },
    { label: 'NA (1989-1997)', href: `/${params.locale}/maintenance/na` }
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
              <h1 className="font-display text-4xl font-bold text-accent-red">
                NA Generation Maintenance
              </h1>
              <span className="px-3 py-1 bg-accent-red/20 text-accent-red rounded-full text-sm font-medium">
                1989-1997
              </span>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
              The original and purest MX-5. Simple mechanicals make most maintenance DIY-friendly,
              but age brings unique challenges. Here&apos;s everything you need to keep your NA running strong.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-bg-card rounded-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-red">35+</div>
                <div className="text-sm text-text-secondary">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-red">120K-200K</div>
                <div className="text-sm text-text-secondary">Typical Mileage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-red">$800</div>
                <div className="text-sm text-text-secondary">Annual Maintenance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-red">Moderate</div>
                <div className="text-sm text-text-secondary">Difficulty</div>
              </div>
            </div>
          </div>

          {/* Maintenance Schedule */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Maintenance Schedule
            </h2>

            <div className="space-y-4">
              {naMaintenanceSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`bg-bg-card rounded-xl border p-6 ${
                    item.critical
                      ? 'border-accent-red/30 bg-accent-red/5'
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
                          <span className="px-2 py-1 bg-accent-red/20 text-accent-red rounded text-xs font-medium">
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

                    <div className="flex items-center gap-2 text-accent-red text-sm">
                      <span>DIY Guide</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NA-Specific Issues */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              NA-Specific Issues
            </h2>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {naSpecificIssues.map((issue, index) => (
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
                        ? 'bg-accent-red/20 text-accent-red'
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
                            <span className="w-1.5 h-1.5 bg-accent-red rounded-full mr-2 flex-shrink-0"></span>
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
                    {naFluidSpecs.map((fluid, index) => (
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

          {/* Tools Required */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Tools Required
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              {naToolsNeeded.map((toolCategory, index) => (
                <div
                  key={index}
                  className="bg-bg-card rounded-xl border border-border p-6"
                >
                  <h3 className="font-display text-lg font-bold text-accent-red mb-4">
                    {toolCategory.category}
                  </h3>

                  <ul className="space-y-2">
                    {toolCategory.items.map((tool, i) => (
                      <li key={i} className="text-text-secondary flex items-center">
                        <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Tips */}
          <section>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              NA Maintenance Tips
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-red mb-4">
                    Critical Points
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Timing belt is interference:</strong> Engine damage if it breaks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Short nose crank:</strong> Check 1990-1991 models immediately</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Rust prevention:</strong> Keep drain holes clear, treat early</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-4">
                    Money-Saving Tips
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>DIY oil changes:</strong> Save $20-30 each time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Buy quality parts once:</strong> Cheap parts fail quickly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Preventive maintenance:</strong> Cheaper than emergency repairs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-red/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Remember:</strong> NA MX-5s are now 25+ years old.
                  Even well-maintained examples need more frequent attention than newer cars. Budget for
                  unexpected issues and address problems early to prevent bigger failures.
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