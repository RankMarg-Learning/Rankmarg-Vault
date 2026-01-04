import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TopicConfig, contentTypeLabels } from '@/data/content';

interface TopicCardProps {
  topic: TopicConfig;
  isSelected: boolean;
  onClick: () => void;
}

export function TopicCard({ topic, isSelected, onClick }: TopicCardProps) {
  return (
    <Card
      className={cn(
        'cursor-pointer transition-all hover:shadow-md hover:border-primary/50',
        isSelected && 'border-primary ring-2 ring-primary/20'
      )}
      onClick={onClick}
    >
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-2xl shrink-0">
            {topic.icon}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground mb-2">{topic.name}</h3>
            
            <div className="flex flex-wrap gap-1.5">
              {topic.allowedTypes.map((type) => {
                const typeInfo = contentTypeLabels[type];
                return (
                  <Badge
                    key={type}
                    variant="secondary"
                    className="text-xs"
                  >
                    {typeInfo.icon} {typeInfo.label}
                  </Badge>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
