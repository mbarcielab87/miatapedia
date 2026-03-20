import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface NBMaintenancePageProps {
  params: {
    locale: Locale;
  };
}

const nbMaintenanceSchedule = [
  {
    interval: '3,000-5,000 miles',
    service: 'Oil & Filter Change',
    difficulty: 'Easy',
    cost: '$30-50',
    critical: true,
    notes: 'Use 5W-30. VVT system requires clean oil for proper operation.'
  },
  {
    interval: '15,000 miles',
    service: 'Air Filter & Cabin Filter',
    difficulty: 'Easy',
    cost: '$25-45',
    critical: false,
    notes: 'NB2 has cabin filter behind glove box. Check PCV valve.'
  },
  {
    interval: '30,000 miles',
    service: 'Transmission & Diff Service',
    difficulty: 'Moderate',
    cost: '$100-180',
    critical: true,
    notes: 'GL-4 75W-90 transmission, GL-5 diff. 6-speed needs frequent changes.'
  },
  {
    interval: '60,000 miles',
    service: 'Timing Belt Service',
    difficulty: 'Hard',
    cost: '$700-1400',
    critical: true,
    notes: 'Include water pump, tensioner, cam/crank seals. Still interference.'
  },
  {
    interval: '100,000 miles',
    service: 'VVT System Service',
    difficulty: 'Hard',
    cost: '$400-800',
    critical: true,
    notes: 'Clean VVT solenoid and oil passages. Replace if faulty.'
  },
  {
    interval: '2 years',
    service: 'Brake Fluid Flush',
    difficulty: 'Moderate',
    cost: '$80-150',
    critical: true,
    notes: 'DOT 3/4. ABS system requires proper bleeding procedure.'
  }
];

const nbSpecificIssues = [
  {
    issue: 'VVT System Problems',
    symptoms: ['Rattling at idle', 'Poor low-end torque', 'CEL P0021/P0011'],
    urgency: 'High',
    solution: 'Clean or replace VVT solenoid, use quality oil',
    cost: '$150-500',
    prevention: 'Regular oil changes, quality oil filters'
  },
  {
    issue: 'Soft Top Frame Wear',
    symptoms: ['Torn fabric', 'Frame separation', 'Window scratching'],
    urgency: 'Medium',
    solution: 'Reinforce frame joints, replace top if necessary',
    cost: '$800-2000',
    prevention: 'Gentle operation, regular lubrication'
  },
  {
    issue: '6-Speed Transmission Issues',
    symptoms: ['Hard shifting', 'Grinding 2nd gear', 'Transmission whine'],
    urgency: 'High',
    solution: 'Frequent fluid changes, synchro replacement if needed',
    cost: '$200-1500',
    prevention: 'Quality GL-4 fluid, proper shifting technique'
  },
  {
    issue: 'Rear Subframe Rust',
    symptoms: ['Visible corrosion', 'Alignment issues', 'Handling changes'],
    urgency: 'Critical',
    solution: 'Professional inspection and repair/replacement',
    cost: '$500-2000',
    prevention: 'Undercarriage washing, rust prevention treatment'
  }
];

const nbFluidSpecs = [
  { system: 'Engine Oil', spec: '5W-30 (VVT compatible)', capacity: '3.7 qts', brand: 'Mobil 1, Castrol GTX' },
  { system: 'Manual Trans (5spd)', spec: 'GL-4 75W-90', capacity: '1.9 qts', brand: 'Redline MT-90, Ford XT-M5-QS' },
  { system: 'Manual Trans (6spd)', spec: 'GL-4 75W-90', capacity: '2.2 qts', brand: 'Redline MT-90, OEM Mazda' },
  { system: 'Differential', spec: 'GL-5 75W-90', capacity: '0.8 qts', brand: 'Redline 75W-90' },
  { system: 'Coolant', spec: 'Long-life Ethylene Glycol', capacity: '6.8 qts', brand: 'Mazda FL22, Prestone' },
  { system: 'Brake Fluid', spec: 'DOT 3 or DOT 4', capacity: '1 qt', brand: 'ATE Type 200, Motul RBF600' }
];

const nbUpgrades = [
  {
    category: 'Reliability',
    items: [
      { upgrade: 'VVT Solenoid Upgrade', benefit: 'Prevents timing issues', cost: '$150-250' },
      { upgrade: 'Radiator Upgrade', benefit: 'Better cooling capacity', cost: '$200-400' },
      { upgrade: 'FM Frame Rails', benefit: 'Chassis reinforcement', cost: '$400-600' }
    ]
  },
  {
    category: 'Performance',
    items: [
      { upgrade: 'Cold Air Intake', benefit: '+5-10 HP, better sound', cost: '$200-400' },
      { upgrade: 'Header & Exhaust', benefit: '+10-15 HP, weight reduction', cost: '$500-1200' },
      { upgrade: 'ECU Tune', benefit: 'Optimize for modifications', cost: '$400-800' }
    ]
  }
];

export default async function NBMaintenancePage({ params }: NBMaintenancePageProps) {
  const dict = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dict.nav.home, href: `/${params.locale}` },
    { label: 'Maintenance', href: `/${params.locale}/maintenance` },
    { label: 'NB (1998-2005)', href: `/${params.locale}/maintenance/nb` }
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
              <h1 className="font-display text-4xl font-bold text-accent-gold">
                NB Generation Maintenance
              </h1>
              <span className="px-3 py-1 bg-accent-gold/20 text-accent-gold rounded-full text-sm font-medium">
                1998-2005
              </span>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
              The sweet spot for many enthusiasts. More refined than NA, but retains the pure MX-5 spirit.
              VVT system and improved build quality, but watch for 6-speed transmission issues.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-bg-card rounded-xl border border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">20-25</div>
                <div className="text-sm text-text-secondary">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">100K-180K</div>
                <div className="text-sm text-text-secondary">Typical Mileage</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">$600</div>
                <div className="text-sm text-text-secondary">Annual Maintenance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent-gold">Easy-Moderate</div>
                <div className="text-sm text-text-secondary">Difficulty</div>
              </div>
            </div>
          </div>

          {/* Key NB Features */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              NB Maintenance Highlights
            </h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-bg-card rounded-xl border border-border p-6">
                <h3 className="font-display text-lg font-bold text-accent-gold mb-3">
                  VVT System (NB2)
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Variable Valve Timing adds complexity but improves performance. Requires quality oil and regular service.
                </p>
                <div className="text-xs text-text-muted">
                  <strong>Service:</strong> Clean every 100k miles<br/>
                  <strong>Signs of trouble:</strong> Rattling, poor torque
                </div>
              </div>

              <div className="bg-bg-card rounded-xl border border-border p-6">
                <h3 className="font-display text-lg font-bold text-accent-gold mb-3">
                  6-Speed Transmission
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Close-ratio gearbox is fantastic but requires frequent fluid changes and careful shifting.
                </p>
                <div className="text-xs text-text-muted">
                  <strong>Service:</strong> 30k mile fluid changes<br/>
                  <strong>Weak point:</strong> 2nd gear synchro
                </div>
              </div>

              <div className="bg-bg-card rounded-xl border border-border p-6">
                <h3 className="font-display text-lg font-bold text-accent-gold mb-3">
                  Improved Build Quality
                </h3>
                <p className="text-text-secondary text-sm mb-4">
                  Better fit and finish than NA, but still watch for rust in rear wheel wells and subframe areas.
                </p>
                <div className="text-xs text-text-muted">
                  <strong>Focus areas:</strong> Subframe, drain holes<br/>
                  <strong>Prevention:</strong> Regular washing
                </div>
              </div>
            </div>
          </section>

          {/* Maintenance Schedule */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Maintenance Schedule
            </h2>

            <div className="space-y-4">
              {nbMaintenanceSchedule.map((item, index) => (
                <div
                  key={index}
                  className={`bg-bg-card rounded-xl border p-6 ${
                    item.critical
                      ? 'border-accent-gold/30 bg-accent-gold/5'
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
                          <span className="px-2 py-1 bg-accent-gold/20 text-accent-gold rounded text-xs font-medium">
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

                    <div className="flex items-center gap-2 text-accent-gold text-sm">
                      <span>DIY Guide</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NB-Specific Issues */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Common NB Issues
            </h2>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {nbSpecificIssues.map((issue, index) => (
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
                        ? 'bg-accent-gold/20 text-accent-gold'
                        : 'bg-accent-blue/20 text-accent-blue'
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
                            <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
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
                    {nbFluidSpecs.map((fluid, index) => (
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

            <div className="mt-4 p-4 bg-accent-gold/10 rounded-lg">
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">NB Note:</strong> VVT-equipped engines (NB2, 2001-2005)
                require clean oil for proper operation. Use quality synthetic oil and change more frequently
                if driving in stop-and-go conditions.
              </p>
            </div>
          </section>

          {/* Popular Upgrades */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              Popular NB Upgrades
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {nbUpgrades.map((category, index) => (
                <div key={index}>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-4">
                    {category.category} Upgrades
                  </h3>

                  <div className="space-y-4">
                    {category.items.map((item, i) => (
                      <div
                        key={i}
                        className="bg-bg-card rounded-xl border border-border p-4"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-text-primary">
                            {item.upgrade}
                          </h4>
                          <span className="text-sm text-accent-gold font-medium">
                            {item.cost}
                          </span>
                        </div>
                        <p className="text-sm text-text-secondary">
                          {item.benefit}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* NB Maintenance Tips */}
          <section>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              NB Maintenance Tips
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-4">
                    Must-Do Items
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Quality oil for VVT:</strong> System depends on oil pressure and cleanliness</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>6-speed fluid changes:</strong> More frequent than 5-speed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Timing belt service:</strong> Still interference engine, no skipping</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-blue mb-4">
                    NB Advantages
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Most reliable generation:</strong> Proven systems with improvements</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>Parts availability:</strong> Good supply of OEM and aftermarket</span>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span><strong>DIY friendly:</strong> Most maintenance can be done at home</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-gold/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">NB Bottom Line:</strong> The NB strikes the perfect
                  balance of reliability, performance, and classic MX-5 character. With proper maintenance,
                  these cars easily reach 200,000+ miles while remaining fun to drive.
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