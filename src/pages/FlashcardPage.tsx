import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
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
    setSelectedExam,
    setSelectedSubjectId,
    setSelectedTopicId,
  } = useApp();

  // Find subject and topic by slugs directly
  const resolvedData = useMemo(() => {
    if (!subjectSlug || !topicSlug) return null;

    // Search through all exams to find matching subject and topic
    for (const exam of examsData) {
      for (const subject of exam.subjects) {
        if (subject.slug === subjectSlug) {
          const topic = subject.topics.find((t) => t.slug === topicSlug);
          if (topic) {
            return { exam, subject, topic };
          }
        }
      }
    }
    return null;
  }, [subjectSlug, topicSlug]);

  // Sync context with URL
  useEffect(() => {
    if (resolvedData) {
      const { exam, subject, topic } = resolvedData;
      setSelectedExam(exam.id);
      setSelectedSubjectId(subject.id);
      setSelectedTopicId(topic.id);
    }
  }, [resolvedData, setSelectedExam, setSelectedSubjectId, setSelectedTopicId]);

  // If topic not found, show 404
  if (!resolvedData || !subjectSlug || !topicSlug) {
    return <NotFound />;
  }

  const { topic, subject, exam } = resolvedData;

  // Generate SEO content
  const seoContent = {
    title: `${topic.name} - ${subject.name} Flashcards | ${exam.id}`,
    description: `Study ${topic.name} flashcards for ${subject.name} in ${exam.id}. Access formulas, reactions, tricks, and constants organized for quick revision.`,
    keywords: `${topic.name}, ${subject.name}, ${exam.id} ${topic.name}, ${exam.id} flashcards, ${subject.name} ${topic.name}, exam preparation, ${exam.id} revision`,
    canonicalPath: `/${subjectSlug}/${topicSlug}`,
  };

  return (
    <>
      <SEOHead {...seoContent} />
      <TopicContent key={topic.id} topic={topic} subject={subject} examId={exam.id} />
    </>
  );
}

