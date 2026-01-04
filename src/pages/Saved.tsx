import { Bookmark, Trash2, Filter } from 'lucide-react';
import { useState } from 'react';
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
import { contentTypeLabels, ExamType } from '@/data/content';

export default function Saved() {
  const { savedItems, unsaveItem, setSelectedExam, setSelectedSubjectId, setSelectedTopicId } = useApp();
  const [filterExam, setFilterExam] = useState<ExamType | 'all'>('all');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredItems = savedItems.filter((item) => {
    if (filterExam !== 'all' && item.examId !== filterExam) return false;
    if (filterType !== 'all' && item.contentType !== filterType) return false;
    return true;
  });

  const handleItemClick = (item: typeof savedItems[0]) => {
    setSelectedExam(item.examId as ExamType);
    setSelectedTopicId(item.topicId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <Bookmark className="h-6 w-6 text-primary" />
            Saved Items
          </h1>
          <p className="text-muted-foreground mt-1">
            {savedItems.length} items saved for quick revision
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filter:</span>
        </div>
        
        <Select value={filterExam} onValueChange={(v) => setFilterExam(v as ExamType | 'all')}>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Exam" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Exams</SelectItem>
            <SelectItem value="JEE">JEE</SelectItem>
            <SelectItem value="NEET">NEET</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-[140px]">
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
          <p className="text-muted-foreground">
            {savedItems.length === 0
              ? 'Start exploring topics and save important content for quick revision'
              : 'Try adjusting your filters to see more items'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const typeInfo = contentTypeLabels[item.contentType as keyof typeof contentTypeLabels];
            
            return (
              <Card
                key={item.id}
                className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className="flex-1 min-w-0"
                      onClick={() => handleItemClick(item)}
                    >
                      <h4 className="font-medium text-foreground truncate mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.examId} → {item.subjectName} → {item.topicName}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary">
                          {typeInfo?.icon} {typeInfo?.label}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          Saved {new Date(item.savedAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="shrink-0 text-muted-foreground hover:text-destructive"
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
            );
          })}
        </div>
      )}
    </div>
  );
}
