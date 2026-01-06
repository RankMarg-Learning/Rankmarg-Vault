import { Search, Moon, Sun, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useApp } from "@/contexts/AppContext";
import { ExamType } from "@/data/content";
import { cn } from "@/lib/utils";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const { selectedExam, setSelectedExam, isDarkMode, toggleDarkMode } =
    useApp();

  const exams: { id: ExamType; label: string }[] = [
    { id: "JEE", label: "JEE" },
    { id: "NEET", label: "NEET" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-3 sm:px-4 max-w-7xl mx-auto">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-9 w-9 sm:h-10 sm:w-10 shrink-0"
            onClick={onMenuClick}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>

          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary shrink-0">
              <img
                src="/logo.png"
                alt="RankVault"
                className="h-5 w-5 sm:h-7 sm:w-7 object-contain"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm sm:text-base md:text-lg leading-none text-foreground truncate">
                RankVault
              </span>
              <span className="text-[10px] sm:text-xs text-muted-foreground hidden sm:block truncate">
                Your Exam Recall Vault
              </span>
            </div>
          </div>
        </div>

        {/* Center: Exam Selector (Desktop) */}
        <div className="hidden md:flex items-center gap-1.5 bg-secondary/50 p-1 rounded-lg mx-4">
          {exams.map((exam) => (
            <Button
              key={exam.id}
              variant={selectedExam === exam.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedExam(exam.id)}
              className="min-w-[70px] h-8 text-xs sm:text-sm"
            >
              {exam.label}
            </Button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Mobile Exam Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm" className="  ">
                {selectedExam}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {exams.map((exam) => (
                <DropdownMenuItem
                  key={exam.id}
                  onClick={() => setSelectedExam(exam.id)}
                  className={cn(
                    "text-sm",
                    selectedExam === exam.id && "bg-secondary font-medium"
                  )}
                >
                  {exam.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="h-9 w-9 sm:h-10 sm:w-10"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5" />
            ) : (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
