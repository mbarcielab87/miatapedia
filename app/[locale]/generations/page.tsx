import { getLocalizedGenerations } from '@/data/generations';
import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface GenerationsPageProps {
  params: { locale: Locale };
}

export default async function GenerationsPage({ params }: GenerationsPageProps) {
  const dict = await getDictionary(params.locale);
  const localizedGenerations = getLocalizedGenerations(params.locale);

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[{ label: 'Generations', href: `/${params.locale}/generations` }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">{dict.sections.generations} MX-5</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            {params.locale === 'es' ? 'Cuatro décadas de evolución, cuatro generaciones distintas. Cada generación de MX-5 trajo su propio carácter, mejoras y seguidores leales. Explora la historia completa del roadster más vendido del mundo.' :
             params.locale === 'pt' ? 'Quatro décadas de evolução, quatro gerações distintas. Cada geração de MX-5 trouxe seu próprio caráter, melhorias e seguidores leais. Explore a história completa do roadster mais vendido do mundo.' :
             params.locale === 'de' ? 'Vier Jahrzehnte der Evolution, vier verschiedene Generationen. Jede MX-5-Generation brachte ihren eigenen Charakter, Verbesserungen und treue Anhänger mit sich. Erkunden Sie die vollständige Geschichte des meistverkauften Roadsters der Welt.' :
             params.locale === 'fr' ? 'Quatre décennies d\'évolution, quatre générations distinctes. Chaque génération de MX-5 a apporté son propre caractère, ses améliorations et ses fidèles adeptes. Explorez l\'histoire complète du roadster le plus vendu au monde.' :
             'Four decades of evolution, four distinct generations. Each MX-5 generation brought its own character, improvements, and loyal following. Explore the complete history of the world\'s best-selling roadster.'}
          </p>
        </div>

        {/* Generation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">35+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.hero.stats.years}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">1.2M+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.hero.stats.units}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">120+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.hero.stats.editions}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">4</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.hero.stats.generations}</div>
          </div>
        </div>

        {/* Generations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {localizedGenerations.map((generation) => (
            <Link
              key={generation.code}
              href={`/${params.locale}/generations/${generation.code.toLowerCase()}`}
              className="group block bg-bg-card border border-border rounded-lg p-8 transition-all hover:border-accent-gold hover:bg-bg-card-hover no-underline"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className={`inline-block w-1 h-16 rounded mr-4 ${generation.accentClass}`}></div>
                  <div className="inline-block">
                    <div className="font-display text-3xl font-bold group-hover:text-accent-gold transition-colors">
                      {generation.code}
                    </div>
                    <div className="font-mono text-sm text-text-muted">
                      {generation.years}
                    </div>
                  </div>
                </div>
                <div className="text-text-muted group-hover:text-accent-gold transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <h3 className="font-display text-xl font-bold mb-3 group-hover:text-accent-gold transition-colors">
                {generation.name}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {generation.description}
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    {dict.specs.engine}
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.engine}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    {dict.specs.power}
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.power}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    {dict.specs.weight}
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.weight}
                  </div>
                </div>
                <div>
                  <div className="font-mono text-xs text-text-muted uppercase tracking-wider mb-1">
                    {params.locale === 'es' ? 'Producción' :
                     params.locale === 'pt' ? 'Produção' :
                     params.locale === 'de' ? 'Produktion' :
                     params.locale === 'fr' ? 'Production' :
                     'Production'}
                  </div>
                  <div className="text-text-primary">
                    {generation.specs.production}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-16 space-y-12">
          {/* Buying Guide CTA */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              {params.locale === 'es' ? '¿Listo para encontrar tu MX-5 perfecto?' :
               params.locale === 'pt' ? 'Pronto para encontrar seu MX-5 perfeito?' :
               params.locale === 'de' ? 'Bereit, Ihren perfekten MX-5 zu finden?' :
               params.locale === 'fr' ? 'Prêt à trouver votre MX-5 parfaite?' :
               'Ready to find your perfect MX-5?'}
            </h2>
            <p className="text-text-secondary mb-6">
              {params.locale === 'es' ? 'Consulta nuestras guías de compra completas para cada generación' :
               params.locale === 'pt' ? 'Confira nossos guias de compra abrangentes para cada geração' :
               params.locale === 'de' ? 'Schauen Sie sich unsere umfassenden Kaufratgeber für jede Generation an' :
               params.locale === 'fr' ? 'Consultez nos guides d\'achat complets pour chaque génération' :
               'Check out our comprehensive buying guides for each generation'}
            </p>
            <Link
              href={`/${params.locale}/buying-guide`}
              className="inline-flex items-center gap-2 bg-accent-red hover:bg-accent-red/80 text-white px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              {params.locale === 'es' ? 'Ver Guías de Compra' :
               params.locale === 'pt' ? 'Ver Guias de Compra' :
               params.locale === 'de' ? 'Kaufratgeber anzeigen' :
               params.locale === 'fr' ? 'Voir les Guides d\'Achat' :
               'View Buying Guides'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Maintenance CTA */}
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold mb-4">
              {params.locale === 'es' ? '¿Quieres mantener tu MX-5 funcionando perfectamente?' :
               params.locale === 'pt' ? 'Quer manter seu MX-5 funcionando perfeitamente?' :
               params.locale === 'de' ? 'Möchten Sie Ihren MX-5 perfekt am Laufen halten?' :
               params.locale === 'fr' ? 'Voulez-vous maintenir votre MX-5 en parfait état?' :
               'Want to keep your MX-5 running perfectly?'}
            </h2>
            <p className="text-text-secondary mb-6">
              {params.locale === 'es' ? 'Aprende el mantenimiento adecuado con nuestras guías específicas por generación' :
               params.locale === 'pt' ? 'Aprenda a manutenção adequada com nossos guias específicos por geração' :
               params.locale === 'de' ? 'Lernen Sie ordnungsgemäße Wartung mit unseren generationsspezifischen Anleitungen' :
               params.locale === 'fr' ? 'Apprenez l\'entretien approprié avec nos guides spécifiques à chaque génération' :
               'Learn proper maintenance with our generation-specific guides'}
            </p>
            <Link
              href={`/${params.locale}/maintenance`}
              className="inline-flex items-center gap-2 bg-accent-gold hover:bg-accent-gold/80 text-black px-6 py-3 rounded font-semibold transition-colors no-underline"
            >
              {params.locale === 'es' ? 'Ver Guías de Mantenimiento' :
               params.locale === 'pt' ? 'Ver Guias de Manutenção' :
               params.locale === 'de' ? 'Wartungsanleitungen anzeigen' :
               params.locale === 'fr' ? 'Voir les Guides d\'Entretien' :
               'View Maintenance Guides'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}