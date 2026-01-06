// Physics subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const physicsSubject: SubjectConfig = {
  id: "physics",
  name: "Physics",
  slug: "physics",
  icon: "P",
  topics: [
    {
      id: "units_measurements",
      name: "Units and Measurements",
      slug: "units-and-measurements",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "UM",
    },
    {
      id: "motion_straight_line",
      name: "Motion in a Straight Line",
      slug: "motion-in-a-straight-line",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "MSL",
    },
    {
      id: "motion_plane",
      name: "Motion in a Plane",
      slug: "motion-in-a-plane",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "MP",
    },
    {
      id: "laws_of_motion",
      name: "Laws of Motion",
      slug: "laws-of-motion",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "LM",
    },
    {
      id: "friction",
      name: "Friction",
      slug: "friction",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "F",
    },
    {
      id: "work_energy_power",
      name: "Work, Energy and Power",
      slug: "work-energy-power",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "WEP",
    },
    {
      id: "circular_motion",
      name: "Circular Motion",
      slug: "circular-motion",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "CM",
    },
    {
      id: "com_linear_momentum",
      name: "Center of Mass & Linear Momentum",
      slug: "center-of-mass-linear-momentum",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "CMLM",
    },
    {
      id: "rotational_motion",
      name: "Rotational Motion",
      slug: "rotational-motion",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "RM",
    },
    {
      id: "gravitation",
      name: "Gravitation",
      slug: "gravitation",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "G",
    },
    {
      id: "properties_solids_liquids",
      name: "Properties of Solids and Liquids",
      slug: "properties-of-solids-and-liquids",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "PSL",
    },
    {
      id: "thermal_properties",
      name: "Thermal Properties of Matter",
      slug: "thermal-properties-of-matter",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "TPM",
    },
    {
      id: "thermodynamics",
      name: "Thermodynamics",
      slug: "thermodynamics",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "TD",
    },
    {
      id: "ktg",
      name: "Kinetic Theory of Gases",
      slug: "kinetic-theory-of-gases",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "KTG",
    },
    {
      id: "oscillations",
      name: "Oscillations",
      slug: "oscillations",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "O",
    },
    {
      id: "wave_optics",
      name: "Wave Optics",
      slug: "wave-optics",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "WO",
    },
    {
      id: "ray_optics",
      name: "Ray Optics",
      slug: "ray-optics",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "RO",
    },
    {
      id: "electrostatics",
      name: "Electrostatics",
      slug: "electrostatics",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "ES",
    },
    {
      id: "current_electricity",
      name: "Current Electricity",
      slug: "current-electricity",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "CE",
    },
    {
      id: "magnetism",
      name: "Magnetic Effects of Current and Magnetism",
      slug: "magnetic-effects-of-current-and-magnetism",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "M",
    },
    {
      id: "emi",
      name: "Electromagnetic Induction",
      slug: "electromagnetic-induction",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "EMI",
    },
    {
      id: "ac",
      name: "Alternating Current",
      slug: "alternating-current",
      allowedTypes: ["formulas", "short_tricks"],
      icon: "AC",
    },
    {
      id: "em_waves",
      name: "Electromagnetic Waves",
      slug: "electromagnetic-waves",
      allowedTypes: ["formulas", "constants"],
      icon: "EMW",
    },
    {
      id: "dual_nature",
      name: "Dual Nature of Radiation and Matter",
      slug: "dual-nature-of-radiation-and-matter",
      allowedTypes: ["formulas", "constants"],
      icon: "DN",
    },
    {
      id: "atoms_nuclei",
      name: "Atoms and Nuclei",
      slug: "atoms-and-nuclei",
      allowedTypes: ["formulas", "constants"],
      icon: "AN",
    },
    {
      id: "semiconductors",
      name: "Semiconductor Electronics",
      slug: "semiconductor-electronics",
      allowedTypes: ["formulas", "short_tricks", "constants"],
      icon: "SE",
    },
  ],
};

// Physics content organized by topic
export const physicsContent: Record<
  string,
  Record<ContentType, ContentItem[]>
> = {
  units_measurements: {
    formulas: [
      {
        id: "um1",
        title: "Absolute Error",
        content:
          "$$\\Delta x = |x_{measured} - x_{true}|$$Where: $\\Delta x$ = absolute error $x_{measured}$ = measured value $x_{true}$ = true/standard value",
        importance: "high",
        examFrequency: "Frequently in JEE & NEET",
      },
      {
        id: "um2",
        title: "Mean Absolute Error",
        content:
          "$$\\Delta x_{mean} = \\frac{1}{n}\\sum_{i=1}^{n} |x_i - \\bar{x}|$$Where: $n$ = number of observations $x_i$ = individual readings $\\bar{x}$ = mean value",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "um3",
        title: "Relative Error",
        content:
          "$$\\text{Relative Error} = \\frac{\\Delta x}{x}$$Where: $\\Delta x$ = absolute error $x$ = measured value",
        importance: "high",
        examFrequency: "Common in JEE",
      },
      {
        id: "um4",
        title: "Percentage Error",
        content:
          "$$\\text{Percentage Error} = \\frac{\\Delta x}{x} \\times 100$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "um5",
        title: "Error in Sum or Difference",
        content: "$$\\Delta Z = \\Delta A + \\Delta B$$For: $Z = A \\pm B$",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "um6",
        title: "Error in Product or Quotient",
        content:
          "$$\\frac{\\Delta Z}{Z} = \\frac{\\Delta A}{A} + \\frac{\\Delta B}{B}$$For: $Z = A \\times B$ or $Z = \\frac{A}{B}$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "um7",
        title: "Error in Power Function",
        content:
          "$$\\frac{\\Delta Z}{Z} = n \\frac{\\Delta A}{A}$$For: $Z = A^n$",
        importance: "high",
        examFrequency: "JEE Advanced favorite",
      },
      {
        id: "um8",
        title: "Significant Figures – Multiplication/Division",
        content:
          "Result should have the same number of significant figures as the quantity with the least significant figures.",
        importance: "medium",
        examFrequency: "Conceptual NEET questions",
      },
      {
        id: "um9",
        title: "Significant Figures – Addition/Subtraction",
        content:
          "Result should be rounded to the least number of decimal places among the quantities.",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "um10",
        title: "Dimensional Formula of Physical Quantity",
        content:
          "$$[Q] = M^a L^b T^c$$Where: $M$ = mass $L$ = length $T$ = time",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "um11",
        title: "Principle of Dimensional Homogeneity",
        content:
          "Dimensions of LHS = Dimensions of RHSUsed to: Check correctness of equations Derive relations",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "um12",
        title: "Dimensional Formula of Velocity",
        content: "$$[v] = LT^{-1}$$",
        importance: "medium",
        examFrequency: "Foundational",
      },
      {
        id: "um13",
        title: "Dimensional Formula of Acceleration",
        content: "$$[a] = LT^{-2}$$",
        importance: "medium",
        examFrequency: "Foundational",
      },
      {
        id: "um14",
        title: "Dimensional Formula of Force",
        content: "$$[F] = MLT^{-2}$$",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "um15",
        title: "Dimensional Formula of Energy",
        content: "$$[E] = ML^2T^{-2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "um16",
        title: "Dimensional Formula of Power",
        content: "$$[P] = ML^2T^{-3}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  motion_straight_line: {
    formulas: [
      {
        id: "msl1",
        title: "Average Speed",
        content:
          "$$v_{avg} = \\frac{\\text{Total Distance}}{\\text{Total Time}}$$",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "msl2",
        title: "Average Velocity",
        content:
          "$$v_{avg} = \\frac{\\text{Total Displacement}}{\\text{Total Time}}$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "msl3",
        title: "Instantaneous Velocity",
        content: "$$v = \\frac{dx}{dt}$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "msl4",
        title: "Instantaneous Acceleration",
        content: "$$a = \\frac{dv}{dt} = \\frac{d^2x}{dt^2}$$",
        importance: "high",
        examFrequency: "JEE Advanced favorite",
      },
      {
        id: "msl5",
        title: "First Equation of Motion",
        content:
          "$$v = u + at$$Where: $u$ = initial velocity $v$ = final velocity $a$ = acceleration $t$ = time",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "msl6",
        title: "Second Equation of Motion",
        content: "$$s = ut + \\frac{1}{2}at^2$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "msl7",
        title: "Third Equation of Motion",
        content: "$$v^2 = u^2 + 2as$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "msl8",
        title: "Distance in nth Second",
        content: "$$s_n = u + \\frac{a}{2}(2n - 1)$$",
        importance: "high",
        examFrequency: "Frequently in JEE",
      },
      {
        id: "msl9",
        title: "Relative Velocity (Same Direction)",
        content: "$$v_{rel} = v_1 - v_2$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "msl10",
        title: "Relative Velocity (Opposite Direction)",
        content: "$$v_{rel} = v_1 + v_2$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "msl11",
        title: "Displacement from Velocity-Time Graph",
        content: "$$\\text{Displacement} = \\text{Area under v–t graph}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "msl12",
        title: "Acceleration from Velocity-Time Graph",
        content: "$$a = \\text{Slope of v–t graph}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "msl13",
        title: "Velocity from Position-Time Graph",
        content: "$$v = \\text{Slope of x–t graph}$$",
        importance: "medium",
        examFrequency: "Conceptual questions",
      },
      {
        id: "msl14",
        title: "Uniform Motion Condition",
        content: "$$a = 0 \\Rightarrow v = \\text{constant}$$",
        importance: "medium",
        examFrequency: "Basic conceptual",
      },
      {
        id: "msl15",
        title: "Stopping Distance",
        content: "$$s = \\frac{u^2}{2a}$$(For final velocity $v = 0$)",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  motion_plane: {
    formulas: [
      {
        id: "mp1",
        title: "Position Vector",
        content:
          "$$\\vec{r} = x\\hat{i} + y\\hat{j}$$Where: $x, y$ = coordinates $\\hat{i}, \\hat{j}$ = unit vectors along x and y axes",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "mp2",
        title: "Displacement Vector",
        content: "$$\\Delta \\vec{r} = \\vec{r}_2 - \\vec{r}_1$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mp3",
        title: "Velocity Vector",
        content:
          "$$\\vec{v} = \\frac{d\\vec{r}}{dt} = v_x\\hat{i} + v_y\\hat{j}$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "mp4",
        title: "Acceleration Vector",
        content:
          "$$\\vec{a} = \\frac{d\\vec{v}}{dt} = a_x\\hat{i} + a_y\\hat{j}$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "mp5",
        title: "Resultant of Two Vectors",
        content: "$$R = \\sqrt{A^2 + B^2 + 2AB\\cos\\theta}$$",
        importance: "high",
        examFrequency: "Frequently in JEE",
      },
      {
        id: "mp6",
        title: "Horizontal and Vertical Components of Velocity",
        content: "$$v_x = v\\cos\\theta, \\quad v_y = v\\sin\\theta$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "mp7",
        title: "Horizontal Projectile Motion",
        content: "$$x = ut, \\quad y = \\frac{1}{2}gt^2$$",
        importance: "high",
        examFrequency: "NEET favorite",
      },
      {
        id: "mp8",
        title: "Time of Flight (Projectile)",
        content: "$$T = \\frac{2u\\sin\\theta}{g}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mp9",
        title: "Maximum Height of Projectile",
        content: "$$H = \\frac{u^2\\sin^2\\theta}{2g}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mp10",
        title: "Horizontal Range of Projectile",
        content: "$$R = \\frac{u^2\\sin2\\theta}{g}$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "mp11",
        title: "Equation of Trajectory",
        content: "$$y = x\\tan\\theta - \\frac{gx^2}{2u^2\\cos^2\\theta}$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "mp12",
        title: "Maximum Range Condition",
        content: "$$\\theta = 45^\\circ$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "mp13",
        title: "Relative Velocity",
        content: "$$\\vec{v}_{A/B} = \\vec{v}_A - \\vec{v}_B$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "mp14",
        title: "River Crossing (Minimum Time)",
        content: "$$t_{min} = \\frac{w}{v}$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "mp15",
        title: "River Crossing (No Drift Condition)",
        content: "$$v\\sin\\theta = u$$",
        importance: "high",
        examFrequency: "JEE Advanced favorite",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  laws_of_motion: {
    formulas: [
      {
        id: "lom1",
        title: "Newton’s First Law (Law of Inertia)",
        content:
          "A body remains at rest or in uniform motion unless acted upon by an external unbalanced force.",
        importance: "high",
        examFrequency: "Conceptual questions every year",
      },
      {
        id: "lom2",
        title: "Newton’s Second Law",
        content:
          "$$\\vec{F} = \\frac{d\\vec{p}}{dt}$$For constant mass:$$\\vec{F} = m\\vec{a}$$",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "lom3",
        title: "Linear Momentum",
        content: "$$\\vec{p} = m\\vec{v}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "lom4",
        title: "Impulse",
        content: "$$\\vec{J} = \\int \\vec{F}\\,dt = \\Delta \\vec{p}$$",
        importance: "high",
        examFrequency: "Frequently in JEE",
      },
      {
        id: "lom5",
        title: "Newton’s Third Law",
        content: "For every action, there is an equal and opposite reaction.",
        importance: "high",
        examFrequency: "Conceptual questions",
      },
      {
        id: "lom6",
        title: "Conservation of Linear Momentum",
        content: "$$m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$$(For isolated systems)",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "lom7",
        title: "Force due to Gravity (Weight)",
        content: "$$W = mg$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "lom8",
        title: "Normal Reaction on Horizontal Surface",
        content: "$$N = mg$$",
        importance: "medium",
        examFrequency: "Basic problems",
      },
      {
        id: "lom9",
        title: "Normal Reaction on Inclined Plane",
        content: "$$N = mg\\cos\\theta$$",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "lom10",
        title: "Pseudo Force",
        content: "$$F_{pseudo} = m a$$(Acts opposite to acceleration of frame)",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "lom11",
        title: "Acceleration on Inclined Plane (No Friction)",
        content: "$$a = g\\sin\\theta$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "lom12",
        title: "Tension in a Light String",
        content: "$$T = ma$$(Depends on system configuration)",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "lom13",
        title: "Atwood Machine Acceleration",
        content: "$$a = \\frac{(m_1 - m_2)g}{m_1 + m_2}$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "lom14",
        title: "Tension in Atwood Machine",
        content: "$$T = \\frac{2m_1m_2}{m_1 + m_2} g$$",
        importance: "high",
        examFrequency: "Frequently in JEE",
      },
      {
        id: "lom15",
        title: "Equilibrium Condition",
        content: "$$\\sum \\vec{F} = 0 \\Rightarrow a = 0$$",
        importance: "high",
        examFrequency: "Conceptual & numerical",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  friction: {
    formulas: [
      {
        id: "fr1",
        title: "Static Friction",
        content:
          "$$f_s \\le \\mu_s N$$Where: $f_s$ = static friction $\\mu_s$ = coefficient of static friction $N$ = normal reaction",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "fr2",
        title: "Limiting Friction",
        content: "$$f_{max} = \\mu_s N$$",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "fr3",
        title: "Kinetic Friction",
        content: "$$f_k = \\mu_k N$$Where: $\\mu_k < \\mu_s$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "fr4",
        title: "Relation Between Coefficients of Friction",
        content: "$$\\mu_k < \\mu_s$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "fr5",
        title: "Angle of Friction",
        content: "$$\\tan\\phi = \\mu$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "fr6",
        title: "Angle of Repose",
        content: "$$\\tan\\theta = \\mu_s$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "fr7",
        title: "Acceleration on Rough Horizontal Surface",
        content: "$$a = \\frac{F - \\mu_k mg}{m}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "fr8",
        title: "Acceleration on Rough Inclined Plane",
        content: "$$a = g(\\sin\\theta - \\mu_k \\cos\\theta)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "fr9",
        title: "Minimum Force to Start Motion (Horizontal)",
        content: "$$F_{min} = \\mu_s mg$$",
        importance: "high",
        examFrequency: "NEET favorite",
      },
      {
        id: "fr10",
        title: "Minimum Force Applied at Angle θ (Pulling)",
        content:
          "$$F = \\frac{\\mu_s mg}{\\cos\\theta + \\mu_s \\sin\\theta}$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "fr11",
        title: "Maximum Force Applied at Angle θ (Pushing)",
        content:
          "$$F = \\frac{\\mu_s mg}{\\cos\\theta - \\mu_s \\sin\\theta}$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "fr12",
        title: "Stopping Distance with Friction",
        content: "$$s = \\frac{u^2}{2\\mu_k g}$$",
        importance: "high",
        examFrequency: "JEE Main",
      },
      {
        id: "fr13",
        title: "Work Done by Friction",
        content: "$$W = -f_k s = -\\mu_k N s$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "fr14",
        title: "Velocity of Block Sliding Down Rough Incline",
        content: "$$v^2 = u^2 + 2g(\\sin\\theta - \\mu_k \\cos\\theta)s$$",
        importance: "medium",
        examFrequency: "Numerical problems",
      },
      {
        id: "fr15",
        title: "Condition for No Slipping on Incline",
        content: "$$\\tan\\theta \\le \\mu_s$$",
        importance: "high",
        examFrequency: "Very common",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  work_energy_power: {
    formulas: [
      {
        id: "wep1",
        title: "Work Done by Constant Force",
        content:
          "$$W = \\vec{F} \\cdot \\vec{s} = Fs\\cos\\theta$$Work is done only by the component of force along displacement. $\\theta = 0^\\circ$ → maximum work $\\theta = 90^\\circ$ → zero work",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "wep2",
        title: "Work Done by Variable Force",
        content:
          "$$W = \\int \\vec{F} \\cdot d\\vec{s}$$Used when force changes with position (spring force, non-uniform systems).",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "wep3",
        title: "Kinetic Energy",
        content:
          "$$K = \\frac{1}{2}mv^2$$Energy possessed due to motion.Depends on mass and square of velocity.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "wep4",
        title: "Work–Energy Theorem",
        content:
          "$$W_{net} = \\Delta K$$Net work done on a body equals change in its kinetic energy.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "wep5",
        title: "Gravitational Potential Energy (Near Earth)",
        content:
          "$$U = mgh$$Valid only when height $h$ is small compared to Earth’s radius.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "wep6",
        title: "Gravitational Potential Energy (General)",
        content:
          "$$U = -\\frac{GMm}{r}$$Zero potential is taken at infinity.Used in satellite and orbital problems.",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "wep7",
        title: "Spring Potential Energy",
        content:
          "$$U = \\frac{1}{2}kx^2$$Energy stored due to elastic deformation.Derived from work done against spring force.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "wep8",
        title: "Conservative Force Condition",
        content:
          "$$W = -\\Delta U$$Work done by conservative force equals negative change in potential energy.",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "wep9",
        title: "Mechanical Energy",
        content: "$$E = K + U$$Sum of kinetic and potential energies.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "wep10",
        title: "Law of Conservation of Mechanical Energy",
        content:
          "$$K_i + U_i = K_f + U_f$$Valid when only conservative forces act (no friction).",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "wep11",
        title: "Power (Average)",
        content:
          "$$P_{avg} = \\frac{W}{t}$$Rate of doing work over a time interval.",
        importance: "medium",
        examFrequency: "NEET",
      },
      {
        id: "wep12",
        title: "Power (Instantaneous)",
        content:
          "$$P = \\vec{F} \\cdot \\vec{v}$$Depends on force and velocity direction.Zero power if force ⟂ velocity.",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "wep13",
        title: "Stopping Distance Using Energy",
        content:
          "$$\\frac{1}{2}mu^2 = fs$$Used when body stops due to friction.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "wep14",
        title: "Efficiency",
        content:
          "$$\\eta = \\frac{\\text{Useful Output Energy}}{\\text{Input Energy}}$$Always less than 1 due to losses.",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "wep15",
        title: "Relation Between Force and Potential Energy",
        content:
          "$$F = -\\frac{dU}{dx}$$Force is the negative gradient of potential energy.",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  circular_motion: {
    formulas: [
      {
        id: "cm1",
        title: "Angular Displacement",
        content:
          "$$\\theta = \\frac{s}{r}$$Angular displacement is the angle subtended at the center by arc length $s$.",
        importance: "high",
        examFrequency: "Foundational",
      },
      {
        id: "cm2",
        title: "Angular Velocity",
        content:
          "$$\\omega = \\frac{d\\theta}{dt}$$Rate of change of angular displacement.Direction given by right-hand thumb rule.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "cm3",
        title: "Angular Acceleration",
        content:
          "$$\\alpha = \\frac{d\\omega}{dt}$$Rate of change of angular velocity.",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "cm4",
        title: "Linear Velocity in Circular Motion",
        content:
          "$$v = r\\omega$$Linear speed is directly proportional to radius and angular speed.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cm5",
        title: "Centripetal Acceleration",
        content:
          "$$a_c = \\frac{v^2}{r} = r\\omega^2$$Always directed towards the center of the circle.Responsible for change in direction of velocity.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "cm6",
        title: "Centripetal Force",
        content:
          "$$F_c = \\frac{mv^2}{r} = mr\\omega^2$$Not a new force.Provided by tension, friction, gravity, or normal reaction.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cm7",
        title: "Time Period of Uniform Circular Motion",
        content:
          "$$T = \\frac{2\\pi}{\\omega}$$Time taken to complete one full revolution.",
        importance: "medium",
        examFrequency: "Basic questions",
      },
      {
        id: "cm8",
        title: "Frequency of Circular Motion",
        content: "$$f = \\frac{1}{T}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "cm9",
        title: "Centrifugal Force (Non-inertial Frame)",
        content:
          "$$F_{cf} = mr\\omega^2$$Pseudo force acting outward in rotating frames only.",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "cm10",
        title: "Maximum Speed on Level Circular Track",
        content:
          "$$v_{max} = \\sqrt{\\mu rg}$$Friction provides centripetal force.Used in vehicle turning problems.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "cm11",
        title: "Banking Angle (No Friction)",
        content:
          "$$\\tan\\theta = \\frac{v^2}{rg}$$Normal reaction provides centripetal force.Ideal banking condition.",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "cm12",
        title: "Banking Angle with Friction",
        content:
          "$$\\tan\\theta = \\frac{v^2 \\pm \\mu rg}{rg \\mp \\mu v^2}$$Used to find max/min safe speed on banked roads.",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "cm13",
        title: "Conical Pendulum – Angular Speed",
        content:
          "$$\\omega = \\sqrt{\\frac{g}{l\\cos\\theta}}$$Derived using vertical balance and horizontal centripetal force.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "cm14",
        title: "Time Period of Conical Pendulum",
        content: "$$T = 2\\pi \\sqrt{\\frac{l\\cos\\theta}{g}}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "cm15",
        title: "Motion in Vertical Circle – Minimum Speed at Top",
        content:
          "$$v_{top(min)} = \\sqrt{gr}$$Condition when tension at top becomes zero.",
        importance: "high",
        examFrequency: "JEE favorite",
      },
      {
        id: "cm16",
        title: "Motion in Vertical Circle – Minimum Speed at Bottom",
        content:
          "$$v_{bottom(min)} = \\sqrt{5gr}$$Ensures particle completes full vertical loop.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  com_linear_momentum: {
    formulas: [
      {
        id: "cmlm1",
        title: "Position of Center of Mass (Discrete System)",
        content:
          "$$\\vec{R}_{CM} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i}$$ \n Weighted average position of all particles based on mass.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "cmlm2",
        title: "Center of Mass for Two-Particle System",
        content: "$$x_{CM} = \\frac{m_1x_1 + m_2x_2}{m_1 + m_2}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "cmlm3",
        title: "Center of Mass of Continuous Body",
        content:
          "$$\\vec{R}_{CM} = \\frac{1}{M} \\int \\vec{r}\\,dm$$ \n Used for rods, plates, rings, discs.",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "cmlm4",
        title: "Velocity of Center of Mass",
        content:
          "$$\\vec{V}_{CM} = \\frac{\\sum m_i \\vec{v}_i}{\\sum m_i}$$ \n Determines overall motion of system.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cmlm5",
        title: "Acceleration of Center of Mass",
        content:
          "$$\\vec{A}_{CM} = \\frac{\\sum \\vec{F}_{ext}}{M}$$ \n Only external forces affect CM acceleration.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "cmlm6",
        title: "Linear Momentum of a Particle",
        content: "$$\\vec{p} = m\\vec{v}$$",
        importance: "high",
        examFrequency: "Foundational",
      },
      {
        id: "cmlm7",
        title: "Total Linear Momentum of a System",
        content: "$$\\vec{P} = \\sum m_i \\vec{v}_i$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cmlm8",
        title: "Relation Between CM Velocity and Momentum",
        content:
          "$$\\vec{P} = M \\vec{V}_{CM}$$ \n Total momentum behaves as if entire mass is concentrated at CM.",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "cmlm9",
        title: "Law of Conservation of Linear Momentum",
        content:
          "$$\\vec{P}_{initial} = \\vec{P}_{final}$$ \n Valid when net external force is zero.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "cmlm10",
        title: "Impulse",
        content: "$$\\vec{J} = \\int \\vec{F}\\,dt = \\Delta \\vec{p}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "cmlm11",
        title: "Collision – Coefficient of Restitution",
        content:
          "$$e = \\frac{v_2 - v_1}{u_1 - u_2}$$ \n Measures elasticity of collision.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "cmlm12",
        title: "Perfectly Elastic Collision Condition",
        content: "$$e = 1$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "cmlm13",
        title: "Perfectly Inelastic Collision Condition",
        content: "$$e = 0$$ \n Bodies stick together after collision.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "cmlm14",
        title: "Velocity After 1D Elastic Collision (Body 1)",
        content: "$$v_1 = \\frac{(m_1 - m_2)u_1 + 2m_2u_2}{m_1 + m_2}$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "cmlm15",
        title: "Velocity After 1D Elastic Collision (Body 2)",
        content: "$$v_2 = \\frac{2m_1u_1 + (m_2 - m_1)u_2}{m_1 + m_2}$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "cmlm16",
        title: "Kinetic Energy Loss in Inelastic Collision",
        content: "$$\\Delta K = \\frac{m_1 m_2}{2(m_1 + m_2)} (u_1 - u_2)^2$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  rotational_motion: {
    formulas: [
      {
        id: "rm1",
        title: "Angular Displacement",
        content:
          "$$\\theta = \\frac{s}{r}$$ \n Angular displacement is the angle swept by the radius when the body moves along a circular arc.",
        importance: "high",
        examFrequency: "Foundational",
      },
      {
        id: "rm2",
        title: "Angular Velocity",
        content:
          "$$\\omega = \\frac{d\\theta}{dt}$$ \n Rate of change of angular displacement. \n Direction by right-hand thumb rule.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "rm3",
        title: "Angular Acceleration",
        content: "$$\\alpha = \\frac{d\\omega}{dt}$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "rm4",
        title: "Relation Between Linear and Angular Quantities",
        content:
          "$$v = r\\omega, \\quad a_t = r\\alpha, \\quad a_c = r\\omega^2$$ \n Linear motion parameters are proportional to radius.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "rm5",
        title: "Equations of Rotational Motion",
        content:
          "$$\\omega = \\omega_0 + \\alpha t$$ \n $$\\theta = \\omega_0 t + \\frac{1}{2}\\alpha t^2$$ \n $$\\omega^2 = \\omega_0^2 + 2\\alpha\\theta$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "rm6",
        title: "Moment of Inertia (Discrete System)",
        content:
          "$$I = \\sum m_i r_i^2$$ \n Measures resistance to change in rotational motion.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "rm7",
        title: "Moment of Inertia (Continuous Body)",
        content: "$$I = \\int r^2 \\, dm$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "rm8",
        title: "Parallel Axis Theorem",
        content:
          "$$I = I_{CM} + Md^2$$ \n Used when axis is parallel but not passing through CM.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "rm9",
        title: "Perpendicular Axis Theorem",
        content: "$$I_z = I_x + I_y$$ \n Applicable only for planar lamina.",
        importance: "high",
        examFrequency: "JEE Main",
      },
      {
        id: "rm10",
        title: "Torque",
        content:
          "$$\\vec{\\tau} = \\vec{r} \\times \\vec{F}$$ \n Rotational equivalent of force.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "rm11",
        title: "Relation Between Torque and Angular Acceleration",
        content:
          "$$\\tau = I\\alpha$$ \n Rotational form of Newton’s Second Law.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "rm12",
        title: "Angular Momentum",
        content: "$$\\vec{L} = \\vec{r} \\times \\vec{p} = I\\vec{\\omega}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "rm13",
        title: "Relation Between Torque and Angular Momentum",
        content: "$$\\vec{\\tau} = \\frac{d\\vec{L}}{dt}$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "rm14",
        title: "Conservation of Angular Momentum",
        content:
          "$$I_1\\omega_1 = I_2\\omega_2$$ \n Valid when net external torque is zero.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "rm15",
        title: "Rotational Kinetic Energy",
        content: "$$K = \\frac{1}{2}I\\omega^2$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "rm16",
        title: "Rolling Motion Condition",
        content:
          "$$v_{CM} = r\\omega$$ \n Pure rolling means no slipping at contact point.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "rm17",
        title: "Total Kinetic Energy in Rolling Motion",
        content: "$$K = \\frac{1}{2}Mv^2 + \\frac{1}{2}I\\omega^2$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "rm18",
        title: "Angular Momentum in Rolling Motion",
        content: "$$L = I_{CM}\\omega + MvR$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  gravitation: {
    formulas: [
      {
        id: "grav1",
        title: "Newton’s Law of Gravitation",
        content:
          "$$F = G\\frac{m_1 m_2}{r^2}$$ \n Gravitational force is always attractive and acts along the line joining the two masses.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "grav2",
        title: "Gravitational Constant",
        content:
          "$$G = 6.67 \\times 10^{-11}\\ \\text{N m}^2\\text{/kg}^2$$ \n Universal constant; same everywhere in the universe.",
        importance: "medium",
        examFrequency: "Direct fact-based",
      },
      {
        id: "grav3",
        title: "Acceleration Due to Gravity at Earth’s Surface",
        content:
          "$$g = \\frac{GM}{R^2}$$ \n $M$ = mass of Earth, $R$ = radius of Earth.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "grav4",
        title: "Weight of a Body",
        content: "$$W = mg$$ \n Weight depends on location; mass is constant.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "grav5",
        title: "Variation of g with Height",
        content:
          "$$g_h = g\\left(1 - \\frac{2h}{R}\\right)$$ \n Valid when height $h \\ll R$.",
        importance: "high",
        examFrequency: "JEE Main",
      },
      {
        id: "grav6",
        title: "Variation of g with Depth",
        content:
          "$$g_d = g\\left(1 - \\frac{d}{R}\\right)$$ \n Gravity decreases linearly inside Earth.",
        importance: "high",
        examFrequency: "JEE & NEET",
      },
      {
        id: "grav7",
        title: "Gravitational Potential Energy",
        content:
          "$$U = -\\frac{GMm}{r}$$ \n Zero potential energy is taken at infinity.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "grav8",
        title: "Gravitational Potential",
        content: "$$V = -\\frac{GM}{r}$$ \n Potential energy per unit mass.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "grav9",
        title: "Escape Velocity",
        content:
          "$$v_e = \\sqrt{\\frac{2GM}{R}} = \\sqrt{2gR}$$ \n Minimum speed to escape Earth’s gravity without further propulsion.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "grav10",
        title: "Orbital Velocity of Satellite",
        content:
          "$$v_o = \\sqrt{\\frac{GM}{R + h}}$$ \n Speed needed for circular orbit at height $h$.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "grav11",
        title: "Time Period of Satellite",
        content:
          "$$T = 2\\pi \\sqrt{\\frac{(R + h)^3}{GM}}$$ \n Derived from centripetal force = gravitational force.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "grav12",
        title: "Kepler’s Third Law",
        content:
          "$$T^2 \\propto r^3$$ \n Square of time period is proportional to cube of orbital radius.",
        importance: "high",
        examFrequency: "Conceptual + numerical",
      },
      {
        id: "grav13",
        title: "Total Mechanical Energy of Satellite",
        content:
          "$$E = -\\frac{GMm}{2r}$$ \n Negative sign indicates bound orbit.",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "grav14",
        title: "Binding Energy of Satellite",
        content:
          "$$E_b = \\frac{GMm}{2r}$$ \n Energy required to remove satellite from orbit.",
        importance: "medium",
        examFrequency: "Advanced problems",
      },
      {
        id: "grav15",
        title: "Relation Between g and Escape Velocity",
        content: "$$v_e = \\sqrt{2gR}$$",
        importance: "medium",
        examFrequency: "Direct relation-based",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  properties_solids_liquids: {
    formulas: [
      {
        id: "psl1",
        title: "Stress",
        content:
          "$$\\text{Stress} = \\frac{F}{A}$$ \n Internal restoring force per unit area developed inside a body when external force is applied.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "psl2",
        title: "Strain",
        content:
          "$$\\text{Strain} = \\frac{\\Delta L}{L}$$ \n Ratio of change in dimension to original dimension. \n Dimensionless quantity.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "psl3",
        title: "Young’s Modulus",
        content:
          "$$Y = \\frac{\\text{Longitudinal Stress}}{\\text{Longitudinal Strain}}$$ \n Measures stiffness of a material.",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "psl4",
        title: "Bulk Modulus",
        content:
          "$$K = \\frac{\\text{Volume Stress}}{\\text{Volume Strain}}$$ \n Resistance offered by a material to change in volume.",
        importance: "high",
        examFrequency: "JEE & NEET",
      },
      {
        id: "psl5",
        title: "Modulus of Rigidity (Shear Modulus)",
        content:
          "$$\\eta = \\frac{\\text{Shear Stress}}{\\text{Shear Strain}}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "psl6",
        title: "Relation Between Elastic Constants",
        content:
          "$$Y = 9K\\eta / (3K + \\eta)$$ \n Valid for isotropic materials.",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "psl7",
        title: "Poisson’s Ratio",
        content:
          "$$ \n u = -\\frac{\\text{Lateral Strain}}{\\text{Longitudinal Strain}}$$ \n Negative sign indicates opposite nature of strains.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "psl8",
        title: "Stress–Strain Relation (Hooke’s Law)",
        content:
          "$$\\text{Stress} \\propto \\text{Strain}$$ \n Valid only within elastic limit.",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "psl9",
        title: "Energy Stored per Unit Volume",
        content:
          "$$U = \\frac{1}{2} \\times \\text{Stress} \\times \\text{Strain}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "psl10",
        title: "Pressure in a Liquid",
        content: "$$P = P_0 + \\rho gh$$ \n Pressure increases with depth.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "psl11",
        title: "Buoyant Force",
        content:
          "$$F_B = \\rho V g$$ \n Equal to weight of displaced fluid (Archimedes’ Principle).",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "psl12",
        title: "Relative Density",
        content: "$$RD = \\frac{\\rho_{substance}}{\\rho_{water}}$$",
        importance: "medium",
        examFrequency: "Basic questions",
      },
      {
        id: "psl13",
        title: "Viscous Force (Stokes’ Law)",
        content:
          "$$F = 6\\pi \\eta r v$$ \n Opposes motion of small spherical body in viscous fluid.",
        importance: "high",
        examFrequency: "JEE Main & NEET",
      },
      {
        id: "psl14",
        title: "Terminal Velocity",
        content:
          "$$v_t = \\frac{2r^2(\\rho - \\sigma)g}{9\\eta}$$ \n Velocity becomes constant when net force is zero.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "psl15",
        title: "Streamline Flow Condition",
        content:
          "$$Re < 2000$$ \n Reynolds number below 2000 ensures laminar flow.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "psl16",
        title: "Continuity Equation",
        content: "$$A_1v_1 = A_2v_2$$ \n Mass conservation in fluid flow.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "psl17",
        title: "Bernoulli’s Theorem",
        content:
          "$$P + \\frac{1}{2}\\rho v^2 + \\rho gh = \\text{constant}$$ \n Energy conservation in fluid flow.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "psl18",
        title: "Surface Tension Force",
        content: "$$F = T \\times l$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "psl19",
        title: "Excess Pressure Inside Liquid Drop",
        content: "$$\\Delta P = \\frac{2T}{r}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "psl20",
        title: "Excess Pressure Inside Soap Bubble",
        content: "$$\\Delta P = \\frac{4T}{r}$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  thermal_properties: {
    formulas: [
      {
        id: "tpm1",
        title: "Heat",
        content:
          "$$Q = mc\\Delta T$$ \n Heat required to change temperature of a body without phase change. \n  $m$ = mass \n  $c$ = specific heat capacity \n  $\\Delta T$ = change in temperature",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "tpm2",
        title: "Specific Heat Capacity",
        content:
          "$$c = \\frac{Q}{m\\Delta T}$$ \n Amount of heat required to raise temperature of unit mass by $1^\\circ C$.",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "tpm3",
        title: "Heat Capacity",
        content:
          "$$C = mc$$ \n Heat required to raise temperature of the entire body by $1^\\circ C$.",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "tpm4",
        title: "Latent Heat",
        content:
          "$$Q = mL$$ \n Heat absorbed or released during phase change at constant temperature.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "tpm5",
        title: "Linear Expansion",
        content:
          "$$\\Delta L = L_0 \\alpha \\Delta T$$ \n Change in length due to temperature change.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "tpm6",
        title: "Areal Expansion",
        content:
          "$$\\Delta A = A_0 \\beta \\Delta T$$ \n $\\beta = 2\\alpha$ for isotropic solids.",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "tpm7",
        title: "Volume Expansion",
        content:
          "$$\\Delta V = V_0 \\gamma \\Delta T$$ \n $\\gamma = 3\\alpha$ for isotropic solids.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "tpm8",
        title: "Relation Between Expansion Coefficients",
        content:
          "$$\\beta = 2\\alpha, \\quad \\gamma = 3\\alpha$$ \n Valid for isotropic materials.",
        importance: "high",
        examFrequency: "Direct formula-based",
      },
      {
        id: "tpm9",
        title: "Apparent Expansion of Liquid",
        content: "$$\\gamma_{app} = \\gamma_{real} - \\gamma_{vessel}$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "tpm10",
        title: "Thermal Stress",
        content:
          "$$\\text{Stress} = Y \\alpha \\Delta T$$ \n Developed when expansion is prevented.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "tpm11",
        title: "Heat Conduction (Fourier’s Law)",
        content:
          "$$\\frac{dQ}{dt} = \\frac{kA(T_1 - T_2)}{L}$$ \n Rate of heat flow through a conductor.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "tpm12",
        title: "Thermal Resistance",
        content:
          "$$R = \\frac{L}{kA}$$ \n Opposition to heat flow (analogous to electrical resistance).",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "tpm13",
        title: "Newton’s Law of Cooling",
        content:
          "$$\\frac{dT}{dt} \\propto (T - T_0)$$ \n Rate of cooling is proportional to temperature difference for small $\\Delta T$.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "tpm14",
        title: "Radiation – Stefan’s Law",
        content:
          "$$E = \\sigma A T^4$$ \n Energy radiated per unit time by a black body.",
        importance: "high",
        examFrequency: "JEE & NEET",
      },
      {
        id: "tpm15",
        title: "Wien’s Displacement Law",
        content:
          "$$\\lambda_{max} T = b$$ \n Peak wavelength inversely proportional to temperature.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "tpm16",
        title: "Emissive Power Ratio",
        content: "$$\\frac{E_1}{E_2} = \\left(\\frac{T_1}{T_2}\\right)^4$$",
        importance: "medium",
        examFrequency: "Numerical-based",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  thermodynamics: {
    formulas: [
      {
        id: "td1",
        title: "Zeroth Law of Thermodynamics",
        content:
          "If two systems are each in thermal equilibrium with a third system, they are in thermal equilibrium with each other. \n Basis of temperature measurement.",
        importance: "medium",
        examFrequency: "Conceptual (NEET)",
      },
      {
        id: "td2",
        title: "First Law of Thermodynamics",
        content:
          "$$\\Delta Q = \\Delta U + W$$ \n Heat supplied = change in internal energy + work done by system.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "td3",
        title: "Work Done in Isothermal Process",
        content:
          "$$W = nRT \\ln\\left(\\frac{V_2}{V_1}\\right)$$ \n Temperature remains constant. \n Internal energy change = 0.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "td4",
        title: "Work Done in Adiabatic Process",
        content:
          "$$W = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1}$$ \n No heat exchange with surroundings.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "td5",
        title: "Isothermal Condition",
        content: "$$PV = \\text{constant}$$",
        importance: "medium",
        examFrequency: "Direct",
      },
      {
        id: "td6",
        title: "Adiabatic Condition",
        content:
          "$$PV^{\\gamma} = \\text{constant}$$ \n $\\gamma = \\frac{C_P}{C_V}$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td7",
        title: "Internal Energy of Ideal Gas",
        content:
          "$$U = \\frac{f}{2} nRT$$ \n Depends only on temperature. \n $f$ = degrees of freedom.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td8",
        title: "Molar Heat Capacity at Constant Volume",
        content: "$$C_V = \\left(\\frac{\\partial Q}{\\partial T}\\right)_V$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "td9",
        title: "Molar Heat Capacity at Constant Pressure",
        content: "$$C_P = \\left(\\frac{\\partial Q}{\\partial T}\\right)_P$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "td10",
        title: "Mayer’s Relation",
        content: "$$C_P - C_V = R$$ \n Valid only for ideal gases.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "td11",
        title: "Relation Between γ and Degrees of Freedom",
        content: "$$\\gamma = 1 + \\frac{2}{f}$$",
        importance: "high",
        examFrequency: "JEE Main",
      },
      {
        id: "td12",
        title: "Adiabatic Temperature–Volume Relation",
        content: "$$TV^{\\gamma - 1} = \\text{constant}$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "td13",
        title: "Adiabatic Temperature–Pressure Relation",
        content: "$$T^{\\gamma}P^{1 - \\gamma} = \\text{constant}$$",
        importance: "medium",
        examFrequency: "Advanced problems",
      },
      {
        id: "td14",
        title: "Efficiency of Heat Engine",
        content:
          "$$\\eta = \\frac{W}{Q_H} = 1 - \\frac{Q_C}{Q_H}$$ \n $Q_H$ = heat absorbed \n $Q_C$ = heat rejected",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "td15",
        title: "Efficiency of Carnot Engine",
        content:
          "$$\\eta_{max} = 1 - \\frac{T_C}{T_H}$$ \n Maximum possible efficiency between two temperatures.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "td16",
        title: "Coefficient of Performance (Refrigerator)",
        content: "$$COP = \\frac{Q_C}{W}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "td17",
        title: "Coefficient of Performance (Heat Pump)",
        content: "$$COP = \\frac{Q_H}{W}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "td18",
        title: "Second Law of Thermodynamics (Kelvin–Planck)",
        content:
          "It is impossible to convert all absorbed heat into work in a cyclic process.",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "td19",
        title: "Second Law of Thermodynamics (Clausius)",
        content:
          "Heat cannot flow spontaneously from a colder body to a hotter body.",
        importance: "high",
        examFrequency: "Conceptual",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  ktg: {
    formulas: [
      {
        id: "ktg1",
        title: "Ideal Gas Equation",
        content:
          "$$PV = nRT$$ \n Relates pressure, volume, and temperature of an ideal gas. \n  $n$ = number of moles \n  $R$ = universal gas constant",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "ktg2",
        title: "Kinetic Energy of One Mole of Gas",
        content:
          "$$E = \\frac{3}{2}RT$$ \n Depends only on absolute temperature, not on nature of gas.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ktg3",
        title: "Average Kinetic Energy per Molecule",
        content:
          "$$\\overline{E} = \\frac{3}{2}kT$$ \n $k$ = Boltzmann constant. \n Applies to monoatomic ideal gases.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "ktg4",
        title: "Root Mean Square (RMS) Speed",
        content:
          "$$v_{rms} = \\sqrt{\\frac{3RT}{M}}$$ \n Represents effective molecular speed. \n $M$ = molar mass",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "ktg5",
        title: "Average Speed of Gas Molecules",
        content: "$$v_{avg} = \\sqrt{\\frac{8RT}{\\pi M}}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ktg6",
        title: "Most Probable Speed",
        content: "$$v_{mp} = \\sqrt{\\frac{2RT}{M}}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ktg7",
        title: "Relation Between Molecular Speeds",
        content: "$$v_{rms} > v_{avg} > v_{mp}$$",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "ktg8",
        title: "Pressure of Ideal Gas (Kinetic Theory)",
        content:
          "$$P = \\frac{1}{3} \\rho v_{rms}^2$$ \n Pressure arises due to molecular collisions with container walls.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ktg9",
        title: "Mean Free Path",
        content:
          "$$\\lambda = \\frac{1}{\\sqrt{2}\\pi d^2 n}$$ \n Average distance traveled between two successive collisions.",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "ktg10",
        title: "Degrees of Freedom",
        content:
          "$$f = 3, 5, 7$$ \n Monoatomic: 3 \n Diatomic (room temp): 5 \n Polyatomic: 6 or more",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ktg11",
        title: "Internal Energy of Ideal Gas",
        content:
          "$$U = \\frac{f}{2}nRT$$ \n Depends only on temperature for ideal gases.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "ktg12",
        title: "Molar Heat Capacity at Constant Volume",
        content: "$$C_V = \\frac{f}{2}R$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "ktg13",
        title: "Molar Heat Capacity at Constant Pressure",
        content: "$$C_P = C_V + R$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "ktg14",
        title: "Ratio of Heat Capacities",
        content:
          "$$\\gamma = \\frac{C_P}{C_V}$$ \n Determines nature of thermodynamic processes.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ktg15",
        title: "Relation Between γ and Degrees of Freedom",
        content: "$$\\gamma = 1 + \\frac{2}{f}$$",
        importance: "high",
        examFrequency: "JEE Main",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  oscillations: {
    formulas: [
      {
        id: "osc1",
        title: "Simple Harmonic Motion (SHM) Condition",
        content:
          "$$F = -kx$$ \n Restoring force is directly proportional to displacement and acts towards mean position.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "osc2",
        title: "Angular Frequency of SHM",
        content:
          "$$\\omega = \\sqrt{\\frac{k}{m}}$$ \n Determines how fast oscillation occurs.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc3",
        title: "Time Period of SHM",
        content: "$$T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{m}{k}}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc4",
        title: "Displacement in SHM",
        content:
          "$$x = A\\sin(\\omega t + \\phi)$$ \n $A$ = amplitude, $\\phi$ = phase constant.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc5",
        title: "Velocity in SHM",
        content:
          "$$v = \\omega\\sqrt{A^2 - x^2}$$ \n Maximum at mean position, zero at extremes.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc6",
        title: "Acceleration in SHM",
        content:
          "$$a = -\\omega^2 x$$ \n Always directed toward mean position.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc7",
        title: "Maximum Velocity",
        content: "$$v_{max} = A\\omega$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "osc8",
        title: "Maximum Acceleration",
        content: "$$a_{max} = A\\omega^2$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "osc9",
        title: "Total Energy in SHM",
        content:
          "$$E = \\frac{1}{2}kA^2$$ \n Remains constant during oscillation.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc10",
        title: "Kinetic Energy in SHM",
        content: "$$K = \\frac{1}{2}k(A^2 - x^2)$$",
        importance: "medium",
        examFrequency: "Numerical",
      },
      {
        id: "osc11",
        title: "Potential Energy in SHM",
        content: "$$U = \\frac{1}{2}kx^2$$",
        importance: "medium",
        examFrequency: "Numerical",
      },
      {
        id: "osc12",
        title: "Time Period of Simple Pendulum",
        content:
          "$$T = 2\\pi\\sqrt{\\frac{l}{g}}$$ \n Valid for small angular oscillations.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "osc13",
        title: "Effective Length of Pendulum",
        content: "$$l = l_{string} + r_{bob}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "osc14",
        title: "Time Period of Physical Pendulum",
        content:
          "$$T = 2\\pi\\sqrt{\\frac{I}{mgl}}$$ \n $I$ = moment of inertia about pivot.",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "osc15",
        title: "Time Period of Spring–Block System",
        content: "$$T = 2\\pi\\sqrt{\\frac{m}{k}}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc16",
        title: "Combination of Springs (Series)",
        content: "$$\\frac{1}{k_{eq}} = \\frac{1}{k_1} + \\frac{1}{k_2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc17",
        title: "Combination of Springs (Parallel)",
        content: "$$k_{eq} = k_1 + k_2$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "osc18",
        title: "Effect of Temperature on Pendulum Time Period",
        content: "$$\\frac{\\Delta T}{T} = \\frac{1}{2}\\alpha \\Delta T$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  wave_optics: {
    formulas: [
      {
        id: "wo1",
        title: "Path Difference",
        content:
          "$$\\Delta = d \\sin\\theta$$ \n Difference in distance traveled by two waves reaching a point.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "wo2",
        title: "Condition for Constructive Interference",
        content:
          "$$\\Delta = n\\lambda$$ \n Waves meet in phase → maximum intensity.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "wo3",
        title: "Condition for Destructive Interference",
        content:
          "$$\\Delta = (2n + 1)\\frac{\\lambda}{2}$$ \n Waves meet out of phase → minimum intensity.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "wo4",
        title: "Young’s Double Slit Experiment (YDSE) – Fringe Width",
        content:
          "$$\\beta = \\frac{\\lambda D}{d}$$ \n Fringe width depends on wavelength, screen distance, and slit separation.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "wo5",
        title: "Position of Bright Fringe",
        content: "$$y_n = n\\beta$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "wo6",
        title: "Position of Dark Fringe",
        content: "$$y_n = \\left(n + \\frac{1}{2}\\right)\\beta$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "wo7",
        title: "Intensity in Interference",
        content:
          "$$I = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\phi$$ \n $\\phi$ = phase difference between waves.",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "wo8",
        title: "Maximum and Minimum Intensity",
        content:
          "$$I_{max} = (\\sqrt{I_1} + \\sqrt{I_2})^2$$ \n $$I_{min} = (\\sqrt{I_1} - \\sqrt{I_2})^2$$",
        importance: "medium",
        examFrequency: "Advanced problems",
      },
      {
        id: "wo9",
        title: "Diffraction – Single Slit Minima Condition",
        content:
          "$$a\\sin\\theta = n\\lambda$$ \n Destructive interference of secondary wavelets.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "wo10",
        title: "Angular Width of Central Maximum",
        content: "$$\\theta = \\frac{2\\lambda}{a}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "wo11",
        title: "Resolving Power (Rayleigh Criterion)",
        content:
          "$$\\theta_{min} = 1.22 \\frac{\\lambda}{D}$$ \n Minimum angular separation between two sources.",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "wo12",
        title: "Resolving Power of Microscope",
        content: "$$RP = \\frac{2NA}{\\lambda}$$ \n $NA$ = numerical aperture.",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "wo13",
        title: "Resolving Power of Telescope",
        content: "$$RP = \\frac{D}{1.22\\lambda}$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "wo14",
        title: "Polarization by Reflection (Brewster’s Law)",
        content:
          "$$\\tan\\theta_B = n$$ \n Reflected light becomes completely polarized.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "wo15",
        title: "Malus’ Law",
        content:
          "$$I = I_0 \\cos^2\\theta$$ \n Intensity after passing through analyzer.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  ray_optics: {
    formulas: [
      {
        id: "ro1",
        title: "Refractive Index",
        content:
          "$$n = \\frac{c}{v}$$ \n Ratio of speed of light in vacuum to speed in medium.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "ro2",
        title: "Snell’s Law of Refraction",
        content:
          "$$n_1\\sin\\theta_1 = n_2\\sin\\theta_2$$ \n Relates angles of incidence and refraction at interface.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ro3",
        title: "Absolute Refractive Index",
        content: "$$n = \\frac{\\sin i}{\\sin r}$$",
        importance: "medium",
        examFrequency: "Direct questions",
      },
      {
        id: "ro4",
        title: "Critical Angle",
        content:
          "$$\\sin C = \\frac{1}{n}$$ \n Occurs when angle of refraction becomes $90^\\circ$.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ro5",
        title: "Total Internal Reflection Condition",
        content:
          "Light must travel from denser to rarer medium and angle of incidence > critical angle.",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "ro6",
        title: "Mirror Formula",
        content:
          "$$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$$ \n Valid for both concave and convex mirrors.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "ro7",
        title: "Magnification (Mirror)",
        content: "$$m = \\frac{h_i}{h_o} = -\\frac{v}{u}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "ro8",
        title: "Refraction at Spherical Surface",
        content: "$$\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "ro9",
        title: "Lens Maker’s Formula",
        content:
          "$$\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$$ \n Used to calculate focal length of lens.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ro10",
        title: "Thin Lens Formula",
        content: "$$\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ro11",
        title: "Magnification (Lens)",
        content: "$$m = \\frac{h_i}{h_o} = \\frac{v}{u}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "ro12",
        title: "Power of Lens",
        content: "$$P = \\frac{1}{f}$$ \n $f$ in meters, $P$ in dioptres.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "ro13",
        title: "Combination of Lenses in Contact",
        content: "$$P = P_1 + P_2$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ro14",
        title: "Refraction Through Glass Slab (Lateral Shift)",
        content: "$$d = t \\frac{\\sin(i - r)}{\\cos r}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ro15",
        title: "Apparent Depth",
        content:
          "$$\\text{Apparent depth} = \\frac{\\text{Real depth}}{n}$$ \n Due to refraction at plane surface.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ro16",
        title: "Refraction Through Prism – Deviation",
        content: "$$\\delta = i + e - A$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "ro17",
        title: "Minimum Deviation Formula",
        content:
          "$$n = \\frac{\\sin\\left(\\frac{A + \\delta_m}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$$ \n Used to find refractive index of prism.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "ro18",
        title: "Angular Magnification of Simple Microscope",
        content: "$$M = 1 + \\frac{D}{f}$$",
        importance: "medium",
        examFrequency: "NEET",
      },
      {
        id: "ro19",
        title: "Angular Magnification of Astronomical Telescope",
        content: "$$M = \\frac{f_o}{f_e}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  electrostatics: {
    formulas: [
      {
        id: "es1",
        title: "Coulomb’s Law",
        content:
          "$$F = k \\frac{q_1 q_2}{r^2}$$ \n Force between two point charges acting along the line joining them. \n  Attractive or repulsive depending on charges.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "es2",
        title: "Coulomb Constant",
        content:
          "$$k = \\frac{1}{4\\pi\\varepsilon_0}$$ \n $\\varepsilon_0$ = permittivity of free space.",
        importance: "medium",
        examFrequency: "Direct",
      },
      {
        id: "es3",
        title: "Electric Field",
        content:
          "$$\\vec{E} = \\frac{\\vec{F}}{q}$$ \n Force experienced per unit positive test charge.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es4",
        title: "Electric Field Due to Point Charge",
        content: "$$E = k \\frac{q}{r^2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es5",
        title: "Superposition Principle",
        content:
          "$$\\vec{E}_{net} = \\sum \\vec{E}_i$$ \n Net field is vector sum of individual fields.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es6",
        title: "Electric Dipole Moment",
        content:
          "$$\\vec{p} = q\\vec{d}$$ \n Directed from negative to positive charge.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "es7",
        title: "Electric Field on Axial Line of Dipole",
        content: "$$E = k \\frac{2p}{r^3}$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "es8",
        title: "Electric Field on Equatorial Line of Dipole",
        content: "$$E = k \\frac{p}{r^3}$$",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "es9",
        title: "Torque on Electric Dipole",
        content:
          "$$\\tau = pE\\sin\\theta$$ \n Tends to align dipole along field direction.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es10",
        title: "Potential Difference",
        content: "$$V = \\frac{W}{q}$$",
        importance: "high",
        examFrequency: "Foundational",
      },
      {
        id: "es11",
        title: "Electric Potential Due to Point Charge",
        content: "$$V = k \\frac{q}{r}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es12",
        title: "Potential Energy of Two Charges",
        content: "$$U = k \\frac{q_1 q_2}{r}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es13",
        title: "Potential Energy of Electric Dipole",
        content: "$$U = -pE\\cos\\theta$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "es14",
        title: "Relation Between Electric Field and Potential",
        content:
          "$$E = -\\frac{dV}{dr}$$ \n Electric field points in direction of decreasing potential.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es15",
        title: "Gauss’s Law",
        content:
          "$$\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enc}}{\\varepsilon_0}$$ \n Useful for highly symmetric charge distributions.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "es16",
        title: "Electric Field Due to Infinite Line Charge",
        content: "$$E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "es17",
        title: "Electric Field Due to Infinite Plane Sheet",
        content: "$$E = \\frac{\\sigma}{2\\varepsilon_0}$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "es18",
        title: "Capacitance",
        content: "$$C = \\frac{Q}{V}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es19",
        title: "Capacitance of Parallel Plate Capacitor",
        content: "$$C = \\frac{\\varepsilon_0 A}{d}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es20",
        title: "Capacitance with Dielectric",
        content: "$$C = k \\frac{\\varepsilon_0 A}{d}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es21",
        title: "Energy Stored in Capacitor",
        content: "$$U = \\frac{1}{2}CV^2 = \\frac{Q^2}{2C}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "es22",
        title: "Electric Energy Density",
        content: "$$u = \\frac{1}{2}\\varepsilon_0 E^2$$",
        importance: "medium",
        examFrequency: "Advanced problems",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  current_electricity: {
    formulas: [
      {
        id: "ce1",
        title: "Electric Current",
        content:
          "$$I = \\frac{Q}{t}$$ \n Rate of flow of electric charge through a conductor.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "ce2",
        title: "Current Density",
        content:
          "$$\\vec{J} = \\frac{I}{A}$$ \n Current per unit cross-sectional area. \n Vector quantity.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "ce3",
        title: "Ohm’s Law",
        content:
          "$$V = IR$$ \n Voltage across a conductor is proportional to current at constant temperature.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce4",
        title: "Resistance",
        content: "$$R = \\frac{V}{I}$$",
        importance: "high",
        examFrequency: "Foundational",
      },
      {
        id: "ce5",
        title: "Resistance of a Uniform Wire",
        content:
          "$$R = \\rho \\frac{L}{A}$$ \n Depends on material, length, and cross-sectional area.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce6",
        title: "Resistivity",
        content:
          "$$\\rho = \\frac{RA}{L}$$ \n Material property; independent of dimensions.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "ce7",
        title: "Temperature Dependence of Resistance",
        content:
          "$$R_T = R_0(1 + \\alpha \\Delta T)$$ \n Valid for small temperature changes.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "ce8",
        title: "Electrical Conductivity",
        content: "$$\\sigma = \\frac{1}{\\rho}$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "ce9",
        title: "Combination of Resistors (Series)",
        content:
          "$$R_{eq} = R_1 + R_2 + R_3$$ \n Same current flows through all resistors.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce10",
        title: "Combination of Resistors (Parallel)",
        content:
          "$$\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2}$$ \n Same voltage across each branch.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce11",
        title: "Electric Power",
        content:
          "$$P = VI = I^2R = \\frac{V^2}{R}$$ \n Rate of electrical energy consumption.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce12",
        title: "Electrical Energy",
        content: "$$E = Pt = VIt$$",
        importance: "medium",
        examFrequency: "Direct numericals",
      },
      {
        id: "ce13",
        title: "Drift Velocity",
        content:
          "$$v_d = \\frac{I}{nqA}$$ \n Average velocity of charge carriers due to electric field.",
        importance: "high",
        examFrequency: "JEE Main & Advanced",
      },
      {
        id: "ce14",
        title: "Relation Between Drift Velocity and Electric Field",
        content: "$$v_d = \\mu E$$ \n $\\mu$ = mobility of charge carriers.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "ce15",
        title: "Microscopic Form of Ohm’s Law",
        content: "$$\\vec{J} = \\sigma \\vec{E}$$",
        importance: "high",
        examFrequency: "JEE Advanced",
      },
      {
        id: "ce16",
        title: "EMF of a Cell",
        content:
          "$$\\mathcal{E} = V + Ir$$ \n Potential difference across open terminals.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce17",
        title: "Terminal Voltage (Discharging Cell)",
        content: "$$V = \\mathcal{E} - Ir$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce18",
        title: "Terminal Voltage (Charging Cell)",
        content: "$$V = \\mathcal{E} + Ir$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ce19",
        title: "Cells in Series",
        content: "$$\\mathcal{E}_{eq} = n\\mathcal{E}, \\quad r_{eq} = nr$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce20",
        title: "Cells in Parallel",
        content:
          "$$\\mathcal{E}_{eq} = \\mathcal{E}, \\quad r_{eq} = \\frac{r}{n}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ce21",
        title: "Kirchhoff’s Current Law (KCL)",
        content:
          "$$\\sum I_{in} = \\sum I_{out}$$ \n Charge conservation at a junction.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "ce22",
        title: "Kirchhoff’s Voltage Law (KVL)",
        content: "$$\\sum V = 0$$ \n Energy conservation in a closed loop.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "ce23",
        title: "Wheatstone Bridge (Balanced Condition)",
        content: "$$\\frac{R_1}{R_2} = \\frac{R_3}{R_4}$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "ce24",
        title: "Meter Bridge Formula",
        content: "$$\\frac{X}{R} = \\frac{l}{100 - l}$$",
        importance: "medium",
        examFrequency: "NEET",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  magnetism: {
    formulas: [
      {
        id: "mem1",
        title: "Magnetic Force on a Moving Charge (Lorentz Force)",
        content:
          "$$\\vec{F} = q(\\vec{v} \\times \\vec{B})$$ \n Force acts perpendicular to both velocity and magnetic field. \n Zero force if $\\vec{v} \\parallel \\vec{B}$.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "mem2",
        title: "Magnitude of Magnetic Force",
        content: "$$F = qvB\\sin\\theta$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem3",
        title: "Force on a Current Carrying Conductor",
        content:
          "$$\\vec{F} = I(\\vec{L} \\times \\vec{B})$$ \n Direction given by Fleming’s Left Hand Rule.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem4",
        title: "Magnitude of Force on Conductor",
        content: "$$F = BIL\\sin\\theta$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem5",
        title: "Motion of Charged Particle in Magnetic Field (Radius)",
        content:
          "$$r = \\frac{mv}{qB}$$ \n Particle moves in circular path when velocity ⟂ field.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "mem6",
        title: "Time Period of Charged Particle in Magnetic Field",
        content:
          "$$T = \\frac{2\\pi m}{qB}$$ \n Independent of particle speed.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "mem7",
        title: "Cyclotron Frequency",
        content: "$$f = \\frac{qB}{2\\pi m}$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "mem8",
        title: "Magnetic Field Due to Long Straight Current-Carrying Wire",
        content: "$$B = \\frac{\\mu_0 I}{2\\pi r}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem9",
        title: "Magnetic Field at Center of Circular Loop",
        content: "$$B = \\frac{\\mu_0 I}{2R}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem10",
        title: "Magnetic Field on Axis of Circular Coil",
        content: "$$B = \\frac{\\mu_0 IR^2}{2(R^2 + x^2)^{3/2}}$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "mem11",
        title: "Biot–Savart Law",
        content:
          "$$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I(d\\vec{l} \\times \\hat{r})}{r^2}$$ \n Gives magnetic field due to small current element.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "mem12",
        title: "Ampere’s Circuital Law",
        content:
          "$$\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{enc}$$ \n Used for symmetric current distributions.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem13",
        title: "Force Between Two Parallel Current-Carrying Wires",
        content:
          "$$\\frac{F}{L} = \\frac{\\mu_0 I_1 I_2}{2\\pi d}$$ \n Same direction → attraction, opposite → repulsion.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem14",
        title: "Magnetic Dipole Moment (Current Loop)",
        content: "$$\\vec{m} = IA\\hat{n}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "mem15",
        title: "Torque on Magnetic Dipole",
        content:
          "$$\\tau = mB\\sin\\theta$$ \n Tends to align dipole with magnetic field.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "mem16",
        title: "Potential Energy of Magnetic Dipole",
        content: "$$U = -mB\\cos\\theta$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "mem17",
        title: "Magnetic Field Due to Magnetic Dipole (Axial Line)",
        content: "$$B = \\frac{\\mu_0}{4\\pi} \\frac{2m}{r^3}$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "mem18",
        title: "Magnetic Field Due to Magnetic Dipole (Equatorial Line)",
        content: "$$B = \\frac{\\mu_0}{4\\pi} \\frac{m}{r^3}$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "mem19",
        title: "Earth’s Magnetic Field (Horizontal Component)",
        content: "$$B_H = B \\cos\\theta$$",
        importance: "medium",
        examFrequency: "NEET",
      },
      {
        id: "mem20",
        title: "Relation Between Magnetic Field Components",
        content:
          "$$\\tan\\theta = \\frac{B_V}{B_H}$$ \n $\\theta$ = angle of dip.",
        importance: "medium",
        examFrequency: "NEET",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  emi: {
    formulas: [
      {
        id: "emi1",
        title: "Magnetic Flux",
        content:
          "$$\\Phi = \\vec{B} \\cdot \\vec{A} = BA\\cos\\theta$$ \n Measures number of magnetic field lines passing through a surface.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "emi2",
        title: "Faraday’s First Law",
        content:
          "An emf is induced whenever the magnetic flux linked with a circuit changes. \n Cause of induction is change in flux, not motion alone.",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "emi3",
        title: "Faraday’s Second Law",
        content:
          "$$\\mathcal{E} = -\\frac{d\\Phi}{dt}$$ \n Magnitude of induced emf equals rate of change of flux.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi4",
        title: "Lenz’s Law",
        content:
          "Induced current flows in a direction that opposes the change producing it. \n Represents conservation of energy.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi5",
        title: "Induced EMF in a Coil of N Turns",
        content: "$$\\mathcal{E} = -N\\frac{d\\Phi}{dt}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi6",
        title: "Motional EMF",
        content:
          "$$\\mathcal{E} = B\\ell v$$ \n Induced when conductor moves perpendicular to magnetic field.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "emi7",
        title: "Induced Current",
        content: "$$I = \\frac{\\mathcal{E}}{R}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi8",
        title: "Self Inductance",
        content:
          "$$L = \\frac{N\\Phi}{I}$$ \n Property of a coil to oppose change in current.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi9",
        title: "Induced EMF due to Self Induction",
        content: "$$\\mathcal{E} = -L\\frac{dI}{dt}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi10",
        title: "Mutual Inductance",
        content:
          "$$M = \\frac{N_2\\Phi_{21}}{I_1}$$ \n Flux in secondary due to current in primary.",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "emi11",
        title: "Induced EMF due to Mutual Induction",
        content: "$$\\mathcal{E} = -M\\frac{dI}{dt}$$",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "emi12",
        title: "Self Inductance of Long Solenoid",
        content: "$$L = \\frac{\\mu_0 N^2 A}{\\ell}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi13",
        title: "Energy Stored in Inductor",
        content:
          "$$U = \\frac{1}{2}LI^2$$ \n Energy stored in magnetic field of the inductor.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi14",
        title: "Magnetic Energy Density",
        content: "$$u = \\frac{1}{2}B H$$",
        importance: "medium",
        examFrequency: "Advanced problems",
      },
      {
        id: "emi15",
        title: "LR Circuit – Time Constant",
        content:
          "$$\\tau = \\frac{L}{R}$$ \n Time to reach 63% of final current.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi16",
        title: "Current Growth in LR Circuit",
        content: "$$I = I_0\\left(1 - e^{-t/\\tau}\\right)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi17",
        title: "Current Decay in LR Circuit",
        content: "$$I = I_0 e^{-t/\\tau}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emi18",
        title: "Induced Charge During Change of Current",
        content: "$$q = \\frac{L}{R}(I_2 - I_1)$$",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  ac: {
    formulas: [
      {
        id: "ac1",
        title: "Instantaneous Value of AC Current",
        content:
          "$$i = i_0 \\sin(\\omega t)$$ \n $i_0$ = peak current, $\\omega$ = angular frequency.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "ac2",
        title: "Instantaneous Value of AC Voltage",
        content: "$$v = v_0 \\sin(\\omega t)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac3",
        title: "Angular Frequency",
        content: "$$\\omega = 2\\pi f$$ \n $f$ = frequency of AC source.",
        importance: "high",
        examFrequency: "Foundational",
      },
      {
        id: "ac4",
        title: "Time Period of AC",
        content: "$$T = \\frac{1}{f}$$",
        importance: "medium",
        examFrequency: "Direct",
      },
      {
        id: "ac5",
        title: "RMS Value of Current",
        content:
          "$$I_{rms} = \\frac{I_0}{\\sqrt{2}}$$ \n Effective current producing same heating effect as DC.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac6",
        title: "RMS Value of Voltage",
        content: "$$V_{rms} = \\frac{V_0}{\\sqrt{2}}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac7",
        title: "Average Value of AC Current",
        content: "$$I_{avg} = \\frac{2I_0}{\\pi}$$ \n Average over half cycle.",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ac8",
        title: "Inductive Reactance",
        content: "$$X_L = \\omega L$$ \n Opposition offered by inductor to AC.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac9",
        title: "Capacitive Reactance",
        content:
          "$$X_C = \\frac{1}{\\omega C}$$ \n Opposition offered by capacitor to AC.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac10",
        title: "Impedance of RLC Series Circuit",
        content: "$$Z = \\sqrt{R^2 + (X_L - X_C)^2}$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "ac11",
        title: "Current in RLC Series Circuit",
        content: "$$I = \\frac{V}{Z}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac12",
        title: "Phase Angle in RLC Circuit",
        content:
          "$$\\tan\\phi = \\frac{X_L - X_C}{R}$$ \n Determines lead or lag of current.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "ac13",
        title: "Power in AC Circuit",
        content:
          "$$P = V_{rms} I_{rms} \\cos\\phi$$ \n $\\cos\\phi$ = power factor.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac14",
        title: "Power Factor",
        content: "$$\\cos\\phi = \\frac{R}{Z}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ac15",
        title: "Resonant Frequency (Series RLC)",
        content:
          "$$\\omega_0 = \\frac{1}{\\sqrt{LC}}$$ \n At resonance: $X_L = X_C$ and current is maximum.",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "ac16",
        title: "Current at Resonance",
        content: "$$I_{max} = \\frac{V}{R}$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "ac17",
        title: "Quality Factor (Q-Factor)",
        content:
          "$$Q = \\frac{\\omega_0 L}{R}$$ \n Measures sharpness of resonance.",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "ac18",
        title: "Bandwidth",
        content: "$$BW = \\frac{\\omega_0}{Q}$$",
        importance: "medium",
        examFrequency: "Advanced problems",
      },
      {
        id: "ac19",
        title: "Purely Resistive Circuit",
        content: "$$\\phi = 0, \\quad P_{avg} = V_{rms} I_{rms}$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "ac20",
        title: "Purely Inductive Circuit",
        content: "$$\\phi = 90^\\circ, \\quad P_{avg} = 0$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "ac21",
        title: "Purely Capacitive Circuit",
        content: "$$\\phi = -90^\\circ, \\quad P_{avg} = 0$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  em_waves: {
    formulas: [
      {
        id: "emw1",
        title: "Nature of Electromagnetic Waves",
        content:
          "Electromagnetic waves are transverse waves consisting of oscillating electric and magnetic fields perpendicular to each other and to the direction of propagation. \n They do not require a material medium.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "emw2",
        title: "Speed of Electromagnetic Waves in Vacuum",
        content:
          "$$c = 3 \\times 10^8\\ \\text{m/s}$$ \n Speed is same for all EM waves in vacuum.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emw3",
        title: "Relation Between Speed, Frequency and Wavelength",
        content:
          "$$c =  \n u \\lambda$$ \n Valid for all electromagnetic waves.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "emw4",
        title: "Speed of EM Wave in Medium",
        content:
          "$$v = \\frac{1}{\\sqrt{\\mu \\varepsilon}}$$ \n Depends on permeability and permittivity of the medium.",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "emw5",
        title: "Relation Between Electric and Magnetic Fields",
        content:
          "$$E = cB$$ \n Electric field is much stronger than magnetic field in magnitude.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "emw6",
        title: "Energy Density of Electromagnetic Wave",
        content:
          "$$u = u_E + u_B = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{1}{2\\mu_0} B^2$$ \n Energy is equally shared between electric and magnetic fields.",
        importance: "medium",
        examFrequency: "JEE Advanced",
      },
      {
        id: "emw7",
        title: "Intensity of Electromagnetic Wave",
        content:
          "$$I = \\frac{1}{2} c \\varepsilon_0 E_0^2$$ \n Average energy crossing unit area per unit time.",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "emw8",
        title: "Momentum of Electromagnetic Wave",
        content:
          "$$p = \\frac{E}{c}$$ \n EM waves carry momentum despite having no mass.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "emw9",
        title: "Radiation Pressure",
        content:
          "$$P = \\frac{I}{c}$$ \n Pressure exerted by EM waves on a surface (for complete absorption).",
        importance: "medium",
        examFrequency: "JEE Main",
      },
      {
        id: "emw10",
        title: "Radiation Pressure for Perfect Reflection",
        content: "$$P = \\frac{2I}{c}$$",
        importance: "medium",
        examFrequency: "Advanced numericals",
      },
      {
        id: "emw11",
        title: "Maxwell’s Prediction",
        content:
          "$$c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}$$ \n Speed of EM waves depends only on electric and magnetic constants.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "emw12",
        title: "Electromagnetic Spectrum (Order)",
        content:
          "Radio → Microwave → Infrared → Visible → Ultraviolet → X-rays → Gamma rays \n Wavelength decreases and frequency increases in this order.",
        importance: "high",
        examFrequency: "Every year in NEET & JEE",
      },
      {
        id: "emw13",
        title: "Wavelength–Frequency Relation in Spectrum",
        content: "$$\\lambda \\downarrow \\Rightarrow  \n u \\uparrow$$",
        importance: "high",
        examFrequency: "Direct theory",
      },
      {
        id: "emw14",
        title: "Uses of Microwaves",
        content: "Radar, satellite communication, microwave ovens.",
        importance: "medium",
        examFrequency: "NEET theory",
      },
      {
        id: "emw15",
        title: "Uses of X-Rays",
        content:
          "Medical imaging, crystal structure analysis, security scanning.",
        importance: "medium",
        examFrequency: "NEET theory",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  dual_nature: {
    formulas: [
      {
        id: "dn1",
        title: "Planck’s Quantum Relation",
        content:
          "$$E = h \n u$$ \n Energy of a photon is directly proportional to its frequency. \n  $h$ = Planck’s constant",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "dn2",
        title: "Energy–Wavelength Relation",
        content:
          "$$E = \\frac{hc}{\\lambda}$$ \n Used to calculate photon energy from wavelength.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "dn3",
        title: "Photon Momentum",
        content:
          "$$p = \\frac{E}{c} = \\frac{h}{\\lambda}$$ \n Photons carry momentum despite having zero rest mass.",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "dn4",
        title: "Photoelectric Effect – Einstein’s Equation",
        content:
          "$$h \n u = \\phi + K_{max}$$ \n Photon energy is used to overcome work function and give kinetic energy to electron.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "dn5",
        title: "Maximum Kinetic Energy of Photoelectrons",
        content: "$$K_{max} = h \n u - \\phi$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "dn6",
        title: "Stopping Potential",
        content:
          "$$K_{max} = eV_0$$ \n Stopping potential just stops the most energetic photoelectrons.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "dn7",
        title: "Threshold Frequency",
        content:
          "$$ \n u_0 = \\frac{\\phi}{h}$$ \n Minimum frequency required for photoelectric emission.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "dn8",
        title: "Threshold Wavelength",
        content: "$$\\lambda_0 = \\frac{hc}{\\phi}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "dn9",
        title: "de Broglie Wavelength",
        content:
          "$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$ \n Matter exhibits wave nature.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "dn10",
        title: "de Broglie Wavelength of Electron (Accelerated through V)",
        content: "$$\\lambda = \\frac{h}{\\sqrt{2meV}}$$",
        importance: "high",
        examFrequency: "Very common",
      },
      {
        id: "dn11",
        title: "Non-Relativistic Approximation of de Broglie Wavelength",
        content:
          "$$\\lambda(\\text{Å}) = \\frac{12.27}{\\sqrt{V}}$$ \n $V$ in volts. \n Used directly in numericals.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "dn12",
        title: "Effect of Intensity on Photoelectric Effect",
        content:
          "Increasing intensity increases number of photoelectrons but not their maximum kinetic energy.",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "dn13",
        title: "Effect of Frequency on Photoelectric Effect",
        content:
          "Increasing frequency increases maximum kinetic energy of photoelectrons.",
        importance: "high",
        examFrequency: "Conceptual",
      },
      {
        id: "dn14",
        title: "Dual Nature Statement",
        content:
          "Radiation and matter exhibit both wave and particle nature depending on experimental conditions.",
        importance: "medium",
        examFrequency: "Theory based",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  atoms_nuclei: {
    formulas: [
      {
        id: "an1",
        title: "Rutherford Scattering Formula",
        content:
          "$$\\frac{dN}{d\\Omega} \\propto \\frac{1}{\\sin^4(\\theta/2)}$$ \n Probability of scattering decreases rapidly with increase in angle.",
        importance: "medium",
        examFrequency: "JEE Advanced (theory)",
      },
      {
        id: "an2",
        title: "Bohr’s Radius",
        content:
          "$$r_n = \\frac{n^2 h^2}{4\\pi^2 m k e^2} = 0.529n^2\\ \\text{Å}$$ \n Radius of nth orbit in hydrogen atom.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "an3",
        title: "Velocity of Electron in nth Orbit",
        content: "$$v_n = \\frac{ke^2}{nh}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "an4",
        title: "Total Energy of Electron in nth Orbit",
        content:
          "$$E_n = -\\frac{13.6}{n^2}\\ \\text{eV}$$ \n Negative sign indicates bound state.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an5",
        title: "Energy Difference Between Orbits",
        content: "$$\\Delta E = E_2 - E_1$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "an6",
        title: "Frequency of Emitted/Absorbed Radiation",
        content: "$$h \n u = E_2 - E_1$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an7",
        title: "Rydberg Formula",
        content:
          "$$\\frac{1}{\\lambda} = R\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$$ \n Used to calculate wavelength of spectral lines.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "an8",
        title: "Ionization Energy of Hydrogen Atom",
        content:
          "$$E = 13.6\\ \\text{eV}$$ \n Energy required to remove electron from ground state.",
        importance: "high",
        examFrequency: "Direct",
      },
      {
        id: "an9",
        title: "Nuclear Radius",
        content: "$$R = R_0 A^{1/3}$$ \n $R_0 \\approx 1.3\\ \\text{fm}$.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an10",
        title: "Nuclear Density",
        content:
          "$$\\rho = \\frac{3M}{4\\pi R^3}$$ \n Nearly constant for all nuclei.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "an11",
        title: "Mass Defect",
        content:
          "$$\\Delta m = Zm_p + (A-Z)m_n - M$$ \n Difference between sum of nucleon masses and actual nucleus mass.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an12",
        title: "Binding Energy",
        content:
          "$$BE = \\Delta m c^2$$ \n Energy required to completely disassemble nucleus.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an13",
        title: "Binding Energy per Nucleon",
        content: "$$\\frac{BE}{A}$$ \n Indicator of nuclear stability.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "an14",
        title: "Radioactive Decay Law",
        content:
          "$$N = N_0 e^{-\\lambda t}$$ \n Number of undecayed nuclei decreases exponentially.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an15",
        title: "Activity of Radioactive Sample",
        content: "$$A = \\lambda N$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an16",
        title: "Half-Life",
        content: "$$T_{1/2} = \\frac{0.693}{\\lambda}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "an17",
        title: "Mean Life",
        content: "$$\\tau = \\frac{1}{\\lambda}$$",
        importance: "medium",
        examFrequency: "Direct",
      },
      {
        id: "an18",
        title: "Relation Between Half-Life and Mean Life",
        content: "$$\\tau = \\frac{T_{1/2}}{0.693}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  semiconductors: {
    formulas: [
      {
        id: "se1",
        title: "Energy Band Gap",
        content:
          "$$E_g = E_c - E_v$$ \n Energy difference between conduction band ($E_c$) and valence band ($E_v$). \n Determines conducting behavior.",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "se2",
        title: "Classification by Band Gap",
        content:
          "Conductor: $E_g \\approx 0$ \n Semiconductor: $E_g \\approx 1\\ \\text{eV}$ \n Insulator: $E_g > 3\\ \\text{eV}$",
        importance: "high",
        examFrequency: "Direct theory",
      },
      {
        id: "se3",
        title: "Charge of Electron",
        content: "$$q = 1.6 \\times 10^{-19}\\ \\text{C}$$",
        importance: "medium",
        examFrequency: "Basic constant",
      },
      {
        id: "se4",
        title: "Current Density in Semiconductor",
        content:
          "$$J = nqv_d$$ \n $n$ = charge carrier density \n $v_d$ = drift velocity",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "se5",
        title: "Conductivity of Semiconductor",
        content:
          "$$\\sigma = nq\\mu$$ \n Depends on charge density and mobility.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se6",
        title: "Drift Velocity",
        content: "$$v_d = \\mu E$$",
        importance: "high",
        examFrequency: "Foundational",
      },
      {
        id: "se7",
        title: "Mobility",
        content:
          "$$\\mu = \\frac{v_d}{E}$$ \n Higher mobility → better conductivity.",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "se8",
        title: "Intrinsic Carrier Concentration Relation",
        content:
          "$$n = p = n_i$$ \n In pure (intrinsic) semiconductors, electron and hole concentrations are equal.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se9",
        title: "Mass Action Law",
        content: "$$np = n_i^2$$ \n Valid at thermal equilibrium.",
        importance: "high",
        examFrequency: "Every year in JEE & NEET",
      },
      {
        id: "se10",
        title: "Diode Current Equation",
        content:
          "$$I = I_0\\left(e^{\\frac{V}{\\eta V_T}} - 1\\right)$$ \n $I_0$ = reverse saturation current \n $V_T$ ≈ 26 mV at room temperature",
        importance: "high",
        examFrequency: "JEE Main",
      },
      {
        id: "se11",
        title: "Threshold Voltage of Diode",
        content:
          "Silicon: $\\approx 0.7\\ \\text{V}$ \n Germanium: $\\approx 0.3\\ \\text{V}$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se12",
        title: "Dynamic Resistance of Diode",
        content: "$$r_d = \\frac{\\eta V_T}{I}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "se13",
        title: "Rectifier Efficiency",
        content: "$$\\eta = \\frac{P_{dc}}{P_{ac}}$$",
        importance: "medium",
        examFrequency: "NEET",
      },
      {
        id: "se14",
        title: "Ripple Factor",
        content:
          "$$r = \\frac{I_{rms(ac)}}{I_{dc}}$$ \n Measures smoothness of rectified output.",
        importance: "medium",
        examFrequency: "NEET",
      },
      {
        id: "se15",
        title: "Zener Breakdown Condition",
        content:
          "$$V = V_Z$$ \n Diode maintains constant voltage in breakdown region.",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se16",
        title: "Transistor Current Relation",
        content: "$$I_E = I_C + I_B$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se17",
        title: "Current Gain (Common Base)",
        content: "$$\\alpha = \\frac{I_C}{I_E}$$",
        importance: "high",
        examFrequency: "Frequently asked",
      },
      {
        id: "se18",
        title: "Current Gain (Common Emitter)",
        content: "$$\\beta = \\frac{I_C}{I_B}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se19",
        title: "Relation Between α and β",
        content: "$$\\beta = \\frac{\\alpha}{1 - \\alpha}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se20",
        title: "Voltage Gain of Transistor Amplifier",
        content: "$$A_v = \\frac{\\Delta V_o}{\\Delta V_i}$$",
        importance: "medium",
        examFrequency: "Conceptual",
      },
      {
        id: "se21",
        title: "Logic Levels (Digital Electronics)",
        content: "Logic 0: Low voltage \n Logic 1: High voltage",
        importance: "high",
        examFrequency: "Every year in NEET",
      },
      {
        id: "se22",
        title: "NOT Gate Output",
        content: "$$Y = \\overline{A}$$",
        importance: "high",
        examFrequency: "Direct logic questions",
      },
      {
        id: "se23",
        title: "AND Gate Output",
        content: "$$Y = A \\cdot B$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "se24",
        title: "OR Gate Output",
        content: "$$Y = A + B$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
};
