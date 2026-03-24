import { notFound } from 'next/navigation';
import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';
import { generations, getLocalizedGenerations } from '@/data/generations';

interface BuyingGuidePageProps {
  params: Promise<{ locale: Locale; gen: string }>;
}

// Valid generation codes for buying guides
const validGenerations = ['na', 'nb', 'nc', 'nd'];

export default async function BuyingGuidePage({ params }: BuyingGuidePageProps) {
  const { locale, gen } = await params;
  const dict = await getDictionary(locale);

  // Validate generation
  if (!validGenerations.includes(gen.toLowerCase())) {
    notFound();
  }

  // Get generation data
  const localizedGenerations = getLocalizedGenerations(locale);
  const generation = localizedGenerations.find(g => g.code.toLowerCase() === gen.toLowerCase());

  if (!generation) {
    notFound();
  }

  // Generate breadcrumbs
  const breadcrumbItems = [
    { label: dict.common.home, href: `/${locale}` },
    { label: dict.nav.buying_guide, href: `/${locale}/buying-guide` },
    { label: `${generation.code} ${dict.nav.buying_guide}`, href: `/${locale}/buying-guide/${gen}` }
  ];

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={breadcrumbItems}
        />

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-1 h-16 rounded ${generation.accentClass}`}></div>
            <div>
              <h1 className="font-display text-6xl font-black">{generation.code} {dict.nav.buying_guide}</h1>
              <div className="font-mono text-lg text-text-muted">{generation.years} • {generation.name}</div>
            </div>
          </div>
          <p className="text-text-secondary text-lg leading-relaxed">
            {generation.description}
          </p>
        </div>

        {/* Specs Overview */}
        <section className="mb-12">
          <div className="bg-bg-card border border-border rounded-lg p-8">
            <h2 className={`font-display text-2xl font-bold mb-6 text-${generation.code.toLowerCase() === 'na' ? 'accent-red' : generation.code.toLowerCase() === 'nb' ? 'accent-gold' : generation.code.toLowerCase() === 'nc' ? 'accent-blue' : 'accent-green'}`}>
              {generation.code} {dict.buyingGuide.quickStart.title?.replace('Quick Start: Which Generation for You?', 'at a Glance') || 'Overview'}
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{dict.specs.engine}</h3>
                <p className="text-text-secondary">{generation.specs.engine}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{dict.specs.power}</h3>
                <p className="text-text-secondary">{generation.specs.power}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">{dict.specs.weight}</h3>
                <p className="text-text-secondary">{generation.specs.weight}</p>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold mb-2">Production</h3>
                <p className="text-text-secondary">{generation.specs.production}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Notice */}
        <section className="mb-12">
          <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-8 text-center">
            <h2 className="font-display text-2xl font-bold mb-4 text-accent-gold">
              Detailed Content Coming Soon
            </h2>
            <p className="text-text-secondary mb-6">
              We're working on comprehensive buying guides for each generation with detailed information about what to look for, common issues, pricing, and inspection checklists.
            </p>
            <div className="text-sm text-text-muted">
              In the meantime, visit our main buying guide page for general MX-5 buying advice.
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-border">
          <Link
            href={`/${locale}/buying-guide`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-gold hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">Back</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-gold transition-colors">
                  {dict.buyingGuide.generationSpecific}
                </div>
                <div className="text-text-secondary text-sm">Compare all generations</div>
              </div>
              <div className="text-accent-gold opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          <Link
            href={`/${locale}/generations/${gen}`}
            className="flex-1 bg-bg-card border border-border rounded-lg p-6 hover:border-accent-gold hover:bg-bg-card-hover transition-all group no-underline"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-2">{dict.buyingGuide.learnMore}</div>
                <div className="font-display text-lg font-bold group-hover:text-accent-gold transition-colors">
                  {generation.code} {dict.buyingGuide.generationGuideLabel}
                </div>
                <div className="text-text-secondary text-sm">{dict.buyingGuide.completeInformation.replace('{generation}', generation.code)}</div>
              </div>
              <div className="text-accent-gold opacity-50 group-hover:opacity-100 transition-opacity">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'es', 'pt', 'de', 'fr'];
  const generations = ['na', 'nb', 'nc', 'nd'];

  const params = [];
  for (const locale of locales) {
    for (const gen of generations) {
      params.push({ locale, gen });
    }
  }

  return params;
}

export async function generateMetadata({ params }: BuyingGuidePageProps) {
  const { locale, gen } = await params;
  const generationName = gen.toUpperCase();

  const titles = {
    en: `${generationName} Buying Guide | MX-5 Purchase Guide`,
    es: `Guía de Compra ${generationName} | Guía de Compra MX-5`,
    pt: `Guia de Compra ${generationName} | Guia de Compra MX-5`,
    de: `${generationName} Kaufratgeber | MX-5 Kaufberatung`,
    fr: `Guide d'Achat ${generationName} | Guide d'Achat MX-5`
  };

  const descriptions = {
    en: `Complete buying guide for the Mazda MX-5 ${generationName} generation. What to look for, common problems, price guides, and inspection checklist.`,
    es: `Guía completa de compra para la generación ${generationName} del Mazda MX-5. Qué buscar, problemas comunes, guías de precios y lista de inspección.`,
    pt: `Guia completo de compra para a geração ${generationName} do Mazda MX-5. O que procurar, problemas comuns, guias de preços e lista de inspeção.`,
    de: `Vollständiger Kaufratgeber für die Mazda MX-5 ${generationName} Generation. Worauf zu achten ist, häufige Probleme, Preisführer und Inspektionscheckliste.`,
    fr: `Guide d'achat complet pour la génération ${generationName} Mazda MX-5. Que rechercher, problèmes courants, guides de prix et liste d'inspection.`
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}