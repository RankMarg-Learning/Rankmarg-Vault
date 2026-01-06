import { useMemo } from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/contexts/AppContext";
import { ContentItem } from "@/data/content";
import { cn } from "@/lib/utils";
import {
  shouldShowAdForPlacement,
  calculateAdPosition,
  getAdForPlacement,
  adPlacements,
} from "@/config/ads";
import { RankMargAd } from "@/components/ads/RankMargAd";

interface ContentListProps {
  items: ContentItem[];
  onItemClick: (index: number) => void;
}

export function ContentList({ items, onItemClick }: ContentListProps) {
  const { isItemSaved } = useApp();

  // Sort by importance: high > medium > low
  const sortedItems = [...items].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.importance] - order[b.importance];
  });

  // Calculate ad position
  const adPosition = useMemo(() => {
    const placementConfig = adPlacements.contentList;
    if (!shouldShowAdForPlacement("contentList", sortedItems.length)) {
      return null;
    }
    if (!placementConfig.config) return null;
    return calculateAdPosition(sortedItems.length, placementConfig.config);
  }, [sortedItems.length]);

  const ad = useMemo(() => getAdForPlacement("contentList"), []);

  const importanceBadge = {
    high: { label: "High", className: "bg-destructive/10 text-destructive" },
    medium: { label: "Medium", className: "bg-warning/10 text-warning" },
    low: { label: "Low", className: "bg-muted text-muted-foreground" },
  };

  return (
    <div className="space-y-2 sm:space-y-3">
      {sortedItems.map((item, index) => {
        const saved = isItemSaved(item.id);
        const badge = importanceBadge[item.importance];

        return (
          <div key={item.id}>
            <Card
              className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30 active:scale-[0.98]"
              onClick={() => onItemClick(items.indexOf(item))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  onItemClick(items.indexOf(item));
                }
              }}
            >
              <CardContent className="p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3 sm:gap-4">
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-start gap-2.5">
                      <h4 className="font-semibold text-foreground text-base sm:text-lg leading-tight break-words flex-1 min-w-0">
                        {item.title}
                      </h4>
                      {saved && (
                        <Star className="h-4 w-4 sm:h-5 sm:w-5 text-primary fill-primary shrink-0 drop-shadow-sm mt-0.5" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 sm:hidden">
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs font-medium px-2 py-0.5",
                          badge.className
                        )}
                      >
                        {badge.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.examFrequency}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <Badge
                      variant="secondary"
                      className={cn(
                        "text-xs font-medium px-2.5 py-1 hidden sm:flex",
                        badge.className
                      )}
                    >
                      {badge.label}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-medium hidden sm:block whitespace-nowrap">
                      {item.examFrequency}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
            {/* Show ad after this item if position matches */}
            {adPosition !== null && adPosition === index && ad && (
              <RankMargAd ad={ad} />
            )}
          </div>
        );
      })}
    </div>
  );
}
