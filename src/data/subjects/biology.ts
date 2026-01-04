// Biology subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const biologySubject: SubjectConfig = {
  id: "biology",
  name: "Biology",
  slug: "biology",
  icon: "B",
  topics: [
    {
      id: "human-physiology",
      name: "Human Physiology",
      slug: "human-physiology",
      allowedTypes: ["short_tricks", "exceptions"],
      icon: "H",
    },
    {
      id: "plant-physiology",
      name: "Plant Physiology",
      slug: "plant-physiology",
      allowedTypes: ["short_tricks", "reactions"],
      icon: "P",
    },
    {
      id: "genetics",
      name: "Genetics",
      slug: "genetics",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "G",
    },
    {
      id: "ecology",
      name: "Ecology",
      slug: "ecology",
      allowedTypes: ["short_tricks", "exceptions"],
      icon: "E",
    },
    {
      id: "cell-biology",
      name: "Cell Biology",
      slug: "cell-biology",
      allowedTypes: ["short_tricks", "exceptions"],
      icon: "C",
    },
    {
      id: "reproduction",
      name: "Reproduction",
      slug: "reproduction",
      allowedTypes: ["short_tricks", "exceptions"],
      icon: "R",
    },
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

