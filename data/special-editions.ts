export interface SpecialEdition {
  year: number;
  name: string;
  generation: 'NA' | 'NB' | 'NC' | 'ND';
  slug: string;
}

export const specialEditions: SpecialEdition[] = [
  { year: 1991, name: 'British Racing Green', generation: 'NA', slug: '1991-british-racing-green' },
  { year: 1999, name: '10th Anniversary', generation: 'NB', slug: '1999-10th-anniversary' },
  { year: 2004, name: 'Mazdaspeed MX-5', generation: 'NB', slug: '2004-mazdaspeed' },
  { year: 2019, name: '30th Anniversary', generation: 'ND', slug: '2019-30th-anniversary' },
  { year: 2020, name: '100th Anniversary', generation: 'ND', slug: '2020-100th-anniversary' },
];
