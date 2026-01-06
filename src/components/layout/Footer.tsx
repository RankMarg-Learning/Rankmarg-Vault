import { Link } from "react-router-dom";
import { getAdForPlacement, shouldShowAdForPlacement } from "@/config/ads";
import { RankMargAd } from "@/components/ads/RankMargAd";

const footerLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
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

      <div className="container px-4 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-primary shrink-0">
              <img
                src="/logo.png"
                alt="RankVault"
                className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-foreground text-sm sm:text-base">
                RankVault
              </span>
              <span className="text-xs text-muted-foreground">
                Your ultimate revision vault
              </span>
            </div>
          </div>

          {/* Links Section */}
          <nav className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors font-medium px-2 py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright Section */}
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm text-muted-foreground">
              © {new Date().getFullYear()} RankMarg
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
