import { readFile } from 'fs/promises';
import { join } from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import type { Locale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import Breadcrumbs from '@/components/layout/Breadcrumbs';

interface GenerationPageProps {
  params: Promise<{ locale: Locale; gen: string }>;
}

// Valid generation codes
const validGenerations = ['na', 'nb', 'nc', 'nd'];

async function getGenerationContent(locale: Locale, gen: string) {
  try {
    const contentPath = join(process.cwd(), 'content', locale, 'generations', `${gen}.mdx`);
    const content = await readFile(contentPath, 'utf8');
    return content;
  } catch (error) {
    // If content doesn't exist for this locale, try English as fallback
    if (locale !== 'en') {
      try {
        const fallbackPath = join(process.cwd(), 'content', 'en', 'generations', `${gen}.mdx`);
        const content = await readFile(fallbackPath, 'utf8');
        return content;
      } catch (fallbackError) {
        return null;
      }
    }
    return null;
  }
}

export default async function GenerationPage({ params }: GenerationPageProps) {
  const { locale, gen } = await params;
  const dict = await getDictionary(locale);

  // Validate generation
  if (!validGenerations.includes(gen.toLowerCase())) {
    notFound();
  }

  // Get content
  const content = await getGenerationContent(locale, gen.toLowerCase());

  if (!content) {
    notFound();
  }

  // Generate breadcrumbs
  const generationName = gen.toUpperCase();
  const breadcrumbItems = [
    { label: dict.sections.generations, href: `/${locale}/generations` },
    { label: `${generationName} Generation`, href: `/${locale}/generations/${gen}` }
  ];

  return (
    <div className="min-h-screen px-6 lg:px-12 py-12">
      <div className="max-w-4xl mx-auto">
        <Breadcrumbs
          locale={locale}
          items={breadcrumbItems}
        />

        <div className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={content} />
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const locales: Locale[] = ['en', 'es', 'pt', 'de', 'fr'];
  const generations = ['na', 'nb', 'nc', 'nd'];

  const params = [];
  for (const locale of locales) {
    for (const gen of generations) {
      params.push({ locale, gen });
    }
  }

  return params;
}

export async function generateMetadata({ params }: GenerationPageProps) {
  const { locale, gen } = await params;
  const generationName = gen.toUpperCase();

  const titles = {
    en: `${generationName} Generation | MX-5 Encyclopedia`,
    es: `Generación ${generationName} | Enciclopedia MX-5`,
    pt: `Geração ${generationName} | Enciclopédia MX-5`,
    de: `${generationName} Generation | MX-5 Enzyklopädie`,
    fr: `Génération ${generationName} | Encyclopédie MX-5`
  };

  const descriptions = {
    en: `Complete guide to the Mazda MX-5 ${generationName} generation. Technical specifications, history, variants, and everything you need to know.`,
    es: `Guía completa de la generación ${generationName} del Mazda MX-5. Especificaciones técnicas, historia, variantes y todo lo que necesitas saber.`,
    pt: `Guia completo da geração ${generationName} do Mazda MX-5. Especificações técnicas, história, variantes e tudo que você precisa saber.`,
    de: `Vollständiger Leitfaden zur Mazda MX-5 ${generationName} Generation. Technische Spezifikationen, Geschichte, Varianten und alles was Sie wissen müssen.`,
    fr: `Guide complet de la génération ${generationName} Mazda MX-5. Spécifications techniques, histoire, variantes et tout ce que vous devez savoir.`
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
  };
}