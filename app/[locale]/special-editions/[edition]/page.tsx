import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { specialEditions, type SpecialEdition } from '@/data/special-editions';

interface SpecialEditionPageProps {
  params: Promise<{ locale: Locale; edition: string }>;
}

export default async function SpecialEditionPage({ params }: SpecialEditionPageProps) {
  const { locale, edition } = await params;
  const dict = await getDictionary(locale);

  // Find the edition data
  const editionData = specialEditions.find(ed => ed.slug === edition.toLowerCase());

  if (!editionData) {
    notFound();
  }

  // Generate breadcrumbs
  const breadcrumbItems = [
    { label: dict.common.home, href: `/${locale}` },
    { label: dict.nav.special_editions, href: `/${locale}/special-editions` },
    { label: editionData.title[locale], href: `/${locale}/special-editions/${edition}` }
  ];

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-5xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={breadcrumbItems}
        />

        {/* Header */}
        <div className="mb-16">
          <div className="flex items-start justify-between mb-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className={`w-1 h-20 rounded bg-${editionData.color}`}></div>
                <div>
                  <div className="font-display text-5xl font-black mb-2">
                    {editionData.title[locale]}
                  </div>
                  <div className="font-mono text-lg text-text-muted">
                    {editionData.generation} Generation • {editionData.production[locale]}
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                editionData.rarity[locale] === 'Extremely Rare' || editionData.rarity[locale] === 'Extremadamente Raro' || editionData.rarity[locale] === 'Extremamente Raro' || editionData.rarity[locale] === 'Extrem Selten' || editionData.rarity[locale] === 'Extrêmement Rare'
                  ? 'bg-red-500/20 text-red-500'
                  : editionData.rarity[locale] === 'Very Rare' || editionData.rarity[locale] === 'Muy Raro' || editionData.rarity[locale] === 'Muito Raro' || editionData.rarity[locale] === 'Sehr Selten' || editionData.rarity[locale] === 'Très Rare'
                  ? 'bg-accent-red/20 text-accent-red'
                  : editionData.rarity[locale] === 'Very Limited' || editionData.rarity[locale] === 'Muy Limitado' || editionData.rarity[locale] === 'Muito Limitado' || editionData.rarity[locale] === 'Sehr Limitiert' || editionData.rarity[locale] === 'Très Limité'
                  ? 'bg-accent-gold/20 text-accent-gold'
                  : editionData.rarity[locale] === 'Limited' || editionData.rarity[locale] === 'Limitado' || editionData.rarity[locale] === 'Limitiert' || editionData.rarity[locale] === 'Limité'
                  ? 'bg-accent-blue/20 text-accent-blue'
                  : 'bg-accent-green/20 text-accent-green'
              }`}>
                {editionData.rarity[locale]}
              </div>
            </div>
          </div>

          <p className="text-text-secondary text-lg max-w-4xl leading-relaxed">
            {editionData.description[locale]}
          </p>
        </div>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
            {dict.common.keyFeatures}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {editionData.keyFeatures.map((feature, index) => (
              <div key={index} className="bg-bg-card rounded-xl border border-border p-6">
                <div className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-3 flex-shrink-0"></span>
                  <span className="text-text-primary">{feature[locale]}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Significance & Value */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-bg-card rounded-xl border border-border p-6">
              <h3 className={`font-display text-xl font-bold text-${editionData.color} mb-4`}>
                {dict.specialEditions.significance}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {editionData.significance[locale]}
              </p>
            </div>

            <div className="bg-bg-card rounded-xl border border-border p-6">
              <h3 className="font-display text-xl font-bold text-accent-green mb-4">
                {dict.specialEditions.currentMarketValue}
              </h3>
              <p className="text-text-primary text-2xl font-bold mb-2">
                {editionData.currentValue}
              </p>
              <p className="text-text-secondary text-sm">
                {dict.specialEditions.pricingVaries}
              </p>
            </div>
          </div>
        </section>

        {/* Related Special Editions CTA */}
        <section className="border-t border-border pt-16">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              {dict.specialEditions.exploreMore}
            </h2>
            <p className="text-text-secondary mb-8">
              {dict.specialEditions.discoverComplete}
            </p>
            <Link
              href={`/${locale}/special-editions`}
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              {dict.specialEditions.viewAllSpecialEditions}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'es', 'pt', 'de', 'fr'];

  const params = [];
  for (const locale of locales) {
    for (const edition of specialEditions) {
      params.push({ locale, edition: edition.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: SpecialEditionPageProps) {
  const { locale, edition } = await params;

  // Find the edition data
  const editionData = specialEditions.find(ed => ed.slug === edition.toLowerCase());

  if (!editionData) {
    return {
      title: 'Special Edition Not Found',
      description: 'The requested MX-5 special edition was not found.'
    };
  }

  const editionName = editionData.title[locale];

  const titles = {
    en: `${editionName} | MX-5 Special Editions`,
    es: `${editionName} | Ediciones Especiales MX-5`,
    pt: `${editionName} | Edições Especiais MX-5`,
    de: `${editionName} | MX-5 Sondermodelle`,
    fr: `${editionName} | Éditions Spéciales MX-5`
  };

  return {
    title: titles[locale] || titles.en,
    description: editionData.description[locale],
  };
}