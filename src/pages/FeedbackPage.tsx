import { MessageSquarePlus, ShieldCheck, Mail, ArrowLeft, Bug } from "lucide-react";
import { Link } from "react-router-dom";
import FeedbackFlowApplet from "../components/FeedbackFlowApplet";

export default function FeedbackPage() {
  return (
    <div className="font-sans bg-[#020712] min-h-screen text-slate-100 flex flex-col justify-between">
      {/* Decorative ambient background glows */}
      <div className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-24">
        <div className="absolute top-0 left-1/2 w-[700px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          {/* Breadcrumb & Back Link */}
          <div className="mb-6 flex items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-sky-400 transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-mono text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                <ShieldCheck size={12} />
                <span>Live Resend Pipeline</span>
              </span>
            </div>
          </div>

          {/* Page Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold mb-3">
              <MessageSquarePlus size={13} />
              <span>Feedback &amp; Issue Reporting</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
              Help Us Improve Fleet Integra
            </h1>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Encountered a bug, have an idea for a compliance feature, or want to share thoughts?
              Follow the quick flow below to send your report directly to our development team.
            </p>
          </div>

          {/* Applet Centered Container */}
          <div className="flex justify-center items-center">
            <FeedbackFlowApplet />
          </div>

          {/* Bottom Security / Routing Info */}
          <div className="mt-12 text-center text-xs text-slate-500 flex flex-wrap items-center justify-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail size={13} className="text-sky-400" />
              <span>Dispatched securely to <strong className="text-slate-300 font-mono">sales@fleetintegra.com</strong></span>
            </span>
            <span className="hidden sm:inline text-slate-700">&bull;</span>
            <span className="flex items-center gap-1.5">
              <Bug size={13} className="text-emerald-400" />
              <span>Screenshots &amp; diagnostic logs auto-attached via Resend</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
