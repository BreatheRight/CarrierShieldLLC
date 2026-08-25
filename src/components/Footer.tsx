import { Mail, Phone, MapPin, ShieldAlert, HeartHandshake, FileText, Facebook, Instagram, Linkedin, Shield } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import FleetIntegraLogo from "./FleetIntegraLogo";
import LegalModal, { LegalDocType } from "./LegalModal";

export default function Footer({ onOpenDemo }: { onOpenDemo: () => void }) {
  const [newsEmail, setNewsEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [legalDoc, setLegalDoc] = useState<LegalDocType>(null);

  const handleNewsSubmit = (e: import("react").FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setNewsEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  const navLinks = [
    {
      title: "Navigation",
      items: [
        { label: "Home", href: "/" },
        { label: "Why Us?", href: "/#why-us" },
        { label: "Resources", href: "/resources" },
        { label: "Pricing & Plans", href: "/pricing" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Services",
      items: [
        { label: "All Services", href: "/services" },
        { label: "Remote Safety & Compliance", href: "/remote-safety-compliance" },
        { label: "Permits & Registration", href: "/contact" },
        { label: "New Carrier Launch", href: "/contact" },
      ],
    },
    {
      title: "Compliance & Safety",
      items: [
        { label: "DQ File Checklist (CFR 391)", href: "/resources" },
        { label: "ELD Mandate Guide", href: "/resources" },
        { label: "Clearinghouse 101 Manual", href: "/resources" },
        { label: "Request Free Audit Review", href: "#demo" },
      ],
    },
  ];

  return (
    <>
      <footer className="bg-[#020712] border-t border-blue-950/60 pb-12 pt-16 text-slate-400 font-sans">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          {/* Top Grid section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            
            {/* Logo brand pitch */}
            <div className="lg:col-span-4 space-y-4">
              <Link to="/" className="inline-block group">
                <FleetIntegraLogo size="md" />
              </Link>
              
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Your dedicated trucking partner, specializing in outsourced safety infrastructure, FMCSA compliance, CSA risk mitigation, audit defense, and fleet operational support for growing motor carriers across the United States.
              </p>

              <div className="space-y-2.5 pt-2 text-xs">
                <div className="flex items-center gap-2">
                  <Phone size={13} className="text-sky-400 flex-shrink-0" />
                  <span className="text-slate-300">
                    <a href="tel:+12012937774" className="hover:text-white transition-colors">
                      +1 (201) 293-7774
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={13} className="text-sky-400 flex-shrink-0" />
                  <span className="text-slate-300">
                    <a href="mailto:sales@fleetintegra.com" className="hover:text-white transition-colors">
                      sales@fleetintegra.com
                    </a>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-sky-400 flex-shrink-0" />
                  <span className="text-slate-300">1101 Avenue U, Brooklyn, NY 11235</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-3">
                <a href="#" aria-label="Facebook" className="text-slate-500 hover:text-white transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" aria-label="Instagram" className="text-slate-500 hover:text-white transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" aria-label="LinkedIn" className="text-slate-500 hover:text-white transition-colors">
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

            {/* Links columns */}
            <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-6">
              {navLinks.map((col) => (
                <div key={col.title} className="space-y-3">
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                    {col.title}
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {col.items.map((link) => (
                      <li key={link.label}>
                        {link.href === "#demo" ? (
                          <button
                            type="button"
                            onClick={onOpenDemo}
                            className="hover:text-white transition-colors text-left"
                          >
                            {link.label}
                          </button>
                        ) : link.href.startsWith("/") ? (
                          <Link 
                            to={link.href}
                            className="hover:text-white transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a 
                            href={link.href} 
                            className="hover:text-white transition-colors"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Form Alert signup */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Subscribe to FMCSA Regulatory Alerts
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We compile and send summaries of FMCSA, DOT, and ELD changes weekly. Stay ahead of audits.
              </p>

              <form onSubmit={handleNewsSubmit} className="space-y-2">
                <input
                  type="email"
                  required
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  placeholder="safety-director@carrier.com"
                  className="w-full rounded bg-[#030d1b] border border-blue-950 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="w-full rounded bg-sky-400 hover:bg-sky-300 text-[#030d1b] font-bold text-xs py-2 transition"
                >
                  {success ? "Subscribed Successfully!" : "Yes, Send Compliance Alerts"}
                </button>
              </form>
            </div>

          </div>

          {/* Credentials / FMCSA license footer section */}
          <div className="border-t border-blue-950/40 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-[10px] text-slate-500">
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1">
                <ShieldAlert size={12} className="text-emerald-400" />
                <span>FMCSA Registered Compliance Partner</span>
              </span>
              <span className="w-px h-3 bg-slate-800 hidden md:block" />
              <span className="flex items-center gap-1">
                <HeartHandshake size={12} className="text-[#38bdf8]" />
                <span>Clearinghouse TPA Service Provider</span>
              </span>
              <span className="w-px h-3 bg-slate-800 hidden md:block" />
              <span className="flex items-center gap-1">
                <FileText size={12} className="text-indigo-400" />
                <span>Encrypted Carrier Data Storage</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/privacy-policy"
                className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline"
              >
                Terms of Service
              </Link>
              <button
                type="button"
                onClick={() => {
                  window.dispatchEvent(new Event("open-cookie-preferences"));
                }}
                className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline"
              >
                Cookie Preferences
              </button>
              <button
                type="button"
                onClick={() => setLegalDoc("cookies")}
                className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline"
              >
                Cookie Policy
              </button>
              <button
                type="button"
                onClick={() => setLegalDoc("accessibility")}
                className="hover:text-slate-300 transition-colors underline-offset-2 hover:underline"
              >
                Accessibility
              </button>
            </div>
          </div>

          {/* Lower Legal Declaration */}
          <div className="mt-6 border-t border-blue-950/20 pt-4 text-center text-[10px] text-slate-500">
            <p>© {new Date().getFullYear()} Fleet Integra LLC. All rights reserved. Registered Address: 1101 Avenue U, Brooklyn, NY 11235. DOT is a registered acronym of the United States Department of Transportation.</p>
          </div>

        </div>
      </footer>

      {/* Render Legal Document Modal */}
      <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />
    </>
  );
}
