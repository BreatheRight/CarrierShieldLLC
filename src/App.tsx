/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { 
  Building2, 
  ShieldCheck, 
  Calendar, 
  Users, 
  Sparkles, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Briefcase, 
  TrendingUp, 
  ArrowRight,
  ShieldAlert 
} from "lucide-react";

// Component imports
import TopUtilityBar from "./components/TopUtilityBar";
import MainNavbar from "./components/MainNavbar";
import HeroSection from "./components/HeroSection";
import FeaturesPreview from "./components/FeaturesPreview";
import FleetTelemetrySim from "./components/FleetTelemetrySim";
import RoiCalculator from "./components/RoiCalculator";
import ChecklistQuiz from "./components/ChecklistQuiz";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import DemoModal from "./components/DemoModal";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  fleetSize: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Switching our 45 drivers to Carrier Shield completely automated our qualification folders. Before this, we spent 10+ hours a week fighting paper renewals. We passed our offsite FMCSA compliance audit with zero errors.",
    author: "Timothy Vance",
    title: "Director of Fleet Safety",
    company: "Vance Logistics Group",
    fleetSize: "45 Drivers"
  },
  {
    quote: "The random drug selection pool manager is a lifesaver. It automatically schedules compliance tests and syncs directly with the FMCSA Clearinghouse database. Unbeatable support, extremely professional platform.",
    author: "Elena Rostova",
    title: "Compliance Officer",
    company: "Apex Distribution LLC",
    fleetSize: "120 Drivers"
  },
  {
    quote: "We save average $14,000 annually in unexpected DOT audit liabilities alone, plus our insurance carrier immediately offered an 18% premium discount on safety scoring telemetry. Unbelievable return on investment.",
    author: "Marcus Brody",
    title: "Owner-Operator Manager",
    company: "Brody Express Services",
    fleetSize: "12 Drivers"
  }
];

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How does Carrier Shield secure driver qualification (DQ) folders?",
    a: "We fully automate DQ file audits under Title 49 CFR Part 391. The platform automatically tracks driver medical examiner card expiry dates, coordinates DMV queries for Motor Vehicle Records (MVR), and warns administrators 60 days before any document expires or triggers safety flags."
  },
  {
    q: "Are we required to switch our existing physical ELD devices?",
    a: "No equipment swaps required! Carrier Shield is a hardware-agnostic platform. We offer native API synchronization plugins and data adapters that pull active duty-status streams from almost all leading ELD setups, converting the raw telemetry into safety dashboards."
  },
  {
    q: "How does the random drug selection pool consortium function?",
    a: "Our software hosts a legally secure, randomized generation tool synchronized directly with FMCSA certified medical collection points. It automatically picks drivers for quarterly compliance updates, sends immediate discrete scheduling notifications, and archives lab results straight to secure file archives."
  },
  {
    q: "Is there any setup help or live support during sudden DOT audits?",
    a: "Absolutely! Every active team on Carrier Shield is partnered with an expert DOT & FMCSA Compliance Specialist. In the event of an unexpected inspection or a structured audit notice, you have a direct hotline to pull compliance reports and walk through federal requirements."
  }
];

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const openDemo = () => setIsDemoOpen(true);
  const closeDemo = () => setIsDemoOpen(false);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#030d1b] text-slate-100 flex flex-col font-sans select-none antialiased selection:bg-sky-500/30">
      
      {/* 1. Header & Quick Alerts */}
      <TopUtilityBar onOpenDemo={openDemo} />
      <MainNavbar onOpenDemo={openDemo} />

      {/* 2. Hero Sector */}
      <HeroSection onOpenDemo={openDemo} />

      {/* 3. Logos of Trust Badges */}
      <section className="bg-[#020712] py-8 border-y border-blue-950/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            Trusted by over 14,000+ logistics and freight dispatchers nationwide
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-45 grayscale hover:grayscale-0 transition duration-300">
            <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <Building2 className="h-4 w-4 text-sky-400" />
              <span>Apex Logistics</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <Briefcase className="h-4 w-4 text-emerald-400" />
              <span>Brody Freight Co</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <ShieldCheck className="h-4 w-4 text-purple-400" />
              <span>Swift Safe carriers</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
              <Users className="h-4 w-4 text-indigo-400" />
              <span>Vance Trucking</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Capabilities Section */}
      <FeaturesPreview />

      {/* 5. Live Fleet Telemetry interactive monitor */}
      <section className="bg-[#030d1b] pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-[#4ade80]">
              <Sparkles className="h-3.5 w-3.5 animate-pulse" />
              <span>Interactive Telemetry Simulator</span>
            </div>
            
            <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Smarter Safety, Powered by Live Automation
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Don't wait for a DOT auditor to flag logging errors. Our safety engine listens to active driver data to identify and automatically recommend corrective tutoring.
            </p>
          </div>

          <FleetTelemetrySim />
        </div>
      </section>

      {/* 6. Self-Audit Compliance Checklist Quiz */}
      <ChecklistQuiz onOpenDemo={openDemo} />

      {/* 7. Interactive ROI saving calculator */}
      <section className="bg-[#030d1b] pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <RoiCalculator onOpenDemo={openDemo} />
        </div>
      </section>

      {/* 8. Satisfied Client Case Studies */}
      <section id="testimonials" className="bg-[#020712] py-24 md:py-32 border-y border-blue-950/40 relative">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8]">
                Proven Field Performance
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                Fleets That Run Safer & Compliant Everyday
              </h2>
            </div>
            
            <button
              onClick={openDemo}
              className="group self-start md:self-auto inline-flex items-center gap-2 rounded-lg border border-sky-500/20 bg-sky-500/5 px-4.5 py-2.5 text-xs font-bold text-sky-400 hover:bg-sky-400 hover:text-[#030d1b] transition duration-200"
            >
              <span>Read Full Case Studies</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={idx}
                className="rounded-xl border border-blue-950/40 bg-[#071329]/60 p-6 flex flex-col justify-between hover:border-[#38bdf8]/20 transition-all duration-300 relative group"
              >
                <div>
                  {/* Star rating design */}
                  <div className="flex gap-1 mb-4 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  
                  <p className="text-slate-300 text-xs md:text-sm leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-900/60 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-display text-xs font-bold text-sky-400 uppercase">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white leading-none">
                      {t.author}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-1">
                      {t.title}, <span className="font-semibold text-slate-300">{t.company}</span>
                    </p>
                    <span className="inline-block mt-1 font-mono text-[9px] text-[#4ade80] bg-emerald-950/30 px-1.5 rounded">
                      🛡️ {t.fleetSize}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. FAQs Accordion */}
      <section className="bg-[#030d1b] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          <div className="text-center space-y-4 mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Technical Q&A Solutions
            </span>
            <h2 className="font-display text-2xl md:text-3.5xl font-extrabold text-white tracking-tight">
              Common Compliance Inquiries Answered
            </h2>
            <p className="text-slate-400 text-xs md:text-sm">
              Do you have specialized legal questions? We provide transparent compliance models.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={idx}
                  className="rounded-xl border border-blue-950/40 bg-[#071329]/50 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 flex justify-between items-center gap-4 hover:bg-[#071329] transition-colors"
                  >
                    <span className="text-xs md:text-sm font-bold text-slate-100">
                      {item.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={16} className="text-sky-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown size={16} className="text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 border-t border-blue-950/30 bg-[#071329]/20 text-xs md:text-slate-300 leading-relaxed text-slate-300">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. Call-to-Action conversion banner */}
      <section className="bg-[#030d1b] pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative rounded-2xl border border-blue-900/30 bg-gradient-to-tr from-[#071329] to-[#04203a] p-8 md:p-14 text-center overflow-hidden shadow-2xl">
            
            {/* Ambient circular decors */}
            <div className="absolute inset-0 bg-[#030d1b]/40 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8]">
                Get a Fully Protected Fleet Today
              </span>
              
              <h2 className="font-display text-3xl md:text-4.5xl font-extrabold text-white tracking-tight leading-tight">
                Eradicate DOT Audit Stress Permanently
              </h2>
              
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Connect with our advisors. In a quick 15-minute screen-share, we will map your current fleet characteristics, find documentation gaps, and configure your target discount.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <button
                  type="button"
                  onClick={openDemo}
                  className="rounded-lg bg-emerald-400 px-7 py-3 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 active:scale-98 hover:shadow-lg hover:shadow-emerald-500/10 transition flex items-center justify-center gap-1.5"
                >
                  <span>Schedule My 15-Min Demo</span>
                  <ArrowRight size={15} />
                </button>

                <a
                  href="tel:+18005550199"
                  className="rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white px-7 py-3 text-sm font-bold transition flex items-center justify-center gap-1.5"
                >
                  <span>Call Active Advisor</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-500 uppercase tracking-widest font-mono pt-4">
                No contract requirements • 48-Hour Full System Onboarding
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Contact Us */}
      <ContactUs />

      {/* 12. Footer details */}
      <Footer onOpenDemo={openDemo} />

      {/* 13. Modal backdrop for lead registration requests */}
      <DemoModal isOpen={isDemoOpen} onClose={closeDemo} />

    </div>
  );
}
