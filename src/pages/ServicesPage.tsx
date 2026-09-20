import FeaturesPreview from "../components/FeaturesPreview";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  return (
    <div className="font-sans">
      <section className="bg-[#030d1b] pt-16 pb-16 md:pt-24 md:pb-20 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8">
            Fleet Integra Compliance Services
          </h1>
          <div className="flex justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-slate-900 border border-slate-800 px-6 py-3 text-sm font-semibold text-sky-400 hover:bg-slate-800 transition shadow-sm">
              Request a Custom Compliance Quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <FeaturesPreview />

      {/* CTA Section */}
      <section className="bg-[#020712] py-20 md:py-28 border-t border-blue-950/40">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-8">
            Ready to secure your fleet?
          </h2>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-8 py-4 text-base font-bold text-[#030d1b] hover:bg-emerald-300 transition"
          >
            <span>Request Remote Safety Support</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
