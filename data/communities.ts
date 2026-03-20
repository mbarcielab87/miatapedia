export interface Community {
  name: string;
  url: string;
  platform: 'Reddit' | 'Discord' | 'Facebook' | 'Forum';
  focus?: string;
  members?: string;
  description?: string;
}

export const communities: Community[] = [
  // Reddit
  { name: 'r/Miata', url: 'https://www.reddit.com/r/Miata/', platform: 'Reddit', members: '400k+', description: 'The largest online MX-5 community' },
  { name: 'r/MX5', url: 'https://www.reddit.com/r/mx5/', platform: 'Reddit', members: 'Smaller', description: 'Alternative Miata subreddit' },
  { name: 'r/Miata_irl', url: 'https://www.reddit.com/r/Miata_irl/', platform: 'Reddit', focus: 'Memes', description: 'Miata memes and humor' },

  // Discord
  { name: 'The United MX-5 Kingdom', url: '#', platform: 'Discord', focus: 'UK-based, worldwide', description: 'UK-focused Discord with guides and meets' },
  { name: 'Miata Land', url: '#', platform: 'Discord', focus: 'Technical help', description: 'Project car support and technical advice' },
  { name: 'Mazda Miata Car Club', url: '#', platform: 'Discord', focus: 'General', description: 'All builds welcome, general discussion' },
  { name: 'Mazda Enthusiasts', url: '#', platform: 'Discord', focus: 'Broader Mazda', description: 'All Mazda models including MX-5' },

  // Forums
  { name: 'Miata.net Forum', url: 'https://forum.miata.net/vb/', platform: 'Forum', members: '1.4M visits/month', description: 'Largest global forum, since 1994', focus: 'All generations' },
  { name: 'MiataTurbo.net', url: 'https://www.miataturbo.net/', platform: 'Forum', members: '50k+ members', description: 'Forced induction focus', focus: 'Performance' },
  { name: 'ClubRoadster', url: 'https://www.clubroadster.net/', platform: 'Forum', members: 'Active', description: 'General forum with classifieds' },
  { name: 'MiataForumz', url: 'https://www.miataforumz.com/', platform: 'Forum', members: 'Active', description: 'All gens + V8 swaps', focus: 'General + Swaps' },
  { name: 'MX5World', url: 'https://www.mx5world.com/', platform: 'Forum', members: 'Active', description: 'General + car registry' },
  { name: 'MX-5 Life', url: 'https://www.mx5life.com/', platform: 'Forum', members: 'Active', description: 'UK-focused general forum' },
  { name: 'MX-5 Nutz', url: 'https://www.mx5nutz.com/', platform: 'Forum', members: 'Active', description: 'UK technical forum' },
  { name: 'MX-5 Owners Club Forum', url: 'https://forum.mx5oc.co.uk/', platform: 'Forum', members: 'Active', description: 'UK official club forum' },
  { name: 'MX5Cartalk', url: 'https://mx5.net.au/', platform: 'Forum', members: 'Active', description: 'Australia/New Zealand main forum' },

  // Facebook Groups
  { name: 'Club Miata México', url: 'https://www.facebook.com/clubmiatamexico/', platform: 'Facebook', focus: 'Mexico' },
  { name: 'Miata Club Argentina', url: 'https://www.facebook.com/groups/2073823302935046/', platform: 'Facebook', focus: 'Argentina' },
  { name: 'Miata Club Singapore', url: 'https://www.facebook.com/groups/5736449818/', platform: 'Facebook', focus: 'Singapore' },
  { name: 'MX-5 Owners Club Gauteng', url: 'https://www.facebook.com/groups/mx5ownersclubgauteng/', platform: 'Facebook', focus: 'South Africa - Gauteng' },
  { name: 'Miata Roadster Club Thailand', url: 'https://www.facebook.com/groups/325044978488263/', platform: 'Facebook', focus: 'Thailand' },
];
