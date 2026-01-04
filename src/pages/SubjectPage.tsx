import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { TopicCard } from "@/components/content/TopicCard";
import { useApp } from "@/contexts/AppContext";
import { examsData } from "@/data/content";
import NotFound from "./NotFound";
import {
  getAdForPlacement,
  shouldShowAdForPlacement,
  calculateAdPosition,
  adPlacements,
} from "@/config/ads";
import { RankMargAd } from "@/components/ads/RankMargAd";
import { useMemo } from "react";

export default function SubjectPage() {
  const { subjectSlug } = useParams<{ subjectSlug: string }>();
  const {
    selectedExam,
    setSelectedExam,
    setSelectedSubjectId,
    getSelectedExamData,
    getSelectedSubjectData,
  } = useApp();

  const [foundSubject, setFoundSubject] = useState<typeof examsData[0]['subjects'][0] | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  // Find subject by slug and set it in context
  useEffect(() => {
    if (!subjectSlug) {
      setFoundSubject(null);
      setHasSearched(true);
      return;
    }
    
    // Search through all exams to find matching subject
    let subjectFound: typeof examsData[0]['subjects'][0] | null = null;
    let examFound: typeof examsData[0] | null = null;
    
    for (const exam of examsData) {
      const subject = exam.subjects.find((s) => s.slug === subjectSlug);
      if (subject) {
        subjectFound = subject;
        examFound = exam;
        break;
      }
    }
    
    if (subjectFound && examFound) {
      setSelectedExam(examFound.id);
      setSelectedSubjectId(subjectFound.id);
      setFoundSubject(subjectFound);
    } else {
      setFoundSubject(null);
    }
    
    setHasSearched(true);
  }, [subjectSlug, setSelectedExam, setSelectedSubjectId]);

  // Get subject data - prefer context data, fallback to found subject
  const examData = getSelectedExamData();
  const contextSubjectData = getSelectedSubjectData();
  const subjectData = contextSubjectData || foundSubject;

  // Calculate ad positions - MUST be called before any conditional returns (Rules of Hooks)
  const topicAdPosition = useMemo(() => {
    if (!subjectData) return null;
    const placementConfig = adPlacements.topicGrid;
    if (!shouldShowAdForPlacement("topicGrid", subjectData.topics?.length || 0)) {
      return null;
    }
    if (!placementConfig.config) return null;
    return calculateAdPosition(
      subjectData.topics?.length || 0,
      placementConfig.config
    );
  }, [subjectData]);

  const topicAd = useMemo(() => getAdForPlacement("topicGrid"), []);

  // Show loading while searching
  if (!hasSearched) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // If subject not found, show 404
  if (!subjectSlug || !subjectData) {
    return <NotFound />;
  }

  // Safety check for topics
  if (!subjectData.topics || !Array.isArray(subjectData.topics) || subjectData.topics.length === 0) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-muted-foreground">No topics available for this subject</div>
      </div>
    );
  }

  // Generate SEO content - with safety checks
  const subjectName = subjectData?.name || "Subject";
  const seoContent = {
    title: `${subjectName} Topics - ${selectedExam} | RankVault`,
    description: `Explore ${subjectName} topics for ${selectedExam}. Access formulas, reactions, tricks, and constants organized for quick revision.`,
    keywords: `${subjectName}, ${selectedExam} ${subjectName}, ${subjectName} topics, ${selectedExam} preparation, ${subjectName} flashcards, exam revision`,
    canonicalPath: `/${subjectSlug}`,
  };

  // Final safety check
  if (!subjectData || !subjectData.topics) {
    return <NotFound />;
  }

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
                subjectSlug={subjectData.slug}
                isSelected={false}
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

