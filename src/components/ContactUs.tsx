import { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight, Building2, User, Truck, MessageSquare } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    fleetSize: "1-5",
    inquiryType: "General Inquiry",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: import("react").FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#030d1b] py-24 md:py-32 relative">
      {/* Background flare */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info & Value Prop */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#38bdf8]">
                Get in Touch
              </span>
              <h2 className="mt-2 font-display text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Ready to Simplify Your Compliance?
              </h2>
              <p className="mt-4 text-slate-300 text-sm md:text-base leading-relaxed max-w-md">
                Whether you need immediate audit support or are looking to outsource your entire safety department, our FMCSA experts are ready to assist you.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="bg-[#071329] p-3 rounded-lg border border-blue-950/40 text-emerald-400">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Direct Phone</h4>
                  <p className="text-slate-400 text-sm">Call us directly. We are available 24/7 for urgent DOT matters.</p>
                  <a href="tel:+17187185395" className="text-[#38bdf8] font-bold text-sm block mt-1 hover:underline">
                    +1 (718) 718-5395
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#071329] p-3 rounded-lg border border-blue-950/40 text-sky-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Email Support</h4>
                  <p className="text-slate-400 text-sm">Send us a message and our compliance team will respond within 24 hours.</p>
                  <a href="mailto:support@nationalsolutions.com" className="text-[#38bdf8] font-bold text-sm block mt-1 hover:underline">
                    support@nationalsolutions.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#071329] p-3 rounded-lg border border-blue-950/40 text-indigo-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Corporate Headquarters</h4>
                  <p className="text-slate-400 text-sm">100 Fleet St, Brooklyn, NY 11204<br/>United States</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-[#071329] border border-blue-900/30 rounded-2xl p-6 md:p-8 shadow-2xl">
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Message Received</h3>
                <p className="text-slate-300 text-sm max-w-xs mx-auto">
                  Thank you for reaching out. One of our compliance specialists will contact you shortly.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="mt-4 text-emerald-400 text-sm font-bold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <User size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-slate-900/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Company Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Building2 size={16} />
                      </div>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full bg-slate-900/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-colors"
                        placeholder="Logistics Inc."
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Fleet Size
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <Truck size={16} />
                      </div>
                      <select
                        value={formData.fleetSize}
                        onChange={(e) => setFormData({...formData, fleetSize: e.target.value})}
                        className="w-full bg-slate-900/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none appearance-none transition-colors"
                      >
                        <option value="1-5">1 - 5 Trucks</option>
                        <option value="6-20">6 - 20 Trucks</option>
                        <option value="21-50">21 - 50 Trucks</option>
                        <option value="51-100">51 - 100 Trucks</option>
                        <option value="101+">101+ Trucks</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
                        <MessageSquare size={16} />
                      </div>
                      <select
                        value={formData.inquiryType}
                        onChange={(e) => setFormData({...formData, inquiryType: e.target.value})}
                        className="w-full bg-slate-900/60 border border-slate-700 rounded-lg py-2.5 pl-10 pr-4 text-sm text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none appearance-none transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="DOT Audit Support">DOT Audit Support</option>
                        <option value="Safety & Compliance Packages">Safety & Compliance Packages</option>
                        <option value="Permits & Registration">Permits & Registration</option>
                        <option value="Drug & Alcohol Consortium">Drug & Alcohol Consortium</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-slate-900/60 border border-slate-700 rounded-lg py-3 px-4 text-sm text-white focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 focus:outline-none transition-colors resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 active:scale-98 transition duration-200 disabled:opacity-75 mt-2"
                >
                  {isSubmitting ? (
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#030d1b] border-t-transparent" />
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
