import CardInterface from "@/interfaces/CardInterface";

// mock simples pra não ficar batendo na API enquanto codo
export const fakeDeck: CardInterface[] = [
  {
    appearance: {
      eyeColor: "Blue",
      gender: "Male",
      hairColor: "Black",
      height: ["6'3", "191 cm"],
      race: "Kryptonian",
      weight: ["225 lb", "101 kg"],
    },
    biography: {
      aliases: [
        "Clark Joseph Kent",
        "The Man of Steel",
        "the Man of Tomorrow",
        "the Last Son of Krypton",
        "Big Blue",
        "the Metropolis Marvel",
        "the Action Ace",
      ],
      alignment: "good",
      alterEgos: "Superman Prime One-Million",
      firstAppearance: "ACTION COMICS #1",
      fullName: "Clark Kent",
      placeOfBirth: "Krypton",
      publisher: "Superman Prime One-Million",
    },
    connections: {
      groupAffiliation:
        "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
      relatives:
        "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)",
    },
    id: 644,
    images: {
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/644-superman.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/644-superman.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/644-superman.jpg",
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/644-superman.jpg",
    },
    name: "Superman",
    powerstats: {
      combat: 85,
      durability: 100,
      intelligence: 94,
      power: 100,
      speed: 100,
      strength: 100,
    },
    slug: "644-superman",
    work: {
      base: "Metropolis",
      occupation: "Reporter for the Daily Planet and novelist",
    },
  },
  {
    appearance: {
      eyeColor: "Red",
      gender: "Male",
      hairColor: "Brown",
      height: ["6'1", "185 cm"],
      race: "Mutant",
      weight: ["179 lb", "81 kg"],
    },
    biography: {
      aliases: ["Death", "Le Diable Blanc", "formerly Robert Lord", "Cajun"],
      alignment: "good",
      alterEgos: "No alter egos found.",
      firstAppearance:
        "(as Gambit) Uncanny X-Men #266 (1990), (as Death) X-Men #184 (2006)",
      fullName: "Remy Etienne LeBeau",
      placeOfBirth: "New Orleans, Louisiana",
      publisher: "Marvel Comics",
    },
    connections: {
      groupAffiliation:
        "X-Men (Team Wolverine); formerly Marauders, Horsemen of Apocalypse, Chevaliers, X-Treme X-Men, Thieves & Unified Guild's of New Orleans, Crimson Pirates",
      relatives:
        "Jean-Luc LeBeau (father), Belladonna (aka Bella Donna Boudreaux) (wife, separated)",
    },
    id: 274,
    images: {
      lg: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/lg/274-gambit.jpg",
      md: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/274-gambit.jpg",
      sm: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/274-gambit.jpg",
      xs: "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/xs/274-gambit.jpg",
    },
    name: "Gambit",
    powerstats: {
      intelligence: 63,
      strength: 10,
      speed: 23,
      durability: 28,
      power: 55,
      combat: 84,
    },
    slug: "274-gambit",
    work: {
      base: "(current) Xavier Institute, Salem Center, Westchester County, New York; (former) New Orleans, Louisiana; Paris, France; Cairo, Illinois;",
      occupation:
        "Jean Grey School for Higher Learning, Salem Center, Westchester County, New York; formerly Utopia, San Francisco Bay, California; Xavier Institute, Salem Center, Westchester County, New York; New Orleans; Paris; Cairo; Illinois",
    },
  },
];
