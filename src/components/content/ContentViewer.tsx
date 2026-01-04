import { useState } from 'react';
import { Star, Copy, Share2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { useApp } from '@/contexts/AppContext';
import { ContentItem, contentTypeLabels, ContentType } from '@/data/content';
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

  const currentItem = items[currentIndex];
  const isSaved = isItemSaved(currentItem.id);
  const typeInfo = contentTypeLabels[contentType];

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

  const goToPrevious = () => {
    if (currentIndex > 0) {
      onIndexChange(currentIndex - 1);
      trackView(items[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      onIndexChange(currentIndex + 1);
      trackView(items[currentIndex + 1].id);
    }
  };

  const importanceColors = {
    high: 'bg-destructive/10 text-destructive border-destructive/20',
    medium: 'bg-warning/10 text-warning border-warning/20',
    low: 'bg-muted text-muted-foreground border-muted',
  };

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container h-full flex flex-col py-4 px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
            <div>
              <p className="text-sm text-muted-foreground">
                {subjectName} → {topicName}
              </p>
              <Badge variant="secondary">
                {typeInfo.icon} {typeInfo.label}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSave}
              className={isSaved ? 'text-primary' : ''}
            >
              <Star className={cn('h-5 w-5', isSaved && 'fill-primary')} />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleCopy}>
              <Copy className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={handleShare}>
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <CardTitle className="text-xl">{currentItem.title}</CardTitle>
                <Badge
                  variant="outline"
                  className={importanceColors[currentItem.importance]}
                >
                  {currentItem.importance === 'high' && '🔥 '}
                  {currentItem.importance.charAt(0).toUpperCase() + currentItem.importance.slice(1)} Priority
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                📌 {currentItem.examFrequency}
              </p>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed bg-muted/50 p-4 rounded-lg">
                  {currentItem.content}
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-4 max-w-3xl mx-auto w-full">
          <Button
            variant="outline"
            onClick={goToPrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <span className="text-sm text-muted-foreground">
            {currentIndex + 1} of {items.length}
          </span>

          <Button
            variant="outline"
            onClick={goToNext}
            disabled={currentIndex === items.length - 1}
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
