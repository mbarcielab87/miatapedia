import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import Link from 'next/link';

interface ModsPageProps {
  params: { locale: Locale };
}

export default async function ModsPage({ params }: ModsPageProps) {
  const dict = await getDictionary(params.locale);

  const modCategories = [
    {
      slug: 'suspension',
      title: dict.mods.categories.suspension.title,
      description: dict.mods.categories.suspension.description,
      icon: '🏁',
      difficulty: dict.mods.categories.suspension.difficulty,
      priceRange: '$300-$3000',
      accentClass: 'bg-accent-blue',
      borderClass: 'border-accent-blue',
      textClass: 'text-accent-blue',
    },
    {
      slug: 'exhaust',
      title: dict.mods.categories.exhaust.title,
      description: dict.mods.categories.exhaust.description,
      icon: '🔥',
      difficulty: dict.mods.categories.exhaust.difficulty,
      priceRange: '$200-$2000',
      accentClass: 'bg-accent-red',
      borderClass: 'border-accent-red',
      textClass: 'text-accent-red',
    },
    {
      slug: 'forced-induction',
      title: dict.mods.categories.forcedInduction.title,
      description: dict.mods.categories.forcedInduction.description,
      icon: '⚡',
      difficulty: dict.mods.categories.forcedInduction.difficulty,
      priceRange: '$3000-$8000',
      accentClass: 'bg-accent-gold',
      borderClass: 'border-accent-gold',
      textClass: 'text-accent-gold',
    },
    {
      slug: 'engine-swaps',
      title: dict.mods.categories.engineSwaps.title,
      description: dict.mods.categories.engineSwaps.description,
      icon: '🚀',
      difficulty: dict.mods.categories.engineSwaps.difficulty,
      priceRange: '$5000-$20000',
      accentClass: 'bg-accent-green',
      borderClass: 'border-accent-green',
      textClass: 'text-accent-green',
    }
  ];

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        <Breadcrumbs
          locale={params.locale}
          items={[{ label: dict.nav.mods, href: `/${params.locale}/mods` }]}
        />

        <div className="mb-12">
          <h1 className="font-display text-6xl font-black mb-4">{dict.mods.title}</h1>
          <p className="text-text-secondary text-lg max-w-3xl leading-relaxed">
            {dict.mods.subtitle}
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 pb-12 border-b border-border">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-red">$200+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.mods.stats.startingPrice}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-gold">4</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.mods.stats.mainCategories}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-blue">50+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.mods.stats.popularMods}</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-accent-green">600HP</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{dict.mods.stats.maxPotential}</div>
          </div>
        </div>

        {/* Quick Guide */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">{dict.mods.whereToStart}</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">{dict.mods.beginner}</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Cold Air Intake:</strong> $150-300, easy install</li>
                <li>• <strong>Cat-back Exhaust:</strong> $400-800, bolt-on</li>
                <li>• <strong>Sway Bars:</strong> $200-400, handling improvement</li>
                <li>• <strong>Strut Brace:</strong> $100-200, chassis stiffness</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-gold">{dict.mods.intermediate}</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Coilovers:</strong> $800-2000, adjustable suspension</li>
                <li>• <strong>Header + Tune:</strong> $600-1200, power gains</li>
                <li>• <strong>LSD Install:</strong> $800-1500, traction improvement</li>
                <li>• <strong>Big Brake Kit:</strong> $1000-2000, stopping power</li>
              </ul>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">{dict.mods.advanced}</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>• <strong>Turbo Kit:</strong> $3000-6000, major power</li>
                <li>• <strong>Engine Management:</strong> $1000-3000, tuning</li>
                <li>• <strong>Roll Cage:</strong> $1500-3000, safety/stiffness</li>
                <li>• <strong>Engine Swap:</strong> $8000-20000, complete transformation</li>
              </ul>
            </div>
          </div>

          <div className="bg-accent-gold/10 border border-accent-gold/20 rounded-lg p-6">
            <h3 className="font-display text-lg font-bold mb-4 text-accent-gold">{dict.mods.modificationPlanning}</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-text-primary mb-2">{dict.mods.buildPhilosophy}</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Define your goals first (street, track, show)</li>
                  <li>• Start with suspension and brakes</li>
                  <li>• Power mods should come last</li>
                  <li>• Plan for supporting modifications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">{dict.mods.budgetWisely}</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Buy once, cry once - quality parts</li>
                  <li>• Factor in installation costs</li>
                  <li>• Consider used market for expensive items</li>
                  <li>• Set aside 20% for unexpected costs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-text-primary mb-2">{dict.mods.installation}</h4>
                <ul className="space-y-1 text-text-secondary">
                  <li>• Know your skill level honestly</li>
                  <li>• Invest in proper tools</li>
                  <li>• Consider professional tuning</li>
                  <li>• Document everything for resale</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Modification Categories */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">{dict.mods.modificationCategories}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {modCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/${params.locale}/mods/${category.slug}`}
                className="group block bg-bg-card border border-border rounded-lg p-6 transition-all hover:border-accent-gold hover:bg-bg-card-hover no-underline"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-1 h-12 rounded ${category.accentClass}`}></div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{category.icon}</span>
                        <div className="font-display text-2xl font-bold group-hover:text-accent-gold transition-colors">
                          {category.title}
                        </div>
                      </div>
                      <div className="font-mono text-sm text-text-muted">
                        {category.difficulty} • {category.priceRange}
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
                  {category.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${category.textClass} bg-bg-primary border ${category.borderClass}`}>
                    {category.difficulty}
                  </div>
                  <div className="text-xs text-text-muted font-mono">
                    {category.priceRange}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Generation Compatibility */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">{dict.mods.generationCompatibility}</h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-accent-red rounded"></div>
                <h3 className="font-display text-lg font-bold">NA (1989-1997)</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Massive aftermarket support. Lightest platform for modifications.
              </p>
              <div className="text-accent-red text-sm font-medium">Best for: Track builds</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-accent-gold rounded"></div>
                <h3 className="font-display text-lg font-bold">NB (1998-2005)</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Excellent mod platform. Stronger engine, modern ECU.
              </p>
              <div className="text-accent-gold text-sm font-medium">Best for: Street/track</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-accent-blue rounded"></div>
                <h3 className="font-display text-lg font-bold">NC (2005-2015)</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Growing aftermarket. More power potential from factory.
              </p>
              <div className="text-accent-blue text-sm font-medium">Best for: Daily builds</div>
            </div>

            <div className="bg-bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-accent-green rounded"></div>
                <h3 className="font-display text-lg font-bold">ND (2015+)</h3>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Modern platform with warranty considerations. Limited but growing options.
              </p>
              <div className="text-accent-green text-sm font-medium">Best for: Bolt-ons</div>
            </div>
          </div>
        </section>

        {/* Popular Builds */}
        <section className="mb-12">
          <h2 className="font-display text-3xl font-bold mb-6">{dict.mods.popularBuilds}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-bg-card border border-accent-blue rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-blue">{dict.mods.trackDayHero}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-text-primary">Suspension:</strong>
                  <span className="text-text-secondary"> Coilovers, sway bars, chassis bracing</span>
                </div>
                <div>
                  <strong className="text-text-primary">Brakes:</strong>
                  <span className="text-text-secondary"> Big brake kit, cooling ducts</span>
                </div>
                <div>
                  <strong className="text-text-primary">Safety:</strong>
                  <span className="text-text-secondary"> Roll bar, racing seats, harnesses</span>
                </div>
                <div>
                  <strong className="text-text-primary">Engine:</strong>
                  <span className="text-text-secondary"> Header, intake, tune</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <strong className="text-accent-blue">Total: $4,000-8,000</strong>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-red rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-red">{dict.mods.streetWeapon}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-text-primary">Power:</strong>
                  <span className="text-text-secondary"> Turbo kit, engine management</span>
                </div>
                <div>
                  <strong className="text-text-primary">Handling:</strong>
                  <span className="text-text-secondary"> Performance coilovers, LSD</span>
                </div>
                <div>
                  <strong className="text-text-primary">Brakes:</strong>
                  <span className="text-text-secondary"> Sport brake pads, lines</span>
                </div>
                <div>
                  <strong className="text-text-primary">Aesthetics:</strong>
                  <span className="text-text-secondary"> Body kit, wheels, exhaust</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <strong className="text-accent-red">Total: $8,000-15,000</strong>
                </div>
              </div>
            </div>

            <div className="bg-bg-card border border-accent-green rounded-lg p-6">
              <h3 className="font-display text-xl font-bold mb-4 text-accent-green">{dict.mods.ultimateBuild}</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-text-primary">Engine:</strong>
                  <span className="text-text-secondary"> LS3 V8 swap, standalone ECU</span>
                </div>
                <div>
                  <strong className="text-text-primary">Suspension:</strong>
                  <span className="text-text-secondary"> Full race suspension setup</span>
                </div>
                <div>
                  <strong className="text-text-primary">Drivetrain:</strong>
                  <span className="text-text-secondary"> T56 transmission, limited slip</span>
                </div>
                <div>
                  <strong className="text-text-primary">Safety:</strong>
                  <span className="text-text-secondary"> Full roll cage, fire suppression</span>
                </div>
                <div className="pt-2 border-t border-border">
                  <strong className="text-accent-green">Total: $20,000-40,000</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold mb-4">
            {dict.mods.readyToModify}
          </h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            {dict.mods.chooseCategory}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {modCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/${params.locale}/mods/${category.slug}`}
                className={`inline-flex items-center gap-2 border-2 hover:bg-white hover:text-black px-4 py-2 rounded font-semibold transition-colors no-underline text-sm ${category.borderClass} ${category.textClass}`}
              >
                <span>{category.icon}</span>
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}