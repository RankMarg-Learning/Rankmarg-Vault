import { Heart, BookOpen } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAdForPlacement, shouldShowAdForPlacement } from "@/config/ads";
import { RankMargAd } from "@/components/ads/RankMargAd";

const footerSections = [
  {
    title: "About RankVault",
    content:
      "RankVault is a structured recall and revision vault designed for Indian competitive exam students. We help you organize formulas, reactions, and important concepts for quick revision.",
  },
  {
    title: "Disclaimer",
    content:
      "RankVault is an educational utility tool. The content provided is for learning and revision purposes only. We recommend verifying information from official textbooks and resources.",
  },
  {
    title: "Privacy Policy",
    content:
      "We respect your privacy. All your saved items and preferences are stored locally on your device. We do not collect or share any personal data.",
  },
  {
    title: "Contact",
    content:
      "Have feedback or suggestions? We'd love to hear from you. Help us make RankVault better for students across India.",
  },
];

export function Footer() {
  const showFooterAd = shouldShowAdForPlacement("footer");
  const footerAd = showFooterAd ? getAdForPlacement("footer") : null;

  return (
    <footer className="border-t border-border bg-card mt-auto">
      {/* Footer Ad Banner */}
      {footerAd && (
        <div className="container px-4 py-4 border-b border-border">
          <RankMargAd ad={footerAd} />
        </div>
      )}

      {/* Desktop Footer */}
      <div className="hidden md:block container py-8 px-4">
        <div className="grid grid-cols-4 gap-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-3">
                {section.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <img src="/logo.png" alt="RankVault" className="h-7 w-7" />
            </div>
            <span className="font-semibold text-foreground">RankVault</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} RankMarg. All rights reserved.
          </p>
        </div>
      </div>

      {/* Mobile Footer (Accordion) */}
      <div className="md:hidden">
        <Accordion type="single" collapsible className="px-4">
          {footerSections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`}>
              <AccordionTrigger className="text-sm font-medium">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {section.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="px-4 py-6 border-t border-border flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">RankVault</span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with{" "}
            <Heart className="h-4 w-4 text-destructive fill-destructive" /> for
            Indian Students 🇮🇳
          </p>
        </div>
      </div>
    </footer>
  );
}
