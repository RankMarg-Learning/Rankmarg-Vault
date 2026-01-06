// Mathematics subject configuration and content
import type { SubjectConfig, ContentType, ContentItem } from "../types";

export const mathematicsSubject: SubjectConfig = {
  id: "mathematics",
  name: "Mathematics",
  slug: "mathematics",
  icon: "M",
  topics: [
  {
    "id": "basic_mathematics",
    "name": "Basic Mathematics",
    "slug": "basic-mathematics",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "BM"
  },
  {
    "id": "sets_relations_functions",
    "name": "Sets, Relations & Functions",
    "slug": "sets-relations-functions",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "SRF"
  },
  {
    "id": "complex_numbers",
    "name": "Complex Numbers & Quadratic Equations",
    "slug": "complex-numbers-quadratic-equations",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "CN"
  },
  {
    "id": "sequences_series",
    "name": "Sequences and Series",
    "slug": "sequences-and-series",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "SS"
  },
  {
    "id": "binomial_theorem",
    "name": "Binomial Theorem",
    "slug": "binomial-theorem",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "BT"
  },
  {
    "id": "permutations_combinations",
    "name": "Permutations and Combinations",
    "slug": "permutations-and-combinations",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "PC"
  },
  {
    "id": "trigonometric_functions",
    "name": "Trigonometric Functions",
    "slug": "trigonometric-functions",
    "allowedTypes": ["formulas", "short_tricks", "exceptions", "constants"],
    "icon": "TRIG"
  },
  {
    "id": "inverse_trigonometric",
    "name": "Inverse Trigonometric Functions",
    "slug": "inverse-trigonometric-functions",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "ITF"
  },

  {
    "id": "straight_line",
    "name": "Coordinate Geometry – Straight Line",
    "slug": "coordinate-geometry-straight-line",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "SL"
  },
  {
    "id": "circle",
    "name": "Coordinate Geometry – Circle",
    "slug": "coordinate-geometry-circle",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "CIR"
  },
  {
    "id": "conic_sections",
    "name": "Coordinate Geometry – Conic Sections",
    "slug": "coordinate-geometry-conic-sections",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "CS"
  },

  {
    "id": "limits_continuity",
    "name": "Limits, Continuity & Differentiability",
    "slug": "limits-continuity-differentiability",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "LCD"
  },
  {
    "id": "differentiation",
    "name": "Differentiation",
    "slug": "differentiation",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "DIFF"
  },
  {
    "id": "application_derivatives",
    "name": "Application of Derivatives",
    "slug": "application-of-derivatives",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "AOD"
  },
  {
    "id": "area_under_curve",
    "name": "Area Under the Curves",
    "slug": "area-under-the-curves",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "AUC"
  },
  {
    "id": "indefinite_integrals",
    "name": "Indefinite Integrals",
    "slug": "indefinite-integrals",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "II"
  },
  {
    "id": "definite_integrals",
    "name": "Definite Integration",
    "slug": "definite-integration",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "DI"
  },
  {
    "id": "differential_equations",
    "name": "Differential Equations",
    "slug": "differential-equations",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "DE"
  },

  {
    "id": "vectors",
    "name": "Vectors",
    "slug": "vectors",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "VEC"
  },
  {
    "id": "three_d_geometry",
    "name": "Three-Dimensional Geometry",
    "slug": "three-dimensional-geometry",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "3D"
  },

  {
    "id": "matrices_determinants",
    "name": "Matrices & Determinants",
    "slug": "matrices-and-determinants",
    "allowedTypes": ["formulas", "short_tricks", "exceptions"],
    "icon": "MD"
  },
  {
    "id": "probability",
    "name": "Probability",
    "slug": "probability",
    "allowedTypes": ["formulas", "short_tricks", "exceptions", "constants"],
    "icon": "PROB"
  },
  {
    "id": "statistics",
    "name": "Statistics",
    "slug": "statistics",
    "allowedTypes": ["formulas", "constants", "short_tricks"],
    "icon": "STAT"
  }
],
};

// Mathematics content organized by topic
export const mathematicsContent: Record<string, Record<ContentType, ContentItem[]>> = {
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
  "coordinate-geometry": {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  probability: {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  vectors: {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  matrices: {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  },
};


