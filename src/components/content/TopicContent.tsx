import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useApp } from '@/contexts/AppContext';
import { getTopicContent, contentTypeLabels, ContentType } from '@/data/content';
import { ContentList } from './ContentList';
import { ContentViewer } from './ContentViewer';

export function TopicContent() {
  const { getSelectedTopicData, setSelectedTopicId, trackView, selectedExam } = useApp();
  const topicData = getSelectedTopicData();

  const [activeTab, setActiveTab] = useState<ContentType | null>(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  if (!topicData) return null;

  const { topic, subject } = topicData;
  const allowedTypes = topic.allowedTypes;

  // Set initial tab if not set
  if (!activeTab && allowedTypes.length > 0) {
    setActiveTab(allowedTypes[0]);
  }

  const currentContent = activeTab ? getTopicContent(topic.id, activeTab) : [];

  const handleItemClick = (index: number) => {
    setViewerIndex(index);
    setViewerOpen(true);
    if (currentContent[index]) {
      trackView(currentContent[index].id);
    }
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSelectedTopicId(null)}
          className="shrink-0 h-8 w-8 sm:h-10 sm:w-10"
        >
          <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </Button>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-1">
            <span>{selectedExam}</span>
            <span>/</span>
            <span className="truncate">{subject.name}</span>
          </div>
          <h1 className="text-lg sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-bold">
              {topic.icon}
            </span>
            <span className="truncate">{topic.name}</span>
          </h1>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs
        value={activeTab || ''}
        onValueChange={(value) => setActiveTab(value as ContentType)}
      >
        <TabsList className="w-full justify-start overflow-x-auto flex-nowrap h-auto p-1">
          {allowedTypes.map((type) => {
            const typeInfo = contentTypeLabels[type];
            const content = getTopicContent(topic.id, type);
            
            return (
              <TabsTrigger
                key={type}
                value={type}
                className="flex items-center gap-1 sm:gap-2 whitespace-nowrap text-xs sm:text-sm px-2 sm:px-3 py-1.5 sm:py-2"
              >
                <span className="w-4 h-4 sm:w-5 sm:h-5 rounded bg-muted flex items-center justify-center text-xs font-medium">
                  {typeInfo.icon}
                </span>
                <span className="hidden xs:inline sm:inline">{typeInfo.label}</span>
                <span className="text-xs bg-muted px-1 sm:px-1.5 py-0.5 rounded">
                  {content.length}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {allowedTypes.map((type) => (
          <TabsContent key={type} value={type} className="mt-4 sm:mt-6">
            <ContentList
              items={getTopicContent(topic.id, type)}
              onItemClick={handleItemClick}
            />
          </TabsContent>
        ))}
      </Tabs>

      {/* Content Viewer */}
      {viewerOpen && activeTab && currentContent.length > 0 && (
        <ContentViewer
          items={currentContent}
          contentType={activeTab}
          topicName={topic.name}
          subjectName={subject.name}
          currentIndex={viewerIndex}
          onIndexChange={setViewerIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </div>
  );
}
