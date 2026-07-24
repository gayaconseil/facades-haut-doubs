// ============================================================
// Données des villes du Haut-Doubs desservies par FHD
// ============================================================
// Centralise les infos par ville pour générer les 9 pages
// métier×ville via getStaticPaths d'Astro (1 template → 3 pages)
// ============================================================

export interface Ville {
  slug: string;          // URL : /metier/[slug]/
  nom: string;           // "Pontarlier"
  article: string;       // "à Pontarlier", "à Morteau", "à Valdahon"
  codePostal: string;
  population: string;    // texte affichable
  altitude: string;
  baseline: string;      // 1 phrase d'identité
  description: string;   // 2-3 phrases sur la ville
  climat: string;        // particularité climatique
  architecture: string;  // particularité du bâti local
  communes: string[];    // communes limitrophes desservies
}

export const villes: Ville[] = [
  {
    slug: 'pontarlier',
    nom: 'Pontarlier',
    article: 'à Pontarlier',
    codePostal: '25300',
    population: '17 000 habitants',
    altitude: '837 m',
    baseline: 'Capitale économique du Haut-Doubs',
    description:
      'Sous-préfecture du Doubs, Pontarlier est la 2e ville la plus haute de France. ' +
      "Située à 17 km de la frontière suisse, elle bénéficie d'un dynamisme économique " +
      "marqué et d'un patrimoine architectural mêlant maisons traditionnelles, immeubles " +
      'haussmanniens et constructions contemporaines.',
    climat:
      "Climat montagnard rigoureux : températures glaciales en hiver (jusqu'à -25°C), " +
      'enneigement important, écarts thermiques marqués. Les façades doivent résister à ' +
      'des conditions extrêmes.',
    architecture:
      "Le bâti pontissalien mêle maisons comtoises traditionnelles à toits pentus et " +
      "tuiles vernissées, immeubles bourgeois du XIXe en pierre calcaire, et logements " +
      'sociaux des années 60-70 à rénover en priorité.',
    communes: ['Doubs', 'Houtaud', 'Verrières-de-Joux', 'Granges-Narboz', 'Sainte-Colombe'],
  },
  {
    slug: 'morteau',
    nom: 'Morteau',
    article: 'à Morteau',
    codePostal: '25500',
    population: '6 700 habitants',
    altitude: '755 m',
    baseline: 'Pôle horloger et microtechnique du Haut-Doubs',
    description:
      "Capitale horlogère française, Morteau est le 2e pôle micro-technique du pays. " +
      "Située dans la vallée du Doubs, à proximité de la Suisse, elle conjugue patrimoine " +
      "industriel (anciennes manufactures) et patrimoine rural (fermes comtoises typiques " +
      "à tuyé).",
    climat:
      "Vallée encaissée propice aux brouillards d'hiver et aux gelées tardives. Forte " +
      'humidité saisonnière qui fragilise les façades non traitées. Climat plus doux ' +
      "qu'à Pontarlier mais plus humide.",
    architecture:
      "Habitat typique de la haute-chaîne du Jura : fermes à tuyé (cheminée pyramidale), " +
      'enduits chaux traditionnels, bardages bois local. Préservation patrimoniale forte ' +
      'dans le centre historique.',
    communes: ['Les Fins', 'Villers-le-Lac', 'Le Bizot', 'Grand\'Combe-Châteleu', 'Montlebon'],
  },
  {
    slug: 'valdahon',
    nom: 'Valdahon',
    article: 'à Valdahon',
    codePostal: '25800',
    population: '5 500 habitants',
    altitude: '645 m',
    baseline: 'Porte du Haut-Doubs, dynamisme résidentiel',
    description:
      "Porte d'entrée du Haut-Doubs depuis Besançon, Valdahon connaît un essor " +
      "démographique notable (+40% en 20 ans). Ville-garnison militaire, elle attire de " +
      "nombreuses jeunes familles et entreprises. C'est le siège de notre agence " +
      'Haut-Doubs.',
    climat:
      "Climat de transition entre la plaine bisontine et la haute-chaîne. Hivers " +
      "rigoureux mais plus brefs qu'à Pontarlier, étés agréables. Bonne fenêtre de " +
      'travaux d\'avril à novembre.',
    architecture:
      "Mélange de pavillons individuels récents (lotissements années 1990-2010), corps " +
      'de ferme rénovés, immeubles collectifs et bâtiments tertiaires. Beaucoup de ' +
      'maisons construites entre 1970 et 2000 nécessitant désormais une rénovation ITE.',
    communes: ['Vercel-Villedieu', 'Étalans', 'Bouclans', 'Avoudrey', 'Loray', 'Pierrefontaine'],
  },
  {
    slug: 'ornans',
    nom: 'Ornans',
    article: 'à Ornans',
    codePostal: '25290',
    population: '4 400 habitants',
    altitude: '320 à 635 m',
    baseline: 'La « petite Venise comtoise », vallée de la Loue',
    description:
      "Nichée dans la vallée de la Loue, Ornans est la ville natale du peintre Gustave " +
      "Courbet. Ses maisons sur pilotis qui se reflètent dans la rivière lui valent le " +
      'surnom de « petite Venise comtoise ». Ville touristique et industrielle (Alstom, ' +
      'Groupe Guillin), elle allie patrimoine remarquable et tissu économique dynamique.',
    climat:
      "Climat semi-continental de vallée : hivers froids, humidité de la Loue, brouillards " +
      "et gelées. Les façades en fond de vallée sont exposées à l'humidité ascensionnelle.",
    architecture:
      "Maisons anciennes en pierre calcaire au bord de la Loue, façades à colombages, " +
      'demeures vigneronnes et bâti de caractère. Un patrimoine protégé qui appelle des ' +
      "rénovations soignées (ravalement pierre, enduits à la chaux).",
    communes: ['Montgesoye', 'Vuillafans', 'Scey-Maisières', 'Chassagne-Saint-Denis', 'Lods', 'Cléron'],
  },
  {
    slug: 'mouthe',
    nom: 'Mouthe',
    article: 'à Mouthe',
    codePostal: '25240',
    population: '1 000 habitants',
    altitude: '937 à 1 414 m',
    baseline: 'La « petite Sibérie », source du Doubs',
    description:
      "Village de montagne à la source du Doubs, Mouthe est réputée pour être la commune " +
      "la plus froide de France (record de -36,7°C). Station de ski et arrivée de la " +
      'Transjurassienne, elle vit du tourisme hivernal, de la forêt et de l\'agriculture ' +
      'de montagne, à la frontière suisse.',
    climat:
      "Climat montagnard extrême : le plus rigoureux de France métropolitaine. Enneigement " +
      "prolongé, gel intense et longue durée. L'isolation thermique par l'extérieur y est " +
      'un enjeu de confort majeur.',
    architecture:
      'Chalets et fermes de montagne à forte pente de toit, bardages bois traditionnels, ' +
      'gros murs pour affronter le froid. Le bardage et une ITE performante sont ' +
      'particulièrement adaptés à ce climat.',
    communes: ['Sarrageois', 'Petite-Chaux', 'Rondefontaine', 'Les Villedieu', 'Gellin', 'Chaux-Neuve'],
  },
  {
    slug: 'maiche',
    nom: 'Maîche',
    article: 'à Maîche',
    codePostal: '25120',
    population: '4 250 habitants',
    altitude: '729 à 982 m',
    baseline: 'Capitale du plateau horloger, proche Suisse',
    description:
      "Sur un plateau calcaire à une dizaine de kilomètres de la Suisse, Maîche est une " +
      "ville de tradition horlogère et agricole (cheval comtois, filière lait). Dominée " +
      'par le Mont Miroir (982 m), elle conserve un patrimoine Renaissance et un tissu ' +
      'de PME de précision.',
    climat:
      "Climat montagnard du Haut-Doubs horloger : hivers longs et neigeux, gel marqué. " +
      'Les façades subissent des cycles gel-dégel exigeants pour la durabilité des enduits.',
    architecture:
      'Grandes fermes comtoises à tuyé, maisons de bourg en pierre, constructions ' +
      "récentes en périphérie. Un parc bâti varié où l'ITE et le ravalement sont très " +
      'demandés.',
    communes: ['Charquemont', 'Damprichard', 'Fournet-Blancheroche', 'Le Bizot', 'Frambouhans', 'Les Fontenelles'],
  },
  {
    slug: 'frasne',
    nom: 'Frasne',
    article: 'à Frasne',
    codePostal: '25560',
    population: '2 000 habitants',
    altitude: '810 à 882 m',
    baseline: 'Plateau des tourbières, nœud ferroviaire',
    description:
      "Commune du haut plateau, Frasne est connue pour ses tourbières classées en réserve " +
      "naturelle régionale et pour sa gare, nœud ferroviaire reliant la France à la Suisse " +
      '(Berne, Lausanne). Un territoire rural et humide, à dominante agricole et forestière.',
    climat:
      'Climat de haut plateau froid et humide : enneigement important, forte humidité liée ' +
      'aux tourbières, gel prolongé. La protection contre l\'humidité des façades y est ' +
      'essentielle.',
    architecture:
      'Fermes du plateau à larges toitures, bardages bois, bâti agricole. Les solutions ' +
      "d'étanchéité et d'enduit respirant sont adaptées à ce contexte humide.",
    communes: ['Bouverans', 'Bonnevaux', 'La Rivière-Drugeon', 'Vaux-et-Chantegrue', 'Courvières', 'Dompierre-les-Tilleuls'],
  },
  {
    slug: 'levier',
    nom: 'Levier',
    article: 'à Levier',
    codePostal: '25270',
    population: '2 400 habitants',
    altitude: '679 à 901 m',
    baseline: 'Cœur de la forêt et de la filière bois',
    description:
      "À une vingtaine de kilomètres à l'ouest de Pontarlier, Levier est un pôle central " +
      "du Haut-Doubs entouré de la célèbre forêt de sapins de Levier. Chef-lieu de la " +
      'communauté de communes Altitude 800, la commune vit largement de la filière bois ' +
      'et de l\'agriculture.',
    climat:
      'Climat montagnard forestier : hivers froids et neigeux, humidité forestière. Les ' +
      'façades exposées demandent des enduits durables et une bonne isolation.',
    architecture:
      'Fermes comtoises, maisons de bourg en pierre et bâti bois lié à la tradition ' +
      "forestière. Le bardage bois local et l'enduit à la chaux y trouvent tout leur sens.",
    communes: ['Villeneuve-d\'Amont', 'Septfontaines', 'Goux-les-Usiers', 'Villers-sous-Chalamont', 'Bians-les-Usiers', 'La Chapelle-d\'Huin'],
  },
  {
    slug: 'sancey',
    nom: 'Sancey',
    article: 'à Sancey',
    codePostal: '25430',
    population: '1 400 habitants',
    altitude: '460 à 800 m',
    baseline: 'Village de caractère du pays de Sancey-Belleherbe',
    description:
      "À l'est de Besançon, Sancey est le village natal de sainte Jeanne-Antide Thouret, " +
      "dont la basilique domine la commune. Territoire rural au bâti dispersé, ancien pôle " +
      "industriel (métallerie, plasturgie), aujourd'hui centre d'artisans et de commerces, " +
      'labellisé « Ville fleurie ».',
    climat:
      'Climat semi-continental de moyenne montagne : hivers froids, étés doux. Cycles ' +
      'gel-dégel qui sollicitent les façades et les joints de pierre.',
    architecture:
      'Fermes comtoises, maisons en pierre calcaire et patrimoine religieux. Le ravalement, ' +
      "le joint de pierre et l'enduit à la chaux valorisent ce bâti traditionnel.",
    communes: ['Belleherbe', 'Sancey-le-Long', 'Surmont', 'Rahon', 'Vellevans', 'Servin'],
  },
  {
    slug: 'mamirolle',
    nom: 'Mamirolle',
    article: 'à Mamirolle',
    codePostal: '25620',
    population: '2 000 habitants',
    altitude: '425 à 666 m',
    baseline: 'Le plateau du premier plateau, terre du Comté',
    description:
      "À une douzaine de kilomètres au sud-est de Besançon, Mamirolle est connue pour son " +
      "ENIL (École nationale d'industrie laitière, 1888) et son fromage éponyme. Située en " +
      'plein pays du Comté et du Morbier, la commune conjugue vie rurale, desserte ' +
      'ferroviaire vers la Suisse et proximité de l\'agglomération bisontine.',
    climat:
      "Climat du premier plateau : hivers froids, printemps humides. Les façades y " +
      "subissent l'humidité et les écarts thermiques saisonniers.",
    architecture:
      'Fermes du plateau, maisons en pierre et pavillons récents. Un bâti mixte où l\'ITE ' +
      'des maisons des années 1970-2000 et le ravalement sont très recherchés.',
    communes: ['Saône', 'Gennes', 'Le Gratteris', 'La Chevillotte', 'Naisey-les-Granges', 'Bouclans'],
  },
];

export function getVille(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}
