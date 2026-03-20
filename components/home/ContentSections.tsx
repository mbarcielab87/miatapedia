import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface ContentSectionsProps {
  locale: Locale;
  dict: any;
}

export default function ContentSections({ locale, dict }: ContentSectionsProps) {
  return (
    <section className="px-6 lg:px-12 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-baseline justify-between mb-12 border-b border-border pb-6">
          <h2 className="font-display text-5xl font-bold tracking-tight">
            {dict.sections.explore}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href={`/${locale}/buying-guide`}
            className="group bg-bg-card border border-border rounded p-10 cursor-pointer transition-all duration-500 hover:bg-bg-card-hover hover:-translate-y-1 flex flex-col gap-4 no-underline"
          >
            <div className="w-12 h-12 border border-border-light rounded flex items-center justify-center text-2xl">
              🔧
            </div>
            <div className="font-display text-2xl font-bold">{dict.content_cards.buying_guide.title}</div>
            <div className="text-text-secondary text-base leading-relaxed font-light">
              {dict.content_cards.buying_guide.desc}
            </div>
            <div className="font-mono text-xs text-text-muted tracking-wider uppercase mt-auto pt-4 border-t border-border">
              {dict.content_cards.buying_guide.count}
            </div>
          </Link>

          <Link
            href={`/${locale}/mods`}
            className="group bg-bg-card border border-border rounded p-10 cursor-pointer transition-all duration-500 hover:bg-bg-card-hover hover:-translate-y-1 flex flex-col gap-4 no-underline"
          >
            <div className="w-12 h-12 border border-border-light rounded flex items-center justify-center text-2xl">
              ⚡
            </div>
            <div className="font-display text-2xl font-bold">{dict.content_cards.mods.title}</div>
            <div className="text-text-secondary text-base leading-relaxed font-light">
              {dict.content_cards.mods.desc}
            </div>
            <div className="font-mono text-xs text-text-muted tracking-wider uppercase mt-auto pt-4 border-t border-border">
              {dict.content_cards.mods.count}
            </div>
          </Link>

          <Link
            href={`/${locale}/maintenance`}
            className="group bg-bg-card border border-border rounded p-10 cursor-pointer transition-all duration-500 hover:bg-bg-card-hover hover:-translate-y-1 flex flex-col gap-4 no-underline"
          >
            <div className="w-12 h-12 border border-border-light rounded flex items-center justify-center text-2xl">
              🛠️
            </div>
            <div className="font-display text-2xl font-bold">{dict.content_cards.maintenance.title}</div>
            <div className="text-text-secondary text-base leading-relaxed font-light">
              {dict.content_cards.maintenance.desc}
            </div>
            <div className="font-mono text-xs text-text-muted tracking-wider uppercase mt-auto pt-4 border-t border-border">
              {dict.content_cards.maintenance.count}
            </div>
          </Link>

          <Link
            href={`/${locale}/motorsport`}
            className="group bg-bg-card border border-border rounded p-10 cursor-pointer transition-all duration-500 hover:bg-bg-card-hover hover:-translate-y-1 flex flex-col gap-4 no-underline"
          >
            <div className="w-12 h-12 border border-border-light rounded flex items-center justify-center text-2xl">
              🏁
            </div>
            <div className="font-display text-2xl font-bold">{dict.content_cards.motorsport.title}</div>
            <div className="text-text-secondary text-base leading-relaxed font-light">
              {dict.content_cards.motorsport.desc}
            </div>
            <div className="font-mono text-xs text-text-muted tracking-wider uppercase mt-auto pt-4 border-t border-border">
              {dict.content_cards.motorsport.count}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
