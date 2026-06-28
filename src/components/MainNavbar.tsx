import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, ShieldAlert, FileText, UserCheck, BarChart3, Truck, ArrowRight, HelpCircle, ShieldCheck } from "lucide-react";

interface MainNavbarProps {
  onOpenDemo: () => void;
}

export default function MainNavbar({ onOpenDemo }: MainNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState("driver-compliance");
  const [scrolled, setScrolled] = useState(false);

  // Shrink navbar slightly on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const solutionsData = [
    {
      id: "driver-compliance",
      title: "Driver Compliance & FMCSA",
      desc: "Complete lifecycle management from hiring to ongoing monitoring of driver qualifications.",
      items: [
        "DQ File Management & Monitoring",
        "Driver Qualification & Onboarding",
        "Medical Card & CDL Expiration Tracking",
        "MVR & PSP Screening",
        "Clearinghouse Management",
        "FMCSA Compliance Reviews",
        "Mock DOT Audits & Corrective Action Plans",
        "DOT Recordkeeping",
        "I-9, W-9 & Employment Verification"
      ]
    },
    {
      id: "csa-risk",
      title: "CSA & Risk Management",
      desc: "Proactive monitoring and improvement of your safety profile to reduce liabilities.",
      items: [
        "CSA Score Analysis",
        "DataQ Management",
        "Inspection & Violation Tracking",
        "BASIC Category Monitoring",
        "Out-of-Service Reduction Strategy",
        "Driver Coaching Programs",
        "Insurance Risk Positioning",
        "Safety Trend Reporting",
        "Corrective Action Plans"
      ]
    },
    {
      id: "drug-alcohol",
      title: "Drug & Alcohol + Training",
      desc: "Comprehensive testing coordination and safety training for your entire fleet.",
      items: [
        "Consortium Enrollment",
        "Random & Pre-Employment Drug Testing",
        "Post-Accident Testing",
        "Clearinghouse Queries & Management",
        "Drug & Alcohol Policy Development",
        "Lab Coordination (Quest / LabCorp etc.)",
        "SAP Referral Coordination",
        "DOT Safety, HOS & Roadside Inspection Training",
        "Driver Safety Orientation",
        "Safety Meeting Documentation"
      ]
    },
    {
      id: "permits-reg",
      title: "Permits, Registration & New Carrier Launch",
      desc: "Seamless setup and continuous filings for compliance across states and jurisdictions.",
      items: [
        "USDOT Registration",
        "MC Authority & BOC-3 Filing",
        "UCR, IRP & IFTA Setup/Filing",
        "NY HUT, KYU, NM, OR, CT Permits",
        "2290 HVUT Filing",
        "Trailer Registrations",
        "Complete Truck & Trailer Files",
        "Clearing House, Consortium Enrollment",
        "Entry safety audit preparation",
        "Client Dashboards & Monthly Reports"
      ]
    }
  ];

  const menuItems = [
    { name: "Solutions", href: "#solutions" },
    { name: "Remote Safety & Compliance", href: "#remote-safety" },
    { name: "Why Us?", href: "#why-us" },
    { name: "Contact Us", href: "#contact" },
    { name: "Resources", href: "#resources" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        scrolled
          ? "bg-[#030d1b]/95 backdrop-blur-md shadow-lg shadow-blue-950/20 py-2.5 border-b border-blue-950/65"
          : "bg-[#030d1b] py-4 border-b border-blue-950/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-[#38bdf8] rounded flex items-center justify-center text-[#030d1b] shadow-[0_0_15px_rgba(56,189,248,0.3)] group-hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] transition-all">
            <ShieldCheck size={28} />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-semibold tracking-tight text-white leading-none mt-1">
              CarrierShield <span className="font-light opacity-75 text-[#38bdf8]">Compliance</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase leading-none font-semibold mt-1.5">
              Fleet & Compliance Suite
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 font-sans">
          {menuItems.map((item) => {
            if (item.name === "Solutions") {
              return (
                <div key={item.name} className="relative group">
                  <button className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2 group-hover:text-white">
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                  </button>

                  <div className="absolute top-full left-1/2 -translate-x-[25%] mt-2 w-[800px] rounded-xl border border-blue-900/30 bg-[#071329] text-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 flex overflow-hidden">
                    {/* Left Pane - Categories */}
                    <div className="w-1/3 bg-[#030d1b] border-r border-blue-900/30 p-4">
                      {solutionsData.map((category) => (
                        <button
                          key={category.id}
                          onMouseEnter={() => setActiveSolutionCategory(category.id)}
                          className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                            activeSolutionCategory === category.id
                              ? "bg-slate-800 text-white shadow-inner shadow-slate-900/50 relative overflow-hidden"
                              : "text-slate-400 hover:text-slate-200 hover:bg-slate-900/50"
                          }`}
                        >
                          {activeSolutionCategory === category.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#38bdf8]" />
                          )}
                          {category.title}
                        </button>
                      ))}
                    </div>

                    {/* Right Pane - Specific Services */}
                    <div className="w-2/3 p-6 select-none cursor-default">
                      {solutionsData.map((category) => (
                        <div
                          key={category.id}
                          className={activeSolutionCategory === category.id ? "block" : "hidden"}
                        >
                          <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                          <p className="text-sm text-slate-400 mb-6">{category.desc}</p>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                            {category.items.map((service, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#38bdf8] flex-shrink-0" />
                                <span className="text-sm text-slate-300 hover:text-white transition-colors leading-tight">{service}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-slate-200 hover:text-white transition-colors py-2"
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call us Now</span>
            <a
              href="tel:+17187185395"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-98 transition duration-150"
            >
              +1 (718) 718-5395
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-900 text-slate-200 hover:text-white border border-slate-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-[#030d1b] border-t border-blue-900/40 text-white overflow-hidden"
          >
            <div className="px-5 py-6 space-y-6">
              <div className="flex flex-col gap-3">
                {menuItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-slate-300 hover:text-white py-2"
                  >
                    {item.name}
                  </a>
                ))}
              </div>

              <div className="h-px bg-blue-900/20" />

              <a
                href="tel:+17187185395"
                className="w-full flex items-center justify-center gap-1.5 rounded-lg bg-emerald-400 px-4 py-3 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 transition duration-150"
              >
                <span>Call Us Now: +1 (718) 718-5395</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
