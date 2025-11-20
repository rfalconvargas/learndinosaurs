/**
 * 10 Major YouTube Playlist Categories
 * Organized hierarchically: Major Ideas → Sub-ideas → Individual Species
 * Each category represents a "big idea" with potential for 100M+ views
 * and the ability to generate 100+ related videos
 */

export interface Category {
  id: string;
  title: string;
  description: string;
  flagshipSpecies: string; // The "biggest idea" within this category
  subCategories: SubCategory[];
  estimatedVideos: number;
  viewPotential: string;
  thumbnail?: string; // Wikimedia Commons thumbnail image URL
}

export interface SubCategory {
  id: string;
  title: string;
  species: string[];
  description?: string;
}

export const categories: Category[] = [
  {
    id: "megalodon",
    title: "Megalodon",
    description: "The greatest shark that ever lived. This category encompasses all sharks - prehistoric and modern - with Megalodon as the flagship species.",
    flagshipSpecies: "Megalodon",
    viewPotential: "100M+",
    estimatedVideos: 200,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Carcharocles_megalodon.jpg/800px-Carcharocles_megalodon.jpg",
    subCategories: [
      {
        id: "megalodon-core",
        title: "Megalodon: The Ultimate Shark",
        species: [
          "megalodon-2022",
          "megalodon-bite-force",
        ],
        description: "Comprehensive exploration of Megalodon's biology, size, and extinction"
      },
      {
        id: "prehistoric-sharks",
        title: "Prehistoric Sharks",
        species: [
          "goblin-shark",
          "goblin-shark-mysterious",
          "basking-shark",
          "megamouth-shark",
          "bigeye-thresher-shark",
          "blue-shark-facts",
          "nurse-shark",
        ],
        description: "Ancient and rare modern sharks with prehistoric origins"
      },
      {
        id: "shark-evolution",
        title: "Shark Evolution & Diversity",
        species: [],
        description: "The evolutionary history of sharks from the Devonian to today"
      },
      {
        id: "shark-ecology",
        title: "Shark Ecology & Behavior",
        species: [],
        description: "How sharks hunt, migrate, and dominate marine ecosystems"
      }
    ]
  },
  {
    id: "marine-reptiles",
    title: "Marine Reptiles",
    description: "The rulers of ancient oceans. From mosasaurs to ichthyosaurs, these reptiles conquered the seas during the Mesozoic.",
    flagshipSpecies: "Mosasaurus",
    viewPotential: "100M+",
    estimatedVideos: 180,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Mosasaurus_hofmanni.jpg/800px-Mosasaurus_hofmanni.jpg",
    subCategories: [
      {
        id: "mosasaurs",
        title: "Mosasaurs: The Apex Marine Predators",
        species: [
          "mosasaurus",
        ],
        description: "The dominant marine reptiles of the Late Cretaceous"
      },
      {
        id: "plesiosaurs",
        title: "Plesiosaurs & Pliosaurs",
        species: [
          "liopleurodon",
        ],
        description: "Long-necked and short-necked marine reptiles"
      },
      {
        id: "ichthyosaurs",
        title: "Ichthyosaurs: Fish-Lizards",
        species: [
          "ichthyosaur-discovery",
        ],
        description: "Dolphin-like reptiles that ruled the Triassic and Jurassic seas"
      },
      {
        id: "marine-crocodiles",
        title: "Marine Crocodiles",
        species: [
          "metriorhynchus",
        ],
        description: "Crocodiles that returned to the ocean"
      },
      {
        id: "marine-turtles",
        title: "Prehistoric Marine Turtles",
        species: [
          "stupendemys",
          "placodus",
          "henodus",
        ],
        description: "Giant turtles and placodonts of ancient seas"
      },
      {
        id: "whorltooth-titans",
        title: "Whorltooth Titans",
        species: [
          "whorltooth-titans",
        ],
        description: "Mysterious marine creatures with unique tooth structures"
      }
    ]
  },
  {
    id: "pterosaurs",
    title: "Pterosaurs",
    description: "The first vertebrates to achieve powered flight. From the tiny to the colossal, pterosaurs dominated the skies for 150 million years.",
    flagshipSpecies: "Quetzalcoatlus",
    viewPotential: "100M+",
    estimatedVideos: 120,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Quetzalcoatlus_northropi.jpg/800px-Quetzalcoatlus_northropi.jpg",
    subCategories: [
      {
        id: "giant-pterosaurs",
        title: "Giant Pterosaurs",
        species: [
          "quetzalcoatlus",
          "argentavis",
        ],
        description: "The largest flying animals in Earth's history"
      },
      {
        id: "pterosaur-diversity",
        title: "Pterosaur Diversity",
        species: [
          "tapejara",
          "tupuxuara",
          "sordes",
          "dsungaripterus",
          "scaphognathus",
          "jeholopterus",
        ],
        description: "The incredible variety of pterosaur forms and adaptations"
      },
      {
        id: "pterosaur-evolution",
        title: "Pterosaur Evolution",
        species: [],
        description: "How pterosaurs evolved flight and diversified"
      },
      {
        id: "pterosaur-ecology",
        title: "Pterosaur Ecology & Behavior",
        species: [],
        description: "How pterosaurs lived, hunted, and nested"
      }
    ]
  },
  {
    id: "theropods",
    title: "Theropods",
    description: "The ultimate land predators. From T-Rex to Spinosaurus, these carnivorous dinosaurs represent the peak of predatory evolution.",
    flagshipSpecies: "Tyrannosaurus Rex",
    viewPotential: "100M+",
    estimatedVideos: 400,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Tyrannosaurus_Rex_Holotype.jpg/800px-Tyrannosaurus_Rex_Holotype.jpg",
    subCategories: [
      {
        id: "spinosaurus-core",
        title: "Spinosaurus: The Aquatic Predator",
        species: [
          "accurate-spinosaurus",
          "spinosaurus-2021",
          "spinosaurus-aquatic",
          "weirdest-spinosaurus-theories",
        ],
        description: "Deep dives into Spinosaurus itself - its discovery, reconstruction, and ongoing scientific debates"
      },
      {
        id: "spinosauridae-evolution",
        title: "Spinosauridae Evolution",
        species: [
          "spinosauridae-evolution",
          "baryonyx",
          "suchomimus",
        ],
        description: "The evolutionary history of the entire Spinosauridae family"
      },
      {
        id: "tyrannosaurs",
        title: "Tyrannosaurs: The King",
        species: [
          "trex-phenomenon",
          "largest-land-predator",
        ],
        description: "T-Rex and its relatives - the apex predators of the Late Cretaceous"
      },
      {
        id: "carcharodontosaurs",
        title: "Carcharodontosaurs",
        species: [
          "carcharodontosaurus",
        ],
        description: "The \"shark-toothed\" giants that rivaled T-Rex"
      },
      {
        id: "ceratosaurs",
        title: "Ceratosaurs",
        species: [
          "carnotaurus-2022",
          "ceratosaurus",
        ],
        description: "Horned and bizarre theropods"
      },
      {
        id: "megalosaurs",
        title: "Megalosaurs",
        species: [
          "torvosaurus",
        ],
        description: "Early giant theropods"
      },
      {
        id: "raptors",
        title: "Dromaeosaurs (Raptors)",
        species: [
          "velociraptor-2022",
          "concavenator",
        ],
        description: "The intelligent pack hunters"
      },
      {
        id: "troodontids",
        title: "Troodontids",
        species: [
          "troodon",
          "troodon-part2",
        ],
        description: "The most intelligent dinosaurs"
      },
      {
        id: "jurassic-park-accuracy",
        title: "Jurassic Park Accuracy",
        species: [
          "jurassic-world-inaccuracies",
          "jurassic-world-inaccuracies-part1",
        ],
        description: "Analyzing the scientific accuracy of Jurassic Park/World"
      },
      {
        id: "spinosaurid-ecology",
        title: "Spinosaurid Ecology & Behavior",
        species: [],
        description: "How spinosaurids lived, hunted, and interacted with their environments"
      },
      {
        id: "spinosaurid-discoveries",
        title: "New Spinosaurid Discoveries",
        species: [],
        description: "Recent finds and ongoing research in spinosaurid paleontology"
      }
    ]
  },
  {
    id: "origins",
    title: "Origins",
    description: "The greatest transition in vertebrate history - when fish crawled onto land and gave rise to all terrestrial vertebrates, including us.",
    flagshipSpecies: "Ichthyostega",
    viewPotential: "100M+",
    estimatedVideos: 150,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ichthyostega_stensioei.jpg/800px-Ichthyostega_stensioei.jpg",
    subCategories: [
      {
        id: "early-vertebrates",
        title: "Early Vertebrates: Jawless Fish",
        species: [
          "jamoytius",
          "pharyngolepis",
          "arandaspis",
          "pteraspis",
          "doryaspis",
          "drepanaspis",
          "thelodus",
          "tremataspis",
          "darthmuthia",
          "hemicyclaspis",
          "boreaspis",
        ],
        description: "The first vertebrates - jawless fish of the Paleozoic"
      },
      {
        id: "first-tetrapods",
        title: "First Tetrapods: Fish to Land",
        species: [
          "ichthyostega",
          "acanthostega",
          "tiktaalik", // Could be added
        ],
        description: "The critical transition from water to land"
      },
      {
        id: "early-amphibians",
        title: "Early Amphibians",
        species: [
          "eryops",
          "pholiderpeton",
          "seymouria",
          "diplocaulus",
          "mastodonsaurus",
          "paracyclotosaurus",
          "gerrothorax",
          "cacops",
          "platyhystrix",
          "peltobatrachus",
        ],
        description: "The first fully terrestrial vertebrates"
      },
      {
        id: "transitional-forms",
        title: "Transitional Forms",
        species: [
          "eucritta",
          "crassigyrinus",
          "greererpeton",
        ],
        description: "Creatures that blur the line between fish and tetrapod"
      },
      {
        id: "early-chordates",
        title: "Early Chordates",
        species: [
          "pikaia",
          "promissum",
        ],
        description: "The earliest ancestors of all vertebrates"
      }
    ]
  },
  {
    id: "cryptids-mysteries",
    title: "Cryptids & Mysteries",
    description: "The unexplained and the mysterious. From legendary creatures to real deep-sea enigmas, this category explores the boundary between myth and reality.",
    flagshipSpecies: "Megalodon (as cryptid)",
    viewPotential: "100M+",
    estimatedVideos: 200,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Regalecus_glesne_2.jpg/800px-Regalecus_glesne_2.jpg",
    subCategories: [
      {
        id: "north-american-cryptids",
        title: "North American Cryptids",
        species: [
          "skunk-ape",
          "jersey-devil",
        ],
        description: "Legendary creatures of North American folklore"
      },
      {
        id: "south-american-cryptids",
        title: "South American Cryptids",
        species: [
          "mapinguari",
          "mapinguari-real",
        ],
        description: "Mysterious creatures of the Amazon"
      },
      {
        id: "ocean-mysteries",
        title: "Ocean Mysteries",
        species: [
          "hook-island-monster",
          "oarfish",
        ],
        description: "Unexplained creatures of the deep"
      },
      {
        id: "invertebrates",
        title: "Prehistoric Invertebrates",
        species: [
          "meganeura",
          "giant-african-millipede",
        ],
        description: "Giant insects and other prehistoric invertebrates"
      },
      {
        id: "living-fossils",
        title: "Living Fossils & Rediscoveries",
        species: [],
        description: "Creatures thought extinct but still alive"
      },
      {
        id: "cryptozoology",
        title: "Cryptozoology & Science",
        species: [],
        description: "The scientific investigation of legendary creatures"
      }
    ]
  },
  {
    id: "giant-prehistoric-creatures",
    title: "Giant Prehistoric Creatures",
    description: "The largest creatures that ever lived. From Titanoboa to giant sauropods, these animals push the limits of size across all groups.",
    flagshipSpecies: "Titanoboa",
    viewPotential: "100M+",
    estimatedVideos: 150,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Titanoboa.jpg/800px-Titanoboa.jpg",
    subCategories: [
      {
        id: "giant-snakes",
        title: "Giant Snakes",
        species: [
          "titanoboa",
          "gigantophis",
        ],
        description: "The largest snakes in Earth's history"
      },
      {
        id: "giant-crocodiles",
        title: "Giant Crocodiles",
        species: [
          "sarcosuchus",
          "pristichampsus",
          "quinkana",
          "protosuchus",
        ],
        description: "Massive crocodilians of the past"
      },
      {
        id: "giant-turtles",
        title: "Giant Turtles",
        species: [
          "stupendemys",
          "meiolania",
        ],
        description: "Enormous turtles and tortoises"
      },
      {
        id: "sauropods",
        title: "Sauropod Dinosaurs",
        species: [
          "dreadnoughtus",
          "dicraeosaurus",
          "kotasaurus",
        ],
        description: "The largest land animals that ever lived"
      },
      {
        id: "ornithischians",
        title: "Ornithischian Dinosaurs",
        species: [
          "tuojiangosaurus",
          "chungkingosaurus",
        ],
        description: "Herbivorous dinosaurs including stegosaurs and ankylosaurs"
      },
      {
        id: "reptile-giants",
        title: "Other Giant Reptiles",
        species: [],
        description: "Massive reptiles across different groups"
      }
    ]
  },
  {
    id: "mammals",
    title: "Mammals",
    description: "Before dinosaurs, therapsids ruled. After dinosaurs, mammals took over. This category covers the evolution of our own lineage.",
    flagshipSpecies: "Mammoth",
    viewPotential: "100M+",
    estimatedVideos: 180,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mammuthus_primigenius_-_Mauricio_Ant%C3%B3n.jpg/800px-Mammuthus_primigenius_-_Mauricio_Ant%C3%B3n.jpg",
    subCategories: [
      {
        id: "ice-age-mammals",
        title: "Ice Age Mammals",
        species: [
          "funniest-mammoth",
          "frozen-mammoth-blood",
        ],
        description: "The megafauna of the Ice Age"
      },
      {
        id: "prehistoric-mammals",
        title: "Prehistoric Mammals",
        species: [
          "entelodon",
        ],
        description: "Ancient mammals of the Cenozoic"
      },
      {
        id: "therapsids",
        title: "Therapsids: Mammal Ancestors",
        species: [
          "moschops",
          "lycaenops",
          "cynognathus",
          "estemmenosuchus",
        ],
        description: "The mammal-like reptiles that predated dinosaurs"
      },
      {
        id: "mammal-evolution",
        title: "Mammal Evolution",
        species: [],
        description: "How mammals evolved and diversified"
      },
      {
        id: "modern-giants",
        title: "Modern Giants",
        species: [
          "blue-whale",
        ],
        description: "The largest animals alive today"
      },
      {
        id: "channel-updates",
        title: "Channel Updates & Meta",
        species: [
          "channel-update-2021",
        ],
        description: "Updates about the channel and content strategy"
      }
    ]
  },
  {
    id: "evolution",
    title: "Evolution",
    description: "The grand story of how life evolved on Earth. From the first cells to complex ecosystems, explore the mechanisms and patterns of evolution, including our own human journey.",
    flagshipSpecies: "All Life",
    viewPotential: "100M+",
    estimatedVideos: 300,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Evolution_of_australopithecus.jpg/800px-Evolution_of_australopithecus.jpg",
    subCategories: [
      {
        id: "evolutionary-mechanisms",
        title: "Evolutionary Mechanisms",
        species: [],
        description: "Natural selection, genetic drift, mutation, and other forces driving evolution"
      },
      {
        id: "adaptive-radiation",
        title: "Adaptive Radiation",
        species: [],
        description: "How species diversify to fill ecological niches"
      },
      {
        id: "convergent-evolution",
        title: "Convergent Evolution",
        species: [],
        description: "How unrelated species evolve similar traits"
      },
      {
        id: "evolutionary-transitions",
        title: "Major Evolutionary Transitions",
        species: [],
        description: "Key moments in evolutionary history that changed life forever"
      },
      {
        id: "phylogenetics",
        title: "Phylogenetics & Tree of Life",
        species: [],
        description: "Understanding evolutionary relationships and the tree of life"
      },
      {
        id: "human-evolution",
        title: "Human Evolution",
        species: [
          "australopithecus-2022",
          "australopithecus-prehistoric-beasts",
          "homo-habilis-2022",
        ],
        description: "Our own evolutionary journey from ape-like ancestors to modern humans"
      },
      {
        id: "hominin-diversity",
        title: "Hominin Diversity",
        species: [],
        description: "All the different human species that have existed"
      },
      {
        id: "human-origins",
        title: "Human Origins & Migration",
        species: [],
        description: "How humans spread across the globe"
      }
    ]
  },
  {
    id: "extinction",
    title: "Extinction",
    description: "The end of species and the beginning of new ones. Explore mass extinctions, their causes, and how life rebounds after catastrophe.",
    flagshipSpecies: "Extinction Events",
    viewPotential: "100M+",
    estimatedVideos: 150,
    thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Extinction_intensity.svg/800px-Extinction_intensity.svg.png",
    subCategories: [
      {
        id: "mass-extinctions",
        title: "Mass Extinction Events",
        species: [],
        description: "The Big Five mass extinctions and their impact on life"
      },
      {
        id: "extinction-causes",
        title: "Causes of Extinction",
        species: [],
        description: "Climate change, asteroid impacts, volcanism, and other extinction drivers"
      },
      {
        id: "extinction-recovery",
        title: "Recovery & Rebound",
        species: [],
        description: "How life recovers and diversifies after mass extinctions"
      },
      {
        id: "modern-extinction",
        title: "Modern Extinction Crisis",
        species: [],
        description: "The current sixth mass extinction and conservation efforts"
      },
      {
        id: "extinct-species",
        title: "Recently Extinct Species",
        species: [],
        description: "Species that have gone extinct in recent history"
      }
    ]
  }
];

/**
 * Additional categories that could expand into major playlists:
 * 
 * 11. Sauropod Dinosaurs (Dreadnoughtus, Dicraeosaurus, etc.)
 * 12. Ornithischian Dinosaurs (Stegosaurs, Ankylosaurs, etc.)
 * 13. Early Reptiles & Synapsids
 * 14. Invertebrates (Meganeura, Giant African Millipede, etc.)
 * 15. Jurassic Park Accuracy Series
 */

export function getCategoryBySpecies(speciesSlug: string): Category | null {
  for (const category of categories) {
    for (const subCategory of category.subCategories) {
      if (subCategory.species.includes(speciesSlug)) {
        return category;
      }
    }
  }
  return null;
}

export function getAllSpeciesInCategory(categoryId: string): string[] {
  const category = categories.find(c => c.id === categoryId);
  if (!category) return [];
  
  const allSpecies: string[] = [];
  category.subCategories.forEach(sub => {
    allSpecies.push(...sub.species);
  });
  return allSpecies;
}

