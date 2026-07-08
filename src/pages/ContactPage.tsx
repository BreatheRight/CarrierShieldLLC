import { useState } from "react";
import { Send, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    fleetSize: "",
    serviceInterest: "Remote Safety Support",
    message: ""
  });

  const handleChange = (e: import("react").ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: import("react").FormEvent) => {
    e.preventDefault();
    // Use mailto for client-side sending
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.company}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Fleet Size: ${formData.fleetSize}
Service Interest: ${formData.serviceInterest}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:thatonestatue@proton.me?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <div className="font-sans bg-[#020712] min-h-screen">
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
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
                    <a href="tel:718-918-8373" className="text-lg font-bold text-white hover:text-sky-400 transition">
                      718-918-8373
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-slate-900 border border-slate-800 text-emerald-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Support</h4>
                    <a href="mailto:support@valora.com" className="text-lg font-bold text-white hover:text-emerald-400 transition">
                      support@valora.com
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
                      424 Oceanic Pkwy<br />Brooklyn, NY 11225
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side form */}
            <div className="bg-[#030d1b] border border-blue-900/30 p-8 md:p-10 rounded-2xl shadow-2xl relative">
              <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none rounded-2xl" />
              
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 relative z-10">
                  <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 mb-2">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Message Initiated</h3>
                  <p className="text-slate-300">Your email client should open shortly. If not, please reach out to us at thatonestatue@proton.me.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sky-400 text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
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
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300 ml-1">Business Email</label>
                      <input required type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-[#020712] border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-sky-500/50 transition text-sm" placeholder="john@acme.com" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-slate-300 ml-1">Phone Number</label>
                      <input required type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-[#020712] border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-sky-500/50 transition text-sm" placeholder="(555) 123-4567" />
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

                  <button type="submit" className="w-full bg-emerald-400 hover:bg-emerald-300 text-[#030d1b] font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition duration-200 mt-2">
                    <span>Send Message</span>
                    <Send size={16} />
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
