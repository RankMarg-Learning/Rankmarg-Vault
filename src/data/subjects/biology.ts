// Biology subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const biologySubject: SubjectConfig = {
  id: "biology",
  name: "Biology",
  slug: "biology",
  icon: "B",
  topics: [
  {
    "id": "living_world",
    "name": "The Living World",
    "slug": "the-living-world",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "LW"
  },
  {
    "id": "biological_classification",
    "name": "Biological Classification",
    "slug": "biological-classification",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BC"
  },
  {
    "id": "plant_kingdom",
    "name": "Plant Kingdom",
    "slug": "plant-kingdom",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "PK"
  },
  {
    "id": "animal_kingdom",
    "name": "Animal Kingdom",
    "slug": "animal-kingdom",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "AK"
  },
  {
    "id": "morphology_flowering_plants",
    "name": "Morphology of Flowering Plants",
    "slug": "morphology-of-flowering-plants",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "MFP"
  },
  {
    "id": "anatomy_flowering_plants",
    "name": "Anatomy of Flowering Plants",
    "slug": "anatomy-of-flowering-plants",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "AFP"
  },
  {
    "id": "structural_organisation_animals",
    "name": "Structural Organisation in Animals",
    "slug": "structural-organisation-in-animals",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "SOA"
  },
  {
    "id": "cell_unit_life",
    "name": "Cell: The Unit of Life",
    "slug": "cell-the-unit-of-life",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "CELL"
  },
  {
    "id": "biomolecules_bio",
    "name": "Biomolecules",
    "slug": "biomolecules-biology",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BM"
  },
  {
    "id": "cell_cycle",
    "name": "Cell Cycle and Cell Division",
    "slug": "cell-cycle-and-cell-division",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "CCD"
  },

  {
    "id": "photosynthesis",
    "name": "Photosynthesis in Higher Plants",
    "slug": "photosynthesis-in-higher-plants",
    "allowedTypes": ["reactions", "constants", "exceptions", "short_tricks"],
    "icon": "PH"
  },
  {
    "id": "respiration_plants",
    "name": "Respiration in Plants",
    "slug": "respiration-in-plants",
    "allowedTypes": ["reactions", "constants", "exceptions", "short_tricks"],
    "icon": "RP"
  },
  {
    "id": "plant_growth",
    "name": "Plant Growth and Development",
    "slug": "plant-growth-and-development",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "PGD"
  },

  {
    "id": "breathing_exchange",
    "name": "Breathing and Exchange of Gases",
    "slug": "breathing-and-exchange-of-gases",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BEG"
  },
  {
    "id": "body_fluids",
    "name": "Body Fluids and Circulation",
    "slug": "body-fluids-and-circulation",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BFC"
  },
  {
    "id": "excretory_system",
    "name": "Excretory Products and Their Elimination",
    "slug": "excretory-products-and-their-elimination",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "EP"
  },
  {
    "id": "locomotion",
    "name": "Locomotion and Movement",
    "slug": "locomotion-and-movement",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "LM"
  },
  {
    "id": "neural_control",
    "name": "Neural Control and Coordination",
    "slug": "neural-control-and-coordination",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "NCC"
  },
  {
    "id": "chemical_coordination",
    "name": "Chemical Coordination and Integration",
    "slug": "chemical-coordination-and-integration",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "CCI"
  },

  {
    "id": "sexual_reproduction_plants",
    "name": "Sexual Reproduction in Flowering Plants",
    "slug": "sexual-reproduction-in-flowering-plants",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "SRP"
  },
  {
    "id": "human_reproduction",
    "name": "Human Reproduction",
    "slug": "human-reproduction",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "HR"
  },
  {
    "id": "reproductive_health",
    "name": "Reproductive Health",
    "slug": "reproductive-health",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "RH"
  },
  {
    "id": "inheritance_variation",
    "name": "Principles of Inheritance and Variation",
    "slug": "principles-of-inheritance-and-variation",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "PIV"
  },
  {
    "id": "molecular_basis",
    "name": "Molecular Basis of Inheritance",
    "slug": "molecular-basis-of-inheritance",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "MBI"
  },
  {
    "id": "evolution",
    "name": "Evolution",
    "slug": "evolution",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "EV"
  },
  {
    "id": "human_health",
    "name": "Human Health and Disease",
    "slug": "human-health-and-disease",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "HHD"
  },

  {
    "id": "microbes",
    "name": "Microbes in Human Welfare",
    "slug": "microbes-in-human-welfare",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "MHW"
  },
  {
    "id": "biotech_principles",
    "name": "Biotechnology - Principles and Processes",
    "slug": "biotechnology-principles-and-processes",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BPP"
  },
  {
    "id": "biotech_applications",
    "name": "Biotechnology and Its Applications",
    "slug": "biotechnology-and-its-applications",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BTA"
  },
  {
    "id": "organisms_population",
    "name": "Organisms and Populations",
    "slug": "organisms-and-populations",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "OP"
  },
  {
    "id": "ecosystem",
    "name": "Ecosystem",
    "slug": "ecosystem",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "ECO"
  },
  {
    "id": "biodiversity",
    "name": "Biodiversity and Conservation",
    "slug": "biodiversity-and-conservation",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BCON"
  }
],
};

// Biology content organized by topic
export const biologyContent: Record<string, Record<ContentType, ContentItem[]>> = {
  "human-physiology": {
    formulas: [],
    short_tricks: [
      {
        id: "hp-t1",
        title: "Heart Chambers Memory",
        content:
          '"LA-RA-LV-RV"\n\n• LA receives from: Pulmonary veins (O2 rich blood)\n• RA receives from: Vena cava (deoxygenated blood)\n• LV pumps to: Aorta (to body)\n• RV pumps to: Pulmonary artery (to lungs)\n\nLeft side = Oxygenated\nRight side = Deoxygenated',
        importance: "high",
        examFrequency: "Diagram questions",
      },
      {
        id: "hp-t2",
        title: "Blood Group Compatibility",
        content:
          'Universal Donor: O (no antigens on RBC)\nUniversal Acceptor: AB (no antibodies in plasma)\n\nRemember: "O gives to All, AB takes from All"\n\nRh factor: + can receive from -, but not vice versa',
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "hp-t3",
        title: "Digestive Enzymes Location",
        content:
          'Mouth: Salivary amylase (starch -> maltose)\nStomach: Pepsin (protein -> peptides)\nPancreas: Trypsin, lipase, amylase\nSmall intestine: Final digestion and absorption\n\nTrick: "MoST Smart" = Mouth-Stomach-Small intestine',
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "hp-t4",
        title: "Hormones and Glands",
        content:
          "Pituitary (Master gland):\n• GH, TSH, ACTH, FSH, LH, Prolactin\n\nThyroid: T3, T4 (metabolism)\nAdrenal: Cortisol, Adrenaline\nPancreas: Insulin, Glucagon\nGonads: Testosterone/Estrogen",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "hp-t5",
        title: "Nephron Structure",
        content:
          "Blood flow: Afferent -> Glomerulus -> Efferent\n\nFiltrate path:\nBowmans capsule -> PCT -> Loop of Henle -> DCT -> Collecting duct\n\nPCT: Maximum reabsorption\nLoop: Countercurrent multiplication\nDCT: Fine-tuning, hormone regulated",
        importance: "high",
        examFrequency: "Diagram questions",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [
      {
        id: "hp-e1",
        title: "Bombay Blood Group Exception",
        content:
          "Bombay Phenotype (hh):\n\n• Has h antigen, lacks H antigen\n• Cannot receive O blood (has H antigen)\n• Can only receive from other Bombay phenotype\n• Extremely rare (1 in 10,000 in India)\n• Appears as O type but cannot accept O blood",
        importance: "medium",
        examFrequency: "Rare but important",
      },
      {
        id: "hp-e2",
        title: "Rh Incompatibility",
        content:
          "Erythroblastosis fetalis:\n\n• Mother Rh-, Father Rh+\n• First pregnancy usually safe\n• Second Rh+ child at risk\n• Mothers antibodies attack fetal RBCs\n\nPrevention: RhoGAM injection after first pregnancy",
        importance: "high",
        examFrequency: "Important concept",
      },
    ],
  },
  genetics: {
    formulas: [
      {
        id: "g1",
        title: "Hardy-Weinberg Equation",
        content:
          "$$p^2 + 2pq + q^2 = 1$$\n$$p + q = 1$$\n\nWhere:\n• $p$ = frequency of dominant allele\n• $q$ = frequency of recessive allele\n• $p^2$ = homozygous dominant frequency\n• $2pq$ = heterozygous frequency\n• $q^2$ = homozygous recessive frequency",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "g2",
        title: "Chi-Square Test",
        content:
          "$$\\chi^2 = \\sum \\frac{(O - E)^2}{E}$$\n\nO = Observed frequency\nE = Expected frequency\n\nUsed to test if deviation from expected ratio is significant",
        importance: "medium",
        examFrequency: "Statistical genetics",
      },
    ],
    short_tricks: [
      {
        id: "gt1",
        title: "Punnett Square Ratios",
        content:
          "Memorize these ratios:\n\n• Monohybrid: 3:1 (phenotype), 1:2:1 (genotype)\n• Dihybrid: 9:3:3:1\n• Incomplete dominance: 1:2:1\n• Codominance: 1:2:1\n• Test cross: 1:1 (if heterozygous)\n\nF1 x F1 = F2 ratios above",
        importance: "high",
        examFrequency: "Every genetics problem",
      },
      {
        id: "gt2",
        title: "X-Linked Inheritance Pattern",
        content:
          "For X-linked recessive traits:\n\n• Affected males >> Affected females\n• Carrier females pass to 50% sons\n• Father CANNOT pass to sons (gives Y)\n• All daughters of affected father are carriers\n\nExamples: Color blindness, Hemophilia, DMD",
        importance: "high",
        examFrequency: "Pedigree questions",
      },
      {
        id: "gt3",
        title: "Genetic Code Features",
        content:
          "Triplet: 3 nucleotides = 1 codon\nDegenerate: Multiple codons for same amino acid\nUniversal: Same in almost all organisms\nNon-overlapping: Read sequentially\nComma-less: No gaps between codons\n\nStart: AUG (Methionine)\nStop: UAA, UAG, UGA",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [
      {
        id: "ge1",
        title: "Exceptions to Mendels Laws",
        content:
          "Non-Mendelian Inheritance:\n\n• Incomplete dominance: Blending (pink snapdragon)\n• Codominance: Both expressed (AB blood type)\n• Epistasis: One gene masks another\n• Polygenic: Multiple genes for one trait (skin color)\n• Pleiotropy: One gene, many effects (PKU)\n• Linkage: Genes on same chromosome",
        importance: "high",
        examFrequency: "Advanced questions",
      },
      {
        id: "ge2",
        title: "Exceptions to Central Dogma",
        content:
          "Reverse transcription: RNA -> DNA (retroviruses)\nRNA replication: RNA -> RNA (RNA viruses)\nPrions: Protein -> Protein (no nucleic acid)\n\nCentral dogma: DNA -> RNA -> Protein",
        importance: "medium",
        examFrequency: "Molecular biology",
      },
    ],
  },
  ecology: {
    formulas: [],
    short_tricks: [
      {
        id: "ec-t1",
        title: "Ecological Pyramids",
        content:
          "Always upright:\n• Pyramid of energy (10% rule)\n\nCan be inverted:\n• Pyramid of numbers (parasites)\n• Pyramid of biomass (aquatic ecosystems)\n\n10% Rule: Only 10% energy transfers to next level",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec-t2",
        title: "Ecological Succession",
        content:
          "Primary: Bare rock -> Lichens -> Mosses -> Herbs -> Shrubs -> Trees\n\nSecondary: Faster, soil already present\n\nPioneer species: First colonizers (lichens)\nClimax community: Final stable stage",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [
      {
        id: "ec-e1",
        title: "Inverted Pyramids",
        content:
          "Inverted Pyramid of Numbers:\n• Tree ecosystem (1 tree supports many insects)\n• Parasitic food chain\n\nInverted Pyramid of Biomass:\n• Aquatic ecosystem (phytoplankton < zooplankton)\n\nNever inverted: Pyramid of Energy",
        importance: "high",
        examFrequency: "Important concept",
      },
    ],
  },
  "cell-biology": {
    formulas: [],
    short_tricks: [
      {
        id: "cb-t1",
        title: "Cell Organelles Functions",
        content:
          "Nucleus: DNA storage, control center\nMitochondria: ATP production (powerhouse)\nRibosomes: Protein synthesis\nER: Rough (protein), Smooth (lipid)\nGolgi: Packaging, modification\nLysosomes: Digestion (suicide bags)\nVacuole: Storage (large in plants)",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cb-t2",
        title: "Mitosis vs Meiosis",
        content:
          "MITOSIS:\n• 1 division, 2 cells\n• Diploid -> Diploid (2n -> 2n)\n• Identical daughter cells\n• Growth and repair\n\nMEIOSIS:\n• 2 divisions, 4 cells\n• Diploid -> Haploid (2n -> n)\n• Genetic variation\n• Gamete formation",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cb-t3",
        title: "Cell Cycle Phases",
        content:
          "Interphase (I phase):\n• G1: Cell growth\n• S: DNA replication\n• G2: Preparation for division\n\nM phase: Mitosis + Cytokinesis\n\nG0: Quiescent state (non-dividing)",
        importance: "high",
        examFrequency: "Frequently asked",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [
      {
        id: "cb-e1",
        title: "Cells Without Organelles",
        content:
          "Prokaryotes lack:\n• Membrane-bound nucleus\n• Mitochondria\n• ER, Golgi\n• Lysosomes\n\nMature RBCs lack:\n• Nucleus\n• Mitochondria\n• Most organelles",
        importance: "medium",
        examFrequency: "Comparison questions",
      },
    ],
  },
  "plant-physiology": {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  reproduction: {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
};


