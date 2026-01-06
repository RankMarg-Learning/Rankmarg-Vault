// Physics subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const physicsSubject: SubjectConfig = {
  id: "physics",
  name: "Physics",
  slug: "physics",
  icon: "P",
  topics: [
  {
    "id": "units_measurements",
    "name": "Units and Measurements",
    "slug": "units-and-measurements",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "UM"
  },
  {
    "id": "motion_straight_line",
    "name": "Motion in a Straight Line",
    "slug": "motion-in-a-straight-line",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "MSL"
  },
  {
    "id": "motion_plane",
    "name": "Motion in a Plane",
    "slug": "motion-in-a-plane",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "MP"
  },
  {
    "id": "laws_of_motion",
    "name": "Laws of Motion",
    "slug": "laws-of-motion",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "LM"
  },
  {
    "id": "friction",
    "name": "Friction",
    "slug": "friction",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "F"
  },
  {
    "id": "work_energy_power",
    "name": "Work, Energy and Power",
    "slug": "work-energy-power",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "WEP"
  },
  {
    "id": "circular_motion",
    "name": "Circular Motion",
    "slug": "circular-motion",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "CM"
  },
  {
    "id": "com_linear_momentum",
    "name": "Center of Mass & Linear Momentum",
    "slug": "center-of-mass-linear-momentum",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "CMLM"
  },
  {
    "id": "rotational_motion",
    "name": "Rotational Motion",
    "slug": "rotational-motion",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "RM"
  },
  {
    "id": "gravitation",
    "name": "Gravitation",
    "slug": "gravitation",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "G"
  },
  {
    "id": "properties_solids_liquids",
    "name": "Properties of Solids and Liquids",
    "slug": "properties-of-solids-and-liquids",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "PSL"
  },
  {
    "id": "thermal_properties",
    "name": "Thermal Properties of Matter",
    "slug": "thermal-properties-of-matter",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "TPM"
  },
  {
    "id": "thermodynamics",
    "name": "Thermodynamics",
    "slug": "thermodynamics",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "TD"
  },
  {
    "id": "ktg",
    "name": "Kinetic Theory of Gases",
    "slug": "kinetic-theory-of-gases",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "KTG"
  },
  {
    "id": "oscillations",
    "name": "Oscillations",
    "slug": "oscillations",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "O"
  },
  {
    "id": "wave_optics",
    "name": "Wave Optics",
    "slug": "wave-optics",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "WO"
  },
  {
    "id": "ray_optics",
    "name": "Ray Optics",
    "slug": "ray-optics",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "RO"
  },
  {
    "id": "electrostatics",
    "name": "Electrostatics",
    "slug": "electrostatics",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "ES"
  },
  {
    "id": "current_electricity",
    "name": "Current Electricity",
    "slug": "current-electricity",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "CE"
  },
  {
    "id": "magnetism",
    "name": "Magnetic Effects of Current and Magnetism",
    "slug": "magnetic-effects-of-current-and-magnetism",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "M"
  },
  {
    "id": "emi",
    "name": "Electromagnetic Induction",
    "slug": "electromagnetic-induction",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "EMI"
  },
  {
    "id": "ac",
    "name": "Alternating Current",
    "slug": "alternating-current",
    "allowedTypes": ["formulas", "short_tricks"],
    "icon": "AC"
  },
  {
    "id": "em_waves",
    "name": "Electromagnetic Waves",
    "slug": "electromagnetic-waves",
    "allowedTypes": ["formulas", "constants"],
    "icon": "EMW"
  },
  {
    "id": "dual_nature",
    "name": "Dual Nature of Radiation and Matter",
    "slug": "dual-nature-of-radiation-and-matter",
    "allowedTypes": ["formulas", "constants"],
    "icon": "DN"
  },
  {
    "id": "atoms_nuclei",
    "name": "Atoms and Nuclei",
    "slug": "atoms-and-nuclei",
    "allowedTypes": ["formulas", "constants"],
    "icon": "AN"
  },
  {
    "id": "semiconductors",
    "name": "Semiconductor Electronics",
    "slug": "semiconductor-electronics",
    "allowedTypes": ["formulas", "short_tricks", "constants"],
    "icon": "SE"
  }
],
};

// Physics content organized by topic
export const physicsContent: Record<
  string,
  Record<ContentType, ContentItem[]>
> = {
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
  "rotational-mechanics": {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  waves: {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
};

