interface Appearance {
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string[];
  race: string;
  weight: string[];
}

interface Biography {
  aliases: string[];
  alignment: string;
  alterEgos: string;
  firstAppearance: string;
  fullName: string;
  placeOfBirth: string;
  publisher: string;
}

interface Connections {
  groupAffiliation: string;
  relatives: string;
}

interface Images {
  lg: string;
  md: string;
  sm: string;
  xs: string;
}

interface PowerStats {
  combat: number;
  durability: number;
  intelligence: number;
  power: number;
  speed: number;
  strength: number;
}

interface Work {
  base: string;
  occupation: string;
}

export default interface CardInterface {
  appearance: Appearance;
  biography: Biography;
  connections: Connections;
  id: number;
  images: Images;
  name: string;
  powerstats: PowerStats;
  slug: string;
  work: Work;
}
