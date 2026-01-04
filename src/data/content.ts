// Static content data for RankVault - No database required

export type ExamType = 'JEE' | 'NEET';

export type ContentType = 'formulas' | 'short_tricks' | 'reactions' | 'constants' | 'exceptions';

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  importance: 'high' | 'medium' | 'low';
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

export const contentTypeLabels: Record<ContentType, { label: string; icon: string; color: string }> = {
  formulas: { label: 'Formulas', icon: '🧮', color: 'bg-primary text-primary-foreground' },
  short_tricks: { label: 'Short Tricks', icon: '⚡', color: 'bg-accent text-accent-foreground' },
  reactions: { label: 'Reactions', icon: '⚗️', color: 'bg-warning text-warning-foreground' },
  constants: { label: 'Constants', icon: '📐', color: 'bg-info text-info-foreground' },
  exceptions: { label: 'Exceptions', icon: '⚠️', color: 'bg-destructive text-destructive-foreground' },
};

export const examsData: ExamConfig[] = [
  {
    id: 'JEE',
    name: 'JEE',
    fullName: 'Joint Entrance Examination',
    subjects: [
      {
        id: 'physics-jee',
        name: 'Physics',
        icon: '⚛️',
        topics: [
          { id: 'kinematics', name: 'Kinematics', allowedTypes: ['formulas', 'short_tricks'], icon: '🚀' },
          { id: 'thermodynamics', name: 'Thermodynamics', allowedTypes: ['formulas', 'short_tricks', 'constants'], icon: '🔥' },
          { id: 'electromagnetism', name: 'Electromagnetism', allowedTypes: ['formulas', 'short_tricks', 'constants'], icon: '⚡' },
          { id: 'optics', name: 'Optics', allowedTypes: ['formulas', 'short_tricks'], icon: '🔦' },
          { id: 'modern-physics', name: 'Modern Physics', allowedTypes: ['formulas', 'constants'], icon: '🌌' },
        ],
      },
      {
        id: 'chemistry-jee',
        name: 'Chemistry',
        icon: '🧪',
        topics: [
          { id: 'organic-reactions', name: 'Organic Reactions', allowedTypes: ['reactions', 'short_tricks', 'exceptions'], icon: '🔬' },
          { id: 'inorganic-chemistry', name: 'Inorganic Chemistry', allowedTypes: ['reactions', 'exceptions', 'short_tricks'], icon: '⚗️' },
          { id: 'physical-chemistry', name: 'Physical Chemistry', allowedTypes: ['formulas', 'short_tricks', 'constants'], icon: '📊' },
          { id: 'chemical-bonding', name: 'Chemical Bonding', allowedTypes: ['formulas', 'exceptions'], icon: '🔗' },
        ],
      },
      {
        id: 'mathematics-jee',
        name: 'Mathematics',
        icon: '📐',
        topics: [
          { id: 'calculus', name: 'Calculus', allowedTypes: ['formulas', 'short_tricks'], icon: '∫' },
          { id: 'algebra', name: 'Algebra', allowedTypes: ['formulas', 'short_tricks'], icon: '➕' },
          { id: 'coordinate-geometry', name: 'Coordinate Geometry', allowedTypes: ['formulas', 'short_tricks'], icon: '📈' },
          { id: 'trigonometry', name: 'Trigonometry', allowedTypes: ['formulas', 'short_tricks'], icon: '📐' },
          { id: 'probability', name: 'Probability & Statistics', allowedTypes: ['formulas', 'short_tricks'], icon: '🎲' },
        ],
      },
    ],
  },
  {
    id: 'NEET',
    name: 'NEET',
    fullName: 'National Eligibility cum Entrance Test',
    subjects: [
      {
        id: 'physics-neet',
        name: 'Physics',
        icon: '⚛️',
        topics: [
          { id: 'mechanics-neet', name: 'Mechanics', allowedTypes: ['formulas', 'short_tricks'], icon: '⚙️' },
          { id: 'waves-neet', name: 'Waves & Oscillations', allowedTypes: ['formulas', 'short_tricks'], icon: '🌊' },
          { id: 'thermodynamics-neet', name: 'Thermodynamics', allowedTypes: ['formulas', 'constants'], icon: '🔥' },
          { id: 'electrostatics-neet', name: 'Electrostatics', allowedTypes: ['formulas', 'short_tricks'], icon: '⚡' },
        ],
      },
      {
        id: 'chemistry-neet',
        name: 'Chemistry',
        icon: '🧪',
        topics: [
          { id: 'organic-neet', name: 'Organic Chemistry', allowedTypes: ['reactions', 'short_tricks', 'exceptions'], icon: '🔬' },
          { id: 'inorganic-neet', name: 'Inorganic Chemistry', allowedTypes: ['reactions', 'exceptions'], icon: '⚗️' },
          { id: 'physical-neet', name: 'Physical Chemistry', allowedTypes: ['formulas', 'constants'], icon: '📊' },
        ],
      },
      {
        id: 'biology-neet',
        name: 'Biology',
        icon: '🧬',
        topics: [
          { id: 'human-physiology', name: 'Human Physiology', allowedTypes: ['short_tricks', 'exceptions'], icon: '❤️' },
          { id: 'plant-physiology', name: 'Plant Physiology', allowedTypes: ['short_tricks', 'reactions'], icon: '🌱' },
          { id: 'genetics', name: 'Genetics', allowedTypes: ['formulas', 'short_tricks', 'exceptions'], icon: '🧬' },
          { id: 'ecology', name: 'Ecology', allowedTypes: ['short_tricks', 'exceptions'], icon: '🌍' },
          { id: 'cell-biology', name: 'Cell Biology', allowedTypes: ['short_tricks', 'exceptions'], icon: '🔬' },
        ],
      },
    ],
  },
];

// Sample content data - In production, this would come from JSON files
export const contentData: Record<string, Record<ContentType, ContentItem[]>> = {
  'kinematics': {
    formulas: [
      { id: 'k1', title: 'First Equation of Motion', content: 'v = u + at\n\nWhere:\n• v = final velocity\n• u = initial velocity\n• a = acceleration\n• t = time', importance: 'high', examFrequency: 'Every year in JEE' },
      { id: 'k2', title: 'Second Equation of Motion', content: 's = ut + ½at²\n\nWhere:\n• s = displacement\n• u = initial velocity\n• a = acceleration\n• t = time', importance: 'high', examFrequency: 'Every year in JEE' },
      { id: 'k3', title: 'Third Equation of Motion', content: 'v² = u² + 2as\n\nUseful when time is not given', importance: 'high', examFrequency: 'Frequently asked' },
      { id: 'k4', title: 'Projectile Motion - Range', content: 'R = (u²sin2θ)/g\n\nMaximum range at θ = 45°', importance: 'high', examFrequency: 'Every year' },
      { id: 'k5', title: 'Projectile Motion - Max Height', content: 'H = (u²sin²θ)/(2g)', importance: 'medium', examFrequency: 'Often asked' },
      { id: 'k6', title: 'Time of Flight', content: 'T = (2u·sinθ)/g', importance: 'medium', examFrequency: 'Often asked' },
    ],
    short_tricks: [
      { id: 'kt1', title: 'SUVAT Memory Trick', content: '📝 Remember: "Some Very Amazing Teachers"\n\n• S = displacement\n• U = initial velocity\n• V = final velocity\n• A = acceleration\n• T = time', importance: 'high', examFrequency: 'Fundamental' },
      { id: 'kt2', title: 'Projectile Symmetry', content: '🎯 At same height:\n• Speed is same (going up & down)\n• Velocity magnitudes equal\n• Time to reach = Time to fall', importance: 'high', examFrequency: 'Tricky questions' },
      { id: 'kt3', title: 'Relative Motion Shortcut', content: '⚡ For two objects moving in same direction:\nRelative velocity = v₁ - v₂\n\nOpposite direction:\nRelative velocity = v₁ + v₂', importance: 'medium', examFrequency: 'Common in problems' },
    ],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  'thermodynamics': {
    formulas: [
      { id: 't1', title: 'First Law of Thermodynamics', content: 'ΔU = Q - W\n\nOr: Q = ΔU + W\n\n• Q = Heat added\n• W = Work done BY system\n• ΔU = Change in internal energy', importance: 'high', examFrequency: 'Every year' },
      { id: 't2', title: 'Ideal Gas Equation', content: 'PV = nRT\n\n• P = Pressure\n• V = Volume\n• n = moles\n• R = 8.314 J/mol·K\n• T = Temperature (Kelvin)', importance: 'high', examFrequency: 'Every year' },
      { id: 't3', title: 'Work Done in Isothermal Process', content: 'W = nRT ln(V₂/V₁)\n\nOr: W = nRT ln(P₁/P₂)', importance: 'high', examFrequency: 'Frequently asked' },
      { id: 't4', title: 'Adiabatic Process', content: 'PVᵞ = constant\n\nTVᵞ⁻¹ = constant\n\nWhere γ = Cp/Cv', importance: 'high', examFrequency: 'Very important' },
    ],
    short_tricks: [
      { id: 'tt1', title: 'Process Memory: IAPI', content: '📝 I-A-P-I for processes:\n\n• Isothermal: T constant, PV = const\n• Adiabatic: Q = 0, PVᵞ = const\n• Polytropic: PVⁿ = const\n• Isobaric: P constant, V/T = const', importance: 'high', examFrequency: 'Conceptual' },
      { id: 'tt2', title: 'γ Values Quick Reference', content: '⚡ γ (gamma) values:\n\n• Monoatomic: γ = 5/3 = 1.67\n• Diatomic: γ = 7/5 = 1.4\n• Polyatomic: γ = 4/3 = 1.33', importance: 'high', examFrequency: 'Every calculation' },
    ],
    reactions: [],
    constants: [
      { id: 'tc1', title: 'Universal Gas Constant', content: 'R = 8.314 J/(mol·K)\n\nOr: R = 0.0821 L·atm/(mol·K)\n\nOr: R = 2 cal/(mol·K)', importance: 'high', examFrequency: 'Always needed' },
      { id: 'tc2', title: 'Boltzmann Constant', content: 'k = 1.38 × 10⁻²³ J/K\n\nRelation: k = R/Nₐ', importance: 'medium', examFrequency: 'Statistical mechanics' },
    ],
    exceptions: [],
  },
  'organic-reactions': {
    formulas: [],
    short_tricks: [
      { id: 'or-t1', title: 'Markovnikov Rule Memory', content: '💡 "Rich get Richer"\n\nH goes to C with MORE H atoms\nX goes to C with FEWER H atoms\n\nApplies to: HX addition to unsymmetrical alkenes', importance: 'high', examFrequency: 'Every year' },
      { id: 'or-t2', title: 'SN1 vs SN2 Quick Check', content: '⚡ SN1 favors:\n• 3° > 2° > 1° carbocation stability\n• Polar protic solvents\n• Weak nucleophiles\n\nSN2 favors:\n• 1° > 2° (3° doesn\'t work)\n• Polar aprotic solvents\n• Strong nucleophiles', importance: 'high', examFrequency: 'Mechanism questions' },
    ],
    reactions: [
      { id: 'or-r1', title: 'Friedel-Crafts Alkylation', content: 'Benzene + RX → Alkylbenzene + HX\n\nCatalyst: AlCl₃ (anhydrous)\n\n⚠️ Limitation: Doesn\'t work with deactivated rings (NO₂, CN groups)', importance: 'high', examFrequency: 'Every year' },
      { id: 'or-r2', title: 'Aldol Condensation', content: '2 CH₃CHO → CH₃CH(OH)CH₂CHO → CH₃CH=CHCHO + H₂O\n\nCatalyst: Dilute NaOH\nCondition: Aldehydes with α-hydrogen', importance: 'high', examFrequency: 'Name reactions' },
      { id: 'or-r3', title: 'Cannizzaro Reaction', content: '2 HCHO + NaOH → HCOONa + CH₃OH\n\nFor: Aldehydes WITHOUT α-hydrogen\nSelf oxidation-reduction', importance: 'high', examFrequency: 'Name reactions' },
      { id: 'or-r4', title: 'Wurtz Reaction', content: '2R-X + 2Na → R-R + 2NaX\n\nUse: Synthesis of higher alkanes\n⚠️ Works best with 1° alkyl halides', importance: 'medium', examFrequency: 'Often asked' },
    ],
    constants: [],
    exceptions: [
      { id: 'or-e1', title: 'Anti-Markovnikov Addition', content: '⚠️ Exception to Markovnikov Rule:\n\nHBr + Alkene (with peroxide) → Anti-Markovnikov product\n\n• H goes to C with LESS H\n• Only with HBr, not HCl or HI', importance: 'high', examFrequency: 'Tricky questions' },
    ],
  },
  'human-physiology': {
    formulas: [],
    short_tricks: [
      { id: 'hp-t1', title: 'Heart Chambers Memory', content: '📝 "LA-RA-LV-RV"\n\n• LA receives from: Pulmonary veins (O₂ blood)\n• RA receives from: Vena cava (deO₂ blood)\n• LV pumps to: Aorta (body)\n• RV pumps to: Pulmonary artery (lungs)', importance: 'high', examFrequency: 'Diagram questions' },
      { id: 'hp-t2', title: 'Blood Group Compatibility', content: '🩸 Universal Donor: O (no antigens)\n🩸 Universal Acceptor: AB (no antibodies)\n\nRemember: "O gives to All, AB takes from All"', importance: 'high', examFrequency: 'Every year' },
      { id: 'hp-t3', title: 'Digestive Enzymes Location', content: '⚡ Mouth: Salivary amylase (starch)\nStomach: Pepsin (protein)\nSmall intestine: Trypsin, lipase, amylase\n\nTrick: "MoST Smart" = Mouth-Stomach-Small intestine for main digestion', importance: 'high', examFrequency: 'Frequently asked' },
    ],
    reactions: [],
    constants: [],
    exceptions: [
      { id: 'hp-e1', title: 'Bombay Blood Group Exception', content: '⚠️ Bombay Phenotype (hh):\n\n• Has h antigen, lacks H antigen\n• Cannot receive O blood (has H antigen)\n• Can only receive from other Bombay phenotype\n• Extremely rare (1 in 10,000 in India)', importance: 'medium', examFrequency: 'Rare but important' },
    ],
  },
  'calculus': {
    formulas: [
      { id: 'c1', title: 'Derivative of Basic Functions', content: 'd/dx(xⁿ) = nxⁿ⁻¹\nd/dx(eˣ) = eˣ\nd/dx(ln x) = 1/x\nd/dx(sin x) = cos x\nd/dx(cos x) = -sin x', importance: 'high', examFrequency: 'Every problem' },
      { id: 'c2', title: 'Integration Formulas', content: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C\n∫eˣ dx = eˣ + C\n∫(1/x) dx = ln|x| + C\n∫sin x dx = -cos x + C\n∫cos x dx = sin x + C', importance: 'high', examFrequency: 'Every problem' },
      { id: 'c3', title: 'Product Rule', content: 'd/dx[u·v] = u·dv/dx + v·du/dx\n\nMemory: "First times derivative of second, plus second times derivative of first"', importance: 'high', examFrequency: 'Very common' },
      { id: 'c4', title: 'Chain Rule', content: 'd/dx[f(g(x))] = f\'(g(x)) · g\'(x)\n\nOuter derivative × Inner derivative', importance: 'high', examFrequency: 'Very common' },
    ],
    short_tricks: [
      { id: 'ct1', title: 'LIATE Rule for Integration by Parts', content: '📝 Choose u in this order:\n\n• L - Logarithmic\n• I - Inverse trig\n• A - Algebraic\n• T - Trigonometric\n• E - Exponential\n\n∫u dv = uv - ∫v du', importance: 'high', examFrequency: 'Integration questions' },
      { id: 'ct2', title: 'Definite Integral Properties', content: '⚡ Quick checks:\n\n• ∫ₐᵃ f(x)dx = 0\n• ∫ₐᵇ f(x)dx = -∫ᵇₐ f(x)dx\n• Even function: ∫₋ₐᵃ f(x)dx = 2∫₀ᵃ f(x)dx\n• Odd function: ∫₋ₐᵃ f(x)dx = 0', importance: 'high', examFrequency: 'Time-saving' },
    ],
    reactions: [],
    constants: [],
    exceptions: [],
  },
  'genetics': {
    formulas: [
      { id: 'g1', title: 'Hardy-Weinberg Equation', content: 'p² + 2pq + q² = 1\np + q = 1\n\nWhere:\n• p = frequency of dominant allele\n• q = frequency of recessive allele\n• p² = homozygous dominant\n• 2pq = heterozygous\n• q² = homozygous recessive', importance: 'high', examFrequency: 'Every year in NEET' },
    ],
    short_tricks: [
      { id: 'gt1', title: 'Punnett Square Ratios', content: '📝 Memorize these ratios:\n\n• Monohybrid: 3:1 (phenotype), 1:2:1 (genotype)\n• Dihybrid: 9:3:3:1\n• Incomplete dominance: 1:2:1\n• Codominance: 1:2:1', importance: 'high', examFrequency: 'Every genetics problem' },
      { id: 'gt2', title: 'X-Linked Inheritance Pattern', content: '⚡ For X-linked recessive:\n\n• Affected males > Affected females\n• Carrier females pass to 50% sons\n• Father can\'t pass to sons\n\nExamples: Color blindness, Hemophilia', importance: 'high', examFrequency: 'Pedigree questions' },
    ],
    reactions: [],
    constants: [],
    exceptions: [
      { id: 'ge1', title: 'Exceptions to Mendel\'s Laws', content: '⚠️ Non-Mendelian Inheritance:\n\n• Incomplete dominance: Blending (e.g., pink snapdragon)\n• Codominance: Both expressed (e.g., AB blood type)\n• Epistasis: One gene masks another\n• Polygenic: Multiple genes for one trait\n• Pleiotropy: One gene, many effects', importance: 'high', examFrequency: 'Advanced questions' },
    ],
  },
};

// Get content for a specific topic and type
export const getTopicContent = (topicId: string, contentType: ContentType): ContentItem[] => {
  return contentData[topicId]?.[contentType] || [];
};

// Get all content for a topic
export const getAllTopicContent = (topicId: string): Record<ContentType, ContentItem[]> => {
  return contentData[topicId] || {
    formulas: [],
    short_tricks: [],
    reactions: [],
    constants: [],
    exceptions: [],
  };
};
