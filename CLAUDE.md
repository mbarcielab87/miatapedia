# MIATAPEDIA — Definitive Project Specification (v2)
# Rebuild from scratch — All previous issues corrected
# March 2026

---

## OVERVIEW

Build "Miatapedia" — a multilingual encyclopedia website about the Mazda MX-5 / Miata / Eunos Roadster.
This is a COMPLETE REBUILD of miatapedia.info. The previous version had critical i18n routing issues, no original content, inflated stats, no SEO, and no monetization infrastructure.

**Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS, MDX for content, deployed to Cloudflare Pages.
**Domain:** miatapedia.info (existing)

---

## CRITICAL RULES — DO NOT REPEAT THESE MISTAKES

### 1. i18n URLs MUST be consistent
OLD (broken):
- ES: `/manuales`, `/tiendas`, `/eventos`, `/clubs`
- EN: `/manuals`, `/shops`, `/events`, `/clubs-en`
- PT: `/manuals-pt`, `/shops-pt`, `/events-pt`, `/clubs-pt`
- DE: `/manuals-de`, `/shops-de`, `/events-de`, `/clubs-de`

NEW (correct):
- EN: `/en/manuals`, `/en/shops`, `/en/events`, `/en/clubs`
- ES: `/es/manuals`, `/es/shops`, `/es/events`, `/es/clubs`
- PT: `/pt/manuals`, `/pt/shops`, `/pt/events`, `/pt/clubs`
- DE: `/de/manuals`, `/de/shops`, `/de/events`, `/de/clubs`
- FR: `/fr/manuals`, `/fr/shops`, `/fr/events`, `/fr/clubs`

**Rules:**
- English is the DEFAULT language (largest MX-5 market is USA)
- ALL URLs use English slugs regardless of language — only the `/[locale]/` prefix changes
- The language switcher MUST keep the user on the same page, just changing locale
- Every page MUST have hreflang tags pointing to all language versions
- NO duplicate URLs (no `.html` extensions ever)

### 2. NO inflated numbers
OLD: "500+ technical manuals" (actually ~15 external links), "1 million owners trust Miatapedia"
NEW: Use real numbers or don't show numbers. Never claim user counts we don't have.

### 3. Content MUST be original
OLD: Just a directory of external links — zero original content, zero SEO value.
NEW: Every section has original encyclopedic content. Directories of links are SUPPLEMENTARY, not the main content.

### 4. SEO from day 1
OLD: No sitemap, no structured data, no OG tags, no hreflang, duplicate URLs.
NEW: Full SEO setup mandatory before launch (see SEO section below).

### 5. Monetization infrastructure from day 1
OLD: Zero — no ad slots, no affiliate links, no newsletter, no sponsor contact.
NEW: All placeholders ready from launch (see Monetization section below).

### 6. Copyright year must be dynamic
OLD: Hardcoded "© 2024"
NEW: `© ${new Date().getFullYear()} Miatapedia`

---

## DESIGN DIRECTION

Dark editorial / automotive magazine aesthetic.
Reference: the HTML prototype file (miatapedia-homepage.html) previously created.

### Typography
- Display/headings: Playfair Display (900, 700, 400, italic)
- Body: Source Sans 3 (300, 400, 600, 700)
- Mono/labels: JetBrains Mono (400, 500)

### Colors
```css
--bg-primary: #0a0a0a;
--bg-secondary: #111111;
--bg-card: #161616;
--bg-card-hover: #1c1c1c;
--text-primary: #f0ece4;
--text-secondary: #8a8578;
--text-muted: #5a5650;
--accent-red: #c41e3a;
--accent-red-glow: rgba(196, 30, 58, 0.15);
--accent-gold: #c4a265;
--accent-gold-dim: rgba(196, 162, 101, 0.2);
--border: #222222;
--border-light: #2a2a2a;
```

### Design elements
- Subtle noise/grain overlay on body
- Smooth hover transitions on cards (translateY + border-color)
- Color-coded accent bars per generation (NA=red, NB=gold, NC=blue, ND=green)
- Editorial typography with generous spacing
- Mobile-first responsive design

---

## PROJECT STRUCTURE

```
miatapedia/
├── app/
│   ├── [locale]/                    # i18n: en, es, pt, de, fr
│   │   ├── layout.tsx               # Shared layout with nav + footer
│   │   ├── page.tsx                 # Homepage
│   │   ├── generations/
│   │   │   ├── page.tsx             # All generations overview
│   │   │   └── [gen]/              # na, nb, nc, nd
│   │   │       └── page.tsx         # Generation detail (encyclopedic)
│   │   ├── special-editions/
│   │   │   ├── page.tsx             # All special editions list
│   │   │   └── [edition]/
│   │   │       └── page.tsx         # Individual edition page
│   │   ├── buying-guide/
│   │   │   ├── page.tsx             # Main buying guide overview
│   │   │   └── [gen]/
│   │   │       └── page.tsx         # Generation-specific buying guide
│   │   ├── maintenance/
│   │   │   ├── page.tsx             # Maintenance overview
│   │   │   └── [gen]/
│   │   │       └── page.tsx         # Generation maintenance guide
│   │   ├── mods/
│   │   │   ├── page.tsx             # Mods categories overview
│   │   │   └── [category]/
│   │   │       └── page.tsx         # Suspension, exhaust, turbo, etc.
│   │   ├── manuals/
│   │   │   └── page.tsx             # Technical manuals directory
│   │   ├── shops/
│   │   │   └── page.tsx             # Shops directory with filters
│   │   ├── clubs/
│   │   │   └── page.tsx             # Clubs directory by country
│   │   ├── community/
│   │   │   └── page.tsx             # Forums, Discord, Reddit, Facebook
│   │   ├── events/
│   │   │   └── page.tsx             # Events calendar
│   │   ├── about/
│   │   │   └── page.tsx             # About Miatapedia
│   │   └── search/
│   │       └── page.tsx             # Search results page
│   ├── api/
│   │   └── search/
│   │       └── route.ts
│   ├── globals.css
│   ├── not-found.tsx
│   └── sitemap.ts                   # Auto-generated sitemap
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx               # Different from nav — has about, legal, social, contact
│   │   ├── LanguageSwitcher.tsx      # MUST preserve current page path
│   │   ├── Breadcrumbs.tsx
│   │   └── MobileMenu.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── GenerationsGrid.tsx
│   │   ├── EditionsTicker.tsx
│   │   ├── ContentSections.tsx
│   │   ├── CommunitySection.tsx
│   │   └── SearchSection.tsx
│   ├── shared/
│   │   ├── SearchBar.tsx
│   │   ├── FilterBar.tsx            # For directories: filter by country, generation
│   │   ├── TableOfContents.tsx      # For long article pages
│   │   ├── SpecTable.tsx            # Technical specs display
│   │   ├── AdSlot.tsx               # Placeholder for future AdSense
│   │   ├── AffiliateLink.tsx        # Wrapper for future affiliate tracking
│   │   ├── NewsletterSignup.tsx     # Email capture component
│   │   └── SupportButton.tsx        # Ko-fi / Buy Me a Coffee
│   └── seo/
│       ├── PageMeta.tsx             # OG, Twitter Cards, meta per page
│       └── JsonLd.tsx               # Structured data component
├── content/                         # MDX content organized by locale
│   ├── en/
│   │   ├── generations/
│   │   │   ├── na.mdx              # Full encyclopedic article
│   │   │   ├── nb.mdx
│   │   │   ├── nc.mdx
│   │   │   └── nd.mdx
│   │   ├── special-editions/
│   │   │   ├── 1991-british-racing-green.mdx
│   │   │   ├── 1999-10th-anniversary.mdx
│   │   │   ├── 2004-mazdaspeed.mdx
│   │   │   ├── 2019-30th-anniversary.mdx
│   │   │   └── 2020-100th-anniversary.mdx
│   │   ├── buying-guide/
│   │   │   ├── na.mdx
│   │   │   ├── nb.mdx
│   │   │   ├── nc.mdx
│   │   │   └── nd.mdx
│   │   └── mods/
│   │       ├── suspension.mdx
│   │       ├── exhaust.mdx
│   │       ├── forced-induction.mdx
│   │       └── engine-swaps.mdx
│   └── es/                          # Same structure, translated
│       └── ...
├── data/
│   ├── generations.ts               # All generations structured data
│   ├── special-editions.ts          # Complete editions database
│   ├── specs.ts                     # Technical specifications by gen/year
│   ├── shops.ts                     # COMPLETE shop directory (see below)
│   ├── clubs.ts                     # COMPLETE club directory (see below)
│   ├── communities.ts              # Forums, Discord, Reddit, FB groups
│   ├── events.ts                    # Events directory
│   └── manuals.ts                   # Technical manuals links
├── lib/
│   ├── i18n/
│   │   ├── config.ts                # Supported locales, default locale
│   │   ├── dictionaries.ts          # UI string loader
│   │   └── middleware.ts            # Locale detection + redirect
│   ├── mdx.ts                       # MDX processing
│   ├── search.ts                    # Static search index (Flexsearch)
│   └── seo.ts                       # SEO helpers
├── messages/                        # UI strings (NOT content)
│   ├── en.json
│   ├── es.json
│   ├── pt.json
│   ├── de.json
│   └── fr.json
├── public/
│   ├── favicon.ico                  # Custom favicon
│   ├── og-image.png                 # Default OG image
│   └── images/
├── middleware.ts                     # i18n routing middleware
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## i18n SETUP — FIXED

### Rules
- Supported locales: `en`, `es`, `pt`, `de`, `fr`
- Default locale: `en`
- URL structure: `/[locale]/[english-slug]` — slugs are ALWAYS in English
- Middleware detects browser language and redirects to appropriate locale
- Visiting `/` redirects to `/en/` (or detected locale)
- Content (MDX articles) lives in `/content/[locale]/`
- UI strings (button labels, nav items) live in `/messages/[locale].json`

### Language Switcher behavior
When user is on `/es/generations/na` and clicks "EN":
→ Navigate to `/en/generations/na`
NOT to `/en/` (homepage). ALWAYS preserve the current path.

### hreflang tags (MANDATORY on every page)
```html
<link rel="alternate" hreflang="en" href="https://miatapedia.info/en/generations/na" />
<link rel="alternate" hreflang="es" href="https://miatapedia.info/es/generations/na" />
<link rel="alternate" hreflang="pt" href="https://miatapedia.info/pt/generations/na" />
<link rel="alternate" hreflang="de" href="https://miatapedia.info/de/generations/na" />
<link rel="alternate" hreflang="fr" href="https://miatapedia.info/fr/generations/na" />
<link rel="alternate" hreflang="x-default" href="https://miatapedia.info/en/generations/na" />
```

---

## SEO SETUP — MANDATORY BEFORE LAUNCH

### Per page
- Unique `<title>` and `<meta name="description">` — not generic
- Open Graph tags (og:title, og:description, og:image, og:url, og:type)
- Twitter Card tags
- Canonical URL
- hreflang tags (all locales)
- JSON-LD structured data:
  - `WebSite` schema on homepage (with SearchAction for sitelinks searchbox)
  - `Article` schema on encyclopedic pages
  - `BreadcrumbList` schema on all pages
  - `Organization` schema in layout

### Global
- `/sitemap.xml` — auto-generated, includes ALL locales
- `/robots.txt` — allow all, point to sitemap
- No duplicate URLs — no `.html` extensions, canonical tags everywhere
- Breadcrumbs on every page except homepage

---

## COMPLETE DATA — CLUBS BY COUNTRY

### EUROPE

#### 🇪🇸 Spain
| Name | URL | Type | Language |
|------|-----|------|----------|
| MX-5 Club Spain Forum | https://www.mx5forum.es/ | Forum | Spanish |
| Miatapasion Forums | https://www.miatapasion.com/foros/ | Forum | Spanish |
| MiataXpress | https://miataxpress.com | Community/Events | Spanish |

#### 🇬🇧 United Kingdom
| Name | URL | Type |
|------|-----|------|
| MX-5 Owners Club (Official) | https://forum.mx5oc.co.uk/ | Forum |
| MX-5 Life | https://www.mx5life.com/ | Forum |
| MX-5 Nutz | https://www.mx5nutz.com/ | Forum (technical) |

#### 🇩🇪 Germany
| Name | URL | Type |
|------|-----|------|
| mx-5.de Forum | https://www.mx-5.de/ | Forum |

#### 🇫🇷 France
| Name | URL | Type |
|------|-----|------|
| MX-5 Passion | https://www.mx5passion.com/ | Forum |

#### 🇵🇹 Portugal
| Name | URL | Type |
|------|-----|------|
| Clube MX-5 Portugal | https://www.clubmx-5.com/ | Club/Forum |

#### 🇳🇱 Netherlands
| Name | URL | Type |
|------|-----|------|
| MX-5 Owners NL | https://www.mx5owners.nl/ | Forum |

#### 🇨🇿 Czech Republic
| Name | URL | Type |
|------|-----|------|
| MX-5 Klub ČR | https://www.mx-5.biz/ | Forum |

#### 🇩🇰 Denmark
| Name | URL | Type |
|------|-----|------|
| MX-5 Club Danmark | https://www.mx5club.dk/ | Club/Forum |

#### 🇸🇪 Sweden
| Name | URL | Type |
|------|-----|------|
| Miata Club of Sweden | https://www.mx-5.se/ | Club |

#### 🇳🇴 Norway
| Name | URL | Type |
|------|-----|------|
| MX-5 Miata Club Norway | https://www.mx5-miata.no/forum/ | Forum |

#### 🇮🇪 Ireland
| Name | URL | Type |
|------|-----|------|
| MX-5 Ireland | https://www.mx5ireland.com/ | Forum |

#### 🇬🇷 Greece
| Name | URL | Type |
|------|-----|------|
| MyMX5.gr | https://www.mymx5.gr/ | Forum |

#### 🇸🇰 Slovakia
| Name | URL | Type |
|------|-----|------|
| MX-5 Klub Slovensko | https://www.mx-5.sk/forum/ | Forum |

#### 🇸🇮 Slovenia
| Name | URL | Type |
|------|-----|------|
| Mazda-si.net | https://www.mazda-si.net/ | Forum |

#### 🇹🇷 Turkey
| Name | URL | Type |
|------|-----|------|
| MazdaClubTR | https://www.mazdaclubtr.com/forums/forum/204-mazda-mx-5/ | Forum |

#### 🇺🇦 Ukraine
| Name | URL | Type |
|------|-----|------|
| Miata Club Ukraine | https://www.instagram.com/miata.ukraine/ | Instagram |

#### 🇷🇸 Serbia
| Name | URL | Type |
|------|-----|------|
| BJBikers MX-5 | https://bjbikers.com/forum/index.php?/topic/102606-mazda-mx-5/ | Forum thread |

### AMERICAS

#### 🇺🇸 United States — National Forums
| Name | URL | Type | Notes |
|------|-----|------|-------|
| Miata.net Forum | https://forum.miata.net/vb/ | Forum | Largest global, 1.4M visits/month, since 1994 |
| ClubRoadster | https://www.clubroadster.net/ | Forum | Major US forum |
| MiataTurbo.net | https://www.miataturbo.net/ | Forum | 50k+ members, forced induction focus |
| Miata Forumz | https://www.miataforumz.com/ | Forum | NA/NB/NC sections + V8 swaps |
| MX5World | https://www.mx5world.com/ | Forum | General + registry |

#### 🇺🇸 United States — Regional Clubs
| Name | URL | Region |
|------|-----|--------|
| Mass Miata Club | https://massmiata.net/ | Massachusetts |
| San Diego Miata Club | https://www.sandiegomiataclub.org/ | California |
| DFW Miata | https://www.dfwmiata.com/ | Dallas/Fort Worth, TX |
| Houston Miata Club | https://houstonmiataclub.com/ | Houston, TX |
| Windy City Miata Club | https://www.windycitymiataclub.com/ | Chicago, IL |

#### 🇨🇦 Canada
| Name | URL | Region |
|------|-----|--------|
| Club Miata Vancouver Island | https://clubmiata.net/ | BC |
| Maritime Miata Club | https://www.maritimemiataclub.ca/ | Atlantic Canada |
| Okanagan Valley Miata Club | https://www.okmiataclub.com/ | BC |
| Sea to Sky Miata Club | https://seatoskymiataclub.ca/ | BC |

#### 🇲🇽 Mexico
| Name | URL | Type |
|------|-----|------|
| Club Miata México | https://www.facebook.com/clubmiatamexico/ | Facebook |

#### 🇦🇷 Argentina
| Name | URL | Type |
|------|-----|------|
| Miata Club Argentina | https://www.facebook.com/groups/2073823302935046/ | Facebook Group |

### ASIA-PACIFIC

#### 🇯🇵 Japan
| Name | URL | Type | Notes |
|------|-----|------|-------|
| Roadster Club of Japan (RCOJ) | https://www.open-inc.co.jp/rcoj/ | Official Club | Birthplace of MX-5 |

#### 🇦🇺 Australia
| Name | URL | Region |
|------|-----|--------|
| MX5Cartalk | https://mx5.net.au/ | AU/NZ main forum |
| MX-5 Club of NSW | https://nsw.mx5.com.au/ | New South Wales |
| MX-5 Club of Queensland | https://www.mx5clubqld.com.au/ | Queensland |
| MX-5 Club of Victoria & Tasmania | https://mx5vic.org.au/ | VIC/TAS |
| MX-5 Club of Western Australia | https://www.mx5club.com.au/ | WA |

#### 🇳🇿 New Zealand
| Name | URL | Type |
|------|-----|------|
| MX-5 Club of New Zealand | https://mx5club.co.nz/ | Official Club |
| MX-5 Forum New Zealand | https://www.mx5forum.co.nz/ | Forum |

#### 🇵🇭 Philippines
| Name | URL | Type |
|------|-----|------|
| Miata Club Philippines | https://www.miataclub.ph/ | Official Club |

#### 🇸🇬 Singapore
| Name | URL | Type |
|------|-----|------|
| Miata Club Singapore | https://www.facebook.com/groups/5736449818/ | Facebook Group |

#### 🇮🇩 Indonesia
| Name | URL | Type |
|------|-----|------|
| Miata Roadster Club Indonesia | https://www.instagram.com/miata_roadster_club_indonesia/ | Instagram |

#### 🇹🇭 Thailand
| Name | URL | Type |
|------|-----|------|
| Miata Roadster Club Thailand | https://www.facebook.com/groups/325044978488263/ | Facebook Group |

### AFRICA

#### 🇿🇦 South Africa
| Name | URL | Type |
|------|-----|------|
| MX-5 Owners Club SA | https://www.mx5club.co.za/ | Official Portal |
| MX-5 Owners Club Gauteng | https://www.facebook.com/groups/mx5ownersclubgauteng/ | Facebook Group |
| MX-5 Owners Club Western Cape | https://www.mx5wc.co.za/ | Club |

### GLOBAL — Social Media Communities
| Name | URL | Platform | Size |
|------|-----|----------|------|
| r/Miata | https://www.reddit.com/r/Miata/ | Reddit | 400k+ members |
| r/MX5 | https://www.reddit.com/r/mx5/ | Reddit | Smaller |
| The United MX-5 Kingdom | Search on Disboard | Discord | UK-based, worldwide |
| Miata Land | Search on Disboard | Discord | Technical help |
| Mazda Miata Car Club | Search on Disboard | Discord | General |

---

## COMPLETE DATA — SHOPS

### OEM Parts — New Original
| Shop | Country | URL | Gens | Shipping |
|------|---------|-----|------|----------|
| MegaZip | 🇯🇵 | https://www.megazip.net | NA NB NC ND | Worldwide |
| Jim Ellis Mazda Parts | 🇺🇸 | https://www.jimellismazdaparts.com/ | NA NB NC ND | USA + Intl |
| MazdaShop | 🇨🇦 | https://mazdashop.ca/ | NA NB NC ND | Canada + Intl |
| MazdaParts.org | 🇺🇸 | https://mazdaparts.org | NA NB NC ND | Worldwide |

### OEM + Aftermarket Mix
| Shop | Country | URL | Gens | Shipping |
|------|---------|-----|------|----------|
| MX5Parts (Scimitar) | 🇬🇧 | https://www.mx5parts.co.uk | NA NB NC ND | Europe + WW |
| IL Motorsport | 🇩🇪 | https://www.ilmotorsport.de | NA NB NC ND | Europe + WW |
| MX5 Mania | 🇦🇺 | https://mx5mania.com.au | NA NB NC ND | AU + WW |
| Garage 5 | 🇳🇿 | https://www.garage5.net | NA NB NC ND | NZ + WW |
| Miata Parts NZ | 🇳🇿 | https://miataparts.co.nz | NA NB NC ND | NZ + WW |
| Moss Miata | 🇺🇸 | https://mossmiata.com | NA NB NC ND | USA + WW |
| Go Miata | 🇺🇸 | https://www.gomiata.com | NA NB NC ND | USA free ship |
| TopMiata | 🌐 | https://www.topmiata.com | NA NB NC ND | Worldwide |

### Used OEM Parts
| Shop | Country | URL | Gens | Shipping |
|------|---------|-----|------|----------|
| Autolink MX5 | 🇬🇧 | https://autolinkmx5.com | NA NB NC ND | Europe + WW |
| MX5 Heaven | 🇬🇧 | https://www.mx5heaven.co.uk | NA NB NC ND | Europe + WW |
| MX5 City | 🇬🇧 | https://www.mx5city.com | NA NB NC ND | Europe + WW |
| Treasure Coast Miata | 🇺🇸 | https://treasurecoastmiata.com | NA NB NC ND | USA + WW |
| Redline Auto Parts | 🇺🇸 | https://www.redlineautoparts.com/mazda-miata/ | NA NB NC ND | USA + WW |
| Planet Miata | 🇺🇸 | https://planet-miata.com | NA NB NC ND | USA + WW |

### Performance / Aftermarket — USA
| Shop | Country | URL | Specialty |
|------|---------|-----|-----------|
| Flyin' Miata | 🇺🇸 CO | https://flyinmiata.com | Turbo kits, suspension, LS swaps — world leader |
| Good-Win Racing | 🇺🇸 CA | https://www.good-win-racing.com | Exhaust, brakes, suspension — track tested |
| Rspeed | 🇺🇸 | https://www.rspeed.net | General performance parts |
| Fab9 Tuning | 🇺🇸 | https://fab9tuning.com | Turbo/supercharger, ECU tuning |
| MiataSpeed | 🇺🇸 | https://www.miataspeed.com | Street/autocross/track |
| REV9 Autosport | 🇺🇸 | https://rev9autosport.com | JDM authentic parts, 1000+ items |
| Supermiata | 🇺🇸 | https://supermiata.com | Race-focused parts |
| Track Dog Racing | 🇺🇸 | https://trackdogracing.com | Hard Dog roll bars |
| JDMuscle | 🇺🇸 | https://jdmuscleusa.com/collections/mazda-mx-5 | Aftermarket general |

### Performance / Aftermarket — UK & Europe
| Shop | Country | URL | Specialty |
|------|---------|-----|-----------|
| BBR GTi | 🇬🇧 | https://bbrgti.com | Turbo/supercharger kits — leading UK tuner |
| BOFI Racing | 🇬🇧 | https://bofiracing.com | Turbo kits, coilovers, brakes |
| SkidNation | 🇬🇧/🇪🇺 | https://skidnation.com | Engine, cooling, chassis, track |
| IL Motorsport | 🇩🇪 | https://www.ilmotorsport.de | OEM + performance (listed above too) |

### Performance / Aftermarket — Japan
| Shop | Country | URL | Specialty |
|------|---------|-----|-----------|
| Maruha Motors | 🇯🇵 | https://www.maruhamotors.co.jp/miata/ | Tuning, accessories, all gens |

### Japanese Marketplaces
| Shop | Country | URL | Type | Notes |
|------|---------|-----|------|-------|
| UP GARAGE | 🇯🇵 | https://www.upgarage.com/en | Used parts marketplace | Worldwide via forwarders |
| Yahoo! Auctions Japan | 🇯🇵 | https://auctions.yahoo.co.jp/ | Auction marketplace | Via Buyee/BigInJapan forwarders |

---

## COMPLETE DATA — ONLINE COMMUNITIES (separate from clubs)

### Forums
| Name | URL | Focus | Size |
|------|-----|-------|------|
| Miata.net Forum | https://forum.miata.net/vb/ | All generations, general | 1.4M visits/month |
| MiataTurbo.net | https://www.miataturbo.net/ | Forced induction, performance | 50k+ members, 1.5M posts |
| ClubRoadster | https://www.clubroadster.net/ | General, classifieds | Active |
| MiataForumz | https://www.miataforumz.com/ | All gens + V8 swaps, rotary | Active |
| MX5World | https://www.mx5world.com/ | General + car registry | Active |
| MX-5 Life | https://www.mx5life.com/ | UK-focused general | Active |
| MX-5 Nutz | https://www.mx5nutz.com/ | UK technical | Active |
| MX-5 Owners Club Forum | https://forum.mx5oc.co.uk/ | UK official | Active |
| MX5Cartalk | https://mx5.net.au/ | Australia/NZ | Active |

### Reddit
| Name | URL | Members |
|------|-----|---------|
| r/Miata | https://www.reddit.com/r/Miata/ | 400k+ |
| r/MX5 | https://www.reddit.com/r/mx5/ | Smaller |
| r/Miata_irl | https://www.reddit.com/r/Miata_irl/ | Memes |

### Discord
| Name | Focus |
|------|-------|
| The United MX-5 Kingdom | UK-based, worldwide, guides, meets |
| Miata Land | Project car support, technical |
| Mazda Miata Car Club | General, all builds welcome |
| Mazda Enthusiasts | Broader Mazda including MX-5 |

### Facebook Groups (major ones)
| Name | URL | Region |
|------|-----|--------|
| Club Miata México | https://www.facebook.com/clubmiatamexico/ | Mexico |
| Miata Club Argentina | https://www.facebook.com/groups/2073823302935046/ | Argentina |
| Miata Club Singapore | https://www.facebook.com/groups/5736449818/ | Singapore |
| MX-5 Owners Club Gauteng | https://www.facebook.com/groups/mx5ownersclubgauteng/ | South Africa |
| Miata Roadster Club Thailand | https://www.facebook.com/groups/325044978488263/ | Thailand |

---

## COMPLETE DATA — TECHNICAL MANUALS

### Complete Service Manuals
| Resource | URL | Gens | Type |
|----------|-----|------|------|
| Mellens - Factory Manuals | https://www.mellens.net/mazda/ | NA NB NC | PDFs, wiring diagrams |
| 1990 Workshop Manual | https://archive.org/details/1990-mazda-mx-5-miata-workshop-manual | NA 1990 | PDF on Archive.org |
| MX5Manual (ND) | https://www.mx5manual.com/menu.html?p=wiring | ND | Interactive online manual |

### Wiring Diagrams
| Resource | URL | Gens |
|----------|-----|------|
| Mellens NA 1991 Wiring | https://www.mellens.net/mazda/Mazda-Miata-1991-1993/1991_wiring.pdf | NA 91-93 |
| Mellens NB 2001 Wiring | https://www.mellens.net/mazda/mazda_miata_extra_manual/2001_wiring.pdf | NB 2001 |
| Mellens NB 2005 Wiring | https://www.mellens.net/mazda/Mazda-Miata-2005/wiring.pdf | NB 2005 |
| NC 2009 Wiring (EU) | https://static1.1.sqspcdn.com/static/f/341469/24622108/1395761779357/mazda_mx5_wiring_diagram_011020094.pdf | NC 2009 |
| MX5Manual ND Wiring | https://www.mx5manual.com/page.html?docid=SM356500&p=wiring&s=wr001 | ND |
| MiataForumz 1990-2002 | https://www.miataforumz.com/how-40/mazda-miata-wiring-diagrams-1990-2002-a-497/ | NA/NB |

### Additional Resources
| Resource | URL | Gens |
|----------|-----|------|
| Mighty5s Compilation | https://mighty5s.com/thread/3506/mx5-wiring-diagrams | NA NB NC |
| MX-5 OC Forum NC | https://forum.mx5oc.co.uk/t/nc-wiring-diagrams/88332 | NC |
| FixMyCarInfo NC | https://fixmycarinfo.com/mazda/mx-5-nc/mazda-mx-5-nc-01-2009-08-2012-wiring-diagrams/ | NC 2009-2012 |

---

## COMPLETE DATA — EVENTS

### Major International Events
| Event | Country | URL | Description |
|-------|---------|-----|-------------|
| Miatas at the Gap (MATG) | 🇺🇸 | Search annually | ~1500 Miatas, Tail of the Dragon, annual |
| MiataCon (Lime Rock) | 🇺🇸 | https://limerock.com/events/miatacon/ | Convention at Lime Rock Park |
| MX-5 Cup (IMSA) | 🇺🇸 | https://www.mx-5cup.com/schedule | Professional racing championship |
| MX-5 National Rally | 🇬🇧 | https://www.nationalrally.co.uk/ | UK annual rally, international participation |
| MX-5 Owners Club Events | 🇬🇧 | https://mx5oc.co.uk/areas-events/ | Regional UK events |

### Regional Events
| Event | Country | URL |
|-------|---------|-----|
| MiataXpress | 🇪🇸 | https://miataxpress.com |
| Puget Sound Miata Club | 🇺🇸 WA | https://pugetsoundmiataclub.org/PSMCeventCalendar/ |
| MX-5 Club of Victoria Events | 🇦🇺 | https://mx5vic.org.au/home/social-events/ |
| NSW MX-5 Club Events | 🇦🇺 | https://nsw.mx5.com.au/events |

---

## MONETIZATION — Ready from Day 1

### Components to implement
1. **AdSlot component** — Placeholder div with correct sizing for AdSense (728x90 leaderboard, 300x250 medium rectangle). Hidden until ads are enabled.
2. **AffiliateLink component** — Wraps shop links. Currently passes through directly. Later can add UTM params or affiliate IDs (Amazon Associates, eBay Partner Network).
3. **NewsletterSignup component** — Email capture in footer and on content pages. Use a simple API endpoint that stores emails (or integrate Buttondown/Mailchimp later).
4. **SupportButton** — Ko-fi or Buy Me a Coffee floating button or footer link.
5. **Sponsor contact** — About page includes "Interested in sponsoring? Contact us at [email]"

### Future monetization paths (do NOT implement yet, just keep architecture ready)
- Google AdSense (need traffic first)
- Amazon Associates / eBay Partner Network for shop links
- Direct sponsor deals with MX-5 shops (Flyin' Miata, Moss, Good-Win, etc.)
- Premium content or downloadable guides (PDF buying guides)

---

## PHASE 1 LAUNCH CONTENT

Create these pages with REAL original content (not just links):

1. **Homepage** — Hero, generations grid, editions ticker, sections preview, community, search
2. **NA Generation page** — Full article: history, sub-generations (NA6 1989-93, NA8 1994-97), engines (B6-ZE, BP-ZE), specs table, common problems, what makes it special
3. **ND Generation page** — Full article: current gen, ND1 vs ND2, RF vs soft top, engines (P5-VPS, PE-VPS), specs
4. **4-5 Special Edition pages** — British Racing Green (1991), 10th Anniversary (1999), Mazdaspeed (2004), 30th Anniversary (2019), 100th Anniversary (2020)
5. **NA Buying Guide** — What to look for, rust areas, common failures, price ranges, what to pay, NA6 vs NA8
6. **Clubs directory** — All clubs from data above, filterable by country/region
7. **Shops directory** — All shops from data above, filterable by country/type/generation
8. **Community page** — Forums, Discord, Reddit, Facebook — separate from clubs
9. **Manuals page** — All technical resources from data above
10. **Events page** — Expanded from data above
11. **About page** — Who, why, disclaimer (not affiliated with Mazda), contact, sponsor info

### Phase 2 (after launch)
- NB and NC generation pages
- All generation buying guides
- Mods section (suspension, exhaust, forced induction)
- Maintenance guides
- More special editions
- Additional languages (start with ES translation of Phase 1 content)

---

## INSTRUCTIONS FOR CLAUDE CODE

1. Initialize Next.js 14+ project with App Router, TypeScript, Tailwind CSS
2. Set up i18n middleware with locale detection and routing
3. Implement the design system matching the HTML prototype (dark theme, editorial)
4. Build all layout components (Navbar, Footer with full links, LanguageSwitcher, Breadcrumbs)
5. Create the homepage with all sections from the prototype
6. Set up MDX processing for content pages
7. Create the data files (generations.ts, shops.ts, clubs.ts, communities.ts, etc.)
8. Build directory pages with filter functionality (clubs by country, shops by type)
9. Implement client-side search (Flexsearch or Fuse.js)
10. Set up SEO: sitemap.ts, JSON-LD components, OG tags, hreflang
11. Create monetization placeholder components (AdSlot, AffiliateLink, Newsletter, Support)
12. Write Phase 1 MDX content for NA, ND, special editions, buying guide
13. Create About page with disclaimer and contact
14. Test: verify all routes, language switching, breadcrumbs, search, SEO tags
15. Build and verify static output works on Cloudflare Pages

### ASK ME before:
- Making hosting decisions (default: Cloudflare Pages)
- Choosing between analytics providers
- Any content that needs my specific input
- Design decisions that deviate from the prototype

### REFER TO these files:
- `miatapedia-homepage.html` — Visual design reference
- `miatapedia-audit-report.md` — What NOT to do (all previous mistakes documented)
- This file — Complete project spec with all data and rules

---

## PHASE 2 PROGRESS TRACKING - MARCH 2026

### ✅ COMPLETED ITEMS:

#### Item #1: Generation pages (COMPLETED ✅)
- **Status:** Fully deployed and functional
- **Pages:** `/generations/na`, `/generations/nb`, `/generations/nc`, `/generations/nd`
- **Content:** Complete encyclopedic articles for all 4 generations
- **Deploy date:** Early March 2026

#### Item #2: Buying guides (COMPLETED ✅)
- **Status:** Fully deployed and functional
- **Pages:** `/buying-guide/na`, `/buying-guide/nb`, `/buying-guide/nc`, `/buying-guide/nd`
- **Content:** Generation-specific buying advice, price ranges, common issues
- **Deploy date:** Early March 2026

#### Item #3: Mods section (COMPLETED ✅)
- **Status:** Fully deployed and functional
- **Pages:** `/mods`, `/mods/suspension`, `/mods/exhaust`, `/mods/forced-induction`, `/mods/engine-swaps`
- **Content:** 2,691+ lines of comprehensive modification guides
- **Deploy date:** March 20, 2026
- **Issues resolved:** ESLint unescaped entities errors fixed

#### Item #4: Maintenance guides (COMPLETED ✅)
- **Status:** Fully deployed and functional
- **Pages:** `/maintenance`, `/maintenance/na`, `/maintenance/nb`, `/maintenance/nc`, `/maintenance/nd`
- **Content:** 2,369+ lines of maintenance schedules, fluid specs, common issues
- **Deploy date:** March 20, 2026
- **Enhancement:** Added maintenance CTA button to `/generations` page

#### Item #5: Special Editions section (COMPLETED ✅)
- **Status:** Fully developed and functional in local
- **Pages:** `/special-editions`, `/special-editions/1991-british-racing-green`, `/special-editions/1999-10th-anniversary`, `/special-editions/2004-mazdaspeed`, `/special-editions/2019-30th-anniversary`, `/special-editions/2020-100th-anniversary`
- **Content:** 10,000+ words comprehensive special edition documentation
- **Date completed:** March 20, 2026
- **Issue resolved:** Fixed ticker synchronization between homepage and available pages

#### Item #6: Community & Forums section (COMPLETED ✅)
- **Status:** Enhanced and functional in local
- **Pages:** `/community` with comprehensive online communities directory
- **Components:** `CommunityDirectory.tsx` with interactive filtering
- **Content:** Complete guide to forums, Reddit, Discord, Facebook groups
- **Date completed:** March 20, 2026
- **Enhancement:** Added featured communities, etiquette guide, platform strengths

#### Item #7: Technical Manuals section (COMPLETED ✅)
- **Status:** Enhanced and functional in local
- **Pages:** `/manuals` with comprehensive technical documentation
- **Components:** `ManualsDirectory.tsx` with advanced filtering
- **Content:** Service manuals, wiring diagrams, interactive guides
- **Date completed:** March 20, 2026
- **Enhancement:** Added resource types guide, usage tips, generation-specific advice

### 🎯 CURRENT STATUS:
- **Phase 1:** 100% Complete
- **Phase 2 Progress:** Items 1-7 completed (7/X items done)
- **Total content created:** 17,000+ lines of original MX-5 content
- **Production site:** Fully functional at miatapedia.info (some items pending deployment)
- **Local development:** All items functional and tested

### 🚀 NEXT ITEMS TO TACKLE:
- Continue with remaining Phase 2 items
- Deploy completed local changes (Items #5-7) when authorized
- Additional content sections as per original plan
- Advanced features and optimizations

### 📝 RECENT FIXES & ENHANCEMENTS:
- **March 20, 2026:** Fixed critical CSS loading issue causing plain text appearance
- **March 20, 2026:** Completed comprehensive Special Editions section (6 pages)
- **March 20, 2026:** Enhanced Community section with filtering and guides
- **March 20, 2026:** Enhanced Technical Manuals with resource organization
- **March 20, 2026:** Fixed client/server component separation issues
- **March 20, 2026:** Added shops button to navigation (automatically deployed)

### ⚠️ IMPORTANT NOTES:
- **Deployment Policy:** Only deploy when explicitly authorized with "subelo" command
- **Local Testing:** All new features tested in local development environment
- **Auto-deployment:** Some changes deployed automatically - will require explicit authorization going forward
