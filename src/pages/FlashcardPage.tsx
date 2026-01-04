import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { SEOHead } from "@/components/seo/SEOHead";
import { TopicContent } from "@/components/content/TopicContent";
import { useApp } from "@/contexts/AppContext";
import { examsData } from "@/data/content";
import NotFound from "./NotFound";

export default function FlashcardPage() {
  const { subjectSlug, topicSlug } = useParams<{
    subjectSlug: string;
    topicSlug: string;
  }>();
  const navigate = useNavigate();
  const {
    selectedExam,
    setSelectedExam,
    setSelectedSubjectId,
    setSelectedTopicId,
    getSelectedTopicData,
  } = useApp();

  // Find subject and topic by slugs
  useEffect(() => {
    if (!subjectSlug || !topicSlug) return;

    // Search through all exams to find matching subject and topic
    for (const exam of examsData) {
      for (const subject of exam.subjects) {
        if (subject.slug === subjectSlug) {
          const topic = subject.topics.find((t) => t.slug === topicSlug);
          if (topic) {
            // Set the exam, subject, and topic
            setSelectedExam(exam.id);
            setSelectedSubjectId(subject.id);
            setSelectedTopicId(topic.id);
            return;
          }
        }
      }
    }
  }, [subjectSlug, topicSlug, setSelectedExam, setSelectedSubjectId, setSelectedTopicId]);

  const topicData = getSelectedTopicData();

  // If topic not found, show 404
  if (!topicData || !subjectSlug || !topicSlug) {
    return <NotFound />;
  }

  const { topic, subject } = topicData;

  // Generate SEO content
  const seoContent = {
    title: `${topic.name} - ${subject.name} Flashcards | ${selectedExam}`,
    description: `Study ${topic.name} flashcards for ${subject.name} in ${selectedExam}. Access formulas, reactions, tricks, and constants organized for quick revision.`,
    keywords: `${topic.name}, ${subject.name}, ${selectedExam} ${topic.name}, ${selectedExam} flashcards, ${subject.name} ${topic.name}, exam preparation, ${selectedExam} revision`,
    canonicalPath: `/${subjectSlug}/${topicSlug}`,
  };

  return (
    <>
      <SEOHead {...seoContent} />
      <TopicContent />
    </>
  );
}

