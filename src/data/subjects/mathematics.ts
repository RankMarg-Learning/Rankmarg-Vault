// Mathematics subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const mathematicsSubject: SubjectConfig = {
  id: "mathematics",
  name: "Mathematics",
  slug: "mathematics",
  icon: "M",
  topics: [
    {
      id: "basic_mathematics",
      name: "Basic Mathematics",
      slug: "basic-mathematics",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "BM",
    },
    {
      id: "sets_relations_functions",
      name: "Sets, Relations & Functions",
      slug: "sets-relations-functions",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "SRF",
    },
    {
      id: "complex_numbers",
      name: "Complex Numbers & Quadratic Equations",
      slug: "complex-numbers-quadratic-equations",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "CN",
    },
    {
      id: "sequences_series",
      name: "Sequences and Series",
      slug: "sequences-and-series",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "SS",
    },
    {
      id: "binomial_theorem",
      name: "Binomial Theorem",
      slug: "binomial-theorem",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "BT",
    },
    {
      id: "permutations_combinations",
      name: "Permutations and Combinations",
      slug: "permutations-and-combinations",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "PC",
    },
    {
      id: "trigonometric_functions",
      name: "Trigonometric Functions",
      slug: "trigonometric-functions",
      allowedTypes: ["formulas", "short_tricks", "exceptions", "constants"],
      icon: "TRIG",
    },
    {
      id: "inverse_trigonometric",
      name: "Inverse Trigonometric Functions",
      slug: "inverse-trigonometric-functions",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "ITF",
    },

    {
      id: "straight_line",
      name: "Coordinate Geometry – Straight Line",
      slug: "coordinate-geometry-straight-line",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "SL",
    },
    {
      id: "circle",
      name: "Coordinate Geometry – Circle",
      slug: "coordinate-geometry-circle",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "CIR",
    },
    {
      id: "conic_sections",
      name: "Coordinate Geometry – Conic Sections",
      slug: "coordinate-geometry-conic-sections",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "CS",
    },

    {
      id: "limits_continuity",
      name: "Limits, Continuity & Differentiability",
      slug: "limits-continuity-differentiability",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "LCD",
    },
    {
      id: "differentiation",
      name: "Differentiation",
      slug: "differentiation",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "DIFF",
    },
    {
      id: "application_derivatives",
      name: "Application of Derivatives",
      slug: "application-of-derivatives",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "AOD",
    },
    {
      id: "area_under_curve",
      name: "Area Under the Curves",
      slug: "area-under-the-curves",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "AUC",
    },
    {
      id: "indefinite_integrals",
      name: "Indefinite Integrals",
      slug: "indefinite-integrals",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "II",
    },
    {
      id: "definite_integrals",
      name: "Definite Integration",
      slug: "definite-integration",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "DI",
    },
    {
      id: "differential_equations",
      name: "Differential Equations",
      slug: "differential-equations",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "DE",
    },

    {
      id: "vectors",
      name: "Vectors",
      slug: "vectors",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "VEC",
    },
    {
      id: "three_d_geometry",
      name: "Three-Dimensional Geometry",
      slug: "three-dimensional-geometry",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "3D",
    },

    {
      id: "matrices_determinants",
      name: "Matrices & Determinants",
      slug: "matrices-and-determinants",
      allowedTypes: ["formulas", "short_tricks", "exceptions"],
      icon: "MD",
    },
    {
      id: "probability",
      name: "Probability",
      slug: "probability",
      allowedTypes: ["formulas", "short_tricks", "exceptions", "constants"],
      icon: "PROB",
    },
    {
      id: "statistics",
      name: "Statistics",
      slug: "statistics",
      allowedTypes: ["formulas", "constants", "short_tricks"],
      icon: "STAT",
    },
  ],
};

// Mathematics content organized by topic
export const mathematicsContent: Record<
  string,
  Record<ContentType, ContentItem[]>
> = {
  basic_mathematics: {
    formulas: [
      /* ===================== SETS ===================== */
      {
        id: "bm1",
        title: "Number of Elements in Union of Two Sets",
        content: "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "bm2",
        title: "Number of Elements in Union of Three Sets",
        content:
          "$$n(A \\cup B \\cup C) = n(A)+n(B)+n(C) - n(A\\cap B)-n(B\\cap C)-n(C\\cap A)+n(A\\cap B\\cap C)$$",
        importance: "high",
        examFrequency: "Frequent",
      },

      /* ===================== RELATIONS ===================== */
      {
        id: "bm3",
        title: "Number of Relations",
        content:
          "$$\\text{Number of relations from } A \\text{ to } B = 2^{n(A)\\cdot n(B)}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },

      /* ===================== FUNCTIONS ===================== */
      {
        id: "bm4",
        title: "Composite Function",
        content: "$$(f \\circ g)(x) = f(g(x))$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm5",
        title: "Inverse Function Condition",
        content: "$$f^{-1}(f(x)) = x$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== TRIGONOMETRY ===================== */
      {
        id: "bm6",
        title: "Fundamental Trigonometric Identity",
        content: "$$\\sin^2 x + \\cos^2 x = 1$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm7",
        title: "Tan Identity",
        content: "$$1 + \\tan^2 x = \\sec^2 x$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm8",
        title: "Sine of Sum",
        content: "$$\\sin(A+B)=\\sin A\\cos B+\\cos A\\sin B$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm9",
        title: "Cosine of Sum",
        content: "$$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== QUADRATIC EQUATIONS ===================== */
      {
        id: "bm10",
        title: "Quadratic Formula",
        content: "$$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm11",
        title: "Discriminant",
        content: "$$D = b^2 - 4ac$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm12",
        title: "Sum and Product of Roots",
        content:
          "$$\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== SEQUENCES & SERIES ===================== */
      {
        id: "bm13",
        title: "nth Term of AP",
        content: "$$a_n = a + (n-1)d$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm14",
        title: "Sum of n Terms of AP",
        content: "$$S_n = \\frac{n}{2}[2a+(n-1)d]$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm15",
        title: "nth Term of GP",
        content: "$$a_n = ar^{n-1}$$",
        importance: "high",
        examFrequency: "Frequent",
      },
      {
        id: "bm16",
        title: "Sum of Infinite GP",
        content: "$$S = \\frac{a}{1-r}, \\; |r|<1$$",
        importance: "high",
        examFrequency: "Frequent",
      },

      /* ===================== PERMUTATIONS & COMBINATIONS ===================== */
      {
        id: "bm17",
        title: "Permutation Formula",
        content: "$$^nP_r = \\frac{n!}{(n-r)!}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm18",
        title: "Combination Formula",
        content: "$$^nC_r = \\frac{n!}{r!(n-r)!}$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== BINOMIAL THEOREM ===================== */
      {
        id: "bm19",
        title: "Binomial Expansion",
        content: "$$(a+b)^n = \\sum_{r=0}^n {^nC_r} a^{n-r} b^r$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm20",
        title: "General Term in Binomial Expansion",
        content: "$$T_{r+1} = {^nC_r} a^{n-r} b^r$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== MATRICES ===================== */
      {
        id: "bm21",
        title: "Matrix Multiplication Condition",
        content: "$$(AB)_{m\\times n} = A_{m\\times p} \\cdot B_{p\\times n}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },

      /* ===================== DETERMINANTS ===================== */
      {
        id: "bm22",
        title: "Determinant of 2×2 Matrix",
        content:
          "$$\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== LIMITS ===================== */
      {
        id: "bm23",
        title: "Standard Limit",
        content: "$$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== DERIVATIVES ===================== */
      {
        id: "bm24",
        title: "Derivative of Power Function",
        content: "$$\\frac{d}{dx}(x^n) = nx^{n-1}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "bm25",
        title: "Derivative of Trigonometric Function",
        content: "$$\\frac{d}{dx}(\\sin x) = \\cos x$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  sets_relations_functions: {
    formulas: [
      /* ===================== SETS ===================== */
      {
        id: "srf1",
        title: "Union of Two Sets",
        content: "$$n(A \\cup B) = n(A) + n(B) - n(A \\cap B)$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "srf2",
        title: "Union of Three Sets",
        content:
          "$$n(A \\cup B \\cup C) = n(A)+n(B)+n(C) - n(A\\cap B)-n(B\\cap C)-n(C\\cap A) + n(A\\cap B\\cap C)$$",
        importance: "high",
        examFrequency: "Frequent",
      },
      {
        id: "srf3",
        title: "Complement of a Set",
        content: "$$n(A') = n(U) - n(A)$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "srf4",
        title: "Difference of Sets",
        content: "$$n(A-B) = n(A) - n(A \\cap B)$$",
        importance: "medium",
        examFrequency: "Occasional",
      },

      /* ===================== RELATIONS ===================== */
      {
        id: "srf5",
        title: "Number of Relations",
        content: "$$\\text{Total relations} = 2^{n(A)\\cdot n(B)}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "srf6",
        title: "Number of Relations on a Set",
        content: "$$\\text{Total relations} = 2^{n(A)^2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "srf7",
        title: "Number of Reflexive Relations",
        content: "$$2^{n^2 - n}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "srf8",
        title: "Number of Symmetric Relations",
        content: "$$2^{\\frac{n(n+1)}{2}}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "srf9",
        title: "Number of Transitive Relations",
        content: "$$\\text{No fixed formula}$$",
        importance: "low",
        examFrequency: "Rare",
      },

      /* ===================== FUNCTIONS ===================== */
      {
        id: "srf10",
        title: "Number of Functions",
        content: "$$\\text{Functions from } A \\to B = n(B)^{n(A)}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "srf11",
        title: "Number of One-One Functions",
        content: "$$^nP_m \\quad (n \\ge m)$$",
        importance: "high",
        examFrequency: "Frequent",
      },
      {
        id: "srf12",
        title: "Number of Onto Functions",
        content:
          "$$n^m - \\binom{n}{1}(n-1)^m + \\binom{n}{2}(n-2)^m - \\dots$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "srf13",
        title: "Composite Function",
        content: "$$(f \\circ g)(x) = f(g(x))$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "srf14",
        title: "Inverse Function Condition",
        content: "$$f^{-1}(f(x)) = x$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "srf15",
        title: "Invertible Function Condition",
        content: "$$f \\text{ is invertible } \\iff f \\text{ is bijective}$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  complex_numbers: {
    formulas: [
      /* ===================== COMPLEX NUMBERS ===================== */
      {
        id: "cq1",
        title: "Standard Form of Complex Number",
        content: "$$z = a + ib$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "cq2",
        title: "Modulus of Complex Number",
        content: "$$|z| = \\sqrt{a^2 + b^2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq3",
        title: "Conjugate of Complex Number",
        content: "$$\\bar{z} = a - ib$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq4",
        title: "Product with Conjugate",
        content: "$$z\\bar{z} = |z|^2$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq5",
        title: "Polar Form of Complex Number",
        content: "$$z = r(\\cos\\theta + i\\sin\\theta)$$",
        importance: "high",
        examFrequency: "Frequent",
      },
      {
        id: "cq6",
        title: "Argument of Complex Number",
        content: "$$\\tan\\theta = \\frac{b}{a}$$",
        importance: "medium",
        examFrequency: "Frequent",
      },
      {
        id: "cq7",
        title: "De Moivre’s Theorem",
        content:
          "$$[r(\\cos\\theta+i\\sin\\theta)]^n = r^n(\\cos n\\theta + i\\sin n\\theta)$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq8",
        title: "nth Roots of Unity",
        content: "$$z_k = \\cos\\frac{2k\\pi}{n} + i\\sin\\frac{2k\\pi}{n}$$",
        importance: "high",
        examFrequency: "Frequent",
      },

      /* ===================== QUADRATIC EQUATIONS ===================== */
      {
        id: "cq9",
        title: "Standard Quadratic Equation",
        content: "$$ax^2 + bx + c = 0$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq10",
        title: "Quadratic Formula",
        content: "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq11",
        title: "Discriminant",
        content: "$$D = b^2 - 4ac$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq12",
        title: "Nature of Roots",
        content: "$$D>0,\\; D=0,\\; D<0$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq13",
        title: "Sum of Roots",
        content: "$$\\alpha + \\beta = -\\frac{b}{a}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq14",
        title: "Product of Roots",
        content: "$$\\alpha\\beta = \\frac{c}{a}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "cq15",
        title: "Equation with Given Roots",
        content: "$$x^2 - (\\alpha+\\beta)x + \\alpha\\beta = 0$$",
        importance: "high",
        examFrequency: "Frequent",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  sequences_series: {
    formulas: [
      /* ===================== BASIC DEFINITIONS ===================== */
      {
        id: "ss1",
        title: "nth Term of a Sequence",
        content: "$$a_n$$",
        importance: "medium",
        examFrequency: "Occasional",
      },

      /* ===================== ARITHMETIC PROGRESSION (AP) ===================== */
      {
        id: "ss2",
        title: "nth Term of AP",
        content: "$$a_n = a + (n-1)d$$",
        importance: "high",
        examFrequency: "Every year in JEE",
      },
      {
        id: "ss3",
        title: "Sum of n Terms of AP",
        content: "$$S_n = \\frac{n}{2}[2a + (n-1)d]$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ss4",
        title: "Arithmetic Mean",
        content: "$$A = \\frac{a+b}{2}$$",
        importance: "high",
        examFrequency: "Every year",
      },

      /* ===================== GEOMETRIC PROGRESSION (GP) ===================== */
      {
        id: "ss5",
        title: "nth Term of GP",
        content: "$$a_n = ar^{n-1}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ss6",
        title: "Sum of n Terms of GP",
        content: "$$S_n = a\\frac{r^n - 1}{r - 1}, \\; r \\neq 1$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ss7",
        title: "Geometric Mean",
        content: "$$G = \\sqrt{ab}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },
      {
        id: "ss8",
        title: "Sum of Infinite GP",
        content: "$$S = \\frac{a}{1-r}, \\; |r|<1$$",
        importance: "high",
        examFrequency: "Frequent",
      },

      /* ===================== HARMONIC PROGRESSION (HP) ===================== */
      {
        id: "ss9",
        title: "Harmonic Mean",
        content: "$$H = \\frac{2ab}{a+b}$$",
        importance: "medium",
        examFrequency: "Occasional",
      },

      /* ===================== SPECIAL SERIES ===================== */
      {
        id: "ss10",
        title: "Sum of First n Natural Numbers",
        content: "$$1+2+3+\\dots+n = \\frac{n(n+1)}{2}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ss11",
        title: "Sum of Squares of First n Natural Numbers",
        content: "$$1^2+2^2+3^2+\\dots+n^2 = \\frac{n(n+1)(2n+1)}{6}$$",
        importance: "high",
        examFrequency: "Every year",
      },
      {
        id: "ss12",
        title: "Sum of Cubes of First n Natural Numbers",
        content:
          "$$1^3+2^3+3^3+\\dots+n^3 = \\left[\\frac{n(n+1)}{2}\\right]^2$$",
        importance: "high",
        examFrequency: "Every year",
      },
    ],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  binomial_theorem: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  permutations_combinations: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  trigonometric_functions: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  inverse_trigonometric: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  straight_line: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  circle: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  conic_sections: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  limits_continuity: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  differentiation: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  application_derivatives: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  area_under_curve: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  indefinite_integrals: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  definite_integrals: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  differential_equations: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  vectors: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  three_d_geometry: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  matrices_determinants: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  probability: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
  statistics: {
    formulas: [],
    short_tricks: [],
    constants: [],
    exceptions: [],
    reactions: [],
  },
};
