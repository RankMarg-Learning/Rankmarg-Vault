import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import {
  BookOpen,
  Target,
  Trophy,
  FlaskConical,
  Microscope,
  Telescope,
  Calculator,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useApp } from "@/contexts/AppContext";
import { TopicCard } from "@/components/content/TopicCard";
import { TopicContent } from "@/components/content/TopicContent";
import { SEOHead } from "@/components/seo/SEOHead";
import { ExamType } from "@/data/content";
import {
  getAdForPlacement,
  shouldShowAdForPlacement,
  calculateAdPosition,
  adPlacements,
} from "@/config/ads";
import { RankMargAd } from "@/components/ads/RankMargAd";

const features = [
  {
    icon: BookOpen,
    title: "Structured Learning",
    description:
      "Content organized by exam, subject, and topic for easy navigation",
  },
  {
    icon: Target,
    title: "Exam Focused",
    description: "Content prioritized by exam importance and frequency",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Save items and track your revision progress locally",
  },
];

export default function Index() {
  const [searchParams] = useSearchParams();
  const {
    selectedExam,
    setSelectedExam,
    selectedSubjectId,
    setSelectedSubjectId,
    selectedTopicId,
    setSelectedTopicId,
    getSelectedExamData,
    getSelectedSubjectData,
  } = useApp();

  // Handle URL-based navigation for shared links
  useEffect(() => {
    const examParam = searchParams.get("exam") as ExamType | null;
    const subjectParam = searchParams.get("subject");
    const topicParam = searchParams.get("topic");

    if (examParam && (examParam === "JEE" || examParam === "NEET")) {
      setSelectedExam(examParam);
    }
    if (subjectParam) {
      setSelectedSubjectId(subjectParam);
    }
    if (topicParam) {
      setSelectedTopicId(topicParam);
    }
  }, [searchParams, setSelectedExam, setSelectedSubjectId, setSelectedTopicId]);

  const examData = getSelectedExamData();
  const subjectData = getSelectedSubjectData();

  // Map subject IDs to their icons
  const getSubjectIcon = (subjectId: string) => {
    const iconMap: Record<string, typeof FlaskConical> = {
      chemistry: FlaskConical,
      biology: Microscope,
      mathematics: Calculator,
      physics: Telescope,
    };
    return iconMap[subjectId] || BookOpen;
  };

  // Calculate ad positions at top level (hooks must be called unconditionally)
  const topicAdPosition = useMemo(() => {
    if (!subjectData) return null;
    const placementConfig = adPlacements.topicGrid;
    if (!shouldShowAdForPlacement("topicGrid", subjectData.topics.length)) {
      return null;
    }
    if (!placementConfig.config) return null;
    return calculateAdPosition(
      subjectData.topics.length,
      placementConfig.config
    );
  }, [subjectData]);

  const topicAd = useMemo(() => getAdForPlacement("topicGrid"), []);

  // Generate SEO content based on current view
  const getSEOContent = () => {
    if (selectedTopicId && subjectData) {
      const topic = subjectData.topics.find((t) => t.id === selectedTopicId);
      if (topic) {
        return {
          title: `${topic.name} - ${subjectData.name} - ${selectedExam}`,
          description: `${topic.name} formulas, reactions, and tricks for ${selectedExam} preparation. Master ${subjectData.name} concepts with RankVault.`,
          keywords: `${topic.name}, ${subjectData.name}, ${selectedExam} formulas, ${selectedExam} preparation, physics formulas, chemistry reactions`,
          canonicalPath: `/?exam=${selectedExam}&subject=${selectedSubjectId}&topic=${selectedTopicId}`,
        };
      }
    }
    if (selectedSubjectId && subjectData) {
      return {
        title: `${subjectData.name} Topics - ${selectedExam}`,
        description: `Explore ${subjectData.name} topics for ${selectedExam}. Access formulas, reactions, and tricks organized for quick revision.`,
        keywords: `${subjectData.name}, ${selectedExam}, ${selectedExam} ${subjectData.name}, formulas, reactions`,
        canonicalPath: `/?exam=${selectedExam}&subject=${selectedSubjectId}`,
      };
    }
    return {
      title: `${selectedExam} Preparation`,
      description: `RankVault - Your ultimate recall and revision vault for ${selectedExam}. Access formulas, reactions, and tricks organized for quick revision.`,
      keywords: `${selectedExam} preparation, ${selectedExam} formulas, ${selectedExam} revision, JEE NEET preparation`,
      canonicalPath: "/",
    };
  };

  const seoContent = getSEOContent();

  // If a topic is selected, show the topic content
  if (selectedTopicId) {
    return (
      <>
        <SEOHead {...seoContent} />
        <TopicContent />
      </>
    );
  }

  // If a subject is selected, show topics
  if (selectedSubjectId && subjectData) {
    return (
      <>
        <SEOHead {...seoContent} />
        <div className="space-y-6">
          <div>
            <p className="text-sm text-muted-foreground mb-1">
              {selectedExam} - {subjectData.name}
            </p>
            <h1 className="text-2xl font-bold text-foreground">
              {subjectData.name} Topics
            </h1>
            <p className="text-muted-foreground mt-2">
              Select a topic to explore formulas, reactions, and more
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subjectData.topics.map((topic, index) => (
              <div key={topic.id}>
                <TopicCard
                  topic={topic}
                  isSelected={false}
                  onClick={() => setSelectedTopicId(topic.id)}
                />
                {/* Show ad after this topic if position matches */}
                {topicAdPosition !== null &&
                  topicAdPosition === index &&
                  topicAd && <RankMargAd ad={topicAd} className="mt-4" />}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Default: Show subjects directly
  return (
    <>
      <SEOHead {...seoContent} />
      <div className="space-y-8">
        {/* Hero Section */}
        <div className="text-center py-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <BookOpen className="h-8 w-8" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to RankVault
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your ultimate recall and revision vault for {selectedExam}. Access
            formulas, reactions, and tricks organized for quick revision.
          </p>
        </div>

        {/* Subjects Grid - Direct Display */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">
            {selectedExam} Subjects
          </h2>
          <p className="text-muted-foreground mb-6">
            Select a subject to start exploring topics
          </p>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {examData?.subjects.map((subject) => {
              const SubjectIcon = getSubjectIcon(subject.id);
              return (
                <Card
                  key={subject.id}
                  className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
                  onClick={() => {
                    // Trigger subject selection in sidebar
                    const event = new CustomEvent("select-subject", {
                      detail: subject.id,
                    });
                    window.dispatchEvent(event);
                  }}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <SubjectIcon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {subject.name}
                        </CardTitle>
                        <CardDescription>
                          {subject.topics.length} topics
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* Ad after subjects grid */}
          {shouldShowAdForPlacement("homeAfterSubjects") &&
            (() => {
              const ad = getAdForPlacement("homeAfterSubjects");
              return ad ? <RankMargAd ad={ad} className="mt-6" /> : null;
            })()}
        </div>

        {/* Features */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Ad after features */}
        {shouldShowAdForPlacement("homeAfterFeatures") &&
          (() => {
            const ad = getAdForPlacement("homeAfterFeatures");
            return ad ? <RankMargAd ad={ad} className="mt-6" /> : null;
          })()}
      </div>
    </>
  );
}
