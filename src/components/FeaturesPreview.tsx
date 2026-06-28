import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, ClipboardCheck, ShieldCheck, HeartPulse, UserCheck, AlertTriangle, Compass, Check } from "lucide-react";

interface FeatureDetail {
  id: string;
  title: string;
  short: string;
  desc: string;
  icon: any;
  capabilities: string[];
  metrics: string;
}

const COMPLIANCE_FEATURES: FeatureDetail[] = [
  {
    id: "dq-files",
    title: "Driver Qualification (DQ) Files",
    short: "100% automated documentation tracking.",
    desc: "Maintaining correct files for 5 or 500 drivers can be daunting. Carrier Shield automatically monitors motor vehicle records (MVR), checks medical examiner status, issues early alerts for license expirations, and compiles bulletproof files ready for direct DOT inspection.",
    icon: FileText,
    capabilities: [
      "Continuous automated quarterly MVR checks",
      "Interactive medical card renewal reminders",
      "Seamless online driver onboarding application",
      "Direct API integration with state DMV databases"
    ],
    metrics: "Average audit review preparation: 2 minutes"
  },
  {
    id: "permits-taxes",
    title: "Permits, Filings, Taxes - All your Paperwork",
    short: "Complete setup and renewal for specialized permits & filings.",
    desc: "Remove the administrative headache of state specific permits and federal taxes. We provide full setup, filing, and renewals for USDOT Registration, MC Authority, UCR, IFTA, as well as state permits like NY HUT, KYU, NM, OR, and CT. We also keep your 2290 HVUT filings compliant.",
    icon: ClipboardCheck,
    capabilities: [
      "USDOT Registration & MC Authority setups",
      "UCR & IFTA quarterly filings",
      "State-specific permits (NY HUT, KYU, NM, OR, CT)",
      "2290 HVUT vehicle use tax compliance"
    ],
    metrics: "Administrative time saved: 40+ hours/month"
  },
  {
    id: "testing",
    title: "Drug & Alcohol Consortium",
    short: "Full FMCSA Clearinghouse synchronization.",
    desc: "Carrier Shield completely manages the random testing process. We interface directly with FMCSA certified clinics and the primary Clearinghouse registry to keep your recruitment and random drug testing processes legally flawless.",
    icon: HeartPulse,
    capabilities: [
      "Custom random selection pools generator",
      "Clearinghouse query automation suite",
      "National clinic scheduler interface",
      "Pre-employment and returns-to-duty history trackers"
    ],
    metrics: "Hiring compliance rate: 100.0%"
  },
  {
    id: "coaching",
    title: "Driver Safety Coaching Analytics",
    short: "Cut turnover and decrease collision liability.",
    desc: "Upgrade driver scorecards. Group drivers based on habits (e.g., speeding, hard stops). Use micro-learning programs directly sent to driver devices, lowering driver turnover by 18% and cutting accidental insurance liability.",
    icon: UserCheck,
    capabilities: [
      "Custom safety scorecard profiles",
      "Mobile-friendly short coaching guides",
      "Aggressive driving and speeding analytics",
      "Positive safe-miles milestone badges"
    ],
    metrics: "Average reduction in unsafe driving: 41%"
  }
];

export default function FeaturesPreview() {
  const [activeTab, setActiveTab] = useState("dq-files");

  const currentFeature = COMPLIANCE_FEATURES.find((f) => f.id === activeTab) || COMPLIANCE_FEATURES[0];
  const CurrentIcon = currentFeature.icon;

  return (
    <section className="bg-[#030d1b] pb-24 md:pb-32 font-sans relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-[#4ade80]">
            <Compass className="h-3.5 w-3.5" />
            <span>Full Capabilities Breakdown</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            What You Can Do With Carrier Shield
          </h2>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            From sole operators to national enterprise logistics networks, our platform organizes your complete DOT and FMCSA regulatory workload in a single, high-tech command center.
          </p>
        </div>

        {/* Tab & Feature Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Grid selector list */}
          <div className="lg:col-span-5 space-y-3">
            {COMPLIANCE_FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isSelected = feature.id === activeTab;
              
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex gap-4 ${
                    isSelected
                      ? "bg-[#071329] border-[#38bdf8]/50 shadow-xl shadow-blue-950/20"
                      : "bg-[#020712]/40 border-blue-950/20 hover:border-blue-900/30 text-slate-400"
                  }`}
                >
                  <div className={`rounded-lg p-2.5 flex-shrink-0 ${
                    isSelected ? "bg-sky-400 text-[#030d1b]" : "bg-slate-900 text-slate-400"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${
                      isSelected ? "text-white" : "text-slate-200"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-xs mt-1 leading-normal ${
                      isSelected ? "text-slate-300" : "text-slate-400"
                    }`}>
                      {feature.short}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Tab display panel */}
          <div className="lg:col-span-7 h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-blue-900/30 bg-[#071329] p-6 md:p-8 text-white shadow-2xl relative overflow-hidden"
              >
                {/* Visual flare decor element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3 border-b border-blue-950/40 pb-5 mb-6">
                  <div className="rounded-lg bg-sky-400/10 p-2 text-[#38bdf8]">
                    <CurrentIcon size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white">
                      {currentFeature.title}
                    </h4>
                    <span className="font-mono text-[10px] text-emerald-400 block tracking-widest uppercase font-semibold">
                      Performance Index: {currentFeature.metrics}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {currentFeature.desc}
                </p>

                <div className="space-y-3.5">
                  <h5 className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                    Key Features Included:
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentFeature.capabilities.map((cap, index) => (
                      <div key={index} className="flex gap-2.5 items-start text-xs text-slate-300">
                        <div className="mt-0.5 rounded-full bg-emerald-500/10 p-1 text-emerald-400 flex-shrink-0">
                          <Check size={11} className="stroke-[3]" />
                        </div>
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footnote alert */}
                <div className="mt-8 bg-slate-900/40 border border-slate-900 rounded-xl p-3 flex gap-3 items-center">
                  <ShieldCheck className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                  <p className="text-[11px] text-slate-400">
                    Compliant with all FMCSA Title 49 CFR regulations. Data encrypted at rest and in transit.
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
