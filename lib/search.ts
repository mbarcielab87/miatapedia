import Fuse from 'fuse.js';
import { generations } from '@/data/generations';
import { specialEditions } from '@/data/special-editions';
import { shops } from '@/data/shops';
import { clubs } from '@/data/clubs';
import { communities } from '@/data/communities';
import { manuals } from '@/data/manuals';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: 'Generation' | 'Special Edition' | 'Shop' | 'Club' | 'Community' | 'Manual' | 'Content';
  tags: string[];
  generation?: string;
  relevance?: number;
}

// Build searchable index from all content
function buildSearchIndex(): SearchResult[] {
  const searchData: SearchResult[] = [];

  // Add generations
  generations.forEach(gen => {
    const slug = gen.code.toLowerCase();
    searchData.push({
      id: `gen-${slug}`,
      title: `${gen.name} (${gen.years})`,
      description: `${gen.name} generation MX-5 produced from ${gen.years}. Key features and specifications.`,
      url: `/en/generations/${slug}`,
      category: 'Generation',
      tags: [gen.name, gen.code, slug, gen.years, 'generation', 'mx5', 'miata'],
      generation: gen.code
    });
  });

  // Add special editions
  specialEditions.forEach(edition => {
    searchData.push({
      id: `edition-${edition.slug}`,
      title: `${edition.name} (${edition.year})`,
      description: `${edition.name} special edition MX-5 from ${edition.year}. ${edition.generation} generation limited production model.`,
      url: `/en/special-editions/${edition.slug}`,
      category: 'Special Edition',
      tags: [edition.name, edition.year.toString(), edition.generation, 'special', 'limited', 'edition'],
      generation: edition.generation
    });
  });

  // Add shops
  shops.forEach((shop, idx) => {
    searchData.push({
      id: `shop-${idx}`,
      title: shop.name,
      description: `${shop.category} shop in ${shop.country}. ${shop.specialty || 'MX-5 parts and accessories.'} Ships ${shop.shipping}.`,
      url: shop.url,
      category: 'Shop',
      tags: [
        shop.name.toLowerCase(),
        shop.country.toLowerCase(),
        shop.category.toLowerCase(),
        ...shop.generations.map(g => g.toLowerCase()),
        shop.shipping.toLowerCase(),
        'parts', 'shop', 'store'
      ],
      generation: shop.generations.join(', ')
    });
  });

  // Add clubs
  clubs.forEach((club, idx) => {
    searchData.push({
      id: `club-${idx}`,
      title: club.name,
      description: `MX-5 club in ${club.country}. ${club.type} offering local meetups and community activities.`,
      url: club.url,
      category: 'Club',
      tags: [
        club.name.toLowerCase(),
        club.country.toLowerCase(),
        club.type.toLowerCase(),
        'club', 'community', 'meetup', 'local'
      ]
    });
  });

  // Add online communities
  communities.forEach((community, idx) => {
    searchData.push({
      id: `community-${idx}`,
      title: community.name,
      description: `${community.platform} community for MX-5 enthusiasts. ${community.description || 'Online discussion and support.'} ${community.members || ''}`,
      url: community.url === '#' ? `/en/community` : community.url,
      category: 'Community',
      tags: [
        community.name.toLowerCase(),
        community.platform.toLowerCase(),
        community.focus?.toLowerCase() || '',
        'forum', 'community', 'online', 'discussion'
      ].filter(Boolean)
    });
  });

  // Add technical manuals
  manuals.forEach((manual, idx) => {
    searchData.push({
      id: `manual-${idx}`,
      title: manual.title,
      description: `${manual.type} for ${manual.generations.join(', ')} generations. ${manual.description || 'Technical documentation and service information.'}`,
      url: manual.url,
      category: 'Manual',
      tags: [
        manual.title.toLowerCase(),
        manual.type.toLowerCase(),
        ...manual.generations.map(g => g.toLowerCase()),
        'manual', 'technical', 'documentation', 'service', 'wiring'
      ],
      generation: manual.generations.join(', ')
    });
  });

  // Add popular content/topics (static content that people commonly search for)
  const popularContent = [
    {
      title: 'NA vs NB Differences',
      description: 'Complete comparison between NA and NB generations including engine differences, styling changes, and performance.',
      url: '/en/generations',
      tags: ['na', 'nb', 'differences', 'comparison', 'generation']
    },
    {
      title: 'Torsen LSD',
      description: 'Limited Slip Differential information, availability by year, and performance benefits.',
      url: '/en/generations',
      tags: ['torsen', 'lsd', 'differential', 'performance', 'handling']
    },
    {
      title: 'Mazdaspeed MX-5',
      description: 'Turbocharged Mazdaspeed MX-5 specifications, performance, and buying guide.',
      url: '/en/special-editions/2004-mazdaspeed',
      tags: ['mazdaspeed', 'turbo', 'turbocharged', 'performance', 'nb']
    },
    {
      title: 'Coilover Guide',
      description: 'Suspension modifications including popular coilover brands and setup recommendations.',
      url: '/en/mods/suspension',
      tags: ['coilovers', 'suspension', 'handling', 'modifications', 'performance']
    },
    {
      title: '1.6 vs 1.8 Engine',
      description: 'Comparison between NA6 1.6L and NA8 1.8L engines including power and reliability.',
      url: '/en/generations/na',
      tags: ['1.6', '1.8', 'engine', 'na6', 'na8', 'power', 'comparison']
    },
    {
      title: 'VIN Decoder',
      description: 'How to decode MX-5 VIN numbers to identify year, options, and specifications.',
      url: '/en/buying-guide',
      tags: ['vin', 'decode', 'identification', 'year', 'options', 'specs']
    },
    {
      title: 'Hard Top',
      description: 'Factory hardtop availability, installation, and aftermarket options.',
      url: '/en/mods',
      tags: ['hardtop', 'hard', 'top', 'factory', 'oem', 'convertible']
    },
    {
      title: 'Timing Belt',
      description: 'Timing belt maintenance schedules, replacement intervals, and DIY guides.',
      url: '/en/maintenance',
      tags: ['timing', 'belt', 'maintenance', 'schedule', 'replacement', 'diy']
    }
  ];

  popularContent.forEach((content, idx) => {
    searchData.push({
      id: `content-${idx}`,
      title: content.title,
      description: content.description,
      url: content.url,
      category: 'Content',
      tags: content.tags
    });
  });

  return searchData;
}

const searchIndex = buildSearchIndex();

// Fuse.js configuration for fuzzy search
const fuseOptions = {
  keys: [
    { name: 'title', weight: 2.0 },
    { name: 'description', weight: 1.0 },
    { name: 'tags', weight: 1.5 },
    { name: 'category', weight: 0.5 },
    { name: 'generation', weight: 1.0 }
  ],
  threshold: 0.4, // 0 = perfect match, 1 = match anything
  includeScore: true,
  includeMatches: true,
  minMatchCharLength: 2
};

const fuse = new Fuse(searchIndex, fuseOptions);

export function searchContent(query: string, limit: number = 20): SearchResult[] {
  if (!query.trim()) return [];

  const results = fuse.search(query, { limit });

  return results.map(result => ({
    ...result.item,
    relevance: result.score ? Math.round((1 - result.score) * 100) : 0
  }));
}

export function getSearchSuggestions(query: string): string[] {
  if (!query.trim()) return [];

  const results = searchContent(query, 5);
  return results.map(r => r.title);
}

export function getPopularSearches(): string[] {
  return [
    'NA vs NB differences',
    'Torsen LSD',
    'Mazdaspeed turbo',
    'Coilover guide',
    '1.6 vs 1.8 engine',
    'VIN decoder',
    'Hard top',
    'Timing belt'
  ];
}

export function getSearchStats() {
  const stats = {
    total: searchIndex.length,
    generations: searchIndex.filter(item => item.category === 'Generation').length,
    specialEditions: searchIndex.filter(item => item.category === 'Special Edition').length,
    shops: searchIndex.filter(item => item.category === 'Shop').length,
    clubs: searchIndex.filter(item => item.category === 'Club').length,
    communities: searchIndex.filter(item => item.category === 'Community').length,
    manuals: searchIndex.filter(item => item.category === 'Manual').length,
    content: searchIndex.filter(item => item.category === 'Content').length
  };

  return stats;
}