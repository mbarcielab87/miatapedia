import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={[{ label: 'About', href: `/${locale}/about` }]}
        />

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="flex items-baseline justify-center gap-1 mb-6">
            <span className="font-display text-6xl font-black text-text-primary tracking-tight">
              Miatapedia
            </span>
            <span className="w-2 h-2 bg-accent-red rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
          </div>
          <p className="text-text-secondary text-xl leading-relaxed">
            The definitive encyclopedia for Mazda MX-5 / Miata / Eunos Roadster enthusiasts
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Our Mission</h2>
          <div className="bg-bg-card border border-border rounded-lg p-8">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Miatapedia exists to preserve, organize, and share the collective knowledge of the MX-5 community.
              We believe that every piece of information about the world's best-selling roadster deserves to be
              documented and accessible to enthusiasts worldwide.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              From the original NA's debut in 1989 to the latest ND innovations, we're building the most
              comprehensive resource about every generation, special edition, modification, and technical detail.
            </p>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">What We Cover</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">📚 Encyclopedia</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Complete generation histories (NA, NB, NC, ND)</li>
                <li>• Special & limited edition documentation</li>
                <li>• Technical specifications and variants</li>
                <li>• Production numbers and market analysis</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">🔧 Technical Guides</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Generation-specific buying guides</li>
                <li>• Maintenance schedules and procedures</li>
                <li>• Modification guides and compatibility</li>
                <li>• Factory service manual collections</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">🛒 Directory</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Parts suppliers and performance shops</li>
                <li>• Regional clubs and organizations</li>
                <li>• Online communities and forums</li>
                <li>• Technical documentation libraries</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">🔍 Search</h3>
              <ul className="space-y-2 text-text-secondary">
                <li>• Comprehensive content search</li>
                <li>• Filter by generation and category</li>
                <li>• Popular topic suggestions</li>
                <li>• Cross-referenced information</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Our Values</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Accuracy First</h3>
                <p className="text-text-secondary leading-relaxed">
                  Every specification, production number, and technical detail is researched and verified.
                  We don't publish inflated statistics or unconfirmed information.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl">🌍</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Global Community</h3>
                <p className="text-text-secondary leading-relaxed">
                  The MX-5 community spans every continent. We document regional variations,
                  local clubs, and market-specific information to serve enthusiasts worldwide.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Always Evolving</h3>
                <p className="text-text-secondary leading-relaxed">
                  Miatapedia grows continuously. New special editions, technical discoveries,
                  and community resources are added regularly to keep information current.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl">🤝</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">Community Driven</h3>
                <p className="text-text-secondary leading-relaxed">
                  Built by enthusiasts, for enthusiasts. We aggregate the best knowledge from
                  forums, technical experts, and passionate owners across the globe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">By the Numbers</h2>

          <div className="bg-bg-card border border-border rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-display text-3xl font-bold text-accent-red mb-2">20,000+</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Lines of Content</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent-gold mb-2">150+</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Searchable Items</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent-blue mb-2">5</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Languages</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent-green mb-2">{currentYear - 2025 + 1}</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Years Online</div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Important Information</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border-light rounded-lg p-6 border-l-4 border-l-accent-gold">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-gold">⚠️ Not Affiliated with Mazda</h3>
              <p className="text-text-secondary leading-relaxed">
                Miatapedia is an independent enthusiast project and is not affiliated with, endorsed by,
                or connected to Mazda Motor Corporation or any of its subsidiaries. All Mazda, MX-5,
                Miata, and Eunos Roadster trademarks belong to their respective owners.
              </p>
            </div>

            <div className="bg-bg-card border border-border-light rounded-lg p-6 border-l-4 border-l-accent-blue">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-blue">🔧 Technical Information</h3>
              <p className="text-text-secondary leading-relaxed">
                While we strive for accuracy, all technical information is provided for educational purposes only.
                Always consult professional mechanics and official service manuals for repairs and modifications.
                Work on your vehicle at your own risk.
              </p>
            </div>

            <div className="bg-bg-card border border-border-light rounded-lg p-6 border-l-4 border-l-accent-red">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-red">🛒 Commercial Links</h3>
              <p className="text-text-secondary leading-relaxed">
                Our shop and vendor directories are provided as a community service. We do not endorse
                specific businesses or guarantee their services. Some links may contain affiliate codes
                to support site maintenance, which does not affect pricing.
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">Contact & Support</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">📧 Get in Touch</h3>
              <p className="text-text-secondary mb-4">
                Have corrections, suggestions, or want to contribute content? We'd love to hear from you.
              </p>
              <a
                href="mailto:info@miatapedia.info"
                className="inline-block bg-accent-blue hover:bg-accent-blue/80 text-white px-4 py-2 rounded transition-colors font-semibold no-underline"
              >
                Email Us
              </a>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">☕ Support the Project</h3>
              <p className="text-text-secondary mb-4">
                Miatapedia is free and ad-free. Consider supporting our server costs and development time.
              </p>
              <a
                href="https://ko-fi.com/miatapedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-gold hover:bg-accent-gold/80 text-black px-4 py-2 rounded transition-colors font-semibold no-underline"
              >
                Support Us
              </a>
            </div>
          </div>
        </section>

        {/* Legal Footer */}
        <section className="text-center pt-8 border-t border-border">
          <p className="text-text-muted text-sm mb-4">
            © {currentYear} Miatapedia. Built with obsession, not obligation.
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href={`/${locale}/search`} className="text-text-muted hover:text-text-secondary transition-colors no-underline">
              Search
            </Link>
            <Link href="mailto:info@miatapedia.info" className="text-text-muted hover:text-text-secondary transition-colors no-underline">
              Contact
            </Link>
            <a href="https://github.com/miatapedia" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text-secondary transition-colors no-underline">
              GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'About | Miatapedia',
    description: 'Learn about Miatapedia, the definitive encyclopedia for Mazda MX-5 / Miata / Eunos Roadster enthusiasts. Our mission, values, and community-driven approach.',
    keywords: 'about miatapedia, mx-5 encyclopedia, miata community, mazda mx-5 information, roadster database'
  };
}