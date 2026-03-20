import type { Locale } from './config';

const dictionaries: Record<Locale, () => Promise<any>> = {
  en: () => import('@/messages/en.json').then((module) => module.default),
  es: () => import('@/messages/es.json').then((module) => module.default),
  pt: () => import('@/messages/pt.json').then((module) => module.default),
  de: () => import('@/messages/de.json').then((module) => module.default),
  fr: () => import('@/messages/fr.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  const dictFn = dictionaries[locale];
  if (!dictFn) {
    console.error(`Dictionary for locale ${locale} not found, falling back to en`);
    return dictionaries.en();
  }
  return dictFn();
};
