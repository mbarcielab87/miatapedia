import { generations } from '@/data/generations';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface BuyingGuidePageProps {
  params: { locale: Locale };
}

export default async function BuyingGuidePage({ params }: BuyingGuidePageProps) {
  const dict = await getDictionary(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[{ label: dict.nav.buying_guide, href: `/${params.locale}/buying-guide` }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">{dict.buyingGuide.title}</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            {dict.buyingGuide.subtitle}
          </p>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">$3K-$50K</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.buyingGuide.stats.priceRange}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">4</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.buyingGuide.stats.generationGuides}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">35+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.buyingGuide.stats.yearsCovered}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">1.2M+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.buyingGuide.stats.carsToChoose}</div>
          </div>
        </div>

        {/* Quick Start Guide */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">{dict.buyingGuide.quickStart.title}</h2>

          <div className="bg-bg-card border border-border rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-red">{dict.buyingGuide.quickStart.firstTimeBuyer}</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>{dict.buyingGuide.budgetGuide.under10k}</strong> {dict.buyingGuide.budgetGuide.na}</li>
                  <li>• <strong>{dict.buyingGuide.budgetGuide.budget1020k}</strong> {dict.buyingGuide.budgetGuide.nb}</li>
                  <li>• <strong>{dict.buyingGuide.budgetGuide.budget2030k}</strong> {dict.buyingGuide.budgetGuide.nc}</li>
                  <li>• <strong>{dict.buyingGuide.budgetGuide.budget30plus}</strong> {dict.buyingGuide.budgetGuide.nd}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">{dict.buyingGuide.quickStart.priorities}</h3>
                <ul className="space-y-2 text-text-secondary text-sm">
                  <li>• <strong>{dict.buyingGuide.prioritiesGuide.pureExperience}</strong> {dict.buyingGuide.prioritiesGuide.naManual}</li>
                  <li>• <strong>{dict.buyingGuide.prioritiesGuide.dailyDriver}</strong> {dict.buyingGuide.prioritiesGuide.ncNd}</li>
                  <li>• <strong>{dict.buyingGuide.prioritiesGuide.trackAutocross}</strong> {dict.buyingGuide.prioritiesGuide.naNbWeight}</li>
                  <li>• <strong>{dict.buyingGuide.prioritiesGuide.modPotential}</strong> {dict.buyingGuide.prioritiesGuide.naNbAftermarket}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-accent-red/10 border border-accent-red/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-red">{dict.buyingGuide.quickStart.universalTips}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-text-primary mb-2">{dict.buyingGuide.quickStart.essentialChecks}</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• {dict.buyingGuide.checksList.serviceHistory}</li>
                  <li>• {dict.buyingGuide.checksList.rustInspection}</li>
                  <li>• {dict.buyingGuide.checksList.softTopCondition}</li>
                  <li>• {dict.buyingGuide.checksList.transmissionFeel}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">{dict.buyingGuide.quickStart.redFlags}</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• {dict.buyingGuide.redFlagsList.missingRecords}</li>
                  <li>• {dict.buyingGuide.redFlagsList.rustBubbles}</li>
                  <li>• {dict.buyingGuide.redFlagsList.harshShifting}</li>
                  <li>• {dict.buyingGuide.redFlagsList.extensiveMods}</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">{dict.buyingGuide.quickStart.bestValue}</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• {dict.buyingGuide.bestValueList.higherMileage}</li>
                  <li>• {dict.buyingGuide.bestValueList.manualPreferred}</li>
                  <li>• {dict.buyingGuide.bestValueList.avoidDamage}</li>
                  <li>• {dict.buyingGuide.bestValueList.maintenanceCosts}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Generation Buying Guides */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">{dict.buyingGuide.generationSpecific}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {generations.map((generation) => (
              <Link
                key={generation.code}
                href={`/${params.locale}/buying-guide/${generation.code.toLowerCase()}`}
                className="group block bg-bg-card border border-border rounded-lg p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover no-underline"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-12 rounded ${generation.accentClass}`}></div>
                    <div>
                      <div className="font-display text-2xl font-bold group-hover:text-accent-gold transition-colors">
                        {generation.code} {dict.buyingGuide.buyingGuideLabel}
                      </div>
                      <div className="font-mono text-sm text-text-muted">
                        {generation.years}
                      </div>
                    </div>
                  </div>
                  <div className="text-text-muted group-hover:text-accent-gold transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {getGenerationDescription(generation.code, dict)}
                </p>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="font-mono text-text-muted uppercase tracking-wider mb-1">
                      {dict.buyingGuide.priceRangeLabel}
                    </div>
                    <div className="text-text-primary font-medium">
                      {getPriceRange(generation.code, dict)}
                    </div>
                  </div>
                  <div>
                    <div className="font-mono text-text-muted uppercase tracking-wider mb-1">
                      {dict.buyingGuide.bestForLabel}
                    </div>
                    <div className="text-text-primary font-medium">
                      {getBestFor(generation.code, dict)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Market Insights */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">{dict.buyingGuide.marketInsights}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-green rounded-full"></div>
                <h3 className="font-display text-lg font-bold">{dict.buyingGuide.risingValues.title}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                {dict.buyingGuide.risingValues.description}
              </p>
              <div className="text-accent-green text-sm font-medium">{dict.buyingGuide.risingValues.trend}</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-blue rounded-full"></div>
                <h3 className="font-display text-lg font-bold">{dict.buyingGuide.bestValues.title}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                {dict.buyingGuide.bestValues.description}
              </p>
              <div className="text-accent-blue text-sm font-medium">{dict.buyingGuide.bestValues.range}</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-accent-red rounded-full"></div>
                <h3 className="font-display text-lg font-bold">{dict.buyingGuide.avoid.title}</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                {dict.buyingGuide.avoid.description}
              </p>
              <div className="text-accent-red text-sm font-medium">{dict.buyingGuide.avoid.advice}</div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            {dict.buyingGuide.readyToDive}
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            {dict.buyingGuide.eachGenerationUnique}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {generations.map((generation) => (
              <Link
                key={generation.code}
                href={`/${params.locale}/buying-guide/${generation.code.toLowerCase()}`}
                className={`inline-flex items-center gap-2 border-2 hover:bg-white hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm ${getGenerationButtonClasses(generation.code)}`}
              >
                {generation.code} {dict.buyingGuide.guideLabel}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function getGenerationDescription(code: string, dict: any): string {
  return dict.buyingGuide.generationDescriptions[code] || '';
}

function getPriceRange(code: string, dict: any): string {
  return dict.buyingGuide.priceRanges[code] || '';
}

function getBestFor(code: string, dict: any): string {
  return dict.buyingGuide.bestFor[code] || '';
}

function getGenerationButtonClasses(code: string): string {
  const classes = {
    'NA': 'border-accent-red text-accent-red',
    'NB': 'border-accent-gold text-accent-gold',
    'NC': 'border-accent-blue text-accent-blue',
    'ND': 'border-accent-green text-accent-green'
  };
  return classes[code as keyof typeof classes] || 'border-accent-red text-accent-red';
}