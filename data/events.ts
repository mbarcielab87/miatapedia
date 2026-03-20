export interface Event {
  name: string;
  country: string;
  countryCode: string;
  url?: string;
  type: 'Major International' | 'Regional' | 'Racing Series' | 'Club Event';
  description?: string;
  frequency?: string;
}

export const events: Event[] = [
  // Major International
  { name: 'Miatas at the Gap (MATG)', country: 'United States', countryCode: 'US', type: 'Major International', description: '~1500 Miatas, Tail of the Dragon, annual', frequency: 'Annual' },
  { name: 'MiataCon (Lime Rock)', country: 'United States', countryCode: 'US', url: 'https://limerock.com/events/miatacon/', type: 'Major International', description: 'Convention at Lime Rock Park', frequency: 'Annual' },
  { name: 'MX-5 Cup (IMSA)', country: 'United States', countryCode: 'US', url: 'https://www.mx-5cup.com/schedule', type: 'Racing Series', description: 'Professional racing championship' },
  { name: 'MX-5 National Rally', country: 'United Kingdom', countryCode: 'GB', url: 'https://www.nationalrally.co.uk/', type: 'Major International', description: 'UK annual rally, international participation', frequency: 'Annual' },
  { name: 'MX-5 Owners Club Events', country: 'United Kingdom', countryCode: 'GB', url: 'https://mx5oc.co.uk/areas-events/', type: 'Club Event', description: 'Regional UK events' },

  // Regional
  { name: 'MiataXpress', country: 'Spain', countryCode: 'ES', url: 'https://miataxpress.com', type: 'Regional' },
  { name: 'Puget Sound Miata Club Events', country: 'United States', countryCode: 'US', url: 'https://pugetsoundmiataclub.org/PSMCeventCalendar/', type: 'Regional', description: 'Washington State' },
  { name: 'MX-5 Club of Victoria Events', country: 'Australia', countryCode: 'AU', url: 'https://mx5vic.org.au/home/social-events/', type: 'Regional', description: 'Victoria, Australia' },
  { name: 'NSW MX-5 Club Events', country: 'Australia', countryCode: 'AU', url: 'https://nsw.mx5.com.au/events', type: 'Regional', description: 'New South Wales, Australia' },
];
