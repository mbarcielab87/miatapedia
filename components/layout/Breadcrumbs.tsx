import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';

interface Breadcrumb {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  locale: Locale;
  items: Breadcrumb[];
}

export default function Breadcrumbs({ locale, items }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav className="flex items-center gap-2 text-sm font-mono text-text-muted mb-8">
      <Link
        href={`/${locale}`}
        className="hover:text-accent-gold transition-colors"
      >
        Home
      </Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <span>/</span>
          {index === items.length - 1 ? (
            <span className="text-text-primary">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="hover:text-accent-gold transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
