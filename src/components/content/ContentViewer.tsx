import { useState, useCallback } from 'react';
import { Star, Copy, Share2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useApp } from '@/contexts/AppContext';
import { ContentItem, contentTypeLabels, ContentType } from '@/data/content';
import { useSwipe } from '@/hooks/useSwipe';
import { Latex } from '@/components/ui/latex';
import { cn } from '@/lib/utils';

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
  const { saveItem, unsaveItem, isItemSaved, selectedExam, trackView } = useApp();
  const [animationState, setAnimationState] = useState<'idle' | 'exit-left' | 'exit-right' | 'enter'>('idle');

  const currentItem = items[currentIndex];
  const isSaved = isItemSaved(currentItem.id);
  const typeInfo = contentTypeLabels[contentType];

  const animateTransition = useCallback((direction: 'left' | 'right', newIndex: number) => {
    setAnimationState(direction === 'left' ? 'exit-left' : 'exit-right');
    
    setTimeout(() => {
      onIndexChange(newIndex);
      trackView(items[newIndex].id);
      setAnimationState('enter');
      
      setTimeout(() => {
        setAnimationState('idle');
      }, 300);
    }, 200);
  }, [onIndexChange, trackView, items]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0 && animationState === 'idle') {
      animateTransition('right', currentIndex - 1);
    }
  }, [currentIndex, animationState, animateTransition]);

  const goToNext = useCallback(() => {
    if (currentIndex < items.length - 1 && animationState === 'idle') {
      animateTransition('left', currentIndex + 1);
    }
  }, [currentIndex, items.length, animationState, animateTransition]);

  const swipeHandlers = useSwipe({
    onSwipeLeft: goToNext,
    onSwipeRight: goToPrevious,
    threshold: 50,
  });

  const handleSave = () => {
    if (isSaved) {
      unsaveItem(currentItem.id);
      toast({
        title: 'Removed from saved',
        description: currentItem.title,
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
        itemIndex: currentIndex,
      });
      toast({
        title: 'Saved successfully',
        description: currentItem.title,
      });
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${currentItem.title}\n\n${currentItem.content}`);
      toast({
        title: 'Copied to clipboard',
        description: currentItem.title,
      });
    } catch (error) {
      toast({
        title: 'Failed to copy',
        variant: 'destructive',
      });
    }
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/?exam=${selectedExam}&subject=${subjectId}&topic=${topicId}&type=${contentType}&index=${currentIndex}`;
    
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

  const copyShareUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      toast({
        title: 'Link copied to clipboard',
        description: 'Share this link with others',
      });
    } catch (error) {
      toast({
        title: 'Failed to copy link',
        variant: 'destructive',
      });
    }
  };

  const importanceColors = {
    high: 'bg-destructive/10 text-destructive border-destructive/20',
    medium: 'bg-warning/10 text-warning border-warning/20',
    low: 'bg-muted text-muted-foreground border-muted',
  };

  const getCardAnimation = () => {
    switch (animationState) {
      case 'exit-left':
        return 'translate-x-[-100%] rotate-[-8deg] opacity-0 scale-95';
      case 'exit-right':
        return 'translate-x-[100%] rotate-[8deg] opacity-0 scale-95';
      case 'enter':
        return 'translate-x-0 rotate-0 opacity-100 scale-100';
      default:
        return 'translate-x-0 rotate-0 opacity-100 scale-100';
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container h-full flex flex-col py-3 px-3 sm:py-4 sm:px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
            <Button variant="ghost" size="icon" onClick={onClose} className="shrink-0">
              <X className="h-5 w-5" />
            </Button>
            <div className="min-w-0 flex-1">
              <p className="text-xs sm:text-sm text-muted-foreground truncate">
                {subjectName} / {topicName}
              </p>
              <Badge variant="secondary" className="text-xs">
                {typeInfo.icon} {typeInfo.label}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSave}
              className={cn('h-8 w-8 sm:h-10 sm:w-10', isSaved ? 'text-primary' : '')}
            >
              <Star className={cn('h-4 w-4 sm:h-5 sm:w-5', isSaved && 'fill-primary')} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCopy} className="h-8 w-8 sm:h-10 sm:w-10">
              <Copy className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleShare} className="h-8 w-8 sm:h-10 sm:w-10">
              <Share2 className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Swipe indicator */}
        <div className="text-center text-xs text-muted-foreground mb-2 sm:hidden">
          Swipe left or right to navigate
        </div>

        {/* Content with swipe */}
        <div
          className="flex-1 overflow-hidden relative flex items-center justify-center"
          {...swipeHandlers}
        >
          <Card
            className={cn(
              'max-w-3xl w-full mx-auto transition-all duration-300 ease-out origin-center overflow-auto max-h-full',
              getCardAnimation()
            )}
          >
            <CardHeader className="pb-2 sm:pb-4">
              <div className="flex items-start justify-between gap-3 sm:gap-4">
                <CardTitle className="text-lg sm:text-xl">{currentItem.title}</CardTitle>
                <Badge
                  variant="outline"
                  className={cn('shrink-0 text-xs', importanceColors[currentItem.importance])}
                >
                  {currentItem.importance.charAt(0).toUpperCase() + currentItem.importance.slice(1)}
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {currentItem.examFrequency}
              </p>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-3 sm:p-4 rounded-lg">
                <Latex
                  content={currentItem.content}
                  className="text-sm sm:text-base leading-relaxed"
                />
              </div>
            </CardContent>
          </Card>

          {/* Side swipe indicators */}
          {currentIndex > 0 && (
            <div className="absolute left-2 top-1/2 -translate-y-1/2 opacity-30 hidden sm:block">
              <ChevronLeft className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
          {currentIndex < items.length - 1 && (
            <div className="absolute right-2 top-1/2 -translate-y-1/2 opacity-30 hidden sm:block">
              <ChevronRight className="h-8 w-8 text-muted-foreground" />
            </div>
          )}
        </div>

        {/* Navigation - Progress dots only + tap zones */}
        <div className="flex items-center justify-center mt-3 sm:mt-4 max-w-3xl mx-auto w-full gap-4">
          {/* Tap zone for previous */}
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0 || animationState !== 'idle'}
            className={cn(
              'p-3 rounded-full transition-all',
              currentIndex === 0 ? 'opacity-30' : 'hover:bg-muted active:scale-95'
            )}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              {items.length <= 10 ? (
                items.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (idx !== currentIndex && animationState === 'idle') {
                        animateTransition(idx > currentIndex ? 'left' : 'right', idx);
                      }
                    }}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      idx === currentIndex
                        ? 'w-6 bg-primary'
                        : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    )}
                  />
                ))
              ) : (
                <span className="text-sm text-muted-foreground">
                  {currentIndex + 1} / {items.length}
                </span>
              )}
            </div>
          </div>

          {/* Tap zone for next */}
          <button
            onClick={goToNext}
            disabled={currentIndex === items.length - 1 || animationState !== 'idle'}
            className={cn(
              'p-3 rounded-full transition-all',
              currentIndex === items.length - 1 ? 'opacity-30' : 'hover:bg-muted active:scale-95'
            )}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
