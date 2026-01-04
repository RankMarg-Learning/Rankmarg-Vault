// Main content file - imports and combines all subject data
// Re-export types for backward compatibility
export * from "./types";

// Import subject configurations
import { physicsSubject } from "./subjects/physics";
import { chemistrySubject } from "./subjects/chemistry";
import { mathematicsSubject } from "./subjects/mathematics";
import { biologySubject } from "./subjects/biology";

// Import subject content
import { physicsContent } from "./subjects/physics";
import { chemistryContent } from "./subjects/chemistry";
import { mathematicsContent } from "./subjects/mathematics";
import { biologyContent } from "./subjects/biology";

import type { ExamConfig, ContentType, ContentItem } from "./types";

// Export shared subjects for use in exams
export const sharedPhysicsSubject = physicsSubject;
export const sharedChemistrySubject = chemistrySubject;

// Exam configurations
export const examsData: ExamConfig[] = [
  {
    id: "JEE",
    name: "JEE",
    fullName: "Joint Entrance Examination",
    subjects: [
      sharedPhysicsSubject,
      sharedChemistrySubject,
      mathematicsSubject,
    ],
  },
  {
    id: "NEET",
    name: "NEET",
    fullName: "National Eligibility cum Entrance Test",
    subjects: [sharedPhysicsSubject, sharedChemistrySubject, biologySubject],
  },
];

// Combine all content from all subjects into a single object
export const contentData: Record<string, Record<ContentType, ContentItem[]>> = {
  ...physicsContent,
  ...chemistryContent,
  ...mathematicsContent,
  ...biologyContent,
};

// Get content for a specific topic and type
export const getTopicContent = (
  topicId: string,
  contentType: ContentType
): ContentItem[] => {
  return contentData[topicId]?.[contentType] || [];
};

// Get all content for a topic
export const getAllTopicContent = (
  topicId: string
): Record<ContentType, ContentItem[]> => {
  return (
    contentData[topicId] || {
      formulas: [],
      short_tricks: [],
      reactions: [],
      constants: [],
      exceptions: [],
    }
  );
};
