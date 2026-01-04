import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: {
        page_path?: string;
        [key: string]: any;
      }
    ) => void;
    dataLayer?: any[];
  }
}

export function useGoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Track page view on route change
    if (window.gtag) {
      window.gtag("config", "G-MX944EDRN4", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
}

