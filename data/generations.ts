export interface Generation {
  code: string;
  name: string;
  years: string;
  engine: string;
  power: string;
  weight: string;
  acceleration: string;
  accentColor: string;
}

export const generations: Generation[] = [
  {
    code: 'NA',
    name: 'NA',
    years: '1989 — 1997',
    engine: '1.6L / 1.8L I4',
    power: '116 — 133 hp',
    weight: '940 kg',
    acceleration: '8.3s',
    accentColor: '#c41e3a',
  },
  {
    code: 'NB',
    name: 'NB',
    years: '1998 — 2005',
    engine: '1.6L / 1.8L I4',
    power: '110 — 146 hp',
    weight: '1,065 kg',
    acceleration: '7.9s',
    accentColor: '#c4a265',
  },
  {
    code: 'NC',
    name: 'NC',
    years: '2005 — 2015',
    engine: '1.8L / 2.0L I4',
    power: '126 — 170 hp',
    weight: '1,130 kg',
    acceleration: '7.1s',
    accentColor: '#6a9fb5',
  },
  {
    code: 'ND',
    name: 'ND',
    years: '2015 — Present',
    engine: '1.5L / 2.0L I4',
    power: '131 — 184 hp',
    weight: '1,000 kg',
    acceleration: '6.1s',
    accentColor: '#7cb342',
  },
];
