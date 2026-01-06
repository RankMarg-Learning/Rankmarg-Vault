import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import {
  Star,
  Copy,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useApp } from "@/contexts/AppContext";
import { ContentItem, contentTypeLabels, ContentType } from "@/data/content";
import { useDragToSwipe } from "@/hooks/useDragToSwipe";
import { Latex } from "@/components/ui/latex";
import { cn } from "@/lib/utils";
import {
  shouldShowAd,
  calculateAdPosition,
  defaultAdConfig,
  rankMargAd,
  getAdForPlacement,
  type AdContent,
} from "@/config/ads";
import { RankMargAd } from "@/components/ads/RankMargAd";

type DisplayItem = ContentItem | AdContent;

interface ContentViewerProps {
  items: ContentItem[];
  contentType: ContentType;
  topicName: string;
  subjectName: string;
  subjectId: string;
  topicId: string;
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function ContentViewer({
  items,
  contentType,
  topicName,
  subjectName,
  subjectId,
  topicId,
  currentIndex,
  onIndexChange,
  onClose,
}: ContentViewerProps) {
  const { toast } = useToast();
  const { saveItem, unsaveItem, isItemSaved, selectedExam, trackView } =
    useApp();
  const [animationState, setAnimationState] = useState<
    "idle" | "exit-left" | "exit-right" | "enter"
  >("idle");

  // Use ref to track if ad decision has been made for current items
  // Key by first and last item IDs to detect when items array actually changes
  const itemsKey = useMemo(() => {
    if (items.length === 0) return "empty";
    return `${items[0]?.id || ""}-${items[items.length - 1]?.id || ""}-${
      items.length
    }`;
  }, [items]);

  const adDecisionRef = useRef<{ itemsKey: string; adIndex: number | null }>({
    itemsKey: "",
    adIndex: null,
  });

  // Get ad for content viewer
  const contentViewerAd = useMemo(() => getAdForPlacement("contentViewer"), []);

  // Calculate ad position once when items change
  const adIndex = useMemo(() => {
    // Reset if items actually changed (different key)
    if (adDecisionRef.current.itemsKey !== itemsKey) {
      adDecisionRef.current.itemsKey = itemsKey;

      if (shouldShowAd(items.length, defaultAdConfig)) {
        const position = calculateAdPosition(items.length, defaultAdConfig);
        adDecisionRef.current.adIndex = position;
        return position;
      } else {
        adDecisionRef.current.adIndex = null;
        return null;
      }
    }

    return adDecisionRef.current.adIndex;
  }, [itemsKey, items.length]);

  // Create display items array with ad inserted
  const displayItems: DisplayItem[] = useMemo(() => {
    if (adIndex === null || !contentViewerAd) return items;
    const result: DisplayItem[] = [...items];
    result.splice(adIndex, 0, contentViewerAd);
    return result;
  }, [items, adIndex, contentViewerAd]);

  // Map display index to actual item index (accounting for ad)
  const getActualIndex = useCallback(
    (displayIdx: number): number => {
      if (adIndex === null) return displayIdx;
      if (displayIdx < adIndex) return displayIdx;
      if (displayIdx === adIndex) return -1; // Ad card
      return displayIdx - 1; // Adjust for ad
    },
    [adIndex]
  );

  // Map actual item index to display index (accounting for ad)
  const getDisplayIndex = useCallback(
    (actualIdx: number): number => {
      if (adIndex === null) return actualIdx;
      if (actualIdx < adIndex) return actualIdx;
      return actualIdx + 1; // Adjust for ad
    },
    [adIndex]
  );

  // Convert parent's currentIndex (actual) to display index
  const displayIndex = useMemo(() => {
    return getDisplayIndex(currentIndex);
  }, [currentIndex, getDisplayIndex]);

  // Handle display index separately when on ad
  const [localDisplayIndex, setLocalDisplayIndex] = useState<number | null>(
    null
  );
  const effectiveDisplayIndex =
    localDisplayIndex !== null ? localDisplayIndex : displayIndex;

  // Reset local display index when items change
  useEffect(() => {
    setLocalDisplayIndex(null);
  }, [itemsKey]);

  // Reset local display index when actual index changes (user navigated away from ad)
  useEffect(() => {
    if (localDisplayIndex !== null) {
      const currentActual = getActualIndex(localDisplayIndex);
      // If we're on a regular item (not ad), reset local index
      if (currentActual !== -1 && currentActual === currentIndex) {
        // We navigated to a regular item that matches currentIndex, reset local index
        setLocalDisplayIndex(null);
      } else if (currentActual === -1 && currentIndex !== -1) {
        // We're on ad but parent index changed to a regular item, check if we should stay on ad
        const newDisplayIdx = getDisplayIndex(currentIndex);
        if (newDisplayIdx !== localDisplayIndex) {
          // Parent wants to show a different item, reset
          setLocalDisplayIndex(null);
        }
      }
    }
  }, [
    currentIndex,
    localDisplayIndex,
    getActualIndex,
    getDisplayIndex,
    itemsKey,
  ]);

  const currentDisplayItem = displayItems[effectiveDisplayIndex];
  const isAd =
    currentDisplayItem &&
    "type" in currentDisplayItem &&
    currentDisplayItem.type === "ad";
  const currentItem = isAd ? null : (currentDisplayItem as ContentItem);
  const isSaved = currentItem ? isItemSaved(currentItem.id) : false;
  const typeInfo = contentTypeLabels[contentType];

  const animateTransition = useCallback(
    (direction: "left" | "right", newDisplayIndex: number) => {
      setAnimationState(direction === "left" ? "exit-left" : "exit-right");

      setTimeout(() => {
        const actualIdx = getActualIndex(newDisplayIndex);
        // If it's the ad, we still show it but don't track view or update parent index
        if (actualIdx === -1) {
          // For ad, update local display index but keep parent's actual index
          setLocalDisplayIndex(newDisplayIndex);
          setAnimationState("enter");
          setTimeout(() => {
            setAnimationState("idle");
          }, 250);
        } else {
          // Regular item, update parent and reset local index
          setLocalDisplayIndex(null);
          onIndexChange(actualIdx);
          if (items[actualIdx]) {
            trackView(items[actualIdx].id);
          }
          setAnimationState("enter");
          setTimeout(() => {
            setAnimationState("idle");
          }, 250);
        }
      }, 250);
    },
    [onIndexChange, trackView, items, getActualIndex]
  );

  const goToPrevious = useCallback(() => {
    if (effectiveDisplayIndex > 0 && animationState === "idle") {
      const prevDisplayIndex = effectiveDisplayIndex - 1;
      animateTransition("right", prevDisplayIndex);
    }
  }, [effectiveDisplayIndex, animationState, animateTransition]);

  const goToNext = useCallback(() => {
    if (
      effectiveDisplayIndex < displayItems.length - 1 &&
      animationState === "idle"
    ) {
      const nextDisplayIndex = effectiveDisplayIndex + 1;
      animateTransition("left", nextDisplayIndex);
    }
  }, [
    effectiveDisplayIndex,
    displayItems.length,
    animationState,
    animateTransition,
  ]);

  // Drag to swipe handlers
  const { dragState, handlers: dragHandlers } = useDragToSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
    threshold: 100,
    disabled: animationState !== "idle",
  });

  // Calculate card transform based on drag - subtle slide effect
  const getCardTransform = useCallback(() => {
    if (!dragState.isDragging) return "";
    const { deltaX } = dragState;
    // Simple horizontal slide without rotation
    return `translateX(${deltaX}px)`;
  }, [dragState]);

  const handleSave = () => {
    if (!currentItem) return;
    if (isSaved) {
      unsaveItem(currentItem.id);
      toast({
        title: "Removed from saved",
        description: currentItem.title,
        duration: 200,
      });
    } else {
      saveItem({
        id: currentItem.id,
        topicId: topicId,
        topicName,
        subjectId,
        subjectName,
        examId: selectedExam,
        contentType,
        title: currentItem.title,
        itemIndex: getActualIndex(effectiveDisplayIndex),
      });
      toast({
        title: "Saved successfully",
        description: currentItem.title,
      });
    }
  };

  const handleShare = async () => {
    if (!currentItem) return;
    const actualIdx = getActualIndex(effectiveDisplayIndex);
    const shareUrl = `${window.location.origin}/?exam=${selectedExam}&subject=${subjectId}&topic=${topicId}&type=${contentType}&index=${actualIdx}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${currentItem.title} - RankVault`,
          text: `Check out this ${typeInfo.label}: ${currentItem.title}`,
          url: shareUrl,
        });
      } catch (error) {
        // User cancelled or share failed, fallback to copy
        await copyShareUrl(shareUrl);
      }
    } else {
      await copyShareUrl(shareUrl);
    }
  };

  const handleAdClick = () => {
    if (isAd && currentDisplayItem && "type" in currentDisplayItem) {
      const ad = currentDisplayItem as AdContent;
      window.open(ad.url, "_blank", "noopener,noreferrer");
    }
  };

  const copyShareUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: "Link copied to clipboard",
        description: "Share this link with others",
      });
    } catch (error) {
      toast({
        title: "Failed to copy link",
        variant: "destructive",
      });
    }
  };

  const importanceColors = {
    high: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-muted text-muted-foreground border-muted",
  };

  // Clean flashcard-style animation - simple slide and fade
  const getCardAnimation = () => {
    switch (animationState) {
      case "exit-left":
        return "translate-x-[-100%] opacity-0";
      case "exit-right":
        return "translate-x-[100%] opacity-0";
      case "enter":
        return "translate-x-0 opacity-100";
      default:
        return "translate-x-0 opacity-100";
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container h-full flex flex-col py-3 px-3 sm:py-4 sm:px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
            >
              <X className="h-5 w-5" />
            </Button>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-muted-foreground break-words line-clamp-1">
                {subjectName} / {topicName}
              </p>
              <Badge variant="secondary" className="text-xs">
                {typeInfo.icon} {typeInfo.label}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            {!isAd && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleSave}
                  className={cn(
                    "h-8 w-8 sm:h-10 sm:w-10",
                    isSaved ? "text-primary" : ""
                  )}
                >
                  <Star
                    className={cn(
                      "h-4 w-4 sm:h-5 sm:w-5",
                      isSaved && "fill-primary"
                    )}
                  />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleShare}
                  className="h-8 w-8 sm:h-10 sm:w-10 hidden"
                >
                  <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </>
            )}
          </div>
        </div>

        {/* Navigation hint */}
        <div className="text-center text-xs text-muted-foreground mb-2 sm:hidden">
          Swipe left/right or use buttons to navigate
        </div>

        {/* Flashcard Stack Container */}
        <div className="flex-1 overflow-hidden relative flex items-center justify-center py-4">
          <div
            className="relative w-full max-w-lg mx-auto h-full flex items-center justify-center"
            style={{ perspective: "1000px" }}
          >
            {/* Next card (peeking behind) - Fixed dimensions */}
            {effectiveDisplayIndex < displayItems.length - 1 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {(() => {
                  const nextItem = displayItems[effectiveDisplayIndex + 1];
                  const isNextAd =
                    nextItem && "type" in nextItem && nextItem.type === "ad";
                  const nextContentItem = isNextAd
                    ? null
                    : (nextItem as ContentItem);

                  return isNextAd ? (
                    <div className="w-full h-[70vh] max-h-[600px] scale-95 opacity-40">
                      {nextItem && "type" in nextItem && (
                        <RankMargAd
                          ad={nextItem as AdContent}
                          onClick={() => {}}
                        />
                      )}
                    </div>
                  ) : nextContentItem ? (
                    <Card className="w-full h-[70vh] max-h-[600px] scale-95 opacity-40 pointer-events-none overflow-hidden">
                      <CardHeader className="pb-2 sm:pb-4">
                        <CardTitle className="text-lg sm:text-xl line-clamp-2">
                          {nextContentItem.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ) : null;
                })()}
              </div>
            )}

            {/* Current card (draggable) - Fixed dimensions */}
            <div
              className={cn(
                "relative w-full h-[70vh] max-h-[600px] mx-auto transition-all duration-300 ease-out",
                dragState.isDragging
                  ? "cursor-grabbing select-none"
                  : "cursor-grab",
                !dragState.isDragging && animationState === "idle"
                  ? "transition-transform duration-300"
                  : ""
              )}
              style={{
                transform: dragState.isDragging
                  ? getCardTransform()
                  : animationState === "exit-left"
                  ? "translateX(-100%)"
                  : animationState === "exit-right"
                  ? "translateX(100%)"
                  : animationState === "enter"
                  ? "translateX(0)"
                  : "translateX(0)",
                opacity: dragState.isDragging
                  ? Math.max(0.5, 1 - Math.abs(dragState.deltaX) / 400)
                  : animationState === "exit-left" ||
                    animationState === "exit-right"
                  ? 0
                  : animationState === "enter"
                  ? 1
                  : 1,
                transition: dragState.isDragging
                  ? "none"
                  : animationState === "idle"
                  ? "transform 0.25s ease-out, opacity 0.25s ease-out"
                  : "transform 0.25s ease-in-out, opacity 0.25s ease-in-out",
                zIndex: dragState.isDragging ? 50 : 10,
                userSelect: dragState.isDragging ? "none" : "auto",
                WebkitUserSelect: dragState.isDragging ? "none" : "auto",
              }}
              {...dragHandlers}
            >
              {/* Card content - Fixed height with scrollable content */}
              {isAd ? (
                <div className="w-full h-full">
                  {currentDisplayItem && "type" in currentDisplayItem && (
                    <RankMargAd
                      ad={currentDisplayItem as AdContent}
                      onClick={handleAdClick}
                    />
                  )}
                </div>
              ) : currentItem ? (
                <Card className="w-full h-full shadow-xl overflow-hidden bg-card flex flex-col">
                  <CardHeader className="pb-2 sm:pb-4 flex-shrink-0 border-b">
                    <div className="flex items-start justify-between gap-3 sm:gap-4">
                      <CardTitle className="text-lg sm:text-xl flex-1 line-clamp-3 break-words">
                        {currentItem.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className={cn(
                          "shrink-0 text-xs",
                          importanceColors[currentItem.importance]
                        )}
                      >
                        {currentItem.importance.charAt(0).toUpperCase() +
                          currentItem.importance.slice(1)}
                      </Badge>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                      {currentItem.examFrequency}
                    </p>
                  </CardHeader>
                  <CardContent
                    className="flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-6 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-muted-foreground/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-muted-foreground/50"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor:
                        "hsl(var(--muted-foreground) / 0.3) transparent",
                    }}
                    onTouchStart={(e) => {
                      // Don't stop propagation - allow swipe gestures to work
                      // The drag handler will determine if it's a swipe or scroll
                    }}
                    onMouseDown={(e) => {
                      // Don't stop propagation - allow swipe gestures to work
                    }}
                  >
                    <div className="bg-muted/50 p-3 sm:p-4 rounded-lg min-h-full">
                      <Latex
                        content={currentItem.content}
                        className="text-sm sm:text-base leading-relaxed select-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              ) : null}
            </div>
          </div>
        </div>

        {/* Navigation - Action buttons + Progress (hidden on mobile) */}
        <div className="hidden sm:flex flex-col items-center justify-center mt-3 sm:mt-4 max-w-3xl mx-auto w-full gap-3">
          {/* Action buttons */}
          <div className="flex items-center justify-center gap-4">
            {/* Previous button */}
            <button
              onClick={goToPrevious}
              disabled={
                effectiveDisplayIndex === 0 || animationState !== "idle"
              }
              className={cn(
                "p-4 rounded-full transition-all shadow-lg",
                effectiveDisplayIndex === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-muted active:scale-95 bg-background border-2 border-border hover:border-primary/50"
              )}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Progress indicator */}
            <div className="flex items-center gap-2 px-4">
              <div className="flex gap-1.5">
                {displayItems.length <= 10 ? (
                  displayItems.map((item, idx) => {
                    const isAdItem = "type" in item && item.type === "ad";
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          if (
                            idx !== effectiveDisplayIndex &&
                            animationState === "idle"
                          ) {
                            animateTransition(
                              idx > effectiveDisplayIndex ? "left" : "right",
                              idx
                            );
                          }
                        }}
                        className={cn(
                          "h-2 rounded-full transition-all",
                          idx === effectiveDisplayIndex
                            ? "w-6 bg-primary"
                            : isAdItem
                            ? "w-2 bg-primary/50 hover:bg-primary/70"
                            : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                        )}
                        title={isAdItem ? "Advertisement" : undefined}
                      />
                    );
                  })
                ) : (
                  <span className="text-sm text-muted-foreground">
                    {effectiveDisplayIndex + 1} / {displayItems.length}
                  </span>
                )}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={goToNext}
              disabled={
                effectiveDisplayIndex === displayItems.length - 1 ||
                animationState !== "idle"
              }
              className={cn(
                "p-4 rounded-full transition-all shadow-lg",
                effectiveDisplayIndex === displayItems.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-muted active:scale-95 bg-background border-2 border-border hover:border-primary/50"
              )}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Hint text */}
          <p className="text-xs text-muted-foreground text-center">
            Swipe the card or use buttons to navigate
          </p>
        </div>
      </div>
    </div>
  );
}
