import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Cookie, Check, X, Settings2, Lock } from "lucide-react";

interface CookiePreferences {
  essential: boolean; // Always true (security, anti-fraud, session routing)
  analytics: boolean; // Site telemetry & performance
  marketing: boolean; // Campaign attribution & outreach
  timestamp: string;
}

const STORAGE_KEY = "fleet_integra_cookie_consent_v1";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      // Check if user temporarily minimized during this session
      const sessionMinimized = sessionStorage.getItem("fi_cookie_banner_minimized");
      if (sessionMinimized === "true") {
        setIsMinimized(true);
        setIsVisible(true);
      } else {
        // Short delay for natural page load appearance
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Expose a global event listener so footer or other buttons can reopen cookie settings
  useEffect(() => {
    const handleOpenConsent = () => {
      setIsVisible(true);
      setIsMinimized(false);
      setShowCustomize(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenConsent);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenConsent);
  }, []);

  const handleDismissOrMinimize = () => {
    setIsMinimized(true);
    sessionStorage.setItem("fi_cookie_banner_minimized", "true");
  };

  const handleRestoreFromMinimized = () => {
    setIsMinimized(false);
    sessionStorage.removeItem("fi_cookie_banner_minimized");
  };

  const saveConsent = (preferences: CookiePreferences) => {
    // 1. Save to LocalStorage for client-side persistence
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

    // 2. Set an explicit standard HTTP cookie for edge/proxy servers (Vercel / Cloudflare)
    // SameSite=Lax; Secure; 1-year expiration
    const maxAge = 365 * 24 * 60 * 60;
    const cookieValue = encodeURIComponent(JSON.stringify({
      essential: preferences.essential,
      analytics: preferences.analytics,
      marketing: preferences.marketing
    }));
    document.cookie = `fi_cookie_consent=${cookieValue}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`;

    setIsVisible(false);
    setIsMinimized(false);
    setShowCustomize(false);
    sessionStorage.removeItem("fi_cookie_banner_minimized");
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleAcceptEssential = () => {
    saveConsent({
      essential: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleSaveCustom = () => {
    saveConsent({
      essential: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
      timestamp: new Date().toISOString(),
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Minimized floating button when user dismisses or minimizes the strip */}
      {isMinimized && (
        <button
          type="button"
          id="cookie-minimized-trigger"
          onClick={handleRestoreFromMinimized}
          aria-label="Open Cookie & Privacy Preferences"
          title="Open Cookie Preferences"
          className="fixed bottom-3 left-3 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#071426]/90 hover:bg-[#0b203c] border border-blue-900/60 hover:border-sky-400/60 shadow-lg shadow-black/70 text-slate-300 hover:text-white text-xs font-medium backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group"
        >
          <Cookie size={13} className="text-sky-400 group-hover:text-sky-300" />
          <span className="text-[11px]">Cookie Preferences</span>
        </button>
      )}

      {/* Ultra-thin Single-Line Bottom Bar (Strictly under 48px vertical height) */}
      {!isMinimized && !showCustomize && (
        <div 
          id="cookie-consent-banner"
          className="fixed bottom-0 inset-x-0 z-50 bg-[#040c1a]/95 border-t border-blue-900/60 backdrop-blur-md px-3 sm:px-6 py-2 shadow-2xl flex items-center justify-between min-h-[40px] max-h-[46px] overflow-hidden"
          role="region"
          aria-label="Cookie and Privacy Consent"
        >
          {/* Left notice text */}
          <div className="flex items-center gap-2 min-w-0 pr-2">
            <Cookie size={14} className="text-sky-400 flex-shrink-0 hidden sm:block" />
            <p className="text-[11px] sm:text-xs text-slate-300 truncate">
              <span>We use essential cookies to operate this platform.</span>{" "}
              <Link to="/privacy-policy" className="text-sky-400 hover:underline hidden md:inline ml-1">
                Privacy Policy
              </Link>
            </p>
          </div>

          {/* Right action controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            <button
              type="button"
              id="cookie-customize-btn"
              onClick={() => setShowCustomize(true)}
              className="px-2 sm:px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded border border-slate-700 transition-colors whitespace-nowrap"
            >
              Preferences
            </button>

            <button
              type="button"
              id="cookie-accept-all-btn"
              onClick={handleAcceptAll}
              className="px-2.5 sm:px-3 py-1 text-[11px] font-semibold text-[#030d1b] bg-sky-400 hover:bg-sky-300 rounded shadow-sm transition-all whitespace-nowrap"
            >
              Accept
            </button>

            <button
              type="button"
              id="cookie-dismiss-x"
              onClick={handleDismissOrMinimize}
              className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors ml-0.5"
              aria-label="Close and minimize cookie notice"
              title="Close and minimize"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Preferences Customization Modal Dialog */}
      {showCustomize && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs">
          <div className="bg-[#071426] border border-blue-900/60 rounded-xl shadow-2xl p-5 max-w-md w-full space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-sky-400" />
                <h3 className="text-xs font-semibold text-white">Manage Cookie Preferences</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-slate-400 hover:text-slate-200 p-1 -mr-1"
                aria-label="Close preferences"
              >
                <X size={15} />
              </button>
            </div>

            <div className="space-y-2.5 text-xs max-h-60 overflow-y-auto pr-1">
              {/* Essential Cookies */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between gap-1.5">
                  <span className="font-semibold text-white text-xs">Strictly Necessary</span>
                  <span className="text-[9px] font-mono bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded border border-sky-500/20">Required</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Essential for secure authentication, token routing, and fraud prevention.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between gap-1.5">
                  <span className="font-semibold text-white text-xs">Analytics &amp; Diagnostics</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-7 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-sky-500"></div>
                  </label>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Collects aggregated, de-identified diagnostics to measure page performance.
                </p>
              </div>

              {/* Marketing / Attribution Cookies */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between gap-1.5">
                  <span className="font-semibold text-white text-xs">Marketing &amp; Attribution</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={marketingEnabled}
                      onChange={(e) => setMarketingEnabled(e.target.checked)}
                      className="sr-only peer"
                    />
                    <div className="w-7 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-sky-500"></div>
                  </label>
                </div>
                <p className="text-[11px] text-slate-400 leading-snug">
                  Measures campaign effectiveness. We never sell personal data.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                Cancel
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAcceptEssential}
                  className="px-2.5 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  Essential Only
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="px-3 py-1.5 text-xs font-semibold text-[#030d1b] bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-all"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
