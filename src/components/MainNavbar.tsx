import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  ShieldAlert, 
  FileText, 
  UserCheck, 
  BarChart3, 
  Truck, 
  ArrowRight, 
  Phone,
  Calendar,
  ShieldCheck,
  MessageSquarePlus
} from "lucide-react";
import FleetIntegraLogo from "./FleetIntegraLogo";

interface MainNavbarProps {
  onOpenDemo: () => void;
}

export default function MainNavbar({ onOpenDemo }: MainNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSolutionCategory, setActiveSolutionCategory] = useState("driver-compliance");
  const [scrolled, setScrolled] = useState(false);

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

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
    { name: "Services", href: "/services" },
    { name: "Remote Safety & Compliance", href: "/remote-safety-compliance" },
    { name: "Why Us?", href: "/#why-us" },
    { name: "Contact Us", href: "/contact" },
    { name: "Resources", href: "/resources" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 w-full ${
        scrolled
          ? "bg-[#030d1b]/95 backdrop-blur-md shadow-lg shadow-blue-950/20 py-2.5 border-b border-blue-950/65"
          : "bg-[#030d1b] py-4 border-b border-blue-950/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => {
            if (window.location.pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex items-center group cursor-pointer"
          aria-label="Fleet Integra Home"
        >
          <FleetIntegraLogo size="md" />
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-8 font-sans">
          {menuItems.map((item) => {
            if (item.name === "Services") {
              return (
                <div key={item.name} className="relative group">
                  <Link to={item.href} className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-white transition-colors py-2 group-hover:text-white">
                    <span>{item.name}</span>
                    <ChevronDown size={14} className="text-slate-400 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  <div className="absolute top-full left-1/2 -translate-x-[25%] mt-2 w-[800px] rounded-xl border border-blue-900/30 bg-[#071329] text-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 flex overflow-hidden">
                    {/* Left Pane - Categories */}
                    <div className="w-1/3 bg-[#030d1b] border-r border-blue-900/30 p-4 flex flex-col">
                      <div className="flex-grow space-y-1">
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
                      
                      {/* Shelved with Pricing Page archive
                      <div className="mt-4 pt-4 border-t border-blue-900/30">
                        <Link to="/pricing" className="block w-full text-left px-4 py-3 rounded-lg text-sm font-semibold text-sky-400 hover:text-white hover:bg-slate-800 transition-all">
                          Pricing & Standard Service Fees &rarr;
                        </Link>
                      </div>
                      */}
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
              <Link
                key={item.name}
                to={item.href}
                className="text-sm font-medium text-slate-200 hover:text-white transition-colors py-2"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Call us Now</span>
            <a
              href="tel:+12012937774"
              className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 hover:shadow-lg hover:shadow-emerald-500/20 active:scale-98 transition duration-150"
            >
              +1 (201) 293-7774
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-lg bg-slate-900 text-slate-200 hover:text-white border border-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500/40 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-In Off-Canvas Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              key="mobile-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-In Drawer Panel */}
            <motion.div
              key="mobile-drawer-panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-[340px] sm:max-w-sm bg-[#040d1e] border-l border-blue-900/50 shadow-2xl flex flex-col justify-between overflow-hidden lg:hidden text-slate-100"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile Navigation Menu"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900/40 bg-[#030a16]">
                <div className="flex items-center">
                  <FleetIntegraLogo size="sm" />
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700/60"
                  aria-label="Close navigation menu"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Scrollable Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                <div className="space-y-1">
                  <Link
                    to="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors"
                  >
                    <span>Home</span>
                  </Link>

                  {/* Services Submenu Accordion */}
                  <div className="rounded-lg overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors text-left"
                    >
                      <span>Services</span>
                      <ChevronDown
                        size={16}
                        className={`text-slate-400 transition-transform duration-200 ${
                          mobileServicesOpen ? "rotate-180 text-sky-400" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-3 pr-2 py-1 space-y-1 bg-blue-950/30 border-l-2 border-sky-500/40 my-1 rounded-r-lg"
                        >
                          <Link
                            to="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                          >
                            All Services Overview &rarr;
                          </Link>
                          {/* Shelved with Pricing Page archive
                          <Link
                            to="/pricing"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
                          >
                            Services &amp; Standard Pricing
                          </Link>
                          */}
                          {solutionsData.map((category) => (
                            <Link
                              key={category.id}
                              to="/services"
                              onClick={() => {
                                setActiveSolutionCategory(category.id);
                                setIsMobileMenuOpen(false);
                              }}
                              className="block px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors truncate"
                            >
                              {category.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    to="/remote-safety-compliance"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors"
                  >
                    <span>Remote Safety &amp; Compliance</span>
                  </Link>

                  <Link
                    to="/#why-us"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors"
                  >
                    <span>Why Us?</span>
                  </Link>

                  {/* Shelved with Pricing Page archive
                  <Link
                    to="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors"
                  >
                    <span>Pricing</span>
                  </Link>
                  */}

                  <Link
                    to="/resources"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors"
                  >
                    <span>Resources</span>
                  </Link>

                  <Link
                    to="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors"
                  >
                    <span>Contact Us</span>
                  </Link>

                  <Link
                    to="/feedback"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold text-slate-200 hover:text-white hover:bg-blue-950/40 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <MessageSquarePlus size={16} className="text-sky-400" />
                      <span>Feedback &amp; Bug Report</span>
                    </span>
                  </Link>
                </div>

                {/* FMCSA Partner Card inside drawer */}
                <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-900/40 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-semibold text-sky-400">
                    <ShieldCheck size={15} />
                    <span>FMCSA &amp; DOT Compliance</span>
                  </div>
                  <p className="text-slate-400 text-[11px] leading-relaxed">
                    Safety department management, audit defense, and fleet risk reduction.
                  </p>
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="p-6 border-t border-blue-900/40 bg-[#030a16] space-y-3">
                <a
                  href="tel:+12012937774"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-4 py-3 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 shadow-lg shadow-emerald-500/10 active:scale-98 transition duration-150"
                >
                  <Phone size={16} />
                  <span>Call Now: +1 (201) 293-7774</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenDemo();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 border border-sky-500/30 px-4 py-2.5 text-sm font-semibold text-sky-300 hover:text-white transition duration-150"
                >
                  <Calendar size={15} />
                  <span>Schedule Consultation</span>
                </button>

                <div className="text-center pt-1">
                  <span className="text-[10px] text-slate-500">Mon - Fri: 8am - 6pm EST</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
