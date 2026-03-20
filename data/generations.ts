export interface Generation {
  code: string;
  name: string;
  years: string;
  engine: string;
  power: string;
  weight: string;
  acceleration: string;
  accentColor: string;
  accentClass: string;
  description: string;
  specs: {
    engine: string;
    power: string;
    weight: string;
    production: string;
  };
}

export const generations: Generation[] = [
  {
    code: 'NA',
    name: 'First Generation',
    years: '1989 — 1997',
    engine: '1.6L / 1.8L I4',
    power: '116 — 133 hp',
    weight: '940 kg',
    acceleration: '8.3s',
    accentColor: '#c41e3a',
    accentClass: 'bg-accent-red',
    description: 'The original and purest. Lightweight, nimble, and perfectly balanced with iconic pop-up headlights and manual everything.',
    specs: {
      engine: '1.6L B6-ZE / 1.8L BP-ZE',
      power: '116-133 hp',
      weight: '2,116-2,182 lbs',
      production: '431,000+ units',
    },
  },
  {
    code: 'NB',
    name: 'Second Generation',
    years: '1998 — 2005',
    engine: '1.6L / 1.8L I4',
    power: '110 — 146 hp',
    weight: '1,065 kg',
    acceleration: '7.9s',
    accentColor: '#c4a265',
    accentClass: 'bg-accent-gold',
    description: 'The refined evolution. More powerful and sophisticated while maintaining the pure driving spirit of the original.',
    specs: {
      engine: '1.6L BP-ZE / 1.8L BP-VE',
      power: '130-142 hp',
      weight: '2,293-2,403 lbs',
      production: '215,000+ units',
    },
  },
  {
    code: 'NC',
    name: 'Third Generation',
    years: '2005 — 2015',
    engine: '1.8L / 2.0L I4',
    power: '126 — 170 hp',
    weight: '1,130 kg',
    acceleration: '7.1s',
    accentColor: '#6a9fb5',
    accentClass: 'bg-accent-blue',
    description: 'The modern classic. Contemporary design, advanced safety, and optional power retractable hardtop.',
    specs: {
      engine: '2.0L MZR LF-VE/VD',
      power: '158-167 hp',
      weight: '2,447-2,480 lbs',
      production: '320,000+ units',
    },
  },
  {
    code: 'ND',
    name: 'Fourth Generation',
    years: '2015 — Present',
    engine: '1.5L / 2.0L I4',
    power: '131 — 184 hp',
    weight: '1,000 kg',
    acceleration: '6.1s',
    accentColor: '#7cb342',
    accentClass: 'bg-accent-green',
    description: 'Back to basics with modern sophistication. Skyactiv technology delivers NA-like weight with contemporary performance.',
    specs: {
      engine: '2.0L Skyactiv-G',
      power: '155-181 hp',
      weight: '2,332-2,445 lbs',
      production: '350,000+ units',
    },
  },
];
