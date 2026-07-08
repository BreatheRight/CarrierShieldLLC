import { BookOpen, FileText, ClipboardList, ShieldAlert, HeartPulse, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ResourcesPage() {
  const resources = [
    {
      title: "New Entrant Audit Guide",
      desc: "Understand the requirements for passing your initial 18-month safety audit.",
      icon: <BookOpen size={24} />,
      content: "All new motor carriers are subject to a New Entrant Safety Audit within their first 18 months of operations. You must demonstrate that you have established effective safety management controls. Key focus areas include driver qualifications, hours of service compliance, vehicle maintenance records, and drug & alcohol programs."
    },
    {
      title: "Driver Qualification (DQ) Checklist",
      desc: "Ensure every driver file meets FMCSA standards.",
      icon: <ClipboardList size={24} />,
      content: "A compliant DQ file must contain: Application for Employment, Motor Vehicle Record (MVR) from all states licensed in the past 3 years, Certificate of Road Test, Medical Examiner's Certificate, MVR Annual Review, and a Record of Violations. Incomplete files are a leading cause of audit fines."
    },
    {
      title: "IFTA, IRP, & UCR Guide",
      desc: "Navigate complex state and federal tax and registration requirements.",
      icon: <FileText size={24} />,
      content: "The International Fuel Tax Agreement (IFTA) simplifies reporting of fuel use by motor carriers operating in multiple jurisdictions. The International Registration Plan (IRP) is a registration reciprocity agreement. The Unified Carrier Registration (UCR) requires individuals and companies operating commercial vehicles in interstate commerce to register their business and pay an annual fee."
    },
    {
      title: "CSA Scores & BASICs",
      desc: "Learn how your safety score is calculated and how to improve it.",
      icon: <ShieldAlert size={24} />,
      content: "The FMCSA organizes the SMS data into seven Behavior Analysis and Safety Improvement Categories (BASICs): Unsafe Driving, Crash Indicator, HOS Compliance, Vehicle Maintenance, Controlled Substances/Alcohol, Hazardous Materials Compliance, and Driver Fitness. High percentiles can trigger interventions."
    },
    {
      title: "Drug & Alcohol Requirements",
      desc: "Clear guidelines on DOT drug testing and Clearinghouse rules.",
      icon: <HeartPulse size={24} />,
      content: "Employers must conduct pre-employment, reasonable suspicion, random, and post-accident testing. You are also required to query the FMCSA Clearinghouse for current and prospective employees' drug and alcohol violations before permitting them to operate a CMV on public roads."
    }
  ];

  return (
    <div className="font-sans">
      <section className="bg-[#030d1b] pt-16 pb-20 md:pt-24 md:pb-32 relative overflow-hidden border-b border-blue-950/40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-[#4ade80] mb-6">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Compliance Library</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Free Educational Resources
          </h1>
          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Stay informed on the latest FMCSA regulations, audit requirements, and best practices for fleet compliance.
          </p>
        </div>
      </section>

      <section className="bg-[#020712] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((res, idx) => (
              <div key={idx} className="bg-[#030d1b] border border-blue-900/30 rounded-2xl p-6 md:p-8 shadow-xl flex flex-col h-full hover:border-emerald-500/30 transition duration-300 group">
                <div className="p-3 bg-slate-900 text-emerald-400 rounded-lg w-fit mb-5 group-hover:bg-emerald-500/10 transition">
                  {res.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {res.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow font-semibold">
                  {res.desc}
                </p>
                <div className="pt-4 border-t border-slate-900/60 mt-auto">
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {res.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-[#030d1b] py-20 md:py-32 border-t border-blue-950/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            Need Expert Assistance?
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-8 py-4 text-base font-bold text-white hover:bg-sky-400 transition"
          >
            <span>Talk to a Compliance Specialist</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
