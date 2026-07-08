import { ArrowRight, FileText, Settings, UserCheck, Zap, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingItem {
  name: string;
  price: string;
  note?: string;
}

const setupServices: PricingItem[] = [
  { name: "Drug & Alcohol Consortium + Portal", price: "$100" },
  { name: "IFTA Account Setup + Decals", price: "$200" },
  { name: "FMCSA Portal Setup", price: "$150" },
  { name: "CT Permit Account", price: "$100" },
  { name: "KY Account + Fleet Addition", price: "Starting at $100" },
  { name: "NM Permit Account + Permits", price: "Starting at $100" },
  { name: "New York HUT Account + Permits", price: "Starting at $100" },
  { name: "MCS-150 Form Update", price: "$100" },
  { name: "PSP Portal Setup", price: "$100" },
  { name: "UCR Filing", price: "$100 service fee" },
  { name: "Clearinghouse Account Setup", price: "$150" },
  { name: "Oregon Account Setup", price: "$100" },
  { name: "Oregon Permits", price: "$50 per request" },
  { name: "PrePass Account Setup", price: "$100" },
  { name: "California CAB + Adding Trucks", price: "Starting at $100" },
  { name: "MVR Account Setup", price: "$100" },
  { name: "MVR One-Time Order", price: "$75" },
  { name: "MC/DOT Company Opening (New Authority)", price: "Starting at $700" }
];

const recurringServices: PricingItem[] = [
  { name: "Full Driver DQF Preparation", price: "$100 per driver" },
  { name: "IFTA Quarterly Filing (NJ, NY, CT, NM, KY)", price: "$25 per truck" },
  { name: "IFTA Annual Renewal / Changes / Adding Trucks", price: "Starting at $150" },
  { name: "2290 Filing (HVUT)", price: "$75 service fee", note: "Includes service/processing fee only. Tax amount, if applicable, is separate." }
];

const addons: PricingItem[] = [
  { name: "Expedited Completion", price: "Available by request" },
  { name: "After-Hours or Weekend Handling", price: "Custom quote" },
  { name: "Multi-Truck Batch Processing", price: "Custom quote" },
  { name: "Document Cleanup / Missing Information Chase", price: "Custom quote" },
  { name: "Same-Day Review Call", price: "Available by request" },
  { name: "Corrective Action Packet", price: "Custom quote" },
  { name: "Physical Mailing / Certified Mail Handling", price: "Pass-through + handling" },
  { name: "Partner or Vendor Coordination", price: "Custom quote" }
];

export default function PricingPage() {
  return (
    <div className="font-sans bg-[#020712] min-h-screen text-slate-100 pb-20">
      
      {/* Header Section */}
      <section className="bg-[#030d1b] pt-20 pb-16 relative overflow-hidden border-b border-blue-950/40">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-6">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
            Services & Pricing
          </h1>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed max-w-2xl mx-auto">
            Overview of standard compliance, permit, registration, and fleet-support service fees.
          </p>
          
          <div className="mt-8 bg-[#020712]/50 border border-blue-900/30 rounded-xl p-5 text-sm text-slate-400 text-left flex gap-4 max-w-3xl mx-auto shadow-inner">
            <Info className="flex-shrink-0 text-sky-400 mt-0.5" size={18} />
            <p className="leading-relaxed">
              Prices shown are starting service fees and may vary based on fleet size, filing complexity, state requirements, missing documentation, and turnaround needs. Government filing fees, state fees, taxes, third-party vendor fees, and pass-through charges are not included unless specifically stated.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 mt-12 space-y-16">

        {/* Section 1 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <Settings className="text-sky-400" size={24} />
            <h2 className="font-display text-2xl font-bold text-white">Compliance Setup Services</h2>
          </div>
          
          <div className="bg-[#030d1b] border border-slate-800/60 rounded-xl overflow-hidden shadow-xl">
            <div className="divide-y divide-slate-800/60">
              {setupServices.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 hover:bg-[#071329] transition-colors">
                  <div className="font-medium text-slate-200">{item.name}</div>
                  <div className="text-sky-400 font-mono text-sm mt-1 sm:mt-0 font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <UserCheck className="text-emerald-400" size={24} />
            <h2 className="font-display text-2xl font-bold text-white">Driver & Recurring Services</h2>
          </div>
          
          <div className="bg-[#030d1b] border border-slate-800/60 rounded-xl overflow-hidden shadow-xl">
            <div className="divide-y divide-slate-800/60">
              {recurringServices.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 hover:bg-[#071329] transition-colors gap-2">
                  <div>
                    <div className="font-medium text-slate-200">{item.name}</div>
                    {item.note && (
                      <div className="text-xs text-slate-500 mt-1">{item.note}</div>
                    )}
                  </div>
                  <div className="text-emerald-400 font-mono text-sm font-semibold flex-shrink-0">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
            <Zap className="text-rose-400" size={24} />
            <h2 className="font-display text-2xl font-bold text-white">Add-Ons & Expedited Support</h2>
          </div>
          
          <div className="bg-[#030d1b] border border-slate-800/60 rounded-xl overflow-hidden shadow-xl">
            <div className="divide-y divide-slate-800/60">
              {addons.map((item, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 md:p-5 hover:bg-[#071329] transition-colors">
                  <div className="font-medium text-slate-300">{item.name}</div>
                  <div className="text-rose-300 font-mono text-sm mt-1 sm:mt-0 font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
            <div className="bg-slate-900/50 p-4 text-xs text-slate-400 text-center border-t border-slate-800/60 italic">
              Add-ons are optional and are intended for urgent, complex, after-hours, or unusually document-heavy requests.
            </div>
          </div>
        </div>

      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 mt-20">
        <div className="relative rounded-2xl border border-emerald-900/30 bg-gradient-to-tr from-[#031024] to-[#04203a] p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">
              Need help choosing the right service?
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Send us your fleet size, state requirements, and compliance issue. We’ll confirm the right service path before invoicing.
            </p>
            <Link 
              to="/contact"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-8 py-3.5 text-sm font-bold text-[#030d1b] hover:bg-emerald-300 transition shadow-lg hover:shadow-emerald-500/20"
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
