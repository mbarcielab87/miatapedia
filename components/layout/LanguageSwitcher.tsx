'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { locales, type Locale } from '@/lib/i18n/config';

interface LanguageSwitcherProps {
  locale: Locale;
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();

  // Remove the current locale from the pathname to get the base path
  const getPathWithoutLocale = () => {
    const segments = pathname.split('/').filter(Boolean);
    if (locales.includes(segments[0] as Locale)) {
      segments.shift(); // Remove locale segment
    }
    return segments.length > 0 ? `/${segments.join('/')}` : '';
  };

  const pathWithoutLocale = getPathWithoutLocale();

  return (
    <div className="flex gap-2 items-center">
      {locales.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${pathWithoutLocale}`}
          className={`
            px-2.5 py-1.5 font-mono text-xs border border-border-light rounded
            transition-all duration-300
            ${loc === locale
              ? 'text-text-primary border-accent-gold bg-accent-gold-dim'
              : 'text-text-muted hover:text-text-primary hover:border-accent-gold hover:bg-accent-gold-dim'
            }
          `}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
