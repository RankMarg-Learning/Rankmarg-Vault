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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSelectedTopicId(null)}
          className="shrink-0"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>

        <div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <span>{selectedExam}</span>
            <span>→</span>
            <span>{subject.name}</span>
          </div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span>{topic.icon}</span>
            {topic.name}
          </h1>
        </div>
      </div>

      {/* Content Tabs */}
      <Tabs
        value={activeTab || ''}
        onValueChange={(value) => setActiveTab(value as ContentType)}
      >
        <TabsList className="w-full justify-start overflow-x-auto flex-nowrap">
          {allowedTypes.map((type) => {
            const typeInfo = contentTypeLabels[type];
            const content = getTopicContent(topic.id, type);
            
            return (
              <TabsTrigger
                key={type}
                value={type}
                className="flex items-center gap-2 whitespace-nowrap"
              >
                <span>{typeInfo.icon}</span>
                <span>{typeInfo.label}</span>
                <span className="text-xs bg-muted px-1.5 py-0.5 rounded">
                  {content.length}
                </span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {allowedTypes.map((type) => (
          <TabsContent key={type} value={type} className="mt-6">
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
