// Chemistry subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const chemistrySubject: SubjectConfig = {
  id: "chemistry",
  name: "Chemistry",
  slug: "chemistry",
  icon: "C",
  topics: [
  {
    "id": "basic_concepts_chemistry",
    "name": "Some Basic Concepts in Chemistry",
    "slug": "some-basic-concepts-in-chemistry",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "SBC"
  },
  {
    "id": "structure_atom",
    "name": "Structure of Atom",
    "slug": "structure-of-atom",
    "allowedTypes": ["formulas", "short_tricks", "constants", "exceptions"],
    "icon": "SA"
  },
  {
    "id": "periodicity",
    "name": "Classification of Elements and Periodicity",
    "slug": "classification-of-elements-and-periodicity",
    "allowedTypes": ["short_tricks", "constants", "exceptions"],
    "icon": "P"
  },
  {
    "id": "chemical_bonding",
    "name": "Chemical Bonding and Molecular Structure",
    "slug": "chemical-bonding-and-molecular-structure",
    "allowedTypes": ["formulas", "short_tricks", "constants", "exceptions"],
    "icon": "CB"
  },
  {
    "id": "thermodynamics_chem",
    "name": "Thermodynamics",
    "slug": "thermodynamics-chemistry",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "TD"
  },
  {
    "id": "ionic_equilibrium",
    "name": "Ionic Equilibrium",
    "slug": "ionic-equilibrium",
    "allowedTypes": ["formulas", "short_tricks", "constants", "exceptions"],
    "icon": "IE"
  },
  {
    "id": "chemical_equilibrium",
    "name": "Chemical Equilibrium",
    "slug": "chemical-equilibrium",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "CEQ"
  },
  {
    "id": "redox",
    "name": "Redox Reactions",
    "slug": "redox-reactions",
    "allowedTypes": ["reactions", "short_tricks"],
    "icon": "R"
  },
  {
    "id": "electrochemistry",
    "name": "Electrochemistry",
    "slug": "electrochemistry",
    "allowedTypes": ["formulas", "short_tricks", "constants", "exceptions"],
    "icon": "EC"
  },
  {
    "id": "chemical_kinetics",
    "name": "Chemical Kinetics",
    "slug": "chemical-kinetics",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "CK"
  },
  {
    "id": "solutions",
    "name": "Solutions",
    "slug": "solutions",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "S"
  },
  {
    "id": "p_block",
    "name": "The p-Block Elements",
    "slug": "p-block-elements",
    "allowedTypes": ["reactions", "constants", "exceptions", "short_tricks"],
    "icon": "PB"
  },
  {
    "id": "d_f_block",
    "name": "The d- and f-Block Elements",
    "slug": "d-and-f-block-elements",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "DF"
  },
  {
    "id": "coordination_compounds",
    "name": "Coordination Compounds",
    "slug": "coordination-compounds",
    "allowedTypes": ["formulas", "constants", "exceptions", "short_tricks"],
    "icon": "CC"
  },
  {
    "id": "goc",
    "name": "General Organic Chemistry (GOC)",
    "slug": "general-organic-chemistry",
    "allowedTypes": ["reactions", "short_tricks", "exceptions"],
    "icon": "GOC"
  },
  {
    "id": "hydrocarbons",
    "name": "Hydrocarbons",
    "slug": "hydrocarbons",
    "allowedTypes": ["reactions", "short_tricks", "exceptions"],
    "icon": "HC"
  },
  {
    "id": "haloalkanes",
    "name": "Haloalkanes and Haloarenes",
    "slug": "haloalkanes-and-haloarenes",
    "allowedTypes": ["reactions", "short_tricks", "exceptions"],
    "icon": "HX"
  },
  {
    "id": "alcohols",
    "name": "Alcohols, Phenols and Ethers",
    "slug": "alcohols-phenols-ethers",
    "allowedTypes": ["reactions", "short_tricks", "exceptions"],
    "icon": "APE"
  },
  {
    "id": "carbonyls",
    "name": "Aldehydes, Ketones, and Carboxylic Acids",
    "slug": "aldehydes-ketones-carboxylic-acids",
    "allowedTypes": ["reactions", "short_tricks", "exceptions"],
    "icon": "AKC"
  },
  {
    "id": "amines",
    "name": "Amines",
    "slug": "amines",
    "allowedTypes": ["reactions", "short_tricks", "exceptions"],
    "icon": "AM"
  },
  {
    "id": "biomolecules",
    "name": "Biomolecules",
    "slug": "biomolecules",
    "allowedTypes": ["constants", "exceptions", "short_tricks"],
    "icon": "BM"
  }
],
};

// Chemistry content organized by topic
export const chemistryContent: Record<string, Record<ContentType, ContentItem[]>> = {
  "organic-reactions": {
    formulas: [],
    short_tricks: [
      {
        id: "or-t1",
        title: "Markovnikov Rule Memory",
        content:
          '"Rich get Richer"\n\nH goes to Carbon with MORE H atoms\nX (halogen) goes to Carbon with FEWER H atoms\n\nApplies to: HX addition to unsymmetrical alkenes',
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "or-t2",
        title: "SN1 vs SN2 Quick Check",
        content:
          "SN1 favors:\n• 3 > 2 > 1 degree (carbocation stability)\n• Polar protic solvents (H-bonding)\n• Weak nucleophiles\n\nSN2 favors:\n• 1 > 2 degree (3 doesnt work - steric)\n• Polar aprotic solvents\n• Strong nucleophiles\n• Inversion of configuration",
        importance: "high",
        examFrequency: "Mechanism questions",
      },
      {
        id: "or-t3",
        title: "E1 vs E2 Quick Check",
        content:
          "E1 (2 steps):\n• 3 > 2 > 1 degree\n• Polar protic solvents\n• Weak bases\n• Follows Zaitsev\n\nE2 (1 step - concerted):\n• Strong bases (OH-, OR-)\n• Anti-periplanar geometry required\n• Follows Zaitsev usually",
        importance: "high",
        examFrequency: "Mechanism questions",
      },
      {
        id: "or-t4",
        title: "Acidity Order of Organic Acids",
        content:
          "More acidic to less:\n\nCarboxylic acids > Phenols > Alcohols > Alkynes > Ammonia > Alkenes > Alkanes\n\nReason: Stability of conjugate base",
        importance: "medium",
        examFrequency: "Comparison questions",
      },
    ],
    reactions: [
      {
        id: "or-r1",
        title: "Friedel-Crafts Alkylation",
        content:
          "$\\text{C}_6\\text{H}_6 + \\text{RX} \\xrightarrow{\\text{AlCl}_3} \\text{C}_6\\text{H}_5\\text{R} + \\text{HX}$\n\nCatalyst: AlCl3 (anhydrous)\n\nLimitation: Doesnt work with deactivated rings (NO2, CN groups)\nProblem: Polyalkylation can occur",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "or-r2",
        title: "Aldol Condensation",
        content:
          "$2 \\text{CH}_3\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\text{CH}_3\\text{CH(OH)CH}_2\\text{CHO}$\n\n$\\xrightarrow{\\Delta} \\text{CH}_3\\text{CH=CHCHO} + \\text{H}_2\\text{O}$\n\nRequirement: Aldehydes/ketones with alpha-hydrogen",
        importance: "high",
        examFrequency: "Name reactions",
      },
      {
        id: "or-r3",
        title: "Cannizzaro Reaction",
        content:
          "$2 \\text{HCHO} + \\text{NaOH} \\rightarrow \\text{HCOONa} + \\text{CH}_3\\text{OH}$\n\nFor: Aldehydes WITHOUT alpha-hydrogen\nType: Self oxidation-reduction (disproportionation)",
        importance: "high",
        examFrequency: "Name reactions",
      },
      {
        id: "or-r4",
        title: "Wurtz Reaction",
        content:
          "$2\\text{R-X} + 2\\text{Na} \\xrightarrow{\\text{dry ether}} \\text{R-R} + 2\\text{NaX}$\n\nUse: Synthesis of higher alkanes (even carbon)\nWorks best with 1 degree alkyl halides\n\nWurtz-Fittig: Aryl-X + Alkyl-X gives Ar-R",
        importance: "medium",
        examFrequency: "Often asked",
      },
      {
        id: "or-r5",
        title: "Kolbe Electrolysis",
        content:
          "$2\\text{RCOONa} \\xrightarrow{\\text{electrolysis}} \\text{R-R} + 2\\text{CO}_2 + 2\\text{Na}$\n\nAt anode: 2RCOO- -> R-R + 2CO2 + 2e-\nUse: Synthesis of symmetrical alkanes",
        importance: "medium",
        examFrequency: "Name reactions",
      },
      {
        id: "or-r6",
        title: "Grignard Reaction",
        content:
          "$\\text{RMgX} + \\text{H}_2\\text{O} \\rightarrow \\text{RH} + \\text{Mg(OH)X}$\n\nWith aldehydes: Gives secondary alcohols\nWith ketones: Gives tertiary alcohols\nWith CO2: Gives carboxylic acids\nWith formaldehyde: Gives primary alcohols",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "or-r7",
        title: "Ozonolysis",
        content:
          "$\\text{Alkene} \\xrightarrow{1. O_3, 2. Zn/H_2O} \\text{Aldehydes/Ketones}$\n\nReductive: Zn/H2O (gives aldehydes/ketones)\nOxidative: H2O2 (aldehydes become acids)",
        importance: "high",
        examFrequency: "Structure determination",
      },
    ],
    constants: [],
    exceptions: [
      {
        id: "or-e1",
        title: "Anti-Markovnikov Addition",
        content:
          "Exception to Markovnikov Rule:\n\nHBr + Peroxide + Alkene -> Anti-Markovnikov product\n\n• H goes to C with LESS H atoms\n• Only with HBr (not HCl or HI)\n• Called Kharasch effect or Peroxide effect\n• Free radical mechanism",
        importance: "high",
        examFrequency: "Tricky questions",
      },
      {
        id: "or-e2",
        title: "Saytzeff vs Hofmann Elimination",
        content:
          "Saytzeff (usual): More substituted alkene\nHofmann: Less substituted alkene\n\nHofmann occurs with:\n• Bulky bases (t-BuO-)\n• Quaternary ammonium salts\n• Poor leaving groups",
        importance: "medium",
        examFrequency: "Advanced questions",
      },
    ],
  },
  "inorganic-chemistry": {
    formulas: [],
    short_tricks: [
      {
        id: "ic-t1",
        title: "d-Block Electronic Configuration",
        content:
          "Exceptions to remember:\n\nCr: [Ar] 3d5 4s1 (half-filled stability)\nCu: [Ar] 3d10 4s1 (fully-filled stability)\n\nMo: [Kr] 4d5 5s1\nAg: [Kr] 4d10 5s1\nAu: [Xe] 4f14 5d10 6s1",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ic-t2",
        title: "Color of Transition Metal Compounds",
        content:
          "Purple: KMnO4 (Mn7+), CrO5\nGreen: Cr2O3, FeSO4·7H2O, NiO\nBlue: CuSO4·5H2O, [Cu(NH3)4]2+\nYellow: K2CrO4, FeCl3\nOrange: K2Cr2O7\nBlack: CuO, MnO2, FeO",
        importance: "high",
        examFrequency: "Identification",
      },
      {
        id: "ic-t3",
        title: "Magnetic Moment Formula",
        content:
          "$\\mu = \\sqrt{n(n+2)}$ BM\n\nWhere n = number of unpaired electrons\n\nn=1: 1.73 BM\nn=2: 2.83 BM\nn=3: 3.87 BM\nn=4: 4.90 BM\nn=5: 5.92 BM",
        importance: "high",
        examFrequency: "Calculation",
      },
    ],
    reactions: [
      {
        id: "ic-r1",
        title: "Brown Ring Test",
        content:
          "$\\text{FeSO}_4 + \\text{NO} \\rightarrow [\\text{Fe(H}_2\\text{O)}_5\\text{NO}]^{2+}$\n\nBrown ring at junction of two layers\nTest for: Nitrate ions (NO3-)\nH2SO4 + Nitrate gives NO",
        importance: "high",
        examFrequency: "Qualitative analysis",
      },
      {
        id: "ic-r2",
        title: "Thermite Reaction",
        content:
          "$2\\text{Al} + \\text{Fe}_2\\text{O}_3 \\xrightarrow{\\Delta} 2\\text{Fe} + \\text{Al}_2\\text{O}_3$\n\nHighly exothermic reaction\nUsed for welding rails, incendiary devices\nAl is the reducing agent",
        importance: "medium",
        examFrequency: "Metallurgy",
      },
      {
        id: "ic-r3",
        title: "Chrome Yellow Preparation",
        content:
          "$\\text{Pb(NO}_3\\text{)}_2 + \\text{K}_2\\text{CrO}_4 \\rightarrow \\text{PbCrO}_4 \\downarrow + 2\\text{KNO}_3$\n\nPbCrO4 is yellow precipitate\nUsed as yellow pigment in paints",
        importance: "low",
        examFrequency: "Compound properties",
      },
    ],
    constants: [],
    exceptions: [
      {
        id: "ic-e1",
        title: "Lanthanide Contraction",
        content:
          "Cause: Poor shielding by 4f electrons\n\nResults:\n• Size of 4d and 5d elements similar\n• Zr/Hf, Nb/Ta, Mo/W have similar properties\n• Separation of lanthanides difficult\n• Higher ionization energy for later lanthanides",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ic-e2",
        title: "Anomalous Properties of Zinc",
        content:
          "Zinc is NOT a typical transition metal:\n\n• Zn2+ has d10 (no unpaired electrons)\n• Diamagnetic\n• Colorless compounds\n• Fixed +2 oxidation state\n• No variable valency",
        importance: "medium",
        examFrequency: "Definition questions",
      },
    ],
  },
  "physical-chemistry": {
    formulas: [
      {
        id: "pc1",
        title: "Rate Law",
        content:
          "$$\\text{Rate} = k[A]^m[B]^n$$\n\nOrder = m + n\n\nUnits of k for nth order:\n$$[k] = (\\text{conc})^{1-n} \\cdot \\text{time}^{-1}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "pc2",
        title: "First Order Kinetics",
        content:
          "$$k = \\frac{2.303}{t} \\log\\frac{[A]_0}{[A]}$$\n\n$$t_{1/2} = \\frac{0.693}{k}$$ (independent of concentration)\n\n$$[A] = [A]_0 e^{-kt}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "pc3",
        title: "Arrhenius Equation",
        content:
          "$$k = Ae^{-E_a/RT}$$\n\n$$\\ln k = \\ln A - \\frac{E_a}{RT}$$\n\nFor two temperatures:\n$$\\ln\\frac{k_2}{k_1} = \\frac{E_a}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "pc4",
        title: "Nernst Equation",
        content:
          "$$E = E^\\circ - \\frac{RT}{nF}\\ln Q$$\n\nAt 25 deg C:\n$$E = E^\\circ - \\frac{0.059}{n}\\log Q$$\n\nAt equilibrium: E = 0, Q = K",
        importance: "high",
        examFrequency: "Electrochemistry",
      },
      {
        id: "pc5",
        title: "Raoults Law",
        content:
          "$$P_A = P_A^\\circ \\cdot x_A$$\n\nFor ideal solution: $P_{total} = P_A^\\circ x_A + P_B^\\circ x_B$\n\nRelative lowering of vapor pressure:\n$$\\frac{P^\\circ - P}{P^\\circ} = x_{solute}$$",
        importance: "high",
        examFrequency: "Solutions",
      },
      {
        id: "pc6",
        title: "Vant Hoff Factor",
        content:
          "$$i = \\frac{\\text{Observed colligative property}}{\\text{Calculated colligative property}}$$\n\nFor association: $i < 1$\nFor dissociation: $i > 1$\n\n$\\alpha = \\frac{i-1}{n-1}$ for dissociation",
        importance: "high",
        examFrequency: "Colligative properties",
      },
    ],
    short_tricks: [
      {
        id: "pct1",
        title: "Colligative Properties Memory",
        content:
          "ROEB for colligative properties:\n\n• Relative lowering of VP\n• Osmotic pressure\n• Elevation of BP: $\\Delta T_b = K_b m$\n• Depression of FP: $\\Delta T_f = K_f m$\n\nAll depend on NUMBER of particles, not nature",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "pct2",
        title: "pH Calculation Shortcuts",
        content:
          "Strong acid: pH = -log[H+]\nStrong base: pOH = -log[OH-], pH = 14 - pOH\n\nWeak acid: pH = 1/2(pKa - log C)\nBuffer: pH = pKa + log([salt]/[acid])\n\nAt half-equivalence: pH = pKa",
        importance: "high",
        examFrequency: "Every calculation",
      },
    ],
    reactions: [],
    constants: [
      {
        id: "pcc1",
        title: "Faraday Constant",
        content:
          "$$F = 96500 \\text{ C/mol}$$\n\nCharge of 1 mole of electrons\n\nElectrochemical equivalent:\n$$Z = \\frac{M}{nF}$$\n\nMass deposited: $m = ZIt$",
        importance: "high",
        examFrequency: "Electrochemistry",
      },
      {
        id: "pcc2",
        title: "Avogadro Number",
        content:
          "$$N_A = 6.022 \\times 10^{23} \\text{ mol}^{-1}$$\n\nNumber of particles in 1 mole\n\nAt STP (0 deg C, 1 atm):\n1 mole of ideal gas = 22.4 L",
        importance: "high",
        examFrequency: "Fundamental",
      },
    ],
    exceptions: [],
  },
  "chemical-bonding": {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  electrochemistry: {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  "chemical-kinetics": {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
};


