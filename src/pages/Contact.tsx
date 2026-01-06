import { SEOHead } from "@/components/seo/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MessageSquare, Globe } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Us - RankVault | Get in Touch"
        description="Contact RankMarg for support, feedback, or inquiries about RankVault - our JEE and NEET preparation platform. We're here to help you succeed in your exam preparation journey."
        keywords="contact RankMarg, RankVault support, JEE NEET support, exam preparation help, RankMarg feedback, student support, educational platform contact, JEE preparation queries, NEET study help"
        canonicalPath="/contact"
      />
      <div className="max-w-3xl mx-auto space-y-6 sm:space-y-8 px-3 sm:px-4">
        <div className="text-center py-6 sm:py-8">
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <MessageSquare className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Have questions, feedback, or need support? We'd love to hear from
            you. Reach out to us and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Us
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Send us an email and we'll get back to you within 24-48 hours.
              </p>
              <div className="pt-2">
                <a
                  href="mailto:support@rankmarg.in"
                  className="text-primary hover:underline font-medium text-base"
                >
                  support@rankmarg.in
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5" />
                Visit Our Website
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Learn more about RankMarg and our other educational products.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.rankmarg.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium text-base"
                >
                  www.rankmarg.in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              For quick assistance with:
            </p>
            <ul className="text-sm space-y-2 list-disc pl-5">
              <li>Technical issues or bugs</li>
              <li>Content suggestions or corrections</li>
              <li>Feature requests</li>
              <li>General inquiries about RankVault</li>
            </ul>
            <p className="text-sm text-muted-foreground pt-2">
              Simply email us at{" "}
              <a
                href="mailto:support@rankmarg.in"
                className="text-primary hover:underline font-medium"
              >
                support@rankmarg.in
              </a>{" "}
              and we'll help you out!
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>About RankMarg</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              RankVault is a product of RankMarg, dedicated to providing quality
              educational resources for students preparing for competitive exams
              like JEE and NEET. We're committed to making exam preparation
              accessible and effective for all students.
            </p>
            <p className="text-sm text-muted-foreground">
              Visit{" "}
              <a
                href="https://www.rankmarg.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                www.rankmarg.in
              </a>{" "}
              to explore more of our educational offerings.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Is RankVault really free?
              </h3>
              <p className="text-sm text-muted-foreground">
                Yes! RankVault is completely free to use. We believe quality
                education should be accessible to all students preparing for JEE
                and NEET.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                How often is the content updated?
              </h3>
              <p className="text-sm text-muted-foreground">
                We regularly update our content to ensure accuracy and alignment
                with current JEE and NEET exam patterns. If you notice any
                outdated information, please let us know!
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Can I suggest new content or features?
              </h3>
              <p className="text-sm text-muted-foreground">
                Absolutely! We love hearing from students. Email us at{" "}
                <a
                  href="mailto:support@rankmarg.in"
                  className="text-primary hover:underline font-medium"
                >
                  support@rankmarg.in
                </a>{" "}
                with your suggestions.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
