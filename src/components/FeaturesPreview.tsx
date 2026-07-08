import { ShieldCheck, FileText, Compass, Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FeaturesPreview() {
  return (
    <section className="bg-[#030d1b] pb-24 md:pb-32 font-sans relative" id="solutions">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-[#4ade80]">
            <Compass className="h-3.5 w-3.5" />
            <span>Our Core Services</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            What You Can Do With Valora
          </h2>
          
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            From sole operators to national enterprise logistics networks, our platform organizes your complete DOT and FMCSA regulatory workload in a single, high-tech command center.
          </p>
          <div className="pt-2">
            <Link to="/pricing" className="text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors">
              View standard permit, registration, and compliance pricing &rarr;
            </Link>
          </div>
        </div>

        {/* 3-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="flex flex-col rounded-2xl border border-blue-900/30 bg-[#071329] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group hover:border-[#38bdf8]/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 border-b border-blue-950/40 pb-5 mb-6">
              <div className="rounded-lg bg-sky-400/10 p-2 text-[#38bdf8]">
                <ShieldCheck size={24} />
              </div>
              <h4 className="font-display text-lg lg:text-xl font-bold text-white">
                Remote Safety & Compliance Department
              </h4>
            </div>
            <div className="flex-grow">
              <ul className="space-y-3 mb-8">
                {[
                  "DOT & FMCSA compliance support",
                  "Driver qualification file management",
                  "CSA and violation monitoring",
                  "Drug & Alcohol program coordination",
                  "Audit readiness and corrective action support",
                  "Compliance calendar and reporting",
                  "Assigned safety support"
                ].map((cap, index) => (
                  <li key={index} className="flex gap-3 items-start text-sm text-slate-300">
                    <div className="mt-0.5 rounded-full bg-emerald-500/10 p-1 text-emerald-400 flex-shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="leading-snug">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to="/remote-safety-compliance"
              className="mt-auto w-full flex justify-center items-center gap-2 rounded-lg bg-slate-900 border border-slate-800 px-4 py-3.5 text-sm font-bold text-sky-400 hover:bg-slate-800 transition shadow-sm"
            >
              <span>Learn About Safety Support</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-2xl border border-blue-900/30 bg-[#071329] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group hover:border-[#38bdf8]/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 border-b border-blue-950/40 pb-5 mb-6">
              <div className="rounded-lg bg-sky-400/10 p-2 text-[#38bdf8]">
                <FileText size={24} />
              </div>
              <h4 className="font-display text-lg lg:text-xl font-bold text-white">
                Permits, Registration
              </h4>
            </div>
            <div className="flex-grow">
              <ul className="space-y-3 mb-8">
                {[
                  "USDOT registration",
                  "MC Authority filing",
                  "BOC-3 filing",
                  "UCR registration",
                  "IRP and IFTA support",
                  "State permits",
                  "2290 HVUT filing",
                  "Trailer registrations"
                ].map((cap, index) => (
                  <li key={index} className="flex gap-3 items-start text-sm text-slate-300">
                    <div className="mt-0.5 rounded-full bg-emerald-500/10 p-1 text-emerald-400 flex-shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="leading-snug">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to="/contact"
              className="mt-auto w-full flex justify-center items-center gap-2 rounded-lg bg-emerald-400 px-4 py-3.5 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 transition shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-2xl border border-blue-900/30 bg-[#071329] p-6 md:p-8 text-white shadow-xl relative overflow-hidden group hover:border-[#38bdf8]/50 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center gap-3 border-b border-blue-950/40 pb-5 mb-6">
              <div className="rounded-lg bg-sky-400/10 p-2 text-[#38bdf8]">
                <Compass size={24} />
              </div>
              <h4 className="font-display text-lg lg:text-xl font-bold text-white">
                New Carrier Launch
              </h4>
            </div>
            <div className="flex-grow">
              <ul className="space-y-3 mb-8">
                {[
                  "LLC + EIN Formation",
                  "USDOT + MC Authority",
                  "BOC-3 + UCR Filing",
                  "MC-150 Initial filing",
                  "IFTA Permits",
                  "State Permits (NY HUT, CT, NM, KY, CA, OR)",
                  "2290 HVUT filing",
                  "DQ Files",
                  "Clearinghouse (Drug & Alcohol)",
                  "Entrance Safety Audit Preparation",
                  "Annual UCR renewal"
                ].map((cap, index) => (
                  <li key={index} className="flex gap-3 items-start text-sm text-slate-300">
                    <div className="mt-0.5 rounded-full bg-emerald-500/10 p-1 text-emerald-400 flex-shrink-0">
                      <Check size={14} className="stroke-[3]" />
                    </div>
                    <span className="leading-snug">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              to="/contact"
              className="mt-auto w-full flex justify-center items-center gap-2 rounded-lg bg-emerald-400 px-4 py-3.5 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 transition shadow-sm"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
