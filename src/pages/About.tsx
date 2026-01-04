import { SEOHead } from "@/components/seo/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Trophy, Users, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Comprehensive Content",
    description:
      "Access thousands of formulas, reactions, and tricks organized by exam, subject, and topic for JEE and NEET preparation.",
  },
  {
    icon: Target,
    title: "Exam-Focused",
    description:
      "Content prioritized by exam importance and frequency, helping you focus on what matters most for JEE and NEET success.",
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description:
      "Save important items and track your revision progress locally, ensuring you never lose your study momentum.",
  },
  {
    icon: Zap,
    title: "Quick Revision",
    description:
      "Fast access to formulas, reactions, and constants when you need them most - perfect for last-minute revision before exams.",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description:
      "Built by students, for students. We understand the challenges of JEE and NEET preparation and designed RankVault accordingly.",
  },
  {
    icon: Heart,
    title: "Free Forever",
    description:
      "Quality education should be accessible to all. RankVault remains free to help every student achieve their dreams.",
  },
];

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us - RankVault | JEE & NEET Preparation Platform"
        description="Learn about RankVault - A RankMarg product. Your ultimate recall and revision vault for JEE and NEET preparation. Discover our mission to help students excel in competitive exams with organized formulas, reactions, and tricks."
        keywords="about RankVault, RankMarg, JEE preparation platform, NEET preparation tools, exam revision app, IIT JEE study resources, NEET UG formulas, competitive exam preparation, student learning platform"
        canonicalPath="/about"
      />
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center py-8">
          <div className="flex justify-center mb-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <BookOpen className="h-10 w-10" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            About RankVault
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your ultimate recall and revision vault for JEE and NEET
            preparation. We're on a mission to help students excel in
            competitive exams.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none">
            <p>
              RankVault was created with a simple yet powerful mission: to make
              exam preparation more accessible, organized, and effective for
              students preparing for JEE (Joint Entrance Examination) and NEET
              (National Eligibility cum Entrance Test).
            </p>
            <p>
              We understand the challenges students face when preparing for
              these highly competitive exams. With vast syllabi covering
              Physics, Chemistry, Mathematics, and Biology, students often
              struggle to organize and quickly access the formulas, reactions,
              and tricks they need during revision.
            </p>
            <p>
              That's where RankVault comes in. We've created a comprehensive
              platform that organizes all essential content by exam, subject,
              and topic, making it easy for students to find what they need when
              they need it most.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="space-y-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why RankVault?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none">
            <h3 className="font-semibold text-foreground">
              Organized by Importance
            </h3>
            <p>
              Every piece of content in RankVault is tagged by importance level
              (High, Medium, Low) and exam frequency, helping you prioritize
              your revision based on what's most likely to appear in JEE and
              NEET exams.
            </p>

            <h3 className="font-semibold text-foreground mt-4">Quick Access</h3>
            <p>
              Whether you're doing last-minute revision before an exam or need
              to quickly look up a formula during practice, RankVault provides
              instant access to all essential content without the hassle of
              searching through multiple books or notes.
            </p>

            <h3 className="font-semibold text-foreground mt-4">
              Local Storage
            </h3>
            <p>
              Your saved items and preferences are stored locally on your
              device, ensuring your data remains private and accessible even
              without an internet connection.
            </p>

            <h3 className="font-semibold text-foreground mt-4">
              Free and Accessible
            </h3>
            <p>
              We believe quality education should be accessible to everyone.
              RankVault is completely free to use, with no hidden costs or
              premium features. Our goal is to help as many students as possible
              achieve their dreams of getting into top engineering and medical
              colleges.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Commitment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none">
            <p>At RankVault, we're committed to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Continuously improving our platform based on student feedback
              </li>
              <li>
                Keeping all content accurate and up-to-date with current exam
                patterns
              </li>
              <li>Maintaining a free, accessible platform for all students</li>
              <li>Respecting your privacy and data security</li>
              <li>
                Providing the best possible learning experience for JEE and NEET
                aspirants
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About RankMarg</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none">
            <p>
              RankVault is a product of RankMarg, a company dedicated to providing 
              quality educational resources for students preparing for competitive exams. 
              We're committed to making exam preparation accessible and effective for all students.
            </p>
            <p>
              Visit{" "}
              <a 
                href="https://www.rankmarg.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.rankmarg.in
              </a>
              {" "}to explore more of our educational offerings.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Join Our Community</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none">
            <p>
              RankVault is more than just a study tool - it's a community of
              dedicated students working towards their goals. Whether you're
              preparing for JEE Main, JEE Advanced, or NEET, we're here to
              support your journey.
            </p>
            <p>
              Have questions, suggestions, or feedback? We'd love to hear from
              you! Email us at{" "}
              <a 
                href="mailto:support@rankmarg.in" 
                className="text-primary hover:underline"
              >
                support@rankmarg.in
              </a>
              {" "}or{" "}
              <a href="/contact" className="text-primary hover:underline">
                visit our contact page
              </a>
              {" "}to share your thoughts.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
