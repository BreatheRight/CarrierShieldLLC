import React, { useState, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Calendar, ArrowRight, ShieldCheck, CheckCircle2, User, Building2, Mail, Phone, Truck, AlertCircle, Check } from "lucide-react";
import { submitContactForm } from "../services/contactService";
import { formatPhoneNumber, validatePhoneNumber, validateEmail } from "../utils/validation";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "5-20",
    role: "Fleet Manager",
  });
  
  const [allowPersonalEmail, setAllowPersonalEmail] = useState(false);
  const [touched, setTouched] = useState({ email: false, phone: false });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const emailValidation = validateEmail(formData.email, allowPersonalEmail);
  const phoneValidation = validatePhoneNumber(formData.phone);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData({ ...formData, phone: formatted });
    if (!touched.phone && e.target.value.length > 2) {
      setTouched((prev) => ({ ...prev, phone: true }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value });
    if (!touched.email && e.target.value.length > 3) {
      setTouched((prev) => ({ ...prev, email: true }));
    }
  };

  const handleSubmit = async (e: import("react").FormEvent) => {
    e.preventDefault();
    setTouched({ email: true, phone: true });

    if (!emailValidation.isValid || !phoneValidation.isValid) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      await submitContactForm({
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        fleetSize: formData.fleetSize,
        serviceInterest: `Demo & Consultation (${formData.role})`,
        message: `Demo consultation requested for fleet size ${formData.fleetSize}. Role: ${formData.role}`,
        source: "Demo Consultation Modal",
      });
      setIsSuccess(true);
    } catch (err) {
      console.error("Demo submit error:", err);
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#020617]/90 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-blue-500/20 bg-[#071329] p-6 text-white shadow-2xl md:p-8"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSuccess ? (
              <div>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-[#4ade80] mb-3">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Instant Consultation & Demo</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                    Experience Fleet Integra
                  </h3>
                  <p className="mt-2 text-sm text-slate-300">
                    See how our compliance suite protects your drivers, lowers your insurance costs, and satisfies all audit guidelines.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <User size={16} />
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                        Company Name
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Building2 size={16} />
                        </span>
                        <input
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Logistics Corp"
                          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {/* Business Email */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider">
                          Business Email
                        </label>
                        {formData.email && emailValidation.isValid && emailValidation.isProfessional && (
                          <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                            <Check size={12} /> Company Domain
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Mail size={16} />
                        </span>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                          onChange={handleEmailChange}
                          placeholder="john@company.com"
                          className={`w-full rounded-lg py-2.5 pl-10 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none transition ${
                            touched.email && emailValidation.error
                              ? "border border-rose-500/80 bg-slate-900/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/40"
                              : formData.email && emailValidation.isValid
                              ? "border border-emerald-500/70 bg-slate-900/60 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40"
                              : "border border-slate-700 bg-slate-900/60 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          {touched.email && emailValidation.error ? (
                            <AlertCircle size={16} className="text-rose-400" />
                          ) : formData.email && emailValidation.isValid ? (
                            <CheckCircle2 size={16} className="text-emerald-400" />
                          ) : null}
                        </div>
                      </div>

                      {touched.email && emailValidation.error && (
                        <div className="space-y-1 mt-1">
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
                        <p className="text-[11px] text-amber-400/90 leading-tight mt-1">
                          {emailValidation.warning}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider">
                          Phone Number
                        </label>
                        {formData.phone && phoneValidation.isValid && (
                          <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                            <Check size={12} /> Valid 10-Digit
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Phone size={16} />
                        </span>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                          onChange={handlePhoneChange}
                          placeholder="(555) 000-0000"
                          className={`w-full rounded-lg py-2.5 pl-10 pr-10 text-sm text-white placeholder-slate-500 focus:outline-none transition ${
                            touched.phone && phoneValidation.error
                              ? "border border-rose-500/80 bg-slate-900/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/40"
                              : formData.phone && phoneValidation.isValid
                              ? "border border-emerald-500/70 bg-slate-900/60 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40"
                              : "border border-slate-700 bg-slate-900/60 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400"
                          }`}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          {touched.phone && phoneValidation.error ? (
                            <AlertCircle size={16} className="text-rose-400" />
                          ) : formData.phone && phoneValidation.isValid ? (
                            <CheckCircle2 size={16} className="text-emerald-400" />
                          ) : null}
                        </div>
                      </div>

                      {touched.phone && phoneValidation.error && (
                        <p className="text-[11px] text-rose-400 flex items-start gap-1 leading-tight mt-1">
                          <span>•</span>
                          <span>{phoneValidation.error}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                        Fleet Size (Drivers)
                      </label>
                      <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                          <Truck size={16} />
                        </span>
                        <select
                          value={formData.fleetSize}
                          onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-2.5 pl-10 pr-4 text-sm text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        >
                          <option value="1-5">1 - 5 Vehicles</option>
                          <option value="5-20">5 - 20 Vehicles</option>
                          <option value="21-100">21 - 100 Vehicles</option>
                          <option value="101-500">101 - 500 Vehicles</option>
                          <option value="500+">500+ Vehicles (Enterprise)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">
                        Your Job Title
                      </label>
                      <div className="relative">
                        <select
                          value={formData.role}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="w-full rounded-lg border border-slate-700 bg-slate-900/60 py-2.5 px-4 text-sm text-white focus:border-emerald-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                        >
                          <option value="Fleet Manager">Fleet Manager</option>
                          <option value="Safety Director">Director of Safety</option>
                          <option value="Compliance Officer">Compliance Officer</option>
                          <option value="Owner/Operator">Owner / Operator</option>
                          <option value="Executive">Executive / VP</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || (touched.email && !emailValidation.isValid) || (touched.phone && !phoneValidation.isValid)}
                    className="relative mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 px-5 py-3 text-sm font-semibold text-[#030d1b] shadow-lg shadow-emerald-500/20 hover:brightness-110 active:scale-98 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#030d1b] border-t-transparent" />
                    ) : (
                      <>
                        <span>Confirm Live Demo Booking</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={40} className="animate-pulse" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">
                  Demo Package Reserved!
                </h3>
                <p className="mt-3 text-sm text-slate-300">
                  Welcome to <span className="font-semibold text-emerald-400">Fleet Integra LLC</span>, {formData.name}.
                </p>
                <p className="mt-2 text-xs text-slate-400 max-w-sm mx-auto">
                  A DOT & Fleet Advisor will contact you at <span className="text-slate-300 font-mono">{formData.phone}</span> or <span className="text-slate-300 font-mono">{formData.email}</span> within 15 minutes to confirm your custom system walkthrough.
                </p>

                <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 text-left">
                  <div className="flex gap-3">
                    <Calendar className="h-5 w-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                        Next Steps - Instant Compliance Review
                      </h4>
                      <p className="mt-1 text-xs text-slate-300">
                        In addition to your demo, we will generate a free DOT compliance risk profile for <span className="font-semibold">{formData.company}</span>.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsSuccess(false);
                    onClose();
                  }}
                  className="mt-6 font-semibold text-xs text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4"
                >
                  Close & return to page
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
