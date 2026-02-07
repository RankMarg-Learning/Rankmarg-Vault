// Chemistry subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const chemistrySubject: SubjectConfig = {
  id: "chemistry",
  name: "Chemistry",
  slug: "chemistry",
  icon: "C",
  topics: [
    {
      id: "basic_concepts_chemistry",
      name: "Some Basic Concepts in Chemistry",
      slug: "some-basic-concepts-in-chemistry",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "SBC",
    },
    {
      id: "structure_atom",
      name: "Structure of Atom",
      slug: "structure-of-atom",
      allowedTypes: ["formulas", "short_tricks", "constants", "exceptions"],
      icon: "SA",
    },
    {
      id: "periodicity",
      name: "Classification of Elements and Periodicity",
      slug: "classification-of-elements-and-periodicity",
      allowedTypes: ["short_tricks", "constants", "exceptions"],
      icon: "P",
    },
    {
      id: "chemical_bonding",
      name: "Chemical Bonding and Molecular Structure",
      slug: "chemical-bonding-and-molecular-structure",
      allowedTypes: ["formulas", "short_tricks", "constants", "exceptions"],
      icon: "CB",
    },
    {
      id: "thermodynamics_chem",
      name: "Thermodynamics",
      slug: "thermodynamics-chemistry",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "TD",
    },
    {
      id: "ionic_equilibrium",
      name: "Ionic Equilibrium",
      slug: "ionic-equilibrium",
      allowedTypes: ["formulas", "short_tricks", "constants", "exceptions"],
      icon: "IE",
    },
    {
      id: "chemical_equilibrium",
      name: "Chemical Equilibrium",
      slug: "chemical-equilibrium",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "CEQ",
    },
    {
      id: "redox",
      name: "Redox Reactions",
      slug: "redox-reactions",
      allowedTypes: ["reactions", "short_tricks"],
      icon: "R",
    },
    {
      id: "electrochemistry",
      name: "Electrochemistry",
      slug: "electrochemistry",
      allowedTypes: ["formulas", "short_tricks", "constants", "exceptions"],
      icon: "EC",
    },
    {
      id: "chemical_kinetics",
      name: "Chemical Kinetics",
      slug: "chemical-kinetics",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "CK",
    },
    {
      id: "solutions",
      name: "Solutions",
      slug: "solutions",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "S",
    },
    {
      id: "p_block",
      name: "The p-Block Elements",
      slug: "p-block-elements",
      allowedTypes: ["reactions", "constants", "exceptions", "short_tricks"],
      icon: "PB",
    },
    {
      id: "d_f_block",
      name: "The d- and f-Block Elements",
      slug: "d-and-f-block-elements",
      allowedTypes: ["constants", "exceptions", "short_tricks"],
      icon: "DF",
    },
    {
      id: "coordination_compounds",
      name: "Coordination Compounds",
      slug: "coordination-compounds",
      allowedTypes: ["formulas", "constants", "exceptions", "short_tricks"],
      icon: "CC",
    },
    {
      id: "goc",
      name: "General Organic Chemistry (GOC)",
      slug: "general-organic-chemistry",
      allowedTypes: ["reactions", "short_tricks", "exceptions"],
      icon: "GOC",
    },
    {
      id: "hydrocarbons",
      name: "Hydrocarbons",
      slug: "hydrocarbons",
      allowedTypes: ["reactions", "short_tricks", "exceptions"],
      icon: "HC",
    },
    {
      id: "haloalkanes",
      name: "Haloalkanes and Haloarenes",
      slug: "haloalkanes-and-haloarenes",
      allowedTypes: ["reactions", "short_tricks", "exceptions"],
      icon: "HX",
    },
    {
      id: "alcohols",
      name: "Alcohols, Phenols and Ethers",
      slug: "alcohols-phenols-ethers",
      allowedTypes: ["reactions", "short_tricks", "exceptions"],
      icon: "APE",
    },
    {
      id: "carbonyls",
      name: "Aldehydes, Ketones, and Carboxylic Acids",
      slug: "aldehydes-ketones-carboxylic-acids",
      allowedTypes: ["reactions", "short_tricks", "exceptions"],
      icon: "AKC",
    },
    {
      id: "amines",
      name: "Amines",
      slug: "amines",
      allowedTypes: ["reactions", "short_tricks", "exceptions"],
      icon: "AM",
    },
    {
      id: "biomolecules",
      name: "Biomolecules",
      slug: "biomolecules",
      allowedTypes: ["constants", "exceptions", "short_tricks"],
      icon: "BM",
    },
  ],
};

// Chemistry content organized by topic
export const chemistryContent: Record<
  string,
  Record<ContentType, ContentItem[]>
> = {
  basic_concepts_chemistry: {
    formulas: [
      {
        id: "sbc1",
        title: "Mole",
        content:
          "$$n = \\frac{m}{M}$$\n\nWhere:\n• $n$ = number of moles\n• $m$ = given mass (g)\n• $M$ = molar mass (g/mol)",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "sbc2",
        title: "Number of Particles",
        content:
          "$$N = n \\times N_A$$\n\nWhere:\n• $N$ = number of particles\n• $n$ = number of moles\n• $N_A$ = Avogadro constant ($6.022 \\times 10^{23}$ mol⁻¹)",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "sbc3",
        title: "Avogadro Constant",
        content:
          "$$N_A = 6.022 \\times 10^{23} \\text{ mol}^{-1}$$\n\nRepresents number of particles in one mole of substance.",
        importance: "high",
        examFrequency: "Conceptual questions every year",
      },
      {
        id: "sbc4",
        title: "Molar Mass",
        content:
          "$$M = \\frac{m}{n}$$\n\nWhere:\n• $M$ = molar mass (g/mol)\n• $m$ = mass (g)\n• $n$ = moles",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sbc5",
        title: "Mass Percentage",
        content:
          "$$\\text{Mass %} = \\frac{\\text{Mass of component}}{\\text{Total mass}} \\times 100$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sbc6",
        title: "Empirical Formula",
        content:
          "$$\\text{Empirical Formula} = \\frac{\\text{Simplest whole number ratio of atoms}}{}$$\n\nSteps:\n• Convert % to mass\n• Convert mass to moles\n• Divide by smallest mole value",
        importance: "high",
        examFrequency: "Very frequent",
      },
      {
        id: "sbc7",
        title: "Molecular Formula",
        content:
          "$$\\text{Molecular Formula} = (\\text{Empirical Formula})_n$$\n\nWhere:\n$$n = \\frac{\\text{Molar mass}}{\\text{Empirical formula mass}}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sbc8",
        title: "Limiting Reagent Concept",
        content:
          "$$\\text{Limiting reagent} = \\text{Reactant consumed first}$$\n\nDetermines maximum amount of product formed.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sbc9",
        title: "Theoretical Yield",
        content:
          "$$\\text{Theoretical Yield} = \\text{Calculated maximum product obtained}$$",
        importance: "medium",
        examFrequency: "Frequent",
      },
      {
        id: "sbc10",
        title: "Percentage Yield",
        content:
          "$$\\text{Percentage Yield} = \\frac{\\text{Actual Yield}}{\\text{Theoretical Yield}} \\times 100$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sbc11",
        title: "Concentration (Molarity)",
        content:
          "$$M = \\frac{n}{V}$$\n\nWhere:\n• $M$ = molarity (mol/L)\n• $n$ = moles of solute\n• $V$ = volume of solution (L)",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sbc12",
        title: "Dilution Formula",
        content:
          "$$M_1V_1 = M_2V_2$$\n\nUsed when solution is diluted with solvent.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sbc13",
        title: "Molality",
        content: "$$m = \\frac{n}{\\text{mass of solvent (kg)}}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "sbc14",
        title: "Mole Fraction",
        content: "$$X_A = \\frac{n_A}{n_A + n_B}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "sbc15",
        title: "Normality",
        content: "$$N = \\frac{\\text{gram equivalents}}{\\text{volume (L)}}$$",
        importance: "medium",
        examFrequency: "Occasional (NEET)",
      },
    ],
    short_tricks: [
      {
        id: "sbcst1",
        title: "Mole Concept – Avogadro Superstar Trick",
        content: `
### 🎬 Movie Trick: "3 Idiots = 6.022 × 10^23 Friends"

1 mole = 
$$ 6.022 × 10^{23} $$
particles

🧠 Hindi Trick:
**"6 वाली गाड़ी, 23 की सवारी"**

Avogadro Number:
$$ N_A = 6.022 × 10^{23} $$

Formula:
$$ n = \\frac{Given\\ Quantity}{Molar\\ Quantity} $$

For mass:
$$ n = \\frac{m}{M} $$

🎵 Song Hook:
*"Apna Time Aayega"* → Mole ka time har numerical mein aayega 😄

📌 Concept Anchor:
Mole connects **mass ↔ particles ↔ volume**

`,
        importance: "high",
        examFrequency: "Very Frequent (1–2 direct questions in NEET/JEE Main)"
      },

      {
        id: "sbcst2",
        title: "Molar Mass Shortcut – Atomic Weight Game",
        content: `
### 🎬 Bollywood Trick: "Total Family Weight"

Molar Mass = Sum of atomic masses

Example:
$$ H_2O $$
= 2(1) + 16 = 18 g/mol

🧠 Hindi Sentence:
**"पूरे परिवार का वजन जोड़ो"**

Glucose:
$$ C_6H_{12}O_6 $$
= 6(12) + 12(1) + 6(16)

🎵 Song Hook:
*"Sabka Weight Add Karo"* 😄

📌 Important:
Molar mass unit = g/mol

`,
        importance: "high",
        examFrequency: "Very Frequent (Base of all mole numericals)"
      },

      {
        id: "sbcst3",
        title: "Empirical vs Molecular Formula – Ratio Story",
        content: `
### 🎬 Movie Trick: "Baahubali vs Original Story"

Empirical Formula = Simplest ratio  
Molecular Formula = Actual formula  

Relation:
$$ Molecular\\ Formula = (Empirical\\ Formula)^{n} $$

Where:
$$ n = \\frac{Molecular\\ Mass}{Empirical\\ Mass} $$

🧠 Hindi Trick:
**"सरल पहले, असली बाद में"**

Example:
Empirical = CH₂  
Molecular Mass = 28  
Empirical Mass = 14  

$$ n = 2 $$  
Molecular = C₂H₄

🎵 Song Hook:
*"Picture Abhi Baaki Hai"* → Actual formula baad mein aata hai 😄

`,
        importance: "high",
        examFrequency: "Frequently asked in NEET & JEE"
      },

      {
        id: "sbcst4",
        title: "Percentage Composition – Marksheet Trick",
        content: `
### 📊 Marksheet Memory Method

Formula:
$$ \\%\\ by\\ mass = \\frac{Mass\\ of\\ element}{Molar\\ Mass} × 100 $$

🧠 Hindi Trick:
**"अपने नंबर / कुल नंबर × 100"**

Example:
In H₂O:
% H =
$$ \\frac{2}{18} × 100 $$

🎵 Song Hook:
*"Give Me Some Sunshine"* → Percentage hamesha 100 ke aas paas 😄

📌 Important:
Total % always = 100

`,
        importance: "high",
        examFrequency: "Common in NEET"
      },

      {
        id: "sbcst5",
        title: "Stoichiometry – Recipe Formula Trick",
        content: `
### 🍲 Recipe Method

Balanced Equation = Recipe

Example:
$$ 2H_2 + O_2 → 2H_2O $$

Mole Ratio:
2 : 1 : 2

🧠 Hindi Trick:
**"रसोई की तरह नाप-तोल जरूरी"**

Steps:
1. Convert given to moles
2. Apply mole ratio
3. Convert back to required quantity

🎵 Song Hook:
*"Jod Jod Ke"* → Coefficients yaad rakho 😄

`,
        importance: "high",
        examFrequency: "Extremely Frequent (Core of Physical Chemistry)"
      },

      {
        id: "sbcst6",
        title: "Limiting Reagent – Wedding Food Trick",
        content: `
### 🍛 Shaadi Function Trick

Limiting reagent = Jo pehle khatam ho jaye

🧠 Hindi Trick:
**"जो पहले खत्म, वही लिमिट"**

Formula:
Compare:
$$ \\frac{Given}{Coefficient} $$

Smallest value → Limiting reagent

Example:
If required ratio 2:1  
But available 1:1  
→ Hydrogen limiting

🎬 Movie Hook:
*"Zindagi Na Milegi Dobara"* → Extra reagent waste ho jata hai 😄

`,
        importance: "high",
        examFrequency: "Very Frequent in JEE & NEET Numericals"
      },

      {
        id: "sbcst7",
        title: "Molarity & Molality – Cold Drink Trick",
        content: `
### 🥤 Solution Shortcut

Molarity (M):
$$ M = \\frac{moles}{Volume (L)} $$

Depends on temperature

Molality (m):
$$ m = \\frac{moles}{kg\\ of\\ solvent} $$

Independent of temperature

🧠 Hindi Trick:
**"Molarity = Volume वाली, Molality = Weight वाली"**

🎵 Song Hook:
*"Garmi Mein Volume Badhta"* 😄

📌 Important:
Volume changes with temperature, mass does not.

`,
        importance: "high",
        examFrequency: "Frequently asked in NEET & JEE Main"
      }
    ]
    ,
    constants: [],
    exceptions: [],
    reactions: [],
  },
  structure_atom: {
    formulas: [
      {
        id: "sa1",
        title: "Speed of Electron in nth Orbit (Bohr Model)",
        content:
          "$$v_n = \\frac{2\\pi k Z e^2}{n h}$$\n\nWhere:\n• $v_n$ = velocity of electron\n• $Z$ = atomic number\n• $n$ = principal quantum number\n• $h$ = Planck's constant\n• $e$ = charge of electron",
        importance: "high",
        examFrequency: "Conceptual questions every year",
      },
      {
        id: "sa2",
        title: "Radius of nth Orbit (Bohr Radius)",
        content:
          "$$r_n = \\frac{n^2 h^2}{4\\pi^2 m k Z e^2}$$\n\nFor hydrogen:\n$$r_n = n^2 a_0$$\nWhere $a_0 = 0.529 \\text{ Å}$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa3",
        title: "Energy of Electron in nth Orbit",
        content: "$$E_n = -\\frac{13.6 Z^2}{n^2} \\text{ eV}$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "sa4",
        title: "Energy Difference During Transition",
        content: "$$\\Delta E = E_2 - E_1$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa5",
        title: "Rydberg Formula for Hydrogen Spectrum",
        content:
          "$$\\frac{1}{\\lambda} = RZ^2 \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right)$$\n\nWhere:\n• $R$ = Rydberg constant\n• $n_2 > n_1$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa6",
        title: "Frequency of Radiation Emitted or Absorbed",
        content: "$$\\nu = \\frac{\\Delta E}{h}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa7",
        title: "Wavelength–Frequency Relation",
        content: "$$c = \\lambda \\nu$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa8",
        title: "Energy of Photon",
        content: "$$E = h\\nu = \\frac{hc}{\\lambda}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa9",
        title: "de Broglie Wavelength",
        content: "$$\\lambda = \\frac{h}{mv}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa10",
        title: "Heisenberg Uncertainty Principle",
        content: "$$\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "sa11",
        title: "Photoelectric Effect Equation",
        content:
          "$$h\\nu = W_0 + \\frac{1}{2}mv^2$$\n\nWhere:\n• $W_0$ = work function",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa12",
        title: "Threshold Frequency",
        content: "$$\\nu_0 = \\frac{W_0}{h}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa13",
        title: "Principal Quantum Number",
        content:
          "$$n = 1, 2, 3, ...$$\n\nDetermines energy level and size of orbital.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa14",
        title: "Azimuthal Quantum Number",
        content: "$$l = 0 \\text{ to } (n-1)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa15",
        title: "Magnetic Quantum Number",
        content: "$$m_l = -l \\text{ to } +l$$",
        importance: "medium",
        examFrequency: "Frequent",
      },
      {
        id: "sa16",
        title: "Spin Quantum Number",
        content: "$$m_s = +\\frac{1}{2}, -\\frac{1}{2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa17",
        title: "Maximum Number of Electrons in a Shell",
        content: "$$2n^2$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sa18",
        title: "Maximum Number of Orbitals in a Shell",
        content: "$$n^2$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "sa19",
        title: "Number of Orbitals in a Subshell",
        content: "$$2l + 1$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  periodicity: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  chemical_bonding: {
    formulas: [
      {
        id: "cbf1",
        title: "Formal Charge",
        content: "$$FC = V - N - \\frac{B}{2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cbf2",
        title: "Bond Order (Lewis / MOT)",
        content: "$$BO = \\frac{N_b - N_a}{2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cbf3",
        title: "Bond Length Relation",
        content:
          "$$\\text{Bond Length} \\propto \\frac{1}{\\text{Bond Order}}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cbf4",
        title: "Bond Energy Relation",
        content: "$$\\text{Bond Energy} \\propto \\text{Bond Order}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cbf5",
        title: "Dipole Moment",
        content: "$$\\mu = q \\times r$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cbf6",
        title: "Percentage Ionic Character",
        content: "$$\\%IC = \\frac{\\mu_{obs}}{\\mu_{calc}} \\times 100$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "cbf7",
        title: "Pauling Electronegativity Relation",
        content: "$$|\\chi_A - \\chi_B| = 0.208 \\sqrt{\\Delta E}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "cbf8",
        title: "Steric Number",
        content: "$$SN = \\text{Bonded atoms} + \\text{Lone pairs}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cbf9",
        title: "Hybridization Rule",
        content:
          "$$SN = 2 \\rightarrow sp,\\; 3 \\rightarrow sp^2,\\; 4 \\rightarrow sp^3,\\; 5 \\rightarrow sp^3d,\\; 6 \\rightarrow sp^3d^2$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cbf10",
        title: "Sigma and Pi Bonds",
        content:
          "$$\\text{Single} = 1\\sigma,\\; \\text{Double} = 1\\sigma + 1\\pi,\\; \\text{Triple} = 1\\sigma + 2\\pi$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  thermodynamics_chem: {
    formulas: [
      {
        id: "td1",
        title: "First Law of Thermodynamics",
        content: "$$\\Delta U = q + w$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td2",
        title: "Work Done (PV Work)",
        content: "$$w = -P_{ext}\\Delta V$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td3",
        title: "Work Done (Isothermal, Reversible)",
        content: "$$w = -nRT \\ln \\frac{V_2}{V_1}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td4",
        title: "Internal Energy Change (Ideal Gas)",
        content: "$$\\Delta U = nC_V\\Delta T$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td5",
        title: "Enthalpy",
        content: "$$H = U + PV$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td6",
        title: "Enthalpy Change",
        content: "$$\\Delta H = \\Delta U + \\Delta(PV)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td7",
        title: "Enthalpy Change (Ideal Gas)",
        content: "$$\\Delta H = nC_P\\Delta T$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td8",
        title: "Relation Between Cp and Cv",
        content: "$$C_P - C_V = R$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td9",
        title: "Adiabatic Process Relation",
        content: "$$PV^\\gamma = \\text{constant}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td10",
        title: "Adiabatic Temperature Relation",
        content: "$$TV^{\\gamma-1} = \\text{constant}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td11",
        title: "Adiabatic Temperature–Pressure Relation",
        content: "$$T^\\gamma P^{1-\\gamma} = \\text{constant}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "td12",
        title: "Entropy Change",
        content: "$$\\Delta S = \\frac{q_{rev}}{T}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td13",
        title: "Entropy Change (Isothermal Ideal Gas)",
        content: "$$\\Delta S = nR \\ln \\frac{V_2}{V_1}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td14",
        title: "Gibbs Free Energy",
        content: "$$G = H - TS$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td15",
        title: "Gibbs Free Energy Change",
        content: "$$\\Delta G = \\Delta H - T\\Delta S$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td16",
        title: "Gibbs–Helmholtz Equation",
        content:
          "$$\\left( \\frac{\\partial (G/T)}{\\partial T} \\right)_P = -\\frac{H}{T^2}$$",
        importance: "medium",
        examFrequency: "Occasional (JEE)",
      },
      {
        id: "td17",
        title: "Spontaneity Condition",
        content: "$$\\Delta G < 0$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td18",
        title: "Standard Gibbs Energy and Equilibrium Constant",
        content: "$$\\Delta G^\\circ = -RT \\ln K$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td19",
        title: "Heat Capacity",
        content: "$$q = nC\\Delta T$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td20",
        title: "Kirchhoff’s Equation",
        content: "$$\\frac{d(\\Delta H)}{dT} = \\Delta C_P$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  ionic_equilibrium: {
    formulas: [
      {
        id: "ie1",
        title: "Ionic Product of Water",
        content: "$$K_w = [H^+][OH^-]$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie2",
        title: "pH Definition",
        content: "$$pH = -\\log[H^+]$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie3",
        title: "pOH Definition",
        content: "$$pOH = -\\log[OH^-]$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie4",
        title: "Relation Between pH and pOH",
        content: "$$pH + pOH = 14$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie5",
        title: "Acid Dissociation Constant",
        content: "$$K_a = \\frac{[H^+][A^-]}{[HA]}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie6",
        title: "Base Dissociation Constant",
        content: "$$K_b = \\frac{[BH^+][OH^-]}{[B]}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie7",
        title: "Relation Between Ka and Kb",
        content: "$$K_a \\times K_b = K_w$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie8",
        title: "Degree of Dissociation",
        content:
          "$$\\alpha = \\frac{\\text{Moles dissociated}}{\\text{Total moles}}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ie9",
        title: "Ostwald’s Dilution Law (Weak Acid)",
        content: "$$K_a = \\frac{C\\alpha^2}{1 - \\alpha}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie10",
        title: "Ostwald’s Dilution Law (Weak Base)",
        content: "$$K_b = \\frac{C\\alpha^2}{1 - \\alpha}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie11",
        title: "Hydrogen Ion Concentration (Weak Acid)",
        content: "$$[H^+] = \\sqrt{K_a C}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie12",
        title: "Hydroxide Ion Concentration (Weak Base)",
        content: "$$[OH^-] = \\sqrt{K_b C}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie13",
        title: "pH of Weak Acid",
        content: "$$pH = \\frac{1}{2}(pK_a - \\log C)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie14",
        title: "pOH of Weak Base",
        content: "$$pOH = \\frac{1}{2}(pK_b - \\log C)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie15",
        title: "Common Ion Effect Condition",
        content: "$$\\alpha \\downarrow \\text{ in presence of common ion}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie16",
        title: "Solubility Product",
        content: "$$K_{sp} = [A^+][B^-]$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie17",
        title: "Solubility (1:1 Salt)",
        content: "$$K_{sp} = S^2$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie18",
        title: "Solubility (1:2 Salt)",
        content: "$$K_{sp} = 4S^3$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie19",
        title: "Ionic Product vs Ksp",
        content:
          "$$Q < K_{sp} \\Rightarrow \\text{No precipitate}$$\n$$Q = K_{sp} \\Rightarrow \\text{Saturated}$$\n$$Q > K_{sp} \\Rightarrow \\text{Precipitate forms}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ie20",
        title: "Buffer Equation (Henderson–Hasselbalch)",
        content: "$$pH = pK_a + \\log \\frac{[\\text{Salt}]}{[\\text{Acid}]}$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  chemical_equilibrium: {
    formulas: [
      {
        id: "ce1",
        title: "Law of Mass Action",
        content: "$$K_c = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce2",
        title: "Equilibrium Constant in Terms of Partial Pressure",
        content: "$$K_p = \\frac{(P_C)^c (P_D)^d}{(P_A)^a (P_B)^b}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce3",
        title: "Relation Between Kp and Kc",
        content: "$$K_p = K_c (RT)^{\\Delta n}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce4",
        title: "Change in Number of Moles",
        content: "$$\\Delta n = (c + d) - (a + b)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce5",
        title: "Reaction Quotient",
        content: "$$Q = \\frac{[C]^c [D]^d}{[A]^a [B]^b}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce6",
        title: "Gibbs Free Energy Change",
        content: "$$\\Delta G = \\Delta G^\\circ + RT \\ln Q$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce7",
        title: "Standard Gibbs Energy and Equilibrium Constant",
        content: "$$\\Delta G^\\circ = -RT \\ln K$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce8",
        title: "Equilibrium Condition",
        content: "$$\\Delta G = 0$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce9",
        title: "Van’t Hoff Equation",
        content:
          "$$\\ln \\frac{K_2}{K_1} = \\frac{\\Delta H^\\circ}{R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce10",
        title: "Degree of Dissociation",
        content:
          "$$\\alpha = \\frac{\\text{Moles dissociated}}{\\text{Total moles}}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ce11",
        title: "Equilibrium Constant (Dissociation Reaction)",
        content: "$$K_c = \\frac{C\\alpha^2}{1 - \\alpha}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce12",
        title: "Equilibrium Constant for Association",
        content: "$$K_c = \\frac{1 - \\alpha}{C\\alpha^2}$$",
        importance: "high",
        examFrequency: "Occasional",
      },
      {
        id: "ce13",
        title: "Relation Between K and pH (Acidic Equilibrium)",
        content: "$$pH = \\frac{1}{2}(pK_a - \\log C)$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ce14",
        title: "Effect of Temperature (Exothermic)",
        content: "$$T \\uparrow \\Rightarrow K \\downarrow$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce15",
        title: "Effect of Temperature (Endothermic)",
        content: "$$T \\uparrow \\Rightarrow K \\uparrow$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  redox: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  electrochemistry: {
    formulas: [
      {
        id: "ec1",
        title: "Electrode Potential of Cell",
        content: "$$E_{cell} = E_{cathode} - E_{anode}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec2",
        title: "Standard Cell Potential",
        content: "$$E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec3",
        title: "Gibbs Energy and Cell Potential",
        content: "$$\\Delta G = -nFE_{cell}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec4",
        title: "Standard Gibbs Energy and Standard Cell Potential",
        content: "$$\\Delta G^\\circ = -nF E^\\circ_{cell}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec5",
        title: "Nernst Equation (General)",
        content: "$$E = E^\\circ - \\frac{RT}{nF} \\ln Q$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec6",
        title: "Nernst Equation at 298 K",
        content: "$$E = E^\\circ - \\frac{0.0591}{n} \\log Q$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec7",
        title: "Relation Between Equilibrium Constant and Cell Potential",
        content: "$$E^\\circ = \\frac{0.0591}{n} \\log K$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec8",
        title: "Faraday’s First Law of Electrolysis",
        content: "$$m = ZIt$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec9",
        title: "Faraday’s Second Law of Electrolysis",
        content: "$$\\frac{m_1}{m_2} = \\frac{E_1}{E_2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec10",
        title: "Charge Passed",
        content: "$$Q = It$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec11",
        title: "Relation Between Charge and Moles of Electrons",
        content: "$$Q = nF$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec12",
        title: "Conductance",
        content: "$$G = \\frac{1}{R}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec13",
        title: "Specific Conductance (Conductivity)",
        content: "$$\\kappa = \\frac{l}{RA}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec14",
        title: "Molar Conductivity",
        content: "$$\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec15",
        title: "Molar Conductivity at Infinite Dilution",
        content:
          "$$\\Lambda_m^\\circ = \\lambda_+^\\circ + \\lambda_-^\\circ$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec16",
        title: "Degree of Dissociation (Weak Electrolyte)",
        content: "$$\\alpha = \\frac{\\Lambda_m}{\\Lambda_m^\\circ}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec17",
        title: "Ostwald’s Dilution Law (Weak Electrolyte)",
        content: "$$K = \\frac{C\\alpha^2}{1 - \\alpha}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ec18",
        title: "Cell Constant",
        content: "$$\\text{Cell Constant} = \\frac{l}{A}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  chemical_kinetics: {
    formulas: [
      {
        id: "ck1",
        title: "Rate of Reaction",
        content: "$$\\text{Rate} = -\\frac{d[A]}{dt} = \\frac{d[P]}{dt}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck2",
        title: "Rate Law Expression",
        content: "$$\\text{Rate} = k[A]^m[B]^n$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck3",
        title: "Order of Reaction",
        content: "$$\\text{Order} = m + n$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck4",
        title: "Zero Order Reaction (Integrated Rate Law)",
        content: "$$[A] = [A]_0 - kt$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck5",
        title: "Half-life of Zero Order Reaction",
        content: "$$t_{1/2} = \\frac{[A]_0}{2k}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck6",
        title: "First Order Reaction (Integrated Rate Law)",
        content: "$$\\ln \\frac{[A]_0}{[A]} = kt$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck7",
        title: "First Order Reaction (Base 10)",
        content: "$$k = \\frac{2.303}{t} \\log \\frac{[A]_0}{[A]}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck8",
        title: "Half-life of First Order Reaction",
        content: "$$t_{1/2} = \\frac{0.693}{k}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck9",
        title: "Second Order Reaction (Integrated Rate Law)",
        content: "$$\\frac{1}{[A]} = kt + \\frac{1}{[A]_0}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck10",
        title: "Half-life of Second Order Reaction",
        content: "$$t_{1/2} = \\frac{1}{k[A]_0}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck11",
        title: "Arrhenius Equation",
        content: "$$k = A e^{-E_a/RT}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck12",
        title: "Log Form of Arrhenius Equation",
        content: "$$\\log k = \\log A - \\frac{E_a}{2.303RT}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck13",
        title: "Two-Temperature Arrhenius Equation",
        content:
          "$$\\log \\frac{k_2}{k_1} = \\frac{E_a}{2.303R} \\left( \\frac{1}{T_1} - \\frac{1}{T_2} \\right)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ck14",
        title: "Average Life of First Order Reaction",
        content: "$$t_{avg} = \\frac{1}{k}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ck15",
        title: "Collision Frequency Relation",
        content: "$$k \\propto Z e^{-E_a/RT}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  solutions: {
    formulas: [
      {
        id: "sol1",
        title: "Mass Percentage",
        content:
          "$$\\text{Mass %} = \\frac{\\text{Mass of solute}}{\\text{Mass of solution}} \\times 100$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol2",
        title: "Volume Percentage",
        content:
          "$$\\text{Volume %} = \\frac{\\text{Volume of solute}}{\\text{Volume of solution}} \\times 100$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol3",
        title: "Mole Fraction",
        content: "$$X_A = \\frac{n_A}{n_A + n_B}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol4",
        title: "Molarity",
        content: "$$M = \\frac{n}{V}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol5",
        title: "Molality",
        content: "$$m = \\frac{n}{\\text{mass of solvent (kg)}}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol6",
        title: "Henry’s Law",
        content: "$$p = k_H x$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol7",
        title: "Raoult’s Law (Volatile Solute)",
        content: "$$p_A = x_A p_A^\\circ$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol8",
        title: "Lowering of Vapour Pressure",
        content: "$$\\frac{p_A^\\circ - p_A}{p_A^\\circ} = x_B$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol9",
        title: "Elevation in Boiling Point",
        content: "$$\\Delta T_b = K_b m$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol10",
        title: "Depression in Freezing Point",
        content: "$$\\Delta T_f = K_f m$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol11",
        title: "Osmotic Pressure",
        content: "$$\\pi = CRT$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol12",
        title: "van’t Hoff Factor",
        content:
          "$$i = \\frac{\\text{Observed colligative property}}{\\text{Calculated colligative property}}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol13",
        title: "Colligative Property (With van’t Hoff Factor)",
        content:
          "$$\\Delta T_b = iK_b m$$\n$$\\Delta T_f = iK_f m$$\n$$\\pi = iCRT$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "sol14",
        title: "Molar Mass by Osmotic Pressure",
        content: "$$M = \\frac{wRT}{\\pi V}$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  p_block: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  d_f_block: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  coordination_compounds: {
    formulas: [
      {
        id: "cc1",
        title: "Oxidation Number",
        content:
          "$$\\sum (\\text{Oxidation state of metal + ligands}) = \\text{Charge on complex}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc2",
        title: "Coordination Number",
        content:
          "$$\\text{Coordination Number} = \\text{Number of donor atoms attached to metal}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc3",
        title: "Effective Atomic Number (EAN)",
        content:
          "$$EAN = Z - O + 2n$$\n\nWhere:\n• $Z$ = atomic number\n• $O$ = oxidation state\n• $n$ = number of ligands",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc4",
        title: "Crystal Field Splitting Energy (Octahedral)",
        content: "$$\\Delta_o = 10Dq$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc5",
        title: "Crystal Field Splitting Energy (Tetrahedral)",
        content: "$$\\Delta_t = \\frac{4}{9} \\Delta_o$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc6",
        title: "Pairing Energy Condition",
        content:
          "$$\\Delta_o > P \\Rightarrow \\text{Low spin}$$\n$$\\Delta_o < P \\Rightarrow \\text{High spin}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc7",
        title: "Magnetic Moment (Spin-only)",
        content: "$$\\mu = \\sqrt{n(n+2)} \\text{ BM}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc8",
        title: "Ligand Field Stabilization Energy (Octahedral)",
        content: "$$LFSE = (-0.4x + 0.6y)\\Delta_o$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc9",
        title: "Ligand Field Stabilization Energy (Tetrahedral)",
        content: "$$LFSE = (-0.6x + 0.4y)\\Delta_t$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cc10",
        title: "Molar Conductance",
        content: "$$\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  goc: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  hydrocarbons: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  haloalkanes: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  alcohols: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  carbonyls: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  amines: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  biomolecules: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
};
