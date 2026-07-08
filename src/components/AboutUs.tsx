import { Info } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="why-us" className="bg-[#030d1b] pt-8 pb-20 md:pb-28">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="rounded-2xl border border-blue-900/30 bg-gradient-to-tr from-[#071329] to-[#04203a] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Ambient circular decors */}
          <div className="absolute inset-0 bg-[#030d1b]/40 pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-[#38bdf8]">
              <Info className="h-3.5 w-3.5" />
              <span>About Us</span>
            </div>
            
            <h2 className="font-display text-2xl md:text-3.5xl font-extrabold text-white tracking-tight">
              Built by Industry Veterans
            </h2>
            
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Carrier Shield provides outsourced safety and compliance infrastructure for trucking companies. The company helps fleets build organized, audit-ready operations by managing critical compliance systems including Driver Qualification Files (DQ Files), drug & alcohol testing programs, permit management, driver monitoring, inspection and violation tracking, FMCSA safety preparation, and operational compliance workflows. We expertly handle all permitting needs and provide comprehensive New Carrier Launch support. 
            </p>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Unlike traditional compliance vendors, the company combines real-world trucking operational experience with structured compliance management. The organization understands fleet operations, roadside inspections, insurance pressure, driver management, and DOT exposure because its leadership comes directly from the transportation industry. The mission is to help fleets reduce operational risk, improve safety performance, strengthen insurance positioning, and create long-term operational stability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
