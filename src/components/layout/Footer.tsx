import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAdForPlacement, shouldShowAdForPlacement } from "@/config/ads";
import { RankMargAd } from "@/components/ads/RankMargAd";

const footerLinks = {
  resources: [
    { label: "Articles", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Help & Support", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
  company: [
    { label: "About Us", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Terms and conditions", href: "#" },
  ],
  connect: [
    { label: "Start Free Trial", href: "#" },
    { label: "WhatsApp Support", href: "#" },
    { label: "YouTube Channel", href: "#" },
  ],
};

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
          {/* Resources Column */}
          <div className="hidden">
            <h3 className="font-semibold text-foreground mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="hidden">
            <h3 className="font-semibold text-foreground mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div className="hidden">
            <h3 className="font-semibold text-foreground mb-3">Connect</h3>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
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
          <AccordionItem value="resources">
            <AccordionTrigger className="text-sm font-medium">
              Resources
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="company">
            <AccordionTrigger className="text-sm font-medium">
              Company
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="connect">
            <AccordionTrigger className="text-sm font-medium">
              Connect
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {footerLinks.connect.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="px-4 py-6 border-t border-border flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-foreground">RankVault</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
