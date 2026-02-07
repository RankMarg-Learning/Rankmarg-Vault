
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { useApp } from "@/contexts/AppContext";
import { examsData, getTopicContent, contentTypeLabels, ContentType, ContentItem } from "@/data/content";
import { ExamType } from "@/data/types";
import { Button } from "@/components/ui/button";
import { X, ChevronUp, ChevronDown, Share2, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MarkdownRenderer } from "@/components/common-ui";
import { useToast } from "@/hooks/use-toast";
import { useDragToSwipe } from "@/hooks/useDragToSwipe";
import { cn } from "@/lib/utils";
import NotFound from "./NotFound";
import { RankMargAd } from "@/components/ads/RankMargAd";
import { getAdForPlacement, AdContent, shouldShowAd, calculateAdPosition, defaultAdConfig } from "@/config/ads";

export default function ReelPage() {
  const { subjectSlug, topicSlug, type, itemId } = useParams<{
    subjectSlug: string;
    topicSlug: string;
    type: string;
    itemId: string;
  }>();

  const navigate = useNavigate();
  const { toast } = useToast();
  const { 
    setSelectedExam, 
    setSelectedSubjectId, 
    setSelectedTopicId,
    saveItem,
    unsaveItem,
    isItemSaved,
    selectedExam,
    trackView
  } = useApp();

  // 1. Resolve Data directly from URL
  const resolvedContext = useMemo(() => {
    if (!subjectSlug || !topicSlug) return null;
    for (const exam of examsData) {
      for (const subject of exam.subjects) {
        if (subject.slug === subjectSlug) {
          const topic = subject.topics.find((t) => t.slug === topicSlug);
          if (topic) {
            return { exam, subject, topic };
          }
        }
      }
    }
    return null;
  }, [subjectSlug, topicSlug]);

  // 2. Load Content Items
  const { items, currentIndex } = useMemo(() => {
    if (!resolvedContext || !type) return { items: [], currentIndex: -1 };
    
    // Type checking
    const validTypes: ContentType[] = ['formulas', 'short_tricks', 'reactions', 'constants', 'exceptions'];
    const contentType = validTypes.includes(type as ContentType) ? (type as ContentType) : null;
    
    if (!contentType) return { items: [], currentIndex: -1 };

    const rawItems = getTopicContent(resolvedContext.topic.id, contentType);
    
    // Inject Ad if needed (Basic logic: if more than X items, insert ad)
    // We will keep it simple for now: Just raw items + mapping
    // If we want consistent IDs for URL:
    // We MUST use the item.id for URL (itemId provided in params)
    
    // Let's insert the ad into the list logically, but since URL uses itemId, 
    // we need to handle "ad" as a special case or just show ad at specific indices visually
    // BUT the requirement is "change cards id". So each card has a unique URL. 
    // Ads don't usually have stable IDs for URL sharing unless we generate one.
    // For simplicity, let's treat the list as pure content items for URL navigation
    // and just render ads INTERSTITIALLY without changing URL to an "ad-id".
    // OR we could give ads a fake ID like "ad-1". Let's stick to Content Items for URLs.
    
    let index = -1;
    if (itemId) {
        index = rawItems.findIndex(i => i.id === itemId);
    } else if (rawItems.length > 0) {
        // If no Item ID, default to first
        index = 0;
    }

    return { items: rawItems, currentIndex: index };
  }, [resolvedContext, type, itemId]);

  // Sync Global Context (Optional but good for sidebar sync)
  useEffect(() => {
    if (resolvedContext) {
      setSelectedExam(resolvedContext.exam.id);
      setSelectedSubjectId(resolvedContext.subject.id);
      setSelectedTopicId(resolvedContext.topic.id);
    }
  }, [resolvedContext, setSelectedExam, setSelectedSubjectId, setSelectedTopicId]);
  
  // Track View
  useEffect(() => {
      if (items[currentIndex]) {
          trackView(items[currentIndex].id);
      }
  }, [currentIndex, items, trackView]);

  if (!resolvedContext || !type || currentIndex === -1) {
      return <NotFound />;
  }
  
  const { topic, subject, exam } = resolvedContext;
  const currentItem = items[currentIndex];
  const typeInfo = contentTypeLabels[type as ContentType];
  const isSaved = isItemSaved(currentItem.id);

  // Navigation Logic
  const handleNext = () => {
    if (currentIndex < items.length - 1) {
        const nextItem = items[currentIndex + 1];
        navigate(`/${subjectSlug}/${topicSlug}/${type}/${nextItem.id}`);
    }
  };

  const handlePrev = () => {
      if (currentIndex > 0) {
          const prevItem = items[currentIndex - 1];
          navigate(`/${subjectSlug}/${topicSlug}/${type}/${prevItem.id}`);
      }
  };

  const handleClose = () => {
      navigate(`/${subjectSlug}/${topicSlug}`);
  };

  const handleSave = () => {
    if (isSaved) {
        unsaveItem(currentItem.id);
        toast({ title: "Removed from saved" });
    } else {
        saveItem({
            id: currentItem.id,
            topicId: topic.id,
            topicName: topic.name,
            subjectId: subject.id,
            subjectName: subject.name,
            examId: exam.id,
            contentType: type as ContentType,
            title: currentItem.title,
            itemIndex: currentIndex
        });
        toast({ title: "Saved successfully" });
    }
  };

  const handleShare = async () => {
      const url = window.location.href;
      if (navigator.share) {
          try {
              await navigator.share({
                  title: `${currentItem.title} - RankVault`,
                  text: `Check out this revision card for ${topic.name}: ${currentItem.title}`,
                  url: url,
              });
          } catch (e) {
               // User cancelled or share failed, fallback to copy if not AbortError
               if ((e as Error).name !== 'AbortError') {
                  try {
                      await navigator.clipboard.writeText(url);
                      toast({ title: "Link copied to clipboard" });
                  } catch (err) {
                      toast({ title: "Failed to share", variant: "destructive" });
                  }
               }
          }
      } else {
          try {
              await navigator.clipboard.writeText(url);
              toast({ title: "Link copied to clipboard" });
          } catch (e) {
              toast({ title: "Failed to copy", variant: "destructive" });
          }
      }
  };

  // SEO
  const seoContent = {
      title: `${currentItem.title} - ${topic.name} | ${exam.id}`,
      description: `Revise ${currentItem.title} (${typeInfo.label}) for ${topic.name}.`,
      canonicalPath: `/${subjectSlug}/${topicSlug}/${type}/${currentItem.id}`
  };

  return (
    <>
      <SEOHead {...seoContent} />
      <ReelViewer 
          currentItem={currentItem}
          topicName={topic.name}
          subjectName={subject.name}
          typeInfo={typeInfo}
          index={currentIndex}
          total={items.length}
          onNext={handleNext}
          onPrev={handlePrev}
          onClose={handleClose}
          onSave={handleSave}
          onShare={handleShare}
          isSaved={isSaved}
          importance={currentItem.importance}
          frequency={currentItem.examFrequency}
      />
    </>
  );
}

// Separated Component for Animation & Gesture logic
function ReelViewer({ 
    currentItem, 
    topicName, 
    subjectName, 
    typeInfo, 
    index, 
    total, 
    onNext, 
    onPrev, 
    onClose,
    onSave,
    onShare,
    isSaved,
    importance,
    frequency
}: any) {
    const { dragState, handlers } = useDragToSwipe({
        onSwipeUp: onNext,
        onSwipeDown: onPrev,
        threshold: 80,
        checkScroll: true 
    });

    const importanceColors: any = {
        high: "bg-destructive/10 text-destructive border-destructive/20",
        medium: "bg-warning/10 text-warning border-warning/20",
        low: "bg-muted text-muted-foreground border-muted",
    };

    return (
        <div 
            className="fixed inset-0 z-50 bg-background flex flex-col h-[100dvh]"
            {...handlers}
        >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0 bg-background/80 backdrop-blur z-10 transition-opactiy">
                <div className="flex items-center gap-3">
                    <Button variant="ghost" size="icon" onClick={onClose} className="h-9 w-9 -ml-2">
                        <X className="h-5 w-5" />
                    </Button>
                    <div>
                        <h3 className="font-semibold text-sm leading-none">{topicName}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{index + 1} / {total}</p>
                    </div>
                </div>
                <Badge variant="outline" className="text-xs font-normal">
                    {typeInfo.icon} {typeInfo.label}
                </Badge>
            </div>

            {/* Content Area */}
            <div className="flex-1 relative overflow-hidden bg-muted/10">
                {/* Animation Container */}
                <div 
                    key={currentItem.id} // Key change triggers React remount/animation
                    className="absolute inset-0 p-4 sm:p-6 flex flex-col items-center justify-center animate-in slide-in-from-bottom-8 fade-in duration-300"
                >
                    <div className="w-full h-full max-w-3xl mx-auto flex flex-col bg-background rounded-xl border shadow-sm ring-1 ring-border/50 overflow-hidden">
                        <div className="p-5 sm:p-6 border-b bg-muted/5">
                            <div className="flex items-start justify-between gap-4">
                                <h2 className="text-xl sm:text-2xl font-bold leading-tight">{currentItem.title}</h2>
                                <div className="flex gap-2 shrink-0">
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={onSave}
                                        className={cn("h-8 w-8", isSaved ? "text-yellow-500 hover:text-yellow-600" : "text-muted-foreground")}
                                    >
                                        <Star className={cn("h-5 w-5", isSaved && "fill-current")} />
                                    </Button>
                                    <Button variant="ghost" size="icon" onClick={onShare} className="h-8 w-8 text-muted-foreground">
                                        <Share2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <Badge variant="secondary" className={cn("text-xs", importanceColors[importance] || importanceColors.low)}>
                                    {importance} Priority
                                </Badge>
                                <span className="text-xs text-muted-foreground border-l pl-2">
                                    {frequency}
                                </span>
                            </div>
                        </div>

                        <div 
                            className="flex-1 overflow-y-auto p-5 sm:p-8 scrollable-content"
                            style={{ WebkitOverflowScrolling: 'touch' }}
                        >
                            <div className="prose dark:prose-invert max-w-none">
                                <MarkdownRenderer content={currentItem.content} className="text-lg leading-relaxed" />
                            </div>
                            <div className="h-20" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Controls */}
            <div className="absolute right-4 bottom-8 flex flex-col gap-2 z-20">
                <Button 
                    variant="secondary" 
                    size="icon" 
                    className="h-10 w-10 rounded-full shadow-md bg-background/80 backdrop-blur border"
                    onClick={onPrev}
                    disabled={index === 0}
                >
                    <ChevronUp className="h-5 w-5" />
                </Button>
                <Button 
                    variant="default" // Primary action
                    size="icon" 
                    className="h-12 w-12 rounded-full shadow-lg"
                    onClick={onNext}
                    disabled={index === total - 1}
                >
                    <ChevronDown className="h-6 w-6" />
                </Button>
            </div>
        </div>
    );
}
