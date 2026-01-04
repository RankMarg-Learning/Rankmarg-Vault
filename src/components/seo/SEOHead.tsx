import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
}

// Helper function to get or create meta element by name
const getOrCreateMetaByName = (name: string, content: string) => {
  let element = document.querySelector(
    `meta[name="${name}"]`
  ) as HTMLMetaElement;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
  return element;
};

// Helper function to get or create meta element by property
const getOrCreateMetaByProperty = (property: string, content: string) => {
  let element = document.querySelector(
    `meta[property="${property}"]`
  ) as HTMLMetaElement;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
  return element;
};

// Helper function to get or create link element
const getOrCreateLink = (rel: string, href: string) => {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
  return element;
};

export function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
}: SEOHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | RankVault`;
    const baseUrl = window.location.origin;
    const fullUrl = canonicalPath ? `${baseUrl}${canonicalPath}` : baseUrl;

    // Update document title
    document.title = fullTitle;

    // Update meta description
    getOrCreateMetaByName("description", description);

    // Update or create keywords meta
    if (keywords) {
      getOrCreateMetaByName("keywords", keywords);
    }

    // Update author meta
    getOrCreateMetaByName("author", "RankVault");

    // Update robots meta
    getOrCreateMetaByName(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );

    // Update Open Graph tags
    getOrCreateMetaByProperty("og:title", fullTitle);
    getOrCreateMetaByProperty("og:description", description);
    getOrCreateMetaByProperty("og:type", ogType);
    getOrCreateMetaByProperty("og:url", fullUrl);
    getOrCreateMetaByProperty("og:image", ogImage);
    getOrCreateMetaByProperty("og:site_name", "RankVault");
    getOrCreateMetaByProperty("og:locale", "en_US");

    // Update Twitter Card tags
    getOrCreateMetaByName("twitter:card", "summary_large_image");
    getOrCreateMetaByName("twitter:title", fullTitle);
    getOrCreateMetaByName("twitter:description", description);
    getOrCreateMetaByName("twitter:image", ogImage);

    // Update canonical URL
    if (canonicalPath) {
      getOrCreateLink("canonical", fullUrl);
    }

    // Add alternate language links (if needed in future)
    // getOrCreateLink('alternate', `${fullUrl}?lang=hi`, 'hreflang', 'hi');

    return () => {
      // Reset to default on unmount
      document.title = "RankVault - Your Exam Recall Vault";
    };
  }, [title, description, keywords, canonicalPath, ogImage, ogType]);

  return null;
}
