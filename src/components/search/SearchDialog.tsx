import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { examsData, contentData, contentTypeLabels, ContentType } from '@/data/content';

interface SearchResult {
  id: string;
  title: string;
  topicId: string;
  topicName: string;
  subjectName: string;
  examId: string;
  contentType: ContentType;
}

export function SearchDialog() {
  const { isSearchOpen, setIsSearchOpen, setSelectedExam, setSelectedSubjectId, setSelectedTopicId } = useApp();
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    const results: SearchResult[] = [];
    const lowerQuery = query.toLowerCase();

    examsData.forEach((exam) => {
      exam.subjects.forEach((subject) => {
        subject.topics.forEach((topic) => {
          // Search in topic name
          if (topic.name.toLowerCase().includes(lowerQuery)) {
            topic.allowedTypes.forEach((type) => {
              const content = contentData[topic.id]?.[type] || [];
              content.forEach((item) => {
                results.push({
                  id: item.id,
                  title: item.title,
                  topicId: topic.id,
                  topicName: topic.name,
                  subjectName: subject.name,
                  examId: exam.id,
                  contentType: type,
                });
              });
            });
          }

          // Search in content titles
          topic.allowedTypes.forEach((type) => {
            const content = contentData[topic.id]?.[type] || [];
            content.forEach((item) => {
              if (item.title.toLowerCase().includes(lowerQuery)) {
                results.push({
                  id: item.id,
                  title: item.title,
                  topicId: topic.id,
                  topicName: topic.name,
                  subjectName: subject.name,
                  examId: exam.id,
                  contentType: type,
                });
              }
            });
          });
        });
      });
    });

    // Remove duplicates
    const unique = results.filter(
      (result, index, self) =>
        index === self.findIndex((r) => r.id === result.id)
    );

    return unique.slice(0, 20);
  }, [query]);

  const handleResultClick = (result: SearchResult) => {
    setSelectedExam(result.examId as 'JEE' | 'NEET');
    
    // Find the subject ID
    const exam = examsData.find((e) => e.id === result.examId);
    const subject = exam?.subjects.find((s) =>
      s.topics.some((t) => t.id === result.topicId)
    );
    
    if (subject) {
      setSelectedSubjectId(subject.id);
    }
    
    setSelectedTopicId(result.topicId);
    setIsSearchOpen(false);
    setQuery('');
  };

  return (
    <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search RankVault
          </DialogTitle>
        </DialogHeader>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search topics, formulas, reactions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-10 pr-10"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2"
            >
              <X className="h-4 w-4 text-muted-foreground hover:text-foreground" />
            </button>
          )}
        </div>

        <ScrollArea className="max-h-[400px]">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-muted-foreground">
              <Search className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>Start typing to search...</p>
              <p className="text-sm mt-1">Search across topics, formulas, and more</p>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-8 text-center text-muted-foreground">
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try a different search term</p>
            </div>
          ) : (
            <div className="space-y-2">
              {searchResults.map((result) => (
                <button
                  key={`${result.id}-${result.contentType}`}
                  onClick={() => handleResultClick(result)}
                  className="w-full text-left p-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">
                        {result.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {result.examId} → {result.subjectName} → {result.topicName}
                      </p>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {contentTypeLabels[result.contentType].icon} {contentTypeLabels[result.contentType].label}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
