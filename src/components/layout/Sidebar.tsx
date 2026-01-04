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
          "fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 sm:w-72 border-r border-border bg-sidebar transition-transform duration-300 md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ScrollArea className="h-full py-3 sm:py-4">
          <div className="px-2 sm:px-3 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 px-2 sm:px-3 py-2 bg-primary/10 rounded-lg">
              <Library className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <span className="font-semibold text-sm sm:text-base text-sidebar-foreground">
                {selectedExam} Vault
              </span>
            </div>
          </div>

          <nav className="px-2 sm:px-3 space-y-1">
            {examData?.subjects.map((subject) => (
              <div key={subject.id}>
                <Button
                  variant={
                    selectedSubjectId === subject.id ? "secondary" : "ghost"
                  }
                  className={cn(
                    "w-full justify-between h-auto py-2 sm:py-3 text-sm",
                    selectedSubjectId === subject.id && "bg-secondary",
                    "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                  onClick={() => handleSubjectClick(subject.slug)}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs sm:text-sm font-bold">
                      {subject.icon}
                    </span>
                    <span className="font-medium">{subject.name}</span>
                  </div>
                  <ChevronRight
                    className={cn(
                      "h-4 w-4 text-muted-foreground transition-transform",
                      selectedSubjectId === subject.id && "rotate-90"
                    )}
                  />
                </Button>

                {/* Topics */}
                {selectedSubjectId === subject.id && (
                  <div className="ml-4 sm:ml-6 mt-1 space-y-1 border-l-2 border-border pl-2 sm:pl-3">
                    {subject.topics.map((topic) => (
                      <Button
                        key={topic.id}
                        variant={
                          selectedTopicId === topic.id ? "default" : "ghost"
                        }
                        className={cn(
                          "w-full justify-start h-auto py-2 text-left text-sm",
                          selectedTopicId === topic.id &&
                            "bg-primary text-primary-foreground",
                          selectedTopicId !== topic.id &&
                            "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                        onClick={() =>
                          handleTopicClick(subject.slug, topic.slug)
                        }
                      >
                        <div className="flex flex-col items-start gap-1 w-full">
                          <div className="flex items-center gap-2">
                            <span className="w-5 h-5 rounded bg-muted flex items-center justify-center text-xs font-medium">
                              {topic.icon}
                            </span>
                            <span className="text-xs sm:text-sm truncate">
                              {topic.name}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-1 ml-7">
                            {topic.allowedTypes.map((type) => (
                              <span
                                key={type}
                                className={cn(
                                  "text-xs px-1 sm:px-1.5 py-0.5 rounded",
                                  selectedTopicId === topic.id
                                    ? "bg-primary-foreground/20 text-primary-foreground"
                                    : "bg-muted text-muted-foreground"
                                )}
                              >
                                {contentTypeLabels[type].icon}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </ScrollArea>
      </aside>
    </>
  );
}
