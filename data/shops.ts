export interface Shop {
  name: string;
  url: string;
  country: string;
  countryCode: string;
  category: 'OEM New' | 'OEM Used' | 'OEM + Aftermarket' | 'Performance' | 'Marketplace';
  generations: string[];
  shipping: string;
  specialty?: string;
}

export const shops: Shop[] = [
  // OEM Parts - New Original
  { name: 'MegaZip', url: 'https://www.megazip.net', country: 'Japan', countryCode: 'JP', category: 'OEM New', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide' },
  { name: 'Jim Ellis Mazda Parts', url: 'https://www.jimellismazdaparts.com/', country: 'United States', countryCode: 'US', category: 'OEM New', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA + International' },
  { name: 'MazdaShop', url: 'https://mazdashop.ca/', country: 'Canada', countryCode: 'CA', category: 'OEM New', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Canada + International' },
  { name: 'MazdaParts.org', url: 'https://mazdaparts.org', country: 'United States', countryCode: 'US', category: 'OEM New', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide' },

  // OEM + Aftermarket Mix
  { name: 'MX5Parts (Scimitar)', url: 'https://www.mx5parts.co.uk', country: 'United Kingdom', countryCode: 'GB', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide' },
  { name: 'IL Motorsport', url: 'https://www.ilmotorsport.de', country: 'Germany', countryCode: 'DE', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide' },
  { name: 'MX5 Mania', url: 'https://mx5mania.com.au', country: 'Australia', countryCode: 'AU', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'AU + Worldwide' },
  { name: 'Garage 5', url: 'https://www.garage5.net', country: 'New Zealand', countryCode: 'NZ', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'NZ + Worldwide' },
  { name: 'Miata Parts NZ', url: 'https://miataparts.co.nz', country: 'New Zealand', countryCode: 'NZ', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'NZ + Worldwide' },
  { name: 'Moss Miata', url: 'https://mossmiata.com', country: 'United States', countryCode: 'US', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA + Worldwide' },
  { name: 'Go Miata', url: 'https://www.gomiata.com', country: 'United States', countryCode: 'US', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA free shipping' },
  { name: 'TopMiata', url: 'https://www.topmiata.com', country: 'Worldwide', countryCode: 'WW', category: 'OEM + Aftermarket', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide' },

  // Used OEM Parts
  { name: 'Autolink MX5', url: 'https://autolinkmx5.com', country: 'United Kingdom', countryCode: 'GB', category: 'OEM Used', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide' },
  { name: 'MX5 Heaven', url: 'https://www.mx5heaven.co.uk', country: 'United Kingdom', countryCode: 'GB', category: 'OEM Used', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide' },
  { name: 'MX5 City', url: 'https://www.mx5city.com', country: 'United Kingdom', countryCode: 'GB', category: 'OEM Used', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide' },
  { name: 'Treasure Coast Miata', url: 'https://treasurecoastmiata.com', country: 'United States', countryCode: 'US', category: 'OEM Used', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA + Worldwide' },
  { name: 'Redline Auto Parts', url: 'https://www.redlineautoparts.com/mazda-miata/', country: 'United States', countryCode: 'US', category: 'OEM Used', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA + Worldwide' },
  { name: 'Planet Miata', url: 'https://planet-miata.com', country: 'United States', countryCode: 'US', category: 'OEM Used', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA + Worldwide' },

  // Performance - USA
  { name: "Flyin' Miata", url: 'https://flyinmiata.com', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide', specialty: 'Turbo kits, suspension, LS swaps — world leader' },
  { name: 'Good-Win Racing', url: 'https://www.good-win-racing.com', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide', specialty: 'Exhaust, brakes, suspension — track tested' },
  { name: 'Rspeed', url: 'https://www.rspeed.net', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide', specialty: 'General performance parts' },
  { name: 'Fab9 Tuning', url: 'https://fab9tuning.com', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA', specialty: 'Turbo/supercharger, ECU tuning' },
  { name: 'MiataSpeed', url: 'https://www.miataspeed.com', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA', specialty: 'Street/autocross/track' },
  { name: 'REV9 Autosport', url: 'https://rev9autosport.com', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide', specialty: 'JDM authentic parts, 1000+ items' },
  { name: 'Supermiata', url: 'https://supermiata.com', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA', specialty: 'Race-focused parts' },
  { name: 'Track Dog Racing', url: 'https://trackdogracing.com', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'USA', specialty: 'Hard Dog roll bars' },
  { name: 'JDMuscle', url: 'https://jdmuscleusa.com/collections/mazda-mx-5', country: 'United States', countryCode: 'US', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide', specialty: 'Aftermarket general' },

  // Performance - UK & Europe
  { name: 'BBR GTi', url: 'https://bbrgti.com', country: 'United Kingdom', countryCode: 'GB', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide', specialty: 'Turbo/supercharger kits — leading UK tuner' },
  { name: 'BOFI Racing', url: 'https://bofiracing.com', country: 'United Kingdom', countryCode: 'GB', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide', specialty: 'Turbo kits, coilovers, brakes' },
  { name: 'SkidNation', url: 'https://skidnation.com', country: 'United Kingdom', countryCode: 'GB', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Europe + Worldwide', specialty: 'Engine, cooling, chassis, track' },

  // Performance - Japan
  { name: 'Maruha Motors', url: 'https://www.maruhamotors.co.jp/miata/', country: 'Japan', countryCode: 'JP', category: 'Performance', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide', specialty: 'Tuning, accessories, all gens' },

  // Marketplaces
  { name: 'UP GARAGE', url: 'https://www.upgarage.com/en', country: 'Japan', countryCode: 'JP', category: 'Marketplace', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Worldwide via forwarders', specialty: 'Used parts marketplace' },
  { name: 'Yahoo! Auctions Japan', url: 'https://auctions.yahoo.co.jp/', country: 'Japan', countryCode: 'JP', category: 'Marketplace', generations: ['NA', 'NB', 'NC', 'ND'], shipping: 'Via Buyee/BigInJapan', specialty: 'Auction marketplace' },
];

export const getShopsByCategory = () => {
  const byCategory: Record<string, Shop[]> = {};
  shops.forEach((shop) => {
    if (!byCategory[shop.category]) {
      byCategory[shop.category] = [];
    }
    byCategory[shop.category].push(shop);
  });
  return byCategory;
};
