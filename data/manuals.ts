export interface Manual {
  title: string;
  url: string;
  type: 'Service Manual' | 'Wiring Diagram' | 'Interactive Manual' | 'Resource Collection';
  generations: string[];
  description?: string;
}

export const manuals: Manual[] = [
  // Complete Service Manuals
  { title: 'Mellens - Factory Manuals', url: 'https://www.mellens.net/mazda/', type: 'Service Manual', generations: ['NA', 'NB', 'NC'], description: 'PDFs, wiring diagrams' },
  { title: '1990 Workshop Manual', url: 'https://archive.org/details/1990-mazda-mx-5-miata-workshop-manual', type: 'Service Manual', generations: ['NA'], description: 'PDF on Archive.org' },
  { title: 'MX5Manual (ND)', url: 'https://www.mx5manual.com/menu.html?p=wiring', type: 'Interactive Manual', generations: ['ND'], description: 'Interactive online manual' },

  // Wiring Diagrams
  { title: 'Mellens NA 1991 Wiring', url: 'https://www.mellens.net/mazda/Mazda-Miata-1991-1993/1991_wiring.pdf', type: 'Wiring Diagram', generations: ['NA'], description: '1991-1993' },
  { title: 'Mellens NB 2001 Wiring', url: 'https://www.mellens.net/mazda/mazda_miata_extra_manual/2001_wiring.pdf', type: 'Wiring Diagram', generations: ['NB'], description: '2001' },
  { title: 'Mellens NB 2005 Wiring', url: 'https://www.mellens.net/mazda/Mazda-Miata-2005/wiring.pdf', type: 'Wiring Diagram', generations: ['NB'], description: '2005' },
  { title: 'NC 2009 Wiring (EU)', url: 'https://static1.1.sqspcdn.com/static/f/341469/24622108/1395761779357/mazda_mx5_wiring_diagram_011020094.pdf', type: 'Wiring Diagram', generations: ['NC'], description: '2009 European' },
  { title: 'MX5Manual ND Wiring', url: 'https://www.mx5manual.com/page.html?docid=SM356500&p=wiring&s=wr001', type: 'Wiring Diagram', generations: ['ND'], description: 'Interactive ND wiring' },
  { title: 'MiataForumz 1990-2002', url: 'https://www.miataforumz.com/how-40/mazda-miata-wiring-diagrams-1990-2002-a-497/', type: 'Wiring Diagram', generations: ['NA', 'NB'], description: 'NA/NB compilation' },

  // Additional Resources
  { title: 'Mighty5s Compilation', url: 'https://mighty5s.com/thread/3506/mx5-wiring-diagrams', type: 'Resource Collection', generations: ['NA', 'NB', 'NC'] },
  { title: 'MX-5 OC Forum NC', url: 'https://forum.mx5oc.co.uk/t/nc-wiring-diagrams/88332', type: 'Resource Collection', generations: ['NC'] },
  { title: 'FixMyCarInfo NC', url: 'https://fixmycarinfo.com/mazda/mx-5-nc/mazda-mx-5-nc-01-2009-08-2012-wiring-diagrams/', type: 'Resource Collection', generations: ['NC'], description: '2009-2012' },
];
