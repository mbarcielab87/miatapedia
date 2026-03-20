export interface SpecialEdition {
  year: number;
  name: string;
  generation: 'NA' | 'NB' | 'NC' | 'ND';
  slug: string;
}

export const specialEditions: SpecialEdition[] = [
  { year: 1991, name: 'British Racing Green', generation: 'NA', slug: '1991-british-racing-green' },
  { year: 1992, name: 'Black & Tan', generation: 'NA', slug: '1992-black-tan' },
  { year: 1993, name: 'Limited Edition Red', generation: 'NA', slug: '1993-limited-edition-red' },
  { year: 1994, name: 'R-Package', generation: 'NA', slug: '1994-r-package' },
  { year: 1995, name: 'M-Edition Merlot', generation: 'NA', slug: '1995-m-edition-merlot' },
  { year: 1996, name: 'M-Edition Starlight Blue', generation: 'NA', slug: '1996-m-edition-starlight-blue' },
  { year: 1997, name: 'STO Edition', generation: 'NA', slug: '1997-sto-edition' },
  { year: 1999, name: '10th Anniversary', generation: 'NB', slug: '1999-10th-anniversary' },
  { year: 2000, name: 'SE', generation: 'NB', slug: '2000-se' },
  { year: 2001, name: 'SE', generation: 'NB', slug: '2001-se' },
  { year: 2002, name: 'SE', generation: 'NB', slug: '2002-se' },
  { year: 2004, name: 'Mazdaspeed', generation: 'NB', slug: '2004-mazdaspeed' },
  { year: 2004, name: 'Shinsen', generation: 'NB', slug: '2004-shinsen' },
  { year: 2006, name: '3rd Gen Launch', generation: 'NC', slug: '2006-3rd-gen-launch' },
  { year: 2007, name: 'Grand Touring', generation: 'NC', slug: '2007-grand-touring' },
  { year: 2008, name: 'Special Edition', generation: 'NC', slug: '2008-special-edition' },
  { year: 2009, name: '20th Anniversary', generation: 'NC', slug: '2009-20th-anniversary' },
  { year: 2012, name: 'Spring Special', generation: 'NC', slug: '2012-spring-special' },
  { year: 2015, name: '25th Anniversary', generation: 'NC', slug: '2015-25th-anniversary' },
  { year: 2016, name: 'Launch Edition', generation: 'ND', slug: '2016-launch-edition' },
  { year: 2019, name: '30th Anniversary', generation: 'ND', slug: '2019-30th-anniversary' },
  { year: 2020, name: '100th Anniversary', generation: 'ND', slug: '2020-100th-anniversary' },
  { year: 2024, name: 'Aero Orange', generation: 'ND', slug: '2024-aero-orange' },
];
