// Type definitions for RankVault content structure

export type ExamType = "JEE" | "NEET";

export type ContentType =
  | "formulas"
  | "short_tricks"
  | "reactions"
  | "constants"
  | "exceptions";

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  importance: "high" | "medium" | "low";
  examFrequency: string;
}

export interface TopicConfig {
  id: string;
  name: string;
  slug: string;
  allowedTypes: ContentType[];
  icon: string;
}

export interface SubjectConfig {
  id: string;
  name: string;
  slug: string;
  icon: string;
  topics: TopicConfig[];
}

export interface ExamConfig {
  id: ExamType;
  name: string;
  fullName: string;
  subjects: SubjectConfig[];
}

export const contentTypeLabels: Record<
  ContentType,
  { label: string; icon: string; color: string }
> = {
  formulas: {
    label: "Formulas",
    icon: "F",
    color: "bg-primary text-primary-foreground",
  },
  short_tricks: {
    label: "Short Tricks",
    icon: "T",
    color: "bg-accent text-accent-foreground",
  },
  reactions: {
    label: "Reactions",
    icon: "R",
    color: "bg-warning text-warning-foreground",
  },
  constants: {
    label: "Constants",
    icon: "C",
    color: "bg-info text-info-foreground",
  },
  exceptions: {
    label: "Exceptions",
    icon: "E",
    color: "bg-destructive text-destructive-foreground",
  },
};

