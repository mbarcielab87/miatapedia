import { getDictionary } from '@/lib/i18n/dictionaries';
import type { Locale } from '@/lib/i18n/config';
import Hero from '@/components/home/Hero';
import GenerationsGrid from '@/components/home/GenerationsGrid';
import EditionsTicker from '@/components/home/EditionsTicker';
import ContentSections from '@/components/home/ContentSections';
import CommunitySection from '@/components/home/CommunitySection';
import SearchSection from '@/components/home/SearchSection';

export default async function HomePage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <Hero dict={dict} />
      <GenerationsGrid locale={locale as Locale} dict={dict} />
      <EditionsTicker locale={locale as Locale} dict={dict} />
      <ContentSections locale={locale as Locale} dict={dict} />
      <CommunitySection locale={locale as Locale} dict={dict} />
      <SearchSection locale={locale as Locale} dict={dict} />
    </>
  );
}
