import { useState, useCallback, useMemo, useEffect, useRef } from "react";
import {
  Star,
  Share2,
  X,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { useApp } from "@/contexts/AppContext";
import { ContentItem, contentTypeLabels, ContentType } from "@/data/content";
import { useDragToSwipe } from "@/hooks/useDragToSwipe";
import { MarkdownRenderer } from "@/components/common-ui";
import { cn } from "@/lib/utils";
import {
  shouldShowAd,
  calculateAdPosition,
  defaultAdConfig,
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
  // Animation states: 'idle', 'exit-up' (going to next), 'exit-down' (going to prev), 'enter'
  const [animationState, setAnimationState] = useState<
    "idle" | "exit-up" | "exit-down" | "enter"
  >("idle");

  // Use ref to track if ad decision has been made for current items
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

  // Reset local display index when actual index changes
  useEffect(() => {
    if (localDisplayIndex !== null) {
      const currentActual = getActualIndex(localDisplayIndex);
      if (currentActual !== -1 && currentActual === currentIndex) {
        setLocalDisplayIndex(null);
      } else if (currentActual === -1 && currentIndex !== -1) {
        const newDisplayIdx = getDisplayIndex(currentIndex);
        if (newDisplayIdx !== localDisplayIndex) {
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
    (direction: "up" | "down", newDisplayIndex: number) => {
      setAnimationState(direction === "up" ? "exit-up" : "exit-down"); // Visual: up means "next", down means "prev"
      
      // Wait for exit animation
      setTimeout(() => {
        const actualIdx = getActualIndex(newDisplayIndex);
        if (actualIdx === -1) {
          setLocalDisplayIndex(newDisplayIndex);
          setAnimationState("enter");
          setTimeout(() => setAnimationState("idle"), 300);
        } else {
          setLocalDisplayIndex(null);
          onIndexChange(actualIdx);
          if (items[actualIdx]) {
            trackView(items[actualIdx].id);
          }
          setAnimationState("enter");
          setTimeout(() => setAnimationState("idle"), 300);
        }
      }, 300);
    },
    [onIndexChange, trackView, items, getActualIndex]
  );

  const goToPrevious = useCallback(() => {
    if (effectiveDisplayIndex > 0 && animationState === "idle") {
      const prevDisplayIndex = effectiveDisplayIndex - 1;
      animateTransition("down", prevDisplayIndex);
    }
  }, [effectiveDisplayIndex, animationState, animateTransition]);

  const goToNext = useCallback(() => {
    if (
      effectiveDisplayIndex < displayItems.length - 1 &&
      animationState === "idle"
    ) {
      const nextDisplayIndex = effectiveDisplayIndex + 1;
      animateTransition("up", nextDisplayIndex);
    }
  }, [
    effectiveDisplayIndex,
    displayItems.length,
    animationState,
    animateTransition,
  ]);

  const { dragState, handlers: dragHandlers } = useDragToSwipe({
    onSwipeUp: goToNext,    // Drag Up -> Go Next (Card moves Up)
    onSwipeDown: goToPrevious, // Drag Down -> Go Prev (Card moves Down)
    threshold: 80,
    disabled: animationState !== "idle",
    checkScroll: true,
  });

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
    
    // Copy fallback
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
         title: "Link copied",
         description: "Share this revision card",
      });
    } catch {
       toast({ title: "Failed to copy", variant: "destructive" });
    }
  };

  const importanceColors = {
    high: "bg-destructive/10 text-destructive border-destructive/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-muted text-muted-foreground border-muted",
  };

  // Transform logic
  // Go Next: Current moves UP (-Y), Next comes from Bottom
  // Go Prev: Current moves DOWN (+Y), Prev comes from Top
  const getTransform = () => {
     if (dragState.isDragging) {
        return `translateY(${dragState.deltaY}px)`;
     }
     switch(animationState) {
        case "exit-up": return "translateY(-100%) opacity-0";
        case "exit-down": return "translateY(100%) opacity-0";
        case "enter": return "translateY(0)"; // Could start from +/- 100 but simple fade in works too for simplicity or complex Keyframes.
        // Better "New Page" effect:
        // Enter usually jumps to 0. We need to cheat or use CSS keyframes. 
        // For simplicity: We just reset to 0. The 'enter' state mainly ensures opacity/scale transition if we add it.
        // Actually, if we want it to feel like it came from bottom/top, we need 'entry-from' state.
        // Given React state model, simpler is: Fade/Slide out -> Instant Swap -> Fade/Slide In.
        // Let's stick to standard translation which mimics swipe.
        default: return "translateY(0)";
     }
  };
  
  // Refined Entry Transition:
  // Since we don't have Exit/Enter pair in DOM, we simulate by sliding current OUT, then resetting and sliding NEW IN?
  // Or just Slide Out -> New Appears.
  // Ideally: 'enter' state should have a starting position.
  // But without complicated transition group, lets just Slide Out, then Fade In.
  const getContainerStyle = () => {
     if(animationState === 'enter') return { opacity: 0, transform: 'scale(0.95)' };
     // If dragging, follow finger
     if(dragState.isDragging && dragState.deltaY !== 0) return { transform: getTransform() };
     // If exiting
     if(animationState.startsWith('exit')) return { transform: getTransform(), opacity: 0 };
     
     return { transform: 'none', opacity: 1 };
  }

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col h-[100dvh]">
      {/* Top Bar - Minimal */}
      <div className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0 bg-background/80 backdrop-blur z-10">
         <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={onClose} className="h-9 w-9 -ml-2">
               <X className="h-5 w-5" />
            </Button>
            <div>
               <h3 className="font-semibold text-sm leading-none">{topicName}</h3>
               <p className="text-xs text-muted-foreground mt-1">{effectiveDisplayIndex + 1} / {displayItems.length}</p>
            </div>
         </div>
         <div className="flex items-center gap-1">
            <Badge variant="outline" className="text-xs font-normal">
               {typeInfo.label}
            </Badge>
         </div>
      </div>

      {/* Main Content Area - Full Page */}
      <div 
         className="flex-1 relative overflow-hidden bg-muted/10"
         {...dragHandlers}
      >
         <div 
            className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-300 ease-out"
            style={getContainerStyle()}
         >
            {/* The Page Content */}
            {isAd ? (
               <div className="w-full max-w-2xl bg-card rounded-xl border shadow-sm p-4">
                  {currentDisplayItem && "type" in currentDisplayItem && (
                     <RankMargAd ad={currentDisplayItem as AdContent} onClick={() => {}} />
                  )}
               </div>
            ) : currentItem ? (
               <div className="w-full h-full max-w-3xl mx-auto flex flex-col bg-background rounded-xl border shadow-sm ring-1 ring-border/50 overflow-hidden">
                  {/* Card Header Section */}
                  <div className="p-5 sm:p-6 border-b bg-muted/5">
                     <div className="flex items-start justify-between gap-4">
                        <h2 className="text-xl sm:text-2xl font-bold leading-tight">{currentItem.title}</h2>
                        <div className="flex gap-2 shrink-0">
                           <Button
                              variant="ghost"
                              size="icon"
                              onClick={handleSave}
                              className={cn("h-8 w-8", isSaved ? "text-yellow-500 hover:text-yellow-600" : "text-muted-foreground")}
                           >
                              <Star className={cn("h-5 w-5", isSaved && "fill-current")} />
                           </Button>
                           <Button variant="ghost" size="icon" onClick={handleShare} className="h-8 w-8 text-muted-foreground">
                              <Share2 className="h-4 w-4" />
                           </Button>
                        </div>
                     </div>
                     <div className="flex items-center gap-2 mt-3">
                         <Badge variant="secondary" className={cn("text-xs", importanceColors[currentItem.importance])}>
                           {currentItem.importance} Priority
                         </Badge>
                         <span className="text-xs text-muted-foreground border-l pl-2">
                           {currentItem.examFrequency}
                         </span>
                     </div>
                  </div>

                  {/* Scrollable Body */}
                  <div 
                     className="flex-1 overflow-y-auto p-5 sm:p-8 scrollable-content"
                     style={{ WebkitOverflowScrolling: 'touch' }}
                  >
                     <div className="prose dark:prose-invert max-w-none">
                        <MarkdownRenderer content={currentItem.content} className="text-lg leading-relaxed" />
                     </div>
                     
                     {/* Padding at bottom for ease of reading */}
                     <div className="h-20" />
                  </div>
               </div>
            ) : null}
         </div>
      </div>

      {/* Navigation Controls (Bottom Right Floating or Bottom Bar) */}
      <div className="absolute right-4 bottom-8 flex flex-col gap-2 z-20">
         <Button 
            variant="secondary" 
            size="icon" 
            className="h-10 w-10 rounded-full shadow-md bg-background/80 backdrop-blur border"
            onClick={goToPrevious}
            disabled={effectiveDisplayIndex === 0 || animationState !== 'idle'}
         >
            <ChevronUp className="h-5 w-5" />
         </Button>
         <Button 
            variant="default" // Primary action
            size="icon" 
            className="h-12 w-12 rounded-full shadow-lg"
            onClick={goToNext}
            disabled={effectiveDisplayIndex === displayItems.length - 1 || animationState !== 'idle'}
         >
            <ChevronDown className="h-6 w-6" />
         </Button>
      </div>

      {/* Progress Helper (Bottom) */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
         <div 
            className="h-full bg-primary transition-all duration-300" 
            style={{ width: `${((effectiveDisplayIndex + 1) / displayItems.length) * 100}%` }}
         />
      </div> */}
    </div>
  );
}
