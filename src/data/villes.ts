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
];

export function getVille(slug: string): Ville | undefined {
  return villes.find((v) => v.slug === slug);
}
