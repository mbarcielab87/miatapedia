import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  // Force rebuild for production deployment

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={[{ label: dict.about.title, href: `/${locale}/about` }]}
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
            {dict.about.subtitle}
          </p>
        </div>

        {/* Mission */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">{dict.about.mission.title}</h2>
          <div className="bg-bg-card border border-border rounded-lg p-8">
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              {dict.about.mission.description1}
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              {dict.about.mission.description2}
            </p>
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">{dict.about.whatWeCover.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">{dict.about.whatWeCover.encyclopedia.title}</h3>
              <ul className="space-y-2 text-text-secondary">
                {dict.about.whatWeCover.encyclopedia.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">{dict.about.whatWeCover.technical.title}</h3>
              <ul className="space-y-2 text-text-secondary">
                {dict.about.whatWeCover.technical.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">{dict.about.whatWeCover.directory.title}</h3>
              <ul className="space-y-2 text-text-secondary">
                {dict.about.whatWeCover.directory.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">{dict.about.whatWeCover.search.title}</h3>
              <ul className="space-y-2 text-text-secondary">
                {dict.about.whatWeCover.search.items.map((item: string, index: number) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">{dict.about.values.title}</h2>

          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">{dict.about.values.accuracy.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {dict.about.values.accuracy.description}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl">🌍</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">{dict.about.values.global.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {dict.about.values.global.description}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl">🚀</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">{dict.about.values.evolving.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {dict.about.values.evolving.description}
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="text-4xl">🤝</div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3">{dict.about.values.community.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {dict.about.values.community.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">{dict.about.stats.title}</h2>

          <div className="bg-bg-card border border-border rounded-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="font-display text-3xl font-bold text-accent-red mb-2">20,000+</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.about.stats.linesOfContent}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent-gold mb-2">150+</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.about.stats.searchableItems}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent-blue mb-2">5</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.about.stats.languages}</div>
              </div>
              <div>
                <div className="font-display text-3xl font-bold text-accent-green mb-2">{currentYear - 2025 + 1}</div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.about.stats.yearsOnline}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Disclaimers */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">{dict.about.disclaimers.title}</h2>

          <div className="space-y-6">
            <div className="bg-bg-card border border-border-light rounded-lg p-6 border-l-4 border-l-accent-gold">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-gold">{dict.about.disclaimers.notAffiliated.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {dict.about.disclaimers.notAffiliated.description}
              </p>
            </div>

            <div className="bg-bg-card border border-border-light rounded-lg p-6 border-l-4 border-l-accent-blue">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-blue">{dict.about.disclaimers.technical.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {dict.about.disclaimers.technical.description}
              </p>
            </div>

            <div className="bg-bg-card border border-border-light rounded-lg p-6 border-l-4 border-l-accent-red">
              <h3 className="font-display text-lg font-bold mb-3 text-accent-red">{dict.about.disclaimers.commercial.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {dict.about.disclaimers.commercial.description}
              </p>
            </div>
          </div>
        </section>

        {/* Contact & Support */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold mb-8">{dict.about.contact.title}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">{dict.about.contact.getInTouch.title}</h3>
              <p className="text-text-secondary mb-4">
                {dict.about.contact.getInTouch.description}
              </p>
              <a
                href="mailto:info@miatapedia.info"
                className="inline-block bg-accent-blue hover:bg-accent-blue/80 text-white px-4 py-2 rounded transition-colors font-semibold no-underline"
              >
                {dict.about.contact.getInTouch.button}
              </a>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">{dict.about.contact.support.title}</h3>
              <p className="text-text-secondary mb-4">
                {dict.about.contact.support.description}
              </p>
              <a
                href="https://ko-fi.com/miatapedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent-gold hover:bg-accent-gold/80 text-black px-4 py-2 rounded transition-colors font-semibold no-underline"
              >
                {dict.about.contact.support.button}
              </a>
            </div>
          </div>
        </section>

        {/* Legal Footer */}
        <section className="text-center pt-8 border-t border-border">
          <p className="text-text-muted text-sm mb-4">
            {dict.about.footer.copyright.replace('{year}', currentYear.toString())}
          </p>
          <div className="flex justify-center gap-6 text-sm">
            <Link href={`/${locale}/search`} className="text-text-muted hover:text-text-secondary transition-colors no-underline">
              {dict.about.footer.search}
            </Link>
            <Link href="mailto:info@miatapedia.info" className="text-text-muted hover:text-text-secondary transition-colors no-underline">
              {dict.about.footer.contact}
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

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: `${dict.about.title} | Miatapedia`,
    description: dict.about.subtitle,
    keywords: 'about miatapedia, mx-5 encyclopedia, miata community, mazda mx-5 information, roadster database'
  };
}