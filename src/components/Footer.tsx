import { Truck, Mail, Phone, MapPin, ShieldAlert, HeartHandshake, FileText, Globe } from "lucide-react";
import { useState } from "react";

export default function Footer({ onOpenDemo }: { onOpenDemo: () => void }) {
  const [newsEmail, setNewsEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setNewsEmail("");
    setTimeout(() => setSuccess(false), 3000);
  };

  const navLinks = [
    {
      title: "Compliance Products",
      items: [
        { label: "Driver Qualification Suite", href: "#" },
        { label: "Hours of Service (HOS) Audits", href: "#" },
        { label: "FMCSA Drug Selection pool", href: "#" },
        { label: "Online Driver Portal", href: "#" },
      ],
    },
    {
      title: "Solutions",
      items: [
        { label: "Fleet size 5-20", href: "#" },
        { label: "Fleet size 21-100", href: "#" },
        { label: "Enterprise Logistics", href: "#" },
        { label: "Insurance Premium Reduction", href: "#" },
      ],
    },
    {
      title: "Regulatory Resources",
      items: [
        { label: "DQ File Checklist (CFR 391)", href: "#" },
        { label: "ELD Mandate Guide", href: "#" },
        { label: "Clearinghouse 101 Manual", href: "#" },
        { label: "Help Center Help Desk", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#020712] border-t border-blue-950/60 pb-12 pt-16 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Top Grid section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Logo brand pitch */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-tr from-sky-400 to-sky-600 p-2 rounded-lg text-[#030d1b] font-bold">
                <Truck className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                CARRIER<span className="text-sky-400">SHIELD</span>
              </span>
            </a>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Your trucking partner, with 20+ years specializing in safety infrastructure, FMCSA compliance, CSA risk reduction, audit preparation, and fleet operational support for growing trucking companies across the United States.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone size={13} className="text-sky-400" />
                <span className="text-slate-300"><a href="tel:+17187185395" className="hover:text-white transition-colors">+1 (718) 718-5395</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} className="text-sky-400" />
                <span className="text-slate-300"><a href="mailto:support@nationalsolutions.com" className="hover:text-white transition-colors">support@nationalsolutions.com</a></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={13} className="text-sky-400" />
                <span className="text-slate-300">100 Fleet St, Brooklyn, NY 11204</span>
              </div>
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
                      <a 
                        href={link.href} 
                        onClick={(e) => {
                          e.preventDefault();
                          onOpenDemo();
                        }}
                        className="hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Form Alert signup */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Subscribe to FMCSA regulatory Alerts
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We compile and send summaries of FMCSA, DOT, and ELD changes weekly. Get the compliance summary.
            </p>

            <form onSubmit={handleNewsSubmit} className="space-y-2">
              <input
                type="email"
                required
                value={newsEmail}
                onChange={(e) => setNewsEmail(e.target.value)}
                placeholder="safety-director@fleet.com"
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
              <span>FMCSA Registered: DOT# 4812035</span>
            </span>
            <span className="w-px h-3 bg-slate-800 hidden md:block" />
            <span className="flex items-center gap-1">
              <HeartHandshake size={12} className="text-[#38bdf8]" />
              <span>Clearinghouse Approved Consortium</span>
            </span>
            <span className="w-px h-3 bg-slate-800 hidden md:block" />
            <span className="flex items-center gap-1">
              <FileText size={12} className="text-indigo-400" />
              <span>SOC2 Type II Certified Secure SaaS</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Use</a>
            <a href="#" className="hover:text-slate-400">Sitemap</a>
          </div>
        </div>

        {/* Lower Disclaimer */}
        <div className="mt-6 border-t border-blue-950/20 pt-4 text-center text-[10px] text-slate-600">
          <p>© {new Date().getFullYear()} Carrier Shield Compliance LLC. All rights reserved. Google AI Studio, Cloud Run, and associated marks are trademarks of their respective owners. DOT is a registered acronym of the Department of Transportation.</p>
        </div>

      </div>
    </footer>
  );
}
