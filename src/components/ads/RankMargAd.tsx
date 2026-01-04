import { ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AdContent } from "@/config/ads";

interface RankMargAdProps {
  ad: AdContent;
  className?: string;
  onClick?: () => void;
}

export function RankMargAd({ ad, className, onClick }: RankMargAdProps) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(ad.url, "_blank", "noopener,noreferrer");
    }
  };

  // Banner aspect - full width, prominent
  if (ad.aspect === "banner") {
    return (
      <Card
        className={cn(
          "w-full cursor-pointer transition-all hover:shadow-lg hover:border-primary/50",
          "bg-gradient-to-r from-primary/10 via-primary/5 to-background border-primary/20",
          className
        )}
        onClick={handleClick}
      >
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            {ad.image && (
              <div className="flex-shrink-0">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-lg object-cover"
                />
              </div>
            )}
            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground">
                  {ad.title}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  Sponsored
                </Badge>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                {ad.description}
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                {ad.buttonText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Card aspect - standard card layout
  if (ad.aspect === "card") {
    return (
      <Card
        className={cn(
          "w-full cursor-pointer transition-all hover:shadow-md hover:border-primary/50",
          "bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20",
          className
        )}
        onClick={handleClick}
      >
        <CardHeader className="pb-2 sm:pb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg sm:text-xl">{ad.title}</CardTitle>
              <Badge variant="secondary" className="text-xs mt-1">
                Sponsored
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {ad.image && (
              <div className="w-full h-32 sm:h-40 rounded-lg overflow-hidden bg-muted">
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="bg-muted/50 p-4 sm:p-6 rounded-lg text-center">
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                {ad.description}
              </p>
              <Button size="lg" className="w-full sm:w-auto">
                {ad.buttonText}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Compact aspect - smaller, minimal
  if (ad.aspect === "compact") {
    return (
      <Card
        className={cn(
          "w-full cursor-pointer transition-all hover:shadow-md hover:border-primary/50",
          "bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20",
          className
        )}
        onClick={handleClick}
      >
        <CardContent className="p-3 sm:p-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary shrink-0">
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-semibold text-foreground text-sm sm:text-base truncate">
                  {ad.title}
                </h4>
                <Badge variant="secondary" className="text-xs shrink-0">
                  Ad
                </Badge>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-2">
                {ad.description}
              </p>
              <Button size="sm" variant="outline" className="text-xs">
                {ad.buttonText}
                <ExternalLink className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Inline aspect - very minimal, fits in grids
  if (ad.aspect === "inline") {
    return (
      <Card
        className={cn(
          "w-full cursor-pointer transition-all hover:shadow-md hover:border-primary/50",
          "bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
          className
        )}
        onClick={handleClick}
      >
        <CardContent className="p-3 sm:p-4">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <h4 className="font-semibold text-foreground text-sm sm:text-base">
              {ad.title}
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {ad.description}
            </p>
            <Button size="sm" variant="outline" className="text-xs mt-1">
              {ad.buttonText}
              <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
            <Badge variant="secondary" className="text-xs">
              Sponsored
            </Badge>
          </div>
        </CardContent>
      </Card>
    );
  }

  // Default fallback
  return (
    <Card
      className={cn(
        "w-full cursor-pointer transition-all hover:shadow-md hover:border-primary/50",
        "bg-gradient-to-br from-primary/10 via-primary/5 to-background border-primary/20",
        className
      )}
      onClick={handleClick}
    >
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">{ad.title}</h4>
            <p className="text-xs text-muted-foreground mb-2">{ad.description}</p>
            <Button size="sm">
              {ad.buttonText}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

