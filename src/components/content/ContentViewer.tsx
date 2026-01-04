import { useState } from 'react';
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
  currentIndex: number;
  onIndexChange: (index: number) => void;
  onClose: () => void;
}

export function ContentViewer({
  items,
  contentType,
  topicName,
  subjectName,
  currentIndex,
  onIndexChange,
  onClose,
}: ContentViewerProps) {
  const { toast } = useToast();
  const { saveItem, unsaveItem, isItemSaved, selectedExam, selectedTopicId, trackView } = useApp();
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const currentItem = items[currentIndex];
  const isSaved = isItemSaved(currentItem.id);
  const typeInfo = contentTypeLabels[contentType];

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSwipeDirection('right');
      setTimeout(() => {
        onIndexChange(currentIndex - 1);
        trackView(items[currentIndex - 1].id);
        setSwipeDirection(null);
      }, 150);
    }
  };

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      setSwipeDirection('left');
      setTimeout(() => {
        onIndexChange(currentIndex + 1);
        trackView(items[currentIndex + 1].id);
        setSwipeDirection(null);
      }, 150);
    }
  };

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
        topicId: selectedTopicId!,
        topicName,
        subjectName,
        examId: selectedExam,
        contentType,
        title: currentItem.title,
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
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentItem.title,
          text: currentItem.content,
        });
      } catch (error) {
        // User cancelled or share failed
      }
    } else {
      handleCopy();
    }
  };

  const importanceColors = {
    high: 'bg-destructive/10 text-destructive border-destructive/20',
    medium: 'bg-warning/10 text-warning border-warning/20',
    low: 'bg-muted text-muted-foreground border-muted',
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
          className="flex-1 overflow-auto relative"
          {...swipeHandlers}
        >
          <Card
            className={cn(
              'max-w-3xl mx-auto transition-all duration-150',
              swipeDirection === 'left' && 'translate-x-[-20px] opacity-50',
              swipeDirection === 'right' && 'translate-x-[20px] opacity-50'
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
        </div>

        {/* Navigation - Desktop buttons + Progress */}
        <div className="flex items-center justify-between mt-3 sm:mt-4 max-w-3xl mx-auto w-full gap-2">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            size="sm"
            className="hidden sm:flex"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          {/* Mobile navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="sm:hidden h-10 w-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Progress indicator */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {items.map((_, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'h-1.5 rounded-full transition-all',
                    idx === currentIndex
                      ? 'w-4 sm:w-6 bg-primary'
                      : 'w-1.5 bg-muted-foreground/30',
                    items.length > 10 && 'hidden sm:block'
                  )}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">
              {currentIndex + 1} / {items.length}
            </span>
          </div>

          <Button
            variant="outline"
            onClick={goToNext}
            disabled={currentIndex === items.length - 1}
            size="sm"
            className="hidden sm:flex"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>

          {/* Mobile navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            disabled={currentIndex === items.length - 1}
            className="sm:hidden h-10 w-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
