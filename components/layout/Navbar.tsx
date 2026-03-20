import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';

interface NavbarProps {
  locale: Locale;
  dict: any;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-5 flex items-center justify-between bg-bg-primary/85 backdrop-blur-xl border-b border-border">
      <Link href={`/${locale}`} className="flex items-baseline gap-1 no-underline group">
        <span className="font-display text-2xl font-black text-text-primary tracking-tight group-hover:text-accent-gold transition-colors">
          Miatapedia
        </span>
        <span className="w-2 h-2 bg-accent-red rounded-full inline-block ml-0.5 animate-[pulse-dot_2s_ease-in-out_infinite]" />
      </Link>

      <ul className="hidden lg:flex gap-10 list-none">
        <li>
          <Link
            href={`/${locale}/generations`}
            className="text-text-secondary no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary"
          >
            {dict.nav.generations}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/special-editions`}
            className="text-text-secondary no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary"
          >
            {dict.nav.special_editions}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/buying-guide`}
            className="text-text-secondary no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary"
          >
            {dict.nav.buying_guide}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/mods`}
            className="text-text-secondary no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary"
          >
            {dict.nav.mods}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/shops`}
            className="text-text-secondary no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary"
          >
            {dict.nav.shops}
          </Link>
        </li>
        <li>
          <Link
            href={`/${locale}/community`}
            className="text-text-secondary no-underline text-sm font-semibold tracking-wider uppercase transition-colors hover:text-text-primary"
          >
            {dict.nav.community}
          </Link>
        </li>
      </ul>

      <LanguageSwitcher locale={locale} />
    </nav>
  );
}
