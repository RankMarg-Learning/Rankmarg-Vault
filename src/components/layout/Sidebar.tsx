import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Library } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useApp } from "@/contexts/AppContext";
import { contentTypeLabels } from "@/data/content";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const {
    selectedExam,
    selectedSubjectId,
    setSelectedSubjectId,
    selectedTopicId,
    setSelectedTopicId,
    getSelectedExamData,
  } = useApp();

  const examData = getSelectedExamData();

  // Listen for subject selection events from main content
  useEffect(() => {
    const handleSelectSubject = (event: CustomEvent<string>) => {
      setSelectedSubjectId(event.detail);
      setSelectedTopicId(null);
    };

    window.addEventListener(
      "select-subject",
      handleSelectSubject as EventListener
    );
    return () => {
      window.removeEventListener(
        "select-subject",
        handleSelectSubject as EventListener
      );
    };
  }, [setSelectedSubjectId, setSelectedTopicId]);

  const handleSubjectClick = (subjectSlug: string) => {
    navigate(`/${subjectSlug}`);
    onClose();
  };

  const handleTopicClick = (subjectSlug: string, topicSlug: string) => {
    navigate(`/${subjectSlug}/${topicSlug}`);
    onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-14 sm:top-16 z-40 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] w-[280px] sm:w-72 border-r border-border bg-sidebar transition-transform duration-300 ease-in-out md:translate-x-0 shadow-lg md:shadow-none",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ScrollArea className="h-full">
          <div className="p-3 sm:p-4 pb-2 sm:pb-3">
            <div className="flex items-center gap-2 sm:gap-2.5 px-2 sm:px-3 py-2.5 sm:py-3 bg-primary/10 rounded-lg border border-primary/20">
              <Library className="h-4 w-4 sm:h-5 sm:w-5 text-primary shrink-0" />
              <span className="font-semibold text-sm sm:text-base text-sidebar-foreground truncate">
                {selectedExam} Vault
              </span>
            </div>
          </div>

          <nav className="px-2 sm:px-3 pb-3 sm:pb-4 space-y-0.5 sm:space-y-1">
            {examData?.subjects.map((subject) => (
              <div key={subject.id}>
                <Button
                  variant={
                    selectedSubjectId === subject.id ? "secondary" : "ghost"
                  }
                  className={cn(
                    "w-full justify-between h-auto min-h-[44px] py-2.5 sm:py-3 px-2 sm:px-3 text-sm transition-all",
                    selectedSubjectId === subject.id &&
                      "bg-secondary shadow-sm",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:scale-[0.98]"
                  )}
                  onClick={() => handleSubjectClick(subject.slug)}
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-bold shrink-0">
                      {subject.icon}
                    </span>
                    <span className="font-medium text-sm sm:text-base truncate">
                      {subject.name}
                    </span>
                  </div>
                </Button>
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
