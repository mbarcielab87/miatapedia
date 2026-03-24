'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/lib/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';

interface MobileMenuProps {
  locale: Locale;
  dict: any;
}

export default function MobileMenu({ locale, dict }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="lg:hidden">
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-text-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9990]"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-bg-primary border-l border-border z-[9991] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-xl font-black text-text-primary tracking-tight">
                Miatapedia
              </span>
              <span className="w-1.5 h-1.5 bg-accent-red rounded-full animate-[pulse-dot_2s_ease-in-out_infinite]" />
            </div>
            <button
              onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-4 py-6">
            <nav>
              <div className="space-y-3">
                <Link
                  href={`/${locale}/generations`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.generations}
                </Link>
                <Link
                  href={`/${locale}/special-editions`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.special_editions}
                </Link>
                <Link
                  href={`/${locale}/buying-guide`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.buying_guide}
                </Link>
                <Link
                  href={`/${locale}/mods`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.mods}
                </Link>
                <Link
                  href={`/${locale}/manuals`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.manuals}
                </Link>
                <Link
                  href={`/${locale}/shops`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.shops}
                </Link>
                <Link
                  href={`/${locale}/community`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.community}
                </Link>
                <Link
                  href={`/${locale}/search`}
                  onClick={closeMenu}
                  className="block px-4 py-3 text-text-primary bg-bg-card hover:bg-bg-card-hover hover:text-accent-gold transition-all duration-200 rounded-lg border border-border font-medium text-sm"
                >
                  {dict.nav.search}
                </Link>
              </div>
            </nav>
          </div>

          {/* Footer */}
          <div className="border-t border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-muted text-sm font-mono">Language</span>
              <LanguageSwitcher locale={locale} />
            </div>
            <Link
              href={`/${locale}/about`}
              onClick={closeMenu}
              className="text-text-muted hover:text-accent-gold transition-colors text-sm"
            >
              About Miatapedia
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}