export const familles = [
  {
    slug: 'moldu',
    nom: 'Nés de moldus',
    resume: "Des sorciers dont les parents n'ont aucun pouvoir magique.",
  },
  {
    slug: 'sang-mele',
    nom: 'Sang-mêlé',
    resume: 'Un parent sorcier, un parent moldu.',
  },
  {
    slug: 'sorcier',
    nom: 'Sang-pur',
    resume: 'Des familles de sorciers depuis de nombreuses générations.',
  },
];

export const maisons = {
  Gryffondor: '#a8323a',
  Serpentard: '#2f7a55',
  Serdaigle: '#3b5fa8',
  Poufsouffle: '#c9a227',
};

export const personnages = [
  { id: 'hermione-granger', nom: 'Hermione Granger', famille: 'moldu', maison: 'Gryffondor',
    description: "Brillante élève, elle connaît chaque livre de la bibliothèque et trouve toujours la solution." },
  { id: 'colin-creevey', nom: 'Colin Creevey', famille: 'moldu', maison: 'Gryffondor',
    description: "Passionné de photographie, il rêve de capturer chaque instant de la vie à Poudlard." },
  { id: 'harry-potter', nom: 'Harry Potter', famille: 'sang-mele', maison: 'Gryffondor',
    description: "Le garçon qui a survécu. Il découvre à onze ans qu'il est un sorcier." },
  { id: 'severus-rogue', nom: 'Severus Rogue', famille: 'sang-mele', maison: 'Serpentard',
    description: "Maître des potions, froid et secret, dont les loyautés restent longtemps un mystère." },
  { id: 'seamus-finnigan', nom: 'Seamus Finnigan', famille: 'sang-mele', maison: 'Gryffondor',
    description: "Spécialiste des explosions involontaires, toujours prêt à tenter un sortilège." },
  { id: 'ron-weasley', nom: 'Ron Weasley', famille: 'sorcier', maison: 'Gryffondor',
    description: "Le meilleur ami de Harry, issu d'une grande famille chaleureuse et sans le sou." },
  { id: 'drago-malefoy', nom: 'Drago Malefoy', famille: 'sorcier', maison: 'Serpentard',
    description: "Héritier d'une riche famille de sorciers, rival de Harry dès leur première rencontre." },
  { id: 'luna-lovegood', nom: 'Luna Lovegood', famille: 'sorcier', maison: 'Serdaigle',
    description: "Rêveuse et franche, elle croit aux créatures que personne d'autre n'a jamais vues." },
  { id: 'neville-londubat', nom: 'Neville Londubat', famille: 'sorcier', maison: 'Gryffondor',
    description: "D'abord maladroit, il devient un des plus courageux défenseurs de Poudlard." },
];

export const trouverFamille = (slug) => familles.find((f) => f.slug === slug);
export const trouverPersonnage = (id) => personnages.find((p) => p.id === id);
