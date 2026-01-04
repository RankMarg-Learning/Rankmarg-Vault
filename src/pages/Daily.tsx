import { Sparkles, RefreshCw, ChevronRight } from 'lucide-react';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { examsData, contentData, contentTypeLabels, ContentItem, ContentType } from '@/data/content';
import { ContentViewer } from '@/components/content/ContentViewer';

interface DailyItem extends ContentItem {
  topicId: string;
  topicName: string;
  subjectName: string;
  examId: string;
  contentType: ContentType;
}

export default function Daily() {
  const { selectedExam, viewedItems, trackView } = useApp();
  const [refreshKey, setRefreshKey] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  // Generate daily recall items based on view history and randomness
  const dailyItems = useMemo(() => {
    const items: DailyItem[] = [];
    const examData = examsData.find((e) => e.id === selectedExam);
    
    if (!examData) return [];

    // Collect all content items
    examData.subjects.forEach((subject) => {
      subject.topics.forEach((topic) => {
        topic.allowedTypes.forEach((type) => {
          const content = contentData[topic.id]?.[type] || [];
          content.forEach((item) => {
            items.push({
              ...item,
              topicId: topic.id,
              topicName: topic.name,
              subjectName: subject.name,
              examId: examData.id,
              contentType: type,
            });
          });
        });
      });
    });

    // Sort by: 1) Not recently viewed, 2) High importance, 3) Random
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;

    const scored = items.map((item) => {
      const viewed = viewedItems[item.id];
      let score = 0;

      // Prefer items not viewed recently
      if (!viewed || now - viewed.lastViewed > oneDay * 3) {
        score += 100;
      } else if (now - viewed.lastViewed > oneDay) {
        score += 50;
      }

      // Prefer high importance
      if (item.importance === 'high') score += 30;
      else if (item.importance === 'medium') score += 15;

      // Add randomness
      score += Math.random() * 20;

      return { item, score };
    });

    // Sort by score descending and take top 10
    return scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((s) => s.item);
  }, [selectedExam, viewedItems, refreshKey]);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1);
  };

  const handleItemClick = (index: number) => {
    setViewerIndex(index);
    setViewerOpen(true);
    trackView(dailyItems[index].id);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            Daily Recall
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            10 items selected for today based on your history
          </p>
        </div>

        <Button variant="outline" onClick={handleRefresh} size="sm">
          <RefreshCw className="h-4 w-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Daily Items */}
      {dailyItems.length === 0 ? (
        <div className="text-center py-12">
          <Sparkles className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">
            No content available
          </h3>
          <p className="text-muted-foreground">
            Start exploring topics to build your daily recall list
          </p>
        </div>
      ) : (
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
          {dailyItems.map((item, index) => {
            const typeInfo = contentTypeLabels[item.contentType];
            
            return (
              <Card
                key={`${item.id}-${index}`}
                className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30 bg-card"
                onClick={() => handleItemClick(index)}
              >
                <CardHeader className="pb-2 p-3 sm:p-4 sm:pb-2">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-sm sm:text-base font-medium line-clamp-2">
                      {item.title}
                    </CardTitle>
                    <Badge
                      variant="secondary"
                      className={
                        item.importance === 'high'
                          ? 'bg-destructive/10 text-destructive shrink-0'
                          : item.importance === 'medium'
                          ? 'bg-warning/10 text-warning shrink-0'
                          : 'shrink-0'
                      }
                    >
                      {item.importance.charAt(0).toUpperCase()}
                    </Badge>
                  </div>
                  <CardDescription className="text-xs">
                    {item.subjectName} / {item.topicName}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 p-3 sm:p-4 sm:pt-0">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {typeInfo.icon} {typeInfo.label}
                    </Badge>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}

      {/* Content Viewer */}
      {viewerOpen && dailyItems.length > 0 && (
        <ContentViewer
          items={dailyItems}
          contentType={dailyItems[viewerIndex].contentType}
          topicName={dailyItems[viewerIndex].topicName}
          subjectName={dailyItems[viewerIndex].subjectName}
          currentIndex={viewerIndex}
          onIndexChange={setViewerIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  );
}
