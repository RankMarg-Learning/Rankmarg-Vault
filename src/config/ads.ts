export const AD_AREA_CONTROLS = {
  CONTENT_VIEWER: false,
  CONTENT_LIST: false,
  HOME_AFTER_FEATURES: false,
  HOME_AFTER_SUBJECTS: false,
  SAVED_LIST: false,
  TOPIC_GRID: false,
  FOOTER: false,
  HEADER: false,
} as const;

export interface AdConfig {
  enabled: boolean;
  probability: number;
  minItemsRequired: number;
  position: "random" | "middle" | "first-quarter" | "third-quarter";
  skipFirstAndLast: boolean;
}

export interface AdContent {
  id: string;
  type: "ad";
  title: string;
  description: string;
  buttonText: string;
  url: string;
  icon?: string;
  image?: string;
  aspect?: "banner" | "card" | "compact" | "inline";
}

export type AdPlacement =
  | "contentViewer"
  | "contentList"
  | "homeAfterFeatures"
  | "homeAfterSubjects"
  | "savedList"
  | "topicGrid"
  | "footer"
  | "header";

export interface AdPlacementConfig {
  enabled: boolean;
  priority: number;
  aspect: "banner" | "card" | "compact" | "inline";
  config?: AdConfig;
}

export const adPlacements: Record<AdPlacement, AdPlacementConfig> = {
  contentViewer: {
    enabled: AD_AREA_CONTROLS.CONTENT_VIEWER,
    priority: 1,
    aspect: "card",
    config: {
      enabled: AD_AREA_CONTROLS.CONTENT_VIEWER,
      probability: 1.0, // 100% for testing - change to 0.2 for production
      minItemsRequired: 3,
      position: "random",
      skipFirstAndLast: true,
    },
  },
  contentList: {
    enabled: AD_AREA_CONTROLS.CONTENT_LIST, // Controlled by AD_AREA_CONTROLS
    priority: 2,
    aspect: "compact",
    config: {
      enabled: AD_AREA_CONTROLS.CONTENT_LIST, // Controlled by AD_AREA_CONTROLS
      probability: 1.0, // 100% for testing - change to 0.3 for production
      minItemsRequired: 2, // Lowered for testing
      position: "middle",
      skipFirstAndLast: true,
    },
  },
  homeAfterFeatures: {
    enabled: AD_AREA_CONTROLS.HOME_AFTER_FEATURES, // Controlled by AD_AREA_CONTROLS
    priority: 3,
    aspect: "banner",
  },
  homeAfterSubjects: {
    enabled: AD_AREA_CONTROLS.HOME_AFTER_SUBJECTS, // Controlled by AD_AREA_CONTROLS
    priority: 4,
    aspect: "card",
  },
  savedList: {
    enabled: AD_AREA_CONTROLS.SAVED_LIST, // Controlled by AD_AREA_CONTROLS
    priority: 5,
    aspect: "compact",
    config: {
      enabled: AD_AREA_CONTROLS.SAVED_LIST, // Controlled by AD_AREA_CONTROLS
      probability: 1.0, // 100% for testing - change to 0.25 for production
      minItemsRequired: 2, // Lowered for testing
      position: "middle",
      skipFirstAndLast: true,
    },
  },
  topicGrid: {
    enabled: AD_AREA_CONTROLS.TOPIC_GRID, // Controlled by AD_AREA_CONTROLS
    priority: 6,
    aspect: "inline",
    config: {
      enabled: AD_AREA_CONTROLS.TOPIC_GRID, // Controlled by AD_AREA_CONTROLS
      probability: 1.0, // 100% for testing - change to 0.3 for production
      minItemsRequired: 2, // Lowered for testing
      position: "middle",
      skipFirstAndLast: true,
    },
  },
  footer: {
    enabled: AD_AREA_CONTROLS.FOOTER, // Controlled by AD_AREA_CONTROLS
    priority: 7,
    aspect: "banner",
  },
  header: {
    enabled: AD_AREA_CONTROLS.HEADER, // Controlled by AD_AREA_CONTROLS
    priority: 0,
    aspect: "compact",
  },
};

export const defaultAdConfig: AdConfig = {
  enabled: true,
  probability: 0.2, // 1/5 probability (20%)
  minItemsRequired: 3, // Need at least 3 items to show ad
  position: "random",
  skipFirstAndLast: true,
};

// Multiple ad variations for different placements
export const rankMargAds: Record<string, AdContent> = {
  default: {
    id: "rankmarg-ad-default",
    type: "ad",
    title: "RankMarg",
    description:
      "Discover comprehensive study materials, practice tests, and expert guidance at RankMarg",
    buttonText: "Visit RankMarg",
    url: "https://rankmarg.com",
    icon: "sparkles",
    aspect: "card",
  },
  banner: {
    id: "rankmarg-ad-banner",
    type: "ad",
    title: "Boost Your Exam Preparation with RankMarg",
    description:
      "Get access to comprehensive study materials, practice tests, mock exams, and expert guidance. Join thousands of students preparing for JEE and NEET.",
    buttonText: "Explore RankMarg",
    url: "https://rankmarg.com",
    icon: "sparkles",
    aspect: "banner",
    image: "https://rankmarg.com/logo.png", // You can add actual image URL
  },
  compact: {
    id: "rankmarg-ad-compact",
    type: "ad",
    title: "RankMarg",
    description: "Comprehensive study materials and practice tests",
    buttonText: "Learn More",
    url: "https://rankmarg.com",
    icon: "sparkles",
    aspect: "compact",
  },
  inline: {
    id: "rankmarg-ad-inline",
    type: "ad",
    title: "RankMarg",
    description: "Expert guidance for JEE & NEET",
    buttonText: "Visit",
    url: "https://rankmarg.com",
    icon: "sparkles",
    aspect: "inline",
  },
};

// Legacy support
export const rankMargAd: AdContent = rankMargAds.default;

// Helper function to determine if ad should be shown
export function shouldShowAd(
  itemsCount: number,
  config: AdConfig = defaultAdConfig
): boolean {
  if (!config.enabled) return false;
  if (itemsCount < config.minItemsRequired) return false;
  return Math.random() < config.probability;
}

// Helper function to calculate ad position
export function calculateAdPosition(
  itemsCount: number,
  config: AdConfig = defaultAdConfig
): number {
  if (itemsCount < config.minItemsRequired) return -1;

  let position: number;

  switch (config.position) {
    case "middle":
      position = Math.floor(itemsCount / 2);
      break;
    case "first-quarter":
      position = Math.floor(itemsCount / 4);
      break;
    case "third-quarter":
      position = Math.floor((itemsCount * 3) / 4);
      break;
    case "random":
    default:
      // Random position, but not at start or end if skipFirstAndLast is true
      if (config.skipFirstAndLast && itemsCount > 2) {
        position = Math.floor(Math.random() * (itemsCount - 2)) + 1;
      } else {
        position = Math.floor(Math.random() * itemsCount);
      }
      break;
  }

  // Ensure position is within bounds
  return Math.max(0, Math.min(position, itemsCount - 1));
}

// Get ad content for a specific placement
export function getAdForPlacement(placement: AdPlacement): AdContent | null {
  const placementConfig = adPlacements[placement];
  if (!placementConfig || !placementConfig.enabled) return null;

  const aspect = placementConfig.aspect;
  const adKey =
    aspect === "banner"
      ? "banner"
      : aspect === "compact"
      ? "compact"
      : aspect === "inline"
      ? "inline"
      : "default";
  return rankMargAds[adKey] || rankMargAds.default;
}

// Check if ad should be shown for a placement
export function shouldShowAdForPlacement(
  placement: AdPlacement,
  itemsCount?: number
): boolean {
  const placementConfig = adPlacements[placement];
  if (!placementConfig || !placementConfig.enabled) return false;

  // For placements without config (like banners), always show if enabled
  if (!placementConfig.config) return true;

  // For list-based ads, use the config
  if (itemsCount !== undefined) {
    return shouldShowAd(itemsCount, placementConfig.config);
  }

  return false;
}
