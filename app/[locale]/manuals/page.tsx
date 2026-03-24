import { manuals } from '@/data/manuals';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ManualsDirectory from '@/components/manuals/ManualsDirectory';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface ManualsPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ManualsPage({ params }: ManualsPageProps) {
  const { locale } = await params;

  // Calculate stats
  const totalManuals = manuals.length;
  const serviceManuals = manuals.filter(m => m.type === 'Service Manual').length;
  const wiringDiagrams = manuals.filter(m => m.type === 'Wiring Diagram').length;
  const interactiveManuals = manuals.filter(m => m.type === 'Interactive Manual').length;
  const resourceCollections = manuals.filter(m => m.type === 'Resource Collection').length;

  // Get featured manuals
  const featuredManuals = [
    manuals.find(m => m.title === 'Mellens - Factory Manuals'),
    manuals.find(m => m.title === 'MX5Manual (ND)'),
    manuals.find(m => m.title === '1990 Workshop Manual')
  ].filter((manual): manual is NonNullable<typeof manual> => Boolean(manual));

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={[{ label: 'Technical Manuals', href: `/${locale}/manuals` }]}
        />

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-display text-6xl font-black mb-6">Technical Manuals & Documentation</h1>
          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed mb-8">
            Complete collection of factory service manuals, wiring diagrams, and technical documentation for all MX-5 generations. These resources are essential for maintenance, repairs, and modifications. Most are freely available thanks to the dedicated MX-5 community.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">{totalManuals}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Total Resources</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">{serviceManuals}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Service Manuals</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">{wiringDiagrams}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Wiring Diagrams</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">{resourceCollections}</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Collections</div>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Essential Resources</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredManuals.map((manual, idx) => (
              <a
                key={idx}
                href={manual.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-card border border-border rounded-lg p-8 transition-all hover:border-accent-gold hover:bg-bg-card-hover group no-underline"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="font-mono text-xs text-accent-red uppercase tracking-wider">
                    {manual.type}
                  </div>
                  <svg className="w-5 h-5 text-text-muted group-hover:text-accent-gold transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>

                <div className="font-display text-2xl font-bold mb-4 group-hover:text-accent-gold transition-colors">
                  {manual.title}
                </div>

                {manual.description && (
                  <div className="text-text-secondary text-sm leading-relaxed mb-4">
                    {manual.description}
                  </div>
                )}

                <div className="flex flex-wrap gap-2">
                  {manual.generations.map((gen) => {
                    const genColors = {
                      'NA': 'bg-accent-red/20 border-accent-red/40 text-accent-red',
                      'NB': 'bg-accent-gold/20 border-accent-gold/40 text-accent-gold',
                      'NC': 'bg-accent-blue/20 border-accent-blue/40 text-accent-blue',
                      'ND': 'bg-accent-green/20 border-accent-green/40 text-accent-green'
                    };
                    return (
                      <span
                        key={gen}
                        className={`font-mono text-xs px-2 py-1 border rounded ${genColors[gen as keyof typeof genColors] || 'bg-bg-secondary border-border text-text-muted'}`}
                      >
                        {gen}
                      </span>
                    );
                  })}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Manual Types Guide */}
        <div className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Manual Types Guide</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">📖 Service Manuals</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Factory procedures:</strong> Step-by-step repair instructions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Torque specifications:</strong> Critical for proper assembly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Diagnostic procedures:</strong> Troubleshooting flowcharts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-red mt-1">•</span>
                  <span><strong>Parts diagrams:</strong> Exploded views with part numbers</span>
                </li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">⚡ Wiring Diagrams</h3>
              <ul className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Electrical systems:</strong> Complete circuit diagrams</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Wire colors:</strong> Standardized color codes by year</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Connector pinouts:</strong> ECU and module connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent-blue mt-1">•</span>
                  <span><strong>Modification help:</strong> Essential for electrical mods</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interactive Manual Directory */}
        <ManualsDirectory locale={locale} />

        {/* Additional Resources */}
        <div className="mt-20 space-y-16 border-t border-border pt-16">
          {/* Usage Tips */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Using Technical Manuals Effectively</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">✅ Best Practices</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Download locally:</strong> Keep copies for offline reference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Check your year:</strong> Procedures can vary by model year</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Follow torque specs:</strong> Critical for safety and reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-green">•</span>
                    <span><strong>Use proper tools:</strong> Manuals specify required tools</span>
                  </li>
                </ul>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">⚠️ Important Notes</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Safety first:</strong> Always follow safety procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Cross-reference:</strong> Some manuals have errors or omissions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Community help:</strong> Ask forums if procedures are unclear</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red">•</span>
                    <span><strong>Know your limits:</strong> Some repairs require professional help</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Manual Organization by Generation */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Resources by Generation</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">🏁 NA & NB (1989-2005)</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>Best resource:</strong> Mellens.net comprehensive collection</p>
                  <p><strong>Key differences:</strong> NA6 vs NA8 vs NB engine variations</p>
                  <p><strong>Wiring notes:</strong> Multiple revisions, check your specific year</p>
                  <p><strong>Community support:</strong> Extensive modification documentation</p>
                  <p className="text-xs text-text-muted">Most comprehensive documentation available</p>
                </div>
              </div>

              <div className="bg-bg-card border border-border rounded-lg p-6">
                <h3 className="font-display text-xl font-bold mb-4 text-accent-green">🔧 NC & ND (2006-Present)</h3>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p><strong>NC resources:</strong> Multiple forum collections, EU manuals available</p>
                  <p><strong>ND interactive:</strong> MX5Manual.com excellent online resource</p>
                  <p><strong>Modern complexity:</strong> More advanced electronics and systems</p>
                  <p><strong>Dealer support:</strong> Recent models may require dealer diagnostics</p>
                  <p className="text-xs text-text-muted">Newer generations have fewer free resources</p>
                </div>
              </div>
            </div>
          </section>

          {/* Community Contributions */}
          <section>
            <h2 className="font-display text-3xl font-bold mb-8">Community Contributions</h2>

            <div className="bg-bg-card border border-border rounded-lg p-8">
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-4">Preserving MX-5 Knowledge</h3>
                <p className="text-text-secondary max-w-2xl mx-auto">
                  These manuals exist thanks to dedicated community members who digitized, organized, and shared factory documentation.
                  Many resources are hosted by enthusiasts at their own expense.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="font-display text-xl font-bold text-accent-gold mb-2">Mellens.net</div>
                  <div className="text-sm text-text-secondary">Comprehensive NA/NB/NC collection</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-accent-blue mb-2">Archive.org</div>
                  <div className="text-sm text-text-secondary">Historical document preservation</div>
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-accent-green mb-2">MX5Manual.com</div>
                  <div className="text-sm text-text-secondary">Modern interactive approach</div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Actions */}
          <section className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              Ready to Work on Your MX-5?
            </h2>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Armed with the right documentation, you can tackle most maintenance and modifications yourself. Check out our guides for generation-specific advice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/maintenance`}
                className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Maintenance Guides
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/mods`}
                className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
              >
                Modification Guides
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