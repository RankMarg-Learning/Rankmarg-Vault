import { Bookmark, Trash2, Filter } from 'lucide-react';
import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useApp } from '@/contexts/AppContext';
import { contentTypeLabels, ExamType, getTopicContent, ContentType } from '@/data/content';
import { ContentViewer } from '@/components/content/ContentViewer';
import { SEOHead } from '@/components/seo/SEOHead';
import { SavedItem } from '@/hooks/useLocalStorage';
import { 
  shouldShowAdForPlacement, 
  calculateAdPosition, 
  getAdForPlacement,
  adPlacements 
} from '@/config/ads';
import { RankMargAd } from '@/components/ads/RankMargAd';

export default function Saved() {
  const { savedItems, unsaveItem } = useApp();
  const [filterExam, setFilterExam] = useState<ExamType | 'all'>('all');
  const [filterType, setFilterType] = useState<string>('all');
  const [viewerOpen, setViewerOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SavedItem | null>(null);
  const [viewerIndex, setViewerIndex] = useState(0);

  const filteredItems = savedItems.filter((item) => {
    if (filterExam !== 'all' && item.examId !== filterExam) return false;
    if (filterType !== 'all' && item.contentType !== filterType) return false;
    return true;
  });

  // Calculate ad position for saved list
  const adPosition = useMemo(() => {
    const placementConfig = adPlacements.savedList;
    if (!shouldShowAdForPlacement('savedList', filteredItems.length)) {
      return null;
    }
    if (!placementConfig.config) return null;
    return calculateAdPosition(filteredItems.length, placementConfig.config);
  }, [filteredItems.length]);

  const ad = useMemo(() => getAdForPlacement('savedList'), []);

  const handleItemClick = (item: SavedItem) => {
    const content = getTopicContent(item.topicId, item.contentType);
    const index = item.itemIndex ?? content.findIndex(c => c.id === item.id);
    setSelectedItem(item);
    setViewerIndex(index >= 0 ? index : 0);
    setViewerOpen(true);
  };

  const handleCloseViewer = () => {
    setViewerOpen(false);
    setSelectedItem(null);
  };

  // Get content for the selected saved item
  const getViewerData = () => {
    if (!selectedItem) return null;
    
    const content = getTopicContent(selectedItem.topicId, selectedItem.contentType);
    if (!content.length) return null;
    
    return { items: content };
  };

  const viewerData = getViewerData();

  return (
    <>
      <SEOHead
        title="Saved Items"
        description="Your saved formulas, reactions, and tricks for quick revision. Access your bookmarked JEE and NEET content offline."
        keywords="saved formulas, bookmarked content, JEE revision, NEET revision, offline study"
        canonicalPath="/saved"
      />
      
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Bookmark className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Saved Items
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {savedItems.length} items saved for quick revision
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs sm:text-sm text-muted-foreground">Filter:</span>
          </div>
          
          <Select value={filterExam} onValueChange={(v) => setFilterExam(v as ExamType | 'all')}>
            <SelectTrigger className="w-[100px] sm:w-[120px] h-8 sm:h-10 text-xs sm:text-sm">
              <SelectValue placeholder="Exam" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Exams</SelectItem>
              <SelectItem value="JEE">JEE</SelectItem>
              <SelectItem value="NEET">NEET</SelectItem>
            </SelectContent>
          </Select>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[110px] sm:w-[140px] h-8 sm:h-10 text-xs sm:text-sm">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              {Object.entries(contentTypeLabels).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                  {value.icon} {value.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Saved Items List */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <Bookmark className="h-12 w-12 mx-auto text-muted-foreground/50 mb-4" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              {savedItems.length === 0 ? 'No saved items yet' : 'No items match your filters'}
            </h3>
            <p className="text-muted-foreground text-sm">
              {savedItems.length === 0
                ? 'Start exploring topics and save important content for quick revision'
                : 'Try adjusting your filters to see more items'}
            </p>
          </div>
        ) : (
          <div className="space-y-2 sm:space-y-3">
            {filteredItems.map((item, index) => {
              const typeInfo = contentTypeLabels[item.contentType];
              
              return (
                <div key={item.id}>
                  <Card
                    className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30"
                  >
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start justify-between gap-2 sm:gap-3">
                        <div
                          className="flex-1 min-w-0"
                          onClick={() => handleItemClick(item)}
                        >
                          <h4 className="font-medium text-foreground truncate mb-1 text-sm sm:text-base">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {item.examId} / {item.subjectName} / {item.topicName}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <Badge variant="secondary" className="text-xs">
                              {typeInfo?.icon} {typeInfo?.label}
                            </Badge>
                            <span className="text-xs text-muted-foreground hidden sm:inline">
                              Saved {new Date(item.savedAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <Button
                          variant="ghost"
                          size="icon"
                          className="shrink-0 text-muted-foreground hover:text-destructive h-8 w-8 sm:h-10 sm:w-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            unsaveItem(item.id);
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
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
        )}
      </div>

      {/* Content Viewer */}
      {viewerOpen && selectedItem && viewerData && (
        <ContentViewer
          items={viewerData.items}
          contentType={selectedItem.contentType}
          topicName={selectedItem.topicName}
          subjectName={selectedItem.subjectName}
          subjectId={selectedItem.subjectId}
          topicId={selectedItem.topicId}
          currentIndex={viewerIndex}
          onIndexChange={setViewerIndex}
          onClose={handleCloseViewer}
        />
      )}
    </>
  );
}
