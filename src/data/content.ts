export * from "./types";

import { physicsSubject } from "./subjects/physics";
import { chemistrySubject } from "./subjects/chemistry";
import { mathematicsSubject } from "./subjects/mathematics";
import { biologySubject } from "./subjects/biology";

import { physicsContent } from "./subjects/physics";
import { chemistryContent } from "./subjects/chemistry";
import { mathematicsContent } from "./subjects/mathematics";
import { biologyContent } from "./subjects/biology";

import type { ExamConfig, ContentType, ContentItem } from "./types";

export const sharedPhysicsSubject = physicsSubject;
export const sharedChemistrySubject = chemistrySubject;

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

export const contentData: Record<string, Record<ContentType, ContentItem[]>> = {
  ...physicsContent,
  ...chemistryContent,
  ...mathematicsContent,
  ...biologyContent,
};

export const getTopicContent = (
  topicId: string,
  contentType: ContentType
): ContentItem[] => {
  return contentData[topicId]?.[contentType] || [];
};

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
