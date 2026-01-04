import { BookOpen, Sparkles, Trophy, Target } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useApp } from '@/contexts/AppContext';
import { TopicCard } from '@/components/content/TopicCard';
import { TopicContent } from '@/components/content/TopicContent';

const features = [
  {
    icon: BookOpen,
    title: 'Structured Learning',
    description: 'Content organized by exam, subject, and topic for easy navigation',
  },
  {
    icon: Sparkles,
    title: 'Quick Recall',
    description: 'Formulas, tricks, and reactions at your fingertips',
  },
  {
    icon: Target,
    title: 'Exam Focused',
    description: 'Content prioritized by exam importance and frequency',
  },
  {
    icon: Trophy,
    title: 'Track Progress',
    description: 'Save items and track your revision progress locally',
  },
];

export default function Index() {
  const {
    selectedExam,
    selectedSubjectId,
    selectedTopicId,
    setSelectedTopicId,
    getSelectedExamData,
    getSelectedSubjectData,
  } = useApp();

  const examData = getSelectedExamData();
  const subjectData = getSelectedSubjectData();

  // If a topic is selected, show the topic content
  if (selectedTopicId) {
    return <TopicContent />;
  }

  // If a subject is selected, show topics
  if (selectedSubjectId && subjectData) {
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-muted-foreground mb-1">
            {selectedExam} → {subjectData.name}
          </p>
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="text-3xl">{subjectData.icon}</span>
            {subjectData.name} Topics
          </h1>
          <p className="text-muted-foreground mt-2">
            Select a topic to explore formulas, reactions, and more
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {subjectData.topics.map((topic) => (
            <TopicCard
              key={topic.id}
              topic={topic}
              isSelected={false}
              onClick={() => setSelectedTopicId(topic.id)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default: Show welcome screen with all subjects
  return (
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
          Your ultimate recall and revision vault for {selectedExam}. 
          Access formulas, reactions, and tricks organized for quick revision.
        </p>
      </div>

      {/* Features */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Subjects Grid */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">
          {selectedExam} Subjects
        </h2>
        <p className="text-muted-foreground mb-6">
          Select a subject from the sidebar or below to start exploring
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {examData?.subjects.map((subject) => (
            <Card
              key={subject.id}
              className="cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
              onClick={() => {
                // Trigger subject selection in sidebar
                const event = new CustomEvent('select-subject', { detail: subject.id });
                window.dispatchEvent(event);
              }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                    {subject.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{subject.name}</CardTitle>
                    <CardDescription>
                      {subject.topics.length} topics
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
