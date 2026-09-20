import { ArrowRight, ShieldCheck, Play, Users, Calendar, Sparkles, Building2, Check, AlertCircle } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { validateEmail } from "../utils/validation";

interface HeroSectionProps {
  onOpenDemo: () => void;
}

export default function HeroSection({ onOpenDemo }: HeroSectionProps) {
  const [quickEmail, setQuickEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [allowPersonalEmail, setAllowPersonalEmail] = useState(false);

  const emailValidation = validateEmail(quickEmail, allowPersonalEmail);

  const handleQuickSubmit = (e: import("react").FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (!emailValidation.isValid) return;
    onOpenDemo();
  };

  return (
    <section className="relative bg-[#030d1b] pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden font-sans">
      {/* Background abstract ambient flares */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none translate-y-1/3" />
      
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Pitch */}
          <div className="lg:col-span-6 space-y-6 md:space-y-8">
            
            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-extrabold tracking-tight text-white">
              Your Shield Against <br />
              <span className="text-[#38bdf8]">FMCSA Compliance</span> Risks
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-base md:text-md leading-relaxed max-w-xl">
              Fleet Integra is your complete outsourced Safety & Compliance Department for trucking companies and expanding fleets. We handle all the complex and time-consuming aspects of FMCSA, DOT, CSA, Drug & Alcohol programs, and permitting — so you can drive growth without the stress of compliance risks. We also partner with trusted insurance providers to deliver full coverage for your fleet. Launching a new carrier? We provide full New Carrier Launch supports.
            </p>

            {/* Interactive Lead-Capture Input */}
            <form onSubmit={handleQuickSubmit} className="max-w-md pt-2">
              <div className={`flex flex-col sm:flex-row gap-2.5 rounded-xl bg-[#020712]/60 p-2 border transition shadow-xl ${
                touched && emailValidation.error
                  ? "border-rose-500/80"
                  : quickEmail && emailValidation.isValid
                  ? "border-emerald-500/70"
                  : "border-blue-900/45"
              }`}>
                <div className="relative flex-grow flex items-center">
                  <input
                    type="email"
                    required
                    placeholder="Enter business email"
                    value={quickEmail}
                    onBlur={() => setTouched(true)}
                    onChange={(e) => {
                      setQuickEmail(e.target.value);
                      if (!touched && e.target.value.length > 3) {
                        setTouched(true);
                      }
                    }}
                    className="bg-transparent px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none w-full"
                  />
                  {quickEmail && (
                    <div className="pr-2">
                      {touched && emailValidation.error ? (
                        <AlertCircle size={15} className="text-rose-400" />
                      ) : emailValidation.isValid ? (
                        <Check size={15} className="text-emerald-400" />
                      ) : null}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={touched && !emailValidation.isValid}
                  className="w-full sm:w-auto rounded-lg bg-sky-400 hover:bg-sky-300 text-xs font-bold text-[#030d1b] px-5 py-2.5 active:scale-98 transition flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md shadow-sky-950/40 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              {touched && emailValidation.error && (
                <div className="space-y-1 mt-2 ml-1">
                  <p className="text-[11px] text-rose-400 flex items-start gap-1 leading-tight">
                    <span>•</span>
                    <span>{emailValidation.error}</span>
                  </p>
                  {!allowPersonalEmail && emailValidation.error.includes("Free domains") && (
                    <button
                      type="button"
                      onClick={() => setAllowPersonalEmail(true)}
                      className="text-[11px] text-sky-400 hover:text-sky-300 underline font-medium cursor-pointer block"
                    >
                      Independent owner-operator? Click to use personal email
                    </button>
                  )}
                </div>
              )}

              {emailValidation.warning && (
                <p className="text-[11px] text-amber-400/90 leading-tight mt-1.5 ml-1">
                  {emailValidation.warning}
                </p>
              )}

              {(!touched || emailValidation.isValid) && (
                <p className="text-[11px] text-slate-400 mt-2 ml-1">
                  Speak directly with a dedicated DOT &amp; FMCSA safety specialist.
                </p>
              )}
            </form>
          </div>

          {/* Right Column: SLEEK Mockup dashboard representation */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#38bdf8] to-[#2563eb] rounded-2xl opacity-20 blur-xl block" />

              {/* Main Mockup container */}
              <div className="relative rounded-2xl border border-blue-900/30 bg-[#071329] p-4 text-white shadow-2xl overflow-hidden">
                <div className="flex items-center justify-between border-b border-blue-950/40 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-yellow-400" />
                      <span className="h-2 w-2 rounded-full bg-green-400" />
                    </div>
                    <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest pl-2">
                      Fleet Integra Core Dashboard
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 rounded bg-[#030d1b] border border-blue-950/30 px-1.5 py-0.5 font-mono text-[9px] text-[#4ade80]">
                    <ShieldCheck size={10} />
                    <span>SECURE ELD</span>
                  </span>
                </div>

                {/* Dashboard layout simulator */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  
                  {/* Left Column stats within mockup */}
                  <div className="md:col-span-2 space-y-3">
                    <div className="bg-[#030d1b] border border-blue-950/50 p-3 rounded-xl">
                      <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Fleet Safety Overview
                      </h4>
                      <div className="mt-2 flex items-baseline gap-3">
                        <span className="text-3xl font-display font-extrabold text-white">94</span>
                        <span className="text-xs text-[#4ade80] font-sans font-medium flex items-center bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          Excellent
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 mt-1 leading-relaxed">
                        98% of electronic logging files sync within parameters this week.
                      </p>
                    </div>

                    <div className="bg-[#030d1b] border border-blue-950/50 p-3 rounded-xl">
                      <div className="flex justify-between items-center pb-2 border-b border-slate-900/60">
                        <h5 className="text-[11px] font-semibold text-slate-300">
                          Pending Audit Flags
                        </h5>
                        <span className="text-[11px] font-mono text-[#38bdf8] font-bold">0 Active</span>
                      </div>
                      <div className="space-y-1.5 pt-2">
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>Driver HOS Errors</span>
                          <span className="text-emerald-400 font-mono">0 (Auto-fixed)</span>
                        </div>
                        <div className="flex justify-between text-[10px] text-slate-400">
                          <span>Drug & Alcohol Cleared</span>
                          <span className="text-emerald-400 font-mono">100% compliant</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right column sidebar inside mockup */}
                  <div className="space-y-3">
                    <div className="bg-[#030d1b] border border-blue-950/50 p-3 rounded-xl h-full flex flex-col justify-between">
                      <div>
                        <h4 className="text-xs font-semibold text-slate-300">
                          Compliance Quick Actions
                        </h4>
                        <div className="space-y-1.5 mt-3">
                          <button 
                            onClick={onOpenDemo}
                            className="w-full text-left bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 border border-slate-800 rounded p-1.5 font-medium transition cursor-pointer"
                          >
                            Update HOS Files
                          </button>
                          <button 
                            onClick={onOpenDemo}
                            className="w-full text-left bg-slate-900 hover:bg-slate-800 text-[10px] text-slate-300 border border-slate-800 rounded p-1.5 font-medium transition cursor-pointer"
                          >
                            Run Driver Check
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-900">
                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span>All files synced</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Simulated Image accent inside dashboard mockup (American conventional commercial semi-truck) */}
                <div className="mt-3 relative h-40 rounded-xl overflow-hidden border border-blue-950/50 group">
                  <img
                    src="/SiteImageAssets/us-fleet-truck.jpg"
                    alt="US Interstate Fleet Semi-Truck"
                    onError={(e) => {
                      // Fallback to high-res American conventional truck if needed
                      (e.currentTarget as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=1200";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-90 relative z-0"
                    referrerPolicy="no-referrer"
                  />
                  {/* Glass overlay with play text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020712] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-full bg-emerald-400 text-[#030d1b]">
                        <Play size={10} fill="currentColor" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-white">
                        SaaS Automation Demo Video
                      </span>
                    </div>

                    <span className="text-[10px] font-mono font-bold text-[#38bdf8] bg-sky-950/60 px-1.5 py-0.5 rounded">
                      2 mins
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
