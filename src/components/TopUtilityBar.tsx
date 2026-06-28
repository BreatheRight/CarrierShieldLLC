import { useState } from "react";
import { Search, LogIn, Phone, Shield, X, Bell } from "lucide-react";

interface TopUtilityBarProps {
  onOpenDemo: () => void;
}

export default function TopUtilityBar({ onOpenDemo }: TopUtilityBarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="relative z-40 bg-[#020813] border-b border-blue-950/40 text-xs text-slate-300">
      {/* Alert banner */}
      {showNotification && (
        <div className="bg-[#1e1b4b] border-b border-blue-900/30 py-1.5 px-4 text-center flex items-center justify-center gap-2">
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-400 uppercase tracking-widest bg-sky-950 px-1.5 py-0.5 rounded border border-sky-900/40">
            Compliance Alert
          </span>
          <span className="text-[11px] text-slate-200">
            New 2026 DOT Safety Auditing changes now active. Is your fleet audit-ready? 
          </span>
          <button 
            onClick={onOpenDemo}
            className="text-[11px] text-emerald-400 font-bold hover:underline ml-1"
          >
            Check status of your drivers &rarr;
          </button>
          <button 
            onClick={() => setShowNotification(false)}
            className="text-slate-400 hover:text-white ml-auto flex-shrink-0"
            title="Dismiss"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-9 flex items-center justify-between gap-4 font-sans">
        {/* Support & Direct Line */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+18005550199" 
            className="flex items-center gap-1.5 font-medium hover:text-white transition-colors"
          >
            <Phone size={11} className="text-sky-400" />
            <span>24/7 DOT Support: <span className="font-mono font-bold text-slate-200 hover:text-[#38bdf8]">(800) 555-0199</span></span>
          </a>
          <span className="hidden sm:inline-block w-px h-3 bg-slate-800" />
          <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
            <Shield size={11} className="text-emerald-400" />
            <span>FMCSA Licensed Provider</span>
          </div>
        </div>

        {/* Global Operations Controls & Search */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Quick Search */}
          <div className="relative hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search assets, audits, forms..."
              className="w-48 bg-slate-900/60 rounded px-2.5 py-1 pl-7 text-[11px] border border-slate-800 focus:border-blue-500 focus:outline-none focus:w-60 transition-all text-white placeholder-slate-500"
            />
            <Search size={11} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-500" />
          </div>

          {/* Quick Client Portal */}
          <a
            href="#portal-login"
            onClick={(e) => {
              e.preventDefault();
              onOpenDemo(); // Standard interactive CTA placeholder
            }}
            className="flex items-center gap-1.5 hover:text-white font-medium transition-colors cursor-pointer"
          >
            <LogIn size={11} className="text-slate-400" />
            <span>Client Login</span>
          </a>
        </div>
      </div>
    </div>
  );
}
