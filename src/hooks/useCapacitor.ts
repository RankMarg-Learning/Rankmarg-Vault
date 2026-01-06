import { useState, useEffect } from "react";

interface CapacitorWindow extends Window {
  Capacitor?: {
    isNativePlatform?: () => boolean;
  };
  CapacitorPlugins?: unknown;
  opera?: string;
}

/**
 * Hook to detect if the app is running in a Capacitor environment
 * @returns true if running in Capacitor (native app), false otherwise
 */
export function useCapacitor() {
  const [isCapacitor, setIsCapacitor] = useState(false);

  useEffect(() => {
    // Check for Capacitor in multiple ways
    const checkCapacitor = () => {
      if (typeof window === "undefined") return false;

      const capWindow = window as CapacitorWindow;

      // Method 1: Check for window.Capacitor
      if (capWindow.Capacitor) {
        // Method 2: Check for Capacitor.isNativePlatform() if available
        if (typeof capWindow.Capacitor.isNativePlatform === "function") {
          return capWindow.Capacitor.isNativePlatform();
        }
        // If Capacitor exists but isNativePlatform is not available, assume native
        return true;
      }

      // Method 3: Check for capacitor:// protocol or file:// protocol (common in native apps)
      const protocol = window.location.protocol;
      if (protocol === "capacitor:" || protocol === "file:") {
        return true;
      }

      // Method 4: Check user agent for native app indicators
      const userAgent =
        navigator.userAgent || navigator.vendor || capWindow.opera || "";
      if (/Capacitor/i.test(userAgent)) {
        return true;
      }

      // Method 5: Check for Capacitor plugins (if any are loaded)
      if (capWindow.CapacitorPlugins) {
        return true;
      }

      return false;
    };

    setIsCapacitor(checkCapacitor());
  }, []);

  return isCapacitor;
}
