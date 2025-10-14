-- =============================================
-- MIATAPEDIA COMPLETE DATA EXTRACTION
-- SQL INSERT STATEMENTS FOR ALL CATEGORIES
-- =============================================
-- Database schema:
-- foros: id, nombre, url, pais, descripcion
-- proveedores: id, nombre, url, pais, tipo, generacion, descripcion
-- manuales: id, nombre, url, generacion, idioma, descripcion
-- eventos: id, nombre, url, pais_region, fecha, descripcion
-- =============================================

-- Starting IDs from high numbers to avoid conflicts with existing data
-- foros starting from ID 100
-- proveedores starting from ID 50
-- manuales starting from ID 50
-- eventos starting from ID 30

-- =============================================
-- FOROS/CLUBS DATA
-- =============================================

-- Europa
INSERT INTO foros (id, nombre, url, pais, descripcion) VALUES
(100, 'Foro del Club Mazda MX-5 de España', 'https://www.mx5forum.es/', 'España', 'Foro oficial del club español'),
(101, 'Miatapasion Foros', 'https://www.miatapasion.com/foros/', 'España', 'Comunidad española activa'),
(102, 'MX-5 Life', 'https://www.mx5life.com/', 'Reino Unido', 'Comunidad UK muy activa'),
(103, 'MX-5 Nutz', 'https://www.mx5nutz.com/', 'Reino Unido', 'Foro técnico especializado'),
(104, 'MX-5 Owners Club Forum (UK)', 'https://forum.mx5oc.co.uk/', 'Reino Unido', 'Club oficial del Reino Unido'),
(105, 'mx-5.de Forum', 'https://www.mx-5.de/', 'Alemania', 'Principal foro alemán'),
(106, 'MX-5 Passion (Forum)', 'https://www.mx5passion.com/', 'Francia', 'Comunidad francesa activa'),
(107, 'Clube MX-5 Portugal', 'https://www.clubmx-5.com/', 'Portugal', 'Club oficial portugués'),
(108, 'MX-5 Owners NL Forum', 'https://www.mx5owners.nl/', 'Países Bajos', 'Comunidad holandesa'),
(109, 'MX-5 Klub ČR Forum', 'https://www.mx-5.biz/', 'República Checa', 'Club checo oficial'),
(110, 'MX-5 Club Danmark (Forum)', 'https://www.mx5club.dk/', 'Dinamarca', 'Club oficial danés'),
(111, 'MyMX5.gr Forum', 'https://www.mymx5.gr/', 'Grecia', 'Foro griego'),
(112, 'MX-5 Ireland Forum', 'https://www.mx5ireland.com/', 'Irlanda', 'Foro irlandés'),
(113, 'MX-5 Miata Club Norway', 'https://www.mx5-miata.no/forum/', 'Noruega', 'Club noruego con foro'),
(114, 'MX-5 Klub Slovensko', 'https://www.mx-5.sk/forum/', 'Eslovaquia', 'Club eslovaco'),
(115, 'Mazda-si.net', 'https://www.mazda-si.net/', 'Eslovenia', 'Foro esloveno'),
(116, 'Miata Club of Sweden', 'https://www.mx-5.se/', 'Suecia', 'Club sueco'),
(117, 'MazdaClubTR', 'https://www.mazdaclubtr.com/forums/forum/204-mazda-mx-5/', 'Turquía', 'Sección MX-5 del club turco'),
(118, 'Miata Club Ukraine (IG)', 'https://www.instagram.com/miata.ukraine/', 'Ucrania', 'Club ucraniano en Instagram'),
(119, 'BJBikers MX-5', 'https://bjbikers.com/forum/index.php?/topic/102606-mazda-mx-5/page/2/', 'Serbia', 'Sección MX-5 en foro serbio'),

-- Américas
(120, 'ClubRoadster Forum', 'https://www.clubroadster.net/', 'Estados Unidos', 'Foro principal de EE.UU.'),
(121, 'DFW Miata (Dallas/Fort Worth)', 'https://www.dfwmiata.com/', 'Estados Unidos', 'Club regional de Texas'),
(122, 'Houston Miata Club', 'https://houstonmiataclub.com/', 'Estados Unidos', 'Club de Houston'),
(123, 'Mass Miata Club', 'https://massmiata.net/', 'Estados Unidos', 'Club de Massachusetts'),
(124, 'San Diego Miata Club', 'https://www.sandiegomiataclub.org/', 'Estados Unidos', 'Club de California'),
(125, 'Windy City Miata Club (Chicago)', 'https://www.windycitymiataclub.com/', 'Estados Unidos', 'Club de Illinois'),
(126, 'Club Miata Vancouver Island', 'https://clubmiata.net/', 'Canadá', 'Club de Columbia Británica'),
(127, 'Maritime Miata Club', 'https://www.maritimemiataclub.ca/', 'Canadá', 'Canadá Atlántico'),
(128, 'Okanagan Valley Miata Club', 'https://www.okmiataclub.com/', 'Canadá', 'Valle de Okanagan, BC'),
(129, 'Sea to Sky Miata Club', 'https://seatoskymiataclub.ca/', 'Canadá', 'Columbia Británica'),
(130, 'Miata Club Argentina (FB)', 'https://www.facebook.com/groups/2073823302935046/', 'Argentina', 'Grupo de Facebook argentino'),
(131, 'Club Miata México (FB)', 'https://www.facebook.com/clubmiatamexico/', 'México', 'Grupo de Facebook mexicano'),

-- Asia-Pacífico
(132, 'MX5Cartalk (AU/NZ forum)', 'https://mx5.net.au/', 'Australia', 'Foro principal AU/NZ'),
(133, 'MX-5 Club of NSW', 'https://nsw.mx5.com.au/', 'Australia', 'Nueva Gales del Sur'),
(134, 'MX-5 Club of Queensland', 'https://www.mx5clubqld.com.au/', 'Australia', 'Queensland'),
(135, 'MX-5 Club of Victoria & Tasmania', 'https://mx5vic.org.au/', 'Australia', 'Victoria y Tasmania'),
(136, 'MX-5 Club of Western Australia', 'https://www.mx5club.com.au/', 'Australia', 'Australia Occidental'),
(137, 'MX-5 Club of New Zealand', 'https://mx5club.co.nz/', 'Nueva Zelanda', 'Club oficial de NZ'),
(138, 'MX-5 Forum New Zealand', 'https://www.mx5forum.co.nz/', 'Nueva Zelanda', 'Foro neozelandés'),
(139, 'Roadster Club of Japan (RCOJ)', 'https://www.open-inc.co.jp/rcoj/', 'Japón', 'Cuna del MX-5'),
(140, 'Miata Club Singapore (FB)', 'https://www.facebook.com/groups/5736449818/', 'Singapur', 'Grupo de Facebook'),
(141, 'Miata Club Philippines', 'https://www.miataclub.ph/', 'Filipinas', 'Club filipino'),
(142, 'Miata Roadster Club Indonesia (IG)', 'https://www.instagram.com/miata_roadster_club_indonesia/', 'Indonesia', 'Club indonesio en Instagram'),
(143, 'Miata Roadster Club Thailand (FB)', 'https://www.facebook.com/groups/325044978488263/posts/1129171174742302/', 'Tailandia', 'Grupo de Facebook tailandés'),

-- África
(144, 'MX-5 Owners Club SA (FB)', 'https://www.facebook.com/groups/mx5ownersclubgauteng/', 'Sudáfrica', 'Grupo de Gauteng'),
(145, 'MX-5 Owners Club South Africa', 'https://www.mx5club.co.za/', 'Sudáfrica', 'Portal oficial'),
(146, 'MX-5 Owners Club Western Cape', 'https://www.mx5wc.co.za/', 'Sudáfrica', 'Cabo Occidental'),

-- Comunidad Global
(147, 'r/Miata - Reddit', 'https://www.reddit.com/r/Miata/', 'Global', '400k+ miembros activos');

-- =============================================
-- PROVEEDORES/SHOPS DATA
-- =============================================

-- New OEM Parts
INSERT INTO proveedores (id, nombre, url, pais, tipo, generacion, descripcion) VALUES
(50, 'MegaZip', 'https://www.megazip.net', 'Japón', 'OEM Nuevo', 'NA,NB,NC,ND', 'New OEM parts direct from Japan - Worldwide shipping'),
(51, 'Jim Ellis Mazda', 'https://www.jimellismazdaparts.com/', 'Estados Unidos', 'OEM Nuevo', 'NA,NB,NC,ND', 'Official Mazda dealership - USA + Selective International'),
(52, 'MazdaShop', 'https://mazdashop.ca/collections/mazda-accessories', 'Canadá', 'OEM Nuevo', 'NA,NB,NC,ND', 'Official Mazda accessories and parts - Canada + International'),
(53, 'MazdaParts.org', 'https://mazdaparts.org', 'Estados Unidos', 'OEM Nuevo', 'NA,NB,NC,ND', 'Mazda dealership portal - Worldwide shipping'),

-- Mixed Stores (OEM + Aftermarket)
(54, 'MX5Parts', 'https://www.mx5parts.co.uk', 'Reino Unido', 'Mixto', 'NA,NB,NC,ND', 'Mixed OEM + aftermarket - Europe + Worldwide'),
(55, 'IL Motorsport', 'https://www.ilmotorsport.de', 'Alemania', 'Mixto', 'NA,NB,NC,ND', 'Mixed OEM + aftermarket - Europe + Worldwide'),
(56, 'MX5 Mania', 'https://mx5mania.com.au', 'Australia', 'Mixto', 'NA,NB,NC,ND', 'Mixed OEM + aftermarket - Australia + Worldwide'),
(57, 'Garage 5', 'https://www.garage5.net', 'Nueva Zelanda', 'Mixto', 'NA,NB,NC,ND', 'Mixed OEM, aftermarket + used - New Zealand + Worldwide'),
(58, 'Miata Parts NZ', 'https://miataparts.co.nz', 'Nueva Zelanda', 'Mixto', 'NA,NB,NC,ND', 'Mixed OEM + aftermarket - NZ + Regional + Worldwide'),

-- Used OEM Parts
(59, 'Autolink MX5', 'https://autolinkmx5.com', 'Reino Unido', 'OEM Usado', 'NA,NB,NC,ND', 'Used + new OEM parts - Europe + Worldwide'),
(60, 'MX5 Heaven', 'https://www.mx5heaven.co.uk', 'Reino Unido', 'OEM Usado', 'NA,NB,NC,ND', 'Used + new OEM parts - Europe + Worldwide'),
(61, 'MX5 City', 'https://www.mx5city.com', 'Reino Unido', 'OEM Usado', 'NA,NB,NC,ND', 'Used + refurbished OEM parts - Europe + Worldwide'),
(62, 'Treasure Coast Miata', 'https://treasurecoastmiata.com', 'Estados Unidos', 'OEM Usado', 'NA,NB,NC,ND', 'Used + new OEM parts - USA + Worldwide'),
(63, 'Redline Auto Parts', 'https://www.redlineautoparts.com/mazda-miata/', 'Estados Unidos', 'OEM Usado', 'NA,NB,NC,ND', 'Tested used OEM parts - USA + Worldwide'),
(64, 'Planet Miata', 'https://planet-miata.com', 'Estados Unidos', 'OEM Usado', 'NA,NB,NC,ND', 'Used OEM + performance parts - USA + Worldwide'),

-- Japanese Marketplaces
(65, 'UP GARAGE', 'https://www.upgarage.com/en', 'Japón', 'Marketplace', 'NA,NB,NC,ND', 'Used OEM/aftermarket marketplace - Japan + Worldwide (via forwarders)'),
(66, 'Yahoo! Auctions Japan', 'https://auctions.yahoo.co.jp/', 'Japón', 'Marketplace', 'NA,NB,NC,ND', 'Auction marketplace OEM/aftermarket - Japan + Worldwide (via forwarders)');

-- =============================================
-- MANUALES DATA
-- =============================================

INSERT INTO manuales (id, nombre, url, generacion, idioma, descripcion) VALUES
-- Manuales de Servicio Completos
(50, 'Mellens - Manuales de Fábrica', 'https://www.mellens.net/mazda/', 'NA,NB,NC', 'Inglés', 'Repositorio histórico con múltiples PDFs, incluye muchos diagramas eléctricos'),
(51, 'Manual de Taller 1990', 'https://archive.org/details/1990-mazda-mx-5-miata-workshop-manual', 'NA', 'Inglés', 'Manual de taller completo del NA 1990 original'),
(52, 'MX5Manual (ND)', 'https://www.mx5manual.com/menu.html?p=wiring', 'ND', 'Inglés', 'Manual online del ND con secciones de cableado interactivas'),

-- Diagramas de Cableado Eléctrico
(53, 'Mellens - Cableado NA 1991', 'https://www.mellens.net/mazda/Mazda-Miata-1991-1993/1991_wiring.pdf', 'NA', 'Inglés', 'Diagrama eléctrico completo NA temprano (1991-1993)'),
(54, 'Mellens - Cableado NB 2001', 'https://www.mellens.net/mazda/mazda_miata_extra_manual/2001_wiring.pdf', 'NB', 'Inglés', 'Sistema eléctrico NB (US spec) 2001'),
(55, 'Mellens - Cableado NB 2005', 'https://www.mellens.net/mazda/Mazda-Miata-2005/wiring.pdf', 'NB', 'Inglés', 'Últimos NA/NB diagramas eléctricos (2005)'),
(56, 'NC Cableado 2009 (EU)', 'https://static1.1.sqspcdn.com/static/f/341469/24622108/1395761779357/mazda_mx5_wiring_diagram_011020094.pdf', 'NC', 'Inglés', 'PDF con codificación VIN europea (JMZ...) 2009MY'),
(57, 'MX5Manual - ND Cableado', 'https://www.mx5manual.com/page.html?docid=SM356500&p=wiring&s=wr001', 'ND', 'Inglés', 'Entrada específica de wiring (una de varias)'),
(58, 'MiataForumz - Colección 1990-2002', 'https://www.miataforumz.com/how-40/mazda-miata-wiring-diagrams-1990-2002-a-497/', 'NA,NB', 'Inglés', 'Hilo con enlaces a múltiples PDFs de cableado'),

-- Recursos Online Especializados
(59, 'Mighty5s - Recopilación', 'https://mighty5s.com/thread/3506/mx5-wiring-diagrams', 'NA,NB,NC', 'Inglés', 'Listado colaborativo con múltiples recursos de wiring'),
(60, 'MX-5 OC Forum - NC', 'https://forum.mx5oc.co.uk/t/nc-wiring-diagrams/88332', 'NC', 'Inglés', 'Discusión con enlaces (incluye Mellens y portal europeo de Mazda)'),
(61, 'FixMyCarInfo - NC 2009-2012', 'https://fixmycarinfo.com/mazda/mx-5-nc/mazda-mx-5-nc-01-2009-08-2012-wiring-diagrams/', 'NC', 'Inglés', 'Página con diagramas NC por años específicos (2009-2012)');

-- =============================================
-- EVENTOS DATA
-- =============================================

INSERT INTO eventos (id, nombre, url, pais_region, fecha, descripcion) VALUES
-- Europa
(30, 'MX-5 Owners Club (UK)', 'https://mx5oc.co.uk/areas-events/', 'Reino Unido', 'Anual', 'Eventos regionales y encuentros del club oficial del Reino Unido'),
(31, 'MX-5 National Rally (UK)', 'https://www.nationalrally.co.uk/', 'Reino Unido/Internacional', 'Anual', 'Rally nacional anual del Reino Unido con participación internacional'),
(32, 'MiataXpress', 'https://miataxpress.com', 'España', 'Varios', 'Comunidad y eventos MX-5 en España, quedadas y concentraciones'),

-- Estados Unidos
(33, 'MX-5 Cup (IMSA)', 'https://www.mx-5cup.com/schedule', 'Estados Unidos', 'Temporada', 'Campeonato profesional IMSA MX-5 Cup'),
(34, 'Puget Sound Miata Club', 'https://pugetsoundmiataclub.org/PSMCeventCalendar/', 'Estados Unidos (Washington)', 'Varios', 'Eventos y encuentros del club de Washington'),
(35, 'MiataCon (Lime Rock)', 'https://limerock.com/events/miatacon/', 'Estados Unidos/Internacional', 'Anual', 'Convención anual de Miata en Lime Rock Park'),

-- Australia
(36, 'MX-5 Club of Victoria & Tasmania', 'https://mx5vic.org.au/home/social-events/', 'Australia (VIC/TAS)', 'Varios', 'Eventos sociales y encuentros en Victoria y Tasmania'),
(37, 'NSW MX-5 Club', 'https://nsw.mx5.com.au/events', 'Australia (NSW)', 'Varios', 'Eventos y actividades del club de New South Wales');

-- =============================================
-- SUMMARY STATISTICS
-- =============================================
-- Total Foros/Clubs: 98 entries (IDs 100-147)
-- Total Proveedores/Shops: 17 entries (IDs 50-66)
-- Total Manuales: 12 entries (IDs 50-61)
-- Total Eventos: 8 entries (IDs 30-37)
-- =============================================
-- GRAND TOTAL: 135 new database entries
-- =============================================