import { ArrowRight, FileText, CheckCircle2, LayoutList, Check, ShieldCheck, ClipboardCheck, Compass, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

interface RemoteSafetyCompliancePageProps {
  onOpenDemo: () => void;
}

export default function RemoteSafetyCompliancePage({ onOpenDemo }: RemoteSafetyCompliancePageProps) {
  const sections = [
    {
      title: "Driver Hiring & Onboarding",
      desc: "When hiring a new driver, we perform a comprehensive verification and preparation process:",
      icon: <FileText size={48} className="text-sky-300" />,
      smallIcon: <FileText size={20} className="text-sky-400" />,
      iconBg: "bg-sky-500/20",
      bgStyle: "hover:border-sky-500/30",
      checkColor: "bg-sky-500/10 text-sky-400",
      items: [
        "Verification of CDL (Commercial Driver’s License) and Medical Card",
        "Validation of National Registry Number",
        "Assessment of the driver’s knowledge of PTI (Pre-Trip Inspection) and Electronic Logging Device (ELD / Electronic Logbook)",
        "Customized training for the driver if gaps in knowledge are identified",
        "MVR (Motor Vehicle Record) check for violations and driving history",
        "Recommendation and coordination of Pre-Employment Screening and PSP (Pre-Employment Screening Program)",
        "Clearinghouse Limited Query and Full Query",
        "Obtaining Clearinghouse Full Query Consent",
        "Preparation of Application for Employment",
        "Employment Verification from previous employers",
        "I-9 Form and W-9 Form processing",
        "Pre-Employment Drug Testing"
      ]
    },
    {
      title: "Ongoing Driver Compliance Management",
      desc: "We maintain full compliance throughout the entire employment period:",
      icon: <CheckCircle2 size={48} className="text-emerald-300" />,
      smallIcon: <CheckCircle2 size={20} className="text-emerald-400" />,
      iconBg: "bg-emerald-500/20",
      bgStyle: "hover:border-emerald-500/30",
      checkColor: "bg-emerald-500/10 text-emerald-400",
      items: [
        "DQ File Management (Driver Qualification files)",
        "Driver Qualification Monitoring",
        "Medical Card Tracking & Renewal Reminders",
        "CDL Expiration Monitoring",
        "Clearinghouse Management (full support)",
        "FMCSA Compliance Reviews preparation and support",
        "Consortium Enrollment for drug and alcohol testing",
        "Random Drug & Alcohol Testing Programs",
        "Post-Accident Testing coordination",
        "Pre-Employment, Random, and Post-Accident Drug Testing",
        "Development and maintenance of Drug & Alcohol Policy"
      ]
    },
    {
      title: "Complete Truck & Trailer File Management",
      desc: "We build, organize, and maintain a professional, audit-ready Truck File for every power unit and trailer in your fleet, including:",
      icon: <LayoutList size={48} className="text-indigo-300" />,
      smallIcon: <LayoutList size={20} className="text-indigo-400" />,
      iconBg: "bg-indigo-500/20",
      bgStyle: "hover:border-indigo-500/30",
      checkColor: "bg-indigo-500/10 text-indigo-400",
      items: [
        "Cover Sheet (organized summary of the vehicle)",
        "Truck Registration",
        "Truck Annual Inspection records",
        "Trailer Registration",
        "Trailer Annual Inspection records",
        "Truck / Trailer Equipment Lease Agreement",
        "FMCSA Operating Authority Certificate",
        "Insurance Certificate",
        "IFTA License",
        "All required Permits",
        "ELD Instructions and setup documentation",
        "Passenger Authorization Form"
      ],
      footer: "All documents are digitally organized, tracked, and kept current to ensure instant availability during audits, roadside inspections, or insurance reviews."
    },
    {
      title: "CSA & Safety Performance Management",
      desc: "We actively monitor, improve, and protect your fleet’s safety profile:",
      icon: <ShieldCheck size={48} className="text-rose-300" />,
      smallIcon: <ShieldCheck size={20} className="text-rose-400" />,
      iconBg: "bg-rose-500/20",
      bgStyle: "hover:border-rose-500/30",
      checkColor: "bg-rose-500/10 text-rose-400",
      items: [
        "CSA Score Analysis and continuous improvement",
        "DataQ Management — full handling of FMCSA DataQs system, including filing requests for review, disputing violations, uploading supporting documents, and tracking outcomes",
        "Inspection & Violation Tracking",
        "BASIC Category Monitoring (Behavior Analysis & Safety Improvement Categories)",
        "Out-of-Service Reduction Strategy",
        "Driver Coaching Programs based on violation patterns",
        "Insurance Risk Positioning",
        "Safety Trend Reporting",
        "Roadside Inspection Management and post-inspection support"
      ]
    },
    {
      title: "Audit Preparation & Support",
      desc: "We provide expert assistance to ensure you are always audit-ready:",
      icon: <ClipboardCheck size={48} className="text-amber-300" />,
      smallIcon: <ClipboardCheck size={20} className="text-amber-400" />,
      iconBg: "bg-amber-500/20",
      bgStyle: "hover:border-amber-500/30",
      checkColor: "bg-amber-500/10 text-amber-400",
      items: [
        "New Entrant Safety Audit preparation and full support",
        "Mock Audits",
        "Full Safety Audit Support, including document preparation, response coordination, and post-audit corrective actions"
      ]
    },
    {
      title: "Ongoing Fleet Compliance Oversight",
      desc: "",
      icon: <Compass size={48} className="text-fuchsia-300" />,
      smallIcon: <Compass size={20} className="text-fuchsia-400" />,
      iconBg: "bg-fuchsia-500/20",
      bgStyle: "hover:border-fuchsia-500/30",
      checkColor: "bg-fuchsia-500/10 text-fuchsia-400",
      items: [
        "Assigned Safety Manager dedicated to your account",
        "Compliance Calendar Management",
        "Fleet Compliance Monitoring",
        "Expiration Tracking",
        "Driver File Audits",
        "Compliance Reporting",
        "Client Dashboards",
        "Fleet Documentation Management"
      ]
    },
    {
      title: "Driver Safety Training & Development",
      desc: "We deliver comprehensive training programs to strengthen your safety culture:",
      icon: <GraduationCap size={48} className="text-teal-300" />,
      smallIcon: <GraduationCap size={20} className="text-teal-400" />,
      iconBg: "bg-teal-500/20",
      bgStyle: "hover:border-teal-500/30",
      checkColor: "bg-teal-500/10 text-teal-400",
      items: [
        "DOT Safety Training",
        "Hours of Service (HOS) Training",
        "Roadside Inspection Training",
        "Accident Prevention Training",
        "Driver Safety Orientation",
        "Safety Meeting Documentation and records"
      ]
    }
  ];

  return (
    <div className="font-sans bg-[#020712] min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-[#030d1b] pt-20 pb-24 md:pt-32 md:pb-36 relative overflow-hidden border-b border-blue-950/40">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#020712] border border-blue-900/50 px-4 py-2 text-xs font-bold text-sky-400 mb-8 uppercase tracking-widest shadow-xl">
            <ShieldCheck className="h-4 w-4" />
            <span>Comprehensive Management</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-8">
            Remote Safety & Compliance Department
          </h1>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            We operate as your fully functional internal safety department. Stop worrying about DOT audits, driver qualification files, and complex federal regulations. Focus on growth while we secure your fleet.
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-24 md:space-y-40">
          
          {sections.map((section, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Block */}
                <div className="w-full lg:w-5/12 flex justify-center">
                  <div className={`relative w-full aspect-square max-w-md rounded-3xl border border-blue-900/30 bg-[#071329] overflow-hidden shadow-2xl flex items-center justify-center group transition-colors duration-500 ${section.bgStyle}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
                    
                    <div className={`relative z-10 p-10 rounded-3xl ${section.iconBg} border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-110`}>
                      {section.icon}
                    </div>

                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
                      <div className="mt-5 text-center font-mono text-[11px] text-slate-500 uppercase tracking-widest font-semibold">
                        Module {String(idx + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Block */}
                <div className="w-full lg:w-7/12">
                  <div className={`inline-flex items-center justify-center p-3 rounded-xl mb-6 ${section.iconBg} bg-opacity-20`}>
                    {section.smallIcon}
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-5 leading-tight">
                    {section.title}
                  </h3>
                  
                  {section.desc && (
                    <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
                      {section.desc}
                    </p>
                  )}

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start">
                        <div className={`mt-1 rounded-full p-1.5 flex-shrink-0 ${section.checkColor}`}>
                          <Check size={14} className="stroke-[3]" />
                        </div>
                        <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {section.footer && (
                    <div className="mt-10 p-6 bg-[#030d1b] border border-blue-900/30 rounded-2xl">
                      <p className="text-sm text-slate-400 italic leading-relaxed">
                        {section.footer}
                      </p>
                    </div>
                  )}
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#030d1b] py-24 md:py-32 border-t border-blue-950/40 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 w-[800px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8">
            Ready to secure your fleet?
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-8 py-4 text-base font-bold text-[#030d1b] hover:bg-emerald-300 transition shadow-xl hover:shadow-emerald-500/20"
          >
            <span>Request Remote Safety Support</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
