export interface AdConfig {
  enabled: boolean;
  probability: number; // 0 to 1 (e.g., 0.2 = 20% = 1/5)
  minItemsRequired: number; // Minimum items needed to show ad
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
}

export const defaultAdConfig: AdConfig = {
  enabled: true,
  probability: 0.2, // 1/5 probability (20%)
  minItemsRequired: 3, // Need at least 3 items to show ad
  position: "random",
  skipFirstAndLast: true,
};

export const rankMargAd: AdContent = {
  id: "rankmarg-ad",
  type: "ad",
  title: "RankMarg",
  description:
    "Discover comprehensive study materials, practice tests, and expert guidance at RankMarg",
  buttonText: "Visit RankMarg",
  url: "https://rankmarg.com",
  icon: "sparkles",
};

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
