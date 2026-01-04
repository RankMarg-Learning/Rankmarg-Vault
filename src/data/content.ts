// Static content data for RankVault - No database required

export type ExamType = "JEE" | "NEET";

export type ContentType =
  | "formulas"
  | "short_tricks"
  | "reactions"
  | "constants"
  | "exceptions";

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  importance: "high" | "medium" | "low";
  examFrequency: string;
}

export interface TopicConfig {
  id: string;
  name: string;
  allowedTypes: ContentType[];
  icon: string;
}

export interface SubjectConfig {
  id: string;
  name: string;
  icon: string;
  topics: TopicConfig[];
}

export interface ExamConfig {
  id: ExamType;
  name: string;
  fullName: string;
  subjects: SubjectConfig[];
}

export const contentTypeLabels: Record<
  ContentType,
  { label: string; icon: string; color: string }
> = {
  formulas: {
    label: "Formulas",
    icon: "F",
    color: "bg-primary text-primary-foreground",
  },
  short_tricks: {
    label: "Short Tricks",
    icon: "T",
    color: "bg-accent text-accent-foreground",
  },
  reactions: {
    label: "Reactions",
    icon: "R",
    color: "bg-warning text-warning-foreground",
  },
  constants: {
    label: "Constants",
    icon: "C",
    color: "bg-info text-info-foreground",
  },
  exceptions: {
    label: "Exceptions",
    icon: "E",
    color: "bg-destructive text-destructive-foreground",
  },
};

export const examsData: ExamConfig[] = [
  {
    id: "JEE",
    name: "JEE",
    fullName: "Joint Entrance Examination",
    subjects: [
      {
        id: "physics-jee",
        name: "Physics",
        icon: "P",
        topics: [
          {
            id: "kinematics",
            name: "Kinematics",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "K",
          },
          {
            id: "thermodynamics",
            name: "Thermodynamics",
            allowedTypes: ["formulas", "short_tricks", "constants"],
            icon: "T",
          },
          {
            id: "electromagnetism",
            name: "Electromagnetism",
            allowedTypes: ["formulas", "short_tricks", "constants"],
            icon: "E",
          },
          {
            id: "optics",
            name: "Optics",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "O",
          },
          {
            id: "modern-physics",
            name: "Modern Physics",
            allowedTypes: ["formulas", "constants"],
            icon: "M",
          },
          {
            id: "rotational-mechanics",
            name: "Rotational Mechanics",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "R",
          },
          {
            id: "waves",
            name: "Waves & Sound",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "W",
          },
        ],
      },
      {
        id: "chemistry-jee",
        name: "Chemistry",
        icon: "C",
        topics: [
          {
            id: "organic-reactions",
            name: "Organic Reactions",
            allowedTypes: ["reactions", "short_tricks", "exceptions"],
            icon: "O",
          },
          {
            id: "inorganic-chemistry",
            name: "Inorganic Chemistry",
            allowedTypes: ["reactions", "exceptions", "short_tricks"],
            icon: "I",
          },
          {
            id: "physical-chemistry",
            name: "Physical Chemistry",
            allowedTypes: ["formulas", "short_tricks", "constants"],
            icon: "P",
          },
          {
            id: "chemical-bonding",
            name: "Chemical Bonding",
            allowedTypes: ["formulas", "exceptions"],
            icon: "B",
          },
          {
            id: "electrochemistry",
            name: "Electrochemistry",
            allowedTypes: ["formulas", "short_tricks", "constants"],
            icon: "E",
          },
          {
            id: "chemical-kinetics",
            name: "Chemical Kinetics",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "K",
          },
        ],
      },
      {
        id: "mathematics-jee",
        name: "Mathematics",
        icon: "M",
        topics: [
          {
            id: "calculus",
            name: "Calculus",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "C",
          },
          {
            id: "algebra",
            name: "Algebra",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "A",
          },
          {
            id: "coordinate-geometry",
            name: "Coordinate Geometry",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "G",
          },
          {
            id: "trigonometry",
            name: "Trigonometry",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "T",
          },
          {
            id: "probability",
            name: "Probability & Statistics",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "P",
          },
          {
            id: "vectors",
            name: "Vectors & 3D",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "V",
          },
          {
            id: "matrices",
            name: "Matrices & Determinants",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "M",
          },
        ],
      },
    ],
  },
  {
    id: "NEET",
    name: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    subjects: [
      {
        id: "physics-neet",
        name: "Physics",
        icon: "P",
        topics: [
          {
            id: "mechanics-neet",
            name: "Mechanics",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "M",
          },
          {
            id: "waves-neet",
            name: "Waves & Oscillations",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "W",
          },
          {
            id: "thermodynamics-neet",
            name: "Thermodynamics",
            allowedTypes: ["formulas", "constants"],
            icon: "T",
          },
          {
            id: "electrostatics-neet",
            name: "Electrostatics",
            allowedTypes: ["formulas", "short_tricks"],
            icon: "E",
          },
          {
            id: "current-electricity",
            name: "Current Electricity",
            allowedTypes: ["formulas", "short_tricks", "constants"],
            icon: "C",
          },
        ],
      },
      {
        id: "chemistry-neet",
        name: "Chemistry",
        icon: "C",
        topics: [
          {
            id: "organic-neet",
            name: "Organic Chemistry",
            allowedTypes: ["reactions", "short_tricks", "exceptions"],
            icon: "O",
          },
          {
            id: "inorganic-neet",
            name: "Inorganic Chemistry",
            allowedTypes: ["reactions", "exceptions"],
            icon: "I",
          },
          {
            id: "physical-neet",
            name: "Physical Chemistry",
            allowedTypes: ["formulas", "constants"],
            icon: "P",
          },
          {
            id: "biomolecules",
            name: "Biomolecules",
            allowedTypes: ["short_tricks", "reactions"],
            icon: "B",
          },
        ],
      },
      {
        id: "biology-neet",
        name: "Biology",
        icon: "B",
        topics: [
          {
            id: "human-physiology",
            name: "Human Physiology",
            allowedTypes: ["short_tricks", "exceptions"],
            icon: "H",
          },
          {
            id: "plant-physiology",
            name: "Plant Physiology",
            allowedTypes: ["short_tricks", "reactions"],
            icon: "P",
          },
          {
            id: "genetics",
            name: "Genetics",
            allowedTypes: ["formulas", "short_tricks", "exceptions"],
            icon: "G",
          },
          {
            id: "ecology",
            name: "Ecology",
            allowedTypes: ["short_tricks", "exceptions"],
            icon: "E",
          },
          {
            id: "cell-biology",
            name: "Cell Biology",
            allowedTypes: ["short_tricks", "exceptions"],
            icon: "C",
          },
          {
            id: "reproduction",
            name: "Reproduction",
            allowedTypes: ["short_tricks", "exceptions"],
            icon: "R",
          },
        ],
      },
    ],
  },
];

// Comprehensive content data with LaTeX support
export const contentData: Record<string, Record<ContentType, ContentItem[]>> = {
  kinematics: {
    formulas: [
      {
        id: "k1",
        title: "First Equation of Motion",
        content:
          "$$v = u + at$$\n\nWhere:\n• $v$ = final velocity (m/s)\n• $u$ = initial velocity (m/s)\n• $a$ = acceleration (m/s²)\n• $t$ = time (s)",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "k2",
        title: "Second Equation of Motion",
        content:
          "$$s = ut + \\frac{1}{2}at^2$$\n\nWhere:\n• $s$ = displacement (m)\n• $u$ = initial velocity (m/s)\n• $a$ = acceleration (m/s²)\n• $t$ = time (s)",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "k3",
        title: "Third Equation of Motion",
        content:
          "$$v^2 = u^2 + 2as$$\n\nUseful when time is not given in the problem.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "k4",
        title: "Projectile Motion - Range",
        content:
          "$$R = \\frac{u^2 \\sin 2\\theta}{g}$$\n\nMaximum range occurs at $\\theta = 45°$\n\nFor complementary angles: $R_{\\theta} = R_{90°-\\theta}$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "k5",
        title: "Projectile Motion - Max Height",
        content:
          "$$H = \\frac{u^2 \\sin^2\\theta}{2g}$$\n\nMaximum height is achieved at the midpoint of trajectory.",
        importance: "medium",
        examFrequency: "Often asked",
      },
      {
        id: "k6",
        title: "Time of Flight",
        content:
          "$$T = \\frac{2u \\sin\\theta}{g}$$\n\nTime to reach max height = $\\frac{T}{2}$",
        importance: "medium",
        examFrequency: "Often asked",
      },
      {
        id: "k7",
        title: "Relative Velocity",
        content:
          "$$\\vec{v}_{AB} = \\vec{v}_A - \\vec{v}_B$$\n\nFor rain-man problems:\n$$v_{rm} = \\sqrt{v_r^2 + v_m^2}$$\n$$\\tan\\theta = \\frac{v_m}{v_r}$$",
        importance: "high",
        examFrequency: "Common in JEE",
      },
      {
        id: "k8",
        title: "Projectile on Inclined Plane",
        content:
          "$$R = \\frac{2u^2 \\sin(\\alpha - \\beta) \\cos\\alpha}{g \\cos^2\\beta}$$\n\nWhere:\n• $\\alpha$ = angle of projection\n• $\\beta$ = angle of incline",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
    ],
    short_tricks: [
      {
        id: "kt1",
        title: "SUVAT Memory Trick",
        content:
          'Remember: "Some Very Amazing Teachers"\n\n• S = displacement\n• U = initial velocity\n• V = final velocity\n• A = acceleration\n• T = time\n\nAny equation missing one variable can be derived!',
        importance: "high",
        examFrequency: "Fundamental",
      },
      {
        id: "kt2",
        title: "Projectile Symmetry",
        content:
          "At same height on trajectory:\n• Speed magnitude is SAME (going up and down)\n• Velocity magnitude equal, direction different\n• Time to reach = Time to fall back\n• Horizontal velocity constant throughout",
        importance: "high",
        examFrequency: "Tricky questions",
      },
      {
        id: "kt3",
        title: "Relative Motion Shortcut",
        content:
          "For two objects:\n\nSame direction:\n$v_{rel} = v_1 - v_2$\n\nOpposite direction:\n$v_{rel} = v_1 + v_2$\n\nAt angle $\\theta$:\n$v_{rel} = \\sqrt{v_1^2 + v_2^2 - 2v_1v_2\\cos\\theta}$",
        importance: "medium",
        examFrequency: "Common in problems",
      },
      {
        id: "kt4",
        title: "Average Velocity Shortcut",
        content:
          "For uniform acceleration:\n$$v_{avg} = \\frac{u + v}{2}$$\n\nFor equal distances at speeds $v_1$ and $v_2$:\n$$v_{avg} = \\frac{2v_1v_2}{v_1 + v_2}$$ (Harmonic mean)\n\nFor equal times:\n$$v_{avg} = \\frac{v_1 + v_2}{2}$$ (Arithmetic mean)",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  thermodynamics: {
    formulas: [
      {
        id: "t1",
        title: "First Law of Thermodynamics",
        content:
          "$$\\Delta U = Q - W$$\n\nOr: $Q = \\Delta U + W$\n\n• $Q$ = Heat added to system\n• $W$ = Work done BY system\n• $\\Delta U$ = Change in internal energy",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "t2",
        title: "Ideal Gas Equation",
        content:
          "$$PV = nRT$$\n\n• $P$ = Pressure (Pa)\n• $V$ = Volume (m³)\n• $n$ = Number of moles\n• $R$ = 8.314 J/(mol·K)\n• $T$ = Temperature (K)",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "t3",
        title: "Work in Isothermal Process",
        content:
          "$$W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right) = nRT \\ln\\left(\\frac{P_1}{P_2}\\right)$$\n\nFor isothermal: $\\Delta U = 0$, so $Q = W$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "t4",
        title: "Adiabatic Process Relations",
        content:
          "$$PV^\\gamma = \\text{constant}$$\n$$TV^{\\gamma-1} = \\text{constant}$$\n$$P^{1-\\gamma}T^\\gamma = \\text{constant}$$\n\nWhere $\\gamma = \\frac{C_P}{C_V}$",
        importance: "high",
        examFrequency: "Very important",
      },
      {
        id: "t5",
        title: "Work in Adiabatic Process",
        content:
          "$$W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$$\n\nFor adiabatic: $Q = 0$, so $W = -\\Delta U$",
        importance: "high",
        examFrequency: "Very important",
      },
      {
        id: "t6",
        title: "Carnot Efficiency",
        content:
          "$$\\eta = 1 - \\frac{T_C}{T_H} = \\frac{W}{Q_H}$$\n\nThis is the MAXIMUM possible efficiency for any heat engine operating between temperatures $T_H$ and $T_C$.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "t7",
        title: "Entropy Change",
        content:
          "$$\\Delta S = \\int \\frac{dQ}{T}$$\n\nFor isothermal process:\n$$\\Delta S = nR \\ln\\left(\\frac{V_2}{V_1}\\right)$$\n\nFor isobaric:\n$$\\Delta S = nC_P \\ln\\left(\\frac{T_2}{T_1}\\right)$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
    ],
    short_tricks: [
      {
        id: "tt1",
        title: "Process Memory: IAPI",
        content:
          "I-A-P-I for thermodynamic processes:\n\n• Isothermal: T constant, $PV$ = const\n• Adiabatic: Q = 0, $PV^\\gamma$ = const\n• Polytropic: $PV^n$ = const\n• Isobaric: P constant, $V/T$ = const\n• Isochoric: V constant, $P/T$ = const",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "tt2",
        title: "Gamma Values Quick Reference",
        content:
          "Gamma ($\\gamma = C_P/C_V$) values:\n\n• Monoatomic: $\\gamma = 5/3 = 1.67$\n• Diatomic: $\\gamma = 7/5 = 1.4$\n• Polyatomic: $\\gamma = 4/3 = 1.33$\n\nRemember: More atoms = Lower gamma",
        importance: "high",
        examFrequency: "Every calculation",
      },
      {
        id: "tt3",
        title: "Slope Comparison in PV Diagram",
        content:
          "Slope of adiabatic > Slope of isothermal\n\nAt same point: $\\frac{(dP/dV)_{adiabatic}}{(dP/dV)_{isothermal}} = \\gamma$\n\nAdiabatic is STEEPER than isothermal!",
        importance: "medium",
        examFrequency: "Graph questions",
      },
    ],
    reactions: [],
    constants: [
      {
        id: "tc1",
        title: "Universal Gas Constant",
        content:
          "$$R = 8.314 \\text{ J/(mol·K)}$$\n$$R = 0.0821 \\text{ L·atm/(mol·K)}$$\n$$R = 2 \\text{ cal/(mol·K)}$$",
        importance: "high",
        examFrequency: "Always needed",
      },
      {
        id: "tc2",
        title: "Boltzmann Constant",
        content:
          "$$k_B = 1.38 \\times 10^{-23} \\text{ J/K}$$\n\nRelation: $k_B = R/N_A$\n\nAverage KE per molecule:\n$$KE_{avg} = \\frac{3}{2}k_B T$$",
        importance: "medium",
        examFrequency: "Statistical mechanics",
      },
      {
        id: "tc3",
        title: "Stefan-Boltzmann Constant",
        content:
          "$$\\sigma = 5.67 \\times 10^{-8} \\text{ W/(m}^2\\text{K}^4\\text{)}$$\n\nPower radiated:\n$$P = \\sigma A e T^4$$",
        importance: "medium",
        examFrequency: "Heat transfer",
      },
    ],
    exceptions: [],
  },
  electromagnetism: {
    formulas: [
      {
        id: "em1",
        title: "Coulombs Law",
        content:
          "$$F = \\frac{1}{4\\pi\\epsilon_0} \\cdot \\frac{q_1 q_2}{r^2}$$\n\nIn vector form:\n$$\\vec{F} = \\frac{1}{4\\pi\\epsilon_0} \\cdot \\frac{q_1 q_2}{r^2} \\hat{r}$$\n\n$k = 9 \\times 10^9$ N·m²/C²",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "em2",
        title: "Electric Field",
        content:
          "$$\\vec{E} = \\frac{\\vec{F}}{q} = \\frac{1}{4\\pi\\epsilon_0} \\cdot \\frac{Q}{r^2} \\hat{r}$$\n\nField due to dipole on axis:\n$$E = \\frac{2kp}{r^3}$$\n\nOn equatorial line:\n$$E = \\frac{kp}{r^3}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "em3",
        title: "Gauss Law",
        content:
          "$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enc}}{\\epsilon_0}$$\n\nElectric flux:\n$$\\phi = \\vec{E} \\cdot \\vec{A} = EA\\cos\\theta$$",
        importance: "high",
        examFrequency: "Very important",
      },
      {
        id: "em4",
        title: "Capacitance Formulas",
        content:
          "Parallel plate:\n$$C = \\frac{\\epsilon_0 A}{d}$$\n\nSphere:\n$$C = 4\\pi\\epsilon_0 R$$\n\nEnergy stored:\n$$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "em5",
        title: "Biot-Savart Law",
        content:
          "$$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\cdot \\frac{I \\, d\\vec{l} \\times \\hat{r}}{r^2}$$\n\nField at center of loop:\n$$B = \\frac{\\mu_0 I}{2R}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "em6",
        title: "Amperes Law",
        content:
          "$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$$\n\nField due to infinite wire:\n$$B = \\frac{\\mu_0 I}{2\\pi r}$$",
        importance: "high",
        examFrequency: "Very important",
      },
      {
        id: "em7",
        title: "Faraday Law of EMF",
        content:
          "$$\\mathcal{E} = -\\frac{d\\phi_B}{dt} = -N\\frac{d\\phi_B}{dt}$$\n\nMotional EMF:\n$$\\mathcal{E} = Blv$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [
      {
        id: "emt1",
        title: "Right Hand Rules",
        content:
          "Cross Product: Curl fingers from first to second vector, thumb gives direction\n\nCurrent in Wire: Thumb = current, curl = magnetic field direction\n\nLorentz Force: Index = velocity, Middle = B field, Thumb = Force on positive charge",
        importance: "high",
        examFrequency: "Essential",
      },
      {
        id: "emt2",
        title: "Capacitor Combinations",
        content:
          "Series: $\\frac{1}{C_{eq}} = \\frac{1}{C_1} + \\frac{1}{C_2}$\nCharge same, Voltage adds\n\nParallel: $C_{eq} = C_1 + C_2$\nVoltage same, Charge adds\n\nRemember: Opposite of resistors!",
        importance: "high",
        examFrequency: "Every circuit problem",
      },
    ],
    reactions: [],
    constants: [
      {
        id: "emc1",
        title: "Permittivity of Free Space",
        content:
          "$$\\epsilon_0 = 8.85 \\times 10^{-12} \\text{ C}^2/\\text{N·m}^2$$\n\n$$\\frac{1}{4\\pi\\epsilon_0} = 9 \\times 10^9 \\text{ N·m}^2/\\text{C}^2$$",
        importance: "high",
        examFrequency: "Every electrostatics problem",
      },
      {
        id: "emc2",
        title: "Permeability of Free Space",
        content:
          "$$\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T·m/A}$$\n\n$$\\frac{\\mu_0}{4\\pi} = 10^{-7} \\text{ T·m/A}$$",
        importance: "high",
        examFrequency: "Every magnetism problem",
      },
      {
        id: "emc3",
        title: "Electron Charge and Mass",
        content:
          "$$e = 1.6 \\times 10^{-19} \\text{ C}$$\n$$m_e = 9.1 \\times 10^{-31} \\text{ kg}$$\n\n$$\\frac{e}{m_e} = 1.76 \\times 10^{11} \\text{ C/kg}$$",
        importance: "high",
        examFrequency: "Particle motion problems",
      },
    ],
    exceptions: [],
  },
  optics: {
    formulas: [
      {
        id: "op1",
        title: "Mirror Formula",
        content:
          "$$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$$\n\nMagnification:\n$$m = -\\frac{v}{u} = \\frac{h_i}{h_o}$$\n\nSign Convention: Real is positive for distance along incident ray",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "op2",
        title: "Lens Formula",
        content:
          "$$\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$$\n\nLensmakers equation:\n$$\\frac{1}{f} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "op3",
        title: "Snells Law",
        content:
          "$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$\n\nCritical angle:\n$$\\sin\\theta_c = \\frac{n_2}{n_1}$$ (for $n_1 > n_2$)",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "op4",
        title: "Young Double Slit",
        content:
          "Fringe width:\n$$\\beta = \\frac{\\lambda D}{d}$$\n\nPath difference for nth bright:\n$$\\Delta = n\\lambda$$\n\nFor nth dark:\n$$\\Delta = (2n-1)\\frac{\\lambda}{2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [
      {
        id: "opt1",
        title: "Real vs Virtual Image",
        content:
          "MIRRORS:\n• Concave: Real if object beyond F\n• Convex: Always virtual\n\nLENSES:\n• Convex: Real if object beyond F\n• Concave: Always virtual\n\nReal images are INVERTED, Virtual are ERECT",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "opt2",
        title: "Power of Lens",
        content:
          "$$P = \\frac{1}{f}$$ (f in meters, P in diopters)\n\nCombined lenses in contact:\n$$P = P_1 + P_2$$\n\nConvex lens: P positive\nConcave lens: P negative",
        importance: "medium",
        examFrequency: "Calculation questions",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  "modern-physics": {
    formulas: [
      {
        id: "mp1",
        title: "Photoelectric Effect",
        content:
          "$$KE_{max} = h\\nu - \\phi = eV_0$$\n\nThreshold frequency:\n$$\\nu_0 = \\frac{\\phi}{h}$$\n\nStopping potential:\n$$V_0 = \\frac{h\\nu - \\phi}{e}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mp2",
        title: "de Broglie Wavelength",
        content:
          "$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$\n\nFor electron accelerated through V:\n$$\\lambda = \\frac{12.27}{\\sqrt{V}} \\text{ Angstrom}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mp3",
        title: "Bohr Model",
        content:
          "Radius: $r_n = \\frac{n^2 h^2}{4\\pi^2 m k e^2} = 0.53 n^2 \\text{ Angstrom}$\n\nEnergy: $E_n = -\\frac{13.6}{n^2}$ eV\n\nVelocity: $v_n = \\frac{2.19 \\times 10^6}{n}$ m/s",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mp4",
        title: "Radioactive Decay",
        content:
          "$$N = N_0 e^{-\\lambda t}$$\n\nHalf-life: $t_{1/2} = \\frac{0.693}{\\lambda}$\n\nActivity: $A = \\lambda N$\n\nMean life: $\\tau = \\frac{1}{\\lambda}$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mp5",
        title: "Mass-Energy Relation",
        content:
          "$$E = mc^2$$\n\nBinding Energy:\n$$BE = \\Delta m \\cdot c^2$$\n$$BE = [Zm_p + Nm_n - M_{nucleus}]c^2$$",
        importance: "high",
        examFrequency: "Nuclear physics",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [
      {
        id: "mpc1",
        title: "Plancks Constant",
        content:
          "$$h = 6.63 \\times 10^{-34} \\text{ J·s}$$\n$$h = 4.14 \\times 10^{-15} \\text{ eV·s}$$\n\nReduced Planck constant:\n$$\\hbar = \\frac{h}{2\\pi} = 1.05 \\times 10^{-34} \\text{ J·s}$$",
        importance: "high",
        examFrequency: "Always needed",
      },
      {
        id: "mpc2",
        title: "Speed of Light",
        content:
          "$$c = 3 \\times 10^8 \\text{ m/s}$$\n\nEnergy of photon:\n$$E = h\\nu = \\frac{hc}{\\lambda}$$\n$$E = \\frac{12400}{\\lambda(\\text{Angstrom})} \\text{ eV}$$",
        importance: "high",
        examFrequency: "Every calculation",
      },
      {
        id: "mpc3",
        title: "Rydberg Constant",
        content:
          "$$R_H = 1.097 \\times 10^7 \\text{ m}^{-1}$$\n\nWavelength for transitions:\n$$\\frac{1}{\\lambda} = R_H\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$$",
        importance: "medium",
        examFrequency: "Atomic spectra",
      },
    ],
    exceptions: [],
  },
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
  calculus: {
    formulas: [
      {
        id: "c1",
        title: "Basic Derivatives",
        content:
          "$$\\frac{d}{dx}(x^n) = nx^{n-1}$$\n$$\\frac{d}{dx}(e^x) = e^x$$\n$$\\frac{d}{dx}(\\ln x) = \\frac{1}{x}$$\n$$\\frac{d}{dx}(\\sin x) = \\cos x$$\n$$\\frac{d}{dx}(\\cos x) = -\\sin x$$\n$$\\frac{d}{dx}(\\tan x) = \\sec^2 x$$",
        importance: "high",
        examFrequency: "Every problem",
      },
      {
        id: "c2",
        title: "Basic Integrals",
        content:
          "$$\\int x^n dx = \\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)$$\n$$\\int \\frac{1}{x} dx = \\ln|x| + C$$\n$$\\int e^x dx = e^x + C$$\n$$\\int \\sin x \\, dx = -\\cos x + C$$\n$$\\int \\cos x \\, dx = \\sin x + C$$",
        importance: "high",
        examFrequency: "Every problem",
      },
      {
        id: "c3",
        title: "Product Rule",
        content:
          '$$\\frac{d}{dx}[u \\cdot v] = u\\frac{dv}{dx} + v\\frac{du}{dx}$$\n\nMemory: "First times derivative of second, plus second times derivative of first"',
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "c4",
        title: "Chain Rule",
        content:
          "$$\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$$\n\nOuter derivative times Inner derivative\n\nExample: $\\frac{d}{dx}[\\sin(x^2)] = \\cos(x^2) \\cdot 2x$",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "c5",
        title: "Integration by Parts",
        content:
          "$$\\int u \\, dv = uv - \\int v \\, du$$\n\nChoice of u (LIATE):\n• L: Logarithmic\n• I: Inverse trig\n• A: Algebraic\n• T: Trigonometric\n• E: Exponential",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "c6",
        title: "Quotient Rule",
        content:
          '$$\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{v\\frac{du}{dx} - u\\frac{dv}{dx}}{v^2}$$\n\nMemory: "Lo-D-Hi minus Hi-D-Lo, over Lo-Lo"',
        importance: "high",
        examFrequency: "Common",
      },
      {
        id: "c7",
        title: "Leibniz Rule",
        content:
          "$$\\frac{d}{dx}\\int_{a(x)}^{b(x)} f(t) dt = f(b(x)) \\cdot b'(x) - f(a(x)) \\cdot a'(x)$$\n\nFor constant limits, just differentiate under integral sign.",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
    ],
    short_tricks: [
      {
        id: "ct1",
        title: "LIATE Rule for Integration",
        content:
          "Choose u in this order (LIATE):\n\n• L - Logarithmic (ln x, log x)\n• I - Inverse trig (sin^-1 x, tan^-1 x)\n• A - Algebraic (x^2, polynomials)\n• T - Trigonometric (sin x, cos x)\n• E - Exponential (e^x, a^x)\n\nFirst in list becomes u in integration by parts",
        importance: "high",
        examFrequency: "Integration questions",
      },
      {
        id: "ct2",
        title: "Definite Integral Properties",
        content:
          "Quick checks:\n\n$\\int_a^a f(x)dx = 0$\n\n$\\int_a^b f(x)dx = -\\int_b^a f(x)dx$\n\nEven function: $\\int_{-a}^a f(x)dx = 2\\int_0^a f(x)dx$\n\nOdd function: $\\int_{-a}^a f(x)dx = 0$",
        importance: "high",
        examFrequency: "Time-saving",
      },
      {
        id: "ct3",
        title: "Limits Standard Forms",
        content:
          "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$\n\n$\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1$\n\n$\\lim_{x \\to 0} \\frac{e^x - 1}{x} = 1$\n\n$\\lim_{x \\to 0} \\frac{\\ln(1+x)}{x} = 1$\n\n$\\lim_{x \\to 0} (1 + x)^{1/x} = e$",
        importance: "high",
        examFrequency: "Every limit problem",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  algebra: {
    formulas: [
      {
        id: "a1",
        title: "Quadratic Formula",
        content:
          "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\nDiscriminant $D = b^2 - 4ac$:\n• D > 0: Two real roots\n• D = 0: One repeated root\n• D < 0: Complex roots",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "a2",
        title: "Sum and Product of Roots",
        content:
          "For $ax^2 + bx + c = 0$:\n\n$$\\alpha + \\beta = -\\frac{b}{a}$$\n$$\\alpha \\beta = \\frac{c}{a}$$\n\nFor cubic $ax^3 + bx^2 + cx + d = 0$:\n$\\alpha + \\beta + \\gamma = -b/a$\n$\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = c/a$\n$\\alpha\\beta\\gamma = -d/a$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "a3",
        title: "AP Formulas",
        content:
          "nth term: $a_n = a + (n-1)d$\n\nSum of n terms:\n$$S_n = \\frac{n}{2}[2a + (n-1)d] = \\frac{n}{2}(a + l)$$\n\nSum of first n natural numbers:\n$$1 + 2 + ... + n = \\frac{n(n+1)}{2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "a4",
        title: "GP Formulas",
        content:
          "nth term: $a_n = ar^{n-1}$\n\nSum of n terms:\n$$S_n = \\frac{a(r^n - 1)}{r - 1} \\quad (r \\neq 1)$$\n\nSum of infinite GP (|r| < 1):\n$$S_\\infty = \\frac{a}{1-r}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "a5",
        title: "Binomial Theorem",
        content:
          "$$(a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$$\n\nGeneral term:\n$$T_{r+1} = \\binom{n}{r} a^{n-r} b^r$$\n\nMiddle term: $T_{(n/2)+1}$ if n even",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "a6",
        title: "Permutation and Combination",
        content:
          "$$^nP_r = \\frac{n!}{(n-r)!}$$\n\n$$^nC_r = \\frac{n!}{r!(n-r)!} = \\binom{n}{r}$$\n\n$^nC_r = ^nC_{n-r}$\n$^nC_r + ^nC_{r-1} = ^{n+1}C_r$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [
      {
        id: "at1",
        title: "AM-GM-HM Inequality",
        content:
          "For positive numbers:\n\n$$AM \\geq GM \\geq HM$$\n\n$AM = \\frac{a+b}{2}$\n$GM = \\sqrt{ab}$\n$HM = \\frac{2ab}{a+b}$\n\nEquality when a = b",
        importance: "high",
        examFrequency: "Inequality questions",
      },
      {
        id: "at2",
        title: "Sum of Powers",
        content:
          "$\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$\n\n$\\sum_{k=1}^{n} k^2 = \\frac{n(n+1)(2n+1)}{6}$\n\n$\\sum_{k=1}^{n} k^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$",
        importance: "high",
        examFrequency: "Series questions",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  trigonometry: {
    formulas: [
      {
        id: "tr1",
        title: "Pythagorean Identities",
        content:
          "$$\\sin^2\\theta + \\cos^2\\theta = 1$$\n$$1 + \\tan^2\\theta = \\sec^2\\theta$$\n$$1 + \\cot^2\\theta = \\csc^2\\theta$$",
        importance: "high",
        examFrequency: "Every problem",
      },
      {
        id: "tr2",
        title: "Sum and Difference Formulas",
        content:
          "$$\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B$$\n$$\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B$$\n$$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "tr3",
        title: "Double Angle Formulas",
        content:
          "$$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$\n$$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$$\n$$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "tr4",
        title: "Product to Sum",
        content:
          "$$2\\sin A \\cos B = \\sin(A+B) + \\sin(A-B)$$\n$$2\\cos A \\sin B = \\sin(A+B) - \\sin(A-B)$$\n$$2\\cos A \\cos B = \\cos(A+B) + \\cos(A-B)$$\n$$2\\sin A \\sin B = \\cos(A-B) - \\cos(A+B)$$",
        importance: "medium",
        examFrequency: "Integration problems",
      },
      {
        id: "tr5",
        title: "General Solutions",
        content:
          "$\\sin\\theta = \\sin\\alpha \\Rightarrow \\theta = n\\pi + (-1)^n\\alpha$\n\n$\\cos\\theta = \\cos\\alpha \\Rightarrow \\theta = 2n\\pi \\pm \\alpha$\n\n$\\tan\\theta = \\tan\\alpha \\Rightarrow \\theta = n\\pi + \\alpha$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [
      {
        id: "trt1",
        title: "Signs in Quadrants (ASTC)",
        content:
          "All Students Take Calculus:\n\n• Quadrant I: All positive\n• Quadrant II: Sin positive\n• Quadrant III: Tan positive\n• Quadrant IV: Cos positive",
        importance: "high",
        examFrequency: "Fundamental",
      },
      {
        id: "trt2",
        title: "Special Values Quick",
        content:
          "sin 0 = 0, cos 0 = 1\nsin 30 = 1/2, cos 30 = sqrt(3)/2\nsin 45 = 1/sqrt(2), cos 45 = 1/sqrt(2)\nsin 60 = sqrt(3)/2, cos 60 = 1/2\nsin 90 = 1, cos 90 = 0",
        importance: "high",
        examFrequency: "Every calculation",
      },
    ],
    reactions: [],
    constants: [],
    exceptions: [],
  },
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
};

// Get content for a specific topic and type
export const getTopicContent = (
  topicId: string,
  contentType: ContentType
): ContentItem[] => {
  return contentData[topicId]?.[contentType] || [];
};

// Get all content for a topic
export const getAllTopicContent = (
  topicId: string
): Record<ContentType, ContentItem[]> => {
  return (
    contentData[topicId] || {
      formulas: [],
      short_tricks: [],
      reactions: [],
      constants: [],
      exceptions: [],
    }
  );
};
