import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TopicConfig, contentTypeLabels } from '@/data/content';

interface TopicCardProps {
  topic: TopicConfig;
  subjectSlug: string;
  isSelected: boolean;
  onClick?: () => void;
}

export function TopicCard({ topic, subjectSlug, isSelected, onClick }: TopicCardProps) {
  const href = `/${subjectSlug}/${topic.slug}`;
  
  const cardContent = (
    <CardContent className="p-3 sm:p-4">
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 text-sm sm:text-base font-bold text-primary shrink-0">
          {topic.icon}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-2 text-sm sm:text-base">{topic.name}</h3>
          
          <div className="flex flex-wrap gap-1 sm:gap-1.5">
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
  );
  
  return (
    <Card
      className={cn(
        'cursor-pointer transition-all hover:shadow-md hover:border-primary/50',
        isSelected && 'border-primary ring-2 ring-primary/20'
      )}
    >
      {onClick ? (
        <div onClick={onClick}>
          {cardContent}
        </div>
      ) : (
        <Link to={href} className="block">
          {cardContent}
        </Link>
      )}
    </Card>
  );
}
