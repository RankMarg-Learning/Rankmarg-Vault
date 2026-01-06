import { SEOHead } from "@/components/seo/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - RankVault"
        description="RankVault Privacy Policy - A RankMarg product. Learn how we collect, use, and protect your personal information. Your privacy is important to us. Read our comprehensive privacy policy for JEE and NEET exam preparation platform."
        keywords="privacy policy, data protection, user privacy, RankVault privacy, RankMarg privacy, JEE NEET privacy, exam preparation privacy, student data protection, educational platform privacy"
        canonicalPath="/privacy-policy"
      />
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-3 sm:px-4">
        <div className="text-center py-4 sm:py-6 px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Introduction</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>
              Welcome to RankVault, a product of RankMarg ("we," "our," or "us"). 
              We are committed to protecting your privacy and ensuring the security 
              of your personal information. This Privacy Policy explains how we 
              collect, use, disclose, and safeguard your information when you use 
              our educational platform for JEE and NEET exam preparation.
            </p>
            <p>
              By using RankVault, you agree to the collection and use of
              information in accordance with this policy. If you do not agree
              with our policies and practices, please do not use our service.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <h3 className="font-semibold text-foreground">
              Personal Information
            </h3>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use our services</li>
              <li>Contact us for support or inquiries</li>
            </ul>

            <h3 className="font-semibold text-foreground mt-4">Usage Data</h3>
            <p>
              We automatically collect certain information when you access and
              use RankVault, including:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Device information (browser type, operating system)</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent on pages</li>
              <li>Search queries and interactions with content</li>
              <li>Saved items and study preferences</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and maintain our educational services</li>
              <li>To personalize your learning experience</li>
              <li>To improve our platform and develop new features</li>
              <li>To analyze usage patterns and optimize content</li>
              <li>To communicate with you about updates and support</li>
              <li>To ensure platform security and prevent fraud</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Storage and Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>
              Your data is primarily stored locally in your browser using
              localStorage. This means:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your saved items and preferences remain on your device</li>
              <li>We do not have access to your locally stored data</li>
              <li>
                You can clear your data at any time through browser settings
              </li>
            </ul>
            <p>
              We implement appropriate technical and organizational measures to
              protect your information against unauthorized access, alteration,
              disclosure, or destruction.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>
              We use cookies and similar tracking technologies to track activity
              on our platform and store certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>
            <p>
              We use Google Analytics to analyze website traffic and user
              behavior. This helps us improve our services and understand how
              students use RankVault for JEE and NEET preparation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Third-Party Services</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>
              Our platform may contain links to third-party websites or
              services. We are not responsible for the privacy practices of
              these external sites. We encourage you to review the privacy
              policies of any third-party services you access.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of certain data collection practices</li>
              <li>Clear your locally stored data through browser settings</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Children's Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>
              RankVault is designed for students preparing for JEE and NEET
              exams. We do not knowingly collect personal information from
              children under 13 years of age. If you are a parent or guardian
              and believe your child has provided us with personal information,
              please contact us.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Changes to This Privacy Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 prose prose-sm max-w-none px-4 sm:px-6">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul className="list-none space-y-2">
              <li>
                Email:{" "}
                <a 
                  href="mailto:support@rankmarg.in" 
                  className="text-primary hover:underline"
                >
                  support@rankmarg.in
                </a>
              </li>
              <li>
                Website:{" "}
                <a 
                  href="https://www.rankmarg.in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.rankmarg.in
                </a>
              </li>
              <li>
                <a href="/contact" className="text-primary hover:underline">
                  Contact Us Page
                </a>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground mt-4">
              RankVault is a product of RankMarg. For more information about 
              RankMarg, visit{" "}
              <a 
                href="https://www.rankmarg.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                www.rankmarg.in
              </a>
              .
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
