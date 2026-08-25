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
  const [showCustomize, setShowCustomize] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    // Check if user has already made a consent choice
    const savedConsent = localStorage.getItem(STORAGE_KEY);
    if (!savedConsent) {
      // Short delay for natural page load appearance
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  // Expose a global event listener so footer or other buttons can reopen cookie settings
  useEffect(() => {
    const handleOpenConsent = () => {
      setIsVisible(true);
      setShowCustomize(true);
    };

    window.addEventListener("open-cookie-preferences", handleOpenConsent);
    return () => window.removeEventListener("open-cookie-preferences", handleOpenConsent);
  }, []);

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
    setShowCustomize(false);
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
    <div 
      id="cookie-consent-banner"
      className="fixed bottom-0 inset-x-0 z-50 p-3 sm:p-4 md:p-6 pointer-events-none animate-in fade-in slide-in-from-bottom-6 duration-300"
      role="region"
      aria-label="Cookie and Privacy Consent"
    >
      <div className="max-w-4xl mx-auto bg-[#071426] border border-blue-900/60 rounded-xl shadow-2xl shadow-black/80 p-5 md:p-6 pointer-events-auto backdrop-blur-md">
        {!showCustomize ? (
          /* Simple Standard Notice */
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex-shrink-0 mt-0.5">
                <Cookie size={20} />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-white">Privacy &amp; Cookie Preferences</h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase bg-emerald-500/10 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                    <Lock size={10} /> Secure
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fleet Integra LLC uses essential cookies for secure portal access, fraud prevention, and session integrity. We also utilize optional cookies to analyze site traffic and improve regulatory compliance workflows. Read our{" "}
                  <Link to="/privacy-policy" className="text-sky-400 hover:underline font-medium">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link to="/terms-of-service" className="text-sky-400 hover:underline font-medium">
                    Terms of Service
                  </Link>.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto justify-end flex-shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
              <button
                type="button"
                id="cookie-customize-btn"
                onClick={() => setShowCustomize(true)}
                className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
              >
                <Settings2 size={13} />
                <span>Customize</span>
              </button>

              <button
                type="button"
                id="cookie-essential-btn"
                onClick={handleAcceptEssential}
                className="px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                Essential Only
              </button>

              <button
                type="button"
                id="cookie-accept-all-btn"
                onClick={handleAcceptAll}
                className="px-4 py-2 text-xs font-semibold text-[#030d1b] bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          /* Detailed Minimal Customization View */
          <div className="space-y-5 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Shield size={18} className="text-sky-400" />
                <h3 className="text-sm font-semibold text-white">Manage Cookie Preferences</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-slate-400 hover:text-slate-200 p-1"
                aria-label="Close preferences"
              >
                <X size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-xs">
              {/* Essential Cookies */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="font-semibold text-white">Strictly Necessary</span>
                    <span className="text-[10px] font-mono bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded border border-sky-500/20">Required</span>
                  </div>
                  <p className="text-slate-400 leading-snug">
                    Essential for secure authentication, token routing, payment gateway verification, and fraud prevention.
                  </p>
                </div>
                <div className="flex items-center text-sky-400 self-end">
                  <Check size={16} />
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="font-semibold text-white">Analytics &amp; Diagnostics</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={analyticsEnabled}
                        onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-sky-500"></div>
                    </label>
                  </div>
                  <p className="text-slate-400 leading-snug">
                    Collects aggregated, de-identified diagnostics to measure page loading speeds and technical reliability.
                  </p>
                </div>
              </div>

              {/* Marketing / Attribution Cookies */}
              <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800 flex flex-col justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-1.5">
                    <span className="font-semibold text-white">Marketing &amp; Attribution</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={marketingEnabled}
                        onChange={(e) => setMarketingEnabled(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-sky-500"></div>
                    </label>
                  </div>
                  <p className="text-slate-400 leading-snug">
                    Helps measure campaign efficacy. Fleet Integra does not sell personal data for monetary consideration.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setShowCustomize(false)}
                className="text-xs text-slate-400 hover:text-white transition-colors"
              >
                &larr; Back
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleAcceptEssential}
                  className="px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 border border-slate-700 rounded-lg transition-colors"
                >
                  Essential Only
                </button>
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="px-4 py-1.5 text-xs font-semibold text-[#030d1b] bg-sky-400 hover:bg-sky-300 rounded-lg shadow-sm transition-all"
                >
                  Save Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
