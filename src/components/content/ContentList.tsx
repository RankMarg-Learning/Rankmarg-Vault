import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { ContentItem } from '@/data/content';
import { cn } from '@/lib/utils';

interface ContentListProps {
  items: ContentItem[];
  onItemClick: (index: number) => void;
}

export function ContentList({ items, onItemClick }: ContentListProps) {
  const { isItemSaved } = useApp();

  // Sort by importance: high > medium > low
  const sortedItems = [...items].sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.importance] - order[b.importance];
  });

  const importanceBadge = {
    high: { label: 'High', className: 'bg-destructive/10 text-destructive' },
    medium: { label: 'Medium', className: 'bg-warning/10 text-warning' },
    low: { label: 'Low', className: 'bg-muted text-muted-foreground' },
  };

  return (
    <div className="space-y-3">
      {sortedItems.map((item, index) => {
        const saved = isItemSaved(item.id);
        const badge = importanceBadge[item.importance];

        return (
          <Card
            key={item.id}
            className="cursor-pointer transition-all hover:shadow-md hover:border-primary/30"
            onClick={() => onItemClick(items.indexOf(item))}
          >
            <CardContent className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground truncate">
                      {item.title}
                    </h4>
                    {saved && (
                      <Star className="h-4 w-4 text-primary fill-primary shrink-0" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.content.split('\n')[0]}
                  </p>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <Badge variant="secondary" className={badge.className}>
                    {item.importance === 'high' && '🔥 '}
                    {badge.label}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    📌 {item.examFrequency}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
