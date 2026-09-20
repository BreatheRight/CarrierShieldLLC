import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle, ArrowRight, AlertCircle, Check } from "lucide-react";
import { submitContactForm, buildMailtoUrl } from "../services/contactService";
import { formatPhoneNumber, validatePhoneNumber, validateEmail } from "../utils/validation";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionFeedback, setSubmissionFeedback] = useState<string>("");
  const [allowPersonalEmail, setAllowPersonalEmail] = useState(false);
  const [touched, setTouched] = useState({ email: false, phone: false });
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    fleetSize: "",
    serviceInterest: "Remote Safety Support",
    message: ""
  });

  const emailValidation = validateEmail(formData.email, allowPersonalEmail);
  const phoneValidation = validatePhoneNumber(formData.phone);

  const handleChange = (e: import("react").ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData(prev => ({ ...prev, phone: formatted }));
      if (!touched.phone && value.length > 2) {
        setTouched(prev => ({ ...prev, phone: true }));
      }
    } else if (name === "email") {
      setFormData(prev => ({ ...prev, email: value }));
      if (!touched.email && value.length > 3) {
        setTouched(prev => ({ ...prev, email: true }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
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
      const response = await submitContactForm({
        ...formData,
        source: "Contact Page Form",
      });

      setSubmissionFeedback(response.message);
      setIsSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans bg-[#020712] min-h-screen">
      <section className="pt-16 pb-20 md:pt-24 md:pb-28 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Left side info */}
            <div className="space-y-10 pt-4">
              <div>
                <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
                  Let's Discuss Your Fleet's Compliance Needs
                </h1>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                  Whether you're a new entrant looking to launch correctly or an established fleet needing to outsource safety management, our experts are ready to help.
                </p>
              </div>

              <div className="space-y-6 text-slate-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-sky-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</h4>
                    <a href="tel:+12012937774" className="text-lg font-bold text-white hover:text-sky-400 transition">
                      +1 (201) 293-7774
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Support</h4>
                    <a href="mailto:support@fleetintegra.com" className="text-lg font-bold text-white hover:text-emerald-400 transition">
                      support@fleetintegra.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-indigo-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Headquarters</h4>
                    <p className="text-lg font-bold text-white">
                      1101 Avenue U<br />Brooklyn, NY 11235
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-[#030d1b] border border-blue-900/30 p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl relative">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none rounded-2xl" />
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 relative z-10">
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-2">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Inquiry Forwarded</h3>
                  <p className="text-slate-300 text-sm max-w-md">
                    {submissionFeedback || "Thank you! Your message has been routed to our safety and compliance team at sales@fleetintegra.com, and a confirmation receipt has been sent to your email."}
                  </p>
                  <p className="text-slate-400 text-xs mt-2">
                    A dedicated safety specialist will review your fleet profile and contact you shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
                    <a
                      href={buildMailtoUrl({ ...formData, source: "Contact Page Fallback" })}
                      className="inline-flex items-center gap-2 rounded-lg bg-sky-500/10 border border-sky-500/30 px-4 py-2 text-xs font-semibold text-sky-400 hover:bg-sky-500/20 transition"
                    >
                      <Mail size={14} />
                      <span>Email sales@fleetintegra.com Directly</span>
                    </a>
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          company: "",
                          email: "",
                          phone: "",
                          fleetSize: "",
                          serviceInterest: "Remote Safety Support",
                          message: ""
                        });
                      }}
                      className="text-slate-400 text-xs font-semibold hover:text-white transition px-3 py-2"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300 ml-1">Full Name</label>
                      <input required type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-[#020712] border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-sky-500/50 transition text-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-xs font-semibold text-slate-300 ml-1">Company</label>
                      <input required type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full bg-[#020712] border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-sky-500/50 transition text-sm" placeholder="Acme Logistics LLC" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Business Email */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between ml-1">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-300">Business Email</label>
                        {formData.email && emailValidation.isValid && emailValidation.isProfessional && (
                          <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                            <Check size={12} /> Company Domain
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          required
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                          onChange={handleChange}
                          className={`w-full bg-[#020712] rounded-lg px-4 py-2.5 pr-10 text-white focus:outline-none transition text-sm ${
                            touched.email && emailValidation.error
                              ? "border border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/40"
                              : formData.email && emailValidation.isValid
                              ? "border border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40"
                              : "border border-slate-800 focus:border-sky-500/50"
                          }`}
                          placeholder="john@acme.com"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          {touched.email && emailValidation.error ? (
                            <AlertCircle size={16} className="text-rose-400" />
                          ) : formData.email && emailValidation.isValid ? (
                            <CheckCircle size={16} className="text-emerald-400" />
                          ) : null}
                        </div>
                      </div>

                      {touched.email && emailValidation.error && (
                        <div className="space-y-1 ml-1">
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
                              Independent owner-operator? Click here to use personal email
                            </button>
                          )}
                        </div>
                      )}
                      {emailValidation.warning && (
                        <p className="text-[11px] text-amber-400/90 leading-tight ml-1">
                          {emailValidation.warning}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between ml-1">
                        <label htmlFor="phone" className="text-xs font-semibold text-slate-300">Phone Number</label>
                        {formData.phone && phoneValidation.isValid && (
                          <span className="text-[11px] font-medium text-emerald-400 flex items-center gap-1">
                            <Check size={12} /> Valid 10-Digit
                          </span>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          required
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                          onChange={handleChange}
                          className={`w-full bg-[#020712] rounded-lg px-4 py-2.5 pr-10 text-white focus:outline-none transition text-sm ${
                            touched.phone && phoneValidation.error
                              ? "border border-rose-500/80 focus:border-rose-400 focus:ring-1 focus:ring-rose-400/40"
                              : formData.phone && phoneValidation.isValid
                              ? "border border-emerald-500/70 focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400/40"
                              : "border border-slate-800 focus:border-sky-500/50"
                          }`}
                          placeholder="(555) 123-4567"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          {touched.phone && phoneValidation.error ? (
                            <AlertCircle size={16} className="text-rose-400" />
                          ) : formData.phone && phoneValidation.isValid ? (
                            <CheckCircle size={16} className="text-emerald-400" />
                          ) : null}
                        </div>
                      </div>

                      {touched.phone && phoneValidation.error && (
                        <p className="text-[11px] text-rose-400 flex items-start gap-1 leading-tight ml-1">
                          <span>•</span>
                          <span>{phoneValidation.error}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="fleetSize" className="text-xs font-semibold text-slate-300 ml-1">Fleet Size</label>
                      <select required id="fleetSize" name="fleetSize" value={formData.fleetSize} onChange={handleChange} className="w-full bg-[#020712] border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-sky-500/50 transition text-sm appearance-none">
                        <option value="" disabled>Select size</option>
                        <option value="1-5">1 - 5 Trucks</option>
                        <option value="6-15">6 - 15 Trucks</option>
                        <option value="16-50">16 - 50 Trucks</option>
                        <option value="51+">51+ Trucks</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="serviceInterest" className="text-xs font-semibold text-slate-300 ml-1">Service Interest</label>
                      <select required id="serviceInterest" name="serviceInterest" value={formData.serviceInterest} onChange={handleChange} className="w-full bg-[#020712] border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-sky-500/50 transition text-sm appearance-none">
                        <option value="Remote Safety Support">Remote Safety Support</option>
                        <option value="New Carrier Launch">New Carrier Launch</option>
                        <option value="Permits & Registration">Permits & Registration</option>
                        <option value="Audit Preparation">Audit Preparation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300 ml-1">Message</label>
                    <textarea required id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full bg-[#020712] border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-500/50 transition text-sm resize-none" placeholder="Tell us about your current compliance needs..." />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || (touched.email && !emailValidation.isValid) || (touched.phone && !phoneValidation.isValid)}
                    className="w-full bg-emerald-400 hover:bg-emerald-300 disabled:opacity-50 disabled:cursor-not-allowed text-[#030d1b] font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition duration-200 mt-2 cursor-pointer shadow-lg shadow-emerald-950/40"
                  >
                    {isSubmitting ? (
                      <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#030d1b] border-t-transparent" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
