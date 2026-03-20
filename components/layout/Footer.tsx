import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface FooterProps {
  locale: Locale;
  dict: any;
}

export default function Footer({ locale, dict }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-6 lg:px-12 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-baseline gap-1 mb-3">
              <span className="font-display text-xl font-bold">Miatapedia</span>
              <span className="w-2 h-2 bg-accent-red rounded-full inline-block ml-0.5" />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body font-semibold text-text-primary mb-3 text-sm uppercase tracking-wider">
              {dict.nav.explore || 'Explore'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/generations`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.generations}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/special-editions`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.special_editions}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/buying-guide`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.buying_guide}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/mods`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.mods}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-body font-semibold text-text-primary mb-3 text-sm uppercase tracking-wider">
              Resources
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/manuals`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.manuals}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/shops`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.shops}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/clubs`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.clubs}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/events`} className="text-text-secondary hover:text-accent-gold transition-colors">
                  {dict.nav.events}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <div className="text-text-muted text-xs font-mono">
            © {currentYear} Miatapedia
          </div>
          <div className="flex gap-6 text-xs">
            <Link href={`/${locale}/about`} className="text-text-muted hover:text-accent-gold transition-colors">
              {dict.nav.about}
            </Link>
            <Link href={`/${locale}/about#legal`} className="text-text-muted hover:text-accent-gold transition-colors">
              {dict.footer.legal}
            </Link>
            <Link href={`/${locale}/about#contact`} className="text-text-muted hover:text-accent-gold transition-colors">
              {dict.footer.contact}
            </Link>
            <Link href={`/${locale}/about#support`} className="text-text-muted hover:text-accent-gold transition-colors">
              {dict.footer.support}
            </Link>
          </div>
          <div className="font-mono text-xs text-text-muted italic">
            {dict.footer.subtitle}
          </div>
        </div>
      </div>
    </footer>
  );
}
