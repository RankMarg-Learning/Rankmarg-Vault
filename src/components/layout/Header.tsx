import { Search, Moon, Sun, Menu, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useApp } from "@/contexts/AppContext";
import { ExamType } from "@/data/content";

interface HeaderProps {
  onMenuClick?: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  const {
    selectedExam,
    setSelectedExam,
    isDarkMode,
    toggleDarkMode,
    setIsSearchOpen,
  } = useApp();

  const exams: { id: ExamType; label: string }[] = [
    { id: "JEE", label: "JEE" },
    { id: "NEET", label: "NEET" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left: Logo + Menu */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <img src="/logo.png" alt="RankVault" className="h-8 w-8" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none text-foreground">
                RankVault
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Your Exam Recall Vault
              </span>
            </div>
          </div>
        </div>

        {/* Center: Exam Selector (Desktop) */}
        <div className="hidden md:flex items-center gap-2 bg-secondary/50 p-1 rounded-lg">
          {exams.map((exam) => (
            <Button
              key={exam.id}
              variant={selectedExam === exam.id ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedExam(exam.id)}
              className="min-w-[80px]"
            >
              {exam.label}
            </Button>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Mobile Exam Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="sm">
                {selectedExam}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {exams.map((exam) => (
                <DropdownMenuItem
                  key={exam.id}
                  onClick={() => setSelectedExam(exam.id)}
                  className={selectedExam === exam.id ? "bg-secondary" : ""}
                >
                  {exam.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
