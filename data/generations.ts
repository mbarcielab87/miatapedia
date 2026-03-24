import type { Locale } from '@/lib/i18n/config';

export interface Generation {
  code: string;
  years: string;
  accentColor: string;
  accentClass: string;
  specs: {
    engine: string;
    power: string;
    weight: string;
    production: string;
  };
}

export interface LocalizedGeneration extends Generation {
  name: string;
  description: string;
}

// Base generation data (language-neutral)
const baseGenerations: Generation[] = [
  {
    code: 'NA',
    years: '1989 — 1997',
    accentColor: '#c41e3a',
    accentClass: 'bg-accent-red',
    specs: {
      engine: '1.6L B6-ZE / 1.8L BP-ZE',
      power: '116-133 hp',
      weight: '2,116-2,182 lbs',
      production: '431,000+ units',
    },
  },
  {
    code: 'NB',
    years: '1998 — 2005',
    accentColor: '#c4a265',
    accentClass: 'bg-accent-gold',
    specs: {
      engine: '1.6L BP-ZE / 1.8L BP-VE',
      power: '130-142 hp',
      weight: '2,293-2,403 lbs',
      production: '215,000+ units',
    },
  },
  {
    code: 'NC',
    years: '2005 — 2015',
    accentColor: '#6a9fb5',
    accentClass: 'bg-accent-blue',
    specs: {
      engine: '1.8L / 2.0L MZR',
      power: '126-167 hp',
      weight: '2,447-2,480 lbs',
      production: '320,000+ units',
    },
  },
  {
    code: 'ND',
    years: '2015 — Present',
    accentColor: '#7cb342',
    accentClass: 'bg-accent-green',
    specs: {
      engine: '1.5L / 2.0L Skyactiv-G',
      power: '131-181 hp',
      weight: '2,332-2,445 lbs',
      production: '350,000+ units',
    },
  },
];

// Localized content by language
const generationContent: Record<Locale, Record<string, { name: string; description: string }>> = {
  en: {
    NA: {
      name: 'First Generation',
      description: 'The original and purest. Lightweight, nimble, and perfectly balanced with iconic pop-up headlights and manual everything.'
    },
    NB: {
      name: 'Second Generation',
      description: 'The refined evolution. More powerful and sophisticated while maintaining the pure driving spirit of the original.'
    },
    NC: {
      name: 'Third Generation',
      description: 'The modern classic. Contemporary design, advanced safety, and optional power retractable hardtop.'
    },
    ND: {
      name: 'Fourth Generation',
      description: 'Back to basics with modern sophistication. Skyactiv technology delivers NA-like weight with contemporary performance.'
    }
  },
  es: {
    NA: {
      name: 'Primera Generación',
      description: 'El original y más puro. Ligero, ágil y perfectamente equilibrado con icónicos faros pop-up y todo manual.'
    },
    NB: {
      name: 'Segunda Generación',
      description: 'La evolución refinada. Más potente y sofisticado manteniendo el espíritu de conducción puro del original.'
    },
    NC: {
      name: 'Tercera Generación',
      description: 'El clásico moderno. Diseño contemporáneo, seguridad avanzada y capota rígida retráctil opcional.'
    },
    ND: {
      name: 'Cuarta Generación',
      description: 'Vuelta a lo básico con sofisticación moderna. La tecnología Skyactiv ofrece peso similar al NA con rendimiento contemporáneo.'
    }
  },
  pt: {
    NA: {
      name: 'Primeira Geração',
      description: 'O original e mais puro. Leve, ágil e perfeitamente equilibrado com icônicos faróis pop-up e tudo manual.'
    },
    NB: {
      name: 'Segunda Geração',
      description: 'A evolução refinada. Mais potente e sofisticado mantendo o espírito de condução puro do original.'
    },
    NC: {
      name: 'Terceira Geração',
      description: 'O clássico moderno. Design contemporâneo, segurança avançada e capota rígida retrátil opcional.'
    },
    ND: {
      name: 'Quarta Geração',
      description: 'De volta ao básico com sofisticação moderna. A tecnologia Skyactiv oferece peso similar ao NA com performance contemporânea.'
    }
  },
  de: {
    NA: {
      name: 'Erste Generation',
      description: 'Das Original und Reinste. Leicht, wendig und perfekt ausbalanciert mit ikonischen Pop-up-Scheinwerfern und allem manuell.'
    },
    NB: {
      name: 'Zweite Generation',
      description: 'Die raffinierte Evolution. Leistungsstärker und ausgereifter, behält dabei den reinen Fahrspaß des Originals.'
    },
    NC: {
      name: 'Dritte Generation',
      description: 'Der moderne Klassiker. Zeitgenössisches Design, fortschrittliche Sicherheit und optionales einziehbares Hardtop.'
    },
    ND: {
      name: 'Vierte Generation',
      description: 'Zurück zu den Basics mit moderner Raffinesse. Skyactiv-Technologie bietet NA-ähnliches Gewicht mit zeitgenössischer Leistung.'
    }
  },
  fr: {
    NA: {
      name: 'Première Génération',
      description: 'L\'original et le plus pur. Léger, agile et parfaitement équilibré avec des phares pop-up iconiques et tout en manuel.'
    },
    NB: {
      name: 'Seconde Génération',
      description: 'L\'évolution raffinée. Plus puissante et sophistiquée tout en conservant l\'esprit de conduite pur de l\'original.'
    },
    NC: {
      name: 'Troisième Génération',
      description: 'Le classique moderne. Design contemporain, sécurité avancée et toit rigide rétractable en option.'
    },
    ND: {
      name: 'Quatrième Génération',
      description: 'Retour aux bases avec sophistication moderne. La technologie Skyactiv offre un poids similaire à la NA avec des performances contemporaines.'
    }
  }
};

// Function to get localized generations
export function getLocalizedGenerations(locale: Locale): LocalizedGeneration[] {
  return baseGenerations.map(gen => ({
    ...gen,
    name: generationContent[locale][gen.code].name,
    description: generationContent[locale][gen.code].description
  }));
}

// Legacy export for backward compatibility
export const generations = baseGenerations.map(gen => ({
  ...gen,
  name: generationContent.en[gen.code].name,
  description: generationContent.en[gen.code].description
}));
