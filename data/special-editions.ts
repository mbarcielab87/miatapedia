import type { Locale } from '@/lib/i18n/config';

export interface LocalizedText {
  en: string;
  es: string;
  pt: string;
  de: string;
  fr: string;
}

export interface SpecialEdition {
  slug: string;
  title: LocalizedText;
  generation: 'NA' | 'NB' | 'NC' | 'ND';
  year: string;
  production: LocalizedText;
  rarity: LocalizedText;
  significance: LocalizedText;
  color: string;
  description: LocalizedText;
  keyFeatures: LocalizedText[];
  currentValue: string;
}

export const specialEditions: SpecialEdition[] = [
  {
    slug: '1991-british-racing-green',
    title: {
      en: 'British Racing Green (1991)',
      es: 'British Racing Green (1991)',
      pt: 'British Racing Green (1991)',
      de: 'British Racing Green (1991)',
      fr: 'British Racing Green (1991)'
    },
    generation: 'NA',
    year: '1991',
    production: {
      en: '4,000 units',
      es: '4,000 unidades',
      pt: '4,000 unidades',
      de: '4,000 Einheiten',
      fr: '4,000 unités'
    },
    rarity: {
      en: 'Rare',
      es: 'Raro',
      pt: 'Raro',
      de: 'Selten',
      fr: 'Rare'
    },
    significance: {
      en: 'First Official Special Edition',
      es: 'Primera Edición Especial Oficial',
      pt: 'Primeira Edição Especial Oficial',
      de: 'Erste Offizielle Sonderedition',
      fr: 'Première Édition Spéciale Officielle'
    },
    color: 'accent-red',
    description: {
      en: 'The very first MX-5 special edition that started the tradition. Iconic British Racing Green paint with tan leather interior.',
      es: 'La primera edición especial del MX-5 que inició la tradición. Icónica pintura British Racing Green con interior de cuero tostado.',
      pt: 'A primeira edição especial do MX-5 que iniciou a tradição. Icônica tinta British Racing Green com interior de couro bege.',
      de: 'Die allererste MX-5 Sonderedition, die die Tradition begründete. Ikonische British Racing Green Lackierung mit hellbraunem Lederinterieur.',
      fr: 'La toute première édition spéciale MX-5 qui a lancé la tradition. Peinture British Racing Green iconique avec intérieur en cuir beige.'
    },
    keyFeatures: [
      {
        en: 'British Racing Green paint',
        es: 'Pintura British Racing Green',
        pt: 'Tinta British Racing Green',
        de: 'British Racing Green Lackierung',
        fr: 'Peinture British Racing Green'
      },
      {
        en: 'Tan leather interior',
        es: 'Interior de cuero tostado',
        pt: 'Interior de couro bege',
        de: 'Hellbraunes Lederinterieur',
        fr: 'Intérieur en cuir beige'
      },
      {
        en: 'Wood-rimmed steering wheel',
        es: 'Volante con reborde de madera',
        pt: 'Volante com aro de madeira',
        de: 'Holzlenkrad',
        fr: 'Volant cerclé de bois'
      },
      {
        en: 'Special badges',
        es: 'Insignias especiales',
        pt: 'Distintivos especiais',
        de: 'Spezielle Embleme',
        fr: 'Badges spéciaux'
      }
    ],
    currentValue: '$15,000 - $25,000'
  },
  {
    slug: '1999-10th-anniversary',
    title: {
      en: '10th Anniversary (1999)',
      es: '10° Aniversario (1999)',
      pt: '10° Aniversário (1999)',
      de: '10. Jubiläum (1999)',
      fr: '10ème Anniversaire (1999)'
    },
    generation: 'NB',
    year: '1999',
    production: {
      en: '7,500 units',
      es: '7,500 unidades',
      pt: '7,500 unidades',
      de: '7,500 Einheiten',
      fr: '7,500 unités'
    },
    rarity: {
      en: 'Limited',
      es: 'Limitado',
      pt: 'Limitado',
      de: 'Limitiert',
      fr: 'Limité'
    },
    significance: {
      en: 'Decade Celebration',
      es: 'Celebración de Década',
      pt: 'Celebração de Década',
      de: 'Jahrzehnt-Jubiläum',
      fr: 'Célébration de Décennie'
    },
    color: 'accent-gold',
    description: {
      en: 'Celebrating 10 years of MX-5 magic with exclusive Sapphire Blue Mica paint and premium appointments.',
      es: 'Celebrando 10 años de magia MX-5 con pintura exclusiva Sapphire Blue Mica y equipamiento premium.',
      pt: 'Celebrando 10 anos de magia MX-5 com tinta exclusiva Sapphire Blue Mica e acabamentos premium.',
      de: 'Feier von 10 Jahren MX-5 Magie mit exklusiver Sapphire Blue Mica Lackierung und Premium-Ausstattung.',
      fr: 'Célébrant 10 ans de magie MX-5 avec une peinture exclusive Sapphire Blue Mica et des équipements haut de gamme.'
    },
    keyFeatures: [
      {
        en: 'Sapphire Blue Mica paint',
        es: 'Pintura Sapphire Blue Mica',
        pt: 'Tinta Sapphire Blue Mica',
        de: 'Sapphire Blue Mica Lackierung',
        fr: 'Peinture Sapphire Blue Mica'
      },
      {
        en: 'Blue/black leather',
        es: 'Cuero azul/negro',
        pt: 'Couro azul/preto',
        de: 'Blaues/schwarzes Leder',
        fr: 'Cuir bleu/noir'
      },
      {
        en: '6-speed transmission',
        es: 'Transmisión de 6 velocidades',
        pt: 'Transmissão de 6 velocidades',
        de: '6-Gang Getriebe',
        fr: 'Transmission 6 vitesses'
      },
      {
        en: 'Bilstein shocks',
        es: 'Amortiguadores Bilstein',
        pt: 'Amortecedores Bilstein',
        de: 'Bilstein Stoßdämpfer',
        fr: 'Amortisseurs Bilstein'
      }
    ],
    currentValue: '$12,000 - $20,000'
  },
  {
    slug: '2004-mazdaspeed',
    title: {
      en: 'Mazdaspeed MX-5 (2004)',
      es: 'Mazdaspeed MX-5 (2004)',
      pt: 'Mazdaspeed MX-5 (2004)',
      de: 'Mazdaspeed MX-5 (2004)',
      fr: 'Mazdaspeed MX-5 (2004)'
    },
    generation: 'NB',
    year: '2004',
    production: {
      en: '5,428 units',
      es: '5,428 unidades',
      pt: '5,428 unidades',
      de: '5,428 Einheiten',
      fr: '5,428 unités'
    },
    rarity: {
      en: 'Very Rare',
      es: 'Muy Raro',
      pt: 'Muito Raro',
      de: 'Sehr Selten',
      fr: 'Très Rare'
    },
    significance: {
      en: 'Factory Turbocharged',
      es: 'Turbo de Fábrica',
      pt: 'Turbo de Fábrica',
      de: 'Werks-Turbolader',
      fr: 'Turbo d\'Usine'
    },
    color: 'accent-blue',
    description: {
      en: 'The only factory-turbocharged MX-5 ever produced. A true unicorn with 178 HP and aggressive aero.',
      es: 'El único MX-5 con turbo de fábrica jamás producido. Un verdadero unicornio con 178 HP y aerodinámica agresiva.',
      pt: 'O único MX-5 turbo de fábrica já produzido. Um verdadeiro unicórnio com 178 HP e aerodinâmica agressiva.',
      de: 'Der einzige jemals produzierte MX-5 mit Werks-Turbolader. Ein wahrer Unicorn mit 178 PS und aggressiver Aerodynamik.',
      fr: 'Le seul MX-5 turbocompressé d\'usine jamais produit. Une vraie licorne avec 178 chevaux et un aérodynamisme agressif.'
    },
    keyFeatures: [
      {
        en: 'Turbocharged engine (178 HP)',
        es: 'Motor turbo (178 HP)',
        pt: 'Motor turbo (178 HP)',
        de: 'Turbo-Motor (178 PS)',
        fr: 'Moteur turbocompressé (178 ch)'
      },
      {
        en: 'Racing Beat exhaust',
        es: 'Escape Racing Beat',
        pt: 'Escape Racing Beat',
        de: 'Racing Beat Auspuff',
        fr: 'Échappement Racing Beat'
      },
      {
        en: 'Unique aero kit',
        es: 'Kit aerodinámico único',
        pt: 'Kit aerodinâmico único',
        de: 'Einzigartiges Aero-Kit',
        fr: 'Kit aérodynamique unique'
      },
      {
        en: '6-speed manual only',
        es: 'Solo manual de 6 velocidades',
        pt: 'Apenas manual de 6 velocidades',
        de: 'Nur 6-Gang Schaltgetriebe',
        fr: 'Manuel 6 vitesses uniquement'
      }
    ],
    currentValue: '$20,000 - $35,000'
  },
  {
    slug: '2019-30th-anniversary',
    title: {
      en: '30th Anniversary (2019)',
      es: '30° Aniversario (2019)',
      pt: '30° Aniversário (2019)',
      de: '30. Jubiläum (2019)',
      fr: '30ème Anniversaire (2019)'
    },
    generation: 'ND',
    year: '2019',
    production: {
      en: '3,000 units worldwide',
      es: '3,000 unidades mundialmente',
      pt: '3,000 unidades mundialmente',
      de: '3,000 Einheiten weltweit',
      fr: '3,000 unités dans le monde'
    },
    rarity: {
      en: 'Very Limited',
      es: 'Muy Limitado',
      pt: 'Muito Limitado',
      de: 'Sehr Limitiert',
      fr: 'Très Limité'
    },
    significance: {
      en: 'Three Decades of Joy',
      es: 'Tres Décadas de Alegría',
      pt: 'Três Décadas de Alegria',
      de: 'Drei Jahrzehnte Freude',
      fr: 'Trois Décennies de Joie'
    },
    color: 'accent-green',
    description: {
      en: 'Honoring 30 years of pure driving joy with Racing Orange paint and premium Recaro seats.',
      es: 'Honrando 30 años de pura alegría de conducir con pintura Racing Orange y asientos Recaro premium.',
      pt: 'Honrando 30 anos de pura alegria de dirigir com tinta Racing Orange e bancos Recaro premium.',
      de: 'Ehrung von 30 Jahren purer Fahrfreude mit Racing Orange Lackierung und Premium Recaro-Sitzen.',
      fr: 'Honorant 30 ans de pur plaisir de conduite avec une peinture Racing Orange et des sièges Recaro haut de gamme.'
    },
    keyFeatures: [
      {
        en: 'Racing Orange paint',
        es: 'Pintura Racing Orange',
        pt: 'Tinta Racing Orange',
        de: 'Racing Orange Lackierung',
        fr: 'Peinture Racing Orange'
      },
      {
        en: 'Recaro seats',
        es: 'Asientos Recaro',
        pt: 'Bancos Recaro',
        de: 'Recaro-Sitze',
        fr: 'Sièges Recaro'
      },
      {
        en: 'Bilstein dampers',
        es: 'Amortiguadores Bilstein',
        pt: 'Amortecedores Bilstein',
        de: 'Bilstein Dämpfer',
        fr: 'Amortisseurs Bilstein'
      },
      {
        en: 'Brembo brakes',
        es: 'Frenos Brembo',
        pt: 'Freios Brembo',
        de: 'Brembo Bremsen',
        fr: 'Freins Brembo'
      }
    ],
    currentValue: '$35,000 - $45,000'
  },
  {
    slug: '2020-100th-anniversary',
    title: {
      en: '100th Anniversary (2020)',
      es: '100° Aniversario (2020)',
      pt: '100° Aniversário (2020)',
      de: '100. Jubiläum (2020)',
      fr: '100ème Anniversaire (2020)'
    },
    generation: 'ND',
    year: '2020',
    production: {
      en: '1,000 units (USA)',
      es: '1,000 unidades (EE.UU.)',
      pt: '1,000 unidades (EUA)',
      de: '1,000 Einheiten (USA)',
      fr: '1,000 unités (États-Unis)'
    },
    rarity: {
      en: 'Extremely Rare',
      es: 'Extremadamente Raro',
      pt: 'Extremamente Raro',
      de: 'Extrem Selten',
      fr: 'Extrêmement Rare'
    },
    significance: {
      en: 'Mazda Centennial',
      es: 'Centenario de Mazda',
      pt: 'Centenário da Mazda',
      de: 'Mazda Zentenarfeier',
      fr: 'Centenaire de Mazda'
    },
    color: 'accent-red',
    description: {
      en: 'Celebrating Mazda\'s 100th anniversary with exclusive Snowflake White Pearl and burgundy details.',
      es: 'Celebrando el 100° aniversario de Mazda con exclusivo Snowflake White Pearl y detalles borgoña.',
      pt: 'Celebrando o 100° aniversário da Mazda com exclusivo Snowflake White Pearl e detalhes bordô.',
      de: 'Feier von Mazdas 100. Jubiläum mit exklusivem Snowflake White Pearl und bordeauxroten Details.',
      fr: 'Célébrant le 100ème anniversaire de Mazda avec un Snowflake White Pearl exclusif et des détails bordeaux.'
    },
    keyFeatures: [
      {
        en: 'Snowflake White Pearl paint',
        es: 'Pintura Snowflake White Pearl',
        pt: 'Tinta Snowflake White Pearl',
        de: 'Snowflake White Pearl Lackierung',
        fr: 'Peinture Snowflake White Pearl'
      },
      {
        en: 'Burgundy soft top',
        es: 'Capota suave borgoña',
        pt: 'Capota soft top bordô',
        de: 'Bordeauxrotes Stoffverdeck',
        fr: 'Capote souple bordeaux'
      },
      {
        en: 'Special wheels',
        es: 'Llantas especiales',
        pt: 'Rodas especiais',
        de: 'Spezielle Felgen',
        fr: 'Roues spéciales'
      },
      {
        en: '100th Anniversary badges',
        es: 'Insignias de 100° Aniversario',
        pt: 'Distintivos de 100° Aniversário',
        de: '100. Jubiläums-Embleme',
        fr: 'Badges 100ème Anniversaire'
      }
    ],
    currentValue: '$40,000 - $55,000'
  }
];

export interface EditionCategory {
  category: LocalizedText;
  count: string;
  description: LocalizedText;
  examples: LocalizedText[];
}

export const editionCategories: EditionCategory[] = [
  {
    category: {
      en: 'Anniversary Editions',
      es: 'Ediciones de Aniversario',
      pt: 'Edições de Aniversário',
      de: 'Jubiläums-Editionen',
      fr: 'Éditions Anniversaire'
    },
    count: '15+',
    description: {
      en: 'Celebrating milestones in MX-5 and Mazda history',
      es: 'Celebrando hitos en la historia del MX-5 y Mazda',
      pt: 'Celebrando marcos na história do MX-5 e Mazda',
      de: 'Feier von Meilensteinen in der MX-5 und Mazda Geschichte',
      fr: 'Célébrant les jalons de l\'histoire MX-5 et Mazda'
    },
    examples: [
      {
        en: '10th Anniversary',
        es: '10° Aniversario',
        pt: '10° Aniversário',
        de: '10. Jubiläum',
        fr: '10ème Anniversaire'
      },
      {
        en: '30th Anniversary',
        es: '30° Aniversario',
        pt: '30° Aniversário',
        de: '30. Jubiläum',
        fr: '30ème Anniversaire'
      },
      {
        en: '100th Anniversary',
        es: '100° Aniversario',
        pt: '100° Aniversário',
        de: '100. Jubiläum',
        fr: '100ème Anniversaire'
      }
    ]
  },
  {
    category: {
      en: 'Color Specials',
      es: 'Especiales de Color',
      pt: 'Especiais de Cor',
      de: 'Farb-Specials',
      fr: 'Spéciaux Couleur'
    },
    count: '40+',
    description: {
      en: 'Unique paint colors and interior combinations',
      es: 'Colores de pintura únicos y combinaciones de interior',
      pt: 'Cores de tinta únicas e combinações de interior',
      de: 'Einzigartige Lackfarben und Interieur-Kombinationen',
      fr: 'Couleurs de peinture uniques et combinaisons d\'intérieur'
    },
    examples: [
      {
        en: 'British Racing Green',
        es: 'British Racing Green',
        pt: 'British Racing Green',
        de: 'British Racing Green',
        fr: 'British Racing Green'
      },
      {
        en: 'Brilliant Black',
        es: 'Negro Brillante',
        pt: 'Preto Brilhante',
        de: 'Brillant Schwarz',
        fr: 'Noir Brillant'
      },
      {
        en: 'Velocity Red',
        es: 'Rojo Velocity',
        pt: 'Vermelho Velocity',
        de: 'Velocity Rot',
        fr: 'Rouge Velocity'
      }
    ]
  },
  {
    category: {
      en: 'Performance Editions',
      es: 'Ediciones de Performance',
      pt: 'Edições de Performance',
      de: 'Performance-Editionen',
      fr: 'Éditions Performance'
    },
    count: '25+',
    description: {
      en: 'Enhanced performance and handling packages',
      es: 'Paquetes de rendimiento y manejo mejorados',
      pt: 'Pacotes de performance e manuseio aprimorados',
      de: 'Verbesserte Leistungs- und Fahrwerkspakete',
      fr: 'Packages de performance et de maniabilité améliorés'
    },
    examples: [
      {
        en: 'Mazdaspeed',
        es: 'Mazdaspeed',
        pt: 'Mazdaspeed',
        de: 'Mazdaspeed',
        fr: 'Mazdaspeed'
      },
      {
        en: 'Club Sport',
        es: 'Club Sport',
        pt: 'Club Sport',
        de: 'Club Sport',
        fr: 'Club Sport'
      },
      {
        en: 'R-Package',
        es: 'Paquete-R',
        pt: 'Pacote-R',
        de: 'R-Paket',
        fr: 'Package-R'
      }
    ]
  },
  {
    category: {
      en: 'Regional Exclusives',
      es: 'Exclusivos Regionales',
      pt: 'Exclusivos Regionais',
      de: 'Regional Exklusive',
      fr: 'Exclusifs Régionaux'
    },
    count: '40+',
    description: {
      en: 'Market-specific editions for different regions',
      es: 'Ediciones específicas para diferentes regiones',
      pt: 'Edições específicas para diferentes regiões',
      de: 'Marktspezifische Editionen für verschiedene Regionen',
      fr: 'Éditions spécifiques au marché pour différentes régions'
    },
    examples: [
      {
        en: 'J-Limited',
        es: 'J-Limited',
        pt: 'J-Limited',
        de: 'J-Limited',
        fr: 'J-Limited'
      },
      {
        en: 'Europe-only',
        es: 'Solo Europa',
        pt: 'Apenas Europa',
        de: 'Nur Europa',
        fr: 'Europe uniquement'
      },
      {
        en: 'JDM Specials',
        es: 'Especiales JDM',
        pt: 'Especiais JDM',
        de: 'JDM Specials',
        fr: 'Spéciaux JDM'
      }
    ]
  }
];
