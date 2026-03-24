import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { specialEditions, editionCategories } from '@/data/special-editions';

interface SpecialEditionsPageProps {
  params: {
    locale: Locale;
  };
}

const editionStats = [
  { labelKey: 'totalSpecialEditions', value: '120+', color: 'accent-red' },
  { labelKey: 'yearsSpanning', value: '35+', color: 'accent-gold' },
  { labelKey: 'mostProduced', value: '7,500', color: 'accent-blue' },
  { labelKey: 'rarestEdition', value: '500', color: 'accent-green' }
];

export default async function SpecialEditionsPage({ params }: SpecialEditionsPageProps) {
  const dict = await getDictionary(params.locale);

  const breadcrumbItems = [
    { label: dict.common.home, href: `/${params.locale}` },
    { label: dict.nav.special_editions, href: `/${params.locale}/special-editions` }
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
                {dict.specialEditions.title}
              </h1>
            </div>

            <p className="text-xl text-text-secondary leading-relaxed max-w-4xl">
              {dict.specialEditions.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 p-6 bg-bg-card rounded-xl border border-border">
              {editionStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl font-bold text-${stat.color}`}>
                    {stat.value}{stat.labelKey === 'mostProduced' || stat.labelKey === 'rarestEdition' ? ` ${dict.common.units}` : ''}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {dict.specialEditions.stats[stat.labelKey as keyof typeof dict.specialEditions.stats]}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Special Editions */}
          <section className="mb-16">
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              {dict.specialEditions.iconicSpecialEditions}
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
                              {edition.title[params.locale]}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-text-muted">
                              <span className="font-mono">{edition.generation} {dict.generation_label}</span>
                              <span>•</span>
                              <span>{edition.year}</span>
                              <span>•</span>
                              <span>{edition.production[params.locale]}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-text-secondary mb-4 leading-relaxed">
                          {edition.description[params.locale]}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                              {dict.common.keyFeatures}
                            </span>
                            <ul className="mt-1 text-sm text-text-secondary">
                              {edition.keyFeatures.slice(0, 2).map((feature, i) => (
                                <li key={i} className="flex items-center">
                                  <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
                                  {feature[params.locale]}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                              {dict.specialEditions.significanceAndValue}
                            </span>
                            <div className="mt-1">
                              <div className="text-sm text-text-secondary">{edition.significance[params.locale]}</div>
                              <div className="text-sm font-medium text-text-primary">{edition.currentValue}</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="text-center">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            edition.rarity[params.locale] === 'Extremely Rare' || edition.rarity[params.locale] === 'Extremadamente Raro' || edition.rarity[params.locale] === 'Extremamente Raro' || edition.rarity[params.locale] === 'Extrem Selten' || edition.rarity[params.locale] === 'Extrêmement Rare'
                              ? 'bg-red-500/20 text-red-500'
                              : edition.rarity[params.locale] === 'Very Rare' || edition.rarity[params.locale] === 'Muy Raro' || edition.rarity[params.locale] === 'Muito Raro' || edition.rarity[params.locale] === 'Sehr Selten' || edition.rarity[params.locale] === 'Très Rare'
                              ? 'bg-accent-red/20 text-accent-red'
                              : edition.rarity[params.locale] === 'Very Limited' || edition.rarity[params.locale] === 'Muy Limitado' || edition.rarity[params.locale] === 'Muito Limitado' || edition.rarity[params.locale] === 'Sehr Limitiert' || edition.rarity[params.locale] === 'Très Limité'
                              ? 'bg-accent-gold/20 text-accent-gold'
                              : edition.rarity[params.locale] === 'Limited' || edition.rarity[params.locale] === 'Limitado' || edition.rarity[params.locale] === 'Limitiert' || edition.rarity[params.locale] === 'Limité'
                              ? 'bg-accent-blue/20 text-accent-blue'
                              : 'bg-accent-green/20 text-accent-green'
                          }`}>
                            {edition.rarity[params.locale]}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-accent-red text-sm
                                      group-hover:translate-x-1 transition-transform">
                          <span>{dict.common.readMore}</span>
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
              {dict.specialEditions.editionCategories}
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
                      {category.category[params.locale]}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">
                      {category.description[params.locale]}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
                      {dict.specialEditions.examples}
                    </span>
                    <ul className="mt-2 space-y-1">
                      {category.examples.map((example, i) => (
                        <li key={i} className="text-sm text-text-secondary flex items-center">
                          <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 flex-shrink-0"></span>
                          {example[params.locale]}
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
              {dict.specialEditions.collectorsGuide}
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="grid gap-8 md:grid-cols-2">

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-red mb-4">
                    {dict.specialEditions.investmentPotential}
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: dict.specialEditions.investmentPoints.ultraRare }} />
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: dict.specialEditions.investmentPoints.conditionIsKing }} />
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-red rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: dict.specialEditions.investmentPoints.documentationMatters }} />
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-display text-xl font-bold text-accent-gold mb-4">
                    {dict.specialEditions.whatToLookFor}
                  </h3>
                  <ul className="space-y-3 text-text-secondary">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: dict.specialEditions.lookForPoints.authenticity }} />
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: dict.specialEditions.lookForPoints.originality }} />
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-accent-gold rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span dangerouslySetInnerHTML={{ __html: dict.specialEditions.lookForPoints.serviceHistory }} />
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent-red/10 rounded-lg">
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">{dict.specialEditions.collectorTip}</strong> {dict.specialEditions.collectorTipText}
                </p>
              </div>
            </div>
          </section>

          {/* Historical Context */}
          <section>
            <h2 className="font-display text-3xl font-bold text-text-primary mb-8">
              {dict.specialEditions.historicalContext.title}
            </h2>

            <div className="bg-bg-card rounded-xl border border-border p-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-text-secondary leading-relaxed">
                  {dict.specialEditions.historicalContext.description}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}