export interface Club {
  name: string;
  url: string;
  country: string;
  countryCode: string;
  region?: string;
  type: 'Club' | 'Forum' | 'Community' | 'Facebook' | 'Instagram';
  language?: string;
}

export const clubs: Club[] = [
  // EUROPE - Spain
  { name: 'MX-5 Club Spain Forum', url: 'https://www.mx5forum.es/', country: 'Spain', countryCode: 'ES', type: 'Forum', language: 'Spanish' },
  { name: 'Miatapasion Forums', url: 'https://www.miatapasion.com/foros/', country: 'Spain', countryCode: 'ES', type: 'Forum', language: 'Spanish' },
  { name: 'MiataXpress', url: 'https://miataxpress.com', country: 'Spain', countryCode: 'ES', type: 'Community', language: 'Spanish' },

  // EUROPE - United Kingdom
  { name: 'MX-5 Owners Club (Official)', url: 'https://forum.mx5oc.co.uk/', country: 'United Kingdom', countryCode: 'GB', type: 'Forum' },
  { name: 'MX-5 Life', url: 'https://www.mx5life.com/', country: 'United Kingdom', countryCode: 'GB', type: 'Forum' },
  { name: 'MX-5 Nutz', url: 'https://www.mx5nutz.com/', country: 'United Kingdom', countryCode: 'GB', type: 'Forum' },

  // EUROPE - Germany
  { name: 'mx-5.de Forum', url: 'https://www.mx-5.de/', country: 'Germany', countryCode: 'DE', type: 'Forum' },

  // EUROPE - France
  { name: 'MX-5 Passion', url: 'https://www.mx5passion.com/', country: 'France', countryCode: 'FR', type: 'Forum' },

  // EUROPE - Portugal
  { name: 'Clube MX-5 Portugal', url: 'https://www.clubmx-5.com/', country: 'Portugal', countryCode: 'PT', type: 'Club' },

  // EUROPE - Netherlands
  { name: 'MX-5 Owners NL', url: 'https://www.mx5owners.nl/', country: 'Netherlands', countryCode: 'NL', type: 'Forum' },

  // EUROPE - Czech Republic
  { name: 'MX-5 Klub ČR', url: 'https://www.mx-5.biz/', country: 'Czech Republic', countryCode: 'CZ', type: 'Forum' },

  // EUROPE - Denmark
  { name: 'MX-5 Club Danmark', url: 'https://www.mx5club.dk/', country: 'Denmark', countryCode: 'DK', type: 'Club' },

  // EUROPE - Sweden
  { name: 'Miata Club of Sweden', url: 'https://www.mx-5.se/', country: 'Sweden', countryCode: 'SE', type: 'Club' },

  // EUROPE - Norway
  { name: 'MX-5 Miata Club Norway', url: 'https://www.mx5-miata.no/forum/', country: 'Norway', countryCode: 'NO', type: 'Forum' },

  // EUROPE - Ireland
  { name: 'MX-5 Ireland', url: 'https://www.mx5ireland.com/', country: 'Ireland', countryCode: 'IE', type: 'Forum' },

  // EUROPE - Greece
  { name: 'MyMX5.gr', url: 'https://www.mymx5.gr/', country: 'Greece', countryCode: 'GR', type: 'Forum' },

  // EUROPE - Slovakia
  { name: 'MX-5 Klub Slovensko', url: 'https://www.mx-5.sk/forum/', country: 'Slovakia', countryCode: 'SK', type: 'Forum' },

  // EUROPE - Slovenia
  { name: 'Mazda-si.net', url: 'https://www.mazda-si.net/', country: 'Slovenia', countryCode: 'SI', type: 'Forum' },

  // EUROPE - Turkey
  { name: 'MazdaClubTR', url: 'https://www.mazdaclubtr.com/forums/forum/204-mazda-mx-5/', country: 'Turkey', countryCode: 'TR', type: 'Forum' },

  // EUROPE - Ukraine
  { name: 'Miata Club Ukraine', url: 'https://www.instagram.com/miata.ukraine/', country: 'Ukraine', countryCode: 'UA', type: 'Instagram' },

  // AMERICAS - United States - National
  { name: 'Miata.net Forum', url: 'https://forum.miata.net/vb/', country: 'United States', countryCode: 'US', type: 'Forum', region: 'National' },
  { name: 'ClubRoadster', url: 'https://www.clubroadster.net/', country: 'United States', countryCode: 'US', type: 'Forum', region: 'National' },
  { name: 'MiataTurbo.net', url: 'https://www.miataturbo.net/', country: 'United States', countryCode: 'US', type: 'Forum', region: 'National' },
  { name: 'Miata Forumz', url: 'https://www.miataforumz.com/', country: 'United States', countryCode: 'US', type: 'Forum', region: 'National' },
  { name: 'MX5World', url: 'https://www.mx5world.com/', country: 'United States', countryCode: 'US', type: 'Forum', region: 'National' },

  // AMERICAS - United States - Regional
  { name: 'Mass Miata Club', url: 'https://massmiata.net/', country: 'United States', countryCode: 'US', region: 'Massachusetts', type: 'Club' },
  { name: 'San Diego Miata Club', url: 'https://www.sandiegomiataclub.org/', country: 'United States', countryCode: 'US', region: 'California', type: 'Club' },
  { name: 'DFW Miata', url: 'https://www.dfwmiata.com/', country: 'United States', countryCode: 'US', region: 'Texas', type: 'Club' },
  { name: 'Houston Miata Club', url: 'https://houstonmiataclub.com/', country: 'United States', countryCode: 'US', region: 'Texas', type: 'Club' },
  { name: 'Windy City Miata Club', url: 'https://www.windycitymiataclub.com/', country: 'United States', countryCode: 'US', region: 'Illinois', type: 'Club' },

  // AMERICAS - Canada
  { name: 'Club Miata Vancouver Island', url: 'https://clubmiata.net/', country: 'Canada', countryCode: 'CA', region: 'British Columbia', type: 'Club' },
  { name: 'Maritime Miata Club', url: 'https://www.maritimemiataclub.ca/', country: 'Canada', countryCode: 'CA', region: 'Atlantic', type: 'Club' },
  { name: 'Okanagan Valley Miata Club', url: 'https://www.okmiataclub.com/', country: 'Canada', countryCode: 'CA', region: 'British Columbia', type: 'Club' },
  { name: 'Sea to Sky Miata Club', url: 'https://seatoskymiataclub.ca/', country: 'Canada', countryCode: 'CA', region: 'British Columbia', type: 'Club' },

  // AMERICAS - Mexico
  { name: 'Club Miata México', url: 'https://www.facebook.com/clubmiatamexico/', country: 'Mexico', countryCode: 'MX', type: 'Facebook' },

  // AMERICAS - Argentina
  { name: 'Miata Club Argentina', url: 'https://www.facebook.com/groups/2073823302935046/', country: 'Argentina', countryCode: 'AR', type: 'Facebook' },

  // ASIA-PACIFIC - Japan
  { name: 'Roadster Club of Japan (RCOJ)', url: 'https://www.open-inc.co.jp/rcoj/', country: 'Japan', countryCode: 'JP', type: 'Club' },

  // ASIA-PACIFIC - Australia
  { name: 'MX5Cartalk', url: 'https://mx5.net.au/', country: 'Australia', countryCode: 'AU', type: 'Forum', region: 'National' },
  { name: 'MX-5 Club of NSW', url: 'https://nsw.mx5.com.au/', country: 'Australia', countryCode: 'AU', region: 'New South Wales', type: 'Club' },
  { name: 'MX-5 Club of Queensland', url: 'https://www.mx5clubqld.com.au/', country: 'Australia', countryCode: 'AU', region: 'Queensland', type: 'Club' },
  { name: 'MX-5 Club of Victoria & Tasmania', url: 'https://mx5vic.org.au/', country: 'Australia', countryCode: 'AU', region: 'VIC/TAS', type: 'Club' },
  { name: 'MX-5 Club of Western Australia', url: 'https://www.mx5club.com.au/', country: 'Australia', countryCode: 'AU', region: 'Western Australia', type: 'Club' },

  // ASIA-PACIFIC - New Zealand
  { name: 'MX-5 Club of New Zealand', url: 'https://mx5club.co.nz/', country: 'New Zealand', countryCode: 'NZ', type: 'Club' },
  { name: 'MX-5 Forum New Zealand', url: 'https://www.mx5forum.co.nz/', country: 'New Zealand', countryCode: 'NZ', type: 'Forum' },

  // ASIA-PACIFIC - Philippines
  { name: 'Miata Club Philippines', url: 'https://www.miataclub.ph/', country: 'Philippines', countryCode: 'PH', type: 'Club' },

  // ASIA-PACIFIC - Singapore
  { name: 'Miata Club Singapore', url: 'https://www.facebook.com/groups/5736449818/', country: 'Singapore', countryCode: 'SG', type: 'Facebook' },

  // ASIA-PACIFIC - Indonesia
  { name: 'Miata Roadster Club Indonesia', url: 'https://www.instagram.com/miata_roadster_club_indonesia/', country: 'Indonesia', countryCode: 'ID', type: 'Instagram' },

  // ASIA-PACIFIC - Thailand
  { name: 'Miata Roadster Club Thailand', url: 'https://www.facebook.com/groups/325044978488263/', country: 'Thailand', countryCode: 'TH', type: 'Facebook' },

  // AFRICA - South Africa
  { name: 'MX-5 Owners Club SA', url: 'https://www.mx5club.co.za/', country: 'South Africa', countryCode: 'ZA', type: 'Club' },
  { name: 'MX-5 Owners Club Gauteng', url: 'https://www.facebook.com/groups/mx5ownersclubgauteng/', country: 'South Africa', countryCode: 'ZA', region: 'Gauteng', type: 'Facebook' },
  { name: 'MX-5 Owners Club Western Cape', url: 'https://www.mx5wc.co.za/', country: 'South Africa', countryCode: 'ZA', region: 'Western Cape', type: 'Club' },
];

export const getClubsByCountry = () => {
  const byCountry: Record<string, Club[]> = {};
  clubs.forEach((club) => {
    if (!byCountry[club.country]) {
      byCountry[club.country] = [];
    }
    byCountry[club.country].push(club);
  });
  return byCountry;
};
